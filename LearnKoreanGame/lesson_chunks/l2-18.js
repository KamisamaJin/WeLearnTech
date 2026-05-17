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
    tips: tips.map(tip => makeTip(...tip)),
    translations: {
      en: {
        meaning: enMeaning,
        pos: posEn[pos] || pos,
        example: enExample,
        tips: tips.map(tip => ({
          type: tip[0],
          text: tip[2] || tip[1]
        }))
      }
    }
  });

  const lesson = {
    id: "l2-18",
    number: 18,
    titleKo: "이 수업을 신청하는 게 어때요?",
    titleZh: "申请这门课怎么样",
    pages: "192-201",
    status: "refined",
    progress: {
      vocabulary: "refined-p192-p201",
      dialogue: "refined-p195-p201",
      culture: "reviewed-p200",
      practice: "refined-p195-p201"
    },
    vocabularySources: [
      { page: 192, label: "단원 제목", note: "문화생활、문화 센터 수업、수강 신청主题" },
      { page: 194, label: "어휘와 문법 1", note: "文化中心课程名称和想听的课程表达" },
      { page: 195, label: "문법 1", note: "V-는 게 어때요? 建议表达和情境练习" },
      { page: 196, label: "어휘와 문법 2", note: "网上报名课程的流程表达" },
      { page: 197, label: "문법 2", note: "A-아/어 보이다 外观判断表达" },
      { page: 198, label: "말하기와 듣기", note: "文化中心课程建议对话和听力问题" },
      { page: 199, label: "읽기와 쓰기", note: "居民中心文化讲座招生表和写作提示" },
      { page: 200, label: "문화와 정보", note: "문화가 있는 날 原文、翻译、关键词和问题" },
      { page: 201, label: "발음/배운 어휘 확인", note: "发音练习和本课词汇复习" }
    ],
    goals: [
      "能够说出文化中心课程名称，并说明想申请或想听的课程。",
      "能够按顺序说明在网上申请课程的流程。",
      "能够用 V-는 게 어때요? 柔和地提出建议。",
      "能够用 A-아/어 보이다 根据外观或状态说“看起来……”。",
      "能够读懂文化讲座招生信息，并理解韩国的 문화가 있는 날。"
    ],
    grammar: [
      {
        pattern: "V-는 게 어때요?",
        zh: "……怎么样？",
        guide: "用于给别人建议或劝对方试试看。动词词干后接 -는 게 어때요?，比直接命令更柔和。",
        examples: [
          { ko: "윗집에 한번 이야기하는 게 어때요?", zh: "去和楼上说一次怎么样？" },
          { ko: "건강식품을 먹는 게 어때요?", zh: "吃健康食品怎么样？" },
          { ko: "한국어능력시험을 보는 게 어때요?", zh: "参加韩国语能力考试怎么样？" }
        ],
        translations: {
          en: {
            meaning: "How about doing ...?",
            guide: "Use V-는 게 어때요? to make a soft suggestion. It sounds gentler than a direct command."
          }
        }
      },
      {
        pattern: "A-아/어 보이다",
        zh: "看起来……",
        guide: "看到人或事物的外观、状态后进行判断。常见形式有 재미있어 보여요、맛있어 보여요、피곤해 보여요。",
        examples: [
          { ko: "이 수업이 재미있어 보여요.", zh: "这门课看起来很有意思。" },
          { ko: "아주 맛있어 보여요.", zh: "看起来非常好吃。" },
          { ko: "요즘 피곤해 보여요.", zh: "最近看起来很累。" }
        ],
        translations: {
          en: {
            meaning: "looks / seems ...",
            guide: "Use A-아/어 보이다 to describe an impression based on what someone or something looks like."
          }
        }
      }
    ],
    vocabulary: [
      vocab("문화생활", "文化生活", "名词", 192, "단원 제목", "문화생활에 대해 이야기해요.", "谈论文化生活。", "cultural life", "We talk about cultural life.", [["collocation", "문화생활을 즐기다"]]),
      vocab("문화 센터 수업", "文化中心课程", "名词短语", 192, "단원 제목", "문화 센터 수업을 신청해요.", "申请文化中心课程。", "culture center class", "I register for a culture center class.", [["collocation", "문화 센터 수업을 신청하다"]]),
      vocab("수강 신청", "听课申请；选课报名", "名词", 192, "단원 제목", "수강 신청을 해요.", "进行课程报名。", "course registration", "I register for a class.", [["collocation", "수강 신청을 하다"]]),
      vocab("조언하기", "给建议", "名词短语", 192, "단원 제목", "문화 센터 수업을 조언해요.", "就文化中心课程给建议。", "giving advice", "I give advice about a culture center class.", [["collocation", "조언을 하다"]]),
      vocab("배우고 싶은 강좌", "想学的课程", "名词短语", 192, "단원 제목", "배우고 싶은 강좌에 대한 글을 써요.", "写关于想学课程的文章。", "a course one wants to learn", "I write about a course I want to learn.", [["form", "배우다 + -고 싶다 -> 배우고 싶다"], ["collocation", "강좌에 대한 글"]]),
      vocab("문화가 있는 날", "有文化的日子", "名词短语", 192, "단원 제목", "문화가 있는 날에 대해 읽어요.", "阅读有文化的日子。", "Culture Day", "We read about Culture Day.", [["collocation", "문화가 있는 날에"]]),

      vocab("문화 센터", "文化中心", "名词", 194, "어휘와 문법 1", "문화 센터에는 어떤 수업이 있어요?", "文化中心有什么课程？", "culture center", "What classes are there at the culture center?", [["collocation", "문화 센터에 가다"], ["collocation", "문화 센터에서 수업을 듣다"]]),
      vocab("회원 모집", "招募会员", "名词短语", 194, "어휘와 문법 1", "문화 센터에서 회원 모집을 해요.", "文化中心招募会员。", "member recruitment", "The culture center recruits members.", [["collocation", "회원을 모집하다"]]),
      vocab("접수 기간", "受理期间；报名期间", "名词短语", 194, "어휘와 문법 1", "접수 기간을 확인하세요.", "请确认报名期间。", "application period", "Please check the application period.", [["collocation", "접수 기간을 확인하다"]]),
      vocab("수강 기간", "听课期间；上课期间", "名词短语", 194, "어휘와 문법 1", "수강 기간은 한 달이에요.", "上课期间是一个月。", "course period", "The course period is one month.", [["collocation", "수강 기간"]]),
      vocab("신청 방법", "申请方法", "名词短语", 194, "어휘와 문법 1", "신청 방법을 읽어 보세요.", "请读一下申请方法。", "application method", "Read the application method.", [["collocation", "신청 방법을 확인하다"]]),
      vocab("인터넷", "互联网", "名词", 194, "어휘와 문법 1", "인터넷에서 신청해요.", "在网上申请。", "internet", "I apply on the internet.", [["collocation", "인터넷으로 알아보다"], ["collocation", "인터넷에서 신청하다"]]),
      vocab("홈페이지", "官网；主页", "名词", 194, "어휘와 문법 1", "홈페이지에서 신청해요.", "在官网申请。", "website; homepage", "I apply on the website.", [["collocation", "홈페이지에서 신청하다"], ["collocation", "홈페이지에 들어가다"]]),
      vocab("요가", "瑜伽", "名词", 194, "어휘와 문법 1", "요가 수업이 있어요.", "有瑜伽课。", "yoga", "There is a yoga class.", [["collocation", "요가 수업"], ["collocation", "요가를 배우다"]]),
      vocab("웰빙 댄스", "健康舞蹈", "名词", 194, "어휘와 문법 1", "웰빙 댄스 수업이 있어요.", "有健康舞蹈课。", "well-being dance", "There is a well-being dance class.", [["collocation", "웰빙 댄스 수업"]]),
      vocab("천연 비누 만들기", "制作天然肥皂", "名词短语", 194, "어휘와 문법 1", "천연 비누 만들기 수업을 듣고 싶어요.", "我想听制作天然肥皂的课。", "making natural soap", "I want to take a natural soap-making class.", [["collocation", "천연 비누 만들기 수업"], ["collocation", "천연 비누를 만들다"]]),
      vocab("도자기 만들기", "制作陶瓷", "名词短语", 194, "어휘와 문법 1", "도자기 만들기 수업이 있어요.", "有制作陶瓷的课。", "making pottery", "There is a pottery-making class.", [["collocation", "도자기 만들기 수업"]]),
      vocab("어학 자격증", "语言资格证", "名词短语", 194, "어휘와 문법 1", "어학 자격증 수업을 듣고 싶어요.", "想听语言资格证课程。", "language certificate", "I want to take a language certificate class.", [["collocation", "어학 자격증을 따다"], ["form", "발음 [어학 짜격쯩]"]]),
      vocab("미용 자격증", "美容资格证", "名词短语", 194, "어휘와 문법 1", "미용 자격증 과정이 있어요.", "有美容资格证课程。", "beauty certificate", "There is a beauty certificate course.", [["collocation", "미용 자격증 과정"]]),
      vocab("노래 교실", "唱歌教室；唱歌班", "名词短语", 194, "어휘와 문법 1", "노래 교실을 신청하는 게 어때요?", "申请唱歌班怎么样？", "singing class", "How about registering for a singing class?", [["collocation", "노래 교실을 신청하다"]]),
      vocab("음악 교실", "音乐教室；音乐班", "名词短语", 194, "어휘와 문법 1", "음악 교실도 있어요.", "也有音乐班。", "music class", "There is also a music class.", [["collocation", "음악 교실"]]),
      vocab("요리 교실", "料理教室；烹饪班", "名词短语", 194, "어휘와 문법 1", "요리 교실에 가는 게 어때요?", "去料理教室怎么样？", "cooking class", "How about going to a cooking class?", [["collocation", "요리 교실에 가다"]]),
      vocab("수업을 듣다", "上课；听课", "动词短语", 194, "어휘와 문법 1", "저는 천연 비누 만들기 수업을 듣고 싶어요.", "我想上制作天然肥皂的课。", "to take a class", "I want to take a natural soap-making class.", [["collocation", "수업을 듣다"], ["pitfall", "듣다 在这里不是只“听”，而是“上课/听课”。", "듣다 can mean to take a class, not only to listen."]]),
      vocab("듣고 싶다", "想上；想听", "动词短语", 194, "어휘와 문법 1", "어떤 수업을 듣고 싶어요?", "你想上什么课？", "to want to take/listen", "What class do you want to take?", [["form", "듣다 + -고 싶다 -> 듣고 싶다"]]),

      vocab("권유하다", "劝说；建议", "动词", 195, "문법 1", "권유하거나 조언을 할 때 사용해요.", "在劝说或给建议时使用。", "to suggest; to recommend", "It is used when suggesting or advising.", [["collocation", "권유하거나 조언하다"]]),
      vocab("조언을 하다", "给建议", "动词短语", 195, "문법 1", "좋은 방법을 조언해 보세요.", "请建议一个好方法。", "to give advice", "Give a good piece of advice.", [["collocation", "좋은 방법을 조언하다"]]),
      vocab("윗집", "楼上人家", "名词", 195, "문법 1", "윗집 아이들이 너무 뛰어요.", "楼上的孩子们太能跑跳。", "upstairs neighbor's home", "The children upstairs run around too much.", [["collocation", "윗집 아이들"]]),
      vocab("잠을 잘 수가 없다", "睡不着；无法睡觉", "动词短语", 195, "문법 1", "잠을 잘 수가 없어요.", "睡不着。", "cannot sleep", "I cannot sleep.", [["form", "V-(으)ㄹ 수가 없다"], ["collocation", "잠을 자다"]]),
      vocab("이야기하는 게 어때요?", "说一下怎么样？", "句型表达", 195, "문법 1", "윗집에 한번 이야기하는 게 어때요?", "去和楼上说一下怎么样？", "How about talking to them?", "How about talking to the upstairs neighbor?", [["form", "이야기하다 + -는 게 어때요?"], ["collocation", "한번 이야기하다"]]),
      vocab("기운이 없다", "没有精神；没劲", "动词短语", 195, "문법 1", "요즘 기운이 없어요.", "最近没有精神。", "to have no energy", "I have no energy these days.", [["collocation", "기운이 없다"]]),
      vocab("건강식품", "健康食品", "名词", 195, "문법 1", "건강식품을 먹는 게 어때요?", "吃健康食品怎么样？", "health food", "How about eating health food?", [["collocation", "건강식품을 먹다"]]),
      vocab("한국어능력시험을 보다", "参加韩国语能力考试", "动词短语", 195, "문법 1", "한국어능력시험을 보는 게 어때요?", "参加韩国语能力考试怎么样？", "to take TOPIK", "How about taking TOPIK?", [["collocation", "시험을 보다"], ["pitfall", "考试用 보다，可以理解为“参加考试”。", "보다 can mean to take an exam."]]),
      vocab("좋은 방법", "好办法", "名词短语", 195, "문법 1", "좋은 방법을 이야기해 보세요.", "请说说好办法。", "good method", "Talk about a good method.", [["collocation", "좋은 방법을 이야기하다"]]),
      vocab("한국 요리를 배우다", "学习韩国料理", "动词短语", 195, "문법 1", "한국 요리를 배우고 싶어요.", "我想学韩国料理。", "to learn Korean cooking", "I want to learn Korean cooking.", [["collocation", "한국 요리"], ["form", "배우다 + -고 싶다"]]),
      vocab("친구에게 배우다", "向朋友学习", "动词短语", 195, "문법 1", "친구에게 배우는 게 어때요?", "向朋友学怎么样？", "to learn from a friend", "How about learning from a friend?", [["collocation", "N에게 배우다"]]),
      vocab("여행을 어디로 갈지 모르겠다", "不知道去哪里旅行", "句型表达", 195, "문법 1", "여행을 어디로 갈지 모르겠어요.", "不知道去哪里旅行。", "not know where to travel", "I do not know where to travel.", [["form", "V-(으)ㄹ지 모르겠다"]]),
      vocab("제주도에 가다", "去济州岛", "动词短语", 195, "문법 1", "제주도에 가는 게 어때요?", "去济州岛怎么样？", "to go to Jeju Island", "How about going to Jeju Island?", [["collocation", "제주도에 가다"]]),
      vocab("고향에 다녀오다", "回一趟故乡", "动词短语", 195, "문법 1", "고향에 다녀오는 게 어때요?", "回一趟故乡怎么样？", "to visit one's hometown and return", "How about visiting your hometown?", [["collocation", "고향에 다녀오다"]]),
      vocab("친구를 많이 사귀다", "结交很多朋友", "动词短语", 195, "문법 1", "친구를 많이 사귀고 싶어요.", "想交很多朋友。", "to make many friends", "I want to make many friends.", [["collocation", "친구를 사귀다"]]),
      vocab("모임에 가 보다", "去聚会看看", "动词短语", 195, "문법 1", "모임에 가 보는 게 어때요?", "去聚会看看怎么样？", "to try going to a gathering", "How about trying a gathering?", [["form", "가 보다 -> 가 보는 게 어때요?"], ["collocation", "모임에 가다"]]),
      vocab("에스엔에스(SNS)를 하다", "玩/使用社交软件", "动词短语", 195, "문법 1", "에스엔에스(SNS)를 하는 게 어때요?", "使用 SNS 怎么样？", "to use social media", "How about using social media?", [["collocation", "SNS를 하다"]]),
      vocab("몸에 좋은 음식", "对身体好的食物", "名词短语", 195, "문법 1", "몸에 좋은 음식을 먹는 게 어때요?", "吃对身体好的食物怎么样？", "food that is good for the body", "How about eating food that is good for your body?", [["collocation", "몸에 좋다"]]),

      vocab("인터넷으로 알아보다", "在网上查询", "动词短语", 196, "어휘와 문법 2", "인터넷으로 알아보고 신청해요.", "在网上查询后申请。", "to look up on the internet", "I look it up online and apply.", [["collocation", "인터넷으로 알아보다"], ["form", "N(으)로 = 用/通过N", "N(으)로 means by/through N."]]),
      vocab("프로그램을 선택하다", "选择项目/课程", "动词短语", 196, "어휘와 문법 2", "프로그램을 선택해요.", "选择项目。", "to select a program", "I select a program.", [["collocation", "프로그램을 선택하다"]]),
      vocab("시간을 확인하다", "确认时间", "动词短语", 196, "어휘와 문법 2", "시간을 확인하세요.", "请确认时间。", "to check the time", "Please check the time.", [["collocation", "시간을 확인하다"]]),
      vocab("회원 가입을 하다", "注册会员", "动词短语", 196, "어휘와 문법 2", "홈페이지에서 회원 가입을 해요.", "在官网注册会员。", "to sign up as a member", "I sign up on the website.", [["collocation", "회원 가입을 하다"]]),
      vocab("수강료를 결제하다", "支付听课费", "动词短语", 196, "어휘와 문법 2", "수강료를 결제하고 수업을 들어요.", "支付学费后上课。", "to pay the course fee", "I pay the course fee and take the class.", [["collocation", "수강료를 결제하다"]]),
      vocab("신청했어요", "申请了", "动词", 196, "어휘와 문법 2", "프로그램을 찾아보고 신청했어요.", "查询项目后申请了。", "applied", "I searched for a program and applied.", [["form", "신청하다 + -았/었어요 -> 신청했어요"]]),
      vocab("찾아보다", "查找；找一找", "动词", 196, "어휘와 문법 2", "재미있는 수업을 찾아봐야겠어요.", "得找找有趣的课程。", "to look for", "I should look for an interesting class.", [["collocation", "프로그램을 찾아보다"]]),

      vocab("재미있어 보이다", "看起来有趣", "动词短语", 197, "문법 2", "이 수업이 재미있어 보여요.", "这门课看起来很有趣。", "to look interesting", "This class looks interesting.", [["form", "재미있다 + -어 보이다 -> 재미있어 보이다"]]),
      vocab("맛있어 보이다", "看起来好吃", "动词短语", 197, "문법 2", "아주 맛있어 보여요.", "看起来非常好吃。", "to look delicious", "It looks very delicious.", [["form", "맛있다 + -어 보이다 -> 맛있어 보이다"]]),
      vocab("피곤해 보이다", "看起来累", "动词短语", 197, "문법 2", "요즘 피곤해 보여요.", "最近看起来很累。", "to look tired", "You look tired these days.", [["form", "피곤하다 + -해 보이다 -> 피곤해 보이다"]]),
      vocab("좋아 보이다", "看起来好", "动词短语", 197, "문법 2", "물건들이 모두 좋아 보여요.", "东西都看起来不错。", "to look good", "All the things look good.", [["form", "좋다 + -아 보이다 -> 좋아 보이다"]]),
      vocab("높아 보이다", "看起来高", "动词短语", 197, "문법 2", "가격이 높아 보여요.", "价格看起来高。", "to look high", "The price looks high.", [["form", "높다 + -아 보이다"]]),
      vocab("비싸 보이다", "看起来贵", "动词短语", 197, "문법 2", "이 물건은 비싸 보여요.", "这个东西看起来贵。", "to look expensive", "This item looks expensive.", [["form", "비싸다 + -아 보이다"]]),
      vocab("적어 보이다", "看起来少", "动词短语", 197, "문법 2", "인원이 적어 보여요.", "人数看起来少。", "to look few/small", "The number of people looks small.", [["form", "적다 + -어 보이다"]]),
      vocab("넓어 보이다", "看起来宽敞", "动词短语", 197, "문법 2", "교실이 넓어 보여요.", "教室看起来宽敞。", "to look spacious", "The classroom looks spacious.", [["form", "넓다 + -어 보이다"]]),
      vocab("친절해 보이다", "看起来亲切", "动词短语", 197, "문법 2", "선생님이 친절해 보여요.", "老师看起来很亲切。", "to look kind", "The teacher looks kind.", [["form", "친절하다 + -해 보이다"]]),
      vocab("머리 스타일을 바꾸다", "换发型", "动词短语", 197, "문법 2", "어제 머리 스타일을 바꾸었어요.", "昨天换了发型。", "to change one's hairstyle", "I changed my hairstyle yesterday.", [["collocation", "머리 스타일을 바꾸다"]]),
      vocab("깔끔하다", "干净利落；整洁", "形容词", 197, "문법 2", "깔끔해 보여요.", "看起来很干净利落。", "neat", "It looks neat.", [["form", "깔끔하다 + -해 보이다"]]),
      vocab("이번 여름에", "这个夏天", "名词短语", 197, "문법 2", "이번 여름에 고향에 가요.", "这个夏天回故乡。", "this summer", "I am going to my hometown this summer.", [["collocation", "이번 여름에"]]),
      vocab("밤까지 일을 하다", "工作到晚上", "动词短语", 197, "문법 2", "밤까지 일을 했어요.", "工作到了晚上。", "to work until night", "I worked until night.", [["collocation", "밤까지 일하다"]]),
      vocab("힘들다", "辛苦；累", "形容词", 197, "문법 2", "힘들어 보여요.", "看起来很辛苦。", "hard; exhausting", "You look exhausted.", [["form", "힘들다 + -어 보이다 -> 힘들어 보이다"]]),
      vocab("오늘 기분", "今天的心情", "名词短语", 197, "문법 2", "오늘 기분이 어때 보여요?", "今天心情看起来怎么样？", "today's mood", "How does your mood look today?", [["collocation", "기분이 좋아 보이다"]]),

      vocab("팸플릿", "宣传册", "名词", 198, "말하기와 듣기", "오늘 문화 센터 팸플릿을 봤어요.", "今天看了文化中心宣传册。", "pamphlet", "I saw a culture center pamphlet today.", [["collocation", "팸플릿을 보다"]]),
      vocab("하나 배우면 좋겠다", "学一个就好了", "句型表达", 198, "말하기와 듣기", "저도 하나 배우면 좋겠어요.", "我也想学一个。", "it would be nice to learn one thing", "I would like to learn one thing too.", [["form", "배우다 + -면 좋겠다"]]),
      vocab("도움이 되다", "有帮助", "动词短语", 198, "말하기와 듣기", "도움이 되고 아주 좋았어요.", "很有帮助，也很好。", "to be helpful", "It was helpful and very good.", [["collocation", "도움이 되다"]]),
      vocab("운동을 좋아하다", "喜欢运动", "动词短语", 198, "말하기와 듣기", "운동을 좋아하니까 요가를 배우는 게 어때요?", "因为喜欢运动，学瑜伽怎么样？", "to like exercise", "Since you like exercise, how about learning yoga?", [["collocation", "운동을 좋아하다"]]),
      vocab("좋은 생각이에요", "是个好主意", "句型表达", 198, "말하기와 듣기", "아, 좋은 생각이에요.", "啊，是个好主意。", "That is a good idea", "Oh, that is a good idea.", [["collocation", "좋은 생각"]]),
      vocab("어렵지 않다", "不难", "形容词短语", 198, "말하기와 듣기", "어렵지는 않겠죠?", "应该不会难吧？", "not difficult", "It will not be difficult, right?", [["form", "어렵다 + -지 않다"]]),
      vocab("선착순 모집", "按先后顺序招募；先到先得", "名词短语", 198, "말하기와 듣기", "선착순 모집이니까 빨리 신청해야겠어요.", "因为是先到先得，所以得快点申请。", "first-come-first-served recruitment", "It is first come, first served, so I should apply quickly.", [["collocation", "선착순 모집"], ["pitfall", "선착순 是“按到达顺序”，报名场景常指先到先得。", "선착순 means first come, first served."]]),
      vocab("초급반", "初级班", "名词", 198, "말하기와 듣기", "초급반이니까 어렵지 않을 거예요.", "因为是初级班，所以不会难。", "beginner class", "Because it is a beginner class, it will not be difficult.", [["collocation", "초급반을 듣다"]]),
      vocab("한식 강좌", "韩餐课程", "名词短语", 198, "말하기와 듣기", "한식 강좌를 신청하는 게 어때요?", "申请韩餐课程怎么样？", "Korean cooking course", "How about applying for a Korean cooking course?", [["collocation", "한식 강좌를 신청하다"]]),
      vocab("한식 요리 수업", "韩餐料理课", "名词短语", 198, "말하기와 듣기", "한식 요리 수업이 좋다.", "韩餐料理课不错。", "Korean cooking class", "The Korean cooking class is good.", [["collocation", "한식 요리 수업"]]),
      vocab("공예 교실", "工艺教室；手工课", "名词短语", 198, "말하기와 듣기", "공예 교실을 신청했어요.", "申请了手工课。", "craft class", "I registered for a craft class.", [["collocation", "공예 교실을 신청하다"]]),
      vocab("일요일 수업", "周日课程", "名词短语", 198, "말하기와 듣기", "일요일 수업은 신청이 끝났어요.", "周日课程报名结束了。", "Sunday class", "Registration for the Sunday class is over.", [["collocation", "일요일 수업"]]),
      vocab("시작하다", "开始", "动词", 198, "말하기와 듣기", "수업은 언제 시작해요?", "课程什么时候开始？", "to start", "When does the class start?", [["collocation", "수업이 시작하다"]]),

      vocab("주민 센터", "居民中心", "名词", 199, "읽기와 쓰기", "주민 센터 문화 강좌 수강생을 모집해요.", "招募居民中心文化讲座学员。", "community center", "The community center recruits culture course students.", [["collocation", "주민 센터 문화 강좌"]]),
      vocab("문화 강좌", "文化讲座/课程", "名词短语", 199, "읽기와 쓰기", "문화 강좌를 신청해요.", "申请文化课程。", "culture course", "I apply for a culture course.", [["collocation", "문화 강좌를 신청하다"]]),
      vocab("수강생 모집", "招募学员", "名词短语", 199, "읽기와 쓰기", "수강생 모집 공고를 봤어요.", "看到了招募学员公告。", "student recruitment", "I saw a student recruitment notice.", [["collocation", "수강생을 모집하다"]]),
      vocab("방문 접수", "现场/到访报名", "名词短语", 199, "읽기와 쓰기", "방문 접수 또는 이메일 접수를 해요.", "现场报名或邮件报名。", "in-person application", "Apply in person or by email.", [["collocation", "방문 접수를 하다"]]),
      vocab("이메일 접수", "邮件报名", "名词短语", 199, "읽기와 쓰기", "이메일 접수도 가능해요.", "也可以邮件报名。", "email application", "Email application is also possible.", [["collocation", "이메일 접수"]]),
      vocab("수강료", "听课费；学费", "名词", 199, "읽기와 쓰기", "수강료는 무료예요.", "学费免费。", "course fee", "The course fee is free.", [["collocation", "수강료가 무료이다"], ["collocation", "수강료를 결제하다"]]),
      vocab("무료", "免费", "名词", 199, "읽기와 쓰기", "수강료는 무료예요.", "听课费免费。", "free", "The course fee is free.", [["pitfall", "무료 是免费；유료 是收费。", "무료 means free; 유료 means paid."]]),
      vocab("교재비", "教材费", "名词", 199, "읽기와 쓰기", "교재비는 1만 원이에요.", "教材费是一万韩元。", "textbook fee", "The textbook fee is 10,000 won.", [["collocation", "교재비 1만 원"]]),
      vocab("재료비", "材料费", "名词", 199, "읽기와 쓰기", "재료비는 별도예요.", "材料费另算。", "materials fee", "The materials fee is separate.", [["collocation", "재료비 별도"]]),
      vocab("별도", "另算；另行", "名词", 199, "읽기와 쓰기", "재료비 별도라고 쓰여 있어요.", "写着材料费另算。", "separate", "It says the materials fee is separate.", [["collocation", "별도이다"], ["pitfall", "费用表里 별도 常指不包含在基本费用里。", "In fee tables, 별도 means not included."]]),
      vocab("문의", "咨询；询问", "名词", 199, "읽기와 쓰기", "문의 전화번호가 있어요.", "有咨询电话号码。", "inquiry", "There is an inquiry phone number.", [["collocation", "문의: 전화번호"]]),
      vocab("맛있는 커피", "美味咖啡", "名词短语", 199, "읽기와 쓰기", "맛있는 커피는 성인 강좌예요.", "“美味咖啡”是成人课程。", "delicious coffee", "Delicious Coffee is an adult course.", [["collocation", "맛있는 커피 강좌"]]),
      vocab("바리스타 자격증 과정", "咖啡师资格证课程", "名词短语", 199, "읽기와 쓰기", "맛있는 커피는 바리스타 자격증 과정이에요.", "美味咖啡是咖啡师资格证课程。", "barista certificate course", "Delicious Coffee is a barista certificate course.", [["collocation", "자격증 과정"]]),
      vocab("컴퓨터 기초", "电脑基础", "名词短语", 199, "읽기와 쓰기", "컴퓨터 기초는 초등학생 대상이에요.", "电脑基础面向小学生。", "basic computer class", "Basic Computer is for elementary students.", [["collocation", "컴퓨터 기초"]]),
      vocab("초등학생", "小学生", "名词", 199, "읽기와 쓰기", "대상은 초등학생이에요.", "对象是小学生。", "elementary student", "The target group is elementary students.", [["collocation", "초등학생 대상"]]),
      vocab("중·고등학생 및 성인", "初高中生及成人", "名词短语", 199, "읽기와 쓰기", "중·고등학생 및 성인도 신청할 수 있어요.", "初高中生及成人也可以申请。", "middle/high school students and adults", "Middle and high school students and adults can also apply.", [["collocation", "및 성인"]]),
      vocab("생활 영어", "生活英语", "名词短语", 199, "읽기와 쓰기", "생활 영어는 화, 목에 수업이 있어요.", "生活英语周二、周四有课。", "practical English", "Practical English has classes on Tuesday and Thursday.", [["collocation", "생활 영어 강좌"]]),
      vocab("강좌명", "课程名称", "名词", 199, "읽기와 쓰기", "강좌명을 확인하세요.", "请确认课程名称。", "course title", "Check the course title.", [["collocation", "강좌명"]]),
      vocab("대상", "对象；适用人群", "名词", 199, "읽기와 쓰기", "대상을 확인하고 신청하세요.", "请确认对象后申请。", "target group", "Check the target group and apply.", [["collocation", "대상 확인"]]),
      vocab("인원", "人数；名额", "名词", 199, "읽기와 쓰기", "인원은 15명이에요.", "人数是15名。", "number of people; quota", "The quota is 15 people.", [["collocation", "인원 15명"]]),
      vocab("맞으면 O, 틀리면 X", "正确画 O，错误画 X", "句型表达", 199, "읽기와 쓰기", "맞으면 O, 틀리면 X 하세요.", "正确画 O，错误画 X。", "mark O if correct, X if wrong", "Mark O if it is correct and X if it is wrong.", [["collocation", "맞으면 O"], ["collocation", "틀리면 X"]]),
      vocab("수강하고 싶은 강좌", "想听的课程", "名词短语", 199, "읽기와 쓰기", "수강하고 싶은 강좌와 이유를 써 보세요.", "请写想听的课程和理由。", "a course one wants to take", "Write the course you want to take and the reason.", [["form", "수강하다 + -고 싶다"], ["collocation", "이유를 쓰다"]]),

      vocab("매달 마지막 주 수요일", "每月最后一周星期三", "名词短语", 200, "문화와 정보", "매달 마지막 주 수요일은 문화가 있는 날입니다.", "每月最后一周星期三是有文化的日子。", "the last Wednesday of every month", "The last Wednesday of every month is Culture Day.", [["collocation", "매달 마지막 주 수요일"]]),
      vocab("영화관", "电影院", "名词", 200, "문화와 정보", "영화관에서 할인을 받을 수 있어요.", "在电影院可以享受折扣。", "movie theater", "You can get a discount at a movie theater.", [["collocation", "영화관에 가다"]]),
      vocab("공연장", "演出场馆", "名词", 200, "문화와 정보", "공연장도 이용할 수 있어요.", "也可以使用演出场馆。", "performance venue", "You can also use performance venues.", [["collocation", "공연장"]]),
      vocab("박물관", "博物馆", "名词", 200, "문화와 정보", "박물관을 무료로 즐길 수 있어요.", "可以免费参观博物馆。", "museum", "You can enjoy museums for free.", [["collocation", "박물관에 가다"]]),
      vocab("미술관", "美术馆", "名词", 200, "문화와 정보", "미술관에도 갈 수 있어요.", "也可以去美术馆。", "art museum", "You can also go to an art museum.", [["collocation", "미술관에 가다"]]),
      vocab("스포츠 시설", "体育设施", "名词短语", 200, "문화와 정보", "스포츠 시설을 할인된 가격으로 즐길 수 있어요.", "可以以折扣价使用体育设施。", "sports facilities", "You can enjoy sports facilities at a discounted price.", [["collocation", "스포츠 시설을 이용하다"]]),
      vocab("할인된 가격", "折扣价", "名词短语", 200, "문화와 정보", "할인된 가격으로 즐길 수 있습니다.", "可以以折扣价享受。", "discounted price", "You can enjoy it at a discounted price.", [["form", "할인되다 + -ㄴ -> 할인된"], ["collocation", "할인된 가격으로"]]),
      vocab("무료로 즐기다", "免费享受", "动词短语", 200, "문화와 정보", "무료로 즐길 수 있습니다.", "可以免费享受。", "to enjoy for free", "You can enjoy it for free.", [["collocation", "무료로 즐기다"]]),
      vocab("특색 있는 프로그램", "有特色的项目", "名词短语", 200, "문화와 정보", "지역마다 특색 있는 프로그램이 있어요.", "每个地区都有有特色的项目。", "distinctive program", "Each region has distinctive programs.", [["collocation", "특색 있는 프로그램"]]),
      vocab("다양한 문화", "多样的文化", "名词短语", 200, "문화와 정보", "한국의 다양한 문화를 경험할 수 있습니다.", "可以体验韩国多样的文化。", "various cultures", "You can experience diverse Korean culture.", [["collocation", "다양한 문화를 경험하다"]]),
      vocab("경험하다", "体验", "动词", 200, "문화와 정보", "한국의 문화를 경험해 보세요.", "请体验韩国文化。", "to experience", "Experience Korean culture.", [["collocation", "문화를 경험하다"]]),
      vocab("밤에 문을 열다", "晚上开门/营业", "动词短语", 200, "문화와 정보", "밤에 문을 여는 문화 시설도 있습니다.", "也有晚上开门的文化设施。", "to open at night", "Some cultural facilities open at night.", [["collocation", "문을 열다"]]),
      vocab("평소에", "平时", "副词", 200, "문화와 정보", "평소에 문화를 즐기지 못한 사람들이 이용합니다.", "平时不能享受文化的人们会使用。", "usually; ordinarily", "People who cannot usually enjoy culture use it.", [["collocation", "평소에"]]),
      vocab("이용하다", "使用；利用", "动词", 200, "문화와 정보", "문화 시설을 이용합니다.", "使用文化设施。", "to use", "They use cultural facilities.", [["collocation", "시설을 이용하다"]]),

      vocab("행복해", "幸福；开心", "发音表达", 201, "발음/배운 어휘 확인", "오늘 행복해 보여요.", "今天看起来很开心。", "happy", "You look happy today.", [["form", "행복해[행보캐]"], ["pitfall", "ㄱ 后接 ㅎ 时会送气，读成 [ㅋ]。", "ㄱ followed by ㅎ becomes aspirated, [ㅋ]."]]),
      vocab("천연 비누", "天然肥皂", "名词短语", 201, "발음/배운 어휘 확인", "천연 비누 만들기 수업을 듣고 싶어요.", "想上制作天然肥皂的课。", "natural soap", "I want to take a natural soap-making class.", [["form", "천연 비누[처년 비누]"], ["collocation", "천연 비누 만들기"]])
    ],
    dialogues: [
      {
        id: "dialogue-grammar-01",
        title: "문화 센터에서 노래 교실을 신청하는 게 어때요?",
        focus: "V-는 게 어때요?",
        page: 195,
        source: "문법 1",
        sceneZh: "用 V-는 게 어때요? 给别人提出柔和建议。",
        sceneKo: "상대방의 고민을 듣고 V-는 게 어때요?로 조언해 보세요.",
        sceneEn: "Listen to someone's concern and give advice with V-는 게 어때요?",
        guideZh: "动词词干直接接 -는 게 어때요?：먹다 -> 먹는 게 어때요?，배우다 -> 배우는 게 어때요?。",
        guideEn: "Attach -는 게 어때요? to a verb stem: 먹다 -> 먹는 게 어때요?, 배우다 -> 배우는 게 어때요?.",
        lines: [
          { speaker: "가", ko: "윗집 아이들이 너무 뛰어서 잠을 잘 수가 없어요.", zh: "楼上的孩子们太吵闹，我睡不着。", noteZh: "잘 수가 없어요 表示“无法……”。", en: "The kids upstairs run around so much that I cannot sleep.", noteEn: "잘 수가 없어요 means cannot do something." },
          { speaker: "나", ko: "윗집에 한번 이야기하는 게 어때요?", zh: "去和楼上说一下怎么样？", noteZh: "이야기하다 变 이야기하는 게 어때요。", en: "How about talking to the upstairs neighbor?", noteEn: "이야기하다 becomes 이야기하는 게 어때요." },
          { speaker: "가", ko: "요즘 기운이 없어요.", zh: "最近没有精神。", noteZh: "기운이 없다 是身体没劲、没精神。", en: "I have no energy these days.", noteEn: "기운이 없다 means to have no energy." },
          { speaker: "나", ko: "건강식품을 먹는 게 어때요?", zh: "吃健康食品怎么样？", noteZh: "먹다 -> 먹는 게 어때요。", en: "How about eating health food?", noteEn: "먹다 becomes 먹는 게 어때요." },
          { speaker: "가", ko: "한국어를 더 잘하고 싶어요.", zh: "我想把韩语学得更好。", noteZh: "더 잘하다 = 做得更好。", en: "I want to be better at Korean.", noteEn: "더 잘하다 means to do better." },
          { speaker: "나", ko: "한국어 수업을 듣고 한국어능력시험을 보는 게 어때요?", zh: "上韩语课并参加韩国语能力考试怎么样？", noteZh: "보다 在考试语境中是“参加考试”。", en: "How about taking a Korean class and taking TOPIK?", noteEn: "보다 can mean to take an exam." }
        ],
        rolePlays: [
          {
            title: "고민에 조언하기",
            promptZh: "选择一个烦恼，用 V-는 게 어때요? 说两个建议。",
            answerKo: "친구를 많이 사귀고 싶으면 모임에 가 보는 게 어때요? 에스엔에스(SNS)를 하는 게 어때요?",
            translations: { en: { title: "Giving advice", prompt: "Choose one concern and give two suggestions with V-는 게 어때요?" } }
          }
        ],
        drills: [
          { pattern: "V-는 게 어때요?", promptZh: "요리 교실에 가다", answerKo: "요리 교실에 가는 게 어때요?", translations: { en: { prompt: "go to a cooking class" } } },
          { pattern: "V-는 게 어때요?", promptZh: "친구에게 배우다", answerKo: "친구에게 배우는 게 어때요?", translations: { en: { prompt: "learn from a friend" } } }
        ]
      },
      {
        id: "dialogue-grammar-02",
        title: "요가 수업이 재미있어 보여요",
        focus: "A-아/어 보이다",
        page: 197,
        source: "문법 2",
        sceneZh: "根据看到的状态，说“看起来……”。",
        sceneKo: "사람이나 사물의 상태를 보고 A-아/어 보이다로 말해 보세요.",
        sceneEn: "Look at a person or thing and describe the impression with A-아/어 보이다.",
        guideZh: "形容词以 ㅏ/ㅗ 结尾多接 -아 보이다，其他多接 -어 보이다；하다 形容词变 -해 보이다。",
        guideEn: "Adjectives with ㅏ/ㅗ often take -아 보이다, others take -어 보이다, and 하다 adjectives become -해 보이다.",
        lines: [
          { speaker: "아이", ko: "엄마, 이 수업이 재미있어 보여요.", zh: "妈妈，这门课看起来很有意思。", noteZh: "재미있다 -> 재미있어 보여요。", en: "Mom, this class looks interesting.", noteEn: "재미있다 becomes 재미있어 보여요." },
          { speaker: "엄마", ko: "수업을 알아볼까?", zh: "要不要了解一下课程？", noteZh: "-ㄹ까? 表示提议。", en: "Shall we look into the class?", noteEn: "-ㄹ까? makes a suggestion." },
          { speaker: "가", ko: "제가 이 음식을 만들었어요.", zh: "这是我做的食物。", noteZh: "만들었어요 = 做了。", en: "I made this food.", noteEn: "만들었어요 means made." },
          { speaker: "나", ko: "아주 맛있어 보여요.", zh: "看起来非常好吃。", noteZh: "맛있다 -> 맛있어 보여요。", en: "It looks very delicious.", noteEn: "맛있다 becomes 맛있어 보여요." },
          { speaker: "가", ko: "회사에 일이 많아요?", zh: "公司事情很多吗？", noteZh: "일이 많다 = 事情多。", en: "Do you have a lot of work at the company?", noteEn: "일이 많다 means to have a lot of work." },
          { speaker: "나", ko: "요즘 피곤해 보여요.", zh: "你最近看起来很累。", noteZh: "피곤하다 -> 피곤해 보여요。", en: "You look tired these days.", noteEn: "피곤하다 becomes 피곤해 보여요." },
          { speaker: "가", ko: "백화점에서 파는 물건들은 모두 좋아 보여요.", zh: "百货店卖的东西都看起来不错。", noteZh: "좋다 -> 좋아 보여요。", en: "Everything sold at the department store looks good.", noteEn: "좋다 becomes 좋아 보여요." }
        ],
        rolePlays: [
          {
            title: "어때 보여요?",
            promptZh: "看朋友、照片或课程图片，用 A-아/어 보여요 说三句。",
            answerKo: "오늘 기분이 좋아 보여요. 사진이 행복해 보여요. 교실이 넓어 보여요.",
            translations: { en: { title: "How does it look?", prompt: "Look at a friend, photo, or class picture and say three sentences with A-아/어 보여요." } }
          }
        ]
      },
      {
        id: "dialogue-speaking-01",
        title: "운동을 좋아하니까 요가를 배우는 게 어때요?",
        focus: "말하기와 듣기",
        page: 198,
        source: "말하기와 듣기",
        sceneZh: "朋友想申请文化中心课程，另一方根据兴趣提出建议。",
        sceneKo: "친구의 관심사를 듣고 문화 센터 수업을 추천해 보세요.",
        sceneEn: "Listen to a friend's interests and recommend a culture center class.",
        guideZh: "先说明理由：N을/를 좋아하니까，再接建议：V-는 게 어때요?。",
        guideEn: "Give the reason first with N을/를 좋아하니까, then make a suggestion with V-는 게 어때요?",
        lines: [
          { speaker: "이링", ko: "오늘 문화 센터 팸플릿을 봤어요.", zh: "今天我看了文化中心宣传册。", noteZh: "팸플릿 = 宣传册。", en: "I saw a culture center pamphlet today.", noteEn: "팸플릿 means pamphlet." },
          { speaker: "이링", ko: "저도 하나 배우면 좋겠는데 어떤 수업을 신청하면 좋을까요?", zh: "我也想学一个，申请什么课程好呢？", noteZh: "-면 좋겠는데 表示委婉地提出愿望。", en: "I would like to learn something too. What class should I register for?", noteEn: "-면 좋겠는데 softly states a wish." },
          { speaker: "왕흔", ko: "저도 문화 센터에서 수업을 많이 들었는데 도움이 되고 아주 좋았어요.", zh: "我也在文化中心上过很多课，很有帮助，也非常好。", noteZh: "도움이 되다 = 有帮助。", en: "I took many classes at the culture center too. They were helpful and very good.", noteEn: "도움이 되다 means to be helpful." },
          { speaker: "왕흔", ko: "이링 씨는 운동을 좋아하니까 요가를 배우는 게 어때요?", zh: "Iring 喜欢运动，所以学瑜伽怎么样？", noteZh: "배우다 -> 배우는 게 어때요。", en: "Since you like exercise, how about learning yoga?", noteEn: "배우다 becomes 배우는 게 어때요." },
          { speaker: "이링", ko: "아, 좋은 생각이에요.", zh: "啊，是个好主意。", noteZh: "좋은 생각이에요 可直接回应建议。", en: "Oh, that is a good idea.", noteEn: "좋은 생각이에요 responds positively to a suggestion." },
          { speaker: "이링", ko: "저도 요가 수업이 재미있어 보였어요.", zh: "我也觉得瑜伽课看起来很有趣。", noteZh: "보였어요 是 보이다 的过去式。", en: "I also thought the yoga class looked interesting.", noteEn: "보였어요 is the past tense of 보이다." },
          { speaker: "이링", ko: "어렵지는 않겠죠? 선착순 모집이니까 집에 가서 빨리 신청해야겠어요.", zh: "应该不会难吧？因为是先到先得，我得回家快点申请。", noteZh: "선착순 모집 = 先到先得报名。", en: "It will not be difficult, right? Since it is first come, first served, I should go home and register quickly.", noteEn: "선착순 모집 means first-come-first-served registration." },
          { speaker: "왕흔", ko: "초급반이니까 어렵지 않을 거예요.", zh: "因为是初级班，所以不会难。", noteZh: "초급반 = 初级班。", en: "It is a beginner class, so it will not be difficult.", noteEn: "초급반 means beginner class." },
          { speaker: "왕흔", ko: "저도 빨리 재미있는 수업을 찾아봐야겠어요.", zh: "我也得快点找找有趣的课程。", noteZh: "-아/어야겠어요 表示觉得需要做。", en: "I should quickly look for an interesting class too.", noteEn: "-아/어야겠어요 means the speaker feels they should do something." }
        ],
        rolePlays: [
          {
            title: "수업 추천하기",
            promptZh: "把兴趣换成 요리에 관심이 있다 / 만들기를 좋아하다，推荐 한식 강좌 或 공예 교실。",
            answerKo: "요리에 관심이 있으니까 한식 강좌를 신청하는 게 어때요? 만들기를 좋아해서 공예 교실을 신청했어요.",
            translations: { en: { title: "Recommending a class", prompt: "Change the interest to cooking or making things and recommend a Korean cooking course or craft class." } }
          }
        ],
        drills: [
          { pattern: "이유 + V-는 게 어때요?", promptZh: "요리에 관심이 있다 / 한식 강좌를 신청하다", answerKo: "요리에 관심이 있으니까 한식 강좌를 신청하는 게 어때요?", translations: { en: { prompt: "be interested in cooking / apply for a Korean cooking course" } } },
          { pattern: "A-아/어 보이다", promptZh: "요가 수업 / 재미있다", answerKo: "요가 수업이 재미있어 보여요.", translations: { en: { prompt: "yoga class / interesting" } } }
        ]
      },
      {
        id: "dialogue-reading-01",
        title: "주민 센터 문화 강좌 수강생 모집",
        focus: "읽기와 쓰기",
        page: 199,
        source: "읽기와 쓰기",
        sceneZh: "阅读文化讲座招生表，确认报名时间、报名方式和课程条件。",
        sceneKo: "문화 강좌 모집 안내를 읽고 접수 기간과 신청 방법을 확인해 보세요.",
        sceneEn: "Read a culture course recruitment notice and check the application period, method, and class details.",
        guideZh: "表格题先看标题和项目，再按 열：강좌명 / 대상 / 시간 / 강의실 / 인원 找答案。",
        guideEn: "For a table question, read the title first, then use the columns: course title, target group, time, classroom, quota.",
        lines: [
          { speaker: "제목", ko: "주민 센터 문화 강좌 수강생 모집", zh: "居民中心文化讲座招募学员", noteZh: "수강생 = 听课/上课的人。", en: "Community center culture course student recruitment", noteEn: "수강생 means a person taking a class." },
          { speaker: "안내", ko: "접수 기간: 매달 25일~28일", zh: "报名期间：每月25日到28日。", noteZh: "접수 기간 是表格题高频信息。", en: "Application period: the 25th to 28th of every month.", noteEn: "접수 기간 is key information in notices." },
          { speaker: "안내", ko: "접수 방법: 방문 접수 또는 이메일 접수", zh: "报名方式：现场报名或邮件报名。", noteZh: "또는 = 或者。", en: "Application method: in-person application or email application.", noteEn: "또는 means or." },
          { speaker: "안내", ko: "수강료: 무료(교재비 1만 원, 재료비 별도)", zh: "听课费：免费（教材费一万韩元，材料费另算）。", noteZh: "무료 不等于所有费用都免费，括号里仍有额外费用。", en: "Course fee: free (textbook fee 10,000 won, materials fee separate).", noteEn: "무료 does not mean every related cost is free." },
          { speaker: "표", ko: "맛있는 커피는 성인 대상이고 화요일 9시부터 11시까지 수업이 있어요.", zh: "美味咖啡面向成人，周二9点到11点上课。", noteZh: "시간信息从表格的 시간 列找。", en: "Delicious Coffee is for adults and meets Tuesday from 9 to 11.", noteEn: "Find time information in the 시간 column." },
          { speaker: "표", ko: "생활 영어는 화요일과 목요일 20시부터 21시까지 수업이 있어요.", zh: "生活英语周二、周四20点到21点上课。", noteZh: "화, 목 = 周二、周四。", en: "Practical English meets Tuesday and Thursday from 20:00 to 21:00.", noteEn: "화, 목 means Tuesday and Thursday." },
          { speaker: "질문", ko: "강좌 신청은 어떻게 해요?", zh: "课程怎么申请？", noteZh: "答案在 접수 방법。", en: "How do you apply for the course?", noteEn: "The answer is under 접수 방법." },
          { speaker: "답", ko: "방문 접수 또는 이메일 접수를 해요.", zh: "现场报名或邮件报名。", noteZh: "읽기 답案要尽量照原文关键词。", en: "Apply in person or by email.", noteEn: "Use the notice's key words in the answer." }
        ],
        rolePlays: [
          {
            title: "강좌 안내 읽기",
            promptZh: "看表格，用韩语回答“언제 / 어떻게 / 누구 대상”。",
            answerKo: "강좌 신청은 매달 25일부터 28일까지 해요. 방문 접수 또는 이메일 접수를 해요. 생활 영어는 성인 대상이에요.",
            translations: { en: { title: "Reading a course notice", prompt: "Use the table to answer when, how, and for whom." } }
          }
        ]
      },
      {
        id: "dialogue-pronunciation-01",
        title: "어학 자격증[어학 짜격쯩]",
        focus: "발음",
        page: 201,
        source: "발음/배운 어휘 확인",
        sceneZh: "练习 어학 자격증、행복해、천연 비누 的自然发音。",
        sceneKo: "어학 자격증, 행복해, 천연 비누의 자연스러운 발음을 연습해 보세요.",
        sceneEn: "Practice the natural pronunciation of 어학 자격증, 행복해, and 천연 비누.",
        guideZh: "本页重点是紧音、送气和连音：자격증 读 [짜격쯩]，행복해 读 [행보캐]。",
        guideEn: "This page focuses on tense sounds, aspiration, and linking: 자격증 becomes [짜격쯩], and 행복해 becomes [행보캐].",
        lines: [
          { speaker: "발음", ko: "어학 자격증[어학 짜격쯩]", zh: "어학 자격증 的发音：[어학 짜격쯩]", noteZh: "자격증 的 자/증 听起来更紧。", en: "어학 자격증 is pronounced [어학 짜격쯩].", noteEn: "The 자 and 증 in 자격증 sound tense." },
          { speaker: "나", ko: "어학 자격증 수업을 듣고 싶어요.", zh: "我想上语言资格证课程。", noteZh: "수업을 듣다 = 上课。", en: "I want to take a language certificate class.", noteEn: "수업을 듣다 means to take a class." },
          { speaker: "발음", ko: "행복해[행보캐]", zh: "행복해 的发音：[행보캐]", noteZh: "ㄱ 和 ㅎ 相遇，读成 [ㅋ]。", en: "행복해 is pronounced [행보캐].", noteEn: "ㄱ plus ㅎ becomes [ㅋ]." },
          { speaker: "가", ko: "오늘 행복해 보여요.", zh: "今天看起来很开心。", noteZh: "행복하다 + -해 보이다。", en: "You look happy today.", noteEn: "행복하다 becomes 행복해 보이다." },
          { speaker: "나", ko: "네, 고향 친구들을 만났거든요.", zh: "是的，因为见到了故乡朋友。", noteZh: "-거든요 说明理由。", en: "Yes, because I met friends from my hometown.", noteEn: "-거든요 gives a reason." },
          { speaker: "발음", ko: "천연 비누[처년 비누]", zh: "천연 비누 的发音：[처년 비누]", noteZh: "천연 的 ㄴ 会连到前面音节。", en: "천연 비누 is pronounced [처년 비누].", noteEn: "The ㄴ in 천연 links smoothly." },
          { speaker: "가", ko: "문화 센터의 천연 비누 만들기 수업을 듣고 싶어요.", zh: "我想上文化中心的天然肥皂制作课。", noteZh: "의 在口语中常弱读。", en: "I want to take the natural soap-making class at the culture center.", noteEn: "의 is often reduced in speech." },
          { speaker: "나", ko: "그럼 같이 신청할까요?", zh: "那一起申请好吗？", noteZh: "-(으)ㄹ까요? 用来提议一起做。", en: "Then shall we register together?", noteEn: "-(으)ㄹ까요? can suggest doing something together." }
        ],
        rolePlays: [
          {
            title: "발음 따라 읽기",
            promptZh: "跟读三组发音，再用 행복해 보여요 / 같이 신청할까요 各说一句。",
            answerKo: "오늘 행복해 보여요. 그럼 천연 비누 만들기 수업을 같이 신청할까요?",
            translations: { en: { title: "Repeat pronunciation", prompt: "Repeat the three pronunciation items, then make sentences with 행복해 보여요 and 같이 신청할까요." } }
          }
        ]
      }
    ],
    culture: {
      title: "문화가 있는 날",
      titleKo: "문화가 있는 날",
      titleZh: "有文化的日子",
      page: 200,
      source: "문화와 정보",
      summaryZh: "文章介绍韩国每月最后一周星期三的“문화가 있는 날”。这一天人们可以用折扣价或免费方式使用电影院、演出场、博物馆、美术馆、体育设施等，也能参加各地区有特色的文化项目。",
      summaryEn: "The article introduces Korea's Culture Day, held on the last Wednesday of every month. On this day, people can enjoy movie theaters, performance venues, museums, art museums, sports facilities, and local cultural programs at discounted prices or for free.",
      paragraphs: [
        {
          ko: "매달 마지막 주 수요일은 문화가 있는 날입니다. 문화가 있는 날에는 영화관, 공연장, 박물관, 미술관, 스포츠 시설 등 전국에 있는 문화 시설을 할인된 가격이나 무료로 즐길 수 있습니다.",
          zh: "每月最后一周星期三是“有文化的日子”。在有文化的日子里，可以以折扣价格或免费方式享受全国各地的电影院、演出场、博物馆、美术馆、体育设施等文化设施。",
          noteZh: "문화 시설 指能进行文化活动的设施；할인된 가격이나 무료로 是“以折扣价或免费”。",
          en: "The last Wednesday of every month is Culture Day. On Culture Day, people can enjoy cultural facilities across the country, such as movie theaters, performance venues, museums, art museums, and sports facilities, at discounted prices or for free.",
          noteEn: "문화 시설 means cultural facilities. 할인된 가격이나 무료로 means at a discounted price or for free."
        },
        {
          ko: "그리고 지역마다 특색 있는 프로그램이 있어서 한국의 다양한 문화를 경험할 수 있습니다. 또한 이날에는 밤에 문을 여는 문화 시설도 있습니다. 그래서 평소에 일 때문에 문화를 즐기지 못한 사람들은 이날 문화 시설을 이용합니다.",
          zh: "而且每个地区都有有特色的项目，所以可以体验韩国多样的文化。另外，这一天也有晚上开放的文化设施。因此，平时因为工作无法享受文化的人们会在这一天使用文化设施。",
          noteZh: "지역마다 表示“每个地区”；평소에 일 때문에 是说明无法平时享受文化的原因。",
          en: "Each region also has distinctive programs, so people can experience diverse Korean culture. Some cultural facilities open at night on this day. Therefore, people who usually cannot enjoy culture because of work use cultural facilities on this day.",
          noteEn: "지역마다 means in each region. 평소에 일 때문에 explains why people cannot usually enjoy cultural activities."
        }
      ],
      keyTerms: [
        { ko: "문화가 있는 날", zh: "有文化的日子", en: "Culture Day" },
        { ko: "매달 마지막 주 수요일", zh: "每月最后一周星期三", en: "the last Wednesday of every month" },
        { ko: "영화관", zh: "电影院", en: "movie theater" },
        { ko: "공연장", zh: "演出场馆", en: "performance venue" },
        { ko: "박물관", zh: "博物馆", en: "museum" },
        { ko: "미술관", zh: "美术馆", en: "art museum" },
        { ko: "할인된 가격", zh: "折扣价", en: "discounted price" },
        { ko: "무료", zh: "免费", en: "free" },
        { ko: "특색 있는 프로그램", zh: "有特色的项目", en: "distinctive program" },
        { ko: "문화 시설", zh: "文化设施", en: "cultural facility" }
      ],
      questions: [
        {
          q: "문화가 있는 날은 언제예요?",
          zh: "有文化的日子是什么时候？",
          a: "매달 마지막 주 수요일이에요.",
          translations: { en: { translation: "When is Culture Day?", answer: "It is the last Wednesday of every month." } }
        },
        {
          q: "문화가 있는 날에는 무엇을 할 수 있어요?",
          zh: "在有文化的日子里可以做什么？",
          a: "영화관, 공연장, 박물관, 미술관, 스포츠 시설 같은 문화 시설을 할인된 가격이나 무료로 즐길 수 있어요.",
          translations: { en: { translation: "What can you do on Culture Day?", answer: "You can enjoy cultural facilities such as movie theaters, performance venues, museums, art museums, and sports facilities at a discounted price or for free." } }
        },
        {
          q: "여러분은 문화가 있는 날에 무엇을 하고 싶어요?",
          zh: "你想在有文化的日子做什么？",
          a: "저는 미술관에 가고 싶어요. 할인된 가격으로 전시를 볼 수 있기 때문이에요.",
          translations: { en: { translation: "What do you want to do on Culture Day?", answer: "I want to go to an art museum because I can see an exhibition at a discounted price." } }
        }
      ]
    },
    practice: [
      {
        type: "translation",
        title: "中文转韩文",
        prompt: "申请这门课怎么样？",
        answerKo: "이 수업을 신청하는 게 어때요?",
        explanationZh: "建议别人做某事用 V-는 게 어때요?。",
        translations: { en: { title: "Translate to Korean", prompt: "How about applying for this class?", explanation: "Use V-는 게 어때요? to suggest doing something." } }
      },
      {
        type: "pattern",
        title: "V-는 게 어때요?",
        prompt: "用“한국 요리를 배우다 / 요리 교실에 가다”给建议。",
        answerKo: "한국 요리를 배우고 싶으면 요리 교실에 가는 게 어때요?",
        explanationZh: "가다 接 -는 게 어때요，变成 가는 게 어때요。",
        translations: { en: { title: "Pattern: V-는 게 어때요?", prompt: "Use “learn Korean cooking / go to a cooking class” to give advice.", explanation: "가다 becomes 가는 게 어때요." } }
      },
      {
        type: "pattern",
        title: "A-아/어 보이다",
        prompt: "用“요가 수업 / 재미있다”说“瑜伽课看起来很有趣。”",
        answerKo: "요가 수업이 재미있어 보여요.",
        explanationZh: "재미있다 接 -어 보이다，变成 재미있어 보여요。",
        translations: { en: { title: "Pattern: A-아/어 보이다", prompt: "Use “yoga class / interesting” to say: The yoga class looks interesting.", explanation: "재미있다 becomes 재미있어 보여요." } }
      },
      {
        type: "reading",
        title: "阅读理解",
        prompt: "강좌 신청은 어떻게 해요?",
        answerKo: "방문 접수 또는 이메일 접수를 해요.",
        explanationZh: "阅读表格上方的 접수 방법 可以找到答案。",
        translations: { en: { title: "Reading check", prompt: "How do you apply for the course?", explanation: "Find the answer in 접수 방법 above the table." } }
      },
      {
        type: "culture",
        title: "文化理解",
        prompt: "문화가 있는 날은 언제예요?",
        answerKo: "매달 마지막 주 수요일이에요.",
        explanationZh: "文化文第一句直接给出时间。",
        translations: { en: { title: "Culture check", prompt: "When is Culture Day?", explanation: "The first sentence of the culture text gives the time." } }
      },
      {
        type: "speaking",
        title: "课程建议",
        prompt: "朋友说想学一门文化中心课程。用韩语推荐一门课并说明理由。",
        answerKo: "운동을 좋아하니까 요가를 배우는 게 어때요? 요가 수업이 재미있어 보여요.",
        explanationZh: "先用 -니까 说明理由，再用 V-는 게 어때요? 给建议。",
        translations: { en: { title: "Class suggestion", prompt: "A friend wants to take a culture center class. Recommend one class in Korean and give the reason.", explanation: "Give the reason with -니까, then suggest with V-는 게 어때요?" } }
      }
    ]
  };

  window.lessonGuideL2LessonChunks ||= {};
  window.lessonGuideL2LessonChunks[lesson.id] = lesson;
})();
