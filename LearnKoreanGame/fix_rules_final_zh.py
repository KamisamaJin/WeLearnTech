import json

with open("grammar_data.js", "r", encoding="utf-8") as f:
    txt = f.read()
    data_str = txt[txt.index("["):txt.rindex("]")+1]
    data = json.loads(data_str)

changes = 0

for item in data:
    for rule in item.get("rules", []):
        if isinstance(rule, dict) and "zh" in rule:
            original = rule["zh"]
            new_val = original.replace("무收音", "无收音")
            new_val = new_val.replace("动词/형", "动词/形容词")
            # For 동+ and 형+, ensure we only replace exactly '동' and '형' before '+'
            # We can use simple replace since they appear right before the '+'
            new_val = new_val.replace("동+", "动词+")
            new_val = new_val.replace("형+", "形容词+")
            
            if new_val != original:
                rule["zh"] = new_val
                changes += 1

with open("grammar_data.js", "w", encoding="utf-8") as f:
    f.write(f"// KIIP Grammar Database (Updated to KIIP 2021+ New Curriculum Levels, Total: {len(data)})\n")
    f.write("const grammarDB = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")

print(f"Fixed {changes} remaining ZH rule substrings.")
