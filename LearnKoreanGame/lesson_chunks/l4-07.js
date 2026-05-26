(() => {
  const makeTips = (tips) => (tips || []).map((text) => {
    const [type, body] = text.includes(":") ? text.split(/:(.+)/) : ["collocation", text];
    return { type, text: body.trim() };
  });

  const vocabulary = [
    ["현대인의 질병", "现代人的疾病", "名词短语", "illnesses of modern people", "noun phrase", "현대인의 질병은 생활 습관과 관련이 깊어요.", "现代人的疾病和生活习惯关系很深。", "Modern illnesses are closely related to lifestyle habits.", "84", "단원 제목", ["collocation:현대인의 질병"]],
    ["질병", "疾病", "名词", "illness; disease", "noun", "질병을 예방하려면 생활 습관이 중요해요.", "要预防疾病，生活习惯很重要。", "Lifestyle habits are important for preventing disease.", "84", "단원 제목", ["collocation:질병을 예방하다"]],
    ["증상", "症状", "名词", "symptom", "noun", "증상이 심하면 병원에 가야 해요.", "症状严重的话应该去医院。", "If the symptoms are severe, you should go to the hospital.", "84", "단원 제목", ["collocation:증상이 심하다"]],
    ["병에 대해 조언하다", "就疾病给建议", "动词短语", "to give advice about an illness", "verb phrase", "친구의 병에 대해 조언해 보세요.", "请试着就朋友的病给建议。", "Try giving advice about your friend's illness.", "84", "활동", ["collocation:조언하다"]],
    ["생활 습관", "生活习惯", "名词", "lifestyle habit", "noun", "잘못된 생활 습관은 병을 부를 수 있어요.", "错误的生活习惯可能招来疾病。", "Bad lifestyle habits can lead to illness.", "84", "활동", ["collocation:잘못된 생활 습관"]],
    ["고열이 나다", "发高烧", "动词短语", "to have a high fever", "verb phrase", "고열이 나면 충분히 쉬어야 해요.", "发高烧的话要充分休息。", "If you have a high fever, you should rest enough.", "86", "어휘", ["collocation:고열이 나다"]],
    ["재채기를 하다", "打喷嚏", "动词短语", "to sneeze", "verb phrase", "감기에 걸려서 재채기를 자주 해요.", "因为感冒，经常打喷嚏。", "I sneeze often because I have a cold.", "86", "어휘", ["collocation:재채기를 하다"]],
    ["목이 따끔거리다", "嗓子刺痛", "动词短语", "to have a scratchy throat", "verb phrase", "목이 따끔거리면 따뜻한 물을 마셔 보세요.", "嗓子刺痛的话，试着喝温水。", "If your throat feels scratchy, try drinking warm water.", "86", "어휘", ["collocation:목이 따끔거리다"]],
    ["속이 쓰리다", "胃里灼痛", "动词短语", "to have heartburn; stomach burning", "verb phrase", "매운 음식을 먹었더니 속이 쓰려요.", "吃了辣的食物后胃里灼痛。", "After eating spicy food, my stomach burns.", "86", "어휘", ["collocation:속이 쓰리다"]],
    ["배가 더부룩하다", "肚子胀，不消化", "形容词短语", "to feel bloated", "adjective phrase", "야식을 먹고 잤더니 배가 더부룩해요.", "吃了夜宵就睡，结果肚子胀。", "I ate late at night and slept, so I feel bloated.", "86", "어휘", ["collocation:배가 더부룩하다"]],
    ["얼굴에 뭐가 나다", "脸上长东西", "动词短语", "to break out on one's face", "verb phrase", "요즘 얼굴에 뭐가 나서 피부과에 갔어요.", "最近脸上长东西，所以去了皮肤科。", "Something broke out on my face recently, so I went to a dermatologist.", "86", "어휘", ["collocation:얼굴에 뭐가 나다"]],
    ["어지럽다", "头晕", "形容词", "dizzy", "adjective", "갑자기 어지러워서 잠시 앉았어요.", "突然头晕，所以坐了一会儿。", "I suddenly felt dizzy and sat down for a moment.", "86", "어휘", ["collocation:어지럽다"]],
    ["다리가 붓다", "腿肿", "动词短语", "for one's leg to swell", "verb phrase", "오래 서 있었더니 다리가 부었어요.", "站了很久，腿肿了。", "I stood for a long time, so my legs swelled.", "86", "어휘", ["collocation:다리가 붓다"]],
    ["혈압이 높다", "血压高", "形容词短语", "to have high blood pressure", "adjective phrase", "혈압이 높으면 짠 음식을 줄이는 것이 좋아요.", "血压高的话，最好减少咸的食物。", "If your blood pressure is high, it is good to reduce salty foods.", "86", "어휘", ["collocation:혈압이 높다"]],
    ["비염", "鼻炎", "名词", "rhinitis", "noun", "비염 때문에 재채기를 많이 해요.", "因为鼻炎，经常打喷嚏。", "I sneeze a lot because of rhinitis.", "86", "어휘", ["collocation:비염이 있다"]],
    ["기관지염", "支气管炎", "名词", "bronchitis", "noun", "기침이 오래가면 기관지염일 수 있어요.", "咳嗽持续很久的话，可能是支气管炎。", "If a cough lasts a long time, it may be bronchitis.", "86", "어휘", ["collocation:기관지염에 걸리다"]],
    ["위염", "胃炎", "名词", "gastritis", "noun", "속이 쓰리면 위염일 수도 있어요.", "胃里灼痛的话，也可能是胃炎。", "If your stomach burns, it may be gastritis.", "86", "어휘", ["collocation:위염일 수 있다"]],
    ["장염", "肠炎", "名词", "enteritis", "noun", "설사를 하면 장염인지 확인해 보세요.", "腹泻的话，确认一下是不是肠炎。", "If you have diarrhea, check whether it is enteritis.", "86", "어휘", ["collocation:장염에 걸리다"]],
    ["신체 기관", "身体器官", "名词", "body organ", "noun", "신체 기관별로 관련 질병을 배웠어요.", "学习了按身体器官分类的相关疾病。", "We learned diseases related to each body organ.", "86", "어휘", ["collocation:신체 기관"]],
    ["V-되", "虽然……但要……；……不过……", "语法表达", "do..., but...; while...", "grammar expression", "식사를 하되 자극적인 음식은 피하세요.", "吃饭是可以，但要避开刺激性食物。", "Eat meals, but avoid irritating foods.", "87", "문법 1", ["form:동사 + -되"]],
    ["밖에 다녀오다", "去外面一趟", "动词短语", "to go outside and come back", "verb phrase", "쉬는 시간에 밖에 다녀와도 돼요?", "休息时间可以去外面一趟吗？", "May I go outside and come back during the break?", "87", "문법 1", ["collocation:밖에 다녀오다"]],
    ["늦지 않도록 하다", "注意不要迟到", "动词短语", "to make sure not to be late", "verb phrase", "밖에 다녀오되 늦지 않도록 하세요.", "可以去外面一趟，但请注意不要迟到。", "You may go outside, but make sure you are not late.", "87", "문법 1", ["form:-지 않도록 하다"]],
    ["마음껏", "尽情地", "副词", "as much as one wants", "adverb", "음식을 마음껏 드시되 남기시면 안 됩니다.", "可以尽情吃，但不能剩下。", "You may eat as much as you want, but you must not leave food.", "87", "문법 1", ["collocation:마음껏 먹다"]],
    ["남기다", "剩下，留下", "动词", "to leave behind", "verb", "음식을 남기시면 안 됩니다.", "不能剩饭。", "You must not leave food.", "87", "문법 1", ["collocation:음식을 남기다"]],
    ["설사를 하다", "腹泻", "动词短语", "to have diarrhea", "verb phrase", "며칠 전부터 계속 설사를 해요.", "从几天前开始一直腹泻。", "I have had diarrhea continuously for a few days.", "87", "문법 1 대화", ["collocation:설사를 하다"]],
    ["자극적이다", "刺激性的", "形容词", "irritating; strong", "adjective", "장염에 걸렸을 때는 자극적인 음식을 피하세요.", "得肠炎时请避免刺激性食物。", "Avoid irritating foods when you have enteritis.", "87", "문법 1 대화", ["collocation:자극적인 음식"]],
    ["피하다", "避开，避免", "动词", "to avoid", "verb", "자극적인 음식은 피하는 것이 좋습니다.", "最好避免刺激性食物。", "It is better to avoid irritating foods.", "87", "문법 1 대화", ["collocation:음식을 피하다"]],
    ["무리하다", "勉强，过度用力", "动词", "to overdo it", "verb", "운동하되 무리하지 마세요.", "运动可以，但不要勉强。", "Exercise, but do not overdo it.", "87", "문법 1", ["collocation:무리하지 마세요"]],
    ["뒷정리", "善后整理，收拾", "名词", "cleanup afterward", "noun", "행사가 끝나면 뒷정리를 해야 해요.", "活动结束后要做善后整理。", "After the event ends, you need to clean up.", "87", "단어장", ["collocation:뒷정리를 하다"]],
    ["예정일", "预定日期", "名词", "scheduled date; due date", "noun", "예정일을 확인하고 병원에 가세요.", "确认预定日期后去医院。", "Check the scheduled date and go to the hospital.", "87", "단어장", ["collocation:예정일을 확인하다"]],
    ["V-었더니", "做了……之后发现/结果……", "语法表达", "after I did..., I found/it resulted...", "grammar expression", "커피를 많이 마셨더니 잠이 안 와요.", "喝了很多咖啡后，结果睡不着。", "After I drank a lot of coffee, I could not sleep.", "88", "문법 2", ["form:동사 + -었더니"]],
    ["실력이 좋아지다", "能力变好", "动词短语", "for one's skill to improve", "verb phrase", "한국 드라마를 봤더니 한국어 실력이 좋아졌어요.", "看了韩剧之后，韩语能力变好了。", "After watching Korean dramas, my Korean improved.", "88", "문법 2", ["collocation:실력이 좋아지다"]],
    ["잠이 안 오다", "睡不着", "动词短语", "to be unable to sleep", "verb phrase", "낮에 커피를 마셨더니 잠이 안 와요.", "白天喝了咖啡后睡不着。", "After drinking coffee during the day, I cannot sleep.", "88", "문법 2", ["collocation:잠이 안 오다"]],
    ["하루 만에", "一天内", "副词短语", "in one day", "adverbial phrase", "인터넷으로 옷을 주문했더니 하루 만에 도착했어요.", "在网上订了衣服，结果一天内就到了。", "I ordered clothes online, and they arrived in one day.", "88", "문법 2", ["collocation:하루 만에 도착하다"]],
    ["큰 소리로 응원하다", "大声加油助威", "动词短语", "to cheer loudly", "verb phrase", "야구장에서 큰 소리로 응원을 했더니 목이 아파요.", "在棒球场大声加油后，嗓子疼。", "After cheering loudly at the baseball stadium, my throat hurts.", "88", "문법 2 대화", ["collocation:큰 소리로 응원하다"]],
    ["야식", "夜宵", "名词", "late-night snack", "noun", "어제 야식을 먹고 잤더니 배가 더부룩해요.", "昨晚吃了夜宵就睡，结果肚子胀。", "I ate a late-night snack and slept, so I feel bloated.", "88", "문법 2", ["collocation:야식을 먹다"]],
    ["감기에 걸리다", "感冒", "动词短语", "to catch a cold", "verb phrase", "옷을 얇게 입었더니 감기에 걸렸어요.", "衣服穿得薄，结果感冒了。", "I dressed lightly and caught a cold.", "88", "문법 2", ["collocation:감기에 걸리다"]],
    ["소화가 안 되다", "不消化", "动词短语", "to have indigestion", "verb phrase", "점심을 급하게 먹었더니 소화가 안 돼요.", "午饭吃得太急，结果不消化。", "I ate lunch in a hurry, so I have indigestion.", "88", "문법 2", ["collocation:소화가 안 되다"]],
    ["몸살이 나다", "浑身酸痛，患身体不适", "动词短语", "to have body aches from fatigue", "verb phrase", "지난주에 무리했더니 몸살이 났어요.", "上周太勉强了，结果浑身不舒服。", "I overdid it last week and got body aches.", "88", "문법 2", ["collocation:몸살이 나다"]],
    ["식품 매장", "食品卖场", "名词", "food section; grocery department", "noun", "식품 매장에서 유통 기한을 확인하세요.", "在食品卖场请确认保质期。", "Check the expiration date in the food section.", "88", "단어장", ["collocation:식품 매장"]],
    ["기침이 낫다", "咳嗽好转", "动词短语", "for a cough to get better", "verb phrase", "아직도 기침이 안 나았어요?", "咳嗽还没好吗？", "Has your cough still not gotten better?", "89", "말하기", ["collocation:기침이 낫다"]],
    ["약을 먹다", "吃药", "动词短语", "to take medicine", "verb phrase", "약을 먹어도 잘 낫지 않아요.", "即使吃药也不太好转。", "Even when I take medicine, it does not get better easily.", "89", "말하기", ["collocation:약을 먹다"]],
    ["크게 걱정할 정도", "非常担心的程度", "名词短语", "a level worth serious worry", "noun phrase", "크게 걱정할 정도는 아니라고 하셨어요.", "医生说还不到特别担心的程度。", "The doctor said it was not something to worry greatly about.", "89", "말하기", ["form:-을 정도"]],
    ["어쩔 수 없다", "没办法", "惯用表达", "there is no choice", "idiom", "어쩔 수 없지요. 수업을 해야 해요.", "没办法，要上课。", "There is no choice. I have to teach class.", "89", "말하기", ["collocation:어쩔 수 없다"]],
    ["독감", "流感", "名词", "flu", "noun", "독감인 것 같으면 병원에 가야 해요.", "如果像是流感，就应该去医院。", "If it seems like the flu, you should go to the hospital.", "89", "말하기", ["collocation:독감인 것 같다"]],
    ["목이 붓다", "嗓子肿", "动词短语", "for one's throat to be swollen", "verb phrase", "고열이 나고 목이 부었어요.", "发高烧，嗓子肿了。", "I have a high fever and my throat is swollen.", "89", "말하기", ["collocation:목이 붓다"]],
    ["전염되다", "被传染", "动词", "to be contagious; to be transmitted", "verb", "독감은 전염될 수 있으므로 조심하세요.", "流感可能会传染，所以请小心。", "The flu can be transmitted, so be careful.", "89", "단어장", ["collocation:전염될 수 있다"]],
    ["토하다", "呕吐", "动词", "to vomit", "verb", "토하고 계속 설사하면 병원에 가세요.", "如果呕吐并持续腹泻，请去医院。", "If you vomit and keep having diarrhea, go to the hospital.", "89", "말하기", ["collocation:토하다"]],
    ["물을 자주 마시다", "经常喝水", "动词短语", "to drink water often", "verb phrase", "장염일 때는 물을 자주 마셔야 해요.", "肠炎时要经常喝水。", "When you have enteritis, you should drink water often.", "89", "말하기", ["collocation:물을 자주 마시다"]],
    ["처방", "处方", "名词", "prescription", "noun", "의사의 처방에 따라 약을 드세요.", "请按照医生的处方吃药。", "Take medicine according to the doctor's prescription.", "90", "듣기", ["collocation:처방을 받다"]],
    ["두통약", "头痛药", "名词", "headache medicine", "noun", "약국에서 두통약을 샀어요.", "在药店买了头痛药。", "I bought headache medicine at the pharmacy.", "90", "발음", ["collocation:두통약을 사다"]],
    ["약국", "药店", "名词", "pharmacy", "noun", "약국에 가서 약을 샀어요.", "去药店买了药。", "I went to the pharmacy and bought medicine.", "90", "발음", ["collocation:약국에 가다"]],
    ["잘못된 생활 습관", "错误的生活习惯", "名词短语", "bad lifestyle habit", "noun phrase", "잘못된 생활 습관이 병을 부를 수 있어요.", "错误的生活习惯可能招来疾病。", "Bad lifestyle habits can cause illness.", "92", "읽기", ["collocation:잘못된 생활 습관"]],
    ["의학 기술", "医学技术", "名词", "medical technology", "noun", "의학 기술의 발달로 기대 수명이 늘어났어요.", "由于医学技术发展，预期寿命增加了。", "Life expectancy has increased with advances in medical technology.", "92", "읽기", ["collocation:의학 기술의 발달"]],
    ["기대 수명", "预期寿命", "名词", "life expectancy", "noun", "인간의 기대 수명이 크게 늘어났어요.", "人类的预期寿命大幅增加。", "Human life expectancy has increased greatly.", "92", "읽기", ["collocation:기대 수명이 늘어나다"]],
    ["시달리다", "受折磨，困扰", "动词", "to suffer from", "verb", "현대인들은 여러 질병에 시달리고 있어요.", "现代人正受多种疾病困扰。", "Modern people suffer from various illnesses.", "92", "읽기", ["collocation:질병에 시달리다"]],
    ["암", "癌症", "名词", "cancer", "noun", "암은 한국인의 사망 원인 1위를 차지하는 병이에요.", "癌症是韩国人死亡原因中排名第一的疾病。", "Cancer is the leading cause of death among Koreans.", "92", "읽기", ["collocation:암에 걸리다"]],
    ["고혈압", "高血压", "名词", "high blood pressure; hypertension", "noun", "고혈압은 생활 습관병 중 하나예요.", "高血压是生活习惯病之一。", "Hypertension is one type of lifestyle disease.", "92", "읽기", ["collocation:고혈압"]],
    ["당뇨병", "糖尿病", "名词", "diabetes", "noun", "당뇨병은 식습관과 관계가 있어요.", "糖尿病和饮食习惯有关。", "Diabetes is related to eating habits.", "92", "읽기", ["collocation:당뇨병"]],
    ["생활 습관병", "生活习惯病", "名词", "lifestyle disease", "noun", "암이나 고혈압, 당뇨병은 생활 습관병이라고도 불려요.", "癌症、高血压、糖尿病也被称为生活习惯病。", "Cancer, hypertension, and diabetes are also called lifestyle diseases.", "92", "읽기", ["collocation:생활 습관병"]],
    ["밀접한 관련", "密切关系", "名词短语", "close relationship", "noun phrase", "이 질병들은 생활 습관과 밀접한 관련이 있어요.", "这些疾病和生活习惯有密切关系。", "These diseases have a close relationship with lifestyle habits.", "92", "읽기", ["collocation:밀접한 관련이 있다"]],
    ["사망 원인", "死亡原因", "名词", "cause of death", "noun", "암은 한국인의 사망 원인 1위를 차지해요.", "癌症占韩国人死亡原因第一位。", "Cancer ranks first among causes of death for Koreans.", "92", "읽기", ["collocation:사망 원인"]],
    ["흡연", "吸烟", "名词", "smoking", "noun", "흡연은 건강에 나쁜 영향을 줘요.", "吸烟会对健康产生不好的影响。", "Smoking has a negative effect on health.", "92", "읽기", ["collocation:흡연"]],
    ["음주", "饮酒", "名词", "drinking alcohol", "noun", "과도한 음주는 건강에 좋지 않아요.", "过度饮酒对健康不好。", "Excessive drinking is not good for health.", "92", "읽기", ["collocation:음주"]],
    ["식습관", "饮食习惯", "名词", "eating habit", "noun", "잘못된 식습관을 고쳐야 해요.", "应该改正错误的饮食习惯。", "You should correct bad eating habits.", "92", "읽기", ["collocation:잘못된 식습관"]],
    ["운동 부족", "运动不足", "名词", "lack of exercise", "noun", "운동 부족은 성인병의 원인이 될 수 있어요.", "运动不足可能成为成人病的原因。", "Lack of exercise can cause adult diseases.", "92", "읽기", ["collocation:운동 부족"]],
    ["영향을 주다", "产生影响", "动词短语", "to affect; to influence", "verb phrase", "스트레스는 건강에 영향을 줘요.", "压力会影响健康。", "Stress affects health.", "92", "읽기", ["collocation:영향을 주다"]],
    ["기름진 식사", "油腻的饮食", "名词短语", "greasy meal; fatty diet", "noun phrase", "기름진 식사는 고혈압과 관계가 있어요.", "油腻饮食和高血压有关。", "A greasy diet is related to high blood pressure.", "92", "읽기", ["collocation:기름진 식사"]],
    ["탄수화물", "碳水化合物", "名词", "carbohydrate", "noun", "탄수화물을 과도하게 섭취하면 건강에 좋지 않아요.", "过度摄取碳水化合物对健康不好。", "Excessive carbohydrate intake is not good for health.", "92", "읽기", ["collocation:탄수화물 섭취"]],
    ["과도한 섭취", "过度摄取", "名词短语", "excessive intake", "noun phrase", "소금의 과도한 섭취를 줄여야 해요.", "应该减少过度摄取盐。", "You should reduce excessive salt intake.", "92", "읽기", ["collocation:과도한 섭취"]],
    ["인스턴트 식품", "方便食品", "名词", "instant food", "noun", "인스턴트 식품을 자주 먹으면 건강에 좋지 않아요.", "经常吃方便食品对健康不好。", "Eating instant foods often is not good for health.", "92", "읽기", ["collocation:인스턴트 식품"]],
    ["대처하다", "应对", "动词", "to cope with; to respond", "verb", "질병에 어떻게 대처해야 할까요?", "应该如何应对疾病呢？", "How should we cope with illnesses?", "92", "읽기", ["collocation:질병에 대처하다"]],
    ["적절한 치료", "适当治疗", "名词短语", "proper treatment", "noun phrase", "적절한 치료를 받되 생활 습관도 바꾸세요.", "接受适当治疗，但也要改变生活习惯。", "Receive proper treatment, but also change your lifestyle.", "92", "읽기", ["collocation:적절한 치료를 받다"]],
    ["균형 잡힌 식사", "均衡饮食", "名词短语", "balanced meal", "noun phrase", "균형 잡힌 식사를 해야 해요.", "应该均衡饮食。", "You should eat balanced meals.", "92", "읽기", ["collocation:균형 잡힌 식사"]],
    ["규칙적인 운동", "规律运动", "名词短语", "regular exercise", "noun phrase", "규칙적인 운동은 성인병 예방에 도움이 돼요.", "规律运动有助于预防成人病。", "Regular exercise helps prevent adult diseases.", "92", "읽기", ["collocation:규칙적인 운동"]],
    ["수분", "水分", "名词", "water; fluids", "noun", "수분을 충분히 섭취하는 것이 좋아요.", "最好充分摄取水分。", "It is good to take in enough fluids.", "92", "읽기", ["collocation:수분을 섭취하다"]],
    ["충분히 섭취하다", "充分摄取", "动词短语", "to take in enough", "verb phrase", "물을 충분히 섭취하되 술은 줄이세요.", "要充分摄取水分，但减少饮酒。", "Take in enough water, but reduce alcohol.", "92", "읽기", ["collocation:충분히 섭취하다"]],
    ["제한하다", "限制", "动词", "to limit", "verb", "술이나 담배는 제한하는 것이 좋아요.", "酒或烟最好限制。", "It is better to limit alcohol or cigarettes.", "92", "읽기", ["collocation:술이나 담배를 제한하다"]],
    ["만 보 걷기", "走一万步", "名词短语", "walking ten thousand steps", "noun phrase", "하루에 만 보 걷기는 성인병 예방에 도움이 돼요.", "每天走一万步有助于预防成人病。", "Walking ten thousand steps a day helps prevent adult diseases.", "92", "읽기", ["collocation:만 보 걷기"]],
    ["성인병", "成人病", "名词", "adult disease; lifestyle-related disease", "noun", "올바른 생활 습관은 성인병 예방에 도움이 돼요.", "正确的生活习惯有助于预防成人病。", "Good lifestyle habits help prevent adult diseases.", "92", "읽기", ["collocation:성인병 예방"]],
    ["예방", "预防", "名词", "prevention", "noun", "병은 치료보다 예방이 중요해요.", "疾病比起治疗，预防更重要。", "Prevention is more important than treatment.", "92", "읽기", ["collocation:예방에 도움이 되다"]],
    ["건강한 삶을 누리다", "享有健康生活", "动词短语", "to enjoy a healthy life", "verb phrase", "올바른 생활 습관을 지킬 때 건강한 삶을 누릴 수 있어요.", "遵守正确生活习惯时，可以享有健康生活。", "When you keep good lifestyle habits, you can enjoy a healthy life.", "92", "읽기", ["collocation:건강한 삶을 누리다"]],
    ["국민 건강 보험 제도", "国民健康保险制度", "名词", "national health insurance system", "noun", "한국에서는 국민 건강 보험 제도를 실시해요.", "韩国实施国民健康保险制度。", "Korea operates a national health insurance system.", "94", "문화와 정보", ["collocation:국민 건강 보험 제도"]],
    ["병원비", "医疗费", "名词", "hospital bill; medical costs", "noun", "높은 병원비는 경제적 부담이 될 수 있어요.", "高额医疗费可能成为经济负担。", "High medical costs can become an economic burden.", "94", "문화와 정보", ["collocation:병원비"]],
    ["경제적 부담", "经济负担", "名词短语", "financial burden", "noun phrase", "이 제도는 경제적 부담을 줄이기 위해 실시돼요.", "这个制度是为了减少经济负担而实施的。", "This system is operated to reduce financial burden.", "94", "문화와 정보", ["collocation:경제적 부담"]],
    ["방지하다", "防止", "动词", "to prevent", "verb", "심한 부담을 방지하기 위해 제도를 실시해요.", "为了防止严重负担而实施制度。", "The system is implemented to prevent a heavy burden.", "94", "문화와 정보", ["collocation:부담을 방지하다"]],
    ["보험료", "保险费", "名词", "insurance premium", "noun", "국민들은 평소에 보험료를 냅니다.", "国民平时缴纳保险费。", "People pay insurance premiums regularly.", "94", "문화와 정보", ["collocation:보험료를 내다"]],
    ["국민건강보험공단", "国民健康保险公团", "名词", "National Health Insurance Service", "noun", "국민건강보험공단이 보험료를 관리해요.", "国民健康保险公团管理保险费。", "The National Health Insurance Service manages premiums.", "94", "문화와 정보", ["collocation:국민건강보험공단"]],
    ["관리 및 운영하다", "管理和运营", "动词短语", "to manage and operate", "verb phrase", "공단이 보험료를 관리 및 운영합니다.", "公团管理并运营保险费。", "The corporation manages and operates the premiums.", "94", "문화와 정보", ["collocation:관리 및 운영하다"]],
    ["보험 급여", "保险给付", "名词", "insurance benefit", "noun", "필요할 때 보험 급여를 제공합니다.", "必要时提供保险给付。", "Insurance benefits are provided when needed.", "94", "문화와 정보", ["collocation:보험 급여를 제공하다"]],
    ["가족 단위", "以家庭为单位", "名词短语", "family unit", "noun phrase", "개인 또는 가족 단위로 가입합니다.", "以个人或家庭为单位加入。", "People enroll as individuals or family units.", "94", "문화와 정보", ["collocation:가족 단위"]],
    ["가입하다", "加入，参加", "动词", "to join; to enroll", "verb", "외국인도 건강 보험에 가입할 수 있어요.", "外国人也可以加入健康保险。", "Foreigners can also enroll in health insurance.", "94", "문화와 정보", ["collocation:보험에 가입하다"]],
    ["소득", "收入", "名词", "income", "noun", "보험료는 소득에 따라 다를 수 있어요.", "保险费可能根据收入而不同。", "Insurance premiums can differ depending on income.", "94", "문화와 정보", ["collocation:소득에 따라"]],
    ["재산", "财产", "名词", "property; assets", "noun", "소득이나 재산 등에 따라 보험료가 다릅니다.", "保险费根据收入或财产等而不同。", "Premiums differ depending on income, assets, and other factors.", "94", "문화와 정보", ["collocation:소득이나 재산"]],
    ["보험 서비스", "保险服务", "名词", "insurance service", "noun", "가입자는 모두 똑같은 보험 서비스를 받습니다.", "投保者都获得相同的保险服务。", "All members receive the same insurance service.", "94", "문화와 정보", ["collocation:보험 서비스를 받다"]],
    ["재외 동포", "海外同胞", "名词", "overseas Korean", "noun", "재외 동포도 국민 건강 보험에 가입할 수 있어요.", "海外同胞也可以加入国民健康保险。", "Overseas Koreans can also enroll in national health insurance.", "94", "문화와 정보", ["collocation:재외 동포"]],
    ["체류 자격", "居留资格", "名词", "status of stay", "noun", "체류 자격에 따라 가입 조건이 다를 수 있어요.", "加入条件可能根据居留资格而不同。", "Enrollment conditions can differ depending on status of stay.", "94", "문화와 정보", ["collocation:체류 자격"]],
    ["거주하다", "居住", "动词", "to reside", "verb", "한국에 6개월 이상 거주하면 가입 자격이 생깁니다.", "在韩国居住 6 个月以上就会产生加入资格。", "If you reside in Korea for at least six months, you become eligible.", "94", "문화와 정보", ["collocation:6개월 이상 거주하다"]],
    ["외국인 등록", "外国人登记", "名词", "alien registration", "noun", "외국인 등록을 한 후 직장이나 지역에서 가입할 수 있어요.", "办理外国人登记后，可以在职场或地区加入。", "After alien registration, one can enroll through the workplace or region.", "94", "문화와 정보", ["collocation:외국인 등록을 하다"]],
    ["유학", "留学", "名词", "study abroad", "noun", "유학으로 6개월 이상 거주할 것이 확실하면 가입할 수 있어요.", "如果确定因留学居住 6 个月以上，可以加入。", "If it is certain you will stay for over six months for study, you may enroll.", "94", "문화와 정보", ["collocation:유학"]],
    ["결혼", "结婚", "名词", "marriage", "noun", "결혼 등으로 장기 거주할 경우 가입할 수 있어요.", "因结婚等长期居住时可以加入。", "One may enroll when long-term residence is certain due to marriage or similar reasons.", "94", "문화와 정보", ["collocation:결혼"]],
    ["유통 기한", "保质期，有效期", "名词", "expiration date", "noun", "식품을 살 때 유통 기한을 확인하세요.", "买食品时请确认保质期。", "Check the expiration date when buying food.", "95", "배운 어휘 확인", ["collocation:유통 기한"]],
    ["급성", "急性", "名词/冠形词", "acute", "noun/modifier", "급성 장염이면 물을 자주 마셔야 해요.", "如果是急性肠炎，要经常喝水。", "If it is acute enteritis, you should drink water often.", "95", "배운 어휘 확인", ["collocation:급성 장염"]],
    ["금연하다", "戒烟", "动词", "to quit smoking", "verb", "건강을 위해 금연하는 것이 좋아요.", "为了健康最好戒烟。", "It is good to quit smoking for your health.", "95", "배운 어휘 확인", ["collocation:금연하다"]],
    ["충분하다", "充分，足够", "形容词", "sufficient; enough", "adjective", "수면이 충분해야 건강을 지킬 수 있어요.", "睡眠充足才能保持健康。", "You can stay healthy when sleep is sufficient.", "95", "배운 어휘 확인", ["collocation:충분하다"]]
  ].map(([ko, zh, pos, en, posEn, exampleKo, exampleZh, exampleEn, page, source, tips]) => ({
    ko,
    zh,
    pos,
    page,
    source,
    exampleKo,
    exampleZh,
    tips: makeTips(tips),
    translations: {
      en: {
        meaning: en,
        pos: posEn,
        example: exampleEn,
        tips: makeTips(tips)
      }
    }
  }));

  window.lessonGuideL4LessonChunks ||= {};
  window.lessonGuideL4LessonChunks["l4-07"] = {
    id: "l4-07",
    number: 7,
    titleKo: "현대인의 질병",
    titleZh: "现代人的疾病",
    pages: "84-95",
    status: "draft",
    progress: {
      vocabulary: "draft-p84-p95",
      dialogue: "draft-p87-p89",
      culture: "draft-p94",
      practice: "draft-p87-p94"
    },
    vocabularySources: [
      { page: 84, label: "단원 제목", note: "课题、活动目标和核心主题" },
      { page: 86, label: "어휘", note: "疾病、症状和身体器官相关词汇" },
      { page: 87, label: "문법 1", note: "V-되 和肠炎就诊对话" },
      { page: 88, label: "문법 2", note: "V-었더니 和症状结果表达" },
      { page: 89, label: "말하기", note: "病症咨询和注意事项对话" },
      { page: 90, label: "듣기/발음", note: "肠炎问诊、处方和发音练习" },
      { page: 92, label: "읽기", note: "生活习惯病阅读" },
      { page: 94, label: "문화와 정보", note: "韩国国民健康保险制度" },
      { page: 95, label: "배운 어휘 확인", note: "本课复习词汇补充" }
    ],
    goals: [
      "能说明身体不适时出现的症状和相关疾病。",
      "能用 V-되 表示承认前项但补充条件或限制。",
      "能用 V-었더니 表示亲身经历后的结果。",
      "能阅读生活习惯病文章，并理解韩国国民健康保险制度。"
    ],
    grammar: [
      {
        pattern: "V-되",
        zh: "虽然……但要……；……不过……",
        guide: "承认前面的动作或情况可以成立，同时在后面补充条件、限制或注意事项。",
        examples: [
          { ko: "밖에 다녀오되 늦지 않도록 하세요.", zh: "可以去外面一趟，但请注意不要迟到。" },
          { ko: "식사를 하되 자극적인 음식은 피하는 것이 좋습니다.", zh: "可以吃饭，但最好避开刺激性食物。" }
        ],
        translations: {
          en: {
            meaning: "do..., but...; while...",
            guide: "Accepts the first action or situation, then adds a condition, limit, or caution."
          }
        }
      },
      {
        pattern: "V-었더니",
        zh: "做了……之后发现/结果……",
        guide: "说话人亲自做了前项动作，然后观察到或经历了后面的结果。",
        examples: [
          { ko: "매일 한국 드라마를 봤더니 한국어 실력이 좋아졌어요.", zh: "每天看韩剧之后，韩语能力变好了。" },
          { ko: "어제 야구장에서 큰 소리로 응원을 했더니 목이 아픈 것 같아요.", zh: "昨天在棒球场大声加油后，好像嗓子疼了。" }
        ],
        translations: {
          en: {
            meaning: "after I did..., I found/it resulted...",
            guide: "The speaker personally did the first action and then observed or experienced the result."
          }
        }
      }
    ],
    vocabulary,
    dialogues: [
      {
        id: "dialogue-01",
        title: "장염 진단과 식사 조언",
        page: 87,
        source: "문법 1 대화",
        focus: "V-되",
        sceneZh: "라민 向医生说明肚子痛和腹泻，医生诊断为肠炎，并提醒可以吃饭但要避开刺激性食物。",
        learningPoints: [
          "식사를 하되 后面补充饮食限制。",
          "자극적인 음식은 피하다 是病后饮食建议里常用的表达。"
        ],
        lines: [
          { speaker: "라민", ko: "며칠 전부터 계속 배가 아프고 설사를 해요.", zh: "从几天前开始一直肚子痛，还腹泻。", guide: "며칠 전부터 계속 表示症状持续了一段时间。" },
          { speaker: "의사", ko: "장염에 걸리셨네요. 식사를 하되 자극적인 음식은 피하는 것이 좋습니다.", zh: "您得了肠炎。可以吃饭，但最好避开刺激性食物。", guide: "-되 后面接医生给出的限制和注意事项。" }
        ],
        rolePlays: [
          { title: "증상 말하기", promptZh: "说从几天前开始肚子一直痛，还腹泻。", answerKo: "며칠 전부터 계속 배가 아프고 설사를 해요." },
          { title: "조언하기", promptZh: "说可以吃饭，但要避开刺激性食物。", answerKo: "식사를 하되 자극적인 음식은 피하세요." }
        ],
        drills: [
          { pattern: "V-되", promptZh: "说“运动可以，但不要勉强”。", answerKo: "운동하되 무리하지 마세요." },
          { pattern: "V-되", promptZh: "说“出去可以，但不要迟到”。", answerKo: "밖에 다녀오되 늦지 않도록 하세요." }
        ],
        translations: {
          en: {
            scene: "Ramin tells the doctor that he has had stomach pain and diarrhea, and the doctor diagnoses enteritis and gives food advice.",
            learningPoints: [
              "식사를 하되 adds a dietary limitation after allowing the action.",
              "자극적인 음식은 피하다 is a common expression for diet advice after illness."
            ]
          }
        }
      },
      {
        id: "dialogue-02",
        title: "응원했더니 목이 아파요",
        page: 88,
        source: "문법 2 대화",
        focus: "V-었더니",
        sceneZh: "안젤라 发现 제이슨 声音不对，제이슨 解释说昨天在棒球场大声加油后嗓子疼。",
        learningPoints: [
          "큰 소리로 응원을 했더니 后面接亲身经历后的结果。",
          "목소리가 왜 그래요? 是发现对方声音异常时的自然问法。"
        ],
        lines: [
          { speaker: "안젤라", ko: "제이슨 씨, 목소리가 왜 그래요?", zh: "제이슨，你的声音怎么了？", guide: "목소리가 왜 그래요? 用来关心对方声音不正常。" },
          { speaker: "제이슨", ko: "어제 야구장에서 큰 소리로 응원을 했더니 목이 아픈 것 같아요.", zh: "昨天在棒球场大声加油后，好像嗓子疼了。", guide: "-었더니 把自己的行动和随后出现的症状连起来。" }
        ],
        rolePlays: [
          { title: "원인 말하기", promptZh: "说昨天大声加油后嗓子疼。", answerKo: "어제 큰 소리로 응원을 했더니 목이 아파요." },
          { title: "몸 상태 묻기", promptZh: "问对方声音怎么了。", answerKo: "목소리가 왜 그래요?" }
        ],
        drills: [
          { pattern: "V-었더니", promptZh: "说“白天喝了很多咖啡后睡不着”。", answerKo: "낮에 커피를 많이 마셨더니 잠이 안 와요." },
          { pattern: "V-었더니", promptZh: "说“午饭吃得太急，结果不消化”。", answerKo: "점심을 급하게 먹었더니 소화가 안 돼요." }
        ],
        translations: {
          en: {
            scene: "Angela notices something wrong with Jason's voice, and Jason explains that his throat hurts after cheering loudly at a baseball stadium.",
            learningPoints: [
              "큰 소리로 응원을 했더니 connects a personally performed action with its result.",
              "목소리가 왜 그래요? is a natural way to ask when someone's voice sounds unusual."
            ]
          }
        }
      },
      {
        id: "dialogue-03",
        title: "기관지염과 무리하지 않기",
        page: 89,
        source: "말하기 대화",
        focus: "병의 증상과 주의할 점",
        sceneZh: "애나 关心 제이슨 的咳嗽，判断可能是支气管炎，并提醒他上课时不要勉强。",
        learningPoints: [
          "약을 먹어도 잘 낫지 않다 表示即使吃药也不容易好。",
          "수업을 하되 무리하지 않도록 하다 用 -되 补充注意事项。",
          "크게 걱정할 정도는 아니다 表示“不至于特别担心”。"
        ],
        lines: [
          { speaker: "애나", ko: "제이슨 씨, 며칠 전에도 그런 것 같은데 아직도 기침이 안 나았어요?", zh: "제이슨，几天前好像也是这样，咳嗽还没好吗？", guide: "아직도 表示到现在还持续。" },
          { speaker: "제이슨", ko: "네. 무리해서 일했더니 약을 먹어도 잘 낫지 않아요. 열도 있고요.", zh: "是的。因为过度工作，即使吃药也不太好。还有发烧。", guide: "무리해서 일했더니 说明症状加重的原因。" },
          { speaker: "애나", ko: "기관지염인 것 같은데 병원에는 가 보셨어요?", zh: "好像是支气管炎，去过医院了吗？", guide: "-인 것 같다 用来推测病名。" },
          { speaker: "제이슨", ko: "가기는 했는데 크게 걱정할 정도는 아니라고 하셨어요.", zh: "去是去了，医生说还不到特别担心的程度。", guide: "-기는 했는데 表示承认做了某事，但后面补充信息。" },
          { speaker: "애나", ko: "요즘 수업이 많은데 괜찮겠어요?", zh: "最近课很多，没关系吗？", guide: "괜찮겠어요? 带有关心和担心的语气。" },
          { speaker: "제이슨", ko: "어쩔 수 없지요. 수업을 하되 무리하지 않도록 해야겠어요.", zh: "没办法。课还是要上，但我得注意不要勉强。", guide: "수업을 하되 后面接“不要勉强”的限制。" }
        ],
        rolePlays: [
          { title: "기관지염 추측", promptZh: "说好像是支气管炎，问对方去医院了吗。", answerKo: "기관지염인 것 같은데 병원에는 가 보셨어요?" },
          { title: "주의 말하기", promptZh: "说课要上，但不要勉强。", answerKo: "수업을 하되 무리하지 않도록 해야겠어요." }
        ],
        drills: [
          { pattern: "V-었더니", promptZh: "说“过度工作后，即使吃药也不太好”。", answerKo: "무리해서 일했더니 약을 먹어도 잘 낫지 않아요." },
          { pattern: "V-되", promptZh: "说“工作可以，但要充分休息”。", answerKo: "일을 하되 충분히 쉬어야 해요." }
        ],
        translations: {
          en: {
            scene: "Anna checks on Jason's cough, guesses it may be bronchitis, and reminds him not to overdo it while teaching.",
            learningPoints: [
              "약을 먹어도 잘 낫지 않다 means it does not get better easily even with medicine.",
              "수업을 하되 무리하지 않도록 하다 uses -되 to add a caution.",
              "크게 걱정할 정도는 아니다 means it is not serious enough to worry greatly."
            ]
          }
        }
      }
    ],
    culture: {
      titleKo: "한국의 국민 건강 보험 제도",
      titleZh: "韩国的国民健康保险制度",
      page: 94,
      summaryZh: "文章介绍韩国国民健康保险制度的目的、缴费与服务原则，以及外国人和海外同胞的加入条件。",
      keyTerms: [
        { ko: "국민 건강 보험 제도", zh: "为减轻高额医疗费负担而实施的社会保险制度", translations: { en: { meaning: "a social insurance system operated to reduce the burden of high medical costs" } } },
        { ko: "보험료", zh: "平时缴纳、用于提供保险服务的费用", translations: { en: { meaning: "premiums paid regularly to support insurance services" } } },
        { ko: "외국인 등록", zh: "外国人在韩国办理的居留登记，是加入条件之一", translations: { en: { meaning: "alien registration in Korea, one condition for enrollment" } } }
      ],
      paragraphs: [
        {
          ko: "한국에서는 높은 병원비 때문에 국민들이 심한 경제적 부담을 갖게 되는 것을 방지하기 위하여 국민 건강 보험 제도를 실시한다. 이 제도는 국민들이 평소에 보험료를 내고 국민건강보험공단이 이를 관리 및 운영하다가 필요 시 보험 급여를 제공하는 방식으로 운영된다.",
          zh: "在韩国，为了防止国民因高额医疗费而承受严重的经济负担，实施国民健康保险制度。这个制度的运行方式是：国民平时缴纳保险费，由国民健康保险公团管理和运营，在需要时提供保险给付。",
          guide: "第一段说明制度目的：减轻高额医疗费造成的经济负担，并说明保险费由公团管理，需要时提供保险给付。",
          translations: {
            en: {
              translation: "Korea operates the national health insurance system to prevent people from facing severe financial burdens due to high medical costs. Under this system, people pay premiums regularly, and the National Health Insurance Service manages and operates them, providing insurance benefits when needed.",
              guide: "The first paragraph explains the purpose of the system and how premiums and benefits work."
            }
          }
        },
        {
          ko: "국민 건강 보험은 국민 개개인의 의사에 관계없이 국민 모두가 개인 또는 가족 단위로 가입해서 일정한 보험료를 내야 하는 사회 보험이다. 보험료는 소득이나 재산 등에 따라 다르지만, 가입자는 모두 똑같은 보험 서비스를 받는다.",
          zh: "国民健康保险是不论个人意愿，所有国民都要以个人或家庭为单位加入，并缴纳一定保险费的社会保险。保险费会根据收入或财产等有所不同，但加入者都获得相同的保险服务。",
          guide: "第二段强调强制性和公平性：缴费金额可能不同，但保险服务相同。",
          translations: {
            en: {
              translation: "National health insurance is a form of social insurance that all citizens must join as individuals or family units regardless of personal preference and for which they must pay regular premiums. Premiums vary depending on income or assets, but all members receive the same insurance service.",
              guide: "The second paragraph emphasizes mandatory enrollment and equal service."
            }
          }
        },
        {
          ko: "국민 건강 보험에는 외국인과 재외 동포도 가입할 수 있다. 체류 자격에 따라 다소 다르지만 대체로 한국에 6개월 이상 거주하는 경우, 가입할 자격이 생기고 외국인 등록을 한 후에 직장이나 지역에서 가입을 할 수 있다. 6개월 이상 거주하지 않은 외국인이라도 유학이나 결혼 등으로 6개월 이상 거주할 것이 확실한 경우에 가입할 수 있다.",
          zh: "外国人和海外同胞也可以加入国民健康保险。根据居留资格会略有不同，但一般来说，在韩国居住 6 个月以上时会产生加入资格，并在办理外国人登记后，可以通过职场或地区加入。即使尚未居住满 6 个月，如果因留学或结婚等原因确定会居住 6 个月以上，也可以加入。",
          guide: "第三段是外国人加入条件：通常 6 个月以上居住 + 外国人登记；留学、结婚等确定长期居住也可以。",
          translations: {
            en: {
              translation: "Foreigners and overseas Koreans can also enroll in national health insurance. The details differ somewhat by status of stay, but in general, those who reside in Korea for at least six months become eligible and can enroll through their workplace or region after alien registration. Even foreigners who have not yet stayed for six months may enroll if it is certain they will stay for at least six months due to study, marriage, or similar reasons.",
              guide: "The final paragraph explains eligibility for foreigners and overseas Koreans."
            }
          }
        }
      ],
      questions: [
        {
          q: "국민 건강 보험 제도는 어떤 제도입니까?",
          zh: "国民健康保险制度是什么样的制度？",
          answerZh: "它是为了防止国民因高额医疗费承受严重经济负担，由国民平时缴纳保险费、需要时获得保险给付的社会保险制度。",
          translations: {
            en: {
              translation: "What kind of system is the national health insurance system?",
              answer: "It is a social insurance system in which people pay premiums regularly and receive benefits when needed so they are not heavily burdened by high medical costs."
            }
          }
        },
        {
          q: "건강 보험에 가입할 수 있는 외국인의 자격 조건은 무엇입니까?",
          zh: "可以加入健康保险的外国人资格条件是什么？",
          answerZh: "一般是在韩国居住 6 个月以上并完成外国人登记；如果因留学或结婚等确定会居住 6 个月以上，也可以加入。",
          translations: {
            en: {
              translation: "What are the eligibility conditions for foreigners to enroll in health insurance?",
              answer: "In general, they must reside in Korea for at least six months and complete alien registration; those certain to stay at least six months due to study or marriage may also enroll."
            }
          }
        },
        {
          q: "여러분 고향의 건강 보험 제도를 소개해 보세요.",
          zh: "请介绍你家乡的健康保险制度。",
          answerZh: "可以说明是否强制加入、谁缴费、保险覆盖哪些医疗项目，以及外国人是否能加入。",
          translations: {
            en: {
              translation: "Introduce the health insurance system in your hometown.",
              answer: "You can explain whether enrollment is mandatory, who pays premiums, what medical services are covered, and whether foreigners can join."
            }
          }
        }
      ],
      translations: {
        en: {
          title: "Korea's National Health Insurance System",
          summary: "The article introduces the purpose of Korea's national health insurance system, its premium and service principles, and eligibility conditions for foreigners and overseas Koreans."
        }
      }
    },
    practice: [
      {
        type: "grammar",
        title: "V-되",
        promptZh: "用 -되 说：运动可以，但不要勉强。",
        answerKo: "운동하되 무리하지 마세요.",
        translations: {
          en: {
            title: "V-되",
            prompt: "Use -되: exercise, but do not overdo it.",
            answer: "운동하되 무리하지 마세요."
          }
        }
      },
      {
        type: "grammar",
        title: "V-었더니",
        promptZh: "用 -었더니 说：昨晚吃了夜宵就睡，结果肚子胀。",
        answerKo: "어제 야식을 먹고 잤더니 배가 더부룩해요.",
        translations: {
          en: {
            title: "V-었더니",
            prompt: "Use -었더니: I ate a late-night snack and slept, so I feel bloated.",
            answer: "어제 야식을 먹고 잤더니 배가 더부룩해요."
          }
        }
      },
      {
        type: "speaking",
        title: "병에 대해 조언하기",
        promptZh: "对“发高烧、嗓子肿”的人给出建议。",
        answerKo: "독감인 것 같아요. 병원에 가되 전염될 수 있으므로 조심하세요.",
        translations: {
          en: {
            title: "Giving Advice About Illness",
            prompt: "Give advice to someone with a high fever and a swollen throat.",
            answer: "독감인 것 같아요. 병원에 가되 전염될 수 있으므로 조심하세요."
          }
        }
      },
      {
        type: "reading",
        title: "잘못된 생활 습관이 병을 부른다",
        promptZh: "阅读题：文章中提到的生活习惯病有哪些？",
        answerKo: "암, 고혈압, 당뇨병 등이 있습니다.",
        translations: {
          en: {
            title: "Bad Lifestyle Habits Cause Illness",
            prompt: "Reading: What lifestyle diseases are mentioned in the article?",
            answer: "암, 고혈압, 당뇨병 등이 있습니다."
          }
        }
      },
      {
        type: "culture",
        title: "국민 건강 보험 제도",
        promptZh: "文化题：外国人一般满足什么条件可以加入健康保险？",
        answerKo: "대체로 한국에 6개월 이상 거주하고 외국인 등록을 한 후에 가입할 수 있습니다.",
        translations: {
          en: {
            title: "National Health Insurance System",
            prompt: "Culture: In general, what conditions allow foreigners to enroll in health insurance?",
            answer: "대체로 한국에 6개월 이상 거주하고 외국인 등록을 한 후에 가입할 수 있습니다."
          }
        }
      }
    ],
    translations: {
      en: {
        title: "Illnesses of Modern People",
        goals: [
          "Explain symptoms and related illnesses when someone feels unwell.",
          "Use V-되 to accept one action while adding a condition or limitation.",
          "Use V-었더니 to describe a result after personal experience.",
          "Read about lifestyle diseases and understand Korea's national health insurance system."
        ]
      }
    }
  };
})();
