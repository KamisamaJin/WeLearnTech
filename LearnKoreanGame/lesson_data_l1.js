const lessonGuideL1 = {
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
      },
      "searchText": "l1-01 안녕하세요? 你好？ Hello p12-21 能用 안녕하세요? 打招呼，并说出自己的姓名。 能询问姓名、职业、国籍并做简单回答。 能区分 이에요/예요 和 은/는 的基础用法。 안녕하세요 您好；你好 hello 이름 名字 name 뭐 什么 what 씨 先生；女士 Mr./Ms. 저 我 I; me 직업 职业 job; occupation 국적 国籍 nationality 어느 哪个；哪一个 which 나라 国家 country 사람 人 person 한국 韩国 Korea 필리핀 菲律宾 the Philippines 미국 美国 the United States 중국 中国 China 방글라데시 孟加拉国 Bangladesh 선생님 老师 teacher 회사원 公司职员 office worker 영어 강사 英语讲师 English instructor 학생 学生 student 공장 직원 工厂职员 factory worker 판매원 销售员 salesperson 주부 家庭主妇；家庭主夫 homemaker 초등학생 小学生 elementary school student 만나서 반갑습니다 见到您很高兴 nice to meet you 안녕히 계세요 请留步；再见 goodbye (said to someone staying) 안녕히 가세요 请慢走；再见 goodbye (said to someone leaving)"
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
      },
      "searchText": "l1-02 방에 책상이 있어요 房间里有书桌 There Is a Desk in the Room p22-31 能说出教室、房间、家里常见地点和物品名称。 能用 N이/가 있어요/없어요 表达“有/没有”。 能用 장소에 있어요 说明人或物所在的位置。 能读懂并仿写简单的房间介绍。 방 房间 room 교실 教室 classroom 집 家 home; house 회사 公司 company; workplace 기숙사 宿舍 dormitory 학교 学校 school 거실 客厅 living room 화장실 卫生间 bathroom; restroom 부엌 厨房 kitchen 책상 书桌 desk 의자 椅子 chair 침대 床 bed 책 书 book 가방 包 bag 컴퓨터 电脑 computer 시계 钟表；手表 clock; watch 우산 雨伞 umbrella 지도 地图 map 모자 帽子 hat; cap 공책 笔记本 notebook 휴대 전화 手机 mobile phone 냉장고 冰箱 refrigerator 텔레비전 电视 television 세탁기 洗衣机 washing machine 소파 沙发 sofa 옷장 衣柜 wardrobe; closet 에어컨 空调 air conditioner 식탁 餐桌 dining table 있어요 有；在 there is; to be located 없어요 没有；不在 there is not; not to have 하지만 但是 but; however 그리고 还有；并且 and; also 이름 名字 given name; name 성 姓 family name; surname"
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
      },
      "searchText": "l1-03 한국어를 배워요 学习韩语 I Learn Korean p32-41 能用基础形容词描述事物、天气、食物和学习感受。 能用 동사/형용사 -아요/어요 组成现在时礼貌句。 能用 N을/를 标记宾语，说出正在做的日常动作。 能围绕“今天做什么、那件事怎么样”进行简单问答。 理解韩国表达感谢和道歉时常用的礼貌说法。 한국어 韩语 Korean language 배우다 学习 to learn 싸다 便宜 cheap 비싸다 贵 expensive 많다 多 many, much 적다 少 few, little 크다 大 big 작다 小 small 맛있다 好吃 delicious 맛없다 不好吃 not delicious 어렵다 难 difficult 쉽다 容易 easy 춥다 冷 cold 덥다 热 hot 재미있다 有意思 interesting, fun 재미없다 没意思 uninteresting, not fun 좋다 好 good 나쁘다 坏，不好 bad 예쁘다 漂亮 pretty 바쁘다 忙 busy 아프다 疼，生病 sick, painful 배가 고프다 肚子饿 to be hungry 고향 음식을 요리하다 做家乡菜 to cook hometown food 책을 읽다 读书 to read a book 한국어를 공부하다 学习韩语 to study Korean 텔레비전을 보다 看电视 to watch television 커피를 마시다 喝咖啡 to drink coffee 방을 청소하다 打扫房间 to clean the room 빵을 먹다 吃面包 to eat bread 친구를 만나다 见朋友 to meet a friend 옷을 사다 买衣服 to buy clothes 일하다 工作 to work 자다 睡觉 to sleep 운동하다 运动 to exercise 학생들 学生们 students 유튜브 YouTube，油管 YouTube"
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
      },
      "searchText": "l1-04 라흐만 씨가 식당에 가요 拉赫曼去餐厅 Rahman Goes to a Restaurant p42-51 能用 어디에 가요? 和 장소에 가요 回答要去的地方。 能区分 장소에 가요 和 장소에서 해요，说出去哪里、在那里做什么。 能理解韩国常见休息空间，如 시민 공원、둘레길、쉼터。 학교 学校 school 편의점 便利店 convenience store 회사 公司 company; workplace 은행 银行 bank 집 家 home; house 식당 餐厅 restaurant 카페 咖啡馆 cafe 병원 医院 hospital 약국 药店 pharmacy 시장 市场 market 마트 超市 mart; supermarket 영화관/극장 电影院/剧场 movie theater; theater 백화점 百货商店 department store 찜질방 汗蒸房 Korean sauna; jjimjilbang 헬스장 健身房 gym 노래방 练歌房/KTV karaoke room 피시방(PC방) 网吧 PC cafe; internet cafe 미용실 美发店 hair salon 빨래방 自助洗衣店 laundromat 우체국 邮局 post office 서점 书店 bookstore 회사 식당 公司食堂 company cafeteria 직원 식당 员工食堂 staff cafeteria 근처 附近 nearby; vicinity 밖 外面 outside 공원 公园 park 운동하다 运动 to exercise 밥을 먹다 吃饭 to eat a meal 문화 센터 文化中心 culture center 배우다 学习 to learn"
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
      },
      "searchText": "l1-05 오늘은 5월 5일이에요 今天是5月5日 Today Is May 5 p52-61 能用汉字数词读月份和日期。 能用 N에 说明某个日期或요일要做的事。 能用 N이/가 아니에요 纠正日期、요일和事实。 理解韩国生活中的常用电话号码。 오늘 今天 today 어제 昨天 yesterday 내일 明天 tomorrow 지난주 上周 last week 이번 주 这周 this week 다음 주 下周 next week 요일 星期 day of the week 월요일 星期一 Monday 수요일 星期三 Wednesday 금요일 星期五 Friday 토요일 星期六 Saturday 몇 월 几月 what month 며칠 几号；几天 what date; how many days 오월 五月 May 십이월 十二月 December 생일 生日 birthday 어린이날 儿童节 Children's Day 어버이날 父母节 Parents' Day 어머니 댁 母亲家；妈妈家 mother's home 전화번호 电话号码 phone number 소방서 消防署 fire station 경찰서 警察署 police station 외국인종합안내센터 外国人综合咨询中心 Immigration Contact Center"
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
      },
      "searchText": "l1-06 9시부터 6시까지 일해요 从9点工作到6点 I Work from 9 to 6 p62-71 能说出几点几分，并询问别人几点做某事。 能用 N부터 N까지 表达从某时间到某时间。 能用 안 表达不做某事，并介绍自己的日常作息。 理解韩国常见的工作时间和学生上学时间。 시 点 o'clock 분 分 minute 몇 시 几点 what time 오전 上午 a.m.; morning 오후 下午 p.m.; afternoon 새벽 凌晨 dawn; early morning 아침 早上；早餐 morning; breakfast 낮 白天 daytime 저녁 晚上；晚饭 evening; dinner 밤 夜晚 night 일어나다 起床；起来 to wake up; to get up 세수하다 洗脸 to wash one's face 옷을 입다 穿衣服 to put on clothes 잠을 자다 睡觉 to sleep 친구를 만나다 见朋友 to meet a friend 한국어를 배우다 学习韩语 to learn Korean 출근하다 上班 to go to work 일하다 工作 to work 퇴근하다 下班 to leave work 주말 周末 weekend 운동하다 运动 to exercise 장을 보다 买菜；采购 to shop for groceries 테니스 网球 tennis"
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
      },
      "searchText": "l1-07 김치찌개 하나 주세요 请给我一份泡菜汤 One Kimchi Stew, Please p72-81 能说出常见 음식 和 식당 的名称。 能用 동-고 싶다 表达想吃什么、想做什么。 能用 동-(으)세요 和 N 주세요 在餐厅进行简单点餐。 能读懂简单菜单，并理解韩国基本用餐礼仪。 김치찌개 泡菜汤 kimchi stew 된장찌개 大酱汤 soybean paste stew 삼계탕 参鸡汤 ginseng chicken soup 삼겹살 五花肉 pork belly 불고기 烤牛肉 bulgogi; marinated grilled beef 비빔밥 拌饭 bibimbap 김밥 紫菜包饭 gimbap 떡볶이 炒年糕 tteokbokki; spicy rice cakes 라면 拉面；方便面 ramyeon 순대 米肠 Korean blood sausage 생선회 生鱼片 sliced raw fish 초밥 寿司 sushi 우동 乌冬面 udon 돈가스 炸猪排 pork cutlet 짜장면 炸酱面 black bean noodles 짬뽕 辣海鲜面 spicy seafood noodle soup 탕수육 糖醋肉 sweet and sour pork 만두 饺子 dumplings 피자 披萨 pizza 스파게티 意大利面 spaghetti 햄버거 汉堡 hamburger 샐러드 沙拉 salad 한식집 韩餐店 Korean restaurant 분식집 小吃店 snack restaurant 중국집 中餐馆 Chinese restaurant 일식집 日料店 Japanese restaurant 이탈리아 식당 意大利餐厅 Italian restaurant 메뉴 菜单 menu 주문하다 点餐；订购 to order 기다리다 等待 to wait 반찬 小菜 side dishes 숟가락 勺子 spoon 젓가락 筷子 chopsticks 그릇 碗；器皿 bowl; dish 이름을 쓰세요 请写名字 Please write your name 반찬 좀 더 주세요 请再给我一些小菜 Please give me some more side dishes 불고기 3인분 주세요 请给我们三人份烤牛肉 Three servings of bulgogi, please 물 좀 주세요 请给我一点水 Please give me some water 먹고 싶어요 想吃 want to eat 앉으세요 请坐 Please sit down 읽으세요 请读 Please read"
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
      },
      "searchText": "l1-08 칫솔하고 치약을 삽니다 买牙刷和牙膏 I Buy a Toothbrush and Toothpaste p82-91 能用 하고 连接两个以上要买的物品。 能用 명, 개, 병, 잔, 마리 等单位表达数量。 能询问并回答价格：얼마예요? / 얼마입니까? 能读懂简单促销单，抓住商品、数量和价格。 了解韩国纸币、硬币以及常见支付方式。 쇼핑 购物 shopping 물건 东西；物品 thing; item 명 名；位（人数单位） counter for people 개 个（通用物品单位） counter for general items 병 瓶 bottle; counter for bottles 잔 杯 cup; counter for cups 마리 只；头（动物单位） counter for animals 조각 块；片 piece; slice 하고 和 and; with 주세요 请给我 please give me 콜라 可乐 cola 라면 方便面；拉面 ramyeon; instant noodles 주스 果汁 juice 녹차 绿茶 green tea 사과 苹果 apple 배 梨 pear 공책 本子；笔记本 notebook 가위 剪刀 scissors 마트 超市 mart; supermarket 가격 价格 price 원 韩元 won; Korean currency unit 얼마 多少；多少钱 how much 비싸다 贵 to be expensive 싸다 便宜 to be cheap 좋다 好 to be good 빠르다 快 to be fast 청소기 吸尘器 vacuum cleaner 칫솔 牙刷 toothbrush 봉투 袋子；信封 bag; envelope 컵라면 杯面 cup noodles 치약 牙膏 toothpaste 샴푸 洗发水 shampoo 휴지 卫生纸；纸巾 tissue; toilet paper 할인 打折；折扣 discount 상품 商品 product; goods 화폐 货币 currency; money 지폐 纸币 bill; banknote 동전 硬币 coin 현금 现金 cash 신용카드 信用卡 credit card"
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
      },
      "searchText": "l1-09 지난 주말에 친구를 만났어요 上周末见了朋友 I Met a Friend Last Weekend p92-101 能询问并回答昨天、刚才、上周末做了什么。 能把常见动词变成 V-았/었어요 过去式。 能用 N도 表示“也……”，补充说明第二个活动或物品。 理解韩国人周末常见的休息、娱乐和运动活动。 주말 周末 weekend 지난 주말 上周末 last weekend 어제 昨天 yesterday 아까 刚才 a little while ago 집에서 쉬다 在家休息 to rest at home 청소를 하다 打扫 to clean 빨래를 하다 洗衣服 to do laundry 축구를 하다 踢足球 to play soccer 산에 가다 去山上 to go to the mountain 산책하다 散步 to take a walk 친구를 만나다 见朋友 to meet a friend 아르바이트를 하다 打工 to work part-time 한국어를 배우다 学韩语 to learn Korean 공원 公园 park 자전거를 타다 骑自行车 to ride a bicycle 공놀이를 하다 玩球类游戏 to play ball games 시장 市场 market 과일을 사다 买水果 to buy fruit 신발을 사다 买鞋 to buy shoes 백화점 百货商店 department store 쇼핑하다 购物 to shop 저녁을 먹다 吃晚饭 to eat dinner 카페 咖啡馆 cafe 이야기를 하다 聊天；谈话 to talk; to have a conversation 차를 마시다 喝茶 to drink tea 텔레비전을 보다 看电视 to watch TV 전화를 받다 接电话 to answer the phone 전주 全州 Jeonju 한옥 마을 韩屋村 hanok village 한복을 입다 穿韩服 to wear hanbok 사진을 찍다 拍照 to take photos 걷다 走路 to walk 즐겁다 愉快；开心 enjoyable; pleasant"
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
      },
      "searchText": "l1-10 아버지는 요리를 잘하세요 爸爸很会做饭 My Father Cooks Well p112-121 能询问并介绍家庭成员。 能用 -(으)시- 和常用敬语词汇尊敬地描述长辈的动作、状态和身份。 能用 -지만 连接前后相反或对比的内容。 理解韩国人在家庭称谓上的基本习惯。 할아버지 爷爷；祖父 grandfather 할머니 奶奶；祖母 grandmother 외할아버지 外公 maternal grandfather 외할머니 外婆 maternal grandmother 아버지(아빠) 父亲；爸爸 father; dad 어머니(엄마) 母亲；妈妈 mother; mom 부모님 父母 parents 언니 姐姐（女性称呼） older sister, used by a female speaker 오빠 哥哥（女性称呼） older brother, used by a female speaker 누나 姐姐（男性称呼） older sister, used by a male speaker 형 哥哥（男性称呼） older brother, used by a male speaker 남동생 弟弟 younger brother 여동생 妹妹 younger sister 높임말 敬语；尊敬说法 honorific speech; honorific words 성함 姓名（敬语） name, honorific 연세 年龄（敬语） age, honorific 생신 生日（敬语） birthday, honorific 분 位；名（人的敬语量词） honorific counter/person word 계시다 在；有（있다 的敬语） to be, to exist, honorific 드시다/잡수시다 吃；喝（먹다/마시다 的敬语） to eat or drink, honorific 주무시다 睡觉（자다 的敬语） to sleep, honorific 돌아가시다 去世（죽다 的敬语） to pass away, honorific 말씀하시다 说（말하다 的敬语） to speak, honorific 요리사 厨师 cook; chef 음식 食物；饭菜 food; dish 만들다 制作；做 to make 요리하다 做饭；料理 to cook 잘 好好地；擅长地 well 건강하다 健康 to be healthy 고등학생 高中生 high school student 안경을 쓰다 戴眼镜 to wear glasses"
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
      },
      "searchText": "l1-11 어버이날에 부모님께 꽃을 드려요 父母节给父母送花 I Give Flowers to My Parents on Parents' Day p122-131 能说出父母节、教师节、毕业典礼等特别日子的名称。 能用 N에게/한테/께 表示动作影响的对象，并区分普通对象和尊敬对象。 能用 V-아/어/해 주다 和 V-아/어/해 드리다 表达“为别人做某事”。 能围绕特别的日子、礼物和祝贺进行简短对话。 어버이날 父母节 Parents' Day 부모님 父母；双亲 parents 어머니 母亲；妈妈 mother 아버지 父亲；爸爸 father 선생님 老师 teacher 스승의 날 教师节 Teacher's Day 생일 生日 birthday 생신 寿辰；生日的敬语 birthday, honorific 졸업식 毕业典礼 graduation ceremony 결혼식 婚礼 wedding ceremony 여성의 날 妇女节；女性节 Women's Day 어린이날 儿童节 Children's Day 선물 礼物 gift 꽃 花 flower 케이크 蛋糕 cake 카드를 쓰다 写卡片 to write a card 노래를 부르다 唱歌 to sing a song 초대 邀请 invitation 초대장 邀请函；请柬 invitation card 주다 给 to give 드리다 奉上；给的敬语 to give respectfully 보내다 寄；发送 to send 받다 收到；接到 to receive; to answer 축하하다 祝贺 to congratulate 감사하다 感谢 to thank; to be grateful 만들다 制作；做 to make 사다 买 to buy 전화를 하다 打电话 to make a phone call 기분이 좋다 心情好 to feel good; to be in a good mood"
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
      },
      "searchText": "l1-12 이번 휴가에 뭐 할 거예요? 这次休假要做什么？ What Will You Do This Vacation? p132-141 能询问和回答休假、休息日的计划。 能用 V-(으)ㄹ 거예요 表达将来要做的事。 能用 V/A-고 连接两个以上的动作或状态。 能读懂简单的休假计划短文，并了解韩国常见旅行地。 휴가 休假；假期 vacation; leave 휴일 休息日；节假日 day off; holiday 계획 计划 plan 뭐 什么 what 할 거예요 将要做；打算做 will do; be going to do 여행을 가다 去旅行 to go on a trip 가족하고 외식하다 和家人外出吃饭 to eat out with family 한국 요리를 배우다 学习韩国料理 to learn Korean cooking 친구 집에 놀러 가다 去朋友家玩 to go to a friend's house to hang out 바다 海；海边 sea; beach 수영을 하다 游泳 to swim 배를 타다 坐船 to ride a boat (바다) 낚시를 하다 （海）钓鱼 to go sea fishing 산 山 mountain 등산을 하다 登山；爬山 to hike; to climb a mountain 캠핑을 하다 露营 to camp 꽃구경을 하다 赏花 to look at flowers 놀이공원 游乐园 amusement park 놀이 기구를 타다 坐游乐设施 to ride amusement rides 불꽃놀이를 보다 看烟花 to watch fireworks 고향 故乡；家乡 hometown 고향 친구들을 만나다 见家乡朋友 to meet hometown friends 부모님을 만나다 见父母 to meet one's parents 고향 음식을 먹다 吃家乡菜 to eat hometown food 부산 釜山 Busan 강원도 江原道 Gangwon-do 제주도 济州岛 Jeju Island 전주 全州 Jeonju 경주 庆州 Gyeongju 한옥 마을 韩屋村 hanok village; traditional Korean house village 불국사 佛国寺 Bulguksa Temple"
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
      },
      "searchText": "l1-13 버스로 공항에 가요 坐公交去机场 I Go to the Airport by Bus p142-151 能说出常见交通工具和交通设施。 能用 N(으)로 回答“怎么去”。 能用 V-(으)러 가요/와요 说明去某地的目的。 能围绕“去哪里、为什么去、怎么去”进行简单问答。 理解韩国大众交通的基本分类和交通卡使用场景。 교통 交通 transportation; traffic 교통수단 交通工具；交通方式 means of transportation 자동차 汽车 car 버스 公交车；巴士 bus 택시 出租车 taxi 자전거 自行车 bicycle 지하철 地铁 subway 오토바이 摩托车 motorcycle 걸어서 走着；步行 on foot; by walking 비행기 飞机 airplane 정류장 车站；公交站 stop; bus stop 공항 机场 airport 지하철역 地铁站 subway station 기차역 火车站 train station 기차 火车 train 고속버스 터미널 高速巴士客运站 express bus terminal 고속버스 高速巴士；长途巴士 express bus; intercity coach 택시 타는 곳 出租车乘车点 taxi stand; place to take a taxi 이용하다 利用；使用 to use 타다 乘坐；骑 to ride; to get on; to take 환전하다 换钱；兑换货币 to exchange money 소포 包裹 parcel; package 은행 银行 bank 우체국 邮局 post office 여기에서 从这里；在这里 from here; at this place 까지 到……为止 to; as far as 남산 南山 Namsan 전망대 展望台；观景台 observatory; observation deck 케이블카 缆车 cable car 먼 곳 远处；远的地方 a faraway place 교통 카드 交通卡 transportation card"
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
      },
      "searchText": "l1-14 저녁 7시에 만날까요? 晚上7点见面好吗？ Shall we meet at 7 p.m.? p152-161 能用 V-(으)ㄹ까요? 提议一起吃饭、见面或做活动。 能用 시간에/장소에서 만나요 说清楚约定的时间和地点。 能用 못 V 和原因说明不能赴约或不能做某事。 理解韩国人约定地点从固定地点到手机联系的变化。 약속 约定；预约 appointment; promise 저녁 晚上；晚饭 evening; dinner 만나다 见面 to meet 모임 聚会；集会 gathering; meeting 친구 모임 朋友聚会 friends' gathering 직장 모임 公司聚会 workplace gathering 약속하다 约定；约好 to make an appointment; to promise 약속을 지키다 守约；遵守约定 to keep an appointment; to keep a promise 약속 시간을 정하다 定约定时间 to set the appointment time 약속 장소를 정하다 定约定地点 to set the meeting place 약속 장소를 바꾸다 改约定地点 to change the meeting place 약속 시간에 늦다 约定时间迟到 to be late for an appointment 먹다 吃 to eat 마시다 喝 to drink 일이 많다 事情多；工作多 to have a lot of work 야근을 하다 加班；夜间工作 to work overtime at night 회식이 있다 有公司聚餐 to have a workplace dinner 가족 모임이 있다 有家庭聚会 to have a family gathering 시험이 있다 有考试 to have an exam 몸이 아프다 身体不舒服；生病 to feel sick; to be unwell 못 不能；没法 cannot 답장하다 回复；回信 to reply 휴대 전화 手机 mobile phone"
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
      },
      "searchText": "l1-15 오늘 날씨가 정말 덥네요 今天天气真热啊 The Weather Is Really Hot Today p162-171 能询问并回答季节和天气。 能用 -네요 表达看到或刚知道的事实带来的感叹。 能用 N보다 比较两个地方、季节或事物。 能读懂韩国四季和灾难安全短信的基础信息。 날씨 天气 weather 계절 季节 season 봄 春天 spring 여름 夏天 summer 가을 秋天 fall; autumn 겨울 冬天 winter 따뜻하다 暖和 warm 덥다 热 hot 쌀쌀하다 凉；有点冷 chilly 춥다 冷 cold 정말 真的；非常 really; very 와 哇 wow -네요 ……啊；原来…… exclamatory ending 맑다 晴朗 clear; sunny 흐리다 阴；多云 cloudy; overcast 비가 오다 下雨 to rain 눈이 오다 下雪 to snow 구름이 끼다 有云；云多 to be cloudy; for clouds to gather 안개가 끼다 起雾 to be foggy 바람이 불다 刮风 for the wind to blow 천둥/번개가 치다 打雷/闪电 for thunder and lightning to strike 보다 比 than; compared with 더 更 more 너무 太；非常 too; very 사계절 四季 four seasons 꽃이 많이 피다 花开得多 many flowers bloom 단풍이 아름답다 枫叶很美 the fall foliage is beautiful 매우 非常 very 휴가를 가다 去度假 to go on vacation 눈썰매를 타다 滑雪橇 to ride a snow sled 스키를 타다 滑雪 to ski 재난 灾难 disaster 안전 안내 문자 安全提示短信 safety alert text message 미세 먼지 细颗粒物；微尘 fine dust 폭염 酷暑；热浪 heat wave 호우 暴雨 heavy rain"
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
      },
      "searchText": "l1-16 배가 아파서 병원에 가요 因为肚子疼去医院 I Go to the Hospital Because My Stomach Hurts p172-181 能说出常见身体部位和疼痛、感冒、骨折等症状。 能根据症状选择 내과、이비인후과、정형외과、안과、치과 等医院科室。 能用 A/V-아서/어서 说明去医院或不能做某事的原因。 能用 V-는 것이 좋아요 给身体不舒服的人提出简单建议。 理解韩国医院的 1차、2차、3차 分级和基本就医顺序。 눈 眼睛 eye 코 鼻子 nose 이 牙齿 tooth 귀 耳朵 ear 목 嗓子；脖子 throat; neck 팔 胳膊；手臂 arm 허리 腰 lower back; waist 손 手 hand 배 肚子 stomach; belly 다리 腿 leg 무릎 膝盖 knee 발 脚 foot 내과 内科 internal medicine clinic 이비인후과 耳鼻喉科 ENT clinic 정형외과 整形外科；骨科 orthopedics 안과 眼科 ophthalmology clinic 치과 牙科 dentist; dental clinic 아프다 疼；不舒服 to hurt; to be sick 감기에 걸리다 感冒 to catch a cold 다리가 부러지다 腿骨折 to break one's leg 얼굴이 안 좋다 脸色不好 to look unwell 잠을 못 자다 睡不着；没能睡觉 cannot sleep; fail to sleep 밥을 못 먹다 吃不了饭 cannot eat a meal 물을 많이 마시다 多喝水 to drink a lot of water 생강차를 마시다 喝生姜茶 to drink ginger tea 비타민 시(C)를 먹다 吃维生素 C to take vitamin C 약을 먹다 吃药 to take medicine 병원에 가다 去医院 to go to the hospital 푹 쉬다 好好休息 to rest well 가는 것이 좋아요 去比较好 it is good to go 진료를 받다 接受诊疗；看诊 to receive medical care 진료 의뢰서 转诊单；诊疗委托书 medical referral letter 1차 병원 一级医院；基层医疗机构 primary medical institution 2차 병원 二级医院 secondary hospital 3차 병원 三级医院 tertiary hospital 예약하다 预约 to make an appointment"
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
      },
      "searchText": "l1-17 사진을 찍지 마세요 请不要拍照 Please Do Not Take Pictures p182-191 能读懂公共场所常见的 금지 标识和 안내문。 能用 V-지 마세요 礼貌地说“请不要……”。 能用 N(으)로 说明方向，并在问路对话中理解 오른쪽으로/왼쪽으로/아래층으로 等表达。 理解韩国公交和地铁里的公共礼仪。 공공장소 公共场所 public place 공공 예절 公共礼仪 public etiquette 금지 禁止 prohibition; no... 금지 표지 禁止标识 prohibition sign 안내문 告示；说明文 notice; information board 사진을 찍다 拍照 to take a photo 담배를 피우다 抽烟 to smoke 쓰레기를 버리다 扔垃圾 to throw away trash 꽃을 만지다 摸花 to touch flowers 잔디밭에 들어가다 进入草坪 to enter the grass area 뛰다 跑；跳 to run; to jump 주차하다 停车 to park 음식을 먹다 吃食物 to eat food 버스를 타다 坐公交车 to take a bus 박물관 博物馆 museum 미술관 美术馆 art museum; gallery 도서관 图书馆 library 버스 정류장 公交车站 bus stop 공연장 演出场；剧场 performance hall 교실 教室 classroom 취사 做饭；炊事 cooking 야영 野营；露营 camping 쓰레기 투기 乱扔垃圾 littering; dumping trash 교통 약자석 交通弱者座；优先座 priority seat 임산부 孕妇 pregnant woman 장애가 있다 有残障；有障碍 to have a disability 통화하다 通话；打电话 to talk on the phone 배려하다 体谅；照顾 to be considerate; to care for"
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
      },
      "searchText": "l1-18 한국 생활은 조금 힘든데 재미있어요 韩国生活有点辛苦但很有意思 Life in Korea Is a Little Hard but Fun p192-201 能用 -지요? 确认自己已经知道或听说过的韩国生活信息。 能用 -는데 连接相反或不同的事实，说明韩国和家乡的差异。 能围绕交通、学校、医院、商店营业时间等韩国生活信息进行简单问答。 能用 힘들다, 쉽다, 어렵다, 익숙하다 等词表达适应韩国生活的感受。 理解韩国语缩略语在餐厅、日常聊天中的常见用法和不便之处。 한국 생활 韩国生活 life in Korea 대중교통 수단을 이용하다 使用大众交通工具 to use public transportation 편하다 方便；舒服 comfortable; convenient 택시를 잡다 叫到/拦到出租车 to catch a taxi 교통 카드 交通卡 transportation card 고등학교 高中 high school 졸업하다 毕业 to graduate 입학하다 入学 to enter school 방학이 있다 有假期 to have a school vacation 외국인 등록증이 필요하다 需要外国人登录证 to need an alien registration card 건강 보험이 되다 可用健康保险；适用医保 to be covered by health insurance 점심시간 午餐时间 lunchtime 문을 열다 开门；营业 to open; to be open for business 문을 닫다 关门；停止营业 to close; to be closed 약을 팔다 卖药 to sell medicine 24시간 배달이 되다 24小时可配送 to have 24-hour delivery 쓰레기봉투를 팔다 卖垃圾袋 to sell trash bags 버스 전용 차로 公交专用车道 bus-only lane 자전거 도로 自行车道 bicycle lane 쉽다 容易 easy 어렵다 难 difficult 힘들다 辛苦；吃力 hard; tiring 재미있다 有意思；有趣 fun; interesting 익숙하다 熟悉；习惯 familiar with; used to 평일 平日；工作日 weekday 중국어 中文 Chinese language 결혼하다 结婚 to marry 줄임말 缩略语 abbreviation; shortened word"
    }
  ],
  "updatedAt": "2026-05-26"
};

window.lessonGuideL1 = lessonGuideL1;
