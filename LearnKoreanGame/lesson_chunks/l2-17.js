(() => {
  const makeTip = (type, text, enText = text) => ({
    type,
    text,
    translations: { en: { text: enText } }
  });

  const posEn = {
    "副词": "adverb",
    "动词": "verb",
    "动词短语": "verb phrase",
    "句型表达": "sentence pattern",
    "名词": "noun",
    "名词短语": "noun phrase",
    "形容词": "adjective",
    "语法表达": "grammar expression",
    "发音表达": "pronunciation expression"
  };

  const vocab = (ko, zh, pos, page, source, exampleKo, exampleZh, enMeaning, enExample, tips = []) => ({
    ko,
    zh,
    pos,
    page,
    source,
    exampleKo,
    exampleZh,
    tips: tips.map((tip) => makeTip(...tip)),
    translations: {
      en: {
        meaning: enMeaning,
        pos: posEn[pos] || pos,
        example: enExample,
        tips: tips.map((tip) => ({
          type: tip[0],
          text: tip[2] || tip[1]
        }))
      }
    }
  });

  const lesson = {
    id: "l2-17",
    number: 17,
    titleKo: "잠을 푹 자면 좋겠어요",
    titleZh: "希望能睡个好觉",
    pages: "182-191",
    status: "refined",
    progress: {
      vocabulary: "refined-p182-p191",
      dialogue: "refined-p185-p191",
      culture: "reviewed-p190",
      practice: "refined-p185-p191"
    },
    vocabularySources: [
      { page: 182, label: "단원 제목", note: "课题句、健康和生活习惯主题" },
      { page: 184, label: "어휘와 문법 1", note: "健康生活习惯、饮食和运动表达" },
      { page: 185, label: "문법 1", note: "A/V-(으)면 좋겠다 希望表达和家庭期待练习" },
      { page: 186, label: "어휘와 문법 2", note: "身体不适、症状和疲劳时状态表达" },
      { page: 187, label: "문법 2", note: "N에 表示对身体、健康或症状有益/有害" },
      { page: 188, label: "말하기와 듣기", note: "健康建议对话、불면증和听力问题" },
      { page: 189, label: "읽기와 쓰기", note: "健康生活习惯阅读、问题和写作提示" },
      { page: 190, label: "문화와 정보", note: "민간요법 原文、翻译、关键词和问题" },
      { page: 191, label: "발음/배운 어휘 확인", note: "发音练习和本课词汇复习" }
    ],
    goals: [
      "能够说出健康生活习惯，例如充足睡眠、均衡饮食、规律用餐和持续运动。",
      "能够描述常见身体不适，例如脸色不好、没力气、头晕、没胃口、发烧和消化不良。",
      "能够用 A/V-(으)면 좋겠다 表达自己的希望、期待或建议。",
      "能够用 N에 좋다/안 좋다 说明某种食物或行为对身体哪里有益或有害。",
      "能够读懂健康生活习惯文章，并理解韩国的 민간요법 文化。"
    ],
    grammar: [
      {
        pattern: "A/V-(으)면 좋겠다",
        zh: "要是……就好了；希望……",
        guide: "用来表达希望或期待。有收音多用 -으면 좋겠다，没有收音多用 -면 좋겠다。也可以用在给建议时，说“这样就好了”。",
        examples: [
          { ko: "잠을 충분히 자면 좋겠어요.", zh: "要是能睡够就好了。" },
          { ko: "이번에는 꼭 합격하면 좋겠어요.", zh: "这次一定合格就好了。" },
          { ko: "비자를 연장할 수 있으면 좋겠어요.", zh: "要是能延长签证就好了。" }
        ],
        translations: {
          en: {
            meaning: "I hope ...; it would be nice if ...",
            guide: "Use A/V-(으)면 좋겠다 to express a hope, wish, or desired situation. Use -으면 좋겠다 after many final consonants and -면 좋겠다 after a vowel."
          }
        }
      },
      {
        pattern: "N에",
        zh: "对……；在……方面",
        guide: "和 좋다/안 좋다 一起用时，表示对某个身体部位、健康状态或症状有好处/不好。对象是人时用 사람에게。",
        examples: [
          { ko: "당근은 눈에 좋아요.", zh: "胡萝卜对眼睛好。" },
          { ko: "오렌지나 귤은 피로 회복에 좋아요.", zh: "橙子或橘子对恢复疲劳有好处。" },
          { ko: "담배는 건강에 좋지 않아요.", zh: "香烟对健康不好。" }
        ],
        translations: {
          en: {
            meaning: "for ...; good/bad for ...",
            guide: "Use N에 with 좋다 or 안 좋다 to say something is good or bad for a body part, health, recovery, or a symptom. Use 사람에게 when the target is a person."
          }
        }
      }
    ],
    vocabulary: [
      vocab("건강", "健康", "名词", 182, "단원 제목", "건강을 위해서 운동을 해요.", "为了健康而运动。", "health", "I exercise for my health.", [["collocation", "건강을 위해서"], ["collocation", "건강에 좋다"]]),
      vocab("건강한 생활 습관", "健康的生活习惯", "名词短语", 182, "단원 제목", "건강한 생활 습관에 대해 이야기해요.", "谈论健康的生活习惯。", "healthy lifestyle habits", "We talk about healthy lifestyle habits.", [["collocation", "건강한 생활 습관을 가지다"]]),
      vocab("건강 이상 증상", "健康异常症状；身体不适症状", "名词短语", 182, "단원 제목", "건강 이상 증상을 말할 수 있어요.", "可以说出身体不适症状。", "health symptoms", "I can describe health symptoms.", [["collocation", "증상을 말하다"]]),
      vocab("건강에 대해 조언하다", "就健康提出建议", "动词短语", 182, "단원 제목", "친구에게 건강에 대해 조언해요.", "给朋友健康建议。", "to advise about health", "I advise a friend about health.", [["collocation", "N에 대해 조언하다"]]),
      vocab("민간요법", "民间疗法", "名词", 182, "단원 제목", "한국의 민간요법에 대해 읽어요.", "阅读韩国的民间疗法。", "folk remedy", "We read about Korean folk remedies.", [["collocation", "민간요법을 쓰다"], ["pitfall", "严重症状不能只依赖民간요법。", "Do not rely only on folk remedies for serious symptoms."]]),

      vocab("잠을 충분히 자다", "睡眠充足", "动词短语", 184, "어휘와 문법 1", "잠을 충분히 자면 건강에 좋아요.", "睡眠充足对健康好。", "to get enough sleep", "Getting enough sleep is good for health.", [["collocation", "잠을 충분히 자다"], ["pitfall", "충분히 是副词，放在动词前修饰程度。", "충분히 is an adverb placed before a verb."]]),
      vocab("음식을 골고루 먹다", "均衡地吃各种食物", "动词短语", 184, "어휘와 문법 1", "음식을 골고루 먹는 게 좋아요.", "均衡地吃各种食物比较好。", "to eat a balanced variety of foods", "It is good to eat a balanced variety of foods.", [["collocation", "골고루 먹다"], ["pitfall", "골고루 强调不偏食、各种都吃。", "골고루 means evenly or in a balanced variety."]]),
      vocab("식사를 규칙적으로 하다", "规律用餐", "动词短语", 184, "어휘와 문법 1", "식사를 규칙적으로 하면 좋아요.", "规律用餐比较好。", "to eat meals regularly", "It is good to eat meals regularly.", [["collocation", "규칙적으로 하다"]]),
      vocab("운동을 꾸준히 하다", "坚持运动", "动词短语", 184, "어휘와 문법 1", "저는 운동을 꾸준히 하거든요.", "因为我坚持运动。", "to exercise steadily", "I exercise steadily.", [["collocation", "꾸준히 하다"], ["pitfall", "꾸준히 强调持续、不间断。", "꾸준히 emphasizes continuing steadily."]]),
      vocab("잠이 부족하다", "睡眠不足", "动词短语", 184, "어휘와 문법 1", "요즘 잠이 부족해요.", "最近睡眠不足。", "to lack sleep", "I lack sleep these days.", [["collocation", "잠이 부족하다"]]),
      vocab("편식이 심하다", "挑食严重", "动词短语", 184, "어휘와 문법 1", "편식이 심하면 건강에 안 좋아요.", "严重挑食对健康不好。", "to be very picky with food", "Being very picky with food is bad for health.", [["collocation", "편식이 심하다"]]),
      vocab("식사가 불규칙하다", "饮食/用餐不规律", "动词短语", 184, "어휘와 문법 1", "식사가 불규칙한 편이에요.", "用餐算是不规律。", "meals are irregular", "My meals tend to be irregular.", [["collocation", "식사가 불규칙하다"], ["form", "불규칙하다 + -ㄴ -> 불규칙한"]]),
      vocab("운동을 거의 하지 않다", "几乎不运动", "动词短语", 184, "어휘와 문법 1", "운동을 거의 하지 않지만 가끔 걸어요.", "虽然几乎不运动，但偶尔走路。", "to hardly exercise", "I hardly exercise, but I sometimes walk.", [["collocation", "거의 하지 않다"]]),
      vocab("건강한 편이다", "算是健康的类型", "句型表达", 184, "어휘와 문법 1", "저는 건강한 편이에요.", "我算是健康的。", "to be on the healthy side", "I am relatively healthy.", [["collocation", "A-(으)ㄴ 편이다"]]),
      vocab("일찍 자고 일찍 일어나다", "早睡早起", "动词短语", 184, "어휘와 문법 1", "일찍 자고 일찍 일어나는 게 좋아요.", "早睡早起比较好。", "to go to bed early and get up early", "It is good to go to bed early and get up early.", [["collocation", "일찍 자다"], ["collocation", "일찍 일어나다"]]),

      vocab("조금 작으면 좋겠어요", "要是小一点就好了", "句型表达", 185, "문법 1", "이 옷은 조금 작으면 좋겠어요.", "这件衣服要是小一点就好了。", "I wish it were a little smaller", "I wish this clothing were a little smaller.", [["form", "작다 + -으면 좋겠다 -> 작으면 좋겠다"]]),
      vocab("합격하면 좋겠어요", "希望合格", "句型表达", 185, "문법 1", "이번에는 꼭 합격하면 좋겠어요.", "这次一定合格就好了。", "I hope I pass", "I hope I pass this time.", [["collocation", "시험에 합격하다"], ["form", "합격하다 + -면 좋겠다"]]),
      vocab("갔다 오면 좋겠어요", "能去一趟回来就好了", "句型表达", 185, "문법 1", "이번 여름에 고향에 갔다 오면 좋겠어요.", "这个夏天能回一趟故乡就好了。", "I hope to go and come back", "I hope to visit my hometown this summer.", [["form", "갔다 오다 + -면 좋겠다"]]),
      vocab("연장할 수 있으면 좋겠어요", "要是能延长就好了", "句型表达", 185, "문법 1", "비자를 연장할 수 있으면 좋겠어요.", "要是能延长签证就好了。", "I hope I can extend it", "I hope I can extend my visa.", [["collocation", "비자를 연장하다"]]),
      vocab("가족들이 무엇을 하면 좋겠어요?", "希望家人做什么？", "句型表达", 185, "문법 1", "우리 딸이 일찍 일어나면 좋겠어요.", "希望我女儿能早起。", "What do you wish your family would do?", "I wish my daughter would get up early.", [["collocation", "일찍 일어나다"]]),
      vocab("하고 싶은 일", "想做的事", "名词短语", 185, "문법 1", "올해 꼭 하고 싶은 일이 있어요?", "今年有一定想做的事吗？", "something one wants to do", "Is there something you really want to do this year?", [["form", "하다 + -고 싶다 -> 하고 싶다"]]),
      vocab("한국어능력시험 3급", "韩国语能力考试 3 级", "名词短语", 185, "문법 1", "한국어능력시험 3급에 합격하면 좋겠어요.", "希望韩国语能力考试3级能合格。", "TOPIK level 3", "I hope I pass TOPIK level 3.", [["collocation", "3급에 합격하다"]]),

      vocab("안색이 안 좋다", "脸色不好", "动词短语", 186, "어휘와 문법 2", "무슨 일 있어요? 안색이 안 좋아요.", "有什么事吗？脸色不好。", "one's complexion looks bad", "What happened? You do not look well.", [["collocation", "안색이 안 좋다"]]),
      vocab("힘이 없다", "没力气", "动词短语", 186, "어휘와 문법 2", "몸이 안 좋아서 힘이 없어요.", "因为身体不好，所以没力气。", "to have no energy", "I have no energy because I feel unwell.", [["collocation", "힘이 없다"], ["pitfall", "힘/기운 都可表示体力、气力。", "힘 and 기운 can both refer to energy or strength."]]),
      vocab("기운이 없다", "没有精神；没劲", "动词短语", 186, "어휘와 문법 2", "요즘 기운이 없어요.", "最近没有精神。", "to have no energy", "I have no energy these days.", [["collocation", "기운이 없다"]]),
      vocab("입맛이 없다", "没胃口", "动词短语", 186, "어휘와 문법 2", "입맛이 없어서 밥을 못 먹겠어요.", "没胃口，所以吃不下饭。", "to have no appetite", "I have no appetite, so I cannot eat.", [["collocation", "입맛이 없다"]]),
      vocab("어지럽다", "头晕", "形容词", 186, "어휘와 문법 2", "피곤할 때 어지러워요.", "累的时候头晕。", "dizzy", "I feel dizzy when I am tired.", [["form", "어지럽다 + -어요 -> 어지러워요"], ["collocation", "머리가 어지럽다"]]),
      vocab("얼굴에 뭐가 나다", "脸上长东西", "动词短语", 186, "어휘와 문법 2", "얼굴에 뭐가 났어요.", "脸上长了东西。", "to get something on one's face", "Something appeared on my face.", [["collocation", "얼굴에 뭐가 나다"]]),
      vocab("열이 나다", "发烧", "动词短语", 186, "어휘와 문법 2", "열이 나면 병원에 가세요.", "如果发烧，请去医院。", "to have a fever", "If you have a fever, go to the hospital.", [["collocation", "열이 나다"]]),
      vocab("소화가 안 되다", "消化不良", "动词短语", 186, "어휘와 문법 2", "요즘 소화가 안 돼요.", "最近消化不好。", "to have indigestion", "I have indigestion these days.", [["collocation", "소화가 안 되다"], ["form", "되다 -> 돼요"]]),
      vocab("몸살이 나다", "浑身酸痛；得 몸살", "动词短语", 186, "어휘와 문법 2", "몸살이 나서 쉬고 있어요.", "因为浑身酸痛，所以正在休息。", "to have body aches", "I am resting because I have body aches.", [["collocation", "몸살이 나다"]]),
      vocab("피곤할 때", "累的时候", "名词短语", 186, "어휘와 문법 2", "여러분은 피곤할 때 어디가 안 좋아요?", "你累的时候哪里不舒服？", "when tired", "Where do you feel unwell when you are tired?", [["form", "피곤하다 + -ㄹ 때 -> 피곤할 때"]]),

      vocab("당근", "胡萝卜", "名词", 187, "문법 2", "당근은 눈에 좋아요.", "胡萝卜对眼睛好。", "carrot", "Carrots are good for the eyes.", [["collocation", "눈에 좋다"]]),
      vocab("눈에 좋다", "对眼睛好", "动词短语", 187, "문법 2", "당근은 눈에 좋아요.", "胡萝卜对眼睛好。", "to be good for the eyes", "Carrots are good for the eyes.", [["collocation", "N에 좋다"]]),
      vocab("피로 회복에 좋다", "对恢复疲劳有好处", "动词短语", 187, "문법 2", "오렌지나 귤은 피로 회복에 좋아요.", "橙子或橘子对恢复疲劳有好处。", "to be good for fatigue recovery", "Oranges and tangerines are good for fatigue recovery.", [["collocation", "피로 회복"], ["form", "N에 좋다"]]),
      vocab("감기에 좋다", "对感冒有好处", "动词短语", 187, "문법 2", "감기에 비타민 C가 좋아요.", "维生素C对感冒有好处。", "to be good for a cold", "Vitamin C is good for a cold.", [["collocation", "감기에 좋다"]]),
      vocab("건강에 좋지 않다", "对健康不好", "动词短语", 187, "문법 2", "담배는 건강에 좋지 않아요.", "香烟对健康不好。", "to be bad for health", "Smoking is bad for health.", [["collocation", "건강에 좋지 않다"]]),
      vocab("담배를 끊다", "戒烟", "动词短语", 187, "문법 2", "담배를 끊으세요.", "请戒烟。", "to quit smoking", "Please quit smoking.", [["collocation", "담배를 끊다"], ["form", "끊다 + -으세요 -> 끊으세요"]]),
      vocab("사과", "苹果", "名词", 187, "문법 2", "아침마다 사과를 하나 먹어요.", "每天早上吃一个苹果。", "apple", "I eat one apple every morning.", [["collocation", "사과를 먹다"]]),
      vocab("피부에 좋다", "对皮肤好", "动词短语", 187, "문법 2", "사과는 피부에도 좋고 소화에도 좋거든요.", "苹果对皮肤和消化都好。", "to be good for skin", "Apples are good for skin and digestion.", [["collocation", "피부에 좋다"]]),
      vocab("소화에 좋다", "对消化好", "动词短语", 187, "문법 2", "사과는 소화에 좋아요.", "苹果对消化好。", "to be good for digestion", "Apples are good for digestion.", [["collocation", "소화에 좋다"]]),

      vocab("무슨 일 있어요?", "有什么事吗？", "句型表达", 188, "말하기와 듣기", "무슨 일 있어요? 안색이 안 좋아요.", "有什么事吗？脸色不好。", "Is something wrong?", "Is something wrong? You do not look well.", [["collocation", "무슨 일 있어요?"]]),
      vocab("밤에 잘 못 자다", "晚上睡不好", "动词短语", 188, "말하기와 듣기", "요즘 밤에 잘 못 자요.", "最近晚上睡不好。", "to not sleep well at night", "I do not sleep well at night these days.", [["collocation", "밤에 잘 못 자다"]]),
      vocab("자기 전에", "睡觉前", "名词短语", 188, "말하기와 듣기", "자기 전에 따뜻한 물로 샤워를 해 보세요.", "睡前试着用温水洗澡。", "before sleeping", "Try taking a warm shower before sleeping.", [["form", "자다 + -기 전 -> 자기 전"], ["collocation", "자기 전에"]]),
      vocab("따뜻한 물로 샤워를 하다", "用温水洗澡", "动词短语", 188, "말하기와 듣기", "따뜻한 물로 샤워를 해 보세요.", "请试着用温水洗澡。", "to take a warm shower", "Try taking a warm shower.", [["collocation", "샤워를 하다"], ["form", "N(으)로 = 用N", "N(으)로 = with/by N"]]),
      vocab("불면증", "失眠症", "名词", 188, "말하기와 듣기", "따뜻한 물로 샤워를 하면 불면증에 좋아요.", "用温水洗澡对失眠有好处。", "insomnia", "Taking a warm shower is good for insomnia.", [["collocation", "불면증에 좋다"]]),
      vocab("오늘부터", "从今天开始", "名词短语", 188, "말하기와 듣기", "오늘부터 한번 해 봐야겠어요.", "从今天开始得试试看。", "from today", "I should try it starting today.", [["collocation", "오늘부터 하다"]]),
      vocab("며칠 해 보다", "试几天", "动词短语", 188, "말하기와 듣기", "며칠 해 보면 괜찮아질 거예요.", "试几天的话会好起来。", "to try for a few days", "If you try it for a few days, you will get better.", [["collocation", "며칠 해 보다"]]),
      vocab("괜찮아지다", "好起来；变得没事", "动词", 188, "말하기와 듣기", "며칠 해 보면 괜찮아질 거예요.", "试几天的话会好起来。", "to get better", "You will get better if you try it for a few days.", [["form", "괜찮다 + -아지다 -> 괜찮아지다"]]),
      vocab("알려 줘서 고마워요", "谢谢你告诉我", "句型表达", 188, "말하기와 듣기", "알려 줘서 고마워요.", "谢谢你告诉我。", "Thank you for telling me", "Thank you for telling me.", [["form", "알리다/알려 주다 + -어서"]]),
      vocab("몸이 안 좋을 때", "身体不舒服的时候", "名词短语", 188, "말하기와 듣기", "몸이 안 좋을 때 여러분은 어떻게 해요?", "身体不舒服的时候你怎么做？", "when feeling unwell", "What do you do when you feel unwell?", [["collocation", "몸이 안 좋다"]]),
      vocab("특별한 방법", "特别的方法", "名词短语", 188, "말하기와 듣기", "여러분만의 특별한 방법에 대해 이야기해 보세요.", "请谈谈你自己的特别方法。", "special method", "Talk about your own special method.", [["collocation", "특별한 방법"]]),
      vocab("건강 고민", "健康烦恼", "名词短语", 188, "말하기와 듣기", "여자가 라디오에서 건강 고민을 이야기하고 있어요.", "女人在广播里说健康烦恼。", "health concern", "The woman is talking about a health concern on the radio.", [["collocation", "건강 고민을 이야기하다"]]),
      vocab("간식", "零食；点心", "名词", 188, "말하기와 듣기", "간식을 조금만 드세요.", "请少吃点心。", "snack", "Please eat only a little snack.", [["collocation", "간식을 먹다"]]),
      vocab("물을 많이 마시다", "多喝水", "动词短语", 188, "말하기와 듣기", "물을 많이 드세요.", "请多喝水。", "to drink a lot of water", "Please drink a lot of water.", [["collocation", "물을 많이 마시다"]]),

      vocab("일상생활", "日常生活", "名词", 189, "읽기와 쓰기", "일상생활 속 건강한 생활 습관을 읽어요.", "阅读日常生活中的健康生活习惯。", "daily life", "We read about healthy habits in daily life.", [["collocation", "일상생활 속"]]),
      vocab("충분히 잠자기", "睡够觉", "名词短语", 189, "읽기와 쓰기", "첫째, 충분히 잠자기가 중요해요.", "第一，睡够觉很重要。", "getting enough sleep", "First, getting enough sleep is important.", [["collocation", "충분히 잠자기"]]),
      vocab("커피를 많이 마시다", "喝很多咖啡", "动词短语", 189, "읽기와 쓰기", "커피를 많이 마시지 않아야 됩니다.", "不能喝很多咖啡。", "to drink a lot of coffee", "You should not drink a lot of coffee.", [["collocation", "커피를 마시다"]]),
      vocab("침대에 눕다", "躺在床上", "动词短语", 189, "읽기와 쓰기", "침대에 누워서 휴대 전화를 많이 보면 안 됩니다.", "躺在床上看很多手机是不可以的。", "to lie on a bed", "You should not look at your phone a lot while lying in bed.", [["form", "눕다 -> 누워서"], ["collocation", "침대에 눕다"]]),
      vocab("휴대 전화를 보다", "看手机", "动词短语", 189, "읽기와 쓰기", "자기 전에 휴대 전화를 많이 보면 안 됩니다.", "睡前不能看很多手机。", "to look at a phone", "You should not look at your phone a lot before sleeping.", [["collocation", "휴대 전화를 보다"]]),
      vocab("마음이 편해지다", "心情变平静；心里舒服", "动词短语", 189, "읽기와 쓰기", "마음이 편해지는 음악을 들으면 푹 잘 수 있습니다.", "听让心情平静的音乐就能睡得香。", "to become relaxed", "If you listen to relaxing music, you can sleep well.", [["collocation", "마음이 편해지다"]]),
      vocab("따뜻한 우유", "温牛奶", "名词短语", 189, "읽기와 쓰기", "따뜻한 우유를 한 잔 마시는 것도 좋습니다.", "喝一杯温牛奶也很好。", "warm milk", "Drinking a cup of warm milk is also good.", [["collocation", "우유를 한 잔 마시다"]]),
      vocab("일상생활에서 운동하기", "在日常生活中运动", "名词短语", 189, "읽기와 쓰기", "둘째, 일상생활에서 운동하기가 중요해요.", "第二，在日常生活中运动很重要。", "exercising in daily life", "Second, exercising in daily life is important.", [["collocation", "일상생활에서 운동하다"]]),
      vocab("가까운 거리", "近距离；近的地方", "名词短语", 189, "읽기와 쓰기", "가까운 거리는 걸어서 갑니다.", "近的地方走路去。", "short distance", "For short distances, go on foot.", [["collocation", "가까운 거리"]]),
      vocab("걸어서 가다", "走路去", "动词短语", 189, "읽기와 쓰기", "가까운 거리는 걸어서 갑니다.", "近的地方走路去。", "to go on foot", "For short distances, go on foot.", [["collocation", "걸어서 가다"], ["form", "걷다 -> 걸어서"]]),
      vocab("계단을 이용하다", "使用楼梯", "动词短语", 189, "읽기와 쓰기", "엘리베이터와 에스컬레이터보다는 계단을 이용합시다.", "比起电梯和自动扶梯，使用楼梯吧。", "to use the stairs", "Use the stairs rather than elevators and escalators.", [["collocation", "계단을 이용하다"]]),
      vocab("가벼운 운동", "轻度运动", "名词短语", 189, "읽기와 쓰기", "생활 속의 가벼운 운동은 건강에 매우 좋습니다.", "生活中的轻度运动对健康非常好。", "light exercise", "Light exercise in daily life is very good for health.", [["collocation", "가벼운 운동"]]),
      vocab("짠 음식", "咸的食物", "名词短语", 189, "읽기와 쓰기", "짠 음식이나 단 음식을 많이 먹지 않습니다.", "不多吃咸的或甜的食物。", "salty food", "Do not eat a lot of salty food.", [["collocation", "짠 음식을 먹다"]]),
      vocab("단 음식", "甜的食物", "名词短语", 189, "읽기와 쓰기", "단 음식은 몸에 좋지 않아요.", "甜的食物对身体不好。", "sweet food", "Sweet food is not good for the body.", [["collocation", "단 음식을 먹다"]]),
      vocab("몸에 좋지 않다", "对身体不好", "动词短语", 189, "읽기와 쓰기", "몸에 좋지 않기 때문입니다.", "因为对身体不好。", "to be bad for the body", "Because it is bad for the body.", [["collocation", "몸에 좋지 않다"]]),
      vocab("채소와 과일", "蔬菜和水果", "名词短语", 189, "읽기와 쓰기", "채소와 과일을 많이 먹습니다.", "多吃蔬菜和水果。", "vegetables and fruit", "Eat a lot of vegetables and fruit.", [["collocation", "채소와 과일을 먹다"]]),
      vocab("오렌지나 귤", "橙子或橘子", "名词短语", 189, "읽기와 쓰기", "오렌지나 귤은 피로 회복에 좋습니다.", "橙子或橘子对恢复疲劳有好处。", "oranges or tangerines", "Oranges or tangerines are good for fatigue recovery.", [["form", "N이나 N = N或N", "N이나 N = N or N"]]),

      vocab("몸이 아프다", "身体疼；生病", "动词短语", 190, "문화와 정보", "몸이 아플 때 병원에 가요.", "身体不舒服的时候去医院。", "to be sick; to feel pain", "When I am sick, I go to the hospital.", [["collocation", "몸이 아프다"]]),
      vocab("병을 고치다", "治病", "动词短语", 190, "문화와 정보", "병을 고치는 방법들이 전해지고 있습니다.", "治病的方法流传下来。", "to cure an illness", "Methods for curing illnesses have been passed down.", [["collocation", "병을 고치다"]]),
      vocab("전해지다", "流传；传下来", "动词", 190, "문화와 정보", "옛날부터 전해지고 있습니다.", "从以前开始流传下来。", "to be passed down", "It has been passed down from long ago.", [["collocation", "옛날부터 전해지다"]]),
      vocab("소화가 되지 않다", "不消化", "动词短语", 190, "문화와 정보", "소화가 되지 않을 때 배를 쓸어 주었습니다.", "不消化的时候会揉肚子。", "to not digest well", "When digestion did not work well, they rubbed the stomach.", [["collocation", "소화가 되지 않다"]]),
      vocab("배를 손으로 쓸어 주다", "用手抚摸/揉肚子", "动词短语", 190, "문화와 정보", "아픈 아이의 배를 손으로 쓸어 주었습니다.", "用手给生病孩子揉肚子。", "to rub someone's stomach with a hand", "They rubbed the sick child's stomach with a hand.", [["collocation", "배를 쓸어 주다"]]),
      vocab("약손", "药手；有疗愈感的手", "名词", 190, "문화와 정보", "어머니의 손을 약손이라고 불렀습니다.", "把母亲的手叫作“药手”。", "healing hand", "They called the mother's hand a healing hand.", [["collocation", "약손이라고 부르다"]]),
      vocab("기침이 심하다", "咳嗽严重", "动词短语", 190, "문화와 정보", "기침이 심할 때는 배를 끓여서 먹어요.", "咳嗽严重的时候煮梨吃。", "to cough badly", "When a cough is bad, people boil pear and eat it.", [["collocation", "기침이 심하다"]]),
      vocab("배를 끓여서 먹다", "煮梨吃", "动词短语", 190, "문화와 정보", "배를 끓여서 먹으면 기침이 사라져요.", "煮梨吃的话咳嗽会消失。", "to boil pear and eat it", "If you boil pear and eat it, the cough goes away.", [["pitfall", "这里的 배 是梨，不是肚子。", "Here 배 means pear, not stomach."]]),
      vocab("기침이 사라지다", "咳嗽消失", "动词短语", 190, "문화와 정보", "배를 끓여서 먹으면 기침이 사라져요.", "煮梨吃的话咳嗽会消失。", "a cough goes away", "The cough goes away.", [["collocation", "기침이 사라지다"]]),
      vocab("술을 많이 마신 다음 날", "喝很多酒后的第二天", "名词短语", 190, "문화와 정보", "술을 많이 마신 다음 날에는 콩나물국을 먹어요.", "喝很多酒后的第二天吃豆芽汤。", "the day after drinking a lot", "The day after drinking a lot, people eat bean sprout soup.", [["collocation", "술을 많이 마시다"]]),
      vocab("콩나물국", "豆芽汤", "名词", 190, "문화와 정보", "콩나물국을 먹으면 술이 잘 깹니다.", "吃豆芽汤的话酒会醒得快。", "bean sprout soup", "If you eat bean sprout soup, you sober up well.", [["collocation", "콩나물국을 먹다"]]),
      vocab("술이 깨다", "醒酒", "动词短语", 190, "문화와 정보", "술이 잘 깹니다.", "酒醒得好。", "to sober up", "You sober up well.", [["collocation", "술이 깨다"]]),
      vocab("과학적인 근거", "科学依据", "名词短语", 190, "문화와 정보", "과학적인 근거가 없는 것도 있습니다.", "也有没有科学依据的。", "scientific basis", "Some have no scientific basis.", [["collocation", "과학적인 근거가 있다"]]),
      vocab("의학적으로 입증되다", "医学上得到证明", "动词短语", 190, "문화와 정보", "어떤 방법은 의학적으로 효과가 입증되었습니다.", "有些方法在医学上证明有效。", "to be medically proven", "Some methods have been medically proven to be effective.", [["collocation", "효과가 입증되다"]]),

      vocab("좋겠어요", "希望会好；就好了", "发音表达", 191, "발음/배운 어휘 확인", "잠을 충분히 자면 좋겠어요.", "要是能睡够就好了。", "would be good; I hope", "I hope I can get enough sleep.", [["form", "좋겠어요[조케써요]"], ["pitfall", "ㅎ 后接 ㄱ 时发音会变成 [ㅋ]。", "ㅎ followed by ㄱ is pronounced [ㅋ] here."]]),
      vocab("불규칙한 편이에요", "算是不规律", "发音表达", 191, "발음/배운 어휘 확인", "식사가 불규칙한 편이에요.", "用餐算是不规律。", "tends to be irregular", "My meals tend to be irregular.", [["form", "불규칙한 편이에요[불규치칸 펴니에요]"]]),
      vocab("하지 않지만", "虽然不做", "发音表达", 191, "발음/배운 어휘 확인", "자주 하지 않지만 가끔 1시간 정도 걸어요.", "虽然不经常做，但偶尔走1小时左右。", "although I do not do it", "Although I do not do it often, I sometimes walk for about an hour.", [["form", "하지 않지만[하지 안치만]"]]),
      vocab("가끔 1시간 정도 걷다", "偶尔走一小时左右", "动词短语", 191, "발음/배운 어휘 확인", "가끔 1시간 정도 걸어요.", "偶尔走1小时左右。", "to sometimes walk for about one hour", "I sometimes walk for about one hour.", [["form", "걷다 -> 걸어요"], ["collocation", "1시간 정도 걷다"]])
    ],
    dialogues: [
      {
        id: "dialogue-grammar-01",
        title: "잠을 충분히 자면 좋겠어요",
        focus: "A/V-(으)면 좋겠다",
        page: 185,
        source: "문법 1",
        sceneZh: "用 A/V-(으)면 좋겠다 表达希望和期待。",
        sceneKo: "바라는 일을 A/V-(으)면 좋겠다로 말해 보세요.",
        sceneEn: "Use A/V-(으)면 좋겠다 to say what you hope will happen.",
        guideZh: "如果前面动词或形容词有收音，多用 -으면 좋겠어요；没有收音多用 -면 좋겠어요。",
        guideEn: "Use -으면 좋겠어요 after many final consonants and -면 좋겠어요 after a vowel.",
        lines: [
          { speaker: "가", ko: "요즘 잠을 잘 자요?", zh: "最近睡得好吗？", noteZh: "잠을 자다 = 睡觉。", en: "Are you sleeping well these days?", noteEn: "잠을 자다 means to sleep." },
          { speaker: "나", ko: "아니요. 잠을 충분히 자면 좋겠어요.", zh: "没有。要是能睡够就好了。", noteZh: "자다 没收音，接 -면 좋겠어요。", en: "No. I wish I could get enough sleep.", noteEn: "자다 takes -면 좋겠어요." },
          { speaker: "가", ko: "이번에는 한국어능력시험에 합격하면 좋겠어요.", zh: "这次韩国语能力考试能合格就好了。", noteZh: "합격하다 + -면 좋겠어요。", en: "I hope I pass TOPIK this time.", noteEn: "합격하다 takes -면 좋겠어요." },
          { speaker: "나", ko: "저도 올해 3급에 합격하면 좋겠어요.", zh: "我也希望今年能通过3级。", noteZh: "3급에 用 에 标记等级。", en: "I also hope I pass level 3 this year.", noteEn: "3급에 marks the level." },
          { speaker: "가", ko: "이번 여름에 고향에 갔다 오면 좋겠어요.", zh: "这个夏天能回一趟故乡就好了。", noteZh: "갔다 오다 表示去一趟再回来。", en: "I hope I can visit my hometown this summer.", noteEn: "갔다 오다 means go and come back." },
          { speaker: "나", ko: "저는 비자를 연장할 수 있으면 좋겠어요.", zh: "我希望能延长签证。", noteZh: "있다 有收音，接 -으면 좋겠어요。", en: "I hope I can extend my visa.", noteEn: "있다 takes -으면 좋겠어요." }
        ],
        rolePlays: [
          {
            title: "올해 하고 싶은 일",
            promptZh: "用 A/V-(으)면 좋겠어요 说今年最想实现的一件事。",
            answerKo: "저는 올해 한국어능력시험 3급에 합격하면 좋겠어요.",
            translations: { en: { title: "This year's wish", prompt: "Use A/V-(으)면 좋겠어요 to say one thing you hope to achieve this year." } }
          }
        ],
        drills: [
          { pattern: "A/V-(으)면 좋겠어요", promptZh: "잠을 충분히 자다", answerKo: "잠을 충분히 자면 좋겠어요.", translations: { en: { prompt: "get enough sleep" } } },
          { pattern: "A/V-(으)면 좋겠어요", promptZh: "비자를 연장할 수 있다", answerKo: "비자를 연장할 수 있으면 좋겠어요.", translations: { en: { prompt: "be able to extend a visa" } } }
        ]
      },
      {
        id: "dialogue-grammar-02",
        title: "당근은 눈에 좋아요",
        focus: "N에",
        page: 187,
        source: "문법 2",
        sceneZh: "用 N에 좋다/안 좋다 说明食物或行为对哪里有好处。",
        sceneKo: "음식이나 행동이 어디에 좋은지 나쁜지 말해 보세요.",
        sceneEn: "Say what food or behavior is good or bad for.",
        guideZh: "N에 在这里不是地点，而是“对……方面”。如果对象是人，要用 사람에게。",
        guideEn: "Here N에 means for a body part, health, or symptom, not location. Use 사람에게 for a person.",
        lines: [
          { speaker: "가", ko: "당근을 잘 먹네요. 당근을 좋아해요?", zh: "你很会吃胡萝卜呢。喜欢胡萝卜吗？", noteZh: "잘 먹네요 可表示“吃得挺好”。", en: "You eat carrots well. Do you like carrots?", noteEn: "잘 먹네요 can mean someone eats something well." },
          { speaker: "나", ko: "당근은 눈에 좋아요. 그래서 많이 먹으려고 해요.", zh: "胡萝卜对眼睛好。所以我打算多吃。", noteZh: "눈에 좋아요 = 对眼睛好。", en: "Carrots are good for the eyes, so I am trying to eat a lot.", noteEn: "눈에 좋아요 means good for the eyes." },
          { speaker: "가", ko: "요즘 계속 피곤한 것 같아요.", zh: "最近好像一直很累。", noteZh: "것 같아요 表示推测。", en: "You seem tired all the time these days.", noteEn: "것 같아요 expresses an impression." },
          { speaker: "나", ko: "오렌지나 귤은 피로 회복에 좋아요.", zh: "橙子或橘子对恢复疲劳有好处。", noteZh: "피로 회복에 좋다 是固定搭配。", en: "Oranges or tangerines are good for fatigue recovery.", noteEn: "피로 회복에 좋다 is a useful collocation." },
          { speaker: "가", ko: "담배는 건강에 좋지 않아요.", zh: "香烟对健康不好。", noteZh: "좋지 않아요 比 안 좋아요 更书面。", en: "Smoking is bad for health.", noteEn: "좋지 않아요 is a little more formal than 안 좋아요." },
          { speaker: "나", ko: "네, 담배를 끊어야겠어요.", zh: "是的，我得戒烟。", noteZh: "끊다 接 -어야겠어요 表示决心。", en: "Yes, I should quit smoking.", noteEn: "끊어야겠어요 shows a decision." }
        ],
        rolePlays: [
          {
            title: "어디에 좋아요?",
            promptZh: "用 사과 / 소화 和 물 / 피부 各说一句。",
            answerKo: "사과는 소화에 좋아요. 물은 피부에 좋아요.",
            translations: { en: { title: "What is it good for?", prompt: "Make sentences with apple/digestion and water/skin." } }
          }
        ]
      },
      {
        id: "dialogue-speaking-01",
        title: "자기 전에 따뜻한 물로 샤워를 해 보세요",
        focus: "말하기와 듣기",
        page: 188,
        source: "말하기와 듣기",
        sceneZh: "朋友身体不舒服时，询问症状并给出健康建议。",
        sceneKo: "친구의 증상을 듣고 건강에 좋은 방법을 알려 주세요.",
        sceneEn: "Ask about a friend's symptom and suggest a helpful health habit.",
        guideZh: "建议别人试试看时，用 -아/어 보세요。说明原因时，可以接 N에 좋거든요。",
        guideEn: "Use -아/어 보세요 to suggest trying something. Use N에 좋거든요 to explain why it helps.",
        lines: [
          { speaker: "아나이스", ko: "제이슨 씨, 무슨 일 있어요? 안색이 안 좋아요.", zh: "Jason，有什么事吗？你脸色不好。", noteZh: "안색이 안 좋아요 是关心对方状态。", en: "Jason, is something wrong? You do not look well.", noteEn: "안색이 안 좋아요 shows concern." },
          { speaker: "제이슨", ko: "요즘 밤에 잘 못 자요. 잠을 충분히 자면 좋겠어요.", zh: "最近晚上睡不好。要是能睡够就好了。", noteZh: "잘 못 자요 = 睡不好。", en: "I do not sleep well at night these days. I wish I could get enough sleep.", noteEn: "잘 못 자요 means cannot sleep well." },
          { speaker: "아나이스", ko: "그러면 자기 전에 따뜻한 물로 샤워를 해 보세요.", zh: "那睡觉前试着用温水洗澡吧。", noteZh: "-아/어 보세요 建议试试看。", en: "Then try taking a warm shower before going to bed.", noteEn: "-아/어 보세요 suggests trying something." },
          { speaker: "아나이스", ko: "불면증에 좋거든요.", zh: "因为对失眠有好处。", noteZh: "N에 좋다 + 거든요。", en: "It is good for insomnia, you see.", noteEn: "N에 좋다 plus 거든요 gives a reason." },
          { speaker: "제이슨", ko: "그래요? 오늘부터 한번 해 봐야겠어요.", zh: "是吗？从今天开始我得试试看。", noteZh: "-아/어 봐야겠어요 表示决定试试。", en: "Really? I should try it starting today.", noteEn: "-아/어 봐야겠어요 means the speaker should try it." },
          { speaker: "아나이스", ko: "며칠 해 보면 괜찮아질 거예요.", zh: "试几天的话会好起来。", noteZh: "괜찮아지다 = 好起来。", en: "If you try it for a few days, you will get better.", noteEn: "괜찮아지다 means to get better." },
          { speaker: "제이슨", ko: "알려 줘서 고마워요.", zh: "谢谢你告诉我。", noteZh: "알려 주다 = 告诉。", en: "Thank you for telling me.", noteEn: "알려 주다 means to tell someone." }
        ],
        rolePlays: [
          {
            title: "증상 바꾸기",
            promptZh: "把症状换成 소화가 안 되다，并用 아침에 사과를 먹다 / 소화에 좋다 给建议。",
            answerKo: "요즘 소화가 안 돼요. 그러면 아침에 사과를 먹어 보세요. 소화에 좋거든요.",
            translations: { en: { title: "Change the symptom", prompt: "Change the symptom to indigestion and suggest eating an apple in the morning." } }
          }
        ],
        drills: [
          { pattern: "증상 + 방법 + N에 좋다", promptZh: "밤에 잘 못 자다 / 따뜻한 물로 샤워하다 / 불면증", answerKo: "자기 전에 따뜻한 물로 샤워를 해 보세요. 불면증에 좋거든요.", translations: { en: { prompt: "not sleep well / take a warm shower / insomnia" } } },
          { pattern: "증상 + 방법 + N에 좋다", promptZh: "소화가 안 되다 / 아침에 사과를 먹다 / 소화", answerKo: "아침에 사과를 먹어 보세요. 소화에 좋거든요.", translations: { en: { prompt: "indigestion / eat an apple in the morning / digestion" } } }
        ]
      },
      {
        id: "dialogue-reading-01",
        title: "일상생활 속 건강한 생활 습관",
        focus: "읽기와 쓰기",
        page: 189,
        source: "읽기와 쓰기",
        sceneZh: "阅读健康习惯文章，找出睡眠、日常运动和健康饮食三类建议。",
        sceneKo: "건강한 생활 습관 글을 읽고 세 가지 조언을 찾아보세요.",
        sceneEn: "Read a text about healthy lifestyle habits and identify three kinds of advice.",
        guideZh: "文章按 첫째/둘째/셋째 分三段。答题时先找小标题，再回到对应段落。",
        guideEn: "The text is organized with first, second, and third. Find the heading first, then read the matching paragraph.",
        lines: [
          { speaker: "제목", ko: "일상생활 속 건강한 생활 습관", zh: "日常生活中的健康生活习惯", noteZh: "속 表示“在……之中”。", en: "Healthy lifestyle habits in daily life", noteEn: "속 means inside or within." },
          { speaker: "첫째", ko: "충분히 잠을 자려면 먼저 커피를 많이 마시지 않아야 됩니다.", zh: "想睡够的话，首先不应该喝很多咖啡。", noteZh: "-려면 表示“如果想……”。", en: "To get enough sleep, first, you should not drink a lot of coffee.", noteEn: "-려면 means if you want to." },
          { speaker: "첫째", ko: "자기 전에 따뜻한 물로 샤워하고 마음이 편해지는 음악을 들으면 푹 잘 수 있습니다.", zh: "睡前用温水洗澡，并听让心情平静的音乐，就能睡得香。", noteZh: "푹 잘 수 있습니다 = 能睡得好。", en: "If you take a warm shower before bed and listen to relaxing music, you can sleep well.", noteEn: "푹 잘 수 있습니다 means can sleep deeply." },
          { speaker: "둘째", ko: "가까운 거리는 걸어서 갑니다.", zh: "近的地方走路去。", noteZh: "걷다 活用为 걸어서。", en: "For short distances, go on foot.", noteEn: "걷다 becomes 걸어서." },
          { speaker: "둘째", ko: "엘리베이터와 에스컬레이터보다는 계단을 이용합시다.", zh: "比起电梯和自动扶梯，使用楼梯吧。", noteZh: "보다는 表示比较。", en: "Use stairs rather than elevators and escalators.", noteEn: "보다는 makes a comparison." },
          { speaker: "셋째", ko: "짠 음식이나 단 음식 등을 많이 먹지 않습니다.", zh: "不多吃咸的或甜的食物等。", noteZh: "몸에 좋지 않기 때문입니다 是理由。", en: "Do not eat a lot of salty or sweet foods.", noteEn: "The following sentence gives the reason." },
          { speaker: "셋째", ko: "당근은 눈 건강에 좋고, 오렌지나 귤은 피로 회복에 좋습니다.", zh: "胡萝卜对眼睛健康好，橙子或橘子对恢复疲劳有好处。", noteZh: "N에 좋다 的阅读应用。", en: "Carrots are good for eye health, and oranges or tangerines are good for fatigue recovery.", noteEn: "This uses N에 좋다 in reading." },
          { speaker: "질문", ko: "자기 전에 무엇을 하면 쉽게 잘 수 있어요?", zh: "睡前做什么能容易睡着？", noteZh: "从 첫째 段找答案。", en: "What can you do before bed to sleep easily?", noteEn: "Find the answer in the first section." },
          { speaker: "답", ko: "따뜻한 물로 샤워하고 마음이 편해지는 음악을 들으면 쉽게 잘 수 있어요.", zh: "用温水洗澡并听让心情平静的音乐，就能容易睡着。", noteZh: "也可以补充 따뜻한 우유。", en: "If you take a warm shower and listen to relaxing music, you can sleep easily.", noteEn: "You can also mention warm milk." }
        ],
        rolePlays: [
          {
            title: "나만의 건강 습관",
            promptZh: "用 첫째/둘째/셋째 写三条自己的健康习惯。",
            answerKo: "첫째, 잠을 충분히 잡니다. 둘째, 가까운 거리는 걸어서 갑니다. 셋째, 채소와 과일을 많이 먹습니다.",
            translations: { en: { title: "My healthy habits", prompt: "Write three healthy habits using first, second, and third." } }
          }
        ]
      },
      {
        id: "dialogue-pronunciation-01",
        title: "좋겠어요[조케써요]",
        focus: "발음",
        page: 191,
        source: "발음/배운 어휘 확인",
        sceneZh: "练习 좋겠어요、불규칙한 편이에요、하지 않지만 的自然发音。",
        sceneKo: "좋겠어요, 불규칙한 편이에요, 하지 않지만의 자연스러운 발음을 연습해 보세요.",
        sceneEn: "Practice the natural pronunciation of 좋겠어요, 불규칙한 편이에요, and 하지 않지만.",
        guideZh: "本页重点是 ㅎ 的发音变化和连音：좋겠어요 读 [조케써요]，불규칙한 读 [불규치칸]。",
        guideEn: "This page focuses on ㅎ sound changes and linking: 좋겠어요 becomes [조케써요], and 불규칙한 becomes [불규치칸].",
        lines: [
          { speaker: "발음", ko: "좋겠어요[조케써요]", zh: "좋겠어요 的发音：[조케써요]", noteZh: "ㅎ 和 ㄱ 相连，听起来像 ㅋ。", en: "좋겠어요 is pronounced [조케써요].", noteEn: "ㅎ plus ㄱ sounds like ㅋ here." },
          { speaker: "나", ko: "잠을 충분히 자면 좋겠어요.", zh: "要是能睡够就好了。", noteZh: "本课愿望句型。", en: "I hope I can get enough sleep.", noteEn: "This uses the lesson's wish pattern." },
          { speaker: "발음", ko: "불규칙한 편이에요[불규치칸 펴니에요]", zh: "불규칙한 편이에요 的发音：[불규치칸 펴니에요]", noteZh: "칙 + 한 读作 치칸。", en: "불규칙한 편이에요 is pronounced [불규치칸 펴니에요].", noteEn: "칙 + 한 becomes 치칸." },
          { speaker: "가", ko: "요즘 소화가 안 돼요?", zh: "最近消化不好吗？", noteZh: "소화가 안 되다 = 消化不好。", en: "Do you have indigestion these days?", noteEn: "소화가 안 되다 means to have indigestion." },
          { speaker: "나", ko: "네, 식사가 불규칙한 편이에요.", zh: "是的，用餐算是不规律。", noteZh: "A-(으)ㄴ 편이에요 表示倾向。", en: "Yes, my meals tend to be irregular.", noteEn: "A-(으)ㄴ 편이에요 describes a tendency." },
          { speaker: "발음", ko: "하지 않지만[하지 안치만]", zh: "하지 않지만 的发音：[하지 안치만]", noteZh: "않지만 中 ㅎ 影响后面的 ㅈ。", en: "하지 않지만 is pronounced [하지 안치만].", noteEn: "The ㅎ in 않지만 affects the following ㅈ." },
          { speaker: "가", ko: "운동을 자주 하세요?", zh: "经常运动吗？", noteZh: "자주 表示频率高。", en: "Do you exercise often?", noteEn: "자주 means often." },
          { speaker: "나", ko: "자주 하지 않지만 가끔 1시간 정도 걸어요.", zh: "虽然不经常做，但偶尔走1小时左右。", noteZh: "걷다 活用为 걸어요。", en: "I do not do it often, but I sometimes walk for about one hour.", noteEn: "걷다 becomes 걸어요." }
        ],
        rolePlays: [
          {
            title: "발음 따라 읽기",
            promptZh: "跟读三组发音，再用 좋겠어요 / 하지 않지만 各说一句。",
            answerKo: "잠을 충분히 자면 좋겠어요. 운동을 자주 하지 않지만 가끔 걸어요.",
            translations: { en: { title: "Repeat pronunciation", prompt: "Repeat the three pronunciation items, then make sentences with 좋겠어요 and 하지 않지만." } }
          }
        ]
      }
    ],
    culture: {
      title: "민간요법",
      titleKo: "민간요법",
      titleZh: "民间疗法",
      page: 190,
      source: "문화와 정보",
      summaryZh: "文章介绍韩国从以前流传下来的民间疗法，例如消化不良时用手揉肚子、咳嗽严重时煮梨吃、喝酒后的第二天吃豆芽汤。文章也提醒，有些民间疗法没有科学依据，但有些方法的效果已经得到医学证明。",
      summaryEn: "The article introduces Korean folk remedies passed down from the past, such as rubbing a child's stomach for indigestion, boiling pear for a bad cough, and eating bean sprout soup the day after drinking. It also notes that some remedies lack scientific basis, while some have been medically proven effective.",
      paragraphs: [
        {
          ko: "한국에서는 옛날부터 몸이 아플 때 병원에 가거나 약을 먹지 않고 병을 고치는 방법들이 전해지고 있습니다. 예를 들어 소화가 되지 않을 때 어머니들은 아픈 아이의 배를 손으로 쓸어 주었습니다. 이렇게 아픈 배를 낫게 하는 어머니의 손을 '약손'이라고 불렀습니다.",
          zh: "在韩国，从以前开始就流传着身体不舒服时不去医院或不吃药，而是治病的方法。例如，消化不良的时候，母亲们会用手给生病孩子揉肚子。这样让疼痛的肚子好起来的母亲的手，被称为“药手”。",
          noteZh: "약손 是文化词，直译像“药手”，实际指让疼痛缓解的温暖手法。",
          en: "In Korea, methods for curing illnesses without going to the hospital or taking medicine have been passed down from long ago. For example, when children had indigestion, mothers rubbed their stomachs with their hands. The mother's hand that made the painful stomach better was called a 'healing hand.'",
          noteEn: "약손 is a cultural word. Literally it sounds like 'medicine hand,' but it refers to a comforting hand that helps relieve pain."
        },
        {
          ko: "기침이 심할 때는 배를 끓여서 먹으면 기침이 사라지고, 술을 많이 마신 다음 날에는 콩나물국을 먹으면 술이 잘 깹니다. 이러한 민간요법은 과학적인 근거가 없는 것도 있지만 어떤 방법은 의학적으로 그 효과가 입증되어 지금까지 사랑받고 있습니다.",
          zh: "咳嗽严重的时候，把梨煮来吃的话咳嗽会消失；喝很多酒后的第二天，吃豆芽汤的话会更容易醒酒。这些民间疗法中也有一些没有科学依据，但有些方法的效果在医学上得到了证明，所以直到现在仍受到喜爱。",
          noteZh: "这里第一个 배 是“梨”，前文 아픈 아이의 배 是“肚子”，同形不同义。",
          en: "When a cough is bad, boiling pear and eating it makes the cough go away. The day after drinking a lot, eating bean sprout soup helps people sober up. Some of these folk remedies have no scientific basis, but some methods have been medically proven effective and are still loved today.",
          noteEn: "The first 배 here means pear, while 아픈 아이의 배 earlier means stomach."
        }
      ],
      keyTerms: [
        { ko: "민간요법", zh: "民间疗法", en: "folk remedy" },
        { ko: "약손", zh: "药手；疗愈的手", en: "healing hand" },
        { ko: "소화가 되지 않다", zh: "不消化", en: "to have indigestion" },
        { ko: "기침", zh: "咳嗽", en: "cough" },
        { ko: "배", zh: "肚子；梨", en: "stomach; pear" },
        { ko: "콩나물국", zh: "豆芽汤", en: "bean sprout soup" },
        { ko: "과학적인 근거", zh: "科学依据", en: "scientific basis" },
        { ko: "의학적으로 입증되다", zh: "医学上得到证明", en: "to be medically proven" }
      ],
      questions: [
        {
          q: "한국의 민간요법에는 어떤 방법이 있어요?",
          zh: "韩国的民间疗法有哪些方法？",
          a: "소화가 안 될 때 배를 손으로 쓸어 주거나, 기침이 심할 때 배를 끓여서 먹거나, 술을 많이 마신 다음 날 콩나물국을 먹는 방법이 있어요.",
          translations: { en: { translation: "What folk remedies are there in Korea?", answer: "There are methods such as rubbing the stomach for indigestion, boiling pear for a bad cough, and eating bean sprout soup the day after drinking." } }
        },
        {
          q: "이러한 민간요법은 모두 과학적인 방법이에요?",
          zh: "这些民间疗法都是科学的方法吗？",
          a: "아니요. 과학적인 근거가 없는 것도 있지만 어떤 방법은 의학적으로 효과가 입증되었어요.",
          translations: { en: { translation: "Are all these folk remedies scientific methods?", answer: "No. Some have no scientific basis, but some methods have been medically proven effective." } }
        },
        {
          q: "여러분 고향에는 어떤 민간요법이 있어요?",
          zh: "你的故乡有什么民间疗法？",
          a: "감기에 걸리면 따뜻한 차를 마시는 민간요법이 있어요.",
          translations: { en: { translation: "What folk remedy exists in your hometown?", answer: "There is a folk remedy of drinking warm tea when you catch a cold." } }
        }
      ]
    },
    practice: [
      {
        type: "translation",
        title: "中文转韩文",
        prompt: "希望能睡个好觉。",
        answerKo: "잠을 푹 자면 좋겠어요.",
        explanationZh: "表达愿望用 A/V-(으)면 좋겠어요。",
        translations: { en: { title: "Translate to Korean", prompt: "I hope I can sleep well.", explanation: "Use A/V-(으)면 좋겠어요 to express a wish." } }
      },
      {
        type: "pattern",
        title: "A/V-(으)면 좋겠다",
        prompt: "用“한국어능력시험 3급에 합격하다”说“希望能通过韩国语能力考试3级。”",
        answerKo: "한국어능력시험 3급에 합격하면 좋겠어요.",
        explanationZh: "합격하다 没收音，接 -면 좋겠어요。",
        translations: { en: { title: "Pattern: A/V-(으)면 좋겠다", prompt: "Use “pass TOPIK level 3” to say: I hope I pass TOPIK level 3.", explanation: "합격하다 takes -면 좋겠어요." } }
      },
      {
        type: "pattern",
        title: "N에 좋다",
        prompt: "用“당근 / 눈”说“胡萝卜对眼睛好。”",
        answerKo: "당근은 눈에 좋아요.",
        explanationZh: "对身体部位有好处用 N에 좋아요。",
        translations: { en: { title: "Pattern: N에 좋다", prompt: "Use “carrot / eyes” to say: Carrots are good for the eyes.", explanation: "Use N에 좋아요 for something good for a body part." } }
      },
      {
        type: "reading",
        title: "阅读理解",
        prompt: "자기 전에 무엇을 하면 쉽게 잘 수 있어요?",
        answerKo: "따뜻한 물로 샤워하고 마음이 편해지는 음악을 들으면 쉽게 잘 수 있어요.",
        explanationZh: "文章第一段还提到 따뜻한 우유를 한 잔 마시는 것도 좋습니다。",
        translations: { en: { title: "Reading check", prompt: "What can you do before bed to sleep easily?", explanation: "The first paragraph also mentions drinking a cup of warm milk." } }
      },
      {
        type: "culture",
        title: "文化理解",
        prompt: "이러한 민간요법은 모두 과학적인 방법이에요?",
        answerKo: "아니요. 과학적인 근거가 없는 것도 있지만 어떤 방법은 의학적으로 효과가 입증되었어요.",
        explanationZh: "文化文最后一句说明有些没有科学依据，有些则得到医学证明。",
        translations: { en: { title: "Culture check", prompt: "Are all these folk remedies scientific methods?", explanation: "The final sentence says some lack scientific basis, while some have been medically proven effective." } }
      },
      {
        type: "speaking",
        title: "健康建议",
        prompt: "朋友说晚上睡不好。用韩语给一个建议，并说明理由。",
        answerKo: "자기 전에 따뜻한 물로 샤워를 해 보세요. 불면증에 좋거든요.",
        explanationZh: "建议用 -아/어 보세요，理由用 -거든요。",
        translations: { en: { title: "Health advice", prompt: "A friend says they cannot sleep well at night. Give advice in Korean and explain the reason.", explanation: "Use -아/어 보세요 for advice and -거든요 for the reason." } }
      }
    ]
  };

  window.lessonGuideL2LessonChunks ||= {};
  window.lessonGuideL2LessonChunks[lesson.id] = lesson;
})();
