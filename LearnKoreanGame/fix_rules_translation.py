import json
import re

with open("grammar_data.js", "r", encoding="utf-8") as f:
    txt = f.read()
    data_str = txt[txt.index("["):txt.rindex("]")+1]
    data = json.loads(data_str)

zh_replacements = {
    "동사": "动词",
    "명사": "名词",
    "형용사": "形容词",
    "동/형": "动/形",
    "받침": "收音",
    "무받침": "无收音",
    "과거": "过去式",
    "현재": "现在式",
    "미래": "将来式",
    "모음": "元音",
    "자음": "辅音",
    "기본형": "原形",
    "부정": "否定"
}

en_replacements = {
    "동사": "Verb",
    "명사": "Noun",
    "형용사": "Adj",
    "동/형": "V/A",
    "받침": "Batchim",
    "무받침": "No Batchim",
    "과거": "Past",
    "현재": "Present",
    "미래": "Future",
    "모음": "Vowel",
    "자음": "Consonant",
    "기본형": "Base form",
    "부정": "Negative"
}

def replace_terms(text, replacements):
    for ko_term, new_term in replacements.items():
        text = text.replace(ko_term, new_term)
    return text

changes = 0

for item in data:
    for rule in item.get("rules", []):
        if isinstance(rule, dict):
            # Check ZH
            if "zh" in rule:
                original_zh = rule["zh"]
                new_zh = replace_terms(original_zh, zh_replacements)
                if new_zh != original_zh:
                    rule["zh"] = new_zh
                    changes += 1
            
            # Check EN
            if "en" in rule:
                original_en = rule["en"]
                new_en = replace_terms(original_en, en_replacements)
                if new_en != original_en:
                    rule["en"] = new_en
                    changes += 1

with open("grammar_data.js", "w", encoding="utf-8") as f:
    f.write(f"// KIIP Grammar Database (Updated to KIIP 2021+ New Curriculum Levels, Total: {len(data)})\n")
    f.write("const grammarDB = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")

print(f"Fixed {changes} rule strings across the database.")
