import json

with open("grammar_data.js", "r", encoding="utf-8") as f:
    txt = f.read()
    data_str = txt[txt.index("["):txt.rindex("]")+1]
    data = json.loads(data_str)

changes = 0

for item in data:
    for rule in item.get("rules", []):
        if isinstance(rule, dict):
            # ZH replacements
            if "zh" in rule:
                orig = rule["zh"]
                new_zh = orig.replace("동: ", "动词+").replace("형: ", "形容词+").replace("명: ", "名词+")
                if new_zh != orig:
                    rule["zh"] = new_zh
                    changes += 1

            # EN replacements
            if "en" in rule:
                orig_en = rule["en"]
                new_en = orig_en.replace("Verb: ", "Verb + ").replace("Adj: ", "Adj + ").replace("Noun: ", "Noun + ")
                if new_en != orig_en:
                    rule["en"] = new_en
                    changes += 1

with open("grammar_data.js", "w", encoding="utf-8") as f:
    f.write(f"// KIIP Grammar Database (Updated to KIIP 2021+ New Curriculum Levels, Total: {len(data)})\n")
    f.write("const grammarDB = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")

print(f"Fixed {changes} colon rules.")
