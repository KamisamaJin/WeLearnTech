// KIIP Grammar Database (Updated to KIIP 2021+ New Curriculum Levels & Units, Total: 181)
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
        "title": "~에 있어요/없어요",
        "level": "L1",
        "category": "L1 - 2과: 방에 책상이 있어요",
        "notes": "⚠ 核心方位句型。用于表达人或事物的存在与否及所在位置。\n💡 Tips: Used to express existence or location of a subject at a specific place.",
        "id": "l1_003",
        "desc": "Is / Is not at (a place)",
        "meaning_zh": "在 / 不在（某处）",
        "meaning_en": "Is / Is not at (a place)",
        "rules": [
            {
                "en": "Noun + 에 있어요/없어요",
                "zh": "名词+에 있어요/없어요"
            }
        ],
        "examples": [
            {
                "ko": "책상 위에 책이 있어요.",
                "en": "There is a book on the desk.",
                "zh": "书桌上有书。"
            }
        ]
    },
    {
        "id": "l1_004",
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
        "id": "l1_005",
        "category": "L1 - 3과: 한국어를 배워요",
        "level": "L1",
        "title": "~아/어요",
        "desc": "Present tense polite",
        "meaning_zh": "非格式体现在时终结词尾",
        "meaning_en": "Polite informal present tense ending",
        "rules": [
            {
                "zh": "阳性元音(ㅏ,ㅗ)+아요",
                "en": "Bright vowel(ㅏ,ㅗ) + 아요"
            },
            {
                "zh": "阴性元音(ㅓ,ㅜ,ㅡ,ㅣ)+어요",
                "en": "Dark vowel + 어요"
            },
            {
                "zh": "하다 → 해요",
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
        "id": "l1_006",
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
        "title": "~에 가다/오다",
        "level": "L1",
        "category": "L1 - 4과: 라흐만 씨가 식당에 가요",
        "notes": "⚠ 方向助词。连接目的地，表示移动的方向或终点。\n💡 Tips: Indicates the destination of a movement.",
        "id": "l1_007",
        "desc": "Go to / Come to (a place)",
        "meaning_zh": "去 / 来（某处）",
        "meaning_en": "Go to / Come to (a place)",
        "rules": [
            {
                "en": "Noun + 에 가다/오다",
                "zh": "名词+에 가다/오다"
            }
        ],
        "examples": [
            {
                "ko": "내일 학교에 가요.",
                "en": "I go to school tomorrow.",
                "zh": "明天去学校。"
            }
        ]
    },
    {
        "id": "l1_008",
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
        "id": "l1_009",
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
        "id": "l1_010",
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
        "title": "~이/가 아니다",
        "level": "L1",
        "category": "L1 - 5과: 오늘은 5월 5일이에요",
        "notes": "⚠ 否定断定句。是 '~이다' 的反义词，前面必须用主格助词 이/가。\n💡 Tips: The negative form of ~이다. '학생이 아니에요' (I am not a student).",
        "id": "l1_011",
        "desc": "Is not...",
        "meaning_zh": "不是...",
        "meaning_en": "Is not...",
        "rules": [
            {
                "en": "Noun + 이/가 아니다",
                "zh": "名词+이/가 아니다"
            }
        ],
        "examples": [
            {
                "ko": "저는 학생이 아니에요.",
                "en": "I am not a student.",
                "zh": "我不是学生。"
            }
        ]
    },
    {
        "title": "~부터 ~까지",
        "level": "L1",
        "category": "L1 - 6과: 9시부터 6시까지 일해요",
        "notes": "⚠ 时间范围标记。表示动作或状态从某个时间点开始，到另一个时间点结束。\n💡 Tips: Used to indicate the starting and ending points of time.",
        "id": "l1_012",
        "desc": "From... to... (Time)",
        "meaning_zh": "从... 到... (时间)",
        "meaning_en": "From... to... (Time)",
        "rules": [
            {
                "en": "Time Noun + 부터 ~ Time Noun + 까지",
                "zh": "时间名词+부터 ~ 时间名词+까지"
            }
        ],
        "examples": [
            {
                "ko": "9시부터 6시까지 일해요.",
                "en": "I work from 9 AM to 6 PM.",
                "zh": "从九点工作到六点。"
            }
        ]
    },
    {
        "id": "l1_013",
        "category": "L1 - 6과: 9시부터 6시까지 일해요",
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
        "id": "l1_014",
        "category": "L1 - 6과: 9시부터 6시까지 일해요",
        "level": "L1",
        "title": "안 + Verb/Adj",
        "desc": "Negation",
        "meaning_zh": "否定副词，不做某事",
        "meaning_en": "Negation adverb 'not'",
        "rules": [
            {
                "zh": "안+动词/形容词",
                "en": "안 + Verb/Adj"
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
        "id": "l1_015",
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
        "id": "l1_016",
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
        "id": "l1_017",
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
        "title": "~습니다/습니까?",
        "level": "L1",
        "category": "L1 - 8과: 칫솔하고 치약을 삽니다",
        "notes": "⚠ 最高级敬语（格式体）。常用于正式场合、新闻播报或对长辈/上级汇报时。\n💡 Tips: Highly formal and polite ending, often used in public speaking, news, and business.",
        "id": "l1_018",
        "desc": "Formal polite statement/question ending",
        "meaning_zh": "正式尊称陈述/疑问尾缀",
        "meaning_en": "Formal polite statement/question ending",
        "rules": [
            {
                "en": "Verb/Adj + 습니다/습니까",
                "zh": "动词/形容词+습니다/습니까"
            }
        ],
        "examples": [
            {
                "ko": "이 책을 읽습니다.",
                "en": "I read this book.",
                "zh": "读这本书。"
            }
        ]
    },
    {
        "id": "l1_019",
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
        "id": "l1_020",
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
        "id": "l1_021",
        "category": "L1 - 9과: 지난 주말에 친구를 만났어요",
        "level": "L1",
        "title": "~았/었",
        "desc": "Past tense",
        "meaning_zh": "过去时",
        "meaning_en": "Past tense",
        "rules": [
            {
                "zh": "阳性元音(ㅏ,ㅗ)+았",
                "en": "Bright vowel + 았"
            },
            {
                "zh": "阴性元音(ㅓ,ㅜ,ㅡ,ㅣ)+었",
                "en": "Dark vowel + 었"
            },
            {
                "zh": "하다 → 했",
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
        "title": "~(으)시-",
        "level": "L1",
        "category": "L1 - 10과: 아버지는 요리를 잘하세요",
        "notes": "⚠ 主体尊称词缀。插入到动词或形容词干后，用于表达对句子主语（通常是长辈或上级）的尊敬。\n💡 Tips: Inserted into the verb/adjective to show respect to the subject of the sentence.",
        "id": "l1_022",
        "desc": "Honorific infix",
        "meaning_zh": "尊称中缀",
        "meaning_en": "Honorific infix",
        "rules": [
            {
                "en": "Verb/Adj + (으)시",
                "zh": "动词/形容词+(으)시"
            }
        ],
        "examples": [
            {
                "ko": "아버지는 신문을 읽으십니다.",
                "en": "Father reads the newspaper.",
                "zh": "爸爸在读报纸。"
            }
        ]
    },
    {
        "id": "l1_023",
        "category": "L1 - 10과: 아버지는 요리를 잘하세요",
        "level": "L1",
        "title": "~께서",
        "desc": "Honorific subject",
        "meaning_zh": "敬语主格助词(이/가的敬语)",
        "meaning_en": "Honorific subject particle",
        "rules": [
            {
                "zh": "长辈/上级+께서",
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
        "id": "l1_024",
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
        "id": "l1_025",
        "category": "L1 - 11과: 어버이날에 부모님께 꽃을 드려요",
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
        "id": "l1_026",
        "category": "L1 - 11과: 어버이날에 부모님께 꽃을 드려요",
        "level": "L1",
        "title": "~에게/께",
        "desc": "To (a person)",
        "meaning_zh": "动作对象助词(给...)",
        "meaning_en": "To a person/animal",
        "rules": [
            {
                "zh": "人物名词+에게/한테/께",
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
        "id": "l1_027",
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
        "id": "l1_028",
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
        "id": "l1_029",
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
        "id": "l1_030",
        "category": "L1 - 13과: 버스로 공항에 가요",
        "level": "L1",
        "title": "~(으)로",
        "desc": "Direction/Method",
        "meaning_zh": "方向、手段、材料助词",
        "meaning_en": "Direction, means, or material",
        "rules": [
            {
                "zh": "无收音或ㄹ收音+로",
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
        "id": "l1_031",
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
        "id": "l1_032",
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
        "id": "l1_033",
        "category": "L1 - 15과: 오늘 날씨가 정말 덥네요",
        "level": "L1",
        "title": "~네요",
        "desc": "Exclamation",
        "meaning_zh": "感叹(哦！原来...)",
        "meaning_en": "Exclamation of surprise",
        "rules": [
            {
                "zh": "动词/形容词+네요",
                "en": "Verb/Adj + 네요"
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
        "id": "l1_034",
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
        "title": "~는 것",
        "level": "L1",
        "category": "L1 - 16과: 배가 아파서 병원에 가요",
        "notes": "⚠ 动名词化。将动词转化为名词词组，使其可以在句中作主语或宾语。\n💡 Tips: Turns an action into a noun phrase, similar to '-ing' in English.",
        "id": "l1_035",
        "desc": "Gerund (the act of...)",
        "meaning_zh": "将动词转化为名词（...的事情）",
        "meaning_en": "Gerund (the act of...)",
        "rules": [
            {
                "en": "Verb + 는 것",
                "zh": "动词+는 것"
            }
        ],
        "examples": [
            {
                "ko": "제 취미는 영화를 보는 것이에요.",
                "en": "My hobby is watching movies.",
                "zh": "我的爱好是看电影。"
            }
        ]
    },
    {
        "id": "l1_036",
        "category": "L1 - 16과: 배가 아파서 병원에 가요",
        "level": "L1",
        "title": "~아/어서",
        "desc": "Because / Then",
        "meaning_zh": "原因(因为)/先后",
        "meaning_en": "Reason or sequential",
        "rules": [
            {
                "zh": "阳性元音(ㅏ,ㅗ)+아서",
                "en": "Bright + 아서"
            },
            {
                "zh": "阴性元音(ㅓ,ㅜ,ㅡ,ㅣ)+어서",
                "en": "Dark + 어서"
            },
            {
                "zh": "하다 → 해서",
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
        "title": "~(으)로 (방향)",
        "level": "L1",
        "category": "L1 - 17과: 사진을 찍지 마세요",
        "notes": "⚠ 方向助词。强调移动的朝向或路径（如向左、向右、向前）。\n💡 Tips: Indicates the direction of movement. e.g., '오른쪽으로 가세요' (Go to the right).",
        "id": "l1_037",
        "desc": "Toward (direction)",
        "meaning_zh": "向，朝 (方向)",
        "meaning_en": "Toward (direction)",
        "rules": [
            {
                "en": "Direction Noun + (으)로",
                "zh": "方向名词+(으)로"
            }
        ],
        "examples": [
            {
                "ko": "오른쪽으로 가세요.",
                "en": "Please go to the right.",
                "zh": "请往右边走。"
            }
        ]
    },
    {
        "id": "l1_038",
        "category": "L1 - 17과: 사진을 찍지 마세요",
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
        "id": "l1_039",
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
        "id": "l1_040",
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
        "id": "l1_041",
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
        "id": "l1_042",
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
        "id": "l1_043",
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
                "zh": "动词(过去时)+ㄴ/은",
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
        "title": "명-(이)라고 하다",
        "level": "L2",
        "category": "L2 - 1과: 제 고향은 경치가 아름다운 곳이에요",
        "notes": "⚠ 间接引语基础形式。常用于自我介绍或介绍特定事物的名称（“被叫做...”）。\n💡 Tips: Used to introduce the name of a person or a place.",
        "id": "l2_002",
        "desc": "Is called... (naming)",
        "meaning_zh": "叫做... (介绍名称)",
        "meaning_en": "Is called... (naming)",
        "rules": [
            {
                "en": "Noun + (이)라고 하다",
                "zh": "名词+(이)라고 하다"
            }
        ],
        "examples": [
            {
                "ko": "저는 안나라고 합니다.",
                "en": "I am called Anna.",
                "zh": "我叫安娜。"
            }
        ]
    },
    {
        "title": "~(으)ㄴ 다음에",
        "level": "L2",
        "category": "L2 - 2과: 쓰레기는 내가 버릴게요",
        "notes": "⚠ 时间顺序连词。强调前一个动作彻底完成后，再进行后一个动作。\n💡 Tips: Indicates that the action in the following clause happens after the action in the first clause.",
        "id": "l2_003",
        "desc": "After doing...",
        "meaning_zh": "做完...之后",
        "meaning_en": "After doing...",
        "rules": [
            {
                "en": "Verb + (으)ㄴ 다음에",
                "zh": "动词+(으)ㄴ 다음에"
            }
        ],
        "examples": [
            {
                "ko": "숙제를 한 다음에 밥을 먹어요.",
                "en": "I eat after doing my homework.",
                "zh": "做完作业后再吃饭。"
            }
        ]
    },
    {
        "id": "l2_004",
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
        "id": "l2_005",
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
        "id": "l2_006",
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
        "id": "l2_007",
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
        "title": "반말 (Casual Speech)",
        "level": "L2",
        "category": "L2 - 4과: 지금 통화할 수 있어요?",
        "notes": "⚠ 平阶/非敬语。仅限于亲密朋友、同辈或对晚辈使用，绝对不能对初次见面的人或长辈使用。\n💡 Tips: Used with close friends, younger people, or subordinates.",
        "id": "l2_008",
        "desc": "Casual/informal speech",
        "meaning_zh": "非敬语 / 平语",
        "meaning_en": "Casual/informal speech",
        "rules": [
            {
                "en": "Drop '요' or use specific casual vocabulary",
                "zh": "去掉'요'，或使用专用平语词汇"
            }
        ],
        "examples": [
            {
                "ko": "밥 먹었어?",
                "en": "Did you eat? (Casual)",
                "zh": "吃饭了吗？(非敬语)"
            }
        ]
    },
    {
        "id": "l2_009",
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
        "title": "~아/어서 (순차)",
        "level": "L2",
        "category": "L2 - 5과: 많이 아프면 이 약을 드세요",
        "notes": "⚠ 动作的先后顺序。前后动作具有强烈的连贯性和逻辑关系，不能随意调换顺序。\n💡 Tips: Connects two actions where the first action is a prerequisite or leads into the second action.",
        "id": "l2_010",
        "desc": "And then (sequential)",
        "meaning_zh": "然后 (先后顺序)",
        "meaning_en": "And then (sequential)",
        "rules": [
            {
                "en": "Verb + 아/어서",
                "zh": "动词+아/어서"
            }
        ],
        "examples": [
            {
                "ko": "친구를 만나서 영화를 봤어요.",
                "en": "I met a friend and (then) watched a movie.",
                "zh": "见了朋友然后看了电影。"
            }
        ]
    },
    {
        "id": "l2_011",
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
                "zh": "有收音+을 때",
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
        "title": "~겠-",
        "level": "L2",
        "category": "L2 - 6과: 맛있는 음식을 먹을 때 행복해요",
        "notes": "⚠ 意志与推测。主语是第一人称时表示坚定的意志（“我一定会”），第三人称时表示推测（“应该会”）。\n💡 Tips: Used to express the speaker's firm intention (I will) or to make a guess based on the situation.",
        "id": "l2_012",
        "desc": "Intention / Guess",
        "meaning_zh": "打算 / 猜测",
        "meaning_en": "Intention / Guess",
        "rules": [
            {
                "en": "Verb/Adj + 겠",
                "zh": "动词/形容词+겠"
            }
        ],
        "examples": [
            {
                "ko": "내일 비가 오겠습니다.",
                "en": "It will probably rain tomorrow.",
                "zh": "明天应该会下雨。"
            }
        ]
    },
    {
        "id": "l2_013",
        "category": "L2 - 7과: 집들이니까 세제나 휴지를 가져갈게요",
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
        "id": "l2_014",
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
        "id": "l2_015",
        "category": "L2 - 8과: 9월부터 한국어 수업을 듣기로 했어요",
        "level": "L2",
        "title": "~(으)ㄴ 후에 / ~기 전에",
        "desc": "After/Before",
        "meaning_zh": "...之后/...之前",
        "meaning_en": "After doing / Before doing",
        "rules": [
            {
                "zh": "动词(过去时)+ㄴ/은 후에",
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
        "id": "l2_016",
        "category": "L2 - 8과: 9월부터 한국어 수업을 듣기로 했어요",
        "level": "L2",
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
        "id": "l2_017",
        "category": "L2 - 9과: 근처에 자주 가는 식당이 있어요",
        "level": "L2",
        "title": "~(으)ㄹ 것 같다",
        "desc": "It seems like",
        "meaning_zh": "推测(好像...)",
        "meaning_en": "Guess/supposition",
        "rules": [
            {
                "zh": "动词/形容词+(으)ㄹ/ㄴ/는 것 같다",
                "en": "Verb/Adj + (으)ㄹ/ㄴ/는 것 같다"
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
        "id": "l2_018",
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
        "title": "~(으)ㄴ/는데 (배경)",
        "level": "L2",
        "category": "L2 - 10과: 시청 옆에 있는데 가까워요",
        "notes": "⚠ 提示背景。在提出建议、请求或问题之前，先铺垫相关的背景信息。\n💡 Tips: Provides background context before making a suggestion, asking a question, or giving a command.",
        "id": "l2_019",
        "desc": "Background information",
        "meaning_zh": "引出话题的背景",
        "meaning_en": "Background information",
        "rules": [
            {
                "en": "Verb + 는데 / Adj + (으)ㄴ데",
                "zh": "动词+는데 / 形容词+(으)ㄴ데"
            }
        ],
        "examples": [
            {
                "ko": "시청 옆에 있는데 가까워요.",
                "en": "It's next to City Hall, so it's close.",
                "zh": "在市政厅旁边，很近。"
            }
        ]
    },
    {
        "id": "l2_020",
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
                "zh": "动词/形容词+기 때문에",
                "en": "Verb/Adj + 기 때문에"
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
        "notes": "⚠ 强调客观原因'由于/因为'。名词+때문에，动/形+기 때문에。可搭配命令句。\n💡 Tips: Emphasizes objective reason 'due to'. Noun+때문에, Verb/Adj+기 때문에. Can be used with commands, unlike 아/어서."
    },
    {
        "id": "l2_021",
        "category": "L2 - 11과: 보름달을 보면서 소원을 빌어요",
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
        "title": "~게 (부사화)",
        "level": "L2",
        "category": "L2 - 11과: 보름달을 보면서 소원을 빌어요",
        "notes": "⚠ 状态修饰。将形容词转化为副词，用来修饰后面的动词（如“穿得暖和”）。\n💡 Tips: Turns an adjective into an adverb to modify a following verb.",
        "id": "l2_022",
        "desc": "Adverbial suffix (-ly)",
        "meaning_zh": "地 (副词化)",
        "meaning_en": "Adverbial suffix (-ly)",
        "rules": [
            {
                "en": "Adj + 게",
                "zh": "形容词+게"
            }
        ],
        "examples": [
            {
                "ko": "옷을 따뜻하게 입으세요.",
                "en": "Please dress warmly.",
                "zh": "请穿暖和一点。"
            }
        ]
    },
    {
        "id": "l2_023",
        "category": "L2 - 12과: 실수를 자주 하는 편이에요",
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
        "title": "~는 편이다",
        "level": "L2",
        "category": "L2 - 12과: 실수를 자주 하는 편이에요",
        "notes": "⚠ 委婉表达。不作绝对断定，而是表示“某种程度上倾向于...”，语气更加柔和。\n💡 Tips: Used to state a characteristic or tendency gently rather than making an absolute statement.",
        "id": "l2_024",
        "desc": "Tend to / On the ... side",
        "meaning_zh": "算是...的一边 / 偏向于...",
        "meaning_en": "Tend to / On the ... side",
        "rules": [
            {
                "en": "Verb + 는 편이다 / Adj + (으)ㄴ 편이다",
                "zh": "动词+는 편이다 / 形容词+(으)ㄴ 편이다"
            }
        ],
        "examples": [
            {
                "ko": "저는 실수를 자주 하는 편이에요.",
                "en": "I tend to make mistakes often.",
                "zh": "我算是经常犯错的类型。"
            }
        ]
    },
    {
        "id": "l2_025",
        "category": "L2 - 13과: 소포를 보내려고 하는데요",
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
                "zh": "有收音+으려고",
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
                "zh": "有收音+으려고 하다",
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
        "id": "l2_027",
        "category": "L2 - 13과: 소포를 보내려고 하는데요",
        "level": "L2",
        "title": "~아/어야 되다(하다)",
        "desc": "Must/Have to",
        "meaning_zh": "必须做...",
        "meaning_en": "Must, have to",
        "rules": [
            {
                "zh": "阳性元音(ㅏ,ㅗ)+아야 되다",
                "en": "Bright + 아야 되다"
            },
            {
                "zh": "阴性元音(ㅓ,ㅜ,ㅡ,ㅣ)+어야 되다",
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
        "id": "l2_028",
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
        "id": "l2_029",
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
        "title": "~(으)ㄴ (과거 관형형)",
        "level": "L2",
        "category": "L2 - 15과: 무역 회사에서 번역 일을 하고 있어요",
        "notes": "⚠ 过去时定语。用于修饰名词，表示该动作已经在过去发生或完成。\n💡 Tips: Modifies a noun with an action that occurred in the past (e.g., 어제 먹은 빵).",
        "id": "l2_030",
        "desc": "Noun modifier (Past tense)",
        "meaning_zh": "修饰名词 (过去时)",
        "meaning_en": "Noun modifier (Past tense)",
        "rules": [
            {
                "en": "Verb + (으)ㄴ + Noun",
                "zh": "动词+(으)ㄴ+名词"
            }
        ],
        "examples": [
            {
                "ko": "어제 본 영화가 재미있었어요.",
                "en": "The movie I watched yesterday was interesting.",
                "zh": "昨天看的电影很有趣。"
            }
        ]
    },
    {
        "id": "l2_031",
        "category": "L2 - 15과: 무역 회사에서 번역 일을 하고 있어요",
        "level": "L2",
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
        "id": "l2_032",
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
        "id": "l2_033",
        "category": "L2 - 16과: 그 행사에는 가족이나 친구를 데려가도 되거든요",
        "level": "L2",
        "title": "~거든(요)",
        "desc": "Because (explanation)",
        "meaning_zh": "解释理由(你知道吗其实是...)",
        "meaning_en": "Giving reason/explanation",
        "rules": [
            {
                "zh": "动词/形容词+거든요",
                "en": "Verb/Adj + 거든요"
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
        "title": "~았/었으면 좋겠다",
        "level": "L2",
        "category": "L2 - 17과: 잠을 푹 자면 좋겠어요",
        "notes": "⚠ 强烈愿望。表达希望某事发生或某状态实现的期盼。\n💡 Tips: Expresses a strong desire, hope, or wish for something to happen.",
        "id": "l2_034",
        "desc": "I wish / It would be great if...",
        "meaning_zh": "要是...就好了 (希望)",
        "meaning_en": "I wish / It would be great if...",
        "rules": [
            {
                "en": "Verb/Adj + 았/었으면 좋겠다",
                "zh": "动词/形容词+았/었으면 좋겠다"
            }
        ],
        "examples": [
            {
                "ko": "내일 날씨가 좋았으면 좋겠어요.",
                "en": "I hope the weather is good tomorrow.",
                "zh": "希望明天天气好。"
            }
        ]
    },
    {
        "title": "~에 (단위/기준)",
        "level": "L2",
        "category": "L2 - 17과: 잠을 푹 자면 좋겠어요",
        "notes": "⚠ 计量基准助词。通常与表示频率或价格的词连用（如“一天三次”、“一个多少钱”）。\n💡 Tips: Used with quantity or frequency to mean 'per' or 'a' (e.g., 일주일에 두 번 - twice a week).",
        "id": "l2_035",
        "desc": "Per / For every (Unit)",
        "meaning_zh": "每... (计算单位)",
        "meaning_en": "Per / For every (Unit)",
        "rules": [
            {
                "en": "Unit Noun + 에",
                "zh": "单位名词+에"
            }
        ],
        "examples": [
            {
                "ko": "일주일에 한 번 운동해요.",
                "en": "I exercise once a week.",
                "zh": "一周运动一次。"
            }
        ]
    },
    {
        "title": "~는 게 어때요?",
        "level": "L2",
        "category": "L2 - 18과: 이 수업을 신청하는 게 어때요?",
        "notes": "⚠ 委婉建议。用询问对方意见的方式提出自己的建议，比直接命令更礼貌。\n💡 Tips: A soft and polite way to suggest an action to someone.",
        "id": "l2_036",
        "desc": "How about doing...?",
        "meaning_zh": "做...怎么样？(建议)",
        "meaning_en": "How about doing...?",
        "rules": [
            {
                "en": "Verb + 는 게 어때요?",
                "zh": "动词+는 게 어때요?"
            }
        ],
        "examples": [
            {
                "ko": "이 수업을 신청하는 게 어때요?",
                "en": "How about registering for this class?",
                "zh": "申请这门课怎么样？"
            }
        ]
    },
    {
        "title": "~아/어 보이다",
        "level": "L2",
        "category": "L2 - 18과: 이 수업을 신청하는 게 어때요?",
        "notes": "⚠ 视觉推测。基于眼睛看到的外观或状态进行主观推断（“看起来...”）。\n💡 Tips: Expresses the speaker's feeling or guess upon seeing something or someone.",
        "id": "l2_037",
        "desc": "Looks / Appears to be...",
        "meaning_zh": "看起来...",
        "meaning_en": "Looks / Appears to be...",
        "rules": [
            {
                "en": "Adj + 아/어 보이다",
                "zh": "形容词+아/어 보이다"
            }
        ],
        "examples": [
            {
                "ko": "옷이 좀 작아 보여요.",
                "en": "The clothes look a bit small.",
                "zh": "衣服看起来有点小。"
            }
        ]
    },
    {
        "id": "l2_038",
        "category": "L2 - 추가 문법 (Extra Grammar)",
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
        "id": "l2_039",
        "category": "L2 - 추가 문법 (Extra Grammar)",
        "level": "L2",
        "title": "~거나",
        "desc": "Or (verbs)",
        "meaning_zh": "或者(动词连接)",
        "meaning_en": "Or (connects verbs/adj)",
        "rules": [
            {
                "zh": "动词/形容词+거나",
                "en": "Verb/Adj + 거나"
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
        "id": "l2_040",
        "category": "L2 - 추가 문법 (Extra Grammar)",
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
        "id": "l2_041",
        "category": "L2 - 추가 문법 (Extra Grammar)",
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
        "id": "l3_001",
        "category": "L3 - 1과: 대인 관계",
        "level": "L3",
        "title": "~(으)면 되다",
        "desc": "All you need to do is / It is okay if",
        "meaning_zh": "表示只要满足某个最低条件就可以了（只要...就行 / ...就可以了）。",
        "meaning_en": "Indicates that meeting a certain condition is sufficient. 'All you have to do is...' or 'It is enough if...'",
        "rules": [
            {
                "zh": "动词/形容词+(으)면 되다",
                "en": "Verb/Adj + (으)면 되다"
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
        "notes": "⚠ 极简条件：通常搭配 ~만(只) 一起使用，构成 '만 ~(으)면 되다'，强调完成某事的条件非常简单（只要做...就行了，其他都不需要）。常见于指路、说明书或回答别人的求助。注意不要和表示必须的 '아/어야 되다' 混淆。\n💡 Tips: Often paired with ~만 (only) to emphasize how simple the required condition is (만 ~(으)면 되다). It implies that nothing else is needed beyond this single condition."
    },
    {
        "title": "~고 해서",
        "level": "L3",
        "category": "L3 - 1과: 대인 관계",
        "notes": "⚠ 部分原因陈述。暗示还有其他很多原因，但说话人只挑出一个具有代表性的原因来说明。常用于委婉地拒绝别人（因为太忙等原因），显得不那么直接。\n💡 Tips: Implies there are multiple reasons for an action, but the speaker is mentioning the primary one to be polite or indirect, especially when declining offers.",
        "id": "l3_002",
        "desc": "Because of ... and other reasons",
        "meaning_zh": "因为...等原因 (列举部分原因)",
        "meaning_en": "Because of ... and other reasons",
        "rules": [
            {
                "en": "Verb/Adj + 고 해서",
                "zh": "动词/形容词+고 해서"
            }
        ],
        "examples": [
            {
                "ko": "피곤하고 해서 일찍 잤어요.",
                "en": "I was tired (among other reasons), so I slept early.",
                "zh": "因为有点累等原因，就早睡了。"
            }
        ]
    },
    {
        "id": "l3_003",
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
        "notes": "⚠ 代替与补偿：有两个主要用法。①直接替代：“用B代替A”（比如用周末加班代替平时加班）。②事物的两面性补偿：“虽然价格贵，但作为补偿质量很好”。前后小句的主语必须一致。\n💡 Tips: Often shortened to ~는 대신. Can mean a direct replacement (A instead of B) or a trade-off/compensation (expensive BUT good quality)."
    },
    {
        "id": "l3_004",
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
        "notes": "⚠ 状态变化的绝对核心。表示状态随时间发生变化(变得...)。必须且只能接【形容词】。例如：예뻐지다(变漂亮)、좋아지다(变好)。如果想表示【动词】的变化（变得会做某事），必须使用 '게 되다'。\n💡 Tips: Change of state (become...). strictly ONLY for adjectives: 예뻐지다(become pretty). For verbs, use 게 되다."
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
        "notes": "⚠ 间接疑问句核心句型。表示“不知道/知道某事”。通常句子里会带有疑问词（누구, 언제, 어디, 무엇 等）。动词用 는지，形容词用 (으)ㄴ지，过去时用 았/었는지。\n💡 Tips: Core indirect question pattern. Often used with WH-words (뭐/어디/누구): 어디에 사는지 알아요? (Do you know where they live?). Tense matters here."
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
        "notes": "⚠ 动作中断与转换。表示前一个动作在进行的中途突然停止，转而发生了后面的动作（'做着做着突然...'）。最核心的规则：前后小句的【主语必须完全一致】！（我走着走着摔倒了 ✓，我走着走着天黑了 ✗）。\n💡 Tips: Interruption/switch mid-action. Subjects MUST be identical! (걷다가 넘어졌어요 = Fell while walking)."
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
        "notes": "⚠ 价值评估。两种核心含义：①强烈推荐“值得做”（이 영화는 볼 만해요 = 这电影值得一看）。②退而求其次“勉强能接受/还能忍受”（아프지만 참을 만해요 = 虽然疼但还能忍）。\n💡 Tips: Two meanings: ① Highly recommended/Worth doing (볼 만하다 = worth watching), ② Bearable/acceptable despite flaws (참을 만하다 = bearable)."
    },
    {
        "title": "~아/어 가지고",
        "level": "L3",
        "category": "L3 - 4과: 교환과 환불",
        "notes": "⚠ 极度口语化的原因/先后顺序连接词。功能与 아/어서 基本完全相同，但更加随意，几乎只出现在口语对话中，绝不能用于正式的书面语或演讲中。\n💡 Tips: Highly colloquial form replacing 아/어서 for reason or sequential action. Do not use in formal writing or tests like TOPIK writing.",
        "id": "l3_008",
        "desc": "Because / After doing... (conversational)",
        "meaning_zh": "因为... / 做了...然后",
        "meaning_en": "Because / After doing... (conversational)",
        "rules": [
            {
                "en": "Verb/Adj + 아/어 가지고",
                "zh": "动词/形容词+아/어 가지고"
            }
        ],
        "examples": [
            {
                "ko": "바빠 가지고 연락을 못 했어요.",
                "en": "I was so busy that I couldn't contact you.",
                "zh": "因为太忙了没能联系你。"
            }
        ]
    },
    {
        "id": "l3_009",
        "category": "L3 - 5과: 소비와 절약",
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
        "notes": "⚠ 间接陈述句的标准化格式。当转述别人陈述的事实时使用。难点在于词性的区分：动词必须加 ㄴ/는다고，形容词直接加 다고，名词加 (이)라고。过去时统一加 았/었다고。\n💡 Tips: Core indirect statement. Verb + ㄴ/는다고, Adj + 다고, Noun + (이)라고. Past tense always takes 았/었다고 regardless of part of speech."
    },
    {
        "id": "l3_010",
        "category": "L3 - 5과: 소비와 절약",
        "level": "L3",
        "title": "명-(이)나 / 밖에",
        "desc": "Nothing but / Only",
        "meaning_zh": "居然有...那么多 / 只有...",
        "meaning_en": "As much as... / Only...",
        "rules": [
            {
                "en": "Noun + (이)나 (More than expected)",
                "zh": "名词+(이)나 (表示多于预期)"
            },
            {
                "en": "Noun + 밖에 + Negative (Less than expected)",
                "zh": "名词+밖에 + 否定词 (表示少于预期)"
            }
        ],
        "examples": [
            {
                "ko": "친구가 10명이나 왔어요.",
                "en": "As many as 10 friends came.",
                "zh": "居然来了10个朋友这么多。"
            },
            {
                "ko": "친구가 1명밖에 안 왔어요.",
                "en": "Only 1 friend came.",
                "zh": "只来了1个朋友。"
            }
        ],
        "notes": "⚠ 数量的主观情绪对比。这两个总是成对考察。~(이)나 表示数量多于说话人的预期（居然有...那么多！），~밖에 表示数量少于预期且后面【必须】跟否定词（只有.../除了...之外都没有）。\n💡 Tips: ~(이)나 expresses surprise at a unexpectedly large amount. ~밖에 expresses disappointment at a small amount and requires a negative verb following it."
    },
    {
        "id": "l3_011",
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
        "notes": "⚠ 间接共动句。当原句是“我们一起做某事吧（(으)ㅂ시다 / 자）”时，转述时必须变成 자고 하다。这是间接引语四大句型之一。\n💡 Tips: Indirect suggestion. Converts propositive endings like (으)ㅂ시다 (Let's...) into 자고 하다."
    },
    {
        "id": "l3_012",
        "category": "L3 - 6과: 주거 환경",
        "level": "L3",
        "title": "피동사 (Passive)",
        "desc": "Passive verbs",
        "meaning_zh": "被动动词(이/히/리/기)",
        "meaning_en": "Passive voice verbs",
        "rules": [
            {
                "zh": "보다 → 보이다 (看 → 被看)",
                "en": "보다→보이다(see→be seen)"
            },
            {
                "zh": "잡다 → 잡히다 (抓 → 被抓)",
                "en": "잡다→잡히다(catch→be caught)"
            },
            {
                "zh": "열다 → 열리다 (开 → 被打开)",
                "en": "열다→열리다(open→be opened)"
            },
            {
                "zh": "끊다 → 끊기다 (切断 → 被切断)",
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
        "notes": "⚠ 被动语态核心。韩语被动后缀主要有四个(이/히/리/기)，没有任何固定规律，必须死记硬背每个词的对应形态。高频词：보이다(被看到), 들리다(被听到), 잡히다(被抓), 열리다(被打开)。\n💡 Tips: Four passive suffixes (이/히/리/기). No phonetic rules apply, must be individually memorized. Common: 보이다(be seen), 들리다(be heard), 잡히다(be caught)."
    },
    {
        "id": "l3_013",
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
        "notes": "⚠ 间接命令句。原句是祈使句（(으)세요 / (으)십시오）时，转述用 (으)라고 하다。如果是禁止别人做某事（지 마세요），则转述为 지 말라고 하다。\n💡 Tips: Indirect command. Converts imperative endings (으)세요 into (으)라고. For negative commands, always use 지 말라고 하다."
    },
    {
        "id": "l3_014",
        "category": "L3 - 7과: 문화생활",
        "level": "L3",
        "title": "~냐고 하다",
        "desc": "Indirect question",
        "meaning_zh": "间接引语(疑问句)",
        "meaning_en": "Indirect quotation (question)",
        "rules": [
            {
                "zh": "动词/形容词+냐고 하다",
                "en": "Verb/Adj + 냐고 하다"
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
        "notes": "⚠ 间接疑问句。当原句是问号结尾（아/어요? / 습니까?）时，转述为 냐고 하다。现代口语中动词和形容词都可以直接接 냐고 하다。\n💡 Tips: Indirect question. Converts a direct question into a reported statement using 냐고/느냐고."
    },
    {
        "title": "~만큼",
        "level": "L3",
        "category": "L3 - 7과: 문화생활",
        "notes": "⚠ 程度等同。表示前后两者在数量、大小或程度上达到了完全同等的水平（像...一样多/好）。通常搭配名词或动词的定语形使用。\n💡 Tips: Indicates absolute equivalence in size, amount, or degree (as much as / to the extent that).",
        "id": "l3_015",
        "desc": "As much as / To the extent that",
        "meaning_zh": "像...一样多 / 到...的程度",
        "meaning_en": "As much as / To the extent that",
        "rules": [
            {
                "en": "Noun + 만큼 / Verb + modifier + 만큼",
                "zh": "名词+만큼 / 动词+定语+만큼"
            }
        ],
        "examples": [
            {
                "ko": "저는 형만큼 키가 크지 않아요.",
                "en": "I am not as tall as my older brother.",
                "zh": "我没有哥哥那么高。"
            }
        ]
    },
    {
        "id": "l3_016",
        "category": "L3 - 8과: 음식과 요리",
        "level": "L3",
        "title": "사동사 (Causative verbs)",
        "desc": "Causative verbs",
        "meaning_zh": "使动动词(이/히/리/기/우)",
        "meaning_en": "Causative verb suffixes",
        "rules": [
            {
                "zh": "먹이다 (喂食/让吃)",
                "en": "먹이다 (to feed)"
            },
            {
                "zh": "읽히다 (让...读)",
                "en": "읽히다 (to make read)"
            },
            {
                "zh": "울리다 (弄哭)",
                "en": "울리다 (to make cry)"
            },
            {
                "zh": "깨우다 (叫醒)",
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
        "notes": "⚠ 使役语态核心。表示“主语让/强迫某人做某事”。后缀有六个(이/히/리/기/우/추)，必须单独记忆。高频词：먹이다(喂), 깨우다(叫醒), 입히다(给...穿上)。\n💡 Tips: Six causative suffixes (이/히/리/기/우/추) meaning 'make/let someone do'. Must be memorized. Common: 먹이다(feed), 깨우다(wake up)."
    },
    {
        "id": "l3_017",
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
        "notes": "⚠ 柔和委婉的提问方式。比直接用 아/어요? 显得更温柔、更礼貌，不会给对方压迫感。非常适合用于面试、初次见面、或向陌生人询问情况时。\n💡 Tips: Soft and polite questioning form. Less direct and aggressive than 아/어요? questions. Highly recommended for interviews or polite inquiries."
    },
    {
        "title": "~아/어서 그런지",
        "level": "L3",
        "category": "L3 - 9과: 고장과 수리",
        "notes": "⚠ 模糊推测。表示说话人主观上认为前面可能是导致后面结果的原因，但并不完全确定（也许是因为...所以才...吧）。不能用于明确的因果关系。\n💡 Tips: Expresses a vague guess about the reason for a certain result ('Maybe because of..., this happened'). Not used for certain facts.",
        "id": "l3_018",
        "desc": "Maybe because...",
        "meaning_zh": "不知道是不是因为...",
        "meaning_en": "Maybe because...",
        "rules": [
            {
                "en": "Verb/Adj + 아/어서 그런지",
                "zh": "动词/形容词+아/어서 그런지"
            }
        ],
        "examples": [
            {
                "ko": "주말이라서 그런지 사람이 많아요.",
                "en": "Maybe because it's the weekend, there are a lot of people.",
                "zh": "可能是因为周末吧，人很多。"
            }
        ]
    },
    {
        "id": "l3_019",
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
        "notes": "⚠ 正式的目的表达。明确表示“为了某个目的”。与 (으)려고 相比，它更加正式和书面化。另一个重要区别是：它允许前后小句的主语不一致。\n💡 Tips: Purpose 'for the sake of / in order to'. More formal/written than (으)려고. Unlike (으)려고, it allows different subjects in the two clauses."
    },
    {
        "id": "l3_020",
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
        "notes": "⚠ 状态保持。表示动作完成之后，不再去管它，任由其保持那个状态。与 아/어 두다 极为相似，但 놓다 更强调动作结束后的“放置/撒手不管”，而 두다 更强调“保留/为了以后备用”。\n💡 Tips: Action completed and left as is. Similar to 아/어 두다, but 놓다 emphasizes 'leaving it alone', while 두다 emphasizes 'keeping it for future use'."
    },
    {
        "id": "l3_021",
        "category": "L3 - 11과: 부동산",
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
        "notes": "⚠ 递进叠加。表示“再加上/而且”。核心做题规则：前后的评价必须是同方向的！如果是夸奖，前后都得是夸奖；如果是贬低，前后都得是贬低。绝对不能一好一坏。\n💡 Tips: Addition 'on top of that / plus'. Core exam rule: Both clauses must go in the identical logical direction (both positive OR both negative)."
    },
    {
        "title": "~는/ㄴ다 (서술체)",
        "level": "L3",
        "category": "L3 - 11과: 부동산",
        "notes": "⚠ 书面叙述体（基本阶）。这是极其重要的体裁！TOPIK大作文、日记、新闻报道、客观事实陈述必须用这个结尾。而在口语中，它被用作关系极好的朋友之间的半语（平语）。\n💡 Tips: Mandatory ending for formal writing (TOPIK essays, diaries, articles). Also doubles as casual speech (banmal) between close friends.",
        "id": "l3_022",
        "desc": "Plain form (Written/Diary style)",
        "meaning_zh": "书面基本阶叙述体",
        "meaning_en": "Plain form (Written/Diary style)",
        "rules": [
            {
                "en": "Verb + 는/ㄴ다, Adj + 다",
                "zh": "动词+는/ㄴ다, 形容词+다"
            }
        ],
        "examples": [
            {
                "ko": "나는 매일 아침 운동을 한다.",
                "en": "I exercise every morning.",
                "zh": "我每天早上运动。"
            }
        ]
    },
    {
        "id": "l3_023",
        "category": "L3 - 12과: 전통 명절",
        "level": "L3",
        "title": "~게 되다",
        "desc": "Come to / End up",
        "meaning_zh": "(外力导致)变得...",
        "meaning_en": "Come to, end up",
        "rules": [
            {
                "zh": "动词/形容词+게 되다",
                "en": "Verb/Adj + 게 되다"
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
        "notes": "⚠ 被动状态的变化。表示由于外部原因或环境变化，导致出现了某种新的情况（变得...了）。强调非主观意愿：한국 음식을 좋아하게 됐어요 (在韩国住久了，自然而然变得喜欢吃韩国菜了)。\n💡 Tips: Change caused by external factors, not own will (came to do/be...). 좋아하게 됐어요 (circumstances made me come to like it naturally)."
    },
    {
        "id": "l3_024",
        "category": "L3 - 12과: 전통 명절",
        "level": "L3",
        "title": "~아도/어도",
        "desc": "Even if / Although",
        "meaning_zh": "即使...也...",
        "meaning_en": "Even if, although",
        "rules": [
            {
                "zh": "动词/形容词+아도/어도",
                "en": "Verb/Adj + 아도/어도"
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
        "notes": "⚠ 假设与让步。表示“即使...也 / 就算...也”。经常与副词 아무리（无论怎么） 搭配形成黄金组合：아무리 먹어도 안 쪄요 （无论怎么吃都不会胖）。\n💡 Tips: Concession 'even if / even though'. Often paired with 아무리 (no matter how): 아무리 먹어도 (no matter how much I eat)."
    },
    {
        "id": "l3_025",
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
        "notes": "⚠ 万能使役句型。表示主观上“让/叫某人做某事”。当一个动词没有专用的사동사(使役动词)后缀时，一律使用 게 하다 来表达使役含义。\n💡 Tips: Universal causative pattern (make someone do). Used productively when a verb does not have a specific short-form causative suffix."
    },
    {
        "title": "~아/어 가다/오다",
        "level": "L3",
        "category": "L3 - 13과: 직장 생활",
        "notes": "⚠ 状态的持续演变。表示一个状态不断发展。方向性很重要：아/어 가다 表示从现在一直持续到未来（以后也会继续...）；아/어 오다 表示从过去一直持续到了现在。\n💡 Tips: Continuous progression of an action. 가다 = from present into the future. 오다 = from the past up to the present.",
        "id": "l3_026",
        "desc": "Keep doing... / Have been doing...",
        "meaning_zh": "不断地...下去 / 一直...过来",
        "meaning_en": "Keep doing... / Have been doing...",
        "rules": [
            {
                "en": "Verb + 아/어 가다/오다",
                "zh": "动词+아/어 가다/오다"
            }
        ],
        "examples": [
            {
                "ko": "일이 다 끝나 가요.",
                "en": "The work is almost finishing up.",
                "zh": "事情快做完了。"
            }
        ]
    },
    {
        "title": "~아/어야 (필수조건)",
        "level": "L3",
        "category": "L3 - 14과: 인터넷과 스마트폰",
        "notes": "⚠ 绝对的先决条件。语气非常强，表示前面的动作或状态是后面结果发生的“唯一或必须的前提”（必须要...才...）。如果前面不成立，后面绝对不可能发生。\n💡 Tips: Sets a strict mandatory condition. Implies that without the first clause, the second clause is absolutely impossible.",
        "id": "l3_027",
        "desc": "Only if / Must do... to...",
        "meaning_zh": "只有...才能...",
        "meaning_en": "Only if / Must do... to...",
        "rules": [
            {
                "en": "Verb/Adj + 아/어야",
                "zh": "动词/形容词+아/어야"
            }
        ],
        "examples": [
            {
                "ko": "비밀번호를 입력해야 문이 열려요.",
                "en": "The door opens only if you enter the password.",
                "zh": "只有输入密码门才会开。"
            }
        ]
    },
    {
        "id": "l3_028",
        "category": "L3 - 14과: 인터넷과 스마트폰",
        "level": "L3",
        "title": "~잖아요",
        "desc": "As you know",
        "meaning_zh": "你知道的/不是嘛",
        "meaning_en": "Stating a fact the listener knows",
        "rules": [
            {
                "zh": "动词/形容词+잖아요",
                "en": "Verb/Adj + 잖아요"
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
        "notes": "⚠ 事实确认。用来提醒对方一个你们俩都知道的事实：“你不是知道嘛 / 不是...嘛”。注意：对长辈或上级使用时，容易显得你在教训对方，因此要慎用。\n💡 Tips: Reminding listener of a known fact: 'As you know... / Isn't it that...'. Can sound slightly pushy, arrogant or impolite to elders if used wrongly."
    },
    {
        "id": "l3_029",
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
        "notes": "⚠ 巧合的时机。含有“正要...”的意思，强调就在你打算做某事的瞬间，碰巧发生了相关的另一件事。常用来表达巧合：我正要给你打电话，你就打来了。\n💡 Tips: 'Was just about to...'. Perfect for expressing coincidence or exact timing (e.g., I was just about to call you, and you called)."
    },
    {
        "id": "l3_030",
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
        "notes": "⚠ 无缝衔接。表示“一...就...”，前一个动作结束的瞬间，后一个动作立刻发生，中间几乎没有时间间隔。注意：不能用于描述反复的、习惯性的日常动作。\n💡 Tips: 'As soon as'. Immediate sequence with almost zero time gap between the two actions. Not used for daily habitual routines."
    },
    {
        "id": "l3_031",
        "category": "L3 - 16과: 기후와 날씨",
        "level": "L3",
        "title": "~(으)ㄹ 텐데",
        "desc": "I expect/assume but...",
        "meaning_zh": "推测+担忧(应该会...但是)",
        "meaning_en": "Expected situation with concern",
        "rules": [
            {
                "zh": "动词/形容词+(으)ㄹ 텐데",
                "en": "Verb/Adj + (으)ㄹ 텐데"
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
        "notes": "⚠ 推测与担忧的结合。前半句是说话人的强烈推测，后半句通常给出建议或表达遗憾/担忧：피곤할 텐데 쉬세요 (推测你应该很累了，建议你去休息吧)。非常体现韩国人的情商。\n💡 Tips: Guess + concern/regret. Shows empathy towards the listener: 피곤할 텐데 쉬세요 (You must be tired, so please rest)."
    },
    {
        "id": "l3_032",
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
        "notes": "⚠ 结果状态的持续。极其容易和 고 있다 混淆！고 있다 表示动作“正在进行”（衣服正在被穿上），而 아/어 있다 表示动作已经结束，但“结果状态一直保持着”（衣服一直穿在身上）。\n💡 Tips: State resulting from a completed action. Compare: 입고 있다 (action of putting clothes on is in progress) vs 입어 있다 (is wearing them right now)."
    },
    {
        "id": "l3_033",
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
        "notes": "⚠ 维持原有状态。表示“在保持着...状态的情况下”做了另一件事。前面必须使用过去定语形(ㄴ/은)。常用来描述某种不正常、不应该或无意中维持的状态（比如：穿着鞋进屋了）。\n💡 Tips: 'While remaining in the state of...'. Takes past modifier (ㄴ/은). Often implies an unusual or unintended maintained state (e.g., sleeping with the lights on)."
    },
    {
        "id": "l3_034",
        "category": "L3 - 추가 문법 (Extra Grammar)",
        "level": "L3",
        "title": "~(으)ㄹ 테니까",
        "desc": "I will so...",
        "meaning_zh": "我会...所以你...",
        "meaning_en": "My intention, so you should...",
        "rules": [
            {
                "zh": "动词/形容词+(으)ㄹ 테니까",
                "en": "Verb/Adj + (으)ㄹ 테니까"
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
        "notes": "⚠ 意图或推测的依据。有两种完全不同的用法。如果主语是第一人称：表示“我的意图”（我打算...所以你...）；如果主语是其他人称：表示“我的推测”（我推测他会...所以...）。\n💡 Tips: Dual usage: 1st person = my intention... so you should...; 2nd/3rd person = my guess about them is... so you should..."
    },
    {
        "id": "l3_035",
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
        "notes": "⚠ 退而求其次。表示在没有最佳选项时，选择了次优项（“哪怕是...也好 / 即使不是最好但也行”）。有时带有一点妥协或委曲求全的语气。\n💡 Tips: Indicates the next best choice, meaning 'even if just / at least'. Implies settling for less than the ideal option."
    },
    {
        "id": "l3_036",
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
        "notes": "⚠ 极速衔接。夸张地强调速度极快（“一...就立刻...”）。在语气上比 자마자 更加强烈和戏剧化，多用于生动地叙述某人动作飞快。\n💡 Tips: Emphasizes immediate sequence. More dramatic and exaggerated than 자마자. Often used for vivid storytelling about fast reactions."
    },
    {
        "id": "l3_037",
        "category": "L3 - 추가 문법 (Extra Grammar)",
        "level": "L3",
        "title": "~기는요",
        "desc": "Not really / Modesty",
        "meaning_zh": "谦虚否定(哪里哪里)",
        "meaning_en": "Modest denial or disagreement",
        "rules": [
            {
                "zh": "动词/形容词+기는요",
                "en": "Verb/Adj + 기는요"
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
        "notes": "⚠ 极致的谦虚。当别人夸奖你时，用来委婉地否认，表示“哪里哪里”。在韩国文化中，用这个句型回应赞美，比干巴巴地说 아니에요 要地道和自然得多。\n💡 Tips: Used to humbly deny a compliment ('Not at all'). Sounds much more natural, native, and polite than a simple 아니에요."
    },
    {
        "id": "l3_038",
        "category": "L3 - 추가 문법 (Extra Grammar)",
        "level": "L3",
        "title": "~길래",
        "desc": "Because (discovered reason)",
        "meaning_zh": "发现了原因所以...",
        "meaning_en": "Because (I discovered that)",
        "rules": [
            {
                "zh": "动词/形容词+길래",
                "en": "Verb/Adj + 길래"
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
        "notes": "⚠ 基于发现的行动。表示说话人亲自发现、观察到了某个客观事实（前句），因此自己采取了相应的行动（后句）。后半句的主语必须是第一人称（我）。\n💡 Tips: Discovered an objective reason → took action. Used ONLY to explain why the 1st person subject decided to take an action based on what they saw."
    },
    {
        "id": "l3_039",
        "category": "L3 - 추가 문법 (Extra Grammar)",
        "level": "L3",
        "title": "~대요/래요/재요",
        "desc": "Contracted quotation",
        "meaning_zh": "缩略间接引语",
        "meaning_en": "Contracted indirect quotation",
        "rules": [
            {
                "zh": "~다고 해요 → ~대요",
                "en": "~다고 해요 → ~대요"
            },
            {
                "zh": "~라고 해요 → ~래요",
                "en": "~라고 해요 → ~래요"
            },
            {
                "zh": "~자고 해요 → ~재요",
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
        "notes": "⚠ 间接引语的口语大缩写。在日常对话中，人们极少说完整的间接引语。对应规则：다고 해요→대요(陈述), 라고 해요→래요(名词), 자고 해요→재요(共动), 냐고 해요→냬요(疑问)。必考考点！\n💡 Tips: Casual contraction of reported speech. Used constantly in daily conversation. 다고 해요→대요, 라고 해요→래요, 자고 해요→재요, 냐고 해요→냬요."
    },
    {
        "id": "l3_040",
        "category": "L3 - 추가 문법 (Extra Grammar)",
        "level": "L3",
        "title": "~더라고요",
        "desc": "I noticed/observed",
        "meaning_zh": "回忆亲眼所见(我发现...)",
        "meaning_en": "Recalling personal observation",
        "rules": [
            {
                "zh": "动词/形容词+더라고요",
                "en": "Verb/Adj + 더라고요"
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
        "notes": "⚠ 亲身经历的回忆。用来向别人讲述自己亲眼看到、亲身体验过的事实。绝对不能用于转述从别人那里听来的传闻或自己没经历过的事！\n💡 Tips: Recalling and stating something you personally experienced/witnessed. CANNOT be used for hearsay or things you didn't see yourself."
    },
    {
        "id": "l3_041",
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
        "notes": "⚠ 动作的彻底完结与情感宣泄。表示某事已经彻底做完，且通常伴随强烈的感情。根据语境有两种相反情绪：①痛快/释怀（终于全干完了！） ②遗憾/惋惜（不小心全忘光了...）。\n💡 Tips: Action completely finished. Conveys two opposite emotions based on context: ① Relief/satisfaction, or ② Regret/disappointment."
    },
    {
        "id": "l3_042",
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
        "notes": "⚠ 彻底终结的过去。用来回忆过去发生过，但现在已经彻底结束、不再继续的事情。与单纯的 던 相比，它更强调“断层感”，即过去的状态与现在完全切断了。\n💡 Tips: Emphasizes a past action that was completely finished/closed. Stronger sense of completion and disconnection from the present than simply using 던."
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
                "zh": "动词/形容词+(으)ㄹ수록",
                "en": "Verb/Adj + (으)ㄹ수록"
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
        "notes": "⚠ 递进规律。表示“越...越...”。核心考点：如果前后动词/形容词相同，前面必须加上 (으)면，即“V-(으)면 V-(으)ㄹ수록”。例如：보면 볼수록 (越看越...)。也可以搭配 갈수록 (越来越/随着时间的推移)。\n💡 Tips: Progressive relation: 'The more... the more...'. For repeating verbs, use the (으)면 (으)ㄹ수록 format (e.g. 보면 볼수록 = the more you look at it)."
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
        "notes": "⚠ 耗时耗力的原因。表示因为做前面这件事（花费了大量时间/精力），导致了后面的结果。三大铁律考点：①前后主语必须一致！②不能接命令/共动句！③结果通常是负面的（没能做.../迟到了等）。\n💡 Tips: 'Because of doing...'. Three strict rules: ① Same subject required, ② No commands allowed, ③ Result is usually negative, indicating a missed opportunity or delay."
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
                "zh": "动词/形容词+(으)ㄹ 뿐만 아니라",
                "en": "Verb/Adj + (으)ㄹ 뿐만 아니라"
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
        "notes": "⚠ 并列递进句型。表示“不仅A，而且B也...”。如果是名词，直接加 뿐만 아니라。核心特征：后半句通常必须要带助词 '도(也)'。前后小句的逻辑方向必须一致（同好或同坏）。\n💡 Tips: Progressive pattern: 'Not only A, but also B'. The second clause strongly prefers the particle 도 (also). Logic must be consistent."
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
        "notes": "⚠ 唯一的无奈选择。表示“除了这样做，别无他法/不得不...”。比 '아/어야 하다(必须)' 语气更重，强调的是在当前客观环境下【没有其他退路】的无奈感。\n💡 Tips: Meaning 'have no choice but to...'. Stronger than 아/어야 하다, emphasizing objective lack of alternatives or a desperate lack of options."
    },
    {
        "id": "l4_005",
        "category": "L4 - 3과: 생활 속의 과학",
        "level": "L4",
        "title": "~(으)ㄹ 줄 몰랐다/알았다",
        "desc": "Didn't expect / Expected",
        "meaning_zh": "没想到.../以为...",
        "meaning_en": "Unexpected/expected outcome",
        "rules": [
            {
                "zh": "动词/形容词+(으)ㄹ 줄 몰랐다",
                "en": "Verb/Adj + (으)ㄹ 줄 몰랐다"
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
        "notes": "⚠ 极易混淆考点！两者含义完全相反！\n~(으)ㄹ 줄 몰랐다 = “真没想到会...”（表示事情发生了，我很意外）。\n~(으)ㄹ 줄 알았다 = “我本以为会...”（表示事情没发生，我的预想是错的）。\n💡 Tips: Opposite meanings! 몰랐다 = Didn't expect (you did it, I'm surprised), 알았다 = Thought it was (you didn't do it, my assumption was wrong)."
    },
    {
        "id": "l4_006",
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
        "notes": "⚠ 过去的习惯与怀旧。表示过去常常做某事（规律性的习惯），但【现在已经绝对不再做了】。常带有一种回忆、怀念或者沧海桑田的语气。不能用于只发生过一次的事。\n💡 Tips: Represents a past habitual action that is no longer done. Often carries a strong tone of nostalgia or reminiscing about the old days."
    },
    {
        "title": "~(으)ㄴ 나머지",
        "level": "L4",
        "category": "L4 - 4과: 한국의 의례",
        "notes": "⚠ 极端导致的结果。因为前面的程度过于极端（通常带有感情色彩如：太激动、太害怕、太累），导致了后面（通常是消极或出乎意料失控）的结果。\n💡 Tips: Describes a sudden or unintended result caused by an excessive degree of an action or emotion (e.g., too nervous so I fainted).",
        "id": "l4_007",
        "desc": "As a result of being too...",
        "meaning_zh": "过度...以至于 / 因为太...",
        "meaning_en": "As a result of being too...",
        "rules": [
            {
                "en": "Verb/Adj + (으)ㄴ 나머지",
                "zh": "动词/形容词+(으)ㄴ 나머지"
            }
        ],
        "examples": [
            {
                "ko": "너무 놀란 나머지 아무 말도 못 했어요.",
                "en": "I was so surprised that I couldn't say anything.",
                "zh": "因为太惊讶了，以至于什么话都没说出来。"
            }
        ]
    },
    {
        "id": "l4_008",
        "category": "L4 - 4과: 한국의 의례",
        "level": "L4",
        "title": "~더니",
        "desc": "And then (observed change)",
        "meaning_zh": "亲眼见到的变化/转折",
        "meaning_en": "Observed change or contrast",
        "rules": [
            {
                "zh": "动词/形容词+더니",
                "en": "Verb/Adj + 더니"
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
        "notes": "⚠ 观察与对比的转折。两大考点用法：①描述别人的变化（我看到他昨天还生病，今天就好了）。②描述过去与现在的状态对比。绝不能用于第一人称的主观行为（不能说“我昨天学了，今天玩了”）。\n💡 Tips: Two uses: ① Observed change in someone else, ② Past vs present contrast. CANNOT be used for 1st person subjective actions."
    },
    {
        "id": "l4_009",
        "category": "L4 - 5과: 문화유산",
        "level": "L4",
        "title": "~든지 ~든지",
        "desc": "Whether A or B",
        "meaning_zh": "不管A还是B",
        "meaning_en": "Whether A or B",
        "rules": [
            {
                "zh": "动词/形容词+든지",
                "en": "Verb/Adj + 든지"
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
        "notes": "⚠ 全面包容的选择。表示“无论是A还是B（都无所谓）”。当它与疑问词搭配时，立刻变成万能副词：뭐든지(不管什么都), 어디든지(不管哪里都), 누구든지(不管谁都)。\n💡 Tips: Meaning 'whether A or B'. When combined with WH-words, it creates universal pronouns: 뭐든지(whatever), 어디든지(wherever)."
    },
    {
        "id": "l4_010",
        "category": "L4 - 5과: 문화유산",
        "level": "L4",
        "title": "얼마나 ~는지 모르다",
        "desc": "So ~ that (emphasis)",
        "meaning_zh": "不知道多么...(强调程度)",
        "meaning_en": "Emphasizes degree (you can't imagine how much)",
        "rules": [
            {
                "zh": "얼마나+动词/形容词+는지/ㄴ지 모르다",
                "en": "얼마나 + Verb/Adj + 는지/ㄴ지 모르다"
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
        "notes": "⚠ 程度极深的感叹。固定句型搭配，强烈强调程度：“你根本不知道有多...！”。前面必须搭配 얼마나 (多么)，后面必须是 는지 모르다 (不知道)。常用于向别人夸张地描述某个经历。\n💡 Tips: Fixed exclamation pattern emphasizing extreme degree: 'You have no idea how...!'. 얼마나 and 는지 모르다 MUST strictly be paired together."
    },
    {
        "id": "l4_011",
        "category": "L4 - 6과: 국제화 시대",
        "level": "L4",
        "title": "~(으)ㄹ 정도로",
        "desc": "To the extent that",
        "meaning_zh": "到了...的程度",
        "meaning_en": "To the extent/degree that",
        "rules": [
            {
                "zh": "动词/形容词+(으)ㄹ 정도로",
                "en": "Verb/Adj + (으)ㄹ 정도로"
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
        "notes": "⚠ 夸张的程度比喻。表示“到了...的程度”。常常用一个极端的假想情况来形容真实的程度（例如：疼得【像要死了一样】的程度）。意思类似 만큼，但 정도로 偏向正式书面语。\n💡 Tips: Emphasizes extreme extent (to the point of...). Often uses an exaggerated metaphor. Similar to 만큼, but 정도로 is more formal/written."
    },
    {
        "id": "l4_012",
        "category": "L4 - 6과: 국제화 시대",
        "level": "L4",
        "title": "~던",
        "desc": "Used to / Was doing",
        "meaning_zh": "回忆过去(做过...的/正在做的)",
        "meaning_en": "Past modifier (recall)",
        "rules": [
            {
                "zh": "动词/形容词+던",
                "en": "Verb/Adj + 던"
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
        "notes": "⚠ 回忆的断崖。表示过去未完成或反复发生的动作（“过去常常...但没做完”/“当时正在...”）。核心考点：如果说 입던 옷，表示“过去常穿（但现在不穿）”或“穿了一半还没脱”的衣服。\n💡 Tips: Recalling an incomplete, interrupted or habitual past action. Contrast with 았/었던, which implies total completion and closure."
    },
    {
        "title": "~되",
        "level": "L4",
        "category": "L4 - 7과: 현대인의 질병",
        "notes": "⚠ 批准与附加限制。用于让步或许可。意思是“前面的事情我承认/允许，但是...（必须遵守后面的限制条件）”。常用于公文、规定或长辈对晚辈的教导中。\n💡 Tips: Concedes or permits the first clause, but strictly adds a restriction or condition in the second clause. Common in formal rules.",
        "id": "l4_013",
        "desc": "Do it, but... / Admitting X, but requesting Y",
        "meaning_zh": "虽然...但是... / 允许做...但是要注意...",
        "meaning_en": "Do it, but... / Admitting X, but requesting Y",
        "rules": [
            {
                "en": "Verb + 되",
                "zh": "动词+되"
            }
        ],
        "examples": [
            {
                "ko": "음식을 먹되 남기지 마세요.",
                "en": "You may eat the food, but do not leave leftovers.",
                "zh": "吃可以，但不要剩下。"
            }
        ]
    },
    {
        "id": "l4_014",
        "category": "L4 - 7과: 현대인의 질병",
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
        "notes": "⚠ 第一视角的发现。两大核心用法：①主语是我：我做了某事后，突然发现了后面的结果。②主语是别人：我观察到别人做了某事，导致了后面的变化。不能用于“我打算做某事”。\n💡 Tips: Two uses: ① 1st person: I did something → realized an unexpected result. ② 2nd/3rd person: I observed someone do something → saw the change."
    },
    {
        "id": "l4_015",
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
        "notes": "⚠ 一箭双雕的兼顾。表示“顺便/兼顾”。做一个动作，同时满足两个目的。通常前面加 도，构成 A 도 할 겸 B 도 할 겸，非常有节奏感。\n💡 Tips: Combining purposes 'while doing this, also doing that'. One action serves two birds. Often used as ~도 할 겸 to list the dual purposes."
    },
    {
        "id": "l4_016",
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
        "notes": "⚠ 带着求知欲的确认。当你从别人那里听到了某个八卦或消息，去向当事人确认时使用：“听说你...是真的吗？”。语气中多多少少带有一点好奇或惊讶。\n💡 Tips: Used to confirm hearsay with the listener: 'I heard that..., is it true?'. Carries a distinct tone of curiosity, surprise, or gossiping."
    },
    {
        "id": "l4_017",
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
        "notes": "⚠ 惊险的避让。表示“差一点点就发生了（但庆幸的是并没有发生）”。时态铁律：只能而且必须使用过去时（ㄹ 뻔했다）！通常搭配 하마터면（差点）使用。\n💡 Tips: 'Almost happened (but thankfully didn't)'. Tense rule: Can ONLY be used in past tense (ㄹ 뻔했다). Often paired with 하마터면."
    },
    {
        "id": "l4_018",
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
        "notes": "⚠ 严肃的因果归结。表示原因“由于/因为...”。极其正式的书面语！常用于新闻报道、官方事故调查报告、学术论文中。如果日常聊天用这个，会显得像在播报新闻。\n💡 Tips: Means 'due to'. Highly formal/written expression reserved for news broadcasting, accident reports, and essays. In speech, use 때문에."
    },
    {
        "id": "l4_019",
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
        "notes": "⚠ 虚伪的伪装。表示“明明不是那样，却假装成那样”。时态匹配是唯一的难点：动词现在假装(는 척)、形容词假装(ㄴ/은 척)、假装过去做过(ㄴ/은 척)。\n💡 Tips: 'Pretend to'. Match the modifier exactly to the tense: Verb present (는 척), Adjective (ㄴ/은 척), Past action (ㄴ/은 척)."
    },
    {
        "title": "~고 말다",
        "level": "L4",
        "category": "L4 - 10과: 언어생활",
        "notes": "⚠ 无法挽回的结局。表示事情最终发展成了非本意的结果（“最终还是...”）。通常带有非常浓厚的惋惜、后悔、失望或无可奈何的感情色彩。\n💡 Tips: Expresses that an action was completed unintentionally or inevitably, heavily laden with feelings of regret, disappointment or helplessness.",
        "id": "l4_020",
        "desc": "Ended up doing... (unintended/regretful)",
        "meaning_zh": "最终还是...了 (遗憾/无奈)",
        "meaning_en": "Ended up doing... (unintended/regretful)",
        "rules": [
            {
                "en": "Verb + 고 말다",
                "zh": "动词+고 말다"
            }
        ],
        "examples": [
            {
                "ko": "결국 울음을 터뜨리고 말았어요.",
                "en": "I eventually ended up bursting into tears.",
                "zh": "最终还是没忍住哭了出来。"
            }
        ]
    },
    {
        "id": "l4_021",
        "category": "L4 - 11과: 교육 제도",
        "level": "L4",
        "title": "~기 마련이다",
        "desc": "Bound to happen",
        "meaning_zh": "必然会...",
        "meaning_en": "Naturally bound to happen",
        "rules": [
            {
                "zh": "动词/形容词+기 마련이다",
                "en": "Verb/Adj + 기 마련이다"
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
        "notes": "⚠ 不可抗拒的真理。表示某个结果是自然规律、人性本能或必然发生的事（“肯定是会...的”）。不能用于随机发生或偶然的个人事件。\n💡 Tips: Expresses natural law, human nature, or inevitability: 'Bound to happen / It is natural that...'. Cannot be used for random events."
    },
    {
        "title": "~조차",
        "level": "L4",
        "category": "L4 - 11과: 교육 제도",
        "notes": "⚠ 底线的突破。极端的包含助词。意思是“竟然连最基础、最理所当然的那个也/都...”。通常预示着情况已经糟糕到了极点，比 마저/까지 的否定感更深。\n💡 Tips: Used to express an extreme, unexpected negative situation ('Even the most basic thing...'). Similar to 마저 but with a darker tone.",
        "id": "l4_022",
        "desc": "Even... (extreme case)",
        "meaning_zh": "甚至连... / 居然...",
        "meaning_en": "Even... (extreme case)",
        "rules": [
            {
                "en": "Noun + 조차",
                "zh": "名词+조차"
            }
        ],
        "examples": [
            {
                "ko": "너무 아파서 물조차 마실 수 없어요.",
                "en": "I'm so sick that I can't even drink water.",
                "zh": "因为太疼了，甚至连水都喝不了。"
            }
        ]
    },
    {
        "id": "l4_023",
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
        "notes": "⚠ 聚光灯般的强调。是主格助词 이/가 的究极加强版，意思是“唯有这个才是 / 正是这个！”。后面经常接最高级的评价（최고/가장/진짜）。\n💡 Tips: Emphatic marker meaning 'THE very / indeed'. It spotlights the noun. Often paired with superlatives like 최고, 가장, 진짜."
    },
    {
        "id": "l4_024",
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
        "notes": "⚠ 有理有据的推测。表示基于自己亲眼看到、听到的【客观线索】做出的推测（“看来是...啊”）。它的可信度远远高于完全凭空瞎猜的 것 같다。\n💡 Tips: Evidence-based guess (judging after seeing/hearing a clue). Stronger factual basis than 것 같다. E.g. Seeing wet roads -> 비가 왔나 보다."
    },
    {
        "title": "~는 한",
        "level": "L4",
        "category": "L4 - 13과: 환경 보호",
        "notes": "⚠ 苛刻的前提锁。表示“只要保持前面的状态或条件不改变，后面的情况就会一直有效”。带有一种斩钉截铁的语气（“只要我还活着一天，就不允许发生这种事”）。\n💡 Tips: Indicates that as long as the exact condition in the first clause is maintained, the second clause remains true. Very assertive tone.",
        "id": "l4_025",
        "desc": "As long as...",
        "meaning_zh": "只要...就...",
        "meaning_en": "As long as...",
        "rules": [
            {
                "en": "Verb + 는 한",
                "zh": "动词+는 한"
            }
        ],
        "examples": [
            {
                "ko": "제가 여기에 있는 한 걱정하지 마세요.",
                "en": "As long as I am here, do not worry.",
                "zh": "只要有我在，你就不用担心。"
            }
        ]
    },
    {
        "id": "l4_026",
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
        "notes": "⚠ 目的与极限。考试必考的两个用法：①表示目的：“为了使...发生”（前面常接否定词，如 안 늦도록 = 为了不迟到）。②表示生理极限：“到了...地步”（如 눈물이 나도록 = 到了流泪的地步）。\n💡 Tips: Two massive usages: ① Purpose 'so that...' (안 늦도록 = so as not to be late) ② Extent 'to the point of...' (눈물이 나도록)."
    },
    {
        "title": "~(으)므로",
        "level": "L4",
        "category": "L4 - 14과: 생활과 경제",
        "notes": "⚠ 官腔十足的原因。表示原因的极其正式的书面表达。你在日常生活中听不到它，它永远出现在公文、新闻简报、法律条文或正式演讲稿中。等同于 (으)니까/기 때문에。\n💡 Tips: A highly formal, rigid written expression indicating a logical cause. Equivalent to 기 때문에 but used in official documents.",
        "id": "l4_027",
        "desc": "Because / Therefore (formal/written)",
        "meaning_zh": "因为... / 由于... (书面)",
        "meaning_en": "Because / Therefore (formal/written)",
        "rules": [
            {
                "en": "Verb/Adj + (으)므로",
                "zh": "动词/形容词+(으)므로"
            }
        ],
        "examples": [
            {
                "ko": "이곳은 위험하므로 들어가지 마십시오.",
                "en": "It is dangerous here, therefore do not enter.",
                "zh": "此处危险，请勿进入。"
            }
        ]
    },
    {
        "title": "~은/는커녕",
        "level": "L4",
        "category": "L4 - 14과: 생활과 경제",
        "notes": "⚠ 降维打击的否定。强烈的递进否定：“别说是A了，就连最基础的B都做不到/没有”。前面是奢望，后面是残酷的现实。例如：别说吃肉了，连粥都没得喝。\n💡 Tips: Emphasizes that even a basic expectation wasn't met, let alone a much higher one ('Let alone A, even B is impossible').",
        "id": "l4_028",
        "desc": "Let alone... not even...",
        "meaning_zh": "别说...就连...也(没)",
        "meaning_en": "Let alone... not even...",
        "rules": [
            {
                "en": "Noun + 은/는커녕",
                "zh": "名词+은/는커녕"
            }
        ],
        "examples": [
            {
                "ko": "밥은커녕 물도 못 마셨어요.",
                "en": "I couldn't even drink water, let alone eat food.",
                "zh": "别说吃饭了，连水都没喝上。"
            }
        ]
    },
    {
        "title": "~는 법이다",
        "level": "L4",
        "category": "L4 - 15과: 법과 질서",
        "notes": "⚠ 世间万物的法则。表示阐述某种世间真理或普遍规律（“...是理所当然的事”）。语气老成，常用于讲大道理或安慰别人（如：人终有一死）。\n💡 Tips: Expresses a natural law, inevitable outcome, or general truth of life. Often used when giving profound advice or comforting someone.",
        "id": "l4_029",
        "desc": "It is a rule that... / Bound to...",
        "meaning_zh": "理所当然会... / 必然规律",
        "meaning_en": "It is a rule that... / Bound to...",
        "rules": [
            {
                "en": "Verb + 는 법이다",
                "zh": "动词+는 법이다"
            }
        ],
        "examples": [
            {
                "ko": "노력하면 성공하는 법입니다.",
                "en": "It is a rule that if you work hard, you succeed.",
                "zh": "只要努力就必然会成功。"
            }
        ]
    },
    {
        "title": "~다시피",
        "level": "L4",
        "category": "L4 - 15과: 법과 질서",
        "notes": "⚠ 共享信息的确认。意思是“正如你所...的那样”。几乎固定搭配感官动词：알다(知道)、보다(看)、듣다(听)、느끼다(感受)。用于拉近距离或建立共识。\n💡 Tips: Used with perception verbs like 알다, 보다, 듣다 to confirm shared knowledge ('As you already know/see/hear...').",
        "id": "l4_030",
        "desc": "As you (know/see/hear)...",
        "meaning_zh": "正如你所... (看/听/知)",
        "meaning_en": "As you (know/see/hear)...",
        "rules": [
            {
                "en": "Verb + 다시피",
                "zh": "动词+다시피"
            }
        ],
        "examples": [
            {
                "ko": "아시다시피 내일은 회의가 없습니다.",
                "en": "As you know, there is no meeting tomorrow.",
                "zh": "正如您所知，明天没有会议。"
            }
        ]
    },
    {
        "id": "l4_031",
        "category": "L4 - 16과: 이민 생활",
        "level": "L4",
        "title": "~(으)ㄹ지도 모르다",
        "desc": "Might / Perhaps",
        "meaning_zh": "也许.../说不定...",
        "meaning_en": "Might, perhaps",
        "rules": [
            {
                "zh": "动词/形容词+(으)ㄹ지도 모르다",
                "en": "Verb/Adj + (으)ㄹ지도 모르다"
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
        "notes": "⚠ 微乎其微的可能性。表示一种非常不确定的推测：“也许/说不定会发生...”。它所暗示的可能性比 것 같다 低得多。通常用于提醒对方小心防范未知的危险。\n💡 Tips: Less certain guess, 'might/perhaps...'. Lower probability than 것 같다. Often used to warn someone to prepare for a slight chance."
    },
    {
        "id": "l4_032",
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
        "notes": "⚠ 打破刻板印象的评价。表示“作为...来说，居然...”。后面必须要接出乎意料的评价。比如：作为外国人来说，韩语真是说得太好了！（正面）；作为冬天来说，这天居然一点也不冷！（反常）。\n💡 Tips: Meaning 'considering it's a...'. Always followed by an unexpected evaluation defying the stereotype, whether surprisingly good or bad."
    },
    {
        "id": "l4_033",
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
        "notes": "⚠ 算账式的四舍五入。表示虽然不是 100% 精确，但根据实际情况来看，“基本上就等同于/算是...了”。（例如：100个人的班级来了98个，就相当于全来了）。\n💡 Tips: Approximation, meaning 'It is practically/more or less...'. Not computationally exact, but functionally/virtually equivalent."
    },
    {
        "id": "l4_034",
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
        "notes": "⚠ 推卸责任的怪罪。非常明确的感情色彩：“都怪...”。【只能】用于导致负面、糟糕结果的原因。如果你想表达感恩的积极原因，绝对要用 덕분에（多亏了）。\n💡 Tips: 'Blame to / solely because of'. Strictly used ONLY for negative results. If the result is positive, using this is grammatically fatal; use 덕분에."
    },
    {
        "id": "l4_035",
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
        "notes": "⚠ 充满怨气的转折。是 는데 和 도 的加强结合版。表示“明明前面是这样，结果后面却依然...”。转折语气极度强烈，通常带有很多不可思议、惊讶或抱怨的感情。\n💡 Tips: Strong concession 'despite the glaring fact that...'. Stronger contrast than 지만, heavily implies surprise, frustration or complaining."
    },
    {
        "id": "l4_036",
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
        "notes": "⚠ 拍大腿的马后炮。表示强烈的后悔：“哎呀，早知道当时就应该做...了！”。如果是后悔做了某事，就要用它的否定形式：지 말 걸 그랬다（早知道就不做了！）。\n💡 Tips: Deep regret over a missed past action: 'I really should have done...'. Negative form is crucial: 지 말 걸 그랬다 (I shouldn't have...)."
    },
    {
        "id": "l4_037",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~(으)ㄹ 리가 없다",
        "desc": "No way / Impossible",
        "meaning_zh": "不可能...",
        "meaning_en": "No way, impossible",
        "rules": [
            {
                "zh": "动词/形容词+(으)ㄹ 리가 없다",
                "en": "Verb/Adj + (으)ㄹ 리가 없다"
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
        "notes": "⚠ 铁齿铜牙的否认。极其强烈的否定推测，表示“绝对不可能！/ 没这个理儿！”。当你听到一个离谱的谣言或指控时，用来强势反驳对方。\n💡 Tips: Strongest negative supposition, meaning 'It's absolutely impossible! / No way!'. Great for vehemently refuting ridiculous claims."
    },
    {
        "id": "l4_038",
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
        "notes": "⚠ 杞人忧天的防备。表示“担心某事发生（所以采取了某个防范措施）”。考点限制：绝对不能用于过去已经发生的事情！因为你不能“担心”一个已经结束的动作。\n💡 Tips: Worrying something might happen, usually followed directly by a preventive action. Strict rule: Cannot be used for events already in the past."
    },
    {
        "id": "l4_039",
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
        "notes": "⚠ 铜墙铁壁的不可能。表示“就算我想...也绝对做不到”。句型结构非常特殊且固定：前后必须重复使用【同一个】动词。例如：잊을래야 잊을 수 없다 (想忘也忘不掉)。\n💡 Tips: Absolute impossibility 'cannot... even if one tries hard'. The exact same verb MUST be repeated before and after: 잊을래야 잊을 수 없다."
    },
    {
        "id": "l4_040",
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
        "notes": "⚠ 摆烂的虚无主义。表示“这事做也是白做，不做也一样，反正结果都注定了”。带有极其消极、放弃治疗或鄙视的语气。（例如：考前一秒才看书，看不看都一样）。\n💡 Tips: Meaning 'pointless to do / doing it makes zero difference'. Implies that the outcome won't change regardless. Very pessimistic/cynical tone."
    },
    {
        "id": "l4_041",
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
        "notes": "⚠ 极小概率的假想。这是比 (으)면 更加极端的假设。通常用于假设那些现实中极不可能发生的事情（“万一 / 如果真的有一天...”）。例如：如果我中了100亿彩票。\n💡 Tips: Stronger hypothetical than (으)면. Used for highly unlikely or dream scenarios: 'If by some miracle...' (e.g., If I win the lottery)."
    },
    {
        "id": "l4_042",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~고말고(요)",
        "desc": "Of course / Certainly",
        "meaning_zh": "强烈地肯定对方的提问或同意对方的意见（那是当然... / 绝对会...）。",
        "meaning_en": "Used to strongly agree with the listener or confirm that something is an absolute certainty ('Of course I will/it is').",
        "rules": [
            {
                "zh": "动词/形容词+고말고요",
                "en": "Verb/Adj + 고말고요"
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
        "notes": "⚠ 热情洋溢的绝对赞同。在对话中用来极其积极地回应对方：“那是当然的啦！”。比干巴巴的说 네 要生动100倍。通常会重复对方提问的词（好吃吗？ -> 好吃得不得了！）。\n💡 Tips: A highly enthusiastic conversational way to say 'Absolutely! / Of course!'. Often repeats the main verb/adjective used in the preceding question."
    },
    {
        "id": "l4_043",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~기에(는)",
        "desc": "For doing / Considering",
        "meaning_zh": "就做...来说(评价)",
        "meaning_en": "Considering the action",
        "rules": [
            {
                "zh": "动词/形容词+기에(는)",
                "en": "Verb/Adj + 기에(는)"
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
        "notes": "⚠ 尺寸与标准的丈量。用来评估某个行为或物品是否合适：“对于做某事来说，它太...了”。比如：这件衣服对于出门穿来说太华丽了 / 这个量对于一个人吃来说太大了。\n💡 Tips: Used to evaluate suitability against a standard: 'For doing [action], it is too good/bad/big/small'. Evaluates if something fits the criteria."
    },
    {
        "id": "l4_044",
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
        "notes": "⚠ 毒药二选一的抉择。表示极度极端的比较：“与其A，我宁愿去B”。 느니 前面的选项通常是你极度厌恶、打死也不想选的。차라리 后面则是两害相权取其轻的无奈之选。\n💡 Tips: Choice comparison: 'Rather B than A'. The clause before 느니 is the absolutely undesirable option, the one after 차라리 is preferred out of desperation."
    },
    {
        "id": "l4_045",
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
        "notes": "⚠ 顺手牵羊的动作。表示“既然都已经开始做A了，干脆顺便把B也做了吧”。第一个动作是你本来计划好的正事，第二个动作是临时起意、顺便搭便车完成的。\n💡 Tips: 'While you're at it / taking the opportunity'. The first action is the primary planned mission, the second is a spontaneous secondary task."
    },
    {
        "id": "l4_046",
        "category": "L4 - 추가 문법 (Extra Grammar)",
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
        "notes": "⚠ 讲究证据的客观推测。意思是“看来/似乎是...”。核心考点：前半句必须带有让你产生这种推测的【客观依据】（比如看到地湿了，推测刚下过雨）。绝不能用于推断自己的行为！\n💡 Tips: Evidence-based guess. Often preceded by ~(으)ㄴ/는 걸 보니까 (Seeing that...). Rule: Cannot be used for your own actions or internal feelings."
    },
    {
        "id": "l4_047",
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
        "notes": "⚠ 突发背锅侠。表示原因“由于...”。两大终极考点限制：①必须是因为突发、不可控的意外事件。②导致的结果必须、一定、绝对是【负面的糟糕结果】。\n💡 Tips: 'Due to (a sudden/unexpected event)'. Strict exam rules: Used ONLY for past sudden events, and the result MUST always be negative."
    },
    {
        "id": "l4_048",
        "category": "L4 - 추가 문법 (Extra Grammar)",
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
        "notes": "⚠ 量变引起质变。表示“随着某个动作不断持续、反复进行，最终自然而然地发现了某个事实或养成了习惯”。只能接【动词】，绝对不能接形容词！\n💡 Tips: Only attaches to verbs. Focuses heavily on the continuous repetition of a past action slowly leading to a new realization, habit or result."
    },
    {
        "id": "l4_049",
        "category": "L4 - 추가 문법 (Extra Grammar)",
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
        "notes": "⚠ 死亡预言家。这是一个带有强烈警告意味的假设：“如果一直这么下去的话，早晚会完蛋的”。后半句【必定接不好的结果】，且通常搭配将来时或推测语气（(으)ㄹ 거예요）。\n💡 Tips: Warning! Always predicts a NEGATIVE outcome. The second clause often uses future tense or guessing forms to predict a disaster if the behavior continues."
    },
    {
        "id": "l4_050",
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
        "notes": "⚠ 不耐烦的重申。口语中用来极其强调自己说过的话：“我都说了...啦！”。因为带有强烈的执念和重复感，如果对长辈使用会显得非常不礼貌、不耐烦。\n💡 Tips: Insistent repetition, meaning 'I TOLD you...!'. Often used when frustrated that the listener didn't get it. Can sound highly impatient."
    },
    {
        "id": "l4_051",
        "category": "L4 - 추가 문법 (Extra Grammar)",
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
        "notes": "⚠ 索要福利的间接引语。这是全韩语最容易错的语法！如果原本说话的人是为【自己】索要东西，转述时必须把 주다 变成 달라고 하다。如果是给第三人，则用 주라고 하다。\n💡 Tips: Crucial exam distinction! Use 달라고 하다 when the requested action benefits the ORIGINAL requester (Ask to give it to ME)."
    },
    {
        "id": "l4_052",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~더라도",
        "desc": "Even if",
        "meaning_zh": "即使...也...",
        "meaning_en": "Even if (hypothetical concession)",
        "rules": [
            {
                "zh": "动词/形容词+더라도",
                "en": "Verb/Adj + 더라도"
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
        "notes": "⚠ 最硬核的假设性让步。表示“就算天塌下来我也要...”。它所假设的事情发生的概率极低（甚至还没发生），比 아도/어도 包含的“哪怕”意味更强烈、更决绝。\n💡 Tips: The strongest hypothetical concession 'even if (something extreme/unlikely happens)'. Much more hypothetical and resilient than 아도/어도."
    },
    {
        "id": "l4_053",
        "category": "L4 - 추가 문법 (Extra Grammar)",
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
        "notes": "⚠ 借花献佛的间接引语。与 달라고 하다 相对立！如果原本说话的人，是要求听话人去帮助或给予【第三个人】福利，转述时必须保留 주라고 하다。\n💡 Tips: The action benefits a THIRD party. If the teacher told you to give the book to Minsu, use 주라고 하다 (Ask to give it to SOMEONE ELSE)."
    },
    {
        "id": "l4_054",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~아/어서야",
        "desc": "Only after / Not until",
        "meaning_zh": "表示只有满足了前面的条件或时间点，后面才能发生（必须要...才... / 直到...才...）。带有强调条件极其苛刻的语气。",
        "meaning_en": "Means 'only after' doing something or 'not until' a certain point. Emphasizes that the condition is strict or late.",
        "rules": [
            {
                "zh": "动词/形容词+아/어서야",
                "en": "Verb/Adj + 아/어서야"
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
        "notes": "⚠ 苛刻的及格线。表示条件极其难以满足，“必须要直到...地步，才勉强能...”。后面常常带有很多反问语气：“这点能力能找到工作吗？”（搭配 ~되겠어요?）。\n💡 Tips: Used to emphasize extreme lateness or strict difficulty. Often paired with rhetorical questions ending in ~겠어요? or ~되겠어요?."
    },
    {
        "id": "l4_055",
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
        "notes": "⚠ 穿越时空的悔恨。对过去完全不可能改变的事情进行虚假的假设：“如果当时做了...（但实际没做）的话，现在就会...”。后半句必须配上过去的推测（았/었을 거예요）。\n💡 Tips: Impossible past hypothetical: 'If I had done... (but I didn't)'. MUST be followed by a past guess/regret: 았/었을 거예요 (I would have...)."
    }
];
