(() => {
  const makeTip = (type, text, enText = text) => ({
    type,
    text,
    translations: {
      en: {
        text: enText
      }
    }
  });

  const posEn = {
    "副词": "adverb",
    "动词": "verb",
    "动词短语": "verb phrase",
    "句型表达": "sentence pattern",
    "名词": "noun",
    "名词短语": "noun phrase",
    "形容词": "adjective",
    "形容词短语": "adjective phrase",
    "语法表达": "grammar expression"
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
    id: "l2-12",
    number: 12,
    titleKo: "실수를 자주 하는 편이에요",
    titleZh: "我算是经常犯错的类型",
    pages: "132-141",
    status: "refined",
    progress: {
      vocabulary: "refined-p132-p141",
      dialogue: "refined-p135-p141",
      culture: "reviewed-p140",
      practice: "refined-p135-p140"
    },
    vocabularySources: [
      {
        page: 132,
        label: "단원 제목",
        note: "课题句、실수 和 편이다 主题"
      },
      {
        page: 134,
        label: "어휘와 문법 1",
        note: "情绪词和初到韩国的经历表达"
      },
      {
        page: 135,
        label: "문법 1",
        note: "V-(으)ㄴ 적이 있다 经验表达"
      },
      {
        page: 136,
        label: "어휘와 문법 2",
        note: "韩国生活中的语言和礼节失误"
      },
      {
        page: 137,
        label: "문법 2",
        note: "A/V-는 편이다 倾向表达"
      },
      {
        page: 138,
        label: "말하기와 듣기",
        note: "市场误会对话和听力问题"
      },
      {
        page: 139,
        label: "읽기와 쓰기",
        note: "公交交通卡经历阅读和写作"
      },
      {
        page: 140,
        label: "문화와 정보",
        note: "韩国的 우리 文化原文与问题"
      },
      {
        page: 141,
        label: "발음/배운 어휘 확인",
        note: "发音练习和本课词汇复习"
      }
    ],
    goals: [
      "能够描述在韩国生活中遇到的失误、误会和当时的心情。",
      "能够用 V-(으)ㄴ 적이 있다 表示“曾经有过某种经历”。",
      "能够用 A/V-는 편이다 委婉表达自己的习惯、性格或事物倾向。",
      "能够读懂交通卡余额不足的经历文章，并写出自己在韩国失误的经历。",
      "能够理解韩国语里 우리 家族、우리 公司、우리 班等“共同体”表达。"
    ],
    grammar: [
      {
        pattern: "V-(으)ㄴ 적이 있다",
        zh: "有过……；曾经……",
        guide: "表示过去有过某种经历。动词有收音时接 -은 적이 있다，没有收音时接 -ㄴ 적이 있다。",
        examples: [
          {
            ko: "한국에서 실수한 적이 있어요?",
            zh: "你在韩国有过犯错的经历吗？"
          },
          {
            ko: "비빔밥을 먹은 적이 있어요.",
            zh: "我吃过拌饭。"
          },
          {
            ko: "공항에서 아이돌 가수를 만난 적이 있어요.",
            zh: "我在机场见过偶像歌手。"
          }
        ],
        translations: {
          en: {
            meaning: "have done ... before; have had the experience of ...",
            guide: "Use V-(으)ㄴ 적이 있다 to talk about a past experience. Use -은 적이 있다 after a final consonant and -ㄴ 적이 있다 after a vowel."
          }
        }
      },
      {
        pattern: "A/V-는 편이다",
        zh: "算是比较……；倾向于……",
        guide: "用于不把话说得太绝对，而是评价“大体上偏向哪一类”。动词常用 -는 편이다，形容词按定语形式变化。",
        examples: [
          {
            ko: "저는 실수를 자주 하는 편이에요.",
            zh: "我算是经常犯错的类型。"
          },
          {
            ko: "지난번 방보다 큰 편이에요.",
            zh: "算是比上次的房间大。"
          },
          {
            ko: "요즘은 회사 일이 조금 한가한 편이에요.",
            zh: "最近公司工作算是比较清闲。"
          }
        ],
        translations: {
          en: {
            meaning: "tend to be/do ...; rather / on the ... side",
            guide: "Use A/V-는 편이다 to describe a general tendency without sounding absolute. Verbs usually take -는 편이다, while adjectives use their noun-modifying form."
          }
        }
      }
    ],
    vocabulary: [
      vocab("실수", "失误；错误", "名词", 132, "단원 제목", "실수를 자주 하는 편이에요.", "我算是经常犯错的类型。", "mistake", "I tend to make mistakes often.", [["collocation", "실수를 하다"], ["pitfall", "실수하다 也可以说成 실수를 하다。", "실수하다 can also be expressed as 실수를 하다."]]),
      vocab("자주", "经常", "副词", 132, "단원 제목", "실수를 자주 해요.", "经常犯错。", "often", "I often make mistakes.", [["collocation", "자주 하다"], ["pitfall", "자주 比 가끔 频率高。", "자주 is more frequent than 가끔."]]),
      vocab("편이다", "算是……一类；偏向于……", "语法表达", 132, "단원 제목", "저는 조용한 편이에요.", "我算是安静的类型。", "to tend to be; to be on the ... side", "I tend to be quiet.", [["collocation", "A/V-는 편이다"], ["pitfall", "用来委婉表达倾向，不是绝对判断。", "It softens a judgment and describes a tendency."]]),
      vocab("경험", "经验；经历", "名词", 132, "단원 제목", "한국에서 어떤 경험을 했어요?", "在韩国有什么经历？", "experience", "What experience did you have in Korea?", [["collocation", "경험을 하다"], ["collocation", "경험이 있다"]]),
      vocab("기분", "心情；感觉", "名词", 134, "어휘와 문법 1", "그때 기분이 어땠어요?", "那时心情怎么样？", "feeling; mood", "How did you feel then?", [["collocation", "기분이 좋다"], ["collocation", "기분이 어때요?"]]),
      vocab("당황하다", "慌张；不知所措", "动词", 134, "어휘와 문법 1", "휴지통이 없어서 당황했어요.", "因为没有垃圾桶，所以慌了。", "to be flustered; to panic", "I was flustered because there was no trash bin.", [["collocation", "당황했어요"], ["pitfall", "突然不知道怎么办时用 당황하다。", "Use 당황하다 when you suddenly do not know what to do."]]),
      vocab("창피하다", "丢脸；尴尬", "形容词", 134, "어휘와 문법 1", "그때 창피했어요.", "那时很尴尬。", "embarrassed; ashamed", "I was embarrassed then.", [["collocation", "창피했어요"], ["pitfall", "比 부끄럽다 更偏“丢脸/尴尬”。", "It is closer to embarrassed/ashamed than simple shyness."]]),
      vocab("무섭다", "害怕；可怕", "形容词", 134, "어휘와 문법 1", "밤길이 무서웠어요.", "夜路很可怕。", "scary; afraid", "The night street was scary.", [["collocation", "무서워요"], ["form", "무섭다 + -어요 -> 무서워요", "무섭다 + -어요 -> 무서워요"]]),
      vocab("속상하다", "伤心；难过；郁闷", "形容词", 134, "어휘와 문법 1", "점수가 나빠서 속상해요.", "因为分数不好，所以很难过。", "upset; disappointed", "I am upset because my score is bad.", [["collocation", "속상해요"], ["collocation", "점수가 나빠서 속상하다"]]),
      vocab("우울하다", "忧郁；心情低落", "形容词", 134, "어휘와 문법 1", "혼자 있어서 우울했어요.", "一个人待着所以心情低落。", "depressed; gloomy", "I felt gloomy because I was alone.", [["collocation", "기분이 우울하다"], ["pitfall", "日常可表示心情低落，医学语境另有 우울증。", "In daily speech it can mean feeling down; clinical depression is 우울증."]]),
      vocab("그립다", "想念；怀念", "形容词", 134, "어휘와 문법 1", "고향이 그리워요.", "想念故乡。", "to miss; to long for", "I miss my hometown.", [["collocation", "고향이 그립다"], ["form", "그립다 + -어요 -> 그리워요", "그립다 + -어요 -> 그리워요"]]),
      vocab("점수", "分数", "名词", 134, "어휘와 문법 1", "점수가 나빠서 속상해요.", "因为分数不好，所以难过。", "score; grade", "I am upset because my score is bad.", [["collocation", "점수가 좋다"], ["collocation", "점수가 나쁘다"]]),
      vocab("나쁘다", "不好；坏", "形容词", 134, "어휘와 문법 1", "점수가 나빠요.", "分数不好。", "bad; poor", "The score is poor.", [["form", "나쁘다 + -아서 -> 나빠서", "나쁘다 + -아서 -> 나빠서"], ["collocation", "점수가 나쁘다"]]),
      vocab("처음", "第一次；起初", "名词", 134, "어휘와 문법 1", "한국에 처음 왔을 때 당황했어요.", "刚来韩国的时候慌过。", "first time; at first", "I was flustered when I first came to Korea.", [["collocation", "처음 왔을 때"], ["collocation", "처음에는"]]),
      vocab("화장실", "卫生间", "名词", 134, "어휘와 문법 1", "화장실 안에 휴지통이 없었어요.", "卫生间里没有垃圾桶。", "restroom; bathroom", "There was no trash bin in the restroom.", [["collocation", "화장실에 가다"], ["collocation", "화장실 안"]]),
      vocab("휴지통", "垃圾桶", "名词", 134, "어휘와 문법 1", "휴지통이 없어서 당황했어요.", "因为没有垃圾桶，所以慌了。", "trash bin", "I was flustered because there was no trash bin.", [["collocation", "휴지통이 없다"], ["collocation", "휴지통에 버리다"]]),

      vocab("먹은 적이 있다", "吃过", "语法表达", 135, "문법 1", "비빔밥을 먹은 적이 있어요.", "我吃过拌饭。", "have eaten before", "I have eaten bibimbap before.", [["form", "먹다 + -은 적이 있다 -> 먹은 적이 있다", "먹다 + -은 적이 있다 -> 먹은 적이 있다"], ["collocation", "N을/를 먹은 적이 있다"]]),
      vocab("잃어버린 적이 있다", "丢过", "语法表达", 135, "문법 1", "가방을 잃어버린 적이 있어요.", "我丢过包。", "have lost before", "I have lost a bag before.", [["form", "잃어버리다 + -ㄴ 적이 있다 -> 잃어버린 적이 있다", "잃어버리다 + -ㄴ 적이 있다 -> 잃어버린 적이 있다"], ["collocation", "지갑을 잃어버린 적이 있다"]]),
      vocab("읽은 적이 있다", "读过", "语法表达", 135, "문법 1", "이 책을 읽은 적이 있어요.", "我读过这本书。", "have read before", "I have read this book before.", [["form", "읽다 + -은 적이 있다 -> 읽은 적이 있다", "읽다 + -은 적이 있다 -> 읽은 적이 있다"]]),
      vocab("걸은 적이 있다", "走过", "语法表达", 135, "문법 1", "밤거리를 걸은 적이 있어요.", "我走过夜路。", "have walked before", "I have walked a street at night before.", [["form", "걷다 + -은 적이 있다 -> 걸은 적이 있다", "걷다 + -은 적이 있다 -> 걸은 적이 있다"], ["pitfall", "걷다 是 ㄷ 不规则，变 걸은。", "걷다 is ㄷ-irregular and becomes 걸은."]]),
      vocab("비빔밥", "拌饭", "名词", 135, "문법 1", "비빔밥을 먹어 봤어요?", "你吃过拌饭吗？", "bibimbap", "Have you tried bibimbap?", [["collocation", "비빔밥을 먹다"], ["collocation", "비빔밥을 먹어 보다"]]),
      vocab("가방", "包", "名词", 135, "문법 1", "가방을 잃어버린 적이 있어요.", "我丢过包。", "bag", "I have lost a bag before.", [["collocation", "가방을 잃어버리다"], ["collocation", "가방을 메다"]]),
      vocab("잃어버리다", "弄丢；丢失", "动词", 135, "문법 1", "지갑을 잃어버렸어요.", "钱包弄丢了。", "to lose", "I lost my wallet.", [["collocation", "지갑을 잃어버리다"], ["form", "잃어버리다 + -었어요 -> 잃어버렸어요", "잃어버리다 + -었어요 -> 잃어버렸어요"]]),
      vocab("밤새워 공부하다", "熬夜学习", "动词短语", 135, "문법 1", "밤새워 공부한 적이 있어요.", "有过熬夜学习的经历。", "to study all night", "I have studied all night before.", [["collocation", "밤새워 공부하다"], ["form", "공부하다 + -ㄴ 적이 있다 -> 공부한 적이 있다", "공부하다 + -ㄴ 적이 있다 -> 공부한 적이 있다"]]),
      vocab("갈비찜", "炖排骨", "名词", 135, "문법 1", "갈비찜을 만든 적이 있어요.", "我做过炖排骨。", "braised short ribs", "I have made galbijjim before.", [["collocation", "갈비찜을 만들다"], ["collocation", "갈비찜을 먹다"]]),
      vocab("김밥", "紫菜包饭", "名词", 135, "문법 1", "김밥을 만든 적이 있어요.", "我做过紫菜包饭。", "gimbap", "I have made gimbap before.", [["collocation", "김밥을 만들다"], ["collocation", "김밥을 먹다"]]),
      vocab("김치", "泡菜", "名词", 135, "문법 1", "김치를 만든 적이 있어요.", "我做过泡菜。", "kimchi", "I have made kimchi before.", [["collocation", "김치를 만들다"], ["collocation", "김치를 담그다"]]),
      vocab("바닷가", "海边", "名词", 135, "문법 1", "바닷가에 간 적이 있어요.", "我去过海边。", "seaside; beach", "I have been to the seaside.", [["collocation", "바닷가에 가다"], ["pitfall", "바다 是海，바닷가 是海边。", "바다 is the sea; 바닷가 is the seaside."]]),
      vocab("혼자 여행을 떠나다", "独自去旅行", "动词短语", 135, "문법 1", "혼자 여행을 떠난 적이 있어요.", "我有过独自旅行的经历。", "to go on a trip alone", "I have gone on a trip alone.", [["collocation", "혼자 여행하다"], ["collocation", "여행을 떠나다"]]),
      vocab("다투다", "争吵", "动词", 135, "문법 1", "한국 친구와 다툰 적이 있어요.", "我和韩国朋友吵过架。", "to argue; to quarrel", "I have argued with a Korean friend.", [["collocation", "친구와 다투다"], ["form", "다투다 + -ㄴ 적이 있다 -> 다툰 적이 있다", "다투다 + -ㄴ 적이 있다 -> 다툰 적이 있다"]]),
      vocab("시험을 못 보다", "考试没考好", "动词短语", 135, "문법 1", "시험을 못 본 적이 있어요.", "我有过考试没考好的经历。", "to do poorly on an exam", "I have done poorly on an exam.", [["collocation", "시험을 보다"], ["pitfall", "못 보다 在这里是“没考好”，不是“看不到”。", "못 보다 here means doing poorly on an exam, not not seeing."]]),
      vocab("밤거리", "夜晚的街道", "名词", 135, "문법 1", "처음 간 도시에서 밤거리를 걸은 적이 있어요.", "我在第一次去的城市走过夜路。", "street at night", "I have walked a street at night in a city I visited for the first time.", [["collocation", "밤거리를 걷다"], ["collocation", "처음 간 도시"]]),
      vocab("특별한 경험", "特别的经历", "名词短语", 135, "문법 1", "특별한 경험을 한 적이 있어요?", "你有过特别的经历吗？", "special experience", "Have you had a special experience?", [["collocation", "특별한 경험을 하다"], ["form", "특별하다 + -ㄴ -> 특별한", "특별하다 + -ㄴ -> 특별한"]]),
      vocab("아이돌 가수", "偶像歌手", "名词短语", 135, "문법 1", "공항에서 아이돌 가수를 만난 적이 있어요.", "我在机场见过偶像歌手。", "idol singer", "I have met an idol singer at the airport.", [["collocation", "아이돌 가수를 만나다"], ["collocation", "공항에서 만나다"]]),
      vocab("멋있다", "帅气；很棒", "形容词", 135, "문법 1", "정말 멋있었어요.", "真的很帅/很棒。", "cool; handsome", "It was really cool.", [["collocation", "정말 멋있다"], ["form", "멋있다 + -었어요 -> 멋있었어요", "멋있다 + -었어요 -> 멋있었어요"]]),

      vocab("윗사람", "上级；长辈", "名词", 136, "어휘와 문법 2", "윗사람에게 반말을 하면 안 돼요.", "不能对上级/长辈说非敬语。", "senior; superior", "You should not use casual speech with seniors.", [["collocation", "윗사람에게"], ["pitfall", "윗사람은 나보다 지위나 나이가 높은 사람。", "윗사람 is someone above you in age or status."]]),
      vocab("반말을 하다", "说非敬语；说平语", "动词短语", 136, "어휘와 문법 2", "시어머니께 반말을 한 적이 있어요.", "我对婆婆/岳母说过非敬语。", "to use casual speech", "I have used casual speech with my mother-in-law.", [["collocation", "윗사람에게 반말을 하다"], ["pitfall", "对不熟或年长的人随便用 반말 会失礼。", "Using 반말 with seniors or people you are not close to can be rude."]]),
      vocab("이름을 부르다", "叫名字", "动词短语", 136, "어휘와 문법 2", "윗사람의 이름을 불렀어요.", "叫了上级/长辈的名字。", "to call someone by name", "I called a senior by name.", [["collocation", "이름을 부르다"], ["form", "부르다 + -었어요 -> 불렀어요", "부르다 + -었어요 -> 불렀어요"]]),
      vocab("한 손으로 물건을 드리다", "用一只手递东西", "动词短语", 136, "어휘와 문법 2", "과장님께 한 손으로 물건을 드렸어요.", "我用一只手给科长递了东西。", "to hand something with one hand", "I handed something to the manager with one hand.", [["collocation", "한 손으로 드리다"], ["pitfall", "给长辈或上级递东西时通常用双手更礼貌。", "Using both hands is usually more polite when giving something to a senior."]]),
      vocab("높임말을 잘못 사용하다", "敬语用错", "动词短语", 136, "어휘와 문법 2", "높임말을 잘못 사용한 적이 있어요.", "我有过敬语用错的经历。", "to use honorific speech incorrectly", "I have used honorific speech incorrectly.", [["collocation", "높임말을 사용하다"], ["collocation", "잘못 사용하다"]]),
      vocab("못 알아듣다", "听不懂", "动词短语", 136, "어휘와 문법 2", "한국 사람 이야기를 못 알아들었어요.", "没听懂韩国人说的话。", "to not understand what one hears", "I did not understand what a Korean person said.", [["collocation", "말을 못 알아듣다"], ["form", "알아듣다 + -었어요 -> 알아들었어요", "알아듣다 + -었어요 -> 알아들었어요"]]),
      vocab("글자를 잘못 읽다", "字读错", "动词短语", 136, "어휘와 문법 2", "글자를 잘못 읽었어요.", "把字读错了。", "to read letters incorrectly", "I read the letters incorrectly.", [["collocation", "글자를 읽다"], ["collocation", "잘못 읽다"]]),
      vocab("잘못 발음하다", "发音错误", "动词短语", 136, "어휘와 문법 2", "커피를 잘못 발음했어요.", "把咖啡发音发错了。", "to pronounce incorrectly", "I pronounced coffee incorrectly.", [["collocation", "잘못 발음하다"], ["collocation", "발음을 틀리다"]]),
      vocab("신발을 신고 들어가다", "穿着鞋进去", "动词短语", 136, "어휘와 문법 2", "신발을 신고 들어간 적이 있어요.", "我有过穿鞋进去的经历。", "to enter with shoes on", "I have entered with shoes on.", [["collocation", "신발을 신고 들어가다"], ["pitfall", "很多韩国室内空间需要脱鞋。", "Many Korean indoor spaces require taking off shoes."]]),
      vocab("노약자석에 앉다", "坐老弱病残孕座位", "动词短语", 136, "어휘와 문법 2", "노약자석에 앉아서 당황했어요.", "坐了老弱病残孕座位，所以慌了。", "to sit in a priority seat", "I was flustered because I sat in a priority seat.", [["collocation", "노약자석에 앉다"], ["pitfall", "노약자석은老人、孕妇、身体不便者优先座。", "노약자석 is priority seating for elderly, pregnant, or mobility-impaired passengers."]]),
      vocab("사람을 잘못 보다", "认错人", "动词短语", 136, "어휘와 문법 2", "사람을 잘못 본 적이 있어요.", "我认错过人。", "to mistake someone for another person", "I have mistaken someone for another person.", [["collocation", "사람을 잘못 보다"], ["pitfall", "잘못 보다 在这里是“看错/认错”。", "잘못 보다 here means to mistake someone."]]),
      vocab("시어머니께", "向婆婆/岳母", "名词短语", 136, "어휘와 문법 2", "시어머니께 반말을 한 적이 있어요.", "我对婆婆/岳母说过非敬语。", "to one's mother-in-law", "I used casual speech with my mother-in-law.", [["collocation", "시어머니께 말씀드리다"], ["pitfall", "께 是尊敬对象助词。", "께 is a respectful particle."]]),
      vocab("아무 생각 없이", "不加思考地；无意中", "副词", 136, "어휘와 문법 2", "아무 생각 없이 노약자석에 앉았어요.", "不加思考就坐在了老弱病残孕座位上。", "without thinking", "I sat in a priority seat without thinking.", [["collocation", "아무 생각 없이 하다"], ["collocation", "아무 생각 없이 앉다"]]),
      vocab("이상하게 쳐다보다", "奇怪地盯着看", "动词短语", 136, "어휘와 문법 2", "사람들이 이상하게 쳐다봐서 당황했어요.", "人们奇怪地看着我，所以我慌了。", "to stare/look at someone strangely", "People stared at me strangely, so I was flustered.", [["collocation", "이상하게 쳐다보다"], ["form", "쳐다보다 + -아서 -> 쳐다봐서", "쳐다보다 + -아서 -> 쳐다봐서"]]),

      vocab("큰 편이다", "算是大的", "形容词短语", 137, "문법 2", "지난번 방보다 큰 편이에요.", "算是比上次的房间大。", "to be rather big", "It is on the bigger side compared with the last room.", [["form", "크다 + -ㄴ 편이다 -> 큰 편이다", "크다 + -ㄴ 편이다 -> 큰 편이다"], ["collocation", "큰 편이에요"]]),
      vocab("한가한 편이다", "算是比较清闲", "形容词短语", 137, "문법 2", "요즘은 회사 일이 조금 한가한 편이에요.", "最近公司工作算是比较清闲。", "to be rather free/not busy", "Work has been rather quiet lately.", [["form", "한가하다 + -ㄴ 편이다 -> 한가한 편이다", "한가하다 + -ㄴ 편이다 -> 한가한 편이다"], ["collocation", "조금 한가한 편이다"]]),
      vocab("일찍 자다", "早睡", "动词短语", 137, "문법 2", "저는 일찍 자는 편이에요.", "我算是早睡的类型。", "to go to bed early", "I tend to go to bed early.", [["collocation", "일찍 자다"], ["form", "자다 + -는 편이다 -> 자는 편이다", "자다 + -는 편이다 -> 자는 편이다"]]),
      vocab("일찍 일어나다", "早起", "动词短语", 137, "문법 2", "저는 일찍 일어나는 편이에요.", "我算是早起的类型。", "to wake up early", "I tend to wake up early.", [["collocation", "일찍 일어나다"], ["form", "일어나다 + -는 편이다 -> 일어나는 편이다", "일어나다 + -는 편이다 -> 일어나는 편이다"]]),
      vocab("운동을 자주 하다", "经常运动", "动词短语", 137, "문법 2", "운동을 자주 하는 편이에요?", "你算是经常运动吗？", "to exercise often", "Do you tend to exercise often?", [["collocation", "운동을 자주 하다"], ["form", "하다 + -는 편이다 -> 하는 편이다", "하다 + -는 편이다 -> 하는 편이다"]]),
      vocab("거의 안 하다", "几乎不做", "动词短语", 137, "문법 2", "운동을 거의 안 하는 편이에요.", "我算是几乎不运动的类型。", "to almost never do", "I tend to almost never exercise.", [["collocation", "거의 안 하다"], ["pitfall", "거의 안 表示“几乎不”。", "거의 안 means almost not/rarely."]]),
      vocab("숙제가 많다", "作业多", "形容词短语", 137, "문법 2", "우리 수업은 숙제가 많은 편이에요.", "我们课算是作业多。", "to have a lot of homework", "Our class tends to have a lot of homework.", [["form", "많다 + -은 편이다 -> 많은 편이다", "많다 + -은 편이다 -> 많은 편이다"], ["collocation", "숙제가 많다"]]),
      vocab("어휘가 쉽다", "词汇简单", "形容词短语", 137, "문법 2", "어휘가 쉬운 편이에요.", "词汇算是简单。", "vocabulary is easy", "The vocabulary is on the easy side.", [["form", "쉽다 + -은 편이다 -> 쉬운 편이다", "쉽다 + -은 편이다 -> 쉬운 편이다"], ["pitfall", "쉽다 是 ㅂ 不规则，变 쉬운。", "쉽다 is ㅂ-irregular and becomes 쉬운."]]),
      vocab("한국어 수업", "韩语课", "名词短语", 137, "문법 2", "한국어 수업은 재미있는 편이에요.", "韩语课算是有意思。", "Korean class", "Korean class tends to be interesting.", [["collocation", "한국어 수업"], ["collocation", "수업을 듣다"]]),
      vocab("우리 반 친구", "我们班同学", "名词短语", 137, "문법 2", "우리 반 친구들은 친절한 편이에요.", "我们班同学算是亲切。", "our classmates", "Our classmates tend to be kind.", [["collocation", "우리 반"], ["collocation", "반 친구"]]),

      vocab("물건값", "物品价格；东西的价钱", "名词", 138, "말하기와 듣기", "물건값을 잘못 알아들었어요.", "把东西价格听错了。", "price of an item", "I misunderstood the price of the item.", [["collocation", "물건값을 알아듣다"], ["pitfall", "教材发音是 [물건깝]。", "The textbook pronunciation is [물건깝]."]]),
      vocab("말을 잘못 알아듣다", "把话听错；误解话", "动词短语", 138, "말하기와 듣기", "택시 기사님이 제 말을 잘못 알아들었어요.", "出租车司机把我的话听错了。", "to misunderstand what someone says", "The taxi driver misunderstood what I said.", [["collocation", "말을 잘못 알아듣다"], ["pitfall", "잘못 알아듣다 是“误听/误解”，不是完全没听到。", "잘못 알아듣다 means misunderstanding, not simply not hearing."]]),
      vocab("다른 곳으로 가다", "去了别的地方", "动词短语", 138, "말하기와 듣기", "다른 곳으로 갔어요.", "去了别的地方。", "to go to another place", "We went to another place.", [["collocation", "다른 곳으로 가다"], ["pitfall", "곳으로 的 -으로 表示方向。", "-으로 in 곳으로 marks direction."]]),
      vocab("집 주소를 잘못 쓰다", "把家庭地址写错", "动词短语", 138, "말하기와 듣기", "집 주소를 잘못 써서 물건이 다른 집으로 갔어요.", "因为把家庭地址写错，东西去了别人家。", "to write one's home address incorrectly", "The item went to another house because I wrote my address incorrectly.", [["collocation", "주소를 쓰다"], ["collocation", "잘못 써서"]]),
      vocab("과장님", "科长；经理", "名词", 138, "말하기와 듣기", "과장님께 한 손으로 물건을 드렸어요.", "给科长单手递了东西。", "section chief; manager", "I handed something to the manager with one hand.", [["collocation", "과장님께"], ["pitfall", "님 表示尊敬。", "님 adds respect."]]),
      vocab("화를 내다", "生气；发火", "动词短语", 138, "말하기와 듣기", "과장님께 화를 냈어요.", "对科长发火了。", "to get angry", "I got angry at the manager.", [["collocation", "화를 내다"], ["collocation", "화가 나다"]]),

      vocab("출근하다", "上班", "动词", 139, "읽기와 쓰기", "출근할 때 마을버스를 자주 탑니다.", "上班时经常坐村巴。", "to go to work", "I often take a village bus when going to work.", [["collocation", "출근할 때"], ["collocation", "회사에 출근하다"]]),
      vocab("마을버스", "社区小巴；村巴", "名词", 139, "읽기와 쓰기", "마을버스를 자주 탑니다.", "经常坐社区小巴。", "village/local bus", "I often take a local village bus.", [["collocation", "마을버스를 타다"], ["pitfall", "마을버스는社区短途公交。", "마을버스 is a short local/community bus."]]),
      vocab("단말기", "终端机；刷卡机", "名词", 139, "읽기와 쓰기", "단말기에 교통 카드를 대요.", "把交通卡贴到刷卡机上。", "card reader; terminal", "Tap the transit card on the reader.", [["collocation", "단말기에 대다"], ["collocation", "교통 카드 단말기"]]),
      vocab("교통 카드", "交通卡", "名词短语", 139, "읽기와 쓰기", "교통 카드를 댔어요.", "刷了交通卡。", "transit card", "I tapped my transit card.", [["collocation", "교통 카드를 대다"], ["collocation", "교통 카드 잔액"]]),
      vocab("대다", "贴上；靠近", "动词", 139, "읽기와 쓰기", "단말기에 교통 카드를 대면 소리가 나요.", "把交通卡贴到刷卡机上会有声音。", "to put/tap against", "When you tap the transit card on the reader, it makes a sound.", [["collocation", "카드를 단말기에 대다"], ["pitfall", "交通卡场景里 대다 是“贴/刷”。", "In transit-card contexts, 대다 means to tap or place against."]]),
      vocab("환승", "换乘", "名词", 139, "읽기와 쓰기", "환승입니다라고 합니다.", "会说“这是换乘”。", "transfer", "It says, “This is a transfer.”", [["collocation", "환승입니다"], ["collocation", "환승하다"]]),
      vocab("하차", "下车", "名词", 139, "읽기와 쓰기", "하차입니다라고 합니다.", "会说“下车”。", "getting off", "It says, “Getting off.”", [["collocation", "하차입니다"], ["collocation", "하차하다"]]),
      vocab("잔액", "余额", "名词", 139, "읽기와 쓰기", "잔액이 부족합니다.", "余额不足。", "balance; remaining amount", "The balance is insufficient.", [["collocation", "잔액이 부족하다"], ["collocation", "교통 카드 잔액"]]),
      vocab("부족하다", "不足；不够", "形容词", 139, "읽기와 쓰기", "교통 카드 잔액이 부족했어요.", "交通卡余额不足。", "insufficient; lacking", "The transit card balance was insufficient.", [["collocation", "잔액이 부족하다"], ["collocation", "시간이 부족하다"]]),
      vocab("뜻", "意思", "名词", 139, "읽기와 쓰기", "잔액의 뜻을 몰랐어요.", "不知道“余额”的意思。", "meaning", "I did not know the meaning of 잔액.", [["collocation", "뜻을 알다"], ["collocation", "뜻을 모르다"]]),
      vocab("동료", "同事", "名词", 139, "읽기와 쓰기", "한국인 동료가 도와주었어요.", "韩国同事帮了我。", "coworker; colleague", "A Korean coworker helped me.", [["collocation", "한국인 동료"], ["collocation", "동료가 도와주다"]]),
      vocab("버스 요금", "公交车费", "名词短语", 139, "읽기와 쓰기", "버스 요금을 내 주었습니다.", "帮我付了公交车费。", "bus fare", "They paid the bus fare for me.", [["collocation", "버스 요금을 내다"], ["collocation", "요금을 내 주다"]]),
      vocab("내 주다", "帮忙付；帮忙做", "动词短语", 139, "읽기와 쓰기", "동료가 버스 요금을 내 주었어요.", "同事帮我付了公交车费。", "to do/pay for someone", "My coworker paid the bus fare for me.", [["collocation", "요금을 내 주다"], ["pitfall", "-아/어 주다 表示为别人做。", "-아/어 주다 means doing something for someone."]]),

      vocab("우리 가족", "我们家人；我的家人", "名词短语", 140, "문화와 정보", "우리 가족이라는 말을 자주 써요.", "经常使用“我们家人”这个说法。", "our/my family", "Koreans often say 우리 가족.", [["collocation", "우리 가족"], ["pitfall", "韩语里 우리 可表示“我的/我们的”共同体。", "In Korean, 우리 can mean my/our community or group."]]),
      vocab("우리 회사", "我们公司；我公司", "名词短语", 140, "문화와 정보", "우리 회사라고 말해요.", "说“我们公司”。", "our/my company", "People say 우리 회사.", [["collocation", "우리 회사"], ["pitfall", "不一定表示听话人也属于同一公司。", "It does not always mean the listener belongs to the same company."]]),
      vocab("우리 반", "我们班", "名词短语", 140, "문화와 정보", "우리 반 친구들이 친절해요.", "我们班同学很亲切。", "our class", "Our classmates are kind.", [["collocation", "우리 반"], ["collocation", "우리 반 친구"]]),
      vocab("원래", "原本；本来", "副词", 140, "문화와 정보", "원래 우리는 두 사람을 함께 의미하는 말입니다.", "原本“我们”是一起指说话人和听话人的词。", "originally; normally", "Originally, 우리 means the speaker and listener together.", [["collocation", "원래 의미"], ["collocation", "원래는"]]),
      vocab("의미하다", "表示；意味着", "动词", 140, "문화와 정보", "두 사람을 함께 의미합니다.", "表示两个人在一起。", "to mean; signify", "It means two people together.", [["collocation", "N을/를 의미하다"], ["form", "의미하다 + -는 -> 의미하는", "의미하다 + -는 -> 의미하는"]]),
      vocab("함께", "一起", "副词", 140, "문화와 정보", "말하는 사람과 듣는 사람을 함께 의미해요.", "一起指说话人和听话人。", "together", "It means the speaker and listener together.", [["collocation", "함께 의미하다"], ["collocation", "함께 하다"]]),
      vocab("공동체", "共同体；群体", "名词", 140, "문화와 정보", "내가 속한 공동체를 중요하게 생각해요.", "重视自己所属的共同体。", "community; group", "They value the community they belong to.", [["collocation", "공동체에 속하다"], ["collocation", "공동체를 중요하게 생각하다"]]),
      vocab("속하다", "属于；隶属于", "动词", 140, "문화와 정보", "내가 속한 공동체", "我所属的共同体。", "to belong to", "the community I belong to", [["collocation", "N에 속하다"], ["form", "속하다 + -ㄴ -> 속한", "속하다 + -ㄴ -> 속한"]]),
      vocab("중요하게 생각하다", "认为重要；重视", "动词短语", 140, "문화와 정보", "공동체를 중요하게 생각합니다.", "重视共同体。", "to consider important; value", "They value the community.", [["collocation", "중요하게 생각하다"], ["collocation", "공동체를 중요하게 생각하다"]]),
      vocab("얇은 편이에요", "算是薄的", "句型表达", 141, "발음/배운 어휘 확인", "이 옷은 얇은 편이에요.", "这件衣服算是薄的。", "it is on the thin side", "This clothing is on the thin side.", [["form", "얇다 + -은 편이다 -> 얇은 편이다", "얇다 + -은 편이다 -> 얇은 편이다"], ["pitfall", "教材发音是 [알븐 펴니에요]。", "The textbook pronunciation is [알븐 펴니에요]."]])
    ],
    dialogues: [
      {
        id: "dialogue-grammar-01",
        title: "한국에서 실수한 적이 있어요?",
        focus: "V-(으)ㄴ 적이 있다",
        page: 135,
        source: "문법 1",
        sceneZh: "询问并回答过去有没有某种经历。",
        translations: {
          en: {
            scene: "Ask and answer whether someone has had a certain experience.",
            learningPoints: [
              "Use V-(으)ㄴ 적이 있다 for past experiences.",
              "먹다 becomes 먹은 적이 있다.",
              "걷다 becomes 걸은 적이 있다 because it is ㄷ-irregular."
            ]
          }
        },
        learningPoints: [
          "V-(으)ㄴ 적이 있다 表示“有过……经历”。",
          "먹다 变 먹은 적이 있다。",
          "걷다 是 ㄷ 不规则，变 걸은 적이 있다。"
        ],
        lines: [
          {
            speaker: "가",
            ko: "비빔밥 먹어 봤어요?",
            zh: "你吃过拌饭吗？",
            guide: "먹어 보다 是“尝试吃/吃过看看”。",
            translations: {
              en: {
                translation: "Have you tried bibimbap?",
                guide: "먹어 보다 means to try eating something."
              }
            }
          },
          {
            speaker: "나",
            ko: "네, 먹은 적이 있어요.",
            zh: "是的，吃过。",
            guide: "먹은 적이 있어요 表示过去有过这个经历。",
            translations: {
              en: {
                translation: "Yes, I have eaten it before.",
                guide: "먹은 적이 있어요 says you have had that experience."
              }
            }
          },
          {
            speaker: "가",
            ko: "한국 음식을 만든 적이 있어요?",
            zh: "你做过韩国料理吗？",
            guide: "만들다 没有收音，接 -ㄴ 적이 있어요。",
            translations: {
              en: {
                translation: "Have you made Korean food before?",
                guide: "만들다 has no final consonant, so it takes -ㄴ 적이 있어요."
              }
            }
          },
          {
            speaker: "나",
            ko: "네, 갈비찜을 만든 적이 있어요. 조금 짰지만 맛있게 먹었어요.",
            zh: "是的，我做过炖排骨。虽然有点咸，但吃得很开心。",
            guide: "조금 짰지만 后面接结果评价。",
            translations: {
              en: {
                translation: "Yes, I have made galbijjim before. It was a little salty, but we enjoyed it.",
                guide: "조금 짰지만 leads into an evaluation of the result."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "특별한 경험 말하기",
            promptZh: "用“공항에서 아이돌 가수를 만나다”说自己的特别经历。",
            answerKo: "저는 공항에서 아이돌 가수를 만난 적이 있어요.",
            translations: {
              en: {
                title: "Talk about a special experience",
                prompt: "Use “meet an idol singer at the airport” to talk about a special experience."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "V-(으)ㄴ 적이 있다",
            promptZh: "把“밤거리를 걷다”变成经验句。",
            answerKo: "밤거리를 걸은 적이 있어요.",
            translations: {
              en: {
                prompt: "Turn “walk a street at night” into an experience sentence."
              }
            }
          }
        ]
      },
      {
        id: "dialogue-grammar-02",
        title: "운동을 자주 하는 편이에요?",
        focus: "A/V-는 편이다",
        page: 137,
        source: "문법 2",
        sceneZh: "用 -는 편이다 委婉说明习惯或倾向。",
        translations: {
          en: {
            scene: "Use -는 편이다 to describe habits or tendencies softly.",
            learningPoints: [
              "The pattern avoids sounding too absolute.",
              "Verbs use -는 편이다.",
              "Adjectives use forms such as 큰 편이다, 많은 편이다, 쉬운 편이다."
            ]
          }
        },
        learningPoints: [
          "这个句型让评价不那么绝对。",
          "动词常接 -는 편이다。",
          "形容词按定语变化：큰 편이다、많은 편이다、쉬운 편이다。"
        ],
        lines: [
          {
            speaker: "가",
            ko: "운동을 자주 하는 편이에요?",
            zh: "你算是经常运动吗？",
            guide: "하는 편이에요 用来问习惯倾向。",
            translations: {
              en: {
                translation: "Do you tend to exercise often?",
                guide: "하는 편이에요 asks about a habit or tendency."
              }
            }
          },
          {
            speaker: "나",
            ko: "아니요, 회사 일이 바빠서 거의 안 하는 편이에요.",
            zh: "不是，因为公司工作忙，算是几乎不运动。",
            guide: "거의 안 하는 편이에요 比“绝对不做”更委婉。",
            translations: {
              en: {
                translation: "No. Work is busy, so I tend to almost never exercise.",
                guide: "거의 안 하는 편이에요 is softer than saying you never do it."
              }
            }
          },
          {
            speaker: "가",
            ko: "우리 수업은 어때요?",
            zh: "我们的课怎么样？",
            guide: "수업의 특징을 물을 때 쓸 수 있어요。",
            translations: {
              en: {
                translation: "How is our class?",
                guide: "This can ask about the characteristics of a class."
              }
            }
          },
          {
            speaker: "나",
            ko: "숙제가 많은 편이지만 어휘는 쉬운 편이에요.",
            zh: "作业算是多，但词汇算是简单。",
            guide: "많은 편、쉬운 편 都是形容词的 편이다 用法。",
            translations: {
              en: {
                translation: "It tends to have a lot of homework, but the vocabulary is on the easy side.",
                guide: "많은 편 and 쉬운 편 are adjective uses of 편이다."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "내 습관 말하기",
            promptZh: "用 자주 하는 편이다 或 거의 안 하는 편이다 说一个自己的习惯。",
            answerKo: "저는 커피를 자주 마시는 편이에요.",
            translations: {
              en: {
                title: "Talk about a habit",
                prompt: "Use 자주 하는 편이다 or 거의 안 하는 편이다 to describe one habit."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "A/V-는 편이다",
            promptZh: "用“우리 수업 / 숙제가 많다”造句。",
            answerKo: "우리 수업은 숙제가 많은 편이에요.",
            translations: {
              en: {
                prompt: "Make a sentence with “our class / has a lot of homework.”"
              }
            }
          }
        ]
      },
      {
        id: "dialogue-speaking-01",
        title: "저도 가끔 실수를 해요",
        focus: "말하기와 듣기",
        page: 138,
        source: "말하기와 듣기",
        sceneZh: "谈论在市场和交通中因为韩语听错而发生的失误。",
        translations: {
          en: {
            scene: "Talk about mistakes caused by misunderstanding Korean in a market or in transportation.",
            learningPoints: [
              "가끔 실수를 해요 softens the statement.",
              "잘못 알아듣다 means to misunderstand what was said.",
              "괜찮은 편이에요 is used to make the other person feel better."
            ]
          }
        },
        learningPoints: [
          "가끔 실수를 해요 让表达比较自然、不夸张。",
          "잘못 알아듣다 是“听错/误解”。",
          "괜찮은 편이에요 可以用来安慰对方。"
        ],
        lines: [
          {
            speaker: "고천",
            ko: "후엔 씨는 한국말을 잘하니까 좋겠어요.",
            zh: "厚恩你韩语说得好，真羡慕。",
            guide: "좋겠어요 这里表示羡慕或觉得对方应该很好。",
            translations: {
              en: {
                translation: "Huyen, it must be nice because you speak Korean well.",
                guide: "좋겠어요 here expresses envy or that the other person must have it good."
              }
            }
          },
          {
            speaker: "후엔",
            ko: "아니에요. 저도 가끔 실수를 해요. 며칠 전에도 시장에서 물건값을 잘못 알아들었어요. 그때 창피했어요.",
            zh: "不是的。我也偶尔犯错。几天前在市场也把东西价格听错了。那时很尴尬。",
            guide: "물건값을 잘못 알아들었어요 是这段的核心失误。",
            translations: {
              en: {
                translation: "Not really. I also make mistakes sometimes. A few days ago at the market, I misunderstood the price. I was embarrassed then.",
                guide: "물건값을 잘못 알아들었어요 is the key mistake in this part."
              }
            }
          },
          {
            speaker: "고천",
            ko: "그 정도는 괜찮은 편이에요. 저는 며칠 전에 택시 기사님이 제 말을 잘못 알아들어서 다른 곳으로 갔어요.",
            zh: "那种程度算是没关系。我几天前因为出租车司机把我的话听错，去了别的地方。",
            guide: "괜찮은 편이에요 用 편이다 来降低语气。",
            translations: {
              en: {
                translation: "That is not too bad. A few days ago, a taxi driver misunderstood what I said, so we went to another place.",
                guide: "괜찮은 편이에요 uses 편이다 to soften the statement."
              }
            }
          },
          {
            speaker: "후엔",
            ko: "한국말은 정말 쉽지 않아요.",
            zh: "韩语真的不容易。",
            guide: "쉽지 않아요 是“并不容易”的自然表达。",
            translations: {
              en: {
                translation: "Korean is really not easy.",
                guide: "쉽지 않아요 naturally means not easy."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "실수 바꾸기",
            promptZh: "把市场价格听错换成“집 주소를 잘못 써서 물건이 다른 집으로 가다”。",
            answerKo: "집 주소를 잘못 써서 물건이 다른 집으로 갔어요. 그때 속상했어요.",
            translations: {
              en: {
                title: "Change the mistake",
                prompt: "Replace misunderstanding a market price with writing the home address incorrectly and the item going to another house."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "실수 경험",
            promptZh: "用“택시 기사님 / 제 말을 잘못 알아듣다 / 다른 곳으로 가다”造句。",
            answerKo: "택시 기사님이 제 말을 잘못 알아들어서 다른 곳으로 갔어요.",
            translations: {
              en: {
                prompt: "Make a sentence with “taxi driver / misunderstand my words / go to another place.”"
              }
            }
          }
        ]
      },
      {
        id: "dialogue-reading-01",
        title: "버스에서 당황한 기억이 있습니다",
        focus: "읽기와 쓰기",
        page: 139,
        source: "읽기와 쓰기",
        sceneZh: "阅读交通卡余额不足导致慌张的经历。",
        translations: {
          en: {
            scene: "Read an experience about being flustered because of an insufficient transit-card balance.",
            learningPoints: [
              "Find the order: commute by bus, card reader message, confusion, coworker's help.",
              "잔액이 부족합니다 is the reason for the problem.",
              "내 주다 means someone did something for the speaker."
            ]
          }
        },
        learningPoints: [
          "按顺序抓：坐公交上班、刷卡提示、慌张、同事帮忙。",
          "잔액이 부족합니다 是问题原因。",
          "내 주다 表示别人为说话人做了某事。"
        ],
        lines: [
          {
            speaker: "글",
            ko: "저는 출근할 때 마을버스를 자주 탑니다.",
            zh: "我上班时经常坐社区小巴。",
            guide: "출근할 때 表示上班的时候。",
            translations: {
              en: {
                translation: "I often take a local village bus when going to work.",
                guide: "출근할 때 means when going to work."
              }
            }
          },
          {
            speaker: "글",
            ko: "그런데 한국어를 잘 못해서 버스에서 당황한 기억이 있습니다.",
            zh: "可是因为韩语不太好，我有过在公交车上慌张的记忆。",
            guide: "당황한 기억이 있습니다 是“有过慌张的经历/记忆”。",
            translations: {
              en: {
                translation: "But because I was not good at Korean, I have a memory of being flustered on a bus.",
                guide: "당황한 기억이 있습니다 means having a memory/experience of being flustered."
              }
            }
          },
          {
            speaker: "글",
            ko: "보통 단말기에 교통 카드를 대면 “삑”, 또는 “환승입니다”라고 합니다. 그리고 내릴 때는 “하차입니다”라고 합니다.",
            zh: "通常把交通卡贴到刷卡机上时，会说“哔”或“这是换乘”。下车时会说“下车”。",
            guide: "단말기、교통 카드、환승、하차 是交通卡场景关键词。",
            translations: {
              en: {
                translation: "Usually, when you tap a transit card on the reader, it says “beep” or “transfer.” When getting off, it says “getting off.”",
                guide: "단말기, 교통 카드, 환승, and 하차 are key transit-card words."
              }
            }
          },
          {
            speaker: "글",
            ko: "그런데 그날은 교통 카드를 댔을 때 “잔액이 부족합니다”라고 했습니다. 저는 ‘잔액’의 뜻을 몰라서 당황했습니다.",
            zh: "可是那天刷交通卡时，它说“余额不足”。我不知道“余额”的意思，所以慌了。",
            guide: "잔액이 부족합니다 是交通卡余额不够的提示。",
            translations: {
              en: {
                translation: "But that day, when I tapped the card, it said, “The balance is insufficient.” I did not know the meaning of 잔액, so I was flustered.",
                guide: "잔액이 부족합니다 is the transit-card message for an insufficient balance."
              }
            }
          },
          {
            speaker: "글",
            ko: "그때 한국인 동료가 무슨 말인지 알려 주면서 버스 요금을 내 주었습니다. 너무 고마웠습니다.",
            zh: "那时韩国同事一边告诉我那是什么意思，一边帮我付了公交车费。非常感谢。",
            guide: "알려 주다、내 주다 都表示为说话人帮忙。",
            translations: {
              en: {
                translation: "Then a Korean coworker told me what it meant and paid the bus fare for me. I was very thankful.",
                guide: "알려 주다 and 내 주다 both show someone helping the speaker."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "실수 경험 쓰기",
            promptZh: "按“언제 / 어디에서 / 무슨 실수”写一段。",
            answerKo: "지난주에 버스에서 교통 카드 잔액이 부족해서 당황했어요. 동료가 버스 요금을 내 주었어요.",
            translations: {
              en: {
                title: "Write a mistake experience",
                prompt: "Write a short paragraph using when / where / what mistake."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "읽기 확인",
            promptZh: "잠시드 씨는 왜 당황했어요?",
            answerKo: "교통 카드 잔액이 부족했는데 ‘잔액’의 뜻을 몰라서 당황했어요.",
            translations: {
              en: {
                prompt: "Why was Jamshid flustered?"
              }
            }
          }
        ]
      },
      {
        id: "dialogue-pronunciation-01",
        title: "물건값 / 잃어버렸어요 / 얇은 편이에요",
        focus: "발음",
        page: 141,
        source: "발음/배운 어휘 확인",
        sceneZh: "练习本课发音重点和失误经历句子。",
        translations: {
          en: {
            scene: "Practice key pronunciations and mistake-experience sentences.",
            learningPoints: [
              "물건값 is pronounced [물건깝].",
              "잃어버렸어요 is pronounced [이러버려써요].",
              "얇은 편이에요 is pronounced [알븐 펴니에요]."
            ]
          }
        },
        learningPoints: [
          "물건값 的教材发音是 [물건깝]。",
          "잃어버렸어요 的教材发音是 [이러버려써요]。",
          "얇은 편이에요 的教材发音是 [알븐 펴니에요]。"
        ],
        lines: [
          {
            speaker: "나",
            ko: "물건값을 잘못 알아들었어요.",
            zh: "把东西价格听错了。",
            guide: "물건값 发音 [물건깝]。",
            translations: {
              en: {
                translation: "I misunderstood the price of the item.",
                guide: "물건값 is pronounced [물건깝]."
              }
            }
          },
          {
            speaker: "가",
            ko: "무슨 일 있어요?",
            zh: "发生什么事了吗？",
            guide: "询问对方发生了什么情况。",
            translations: {
              en: {
                translation: "Is something wrong?",
                guide: "This asks what happened to the other person."
              }
            }
          },
          {
            speaker: "나",
            ko: "지갑을 잃어버렸어요.",
            zh: "钱包弄丢了。",
            guide: "잃어버렸어요 发音 [이러버려써요]。",
            translations: {
              en: {
                translation: "I lost my wallet.",
                guide: "잃어버렸어요 is pronounced [이러버려써요]."
              }
            }
          },
          {
            speaker: "가",
            ko: "지금 입고 있는 옷이 어때요?",
            zh: "现在穿着的衣服怎么样？",
            guide: "입고 있는 옷 表示正在穿的衣服。",
            translations: {
              en: {
                translation: "How is the clothing you are wearing now?",
                guide: "입고 있는 옷 means the clothing someone is wearing now."
              }
            }
          },
          {
            speaker: "나",
            ko: "이 옷은 얇은 편이에요.",
            zh: "这件衣服算是薄的。",
            guide: "얇은 편이에요 发音 [알븐 펴니에요]。",
            translations: {
              en: {
                translation: "This clothing is on the thin side.",
                guide: "얇은 편이에요 is pronounced [알븐 펴니에요]."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "발음 따라 읽기",
            promptZh: "跟读 물건값[물건깝], 잃어버렸어요[이러버려써요], 얇은 편이에요[알븐 펴니에요]。",
            answerKo: "물건값[물건깝], 잃어버렸어요[이러버려써요], 얇은 편이에요[알븐 펴니에요]",
            translations: {
              en: {
                title: "Pronunciation practice",
                prompt: "Read 물건값[물건깝], 잃어버렸어요[이러버려써요], 얇은 편이에요[알븐 펴니에요]."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "발음",
            promptZh: "读出“지갑을 잃어버렸어요.”的自然发音。",
            answerKo: "지갑을 잃어버렸어요[이러버려써요].",
            translations: {
              en: {
                prompt: "Read the natural pronunciation of “지갑을 잃어버렸어요.”"
              }
            }
          }
        ]
      }
    ],
    culture: {
      titleKo: "한국의 ‘우리’ 문화",
      titleZh: "韩国的“我们”文化",
      page: 140,
      summaryZh: "这篇文化文章说明韩语里 우리 不只表示说话人和听话人，也常用来表达“我所属的共同体”，例如 우리 가족、우리 회사、우리 반。",
      translations: {
        en: {
          title: "Korea's “우리” Culture",
          summary: "This culture text explains that 우리 in Korean does not only mean the speaker and listener together. It is also commonly used for the community or group the speaker belongs to, such as 우리 가족, 우리 회사, and 우리 반."
        }
      },
      paragraphs: [
        {
          ko: "여러분은 ‘우리 가족’, ‘우리 회사’, ‘우리 반’처럼 ‘우리’라는 말을 들어본 적이 있습니까?",
          zh: "大家听过像“我们家人”“我们公司”“我们班”这样的“우리”说法吗？",
          guide: "开头用三个例子引出 우리 的文化用法。",
          translations: {
            en: {
              translation: "Have you heard the word 우리 in expressions such as “our family,” “our company,” and “our class”?",
              guide: "The opening gives three examples to introduce the cultural use of 우리."
            }
          }
        },
        {
          ko: "원래 ‘우리’는 말하는 사람과 듣는 사람을 함께 의미하는 말입니다.",
          zh: "原本，“우리”是一起表示说话人和听话人的词。",
          guide: "원래 意味着先说明这个词的基本意思。",
          translations: {
            en: {
              translation: "Originally, 우리 means the speaker and the listener together.",
              guide: "원래 signals the basic/original meaning of the word."
            }
          }
        },
        {
          ko: "그러나 한국 사람들은 ‘나’를 의미할 때에도 ‘우리’를 씁니다.",
          zh: "但是韩国人即使表示“我”的意思时，也会使用“우리”。",
          guide: "그러나 后面是文化差异的重点。",
          translations: {
            en: {
              translation: "However, Korean people also use 우리 when they mean “I” or “my.”",
              guide: "After 그러나 comes the key cultural difference."
            }
          }
        },
        {
          ko: "‘나’보다도 ‘내가 속한 공동체’를 중요하게 생각하기 때문입니다.",
          zh: "这是因为比起“我”，他们更重视“我所属的共同体”。",
          guide: "because 关系由 -기 때문입니다 表示，是文章的核心解释。",
          translations: {
            en: {
              translation: "This is because they consider the community they belong to more important than “I.”",
              guide: "-기 때문입니다 gives the core reason in the article."
            }
          }
        }
      ],
      keyTerms: [
        {
          ko: "우리 가족",
          zh: "我们家人；我的家人",
          translations: {
            en: {
              meaning: "our/my family"
            }
          }
        },
        {
          ko: "우리 회사",
          zh: "我们公司；我公司",
          translations: {
            en: {
              meaning: "our/my company"
            }
          }
        },
        {
          ko: "우리 반",
          zh: "我们班",
          translations: {
            en: {
              meaning: "our class"
            }
          }
        },
        {
          ko: "공동체",
          zh: "共同体",
          translations: {
            en: {
              meaning: "community"
            }
          }
        }
      ],
      questions: [
        {
          q: "‘우리 학교’, ‘우리 회사’에서 ‘우리’는 무엇을 의미해요?",
          zh: "“我们学校”“我们公司”里的“우리”是什么意思？",
          a: "말하는 사람이 속한 학교나 회사를 의미해요.",
          translations: {
            en: {
              translation: "What does 우리 mean in 우리 학교 and 우리 회사?",
              answer: "It means the school or company the speaker belongs to."
            }
          }
        },
        {
          q: "한국 사람들은 왜 ‘우리’라는 말을 사용해요?",
          zh: "韩国人为什么使用“우리”这个词？",
          a: "내가 속한 공동체를 중요하게 생각하기 때문이에요.",
          translations: {
            en: {
              translation: "Why do Korean people use the word 우리?",
              answer: "Because they value the community they belong to."
            }
          }
        },
        {
          q: "여러분 고향에도 ‘우리’와 비슷한 말이 있어요?",
          zh: "你的故乡也有和“우리”类似的说法吗？",
          a: "네, 가족이나 회사처럼 가까운 관계를 말할 때 비슷한 표현을 사용해요.",
          translations: {
            en: {
              translation: "Does your hometown have a word similar to 우리?",
              answer: "Yes. We use similar expressions when talking about close relationships such as family or a company."
            }
          }
        }
      ]
    },
    practice: [
      {
        type: "translation",
        title: "中文转韩文",
        prompt: "我在韩国有过犯错的经历。",
        answerKo: "저는 한국에서 실수한 적이 있어요.",
        translations: {
          en: {
            title: "Translate to Korean",
            prompt: "I have made a mistake in Korea before."
          }
        }
      },
      {
        type: "pattern",
        title: "V-(으)ㄴ 적이 있다",
        prompt: "用“지갑을 잃어버리다”造经验句。",
        answerKo: "지갑을 잃어버린 적이 있어요.",
        translations: {
          en: {
            title: "V-(으)ㄴ 적이 있다",
            prompt: "Make an experience sentence with “lose a wallet.”"
          }
        }
      },
      {
        type: "pattern",
        title: "A/V-는 편이다",
        prompt: "用“실수를 자주 하다”造倾向句。",
        answerKo: "저는 실수를 자주 하는 편이에요.",
        translations: {
          en: {
            title: "A/V-는 편이다",
            prompt: "Make a tendency sentence with “make mistakes often.”"
          }
        }
      },
      {
        type: "reading",
        title: "阅读确认",
        prompt: "잠시드 씨는 왜 당황했어요?",
        answerKo: "교통 카드 잔액이 부족했는데 ‘잔액’의 뜻을 몰라서 당황했어요.",
        translations: {
          en: {
            title: "Reading check",
            prompt: "Why was Jamshid flustered?"
          }
        }
      },
      {
        type: "culture",
        title: "文化理解",
        prompt: "한국 사람들이 ‘우리’를 사용하는 이유를 말해 보세요.",
        answerKo: "내가 속한 공동체를 중요하게 생각하기 때문이에요.",
        translations: {
          en: {
            title: "Culture check",
            prompt: "Explain why Korean people use 우리."
          }
        }
      },
      {
        type: "speaking",
        title: "失误经历介绍",
        prompt: "按“언제 / 어디에서 / 무슨 실수 / 기분”说 3-4 句。",
        answerKo: "지난주에 버스에서 노약자석에 앉은 적이 있어요. 사람들이 이상하게 쳐다봐서 당황했어요.",
        translations: {
          en: {
            title: "Talk about a mistake experience",
            prompt: "Say 3-4 sentences using when / where / what mistake / feeling."
          }
        }
      }
    ]
  };

  lesson.stats = {
    vocabulary: lesson.vocabulary.length,
    dialogues: lesson.dialogues.length,
    culture: 1,
    practice: lesson.practice.length
  };

  window.lessonGuideL2LessonChunks ||= {};
  window.lessonGuideL2LessonChunks["l2-12"] = lesson;
})();
