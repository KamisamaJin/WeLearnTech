// KIIP Grammar Database (Updated to KIIP 2021+ New Curriculum Levels & Units, Total: 144)
const grammarDB = [
  {
    "id": "l1_001",
    "category": "L1 - 1과: 안녕하세요?",
    "level": "L1",
    "title": "~은/는",
    "desc": "Topic particle",
    "meaning_zh": "主题助词，标记话题或对比",
    "meaning_en": "Marks topic or contrast",
    "rules": [
      {
        "zh": "有收音+은",
        "en": "Batchim + 은"
      },
      {
        "zh": "无收音+는",
        "en": "No batchim + 는"
      }
    ],
    "examples": [
      {
        "ko": "저는 학생입니다.",
        "en": "I am a student.",
        "zh": "我是学生。"
      },
      {
        "ko": "제 이름은 자야예요.",
        "en": "My name is Jaya.",
        "zh": "我的名字是Jaya。"
      }
    ],
    "notes": "⚠ 话题标记。用于对比(A는 X, B는 Y)或引入新话题。注意与主语标记이/가区分。\n💡 Tips: Topic marker. Used for contrast (A는 X, B는 Y) or introducing a new topic. Do not confuse with subject marker 이/가."
  },
  {
    "id": "l1_002",
    "category": "L1 - 1과: 안녕하세요?",
    "level": "L1",
    "title": "~이에요/예요",
    "desc": "Noun is/am/are",
    "meaning_zh": "名词后接，表示'是...'",
    "meaning_en": "Attached to nouns, means 'is'",
    "rules": [
      {
        "zh": "有收音+이에요",
        "en": "Batchim + 이에요"
      },
      {
        "zh": "无收音+예요",
        "en": "No batchim + 예요"
      }
    ],
    "examples": [
      {
        "ko": "학생이에요.",
        "en": "I am a student.",
        "zh": "是学生。"
      },
      {
        "ko": "미화 씨 친구예요.",
        "en": "It's Mihwa's friend.",
        "zh": "是美华的朋友。"
      }
    ],
    "notes": "⚠ 名词有收音接이에요，无收音接예요。常见错误：학생예요(✗) → 학생이에요(✓)。\n💡 Tips: Noun with batchim takes 이에요, without batchim takes 예요. Common mistake: 학생예요(✗) → 학생이에요(✓)."
  },
  {
    "id": "l1_003",
    "category": "L1 - 2과: 방에 책상이 있어요",
    "level": "L1",
    "title": "~이/가",
    "desc": "Subject particle",
    "meaning_zh": "主格助词，标记主语",
    "meaning_en": "Marks the subject of sentence",
    "rules": [
      {
        "zh": "有收音+이",
        "en": "Batchim + 이"
      },
      {
        "zh": "无收音+가",
        "en": "No batchim + 가"
      }
    ],
    "examples": [
      {
        "ko": "비가 와요.",
        "en": "It rains.",
        "zh": "下雨了。"
      },
      {
        "ko": "누가 왔어요?",
        "en": "Who came?",
        "zh": "谁来了？"
      }
    ],
    "notes": "⚠ 主语标记。强调'谁/什么'做了动作，用于提供新信息：비가 와요 (下雨了 - 新信息)。\n💡 Tips: Subject marker. Emphasizes 'who/what', used for NEW info: 비가 와요 (It is raining - new info)."
  },
  {
    "id": "l1_004",
    "category": "L1 - 3과: 한국어를 배워요",
    "level": "L1",
    "title": "~아/어요",
    "desc": "Present tense polite",
    "meaning_zh": "非格式体现在时终结词尾",
    "meaning_en": "Polite informal present tense ending",
    "rules": [
      {
        "zh": "阳性(ㅏ,ㅗ)+아요",
        "en": "Bright vowel(ㅏ,ㅗ) + 아요"
      },
      {
        "zh": "阴性+어요",
        "en": "Dark vowel + 어요"
      },
      {
        "zh": "하다→해요",
        "en": "하다 → 해요"
      }
    ],
    "examples": [
      {
        "ko": "학교에 가요.",
        "en": "I go to school.",
        "zh": "去学校。"
      },
      {
        "ko": "뭐 해요?",
        "en": "What are you doing?",
        "zh": "你在做什么？"
      }
    ],
    "notes": "⚠ 最常用的非格式体敬语。阳性元音(ㅏ,ㅗ)接아요，其他接어요。하다变为해요。\n💡 Tips: Most common polite ending. Bright vowels (ㅏ,ㅗ) take 아요, others take 어요. 하다 becomes 해요."
  },
  {
    "id": "l1_005",
    "category": "L1 - 3과: 한국어를 배워요",
    "level": "L1",
    "title": "~을/를",
    "desc": "Object particle",
    "meaning_zh": "宾格助词，标记动作对象",
    "meaning_en": "Marks the direct object",
    "rules": [
      {
        "zh": "有收音+을",
        "en": "Batchim + 을"
      },
      {
        "zh": "无收音+를",
        "en": "No batchim + 를"
      }
    ],
    "examples": [
      {
        "ko": "밥을 먹어요.",
        "en": "I eat rice.",
        "zh": "吃饭。"
      },
      {
        "ko": "영화를 봐요.",
        "en": "I watch a movie.",
        "zh": "看电影。"
      }
    ],
    "notes": "⚠ 宾语标记。口语中经常省略(밥 먹어요)，但在书面语和正式讲话中不能省。\n💡 Tips: Object marker. Often dropped in casual speech (밥 먹어요), but MUST be kept in writing and formal speech."
  },
  {
    "id": "l1_006",
    "category": "L1 - 4과: 라흐만 씨가 식당에 가요",
    "level": "L1",
    "title": "~에서",
    "desc": "Dynamic location / From",
    "meaning_zh": "动作发生地点或起点",
    "meaning_en": "Location of action or starting point",
    "rules": [
      {
        "zh": "名词+에서",
        "en": "Noun + 에서"
      }
    ],
    "examples": [
      {
        "ko": "식당에서 먹어요.",
        "en": "I eat at the restaurant.",
        "zh": "在餐厅吃。"
      },
      {
        "ko": "중국에서 왔어요.",
        "en": "I came from China.",
        "zh": "从中国来。"
      }
    ],
    "notes": "⚠ 表示动作发生的场所。和에(静态存在)区分：학교에 있다(在学校) vs 학교에서 공부하다(在学校学习)。也可表示'来自'(오다/나오다)。\n💡 Tips: Location of ACTION. Compare: 학교에 있다(Exist at school) vs 학교에서 공부하다(Study at school). Also means 'from' with 오다/나오다."
  },
  {
    "id": "l1_007",
    "category": "L1 - 4과: 라흐만 씨가 식당에 가요",
    "level": "L1",
    "title": "~에서 ~까지",
    "desc": "From ~ To ~",
    "meaning_zh": "从...到...",
    "meaning_en": "From ~ to ~",
    "rules": [
      {
        "zh": "名词+에서",
        "en": "Noun + 에서"
      },
      {
        "zh": "名词+까지",
        "en": "Noun + 까지"
      }
    ],
    "examples": [
      {
        "ko": "서울에서 부산까지",
        "en": "From Seoul to Busan",
        "zh": "从首尔到釜山"
      },
      {
        "ko": "아침부터 저녁까지 일했어요.",
        "en": "I worked from morning to evening.",
        "zh": "从早到晚工作了。"
      }
    ],
    "notes": "⚠ 可用于空间(从A到B)也可用于时间(从X到Y)。时间范围常与부터~까지混用。\n💡 Tips: Works for both space (from A to B) and time (from X to Y). For time ranges, 부터~까지 is also commonly used."
  },
  {
    "id": "l1_008",
    "category": "L1 - 5과: 오늘은 5월 5일이에요",
    "level": "L1",
    "title": "~에 (장소/시간)",
    "desc": "Location/Time particle",
    "meaning_zh": "表示地点(存在/方向)或时间",
    "meaning_en": "Location or time marker",
    "rules": [
      {
        "zh": "名词+에",
        "en": "Noun + 에"
      }
    ],
    "examples": [
      {
        "ko": "학교에 가요.",
        "en": "I go to school.",
        "zh": "去学校。"
      },
      {
        "ko": "3시에 만나요.",
        "en": "Let's meet at 3.",
        "zh": "3点见。"
      }
    ],
    "notes": "⚠ 表示时间或地点(存在/方向)。注意：어제/오늘/내일/지금 后面不加에。\n💡 Tips: Indicates time or location (existence/direction). Note: Do NOT attach 에 after 어제/오늘/내일/지금."
  },
  {
    "id": "l1_009",
    "category": "L1 - 5과: 오늘은 5월 5일이에요",
    "level": "L1",
    "title": "~에게/께",
    "desc": "To (a person)",
    "meaning_zh": "动作对象助词(给...)",
    "meaning_en": "To a person/animal",
    "rules": [
      {
        "zh": "人+에게/한테/께",
        "en": "Person + 에게/한테/께"
      }
    ],
    "examples": [
      {
        "ko": "친구에게 선물을 줘요.",
        "en": "I give a gift to my friend.",
        "zh": "给朋友礼物。"
      },
      {
        "ko": "부모님께 전화했어요.",
        "en": "I called my parents.",
        "zh": "给父母打了电话。"
      }
    ],
    "notes": "⚠ 表示'给(某人)'。에게(一般)、한테(口语)、께(尊敬)。只用于人/动物，地点请用에。\n💡 Tips: Means 'to (someone)'. 에게(standard), 한테(casual), 께(honorific). Only for people/animals, use 에 for places."
  },
  {
    "id": "l1_010",
    "category": "L1 - 6과: 9시부터 6시까지 일해요",
    "level": "L1",
    "title": "안 + V/A",
    "desc": "Negation",
    "meaning_zh": "否定副词，不做某事",
    "meaning_en": "Negation adverb 'not'",
    "rules": [
      {
        "zh": "안+动词/形容词",
        "en": "안 + Verb/Adjective"
      }
    ],
    "examples": [
      {
        "ko": "안 가요.",
        "en": "I don't go.",
        "zh": "不去。"
      },
      {
        "ko": "오늘은 안 바빠요.",
        "en": "I'm not busy today.",
        "zh": "今天不忙。"
      }
    ],
    "notes": "⚠ 主观否定。放在动词前面。注意：名词+하다动词中，안必须放在하다前面(공부 안 하다)。\n💡 Tips: Subjective negation (do not / will not). For Noun+하다 verbs, 안 MUST be placed right before 하다 (공부 안 하다)."
  },
  {
    "id": "l1_011",
    "category": "L1 - 7과: 김치찌개 하나 주세요",
    "level": "L1",
    "title": "~(으)세요",
    "desc": "Polite request/command",
    "meaning_zh": "尊敬命令终结词尾，请...",
    "meaning_en": "Polite imperative ending",
    "rules": [
      {
        "zh": "无收音+세요",
        "en": "No batchim + 세요"
      },
      {
        "zh": "有收音+으세요",
        "en": "Batchim + 으세요"
      }
    ],
    "examples": [
      {
        "ko": "여기에 앉으세요.",
        "en": "Please sit here.",
        "zh": "请坐这里。"
      },
      {
        "ko": "이쪽으로 오세요.",
        "en": "Please come this way.",
        "zh": "请这边走。"
      }
    ],
    "notes": "⚠ 具有双重功能：①尊敬陈述句(老师来了) ②礼貌命令句(请坐)。靠语境区分。\n💡 Tips: Dual function: ① Honorific statement (The teacher is coming) ② Polite command (Please sit). Determined by context."
  },
  {
    "id": "l1_012",
    "category": "L1 - 7과: 김치찌개 하나 주세요",
    "level": "L1",
    "title": "~(으)십니다/~(으)세요?",
    "desc": "Honorific endings",
    "meaning_zh": "敬语终结词尾",
    "meaning_en": "Honorific sentence endings",
    "rules": [
      {
        "zh": "词干+(으)십니다",
        "en": "Stem + (으)십니다"
      }
    ],
    "examples": [
      {
        "ko": "선생님이 책을 읽으십니다.",
        "en": "The teacher reads a book.",
        "zh": "老师在读书。"
      },
      {
        "ko": "어디에 사십니까?",
        "en": "Where do you live? (formal)",
        "zh": "您住在哪里？"
      }
    ],
    "notes": "⚠ 格式体尊敬语(습니다/십니다)，最正式的级别。主要用于新闻、演讲、军队、面试等场合。\n💡 Tips: Formal honorifics (습니다/십니다). The most formal speech level. Used in news, presentations, military, and interviews."
  },
  {
    "id": "l1_013",
    "category": "L1 - 7과: 김치찌개 하나 주세요",
    "level": "L1",
    "title": "~고 싶다",
    "desc": "Want to",
    "meaning_zh": "想做...",
    "meaning_en": "Want to do",
    "rules": [
      {
        "zh": "动词+고 싶다",
        "en": "Verb + 고 싶다"
      }
    ],
    "examples": [
      {
        "ko": "한국에 가고 싶어요.",
        "en": "I want to go to Korea.",
        "zh": "想去韩国。"
      },
      {
        "ko": "맛있는 음식을 먹고 싶어요.",
        "en": "I want to eat delicious food.",
        "zh": "想吃好吃的。"
      }
    ],
    "notes": "⚠ 表示愿望。陈述句只能用于第一人称(我想...)。第三人称要用'고 싶어하다'。问句可用于第二人称。\n💡 Tips: Expresses desire. Statements only for 1st person (I want...). Use 고 싶어하다 for 3rd person. Questions work for 2nd person."
  },
  {
    "id": "l1_014",
    "category": "L1 - 8과: 칫솔하고 치약을 삽니다",
    "level": "L1",
    "title": "~하고",
    "desc": "And (Noun connector)",
    "meaning_zh": "并列助词，和",
    "meaning_en": "And (connects nouns)",
    "rules": [
      {
        "zh": "名词+하고",
        "en": "Noun + 하고"
      }
    ],
    "examples": [
      {
        "ko": "빵하고 우유",
        "en": "Bread and milk",
        "zh": "面包和牛奶"
      },
      {
        "ko": "친구하고 같이 갔어요.",
        "en": "I went together with my friend.",
        "zh": "和朋友一起去了。"
      }
    ],
    "notes": "⚠ 表示'和/与'。和와/과一样，但하고最口语化。不论有无收音都可以直接接하고。\n💡 Tips: Means 'and/with'. Like 와/과 but more casual. Can be attached regardless of batchim, unlike 와/과."
  },
  {
    "id": "l1_015",
    "category": "L1 - 9과: 지난 주말에 친구를 만났어요",
    "level": "L1",
    "title": "~도",
    "desc": "Also/Too",
    "meaning_zh": "包含助词，也",
    "meaning_en": "Also, too",
    "rules": [
      {
        "zh": "名词+도",
        "en": "Noun + 도"
      }
    ],
    "examples": [
      {
        "ko": "저도 학생이에요.",
        "en": "I'm also a student.",
        "zh": "我也是学生。"
      },
      {
        "ko": "이것도 주세요.",
        "en": "Please give me this too.",
        "zh": "这个也请给我。"
      }
    ],
    "notes": "⚠ 表示'也'。替换掉은/는、이/가、을/를，不能叠加使用：나도(✓) 나는도(✗)。但可以和에/에서叠加：에도/에서도。\n💡 Tips: Means 'also/too'. REPLACES 은/는, 이/가, 을/를 (나는도 ✗, 나도 ✓). But CAN stack with 에/에서 (에도/에서도)."
  },
  {
    "id": "l1_016",
    "category": "L1 - 9과: 지난 주말에 친구를 만났어요",
    "level": "L1",
    "title": "~아도/어도",
    "desc": "Even if / Although",
    "meaning_zh": "即使...也...",
    "meaning_en": "Even if, although",
    "rules": [
      {
        "zh": "动/形+아도/어도",
        "en": "V/A + 아도/어도"
      }
    ],
    "examples": [
      {
        "ko": "비가 와도 갈 거예요.",
        "en": "Even if it rains I'll go.",
        "zh": "即使下雨也会去。"
      },
      {
        "ko": "많이 먹어도 안 살쪄요.",
        "en": "I don't gain weight even if I eat a lot.",
        "zh": "吃很多也不会胖。"
      }
    ],
    "notes": "⚠ 假设/让步'即使...也'。常与 아무리(无论怎么) 搭配：아무리 먹어도 안 쪄요 (怎么吃都不胖)。\n💡 Tips: Concession 'even if / even though'. Often paired with 아무리 (no matter how): 아무리 먹어도 (no matter how much I eat)."
  },
  {
    "id": "l1_017",
    "category": "L1 - 9과: 지난 주말에 친구를 만났어요",
    "level": "L1",
    "title": "~았/었",
    "desc": "Past tense",
    "meaning_zh": "过去时",
    "meaning_en": "Past tense",
    "rules": [
      {
        "zh": "阳性+았",
        "en": "Bright vowel + 았"
      },
      {
        "zh": "阴性+었",
        "en": "Dark vowel + 었"
      },
      {
        "zh": "하다→했",
        "en": "하다 → 했 (하다 verb)"
      }
    ],
    "examples": [
      {
        "ko": "어제 영화를 봤어요.",
        "en": "I watched a movie yesterday.",
        "zh": "昨天看了电影。"
      },
      {
        "ko": "오늘 많이 걸었어요.",
        "en": "I walked a lot today.",
        "zh": "今天走了很多路。"
      }
    ],
    "notes": "⚠ 过去时标记。注意特殊缩写：가+았→갔, 오+았→왔, 마시+었→마셨, 하+았→했。\n💡 Tips: Past tense marker. Note common contractions: 가+았→갔, 오+았→왔, 마시+었→마셨, 하+았→했."
  },
  {
    "id": "l1_018",
    "category": "L1 - 10과: 아버지는 요리를 잘하세요",
    "level": "L1",
    "title": "~지만",
    "desc": "But/However",
    "meaning_zh": "转折(虽然...但是)",
    "meaning_en": "But, however",
    "rules": [
      {
        "zh": "词干+지만",
        "en": "Stem + 지만"
      }
    ],
    "examples": [
      {
        "ko": "비싸지만 맛있어요.",
        "en": "Expensive but delicious.",
        "zh": "虽贵但好吃。"
      },
      {
        "ko": "작지만 아늑해요.",
        "en": "Small but cozy.",
        "zh": "虽小但温馨。"
      }
    ],
    "notes": "⚠ 强烈的转折'虽然...但是'。前面可以接过去时(했지만)，对比 는데(较柔和)。\n💡 Tips: Strong contrast 'but / although'. Can take past tense before it (했지만). Stronger contrast than the softer 는데."
  },
  {
    "id": "l1_019",
    "category": "L1 - 12과: 이번 휴가에 뭐 할 거예요?",
    "level": "L1",
    "title": "~(으)ㄹ 거예요",
    "desc": "Future tense",
    "meaning_zh": "将来时(计划/推测)",
    "meaning_en": "Future tense (plan/guess)",
    "rules": [
      {
        "zh": "无收音+ㄹ 거예요",
        "en": "No batchim + ㄹ 거예요"
      },
      {
        "zh": "有收音+을 거예요",
        "en": "Batchim + 을 거예요"
      }
    ],
    "examples": [
      {
        "ko": "내일 갈 거예요.",
        "en": "I'll go tomorrow.",
        "zh": "明天要去。"
      },
      {
        "ko": "주말에 쉴 거예요.",
        "en": "I'm going to rest on the weekend.",
        "zh": "周末打算休息。"
      }
    ],
    "notes": "⚠ 将来时/推测。第一人称表示自己的计划(갈 거예요)，第二/三人称表示推测(올 거예요)。\n💡 Tips: Future/Guess. 1st person expresses one's own plan (I will go), 2nd/3rd person expresses a guess (They will probably come)."
  },
  {
    "id": "l1_020",
    "category": "L1 - 12과: 이번 휴가에 뭐 할 거예요?",
    "level": "L1",
    "title": "~고",
    "desc": "And/Then",
    "meaning_zh": "并列或先后",
    "meaning_en": "And, and then",
    "rules": [
      {
        "zh": "词干+고",
        "en": "Stem + 고"
      }
    ],
    "examples": [
      {
        "ko": "밥을 먹고 커피를 마셔요.",
        "en": "I eat and drink coffee.",
        "zh": "吃饭然后喝咖啡。"
      },
      {
        "ko": "커피는 싸고 맛있어요.",
        "en": "Coffee is cheap and delicious.",
        "zh": "咖啡又便宜又好喝。"
      }
    ],
    "notes": "⚠ 动作的并列或先后顺序'和/然后'。前后句没有因果关系。如果是因果请用 아/어서。\n💡 Tips: Simple 'and / then'. Sequential or parallel actions with NO causal relationship. For cause-effect, use 아/어서."
  },
  {
    "id": "l1_021",
    "category": "L1 - 12과: 이번 휴가에 뭐 할 거예요?",
    "level": "L1",
    "title": "~고 있다",
    "desc": "Progressive",
    "meaning_zh": "现在进行时(正在)",
    "meaning_en": "Present progressive",
    "rules": [
      {
        "zh": "动词+고 있다",
        "en": "Verb + 고 있다"
      }
    ],
    "examples": [
      {
        "ko": "책을 읽고 있어요.",
        "en": "I'm reading a book.",
        "zh": "正在读书。"
      },
      {
        "ko": "지금 한국어를 공부하고 있어요.",
        "en": "I'm studying Korean right now.",
        "zh": "现在正在学韩语。"
      }
    ],
    "notes": "⚠ 动作正在进行中。注意与 아/어 있다(结果状态保持)区分。앉고 있다(正坐下去) vs 앉아 있다(正坐着)。\n💡 Tips: Action in progress. Do not confuse with 아/어 있다 (resulting state). 앉고 있다 (in the act of sitting) vs 앉아 있다 (currently seated)."
  },
  {
    "id": "l1_022",
    "category": "L1 - 12과: 이번 휴가에 뭐 할 거예요?",
    "level": "L1",
    "title": "~더라고요",
    "desc": "I noticed/observed",
    "meaning_zh": "回忆亲眼所见(我发现...)",
    "meaning_en": "Recalling personal observation",
    "rules": [
      {
        "zh": "动/形+더라고요",
        "en": "V/A + 더라고요"
      }
    ],
    "examples": [
      {
        "ko": "그 식당 음식이 맛있더라고요.",
        "en": "I found the food there was good.",
        "zh": "那家餐厅的菜很好吃（我亲眼见）。"
      },
      {
        "ko": "제주도가 정말 아름답더라고요.",
        "en": "I found Jeju Island really beautiful.",
        "zh": "济州岛真的很美（我亲身感受到的）。"
      }
    ],
    "notes": "⚠ 回忆并陈述自己亲身经历或目睹的事。不能用于转述别人的传闻。\n💡 Tips: Recalling and stating something you personally experienced/witnessed. CANNOT be used for hearsay."
  },
  {
    "id": "l1_023",
    "category": "L1 - 13과: 버스로 공항에 가요",
    "level": "L1",
    "title": "~(으)러 가다/오다",
    "desc": "Go/Come to do",
    "meaning_zh": "为了做...而去/来",
    "meaning_en": "Go/come for the purpose of",
    "rules": [
      {
        "zh": "无收音+러",
        "en": "No batchim + 러"
      },
      {
        "zh": "有收音+으러",
        "en": "Batchim + 으러"
      }
    ],
    "examples": [
      {
        "ko": "먹으러 가요.",
        "en": "I go to eat.",
        "zh": "去吃饭。"
      },
      {
        "ko": "책을 빌리러 도서관에 갔어요.",
        "en": "Went to the library to borrow books.",
        "zh": "去图书馆借书了。"
      }
    ],
    "notes": "⚠ 表示移动的目的'去/来做某事'。只能和移动动词(가다/오다/다니다)搭配！\n💡 Tips: Purpose of movement 'going/coming to do...'. ONLY pairs with movement verbs (가다/오다/다니다)!"
  },
  {
    "id": "l1_024",
    "category": "L1 - 13과: 버스로 공항에 가요",
    "level": "L1",
    "title": "~(으)로",
    "desc": "Direction/Method",
    "meaning_zh": "方向、手段、材料助词",
    "meaning_en": "Direction, means, or material",
    "rules": [
      {
        "zh": "无收音/ㄹ+로",
        "en": "No batchim/ㄹ + 로"
      },
      {
        "zh": "有收音+으로",
        "en": "Batchim + 으로"
      }
    ],
    "examples": [
      {
        "ko": "버스로 가요.",
        "en": "I go by bus.",
        "zh": "坐公交车去。"
      },
      {
        "ko": "오른쪽으로 가세요.",
        "en": "Go right.",
        "zh": "请往右边走。"
      }
    ],
    "notes": "⚠ 多功能助词：①方向(왼쪽으로) ②工具/手段(버스로) ③原因(감기로)。ㄹ收音后直接用로(서울로)。\n💡 Tips: Multi-use: ①Direction (왼쪽으로) ②Tool/Means (버스로) ③Cause (감기로). After ㄹ batchim, use 로 instead of 으로 (서울로)."
  },
  {
    "id": "l1_025",
    "category": "L1 - 14과: 저녁 7시에 만날까요?",
    "level": "L1",
    "title": "~(으)ㄹ까요?",
    "desc": "Shall we?",
    "meaning_zh": "提议/询问意见",
    "meaning_en": "Suggestion or asking opinion",
    "rules": [
      {
        "zh": "无收音+ㄹ까요?",
        "en": "No batchim + ㄹ까요?"
      },
      {
        "zh": "有收音+을까요?",
        "en": "Batchim + 을까요?"
      }
    ],
    "examples": [
      {
        "ko": "같이 갈까요?",
        "en": "Shall we go together?",
        "zh": "一起去好吗？"
      },
      {
        "ko": "창문을 열까요?",
        "en": "Shall I open the window?",
        "zh": "要不要我开窗？"
      }
    ],
    "notes": "⚠ 两种用法：①第一人称提议(같이 갈까요? = 一起去吗？) ②询问/猜测意见(비가 올까요? = 会下雨吗？)。\n💡 Tips: Two uses: ① 1st person suggestion (Shall we go?) ② Wondering/guessing (Will it rain?)."
  },
  {
    "id": "l1_026",
    "category": "L1 - 14과: 저녁 7시에 만날까요?",
    "level": "L1",
    "title": "~지 못하다 / 못",
    "desc": "Cannot (inability)",
    "meaning_zh": "客观不能(做不了)",
    "meaning_en": "Cannot (objective inability)",
    "rules": [
      {
        "zh": "못+动词",
        "en": "못 + Verb"
      },
      {
        "zh": "词干+지 못하다",
        "en": "Stem + 지 못하다"
      }
    ],
    "examples": [
      {
        "ko": "바빠서 못 갔어요.",
        "en": "Was busy so couldn't go.",
        "zh": "太忙没能去。"
      },
      {
        "ko": "시간이 없어서 못 갔어요.",
        "en": "Couldn't go because I had no time.",
        "zh": "没时间没能去。"
      }
    ],
    "notes": "⚠ 表示客观能力不足(不能/没能)。区分：못(能力不足无法做) vs 안(主观意愿不想做)。\n💡 Tips: Objective inability (cannot / could not). Crucial difference: 못 = inability (can't), 안 = lack of will (won't)."
  },
  {
    "id": "l1_027",
    "category": "L1 - 15과: 오늘 날씨가 정말 덥네요",
    "level": "L1",
    "title": "~네요",
    "desc": "Exclamation",
    "meaning_zh": "感叹(哦！原来...)",
    "meaning_en": "Exclamation of surprise",
    "rules": [
      {
        "zh": "动/形+네요",
        "en": "V/A + 네요"
      }
    ],
    "examples": [
      {
        "ko": "날씨가 좋네요!",
        "en": "The weather is nice!",
        "zh": "天气真好呀！"
      },
      {
        "ko": "이 케이크 정말 맛있네요!",
        "en": "This cake is really delicious!",
        "zh": "这蛋糕真好吃呀！"
      }
    ],
    "notes": "⚠ 亲身经历的第一手感叹。表示说话人刚刚发现某事：맛있네요!(真好吃!-刚吃出味道)。不能用于已知信息。\n💡 Tips: First-hand exclamation of surprise. Used when you JUST realized/noticed something: 맛있네요!(Wow it's good!-just tasted it). Not for old info."
  },
  {
    "id": "l1_028",
    "category": "L1 - 15과: 오늘 날씨가 정말 덥네요",
    "level": "L1",
    "title": "~보다",
    "desc": "Than (comparison)",
    "meaning_zh": "比较助词",
    "meaning_en": "Comparison particle",
    "rules": [
      {
        "zh": "名词+보다",
        "en": "Noun + 보다"
      }
    ],
    "examples": [
      {
        "ko": "사과보다 수박이 더 커요.",
        "en": "Watermelon is bigger than apple.",
        "zh": "西瓜比苹果大。"
      },
      {
        "ko": "여름보다 겨울을 좋아해요.",
        "en": "I prefer winter over summer.",
        "zh": "比起夏天更喜欢冬天。"
      }
    ],
    "notes": "⚠ 보다后面通常搭配더(更)或덜(没那么)使用。比较句型：A보다 B가 더 ~ (比起A，B更~)。\n💡 Tips: Usually paired with 더(more) or 덜(less). Pattern: A보다 B가 더 ~ (Compared to A, B is more ~)."
  },
  {
    "id": "l1_029",
    "category": "L1 - 16과: 배가 아파서 병원에 가요",
    "level": "L1",
    "title": "~아/어서",
    "desc": "Because / Then",
    "meaning_zh": "原因(因为)/先后",
    "meaning_en": "Reason or sequential",
    "rules": [
      {
        "zh": "阳+아서",
        "en": "Bright + 아서"
      },
      {
        "zh": "阴+어서",
        "en": "Dark + 어서"
      },
      {
        "zh": "하→해서",
        "en": "하다 → 해서 (하다 verb)"
      }
    ],
    "examples": [
      {
        "ko": "비가 와서 집에 있어요.",
        "en": "It's raining so I'm home.",
        "zh": "因为下雨在家。"
      },
      {
        "ko": "배가 아파서 병원에 갔어요.",
        "en": "Went to the hospital because my stomach hurt.",
        "zh": "肚子疼所以去了医院。"
      }
    ],
    "notes": "⚠ 表示原因'因为'，或动作先后顺序。注意：后面绝对不能接命令句或共动句(如세요/ㅂ시다)。\n💡 Tips: Indicates reason 'because', or sequential actions. Note: CANNOT be followed by commands or suggestions (like 세요/ㅂ시다)."
  },
  {
    "id": "l1_030",
    "category": "L1 - 18과: 한국 생활은 조금 힘든데 재미있어요",
    "level": "L1",
    "title": "~(으)ㄴ/는데",
    "desc": "Background/But",
    "meaning_zh": "提示背景信息或轻微转折",
    "meaning_en": "Background or soft contrast",
    "rules": [
      {
        "zh": "动词+는데",
        "en": "Verb + 는데"
      },
      {
        "zh": "形容词+ㄴ/은데",
        "en": "Adj + ㄴ/은데"
      }
    ],
    "examples": [
      {
        "ko": "날씨가 좋은데 산책할까요?",
        "en": "Weather's nice, walk?",
        "zh": "天气好，散步？"
      },
      {
        "ko": "시간이 있는데 같이 가요.",
        "en": "I have time, let's go together.",
        "zh": "有时间，一起去吧。"
      }
    ],
    "notes": "⚠ 韩语最万能的连接词！三大用法：①背景铺垫(시간이 있는데...) ②轻微转折(좋은데 비싸요) ③引出话题。\n💡 Tips: The most versatile connector! Uses: ① Background info (시간이 있는데...), ② Soft contrast (좋은데 비싸요), ③ Topic introduction."
  },
  {
    "id": "l1_031",
    "category": "L1 - 18과: 한국 생활은 조금 힘든데 재미있어요",
    "level": "L1",
    "title": "~(이)지요?",
    "desc": "Isn't it? / Right?",
    "meaning_zh": "确认语气(是不是/对吧)",
    "meaning_en": "Confirming what you expect",
    "rules": [
      {
        "zh": "词干+지요?",
        "en": "Stem + 지요?"
      }
    ],
    "examples": [
      {
        "ko": "학생이지요?",
        "en": "You're a student, right?",
        "zh": "是学生吧？"
      },
      {
        "ko": "오늘 금요일이지요?",
        "en": "Today is Friday, right?",
        "zh": "今天是周五对吧？"
      }
    ],
    "notes": "⚠ 寻求对方同意或确认双方都知道的事实。口语中常缩写为죠：맛있지요? → 맛있죠?\n💡 Tips: Seeking agreement or confirming shared knowledge. Shortened to 죠 in casual speech: 맛있지요? → 맛있죠?"
  },
  {
    "id": "l1_032",
    "category": "L1 - 추가 문법 (Extra Grammar)",
    "level": "L1",
    "title": "~(으)ㅂ시다",
    "desc": "Let's",
    "meaning_zh": "共动句(一起...吧)",
    "meaning_en": "Let's do together",
    "rules": [
      {
        "zh": "无收音+ㅂ시다",
        "en": "No batchim + ㅂ시다"
      },
      {
        "zh": "有收音+읍시다",
        "en": "Batchim + 읍시다"
      }
    ],
    "examples": [
      {
        "ko": "같이 갑시다.",
        "en": "Let's go together.",
        "zh": "一起走吧。"
      },
      {
        "ko": "내일 다시 만납시다.",
        "en": "Let's meet again tomorrow.",
        "zh": "明天再见吧。"
      }
    ],
    "notes": "⚠ 第一人称复数共动句(我们一起...)。不能对长辈使用，对长辈提议请用 ~(으)ㄹ까요?。\n💡 Tips: 1st person plural suggestion (Let's...). CANNOT be used towards elders/superiors. Use ~(으)ㄹ까요? instead for polite suggestions."
  },
  {
    "id": "l1_033",
    "category": "L1 - 추가 문법 (Extra Grammar)",
    "level": "L1",
    "title": "~마다",
    "desc": "Every",
    "meaning_zh": "每...",
    "meaning_en": "Every, each",
    "rules": [
      {
        "zh": "名词+마다",
        "en": "Noun + 마다"
      }
    ],
    "examples": [
      {
        "ko": "주말마다 운동해요.",
        "en": "I exercise every weekend.",
        "zh": "每个周末运动。"
      },
      {
        "ko": "날마다 한국어를 공부해요.",
        "en": "I study Korean every day.",
        "zh": "每天学习韩语。"
      }
    ],
    "notes": "⚠ 表示'每'。直接接在名词后，不需要其他助词：날마다(每天)，사람마다(每个人)。\n💡 Tips: Means 'every/each'. Attaches directly to nouns without other particles: 날마다(every day), 사람마다(each person)."
  },
  {
    "id": "l1_034",
    "category": "L1 - 추가 문법 (Extra Grammar)",
    "level": "L1",
    "title": "~만",
    "desc": "Only",
    "meaning_zh": "限制助词，只/仅",
    "meaning_en": "Only, just",
    "rules": [
      {
        "zh": "名词+만",
        "en": "Noun + 만"
      }
    ],
    "examples": [
      {
        "ko": "물만 마셔요.",
        "en": "I only drink water.",
        "zh": "只喝水。"
      },
      {
        "ko": "커피만 마셨어요.",
        "en": "I only drank coffee.",
        "zh": "只喝了咖啡。"
      }
    ],
    "notes": "⚠ 替换을/를和이/가，但可以和에、에서叠加(에만/에서만)。强调排他性：커피만 마셔요(只喝咖啡)。\n💡 Tips: Replaces 을/를 and 이/가, but stacks with 에/에서 (에만/에서만). Emphasizes exclusivity: 커피만 마셔요(Drink ONLY coffee)."
  },
  {
    "id": "l1_035",
    "category": "L1 - 추가 문법 (Extra Grammar)",
    "level": "L1",
    "title": "~아/어 주세요",
    "desc": "Please do for me",
    "meaning_zh": "请帮忙做...",
    "meaning_en": "Requesting a favor",
    "rules": [
      {
        "zh": "词干+아/어 주세요",
        "en": "Stem + 아/어 주세요"
      }
    ],
    "examples": [
      {
        "ko": "문을 열어 주세요.",
        "en": "Please open the door.",
        "zh": "请帮忙开门。"
      },
      {
        "ko": "천천히 말해 주세요.",
        "en": "Please speak slowly.",
        "zh": "请慢慢说。"
      }
    ],
    "notes": "⚠ 委婉请求：'请为我做...'。比命令句(으)세요更有礼貌、更柔和。\n💡 Tips: Polite request: 'Please do... for me'. Softer and more polite than the direct command (으)세요."
  },
  {
    "id": "l1_036",
    "category": "L1 - 추가 문법 (Extra Grammar)",
    "level": "L1",
    "title": "~지 말다",
    "desc": "Don't (Prohibition)",
    "meaning_zh": "禁止(不要做...)",
    "meaning_en": "Prohibition",
    "rules": [
      {
        "zh": "词干+지 마세요",
        "en": "Stem + 지 마세요"
      }
    ],
    "examples": [
      {
        "ko": "담배를 피우지 마세요.",
        "en": "Don't smoke.",
        "zh": "请不要吸烟。"
      },
      {
        "ko": "여기서 사진 찍지 마세요.",
        "en": "Don't take photos here.",
        "zh": "请不要在这里拍照。"
      }
    ],
    "notes": "⚠ 否定命令句，表示'别做/请勿做...'。只能用于命令/共动句，不能用于陈述句。\n💡 Tips: Negative imperative meaning 'Don't do...'. ONLY used in commands/suggestions. Cannot be used in plain statements."
  },
  {
    "id": "l1_037",
    "category": "L1 - 추가 문법 (Extra Grammar)",
    "level": "L1",
    "title": "~지 않다",
    "desc": "Negation (long form)",
    "meaning_zh": "长形否定（不...）",
    "meaning_en": "Long-form negation",
    "rules": [
      {
        "zh": "词干+지 않다",
        "en": "Stem + 지 않다"
      }
    ],
    "examples": [
      {
        "ko": "맵지 않아요.",
        "en": "It's not spicy.",
        "zh": "不辣。"
      },
      {
        "ko": "그 영화는 재미있지 않아요.",
        "en": "That movie isn't fun.",
        "zh": "那部电影没意思。"
      }
    ],
    "notes": "⚠ 比'안'更正式的否定方式，多用于书面语。对所有的动词/形容词都适用，没有位置限制。\n💡 Tips: More formal negation than '안', often used in writing. Works with ALL verbs/adjectives without placement restrictions."
  },
  {
    "id": "l2_001",
    "category": "L2 - 1과: 제 고향은 경치가 아름다운 곳이에요",
    "level": "L2",
    "title": "~(으)ㄴ (형/동 관형형)",
    "desc": "Adj modifier / Past verb",
    "meaning_zh": "形容词定语/动词过去时定语",
    "meaning_en": "Adj modifier or past verb modifier",
    "rules": [
      {
        "zh": "形容词+ㄴ/은",
        "en": "Adj + ㄴ/은"
      },
      {
        "zh": "动词+ㄴ/은",
        "en": "Verb(past) + ㄴ/은"
      }
    ],
    "examples": [
      {
        "ko": "예쁜 옷",
        "en": "Pretty clothes",
        "zh": "漂亮的衣服"
      },
      {
        "ko": "어제 먹은 음식",
        "en": "Food I ate yesterday",
        "zh": "昨天吃的食物"
      }
    ],
    "notes": "⚠ 双重身份：①形容词现在时(예쁜 꽃 = 漂亮的花) ②动词过去时(먹은 음식 = 吃过的食物)。\n💡 Tips: Dual role: ① Adjective present (예쁜 꽃 = pretty flower), ② Verb past (먹은 음식 = food I ate)."
  },
  {
    "id": "l2_002",
    "category": "L2 - 1과: 제 고향은 경치가 아름다운 곳이에요",
    "level": "L2",
    "title": "~(으)ㄴ 적이 있다/없다",
    "desc": "Have experienced",
    "meaning_zh": "曾经做过/没做过",
    "meaning_en": "Have/haven't experienced",
    "rules": [
      {
        "zh": "动词+ㄴ/은 적이 있다",
        "en": "Verb + ㄴ/은 적이 있다"
      }
    ],
    "examples": [
      {
        "ko": "한국에 간 적이 있어요.",
        "en": "I've been to Korea.",
        "zh": "去过韩国。"
      },
      {
        "ko": "스키를 탄 적이 없어요.",
        "en": "I've never skied.",
        "zh": "没有滑过雪。"
      }
    ],
    "notes": "⚠ 表示经验(曾经做过/没做过)。必须搭配过去定语形ㄴ/은：먹은 적(✓), 먹는 적(✗)。\n💡 Tips: Past experience (have done / haven't done). MUST use past modifier ㄴ/은: 먹은 적(✓), 먹는 적(✗)."
  },
  {
    "id": "l2_003",
    "category": "L2 - 1과: 제 고향은 경치가 아름다운 곳이에요",
    "level": "L2",
    "title": "~(으)ㄴ 지",
    "desc": "Since (time)",
    "meaning_zh": "从做...以来过了多久",
    "meaning_en": "Time since doing",
    "rules": [
      {
        "zh": "动词+ㄴ/은 지",
        "en": "Verb + ㄴ/은 지"
      }
    ],
    "examples": [
      {
        "ko": "한국에 온 지 3년 됐어요.",
        "en": "It's been 3 years since I came to Korea.",
        "zh": "来韩国已经3年了。"
      },
      {
        "ko": "결혼한 지 10년 됐어요.",
        "en": "It's been 10 years since I got married.",
        "zh": "结婚已经10年了。"
      }
    ],
    "notes": "⚠ 表示做某事过去了多久'自从...以来'。固定搭配：V+ㄴ 지 + 时间量词 + 되다/지나다/넘다。\n💡 Tips: Time elapsed 'since...'. Fixed pattern: V+ㄴ 지 + time span + 되다/지나다/넘다 (e.g., 온 지 3년 됐어요 = 3 years since coming)."
  },
  {
    "id": "l2_004",
    "category": "L2 - 1과: 제 고향은 경치가 아름다운 곳이에요",
    "level": "L2",
    "title": "~(으)ㄴ 후에 / ~기 전에",
    "desc": "After/Before",
    "meaning_zh": "...之后/...之前",
    "meaning_en": "After doing / Before doing",
    "rules": [
      {
        "zh": "动词+ㄴ/은 후에",
        "en": "Verb(past) + ㄴ/은 후에"
      },
      {
        "zh": "动词+기 전에",
        "en": "Verb + 기 전에 (before)"
      }
    ],
    "examples": [
      {
        "ko": "밥 먹기 전에 손을 씻어요.",
        "en": "Wash hands before eating.",
        "zh": "饭前洗手。"
      },
      {
        "ko": "운동한 후에 샤워해요.",
        "en": "I shower after exercising.",
        "zh": "运动完之后洗澡。"
      }
    ],
    "notes": "⚠ 时间顺序：V+ㄴ 후에(之后) / V+기 전에(之前)。注意定语形不要搞反。\n💡 Tips: Time sequence: V+ㄴ 후에 (after doing) / V+기 전에 (before doing). Make sure not to mix up the modifiers."
  },
  {
    "id": "l2_005",
    "category": "L2 - 2과: 쓰레기는 내가 버릴게요",
    "level": "L2",
    "title": "~(으)ㄹ게요",
    "desc": "I will (promise)",
    "meaning_zh": "意志/承诺(我会...)",
    "meaning_en": "Promise/will",
    "rules": [
      {
        "zh": "无收音+ㄹ게요",
        "en": "No batchim + ㄹ게요"
      },
      {
        "zh": "有收音+을게요",
        "en": "Batchim + 을게요"
      }
    ],
    "examples": [
      {
        "ko": "제가 할게요.",
        "en": "I'll do it.",
        "zh": "我来做。"
      },
      {
        "ko": "내일 다시 전화할게요.",
        "en": "I'll call again tomorrow.",
        "zh": "明天再打电话给你。"
      }
    ],
    "notes": "⚠ 第一人称专属！表示向对方做出承诺/表决心：제가 할게요(我来做)。不能用于第三人称。\n💡 Tips: 1st person ONLY! Expresses a promise/commitment to the listener: 제가 할게요 (I will do it). Cannot be used for others."
  },
  {
    "id": "l2_006",
    "category": "L2 - 3과: 이걸로 한번 입어 보세요",
    "level": "L2",
    "title": "~(이)나",
    "desc": "Or / About",
    "meaning_zh": "或者/大约",
    "meaning_en": "Or, approximately",
    "rules": [
      {
        "zh": "名词+(이)나",
        "en": "Noun + (이)나"
      }
    ],
    "examples": [
      {
        "ko": "커피나 주스 드세요.",
        "en": "Have coffee or juice.",
        "zh": "喝咖啡或果汁吧。"
      },
      {
        "ko": "2시간이나 기다렸어요.",
        "en": "I waited as long as 2 hours.",
        "zh": "等了整整两个小时。"
      }
    ],
    "notes": "⚠ 两个含义：①选择 '或' (커피나 차) ②强调数量大 (3시간이나 기다렸어요! = 等了整整3个小时！)。\n💡 Tips: Two meanings: ① Choice 'or' (커피나 차), ② Emphasis on large quantity (3시간이나 기다렸어요! = Waited a whole 3 hours!)."
  },
  {
    "id": "l2_007",
    "category": "L2 - 3과: 이걸로 한번 입어 보세요",
    "level": "L2",
    "title": "~밖에",
    "desc": "Nothing but / Only",
    "meaning_zh": "表示“只有... / 除了...之外没有”。后面必须接否定词（안, 못, 없다, 모르다 等）。",
    "meaning_en": "Means 'only' or 'nothing but'. MUST be followed by a negative form (안, 못, 없다, 모르다, etc.).",
    "rules": [
      {
        "zh": "名词+밖에",
        "en": "Noun + 밖에"
      }
    ],
    "examples": [
      {
        "ko": "지갑에 1000원밖에 없어요.",
        "en": "I have nothing but 1,000 won in my wallet.",
        "zh": "钱包里只有1000韩元了。"
      },
      {
        "ko": "한국어는 '안녕하세요'밖에 몰라요.",
        "en": "I know nothing but 'Hello' in Korean.",
        "zh": "韩语我只会说一句“你好”。"
      }
    ],
    "notes": "💡 Tips: Unlike ~만 (only), ~밖에 MUST always be paired with a negative ending. You cannot say 1000원밖에 있어요 (✗).\n⚠ 核心规则：与 ~만(只) 类似，但 ~밖에 后面【绝对不能接肯定句】。不能说 1000원밖에 있어요 (✗)。"
  },
  {
    "id": "l2_008",
    "category": "L2 - 3과: 이걸로 한번 입어 보세요",
    "level": "L2",
    "title": "~아/어 보다",
    "desc": "Try doing",
    "meaning_zh": "尝试做某事/经验",
    "meaning_en": "Try doing; have experienced",
    "rules": [
      {
        "zh": "动词+아/어 보다",
        "en": "Verb + 아/어 보다"
      }
    ],
    "examples": [
      {
        "ko": "이 옷을 입어 보세요.",
        "en": "Try wearing this.",
        "zh": "请试穿这件。"
      },
      {
        "ko": "김치를 먹어 봤어요?",
        "en": "Have you tried eating kimchi?",
        "zh": "你吃过泡菜吗？"
      }
    ],
    "notes": "⚠ 两种含义：①尝试(먹어 보세요=请尝尝) ②经历(가 봤어요=去过)。过去时(봤다)常表示经验。\n💡 Tips: Two meanings: ① Try doing (먹어 보세요 = try eating), ② Experience (가 봤어요 = have gone). Past tense (봤다) means experience."
  },
  {
    "id": "l2_009",
    "category": "L2 - 4과: 지금 통화할 수 있어요?",
    "level": "L2",
    "title": "~(으)ㄹ 수 있다/없다",
    "desc": "Can/Cannot",
    "meaning_zh": "能/不能做某事",
    "meaning_en": "Can/Cannot do",
    "rules": [
      {
        "zh": "无收音+ㄹ 수 있다",
        "en": "No batchim + ㄹ 수 있다"
      },
      {
        "zh": "有收音+을 수 있다",
        "en": "Batchim + 을 수 있다"
      }
    ],
    "examples": [
      {
        "ko": "한국어를 할 수 있어요.",
        "en": "I can speak Korean.",
        "zh": "会说韩语。"
      },
      {
        "ko": "매운 음식을 먹을 수 없어요.",
        "en": "I can't eat spicy food.",
        "zh": "不能吃辣的食物。"
      }
    ],
    "notes": "⚠ 能力/可能性'能/不能'。수是依存名词，必须和前面的词分写：할 수 있다(✓), 할수있다(✗)。\n💡 Tips: Ability/Possibility 'can / cannot'. 수 is a bound noun and MUST have a space before it: 할 수 있다(✓)."
  },
  {
    "id": "l2_010",
    "category": "L2 - 5과: 많이 아프면 이 약을 드세요",
    "level": "L2",
    "title": "~(으)면",
    "desc": "If/When",
    "meaning_zh": "条件(如果...的话)",
    "meaning_en": "If, when",
    "rules": [
      {
        "zh": "无收音+면",
        "en": "No batchim + 면"
      },
      {
        "zh": "有收音+으면",
        "en": "Batchim + 으면"
      }
    ],
    "examples": [
      {
        "ko": "돈이 있으면 살 거예요.",
        "en": "If I have money I'll buy it.",
        "zh": "有钱就买。"
      },
      {
        "ko": "시간이 있으면 놀러 오세요.",
        "en": "If you have time, come visit.",
        "zh": "有时间的话来玩。"
      }
    ],
    "notes": "⚠ 假设条件'如果...'。后半句如果是过去时，前面就不能用(으)면。\n💡 Tips: Conditional 'if'. If the main clause is an already happened past event, you cannot use (으)면."
  },
  {
    "id": "l2_011",
    "category": "L2 - 5과: 많이 아프면 이 약을 드세요",
    "level": "L2",
    "title": "~(으)면서",
    "desc": "While doing",
    "meaning_zh": "同时进行(一边...一边)",
    "meaning_en": "While doing simultaneously",
    "rules": [
      {
        "zh": "无收音+면서",
        "en": "No batchim + 면서"
      },
      {
        "zh": "有收音+으면서",
        "en": "Batchim + 으면서"
      }
    ],
    "examples": [
      {
        "ko": "음악을 들으면서 공부해요.",
        "en": "Study while listening to music.",
        "zh": "一边听音乐一边学习。"
      },
      {
        "ko": "밥을 먹으면서 이야기해요.",
        "en": "We talk while eating.",
        "zh": "一边吃饭一边聊天。"
      }
    ],
    "notes": "⚠ 表示两个动作同时进行'一边...一边...'。核心规则：前后主语必须是同一个人！\n💡 Tips: Simultaneous actions 'while'. Core rule: The subject of both clauses MUST be the exactly same person!"
  },
  {
    "id": "l2_012",
    "category": "L2 - 6과: 맛있는 음식을 먹을 때 행복해요",
    "level": "L2",
    "title": "~(으)ㄹ 때",
    "desc": "When doing",
    "meaning_zh": "做...的时候",
    "meaning_en": "When, at the time of",
    "rules": [
      {
        "zh": "无收音+ㄹ 때",
        "en": "No batchim + ㄹ 때"
      },
      {
        "zh": "收音+을 때",
        "en": "Batchim + 을 때"
      }
    ],
    "examples": [
      {
        "ko": "밥 먹을 때 음악 들어요.",
        "en": "I listen to music when eating.",
        "zh": "吃饭时听音乐。"
      },
      {
        "ko": "어릴 때 한국에 살았어요.",
        "en": "I lived in Korea when I was young.",
        "zh": "小时候住在韩国。"
      }
    ],
    "notes": "⚠ 表示时间'在...时候'。前面可接各种时态的定语形：은/ㄴ 때(过去), 는 때(现在), 을/ㄹ 때(将来)。\n💡 Tips: Time 'when'. Can be preceded by any tense modifier: 은/ㄴ 때 (past), 는 때 (present), 을/ㄹ 때 (future)."
  },
  {
    "id": "l2_013",
    "category": "L2 - 7과: 집들이니까 세제나 휴지를 가져갈게요",
    "level": "L2",
    "title": "~(으)니까",
    "desc": "Because (subjective)",
    "meaning_zh": "主观原因(可接命令/共动)",
    "meaning_en": "Subjective reason",
    "rules": [
      {
        "zh": "无收音+니까",
        "en": "No batchim + 니까"
      },
      {
        "zh": "有收音+으니까",
        "en": "Batchim + 으니까"
      }
    ],
    "examples": [
      {
        "ko": "추우니까 문 닫으세요.",
        "en": "It's cold, close the door.",
        "zh": "冷，请关门。"
      },
      {
        "ko": "시간이 없으니까 빨리 가세요.",
        "en": "There's no time, so go quickly.",
        "zh": "没时间了，请快走。"
      }
    ],
    "notes": "⚠ 强调主观原因'因为'。与아/어서不同，它可以完美接命令句和共动句(추우니까 문 닫으세요)。\n💡 Tips: Subjective reason. Unlike 아/어서, it CAN and OFTEN IS followed by commands/suggestions (추우니까 문 닫으세요)."
  },
  {
    "id": "l2_014",
    "category": "L2 - 9과: 근처에 자주 가는 식당이 있어요",
    "level": "L2",
    "title": "~는 (동사 관형형)",
    "desc": "Verb modifier (present)",
    "meaning_zh": "动词现在时定语词尾(做...的名词)",
    "meaning_en": "Present tense verb modifier",
    "rules": [
      {
        "zh": "动词+는",
        "en": "Verb + 는"
      }
    ],
    "examples": [
      {
        "ko": "지금 먹는 음식",
        "en": "Food I'm eating now",
        "zh": "正在吃的食物"
      },
      {
        "ko": "제가 좋아하는 노래예요.",
        "en": "It's a song I like.",
        "zh": "是我喜欢的歌。"
      }
    ],
    "notes": "⚠ 现在时定语后缀。只能接在动词后面(먹는 사람)。形容词请用 ㄴ/은。\n💡 Tips: Present tense noun modifier. Attaches ONLY to verbs (먹는 사람 = person eating). For adjectives, use ㄴ/은."
  },
  {
    "id": "l2_015",
    "category": "L2 - 9과: 근처에 자주 가는 식당이 있어요",
    "level": "L2",
    "title": "~는 동안",
    "desc": "During / While",
    "meaning_zh": "在做...的期间",
    "meaning_en": "During the time of",
    "rules": [
      {
        "zh": "动词+는 동안",
        "en": "Verb + 는 동안"
      }
    ],
    "examples": [
      {
        "ko": "기다리는 동안 커피 마실까요?",
        "en": "Shall we drink coffee while waiting?",
        "zh": "等的时候喝杯咖啡？"
      },
      {
        "ko": "엄마가 요리하는 동안 아이가 놀았어요.",
        "en": "The child played while mom cooked.",
        "zh": "妈妈做饭的时候孩子在玩。"
      }
    ],
    "notes": "⚠ '在...期间'。前面必须是动词现在时定语形(는)，绝对不能用过去时。\n💡 Tips: 'During / while'. Must ALWAYS use the present modifier (는), NEVER the past tense modifier."
  },
  {
    "id": "l2_016",
    "category": "L2 - 9과: 근처에 자주 가는 식당이 있어요",
    "level": "L2",
    "title": "~는 중이다",
    "desc": "In the middle of ~ing",
    "meaning_zh": "表示某动作正在进行中（正在...）。比 ~고 있다 更强调动作的具体进行过程或当下正忙于做某事。",
    "meaning_en": "Indicates that an action is currently in progress. Often emphasizes being in the middle of doing something right now.",
    "rules": [
      {
        "zh": "动词+는 중이다",
        "en": "Verb + 는 중이다"
      },
      {
        "zh": "名词+중이다",
        "en": "Noun + 중이다"
      }
    ],
    "examples": [
      {
        "ko": "지금 밥을 먹는 중이에요.",
        "en": "I am in the middle of eating right now.",
        "zh": "我现在正在吃饭。"
      },
      {
        "ko": "회의 중이니까 나중에 전화하세요.",
        "en": "I am in a meeting, so please call back later.",
        "zh": "正在开会，请稍后打电话。"
      }
    ],
    "notes": "💡 Tips: Cannot be used with adjectives or natural phenomena (비가 오는 중이다 ✗ -> 비가 오고 있다 ✓).\n⚠ 限制：不能与形容词或自然现象搭配（如下雨）。名词后可直接加 중이다（如 공사 중 = 施工中）。"
  },
  {
    "id": "l2_017",
    "category": "L2 - 10과: 시청 옆에 있는데 가까워요",
    "level": "L2",
    "title": "~때문에/~기 때문에",
    "desc": "Because of",
    "meaning_zh": "因为(客观原因)",
    "meaning_en": "Because of (objective reason)",
    "rules": [
      {
        "zh": "名词+때문에",
        "en": "Noun + 때문에"
      },
      {
        "zh": "动/形+기 때문에",
        "en": "V/A + 기 때문에"
      }
    ],
    "examples": [
      {
        "ko": "비 때문에 못 갔어요.",
        "en": "Couldn't go because of rain.",
        "zh": "因为雨没能去。"
      },
      {
        "ko": "바쁘기 때문에 못 만나요.",
        "en": "Can't meet because I'm busy.",
        "zh": "因为忙不能见面。"
      }
    ],
    "notes": "⚠ 强调客观原因'由于/因为'。名词+때문에，动/形+기 때문에。可搭配命令句。\n💡 Tips: Emphasizes objective reason 'due to'. Noun+때문에, V/A+기 때문에. Can be used with commands, unlike 아/어서."
  },
  {
    "id": "l2_018",
    "category": "L2 - 13과: 소포를 보내려고 하는데요",
    "level": "L2",
    "title": "~(으)려고 하다",
    "desc": "Plan to/Intend to",
    "meaning_zh": "打算做...",
    "meaning_en": "Intend/plan to do",
    "rules": [
      {
        "zh": "无收音+려고 하다",
        "en": "No batchim + 려고 하다"
      },
      {
        "zh": "收音+으려고 하다",
        "en": "Batchim + 으려고 하다"
      }
    ],
    "examples": [
      {
        "ko": "한국에 가려고 해요.",
        "en": "I plan to go to Korea.",
        "zh": "打算去韩国。"
      },
      {
        "ko": "주말에 여행을 가려고 해요.",
        "en": "I plan to travel on the weekend.",
        "zh": "打算周末去旅行。"
      }
    ],
    "notes": "⚠ 表示打算/意图，还没有行动。比기로 하다更不确定。也可表示'正打算...'：가려고 했는데 (正打算去但...)。\n💡 Tips: Intent/plan, not yet executed. Less certain than 기로 하다. Also implies 'was about to': 가려고 했는데 (I was about to go but...)."
  },
  {
    "id": "l2_019",
    "category": "L2 - 13과: 소포를 보내려고 하는데요",
    "level": "L2",
    "title": "~아/어야 되다(하다)",
    "desc": "Must/Have to",
    "meaning_zh": "必须做...",
    "meaning_en": "Must, have to",
    "rules": [
      {
        "zh": "阳+아야 되다",
        "en": "Bright + 아야 되다"
      },
      {
        "zh": "阴+어야 되다",
        "en": "Dark + 어야 되다"
      }
    ],
    "examples": [
      {
        "ko": "공부해야 돼요.",
        "en": "I must study.",
        "zh": "必须学习。"
      },
      {
        "ko": "9시까지 와야 돼요.",
        "en": "You have to come by 9.",
        "zh": "必须9点之前来。"
      }
    ],
    "notes": "⚠ 义务要求'必须/应该'。되다和하다可以互换， 되다更偏口语。否定是：안 해도 되다(不用做)。\n💡 Tips: Obligation 'must / have to'. 되다 and 하다 are interchangeable. Negation is 안 해도 되다 (don't have to)."
  },
  {
    "id": "l2_020",
    "category": "L2 - 14과: 비자 연장 신청을 하려면 어떻게 해야 돼요?",
    "level": "L2",
    "title": "~(으)려면",
    "desc": "If you want to",
    "meaning_zh": "要想做...的话",
    "meaning_en": "If one intends to",
    "rules": [
      {
        "zh": "动词+(으)려면",
        "en": "Verb + (으)려면"
      }
    ],
    "examples": [
      {
        "ko": "한국어를 잘하려면 많이 연습해야 해요.",
        "en": "To be good at Korean you must practice.",
        "zh": "想学好韩语就得多练。"
      },
      {
        "ko": "건강하려면 잘 먹어야 해요.",
        "en": "To be healthy you must eat well.",
        "zh": "想要健康就得好好吃。"
      }
    ],
    "notes": "⚠ 条件假设'如果想要...'。是 ~(으)려고 하면 的缩写。后面通常接必须满足的条件或建议。\n💡 Tips: Intention condition 'if you intend to...'. Short for ~(으)려고 하면. Usually followed by necessary conditions or advice."
  },
  {
    "id": "l2_021",
    "category": "L2 - 14과: 비자 연장 신청을 하려면 어떻게 해야 돼요?",
    "level": "L2",
    "title": "~아/어도 되다",
    "desc": "May / Permission",
    "meaning_zh": "许可(做...也可以)",
    "meaning_en": "Permission (may/can)",
    "rules": [
      {
        "zh": "动词+아/어도 되다",
        "en": "Verb + 아/어도 되다"
      }
    ],
    "examples": [
      {
        "ko": "앉아도 돼요?",
        "en": "May I sit?",
        "zh": "可以坐吗？"
      },
      {
        "ko": "사진 찍어도 돼요?",
        "en": "May I take a photo?",
        "zh": "可以拍照吗？"
      }
    ],
    "notes": "⚠ 许可'可以做...'。提问：해도 돼요?(可以吗?)。禁止回答：(으)면 안 돼요(不可以)，而不是 아/어도 안 돼요。\n💡 Tips: Permission 'may / allowed to'. To forbid, use (으)면 안 돼요 (you may not), NOT 아/어도 안 돼요."
  },
  {
    "id": "l2_022",
    "category": "L2 - 16과: 그 행사에는 가족이나 친구를 데려가도 되거든요",
    "level": "L2",
    "title": "~(으)ㄹ (미래 관형형)",
    "desc": "Future modifier",
    "meaning_zh": "动词将来时定语词尾",
    "meaning_en": "Future tense verb modifier",
    "rules": [
      {
        "zh": "无收音+ㄹ",
        "en": "No batchim + ㄹ"
      },
      {
        "zh": "有收音+을",
        "en": "Batchim + 을"
      }
    ],
    "examples": [
      {
        "ko": "내일 먹을 음식",
        "en": "Food I'll eat tomorrow",
        "zh": "明天要吃的食物"
      },
      {
        "ko": "읽을 책이 많아요.",
        "en": "I have many books to read.",
        "zh": "要看的书很多。"
      }
    ],
    "notes": "⚠ 将来时定语后缀。不仅表示将来，还可表示推测或意图(올 사람 = 可能会来的人 / 할 일 = 要做的事)。\n💡 Tips: Future modifier. Also expresses guess or intention (올 사람 = person who'll come / 할 일 = things to do)."
  },
  {
    "id": "l2_023",
    "category": "L2 - 16과: 그 행사에는 가족이나 친구를 데려가도 되거든요",
    "level": "L2",
    "title": "~(으)ㄹ래요",
    "desc": "I want to (casual)",
    "meaning_zh": "想要做...(口语)",
    "meaning_en": "Casual intention",
    "rules": [
      {
        "zh": "动词+(으)ㄹ래요",
        "en": "Verb + (으)ㄹ래요"
      }
    ],
    "examples": [
      {
        "ko": "저는 커피 마실래요.",
        "en": "I'll have coffee.",
        "zh": "我想喝咖啡。"
      },
      {
        "ko": "저는 집에 있을래요.",
        "en": "I want to stay home.",
        "zh": "我想待在家里。"
      }
    ],
    "notes": "⚠ 轻松的口语意愿表达(我想...)。第一人称表意愿，第二人称表询问。比겠어요更随意。\n💡 Tips: Casual 'wanna / intend to'. 1st person for intention, 2nd person for asking preference. More casual than 겠어요."
  },
  {
    "id": "l2_024",
    "category": "L2 - 16과: 그 행사에는 가족이나 친구를 데려가도 되거든요",
    "level": "L2",
    "title": "~거든(요)",
    "desc": "Because (explanation)",
    "meaning_zh": "解释理由(你知道吗其实是...)",
    "meaning_en": "Giving reason/explanation",
    "rules": [
      {
        "zh": "动/形+거든요",
        "en": "V/A + 거든요"
      }
    ],
    "examples": [
      {
        "ko": "오늘은 못 만나요. 바쁘거든요.",
        "en": "Can't meet today. I'm busy.",
        "zh": "今天不能见面，因为忙。"
      },
      {
        "ko": "내일은 바빠요. 시험이 있거든요.",
        "en": "I'm busy tomorrow. I have an exam, you see.",
        "zh": "明天忙。因为有考试。"
      }
    ],
    "notes": "⚠ 用于在句末补充说明原因(因为...)。通常放在第二句话，绝不用于段落开头。\n💡 Tips: Provides a reason as an afterthought. Always sentence-final (못 가요. 바쁘거든요 = Can't go. Because I'm busy). Never starts a paragraph."
  },
  {
    "id": "l2_025",
    "category": "L2 - 추가 문법 (Extra Grammar)",
    "level": "L2",
    "title": "~(으)려고",
    "desc": "In order to",
    "meaning_zh": "为了做...",
    "meaning_en": "In order to",
    "rules": [
      {
        "zh": "无收音+려고",
        "en": "No batchim + 려고"
      },
      {
        "zh": "收音+으려고",
        "en": "Batchim + 으려고"
      }
    ],
    "examples": [
      {
        "ko": "취직하려고 한국어를 배워요.",
        "en": "Learn Korean to get a job.",
        "zh": "为了就业学韩语。"
      },
      {
        "ko": "건강해지려고 매일 운동해요.",
        "en": "I exercise daily to get healthy.",
        "zh": "为了变健康每天运动。"
      }
    ],
    "notes": "⚠ 表示目的'为了...'。核心限制：后面绝对不能接命令句或共动句(세요/ㅂ시다)！\n💡 Tips: Purpose 'in order to'. Strict limitation: CANNOT be followed by commands or suggestions (세요/ㅂ시다)!"
  },
  {
    "id": "l2_026",
    "category": "L2 - 추가 문법 (Extra Grammar)",
    "level": "L2",
    "title": "~거나",
    "desc": "Or (verbs)",
    "meaning_zh": "或者(动词连接)",
    "meaning_en": "Or (connects verbs/adj)",
    "rules": [
      {
        "zh": "动词/形容词+거나",
        "en": "V/A + 거나"
      }
    ],
    "examples": [
      {
        "ko": "주말에 영화를 보거나 쇼핑해요.",
        "en": "On weekends I watch movies or shop.",
        "zh": "周末看电影或购物。"
      },
      {
        "ko": "읽거나 쓰거나 해요.",
        "en": "I read or write.",
        "zh": "读书或者写字。"
      }
    ],
    "notes": "⚠ 选择关系'或者'。用于动词/形容词，连接的两个选项没有优先级。名词之间的选择用 (이)나。\n💡 Tips: Choice 'or'. Used for Verbs/Adjectives, indicates equal alternatives. For Nouns, use (이)나."
  },
  {
    "id": "l2_027",
    "category": "L2 - 추가 문법 (Extra Grammar)",
    "level": "L2",
    "title": "~께서",
    "desc": "Honorific subject",
    "meaning_zh": "敬语主格助词(이/가的敬语)",
    "meaning_en": "Honorific subject particle",
    "rules": [
      {
        "zh": "长辈/长者+께서",
        "en": "Elder/senior + 께서"
      }
    ],
    "examples": [
      {
        "ko": "할머니께서 오셨어요.",
        "en": "Grandmother came.",
        "zh": "奶奶来了。"
      },
      {
        "ko": "사장님께서 말씀하셨습니다.",
        "en": "The CEO has spoken.",
        "zh": "社长说了。"
      }
    ],
    "notes": "⚠ 께서只用于需要尊敬的长辈/上级，必须搭配尊敬词尾-(으)시-。例如：할머니께서 오셨어요(✓)。\n💡 Tips: Honorific marker. MUST be paired with honorific ending -(으)시-. Example: 할머니께서 오셨어요(✓)."
  },
  {
    "id": "l3_001",
    "category": "L3 - 1과: 대인 관계",
    "level": "L3",
    "title": "~(으)면 되다",
    "desc": "All you need to do is / It is okay if",
    "meaning_zh": "表示只要满足某个最低条件就可以了（只要...就行 / ...就可以了）。",
    "meaning_en": "Indicates that meeting a certain condition is sufficient. 'All you have to do is...' or 'It is enough if...'",
    "rules": [
      {
        "zh": "动/形+(으)면 되다",
        "en": "V/A + (으)면 되다"
      }
    ],
    "examples": [
      {
        "ko": "여기에 서명만 하시면 됩니다.",
        "en": "All you need to do is sign here.",
        "zh": "您只要在这里签个字就行了。"
      },
      {
        "ko": "버스를 타고 3정거장만 가면 돼요.",
        "en": "You just need to take the bus for 3 stops.",
        "zh": "坐巴士坐3站就可以了。"
      }
    ],
    "notes": "💡 Tips: Often paired with ~만 (only) to emphasize how simple the required condition is (만 ~(으)면 되다).\n⚠ 极简条件：通常搭配 ~만(只) 一起使用，强调完成某事的条件非常简单（只要做...就行了）。"
  },
  {
    "id": "l3_002",
    "category": "L3 - 2과: 성격",
    "level": "L3",
    "title": "~는 대신에",
    "desc": "Instead of / In return for",
    "meaning_zh": "表示“代替/作为补偿”。可以表示用一件事替代另一件事，或者做了一件事后作为回报做另一件事。",
    "meaning_en": "Means 'instead of' or 'in return/exchange for'. Used to show replacement or compensation for an action.",
    "rules": [
      {
        "zh": "动词+는 대신에",
        "en": "Verb + 는 대신에"
      },
      {
        "zh": "形容词+(으)ㄴ 대신에",
        "en": "Adj + (으)ㄴ 대신에"
      },
      {
        "zh": "名词+대신에",
        "en": "Noun + 대신에"
      }
    ],
    "examples": [
      {
        "ko": "제가 요리를 하는 대신에 설거지를 해주세요.",
        "en": "I will cook, so please do the dishes in return.",
        "zh": "我来做饭，作为交换请你洗碗。"
      },
      {
        "ko": "이 옷은 비싼 대신에 질이 좋아요.",
        "en": "This clothes is expensive, but in exchange the quality is good.",
        "zh": "这件衣服虽然贵，但相对的质量很好。"
      }
    ],
    "notes": "💡 Tips: Often shortened to ~는 대신. Can mean a direct replacement (A instead of B) or a trade-off (expensive BUT good quality).\n⚠ 代替与补偿：不仅可以表示“用B代替A”，还可以表示事物的两面性补偿（价格贵，但作为补偿质量很好）。"
  },
  {
    "id": "l3_003",
    "category": "L3 - 2과: 성격",
    "level": "L3",
    "title": "~아/어지다",
    "desc": "Become",
    "meaning_zh": "变得...",
    "meaning_en": "Become (change of state)",
    "rules": [
      {
        "zh": "形容词+아/어지다",
        "en": "Adj + 아/어지다"
      }
    ],
    "examples": [
      {
        "ko": "날씨가 더워졌어요.",
        "en": "Weather became hot.",
        "zh": "天气变热了。"
      },
      {
        "ko": "한국어가 좋아졌어요.",
        "en": "I've come to like Korean.",
        "zh": "开始喜欢韩语了。"
      }
    ],
    "notes": "⚠ 表示状态变化(变得...)。只能接形容词：예뻐지다(变漂亮)。动词变化请用 게 되다。\n💡 Tips: Change of state (become...). ONLY for adjectives: 예뻐지다(become pretty). For verbs, use 게 되다."
  },
  {
    "id": "l3_004",
    "category": "L3 - 3과: 지역 복지 서비스",
    "level": "L3",
    "title": "~(으)ㄴ/는 데다가",
    "desc": "On top of that",
    "meaning_zh": "再加上(雪上加霜/锦上添花)",
    "meaning_en": "In addition to, on top of",
    "rules": [
      {
        "zh": "动词+는 데다가",
        "en": "Verb + 는 데다가"
      },
      {
        "zh": "形容词+ㄴ/은 데다가",
        "en": "Adj + ㄴ/은 데다가"
      }
    ],
    "examples": [
      {
        "ko": "비가 오는 데다가 바람도 불어요.",
        "en": "It's raining and on top of that windy.",
        "zh": "下雨再加上刮风。"
      },
      {
        "ko": "예쁜 데다가 착해요.",
        "en": "She's pretty and on top of that kind.",
        "zh": "不仅漂亮而且善良。"
      }
    ],
    "notes": "⚠ 递进叠加'再加上/而且'。核心规则：前后的评价必须是同方向的(要么都好，要么都坏)。\n💡 Tips: Addition 'on top of that / plus'. Core rule: Both clauses must go in the same direction (both positive OR both negative)."
  },
  {
    "id": "l3_005",
    "category": "L3 - 3과: 지역 복지 서비스",
    "level": "L3",
    "title": "~(으)ㄴ지/는지 알다/모르다",
    "desc": "Know whether",
    "meaning_zh": "知不知道是否...",
    "meaning_en": "Know/don't know whether",
    "rules": [
      {
        "zh": "动词+는지",
        "en": "Verb + 는지"
      },
      {
        "zh": "形容词+ㄴ/은지",
        "en": "Adj + ㄴ/은지"
      }
    ],
    "examples": [
      {
        "ko": "어디에 사는지 알아요?",
        "en": "Do you know where they live?",
        "zh": "知道住在哪吗？"
      },
      {
        "ko": "그 사람이 누구인지 몰라요.",
        "en": "I don't know who that person is.",
        "zh": "不知道那个人是谁。"
      }
    ],
    "notes": "⚠ 间接疑问句核心句型。常搭配疑问词(뭐/어디/누구)：어디에 사는지 알아요? (知道住在哪里吗？)。\n💡 Tips: Core indirect question pattern. Often used with 뭐/어디/누구: 어디에 사는지 알아요? (Do you know where they live?)."
  },
  {
    "id": "l3_006",
    "category": "L3 - 3과: 지역 복지 서비스",
    "level": "L3",
    "title": "~다가",
    "desc": "While/Switch",
    "meaning_zh": "中途转换动作",
    "meaning_en": "Switching actions midway",
    "rules": [
      {
        "zh": "动词+다가",
        "en": "Verb + 다가"
      }
    ],
    "examples": [
      {
        "ko": "걷다가 넘어졌어요.",
        "en": "Fell while walking.",
        "zh": "走路走着摔倒了。"
      },
      {
        "ko": "TV를 보다가 잠들었어요.",
        "en": "Fell asleep while watching TV.",
        "zh": "看电视看着就睡着了。"
      }
    ],
    "notes": "⚠ 表示动作中途转换，'做着做着突然...'。前后主语必须一致！(걷다가 넘어졌어요 = 走着走着摔倒了)。\n💡 Tips: Interruption/switch mid-action. Subjects MUST be identical! (걷다가 넘어졌어요 = Fell while walking)."
  },
  {
    "id": "l3_007",
    "category": "L3 - 4과: 교환과 환불",
    "level": "L3",
    "title": "~(으)ㄹ 만하다",
    "desc": "Worth doing",
    "meaning_zh": "值得做...",
    "meaning_en": "Worth doing, deserving of",
    "rules": [
      {
        "zh": "动词+(으)ㄹ 만하다",
        "en": "Verb + (으)ㄹ 만하다"
      }
    ],
    "examples": [
      {
        "ko": "이 영화는 볼 만해요.",
        "en": "This movie is worth watching.",
        "zh": "这部电影值得看。"
      },
      {
        "ko": "한번 가 볼 만한 곳이에요.",
        "en": "It's a place worth visiting.",
        "zh": "是值得去一次的地方。"
      }
    ],
    "notes": "⚠ 两种含义：①值得做(볼 만하다 = 值得一看) ②勉强能接受(참을 만하다 = 还能忍受)。\n💡 Tips: Two meanings: ① Worth doing (볼 만하다 = worth watching), ② Bearable/acceptable (참을 만하다 = bearable)."
  },
  {
    "id": "l3_008",
    "category": "L3 - 6과: 주거 환경",
    "level": "L3",
    "title": "~자고 하다",
    "desc": "Indirect suggestion",
    "meaning_zh": "间接引语(共动句)",
    "meaning_en": "Indirect quotation (suggestion)",
    "rules": [
      {
        "zh": "动词+자고 하다",
        "en": "Verb + 자고 하다"
      }
    ],
    "examples": [
      {
        "ko": "친구가 영화 보자고 했어요.",
        "en": "Friend suggested watching a movie.",
        "zh": "朋友提议看电影。"
      },
      {
        "ko": "같이 점심을 먹자고 했어요.",
        "en": "Suggested we eat lunch together.",
        "zh": "提议一起吃午饭。"
      }
    ],
    "notes": "⚠ 间接共动句。转述(으)ㅂ시다(我们一起...)时变成자고 하다。\n💡 Tips: Indirect suggestion. Converts (으)ㅂ시다 (Let's...) into 자고 하다."
  },
  {
    "id": "l3_009",
    "category": "L3 - 6과: 주거 환경",
    "level": "L3",
    "title": "피동사 (Passive)",
    "desc": "Passive verbs",
    "meaning_zh": "被动动词(이/히/리/기)",
    "meaning_en": "Passive voice verbs",
    "rules": [
      {
        "zh": "보다→보이다",
        "en": "보다→보이다(see→be seen)"
      },
      {
        "zh": "잡다→잡히다",
        "en": "잡다→잡히다(catch→be caught)"
      },
      {
        "zh": "열다→열리다",
        "en": "열다→열리다(open→be opened)"
      },
      {
        "zh": "끊다→끊기다",
        "en": "끊다→끊기다(cut→be cut)"
      }
    ],
    "examples": [
      {
        "ko": "문이 열렸어요.",
        "en": "The door was opened.",
        "zh": "门被打开了。"
      },
      {
        "ko": "도둑이 경찰에게 잡혔어요.",
        "en": "The thief was caught by the police.",
        "zh": "小偷被警察抓住了。"
      }
    ],
    "notes": "⚠ 被动后缀有四个(이/히/리/기)，没有规律必须死记。高频词：보이다(被看到), 들리다(被听到), 잡히다(被抓)。\n💡 Tips: Four passive suffixes (이/히/리/기). No strict rules, must be memorized. Common: 보이다(be seen), 들리다(be heard), 잡히다(be caught)."
  },
  {
    "id": "l3_010",
    "category": "L3 - 7과: 문화생활",
    "level": "L3",
    "title": "~(으)라고 하다",
    "desc": "Indirect command",
    "meaning_zh": "间接引语(命令句)",
    "meaning_en": "Indirect quotation (command)",
    "rules": [
      {
        "zh": "动词+(으)라고 하다",
        "en": "Verb + (으)라고 하다"
      }
    ],
    "examples": [
      {
        "ko": "의사가 쉬라고 했어요.",
        "en": "Doctor said to rest.",
        "zh": "医生让休息。"
      },
      {
        "ko": "엄마가 빨리 오라고 했어요.",
        "en": "Mom told me to come quickly.",
        "zh": "妈妈让快点过来。"
      }
    ],
    "notes": "⚠ 间接命令句。转述(으)세요命令时变成(으)라고。否定命令：지 말라고 하다。\n💡 Tips: Indirect command. Converts (으)세요 into (으)라고. For negative commands, use 지 말라고 하다."
  },
  {
    "id": "l3_011",
    "category": "L3 - 7과: 문화생활",
    "level": "L3",
    "title": "~냐고 하다",
    "desc": "Indirect question",
    "meaning_zh": "间接引语(疑问句)",
    "meaning_en": "Indirect quotation (question)",
    "rules": [
      {
        "zh": "动/形+냐고 하다",
        "en": "V/A + 냐고 하다"
      }
    ],
    "examples": [
      {
        "ko": "언제 오냐고 했어요.",
        "en": "Asked when they're coming.",
        "zh": "问什么时候来。"
      },
      {
        "ko": "몇 시에 출발하냐고 물어봤어요.",
        "en": "Asked what time we're leaving.",
        "zh": "问了几点出发。"
      }
    ],
    "notes": "⚠ 间接疑问句。原来的疑问句被转述时使用 냐고/느냐고。\n💡 Tips: Indirect question. Converts a direct question into a reported statement using 냐고/느냐고."
  },
  {
    "id": "l3_012",
    "category": "L3 - 7과: 문화생활",
    "level": "L3",
    "title": "~다고/라고 하다",
    "desc": "Indirect statement",
    "meaning_zh": "间接引语(陈述句)",
    "meaning_en": "Indirect quotation (statement)",
    "rules": [
      {
        "zh": "动词+ㄴ/는다고",
        "en": "Verb + ㄴ/는다고"
      },
      {
        "zh": "形容词+다고",
        "en": "Adj + 다고"
      },
      {
        "zh": "名词+(이)라고",
        "en": "Noun + (이)라고"
      }
    ],
    "examples": [
      {
        "ko": "민수가 바쁘다고 해요.",
        "en": "Minsu says he's busy.",
        "zh": "民秀说他忙。"
      },
      {
        "ko": "선생님이 시험이 있다고 했어요.",
        "en": "The teacher said there's an exam.",
        "zh": "老师说有考试。"
      }
    ],
    "notes": "⚠ 间接陈述句核心。动词+ㄴ/는다고, 形容词+다고, 名词+(이)라고。过去时+았/었다고。\n💡 Tips: Core indirect statement. Verb + ㄴ/는다고, Adj + 다고, Noun + (이)라고. Past tense takes 았/었다고."
  },
  {
    "id": "l3_013",
    "category": "L3 - 9과: 고장과 수리",
    "level": "L3",
    "title": "~나요/ㄴ가요?",
    "desc": "Soft question",
    "meaning_zh": "柔和的疑问(是不是...呢)",
    "meaning_en": "Soft/indirect question",
    "rules": [
      {
        "zh": "动词+나요",
        "en": "Verb + 나요"
      },
      {
        "zh": "形容词+ㄴ/은가요",
        "en": "Adj + ㄴ/은가요"
      }
    ],
    "examples": [
      {
        "ko": "혹시 한국 사람인가요?",
        "en": "Are you perhaps Korean?",
        "zh": "你是不是韩国人呢？"
      },
      {
        "ko": "이 버스가 서울역에 가나요?",
        "en": "Does this bus go to Seoul Station?",
        "zh": "这趟公交去首尔站吗？"
      }
    ],
    "notes": "⚠ 柔和委婉的提问方式。比直接用 아/어요? 更礼貌，常用于面试或初次见面。\n💡 Tips: Soft and polite questioning form. More polite than direct 아/어요? questions. Often used in interviews or first meetings."
  },
  {
    "id": "l3_014",
    "category": "L3 - 10과: 취업",
    "level": "L3",
    "title": "~기 위해서",
    "desc": "In order to",
    "meaning_zh": "为了做...",
    "meaning_en": "In order to (purpose)",
    "rules": [
      {
        "zh": "动词+기 위해서",
        "en": "Verb + 기 위해서"
      }
    ],
    "examples": [
      {
        "ko": "건강을 위해서 운동해요.",
        "en": "I exercise for health.",
        "zh": "为了健康而运动。"
      },
      {
        "ko": "시험에 합격하기 위해서 열심히 해요.",
        "en": "I work hard to pass the exam.",
        "zh": "为了通过考试努力学习。"
      }
    ],
    "notes": "⚠ 表示目的'为了...'。比(으)려고更加正式和书面化。允许前后主语不一致。\n💡 Tips: Purpose 'for the sake of / in order to'. More formal/written than (으)려고. Allows different subjects in clauses."
  },
  {
    "id": "l3_015",
    "category": "L3 - 10과: 취업",
    "level": "L3",
    "title": "~아/어 놓다",
    "desc": "Do and keep",
    "meaning_zh": "做好放着(准备好)",
    "meaning_en": "Do in advance and maintain",
    "rules": [
      {
        "zh": "动词+아/어 놓다",
        "en": "Verb + 아/어 놓다"
      }
    ],
    "examples": [
      {
        "ko": "예약해 놓았어요.",
        "en": "I made a reservation (in advance).",
        "zh": "预约好了。"
      },
      {
        "ko": "음식을 만들어 놓았어요.",
        "en": "I prepared the food in advance.",
        "zh": "提前做好了饭菜。"
      }
    ],
    "notes": "⚠ 表示动作完成后放任不管。与아/어 두다相似，但놓다强调'放置'，두다强调'保留备用'。\n💡 Tips: Action completed and left as is. Similar to 아/어 두다, but 놓다 emphasizes 'leaving it', while 두다 emphasizes 'keeping for future use'."
  },
  {
    "id": "l3_016",
    "category": "L3 - 12과: 전통 명절",
    "level": "L3",
    "title": "~게 되다",
    "desc": "Come to / End up",
    "meaning_zh": "(外力导致)变得...",
    "meaning_en": "Come to, end up",
    "rules": [
      {
        "zh": "动/形+게 되다",
        "en": "V/A + 게 되다"
      }
    ],
    "examples": [
      {
        "ko": "한국 음식을 좋아하게 됐어요.",
        "en": "I came to like Korean food.",
        "zh": "变得喜欢韩国食物了。"
      },
      {
        "ko": "서울에서 살게 되었어요.",
        "en": "I ended up living in Seoul.",
        "zh": "变得在首尔住了。"
      }
    ],
    "notes": "⚠ 表示外部原因或环境导致的变化(变得...)，非主观意愿：좋아하게 됐어요(变得喜欢了)。\n💡 Tips: Change caused by external factors, not own will (came to...). 좋아하게 됐어요(came to like it naturally)."
  },
  {
    "id": "l3_017",
    "category": "L3 - 13과: 직장 생활",
    "level": "L3",
    "title": "~게 하다",
    "desc": "Make someone do",
    "meaning_zh": "让/使某人做...",
    "meaning_en": "Causative (make someone do)",
    "rules": [
      {
        "zh": "动词+게 하다",
        "en": "Verb + 게 하다"
      }
    ],
    "examples": [
      {
        "ko": "아이를 공부하게 했어요.",
        "en": "Made the child study.",
        "zh": "让孩子学习了。"
      },
      {
        "ko": "선생님이 학생들을 조용히 하게 했어요.",
        "en": "The teacher made the students be quiet.",
        "zh": "老师让学生们安静。"
      }
    ],
    "notes": "⚠ 万能使役句型(让某人做某事)。当动词没有对应的사동사后缀时，一律用게 하다。\n💡 Tips: Universal causative pattern (make someone do). Used when a verb does not have a specific causative suffix."
  },
  {
    "id": "l3_018",
    "category": "L3 - 14과: 인터넷과 스마트폰",
    "level": "L3",
    "title": "~잖아요",
    "desc": "As you know",
    "meaning_zh": "你知道的/不是嘛",
    "meaning_en": "Stating a fact the listener knows",
    "rules": [
      {
        "zh": "动/形+잖아요",
        "en": "V/A + 잖아요"
      }
    ],
    "examples": [
      {
        "ko": "미국에서 10년 살았잖아요.",
        "en": "As you know, I lived in the US for 10 years.",
        "zh": "你知道的，我在美国住了10年。"
      },
      {
        "ko": "겨울이잖아요.",
        "en": "It's winter, you know.",
        "zh": "不是冬天嘛。"
      }
    ],
    "notes": "⚠ 提醒对方已知的事实：'你不是知道嘛/不是...嘛'。对长辈使用可能显得不礼貌。\n💡 Tips: Reminding listener of a known fact: 'As you know... / Isn't it that...'. Can sound slightly pushy or impolite to elders."
  },
  {
    "id": "l3_019",
    "category": "L3 - 15과: 고민과 상담",
    "level": "L3",
    "title": "~(으)려던 참이다",
    "desc": "Was just about to",
    "meaning_zh": "正要做...",
    "meaning_en": "Was just about to do",
    "rules": [
      {
        "zh": "动词+(으)려던 참이다",
        "en": "Verb + (으)려던 참이다"
      }
    ],
    "examples": [
      {
        "ko": "전화하려던 참이었어요.",
        "en": "I was just about to call.",
        "zh": "我正要打电话。"
      },
      {
        "ko": "지금 막 나가려던 참이에요.",
        "en": "I was just about to go out.",
        "zh": "正要出门呢。"
      }
    ],
    "notes": "⚠ 参=瞬间。表示'恰好/正要...'那个时刻，常用于巧合的场景。\n💡 Tips: 'Was just about to...'. Perfect for expressing coincidence or exact timing."
  },
  {
    "id": "l3_020",
    "category": "L3 - 15과: 고민과 상담",
    "level": "L3",
    "title": "~자마자",
    "desc": "As soon as",
    "meaning_zh": "一...就...",
    "meaning_en": "As soon as",
    "rules": [
      {
        "zh": "动词+자마자",
        "en": "Verb + 자마자"
      }
    ],
    "examples": [
      {
        "ko": "집에 오자마자 잤어요.",
        "en": "Slept as soon as I got home.",
        "zh": "一到家就睡了。"
      },
      {
        "ko": "전화를 받자마자 뛰어나갔어요.",
        "en": "Ran out as soon as they answered the phone.",
        "zh": "一接到电话就跑出去了。"
      }
    ],
    "notes": "⚠ '一...就...'。两个动作紧接着发生，中间几乎没有时间间隔。不能用于反复的习惯性动作。\n💡 Tips: 'As soon as'. Immediate sequence with almost no time gap between the two actions. Not for habitual actions."
  },
  {
    "id": "l3_021",
    "category": "L3 - 16과: 기후와 날씨",
    "level": "L3",
    "title": "~(으)ㄹ 텐데",
    "desc": "I expect/assume but...",
    "meaning_zh": "推测+担忧(应该会...但是)",
    "meaning_en": "Expected situation with concern",
    "rules": [
      {
        "zh": "动/形+(으)ㄹ 텐데",
        "en": "V/A + (으)ㄹ 텐데"
      }
    ],
    "examples": [
      {
        "ko": "바쁠 텐데 와 주셔서 감사합니다.",
        "en": "You must be busy, thanks for coming.",
        "zh": "应该很忙还来了，谢谢。"
      },
      {
        "ko": "피곤할 텐데 쉬세요.",
        "en": "You must be tired, please rest.",
        "zh": "应该累了，休息吧。"
      }
    ],
    "notes": "⚠ 推测+担忧/遗憾。通常表示对听者的同情或设身处地：피곤할 텐데 쉬세요 (应该很累了，休息吧)。\n💡 Tips: Guess + concern/regret. Shows empathy towards the listener: 피곤할 텐데 쉬세요 (You must be tired, please rest)."
  },
  {
    "id": "l3_022",
    "category": "L3 - 16과: 기후와 날씨",
    "level": "L3",
    "title": "~아/어 있다",
    "desc": "State maintenance",
    "meaning_zh": "保持某种结果状态",
    "meaning_en": "Resultant state (be in a state of)",
    "rules": [
      {
        "zh": "动词+아/어 있다",
        "en": "Verb + 아/어 있다"
      }
    ],
    "examples": [
      {
        "ko": "문이 열려 있어요.",
        "en": "The door is open (state).",
        "zh": "门开着呢。"
      },
      {
        "ko": "창문이 열려 있어요.",
        "en": "The window is open.",
        "zh": "窗户开着呢。"
      }
    ],
    "notes": "⚠ 表示动作完成后的结果状态持续。区分：고 있다(动作正在进行) vs 아/어 있다(结果状态保持)。\n💡 Tips: State resulting from a completed action. Compare: 고 있다 (action in progress) vs 아/어 있다 (resulting state remains)."
  },
  {
    "id": "l3_023",
    "category": "L3 - 추가 문법 (Extra Grammar)",
    "level": "L3",
    "title": "~(으)ㄴ 채(로)",
    "desc": "In the state of",
    "meaning_zh": "保持某个状态不变",
    "meaning_en": "While remaining in a state",
    "rules": [
      {
        "zh": "动词+(으)ㄴ 채로",
        "en": "Verb + (으)ㄴ 채로"
      }
    ],
    "examples": [
      {
        "ko": "신발을 신은 채로 들어왔어요.",
        "en": "Came in with shoes on.",
        "zh": "穿着鞋就进来了。"
      },
      {
        "ko": "불을 켠 채로 잠들었어요.",
        "en": "Fell asleep with the light on.",
        "zh": "开着灯就睡着了。"
      }
    ],
    "notes": "⚠ '保持着...的状态'。前面必须是过去定语形(ㄴ/은)，常表示某种不正常或无意中维持的状态。\n💡 Tips: 'While remaining in the state of...'. Takes past modifier (ㄴ/은). Often implies an unusual or unintended maintained state."
  },
  {
    "id": "l3_024",
    "category": "L3 - 추가 문법 (Extra Grammar)",
    "level": "L3",
    "title": "~(으)ㄹ 것 같다",
    "desc": "It seems like",
    "meaning_zh": "推测(好像...)",
    "meaning_en": "Guess/supposition",
    "rules": [
      {
        "zh": "动/形+(으)ㄹ/ㄴ/는 것 같다",
        "en": "V/A + (으)ㄹ/ㄴ/는 것 같다"
      }
    ],
    "examples": [
      {
        "ko": "비가 올 것 같아요.",
        "en": "It seems like it'll rain.",
        "zh": "好像要下雨。"
      },
      {
        "ko": "내일 날씨가 좋을 것 같아요.",
        "en": "It seems the weather will be nice tomorrow.",
        "zh": "明天天气好像会不错。"
      }
    ],
    "notes": "⚠ 最通用的推测表达。三种时态都能用：과거(ㄴ/은 것 같다)、현재(는 것 같다)、미래(ㄹ 것 같다)。\n💡 Tips: Most versatile guess expression. Supports all 3 tenses: Past (ㄴ/은 것 같다), Present (는 것 같다), Future (ㄹ 것 같다)."
  },
  {
    "id": "l3_025",
    "category": "L3 - 추가 문법 (Extra Grammar)",
    "level": "L3",
    "title": "~(으)ㄹ 테니까",
    "desc": "I will so...",
    "meaning_zh": "我会...所以你...",
    "meaning_en": "My intention, so you should...",
    "rules": [
      {
        "zh": "动/形+(으)ㄹ 테니까",
        "en": "V/A + (으)ㄹ 테니까"
      }
    ],
    "examples": [
      {
        "ko": "제가 할 테니까 쉬세요.",
        "en": "I'll do it so you rest.",
        "zh": "我来做，你休息。"
      },
      {
        "ko": "비가 올 테니까 우산 가져가세요.",
        "en": "It will rain, so take an umbrella.",
        "zh": "会下雨的，带伞吧。"
      }
    ],
    "notes": "⚠ 复合表达：第一人称主语=我打算...所以你...。第二/三人称主语=推测...所以...。\n💡 Tips: Dual usage: 1st person = my intention... so you...; 2nd/3rd person = my guess about them... so..."
  },
  {
    "id": "l3_026",
    "category": "L3 - 추가 문법 (Extra Grammar)",
    "level": "L3",
    "title": "~(이)라도",
    "desc": "Even if just / At least",
    "meaning_zh": "哪怕是...也好",
    "meaning_en": "Even if it's just, at least",
    "rules": [
      {
        "zh": "名词+(이)라도",
        "en": "Noun + (이)라도"
      }
    ],
    "examples": [
      {
        "ko": "커피라도 마실까요?",
        "en": "Shall we at least have coffee?",
        "zh": "哪怕喝杯咖啡也好？"
      },
      {
        "ko": "물이라도 한 잔 드세요.",
        "en": "Please have at least a glass of water.",
        "zh": "哪怕喝杯水也好。"
      }
    ],
    "notes": "⚠ 表示退而求其次的选择，'哪怕是...也好 / 即使不是最好但也行'。\n💡 Tips: Indicates the next best choice, meaning 'even if just / at least'. Implies settling for less than ideal."
  },
  {
    "id": "l3_027",
    "category": "L3 - 추가 문법 (Extra Grammar)",
    "level": "L3",
    "title": "~기가 무섭게",
    "desc": "No sooner than",
    "meaning_zh": "一...就(紧接着)",
    "meaning_en": "No sooner than",
    "rules": [
      {
        "zh": "动词+기가 무섭게",
        "en": "Verb + 기가 무섭게"
      }
    ],
    "examples": [
      {
        "ko": "문을 열기가 무섭게 고양이가 나갔어요.",
        "en": "The cat went out as soon as the door opened.",
        "zh": "门一开猫就跑出去了。"
      },
      {
        "ko": "수업이 끝나기가 무섭게 뛰어나갔어요.",
        "en": "Ran out the moment class ended.",
        "zh": "课一结束就跑出去了。"
      }
    ],
    "notes": "⚠ 强调速度极快(一...就立刻...)。比자마자更夸张，多用于生动叙述。\n💡 Tips: Emphasizes immediate sequence. More dramatic and exaggerated than 자마자. Often used for vivid storytelling."
  },
  {
    "id": "l3_028",
    "category": "L3 - 추가 문법 (Extra Grammar)",
    "level": "L3",
    "title": "~기는요",
    "desc": "Not really / Modesty",
    "meaning_zh": "谦虚否定(哪里哪里)",
    "meaning_en": "Modest denial or disagreement",
    "rules": [
      {
        "zh": "动/形+기는요",
        "en": "V/A + 기는요"
      }
    ],
    "examples": [
      {
        "ko": "가: 한국어를 잘하시네요. 나: 잘하기는요.",
        "en": "A: You speak Korean well. B: Not really.",
        "zh": "A: 韩语说得好。B: 哪里哪里。"
      },
      {
        "ko": "예쁘기는요. 아직 멀었어요.",
        "en": "Pretty? Not at all, I've got a long way to go.",
        "zh": "漂亮什么呀，还差得远呢。"
      }
    ],
    "notes": "⚠ 谦虚地否认对方的夸奖。语气比 아니에요 更自然、更地道。\n💡 Tips: Used to humbly deny a compliment. Sounds more natural and native than a simple 아니에요."
  },
  {
    "id": "l3_029",
    "category": "L3 - 추가 문법 (Extra Grammar)",
    "level": "L3",
    "title": "~기로 하다",
    "desc": "Decide to",
    "meaning_zh": "决定做...",
    "meaning_en": "Decide to do",
    "rules": [
      {
        "zh": "动词+기로 하다",
        "en": "Verb + 기로 하다"
      }
    ],
    "examples": [
      {
        "ko": "한국어를 배우기로 했어요.",
        "en": "I decided to learn Korean.",
        "zh": "决定学韩语。"
      },
      {
        "ko": "내일 만나기로 했어요.",
        "en": "We decided to meet tomorrow.",
        "zh": "约好了明天见面。"
      }
    ],
    "notes": "⚠ 表示正式的决定，常用于商量好的结果(决定做...)。通常用过去时 기로 했다。\n💡 Tips: Firm decision, often a mutual agreement (decided to do...). Usually used in past tense: 기로 했다."
  },
  {
    "id": "l3_030",
    "category": "L3 - 추가 문법 (Extra Grammar)",
    "level": "L3",
    "title": "~길래",
    "desc": "Because (discovered reason)",
    "meaning_zh": "发现了原因所以...",
    "meaning_en": "Because (I discovered that)",
    "rules": [
      {
        "zh": "动/形+길래",
        "en": "V/A + 길래"
      }
    ],
    "examples": [
      {
        "ko": "날씨가 좋길래 산책을 나갔어요.",
        "en": "Weather was nice so I went for a walk.",
        "zh": "发现天气好就出去散步了。"
      },
      {
        "ko": "맛있어 보이길래 사 봤어요.",
        "en": "It looked delicious so I bought it.",
        "zh": "看起来好吃就买了。"
      }
    ],
    "notes": "⚠ 发现某个客观事实/原因，因此采取了行动。只能用于解释第一人称采取行动的原因。\n💡 Tips: Discovered an objective reason → took action. Used ONLY to explain why the 1st person subject took an action."
  },
  {
    "id": "l3_031",
    "category": "L3 - 추가 문법 (Extra Grammar)",
    "level": "L3",
    "title": "~대요/래요/재요",
    "desc": "Contracted quotation",
    "meaning_zh": "缩略间接引语",
    "meaning_en": "Contracted indirect quotation",
    "rules": [
      {
        "zh": "~다고 해요→~대요",
        "en": "~다고 해요 → ~대요"
      },
      {
        "zh": "~라고 해요→~래요",
        "en": "~라고 해요 → ~래요"
      },
      {
        "zh": "~자고 해요→~재요",
        "en": "~자고 해요 → ~재요"
      }
    ],
    "examples": [
      {
        "ko": "내일 비가 온대요.",
        "en": "They say it'll rain tomorrow.",
        "zh": "听说明天下雨。"
      },
      {
        "ko": "내일 회의 없대요.",
        "en": "They say no meeting tomorrow.",
        "zh": "听说明天没有会议。"
      }
    ],
    "notes": "⚠ 间接引语的口语缩写。다고 해요→대요, 라고 해요→래요, 자고 해요→재요, 냐고 해요→냬요。\n💡 Tips: Casual contraction of reported speech. 다고 해요→대요, 라고 해요→래요, 자고 해요→재요, 냐고 해요→냬요."
  },
  {
    "id": "l3_032",
    "category": "L3 - 추가 문법 (Extra Grammar)",
    "level": "L3",
    "title": "~아/어 버리다",
    "desc": "Completely done",
    "meaning_zh": "彻底完成(惋惜/痛快)",
    "meaning_en": "Completely finished (with emotion)",
    "rules": [
      {
        "zh": "动词+아/어 버리다",
        "en": "Verb + 아/어 버리다"
      }
    ],
    "examples": [
      {
        "ko": "다 먹어 버렸어요.",
        "en": "Ate it all up.",
        "zh": "全吃光了。"
      },
      {
        "ko": "숙제를 잊어 버렸어요.",
        "en": "I completely forgot my homework.",
        "zh": "把作业彻底忘了。"
      }
    ],
    "notes": "⚠ 彻底完成某事。带有两种对立情感：①痛快/释怀(全吃光了!) ②遗憾/惋惜(全忘光了...)。\n💡 Tips: Action completely finished. Conveys two opposite emotions: ① Relief/satisfaction, or ② Regret/disappointment."
  },
  {
    "id": "l3_033",
    "category": "L3 - 추가 문법 (Extra Grammar)",
    "level": "L3",
    "title": "~았/었던",
    "desc": "Past recalled modifier",
    "meaning_zh": "过去回忆定语(曾经...的)",
    "meaning_en": "Past experience modifier",
    "rules": [
      {
        "zh": "动词+았/었던",
        "en": "Verb + 았/었던"
      }
    ],
    "examples": [
      {
        "ko": "전에 살았던 집",
        "en": "The house I used to live in",
        "zh": "以前住过的房子"
      },
      {
        "ko": "어릴 때 살았던 동네",
        "en": "The neighborhood I lived in as a child",
        "zh": "小时候住过的小区"
      }
    ],
    "notes": "⚠ 强调过去某动作已经彻底完成并结束的回忆。比 던 更强调'已终结'。\n💡 Tips: Emphasizes a past action that was completely finished/closed. Stronger sense of completion than 던."
  },
  {
    "id": "l4_001",
    "category": "L4 - 1과: 한국 생활 적응",
    "level": "L4",
    "title": "~(으)ㄹ수록",
    "desc": "The more ~ the more",
    "meaning_zh": "越...越...",
    "meaning_en": "The more ~ the more",
    "rules": [
      {
        "zh": "动/形+(으)ㄹ수록",
        "en": "V/A + (으)ㄹ수록"
      }
    ],
    "examples": [
      {
        "ko": "한국어는 배울수록 어려워요.",
        "en": "Korean gets harder the more you study.",
        "zh": "韩语越学越难。"
      },
      {
        "ko": "생각할수록 화가 나요.",
        "en": "The more I think, the angrier I get.",
        "zh": "越想越生气。"
      }
    ],
    "notes": "⚠ 递进关系：'越...越...'。常与面搭配：(으)면 (으)ㄹ수록 (如果...的话，越发...)。\n💡 Tips: Progressive relation: 'The more... the more...'. Often paired with 면: (으)면 (으)ㄹ수록 (if..., the more...)."
  },
  {
    "id": "l4_002",
    "category": "L4 - 1과: 한국 생활 적응",
    "level": "L4",
    "title": "~느라고",
    "desc": "Because of doing (excuse)",
    "meaning_zh": "因为做...耽误了(负面)",
    "meaning_en": "Excuse for negative result",
    "rules": [
      {
        "zh": "动词+느라고",
        "en": "Verb + 느라고"
      }
    ],
    "examples": [
      {
        "ko": "일하느라고 전화를 못 받았어요.",
        "en": "Couldn't answer because I was working.",
        "zh": "因为工作没接到电话。"
      },
      {
        "ko": "게임하느라고 숙제를 못 했어요.",
        "en": "Couldn't do homework because I was gaming.",
        "zh": "因为玩游戏没写作业。"
      }
    ],
    "notes": "⚠ 表示因为做前面这件事(耗费了时间精力)导致了后面的结果。三大限制：①前后主语一致 ②不能接命令句 ③结果通常是负面的。\n💡 Tips: 'Because of doing...'. Three strict rules: ① Same subject, ② No commands, ③ Result is usually negative/delayed."
  },
  {
    "id": "l4_003",
    "category": "L4 - 2과: 가족의 변화",
    "level": "L4",
    "title": "~(으)ㄹ 뿐만 아니라",
    "desc": "Not only but also",
    "meaning_zh": "不仅...而且...",
    "meaning_en": "Not only A but also B",
    "rules": [
      {
        "zh": "动/形+(으)ㄹ 뿐만 아니라",
        "en": "V/A + (으)ㄹ 뿐만 아니라"
      }
    ],
    "examples": [
      {
        "ko": "똑똑할 뿐만 아니라 성격도 좋아요.",
        "en": "Not only smart but also kind.",
        "zh": "不仅聪明性格也好。"
      },
      {
        "ko": "가격이 쌀 뿐만 아니라 맛도 좋아요.",
        "en": "Not only cheap but also tasty.",
        "zh": "不仅便宜而且好吃。"
      }
    ],
    "notes": "⚠ 递进句型：不仅A，而且B也(A뿐만 아니라 B도)。注意后半句通常要有도。\n💡 Tips: Progressive pattern: Not only A, but also B (A뿐만 아니라 B도). The second clause usually requires 도."
  },
  {
    "id": "l4_004",
    "category": "L4 - 2과: 가족의 변화",
    "level": "L4",
    "title": "~(으)ㄹ 수밖에 없다",
    "desc": "Have no choice but",
    "meaning_zh": "不得不做...",
    "meaning_en": "Have no choice but to",
    "rules": [
      {
        "zh": "动词+(으)ㄹ 수밖에 없다",
        "en": "Verb + (으)ㄹ 수밖에 없다"
      }
    ],
    "examples": [
      {
        "ko": "포기할 수밖에 없었어요.",
        "en": "Had no choice but to give up.",
        "zh": "不得不放弃。"
      },
      {
        "ko": "기다릴 수밖에 없었어요.",
        "en": "Had no choice but to wait.",
        "zh": "只能等着了。"
      }
    ],
    "notes": "⚠ 表示除了这样做别无选择'只能/不得不...'。比 아/어야 하다 更强调客观上的无奈。\n💡 Tips: Meaning 'have no choice but to...'. Stronger than 아/어야 하다, emphasizing objective lack of alternatives."
  },
  {
    "id": "l4_005",
    "category": "L4 - 3과: 생활 속의 과학",
    "level": "L4",
    "title": "~곤 하다",
    "desc": "Used to regularly",
    "meaning_zh": "经常做...(习惯性)",
    "meaning_en": "Used to do regularly",
    "rules": [
      {
        "zh": "动词+곤 하다",
        "en": "Verb + 곤 하다"
      }
    ],
    "examples": [
      {
        "ko": "어릴 때 바다에 가곤 했어요.",
        "en": "I used to go to the sea as a child.",
        "zh": "小时候经常去海边。"
      },
      {
        "ko": "학생 때 도서관에 가곤 했어요.",
        "en": "I used to go to the library as a student.",
        "zh": "学生时代经常去图书馆。"
      }
    ],
    "notes": "⚠ 表示过去的习惯性动作，现已不再做。常带有回忆和怀念的语气。\n💡 Tips: Represents a past habitual action that is no longer done. Often carries a tone of nostalgia."
  },
  {
    "id": "l4_006",
    "category": "L4 - 4과: 한국의 의례",
    "level": "L4",
    "title": "~더니",
    "desc": "And then (observed change)",
    "meaning_zh": "亲眼见到的变化/转折",
    "meaning_en": "Observed change or contrast",
    "rules": [
      {
        "zh": "动/形+더니",
        "en": "V/A + 더니"
      }
    ],
    "examples": [
      {
        "ko": "열심히 공부하더니 1등을 했어요.",
        "en": "Studied hard and then got 1st place.",
        "zh": "努力学习然后得了第一名。"
      },
      {
        "ko": "비가 오더니 갑자기 그쳤어요.",
        "en": "It was raining and then suddenly stopped.",
        "zh": "下着雨然后突然停了。"
      }
    ],
    "notes": "⚠ 两种用法：①观察到别人的变化 ②过去与现在的对比。不能用于第一人称自己。\n💡 Tips: Two uses: ① Observed change in someone else, ② Past vs present contrast. CANNOT be used for 1st person self."
  },
  {
    "id": "l4_007",
    "category": "L4 - 4과: 한국의 의례",
    "level": "L4",
    "title": "~았/었더니",
    "desc": "After I did, then...",
    "meaning_zh": "做了之后（结果/变化）",
    "meaning_en": "After doing, the result was",
    "rules": [
      {
        "zh": "动词+았/었더니",
        "en": "Verb + 았/었더니"
      }
    ],
    "examples": [
      {
        "ko": "많이 먹었더니 배가 아파요.",
        "en": "Ate a lot and now my stomach hurts.",
        "zh": "吃多了然后肚子疼。"
      },
      {
        "ko": "운동했더니 기분이 좋아요.",
        "en": "I feel good after exercising.",
        "zh": "运动完之后心情好。"
      }
    ],
    "notes": "⚠ 两种用法：①第一人称：我做了某事→发现结果。②第二/三人称：观察到别人做了某事→发生变化。\n💡 Tips: Two uses: ① 1st person: I did something → realized result. ② 2nd/3rd person: Observed someone do something → saw change."
  },
  {
    "id": "l4_008",
    "category": "L4 - 5과: 문화유산",
    "level": "L4",
    "title": "~든지 ~든지",
    "desc": "Whether A or B",
    "meaning_zh": "不管A还是B",
    "meaning_en": "Whether A or B",
    "rules": [
      {
        "zh": "动/形+든지",
        "en": "V/A + 든지"
      }
    ],
    "examples": [
      {
        "ko": "비가 오든지 눈이 오든지 갈 거예요.",
        "en": "Whether rain or snow I'll go.",
        "zh": "不管下雨还是下雪都会去。"
      },
      {
        "ko": "뭘 먹든지 상관없어요.",
        "en": "I don't care what we eat.",
        "zh": "吃什么都无所谓。"
      }
    ],
    "notes": "⚠ 无论A还是B。搭配疑问词使用时变成万能词：뭐든지(不管什么), 어디든지(不管哪里)。\n💡 Tips: Meaning 'whether A or B'. Combined with question words: 뭐든지(whatever), 어디든지(wherever)."
  },
  {
    "id": "l4_009",
    "category": "L4 - 5과: 문화유산",
    "level": "L4",
    "title": "얼마나 ~는지 모르다",
    "desc": "So ~ that (emphasis)",
    "meaning_zh": "不知道多么...(强调程度)",
    "meaning_en": "Emphasizes degree (you can't imagine how much)",
    "rules": [
      {
        "zh": "얼마나+动/形+는지/ㄴ지 모르다",
        "en": "얼마나 + V/A + 는지/ㄴ지 모르다"
      }
    ],
    "examples": [
      {
        "ko": "얼마나 기뻤는지 몰라요.",
        "en": "You can't imagine how happy I was.",
        "zh": "你不知道我多高兴。"
      },
      {
        "ko": "얼마나 보고 싶었는지 몰라요.",
        "en": "You don't know how much I missed you.",
        "zh": "你不知道我有多想你。"
      }
    ],
    "notes": "⚠ 固定感叹句型，强调程度极深：'你不知道有多...'。얼마나和는지 모르다必须配套使用。\n💡 Tips: Fixed exclamation pattern emphasizing extreme degree: 'You have no idea how...'. 얼마나 and 는지 모르다 MUST be paired."
  },
  {
    "id": "l4_010",
    "category": "L4 - 6과: 국제화 시대",
    "level": "L4",
    "title": "~(으)ㄹ 정도로",
    "desc": "To the extent that",
    "meaning_zh": "到了...的程度",
    "meaning_en": "To the extent/degree that",
    "rules": [
      {
        "zh": "动/形+(으)ㄹ 정도로",
        "en": "V/A + (으)ㄹ 정도로"
      }
    ],
    "examples": [
      {
        "ko": "눈물이 날 정도로 감동했어요.",
        "en": "Was moved to the point of tears.",
        "zh": "感动到流泪的程度。"
      },
      {
        "ko": "못 알아들을 정도로 빨리 말해요.",
        "en": "Speaks so fast I can't understand.",
        "zh": "说得快到听不懂的程度。"
      }
    ],
    "notes": "⚠ 强调程度之深(到了...的程度)。意思类似만큼，但정도로更偏书面语。\n💡 Tips: Emphasizes extreme extent (to the point of...). Similar meaning to 만큼, but 정도로 is more formal/written."
  },
  {
    "id": "l4_011",
    "category": "L4 - 6과: 국제화 시대",
    "level": "L4",
    "title": "~던",
    "desc": "Used to / Was doing",
    "meaning_zh": "回忆过去(做过...的/正在做的)",
    "meaning_en": "Past modifier (recall)",
    "rules": [
      {
        "zh": "动/形+던",
        "en": "V/A + 던"
      }
    ],
    "examples": [
      {
        "ko": "자주 가던 식당이 문을 닫았어요.",
        "en": "Restaurant I used to go to closed.",
        "zh": "以前经常去的餐厅关门了。"
      },
      {
        "ko": "마시던 커피가 식었어요.",
        "en": "The coffee I was drinking got cold.",
        "zh": "正在喝的咖啡凉了。"
      }
    ],
    "notes": "⚠ 回忆中未完成或反复发生的动作(过去常...但没结束)。注意和 았/었던 区分。\n💡 Tips: Recalling an incomplete or habitual past action. Differentiate from 았/었던 which implies completion."
  },
  {
    "id": "l4_012",
    "category": "L4 - 8과: 정보화 사회",
    "level": "L4",
    "title": "~(으)ㄹ 겸",
    "desc": "Also to / While at it",
    "meaning_zh": "顺便也...",
    "meaning_en": "While at it, also for",
    "rules": [
      {
        "zh": "动词+(으)ㄹ 겸",
        "en": "Verb + (으)ㄹ 겸"
      }
    ],
    "examples": [
      {
        "ko": "산책할 겸 커피 사러 나갔어요.",
        "en": "Went out for a walk and to buy coffee.",
        "zh": "顺便散步顺便买咖啡。"
      },
      {
        "ko": "운동할 겸 걸어서 왔어요.",
        "en": "I walked here, also for exercise.",
        "zh": "顺便运动走过来了。"
      }
    ],
    "notes": "⚠ 兼顾两件事'顺便/兼作'。通常用于一个动作满足两个目的。常搭配 ~도 할 겸。\n💡 Tips: Combining purposes 'while doing this, also doing that'. One action serves two purposes. Often used as ~도 할 겸."
  },
  {
    "id": "l4_013",
    "category": "L4 - 8과: 정보화 사회",
    "level": "L4",
    "title": "~ㄴ/는다면서요?",
    "desc": "I heard that...?",
    "meaning_zh": "听说...是真的吗？",
    "meaning_en": "Confirming hearsay",
    "rules": [
      {
        "zh": "动词+ㄴ/는다면서요",
        "en": "Verb + ㄴ/는다면서요"
      },
      {
        "zh": "形容词+다면서요",
        "en": "Adj + 다면서요"
      }
    ],
    "examples": [
      {
        "ko": "결혼한다면서요? 축하해요!",
        "en": "I heard you're getting married? Congrats!",
        "zh": "听说你结婚了？恭喜！"
      },
      {
        "ko": "이사한다면서요? 어디로요?",
        "en": "I heard you're moving? Where to?",
        "zh": "听说你搬家了？搬去哪？"
      }
    ],
    "notes": "⚠ 用于向对方确认自己听说的消息，'听说...是真的吗？'。带有好奇或惊讶的语气。\n💡 Tips: Used to confirm hearsay with the listener: 'I heard that..., is it true?'. Carries a tone of curiosity or surprise."
  },
  {
    "id": "l4_014",
    "category": "L4 - 9과: 사건과 사고",
    "level": "L4",
    "title": "~(으)ㄹ 뻔하다",
    "desc": "Almost did",
    "meaning_zh": "差一点就...",
    "meaning_en": "Almost happened",
    "rules": [
      {
        "zh": "动词+(으)ㄹ 뻔하다",
        "en": "Verb + (으)ㄹ 뻔하다"
      }
    ],
    "examples": [
      {
        "ko": "넘어질 뻔했어요.",
        "en": "Almost fell down.",
        "zh": "差点摔倒。"
      },
      {
        "ko": "차에 부딪힐 뻔했어요.",
        "en": "Almost got hit by a car.",
        "zh": "差点被车撞到。"
      }
    ],
    "notes": "⚠ 差一点发生(但没发生)。只能用于过去时：ㄹ 뻔했다。\n💡 Tips: 'Almost happened (but didn't)'. Can ONLY be used in past tense: ㄹ 뻔했다."
  },
  {
    "id": "l4_015",
    "category": "L4 - 9과: 사건과 사고",
    "level": "L4",
    "title": "~(으)로 인해서",
    "desc": "Due to (formal)",
    "meaning_zh": "由于(正式/书面)",
    "meaning_en": "Due to (formal cause)",
    "rules": [
      {
        "zh": "名词+(으)로 인해서",
        "en": "Noun + (으)로 인해서"
      }
    ],
    "examples": [
      {
        "ko": "태풍으로 인해 피해가 컸다.",
        "en": "Damage was great due to the typhoon.",
        "zh": "由于台风损失很大。"
      },
      {
        "ko": "사고로 인해 도로가 막혔어요.",
        "en": "The road was blocked due to an accident.",
        "zh": "由于事故道路被堵了。"
      }
    ],
    "notes": "⚠ 表示原因'由于...'。属于正式书面语，常用于新闻/报告。口语中通常用때문에。\n💡 Tips: Means 'due to'. Highly formal/written expression used in news/reports. In speech, 때문에 is preferred."
  },
  {
    "id": "l4_016",
    "category": "L4 - 10과: 언어생활",
    "level": "L4",
    "title": "~(으)ㄴ/는 척하다",
    "desc": "Pretend to",
    "meaning_zh": "假装做...",
    "meaning_en": "Pretend to be/do",
    "rules": [
      {
        "zh": "动词+는 척하다",
        "en": "Verb + 는 척하다"
      },
      {
        "zh": "形容词+ㄴ/은 척하다",
        "en": "Adj + ㄴ/은 척하다"
      }
    ],
    "examples": [
      {
        "ko": "모르는 척했어요.",
        "en": "Pretended not to know.",
        "zh": "假装不知道。"
      },
      {
        "ko": "안 아픈 척했어요.",
        "en": "Pretended it didn't hurt.",
        "zh": "假装不疼。"
      }
    ],
    "notes": "⚠ 假装做某事。根据时态选择定语形：动词现在时(는 척)、形容词(ㄴ/은 척)、过去时(ㄴ/은 척)。\n💡 Tips: 'Pretend to'. Match the modifier to the tense: Verb present (는 척), Adjective (ㄴ/은 척), Past (ㄴ/은 척)."
  },
  {
    "id": "l4_017",
    "category": "L4 - 11과: 교육 제도",
    "level": "L4",
    "title": "~기 마련이다",
    "desc": "Bound to happen",
    "meaning_zh": "必然会...",
    "meaning_en": "Naturally bound to happen",
    "rules": [
      {
        "zh": "动/形+기 마련이다",
        "en": "V/A + 기 마련이다"
      }
    ],
    "examples": [
      {
        "ko": "노력하면 성공하기 마련이에요.",
        "en": "If you try, success is bound to follow.",
        "zh": "努力的话成功是必然的。"
      },
      {
        "ko": "노력하면 좋은 결과가 오기 마련이에요.",
        "en": "Good results are bound to come with effort.",
        "zh": "努力的话好结果是必然的。"
      }
    ],
    "notes": "⚠ 表示自然规律或必然发生的事，'必然会...'。不能用于偶然发生的事件。\n💡 Tips: Expresses natural law or inevitability: 'Bound to happen'. Cannot be used for random/accidental events."
  },
  {
    "id": "l4_018",
    "category": "L4 - 12과: 선거와 투표",
    "level": "L4",
    "title": "~(이)야말로",
    "desc": "The very / The most",
    "meaning_zh": "强调(正是/才是)",
    "meaning_en": "Emphasizes noun as the best/true example",
    "rules": [
      {
        "zh": "名词+(이)야말로",
        "en": "Noun + (이)야말로"
      }
    ],
    "examples": [
      {
        "ko": "사랑이야말로 가장 중요해요.",
        "en": "Love is the most important.",
        "zh": "爱情才是最重要的。"
      },
      {
        "ko": "건강이야말로 가장 소중한 것이에요.",
        "en": "Health is the most precious thing.",
        "zh": "健康才是最宝贵的。"
      }
    ],
    "notes": "⚠ 强烈强调标记，'正是/才是...'。是이/가的加强版，常接 최고/가장/진짜。\n💡 Tips: Emphatic marker meaning 'THE very / indeed'. Stronger version of 이/가. Often paired with 최고, 가장, 진짜."
  },
  {
    "id": "l4_019",
    "category": "L4 - 12과: 선거와 투표",
    "level": "L4",
    "title": "~나 보다/~(으)ㄴ가 보다",
    "desc": "It seems (evidence)",
    "meaning_zh": "看来.../似乎...(有证据)",
    "meaning_en": "Guess based on evidence",
    "rules": [
      {
        "zh": "动词+나 보다",
        "en": "Verb + 나 보다"
      },
      {
        "zh": "形容词+ㄴ가 보다",
        "en": "Adj + ㄴ가 보다"
      }
    ],
    "examples": [
      {
        "ko": "비가 오나 봐요.",
        "en": "It seems like it's raining.",
        "zh": "看来下雨了。"
      },
      {
        "ko": "많이 먹었나 봐요.",
        "en": "Seems like they ate a lot.",
        "zh": "看来吃了很多。"
      }
    ],
    "notes": "⚠ 基于客观证据的推测(看到/听到某事后判断)。比 것 같다 更有依据。\n💡 Tips: Evidence-based guess (judging after seeing/hearing something). Stronger factual basis than 것 같다."
  },
  {
    "id": "l4_020",
    "category": "L4 - 13과: 환경 보호",
    "level": "L4",
    "title": "~도록",
    "desc": "So that / Until",
    "meaning_zh": "使得.../直到...为止",
    "meaning_en": "So that, until",
    "rules": [
      {
        "zh": "动词+도록",
        "en": "Verb + 도록"
      }
    ],
    "examples": [
      {
        "ko": "늦지 않도록 일찍 출발하세요.",
        "en": "Leave early so you're not late.",
        "zh": "为了不迟到请早出发。"
      },
      {
        "ko": "잊지 않도록 메모해 두세요.",
        "en": "Write a note so you don't forget.",
        "zh": "为了不忘记请写下来。"
      }
    ],
    "notes": "⚠ 两种常见用法：①表示目的'为了使...'(안 늦도록 早出发) ②表示程度'到了...地步'(눈물이 나도록)。\n💡 Tips: Two usages: ① Purpose 'so that...' (안 늦도록 = so as not to be late) ② Extent 'to the point of...' (눈물이 나도록)."
  },
  {
    "id": "l4_021",
    "category": "L4 - 16과: 이민 생활",
    "level": "L4",
    "title": "~(으)ㄹ지도 모르다",
    "desc": "Might / Perhaps",
    "meaning_zh": "也许.../说不定...",
    "meaning_en": "Might, perhaps",
    "rules": [
      {
        "zh": "动/形+(으)ㄹ지도 모르다",
        "en": "V/A + (으)ㄹ지도 모르다"
      }
    ],
    "examples": [
      {
        "ko": "내일 비가 올지도 몰라요.",
        "en": "It might rain tomorrow.",
        "zh": "明天说不定会下雨。"
      },
      {
        "ko": "그 사람이 올지도 몰라요.",
        "en": "That person might come.",
        "zh": "那个人说不定会来。"
      }
    ],
    "notes": "⚠ 表示不确定的推测，'也许/说不定...'。可能性比 것 같다 更低。常用于提醒注意。\n💡 Tips: Less certain guess, 'might/perhaps...'. Lower probability than 것 같다. Often used to warn someone."
  },
  {
    "id": "l4_022",
    "category": "L4 - 16과: 이민 생활",
    "level": "L4",
    "title": "~치고",
    "desc": "For a ~ (surprisingly)",
    "meaning_zh": "作为...来说(出人意料)",
    "meaning_en": "For a (surprisingly good/bad)",
    "rules": [
      {
        "zh": "名词+치고",
        "en": "Noun + 치고"
      }
    ],
    "examples": [
      {
        "ko": "가격치고 품질이 좋아요.",
        "en": "Quality is good for the price.",
        "zh": "就价格来说质量很好。"
      },
      {
        "ko": "한국 사람치고 김치를 안 좋아해요.",
        "en": "For a Korean, they don't like kimchi.",
        "zh": "作为韩国人居然不喜欢泡菜。"
      }
    ],
    "notes": "⚠ 后面通常接出乎意料的评价(不管是正面还是负面)：'作为...来说居然...'。\n💡 Tips: Meaning 'for a...'. Usually followed by an unexpected evaluation, whether positive or negative."
  },
  {
    "id": "l4_023",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~(으)ㄴ/는 셈이다",
    "desc": "Practically / More or less",
    "meaning_zh": "算是...",
    "meaning_en": "Practically, is in effect",
    "rules": [
      {
        "zh": "动词+는 셈이다",
        "en": "Verb + 는 셈이다"
      },
      {
        "zh": "形容词+ㄴ/은 셈이다",
        "en": "Adj + ㄴ/은 셈이다"
      }
    ],
    "examples": [
      {
        "ko": "매일 운동하는 셈이에요.",
        "en": "I practically exercise every day.",
        "zh": "算是每天都运动了。"
      },
      {
        "ko": "거의 다 끝난 셈이에요.",
        "en": "It's practically finished.",
        "zh": "算是差不多结束了。"
      }
    ],
    "notes": "⚠ 表示近似判断，'算是/差不多等于...'。不是100%精确，但实际上等同于。\n💡 Tips: Approximation, meaning 'It is practically/more or less...'. Not 100% exact but virtually equivalent."
  },
  {
    "id": "l4_024",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~(으)ㄴ/는 탓에",
    "desc": "Because of (blame)",
    "meaning_zh": "怪/归咎于...",
    "meaning_en": "Blaming a negative result",
    "rules": [
      {
        "zh": "动词+는 탓에",
        "en": "Verb + 는 탓에"
      },
      {
        "zh": "形容词+ㄴ/은 탓에",
        "en": "Adj + ㄴ/은 탓에"
      }
    ],
    "examples": [
      {
        "ko": "비가 온 탓에 길이 막혀요.",
        "en": "Roads blocked because of rain.",
        "zh": "都怪下雨路堵了。"
      },
      {
        "ko": "늦게 일어난 탓에 지각했어요.",
        "en": "Was late because of waking up late.",
        "zh": "都怪起晚了所以迟到了。"
      }
    ],
    "notes": "⚠ '都怪...'。只能用于导致负面结果的原因。如果导致了好结果请用 덕분에。\n💡 Tips: 'Blame to / because of'. Used ONLY for negative results. For positive results, use 덕분에 instead."
  },
  {
    "id": "l4_025",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~(으)ㄴ/는데도",
    "desc": "Despite / Even though",
    "meaning_zh": "尽管...还是...",
    "meaning_en": "Despite, even though",
    "rules": [
      {
        "zh": "动词+는데도",
        "en": "Verb + 는데도"
      },
      {
        "zh": "形容词+ㄴ/은데도",
        "en": "Adj + ㄴ/은데도"
      }
    ],
    "examples": [
      {
        "ko": "열심히 했는데도 떨어졌어요.",
        "en": "Failed despite working hard.",
        "zh": "尽管努力了还是没通过。"
      },
      {
        "ko": "약을 먹었는데도 안 나았어요.",
        "en": "Didn't get better despite taking medicine.",
        "zh": "吃了药还是没好。"
      }
    ],
    "notes": "⚠ 는데 + 도 的合体，'尽管...却依然'。转折语气比 지만 更强烈，带有惊讶或抱怨的意味。\n💡 Tips: Strong concession 'despite the fact that...'. Stronger contrast than 지만, implies surprise or complaining."
  },
  {
    "id": "l4_026",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~(으)ㄹ 걸 그랬다",
    "desc": "Should have done",
    "meaning_zh": "后悔(早知道就...)",
    "meaning_en": "Regret not doing",
    "rules": [
      {
        "zh": "动词+(으)ㄹ 걸 그랬다",
        "en": "Verb + (으)ㄹ 걸 그랬다"
      }
    ],
    "examples": [
      {
        "ko": "우산을 가져올 걸 그랬어요.",
        "en": "I should have brought an umbrella.",
        "zh": "早知道就带伞了。"
      },
      {
        "ko": "택시를 탈 걸 그랬어요.",
        "en": "I should have taken a taxi.",
        "zh": "早知道就打车了。"
      }
    ],
    "notes": "⚠ 对过去没做的事感到后悔：'早知道就该...'。否定形式：지 말 걸 그랬다(早知道就不做了)。\n💡 Tips: Regret over a missed past action: 'I should have...'. Negative form: 지 말 걸 그랬다 (I shouldn't have...)."
  },
  {
    "id": "l4_027",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~(으)ㄹ 리가 없다",
    "desc": "No way / Impossible",
    "meaning_zh": "不可能...",
    "meaning_en": "No way, impossible",
    "rules": [
      {
        "zh": "动/形+(으)ㄹ 리가 없다",
        "en": "V/A + (으)ㄹ 리가 없다"
      }
    ],
    "examples": [
      {
        "ko": "그가 거짓말을 할 리가 없어요.",
        "en": "There's no way he lied.",
        "zh": "他不可能撒谎。"
      },
      {
        "ko": "그런 실수를 할 리가 없어요.",
        "en": "There's no way they made that mistake.",
        "zh": "不可能犯那种错。"
      }
    ],
    "notes": "⚠ 强烈否定的推测，表示'绝对不可能！'。常用于反驳别人的说法。\n💡 Tips: Strong negative supposition, meaning 'It's absolutely impossible!'. Great for refuting claims."
  },
  {
    "id": "l4_028",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~(으)ㄹ 줄 몰랐다/알았다",
    "desc": "Didn't expect / Expected",
    "meaning_zh": "没想到.../以为...",
    "meaning_en": "Unexpected/expected outcome",
    "rules": [
      {
        "zh": "动/形+(으)ㄹ 줄 몰랐다",
        "en": "V/A + (으)ㄹ 줄 몰랐다"
      }
    ],
    "examples": [
      {
        "ko": "이렇게 어려울 줄 몰랐어요.",
        "en": "Didn't expect it to be this hard.",
        "zh": "没想到这么难。"
      },
      {
        "ko": "벌써 졸업할 줄 몰랐어요.",
        "en": "Didn't expect to graduate already.",
        "zh": "没想到已经毕业了。"
      }
    ],
    "notes": "⚠ 两者含义相反！몰랐다 = 没想到(表示意外)，알았다 = 以为是(表示误解)。\n💡 Tips: Opposite meanings! 몰랐다 = Didn't expect (surprise), 알았다 = Thought it was (wrong assumption)."
  },
  {
    "id": "l4_029",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~(으)ㄹ까 봐",
    "desc": "Worried that",
    "meaning_zh": "担心会...",
    "meaning_en": "Worried/afraid that",
    "rules": [
      {
        "zh": "动词+(으)ㄹ까 봐",
        "en": "Verb + (으)ㄹ까 봐"
      }
    ],
    "examples": [
      {
        "ko": "비가 올까 봐 우산을 가져갔어요.",
        "en": "Took an umbrella worried it'd rain.",
        "zh": "怕下雨所以带了伞。"
      },
      {
        "ko": "늦을까 봐 택시를 탔어요.",
        "en": "Took a taxi worried I'd be late.",
        "zh": "怕迟到所以打了车。"
      }
    ],
    "notes": "⚠ 表示担心某事发生，后面通常接预防措施。不能用于已经发生的事情。\n💡 Tips: Worrying something might happen, usually followed by a preventive action. Cannot be used for past events."
  },
  {
    "id": "l4_030",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~(으)ㄹ래야 ~(으)ㄹ 수 없다",
    "desc": "Even if I try I can't",
    "meaning_zh": "想做都做不了",
    "meaning_en": "Can't even if one tries",
    "rules": [
      {
        "zh": "动词+(으)ㄹ래야 (으)ㄹ 수 없다",
        "en": "Verb + (으)ㄹ래야 (으)ㄹ 수 없다"
      }
    ],
    "examples": [
      {
        "ko": "잠을 잘래야 잘 수가 없어요.",
        "en": "I can't sleep even if I try.",
        "zh": "想睡也睡不着。"
      },
      {
        "ko": "잊을래야 잊을 수가 없어요.",
        "en": "I can't forget even if I try.",
        "zh": "想忘也忘不了。"
      }
    ],
    "notes": "⚠ 强烈的不可能性'即使想做也绝对做不到'。前后重复使用同一个动词：잊을래야 잊을 수 없다。\n💡 Tips: Absolute impossibility 'cannot... even if one tries'. The exact same verb is repeated: 잊을래야 잊을 수 없다."
  },
  {
    "id": "l4_031",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~(으)나 마나",
    "desc": "Whether or not / Pointless",
    "meaning_zh": "做不做都一样(没用)",
    "meaning_en": "Pointless whether done or not",
    "rules": [
      {
        "zh": "动词+(으)나 마나",
        "en": "Verb + (으)나 마나"
      }
    ],
    "examples": [
      {
        "ko": "말하나 마나예요.",
        "en": "Pointless to say.",
        "zh": "说不说都一样。"
      },
      {
        "ko": "들으나 마나예요.",
        "en": "Pointless to listen.",
        "zh": "听不听都一样。"
      }
    ],
    "notes": "⚠ 表示不管做不做结果都一样，'做也白做'。带有消极或放弃的语气。\n💡 Tips: Meaning 'pointless to do'. Implies that the outcome won't change regardless of the action. Pessimistic tone."
  },
  {
    "id": "l4_032",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~ㄴ/는다면",
    "desc": "If (hypothetical)",
    "meaning_zh": "假设(如果...的话)",
    "meaning_en": "Hypothetical if",
    "rules": [
      {
        "zh": "动词+ㄴ/는다면",
        "en": "Verb + ㄴ/는다면"
      },
      {
        "zh": "形容词+다면",
        "en": "Adj + 다면"
      }
    ],
    "examples": [
      {
        "ko": "복권에 당첨된다면 뭘 할 거예요?",
        "en": "What would you do if you won the lottery?",
        "zh": "如果中了彩票会做什么？"
      },
      {
        "ko": "시간이 있다면 같이 가요.",
        "en": "If you have time, let's go together.",
        "zh": "如果有时间一起去吧。"
      }
    ],
    "notes": "⚠ 比(으)면更强烈的假设，用于可能性极低的情况：'万一/如果...' (例如：如果中了彩票)。\n💡 Tips: Stronger hypothetical than (으)면. Used for highly unlikely scenarios: 'If by any chance...' (e.g., If I win the lottery)."
  },
  {
    "id": "l4_033",
    "category": "L4 - 추가 문법",
    "level": "L4",
    "title": "~고말고(요)",
    "desc": "Of course / Certainly",
    "meaning_zh": "强烈地肯定对方的提问或同意对方的意见（那是当然... / 绝对会...）。",
    "meaning_en": "Used to strongly agree with the listener or confirm that something is an absolute certainty ('Of course I will/it is').",
    "rules": [
      {
        "zh": "动/形+고말고요",
        "en": "V/A + 고말고요"
      },
      {
        "zh": "名词+(이)고말고요",
        "en": "Noun + (이)고말고요"
      }
    ],
    "examples": [
      {
        "ko": "가: 그 영화가 재미있어요? 나: 재미있고말고요!",
        "en": "A: Is that movie fun? B: Of course it's fun!",
        "zh": "甲：那部电影好看吗？ 乙：那当然好看啦！"
      },
      {
        "ko": "친구가 부탁하면 제가 도와주고말고요.",
        "en": "If a friend asks for a favor, of course I will help.",
        "zh": "朋友要是拜托我，我当然会帮忙。"
      }
    ],
    "notes": "💡 Tips: A very enthusiastic and conversational way to say 'Absolutely'. Often repeats the verb/adjective used in the question.\n⚠ 绝对肯定：口语中用来积极回应对方，语气比单纯的 '네' 强烈得多。通常会重复对方提问时的动词或形容词。"
  },
  {
    "id": "l4_034",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~기에(는)",
    "desc": "For doing / Considering",
    "meaning_zh": "就做...来说(评价)",
    "meaning_en": "Considering the action",
    "rules": [
      {
        "zh": "动/形+기에(는)",
        "en": "V/A + 기에(는)"
      }
    ],
    "examples": [
      {
        "ko": "혼자 하기에는 너무 많아요.",
        "en": "Too much for one person.",
        "zh": "一个人做的话太多了。"
      },
      {
        "ko": "이 신발은 등산하기에는 불편해요.",
        "en": "These shoes are uncomfortable for hiking.",
        "zh": "这双鞋爬山的话不舒服。"
      }
    ],
    "notes": "⚠ 用于评价某个行为是否合适：'做某事的话太好/太坏/太大/太小'。\n💡 Tips: Used to evaluate suitability: 'For doing [action], it is too good/bad/big/small'."
  },
  {
    "id": "l4_035",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~느니 차라리",
    "desc": "Rather than A, prefer B",
    "meaning_zh": "与其A不如B",
    "meaning_en": "Rather than",
    "rules": [
      {
        "zh": "动词+느니 차라리",
        "en": "Verb + 느니 차라리"
      }
    ],
    "examples": [
      {
        "ko": "기다리느니 차라리 걸어가자.",
        "en": "Rather than wait let's walk.",
        "zh": "与其等不如走过去。"
      },
      {
        "ko": "버스를 타느니 차라리 걸어가겠어요.",
        "en": "I'd rather walk than take the bus.",
        "zh": "与其坐公交不如走路。"
      }
    ],
    "notes": "⚠ 比较选择：'与其A，不如B'。느니前面是不喜欢的选项，차라리后面是更偏好的选项。\n💡 Tips: Choice comparison: 'Rather B than A'. The clause before 느니 is the undesirable option, the one after 차라리 is preferred."
  },
  {
    "id": "l4_036",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~는 김에",
    "desc": "While at it",
    "meaning_zh": "趁...的机会",
    "meaning_en": "While you're at it",
    "rules": [
      {
        "zh": "动词+는 김에",
        "en": "Verb + 는 김에"
      }
    ],
    "examples": [
      {
        "ko": "마트에 가는 김에 우유 좀 사 와.",
        "en": "Buy milk while at the mart.",
        "zh": "趁去超市顺便买牛奶。"
      },
      {
        "ko": "청소하는 김에 빨래도 했어요.",
        "en": "Did laundry while I was at it cleaning.",
        "zh": "趁打扫的机会也洗了衣服。"
      }
    ],
    "notes": "⚠ '顺便...'。第一个动作是计划内的主要动作，第二个动作是借机顺便做的。\n💡 Tips: 'While you're at it / taking the opportunity'. The first action is the primary planned one, the second is secondary."
  },
  {
    "id": "l4_037",
    "category": "L4 - 추가 문법",
    "level": "L4",
    "title": "~는 모양이다",
    "desc": "It appears that / Looks like",
    "meaning_zh": "基于客观情况或线索做出的推测（看样子是... / 似乎是...）。不能用于第一人称（自己）的事情。",
    "meaning_en": "An objective guess based on a situation or observation (It appears/looks like...). Cannot be used for one's own actions.",
    "rules": [
      {
        "zh": "动词+는 모양이다",
        "en": "Verb + 는 모양이다"
      },
      {
        "zh": "形容词+(으)ㄴ 모양이다",
        "en": "Adj + (으)ㄴ 모양이다"
      },
      {
        "zh": "名词+인 모양이다",
        "en": "Noun + 인 모양이다"
      }
    ],
    "examples": [
      {
        "ko": "우산이 있는 걸 보니까 비가 오는 모양이에요.",
        "en": "Seeing the umbrella, it looks like it is raining.",
        "zh": "看到有伞，看样子是在下雨。"
      },
      {
        "ko": "식당에 사람이 없는 걸 보니 맛이 없는 모양이에요.",
        "en": "Seeing no people in the restaurant, it seems the food is not good.",
        "zh": "看到餐厅里没人，似乎不好吃。"
      }
    ],
    "notes": "💡 Tips: Often preceded by ~(으)ㄴ/는 걸 보니까 (Seeing that...). Cannot be used for your own actions or direct subjective feelings.\n⚠ 客观推测：前面通常搭配 ~(으)ㄴ/는 걸 보니까 (看到...) 作为推测依据。绝对不能用来推测自己的行为！"
  },
  {
    "id": "l4_038",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~는 바람에",
    "desc": "Due to (unexpected)",
    "meaning_zh": "由于突发原因(负面结果)",
    "meaning_en": "Due to an unexpected event (negative)",
    "rules": [
      {
        "zh": "动词+는 바람에",
        "en": "Verb + 는 바람에"
      }
    ],
    "examples": [
      {
        "ko": "버스를 놓치는 바람에 지각했어요.",
        "en": "Late because I missed the bus.",
        "zh": "因为错过公交迟到了。"
      },
      {
        "ko": "알람이 안 울리는 바람에 늦었어요.",
        "en": "Late because the alarm didn't go off.",
        "zh": "因为闹钟没响所以迟到了。"
      }
    ],
    "notes": "⚠ '由于(突发的意外原因)...'。只能用于过去已经发生的突发事件，且结果必然是负面的。\n💡 Tips: 'Due to (an unexpected event)'. Used ONLY for past sudden events, and the result is always negative."
  },
  {
    "id": "l4_039",
    "category": "L4 - 추가 문법",
    "level": "L4",
    "title": "~다 보니(까)",
    "desc": "While doing something, one realizes/ends up...",
    "meaning_zh": "表示在持续做某事的过程中，发现了新的事实，或者自然而然产生了某种结果（做着做着发现... / 一直做...结果...）。",
    "meaning_en": "Indicates that while continuously doing an action, one realizes a new fact or a certain result naturally occurs.",
    "rules": [
      {
        "zh": "动词+다 보니(까)",
        "en": "Verb + 다 보니(까)"
      }
    ],
    "examples": [
      {
        "ko": "한국에 오래 살다 보니 매운 음식을 잘 먹게 되었어요.",
        "en": "As I lived in Korea for a long time, I ended up eating spicy food well.",
        "zh": "在韩国住久了，结果变得很能吃辣了。"
      },
      {
        "ko": "매일 만나다 보니까 정이 들었어요.",
        "en": "As we met every day, we naturally grew fond of each other.",
        "zh": "每天见面，不知不觉就产生了感情。"
      }
    ],
    "notes": "💡 Tips: Only attaches to verbs. Focuses on the continuous repetition of a past action leading to a new realization or habit.\n⚠ 持续与结果：只能接动词。强调前面的动作必须是持续或反复发生的，才导致了后面的自然结果。"
  },
  {
    "id": "l4_040",
    "category": "L4 - 추가 문법",
    "level": "L4",
    "title": "~다가는",
    "desc": "If one keeps doing this, then (negative result)",
    "meaning_zh": "表示如果前面的动作或状态一直持续下去，就会导致不好的结果（如果一直这样...的话，就会...）。",
    "meaning_en": "Warns that if an action/state continues as it is, a negative consequence will inevitably follow.",
    "rules": [
      {
        "zh": "动词+다가는",
        "en": "Verb + 다가는"
      }
    ],
    "examples": [
      {
        "ko": "그렇게 매일 술을 마시다가는 건강이 나빠질 거예요.",
        "en": "If you keep drinking every day like that, your health will get worse.",
        "zh": "如果每天像那样喝酒的话，身体会变差的。"
      },
      {
        "ko": "게임을 계속 하다가는 시험에 떨어질 텐데 걱정이에요.",
        "en": "I'm worried you'll fail the exam if you keep playing games.",
        "zh": "如果一直玩游戏的话考试会落榜的，真让人担心。"
      }
    ],
    "notes": "💡 Tips: Always predicts a NEGATIVE outcome. The second clause often uses future tense or guessing forms like ~(으)ㄹ 거예요 / ~(으)ㄹ 텐데.\n⚠ 负面预警：后半句【必定是不好的结果】，且经常搭配将来时或推测语气（会变坏的 / 会失败的）。"
  },
  {
    "id": "l4_041",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~다니까",
    "desc": "I said...! / I told you",
    "meaning_zh": "我说了.../我告诉你了",
    "meaning_en": "Insisting/repeating what was said",
    "rules": [
      {
        "zh": "动词+ㄴ/는다니까",
        "en": "Verb + ㄴ/는다니까"
      },
      {
        "zh": "形容词+다니까",
        "en": "Adj + 다니까"
      }
    ],
    "examples": [
      {
        "ko": "아프다니까요!",
        "en": "I said I'm sick!",
        "zh": "我说了我不舒服！"
      },
      {
        "ko": "진짜 모른다니까요!",
        "en": "I said I really don't know!",
        "zh": "我说了我真的不知道！"
      }
    ],
    "notes": "⚠ 强调语气，表示'我都说了...!'。反复强调时使用，可能显得不耐烦。\n💡 Tips: Insistent repetition, meaning 'I TOLD you...!'. Can sound impatient or forceful."
  },
  {
    "id": "l4_042",
    "category": "L4 - 추가 문법",
    "level": "L4",
    "title": "~달라고 하다",
    "desc": "Asked to give (to the speaker)",
    "meaning_zh": "间接引语。转述“请给我（说话人自己）...”的请求。原句为 주십시오 / 주세요 时使用。",
    "meaning_en": "Indirect request. Used when quoting someone asking to give something TO THEMSELVES (the original speaker).",
    "rules": [
      {
        "zh": "名词+달라고 하다",
        "en": "Noun + 달라고 하다"
      },
      {
        "zh": "动词+아/어 달라고 하다",
        "en": "Verb + 아/어 달라고 하다"
      }
    ],
    "examples": [
      {
        "ko": "아이가 엄마에게 용돈을 달라고 했어요.",
        "en": "The child asked his mom to give HIM pocket money.",
        "zh": "孩子叫妈妈给他零花钱。"
      },
      {
        "ko": "친구가 문을 열어 달라고 했어요.",
        "en": "My friend asked me to open the door FOR HIM.",
        "zh": "朋友让我帮他开一下门。"
      }
    ],
    "notes": "💡 Tips: Crucial distinction: Use 달라고 하다 when the benefit/object goes to the original requester. If it goes to a 3rd party, use 주라고 하다.\n⚠ 核心考点：如果原始说话人是为【自己】索要东西或请求帮助，转述时必须把 주다 变成 달라고 하다！"
  },
  {
    "id": "l4_043",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~더라도",
    "desc": "Even if",
    "meaning_zh": "即使...也...",
    "meaning_en": "Even if (hypothetical concession)",
    "rules": [
      {
        "zh": "动/形+더라도",
        "en": "V/A + 더라도"
      }
    ],
    "examples": [
      {
        "ko": "힘들더라도 포기하지 마세요.",
        "en": "Don't give up even if it's hard.",
        "zh": "即使辛苦也不要放弃。"
      },
      {
        "ko": "비가 오더라도 가겠어요.",
        "en": "I'll go even if it rains.",
        "zh": "即使下雨也要去。"
      }
    ],
    "notes": "⚠ 极强的假设性让步，'就算/即使(发生了还没发生的事)'。比 아도/어도 更强调假设。\n💡 Tips: Strong hypothetical concession 'even if (something unlikely happens)'. More hypothetical than 아도/어도."
  },
  {
    "id": "l4_044",
    "category": "L4 - 추가 문법",
    "level": "L4",
    "title": "~아/어 주라고 하다",
    "desc": "Asked to give (to a third person)",
    "meaning_zh": "间接引语。转述“请给（第三者）...”的请求。说话人要求听话人为别人做事。",
    "meaning_en": "Indirect request. Used when quoting someone asking to give something to a THIRD PARTY (not the speaker).",
    "rules": [
      {
        "zh": "名词+주라고 하다",
        "en": "Noun + 주라고 하다"
      },
      {
        "zh": "动词+아/어 주라고 하다",
        "en": "Verb + 아/어 주라고 하다"
      }
    ],
    "examples": [
      {
        "ko": "선생님이 반장에게 이 책을 민수에게 주라고 하셨어요.",
        "en": "The teacher told the class president to give this book to Minsu.",
        "zh": "老师叫班长把这本书给敏秀。"
      },
      {
        "ko": "엄마가 동생을 도와주라고 했어요.",
        "en": "Mom told me to help my younger sibling.",
        "zh": "妈妈叫我帮一下弟弟。"
      }
    ],
    "notes": "💡 Tips: The action benefits someone else (a third person). If the teacher said 'Give it to me', it would be 달라고 하다.\n⚠ 核心考点：如果原始说话人是让听话人去帮助【第三个人】或把东西给【第三个人】，转述时保留 주라고 하다！"
  },
  {
    "id": "l4_045",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~아/어서야",
    "desc": "Only after / Not until",
    "meaning_zh": "表示只有满足了前面的条件或时间点，后面才能发生（必须要...才... / 直到...才...）。带有强调条件极其苛刻的语气。",
    "meaning_en": "Means 'only after' doing something or 'not until' a certain point. Emphasizes that the condition is strict or late.",
    "rules": [
      {
        "zh": "动/形+아/어서야",
        "en": "V/A + 아/어서야"
      }
    ],
    "examples": [
      {
        "ko": "밤 12시가 되어서야 집에 도착했어요.",
        "en": "I didn't arrive home until it became 12 midnight.",
        "zh": "直到晚上12点才到家。"
      },
      {
        "ko": "이런 실력으로 취직을 해서야 되겠어요?",
        "en": "With this kind of skill, how can you expect to get a job?",
        "zh": "就这点实力能找得到工作吗？（反问：必须要更好才行）"
      }
    ],
    "notes": "💡 Tips: Used to emphasize lateness/difficulty. Often paired with rhetorical questions ending in ~겠어요? or ~되겠어요?.\n⚠ 极限条件：常用来表示某事发生得太晚，或者反问对方“这样的条件怎么可能行得通呢？”（搭配~되겠어요?）。"
  },
  {
    "id": "l4_046",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "~았/었더라면",
    "desc": "If I had done",
    "meaning_zh": "如果当时做了的话(假设过去)",
    "meaning_en": "Hypothetical past (if I had...)",
    "rules": [
      {
        "zh": "动词+았/었더라면",
        "en": "Verb + 았/었더라면"
      }
    ],
    "examples": [
      {
        "ko": "열심히 했더라면 합격했을 거예요.",
        "en": "If I had worked hard I would have passed.",
        "zh": "如果当时努力了就会通过的。"
      },
      {
        "ko": "일찍 출발했더라면 안 늦었을 거예요.",
        "en": "If I had left early I wouldn't have been late.",
        "zh": "如果早出发的话就不会迟到了。"
      }
    ],
    "notes": "⚠ 对过去的假设：'如果当时...的话'。后半句常搭配推测：았/었을 거예요(就会...)。\n💡 Tips: Past hypothetical: 'If I had done...'. Usually followed by a past guess: 았/었을 거예요 (I would have...)."
  },
  {
    "id": "l4_047",
    "category": "L4 - 추가 문법 (Extra Grammar)",
    "level": "L4",
    "title": "사동사 (Causative verbs)",
    "desc": "Causative verbs",
    "meaning_zh": "使动动词(이/히/리/기/우)",
    "meaning_en": "Causative verb suffixes",
    "rules": [
      {
        "zh": "먹이다(feed)",
        "en": "먹이다 (to feed)"
      },
      {
        "zh": "읽히다(make read)",
        "en": "읽히다 (to make read)"
      },
      {
        "zh": "울리다(make cry)",
        "en": "울리다 (to make cry)"
      },
      {
        "zh": "깨우다(wake up)",
        "en": "깨우다 (to wake up)"
      }
    ],
    "examples": [
      {
        "ko": "아이에게 밥을 먹여요.",
        "en": "I feed the child.",
        "zh": "给孩子喂饭。"
      },
      {
        "ko": "아침에 아이를 깨워요.",
        "en": "I wake the child in the morning.",
        "zh": "早上叫孩子起床。"
      }
    ],
    "notes": "⚠ 使役后缀(이/히/리/기/우/추)表示'让某人做'。无规律必须单记。高频词：먹이다(喂), 깨우다(叫醒)。\n💡 Tips: Six causative suffixes (이/히/리/기/우/추) meaning 'make/let someone do'. Must be memorized. Common: 먹이다(feed), 깨우다(wake up)."
  }
];
