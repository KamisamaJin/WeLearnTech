import json
import re

with open("grammar_data.js", "r", encoding="utf-8") as f:
    txt = f.read()
    data_str = txt[txt.index("["):txt.rindex("]")+1]
    data = json.loads(data_str)

hangul_pattern = re.compile(r'[\uac00-\ud7a3]+')

untranslated_zh = set()
untranslated_en = set()

for item in data:
    for rule in item.get("rules", []):
        if isinstance(rule, dict):
            # Check ZH
            if "zh" in rule:
                parts = rule["zh"].split("+")
                if len(parts) > 1:
                    before_plus = parts[0].strip()
                    if hangul_pattern.search(before_plus):
                        untranslated_zh.add(before_plus)
            
            # Check EN
            if "en" in rule:
                parts = rule["en"].split("+")
                if len(parts) > 1:
                    before_plus = parts[0].strip()
                    if hangul_pattern.search(before_plus):
                        untranslated_en.add(before_plus)

print("ZH Untranslated before +:")
for s in untranslated_zh: print(f" - {s}")

print("\nEN Untranslated before +:")
for s in untranslated_en: print(f" - {s}")
