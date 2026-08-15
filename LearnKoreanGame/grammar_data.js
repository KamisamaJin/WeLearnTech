// KIIP Grammar Database (181 entries, localized for Chinese and English)
const grammarDB = [
    {
        "id": "l1_001",
        "category": "L1 - 1과: 안녕하세요?",
        "level": "L1",
        "title": "~은/는",
        "examples": [
            {
                "ko": "저는 학생입니다.",
                "translations": {
                    "zh-CN": "我是学生。",
                    "en": "I am a student."
                }
            },
            {
                "ko": "제 이름은 자야예요.",
                "translations": {
                    "zh-CN": "我的名字是Jaya。",
                    "en": "My name is Jaya."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "主题助词，标记话题或对比",
                "meaning": "主题助词，标记话题或对比",
                "rules": [
                    "有收音+은",
                    "无收音+는"
                ],
                "notes": [
                    "话题标记。",
                    "用于对比(A는 X, B는 Y)或引入新话题。",
                    "注意与主语标记이/가区分。"
                ]
            },
            "en": {
                "description": "Topic particle",
                "meaning": "Marks topic or contrast",
                "rules": [
                    "Batchim + 은",
                    "No batchim + 는"
                ],
                "notes": [
                    "Topic marker.",
                    "Used for contrast (A는 X, B는 Y) or introducing a new topic.",
                    "Do not confuse with subject marker 이/가."
                ]
            }
        }
    },
    {
        "id": "l1_002",
        "category": "L1 - 1과: 안녕하세요?",
        "level": "L1",
        "title": "~이에요/예요",
        "examples": [
            {
                "ko": "학생이에요.",
                "translations": {
                    "zh-CN": "是学生。",
                    "en": "I am a student."
                }
            },
            {
                "ko": "미화 씨 친구예요.",
                "translations": {
                    "zh-CN": "是美华的朋友。",
                    "en": "It's Mihwa's friend."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "是...",
                "meaning": "名词后接，表示'是...'",
                "rules": [
                    "有收音+이에요",
                    "无收音+예요"
                ],
                "notes": [
                    "名词有收音接이에요，无收音接예요。",
                    "常见错误：학생예요(✗) → 학생이에요(✓)。"
                ]
            },
            "en": {
                "description": "Noun is/am/are",
                "meaning": "Attached to nouns, means 'is'",
                "rules": [
                    "Batchim + 이에요",
                    "No batchim + 예요"
                ],
                "notes": [
                    "Noun with batchim takes 이에요, without batchim takes 예요.",
                    "Common mistake: 학생예요(✗) → 학생이에요(✓)."
                ]
            }
        }
    },
    {
        "id": "l1_003",
        "category": "L1 - 2과: 방에 책상이 있어요",
        "level": "L1",
        "title": "~에 있어요/없어요",
        "examples": [
            {
                "ko": "책상 위에 책이 있어요.",
                "translations": {
                    "zh-CN": "书桌上有书。",
                    "en": "There is a book on the desk."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "某处",
                "meaning": "在 / 不在（某处）",
                "rules": [
                    "名词+에 있어요/없어요"
                ],
                "notes": [
                    "核心方位句型。",
                    "用于表达人或事物的存在与否及所在位置。"
                ]
            },
            "en": {
                "description": "Is / Is not at (a place)",
                "meaning": "Is / Is not at (a place)",
                "rules": [
                    "Noun + 에 있어요/없어요"
                ],
                "notes": [
                    "Used to express existence or location of a subject at a specific place."
                ]
            }
        }
    },
    {
        "id": "l1_004",
        "category": "L1 - 2과: 방에 책상이 있어요",
        "level": "L1",
        "title": "~이/가",
        "examples": [
            {
                "ko": "비가 와요.",
                "translations": {
                    "zh-CN": "下雨了。",
                    "en": "It rains."
                }
            },
            {
                "ko": "누가 왔어요?",
                "translations": {
                    "zh-CN": "谁来了？",
                    "en": "Who came?"
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "主格助词，标记主语",
                "meaning": "主格助词，标记主语",
                "rules": [
                    "有收音+이",
                    "无收音+가"
                ],
                "notes": [
                    "主语标记。",
                    "强调'谁/什么'做了动作，用于提供新信息：비가 와요 (下雨了 - 新信息)。"
                ]
            },
            "en": {
                "description": "Subject particle",
                "meaning": "Marks the subject of sentence",
                "rules": [
                    "Batchim + 이",
                    "No batchim + 가"
                ],
                "notes": [
                    "Subject marker.",
                    "Emphasizes 'who/what', used for NEW info: 비가 와요 (It is raining - new info)."
                ]
            }
        }
    },
    {
        "id": "l1_005",
        "category": "L1 - 3과: 한국어를 배워요",
        "level": "L1",
        "title": "~아/어요",
        "examples": [
            {
                "ko": "학교에 가요.",
                "translations": {
                    "zh-CN": "去学校。",
                    "en": "I go to school."
                }
            },
            {
                "ko": "뭐 해요?",
                "translations": {
                    "zh-CN": "你在做什么？",
                    "en": "What are you doing?"
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "非格式体现在时终结词尾",
                "meaning": "非格式体现在时终结词尾",
                "rules": [
                    "阳性元音(ㅏ,ㅗ)+아요",
                    "阴性元音(ㅓ,ㅜ,ㅡ,ㅣ)+어요",
                    "하다 → 해요"
                ],
                "notes": [
                    "最常用的非格式体敬语。",
                    "阳性元音(ㅏ,ㅗ)接아요，其他接어요。",
                    "하다变为해요。"
                ]
            },
            "en": {
                "description": "Present tense polite",
                "meaning": "Polite informal present tense ending",
                "rules": [
                    "Bright vowel(ㅏ,ㅗ) + 아요",
                    "Dark vowel + 어요",
                    "하다 → 해요"
                ],
                "notes": [
                    "Most common polite ending.",
                    "Bright vowels (ㅏ,ㅗ) take 아요, others take 어요.",
                    "하다 becomes 해요."
                ]
            }
        }
    },
    {
        "id": "l1_006",
        "category": "L1 - 3과: 한국어를 배워요",
        "level": "L1",
        "title": "~을/를",
        "examples": [
            {
                "ko": "밥을 먹어요.",
                "translations": {
                    "zh-CN": "吃饭。",
                    "en": "I eat rice."
                }
            },
            {
                "ko": "영화를 봐요.",
                "translations": {
                    "zh-CN": "看电影。",
                    "en": "I watch a movie."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "宾格助词，标记动作对象",
                "meaning": "宾格助词，标记动作对象",
                "rules": [
                    "有收音+을",
                    "无收音+를"
                ],
                "notes": [
                    "宾语标记。",
                    "口语中经常省略(밥 먹어요)，但在书面语和正式讲话中不能省。"
                ]
            },
            "en": {
                "description": "Object particle",
                "meaning": "Marks the direct object",
                "rules": [
                    "Batchim + 을",
                    "No batchim + 를"
                ],
                "notes": [
                    "Object marker.",
                    "Often dropped in casual speech (밥 먹어요), but MUST be kept in writing and formal speech."
                ]
            }
        }
    },
    {
        "id": "l1_007",
        "category": "L1 - 4과: 라흐만 씨가 식당에 가요",
        "level": "L1",
        "title": "~에 가다/오다",
        "examples": [
            {
                "ko": "내일 학교에 가요.",
                "translations": {
                    "zh-CN": "明天去学校。",
                    "en": "I go to school tomorrow."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "某处",
                "meaning": "去 / 来（某处）",
                "rules": [
                    "名词+에 가다/오다"
                ],
                "notes": [
                    "方向助词。",
                    "连接目的地，表示移动的方向或终点。"
                ]
            },
            "en": {
                "description": "Go to / Come to (a place)",
                "meaning": "Go to / Come to (a place)",
                "rules": [
                    "Noun + 에 가다/오다"
                ],
                "notes": [
                    "Indicates the destination of a movement."
                ]
            }
        }
    },
    {
        "id": "l1_008",
        "category": "L1 - 4과: 라흐만 씨가 식당에 가요",
        "level": "L1",
        "title": "~에서",
        "examples": [
            {
                "ko": "식당에서 먹어요.",
                "translations": {
                    "zh-CN": "在餐厅吃。",
                    "en": "I eat at the restaurant."
                }
            },
            {
                "ko": "중국에서 왔어요.",
                "translations": {
                    "zh-CN": "从中国来。",
                    "en": "I came from China."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "动作发生地点或起点",
                "meaning": "动作发生地点或起点",
                "rules": [
                    "名词+에서"
                ],
                "notes": [
                    "表示动作发生的场所。",
                    "和에(静态存在)区分：학교에 있다(在学校) vs 학교에서 공부하다(在学校学习)。",
                    "也可表示'来自'(오다/나오다)。"
                ]
            },
            "en": {
                "description": "Dynamic location / From",
                "meaning": "Location of action or starting point",
                "rules": [
                    "Noun + 에서"
                ],
                "notes": [
                    "Location of ACTION.",
                    "Compare: 학교에 있다(Exist at school) vs 학교에서 공부하다(Study at school).",
                    "Also means 'from' with 오다/나오다."
                ]
            }
        }
    },
    {
        "id": "l1_009",
        "category": "L1 - 4과: 라흐만 씨가 식당에 가요",
        "level": "L1",
        "title": "~에서 ~까지",
        "examples": [
            {
                "ko": "서울에서 부산까지",
                "translations": {
                    "zh-CN": "从首尔到釜山",
                    "en": "From Seoul to Busan"
                }
            },
            {
                "ko": "아침부터 저녁까지 일했어요.",
                "translations": {
                    "zh-CN": "从早到晚工作了。",
                    "en": "I worked from morning to evening."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "从...到...",
                "meaning": "从...到...",
                "rules": [
                    "名词+에서",
                    "名词+까지"
                ],
                "notes": [
                    "可用于空间(从A到B)也可用于时间(从X到Y)。",
                    "时间范围常与부터~까지混用。"
                ]
            },
            "en": {
                "description": "From ~ To ~",
                "meaning": "From ~ to ~",
                "rules": [
                    "Noun + 에서",
                    "Noun + 까지"
                ],
                "notes": [
                    "Works for both space (from A to B) and time (from X to Y).",
                    "For time ranges, 부터~까지 is also commonly used."
                ]
            }
        }
    },
    {
        "id": "l1_010",
        "category": "L1 - 5과: 오늘은 5월 5일이에요",
        "level": "L1",
        "title": "~에 (장소/시간)",
        "examples": [
            {
                "ko": "학교에 가요.",
                "translations": {
                    "zh-CN": "去学校。",
                    "en": "I go to school."
                }
            },
            {
                "ko": "3시에 만나요.",
                "translations": {
                    "zh-CN": "3点见。",
                    "en": "Let's meet at 3."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "存在/方向",
                "meaning": "表示地点(存在/方向)或时间",
                "rules": [
                    "名词+에"
                ],
                "notes": [
                    "表示时间或地点(存在/方向)。",
                    "注意：어제/오늘/내일/지금 后面不加에。"
                ]
            },
            "en": {
                "description": "Location/Time particle",
                "meaning": "Location or time marker",
                "rules": [
                    "Noun + 에"
                ],
                "notes": [
                    "Indicates time or location (existence/direction).",
                    "Note: Do NOT attach 에 after 어제/오늘/내일/지금."
                ]
            }
        }
    },
    {
        "id": "l1_011",
        "category": "L1 - 5과: 오늘은 5월 5일이에요",
        "level": "L1",
        "title": "~이/가 아니다",
        "examples": [
            {
                "ko": "저는 학생이 아니에요.",
                "translations": {
                    "zh-CN": "我不是学生。",
                    "en": "I am not a student."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "不是...",
                "meaning": "不是...",
                "rules": [
                    "名词+이/가 아니다"
                ],
                "notes": [
                    "否定断定句。",
                    "是 '~이다' 的反义词，前面必须用主格助词 이/가。"
                ]
            },
            "en": {
                "description": "Is not...",
                "meaning": "Is not...",
                "rules": [
                    "Noun + 이/가 아니다"
                ],
                "notes": [
                    "The negative form of ~이다.",
                    "'학생이 아니에요' (I am not a student)."
                ]
            }
        }
    },
    {
        "id": "l1_012",
        "category": "L1 - 6과: 9시부터 6시까지 일해요",
        "level": "L1",
        "title": "~부터 ~까지",
        "examples": [
            {
                "ko": "9시부터 6시까지 일해요.",
                "translations": {
                    "zh-CN": "从九点工作到六点。",
                    "en": "I work from 9 AM to 6 PM."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "时间",
                "meaning": "从... 到... (时间)",
                "rules": [
                    "时间名词+부터 ~ 时间名词+까지"
                ],
                "notes": [
                    "时间范围标记。",
                    "表示动作或状态从某个时间点开始，到另一个时间点结束。"
                ]
            },
            "en": {
                "description": "From... to... (Time)",
                "meaning": "From... to... (Time)",
                "rules": [
                    "Time Noun + 부터 ~ Time Noun + 까지"
                ],
                "notes": [
                    "Used to indicate the starting and ending points of time."
                ]
            }
        }
    },
    {
        "id": "l1_013",
        "category": "L1 - 6과: 9시부터 6시까지 일해요",
        "level": "L1",
        "title": "~지 않다",
        "examples": [
            {
                "ko": "맵지 않아요.",
                "translations": {
                    "zh-CN": "不辣。",
                    "en": "It's not spicy."
                }
            },
            {
                "ko": "그 영화는 재미있지 않아요.",
                "translations": {
                    "zh-CN": "那部电影没意思。",
                    "en": "That movie isn't fun."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "不...",
                "meaning": "长形否定（不...）",
                "rules": [
                    "词干+지 않다"
                ],
                "notes": [
                    "比'안'更正式的否定方式，多用于书面语。",
                    "对所有的动词/形容词都适用，没有位置限制。"
                ]
            },
            "en": {
                "description": "Negation (long form)",
                "meaning": "Long-form negation",
                "rules": [
                    "Stem + 지 않다"
                ],
                "notes": [
                    "More formal negation than '안', often used in writing.",
                    "Works with ALL verbs/adjectives without placement restrictions."
                ]
            }
        }
    },
    {
        "id": "l1_014",
        "category": "L1 - 6과: 9시부터 6시까지 일해요",
        "level": "L1",
        "title": "안 + Verb/Adj",
        "examples": [
            {
                "ko": "안 가요.",
                "translations": {
                    "zh-CN": "不去。",
                    "en": "I don't go."
                }
            },
            {
                "ko": "오늘은 안 바빠요.",
                "translations": {
                    "zh-CN": "今天不忙。",
                    "en": "I'm not busy today."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "否定副词，不做某事",
                "meaning": "否定副词，不做某事",
                "rules": [
                    "안+动词/形容词"
                ],
                "notes": [
                    "主观否定。",
                    "放在动词前面。",
                    "注意：名词+하다动词中，안必须放在하다前面(공부 안 하다)。"
                ]
            },
            "en": {
                "description": "Negation",
                "meaning": "Negation adverb 'not'",
                "rules": [
                    "안 + Verb/Adj"
                ],
                "notes": [
                    "Subjective negation (do not / will not).",
                    "For Noun+하다 verbs, 안 MUST be placed right before 하다 (공부 안 하다)."
                ]
            }
        }
    },
    {
        "id": "l1_015",
        "category": "L1 - 7과: 김치찌개 하나 주세요",
        "level": "L1",
        "title": "~(으)세요",
        "examples": [
            {
                "ko": "여기에 앉으세요.",
                "translations": {
                    "zh-CN": "请坐这里。",
                    "en": "Please sit here."
                }
            },
            {
                "ko": "이쪽으로 오세요.",
                "translations": {
                    "zh-CN": "请这边走。",
                    "en": "Please come this way."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "尊敬命令终结词尾，请...",
                "meaning": "尊敬命令终结词尾，请...",
                "rules": [
                    "无收音+세요",
                    "有收音+으세요"
                ],
                "notes": [
                    "具有双重功能：①尊敬陈述句(老师来了) ②礼貌命令句(请坐)。",
                    "靠语境区分。"
                ]
            },
            "en": {
                "description": "Polite request/command",
                "meaning": "Polite imperative ending",
                "rules": [
                    "No batchim + 세요",
                    "Batchim + 으세요"
                ],
                "notes": [
                    "Dual function: ① Honorific statement (The teacher is coming) ② Polite command (Please sit).",
                    "Determined by context."
                ]
            }
        }
    },
    {
        "id": "l1_016",
        "category": "L1 - 7과: 김치찌개 하나 주세요",
        "level": "L1",
        "title": "~(으)십니다/~(으)세요?",
        "examples": [
            {
                "ko": "선생님이 책을 읽으십니다.",
                "translations": {
                    "zh-CN": "老师在读书。",
                    "en": "The teacher reads a book."
                }
            },
            {
                "ko": "어디에 사십니까?",
                "translations": {
                    "zh-CN": "您住在哪里？",
                    "en": "Where do you live? (formal)"
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "敬语终结词尾",
                "meaning": "敬语终结词尾",
                "rules": [
                    "词干+(으)십니다"
                ],
                "notes": [
                    "格式体尊敬语(습니다/십니다)，最正式的级别。",
                    "主要用于新闻、演讲、军队、面试等场合。"
                ]
            },
            "en": {
                "description": "Honorific endings",
                "meaning": "Honorific sentence endings",
                "rules": [
                    "Stem + (으)십니다"
                ],
                "notes": [
                    "Formal honorifics (습니다/십니다).",
                    "The most formal speech level.",
                    "Used in news, presentations, military, and interviews."
                ]
            }
        }
    },
    {
        "id": "l1_017",
        "category": "L1 - 7과: 김치찌개 하나 주세요",
        "level": "L1",
        "title": "~고 싶다",
        "examples": [
            {
                "ko": "한국에 가고 싶어요.",
                "translations": {
                    "zh-CN": "想去韩国。",
                    "en": "I want to go to Korea."
                }
            },
            {
                "ko": "맛있는 음식을 먹고 싶어요.",
                "translations": {
                    "zh-CN": "想吃好吃的。",
                    "en": "I want to eat delicious food."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "想做...",
                "meaning": "想做...",
                "rules": [
                    "动词+고 싶다"
                ],
                "notes": [
                    "表示愿望。",
                    "陈述句只能用于第一人称(我想...)。",
                    "第三人称要用'고 싶어하다'。",
                    "问句可用于第二人称。"
                ]
            },
            "en": {
                "description": "Want to",
                "meaning": "Want to do",
                "rules": [
                    "Verb + 고 싶다"
                ],
                "notes": [
                    "Expresses desire.",
                    "Statements only for 1st person (I want..).",
                    "Use 고 싶어하다 for 3rd person.",
                    "Questions work for 2nd person."
                ]
            }
        }
    },
    {
        "id": "l1_018",
        "category": "L1 - 8과: 칫솔하고 치약을 삽니다",
        "level": "L1",
        "title": "~습니다/습니까?",
        "examples": [
            {
                "ko": "이 책을 읽습니다.",
                "translations": {
                    "zh-CN": "读这本书。",
                    "en": "I read this book."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "正式尊称陈述/疑问尾缀",
                "meaning": "正式尊称陈述/疑问尾缀",
                "rules": [
                    "动词/形容词+습니다/습니까"
                ],
                "notes": [
                    "最高级敬语（格式体）。",
                    "常用于正式场合、新闻播报或对长辈/上级汇报时。"
                ]
            },
            "en": {
                "description": "Formal polite statement/question ending",
                "meaning": "Formal polite statement/question ending",
                "rules": [
                    "Verb/Adj + 습니다/습니까"
                ],
                "notes": [
                    "Highly formal and polite ending, often used in public speaking, news, and business."
                ]
            }
        }
    },
    {
        "id": "l1_019",
        "category": "L1 - 8과: 칫솔하고 치약을 삽니다",
        "level": "L1",
        "title": "~하고",
        "examples": [
            {
                "ko": "빵하고 우유",
                "translations": {
                    "zh-CN": "面包和牛奶",
                    "en": "Bread and milk"
                }
            },
            {
                "ko": "친구하고 같이 갔어요.",
                "translations": {
                    "zh-CN": "和朋友一起去了。",
                    "en": "I went together with my friend."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "并列助词，和",
                "meaning": "并列助词，和",
                "rules": [
                    "名词+하고"
                ],
                "notes": [
                    "表示'和/与'。",
                    "和와/과一样，但하고最口语化。",
                    "不论有无收音都可以直接接하고。"
                ]
            },
            "en": {
                "description": "And (Noun connector)",
                "meaning": "And (connects nouns)",
                "rules": [
                    "Noun + 하고"
                ],
                "notes": [
                    "Means 'and/with'.",
                    "Like 와/과 but more casual.",
                    "Can be attached regardless of batchim, unlike 와/과."
                ]
            }
        }
    },
    {
        "id": "l1_020",
        "category": "L1 - 9과: 지난 주말에 친구를 만났어요",
        "level": "L1",
        "title": "~도",
        "examples": [
            {
                "ko": "저도 학생이에요.",
                "translations": {
                    "zh-CN": "我也是学生。",
                    "en": "I'm also a student."
                }
            },
            {
                "ko": "이것도 주세요.",
                "translations": {
                    "zh-CN": "这个也请给我。",
                    "en": "Please give me this too."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "包含助词，也",
                "meaning": "包含助词，也",
                "rules": [
                    "名词+도"
                ],
                "notes": [
                    "表示'也'。",
                    "替换掉은/는、이/가、을/를，不能叠加使用：나도(✓) 나는도(✗)。",
                    "但可以和에/에서叠加：에도/에서도。"
                ]
            },
            "en": {
                "description": "Also/Too",
                "meaning": "Also, too",
                "rules": [
                    "Noun + 도"
                ],
                "notes": [
                    "Means 'also/too'.",
                    "REPLACES 은/는, 이/가, 을/를 (나는도 ✗, 나도 ✓).",
                    "But CAN stack with 에/에서 (에도/에서도)."
                ]
            }
        }
    },
    {
        "id": "l1_021",
        "category": "L1 - 9과: 지난 주말에 친구를 만났어요",
        "level": "L1",
        "title": "~았/었",
        "examples": [
            {
                "ko": "어제 영화를 봤어요.",
                "translations": {
                    "zh-CN": "昨天看了电影。",
                    "en": "I watched a movie yesterday."
                }
            },
            {
                "ko": "오늘 많이 걸었어요.",
                "translations": {
                    "zh-CN": "今天走了很多路。",
                    "en": "I walked a lot today."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "过去时",
                "meaning": "过去时",
                "rules": [
                    "阳性元音(ㅏ,ㅗ)+았",
                    "阴性元音(ㅓ,ㅜ,ㅡ,ㅣ)+었",
                    "하다 → 했"
                ],
                "notes": [
                    "过去时标记。",
                    "注意特殊缩写：가+았→갔, 오+았→왔, 마시+었→마셨, 하+았→했。"
                ]
            },
            "en": {
                "description": "Past tense",
                "meaning": "Past tense",
                "rules": [
                    "Bright vowel + 았",
                    "Dark vowel + 었",
                    "하다 → 했 (하다 verb)"
                ],
                "notes": [
                    "Past tense marker.",
                    "Note common contractions: 가+았→갔, 오+았→왔, 마시+었→마셨, 하+았→했."
                ]
            }
        }
    },
    {
        "id": "l1_022",
        "category": "L1 - 10과: 아버지는 요리를 잘하세요",
        "level": "L1",
        "title": "~(으)시-",
        "examples": [
            {
                "ko": "아버지는 신문을 읽으십니다.",
                "translations": {
                    "zh-CN": "爸爸在读报纸。",
                    "en": "Father reads the newspaper."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "尊称中缀",
                "meaning": "尊称中缀",
                "rules": [
                    "动词/形容词+(으)시"
                ],
                "notes": [
                    "主体尊称词缀。",
                    "插入到动词或形容词干后，用于表达对句子主语（通常是长辈或上级）的尊敬。"
                ]
            },
            "en": {
                "description": "Honorific infix",
                "meaning": "Honorific infix",
                "rules": [
                    "Verb/Adj + (으)시"
                ],
                "notes": [
                    "Inserted into the verb/adjective to show respect to the subject of the sentence."
                ]
            }
        }
    },
    {
        "id": "l1_023",
        "category": "L1 - 10과: 아버지는 요리를 잘하세요",
        "level": "L1",
        "title": "~께서",
        "examples": [
            {
                "ko": "할머니께서 오셨어요.",
                "translations": {
                    "zh-CN": "奶奶来了。",
                    "en": "Grandmother came."
                }
            },
            {
                "ko": "사장님께서 말씀하셨습니다.",
                "translations": {
                    "zh-CN": "社长说了。",
                    "en": "The CEO has spoken."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "이/가的敬语",
                "meaning": "敬语主格助词(이/가的敬语)",
                "rules": [
                    "长辈/上级+께서"
                ],
                "notes": [
                    "께서只用于需要尊敬的长辈/上级，必须搭配尊敬词尾-(으)시-。",
                    "例如：할머니께서 오셨어요(✓)。"
                ]
            },
            "en": {
                "description": "Honorific subject",
                "meaning": "Honorific subject particle",
                "rules": [
                    "Elder/senior + 께서"
                ],
                "notes": [
                    "Honorific marker.",
                    "MUST be paired with honorific ending -(으)시-.",
                    "Example: 할머니께서 오셨어요(✓)."
                ]
            }
        }
    },
    {
        "id": "l1_024",
        "category": "L1 - 10과: 아버지는 요리를 잘하세요",
        "level": "L1",
        "title": "~지만",
        "examples": [
            {
                "ko": "비싸지만 맛있어요.",
                "translations": {
                    "zh-CN": "虽贵但好吃。",
                    "en": "Expensive but delicious."
                }
            },
            {
                "ko": "작지만 아늑해요.",
                "translations": {
                    "zh-CN": "虽小但温馨。",
                    "en": "Small but cozy."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "虽然...但是",
                "meaning": "转折(虽然...但是)",
                "rules": [
                    "词干+지만"
                ],
                "notes": [
                    "强烈的转折'虽然...但是'。",
                    "前面可以接过去时(했지만)，对比 는데(较柔和)。"
                ]
            },
            "en": {
                "description": "But/However",
                "meaning": "But, however",
                "rules": [
                    "Stem + 지만"
                ],
                "notes": [
                    "Strong contrast 'but / although'.",
                    "Can take past tense before it (했지만).",
                    "Stronger contrast than the softer 는데."
                ]
            }
        }
    },
    {
        "id": "l1_025",
        "category": "L1 - 11과: 어버이날에 부모님께 꽃을 드려요",
        "level": "L1",
        "title": "~아/어 주세요",
        "examples": [
            {
                "ko": "문을 열어 주세요.",
                "translations": {
                    "zh-CN": "请帮忙开门。",
                    "en": "Please open the door."
                }
            },
            {
                "ko": "천천히 말해 주세요.",
                "translations": {
                    "zh-CN": "请慢慢说。",
                    "en": "Please speak slowly."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "请帮忙做...",
                "meaning": "请帮忙做...",
                "rules": [
                    "词干+아/어 주세요"
                ],
                "notes": [
                    "委婉请求：'请为我做...'。",
                    "比命令句(으)세요更有礼貌、更柔和。"
                ]
            },
            "en": {
                "description": "Please do for me",
                "meaning": "Requesting a favor",
                "rules": [
                    "Stem + 아/어 주세요"
                ],
                "notes": [
                    "Polite request: 'Please do..",
                    "for me'.",
                    "Softer and more polite than the direct command (으)세요."
                ]
            }
        }
    },
    {
        "id": "l1_026",
        "category": "L1 - 11과: 어버이날에 부모님께 꽃을 드려요",
        "level": "L1",
        "title": "~에게/께",
        "examples": [
            {
                "ko": "친구에게 선물을 줘요.",
                "translations": {
                    "zh-CN": "给朋友礼物。",
                    "en": "I give a gift to my friend."
                }
            },
            {
                "ko": "부모님께 전화했어요.",
                "translations": {
                    "zh-CN": "给父母打了电话。",
                    "en": "I called my parents."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "给...",
                "meaning": "动作对象助词(给...)",
                "rules": [
                    "人物名词+에게/한테/께"
                ],
                "notes": [
                    "表示'给(某人)'。",
                    "에게(一般)、한테(口语)、께(尊敬)。",
                    "只用于人/动物，地点请用에。"
                ]
            },
            "en": {
                "description": "To (a person)",
                "meaning": "To a person/animal",
                "rules": [
                    "Person + 에게/한테/께"
                ],
                "notes": [
                    "Means 'to (someone)'.",
                    "에게(standard), 한테(casual), 께(honorific).",
                    "Only for people/animals, use 에 for places."
                ]
            }
        }
    },
    {
        "id": "l1_027",
        "category": "L1 - 12과: 이번 휴가에 뭐 할 거예요?",
        "level": "L1",
        "title": "~(으)ㄹ 거예요",
        "examples": [
            {
                "ko": "내일 갈 거예요.",
                "translations": {
                    "zh-CN": "明天要去。",
                    "en": "I'll go tomorrow."
                }
            },
            {
                "ko": "주말에 쉴 거예요.",
                "translations": {
                    "zh-CN": "周末打算休息。",
                    "en": "I'm going to rest on the weekend."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "计划/推测",
                "meaning": "将来时(计划/推测)",
                "rules": [
                    "无收音+ㄹ 거예요",
                    "有收音+을 거예요"
                ],
                "notes": [
                    "将来时/推测。",
                    "第一人称表示自己的计划(갈 거예요)，第二/三人称表示推测(올 거예요)。"
                ]
            },
            "en": {
                "description": "Future tense",
                "meaning": "Future tense (plan/guess)",
                "rules": [
                    "No batchim + ㄹ 거예요",
                    "Batchim + 을 거예요"
                ],
                "notes": [
                    "Future/Guess.",
                    "1st person expresses one's own plan (I will go), 2nd/3rd person expresses a guess (They will probably come)."
                ]
            }
        }
    },
    {
        "id": "l1_028",
        "category": "L1 - 12과: 이번 휴가에 뭐 할 거예요?",
        "level": "L1",
        "title": "~고",
        "examples": [
            {
                "ko": "밥을 먹고 커피를 마셔요.",
                "translations": {
                    "zh-CN": "吃饭然后喝咖啡。",
                    "en": "I eat and drink coffee."
                }
            },
            {
                "ko": "커피는 싸고 맛있어요.",
                "translations": {
                    "zh-CN": "咖啡又便宜又好喝。",
                    "en": "Coffee is cheap and delicious."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "并列或先后",
                "meaning": "并列或先后",
                "rules": [
                    "词干+고"
                ],
                "notes": [
                    "动作的并列或先后顺序'和/然后'。",
                    "前后句没有因果关系。",
                    "如果是因果请用 아/어서。"
                ]
            },
            "en": {
                "description": "And/Then",
                "meaning": "And, and then",
                "rules": [
                    "Stem + 고"
                ],
                "notes": [
                    "Simple 'and / then'.",
                    "Sequential or parallel actions with NO causal relationship.",
                    "For cause-effect, use 아/어서."
                ]
            }
        }
    },
    {
        "id": "l1_029",
        "category": "L1 - 13과: 버스로 공항에 가요",
        "level": "L1",
        "title": "~(으)러 가다/오다",
        "examples": [
            {
                "ko": "먹으러 가요.",
                "translations": {
                    "zh-CN": "去吃饭。",
                    "en": "I go to eat."
                }
            },
            {
                "ko": "책을 빌리러 도서관에 갔어요.",
                "translations": {
                    "zh-CN": "去图书馆借书了。",
                    "en": "Went to the library to borrow books."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "为了做...而去/来",
                "meaning": "为了做...而去/来",
                "rules": [
                    "无收音+러",
                    "有收音+으러"
                ],
                "notes": [
                    "表示移动的目的'去/来做某事'。",
                    "只能和移动动词(가다/오다/다니다)搭配！"
                ]
            },
            "en": {
                "description": "Go/Come to do",
                "meaning": "Go/come for the purpose of",
                "rules": [
                    "No batchim + 러",
                    "Batchim + 으러"
                ],
                "notes": [
                    "Purpose of movement 'going/coming to do..'.",
                    "ONLY pairs with movement verbs (가다/오다/다니다)!."
                ]
            }
        }
    },
    {
        "id": "l1_030",
        "category": "L1 - 13과: 버스로 공항에 가요",
        "level": "L1",
        "title": "~(으)로",
        "examples": [
            {
                "ko": "버스로 가요.",
                "translations": {
                    "zh-CN": "坐公交车去。",
                    "en": "I go by bus."
                }
            },
            {
                "ko": "오른쪽으로 가세요.",
                "translations": {
                    "zh-CN": "请往右边走。",
                    "en": "Go right."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "方向、手段、材料助词",
                "meaning": "方向、手段、材料助词",
                "rules": [
                    "无收音或ㄹ收音+로",
                    "有收音+으로"
                ],
                "notes": [
                    "多功能助词：①方向(왼쪽으로) ②工具/手段(버스로) ③原因(감기로)。",
                    "ㄹ收音后直接用로(서울로)。"
                ]
            },
            "en": {
                "description": "Direction/Method",
                "meaning": "Direction, means, or material",
                "rules": [
                    "No batchim/ㄹ + 로",
                    "Batchim + 으로"
                ],
                "notes": [
                    "Multi-use: ①Direction (왼쪽으로) ②Tool/Means (버스로) ③Cause (감기로).",
                    "After ㄹ batchim, use 로 instead of 으로 (서울로)."
                ]
            }
        }
    },
    {
        "id": "l1_031",
        "category": "L1 - 14과: 저녁 7시에 만날까요?",
        "level": "L1",
        "title": "~(으)ㄹ까요?",
        "examples": [
            {
                "ko": "같이 갈까요?",
                "translations": {
                    "zh-CN": "一起去好吗？",
                    "en": "Shall we go together?"
                }
            },
            {
                "ko": "창문을 열까요?",
                "translations": {
                    "zh-CN": "要不要我开窗？",
                    "en": "Shall I open the window?"
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "提议/询问意见",
                "meaning": "提议/询问意见",
                "rules": [
                    "无收音+ㄹ까요?",
                    "有收音+을까요?"
                ],
                "notes": [
                    "两种用法：①第一人称提议(같이 갈까요? = 一起去吗？) ②询问/猜测意见(비가 올까요? = 会下雨吗？)。"
                ]
            },
            "en": {
                "description": "Shall we?",
                "meaning": "Suggestion or asking opinion",
                "rules": [
                    "No batchim + ㄹ까요?",
                    "Batchim + 을까요?"
                ],
                "notes": [
                    "Two uses: ① 1st person suggestion (Shall we go?) ② Wondering/guessing (Will it rain?)."
                ]
            }
        }
    },
    {
        "id": "l1_032",
        "category": "L1 - 14과: 저녁 7시에 만날까요?",
        "level": "L1",
        "title": "~지 못하다 / 못",
        "examples": [
            {
                "ko": "바빠서 못 갔어요.",
                "translations": {
                    "zh-CN": "太忙没能去。",
                    "en": "Was busy so couldn't go."
                }
            },
            {
                "ko": "시간이 없어서 못 갔어요.",
                "translations": {
                    "zh-CN": "没时间没能去。",
                    "en": "Couldn't go because I had no time."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "做不了",
                "meaning": "客观不能(做不了)",
                "rules": [
                    "못+动词",
                    "词干+지 못하다"
                ],
                "notes": [
                    "表示客观能力不足(不能/没能)。",
                    "区分：못(能力不足无法做) vs 안(主观意愿不想做)。"
                ]
            },
            "en": {
                "description": "Cannot (inability)",
                "meaning": "Cannot (objective inability)",
                "rules": [
                    "못 + Verb",
                    "Stem + 지 못하다"
                ],
                "notes": [
                    "Objective inability (cannot / could not).",
                    "Crucial difference: 못 = inability (can't), 안 = lack of will (won't)."
                ]
            }
        }
    },
    {
        "id": "l1_033",
        "category": "L1 - 15과: 오늘 날씨가 정말 덥네요",
        "level": "L1",
        "title": "~네요",
        "examples": [
            {
                "ko": "날씨가 좋네요!",
                "translations": {
                    "zh-CN": "天气真好呀！",
                    "en": "The weather is nice!"
                }
            },
            {
                "ko": "이 케이크 정말 맛있네요!",
                "translations": {
                    "zh-CN": "这蛋糕真好吃呀！",
                    "en": "This cake is really delicious!"
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "哦！原来...",
                "meaning": "感叹(哦！原来...)",
                "rules": [
                    "动词/形容词+네요"
                ],
                "notes": [
                    "亲身经历的第一手感叹。",
                    "表示说话人刚刚发现某事：맛있네요!(真好吃!-刚吃出味道)。",
                    "不能用于已知信息。"
                ]
            },
            "en": {
                "description": "Exclamation",
                "meaning": "Exclamation of surprise",
                "rules": [
                    "Verb/Adj + 네요"
                ],
                "notes": [
                    "First-hand exclamation of surprise.",
                    "Used when you JUST realized/noticed something: 맛있네요!(Wow it's good!-just tasted it).",
                    "Not for old info."
                ]
            }
        }
    },
    {
        "id": "l1_034",
        "category": "L1 - 15과: 오늘 날씨가 정말 덥네요",
        "level": "L1",
        "title": "~보다",
        "examples": [
            {
                "ko": "사과보다 수박이 더 커요.",
                "translations": {
                    "zh-CN": "西瓜比苹果大。",
                    "en": "Watermelon is bigger than apple."
                }
            },
            {
                "ko": "여름보다 겨울을 좋아해요.",
                "translations": {
                    "zh-CN": "比起夏天更喜欢冬天。",
                    "en": "I prefer winter over summer."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "比较助词",
                "meaning": "比较助词",
                "rules": [
                    "名词+보다"
                ],
                "notes": [
                    "보다后面通常搭配더(更)或덜(没那么)使用。",
                    "比较句型：A보다 B가 더 ~ (比起A，B更~)。"
                ]
            },
            "en": {
                "description": "Than (comparison)",
                "meaning": "Comparison particle",
                "rules": [
                    "Noun + 보다"
                ],
                "notes": [
                    "Usually paired with 더(more) or 덜(less).",
                    "Pattern: A보다 B가 더 ~ (Compared to A, B is more ~)."
                ]
            }
        }
    },
    {
        "id": "l1_035",
        "category": "L1 - 16과: 배가 아파서 병원에 가요",
        "level": "L1",
        "title": "~는 것",
        "examples": [
            {
                "ko": "제 취미는 영화를 보는 것이에요.",
                "translations": {
                    "zh-CN": "我的爱好是看电影。",
                    "en": "My hobby is watching movies."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "...的事情",
                "meaning": "将动词转化为名词（...的事情）",
                "rules": [
                    "动词+는 것"
                ],
                "notes": [
                    "动名词化。",
                    "将动词转化为名词词组，使其可以在句中作主语或宾语。"
                ]
            },
            "en": {
                "description": "Gerund (the act of...)",
                "meaning": "Gerund (the act of...)",
                "rules": [
                    "Verb + 는 것"
                ],
                "notes": [
                    "Turns an action into a noun phrase, similar to '-ing' in English."
                ]
            }
        }
    },
    {
        "id": "l1_036",
        "category": "L1 - 16과: 배가 아파서 병원에 가요",
        "level": "L1",
        "title": "~아/어서",
        "examples": [
            {
                "ko": "비가 와서 집에 있어요.",
                "translations": {
                    "zh-CN": "因为下雨在家。",
                    "en": "It's raining so I'm home."
                }
            },
            {
                "ko": "배가 아파서 병원에 갔어요.",
                "translations": {
                    "zh-CN": "肚子疼所以去了医院。",
                    "en": "Went to the hospital because my stomach hurt."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "因为",
                "meaning": "原因(因为)/先后",
                "rules": [
                    "阳性元音(ㅏ,ㅗ)+아서",
                    "阴性元音(ㅓ,ㅜ,ㅡ,ㅣ)+어서",
                    "하다 → 해서"
                ],
                "notes": [
                    "表示原因'因为'，或动作先后顺序。",
                    "注意：后面绝对不能接命令句或共动句(如세요/ㅂ시다)。"
                ]
            },
            "en": {
                "description": "Because / Then",
                "meaning": "Reason or sequential",
                "rules": [
                    "Bright + 아서",
                    "Dark + 어서",
                    "하다 → 해서 (하다 verb)"
                ],
                "notes": [
                    "Indicates reason 'because', or sequential actions.",
                    "Note: CANNOT be followed by commands or suggestions (like 세요/ㅂ시다)."
                ]
            }
        }
    },
    {
        "id": "l1_037",
        "category": "L1 - 17과: 사진을 찍지 마세요",
        "level": "L1",
        "title": "~(으)로 (방향)",
        "examples": [
            {
                "ko": "오른쪽으로 가세요.",
                "translations": {
                    "zh-CN": "请往右边走。",
                    "en": "Please go to the right."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "方向",
                "meaning": "向，朝 (方向)",
                "rules": [
                    "方向名词+(으)로"
                ],
                "notes": [
                    "方向助词。",
                    "强调移动的朝向或路径（如向左、向右、向前）。"
                ]
            },
            "en": {
                "description": "Toward (direction)",
                "meaning": "Toward (direction)",
                "rules": [
                    "Direction Noun + (으)로"
                ],
                "notes": [
                    "Indicates the direction of movement.",
                    "e.g., '오른쪽으로 가세요' (Go to the right)."
                ]
            }
        }
    },
    {
        "id": "l1_038",
        "category": "L1 - 17과: 사진을 찍지 마세요",
        "level": "L1",
        "title": "~지 말다",
        "examples": [
            {
                "ko": "담배를 피우지 마세요.",
                "translations": {
                    "zh-CN": "请不要吸烟。",
                    "en": "Don't smoke."
                }
            },
            {
                "ko": "여기서 사진 찍지 마세요.",
                "translations": {
                    "zh-CN": "请不要在这里拍照。",
                    "en": "Don't take photos here."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "不要做...",
                "meaning": "禁止(不要做...)",
                "rules": [
                    "词干+지 마세요"
                ],
                "notes": [
                    "否定命令句，表示'别做/请勿做...'。",
                    "只能用于命令/共动句，不能用于陈述句。"
                ]
            },
            "en": {
                "description": "Don't (Prohibition)",
                "meaning": "Prohibition",
                "rules": [
                    "Stem + 지 마세요"
                ],
                "notes": [
                    "Negative imperative meaning 'Don't do..'.",
                    "ONLY used in commands/suggestions.",
                    "Cannot be used in plain statements."
                ]
            }
        }
    },
    {
        "id": "l1_039",
        "category": "L1 - 18과: 한국 생활은 조금 힘든데 재미있어요",
        "level": "L1",
        "title": "~(으)ㄴ/는데",
        "examples": [
            {
                "ko": "날씨가 좋은데 산책할까요?",
                "translations": {
                    "zh-CN": "天气好，散步？",
                    "en": "Weather's nice, walk?"
                }
            },
            {
                "ko": "시간이 있는데 같이 가요.",
                "translations": {
                    "zh-CN": "有时间，一起去吧。",
                    "en": "I have time, let's go together."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "提示背景信息或轻微转折",
                "meaning": "提示背景信息或轻微转折",
                "rules": [
                    "动词+는데",
                    "形容词+ㄴ/은데"
                ],
                "notes": [
                    "韩语最万能的连接词！",
                    "三大用法：①背景铺垫(시간이 있는데...) ②轻微转折(좋은데 비싸요) ③引出话题。"
                ]
            },
            "en": {
                "description": "Background/But",
                "meaning": "Background or soft contrast",
                "rules": [
                    "Verb + 는데",
                    "Adj + ㄴ/은데"
                ],
                "notes": [
                    "The most versatile connector! Uses: ① Background info (시간이 있는데..), ② Soft contrast (좋은데 비싸요), ③ Topic introduction."
                ]
            }
        }
    },
    {
        "id": "l1_040",
        "category": "L1 - 18과: 한국 생활은 조금 힘든데 재미있어요",
        "level": "L1",
        "title": "~(이)지요?",
        "examples": [
            {
                "ko": "학생이지요?",
                "translations": {
                    "zh-CN": "是学生吧？",
                    "en": "You're a student, right?"
                }
            },
            {
                "ko": "오늘 금요일이지요?",
                "translations": {
                    "zh-CN": "今天是周五对吧？",
                    "en": "Today is Friday, right?"
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "是不是/对吧",
                "meaning": "确认语气(是不是/对吧)",
                "rules": [
                    "词干+지요?"
                ],
                "notes": [
                    "寻求对方同意或确认双方都知道的事实。",
                    "口语中常缩写为죠：맛있지요? → 맛있죠?"
                ]
            },
            "en": {
                "description": "Isn't it? / Right?",
                "meaning": "Confirming what you expect",
                "rules": [
                    "Stem + 지요?"
                ],
                "notes": [
                    "Seeking agreement or confirming shared knowledge.",
                    "Shortened to 죠 in casual speech: 맛있지요? → 맛있죠?."
                ]
            }
        }
    },
    {
        "id": "l1_041",
        "category": "L1 - 추가 문법 (Extra Grammar)",
        "level": "L1",
        "title": "~(으)ㅂ시다",
        "examples": [
            {
                "ko": "같이 갑시다.",
                "translations": {
                    "zh-CN": "一起走吧。",
                    "en": "Let's go together."
                }
            },
            {
                "ko": "내일 다시 만납시다.",
                "translations": {
                    "zh-CN": "明天再见吧。",
                    "en": "Let's meet again tomorrow."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "一起...吧",
                "meaning": "共动句(一起...吧)",
                "rules": [
                    "无收音+ㅂ시다",
                    "有收音+읍시다"
                ],
                "notes": [
                    "第一人称复数共动句(我们一起...)。",
                    "不能对长辈使用，对长辈提议请用 ~(으)ㄹ까요?。"
                ]
            },
            "en": {
                "description": "Let's",
                "meaning": "Let's do together",
                "rules": [
                    "No batchim + ㅂ시다",
                    "Batchim + 읍시다"
                ],
                "notes": [
                    "1st person plural suggestion (Let's..).",
                    "CANNOT be used towards elders/superiors.",
                    "Use ~(으)ㄹ까요? instead for polite suggestions."
                ]
            }
        }
    },
    {
        "id": "l1_042",
        "category": "L1 - 추가 문법 (Extra Grammar)",
        "level": "L1",
        "title": "~마다",
        "examples": [
            {
                "ko": "주말마다 운동해요.",
                "translations": {
                    "zh-CN": "每个周末运动。",
                    "en": "I exercise every weekend."
                }
            },
            {
                "ko": "날마다 한국어를 공부해요.",
                "translations": {
                    "zh-CN": "每天学习韩语。",
                    "en": "I study Korean every day."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "每...",
                "meaning": "每...",
                "rules": [
                    "名词+마다"
                ],
                "notes": [
                    "表示'每'。",
                    "直接接在名词后，不需要其他助词：날마다(每天)，사람마다(每个人)。"
                ]
            },
            "en": {
                "description": "Every",
                "meaning": "Every, each",
                "rules": [
                    "Noun + 마다"
                ],
                "notes": [
                    "Means 'every/each'.",
                    "Attaches directly to nouns without other particles: 날마다(every day), 사람마다(each person)."
                ]
            }
        }
    },
    {
        "id": "l1_043",
        "category": "L1 - 추가 문법 (Extra Grammar)",
        "level": "L1",
        "title": "~만",
        "examples": [
            {
                "ko": "물만 마셔요.",
                "translations": {
                    "zh-CN": "只喝水。",
                    "en": "I only drink water."
                }
            },
            {
                "ko": "커피만 마셨어요.",
                "translations": {
                    "zh-CN": "只喝了咖啡。",
                    "en": "I only drank coffee."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "限制助词，只/仅",
                "meaning": "限制助词，只/仅",
                "rules": [
                    "名词+만"
                ],
                "notes": [
                    "替换을/를和이/가，但可以和에、에서叠加(에만/에서만)。",
                    "强调排他性：커피만 마셔요(只喝咖啡)。"
                ]
            },
            "en": {
                "description": "Only",
                "meaning": "Only, just",
                "rules": [
                    "Noun + 만"
                ],
                "notes": [
                    "Replaces 을/를 and 이/가, but stacks with 에/에서 (에만/에서만).",
                    "Emphasizes exclusivity: 커피만 마셔요(Drink ONLY coffee)."
                ]
            }
        }
    },
    {
        "id": "l2_001",
        "category": "L2 - 1과: 제 고향은 경치가 아름다운 곳이에요",
        "level": "L2",
        "title": "~(으)ㄴ (형/동 관형형)",
        "examples": [
            {
                "ko": "예쁜 옷",
                "translations": {
                    "zh-CN": "漂亮的衣服",
                    "en": "Pretty clothes"
                }
            },
            {
                "ko": "어제 먹은 음식",
                "translations": {
                    "zh-CN": "昨天吃的食物",
                    "en": "Food I ate yesterday"
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "形容词定语/动词过去时定语",
                "meaning": "形容词定语/动词过去时定语",
                "rules": [
                    "形容词+ㄴ/은",
                    "动词(过去时)+ㄴ/은"
                ],
                "notes": [
                    "双重身份：①形容词现在时(예쁜 꽃 = 漂亮的花) ②动词过去时(먹은 음식 = 吃过的食物)。"
                ]
            },
            "en": {
                "description": "Adj modifier / Past verb",
                "meaning": "Adj modifier or past verb modifier",
                "rules": [
                    "Adj + ㄴ/은",
                    "Verb(past) + ㄴ/은"
                ],
                "notes": [
                    "Dual role: ① Adjective present (예쁜 꽃 = pretty flower), ② Verb past (먹은 음식 = food I ate)."
                ]
            }
        }
    },
    {
        "id": "l2_002",
        "category": "L2 - 1과: 제 고향은 경치가 아름다운 곳이에요",
        "level": "L2",
        "title": "명-(이)라고 하다",
        "examples": [
            {
                "ko": "저는 안나라고 합니다.",
                "translations": {
                    "zh-CN": "我叫安娜。",
                    "en": "I am called Anna."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "介绍名称",
                "meaning": "叫做... (介绍名称)",
                "rules": [
                    "名词+(이)라고 하다"
                ],
                "notes": [
                    "间接引语基础形式。",
                    "常用于自我介绍或介绍特定事物的名称（“被叫做...”）。"
                ]
            },
            "en": {
                "description": "Is called... (naming)",
                "meaning": "Is called... (naming)",
                "rules": [
                    "Noun + (이)라고 하다"
                ],
                "notes": [
                    "Used to introduce the name of a person or a place."
                ]
            }
        }
    },
    {
        "id": "l2_003",
        "category": "L2 - 2과: 쓰레기는 내가 버릴게요",
        "level": "L2",
        "title": "~(으)ㄴ 다음에",
        "examples": [
            {
                "ko": "숙제를 한 다음에 밥을 먹어요.",
                "translations": {
                    "zh-CN": "做完作业后再吃饭。",
                    "en": "I eat after doing my homework."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "做完...之后",
                "meaning": "做完...之后",
                "rules": [
                    "动词+(으)ㄴ 다음에"
                ],
                "notes": [
                    "时间顺序连词。",
                    "强调前一个动作彻底完成后，再进行后一个动作。"
                ]
            },
            "en": {
                "description": "After doing...",
                "meaning": "After doing...",
                "rules": [
                    "Verb + (으)ㄴ 다음에"
                ],
                "notes": [
                    "Indicates that the action in the following clause happens after the action in the first clause."
                ]
            }
        }
    },
    {
        "id": "l2_004",
        "category": "L2 - 2과: 쓰레기는 내가 버릴게요",
        "level": "L2",
        "title": "~(으)ㄹ게요",
        "examples": [
            {
                "ko": "제가 할게요.",
                "translations": {
                    "zh-CN": "我来做。",
                    "en": "I'll do it."
                }
            },
            {
                "ko": "내일 다시 전화할게요.",
                "translations": {
                    "zh-CN": "明天再打电话给你。",
                    "en": "I'll call again tomorrow."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "我会...",
                "meaning": "意志/承诺(我会...)",
                "rules": [
                    "无收音+ㄹ게요",
                    "有收音+을게요"
                ],
                "notes": [
                    "第一人称专属！",
                    "表示向对方做出承诺/表决心：제가 할게요(我来做)。",
                    "不能用于第三人称。"
                ]
            },
            "en": {
                "description": "I will (promise)",
                "meaning": "Promise/will",
                "rules": [
                    "No batchim + ㄹ게요",
                    "Batchim + 을게요"
                ],
                "notes": [
                    "1st person ONLY! Expresses a promise/commitment to the listener: 제가 할게요 (I will do it).",
                    "Cannot be used for others."
                ]
            }
        }
    },
    {
        "id": "l2_005",
        "category": "L2 - 3과: 이걸로 한번 입어 보세요",
        "level": "L2",
        "title": "~(이)나",
        "examples": [
            {
                "ko": "커피나 주스 드세요.",
                "translations": {
                    "zh-CN": "喝咖啡或果汁吧。",
                    "en": "Have coffee or juice."
                }
            },
            {
                "ko": "2시간이나 기다렸어요.",
                "translations": {
                    "zh-CN": "等了整整两个小时。",
                    "en": "I waited as long as 2 hours."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "或者/大约",
                "meaning": "或者/大约",
                "rules": [
                    "名词+(이)나"
                ],
                "notes": [
                    "两个含义：①选择 '或' (커피나 차) ②强调数量大 (3시간이나 기다렸어요! = 等了整整3个小时！)。"
                ]
            },
            "en": {
                "description": "Or / About",
                "meaning": "Or, approximately",
                "rules": [
                    "Noun + (이)나"
                ],
                "notes": [
                    "Two meanings: ① Choice 'or' (커피나 차), ② Emphasis on large quantity (3시간이나 기다렸어요! = Waited a whole 3 hours!)."
                ]
            }
        }
    },
    {
        "id": "l2_006",
        "category": "L2 - 3과: 이걸로 한번 입어 보세요",
        "level": "L2",
        "title": "~아/어 보다",
        "examples": [
            {
                "ko": "이 옷을 입어 보세요.",
                "translations": {
                    "zh-CN": "请试穿这件。",
                    "en": "Try wearing this."
                }
            },
            {
                "ko": "김치를 먹어 봤어요?",
                "translations": {
                    "zh-CN": "你吃过泡菜吗？",
                    "en": "Have you tried eating kimchi?"
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "尝试做某事/经验",
                "meaning": "尝试做某事/经验",
                "rules": [
                    "动词+아/어 보다"
                ],
                "notes": [
                    "两种含义：①尝试(먹어 보세요=请尝尝) ②经历(가 봤어요=去过)。",
                    "过去时(봤다)常表示经验。"
                ]
            },
            "en": {
                "description": "Try doing",
                "meaning": "Try doing; have experienced",
                "rules": [
                    "Verb + 아/어 보다"
                ],
                "notes": [
                    "Two meanings: ① Try doing (먹어 보세요 = try eating), ② Experience (가 봤어요 = have gone).",
                    "Past tense (봤다) means experience."
                ]
            }
        }
    },
    {
        "id": "l2_007",
        "category": "L2 - 4과: 지금 통화할 수 있어요?",
        "level": "L2",
        "title": "~(으)ㄹ 수 있다/없다",
        "examples": [
            {
                "ko": "한국어를 할 수 있어요.",
                "translations": {
                    "zh-CN": "会说韩语。",
                    "en": "I can speak Korean."
                }
            },
            {
                "ko": "매운 음식을 먹을 수 없어요.",
                "translations": {
                    "zh-CN": "不能吃辣的食物。",
                    "en": "I can't eat spicy food."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "能/不能做某事",
                "meaning": "能/不能做某事",
                "rules": [
                    "无收音+ㄹ 수 있다",
                    "有收音+을 수 있다"
                ],
                "notes": [
                    "能力/可能性'能/不能'。",
                    "수是依存名词，必须和前面的词分写：할 수 있다(✓), 할수있다(✗)。"
                ]
            },
            "en": {
                "description": "Can/Cannot",
                "meaning": "Can/Cannot do",
                "rules": [
                    "No batchim + ㄹ 수 있다",
                    "Batchim + 을 수 있다"
                ],
                "notes": [
                    "Ability/Possibility 'can / cannot'.",
                    "수 is a bound noun and MUST have a space before it: 할 수 있다(✓)."
                ]
            }
        }
    },
    {
        "id": "l2_008",
        "category": "L2 - 4과: 지금 통화할 수 있어요?",
        "level": "L2",
        "title": "반말 (Casual Speech)",
        "examples": [
            {
                "ko": "밥 먹었어?",
                "translations": {
                    "zh-CN": "吃饭了吗？(非敬语)",
                    "en": "Did you eat? (Casual)"
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "非敬语 / 平语",
                "meaning": "非敬语 / 平语",
                "rules": [
                    "去掉'요'，或使用专用平语词汇"
                ],
                "notes": [
                    "平阶/非敬语。",
                    "仅限于亲密朋友、同辈或对晚辈使用，绝对不能对初次见面的人或长辈使用。"
                ]
            },
            "en": {
                "description": "Casual/informal speech",
                "meaning": "Casual/informal speech",
                "rules": [
                    "Drop '요' or use specific casual vocabulary"
                ],
                "notes": [
                    "Used with close friends, younger people, or subordinates."
                ]
            }
        }
    },
    {
        "id": "l2_009",
        "category": "L2 - 5과: 많이 아프면 이 약을 드세요",
        "level": "L2",
        "title": "~(으)면",
        "examples": [
            {
                "ko": "돈이 있으면 살 거예요.",
                "translations": {
                    "zh-CN": "有钱就买。",
                    "en": "If I have money I'll buy it."
                }
            },
            {
                "ko": "시간이 있으면 놀러 오세요.",
                "translations": {
                    "zh-CN": "有时间的话来玩。",
                    "en": "If you have time, come visit."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "如果...的话",
                "meaning": "条件(如果...的话)",
                "rules": [
                    "无收音+면",
                    "有收音+으면"
                ],
                "notes": [
                    "假设条件'如果...'。",
                    "后半句如果是过去时，前面就不能用(으)면。"
                ]
            },
            "en": {
                "description": "If/When",
                "meaning": "If, when",
                "rules": [
                    "No batchim + 면",
                    "Batchim + 으면"
                ],
                "notes": [
                    "Conditional 'if'.",
                    "If the main clause is an already happened past event, you cannot use (으)면."
                ]
            }
        }
    },
    {
        "id": "l2_010",
        "category": "L2 - 5과: 많이 아프면 이 약을 드세요",
        "level": "L2",
        "title": "~아/어서 (순차)",
        "examples": [
            {
                "ko": "친구를 만나서 영화를 봤어요.",
                "translations": {
                    "zh-CN": "见了朋友然后看了电影。",
                    "en": "I met a friend and (then) watched a movie."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "先后顺序",
                "meaning": "然后 (先后顺序)",
                "rules": [
                    "动词+아/어서"
                ],
                "notes": [
                    "动作的先后顺序。",
                    "前后动作具有强烈的连贯性和逻辑关系，不能随意调换顺序。"
                ]
            },
            "en": {
                "description": "And then (sequential)",
                "meaning": "And then (sequential)",
                "rules": [
                    "Verb + 아/어서"
                ],
                "notes": [
                    "Connects two actions where the first action is a prerequisite or leads into the second action."
                ]
            }
        }
    },
    {
        "id": "l2_011",
        "category": "L2 - 6과: 맛있는 음식을 먹을 때 행복해요",
        "level": "L2",
        "title": "~(으)ㄹ 때",
        "examples": [
            {
                "ko": "밥 먹을 때 음악 들어요.",
                "translations": {
                    "zh-CN": "吃饭时听音乐。",
                    "en": "I listen to music when eating."
                }
            },
            {
                "ko": "어릴 때 한국에 살았어요.",
                "translations": {
                    "zh-CN": "小时候住在韩国。",
                    "en": "I lived in Korea when I was young."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "做...的时候",
                "meaning": "做...的时候",
                "rules": [
                    "无收音+ㄹ 때",
                    "有收音+을 때"
                ],
                "notes": [
                    "表示时间'在...时候'。",
                    "前面可接各种时态的定语形：은/ㄴ 때(过去), 는 때(现在), 을/ㄹ 때(将来)。"
                ]
            },
            "en": {
                "description": "When doing",
                "meaning": "When, at the time of",
                "rules": [
                    "No batchim + ㄹ 때",
                    "Batchim + 을 때"
                ],
                "notes": [
                    "Time 'when'.",
                    "Can be preceded by any tense modifier: 은/ㄴ 때 (past), 는 때 (present), 을/ㄹ 때 (future)."
                ]
            }
        }
    },
    {
        "id": "l2_012",
        "category": "L2 - 6과: 맛있는 음식을 먹을 때 행복해요",
        "level": "L2",
        "title": "~겠-",
        "examples": [
            {
                "ko": "내일 비가 오겠습니다.",
                "translations": {
                    "zh-CN": "明天应该会下雨。",
                    "en": "It will probably rain tomorrow."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "打算 / 猜测",
                "meaning": "打算 / 猜测",
                "rules": [
                    "动词/形容词+겠"
                ],
                "notes": [
                    "意志与推测。",
                    "主语是第一人称时表示坚定的意志（“我一定会”），第三人称时表示推测（“应该会”）。"
                ]
            },
            "en": {
                "description": "Intention / Guess",
                "meaning": "Intention / Guess",
                "rules": [
                    "Verb/Adj + 겠"
                ],
                "notes": [
                    "Used to express the speaker's firm intention (I will) or to make a guess based on the situation."
                ]
            }
        }
    },
    {
        "id": "l2_013",
        "category": "L2 - 7과: 집들이니까 세제나 휴지를 가져갈게요",
        "level": "L2",
        "title": "~(으)ㄹ래요",
        "examples": [
            {
                "ko": "저는 커피 마실래요.",
                "translations": {
                    "zh-CN": "我想喝咖啡。",
                    "en": "I'll have coffee."
                }
            },
            {
                "ko": "저는 집에 있을래요.",
                "translations": {
                    "zh-CN": "我想待在家里。",
                    "en": "I want to stay home."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "口语",
                "meaning": "想要做...(口语)",
                "rules": [
                    "动词+(으)ㄹ래요"
                ],
                "notes": [
                    "轻松的口语意愿表达(我想...)。",
                    "第一人称表意愿，第二人称表询问。",
                    "比겠어요更随意。"
                ]
            },
            "en": {
                "description": "I want to (casual)",
                "meaning": "Casual intention",
                "rules": [
                    "Verb + (으)ㄹ래요"
                ],
                "notes": [
                    "Casual 'wanna / intend to'.",
                    "1st person for intention, 2nd person for asking preference.",
                    "More casual than 겠어요."
                ]
            }
        }
    },
    {
        "id": "l2_014",
        "category": "L2 - 7과: 집들이니까 세제나 휴지를 가져갈게요",
        "level": "L2",
        "title": "~(으)니까",
        "examples": [
            {
                "ko": "추우니까 문 닫으세요.",
                "translations": {
                    "zh-CN": "冷，请关门。",
                    "en": "It's cold, close the door."
                }
            },
            {
                "ko": "시간이 없으니까 빨리 가세요.",
                "translations": {
                    "zh-CN": "没时间了，请快走。",
                    "en": "There's no time, so go quickly."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "可接命令/共动",
                "meaning": "主观原因(可接命令/共动)",
                "rules": [
                    "无收音+니까",
                    "有收音+으니까"
                ],
                "notes": [
                    "强调主观原因'因为'。",
                    "与아/어서不同，它可以完美接命令句和共动句(추우니까 문 닫으세요)。"
                ]
            },
            "en": {
                "description": "Because (subjective)",
                "meaning": "Subjective reason",
                "rules": [
                    "No batchim + 니까",
                    "Batchim + 으니까"
                ],
                "notes": [
                    "Subjective reason.",
                    "Unlike 아/어서, it CAN and OFTEN IS followed by commands/suggestions (추우니까 문 닫으세요)."
                ]
            }
        }
    },
    {
        "id": "l2_015",
        "category": "L2 - 8과: 9월부터 한국어 수업을 듣기로 했어요",
        "level": "L2",
        "title": "~(으)ㄴ 후에 / ~기 전에",
        "examples": [
            {
                "ko": "밥 먹기 전에 손을 씻어요.",
                "translations": {
                    "zh-CN": "饭前洗手。",
                    "en": "Wash hands before eating."
                }
            },
            {
                "ko": "운동한 후에 샤워해요.",
                "translations": {
                    "zh-CN": "运动完之后洗澡。",
                    "en": "I shower after exercising."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "...之后/...之前",
                "meaning": "...之后/...之前",
                "rules": [
                    "动词(过去时)+ㄴ/은 후에",
                    "动词+기 전에"
                ],
                "notes": [
                    "时间顺序：V+ㄴ 후에(之后) / V+기 전에(之前)。",
                    "注意定语形不要搞反。"
                ]
            },
            "en": {
                "description": "After/Before",
                "meaning": "After doing / Before doing",
                "rules": [
                    "Verb(past) + ㄴ/은 후에",
                    "Verb + 기 전에 (before)"
                ],
                "notes": [
                    "Time sequence: V+ㄴ 후에 (after doing) / V+기 전에 (before doing).",
                    "Make sure not to mix up the modifiers."
                ]
            }
        }
    },
    {
        "id": "l2_016",
        "category": "L2 - 8과: 9월부터 한국어 수업을 듣기로 했어요",
        "level": "L2",
        "title": "~기로 하다",
        "examples": [
            {
                "ko": "한국어를 배우기로 했어요.",
                "translations": {
                    "zh-CN": "决定学韩语。",
                    "en": "I decided to learn Korean."
                }
            },
            {
                "ko": "내일 만나기로 했어요.",
                "translations": {
                    "zh-CN": "约好了明天见面。",
                    "en": "We decided to meet tomorrow."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "决定做...",
                "meaning": "决定做...",
                "rules": [
                    "动词+기로 하다"
                ],
                "notes": [
                    "表示正式的决定，常用于商量好的结果(决定做...)。",
                    "通常用过去时 기로 했다。"
                ]
            },
            "en": {
                "description": "Decide to",
                "meaning": "Decide to do",
                "rules": [
                    "Verb + 기로 하다"
                ],
                "notes": [
                    "Firm decision, often a mutual agreement (decided to do..).",
                    "Usually used in past tense: 기로 했다."
                ]
            }
        }
    },
    {
        "id": "l2_017",
        "category": "L2 - 9과: 근처에 자주 가는 식당이 있어요",
        "level": "L2",
        "title": "~(으)ㄹ 것 같다",
        "examples": [
            {
                "ko": "비가 올 것 같아요.",
                "translations": {
                    "zh-CN": "好像要下雨。",
                    "en": "It seems like it'll rain."
                }
            },
            {
                "ko": "내일 날씨가 좋을 것 같아요.",
                "translations": {
                    "zh-CN": "明天天气好像会不错。",
                    "en": "It seems the weather will be nice tomorrow."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "好像...",
                "meaning": "推测(好像...)",
                "rules": [
                    "动词/形容词+(으)ㄹ/ㄴ/는 것 같다"
                ],
                "notes": [
                    "最通用的推测表达。",
                    "三种时态都能用：과거(ㄴ/은 것 같다)、현재(는 것 같다)、미래(ㄹ 것 같다)。"
                ]
            },
            "en": {
                "description": "It seems like",
                "meaning": "Guess/supposition",
                "rules": [
                    "Verb/Adj + (으)ㄹ/ㄴ/는 것 같다"
                ],
                "notes": [
                    "Most versatile guess expression.",
                    "Supports all 3 tenses: Past (ㄴ/은 것 같다), Present (는 것 같다), Future (ㄹ 것 같다)."
                ]
            }
        }
    },
    {
        "id": "l2_018",
        "category": "L2 - 9과: 근처에 자주 가는 식당이 있어요",
        "level": "L2",
        "title": "~는 (동사 관형형)",
        "examples": [
            {
                "ko": "지금 먹는 음식",
                "translations": {
                    "zh-CN": "正在吃的食物",
                    "en": "Food I'm eating now"
                }
            },
            {
                "ko": "제가 좋아하는 노래예요.",
                "translations": {
                    "zh-CN": "是我喜欢的歌。",
                    "en": "It's a song I like."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "做...的名词",
                "meaning": "动词现在时定语词尾(做...的名词)",
                "rules": [
                    "动词+는"
                ],
                "notes": [
                    "现在时定语后缀。",
                    "只能接在动词后面(먹는 사람)。",
                    "形容词请用 ㄴ/은。"
                ]
            },
            "en": {
                "description": "Verb modifier (present)",
                "meaning": "Present tense verb modifier",
                "rules": [
                    "Verb + 는"
                ],
                "notes": [
                    "Present tense noun modifier.",
                    "Attaches ONLY to verbs (먹는 사람 = person eating).",
                    "For adjectives, use ㄴ/은."
                ]
            }
        }
    },
    {
        "id": "l2_019",
        "category": "L2 - 10과: 시청 옆에 있는데 가까워요",
        "level": "L2",
        "title": "~(으)ㄴ/는데 (배경)",
        "examples": [
            {
                "ko": "시청 옆에 있는데 가까워요.",
                "translations": {
                    "zh-CN": "在市政厅旁边，很近。",
                    "en": "It's next to City Hall, so it's close."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "引出话题的背景",
                "meaning": "引出话题的背景",
                "rules": [
                    "动词+는데 / 形容词+(으)ㄴ데"
                ],
                "notes": [
                    "提示背景。",
                    "在提出建议、请求或问题之前，先铺垫相关的背景信息。"
                ]
            },
            "en": {
                "description": "Background information",
                "meaning": "Background information",
                "rules": [
                    "Verb + 는데 / Adj + (으)ㄴ데"
                ],
                "notes": [
                    "Provides background context before making a suggestion, asking a question, or giving a command."
                ]
            }
        }
    },
    {
        "id": "l2_020",
        "category": "L2 - 10과: 시청 옆에 있는데 가까워요",
        "level": "L2",
        "title": "~때문에/~기 때문에",
        "examples": [
            {
                "ko": "비 때문에 못 갔어요.",
                "translations": {
                    "zh-CN": "因为雨没能去。",
                    "en": "Couldn't go because of rain."
                }
            },
            {
                "ko": "바쁘기 때문에 못 만나요.",
                "translations": {
                    "zh-CN": "因为忙不能见面。",
                    "en": "Can't meet because I'm busy."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "客观原因",
                "meaning": "因为(客观原因)",
                "rules": [
                    "名词+때문에",
                    "动词/形容词+기 때문에"
                ],
                "notes": [
                    "强调客观原因'由于/因为'。",
                    "名词+때문에，动/形+기 때문에。",
                    "可搭配命令句。"
                ]
            },
            "en": {
                "description": "Because of",
                "meaning": "Because of (objective reason)",
                "rules": [
                    "Noun + 때문에",
                    "Verb/Adj + 기 때문에"
                ],
                "notes": [
                    "Emphasizes objective reason 'due to'.",
                    "Noun+때문에, Verb/Adj+기 때문에.",
                    "Can be used with commands, unlike 아/어서."
                ]
            }
        }
    },
    {
        "id": "l2_021",
        "category": "L2 - 11과: 보름달을 보면서 소원을 빌어요",
        "level": "L2",
        "title": "~(으)면서",
        "examples": [
            {
                "ko": "음악을 들으면서 공부해요.",
                "translations": {
                    "zh-CN": "一边听音乐一边学习。",
                    "en": "Study while listening to music."
                }
            },
            {
                "ko": "밥을 먹으면서 이야기해요.",
                "translations": {
                    "zh-CN": "一边吃饭一边聊天。",
                    "en": "We talk while eating."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "一边...一边",
                "meaning": "同时进行(一边...一边)",
                "rules": [
                    "无收音+면서",
                    "有收音+으면서"
                ],
                "notes": [
                    "表示两个动作同时进行'一边...一边...'。",
                    "核心规则：前后主语必须是同一个人！"
                ]
            },
            "en": {
                "description": "While doing",
                "meaning": "While doing simultaneously",
                "rules": [
                    "No batchim + 면서",
                    "Batchim + 으면서"
                ],
                "notes": [
                    "Simultaneous actions 'while'.",
                    "Core rule: The subject of both clauses MUST be the exactly same person!."
                ]
            }
        }
    },
    {
        "id": "l2_022",
        "category": "L2 - 11과: 보름달을 보면서 소원을 빌어요",
        "level": "L2",
        "title": "~게 (부사화)",
        "examples": [
            {
                "ko": "옷을 따뜻하게 입으세요.",
                "translations": {
                    "zh-CN": "请穿暖和一点。",
                    "en": "Please dress warmly."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "副词化",
                "meaning": "地 (副词化)",
                "rules": [
                    "形容词+게"
                ],
                "notes": [
                    "状态修饰。",
                    "将形容词转化为副词，用来修饰后面的动词（如“穿得暖和”）。"
                ]
            },
            "en": {
                "description": "Adverbial suffix (-ly)",
                "meaning": "Adverbial suffix (-ly)",
                "rules": [
                    "Adj + 게"
                ],
                "notes": [
                    "Turns an adjective into an adverb to modify a following verb."
                ]
            }
        }
    },
    {
        "id": "l2_023",
        "category": "L2 - 12과: 실수를 자주 하는 편이에요",
        "level": "L2",
        "title": "~(으)ㄴ 적이 있다/없다",
        "examples": [
            {
                "ko": "한국에 간 적이 있어요.",
                "translations": {
                    "zh-CN": "去过韩国。",
                    "en": "I've been to Korea."
                }
            },
            {
                "ko": "스키를 탄 적이 없어요.",
                "translations": {
                    "zh-CN": "没有滑过雪。",
                    "en": "I've never skied."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "曾经做过/没做过",
                "meaning": "曾经做过/没做过",
                "rules": [
                    "动词+ㄴ/은 적이 있다"
                ],
                "notes": [
                    "表示经验(曾经做过/没做过)。",
                    "必须搭配过去定语形ㄴ/은：먹은 적(✓), 먹는 적(✗)。"
                ]
            },
            "en": {
                "description": "Have experienced",
                "meaning": "Have/haven't experienced",
                "rules": [
                    "Verb + ㄴ/은 적이 있다"
                ],
                "notes": [
                    "Past experience (have done / haven't done).",
                    "MUST use past modifier ㄴ/은: 먹은 적(✓), 먹는 적(✗)."
                ]
            }
        }
    },
    {
        "id": "l2_024",
        "category": "L2 - 12과: 실수를 자주 하는 편이에요",
        "level": "L2",
        "title": "~는 편이다",
        "examples": [
            {
                "ko": "저는 실수를 자주 하는 편이에요.",
                "translations": {
                    "zh-CN": "我算是经常犯错的类型。",
                    "en": "I tend to make mistakes often."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "算是...的一边 / 偏向于...",
                "meaning": "算是...的一边 / 偏向于...",
                "rules": [
                    "动词+는 편이다 / 形容词+(으)ㄴ 편이다"
                ],
                "notes": [
                    "委婉表达。",
                    "不作绝对断定，而是表示“某种程度上倾向于...”，语气更加柔和。"
                ]
            },
            "en": {
                "description": "Tend to / On the ... side",
                "meaning": "Tend to / On the ... side",
                "rules": [
                    "Verb + 는 편이다 / Adj + (으)ㄴ 편이다"
                ],
                "notes": [
                    "Used to state a characteristic or tendency gently rather than making an absolute statement."
                ]
            }
        }
    },
    {
        "id": "l2_025",
        "category": "L2 - 13과: 소포를 보내려고 하는데요",
        "level": "L2",
        "title": "~(으)려고",
        "examples": [
            {
                "ko": "취직하려고 한국어를 배워요.",
                "translations": {
                    "zh-CN": "为了就业学韩语。",
                    "en": "Learn Korean to get a job."
                }
            },
            {
                "ko": "건강해지려고 매일 운동해요.",
                "translations": {
                    "zh-CN": "为了变健康每天运动。",
                    "en": "I exercise daily to get healthy."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "为了做...",
                "meaning": "为了做...",
                "rules": [
                    "无收音+려고",
                    "有收音+으려고"
                ],
                "notes": [
                    "表示目的'为了...'。",
                    "核心限制：后面绝对不能接命令句或共动句(세요/ㅂ시다)！"
                ]
            },
            "en": {
                "description": "In order to",
                "meaning": "In order to",
                "rules": [
                    "No batchim + 려고",
                    "Batchim + 으려고"
                ],
                "notes": [
                    "Purpose 'in order to'.",
                    "Strict limitation: CANNOT be followed by commands or suggestions (세요/ㅂ시다)!."
                ]
            }
        }
    },
    {
        "id": "l2_026",
        "category": "L2 - 13과: 소포를 보내려고 하는데요",
        "level": "L2",
        "title": "~(으)려고 하다",
        "examples": [
            {
                "ko": "한국에 가려고 해요.",
                "translations": {
                    "zh-CN": "打算去韩国。",
                    "en": "I plan to go to Korea."
                }
            },
            {
                "ko": "주말에 여행을 가려고 해요.",
                "translations": {
                    "zh-CN": "打算周末去旅行。",
                    "en": "I plan to travel on the weekend."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "打算做...",
                "meaning": "打算做...",
                "rules": [
                    "无收音+려고 하다",
                    "有收音+으려고 하다"
                ],
                "notes": [
                    "表示打算/意图，还没有行动。",
                    "比기로 하다更不确定。",
                    "也可表示'正打算...'：가려고 했는데 (正打算去但...)。"
                ]
            },
            "en": {
                "description": "Plan to/Intend to",
                "meaning": "Intend/plan to do",
                "rules": [
                    "No batchim + 려고 하다",
                    "Batchim + 으려고 하다"
                ],
                "notes": [
                    "Intent/plan, not yet executed.",
                    "Less certain than 기로 하다.",
                    "Also implies 'was about to': 가려고 했는데 (I was about to go but..)."
                ]
            }
        }
    },
    {
        "id": "l2_027",
        "category": "L2 - 13과: 소포를 보내려고 하는데요",
        "level": "L2",
        "title": "~아/어야 되다(하다)",
        "examples": [
            {
                "ko": "공부해야 돼요.",
                "translations": {
                    "zh-CN": "必须学习。",
                    "en": "I must study."
                }
            },
            {
                "ko": "9시까지 와야 돼요.",
                "translations": {
                    "zh-CN": "必须9点之前来。",
                    "en": "You have to come by 9."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "必须做...",
                "meaning": "必须做...",
                "rules": [
                    "阳性元音(ㅏ,ㅗ)+아야 되다",
                    "阴性元音(ㅓ,ㅜ,ㅡ,ㅣ)+어야 되다"
                ],
                "notes": [
                    "义务要求'必须/应该'。",
                    "되다和하다可以互换， 되다更偏口语。",
                    "否定是：안 해도 되다(不用做)。"
                ]
            },
            "en": {
                "description": "Must/Have to",
                "meaning": "Must, have to",
                "rules": [
                    "Bright + 아야 되다",
                    "Dark + 어야 되다"
                ],
                "notes": [
                    "Obligation 'must / have to'.",
                    "되다 and 하다 are interchangeable.",
                    "Negation is 안 해도 되다 (don't have to)."
                ]
            }
        }
    },
    {
        "id": "l2_028",
        "category": "L2 - 14과: 비자 연장 신청을 하려면 어떻게 해야 돼요?",
        "level": "L2",
        "title": "~(으)려면",
        "examples": [
            {
                "ko": "한국어를 잘하려면 많이 연습해야 해요.",
                "translations": {
                    "zh-CN": "想学好韩语就得多练。",
                    "en": "To be good at Korean you must practice."
                }
            },
            {
                "ko": "건강하려면 잘 먹어야 해요.",
                "translations": {
                    "zh-CN": "想要健康就得好好吃。",
                    "en": "To be healthy you must eat well."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "要想做...的话",
                "meaning": "要想做...的话",
                "rules": [
                    "动词+(으)려면"
                ],
                "notes": [
                    "条件假设'如果想要...'。",
                    "是 ~(으)려고 하면 的缩写。",
                    "后面通常接必须满足的条件或建议。"
                ]
            },
            "en": {
                "description": "If you want to",
                "meaning": "If one intends to",
                "rules": [
                    "Verb + (으)려면"
                ],
                "notes": [
                    "Intention condition 'if you intend to..'.",
                    "Short for ~(으)려고 하면.",
                    "Usually followed by necessary conditions or advice."
                ]
            }
        }
    },
    {
        "id": "l2_029",
        "category": "L2 - 14과: 비자 연장 신청을 하려면 어떻게 해야 돼요?",
        "level": "L2",
        "title": "~아/어도 되다",
        "examples": [
            {
                "ko": "앉아도 돼요?",
                "translations": {
                    "zh-CN": "可以坐吗？",
                    "en": "May I sit?"
                }
            },
            {
                "ko": "사진 찍어도 돼요?",
                "translations": {
                    "zh-CN": "可以拍照吗？",
                    "en": "May I take a photo?"
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "做...也可以",
                "meaning": "许可(做...也可以)",
                "rules": [
                    "动词+아/어도 되다"
                ],
                "notes": [
                    "许可'可以做...'。",
                    "提问：해도 돼요?(可以吗?)。",
                    "禁止回答：(으)면 안 돼요(不可以)，而不是 아/어도 안 돼요。"
                ]
            },
            "en": {
                "description": "May / Permission",
                "meaning": "Permission (may/can)",
                "rules": [
                    "Verb + 아/어도 되다"
                ],
                "notes": [
                    "Permission 'may / allowed to'.",
                    "To forbid, use (으)면 안 돼요 (you may not), NOT 아/어도 안 돼요."
                ]
            }
        }
    },
    {
        "id": "l2_030",
        "category": "L2 - 15과: 무역 회사에서 번역 일을 하고 있어요",
        "level": "L2",
        "title": "~(으)ㄴ (과거 관형형)",
        "examples": [
            {
                "ko": "어제 본 영화가 재미있었어요.",
                "translations": {
                    "zh-CN": "昨天看的电影很有趣。",
                    "en": "The movie I watched yesterday was interesting."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "过去时",
                "meaning": "修饰名词 (过去时)",
                "rules": [
                    "动词+(으)ㄴ+名词"
                ],
                "notes": [
                    "过去时定语。",
                    "用于修饰名词，表示该动作已经在过去发生或完成。"
                ]
            },
            "en": {
                "description": "Noun modifier (Past tense)",
                "meaning": "Noun modifier (Past tense)",
                "rules": [
                    "Verb + (으)ㄴ + Noun"
                ],
                "notes": [
                    "Modifies a noun with an action that occurred in the past (e.g., 어제 먹은 빵)."
                ]
            }
        }
    },
    {
        "id": "l2_031",
        "category": "L2 - 15과: 무역 회사에서 번역 일을 하고 있어요",
        "level": "L2",
        "title": "~고 있다",
        "examples": [
            {
                "ko": "책을 읽고 있어요.",
                "translations": {
                    "zh-CN": "正在读书。",
                    "en": "I'm reading a book."
                }
            },
            {
                "ko": "지금 한국어를 공부하고 있어요.",
                "translations": {
                    "zh-CN": "现在正在学韩语。",
                    "en": "I'm studying Korean right now."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "正在",
                "meaning": "现在进行时(正在)",
                "rules": [
                    "动词+고 있다"
                ],
                "notes": [
                    "动作正在进行中。",
                    "注意与 아/어 있다(结果状态保持)区分。",
                    "앉고 있다(正坐下去) vs 앉아 있다(正坐着)。"
                ]
            },
            "en": {
                "description": "Progressive",
                "meaning": "Present progressive",
                "rules": [
                    "Verb + 고 있다"
                ],
                "notes": [
                    "Action in progress.",
                    "Do not confuse with 아/어 있다 (resulting state).",
                    "앉고 있다 (in the act of sitting) vs 앉아 있다 (currently seated)."
                ]
            }
        }
    },
    {
        "id": "l2_032",
        "category": "L2 - 16과: 그 행사에는 가족이나 친구를 데려가도 되거든요",
        "level": "L2",
        "title": "~(으)ㄹ (미래 관형형)",
        "examples": [
            {
                "ko": "내일 먹을 음식",
                "translations": {
                    "zh-CN": "明天要吃的食物",
                    "en": "Food I'll eat tomorrow"
                }
            },
            {
                "ko": "읽을 책이 많아요.",
                "translations": {
                    "zh-CN": "要看的书很多。",
                    "en": "I have many books to read."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "动词将来时定语词尾",
                "meaning": "动词将来时定语词尾",
                "rules": [
                    "无收音+ㄹ",
                    "有收音+을"
                ],
                "notes": [
                    "将来时定语后缀。",
                    "不仅表示将来，还可表示推测或意图(올 사람 = 可能会来的人 / 할 일 = 要做的事)。"
                ]
            },
            "en": {
                "description": "Future modifier",
                "meaning": "Future tense verb modifier",
                "rules": [
                    "No batchim + ㄹ",
                    "Batchim + 을"
                ],
                "notes": [
                    "Future modifier.",
                    "Also expresses guess or intention (올 사람 = person who'll come / 할 일 = things to do)."
                ]
            }
        }
    },
    {
        "id": "l2_033",
        "category": "L2 - 16과: 그 행사에는 가족이나 친구를 데려가도 되거든요",
        "level": "L2",
        "title": "~거든(요)",
        "examples": [
            {
                "ko": "오늘은 못 만나요. 바쁘거든요.",
                "translations": {
                    "zh-CN": "今天不能见面，因为忙。",
                    "en": "Can't meet today. I'm busy."
                }
            },
            {
                "ko": "내일은 바빠요. 시험이 있거든요.",
                "translations": {
                    "zh-CN": "明天忙。因为有考试。",
                    "en": "I'm busy tomorrow. I have an exam, you see."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "你知道吗其实是...",
                "meaning": "解释理由(你知道吗其实是...)",
                "rules": [
                    "动词/形容词+거든요"
                ],
                "notes": [
                    "用于在句末补充说明原因(因为...)。",
                    "通常放在第二句话，绝不用于段落开头。"
                ]
            },
            "en": {
                "description": "Because (explanation)",
                "meaning": "Giving reason/explanation",
                "rules": [
                    "Verb/Adj + 거든요"
                ],
                "notes": [
                    "Provides a reason as an afterthought.",
                    "Always sentence-final (못 가요.",
                    "바쁘거든요 = Can't go.",
                    "Because I'm busy).",
                    "Never starts a paragraph."
                ]
            }
        }
    },
    {
        "id": "l2_034",
        "category": "L2 - 17과: 잠을 푹 자면 좋겠어요",
        "level": "L2",
        "title": "~았/었으면 좋겠다",
        "examples": [
            {
                "ko": "내일 날씨가 좋았으면 좋겠어요.",
                "translations": {
                    "zh-CN": "希望明天天气好。",
                    "en": "I hope the weather is good tomorrow."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "希望",
                "meaning": "要是...就好了 (希望)",
                "rules": [
                    "动词/形容词+았/었으면 좋겠다"
                ],
                "notes": [
                    "强烈愿望。",
                    "表达希望某事发生或某状态实现的期盼。"
                ]
            },
            "en": {
                "description": "I wish / It would be great if...",
                "meaning": "I wish / It would be great if...",
                "rules": [
                    "Verb/Adj + 았/었으면 좋겠다"
                ],
                "notes": [
                    "Expresses a strong desire, hope, or wish for something to happen."
                ]
            }
        }
    },
    {
        "id": "l2_035",
        "category": "L2 - 17과: 잠을 푹 자면 좋겠어요",
        "level": "L2",
        "title": "~에 (단위/기준)",
        "examples": [
            {
                "ko": "일주일에 한 번 운동해요.",
                "translations": {
                    "zh-CN": "一周运动一次。",
                    "en": "I exercise once a week."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "计算单位",
                "meaning": "每... (计算单位)",
                "rules": [
                    "单位名词+에"
                ],
                "notes": [
                    "计量基准助词。",
                    "通常与表示频率或价格的词连用（如“一天三次”、“一个多少钱”）。"
                ]
            },
            "en": {
                "description": "Per / For every (Unit)",
                "meaning": "Per / For every (Unit)",
                "rules": [
                    "Unit Noun + 에"
                ],
                "notes": [
                    "Used with quantity or frequency to mean 'per' or 'a' (e.g., 일주일에 두 번 - twice a week)."
                ]
            }
        }
    },
    {
        "id": "l2_036",
        "category": "L2 - 18과: 이 수업을 신청하는 게 어때요?",
        "level": "L2",
        "title": "~는 게 어때요?",
        "examples": [
            {
                "ko": "이 수업을 신청하는 게 어때요?",
                "translations": {
                    "zh-CN": "申请这门课怎么样？",
                    "en": "How about registering for this class?"
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "建议",
                "meaning": "做...怎么样？(建议)",
                "rules": [
                    "动词+는 게 어때요?"
                ],
                "notes": [
                    "委婉建议。",
                    "用询问对方意见的方式提出自己的建议，比直接命令更礼貌。"
                ]
            },
            "en": {
                "description": "How about doing...?",
                "meaning": "How about doing...?",
                "rules": [
                    "Verb + 는 게 어때요?"
                ],
                "notes": [
                    "A soft and polite way to suggest an action to someone."
                ]
            }
        }
    },
    {
        "id": "l2_037",
        "category": "L2 - 18과: 이 수업을 신청하는 게 어때요?",
        "level": "L2",
        "title": "~아/어 보이다",
        "examples": [
            {
                "ko": "옷이 좀 작아 보여요.",
                "translations": {
                    "zh-CN": "衣服看起来有点小。",
                    "en": "The clothes look a bit small."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "看起来...",
                "meaning": "看起来...",
                "rules": [
                    "形容词+아/어 보이다"
                ],
                "notes": [
                    "视觉推测。",
                    "基于眼睛看到的外观或状态进行主观推断（“看起来...”）。"
                ]
            },
            "en": {
                "description": "Looks / Appears to be...",
                "meaning": "Looks / Appears to be...",
                "rules": [
                    "Adj + 아/어 보이다"
                ],
                "notes": [
                    "Expresses the speaker's feeling or guess upon seeing something or someone."
                ]
            }
        }
    },
    {
        "id": "l2_038",
        "category": "L2 - 추가 문법 (Extra Grammar)",
        "level": "L2",
        "title": "~(으)ㄴ 지",
        "examples": [
            {
                "ko": "한국에 온 지 3년 됐어요.",
                "translations": {
                    "zh-CN": "来韩国已经3年了。",
                    "en": "It's been 3 years since I came to Korea."
                }
            },
            {
                "ko": "결혼한 지 10년 됐어요.",
                "translations": {
                    "zh-CN": "结婚已经10年了。",
                    "en": "It's been 10 years since I got married."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "从做...以来过了多久",
                "meaning": "从做...以来过了多久",
                "rules": [
                    "动词+ㄴ/은 지"
                ],
                "notes": [
                    "表示做某事过去了多久'自从...以来'。",
                    "固定搭配：V+ㄴ 지 + 时间量词 + 되다/지나다/넘다。"
                ]
            },
            "en": {
                "description": "Since (time)",
                "meaning": "Time since doing",
                "rules": [
                    "Verb + ㄴ/은 지"
                ],
                "notes": [
                    "Time elapsed 'since..'.",
                    "Fixed pattern: V+ㄴ 지 + time span + 되다/지나다/넘다 (e.g., 온 지 3년 됐어요 = 3 years since coming)."
                ]
            }
        }
    },
    {
        "id": "l2_039",
        "category": "L2 - 추가 문법 (Extra Grammar)",
        "level": "L2",
        "title": "~거나",
        "examples": [
            {
                "ko": "주말에 영화를 보거나 쇼핑해요.",
                "translations": {
                    "zh-CN": "周末看电影或购物。",
                    "en": "On weekends I watch movies or shop."
                }
            },
            {
                "ko": "읽거나 쓰거나 해요.",
                "translations": {
                    "zh-CN": "读书或者写字。",
                    "en": "I read or write."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "动词连接",
                "meaning": "或者(动词连接)",
                "rules": [
                    "动词/形容词+거나"
                ],
                "notes": [
                    "选择关系'或者'。",
                    "用于动词/形容词，连接的两个选项没有优先级。",
                    "名词之间的选择用 (이)나。"
                ]
            },
            "en": {
                "description": "Or (verbs)",
                "meaning": "Or (connects verbs/adj)",
                "rules": [
                    "Verb/Adj + 거나"
                ],
                "notes": [
                    "Choice 'or'.",
                    "Used for Verbs/Adjectives, indicates equal alternatives.",
                    "For Nouns, use (이)나."
                ]
            }
        }
    },
    {
        "id": "l2_040",
        "category": "L2 - 추가 문법 (Extra Grammar)",
        "level": "L2",
        "title": "~는 동안",
        "examples": [
            {
                "ko": "기다리는 동안 커피 마실까요?",
                "translations": {
                    "zh-CN": "等的时候喝杯咖啡？",
                    "en": "Shall we drink coffee while waiting?"
                }
            },
            {
                "ko": "엄마가 요리하는 동안 아이가 놀았어요.",
                "translations": {
                    "zh-CN": "妈妈做饭的时候孩子在玩。",
                    "en": "The child played while mom cooked."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "在做...的期间",
                "meaning": "在做...的期间",
                "rules": [
                    "动词+는 동안"
                ],
                "notes": [
                    "'在...期间'。",
                    "前面必须是动词现在时定语形(는)，绝对不能用过去时。"
                ]
            },
            "en": {
                "description": "During / While",
                "meaning": "During the time of",
                "rules": [
                    "Verb + 는 동안"
                ],
                "notes": [
                    "'During / while'.",
                    "Must ALWAYS use the present modifier (는), NEVER the past tense modifier."
                ]
            }
        }
    },
    {
        "id": "l2_041",
        "category": "L2 - 추가 문법 (Extra Grammar)",
        "level": "L2",
        "title": "~는 중이다",
        "examples": [
            {
                "ko": "지금 밥을 먹는 중이에요.",
                "translations": {
                    "zh-CN": "我现在正在吃饭。",
                    "en": "I am in the middle of eating right now."
                }
            },
            {
                "ko": "회의 중이니까 나중에 전화하세요.",
                "translations": {
                    "zh-CN": "正在开会，请稍后打电话。",
                    "en": "I am in a meeting, so please call back later."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "正在...",
                "meaning": "表示某动作正在进行中（正在...）。比 ~고 있다 更强调动作的具体进行过程或当下正忙于做某事。",
                "rules": [
                    "动词+는 중이다",
                    "名词+중이다"
                ],
                "notes": [
                    "限制：不能与形容词或自然现象搭配（如下雨）。",
                    "名词后可直接加 중이다（如 공사 중 = 施工中）。"
                ]
            },
            "en": {
                "description": "In the middle of ~ing",
                "meaning": "Indicates that an action is currently in progress. Often emphasizes being in the middle of doing something right now.",
                "rules": [
                    "Verb + 는 중이다",
                    "Noun + 중이다"
                ],
                "notes": [
                    "Cannot be used with adjectives or natural phenomena (비가 오는 중이다 ✗ -> 비가 오고 있다 ✓)."
                ]
            }
        }
    },
    {
        "id": "l3_001",
        "category": "L3 - 1과: 대인 관계",
        "level": "L3",
        "title": "~(으)면 되다",
        "examples": [
            {
                "ko": "여기에 서명만 하시면 됩니다.",
                "translations": {
                    "zh-CN": "您只要在这里签个字就行了。",
                    "en": "All you need to do is sign here."
                }
            },
            {
                "ko": "버스를 타고 3정거장만 가면 돼요.",
                "translations": {
                    "zh-CN": "坐巴士坐3站就可以了。",
                    "en": "You just need to take the bus for 3 stops."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "只要...就行 / ...就可以了",
                "meaning": "表示只要满足某个最低条件就可以了（只要...就行 / ...就可以了）。",
                "rules": [
                    "动词/形容词+(으)면 되다"
                ],
                "notes": [
                    "极简条件：通常搭配 ~만(只) 一起使用，构成 '만 ~(으)면 되다'，强调完成某事的条件非常简单（只要做...就行了，其他都不需要）。",
                    "常见于指路、说明书或回答别人的求助。",
                    "注意不要和表示必须的 '아/어야 되다' 混淆。"
                ]
            },
            "en": {
                "description": "All you need to do is / It is okay if",
                "meaning": "Indicates that meeting a certain condition is sufficient. 'All you have to do is...' or 'It is enough if...'",
                "rules": [
                    "Verb/Adj + (으)면 되다"
                ],
                "notes": [
                    "Minimal Condition: Usually paired with '~만' (only) to form '만 ~(으)면 되다', emphasizing that the condition to complete something is very simple (just doing... is enough, nothing else is needed).",
                    "Commonly used when giving directions, in manuals, or when answering someone's request for help.",
                    "Be careful not to confuse it with '아/어야 되다', which expresses a strict necessity."
                ]
            }
        }
    },
    {
        "id": "l3_002",
        "category": "L3 - 1과: 대인 관계",
        "level": "L3",
        "title": "~고 해서",
        "examples": [
            {
                "ko": "피곤하고 해서 일찍 잤어요.",
                "translations": {
                    "zh-CN": "因为有点累等原因，就早睡了。",
                    "en": "I was tired (among other reasons), so I slept early."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "列举部分原因",
                "meaning": "因为...等原因 (列举部分原因)",
                "rules": [
                    "动词/形容词+고 해서"
                ],
                "notes": [
                    "部分原因陈述。",
                    "暗示还有其他很多原因，但说话人只挑出一个具有代表性的原因来说明。",
                    "常用于委婉地拒绝别人（因为太忙等原因），显得不那么直接。"
                ]
            },
            "en": {
                "description": "Because of ... and other reasons",
                "meaning": "Because of ... and other reasons",
                "rules": [
                    "Verb/Adj + 고 해서"
                ],
                "notes": [
                    "Partial Reason: Implies there are many other reasons, but the speaker is only pointing out one representative reason to explain the situation.",
                    "Commonly used to politely decline an offer or request (e.g., citing being too busy), making the refusal seem less direct."
                ]
            }
        }
    },
    {
        "id": "l3_003",
        "category": "L3 - 2과: 성격",
        "level": "L3",
        "title": "~는 대신에",
        "examples": [
            {
                "ko": "제가 요리를 하는 대신에 설거지를 해주세요.",
                "translations": {
                    "zh-CN": "我来做饭，作为交换请你洗碗。",
                    "en": "I will cook, so please do the dishes in return."
                }
            },
            {
                "ko": "이 옷은 비싼 대신에 질이 좋아요.",
                "translations": {
                    "zh-CN": "这件衣服虽然贵，但相对的质量很好。",
                    "en": "This clothes is expensive, but in exchange the quality is good."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "表示“代替/作为补偿”",
                "meaning": "表示“代替/作为补偿”。可以表示用一件事替代另一件事，或者做了一件事后作为回报做另一件事。",
                "rules": [
                    "动词+는 대신에",
                    "形容词+(으)ㄴ 대신에",
                    "名词+대신에"
                ],
                "notes": [
                    "代替与补偿：有两个主要用法。",
                    "①直接替代：“用B代替A”（比如用周末加班代替平时加班）。",
                    "②事物的两面性补偿：“虽然价格贵，但作为补偿质量很好”。",
                    "前后小句的主语必须一致。"
                ]
            },
            "en": {
                "description": "Instead of / In return for",
                "meaning": "Means 'instead of' or 'in return/exchange for'. Used to show replacement or compensation for an action.",
                "rules": [
                    "Verb + 는 대신에",
                    "Adj + (으)ㄴ 대신에",
                    "Noun + 대신에"
                ],
                "notes": [
                    "Replacement and Compensation: Has two main usages.",
                    "① Direct replacement: 'Using B instead of A' (e.g., working overtime on weekends instead of weekdays).",
                    "② Two-sided compensation: 'Although the price is expensive, as a compensation, the quality is very good'.",
                    "The subject of both clauses must be exactly the same."
                ]
            }
        }
    },
    {
        "id": "l3_004",
        "category": "L3 - 2과: 성격",
        "level": "L3",
        "title": "~아/어지다",
        "examples": [
            {
                "ko": "날씨가 더워졌어요.",
                "translations": {
                    "zh-CN": "天气变热了。",
                    "en": "Weather became hot."
                }
            },
            {
                "ko": "한국어가 좋아졌어요.",
                "translations": {
                    "zh-CN": "开始喜欢韩语了。",
                    "en": "I've come to like Korean."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "变得...",
                "meaning": "变得...",
                "rules": [
                    "形容词+아/어지다"
                ],
                "notes": [
                    "状态变化的绝对核心。",
                    "表示状态随时间发生变化(变得...)。",
                    "必须且只能接【形容词】。",
                    "例如：예뻐지다(变漂亮)、좋아지다(变好)。",
                    "如果想表示【动词】的变化（变得会做某事），必须使用 '게 되다'。"
                ]
            },
            "en": {
                "description": "Become",
                "meaning": "Become (change of state)",
                "rules": [
                    "Adj + 아/어지다"
                ],
                "notes": [
                    "Absolute core grammar for state changes. Indicates a change of state over time (becomes...).",
                    "MUST and CAN ONLY be attached to [Adjectives]. For example: 예뻐지다 (become pretty), 좋아지다 (become good).",
                    "If you want to express a change in a [Verb] (e.g., came to be able to do something), you must use '게 되다'."
                ]
            }
        }
    },
    {
        "id": "l3_005",
        "category": "L3 - 3과: 지역 복지 서비스",
        "level": "L3",
        "title": "~(으)ㄴ지/는지 알다/모르다",
        "examples": [
            {
                "ko": "어디에 사는지 알아요?",
                "translations": {
                    "zh-CN": "知道住在哪吗？",
                    "en": "Do you know where they live?"
                }
            },
            {
                "ko": "그 사람이 누구인지 몰라요.",
                "translations": {
                    "zh-CN": "不知道那个人是谁。",
                    "en": "I don't know who that person is."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "知不知道是否...",
                "meaning": "知不知道是否...",
                "rules": [
                    "动词+는지",
                    "形容词+ㄴ/은지"
                ],
                "notes": [
                    "间接疑问句核心句型。",
                    "表示“不知道/知道某事”。",
                    "通常句子里会带有疑问词（누구, 언제, 어디, 무엇 等）。",
                    "动词用 는지，形容词用 (으)ㄴ지，过去时用 았/었는지。"
                ]
            },
            "en": {
                "description": "Know whether",
                "meaning": "Know/don't know whether",
                "rules": [
                    "Verb + 는지",
                    "Adj + ㄴ/은지"
                ],
                "notes": [
                    "Core pattern for indirect questions. Expresses 'not knowing / knowing about something'.",
                    "Usually, the sentence will contain a WH-question word (누구, 언제, 어디, 무엇, etc.).",
                    "Verbs take 는지, adjectives take (으)ㄴ지, and past tense takes 았/었는지."
                ]
            }
        }
    },
    {
        "id": "l3_006",
        "category": "L3 - 3과: 지역 복지 서비스",
        "level": "L3",
        "title": "~다가",
        "examples": [
            {
                "ko": "걷다가 넘어졌어요.",
                "translations": {
                    "zh-CN": "走路走着摔倒了。",
                    "en": "Fell while walking."
                }
            },
            {
                "ko": "TV를 보다가 잠들었어요.",
                "translations": {
                    "zh-CN": "看电视看着就睡着了。",
                    "en": "Fell asleep while watching TV."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "中途转换动作",
                "meaning": "中途转换动作",
                "rules": [
                    "动词+다가"
                ],
                "notes": [
                    "动作中断与转换。",
                    "表示前一个动作在进行的中途突然停止，转而发生了后面的动作（'做着做着突然...'）。",
                    "最核心的规则：前后小句的【主语必须完全一致】！",
                    "（我走着走着摔倒了 ✓，我走着走着天黑了 ✗）。"
                ]
            },
            "en": {
                "description": "While/Switch",
                "meaning": "Switching actions midway",
                "rules": [
                    "Verb + 다가"
                ],
                "notes": [
                    "Action Interruption and Switch. Indicates that the first action suddenly stops midway, and the subsequent action happens instead ('While doing... suddenly...').",
                    "The most crucial rule: The subjects of the first and second clauses MUST be completely identical!",
                    "(I fell while I was walking ✓, It got dark while I was walking ✗)."
                ]
            }
        }
    },
    {
        "id": "l3_007",
        "category": "L3 - 4과: 교환과 환불",
        "level": "L3",
        "title": "~(으)ㄹ 만하다",
        "examples": [
            {
                "ko": "이 영화는 볼 만해요.",
                "translations": {
                    "zh-CN": "这部电影值得看。",
                    "en": "This movie is worth watching."
                }
            },
            {
                "ko": "한번 가 볼 만한 곳이에요.",
                "translations": {
                    "zh-CN": "是值得去一次的地方。",
                    "en": "It's a place worth visiting."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "值得做...",
                "meaning": "值得做...",
                "rules": [
                    "动词+(으)ㄹ 만하다"
                ],
                "notes": [
                    "价值评估。",
                    "两种核心含义：①强烈推荐“值得做”（이 영화는 볼 만해요 = 这电影值得一看）。",
                    "②退而求其次“勉强能接受/还能忍受”（아프지만 참을 만해요 = 虽然疼但还能忍）。"
                ]
            },
            "en": {
                "description": "Worth doing",
                "meaning": "Worth doing, deserving of",
                "rules": [
                    "Verb + (으)ㄹ 만하다"
                ],
                "notes": [
                    "Value Assessment. Two core meanings:",
                    "① Highly recommended 'worth doing' (이 영화는 볼 만해요 = This movie is worth watching).",
                    "② Settling for the next best thing 'bearable/acceptable' (아프지만 참을 만해요 = It hurts but it's bearable)."
                ]
            }
        }
    },
    {
        "id": "l3_008",
        "category": "L3 - 4과: 교환과 환불",
        "level": "L3",
        "title": "~아/어 가지고",
        "examples": [
            {
                "ko": "바빠 가지고 연락을 못 했어요.",
                "translations": {
                    "zh-CN": "因为太忙了没能联系你。",
                    "en": "I was so busy that I couldn't contact you."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "因为... / 做了...然后",
                "meaning": "因为... / 做了...然后",
                "rules": [
                    "动词/形容词+아/어 가지고"
                ],
                "notes": [
                    "极度口语化的原因/先后顺序连接词。",
                    "功能与 아/어서 基本完全相同，但更加随意，几乎只出现在口语对话中，绝不能用于正式的书面语或演讲中。"
                ]
            },
            "en": {
                "description": "Because / After doing... (conversational)",
                "meaning": "Because / After doing... (conversational)",
                "rules": [
                    "Verb/Adj + 아/어 가지고"
                ],
                "notes": [
                    "Extremely colloquial conjunction for reason/sequence.",
                    "Its function is almost exactly the same as 아/어서, but it is much more casual.",
                    "It almost exclusively appears in spoken conversations and must absolutely NEVER be used in formal writing or speeches."
                ]
            }
        }
    },
    {
        "id": "l3_009",
        "category": "L3 - 5과: 소비와 절약",
        "level": "L3",
        "title": "~다고/라고 하다",
        "examples": [
            {
                "ko": "민수가 바쁘다고 해요.",
                "translations": {
                    "zh-CN": "民秀说他忙。",
                    "en": "Minsu says he's busy."
                }
            },
            {
                "ko": "선생님이 시험이 있다고 했어요.",
                "translations": {
                    "zh-CN": "老师说有考试。",
                    "en": "The teacher said there's an exam."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "陈述句",
                "meaning": "间接引语(陈述句)",
                "rules": [
                    "动词+ㄴ/는다고",
                    "形容词+다고",
                    "名词+(이)라고"
                ],
                "notes": [
                    "间接陈述句的标准化格式。",
                    "当转述别人陈述的事实时使用。",
                    "难点在于词性的区分：动词必须加 ㄴ/는다고，形容词直接加 다고，名词加 (이)라고。",
                    "过去时统一加 았/었다고。"
                ]
            },
            "en": {
                "description": "Indirect statement",
                "meaning": "Indirect quotation (statement)",
                "rules": [
                    "Verb + ㄴ/는다고",
                    "Adj + 다고",
                    "Noun + (이)라고"
                ],
                "notes": [
                    "Standard format for indirect statements. Used when quoting a fact stated by someone else.",
                    "The difficulty lies in distinguishing parts of speech: Verbs MUST take ㄴ/는다고, adjectives simply take 다고, and nouns take (이)라고.",
                    "The past tense universally takes 았/었다고."
                ]
            }
        }
    },
    {
        "id": "l3_010",
        "category": "L3 - 5과: 소비와 절약",
        "level": "L3",
        "title": "명-(이)나 / 밖에",
        "examples": [
            {
                "ko": "친구가 10명이나 왔어요.",
                "translations": {
                    "zh-CN": "居然来了10个朋友这么多。",
                    "en": "As many as 10 friends came."
                }
            },
            {
                "ko": "친구가 1명밖에 안 왔어요.",
                "translations": {
                    "zh-CN": "只来了1个朋友。",
                    "en": "Only 1 friend came."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "居然有...那么多 / 只有...",
                "meaning": "居然有...那么多 / 只有...",
                "rules": [
                    "名词+(이)나 (表示多于预期)",
                    "名词+밖에 + 否定词 (表示少于预期)"
                ],
                "notes": [
                    "数量的主观情绪对比。",
                    "这两个总是成对考察。",
                    "~(이)나 表示数量多于说话人的预期（居然有...那么多！），~밖에 表示数量少于预期且后面【必须】跟否定词（只有.../除了...之外都没有）。"
                ]
            },
            "en": {
                "description": "Nothing but / Only",
                "meaning": "As much as... / Only...",
                "rules": [
                    "Noun + (이)나 (More than expected)",
                    "Noun + 밖에 + Negative (Less than expected)"
                ],
                "notes": [
                    "Subjective emotional contrast of quantities. These two are always tested as a pair.",
                    "~(이)나 expresses that the quantity is larger than the speaker expected (I can't believe there's that much!).",
                    "~밖에 expresses that the quantity is smaller than expected, and it MUST be followed by a negative word (There is only... / There is nothing but...)."
                ]
            }
        }
    },
    {
        "id": "l3_011",
        "category": "L3 - 6과: 주거 환경",
        "level": "L3",
        "title": "~자고 하다",
        "examples": [
            {
                "ko": "친구가 영화 보자고 했어요.",
                "translations": {
                    "zh-CN": "朋友提议看电影。",
                    "en": "Friend suggested watching a movie."
                }
            },
            {
                "ko": "같이 점심을 먹자고 했어요.",
                "translations": {
                    "zh-CN": "提议一起吃午饭。",
                    "en": "Suggested we eat lunch together."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "共动句",
                "meaning": "间接引语(共动句)",
                "rules": [
                    "动词+자고 하다"
                ],
                "notes": [
                    "间接共动句。",
                    "当原句是“我们一起做某事吧（(으)ㅂ시다 / 자）”时，转述时必须变成 자고 하다。",
                    "这是间接引语四大句型之一。"
                ]
            },
            "en": {
                "description": "Indirect suggestion",
                "meaning": "Indirect quotation (suggestion)",
                "rules": [
                    "Verb + 자고 하다"
                ],
                "notes": [
                    "Indirect propositive sentence. Used when the original sentence is 'Let's do something together ((으)ㅂ시다 / 자)'.",
                    "When quoting, it must be changed to 자고 하다.",
                    "This is one of the four major patterns of indirect speech."
                ]
            }
        }
    },
    {
        "id": "l3_012",
        "category": "L3 - 6과: 주거 환경",
        "level": "L3",
        "title": "피동사 (Passive)",
        "examples": [
            {
                "ko": "문이 열렸어요.",
                "translations": {
                    "zh-CN": "门被打开了。",
                    "en": "The door was opened."
                }
            },
            {
                "ko": "도둑이 경찰에게 잡혔어요.",
                "translations": {
                    "zh-CN": "小偷被警察抓住了。",
                    "en": "The thief was caught by the police."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "이/히/리/기",
                "meaning": "被动动词(이/히/리/기)",
                "rules": [
                    "보다 → 보이다 (看 → 被看)",
                    "잡다 → 잡히다 (抓 → 被抓)",
                    "열다 → 열리다 (开 → 被打开)",
                    "끊다 → 끊기다 (切断 → 被切断)"
                ],
                "notes": [
                    "被动语态核心。",
                    "韩语被动后缀主要有四个(이/히/리/기)，没有任何固定规律，必须死记硬背每个词的对应形态。",
                    "高频词：보이다(被看到), 들리다(被听到), 잡히다(被抓), 열리다(被打开)。"
                ]
            },
            "en": {
                "description": "Passive verbs",
                "meaning": "Passive voice verbs",
                "rules": [
                    "보다→보이다(see→be seen)",
                    "잡다→잡히다(catch→be caught)",
                    "열다→열리다(open→be opened)",
                    "끊다→끊기다(cut→be cut)"
                ],
                "notes": [
                    "Core of the passive voice. The main Korean passive suffixes are four (이/히/리/기).",
                    "There are no fixed rules, so you must memorize the corresponding form for each word by heart.",
                    "High-frequency words: 보이다 (be seen), 들리다 (be heard), 잡히다 (be caught), 열리다 (be opened)."
                ]
            }
        }
    },
    {
        "id": "l3_013",
        "category": "L3 - 7과: 문화생활",
        "level": "L3",
        "title": "~(으)라고 하다",
        "examples": [
            {
                "ko": "의사가 쉬라고 했어요.",
                "translations": {
                    "zh-CN": "医生让休息。",
                    "en": "Doctor said to rest."
                }
            },
            {
                "ko": "엄마가 빨리 오라고 했어요.",
                "translations": {
                    "zh-CN": "妈妈让快点过来。",
                    "en": "Mom told me to come quickly."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "命令句",
                "meaning": "间接引语(命令句)",
                "rules": [
                    "动词+(으)라고 하다"
                ],
                "notes": [
                    "间接命令句。",
                    "原句是祈使句（(으)세요 / (으)십시오）时，转述用 (으)라고 하다。",
                    "如果是禁止别人做某事（지 마세요），则转述为 지 말라고 하다。"
                ]
            },
            "en": {
                "description": "Indirect command",
                "meaning": "Indirect quotation (command)",
                "rules": [
                    "Verb + (으)라고 하다"
                ],
                "notes": [
                    "Indirect command. When the original sentence is an imperative ((으)세요 / (으)십시오), it is quoted using (으)라고 하다.",
                    "If it is forbidding someone from doing something (지 마세요), it is quoted as 지 말라고 하다."
                ]
            }
        }
    },
    {
        "id": "l3_014",
        "category": "L3 - 7과: 문화생활",
        "level": "L3",
        "title": "~냐고 하다",
        "examples": [
            {
                "ko": "언제 오냐고 했어요.",
                "translations": {
                    "zh-CN": "问什么时候来。",
                    "en": "Asked when they're coming."
                }
            },
            {
                "ko": "몇 시에 출발하냐고 물어봤어요.",
                "translations": {
                    "zh-CN": "问了几点出发。",
                    "en": "Asked what time we're leaving."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "疑问句",
                "meaning": "间接引语(疑问句)",
                "rules": [
                    "动词/形容词+냐고 하다"
                ],
                "notes": [
                    "间接疑问句。",
                    "当原句是问号结尾（아/어요? / 습니까?）时，转述为 냐고 하다。",
                    "现代口语中动词和形容词都可以直接接 냐고 하다。"
                ]
            },
            "en": {
                "description": "Indirect question",
                "meaning": "Indirect quotation (question)",
                "rules": [
                    "Verb/Adj + 냐고 하다"
                ],
                "notes": [
                    "Indirect question. When the original sentence ends with a question mark (아/어요? / 습니까?), it is quoted as 냐고 하다.",
                    "In modern spoken Korean, both verbs and adjectives can directly take 냐고 하다."
                ]
            }
        }
    },
    {
        "id": "l3_015",
        "category": "L3 - 7과: 문화생활",
        "level": "L3",
        "title": "~만큼",
        "examples": [
            {
                "ko": "저는 형만큼 키가 크지 않아요.",
                "translations": {
                    "zh-CN": "我没有哥哥那么高。",
                    "en": "I am not as tall as my older brother."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "像...一样多 / 到...的程度",
                "meaning": "像...一样多 / 到...的程度",
                "rules": [
                    "名词+만큼 / 动词+定语+만큼"
                ],
                "notes": [
                    "程度等同。",
                    "表示前后两者在数量、大小或程度上达到了完全同等的水平（像...一样多/好）。",
                    "通常搭配名词或动词的定语形使用。"
                ]
            },
            "en": {
                "description": "As much as / To the extent that",
                "meaning": "As much as / To the extent that",
                "rules": [
                    "Noun + 만큼 / Verb + modifier + 만큼"
                ],
                "notes": [
                    "Equivalence of degree. Indicates that the former and the latter reach exactly the same level in quantity, size, or extent (As much as... / As good as...).",
                    "It is usually paired with a noun or the modifier form of a verb."
                ]
            }
        }
    },
    {
        "id": "l3_016",
        "category": "L3 - 8과: 음식과 요리",
        "level": "L3",
        "title": "사동사 (Causative verbs)",
        "examples": [
            {
                "ko": "아이에게 밥을 먹여요.",
                "translations": {
                    "zh-CN": "给孩子喂饭。",
                    "en": "I feed the child."
                }
            },
            {
                "ko": "아침에 아이를 깨워요.",
                "translations": {
                    "zh-CN": "早上叫孩子起床。",
                    "en": "I wake the child in the morning."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "이/히/리/기/우",
                "meaning": "使动动词(이/히/리/기/우)",
                "rules": [
                    "먹이다 (喂食/让吃)",
                    "읽히다 (让...读)",
                    "울리다 (弄哭)",
                    "깨우다 (叫醒)"
                ],
                "notes": [
                    "使役语态核心。",
                    "表示“主语让/强迫某人做某事”。",
                    "后缀有六个(이/히/리/기/우/추)，必须单独记忆。",
                    "高频词：먹이다(喂), 깨우다(叫醒), 입히다(给...穿上)。"
                ]
            },
            "en": {
                "description": "Causative verbs",
                "meaning": "Causative verb suffixes",
                "rules": [
                    "먹이다 (to feed)",
                    "읽히다 (to make read)",
                    "울리다 (to make cry)",
                    "깨우다 (to wake up)"
                ],
                "notes": [
                    "Core of the causative voice. Indicates that 'the subject makes/forces someone to do something'.",
                    "There are six suffixes (이/히/리/기/우/추), which must be memorized individually.",
                    "High-frequency words: 먹이다 (feed), 깨우다 (wake up), 입히다 (dress someone)."
                ]
            }
        }
    },
    {
        "id": "l3_017",
        "category": "L3 - 9과: 고장과 수리",
        "level": "L3",
        "title": "~나요/ㄴ가요?",
        "examples": [
            {
                "ko": "혹시 한국 사람인가요?",
                "translations": {
                    "zh-CN": "你是不是韩国人呢？",
                    "en": "Are you perhaps Korean?"
                }
            },
            {
                "ko": "이 버스가 서울역에 가나요?",
                "translations": {
                    "zh-CN": "这趟公交去首尔站吗？",
                    "en": "Does this bus go to Seoul Station?"
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "是不是...呢",
                "meaning": "柔和的疑问(是不是...呢)",
                "rules": [
                    "动词+나요",
                    "形容词+ㄴ/은가요"
                ],
                "notes": [
                    "柔和委婉的提问方式。",
                    "比直接用 아/어요? 显得更温柔、更礼貌，不会给对方压迫感。",
                    "非常适合用于面试、初次见面、或向陌生人询问情况时。"
                ]
            },
            "en": {
                "description": "Soft question",
                "meaning": "Soft/indirect question",
                "rules": [
                    "Verb + 나요",
                    "Adj + ㄴ/은가요"
                ],
                "notes": [
                    "A soft and gentle way of asking questions.",
                    "It sounds much gentler and more polite than directly using 아/어요?, and doesn't pressure the listener.",
                    "Highly suitable for interviews, first meetings, or when asking strangers for information."
                ]
            }
        }
    },
    {
        "id": "l3_018",
        "category": "L3 - 9과: 고장과 수리",
        "level": "L3",
        "title": "~아/어서 그런지",
        "examples": [
            {
                "ko": "주말이라서 그런지 사람이 많아요.",
                "translations": {
                    "zh-CN": "可能是因为周末吧，人很多。",
                    "en": "Maybe because it's the weekend, there are a lot of people."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "不知道是不是因为...",
                "meaning": "不知道是不是因为...",
                "rules": [
                    "动词/形容词+아/어서 그런지"
                ],
                "notes": [
                    "模糊推测。",
                    "表示说话人主观上认为前面可能是导致后面结果的原因，但并不完全确定（也许是因为...所以才...吧）。",
                    "不能用于明确的因果关系。"
                ]
            },
            "en": {
                "description": "Maybe because...",
                "meaning": "Maybe because...",
                "rules": [
                    "Verb/Adj + 아/어서 그런지"
                ],
                "notes": [
                    "Vague Guess. Indicates that the speaker subjectively thinks the preceding clause might be the reason for the following result, but is not entirely certain.",
                    "(Maybe it's because... so...).",
                    "Cannot be used for clear, definitive causal relationships."
                ]
            }
        }
    },
    {
        "id": "l3_019",
        "category": "L3 - 10과: 취업",
        "level": "L3",
        "title": "~기 위해서",
        "examples": [
            {
                "ko": "건강을 위해서 운동해요.",
                "translations": {
                    "zh-CN": "为了健康而运动。",
                    "en": "I exercise for health."
                }
            },
            {
                "ko": "시험에 합격하기 위해서 열심히 해요.",
                "translations": {
                    "zh-CN": "为了通过考试努力学习。",
                    "en": "I work hard to pass the exam."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "为了做...",
                "meaning": "为了做...",
                "rules": [
                    "动词+기 위해서"
                ],
                "notes": [
                    "正式的目的表达。",
                    "明确表示“为了某个目的”。",
                    "与 (으)려고 相比，它更加正式和书面化。",
                    "另一个重要区别是：它允许前后小句的主语不一致。"
                ]
            },
            "en": {
                "description": "In order to",
                "meaning": "In order to (purpose)",
                "rules": [
                    "Verb + 기 위해서"
                ],
                "notes": [
                    "Formal expression of purpose. Explicitly states 'For the purpose of...'.",
                    "Compared to (으)려고, it is much more formal and written.",
                    "Another important distinction: it allows the subjects of the preceding and following clauses to be different."
                ]
            }
        }
    },
    {
        "id": "l3_020",
        "category": "L3 - 10과: 취업",
        "level": "L3",
        "title": "~아/어 놓다",
        "examples": [
            {
                "ko": "예약해 놓았어요.",
                "translations": {
                    "zh-CN": "预约好了。",
                    "en": "I made a reservation (in advance)."
                }
            },
            {
                "ko": "음식을 만들어 놓았어요.",
                "translations": {
                    "zh-CN": "提前做好了饭菜。",
                    "en": "I prepared the food in advance."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "准备好",
                "meaning": "做好放着(准备好)",
                "rules": [
                    "动词+아/어 놓다"
                ],
                "notes": [
                    "状态保持。",
                    "表示动作完成之后，不再去管它，任由其保持那个状态。",
                    "与 아/어 두다 极为相似，但 놓다 更强调动作结束后的“放置/撒手不管”，而 두다 更强调“保留/为了以后备用”。"
                ]
            },
            "en": {
                "description": "Do and keep",
                "meaning": "Do in advance and maintain",
                "rules": [
                    "Verb + 아/어 놓다"
                ],
                "notes": [
                    "State Maintenance. Indicates that after an action is completed, it is left alone and allowed to maintain that state.",
                    "Extremely similar to 아/어 두다, but 놓다 emphasizes 'leaving it alone/hands off' after the action ends, while 두다 emphasizes 'keeping/reserving it for future use'."
                ]
            }
        }
    },
    {
        "id": "l3_021",
        "category": "L3 - 11과: 부동산",
        "level": "L3",
        "title": "~(으)ㄴ/는 데다가",
        "examples": [
            {
                "ko": "비가 오는 데다가 바람도 불어요.",
                "translations": {
                    "zh-CN": "下雨再加上刮风。",
                    "en": "It's raining and on top of that windy."
                }
            },
            {
                "ko": "예쁜 데다가 착해요.",
                "translations": {
                    "zh-CN": "不仅漂亮而且善良。",
                    "en": "She's pretty and on top of that kind."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "雪上加霜/锦上添花",
                "meaning": "再加上(雪上加霜/锦上添花)",
                "rules": [
                    "动词+는 데다가",
                    "形容词+ㄴ/은 데다가"
                ],
                "notes": [
                    "递进叠加。",
                    "表示“再加上/而且”。",
                    "核心做题规则：前后的评价必须是同方向的！",
                    "如果是夸奖，前后都得是夸奖；如果是贬低，前后都得是贬低。",
                    "绝对不能一好一坏。"
                ]
            },
            "en": {
                "description": "On top of that",
                "meaning": "In addition to, on top of",
                "rules": [
                    "Verb + 는 데다가",
                    "Adj + ㄴ/은 데다가"
                ],
                "notes": [
                    "Progressive Addition. Expresses 'On top of that / Furthermore'.",
                    "Core exam rule: The evaluation of the preceding and following clauses MUST be in the same direction!",
                    "If it's praise, both must be praise; if it's criticism, both must be criticism. You can absolutely never mix good and bad."
                ]
            }
        }
    },
    {
        "id": "l3_022",
        "category": "L3 - 11과: 부동산",
        "level": "L3",
        "title": "~는/ㄴ다 (서술체)",
        "examples": [
            {
                "ko": "나는 매일 아침 운동을 한다.",
                "translations": {
                    "zh-CN": "我每天早上运动。",
                    "en": "I exercise every morning."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "书面基本阶叙述体",
                "meaning": "书面基本阶叙述体",
                "rules": [
                    "动词+는/ㄴ다, 形容词+다"
                ],
                "notes": [
                    "书面叙述体（基本阶）。",
                    "这是极其重要的体裁！",
                    "TOPIK大作文、日记、新闻报道、客观事实陈述必须用这个结尾。",
                    "而在口语中，它被用作关系极好的朋友之间的半语（平语）。"
                ]
            },
            "en": {
                "description": "Plain form (Written/Diary style)",
                "meaning": "Plain form (Written/Diary style)",
                "rules": [
                    "Verb + 는/ㄴ다, Adj + 다"
                ],
                "notes": [
                    "Written narrative form (Plain style). This is an extremely important writing style!",
                    "TOPIK essays, diaries, news reports, and objective factual statements MUST use this ending.",
                    "In spoken language, it is used as casual speech (banmal) between very close friends."
                ]
            }
        }
    },
    {
        "id": "l3_023",
        "category": "L3 - 12과: 전통 명절",
        "level": "L3",
        "title": "~게 되다",
        "examples": [
            {
                "ko": "한국 음식을 좋아하게 됐어요.",
                "translations": {
                    "zh-CN": "变得喜欢韩国食物了。",
                    "en": "I came to like Korean food."
                }
            },
            {
                "ko": "서울에서 살게 되었어요.",
                "translations": {
                    "zh-CN": "变得在首尔住了。",
                    "en": "I ended up living in Seoul."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "外力导致",
                "meaning": "(外力导致)变得...",
                "rules": [
                    "动词/形容词+게 되다"
                ],
                "notes": [
                    "被动状态的变化。",
                    "表示由于外部原因或环境变化，导致出现了某种新的情况（变得...了）。",
                    "强调非主观意愿：한국 음식을 좋아하게 됐어요 (在韩国住久了，自然而然变得喜欢吃韩国菜了)。"
                ]
            },
            "en": {
                "description": "Come to / End up",
                "meaning": "Come to, end up",
                "rules": [
                    "Verb/Adj + 게 되다"
                ],
                "notes": [
                    "Change into a passive state. Indicates that a new situation has emerged due to external reasons or environmental changes (Came to be...).",
                    "Emphasizes non-subjective intention: 한국 음식을 좋아하게 됐어요 (After living in Korea for a long time, I naturally came to like Korean food)."
                ]
            }
        }
    },
    {
        "id": "l3_024",
        "category": "L3 - 12과: 전통 명절",
        "level": "L3",
        "title": "~아도/어도",
        "examples": [
            {
                "ko": "비가 와도 갈 거예요.",
                "translations": {
                    "zh-CN": "即使下雨也会去。",
                    "en": "Even if it rains I'll go."
                }
            },
            {
                "ko": "많이 먹어도 안 살쪄요.",
                "translations": {
                    "zh-CN": "吃很多也不会胖。",
                    "en": "I don't gain weight even if I eat a lot."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "即使...也...",
                "meaning": "即使...也...",
                "rules": [
                    "动词/形容词+아도/어도"
                ],
                "notes": [
                    "假设与让步。",
                    "表示“即使...也 / 就算...也”。",
                    "经常与副词 아무리（无论怎么） 搭配形成黄金组合：아무리 먹어도 안 쪄요 （无论怎么吃都不会胖）。"
                ]
            },
            "en": {
                "description": "Even if / Although",
                "meaning": "Even if, although",
                "rules": [
                    "Verb/Adj + 아도/어도"
                ],
                "notes": [
                    "Hypothesis and Concession. Expresses 'Even if... / Even though...'.",
                    "Often paired with the adverb 아무리 (no matter how) to form a golden combination: 아무리 먹어도 안 쪄요 (No matter how much I eat, I don't gain weight)."
                ]
            }
        }
    },
    {
        "id": "l3_025",
        "category": "L3 - 13과: 직장 생활",
        "level": "L3",
        "title": "~게 하다",
        "examples": [
            {
                "ko": "아이를 공부하게 했어요.",
                "translations": {
                    "zh-CN": "让孩子学习了。",
                    "en": "Made the child study."
                }
            },
            {
                "ko": "선생님이 학생들을 조용히 하게 했어요.",
                "translations": {
                    "zh-CN": "老师让学生们安静。",
                    "en": "The teacher made the students be quiet."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "让/使某人做...",
                "meaning": "让/使某人做...",
                "rules": [
                    "动词+게 하다"
                ],
                "notes": [
                    "万能使役句型。",
                    "表示主观上“让/叫某人做某事”。",
                    "当一个动词没有专用的사동사(使役动词)后缀时，一律使用 게 하다 来表达使役含义。"
                ]
            },
            "en": {
                "description": "Make someone do",
                "meaning": "Causative (make someone do)",
                "rules": [
                    "Verb + 게 하다"
                ],
                "notes": [
                    "Universal causative pattern. Expresses subjectively 'making/telling someone to do something'.",
                    "When a verb does not have a dedicated 사동사 (causative verb) suffix, 게 하다 is universally used to express the causative meaning."
                ]
            }
        }
    },
    {
        "id": "l3_026",
        "category": "L3 - 13과: 직장 생활",
        "level": "L3",
        "title": "~아/어 가다/오다",
        "examples": [
            {
                "ko": "일이 다 끝나 가요.",
                "translations": {
                    "zh-CN": "事情快做完了。",
                    "en": "The work is almost finishing up."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "不断地...下去 / 一直...过来",
                "meaning": "不断地...下去 / 一直...过来",
                "rules": [
                    "动词+아/어 가다/오다"
                ],
                "notes": [
                    "状态的持续演变。",
                    "表示一个状态不断发展。",
                    "方向性很重要：아/어 가다 表示从现在一直持续到未来（以后也会继续...）；아/어 오다 表示从过去一直持续到了现在。"
                ]
            },
            "en": {
                "description": "Keep doing... / Have been doing...",
                "meaning": "Keep doing... / Have been doing...",
                "rules": [
                    "Verb + 아/어 가다/오다"
                ],
                "notes": [
                    "Continuous evolution of a state. Indicates that a state is constantly developing.",
                    "Directionality is very important: 아/어 가다 means continuing from the present into the future (will continue to...); 아/어 오다 means continuing from the past up to the present."
                ]
            }
        }
    },
    {
        "id": "l3_027",
        "category": "L3 - 14과: 인터넷과 스마트폰",
        "level": "L3",
        "title": "~아/어야 (필수조건)",
        "examples": [
            {
                "ko": "비밀번호를 입력해야 문이 열려요.",
                "translations": {
                    "zh-CN": "只有输入密码门才会开。",
                    "en": "The door opens only if you enter the password."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "只有...才能...",
                "meaning": "只有...才能...",
                "rules": [
                    "动词/形容词+아/어야"
                ],
                "notes": [
                    "绝对的先决条件。",
                    "语气非常强，表示前面的动作或状态是后面结果发生的“唯一或必须的前提”（必须要...才...）。",
                    "如果前面不成立，后面绝对不可能发生。"
                ]
            },
            "en": {
                "description": "Only if / Must do... to...",
                "meaning": "Only if / Must do... to...",
                "rules": [
                    "Verb/Adj + 아/어야"
                ],
                "notes": [
                    "Absolute prerequisite. The tone is very strong, indicating that the preceding action or state is the 'sole or necessary prerequisite' for the following result to occur (Must... in order to...).",
                    "If the preceding condition is not met, the following is absolutely impossible."
                ]
            }
        }
    },
    {
        "id": "l3_028",
        "category": "L3 - 14과: 인터넷과 스마트폰",
        "level": "L3",
        "title": "~잖아요",
        "examples": [
            {
                "ko": "미국에서 10년 살았잖아요.",
                "translations": {
                    "zh-CN": "你知道的，我在美国住了10年。",
                    "en": "As you know, I lived in the US for 10 years."
                }
            },
            {
                "ko": "겨울이잖아요.",
                "translations": {
                    "zh-CN": "不是冬天嘛。",
                    "en": "It's winter, you know."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "你知道的/不是嘛",
                "meaning": "你知道的/不是嘛",
                "rules": [
                    "动词/形容词+잖아요"
                ],
                "notes": [
                    "事实确认。",
                    "用来提醒对方一个你们俩都知道的事实：“你不是知道嘛 / 不是...嘛”。",
                    "注意：对长辈或上级使用时，容易显得你在教训对方，因此要慎用。"
                ]
            },
            "en": {
                "description": "As you know",
                "meaning": "Stating a fact the listener knows",
                "rules": [
                    "Verb/Adj + 잖아요"
                ],
                "notes": [
                    "Fact confirmation. Used to remind the listener of a fact that both of you know: 'As you know... / Isn't it that...'.",
                    "Caution: When used to elders or superiors, it can easily sound like you are lecturing them, so use it carefully."
                ]
            }
        }
    },
    {
        "id": "l3_029",
        "category": "L3 - 15과: 고민과 상담",
        "level": "L3",
        "title": "~(으)려던 참이다",
        "examples": [
            {
                "ko": "전화하려던 참이었어요.",
                "translations": {
                    "zh-CN": "我正要打电话。",
                    "en": "I was just about to call."
                }
            },
            {
                "ko": "지금 막 나가려던 참이에요.",
                "translations": {
                    "zh-CN": "正要出门呢。",
                    "en": "I was just about to go out."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "正要做...",
                "meaning": "正要做...",
                "rules": [
                    "动词+(으)려던 참이다"
                ],
                "notes": [
                    "巧合的时机。",
                    "含有“正要...”的意思，强调就在你打算做某事的瞬间，碰巧发生了相关的另一件事。",
                    "常用来表达巧合：我正要给你打电话，你就打来了。"
                ]
            },
            "en": {
                "description": "Was just about to",
                "meaning": "Was just about to do",
                "rules": [
                    "Verb + (으)려던 참이다"
                ],
                "notes": [
                    "Coincidental timing. Contains the meaning of 'Was just about to...', emphasizing that exactly at the moment you intended to do something, another related thing happened to occur.",
                    "Often used to express coincidence: I was just about to call you, and you called me."
                ]
            }
        }
    },
    {
        "id": "l3_030",
        "category": "L3 - 15과: 고민과 상담",
        "level": "L3",
        "title": "~자마자",
        "examples": [
            {
                "ko": "집에 오자마자 잤어요.",
                "translations": {
                    "zh-CN": "一到家就睡了。",
                    "en": "Slept as soon as I got home."
                }
            },
            {
                "ko": "전화를 받자마자 뛰어나갔어요.",
                "translations": {
                    "zh-CN": "一接到电话就跑出去了。",
                    "en": "Ran out as soon as they answered the phone."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "一...就...",
                "meaning": "一...就...",
                "rules": [
                    "动词+자마자"
                ],
                "notes": [
                    "无缝衔接。",
                    "表示“一...就...”，前一个动作结束的瞬间，后一个动作立刻发生，中间几乎没有时间间隔。",
                    "注意：不能用于描述反复的、习惯性的日常动作。"
                ]
            },
            "en": {
                "description": "As soon as",
                "meaning": "As soon as",
                "rules": [
                    "Verb + 자마자"
                ],
                "notes": [
                    "Seamless transition. Expresses 'As soon as...'.",
                    "The moment the first action ends, the second action occurs immediately, with almost no time gap in between.",
                    "Note: It cannot be used to describe repetitive, habitual daily routines."
                ]
            }
        }
    },
    {
        "id": "l3_031",
        "category": "L3 - 16과: 기후와 날씨",
        "level": "L3",
        "title": "~(으)ㄹ 텐데",
        "examples": [
            {
                "ko": "바쁠 텐데 와 주셔서 감사합니다.",
                "translations": {
                    "zh-CN": "应该很忙还来了，谢谢。",
                    "en": "You must be busy, thanks for coming."
                }
            },
            {
                "ko": "피곤할 텐데 쉬세요.",
                "translations": {
                    "zh-CN": "应该累了，休息吧。",
                    "en": "You must be tired, please rest."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "应该会...但是",
                "meaning": "推测+担忧(应该会...但是)",
                "rules": [
                    "动词/形容词+(으)ㄹ 텐데"
                ],
                "notes": [
                    "推测与担忧的结合。",
                    "前半句是说话人的强烈推测，后半句通常给出建议或表达遗憾/担忧：피곤할 텐데 쉬세요 (推测你应该很累了，建议你去休息吧)。",
                    "非常体现韩国人的情商。"
                ]
            },
            "en": {
                "description": "I expect/assume but...",
                "meaning": "Expected situation with concern",
                "rules": [
                    "Verb/Adj + (으)ㄹ 텐데"
                ],
                "notes": [
                    "Combination of guess and concern. The first half is the speaker's strong guess, and the second half usually gives advice or expresses regret/concern.",
                    "피곤할 텐데 쉬세요 (I guess you must be very tired, I suggest you go rest).",
                    "Highly reflects the emotional intelligence (nunchi) of Koreans."
                ]
            }
        }
    },
    {
        "id": "l3_032",
        "category": "L3 - 16과: 기후와 날씨",
        "level": "L3",
        "title": "~아/어 있다",
        "examples": [
            {
                "ko": "문이 열려 있어요.",
                "translations": {
                    "zh-CN": "门开着呢。",
                    "en": "The door is open (state)."
                }
            },
            {
                "ko": "창문이 열려 있어요.",
                "translations": {
                    "zh-CN": "窗户开着呢。",
                    "en": "The window is open."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "保持某种结果状态",
                "meaning": "保持某种结果状态",
                "rules": [
                    "动词+아/어 있다"
                ],
                "notes": [
                    "结果状态的持续。",
                    "极其容易和 고 있다 混淆！",
                    "고 있다 表示动作“正在进行”（衣服正在被穿上），而 아/어 있다 表示动作已经结束，但“结果状态一直保持着”（衣服一直穿在身上）。"
                ]
            },
            "en": {
                "description": "State maintenance",
                "meaning": "Resultant state (be in a state of)",
                "rules": [
                    "Verb + 아/어 있다"
                ],
                "notes": [
                    "Continuation of a resultant state. Extremely easy to confuse with 고 있다!",
                    "고 있다 indicates that an action is 'currently in progress' (clothes are currently being put on), while 아/어 있다 indicates that the action has ended, but the 'resultant state is maintained' (clothes are kept worn on the body)."
                ]
            }
        }
    },
    {
        "id": "l3_033",
        "category": "L3 - 추가 문법 (Extra Grammar)",
        "level": "L3",
        "title": "~(으)ㄴ 채(로)",
        "examples": [
            {
                "ko": "신발을 신은 채로 들어왔어요.",
                "translations": {
                    "zh-CN": "穿着鞋就进来了。",
                    "en": "Came in with shoes on."
                }
            },
            {
                "ko": "불을 켠 채로 잠들었어요.",
                "translations": {
                    "zh-CN": "开着灯就睡着了。",
                    "en": "Fell asleep with the light on."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "保持某个状态不变",
                "meaning": "保持某个状态不变",
                "rules": [
                    "动词+(으)ㄴ 채로"
                ],
                "notes": [
                    "维持原有状态。",
                    "表示“在保持着...状态的情况下”做了另一件事。",
                    "前面必须使用过去定语形(ㄴ/은)。",
                    "常用来描述某种不正常、不应该或无意中维持的状态（比如：穿着鞋进屋了）。"
                ]
            },
            "en": {
                "description": "In the state of",
                "meaning": "While remaining in a state",
                "rules": [
                    "Verb + (으)ㄴ 채로"
                ],
                "notes": [
                    "Maintaining the original state. Expresses doing another action 'while remaining in the state of...'.",
                    "Must use the past modifier form (ㄴ/은) beforehand.",
                    "Often used to describe an abnormal, inappropriate, or unintentionally maintained state (e.g., entered the house while still wearing shoes)."
                ]
            }
        }
    },
    {
        "id": "l3_034",
        "category": "L3 - 추가 문법 (Extra Grammar)",
        "level": "L3",
        "title": "~(으)ㄹ 테니까",
        "examples": [
            {
                "ko": "제가 할 테니까 쉬세요.",
                "translations": {
                    "zh-CN": "我来做，你休息。",
                    "en": "I'll do it so you rest."
                }
            },
            {
                "ko": "비가 올 테니까 우산 가져가세요.",
                "translations": {
                    "zh-CN": "会下雨的，带伞吧。",
                    "en": "It will rain, so take an umbrella."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "我会...所以你...",
                "meaning": "我会...所以你...",
                "rules": [
                    "动词/形容词+(으)ㄹ 테니까"
                ],
                "notes": [
                    "意图或推测的依据。",
                    "有两种完全不同的用法。",
                    "如果主语是第一人称：表示“我的意图”（我打算...所以你...）；如果主语是其他人称：表示“我的推测”（我推测他会...所以...）。"
                ]
            },
            "en": {
                "description": "I will so...",
                "meaning": "My intention, so you should...",
                "rules": [
                    "Verb/Adj + (으)ㄹ 테니까"
                ],
                "notes": [
                    "Basis for intention or guess. Has two completely different usages.",
                    "If the subject is 1st person: Expresses 'My intention' (I plan to... so you should...).",
                    "If the subject is 2nd/3rd person: Expresses 'My guess' (I guess he will... so...)."
                ]
            }
        }
    },
    {
        "id": "l3_035",
        "category": "L3 - 추가 문법 (Extra Grammar)",
        "level": "L3",
        "title": "~(이)라도",
        "examples": [
            {
                "ko": "커피라도 마실까요?",
                "translations": {
                    "zh-CN": "哪怕喝杯咖啡也好？",
                    "en": "Shall we at least have coffee?"
                }
            },
            {
                "ko": "물이라도 한 잔 드세요.",
                "translations": {
                    "zh-CN": "哪怕喝杯水也好。",
                    "en": "Please have at least a glass of water."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "哪怕是...也好",
                "meaning": "哪怕是...也好",
                "rules": [
                    "名词+(이)라도"
                ],
                "notes": [
                    "退而求其次。",
                    "表示在没有最佳选项时，选择了次优项（“哪怕是...也好 / 即使不是最好但也行”）。",
                    "有时带有一点妥协或委曲求全的语气。"
                ]
            },
            "en": {
                "description": "Even if just / At least",
                "meaning": "Even if it's just, at least",
                "rules": [
                    "Noun + (이)라도"
                ],
                "notes": [
                    "Settling for the next best thing. Indicates that in the absence of the best option, the second-best option is chosen ('Even if it's just... / Even if it's not the best, it's fine').",
                    "Sometimes carries a tone of compromise or reluctantly making do."
                ]
            }
        }
    },
    {
        "id": "l3_036",
        "category": "L3 - 추가 문법 (Extra Grammar)",
        "level": "L3",
        "title": "~기가 무섭게",
        "examples": [
            {
                "ko": "문을 열기가 무섭게 고양이가 나갔어요.",
                "translations": {
                    "zh-CN": "门一开猫就跑出去了。",
                    "en": "The cat went out as soon as the door opened."
                }
            },
            {
                "ko": "수업이 끝나기가 무섭게 뛰어나갔어요.",
                "translations": {
                    "zh-CN": "课一结束就跑出去了。",
                    "en": "Ran out the moment class ended."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "紧接着",
                "meaning": "一...就(紧接着)",
                "rules": [
                    "动词+기가 무섭게"
                ],
                "notes": [
                    "极速衔接。",
                    "夸张地强调速度极快（“一...就立刻...”）。",
                    "在语气上比 자마자 更加强烈和戏剧化，多用于生动地叙述某人动作飞快。"
                ]
            },
            "en": {
                "description": "No sooner than",
                "meaning": "No sooner than",
                "rules": [
                    "Verb + 기가 무섭게"
                ],
                "notes": [
                    "Extreme speed transition. Exaggeratedly emphasizes extreme speed ('As soon as... immediately...').",
                    "In tone, it is much stronger and more dramatic than 자마자, often used to vividly narrate someone acting very fast."
                ]
            }
        }
    },
    {
        "id": "l3_037",
        "category": "L3 - 추가 문법 (Extra Grammar)",
        "level": "L3",
        "title": "~기는요",
        "examples": [
            {
                "ko": "가: 한국어를 잘하시네요. 나: 잘하기는요.",
                "translations": {
                    "zh-CN": "A: 韩语说得好。B: 哪里哪里。",
                    "en": "A: You speak Korean well. B: Not really."
                }
            },
            {
                "ko": "예쁘기는요. 아직 멀었어요.",
                "translations": {
                    "zh-CN": "漂亮什么呀，还差得远呢。",
                    "en": "Pretty? Not at all, I've got a long way to go."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "哪里哪里",
                "meaning": "谦虚否定(哪里哪里)",
                "rules": [
                    "动词/形容词+기는요"
                ],
                "notes": [
                    "极致的谦虚。",
                    "当别人夸奖你时，用来委婉地否认，表示“哪里哪里”。",
                    "在韩国文化中，用这个句型回应赞美，比干巴巴地说 아니에요 要地道和自然得多。"
                ]
            },
            "en": {
                "description": "Not really / Modesty",
                "meaning": "Modest denial or disagreement",
                "rules": [
                    "Verb/Adj + 기는요"
                ],
                "notes": [
                    "Extreme modesty. Used to politely deny when someone praises you, meaning 'Not at all'.",
                    "In Korean culture, responding to compliments with this pattern is much more authentic and natural than a dry 아니에요."
                ]
            }
        }
    },
    {
        "id": "l3_038",
        "category": "L3 - 추가 문법 (Extra Grammar)",
        "level": "L3",
        "title": "~길래",
        "examples": [
            {
                "ko": "날씨가 좋길래 산책을 나갔어요.",
                "translations": {
                    "zh-CN": "发现天气好就出去散步了。",
                    "en": "Weather was nice so I went for a walk."
                }
            },
            {
                "ko": "맛있어 보이길래 사 봤어요.",
                "translations": {
                    "zh-CN": "看起来好吃就买了。",
                    "en": "It looked delicious so I bought it."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "发现了原因所以...",
                "meaning": "发现了原因所以...",
                "rules": [
                    "动词/形容词+길래"
                ],
                "notes": [
                    "基于发现的行动。",
                    "表示说话人亲自发现、观察到了某个客观事实（前句），因此自己采取了相应的行动（后句）。",
                    "后半句的主语必须是第一人称（我）。"
                ]
            },
            "en": {
                "description": "Because (discovered reason)",
                "meaning": "Because (I discovered that)",
                "rules": [
                    "Verb/Adj + 길래"
                ],
                "notes": [
                    "Action based on discovery. Indicates that the speaker personally discovered or observed an objective fact (first clause), and therefore took corresponding action themselves (second clause).",
                    "The subject of the second half MUST be the first person (I)."
                ]
            }
        }
    },
    {
        "id": "l3_039",
        "category": "L3 - 추가 문법 (Extra Grammar)",
        "level": "L3",
        "title": "~대요/래요/재요",
        "examples": [
            {
                "ko": "내일 비가 온대요.",
                "translations": {
                    "zh-CN": "听说明天下雨。",
                    "en": "They say it'll rain tomorrow."
                }
            },
            {
                "ko": "내일 회의 없대요.",
                "translations": {
                    "zh-CN": "听说明天没有会议。",
                    "en": "They say no meeting tomorrow."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "缩略间接引语",
                "meaning": "缩略间接引语",
                "rules": [
                    "~다고 해요 → ~대요",
                    "~라고 해요 → ~래요",
                    "~자고 해요 → ~재요"
                ],
                "notes": [
                    "间接引语的口语大缩写。",
                    "在日常对话中，人们极少说完整的间接引语。",
                    "对应规则：다고 해요→대요(陈述), 라고 해요→래요(名词), 자고 해요→재요(共动), 냐고 해요→냬요(疑问)。",
                    "必考考点！"
                ]
            },
            "en": {
                "description": "Contracted quotation",
                "meaning": "Contracted indirect quotation",
                "rules": [
                    "~다고 해요 → ~대요",
                    "~라고 해요 → ~래요",
                    "~자고 해요 → ~재요"
                ],
                "notes": [
                    "Spoken abbreviation of indirect speech. In daily conversation, people rarely say the full indirect speech.",
                    "Mapping rules: 다고 해요→대요 (Statement), 라고 해요→래요 (Noun), 자고 해요→재요 (Proposal), 냐고 해요→냬요 (Question).",
                    "A mandatory exam topic!"
                ]
            }
        }
    },
    {
        "id": "l3_040",
        "category": "L3 - 추가 문법 (Extra Grammar)",
        "level": "L3",
        "title": "~더라고요",
        "examples": [
            {
                "ko": "그 식당 음식이 맛있더라고요.",
                "translations": {
                    "zh-CN": "那家餐厅的菜很好吃（我亲眼见）。",
                    "en": "I found the food there was good."
                }
            },
            {
                "ko": "제주도가 정말 아름답더라고요.",
                "translations": {
                    "zh-CN": "济州岛真的很美（我亲身感受到的）。",
                    "en": "I found Jeju Island really beautiful."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "我发现...",
                "meaning": "回忆亲眼所见(我发现...)",
                "rules": [
                    "动词/形容词+더라고요"
                ],
                "notes": [
                    "亲身经历的回忆。",
                    "用来向别人讲述自己亲眼看到、亲身体验过的事实。",
                    "绝对不能用于转述从别人那里听来的传闻或自己没经历过的事！"
                ]
            },
            "en": {
                "description": "I noticed/observed",
                "meaning": "Recalling personal observation",
                "rules": [
                    "Verb/Adj + 더라고요"
                ],
                "notes": [
                    "Recalling personal experience. Used to tell others about facts you have seen with your own eyes and experienced personally.",
                    "Absolutely CANNOT be used to retell hearsay heard from others or things you haven't experienced yourself!"
                ]
            }
        }
    },
    {
        "id": "l3_041",
        "category": "L3 - 추가 문법 (Extra Grammar)",
        "level": "L3",
        "title": "~아/어 버리다",
        "examples": [
            {
                "ko": "다 먹어 버렸어요.",
                "translations": {
                    "zh-CN": "全吃光了。",
                    "en": "Ate it all up."
                }
            },
            {
                "ko": "숙제를 잊어 버렸어요.",
                "translations": {
                    "zh-CN": "把作业彻底忘了。",
                    "en": "I completely forgot my homework."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "惋惜/痛快",
                "meaning": "彻底完成(惋惜/痛快)",
                "rules": [
                    "动词+아/어 버리다"
                ],
                "notes": [
                    "动作的彻底完结与情感宣泄。",
                    "表示某事已经彻底做完，且通常伴随强烈的感情。",
                    "根据语境有两种相反情绪：①痛快/释怀（终于全干完了！） ②遗憾/惋惜（不小心全忘光了...）。"
                ]
            },
            "en": {
                "description": "Completely done",
                "meaning": "Completely finished (with emotion)",
                "rules": [
                    "Verb + 아/어 버리다"
                ],
                "notes": [
                    "Thorough completion of an action and emotional release. Expresses that something has been completely finished, usually accompanied by strong emotions.",
                    "Depending on the context, there are two opposite emotions: ① Relief/Satisfaction (Finally finished it all!) ② Regret/Disappointment (Accidentally forgot it all...)."
                ]
            }
        }
    },
    {
        "id": "l3_042",
        "category": "L3 - 추가 문법 (Extra Grammar)",
        "level": "L3",
        "title": "~았/었던",
        "examples": [
            {
                "ko": "전에 살았던 집",
                "translations": {
                    "zh-CN": "以前住过的房子",
                    "en": "The house I used to live in"
                }
            },
            {
                "ko": "어릴 때 살았던 동네",
                "translations": {
                    "zh-CN": "小时候住过的小区",
                    "en": "The neighborhood I lived in as a child"
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "曾经...的",
                "meaning": "过去回忆定语(曾经...的)",
                "rules": [
                    "动词+았/었던"
                ],
                "notes": [
                    "彻底终结的过去。",
                    "用来回忆过去发生过，但现在已经彻底结束、不再继续的事情。",
                    "与单纯的 던 相比，它更强调“断层感”，即过去的状态与现在完全切断了。"
                ]
            },
            "en": {
                "description": "Past recalled modifier",
                "meaning": "Past experience modifier",
                "rules": [
                    "Verb + 았/었던"
                ],
                "notes": [
                    "A thoroughly ended past. Used to recall things that happened in the past, but have completely ended now and no longer continue.",
                    "Compared to the simple 던, it emphasizes a 'sense of disconnection', meaning the past state is completely cut off from the present."
                ]
            }
        }
    },
    {
        "id": "l4_001",
        "category": "L4 - 1과: 한국 생활 적응",
        "level": "L4",
        "title": "~(으)ㄹ수록",
        "examples": [
            {
                "ko": "한국어는 배울수록 어려워요.",
                "translations": {
                    "zh-CN": "韩语越学越难。",
                    "en": "Korean gets harder the more you study."
                }
            },
            {
                "ko": "생각할수록 화가 나요.",
                "translations": {
                    "zh-CN": "越想越生气。",
                    "en": "The more I think, the angrier I get."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "越...越...",
                "meaning": "越...越...",
                "rules": [
                    "动词/形容词+(으)ㄹ수록"
                ],
                "notes": [
                    "递进规律。",
                    "表示“越...越...”。",
                    "核心考点：如果前后动词/形容词相同，前面必须加上 (으)면，即“V-(으)면 V-(으)ㄹ수록”。",
                    "例如：보면 볼수록 (越看越...)。",
                    "也可以搭配 갈수록 (越来越/随着时间的推移)。"
                ]
            },
            "en": {
                "description": "The more ~ the more",
                "meaning": "The more ~ the more",
                "rules": [
                    "Verb/Adj + (으)ㄹ수록"
                ],
                "notes": [
                    "Progressive relation. Indicates 'The more... the more...'.",
                    "Core exam rule: If the verb/adjective is repeated, the preceding one must take (으)면, forming 'V-(으)면 V-(으)ㄹ수록'.",
                    "Example: 보면 볼수록 (The more you look at it...).",
                    "Can also be paired with 갈수록 (As time goes by / increasingly)."
                ]
            }
        }
    },
    {
        "id": "l4_002",
        "category": "L4 - 1과: 한국 생활 적응",
        "level": "L4",
        "title": "~느라고",
        "examples": [
            {
                "ko": "일하느라고 전화를 못 받았어요.",
                "translations": {
                    "zh-CN": "因为工作没接到电话。",
                    "en": "Couldn't answer because I was working."
                }
            },
            {
                "ko": "게임하느라고 숙제를 못 했어요.",
                "translations": {
                    "zh-CN": "因为玩游戏没写作业。",
                    "en": "Couldn't do homework because I was gaming."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "负面",
                "meaning": "因为做...耽误了(负面)",
                "rules": [
                    "动词+느라고"
                ],
                "notes": [
                    "耗时耗力的原因。",
                    "表示因为做前面这件事（花费了大量时间/精力），导致了后面的结果。",
                    "三大铁律考点：①前后主语必须一致！",
                    "②不能接命令/共动句！",
                    "③结果通常是负面的（没能做.../迟到了等）。"
                ]
            },
            "en": {
                "description": "Because of doing (excuse)",
                "meaning": "Excuse for negative result",
                "rules": [
                    "Verb + 느라고"
                ],
                "notes": [
                    "Reason for consuming time/energy. Indicates that doing the preceding action (which took a lot of time/energy) resulted in the following consequence.",
                    "Three ironclad exam rules: ① The subjects MUST be exactly the same! ② Cannot be followed by imperative/propositive sentences! ③ The result is usually negative (couldn't do..., late, etc.)."
                ]
            }
        }
    },
    {
        "id": "l4_003",
        "category": "L4 - 2과: 가족의 변화",
        "level": "L4",
        "title": "~(으)ㄹ 뿐만 아니라",
        "examples": [
            {
                "ko": "똑똑할 뿐만 아니라 성격도 좋아요.",
                "translations": {
                    "zh-CN": "不仅聪明性格也好。",
                    "en": "Not only smart but also kind."
                }
            },
            {
                "ko": "가격이 쌀 뿐만 아니라 맛도 좋아요.",
                "translations": {
                    "zh-CN": "不仅便宜而且好吃。",
                    "en": "Not only cheap but also tasty."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "不仅...而且...",
                "meaning": "不仅...而且...",
                "rules": [
                    "动词/形容词+(으)ㄹ 뿐만 아니라"
                ],
                "notes": [
                    "并列递进句型。",
                    "表示“不仅A，而且B也...”。",
                    "如果是名词，直接加 뿐만 아니라。",
                    "核心特征：后半句通常必须要带助词 '도(也)'。",
                    "前后小句的逻辑方向必须一致（同好或同坏）。"
                ]
            },
            "en": {
                "description": "Not only but also",
                "meaning": "Not only A but also B",
                "rules": [
                    "Verb/Adj + (으)ㄹ 뿐만 아니라"
                ],
                "notes": [
                    "Parallel progressive pattern. Indicates 'Not only A, but also B...'.",
                    "If attached to a noun, just use 뿐만 아니라 directly.",
                    "Core characteristic: The second clause usually MUST include the particle '도' (also). The logical direction of both clauses must be consistent (both good or both bad)."
                ]
            }
        }
    },
    {
        "id": "l4_004",
        "category": "L4 - 2과: 가족의 변화",
        "level": "L4",
        "title": "~(으)ㄹ 수밖에 없다",
        "examples": [
            {
                "ko": "포기할 수밖에 없었어요.",
                "translations": {
                    "zh-CN": "不得不放弃。",
                    "en": "Had no choice but to give up."
                }
            },
            {
                "ko": "기다릴 수밖에 없었어요.",
                "translations": {
                    "zh-CN": "只能等着了。",
                    "en": "Had no choice but to wait."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "不得不做...",
                "meaning": "不得不做...",
                "rules": [
                    "动词+(으)ㄹ 수밖에 없다"
                ],
                "notes": [
                    "唯一的无奈选择。",
                    "表示“除了这样做，别无他法/不得不...”。",
                    "比 '아/어야 하다(必须)' 语气更重，强调的是在当前客观环境下【没有其他退路】的无奈感。"
                ]
            },
            "en": {
                "description": "Have no choice but",
                "meaning": "Have no choice but to",
                "rules": [
                    "Verb + (으)ㄹ 수밖에 없다"
                ],
                "notes": [
                    "The only helpless choice. Indicates 'Have no choice but to... / Cannot help but...'.",
                    "It carries a heavier tone than '아/어야 하다 (must)', emphasizing the feeling of helplessness that there is absolutely [no other way out] under the current objective circumstances."
                ]
            }
        }
    },
    {
        "id": "l4_005",
        "category": "L4 - 3과: 생활 속의 과학",
        "level": "L4",
        "title": "~(으)ㄹ 줄 몰랐다/알았다",
        "examples": [
            {
                "ko": "이렇게 어려울 줄 몰랐어요.",
                "translations": {
                    "zh-CN": "没想到这么难。",
                    "en": "Didn't expect it to be this hard."
                }
            },
            {
                "ko": "벌써 졸업할 줄 몰랐어요.",
                "translations": {
                    "zh-CN": "没想到已经毕业了。",
                    "en": "Didn't expect to graduate already."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "没想到.../以为...",
                "meaning": "没想到.../以为...",
                "rules": [
                    "动词/形容词+(으)ㄹ 줄 몰랐다"
                ],
                "notes": [
                    "极易混淆考点！",
                    "两者含义完全相反！",
                    "~(으)ㄹ 줄 몰랐다 = “真没想到会...”（表示事情发生了，我很意外）。",
                    "~(으)ㄹ 줄 알았다 = “我本以为会...”（表示事情没发生，我的预想是错的）。"
                ]
            },
            "en": {
                "description": "Didn't expect / Expected",
                "meaning": "Unexpected/expected outcome",
                "rules": [
                    "Verb/Adj + (으)ㄹ 줄 몰랐다"
                ],
                "notes": [
                    "Highly confusing exam point! The two meanings are completely opposite!",
                    "~(으)ㄹ 줄 몰랐다 = 'I really didn't expect that...' (Indicates the event happened, and I'm surprised).",
                    "~(으)ㄹ 줄 알았다 = 'I thought that...' (Indicates the event didn't happen, and my assumption was wrong)."
                ]
            }
        }
    },
    {
        "id": "l4_006",
        "category": "L4 - 3과: 생활 속의 과학",
        "level": "L4",
        "title": "~곤 하다",
        "examples": [
            {
                "ko": "어릴 때 바다에 가곤 했어요.",
                "translations": {
                    "zh-CN": "小时候经常去海边。",
                    "en": "I used to go to the sea as a child."
                }
            },
            {
                "ko": "학생 때 도서관에 가곤 했어요.",
                "translations": {
                    "zh-CN": "学生时代经常去图书馆。",
                    "en": "I used to go to the library as a student."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "习惯性",
                "meaning": "经常做...(习惯性)",
                "rules": [
                    "动词+곤 하다"
                ],
                "notes": [
                    "过去的习惯与怀旧。",
                    "表示过去常常做某事（规律性的习惯），但【现在已经绝对不再做了】。",
                    "常带有一种回忆、怀念或者沧海桑田的语气。",
                    "不能用于只发生过一次的事。"
                ]
            },
            "en": {
                "description": "Used to regularly",
                "meaning": "Used to do regularly",
                "rules": [
                    "Verb + 곤 하다"
                ],
                "notes": [
                    "Past habits and nostalgia. Indicates something you used to do often in the past (a regular habit), but [absolutely do not do anymore now].",
                    "Often carries a tone of reminiscence, nostalgia, or reflecting on how times have changed. Cannot be used for a one-time event."
                ]
            }
        }
    },
    {
        "id": "l4_007",
        "category": "L4 - 4과: 한국의 의례",
        "level": "L4",
        "title": "~(으)ㄴ 나머지",
        "examples": [
            {
                "ko": "너무 놀란 나머지 아무 말도 못 했어요.",
                "translations": {
                    "zh-CN": "因为太惊讶了，以至于什么话都没说出来。",
                    "en": "I was so surprised that I couldn't say anything."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "过度...以至于 / 因为太...",
                "meaning": "过度...以至于 / 因为太...",
                "rules": [
                    "动词/形容词+(으)ㄴ 나머지"
                ],
                "notes": [
                    "极端导致的结果。",
                    "因为前面的程度过于极端（通常带有感情色彩如：太激动、太害怕、太累），导致了后面（通常是消极或出乎意料失控）的结果。"
                ]
            },
            "en": {
                "description": "As a result of being too...",
                "meaning": "As a result of being too...",
                "rules": [
                    "Verb/Adj + (으)ㄴ 나머지"
                ],
                "notes": [
                    "Extreme consequence. Because the degree of the preceding action/state was too extreme (usually with emotional undertones like being too excited, scared, or tired), it resulted in the following (usually negative or unexpectedly out-of-control) consequence."
                ]
            }
        }
    },
    {
        "id": "l4_008",
        "category": "L4 - 4과: 한국의 의례",
        "level": "L4",
        "title": "~더니",
        "examples": [
            {
                "ko": "열심히 공부하더니 1등을 했어요.",
                "translations": {
                    "zh-CN": "努力学习然后得了第一名。",
                    "en": "Studied hard and then got 1st place."
                }
            },
            {
                "ko": "비가 오더니 갑자기 그쳤어요.",
                "translations": {
                    "zh-CN": "下着雨然后突然停了。",
                    "en": "It was raining and then suddenly stopped."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "亲眼见到的变化/转折",
                "meaning": "亲眼见到的变化/转折",
                "rules": [
                    "动词/形容词+더니"
                ],
                "notes": [
                    "观察与对比的转折。",
                    "两大考点用法：①描述别人的变化（我看到他昨天还生病，今天就好了）。",
                    "②描述过去与现在的状态对比。",
                    "绝不能用于第一人称的主观行为（不能说“我昨天学了，今天玩了”）。"
                ]
            },
            "en": {
                "description": "And then (observed change)",
                "meaning": "Observed change or contrast",
                "rules": [
                    "Verb/Adj + 더니"
                ],
                "notes": [
                    "Observation and contrasting shift. Two major exam usages:",
                    "① Describing a change in someone else (I saw him sick yesterday, but he's fine today).",
                    "② Describing a contrast between past and present states.",
                    "Absolutely CANNOT be used for the speaker's own subjective actions (You cannot say 'I studied yesterday, but played today')."
                ]
            }
        }
    },
    {
        "id": "l4_009",
        "category": "L4 - 5과: 문화유산",
        "level": "L4",
        "title": "~든지 ~든지",
        "examples": [
            {
                "ko": "비가 오든지 눈이 오든지 갈 거예요.",
                "translations": {
                    "zh-CN": "不管下雨还是下雪都会去。",
                    "en": "Whether rain or snow I'll go."
                }
            },
            {
                "ko": "뭘 먹든지 상관없어요.",
                "translations": {
                    "zh-CN": "吃什么都无所谓。",
                    "en": "I don't care what we eat."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "不管A还是B",
                "meaning": "不管A还是B",
                "rules": [
                    "动词/形容词+든지"
                ],
                "notes": [
                    "全面包容的选择。",
                    "表示“无论是A还是B（都无所谓）”。",
                    "当它与疑问词搭配时，立刻变成万能副词：뭐든지(不管什么都), 어디든지(不管哪里都), 누구든지(不管谁都)。"
                ]
            },
            "en": {
                "description": "Whether A or B",
                "meaning": "Whether A or B",
                "rules": [
                    "Verb/Adj + 든지"
                ],
                "notes": [
                    "All-inclusive choice. Indicates 'Whether it's A or B (it doesn't matter)'.",
                    "When paired with WH-question words, it instantly becomes a universal adverb: 뭐든지 (whatever), 어디든지 (wherever), 누구든지 (whoever)."
                ]
            }
        }
    },
    {
        "id": "l4_010",
        "category": "L4 - 5과: 문화유산",
        "level": "L4",
        "title": "얼마나 ~는지 모르다",
        "examples": [
            {
                "ko": "얼마나 기뻤는지 몰라요.",
                "translations": {
                    "zh-CN": "你不知道我多高兴。",
                    "en": "You can't imagine how happy I was."
                }
            },
            {
                "ko": "얼마나 보고 싶었는지 몰라요.",
                "translations": {
                    "zh-CN": "你不知道我有多想你。",
                    "en": "You don't know how much I missed you."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "强调程度",
                "meaning": "不知道多么...(强调程度)",
                "rules": [
                    "얼마나+动词/形容词+는지/ㄴ지 모르다"
                ],
                "notes": [
                    "程度极深的感叹。",
                    "固定句型搭配，强烈强调程度：“你根本不知道有多...！”。",
                    "前面必须搭配 얼마나 (多么)，后面必须是 는지 모르다 (不知道)。",
                    "常用于向别人夸张地描述某个经历。"
                ]
            },
            "en": {
                "description": "So ~ that (emphasis)",
                "meaning": "Emphasizes degree (you can't imagine how much)",
                "rules": [
                    "얼마나 + Verb/Adj + 는지/ㄴ지 모르다"
                ],
                "notes": [
                    "Exclamation of extreme degree. A fixed pattern to strongly emphasize the extent: 'You have no idea how...!'",
                    "Must be paired with 얼마나 (how much) at the front, and 는지 모르다 (don't know) at the back.",
                    "Often used to exaggerate and describe an experience to someone."
                ]
            }
        }
    },
    {
        "id": "l4_011",
        "category": "L4 - 6과: 국제화 시대",
        "level": "L4",
        "title": "~(으)ㄹ 정도로",
        "examples": [
            {
                "ko": "눈물이 날 정도로 감동했어요.",
                "translations": {
                    "zh-CN": "感动到流泪的程度。",
                    "en": "Was moved to the point of tears."
                }
            },
            {
                "ko": "못 알아들을 정도로 빨리 말해요.",
                "translations": {
                    "zh-CN": "说得快到听不懂的程度。",
                    "en": "Speaks so fast I can't understand."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "到了...的程度",
                "meaning": "到了...的程度",
                "rules": [
                    "动词/形容词+(으)ㄹ 정도로"
                ],
                "notes": [
                    "夸张的程度比喻。",
                    "表示“到了...的程度”。",
                    "常常用一个极端的假想情况来形容真实的程度（例如：疼得【像要死了一样】的程度）。",
                    "意思类似 만큼，但 정도로 偏向正式书面语。"
                ]
            },
            "en": {
                "description": "To the extent that",
                "meaning": "To the extent/degree that",
                "rules": [
                    "Verb/Adj + (으)ㄹ 정도로"
                ],
                "notes": [
                    "Exaggerated degree metaphor. Indicates 'to the point of...'.",
                    "Often uses an extreme hypothetical situation to describe the actual degree (e.g., hurts [to the point of dying]).",
                    "Similar in meaning to 만큼, but 정도로 leans more towards formal written language."
                ]
            }
        }
    },
    {
        "id": "l4_012",
        "category": "L4 - 6과: 국제화 시대",
        "level": "L4",
        "title": "~던",
        "examples": [
            {
                "ko": "자주 가던 식당이 문을 닫았어요.",
                "translations": {
                    "zh-CN": "以前经常去的餐厅关门了。",
                    "en": "Restaurant I used to go to closed."
                }
            },
            {
                "ko": "마시던 커피가 식었어요.",
                "translations": {
                    "zh-CN": "正在喝的咖啡凉了。",
                    "en": "The coffee I was drinking got cold."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "做过...的/正在做的",
                "meaning": "回忆过去(做过...的/正在做的)",
                "rules": [
                    "动词/形容词+던"
                ],
                "notes": [
                    "回忆的断崖。",
                    "表示过去未完成或反复发生的动作（“过去常常...但没做完”/“当时正在...”）。",
                    "核心考点：如果说 입던 옷，表示“过去常穿（但现在不穿）”或“穿了一半还没脱”的衣服。"
                ]
            },
            "en": {
                "description": "Used to / Was doing",
                "meaning": "Past modifier (recall)",
                "rules": [
                    "Verb/Adj + 던"
                ],
                "notes": [
                    "The cliff of memories. Indicates an incomplete or repeatedly occurring past action ('used to... but didn't finish' / 'was doing at that time...').",
                    "Core exam point: 입던 옷 means clothes 'you used to wear often (but not anymore)' or 'clothes you were in the middle of taking off/putting on'.",
                    "Contrast with 았/었던, which implies total completion and closure."
                ]
            }
        }
    },
    {
        "id": "l4_013",
        "category": "L4 - 7과: 현대인의 질병",
        "level": "L4",
        "title": "~되",
        "examples": [
            {
                "ko": "음식을 먹되 남기지 마세요.",
                "translations": {
                    "zh-CN": "吃可以，但不要剩下。",
                    "en": "You may eat the food, but do not leave leftovers."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "虽然...但是... / 允许...",
                "meaning": "虽然...但是... / 允许做...但是要注意...",
                "rules": [
                    "动词+되"
                ],
                "notes": [
                    "批准与附加限制。",
                    "用于让步或许可。",
                    "意思是“前面的事情我承认/允许，但是...（必须遵守后面的限制条件）”。",
                    "常用于公文、规定或长辈对晚辈的教导中。"
                ]
            },
            "en": {
                "description": "Do it, but... / Admitting X, but requesting Y",
                "meaning": "Do it, but... / Admitting X, but requesting Y",
                "rules": [
                    "Verb + 되"
                ],
                "notes": [
                    "Approval and additional restrictions. Used for concession or permission.",
                    "Means 'I acknowledge/allow the preceding fact, but... (you must abide by the following restrictive condition)'.",
                    "Commonly used in official documents, regulations, or when elders instruct juniors."
                ]
            }
        }
    },
    {
        "id": "l4_014",
        "category": "L4 - 7과: 현대인의 질병",
        "level": "L4",
        "title": "~았/었더니",
        "examples": [
            {
                "ko": "많이 먹었더니 배가 아파요.",
                "translations": {
                    "zh-CN": "吃多了然后肚子疼。",
                    "en": "Ate a lot and now my stomach hurts."
                }
            },
            {
                "ko": "운동했더니 기분이 좋아요.",
                "translations": {
                    "zh-CN": "运动完之后心情好。",
                    "en": "I feel good after exercising."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "结果/变化",
                "meaning": "做了之后（结果/变化）",
                "rules": [
                    "动词+았/었더니"
                ],
                "notes": [
                    "第一视角的发现。",
                    "两大核心用法：①主语是我：我做了某事后，突然发现了后面的结果。",
                    "②主语是别人：我观察到别人做了某事，导致了后面的变化。",
                    "不能用于“我打算做某事”。"
                ]
            },
            "en": {
                "description": "After I did, then...",
                "meaning": "After doing, the result was",
                "rules": [
                    "Verb + 았/었더니"
                ],
                "notes": [
                    "First-person perspective discovery. Two core usages:",
                    "① Subject is 'I': After I did something, I suddenly discovered the following result.",
                    "② Subject is someone else: I observed someone else doing something, which led to the following change.",
                    "Cannot be used for 'I plan to do something'."
                ]
            }
        }
    },
    {
        "id": "l4_015",
        "category": "L4 - 8과: 정보화 사회",
        "level": "L4",
        "title": "~(으)ㄹ 겸",
        "examples": [
            {
                "ko": "산책할 겸 커피 사러 나갔어요.",
                "translations": {
                    "zh-CN": "顺便散步顺便买咖啡。",
                    "en": "Went out for a walk and to buy coffee."
                }
            },
            {
                "ko": "운동할 겸 걸어서 왔어요.",
                "translations": {
                    "zh-CN": "顺便运动走过来了。",
                    "en": "I walked here, also for exercise."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "顺便也...",
                "meaning": "顺便也...",
                "rules": [
                    "动词+(으)ㄹ 겸"
                ],
                "notes": [
                    "一箭双雕的兼顾。",
                    "表示“顺便/兼顾”。",
                    "做一个动作，同时满足两个目的。",
                    "通常前面加 도，构成 A 도 할 겸 B 도 할 겸，非常有节奏感。"
                ]
            },
            "en": {
                "description": "Also to / While at it",
                "meaning": "While at it, also for",
                "rules": [
                    "Verb + (으)ㄹ 겸"
                ],
                "notes": [
                    "Killing two birds with one stone. Indicates 'doing something concurrently / taking the opportunity to'.",
                    "Doing one action to satisfy two purposes simultaneously.",
                    "Usually, '도' is added before it, forming 'A 도 할 겸 B 도 할 겸', which creates a very rhythmic sentence."
                ]
            }
        }
    },
    {
        "id": "l4_016",
        "category": "L4 - 8과: 정보화 사회",
        "level": "L4",
        "title": "~ㄴ/는다면서요?",
        "examples": [
            {
                "ko": "결혼한다면서요? 축하해요!",
                "translations": {
                    "zh-CN": "听说你结婚了？恭喜！",
                    "en": "I heard you're getting married? Congrats!"
                }
            },
            {
                "ko": "이사한다면서요? 어디로요?",
                "translations": {
                    "zh-CN": "听说你搬家了？搬去哪？",
                    "en": "I heard you're moving? Where to?"
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "听说...是真的吗？",
                "meaning": "听说...是真的吗？",
                "rules": [
                    "动词+ㄴ/는다면서요",
                    "形容词+다면서요"
                ],
                "notes": [
                    "带着求知欲的确认。",
                    "当你从别人那里听到了某个八卦或消息，去向当事人确认时使用：“听说你...是真的吗？”。",
                    "语气中多多少少带有一点好奇或惊讶。"
                ]
            },
            "en": {
                "description": "I heard that...?",
                "meaning": "Confirming hearsay",
                "rules": [
                    "Verb + ㄴ/는다면서요",
                    "Adj + 다면서요"
                ],
                "notes": [
                    "Confirmation with a desire to know. Used when you hear gossip or news from someone else and go to the person involved to confirm: 'I heard you..., is it true?'.",
                    "The tone more or less carries a bit of curiosity or surprise."
                ]
            }
        }
    },
    {
        "id": "l4_017",
        "category": "L4 - 9과: 사건과 사고",
        "level": "L4",
        "title": "~(으)ㄹ 뻔하다",
        "examples": [
            {
                "ko": "넘어질 뻔했어요.",
                "translations": {
                    "zh-CN": "差点摔倒。",
                    "en": "Almost fell down."
                }
            },
            {
                "ko": "차에 부딪힐 뻔했어요.",
                "translations": {
                    "zh-CN": "差点被车撞到。",
                    "en": "Almost got hit by a car."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "差一点就...",
                "meaning": "差一点就...",
                "rules": [
                    "动词+(으)ㄹ 뻔하다"
                ],
                "notes": [
                    "惊险的避让。",
                    "表示“差一点点就发生了（但庆幸的是并没有发生）”。",
                    "时态铁律：只能而且必须使用过去时（ㄹ 뻔했다）！",
                    "通常搭配 하마터면（差点）使用。"
                ]
            },
            "en": {
                "description": "Almost did",
                "meaning": "Almost happened",
                "rules": [
                    "Verb + (으)ㄹ 뻔하다"
                ],
                "notes": [
                    "A thrilling near-miss. Indicates 'almost happened (but fortunately didn't)'.",
                    "Ironclad tense rule: You can ONLY and MUST use the past tense (ㄹ 뻔했다)!",
                    "Usually paired with 하마터면 (almost)."
                ]
            }
        }
    },
    {
        "id": "l4_018",
        "category": "L4 - 9과: 사건과 사고",
        "level": "L4",
        "title": "~(으)로 인해서",
        "examples": [
            {
                "ko": "태풍으로 인해 피해가 컸다.",
                "translations": {
                    "zh-CN": "由于台风损失很大。",
                    "en": "Damage was great due to the typhoon."
                }
            },
            {
                "ko": "사고로 인해 도로가 막혔어요.",
                "translations": {
                    "zh-CN": "由于事故道路被堵了。",
                    "en": "The road was blocked due to an accident."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "正式/书面",
                "meaning": "由于(正式/书面)",
                "rules": [
                    "名词+(으)로 인해서"
                ],
                "notes": [
                    "严肃的因果归结。",
                    "表示原因“由于/因为...”。",
                    "极其正式的书面语！",
                    "常用于新闻报道、官方事故调查报告、学术论文中。",
                    "如果日常聊天用这个，会显得像在播报新闻。"
                ]
            },
            "en": {
                "description": "Due to (formal)",
                "meaning": "Due to (formal cause)",
                "rules": [
                    "Noun + (으)로 인해서"
                ],
                "notes": [
                    "Serious attribution of cause. Indicates the reason 'Due to / because of...'.",
                    "Extremely formal written language! Commonly used in news reports, official accident investigation reports, and academic papers.",
                    "If used in daily chat, it makes you sound like a news anchor."
                ]
            }
        }
    },
    {
        "id": "l4_019",
        "category": "L4 - 10과: 언어생활",
        "level": "L4",
        "title": "~(으)ㄴ/는 척하다",
        "examples": [
            {
                "ko": "모르는 척했어요.",
                "translations": {
                    "zh-CN": "假装不知道。",
                    "en": "Pretended not to know."
                }
            },
            {
                "ko": "안 아픈 척했어요.",
                "translations": {
                    "zh-CN": "假装不疼。",
                    "en": "Pretended it didn't hurt."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "假装做...",
                "meaning": "假装做...",
                "rules": [
                    "动词+는 척하다",
                    "形容词+ㄴ/은 척하다"
                ],
                "notes": [
                    "虚伪的伪装。",
                    "表示“明明不是那样，却假装成那样”。",
                    "时态匹配是唯一的难点：动词现在假装(는 척)、形容词假装(ㄴ/은 척)、假装过去做过(ㄴ/은 척)。"
                ]
            },
            "en": {
                "description": "Pretend to",
                "meaning": "Pretend to be/do",
                "rules": [
                    "Verb + 는 척하다",
                    "Adj + ㄴ/은 척하다"
                ],
                "notes": [
                    "Hypocritical disguise. Indicates 'Pretending to be that way even though it's clearly not'.",
                    "Tense matching is the only difficulty: Verb present pretend (는 척), Adjective pretend (ㄴ/은 척), Pretend to have done in the past (ㄴ/은 척)."
                ]
            }
        }
    },
    {
        "id": "l4_020",
        "category": "L4 - 10과: 언어생활",
        "level": "L4",
        "title": "~고 말다",
        "examples": [
            {
                "ko": "결국 울음을 터뜨리고 말았어요.",
                "translations": {
                    "zh-CN": "最终还是没忍住哭了出来。",
                    "en": "I eventually ended up bursting into tears."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "遗憾/无奈",
                "meaning": "最终还是...了 (遗憾/无奈)",
                "rules": [
                    "动词+고 말다"
                ],
                "notes": [
                    "无法挽回的结局。",
                    "表示事情最终发展成了非本意的结果（“最终还是...”）。",
                    "通常带有非常浓厚的惋惜、后悔、失望或无可奈何的感情色彩。"
                ]
            },
            "en": {
                "description": "Ended up doing... (unintended/regretful)",
                "meaning": "Ended up doing... (unintended/regretful)",
                "rules": [
                    "Verb + 고 말다"
                ],
                "notes": [
                    "Irreversible ending. Indicates that the situation ultimately developed into an unintended result ('Ended up...').",
                    "Usually carries a very strong emotional tone of regret, disappointment, or helplessness."
                ]
            }
        }
    },
    {
        "id": "l4_021",
        "category": "L4 - 11과: 교육 제도",
        "level": "L4",
        "title": "~기 마련이다",
        "examples": [
            {
                "ko": "노력하면 성공하기 마련이에요.",
                "translations": {
                    "zh-CN": "努力的话成功是必然的。",
                    "en": "If you try, success is bound to follow."
                }
            },
            {
                "ko": "노력하면 좋은 결과가 오기 마련이에요.",
                "translations": {
                    "zh-CN": "努力的话好结果是必然的。",
                    "en": "Good results are bound to come with effort."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "必然会...",
                "meaning": "必然会...",
                "rules": [
                    "动词/形容词+기 마련이다"
                ],
                "notes": [
                    "不可抗拒的真理。",
                    "表示某个结果是自然规律、人性本能或必然发生的事（“肯定是会...的”）。",
                    "不能用于随机发生或偶然的个人事件。"
                ]
            },
            "en": {
                "description": "Bound to happen",
                "meaning": "Naturally bound to happen",
                "rules": [
                    "Verb/Adj + 기 마련이다"
                ],
                "notes": [
                    "Irresistible truth. Indicates that a certain result is a natural law, human instinct, or inevitable ('It is bound to...').",
                    "Cannot be used for randomly occurring or accidental personal events."
                ]
            }
        }
    },
    {
        "id": "l4_022",
        "category": "L4 - 11과: 교육 제도",
        "level": "L4",
        "title": "~조차",
        "examples": [
            {
                "ko": "너무 아파서 물조차 마실 수 없어요.",
                "translations": {
                    "zh-CN": "因为太疼了，甚至连水都喝不了。",
                    "en": "I'm so sick that I can't even drink water."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "甚至连... / 居然...",
                "meaning": "甚至连... / 居然...",
                "rules": [
                    "名词+조차"
                ],
                "notes": [
                    "底线的突破。",
                    "极端的包含助词。",
                    "意思是“竟然连最基础、最理所当然的那个也/都...”。",
                    "通常预示着情况已经糟糕到了极点，比 마저/까지 的否定感更深。"
                ]
            },
            "en": {
                "description": "Even... (extreme case)",
                "meaning": "Even... (extreme case)",
                "rules": [
                    "Noun + 조차"
                ],
                "notes": [
                    "Breaking the baseline. An extreme inclusion particle.",
                    "Means 'Even the most basic and obvious one is/does...'.",
                    "Usually signals that the situation has become extremely terrible, carrying a deeper sense of negativity than 마저/까지."
                ]
            }
        }
    },
    {
        "id": "l4_023",
        "category": "L4 - 12과: 선거와 투표",
        "level": "L4",
        "title": "~(이)야말로",
        "examples": [
            {
                "ko": "사랑이야말로 가장 중요해요.",
                "translations": {
                    "zh-CN": "爱情才是最重要的。",
                    "en": "Love is the most important."
                }
            },
            {
                "ko": "건강이야말로 가장 소중한 것이에요.",
                "translations": {
                    "zh-CN": "健康才是最宝贵的。",
                    "en": "Health is the most precious thing."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "正是/才是",
                "meaning": "强调(正是/才是)",
                "rules": [
                    "名词+(이)야말로"
                ],
                "notes": [
                    "聚光灯般的强调。",
                    "是主格助词 이/가 的究极加强版，意思是“唯有这个才是 / 正是这个！”。",
                    "后面经常接最高级的评价（최고/가장/진짜）。"
                ]
            },
            "en": {
                "description": "The very / The most",
                "meaning": "Emphasizes noun as the best/true example",
                "rules": [
                    "Noun + (이)야말로"
                ],
                "notes": [
                    "Spotlight-like emphasis. It is the ultimate reinforced version of the subject particle 이/가, meaning 'THIS is the very one / Indeed it is THIS!'.",
                    "Usually followed by superlative evaluations (최고/가장/진짜)."
                ]
            }
        }
    },
    {
        "id": "l4_024",
        "category": "L4 - 12과: 선거와 투표",
        "level": "L4",
        "title": "~나 보다/~(으)ㄴ가 보다",
        "examples": [
            {
                "ko": "비가 오나 봐요.",
                "translations": {
                    "zh-CN": "看来下雨了。",
                    "en": "It seems like it's raining."
                }
            },
            {
                "ko": "많이 먹었나 봐요.",
                "translations": {
                    "zh-CN": "看来吃了很多。",
                    "en": "Seems like they ate a lot."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "有证据",
                "meaning": "看来.../似乎...(有证据)",
                "rules": [
                    "动词+나 보다",
                    "形容词+ㄴ가 보다"
                ],
                "notes": [
                    "有理有据的推测。",
                    "表示基于自己亲眼看到、听到的【客观线索】做出的推测（“看来是...啊”）。",
                    "它的可信度远远高于完全凭空瞎猜的 것 같다。"
                ]
            },
            "en": {
                "description": "It seems (evidence)",
                "meaning": "Guess based on evidence",
                "rules": [
                    "Verb + 나 보다",
                    "Adj + ㄴ가 보다"
                ],
                "notes": [
                    "Well-founded guess. Indicates a guess made based on [objective clues] you have seen or heard yourself ('It seems that...').",
                    "Its credibility is far higher than 것 같다, which can be a completely baseless guess."
                ]
            }
        }
    },
    {
        "id": "l4_025",
        "category": "L4 - 13과: 환경 보호",
        "level": "L4",
        "title": "~는 한",
        "examples": [
            {
                "ko": "제가 여기에 있는 한 걱정하지 마세요.",
                "translations": {
                    "zh-CN": "只要有我在，你就不用担心。",
                    "en": "As long as I am here, do not worry."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "只要...就...",
                "meaning": "只要...就...",
                "rules": [
                    "动词+는 한"
                ],
                "notes": [
                    "苛刻的前提锁。",
                    "表示“只要保持前面的状态或条件不改变，后面的情况就会一直有效”。",
                    "带有一种斩钉截铁的语气（“只要我还活着一天，就不允许发生这种事”）。"
                ]
            },
            "en": {
                "description": "As long as...",
                "meaning": "As long as...",
                "rules": [
                    "Verb + 는 한"
                ],
                "notes": [
                    "Harsh prerequisite lock. Indicates 'As long as the preceding state or condition does not change, the following situation will remain valid'.",
                    "Carries a very resolute tone ('As long as I'm alive, this will never be allowed')."
                ]
            }
        }
    },
    {
        "id": "l4_026",
        "category": "L4 - 13과: 환경 보호",
        "level": "L4",
        "title": "~도록",
        "examples": [
            {
                "ko": "늦지 않도록 일찍 출발하세요.",
                "translations": {
                    "zh-CN": "为了不迟到请早出发。",
                    "en": "Leave early so you're not late."
                }
            },
            {
                "ko": "잊지 않도록 메모해 두세요.",
                "translations": {
                    "zh-CN": "为了不忘记请写下来。",
                    "en": "Write a note so you don't forget."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "使得.../直到...为止",
                "meaning": "使得.../直到...为止",
                "rules": [
                    "动词+도록"
                ],
                "notes": [
                    "目的与极限。",
                    "考试必考的两个用法：①表示目的：“为了使...发生”（前面常接否定词，如 안 늦도록 = 为了不迟到）。",
                    "②表示生理极限：“到了...地步”（如 눈물이 나도록 = 到了流泪的地步）。"
                ]
            },
            "en": {
                "description": "So that / Until",
                "meaning": "So that, until",
                "rules": [
                    "Verb + 도록"
                ],
                "notes": [
                    "Purpose and limit. Two usages that are guaranteed to be on the exam:",
                    "① Indicates purpose: 'In order to make... happen' (often preceded by a negative word, like 안 늦도록 = so as not to be late).",
                    "② Indicates physiological limit: 'To the point of...' (like 눈물이 나도록 = to the point of tears)."
                ]
            }
        }
    },
    {
        "id": "l4_027",
        "category": "L4 - 14과: 생활과 경제",
        "level": "L4",
        "title": "~(으)므로",
        "examples": [
            {
                "ko": "이곳은 위험하므로 들어가지 마십시오.",
                "translations": {
                    "zh-CN": "此处危险，请勿进入。",
                    "en": "It is dangerous here, therefore do not enter."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "书面",
                "meaning": "因为... / 由于... (书面)",
                "rules": [
                    "动词/形容词+(으)므로"
                ],
                "notes": [
                    "官腔十足的原因。",
                    "表示原因的极其正式的书面表达。",
                    "你在日常生活中听不到它，它永远出现在公文、新闻简报、法律条文或正式演讲稿中。",
                    "等同于 (으)니까/기 때문에。"
                ]
            },
            "en": {
                "description": "Because / Therefore (formal/written)",
                "meaning": "Because / Therefore (formal/written)",
                "rules": [
                    "Verb/Adj + (으)므로"
                ],
                "notes": [
                    "Highly bureaucratic reason. An extremely formal written expression for cause/reason.",
                    "You won't hear it in daily life; it only appears in official documents, news briefings, legal texts, or formal speeches.",
                    "Equivalent to (으)니까/기 때문에."
                ]
            }
        }
    },
    {
        "id": "l4_028",
        "category": "L4 - 14과: 생활과 경제",
        "level": "L4",
        "title": "~은/는커녕",
        "examples": [
            {
                "ko": "밥은커녕 물도 못 마셨어요.",
                "translations": {
                    "zh-CN": "别说吃饭了，连水都没喝上。",
                    "en": "I couldn't even drink water, let alone eat food."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "没",
                "meaning": "别说...就连...也(没)",
                "rules": [
                    "名词+은/는커녕"
                ],
                "notes": [
                    "降维打击的否定。",
                    "强烈的递进否定：“别说是A了，就连最基础的B都做不到/没有”。",
                    "前面是奢望，后面是残酷的现实。",
                    "例如：别说吃肉了，连粥都没得喝。"
                ]
            },
            "en": {
                "description": "Let alone... not even...",
                "meaning": "Let alone... not even...",
                "rules": [
                    "Noun + 은/는커녕"
                ],
                "notes": [
                    "Dimensional strike negation. A strong progressive negation: 'Let alone A, I can't even do/don't even have the most basic B'.",
                    "The former is an extravagant hope, the latter is the cruel reality. (e.g., Let alone eating meat, I don't even have porridge)."
                ]
            }
        }
    },
    {
        "id": "l4_029",
        "category": "L4 - 15과: 법과 질서",
        "level": "L4",
        "title": "~는 법이다",
        "examples": [
            {
                "ko": "노력하면 성공하는 법입니다.",
                "translations": {
                    "zh-CN": "只要努力就必然会成功。",
                    "en": "It is a rule that if you work hard, you succeed."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "理所当然会... / 必然规律",
                "meaning": "理所当然会... / 必然规律",
                "rules": [
                    "动词+는 법이다"
                ],
                "notes": [
                    "世间万物的法则。",
                    "表示阐述某种世间真理或普遍规律（“...是理所当然的事”）。",
                    "语气老成，常用于讲大道理或安慰别人（如：人终有一死）。"
                ]
            },
            "en": {
                "description": "It is a rule that... / Bound to...",
                "meaning": "It is a rule that... / Bound to...",
                "rules": [
                    "Verb + 는 법이다"
                ],
                "notes": [
                    "The law of all things. Expresses a certain worldly truth or universal law ('It is a matter of course that...').",
                    "The tone is mature, often used when preaching big principles or comforting someone (e.g., All men must die)."
                ]
            }
        }
    },
    {
        "id": "l4_030",
        "category": "L4 - 15과: 법과 질서",
        "level": "L4",
        "title": "~다시피",
        "examples": [
            {
                "ko": "아시다시피 내일은 회의가 없습니다.",
                "translations": {
                    "zh-CN": "正如您所知，明天没有会议。",
                    "en": "As you know, there is no meeting tomorrow."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "看/听/知",
                "meaning": "正如你所... (看/听/知)",
                "rules": [
                    "动词+다시피"
                ],
                "notes": [
                    "共享信息的确认。",
                    "意思是“正如你所...的那样”。",
                    "几乎固定搭配感官动词：알다(知道)、보다(看)、듣다(听)、느끼다(感受)。",
                    "用于拉近距离或建立共识。"
                ]
            },
            "en": {
                "description": "As you (know/see/hear)...",
                "meaning": "As you (know/see/hear)...",
                "rules": [
                    "Verb + 다시피"
                ],
                "notes": [
                    "Confirmation of shared information. Means 'Just as you...'.",
                    "Almost fixedly paired with perception verbs: 알다 (know), 보다 (see), 듣다 (hear), 느끼다 (feel).",
                    "Used to close distance or establish consensus."
                ]
            }
        }
    },
    {
        "id": "l4_031",
        "category": "L4 - 16과: 이민 생활",
        "level": "L4",
        "title": "~(으)ㄹ지도 모르다",
        "examples": [
            {
                "ko": "내일 비가 올지도 몰라요.",
                "translations": {
                    "zh-CN": "明天说不定会下雨。",
                    "en": "It might rain tomorrow."
                }
            },
            {
                "ko": "그 사람이 올지도 몰라요.",
                "translations": {
                    "zh-CN": "那个人说不定会来。",
                    "en": "That person might come."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "也许.../说不定...",
                "meaning": "也许.../说不定...",
                "rules": [
                    "动词/形容词+(으)ㄹ지도 모르다"
                ],
                "notes": [
                    "微乎其微的可能性。",
                    "表示一种非常不确定的推测：“也许/说不定会发生...”。",
                    "它所暗示的可能性比 것 같다 低得多。",
                    "通常用于提醒对方小心防范未知的危险。"
                ]
            },
            "en": {
                "description": "Might / Perhaps",
                "meaning": "Might, perhaps",
                "rules": [
                    "Verb/Adj + (으)ㄹ지도 모르다"
                ],
                "notes": [
                    "Minuscule possibility. Indicates a highly uncertain guess: 'Maybe / Perhaps it will happen...'.",
                    "The implied probability is much lower than 것 같다.",
                    "Often used to warn the other person to guard against unknown dangers."
                ]
            }
        }
    },
    {
        "id": "l4_032",
        "category": "L4 - 16과: 이민 생활",
        "level": "L4",
        "title": "~치고",
        "examples": [
            {
                "ko": "가격치고 품질이 좋아요.",
                "translations": {
                    "zh-CN": "就价格来说质量很好。",
                    "en": "Quality is good for the price."
                }
            },
            {
                "ko": "한국 사람치고 김치를 안 좋아해요.",
                "translations": {
                    "zh-CN": "作为韩国人居然不喜欢泡菜。",
                    "en": "For a Korean, they don't like kimchi."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "出人意料",
                "meaning": "作为...来说(出人意料)",
                "rules": [
                    "名词+치고"
                ],
                "notes": [
                    "打破刻板印象的评价。",
                    "表示“作为...来说，居然...”。",
                    "后面必须要接出乎意料的评价。",
                    "比如：作为外国人来说，韩语真是说得太好了！",
                    "（正面）；作为冬天来说，这天居然一点也不冷！",
                    "（反常）。"
                ]
            },
            "en": {
                "description": "For a ~ (surprisingly)",
                "meaning": "For a (surprisingly good/bad)",
                "rules": [
                    "Noun + 치고"
                ],
                "notes": [
                    "Stereotype-breaking evaluation. Indicates 'For a..., it's surprisingly...'.",
                    "Must be followed by an unexpected evaluation. For example: For a foreigner, you speak Korean amazingly well! (Positive); For winter, it's surprisingly not cold at all! (Abnormal)."
                ]
            }
        }
    },
    {
        "id": "l4_033",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~(으)ㄴ/는 셈이다",
        "examples": [
            {
                "ko": "매일 운동하는 셈이에요.",
                "translations": {
                    "zh-CN": "算是每天都运动了。",
                    "en": "I practically exercise every day."
                }
            },
            {
                "ko": "거의 다 끝난 셈이에요.",
                "translations": {
                    "zh-CN": "算是差不多结束了。",
                    "en": "It's practically finished."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "算是...",
                "meaning": "算是...",
                "rules": [
                    "动词+는 셈이다",
                    "形容词+ㄴ/은 셈이다"
                ],
                "notes": [
                    "算账式的四舍五入。",
                    "表示虽然不是 100% 精确，但根据实际情况来看，“基本上就等同于/算是...了”。",
                    "（例如：100个人的班级来了98个，就相当于全来了）。"
                ]
            },
            "en": {
                "description": "Practically / More or less",
                "meaning": "Practically, is in effect",
                "rules": [
                    "Verb + 는 셈이다",
                    "Adj + ㄴ/은 셈이다"
                ],
                "notes": [
                    "Accounting-style rounding. Indicates that although it's not 100% precise, based on the actual situation, 'it basically equates to / can be considered as...'.",
                    "(e.g., 98 people showed up in a class of 100, which is practically everyone)."
                ]
            }
        }
    },
    {
        "id": "l4_034",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~(으)ㄴ/는 탓에",
        "examples": [
            {
                "ko": "비가 온 탓에 길이 막혀요.",
                "translations": {
                    "zh-CN": "都怪下雨路堵了。",
                    "en": "Roads blocked because of rain."
                }
            },
            {
                "ko": "늦게 일어난 탓에 지각했어요.",
                "translations": {
                    "zh-CN": "都怪起晚了所以迟到了。",
                    "en": "Was late because of waking up late."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "怪/归咎于...",
                "meaning": "怪/归咎于...",
                "rules": [
                    "动词+는 탓에",
                    "形容词+ㄴ/은 탓에"
                ],
                "notes": [
                    "推卸责任的怪罪。",
                    "非常明确的感情色彩：“都怪...”。",
                    "【只能】用于导致负面、糟糕结果的原因。",
                    "如果你想表达感恩的积极原因，绝对要用 덕분에（多亏了）。"
                ]
            },
            "en": {
                "description": "Because of (blame)",
                "meaning": "Blaming a negative result",
                "rules": [
                    "Verb + 는 탓에",
                    "Adj + ㄴ/은 탓에"
                ],
                "notes": [
                    "Blame shifting. Has a very clear emotional tone: 'It's all because of...'.",
                    "[Can ONLY] be used for reasons that lead to negative, terrible results.",
                    "If you want to express a positive reason with gratitude, you absolutely must use 덕분에 (thanks to)."
                ]
            }
        }
    },
    {
        "id": "l4_035",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~(으)ㄴ/는데도",
        "examples": [
            {
                "ko": "열심히 했는데도 떨어졌어요.",
                "translations": {
                    "zh-CN": "尽管努力了还是没通过。",
                    "en": "Failed despite working hard."
                }
            },
            {
                "ko": "약을 먹었는데도 안 나았어요.",
                "translations": {
                    "zh-CN": "吃了药还是没好。",
                    "en": "Didn't get better despite taking medicine."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "尽管...还是...",
                "meaning": "尽管...还是...",
                "rules": [
                    "动词+는데도",
                    "形容词+ㄴ/은데도"
                ],
                "notes": [
                    "充满怨气的转折。",
                    "是 는데 和 도 的加强结合版。",
                    "表示“明明前面是这样，结果后面却依然...”。",
                    "转折语气极度强烈，通常带有很多不可思议、惊讶或抱怨的感情。"
                ]
            },
            "en": {
                "description": "Despite / Even though",
                "meaning": "Despite, even though",
                "rules": [
                    "Verb + 는데도",
                    "Adj + ㄴ/은데도"
                ],
                "notes": [
                    "Resentful concession. A strengthened combination of 는데 and 도.",
                    "Indicates 'Even though the former is clearly the case, the latter still...'.",
                    "The tone of contrast is extremely strong, usually carrying a lot of disbelief, surprise, or complaining."
                ]
            }
        }
    },
    {
        "id": "l4_036",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~(으)ㄹ 걸 그랬다",
        "examples": [
            {
                "ko": "우산을 가져올 걸 그랬어요.",
                "translations": {
                    "zh-CN": "早知道就带伞了。",
                    "en": "I should have brought an umbrella."
                }
            },
            {
                "ko": "택시를 탈 걸 그랬어요.",
                "translations": {
                    "zh-CN": "早知道就打车了。",
                    "en": "I should have taken a taxi."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "早知道就...",
                "meaning": "后悔(早知道就...)",
                "rules": [
                    "动词+(으)ㄹ 걸 그랬다"
                ],
                "notes": [
                    "拍大腿的马后炮。",
                    "表示强烈的后悔：“哎呀，早知道当时就应该做...了！”。",
                    "如果是后悔做了某事，就要用它的否定形式：지 말 걸 그랬다（早知道就不做了！）。"
                ]
            },
            "en": {
                "description": "Should have done",
                "meaning": "Regret not doing",
                "rules": [
                    "Verb + (으)ㄹ 걸 그랬다"
                ],
                "notes": [
                    "Thigh-slapping hindsight. Expresses strong regret: 'Oh man, I should have done... back then!'.",
                    "If regretting doing something, you must use its negative form: 지 말 걸 그랬다 (I shouldn't have done it!)."
                ]
            }
        }
    },
    {
        "id": "l4_037",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~(으)ㄹ 리가 없다",
        "examples": [
            {
                "ko": "그가 거짓말을 할 리가 없어요.",
                "translations": {
                    "zh-CN": "他不可能撒谎。",
                    "en": "There's no way he lied."
                }
            },
            {
                "ko": "그런 실수를 할 리가 없어요.",
                "translations": {
                    "zh-CN": "不可能犯那种错。",
                    "en": "There's no way they made that mistake."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "不可能...",
                "meaning": "不可能...",
                "rules": [
                    "动词/形容词+(으)ㄹ 리가 없다"
                ],
                "notes": [
                    "铁齿铜牙的否认。",
                    "极其强烈的否定推测，表示“绝对不可能！",
                    "/ 没这个理儿！”。",
                    "当你听到一个离谱的谣言或指控时，用来强势反驳对方。"
                ]
            },
            "en": {
                "description": "No way / Impossible",
                "meaning": "No way, impossible",
                "rules": [
                    "Verb/Adj + (으)ㄹ 리가 없다"
                ],
                "notes": [
                    "Iron-toothed denial. An extremely strong negative guess, indicating 'Absolutely impossible! / No way!'.",
                    "Used to forcefully refute the other party when you hear an outrageous rumor or accusation."
                ]
            }
        }
    },
    {
        "id": "l4_038",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~(으)ㄹ까 봐",
        "examples": [
            {
                "ko": "비가 올까 봐 우산을 가져갔어요.",
                "translations": {
                    "zh-CN": "怕下雨所以带了伞。",
                    "en": "Took an umbrella worried it'd rain."
                }
            },
            {
                "ko": "늦을까 봐 택시를 탔어요.",
                "translations": {
                    "zh-CN": "怕迟到所以打了车。",
                    "en": "Took a taxi worried I'd be late."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "担心会...",
                "meaning": "担心会...",
                "rules": [
                    "动词+(으)ㄹ까 봐"
                ],
                "notes": [
                    "杞人忧天的防备。",
                    "表示“担心某事发生（所以采取了某个防范措施）”。",
                    "考点限制：绝对不能用于过去已经发生的事情！",
                    "因为你不能“担心”一个已经结束的动作。"
                ]
            },
            "en": {
                "description": "Worried that",
                "meaning": "Worried/afraid that",
                "rules": [
                    "Verb + (으)ㄹ까 봐"
                ],
                "notes": [
                    "Groundless anxiety prevention. Indicates 'Worried that something might happen (so took a certain preventive measure)'.",
                    "Exam restriction: Absolutely CANNOT be used for things that have already happened in the past! Because you cannot 'worry' about a completed action."
                ]
            }
        }
    },
    {
        "id": "l4_039",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~(으)ㄹ래야 ~(으)ㄹ 수 없다",
        "examples": [
            {
                "ko": "잠을 잘래야 잘 수가 없어요.",
                "translations": {
                    "zh-CN": "想睡也睡不着。",
                    "en": "I can't sleep even if I try."
                }
            },
            {
                "ko": "잊을래야 잊을 수가 없어요.",
                "translations": {
                    "zh-CN": "想忘也忘不了。",
                    "en": "I can't forget even if I try."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "想做都做不了",
                "meaning": "想做都做不了",
                "rules": [
                    "动词+(으)ㄹ래야 (으)ㄹ 수 없다"
                ],
                "notes": [
                    "铜墙铁壁的不可能。",
                    "表示“就算我想...也绝对做不到”。",
                    "句型结构非常特殊且固定：前后必须重复使用【同一个】动词。",
                    "例如：잊을래야 잊을 수 없다 (想忘也忘不掉)。"
                ]
            },
            "en": {
                "description": "Even if I try I can't",
                "meaning": "Can't even if one tries",
                "rules": [
                    "Verb + (으)ㄹ래야 (으)ㄹ 수 없다"
                ],
                "notes": [
                    "Impenetrable impossibility. Indicates 'Even if I wanted to..., I absolutely cannot'.",
                    "The sentence structure is very unique and fixed: The [exact same] verb must be repeated before and after.",
                    "Example: 잊을래야 잊을 수 없다 (Cannot forget even if I try to forget)."
                ]
            }
        }
    },
    {
        "id": "l4_040",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~(으)나 마나",
        "examples": [
            {
                "ko": "말하나 마나예요.",
                "translations": {
                    "zh-CN": "说不说都一样。",
                    "en": "Pointless to say."
                }
            },
            {
                "ko": "들으나 마나예요.",
                "translations": {
                    "zh-CN": "听不听都一样。",
                    "en": "Pointless to listen."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "没用",
                "meaning": "做不做都一样(没用)",
                "rules": [
                    "动词+(으)나 마나"
                ],
                "notes": [
                    "摆烂的虚无主义。",
                    "表示“这事做也是白做，不做也一样，反正结果都注定了”。",
                    "带有极其消极、放弃治疗或鄙视的语气。",
                    "（例如：考前一秒才看书，看不看都一样）。"
                ]
            },
            "en": {
                "description": "Whether or not / Pointless",
                "meaning": "Pointless whether done or not",
                "rules": [
                    "Verb + (으)나 마나"
                ],
                "notes": [
                    "Nihilism of giving up. Indicates 'Doing this is pointless, not doing it is the same, the outcome is destined anyway'.",
                    "Carries an extremely negative, given-up, or disdainful tone. (e.g., Reading a book one second before the exam makes no difference)."
                ]
            }
        }
    },
    {
        "id": "l4_041",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~ㄴ/는다면",
        "examples": [
            {
                "ko": "복권에 당첨된다면 뭘 할 거예요?",
                "translations": {
                    "zh-CN": "如果中了彩票会做什么？",
                    "en": "What would you do if you won the lottery?"
                }
            },
            {
                "ko": "시간이 있다면 같이 가요.",
                "translations": {
                    "zh-CN": "如果有时间一起去吧。",
                    "en": "If you have time, let's go together."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "如果...的话",
                "meaning": "假设(如果...的话)",
                "rules": [
                    "动词+ㄴ/는다면",
                    "形容词+다면"
                ],
                "notes": [
                    "极小概率的假想。",
                    "这是比 (으)면 更加极端的假设。",
                    "通常用于假设那些现实中极不可能发生的事情（“万一 / 如果真的有一天...”）。",
                    "例如：如果我中了100亿彩票。"
                ]
            },
            "en": {
                "description": "If (hypothetical)",
                "meaning": "Hypothetical if",
                "rules": [
                    "Verb + ㄴ/는다면",
                    "Adj + 다면"
                ],
                "notes": [
                    "Extremely low probability hypothetical. This is a much more extreme hypothesis than (으)면.",
                    "Usually used to assume things that are highly unlikely to happen in reality ('If by any chance / If there ever comes a day...').",
                    "Example: If I win a 10 billion lottery."
                ]
            }
        }
    },
    {
        "id": "l4_042",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~고말고(요)",
        "examples": [
            {
                "ko": "가: 그 영화가 재미있어요? 나: 재미있고말고요!",
                "translations": {
                    "zh-CN": "甲：那部电影好看吗？ 乙：那当然好看啦！",
                    "en": "A: Is that movie fun? B: Of course it's fun!"
                }
            },
            {
                "ko": "친구가 부탁하면 제가 도와주고말고요.",
                "translations": {
                    "zh-CN": "朋友要是拜托我，我当然会帮忙。",
                    "en": "If a friend asks for a favor, of course I will help."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "那是当然... / 绝对会...",
                "meaning": "强烈地肯定对方的提问或同意对方的意见（那是当然... / 绝对会...）。",
                "rules": [
                    "动词/形容词+고말고요",
                    "名词+(이)고말고요"
                ],
                "notes": [
                    "热情洋溢的绝对赞同。",
                    "在对话中用来极其积极地回应对方：“那是当然的啦！”。",
                    "比干巴巴的说 네 要生动100倍。",
                    "通常会重复对方提问的词（好吃吗？ -> 好吃得不得了！）。"
                ]
            },
            "en": {
                "description": "Of course / Certainly",
                "meaning": "Used to strongly agree with the listener or confirm that something is an absolute certainty ('Of course I will/it is').",
                "rules": [
                    "Verb/Adj + 고말고요",
                    "Noun + (이)고말고요"
                ],
                "notes": [
                    "Enthusiastic absolute agreement. Used in conversation to respond extremely positively to the other party: 'Of course! / Absolutely!'.",
                    "100 times more vivid than a dry 네.",
                    "Usually repeats the verb or adjective from the other party's question (Is it delicious? -> Delicious beyond words!)."
                ]
            }
        }
    },
    {
        "id": "l4_043",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~기에(는)",
        "examples": [
            {
                "ko": "혼자 하기에는 너무 많아요.",
                "translations": {
                    "zh-CN": "一个人做的话太多了。",
                    "en": "Too much for one person."
                }
            },
            {
                "ko": "이 신발은 등산하기에는 불편해요.",
                "translations": {
                    "zh-CN": "这双鞋爬山的话不舒服。",
                    "en": "These shoes are uncomfortable for hiking."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "评价",
                "meaning": "就做...来说(评价)",
                "rules": [
                    "动词/形容词+기에(는)"
                ],
                "notes": [
                    "尺寸与标准的丈量。",
                    "用来评估某个行为或物品是否合适：“对于做某事来说，它太...了”。",
                    "比如：这件衣服对于出门穿来说太华丽了 / 这个量对于一个人吃来说太大了。"
                ]
            },
            "en": {
                "description": "For doing / Considering",
                "meaning": "Considering the action",
                "rules": [
                    "Verb/Adj + 기에(는)"
                ],
                "notes": [
                    "Measurement of size and standard. Used to evaluate whether an action or item is suitable: 'For doing something, it is too...'.",
                    "For example: This outfit is too flashy for wearing out / This portion is too big for one person to eat."
                ]
            }
        }
    },
    {
        "id": "l4_044",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~느니 차라리",
        "examples": [
            {
                "ko": "기다리느니 차라리 걸어가자.",
                "translations": {
                    "zh-CN": "与其等不如走过去。",
                    "en": "Rather than wait let's walk."
                }
            },
            {
                "ko": "버스를 타느니 차라리 걸어가겠어요.",
                "translations": {
                    "zh-CN": "与其坐公交不如走路。",
                    "en": "I'd rather walk than take the bus."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "与其A不如B",
                "meaning": "与其A不如B",
                "rules": [
                    "动词+느니 차라리"
                ],
                "notes": [
                    "毒药二选一的抉择。",
                    "表示极度极端的比较：“与其A，我宁愿去B”。",
                    "느니 前面的选项通常是你极度厌恶、打死也不想选的。",
                    "차라리 后面则是两害相权取其轻的无奈之选。"
                ]
            },
            "en": {
                "description": "Rather than A, prefer B",
                "meaning": "Rather than",
                "rules": [
                    "Verb + 느니 차라리"
                ],
                "notes": [
                    "The poisonous either-or dilemma. Indicates an extremely polarized comparison: 'Rather than A, I'd prefer B'.",
                    "The option before 느니 is usually the one you deeply hate and would never choose even if beaten to death.",
                    "The one after 차라리 is the helpless choice of the lesser of two evils."
                ]
            }
        }
    },
    {
        "id": "l4_045",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~는 김에",
        "examples": [
            {
                "ko": "마트에 가는 김에 우유 좀 사 와.",
                "translations": {
                    "zh-CN": "趁去超市顺便买牛奶。",
                    "en": "Buy milk while at the mart."
                }
            },
            {
                "ko": "청소하는 김에 빨래도 했어요.",
                "translations": {
                    "zh-CN": "趁打扫的机会也洗了衣服。",
                    "en": "Did laundry while I was at it cleaning."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "趁...的机会",
                "meaning": "趁...的机会",
                "rules": [
                    "动词+는 김에"
                ],
                "notes": [
                    "顺手牵羊的动作。",
                    "表示“既然都已经开始做A了，干脆顺便把B也做了吧”。",
                    "第一个动作是你本来计划好的正事，第二个动作是临时起意、顺便搭便车完成的。"
                ]
            },
            "en": {
                "description": "While at it",
                "meaning": "While you're at it",
                "rules": [
                    "Verb + 는 김에"
                ],
                "notes": [
                    "Opportunistic action. Indicates 'Since I've already started doing A, I might as well do B while I'm at it'.",
                    "The first action is your originally planned main task, and the second action is an impromptu, piggybacking task."
                ]
            }
        }
    },
    {
        "id": "l4_046",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~는 모양이다",
        "examples": [
            {
                "ko": "우산이 있는 걸 보니까 비가 오는 모양이에요.",
                "translations": {
                    "zh-CN": "看到有伞，看样子是在下雨。",
                    "en": "Seeing the umbrella, it looks like it is raining."
                }
            },
            {
                "ko": "식당에 사람이 없는 걸 보니 맛이 없는 모양이에요.",
                "translations": {
                    "zh-CN": "看到餐厅里没人，似乎不好吃。",
                    "en": "Seeing no people in the restaurant, it seems the food is not good."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "看样子是... / 似乎是...",
                "meaning": "基于客观情况或线索做出的推测（看样子是... / 似乎是...）。不能用于第一人称（自己）的事情。",
                "rules": [
                    "动词+는 모양이다",
                    "形容词+(으)ㄴ 모양이다",
                    "名词+인 모양이다"
                ],
                "notes": [
                    "讲究证据的客观推测。",
                    "意思是“看来/似乎是...”。",
                    "核心考点：前半句必须带有让你产生这种推测的【客观依据】（比如看到地湿了，推测刚下过雨）。",
                    "绝不能用于推断自己的行为！"
                ]
            },
            "en": {
                "description": "It appears that / Looks like",
                "meaning": "An objective guess based on a situation or observation (It appears/looks like...). Cannot be used for one's own actions.",
                "rules": [
                    "Verb + 는 모양이다",
                    "Adj + (으)ㄴ 모양이다",
                    "Noun + 인 모양이다"
                ],
                "notes": [
                    "Evidence-based objective guess. Means 'It seems/looks like...'.",
                    "Core exam point: The preceding clause must contain the [objective basis] that made you form this guess (e.g., seeing the ground is wet, guessing it just rained).",
                    "Absolutely cannot be used to infer your own actions!"
                ]
            }
        }
    },
    {
        "id": "l4_047",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~는 바람에",
        "examples": [
            {
                "ko": "버스를 놓치는 바람에 지각했어요.",
                "translations": {
                    "zh-CN": "因为错过公交迟到了。",
                    "en": "Late because I missed the bus."
                }
            },
            {
                "ko": "알람이 안 울리는 바람에 늦었어요.",
                "translations": {
                    "zh-CN": "因为闹钟没响所以迟到了。",
                    "en": "Late because the alarm didn't go off."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "负面结果",
                "meaning": "由于突发原因(负面结果)",
                "rules": [
                    "动词+는 바람에"
                ],
                "notes": [
                    "突发背锅侠。",
                    "表示原因“由于...”。",
                    "两大终极考点限制：①必须是因为突发、不可控的意外事件。",
                    "②导致的结果必须、一定、绝对是【负面的糟糕结果】。"
                ]
            },
            "en": {
                "description": "Due to (unexpected)",
                "meaning": "Due to an unexpected event (negative)",
                "rules": [
                    "Verb + 는 바람에"
                ],
                "notes": [
                    "Sudden scapegoat. Indicates the reason 'Due to...'.",
                    "Two ultimate exam restrictions: ① Must be due to a sudden, uncontrollable unexpected event.",
                    "② The resulting consequence MUST, undoubtedly, absolutely be a [negative, terrible outcome]."
                ]
            }
        }
    },
    {
        "id": "l4_048",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~다 보니(까)",
        "examples": [
            {
                "ko": "한국에 오래 살다 보니 매운 음식을 잘 먹게 되었어요.",
                "translations": {
                    "zh-CN": "在韩国住久了，结果变得很能吃辣了。",
                    "en": "As I lived in Korea for a long time, I ended up eating spicy food well."
                }
            },
            {
                "ko": "매일 만나다 보니까 정이 들었어요.",
                "translations": {
                    "zh-CN": "每天见面，不知不觉就产生了感情。",
                    "en": "As we met every day, we naturally grew fond of each other."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "表示在持续做某事的过程中",
                "meaning": "表示在持续做某事的过程中，发现了新的事实，或者自然而然产生了某种结果（做着做着发现... / 一直做...结果...）。",
                "rules": [
                    "动词+다 보니(까)"
                ],
                "notes": [
                    "量变引起质变。",
                    "表示“随着某个动作不断持续、反复进行，最终自然而然地发现了某个事实或养成了习惯”。",
                    "只能接【动词】，绝对不能接形容词！"
                ]
            },
            "en": {
                "description": "While doing something, one realizes/ends up...",
                "meaning": "Indicates that while continuously doing an action, one realizes a new fact or a certain result naturally occurs.",
                "rules": [
                    "Verb + 다 보니(까)"
                ],
                "notes": [
                    "Quantitative change leading to qualitative change. Indicates 'As a certain action is continuously and repeatedly performed, eventually a certain fact is naturally discovered or a habit is formed'.",
                    "Can ONLY be attached to [Verbs], absolutely cannot be attached to adjectives!"
                ]
            }
        }
    },
    {
        "id": "l4_049",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~다가는",
        "examples": [
            {
                "ko": "그렇게 매일 술을 마시다가는 건강이 나빠질 거예요.",
                "translations": {
                    "zh-CN": "如果每天像那样喝酒的话，身体会变差的。",
                    "en": "If you keep drinking every day like that, your health will get worse."
                }
            },
            {
                "ko": "게임을 계속 하다가는 시험에 떨어질 텐데 걱정이에요.",
                "translations": {
                    "zh-CN": "如果一直玩游戏的话考试会落榜的，真让人担心。",
                    "en": "I'm worried you'll fail the exam if you keep playing games."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "如果一直这样...的话，就会...",
                "meaning": "表示如果前面的动作或状态一直持续下去，就会导致不好的结果（如果一直这样...的话，就会...）。",
                "rules": [
                    "动词+다가는"
                ],
                "notes": [
                    "死亡预言家。",
                    "这是一个带有强烈警告意味的假设：“如果一直这么下去的话，早晚会完蛋的”。",
                    "后半句【必定接不好的结果】，且通常搭配将来时或推测语气（(으)ㄹ 거예요）。"
                ]
            },
            "en": {
                "description": "If one keeps doing this, then (negative result)",
                "meaning": "Warns that if an action/state continues as it is, a negative consequence will inevitably follow.",
                "rules": [
                    "Verb + 다가는"
                ],
                "notes": [
                    "Prophet of doom. This is a hypothesis with a strong warning tone: 'If this continues, it will eventually end in ruin'.",
                    "The second half [MUST be followed by a bad result], and is usually paired with the future tense or a guessing tone ((으)ㄹ 거예요)."
                ]
            }
        }
    },
    {
        "id": "l4_050",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~다니까",
        "examples": [
            {
                "ko": "아프다니까요!",
                "translations": {
                    "zh-CN": "我说了我不舒服！",
                    "en": "I said I'm sick!"
                }
            },
            {
                "ko": "진짜 모른다니까요!",
                "translations": {
                    "zh-CN": "我说了我真的不知道！",
                    "en": "I said I really don't know!"
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "我说了.../我告诉你了",
                "meaning": "我说了.../我告诉你了",
                "rules": [
                    "动词+ㄴ/는다니까",
                    "形容词+다니까"
                ],
                "notes": [
                    "不耐烦的重申。",
                    "口语中用来极其强调自己说过的话：“我都说了...啦！”。",
                    "因为带有强烈的执念和重复感，如果对长辈使用会显得非常不礼貌、不耐烦。"
                ]
            },
            "en": {
                "description": "I said...! / I told you",
                "meaning": "Insisting/repeating what was said",
                "rules": [
                    "Verb + ㄴ/는다니까",
                    "Adj + 다니까"
                ],
                "notes": [
                    "Impatient reiteration. Used in spoken language to extremely emphasize what you have said: 'I TOLD you...!'.",
                    "Because it carries a strong sense of obsession and repetition, using it with elders will sound very impolite and impatient."
                ]
            }
        }
    },
    {
        "id": "l4_051",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~달라고 하다",
        "examples": [
            {
                "ko": "아이가 엄마에게 용돈을 달라고 했어요.",
                "translations": {
                    "zh-CN": "孩子叫妈妈给他零花钱。",
                    "en": "The child asked his mom to give HIM pocket money."
                }
            },
            {
                "ko": "친구가 문을 열어 달라고 했어요.",
                "translations": {
                    "zh-CN": "朋友让我帮他开一下门。",
                    "en": "My friend asked me to open the door FOR HIM."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "说话人自己",
                "meaning": "间接引语。转述“请给我（说话人自己）...”的请求。原句为 주십시오 / 주세요 时使用。",
                "rules": [
                    "名词+달라고 하다",
                    "动词+아/어 달라고 하다"
                ],
                "notes": [
                    "索要福利的间接引语。",
                    "这是全韩语最容易错的语法！",
                    "如果原本说话的人是为【自己】索要东西，转述时必须把 주다 变成 달라고 하다。",
                    "如果是给第三人，则用 주라고 하다。"
                ]
            },
            "en": {
                "description": "Asked to give (to the speaker)",
                "meaning": "Indirect request. Used when quoting someone asking to give something TO THEMSELVES (the original speaker).",
                "rules": [
                    "Noun + 달라고 하다",
                    "Verb + 아/어 달라고 하다"
                ],
                "notes": [
                    "Indirect speech for requesting benefits. This is the most error-prone grammar in all of Korean!",
                    "If the original speaker is requesting something for [themselves], you must change 주다 to 달라고 하다 when quoting.",
                    "If it is for a third person, use 주라고 하다."
                ]
            }
        }
    },
    {
        "id": "l4_052",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~더라도",
        "examples": [
            {
                "ko": "힘들더라도 포기하지 마세요.",
                "translations": {
                    "zh-CN": "即使辛苦也不要放弃。",
                    "en": "Don't give up even if it's hard."
                }
            },
            {
                "ko": "비가 오더라도 가겠어요.",
                "translations": {
                    "zh-CN": "即使下雨也要去。",
                    "en": "I'll go even if it rains."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "即使...也...",
                "meaning": "即使...也...",
                "rules": [
                    "动词/形容词+더라도"
                ],
                "notes": [
                    "最硬核的假设性让步。",
                    "表示“就算天塌下来我也要...”。",
                    "它所假设的事情发生的概率极低（甚至还没发生），比 아도/어도 包含的“哪怕”意味更强烈、更决绝。"
                ]
            },
            "en": {
                "description": "Even if",
                "meaning": "Even if (hypothetical concession)",
                "rules": [
                    "Verb/Adj + 더라도"
                ],
                "notes": [
                    "The most hardcore hypothetical concession. Indicates 'Even if the sky falls, I will...'.",
                    "The probability of the assumed event happening is extremely low (or hasn't even happened yet).",
                    "The 'even if' tone is much stronger and more resolute than 아도/어도."
                ]
            }
        }
    },
    {
        "id": "l4_053",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~아/어 주라고 하다",
        "examples": [
            {
                "ko": "선생님이 반장에게 이 책을 민수에게 주라고 하셨어요.",
                "translations": {
                    "zh-CN": "老师叫班长把这本书给敏秀。",
                    "en": "The teacher told the class president to give this book to Minsu."
                }
            },
            {
                "ko": "엄마가 동생을 도와주라고 했어요.",
                "translations": {
                    "zh-CN": "妈妈叫我帮一下弟弟。",
                    "en": "Mom told me to help my younger sibling."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "第三者",
                "meaning": "间接引语。转述“请给（第三者）...”的请求。说话人要求听话人为别人做事。",
                "rules": [
                    "名词+주라고 하다",
                    "动词+아/어 주라고 하다"
                ],
                "notes": [
                    "借花献佛的间接引语。",
                    "与 달라고 하다 相对立！",
                    "如果原本说话的人，是要求听话人去帮助或给予【第三个人】福利，转述时必须保留 주라고 하다。"
                ]
            },
            "en": {
                "description": "Asked to give (to a third person)",
                "meaning": "Indirect request. Used when quoting someone asking to give something to a THIRD PARTY (not the speaker).",
                "rules": [
                    "Noun + 주라고 하다",
                    "Verb + 아/어 주라고 하다"
                ],
                "notes": [
                    "Indirect speech for presenting Buddha with borrowed flowers. The exact opposite of 달라고 하다!",
                    "If the original speaker is asking the listener to help or give benefits to a [third person], you must keep 주라고 하다 when quoting."
                ]
            }
        }
    },
    {
        "id": "l4_054",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~아/어서야",
        "examples": [
            {
                "ko": "밤 12시가 되어서야 집에 도착했어요.",
                "translations": {
                    "zh-CN": "直到晚上12点才到家。",
                    "en": "I didn't arrive home until it became 12 midnight."
                }
            },
            {
                "ko": "이런 실력으로 취직을 해서야 되겠어요?",
                "translations": {
                    "zh-CN": "就这点实力能找得到工作吗？（反问：必须要更好才行）",
                    "en": "With this kind of skill, how can you expect to get a job?"
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "表示只有满足了前面的条件或时间...",
                "meaning": "表示只有满足了前面的条件或时间点，后面才能发生（必须要...才... / 直到...才...）。带有强调条件极其苛刻的语气。",
                "rules": [
                    "动词/形容词+아/어서야"
                ],
                "notes": [
                    "苛刻的及格线。",
                    "表示条件极其难以满足，“必须要直到...地步，才勉强能...”。",
                    "后面常常带有很多反问语气：“这点能力能找到工作吗？”（搭配 ~되겠어요?）。"
                ]
            },
            "en": {
                "description": "Only after / Not until",
                "meaning": "Means 'only after' doing something or 'not until' a certain point. Emphasizes that the condition is strict or late.",
                "rules": [
                    "Verb/Adj + 아/어서야"
                ],
                "notes": [
                    "Harsh passing line. Indicates that the condition is extremely difficult to meet, 'Must reach the point of... to barely be able to...'.",
                    "Usually followed by a lot of rhetorical question tones: 'With this little ability, can you find a job?' (paired with ~되겠어요?)."
                ]
            }
        }
    },
    {
        "id": "l4_055",
        "category": "L4 - 추가 문법 (Extra Grammar)",
        "level": "L4",
        "title": "~았/었더라면",
        "examples": [
            {
                "ko": "열심히 했더라면 합격했을 거예요.",
                "translations": {
                    "zh-CN": "如果当时努力了就会通过的。",
                    "en": "If I had worked hard I would have passed."
                }
            },
            {
                "ko": "일찍 출발했더라면 안 늦었을 거예요.",
                "translations": {
                    "zh-CN": "如果早出发的话就不会迟到了。",
                    "en": "If I had left early I wouldn't have been late."
                }
            }
        ],
        "translations": {
            "zh-CN": {
                "description": "假设过去",
                "meaning": "如果当时做了的话(假设过去)",
                "rules": [
                    "动词+았/었더라면"
                ],
                "notes": [
                    "穿越时空的悔恨。",
                    "对过去完全不可能改变的事情进行虚假的假设：“如果当时做了...（但实际没做）的话，现在就会...”。",
                    "后半句必须配上过去的推测（았/었을 거예요）。"
                ]
            },
            "en": {
                "description": "If I had done",
                "meaning": "Hypothetical past (if I had...)",
                "rules": [
                    "Verb + 았/었더라면"
                ],
                "notes": [
                    "Regret across time and space. Making a false assumption about something in the past that is completely impossible to change: 'If I had done... (but I didn't), I would be... now'.",
                    "The second half must be paired with a past guess (았/었을 거예요)."
                ]
            }
        }
    }
];
