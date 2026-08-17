window.lessonGuideL1 = {
  "level": "L1",
  "title": "KIIP Level 1 Textbook Companion",
  "source": {
    "file": "kiip-1-textbook.pdf",
    "extraction": "refined lesson chunks from scanned PDF page images",
    "note": "Level 1 lessons are available as refined chunk files. OCR/audio-only items were not guessed when the scanned PDF did not expose them."
  },
  "lessons": [
    {
      "id": "l1-01",
      "number": 1,
      "titleKo": "안녕하세요?",
      "titleZh": "你好？",
      "pages": "12-21",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p12-p21",
        "dialogue": "refined-p15-p18",
        "culture": "refined-p20",
        "practice": "refined-p15-p21"
      },
      "goals": [
        "能用 안녕하세요? 打招呼，并说出自己的姓名。",
        "能询问姓名、职业、国籍并做简单回答。",
        "能区分 이에요/예요 和 은/는 的基础用法。"
      ],
      "grammar": [
        {
          "pattern": "N이에요/예요",
          "zh": "是……",
          "guide": "名词最后有收音时用 이에요，没有收音时用 예요，用来说明姓名、职业或国籍。",
          "translations": {
            "en": {
              "meaning": "to be...",
              "guide": "Use 이에요 after a noun with a final consonant and 예요 after a noun without one to state a name, job, or nationality."
            }
          }
        },
        {
          "pattern": "N은/는",
          "zh": "主题助词",
          "guide": "名词最后有收音时用 은，没有收音时用 는，介绍自己或别人时常用。",
          "translations": {
            "en": {
              "meaning": "topic marker",
              "guide": "Use 은 after a noun with a final consonant and 는 after a noun without one, often when introducing yourself or another person."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 26,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-01.js",
      "translations": {
        "en": {
          "title": "Hello",
          "goals": [
            "Greet someone with 안녕하세요? and say your name.",
            "Ask and answer about names, jobs, and nationalities.",
            "Distinguish the basic use of 이에요/예요 and 은/는."
          ]
        }
      }
    },
    {
      "id": "l1-02",
      "number": 2,
      "titleKo": "방에 책상이 있어요",
      "titleZh": "房间里有书桌",
      "pages": "22-31",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p22-p31",
        "dialogue": "refined-p25-p28",
        "culture": "reviewed-p30",
        "practice": "refined-p25-p31"
      },
      "goals": [
        "能说出教室、房间、家里常见地点和物品名称。",
        "能用 N이/가 있어요/없어요 表达“有/没有”。",
        "能用 장소에 있어요 说明人或物所在的位置。",
        "能读懂并仿写简单的房间介绍。"
      ],
      "grammar": [
        {
          "pattern": "N이/가 있어요/없어요",
          "zh": "有/没有……",
          "guide": "名词作句子主语时用 이/가。前面有收音用 이，没有收音用 가。",
          "exampleKo": "컴퓨터가 있어요. 책이 없어요.",
          "exampleZh": "有电脑。没有书。",
          "translations": {
            "en": {
              "meaning": "there is / there is not",
              "guide": "Use 이/가 to mark the subject. Use 이 after a final consonant and 가 after a vowel.",
              "example": "There is a computer. There is no book."
            }
          }
        },
        {
          "pattern": "장소에 있어요",
          "zh": "在某处",
          "guide": "用 장소에 说明人或物在哪里。回答时可以省略已经知道的主语。",
          "exampleKo": "시계가 방에 있어요? 네, 방에 있어요.",
          "exampleZh": "钟在房间里吗？是的，在房间里。",
          "translations": {
            "en": {
              "meaning": "to be in/at a place",
              "guide": "Use 장소에 to say where a person or thing is. In answers, the known subject can be omitted.",
              "example": "Is the clock in the room? Yes, it is in the room."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 34,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-02.js",
      "translations": {
        "en": {
          "title": "There Is a Desk in the Room",
          "goals": [
            "Name common places and objects in classrooms, rooms, and homes.",
            "Use N이/가 있어요/없어요 to say there is or there is not.",
            "Use 장소에 있어요 to say where a person or thing is.",
            "Read and write a simple room description."
          ]
        }
      }
    },
    {
      "id": "l1-03",
      "number": 3,
      "titleKo": "한국어를 배워요",
      "titleZh": "学习韩语",
      "pages": "32-41",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p32-p41",
        "dialogue": "refined-p35-p38",
        "culture": "reviewed-p40",
        "practice": "refined-p35-p41"
      },
      "goals": [
        "能用基础形容词描述事物、天气、食物和学习感受。",
        "能用 동사/형용사 -아요/어요 组成现在时礼貌句。",
        "能用 N을/를 标记宾语，说出正在做的日常动作。",
        "能围绕“今天做什么、那件事怎么样”进行简单问答。",
        "理解韩国表达感谢和道歉时常用的礼貌说法。"
      ],
      "grammar": [
        {
          "pattern": "동사/형용사 -아요/어요",
          "zh": "动词/形容词礼貌终结：……、做……",
          "guide": "接在动词、形容词后，用于礼貌地陈述或提问。词干元音常和 아/어 搭配，하다 变成 해요。例：싸다 -> 싸요, 맛있다 -> 맛있어요, 공부하다 -> 공부해요。",
          "examples": [
            {
              "ko": "한국어는 쉬워요.",
              "zh": "韩语容易。",
              "translations": {
                "en": {
                  "translation": "Korean is easy."
                }
              }
            },
            {
              "ko": "저는 한국어를 공부해요.",
              "zh": "我学习韩语。",
              "translations": {
                "en": {
                  "translation": "I study Korean."
                }
              }
            },
            {
              "ko": "책이 재미있어요.",
              "zh": "书很有意思。",
              "translations": {
                "en": {
                  "translation": "The book is interesting."
                }
              }
            }
          ],
          "translations": {
            "en": {
              "meaning": "polite present ending for verbs and adjectives",
              "guide": "Attach it to a verb or adjective stem to make a polite present sentence or question. 하다 becomes 해요."
            }
          }
        },
        {
          "pattern": "N을/를",
          "zh": "宾语助词",
          "guide": "接在名词后，表示动作的对象。有收音用 을，没有收音用 를。例：책을 읽어요, 커피를 마셔요。",
          "examples": [
            {
              "ko": "책을 읽어요.",
              "zh": "读书。",
              "translations": {
                "en": {
                  "translation": "I read a book."
                }
              }
            },
            {
              "ko": "커피를 마셔요.",
              "zh": "喝咖啡。",
              "translations": {
                "en": {
                  "translation": "I drink coffee."
                }
              }
            },
            {
              "ko": "친구를 만나요.",
              "zh": "见朋友。",
              "translations": {
                "en": {
                  "translation": "I meet a friend."
                }
              }
            }
          ],
          "translations": {
            "en": {
              "meaning": "object marker",
              "guide": "Use 을 after a noun with final consonant and 를 after a noun without final consonant to mark the object of an action."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 36,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-03.js",
      "translations": {
        "en": {
          "title": "I Learn Korean",
          "goals": [
            "Describe things, weather, food, and study experiences with basic adjectives.",
            "Use verb/adjective -아요/어요 to make polite present sentences.",
            "Use N을/를 to mark objects and talk about daily actions.",
            "Ask and answer simple questions about what someone is doing today and how it feels.",
            "Understand polite Korean expressions for thanks and apologies."
          ]
        }
      }
    },
    {
      "id": "l1-04",
      "number": 4,
      "titleKo": "라흐만 씨가 식당에 가요",
      "titleZh": "拉赫曼去餐厅",
      "pages": "42-51",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p42-p51",
        "dialogue": "refined-p45-p48",
        "culture": "refined-p50",
        "practice": "refined-p45-p51"
      },
      "goals": [
        "能用 어디에 가요? 和 장소에 가요 回答要去的地方。",
        "能区分 장소에 가요 和 장소에서 해요，说出去哪里、在那里做什么。",
        "能理解韩国常见休息空间，如 시민 공원、둘레길、쉼터。"
      ],
      "grammar": [
        {
          "pattern": "명에 가다",
          "zh": "去某地",
          "guide": "名词后接 에，再接 가요/와요，表示移动到某个地点。提问常用 어디에 가요?",
          "translations": {
            "en": {
              "meaning": "go to a place",
              "guide": "Attach 에 to a place noun and use 가요/와요 to show movement to that place. The question is often 어디에 가요?"
            }
          }
        },
        {
          "pattern": "명에서",
          "zh": "在某地做动作",
          "guide": "名词后接 에서，表示动作发生的地点。移动目的地用 에，做动作的地点用 에서。",
          "translations": {
            "en": {
              "meaning": "at/in a place where an action happens",
              "guide": "Attach 에서 to a place noun to mark where an action takes place. Use 에 for destination, and 에서 for the action location."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 30,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-04.js",
      "translations": {
        "en": {
          "title": "Rahman Goes to a Restaurant",
          "goals": [
            "Use 어디에 가요? and 장소에 가요 to ask and answer where someone is going.",
            "Distinguish 장소에 가요 from 장소에서 해요 to say where someone goes and what they do there.",
            "Understand common rest spaces in Korea, such as 시민 공원, 둘레길, and 쉼터."
          ]
        }
      }
    },
    {
      "id": "l1-05",
      "number": 5,
      "titleKo": "오늘은 5월 5일이에요",
      "titleZh": "今天是5月5日",
      "pages": "52-61",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p52-p61",
        "dialogue": "refined-p55-p58",
        "culture": "refined-p60",
        "practice": "refined-p54-p61"
      },
      "goals": [
        "能用汉字数词读月份和日期。",
        "能用 N에 说明某个日期或요일要做的事。",
        "能用 N이/가 아니에요 纠正日期、요일和事实。",
        "理解韩国生活中的常用电话号码。"
      ],
      "grammar": [
        {
          "pattern": "수 ①",
          "zh": "汉字数词",
          "guide": "读月份、日期、楼层、号码时常用 일, 이, 삼, 사, 오 等汉字数词。",
          "translations": {
            "en": {
              "meaning": "Sino-Korean numbers",
              "guide": "Use Sino-Korean numbers such as 일, 이, 삼, 사, 오 for months, dates, floors, and numbers."
            }
          }
        },
        {
          "pattern": "N에",
          "zh": "在/于某时间",
          "guide": "날짜, 요일, 시간 뒤에 에를 붙여 언제 하는지 말해요.",
          "translations": {
            "en": {
              "meaning": "on/at a time",
              "guide": "Attach 에 after a date, weekday, or time to say when something happens."
            }
          }
        },
        {
          "pattern": "N이/가 아니에요",
          "zh": "不是……",
          "guide": "받침이 있으면 이 아니에요, 받침이 없으면 가 아니에요를 써요.",
          "translations": {
            "en": {
              "meaning": "is not N",
              "guide": "Use 이 아니에요 after a noun with a final consonant and 가 아니에요 after a noun without one."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 23,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-05.js",
      "translations": {
        "en": {
          "title": "Today Is May 5",
          "goals": [
            "Read months and dates with Sino-Korean numbers.",
            "Use N에 to say what happens on a date or day of the week.",
            "Use N이/가 아니에요 to correct dates, weekdays, and facts.",
            "Understand common useful phone numbers in Korea."
          ]
        }
      }
    },
    {
      "id": "l1-06",
      "number": 6,
      "titleKo": "9시부터 6시까지 일해요",
      "titleZh": "从9点工作到6点",
      "pages": "62-71",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p62-p71",
        "dialogue": "refined-p65-p69",
        "culture": "refined-p70",
        "practice": "refined-p64-p71"
      },
      "goals": [
        "能说出几点几分，并询问别人几点做某事。",
        "能用 N부터 N까지 表达从某时间到某时间。",
        "能用 안 表达不做某事，并介绍自己的日常作息。",
        "理解韩国常见的工作时间和学生上学时间。"
      ],
      "grammar": [
        {
          "pattern": "몇 시에 V-아요/어요?",
          "zh": "几点做某事？",
          "guide": "时间后接 에，询问或说明动作发生的时间。몇 시에 일어나요? 表示“几点起床？”。",
          "translations": {
            "en": {
              "meaning": "at what time do you...?",
              "guide": "Attach 에 after a time to ask or state when an action happens. 몇 시에 일어나요? means \"What time do you wake up?\""
            }
          }
        },
        {
          "pattern": "N부터 N까지",
          "zh": "从……到……",
          "guide": "用于时间、日期或星期后，表示开始和结束。9시부터 6시까지 일해요 表示“从9点工作到6点”。",
          "translations": {
            "en": {
              "meaning": "from... to...",
              "guide": "Use this after times, dates, or weekdays to show a start and end point. 9시부터 6시까지 일해요 means \"I work from 9 to 6.\""
            }
          }
        },
        {
          "pattern": "안 V-아요/어요",
          "zh": "不做某事",
          "guide": "안 放在动词前表示否定。일해요 -> 일 안 해요，운동해요 -> 운동 안 해요。",
          "translations": {
            "en": {
              "meaning": "do not...",
              "guide": "Place 안 before the verb to make a negative sentence. 일해요 becomes 일 안 해요, and 운동해요 becomes 운동 안 해요."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 23,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-06.js",
      "translations": {
        "en": {
          "title": "I Work from 9 to 6",
          "goals": [
            "Tell time and ask what time someone does something.",
            "Use N부터 N까지 to describe from one time to another.",
            "Use 안 to say that someone does not do something and introduce a daily routine.",
            "Understand common Korean work hours and student school times."
          ]
        }
      }
    },
    {
      "id": "l1-07",
      "number": 7,
      "titleKo": "김치찌개 하나 주세요",
      "titleZh": "请给我一份泡菜汤",
      "pages": "72-81",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p72-p81",
        "dialogue": "refined-p77-p78",
        "culture": "refined-p80",
        "practice": "refined-p74-p81"
      },
      "goals": [
        "能说出常见 음식 和 식당 的名称。",
        "能用 동-고 싶다 表达想吃什么、想做什么。",
        "能用 동-(으)세요 和 N 주세요 在餐厅进行简单点餐。",
        "能读懂简单菜单，并理解韩国基本用餐礼仪。"
      ],
      "grammar": [
        {
          "pattern": "동-고 싶다",
          "zh": "想做某事",
          "guide": "动词词干后接 -고 싶다，表示说话人想做某个动作。例：먹다 -> 먹고 싶어요。",
          "translations": {
            "en": {
              "meaning": "want to do...",
              "guide": "Attach -고 싶다 to a verb stem to say what the speaker wants to do. Example: 먹다 -> 먹고 싶어요."
            }
          }
        },
        {
          "pattern": "동-(으)세요",
          "zh": "请……；用于礼貌指令",
          "guide": "动词词干有收音时用 -으세요，无收音时用 -세요。例：앉다 -> 앉으세요, 보다 -> 보세요。",
          "translations": {
            "en": {
              "meaning": "please do...",
              "guide": "Use -으세요 after a verb stem with a final consonant and -세요 after a stem without one. Examples: 앉다 -> 앉으세요, 보다 -> 보세요."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 41,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-07.js",
      "translations": {
        "en": {
          "title": "One Kimchi Stew, Please",
          "goals": [
            "Name common foods and types of restaurants.",
            "Use 동-고 싶다 to say what you want to eat or do.",
            "Use 동-(으)세요 and N 주세요 to order food simply at a restaurant.",
            "Read a simple menu and understand basic Korean table manners."
          ]
        }
      }
    },
    {
      "id": "l1-08",
      "number": 8,
      "titleKo": "칫솔하고 치약을 삽니다",
      "titleZh": "买牙刷和牙膏",
      "pages": "82-91",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p82-p91",
        "dialogue": "refined-p85-p88",
        "culture": "refined-p90",
        "practice": "refined-p84-p91"
      },
      "goals": [
        "能用 하고 连接两个以上要买的物品。",
        "能用 명, 개, 병, 잔, 마리 等单位表达数量。",
        "能询问并回答价格：얼마예요? / 얼마입니까?",
        "能读懂简单促销单，抓住商品、数量和价格。",
        "了解韩国纸币、硬币以及常见支付方式。"
      ],
      "grammar": [
        {
          "pattern": "N하고 N",
          "zh": "N和N",
          "guide": "하고 用在名词后，连接人或物。口语购物时常说 칫솔하고 치약 주세요。",
          "translations": {
            "en": {
              "meaning": "N and N",
              "guide": "하고 follows nouns and connects people or things. In shopping, 칫솔하고 치약 주세요 is natural."
            }
          }
        },
        {
          "pattern": "N을/를 삽니다",
          "zh": "买N",
          "guide": "사다 的正式陈述形是 삽니다。前面的名词用 을/를 标记宾语。",
          "translations": {
            "en": {
              "meaning": "buy N",
              "guide": "삽니다 is the formal statement form of 사다. The object before it takes 을/를."
            }
          }
        },
        {
          "pattern": "수량 + 단위",
          "zh": "数量+单位",
          "guide": "买东西时数量要配单位，如 칫솔 다섯 개, 주스 한 병, 녹차 세 잔。",
          "translations": {
            "en": {
              "meaning": "quantity + counter",
              "guide": "Use a counter with quantities when buying things, such as 칫솔 다섯 개, 주스 한 병, 녹차 세 잔."
            }
          }
        },
        {
          "pattern": "얼마예요? / 얼마입니까?",
          "zh": "多少钱？",
          "guide": "얼마예요? 是常用问法；얼마입니까? 更正式，教材在商店场景中练习。",
          "translations": {
            "en": {
              "meaning": "How much is it?",
              "guide": "얼마예요? is common; 얼마입니까? is more formal and is practiced in store dialogues."
            }
          }
        },
        {
          "pattern": "-습니다, -습니까?",
          "zh": "正式陈述/疑问",
          "guide": "动词、形容词的正式体。사다 变 삽니다/삽니까?，팔다 变 팝니다/팝니까?。",
          "translations": {
            "en": {
              "meaning": "formal statement/question ending",
              "guide": "Formal endings for verbs and adjectives. 사다 becomes 삽니다/삽니까?, and 팔다 becomes 팝니다/팝니까?."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 40,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-08.js",
      "translations": {
        "en": {
          "title": "I Buy a Toothbrush and Toothpaste",
          "goals": [
            "Connect two or more shopping items with 하고.",
            "Use counters such as 명, 개, 병, 잔, and 마리 to state quantities.",
            "Ask and answer prices with 얼마예요? and 얼마입니까?",
            "Read a simple sale flyer and identify item, quantity, and price.",
            "Understand Korean bills, coins, and common payment methods."
          ]
        }
      }
    },
    {
      "id": "l1-09",
      "number": 9,
      "titleKo": "지난 주말에 친구를 만났어요",
      "titleZh": "上周末见了朋友",
      "pages": "92-101",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p92-p101",
        "dialogue": "refined-p95-p101",
        "culture": "refined-p100",
        "practice": "refined-p95-p101"
      },
      "goals": [
        "能询问并回答昨天、刚才、上周末做了什么。",
        "能把常见动词变成 V-았/었어요 过去式。",
        "能用 N도 表示“也……”，补充说明第二个活动或物品。",
        "理解韩国人周末常见的休息、娱乐和运动活动。"
      ],
      "grammar": [
        {
          "pattern": "V-았/었어요",
          "zh": "过去式：做了……",
          "guide": "用于说过去发生的事或过去的状态。ㅏ/ㅗ 结尾多用 -았어요，其他元音多用 -었어요，하다 变成 했어요。",
          "translations": {
            "en": {
              "meaning": "past tense: did...",
              "guide": "Use it for past actions or states. Stems with ㅏ/ㅗ usually take -았어요, other vowels usually take -었어요, and 하다 becomes 했어요."
            }
          }
        },
        {
          "pattern": "N도",
          "zh": "也……",
          "guide": "接在名词后，表示在前面内容之外再补充同类内容。",
          "translations": {
            "en": {
              "meaning": "also / too",
              "guide": "Attach 도 to a noun to add another item or activity of the same kind."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 33,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-09.js",
      "translations": {
        "en": {
          "title": "I Met a Friend Last Weekend",
          "goals": [
            "Ask and answer what someone did yesterday, a little while ago, or last weekend.",
            "Conjugate common verbs into V-았/었어요.",
            "Use N도 to add another activity or item.",
            "Understand common weekend activities in Korea."
          ]
        }
      }
    },
    {
      "id": "l1-10",
      "number": 10,
      "titleKo": "아버지는 요리를 잘하세요",
      "titleZh": "爸爸很会做饭",
      "pages": "112-121",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p112-p121",
        "dialogue": "refined-p114-p118",
        "culture": "refined-p120",
        "practice": "refined-p114-p121"
      },
      "goals": [
        "能询问并介绍家庭成员。",
        "能用 -(으)시- 和常用敬语词汇尊敬地描述长辈的动作、状态和身份。",
        "能用 -지만 连接前后相反或对比的内容。",
        "理解韩国人在家庭称谓上的基本习惯。"
      ],
      "grammar": [
        {
          "pattern": "V/A-(으)시-",
          "zh": "主体尊敬：表示对主语的尊敬",
          "guide": "动词或形容词词干有收音时多用 -으시-, 无收音时用 -시-. 例：읽다 -> 읽으세요, 가다 -> 가세요.",
          "translations": {
            "en": {
              "meaning": "honorific infix for the subject",
              "guide": "Use -으시- after most stems with a final consonant and -시- after stems without one. Example: 읽다 -> 읽으세요, 가다 -> 가세요."
            }
          }
        },
        {
          "pattern": "높임말",
          "zh": "敬语词汇",
          "guide": "谈到长辈或需要尊敬的人时，用 성함, 연세, 생신, 계시다, 드시다 等敬语词。",
          "translations": {
            "en": {
              "meaning": "honorific vocabulary",
              "guide": "Use honorific words such as 성함, 연세, 생신, 계시다, and 드시다 when talking about elders or respected people."
            }
          }
        },
        {
          "pattern": "V/A-지만, N이지만/지만",
          "zh": "虽然……但是……",
          "guide": "-지만 连接相反或对比内容。名词后有收音常用 -이지만, 无收音可用 -지만. 例：회사원이지만, 학생이지만.",
          "translations": {
            "en": {
              "meaning": "but, although",
              "guide": "-지만 connects contrasting information. With nouns, use -이지만 after a final consonant and -지만 after a vowel."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 31,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-10.js",
      "translations": {
        "en": {
          "title": "My Father Cooks Well",
          "goals": [
            "Ask and introduce family members.",
            "Respectfully describe elders' actions, states, and identity with -(으)시- and honorific vocabulary.",
            "Connect contrasting ideas with -지만.",
            "Understand basic Korean habits around family terms."
          ]
        }
      }
    },
    {
      "id": "l1-11",
      "number": 11,
      "titleKo": "어버이날에 부모님께 꽃을 드려요",
      "titleZh": "父母节给父母送花",
      "pages": "122-131",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p122-p131",
        "dialogue": "refined-p125-p128",
        "culture": "refined-p130",
        "practice": "refined-p124-p131"
      },
      "goals": [
        "能说出父母节、教师节、毕业典礼等特别日子的名称。",
        "能用 N에게/한테/께 表示动作影响的对象，并区分普通对象和尊敬对象。",
        "能用 V-아/어/해 주다 和 V-아/어/해 드리다 表达“为别人做某事”。",
        "能围绕特别的日子、礼物和祝贺进行简短对话。"
      ],
      "grammar": [
        {
          "pattern": "N에게/한테/께",
          "zh": "给/向/对某人；께用于尊敬对象",
          "guide": "表示动作影响的对象。에게比较书面，한테常用于口语；对象是父母、老师、老板等需要尊敬的人时，用께。",
          "exampleKo": "어머니께 선물을 보내 드렸어요.",
          "exampleZh": "给妈妈寄了礼物。",
          "source": "p.125 명에게/한테/께",
          "translations": {
            "en": {
              "meaning": "to someone; 께 is the honorific form",
              "guide": "Use these particles to mark the person affected by an action. 에게 is more neutral/written, 한테 is common in speech, and 께 is used for a respected person.",
              "example": "I sent a gift to my mother."
            }
          }
        },
        {
          "pattern": "V-아/어/해 주다",
          "zh": "为别人做某事",
          "guide": "动词后接 아/어/해 주다，表示为了别人做某动作。常见变形：사다 → 사 줘요, 만들다 → 만들어 줘요, 쓰다 → 써 줘요, 축하하다 → 축하해 줘요。",
          "exampleKo": "친구에게 생일 선물을 사 줘요.",
          "exampleZh": "给朋友买生日礼物。",
          "source": "p.127 동-어 주다",
          "translations": {
            "en": {
              "meaning": "do something for someone",
              "guide": "Attach 아/어/해 주다 to a verb to show that the action is done for someone else. Common forms include 사 줘요, 만들어 줘요, 써 줘요, and 축하해 줘요.",
              "example": "I buy a birthday gift for my friend."
            }
          }
        },
        {
          "pattern": "V-아/어/해 드리다",
          "zh": "为尊敬对象做某事",
          "guide": "对象是父母、老师等需要尊敬的人时，把 주다 换成 드리다。常和 께 一起用：부모님께 꽃을 드려요, 아버지께 케이크를 만들어 드려요。",
          "exampleKo": "어버이날에 부모님께 꽃을 드려요.",
          "exampleZh": "父母节给父母送花。",
          "source": "p.122 단원 제목, p.127 동-어 주다",
          "translations": {
            "en": {
              "meaning": "do or give something for a respected person",
              "guide": "Use 드리다 instead of 주다 when the recipient is respected, such as parents or teachers. It often appears with 께.",
              "example": "I give flowers to my parents on Parents' Day."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 29,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-11.js",
      "translations": {
        "en": {
          "title": "I Give Flowers to My Parents on Parents' Day",
          "goals": [
            "Name special days such as Parents' Day, Teacher's Day, and graduation ceremonies.",
            "Use N에게/한테/께 to mark the person affected by an action and distinguish regular and respected recipients.",
            "Use V-아/어/해 주다 and V-아/어/해 드리다 to say that someone does something for another person.",
            "Have short conversations about special days, gifts, and congratulations."
          ]
        }
      }
    },
    {
      "id": "l1-12",
      "number": 12,
      "titleKo": "이번 휴가에 뭐 할 거예요?",
      "titleZh": "这次休假要做什么？",
      "pages": "132-141",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p132-p141",
        "dialogue": "refined-p135-p138",
        "culture": "refined-p140",
        "practice": "refined-p134-p141"
      },
      "goals": [
        "能询问和回答休假、休息日的计划。",
        "能用 V-(으)ㄹ 거예요 表达将来要做的事。",
        "能用 V/A-고 连接两个以上的动作或状态。",
        "能读懂简单的休假计划短文，并了解韩国常见旅行地。"
      ],
      "grammar": [
        {
          "pattern": "V-(으)ㄹ 거예요",
          "zh": "将要……；打算……",
          "guide": "用于说未来的事或计划。有收音时多用 -을 거예요, 无收音时用 -ㄹ 거예요. 例：먹다 -> 먹을 거예요, 가다 -> 갈 거예요.",
          "translations": {
            "en": {
              "meaning": "will / be going to",
              "guide": "Use this to talk about future actions or plans. Use -을 거예요 after most stems with a final consonant and -ㄹ 거예요 after stems without one. Example: 먹다 -> 먹을 거예요, 가다 -> 갈 거예요."
            }
          }
        },
        {
          "pattern": "V/A-고",
          "zh": "又……又……；并且……",
          "guide": "用于把两个以上动作或状态并列连接。动词、形容词词干后直接接 -고. 例：보고 운동도 해요, 쉽고 재미있어요.",
          "translations": {
            "en": {
              "meaning": "and; and also",
              "guide": "Attach -고 directly to a verb or adjective stem to list two or more actions or qualities. Example: 보고 운동도 해요, 쉽고 재미있어요."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 31,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-12.js",
      "translations": {
        "en": {
          "title": "What Will You Do This Vacation?",
          "goals": [
            "Ask and answer questions about vacation and day-off plans.",
            "Use V-(으)ㄹ 거예요 to talk about future plans.",
            "Use V/A-고 to connect two or more actions or qualities.",
            "Read a simple vacation-plan text and understand common travel destinations in Korea."
          ]
        }
      }
    },
    {
      "id": "l1-13",
      "number": 13,
      "titleKo": "버스로 공항에 가요",
      "titleZh": "坐公交去机场",
      "pages": "142-151",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p142-p151",
        "dialogue": "refined-p145-p148",
        "culture": "refined-p150",
        "practice": "refined-p145-p151"
      },
      "goals": [
        "能说出常见交通工具和交通设施。",
        "能用 N(으)로 回答“怎么去”。",
        "能用 V-(으)러 가요/와요 说明去某地的目的。",
        "能围绕“去哪里、为什么去、怎么去”进行简单问答。",
        "理解韩国大众交通的基本分类和交通卡使用场景。"
      ],
      "grammar": [
        {
          "pattern": "N(으)로",
          "zh": "用……；乘……；以……方式",
          "guide": "用于说明移动的交通手段。名词有收音时多用 -으로，无收音或收音是 ㄹ 时用 -로。例：버스로 가요, 자전거로 와요, 여객선으로 가요.",
          "translations": {
            "en": {
              "meaning": "by / with / using a means of transportation",
              "guide": "Use N(으)로 to show the means of travel. Use -으로 after most final consonants, and -로 after a vowel or final ㄹ. Examples: 버스로 가요, 자전거로 와요, 여객선으로 가요."
            }
          }
        },
        {
          "pattern": "V-(으)러 가다/오다",
          "zh": "去/来做……",
          "guide": "用于说明移动的目的。动词词干有收音时多用 -으러，没收音或收音是 ㄹ 时用 -러。例：일하러 왔어요, 버스를 타러 가요, 책을 빌리러 가요.",
          "translations": {
            "en": {
              "meaning": "go/come in order to do...",
              "guide": "Use V-(으)러 가다/오다 to express the purpose of movement. Use -으러 after most final consonants and -러 after a vowel or final ㄹ."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 31,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-13.js",
      "translations": {
        "en": {
          "title": "I Go to the Airport by Bus",
          "goals": [
            "Name common vehicles and transportation facilities.",
            "Use N(으)로 to answer how someone goes somewhere.",
            "Use V-(으)러 가요/와요 to explain the purpose of going or coming.",
            "Ask and answer where someone is going, why, and how.",
            "Understand basic categories of public transportation in Korea and common transportation card use."
          ]
        }
      }
    },
    {
      "id": "l1-14",
      "number": 14,
      "titleKo": "저녁 7시에 만날까요?",
      "titleZh": "晚上7点见面好吗？",
      "pages": "152-161",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p152-p161",
        "dialogue": "refined-p155-p158",
        "culture": "refined-p160",
        "practice": "refined-p155-p161"
      },
      "goals": [
        "能用 V-(으)ㄹ까요? 提议一起吃饭、见面或做活动。",
        "能用 시간에/장소에서 만나요 说清楚约定的时间和地点。",
        "能用 못 V 和原因说明不能赴约或不能做某事。",
        "理解韩国人约定地点从固定地点到手机联系的变化。"
      ],
      "grammar": [
        {
          "pattern": "V-(으)ㄹ까요?",
          "zh": "……好吗？/要不要一起……？",
          "guide": "用于询问对方想法、意见，或礼貌地提出一起做某事。有收音用 -을까요?，无收音用 -ㄹ까요?。",
          "source": "p.155",
          "translations": {
            "en": {
              "meaning": "Shall we...? / Would you like to...?",
              "guide": "Use V-(으)ㄹ까요? to ask for someone's opinion or to suggest doing something together. Add -을까요? after a final consonant and -ㄹ까요? after a vowel."
            }
          }
        },
        {
          "pattern": "못 V",
          "zh": "不能……/没法……",
          "guide": "못 放在动词前，表示没有能力或没有可能做某事。하다 动词常说 N을/를 못 하다，如 운전 못 하다。",
          "source": "p.157",
          "translations": {
            "en": {
              "meaning": "cannot...",
              "guide": "Put 못 before a verb to say that someone cannot do something or that something is not possible. With 하다 verbs, it often appears as N을/를 못 하다, as in 운전 못 하다."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 23,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-14.js",
      "translations": {
        "en": {
          "title": "Shall we meet at 7 p.m.?",
          "goals": [
            "Use V-(으)ㄹ까요? to suggest eating, meeting, or doing an activity together.",
            "State appointment times and places with time에 and place에서 만나요.",
            "Use 못 V with a reason to explain that you cannot attend or do something.",
            "Understand how meeting places in Korea changed from fixed spots to mobile-phone coordination."
          ]
        }
      }
    },
    {
      "id": "l1-15",
      "number": 15,
      "titleKo": "오늘 날씨가 정말 덥네요",
      "titleZh": "今天天气真热啊",
      "pages": "162-171",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p162-p171",
        "dialogue": "refined-p164-p168",
        "culture": "refined-p170",
        "practice": "refined-p164-p171"
      },
      "goals": [
        "能询问并回答季节和天气。",
        "能用 -네요 表达看到或刚知道的事实带来的感叹。",
        "能用 N보다 比较两个地方、季节或事物。",
        "能读懂韩国四季和灾难安全短信的基础信息。"
      ],
      "grammar": [
        {
          "pattern": "동형 -네요",
          "zh": "感叹：原来/真……啊",
          "guide": "用于表达刚看到、刚知道的事实带来的感觉或想法。动词、形容词直接接 -네요；名词用 -이네요/네요。",
          "source": "p.165",
          "examples": [
            {
              "ko": "아이가 정말 예쁘네요.",
              "zh": "孩子真漂亮啊。",
              "en": "The child is really pretty."
            },
            {
              "ko": "와! 정말 맛있네요.",
              "zh": "哇！真好吃啊。",
              "en": "Wow! It is really delicious."
            }
          ],
          "translations": {
            "en": {
              "meaning": "exclamatory ending: I see that... / how...",
              "guide": "Use -네요 to express a feeling or thought about something newly noticed or learned. Attach -네요 directly to verbs and adjectives; use -이네요/네요 with nouns."
            }
          }
        },
        {
          "pattern": "명보다",
          "zh": "比……",
          "guide": "把比较对象放在 보다 前面，后面说出比较结果。天气比较中常和 더 一起使用。",
          "source": "p.167",
          "examples": [
            {
              "ko": "알래스카는 서울보다 추워요.",
              "zh": "阿拉斯加比首尔冷。",
              "en": "Alaska is colder than Seoul."
            },
            {
              "ko": "필리핀은 한국보다 더 더워요.",
              "zh": "菲律宾比韩国更热。",
              "en": "The Philippines is hotter than Korea."
            }
          ],
          "translations": {
            "en": {
              "meaning": "than; compared with",
              "guide": "Put the thing being compared before 보다, then say the result. In weather comparisons, it is often used with 더."
            }
          }
        },
        {
          "pattern": "날씨가 어때요?",
          "zh": "天气怎么样？",
          "guide": "询问天气时说 날씨가 어때요? 回答可以用 맑아요, 흐려요, 비가 와요, 눈이 와요 等。",
          "source": "p.166",
          "examples": [
            {
              "ko": "지금 서울 날씨가 어때요?",
              "zh": "现在首尔天气怎么样？",
              "en": "How is the weather in Seoul now?"
            },
            {
              "ko": "맑아요.",
              "zh": "很晴朗。",
              "en": "It is clear."
            }
          ],
          "translations": {
            "en": {
              "meaning": "How is the weather?",
              "guide": "Ask about weather with 날씨가 어때요? Answers include 맑아요, 흐려요, 비가 와요, 눈이 와요, and similar weather expressions."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 36,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-15.js",
      "translations": {
        "en": {
          "title": "The Weather Is Really Hot Today",
          "goals": [
            "Ask and answer about seasons and weather.",
            "Use -네요 to express a reaction to something just noticed or learned.",
            "Use N보다 to compare two places, seasons, or things.",
            "Read basic information about Korea's four seasons and disaster safety alert text messages."
          ]
        }
      }
    },
    {
      "id": "l1-16",
      "number": 16,
      "titleKo": "배가 아파서 병원에 가요",
      "titleZh": "因为肚子疼去医院",
      "pages": "172-181",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p172-p181",
        "dialogue": "refined-p175-p181",
        "culture": "refined-p180",
        "practice": "refined-p175-p181"
      },
      "goals": [
        "能说出常见身体部位和疼痛、感冒、骨折等症状。",
        "能根据症状选择 내과、이비인후과、정형외과、안과、치과 等医院科室。",
        "能用 A/V-아서/어서 说明去医院或不能做某事的原因。",
        "能用 V-는 것이 좋아요 给身体不舒服的人提出简单建议。",
        "理解韩国医院的 1차、2차、3차 分级和基本就医顺序。"
      ],
      "grammar": [
        {
          "pattern": "A/V-아서/어서",
          "zh": "因为……所以……",
          "guide": "前面的内容是后面行动或状态的原因。阳性元音常接 -아서，阴性元音常接 -어서，하다 变成 해서。아프다 接 -아서 时变成 아파서。",
          "examples": [
            {
              "ko": "배가 아파서 병원에 갔어요.",
              "zh": "因为肚子疼，所以去了医院。"
            },
            {
              "ko": "감기에 걸려서 약을 먹었어요.",
              "zh": "因为感冒了，所以吃了药。"
            },
            {
              "ko": "피곤해서 집에서 쉬었어요.",
              "zh": "因为累，所以在家休息了。"
            }
          ],
          "translations": {
            "en": {
              "meaning": "because; so",
              "guide": "Use A/V-아서/어서 when the first clause gives the reason for the following action or state. 아프다 becomes 아파서, and 하다 becomes 해서."
            }
          }
        },
        {
          "pattern": "V-는 것",
          "zh": "做……这件事",
          "guide": "把动词变成名词性表达。给建议时常用 V-는 것이 좋아요，意思是“做……比较好”。",
          "examples": [
            {
              "ko": "집에서 푹 쉬는 것이 좋아요.",
              "zh": "在家好好休息比较好。"
            },
            {
              "ko": "빨리 병원에 가는 것이 좋아요.",
              "zh": "快点去医院比较好。"
            },
            {
              "ko": "물을 많이 마시는 것이 좋아요.",
              "zh": "多喝水比较好。"
            }
          ],
          "translations": {
            "en": {
              "meaning": "the act of doing; doing something",
              "guide": "Attach -는 것 to a verb stem to make it noun-like. V-는 것이 좋아요 is a common way to recommend doing something."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 36,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-16.js",
      "translations": {
        "en": {
          "title": "I Go to the Hospital Because My Stomach Hurts",
          "goals": [
            "Say common body parts and symptoms such as pain, colds, and broken bones.",
            "Choose departments such as internal medicine, ENT, orthopedics, ophthalmology, and dentistry according to symptoms.",
            "Use A/V-아서/어서 to explain why someone goes to the hospital or cannot do something.",
            "Use V-는 것이 좋아요 to give simple advice to someone who feels sick.",
            "Understand the basic Korean hospital levels and the order of receiving medical care."
          ]
        }
      }
    },
    {
      "id": "l1-17",
      "number": 17,
      "titleKo": "사진을 찍지 마세요",
      "titleZh": "请不要拍照",
      "pages": "182-191",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p182-p191",
        "dialogue": "refined-p185-p188",
        "culture": "refined-p190",
        "practice": "refined-p187-p190"
      },
      "goals": [
        "能读懂公共场所常见的 금지 标识和 안내문。",
        "能用 V-지 마세요 礼貌地说“请不要……”。",
        "能用 N(으)로 说明方向，并在问路对话中理解 오른쪽으로/왼쪽으로/아래층으로 等表达。",
        "理解韩国公交和地铁里的公共礼仪。"
      ],
      "grammar": [
        {
          "pattern": "N(으)로 (방향)",
          "zh": "向……；往……",
          "guide": "用于表示移动的目的地或方向。有收音多用 -으로，无收音或 ㄹ 收音用 -로。教材例句：왼쪽으로 가세요, 위로 올라가세요.",
          "source": "p.185",
          "translations": {
            "en": {
              "meaning": "toward...; to...",
              "guide": "Use N(으)로 to show a destination or direction of movement. Use -으로 after most final consonants, and -로 after a vowel or final ㄹ. Textbook examples include 왼쪽으로 가세요 and 위로 올라가세요."
            }
          }
        },
        {
          "pattern": "V-지 마세요",
          "zh": "请不要……",
          "guide": "用于禁止听话人做某个动作。直接接在动词词干后：먹다 -> 먹지 마세요, 듣다 -> 듣지 마세요, 쓰다 -> 쓰지 마세요, 타다 -> 타지 마세요.",
          "source": "p.187",
          "translations": {
            "en": {
              "meaning": "please do not...",
              "guide": "Use V-지 마세요 to tell the listener not to do an action. Attach it directly to the verb stem: 먹다 -> 먹지 마세요, 듣다 -> 듣지 마세요, 쓰다 -> 쓰지 마세요, 타다 -> 타지 마세요."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 28,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-17.js",
      "translations": {
        "en": {
          "title": "Please Do Not Take Pictures",
          "goals": [
            "Read common no/prohibition signs and notices in public places.",
            "Use V-지 마세요 to politely say 'please do not...'.",
            "Use N(으)로 to give directions and understand expressions such as 오른쪽으로, 왼쪽으로, and 아래층으로 in direction conversations.",
            "Understand public etiquette on Korean buses and subways."
          ]
        }
      }
    },
    {
      "id": "l1-18",
      "number": 18,
      "titleKo": "한국 생활은 조금 힘든데 재미있어요",
      "titleZh": "韩国生活有点辛苦但很有意思",
      "pages": "192-201",
      "status": "refined",
      "progress": {
        "vocabulary": "refined-p192-p201",
        "dialogue": "refined-p195-p198",
        "culture": "refined-p200",
        "practice": "refined-p195-p201"
      },
      "goals": [
        "能用 -지요? 确认自己已经知道或听说过的韩国生活信息。",
        "能用 -는데 连接相反或不同的事实，说明韩国和家乡的差异。",
        "能围绕交通、学校、医院、商店营业时间等韩国生活信息进行简单问答。",
        "能用 힘들다, 쉽다, 어렵다, 익숙하다 等词表达适应韩国生活的感受。",
        "理解韩国语缩略语在餐厅、日常聊天中的常见用法和不便之处。"
      ],
      "grammar": [
        {
          "pattern": "A/V-지요?",
          "zh": "……吧？/……对吧？",
          "guide": "用于确认自己已经知道的事实，或确认对方也知道的内容。动词、形容词词干后直接接 -지요?，口语中常缩成 -죠?",
          "source": "p.195",
          "translations": {
            "en": {
              "meaning": "...right? / isn't it?",
              "guide": "Use A/V-지요? to confirm something the speaker already knows or expects the listener to know. Attach -지요? directly to an adjective or verb stem; in speech it is often shortened to -죠?"
            }
          }
        },
        {
          "pattern": "A/V-는데 (대조)",
          "zh": "……但是……/……而……",
          "guide": "用于把前后不同或相反的事实连接起来。动词用 -는데；形容词有收音多用 -은데，无收音多用 -ㄴ데；있다/없다 后用 -는데。",
          "source": "p.197",
          "translations": {
            "en": {
              "meaning": "...but... / while...",
              "guide": "Use A/V-는데 to connect contrasting facts or actions. Verbs take -는데; adjectives usually take -은데 after a final consonant and -ㄴ데 after a vowel; 있다/없다 take -는데."
            }
          }
        }
      ],
      "stats": {
        "vocabulary": 28,
        "dialogues": 3,
        "culture": 1,
        "practice": 5
      },
      "chunk": "lesson_chunks/l1-18.js",
      "translations": {
        "en": {
          "title": "Life in Korea Is a Little Hard but Fun",
          "goals": [
            "Use -지요? to confirm information about life in Korea that you already know or have heard.",
            "Use -는데 to connect contrasting facts and describe differences between Korea and your home country.",
            "Ask and answer simple questions about transportation, school, hospitals, and store hours in Korea.",
            "Express feelings about adapting to life in Korea with words such as 힘들다, 쉽다, 어렵다, and 익숙하다.",
            "Understand common Korean abbreviations used in restaurants and everyday conversations."
          ]
        }
      }
    }
  ],
  "updatedAt": "2026-05-26"
};
