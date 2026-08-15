import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.resolve(scriptDir, "../grammar_data.js");

function readGrammarData() {
    const source = fs.readFileSync(dataPath, "utf8");
    const context = {};
    vm.createContext(context);
    vm.runInContext(`${source}\nthis.__grammarDB = grammarDB;`, context, { filename: dataPath });
    return context.__grammarDB;
}

function parseNotes(notes) {
    const localized = { "zh-CN": [], en: [] };
    let locale = null;

    String(notes || "").split(/\r?\n/).forEach(rawLine => {
        const line = rawLine.trim();
        if (!line) return;

        if (line.includes("⚠")) {
            locale = "zh-CN";
            const content = line.replace(/^.*?核心考点解析[：:]?\s*/, "").trim();
            if (content) localized[locale].push(content);
            return;
        }
        if (line.includes("💡")) {
            locale = "en";
            const content = line.replace(/^.*?Deep Dive Tips[：:]?\s*/i, "").trim();
            if (content) localized[locale].push(content);
            return;
        }
        if (!locale) throw new Error(`Note content appeared before a language marker: ${line}`);

        localized[locale].push(line.replace(/^[•-]\s*/, "").trim());
    });

    return localized;
}

function migrateItem(item) {
    if (item.translations?.["zh-CN"] && item.translations?.en) return item;

    const notes = parseNotes(item.notes);
    return {
        id: item.id,
        category: item.category,
        level: item.level,
        title: item.title,
        examples: item.examples.map(example => ({
            ko: example.ko,
            translations: {
                "zh-CN": example.zh,
                en: example.en,
            },
        })),
        translations: {
            "zh-CN": {
                description: item.desc_zh,
                meaning: item.meaning_zh,
                rules: item.rules.map(rule => typeof rule === "object" ? rule.zh : String(rule)),
                notes: notes["zh-CN"],
            },
            en: {
                description: item.desc,
                meaning: item.meaning_en,
                rules: item.rules.map(rule => typeof rule === "object" ? rule.en : String(rule)),
                notes: notes.en,
            },
        },
    };
}

function validate(items) {
    const ids = new Set();
    const errors = [];

    items.forEach((item, itemIndex) => {
        const ref = item.id || `item ${itemIndex}`;
        if (!item.id || ids.has(item.id)) errors.push(`${ref}: missing or duplicate id`);
        ids.add(item.id);
        ["category", "level", "title"].forEach(key => {
            if (!item[key]) errors.push(`${ref}: missing ${key}`);
        });
        if (!Array.isArray(item.examples) || !item.examples.length) errors.push(`${ref}: missing examples`);

        ["zh-CN", "en"].forEach(locale => {
            const translation = item.translations?.[locale];
            if (!translation?.description) errors.push(`${ref}: missing ${locale} description`);
            if (!translation?.meaning) errors.push(`${ref}: missing ${locale} meaning`);
            if (!translation?.rules?.length) errors.push(`${ref}: missing ${locale} rules`);
            if (!translation?.notes?.length) errors.push(`${ref}: missing ${locale} notes`);
            item.examples?.forEach((example, exampleIndex) => {
                if (!example.ko) errors.push(`${ref}: example ${exampleIndex} missing Korean`);
                if (!example.translations?.[locale]) {
                    errors.push(`${ref}: example ${exampleIndex} missing ${locale} translation`);
                }
            });
        });
    });

    if (errors.length) throw new Error(`Grammar data validation failed:\n${errors.join("\n")}`);
}

const grammarDB = readGrammarData().map(migrateItem);
validate(grammarDB);

const output = `// KIIP Grammar Database (181 entries, localized for Chinese and English)\nconst grammarDB = ${JSON.stringify(grammarDB, null, 4)};\n`;
fs.writeFileSync(dataPath, output);
console.log(`Migrated and validated ${grammarDB.length} grammar entries.`);
