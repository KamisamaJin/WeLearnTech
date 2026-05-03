import json

# KIIP 2021+ New Curriculum Approximate Mapping
# This maps the grammar points to their new levels (L1 = 기초/초급1, L2 = 초급2, L3 = 중급1, L4 = 중급2)
new_level_mapping = {
    # L1 (초급 1 & 기초) - Basic Particles, Tenses, simple connectives
    "~이다/아니다": "L1", "~이/가": "L1", "~은/는": "L1", "~을/를": "L1",
    "~에 (장소/시간)": "L1", "~에서": "L1", "~도": "L1", "~만": "L1",
    "~하고": "L1", "~(으)로": "L1", "~에게/께": "L1", "~부터 ~까지": "L1",
    "~에서 ~까지": "L1", "~마다": "L1", "~보다": "L1", "~(이)나": "L1",
    "~아/어요": "L1", "~습니다/ㅂ니다": "L1", "~았/었": "L1", "~(으)ㄹ 거예요": "L1",
    "안 + V/A": "L1", "~지 않다": "L1", "~지 못하다 / 못": "L1",
    "~고": "L1", "~아/어서": "L1", "~(으)니까": "L1", "~지만": "L1",
    "~(으)러 가다/오다": "L1", "~고 싶다": "L1", "~(으)세요": "L1", "~지 마세요": "L1",
    "~(으)ㄹ 수 있다/없다": "L1", "~아/어야 하다": "L1", "~(으)ㄹ까요?": "L1", "~(으)ㅂ시다": "L1",
    "~아/어 주다": "L1",
    
    # L2 (초급 2) - Modifiers, Experiences, Intentions, Permissions
    "~는 (동사 관형형)": "L2", "~(으)ㄴ (형/동 관형형)": "L2", "~(으)ㄹ (미래 관형형)": "L2",
    "~(으)ㄹ 줄 알다/모르다": "L2", "~(으)시~": "L2", "~께서": "L2",
    "~아/어 보다": "L2", "~(으)ㄴ 적이 있다/없다": "L2",
    "~(으)려고 하다": "L2", "~(으)려고": "L2", "~(으)면": "L2", "~(으)려면": "L2",
    "~거나": "L2", "~기 전에": "L2", "~(으)ㄴ 후에": "L2", "~고 나서": "L2",
    "~(으)면서": "L2", "~는 동안": "L2", "~아/어도 되다": "L2", "~(으)면 안 되다": "L2",
    "~게": "L2", "~기 때문에": "L2", "~(으)ㄴ/는데": "L2", "~지요?": "L2",
    "~군요/는군요": "L2", "~네요": "L2", "~(으)ㄹ게요": "L2", "~(으)ㄹ래요": "L2",
    "~기 위해(서)": "L2",
    
    # L3 (중급 1) - Indirect Speech, Suppositions, Causatives/Passives basics, Complex connectives
    "~다고/라고 하다": "L3", "~냐고 하다": "L3", "~자고 하다": "L3", "~(으)라고 하다": "L3",
    "~대요/래요/재요": "L3", "~(으)ㄹ 테니까": "L3", "~(으)ㄹ 텐데": "L3",
    "~(으)ㄹ 것 같다": "L3", "~나 보다 / ~(으)ㄴ가 보다": "L3", "~(으)ㄴ/는 것 같다": "L3",
    "~느라고": "L3", "~길래": "L3", "~아/어 보이다": "L3", "~아/어 놓다": "L3",
    "~아/어 있다": "L3", "~(으)ㄴ 채(로)": "L3", "~던": "L3", "~았/었던": "L3",
    "~기로 하다": "L3", "~(으)ㄹ 겸": "L3", "~자마자": "L3", "~기가 무섭게": "L3",
    "~다가": "L3", "~는 편이다": "L3", "~(으)면 좋겠다": "L3", "~아/어 버리다": "L3",
    "~기기는요 / 기는요": "L3", "~는/(으)ㄴ 가요?": "L3", "~(이)라도": "L3", "~(으)ㄹ 수밖에 없다": "L3",
    "~(으)ㄴ/는 데다가": "L3", "~(으)ㄴ 지 (시간) 되다": "L3", "~잖아요": "L3",
    "~아/어지다": "L3", "~게 되다": "L3", "피동사 (Passive)": "L3", "사동사 (Causative)": "L3",
    "~게 하다": "L3",

    # L4 (중급 2) - Advanced Suppositions, Idiomatic expressions, Nuance
    "~(으)ㄹ 뿐만 아니라": "L4", "~(으)ㄹ 정도로": "L4", "~만 하다": "L4",
    "~(으)ㄹ 만하다": "L4", "~치고": "L4", "~(으)나 마나": "L4", "~기에(는)": "L4",
    "~기 마련이다": "L4", "~(이)야말로": "L4", "얼마나 ~는지 모르다": "L4",
    "~(으)ㄹ수록": "L4", "~든지 ~든지": "L4", "~느니 차라리": "L4",
    "~(으)ㄴ/는 척하다": "L4", "~(으)ㄹ 뻔하다": "L4", "~(으)ㄹ 걸 그랬다": "L4",
    "~았/었더라면": "L4", "~ㄴ/는다면": "L4", "~다니까": "L4", "~ㄴ/는다면서요?": "L4",
    "~(으)ㄹ지도 모르다": "L4", "~(으)ㄴ/는 셈이다": "L4", "~(으)ㄹ 리가 없다": "L4",
    "~(으)ㄹ까 봐": "L4", "~(으)려던 참이다": "L4", "~는 김에": "L4",
    "~탓에": "L4", "~바람에": "L4", "~(으)로 인해서": "L4", "~더라도": "L4",
    "~(으)ㄴ/는데도": "L4", "~아/어도": "L4", "~곤 하다": "L4", "~더니": "L4",
    "~았/었더니": "L4", "~(으)ㄹ래야 ~(으)ㄹ 수 없다": "L4"
}

with open("grammar_data.js", "r", encoding="utf-8") as f:
    txt = f.read()
    data_str = txt[txt.index("["):txt.rindex("]")+1]
    data = json.loads(data_str)

updated_count = 0
for item in data:
    title = item["title"]
    # Try exact match
    if title in new_level_mapping:
        if item["level"] != new_level_mapping[title]:
            item["level"] = new_level_mapping[title]
            updated_count += 1
    else:
        # Try partial match (strip spaces or look for keywords)
        for key, new_lvl in new_level_mapping.items():
            if key.replace("~", "").strip() in title.replace("~", "").strip():
                if item["level"] != new_lvl:
                    item["level"] = new_lvl
                    updated_count += 1
                break

with open("grammar_data.js", "w", encoding="utf-8") as f:
    f.write("// KIIP Grammar Database (Updated to KIIP 2021+ New Curriculum Levels)\n")
    f.write("const grammarDB = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")

print(f"Successfully remapped levels for {updated_count} grammar points based on New KIIP Curriculum!")
