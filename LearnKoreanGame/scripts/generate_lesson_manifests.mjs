import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const scriptsDirectory = path.dirname(fileURLToPath(import.meta.url));
const rootDirectory = path.resolve(scriptsDirectory, "..");

function serializeGlobal(name, value) {
    return `window.${name} = ${JSON.stringify(value, null, 2)};\n`;
}

for (let level = 1; level <= 4; level += 1) {
    const sourcePath = path.join(rootDirectory, `lesson_data_l${level}.js`);
    const source = await fs.readFile(sourcePath, "utf8");
    const context = {};
    context.window = context;
    context.globalThis = context;
    vm.createContext(context);
    vm.runInContext(`${source}\nglobalThis.__lessonData = lessonGuideL${level};`, context, { filename: sourcePath });

    const lessonData = context.__lessonData;
    const searchIndex = {};
    const lessons = lessonData.lessons.map(lesson => {
        const { searchText = "", ...metadata } = lesson;
        searchIndex[lesson.id] = searchText;
        return metadata;
    });

    await fs.writeFile(
        path.join(rootDirectory, `lesson_manifest_l${level}.js`),
        serializeGlobal(`lessonGuideL${level}`, { ...lessonData, lessons })
    );
    await fs.writeFile(
        path.join(rootDirectory, `lesson_search_l${level}.js`),
        serializeGlobal(`lessonGuideL${level}Search`, searchIndex)
    );
}

console.log("Generated lesson manifests and search indexes for L1-L4");
