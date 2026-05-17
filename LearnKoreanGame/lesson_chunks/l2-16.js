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
    "固有名词": "proper noun",
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
    id: "l2-16",
    number: 16,
    titleKo: "그 행사에는 가족이나 친구를 데려가도 되거든요",
    titleZh: "那个活动可以带家人或朋友去",
    pages: "172-181",
    status: "refined",
    progress: {
      vocabulary: "refined-p172-p181",
      dialogue: "refined-p175-p181",
      culture: "reviewed-p180",
      practice: "refined-p175-p181"
    },
    vocabularySources: [
      { page: 172, label: "단원 제목", note: "课题句、活动邀请和带人参加表达" },
      { page: 174, label: "어휘와 문법 1", note: "活动海报、参加信息和体验项目词汇" },
      { page: 175, label: "문법 1", note: "V-(으)ㄹ 名词修饰和旅行计划练习" },
      { page: 176, label: "어휘와 문법 2", note: "公告栏、居民通知、招募、失物和招聘表达" },
      { page: 177, label: "문법 2", note: "A/V-거든요 理由说明和口语练习" },
      { page: 178, label: "말하기와 듣기", note: "邀请朋友参加活动、听力问题和替换练习" },
      { page: 179, label: "읽기와 쓰기", note: "한가위 외국인 축제 阅读、海报信息和写作提示" },
      { page: 180, label: "문화와 정보", note: "세계인의 날 原文、翻译、关键词和问题" },
      { page: 181, label: "발음/배운 어휘 확인", note: "걷기 发音练习和本课词汇复习" }
    ],
    goals: [
      "能够读懂活动海报中的日期、对象、参加费、准备物、地点和咨询信息。",
      "能够用 V-(으)ㄹ 修饰名词，说明将要做的事、计划或对象。",
      "能够用 A/V-거든요 补充说明理由或背景。",
      "能够读懂公告栏上的居民通知、会员招募、失物和招聘信息。",
      "能够介绍 세계인의 날，并说出自己想参加的活动。"
    ],
    grammar: [
      {
        pattern: "V-(으)ㄹ N",
        zh: "将要……的名词；会……的名词",
        guide: "动词放在名词前，表示未来会做的动作、计划、意图或推测。有收音多用 -을，没有收音多用 -ㄹ。",
        examples: [
          { ko: "세계인의 날 행사에 참가할 사람 있어요?", zh: "有人要参加世界人的日活动吗？" },
          { ko: "21일 11시에 갈 곳은 제주박물관이에요.", zh: "21日11点要去的地方是济州博物馆。" },
          { ko: "고향에 갈 때 가족에게 줄 선물을 샀어요.", zh: "回故乡时买了要给家人的礼物。" }
        ],
        translations: {
          en: {
            meaning: "a noun modified by a future action",
            guide: "Use V-(으)ㄹ before a noun to describe a future action, plan, intention, or guess. Use -을 after many final consonants and -ㄹ after a vowel."
          }
        }
      },
      {
        pattern: "A/V-거든요",
        zh: "因为……呢；是因为……",
        guide: "口语中用来补充说明理由或对方可能不知道的背景。语气比直接说 -아/어서 更像是在解释情况。",
        examples: [
          { ko: "오늘 엘리베이터 정기 점검을 해서 엘리베이터를 이용할 수 없거든요.", zh: "今天电梯定期检查，所以不能使用电梯。" },
          { ko: "부모님이 한국에 오시거든요.", zh: "因为父母要来韩国。" },
          { ko: "제가 매운 음식을 좋아하거든요.", zh: "因为我喜欢辣的食物。" }
        ],
        translations: {
          en: {
            meaning: "you see, because ...; the thing is ...",
            guide: "Use A/V-거든요 in conversation to add a reason or background information the listener may not know."
          }
        }
      }
    ],
    vocabulary: [
      vocab("행사", "活动；仪式", "名词", 172, "단원 제목", "그 행사에는 가족이나 친구를 데려가도 돼요.", "那个活动可以带家人或朋友去。", "event", "You can bring family or friends to that event.", [["collocation", "행사에 참가하다"], ["collocation", "행사를 개최하다"]]),
      vocab("가족이나 친구", "家人或朋友", "名词短语", 172, "단원 제목", "가족이나 친구를 데려가도 돼요.", "可以带家人或朋友去。", "family or friends", "You may bring family or friends.", [["form", "N이나 N = N或N", "N이나 N = N or N"], ["collocation", "가족이나 친구를 데려가다"]]),
      vocab("데려가도 되다", "可以带去", "动词短语", 172, "단원 제목", "아이를 행사에 데려가도 돼요?", "可以带孩子去活动吗？", "may take someone along", "May I take my child to the event?", [["form", "데려가다 + -아도 되다 -> 데려가도 되다"], ["pitfall", "带人用 데려가다，带物品多用 가져가다。", "Use 데려가다 for people; use 가져가다 more often for things."]]),

      vocab("포스터", "海报", "名词", 174, "어휘와 문법 1", "포스터를 보고 축제에 대해 이야기해 보세요.", "请看海报谈谈庆典。", "poster", "Look at the poster and talk about the festival.", [["collocation", "포스터를 보다"]]),
      vocab("축제", "庆典；节日活动", "名词", 174, "어휘와 문법 1", "상암 월드컵 경기장에서 축제를 해요.", "在上岩世界杯体育场举办庆典。", "festival", "A festival is held at Sangam World Cup Stadium.", [["collocation", "축제를 하다"], ["collocation", "축제에 참가하다"]]),
      vocab("한마음 걷기 축제", "同心徒步庆典", "固有名词", 174, "어휘와 문법 1", "다음 주에 한마음 걷기 축제에 같이 갈래요?", "下周一起去同心徒步庆典吗？", "Hanmaeum Walking Festival", "Shall we go to the Hanmaeum Walking Festival next week?", [["collocation", "한마음 걷기 축제에 가다"], ["pitfall", "걷기 是“走路/徒步”名词化，不是 걸기。", "걷기 is the noun form of walking, not 걸기."]]),
      vocab("대상", "对象；参加对象", "名词", 174, "어휘와 문법 1", "이 행사의 대상은 내ㆍ외국인이에요.", "这个活动的对象是本国人和外国人。", "target participants", "The target participants are Koreans and foreigners.", [["collocation", "행사 대상"]]),
      vocab("내ㆍ외국인", "本国人和外国人", "名词", 174, "어휘와 문법 1", "내ㆍ외국인 모두 참가할 수 있어요.", "本国人和外国人都可以参加。", "Koreans and foreigners", "Both Koreans and foreigners can participate.", [["form", "내국인 + 외국인 -> 내ㆍ외국인"], ["collocation", "내ㆍ외국인 모두"]]),
      vocab("참가비", "参加费", "名词", 174, "어휘와 문법 1", "참가비는 무료예요.", "参加费是免费的。", "participation fee", "The participation fee is free.", [["collocation", "참가비를 내다"], ["collocation", "참가비가 무료이다"]]),
      vocab("무료", "免费", "名词", 174, "어휘와 문법 1", "이 행사는 무료예요.", "这个活动免费。", "free of charge", "This event is free.", [["pitfall", "무료 是免费，유료 是收费。", "무료 means free; 유료 means paid."]]),
      vocab("기념품", "纪念品", "名词", 174, "어휘와 문법 1", "참가자에게 기념품을 줘요.", "给参加者纪念品。", "souvenir", "They give souvenirs to participants.", [["collocation", "기념품을 받다"], ["collocation", "기념품을 제공하다"]]),
      vocab("준비물", "准备物品", "名词", 174, "어휘와 문법 1", "준비물은 운동화하고 물이에요.", "要准备的是运动鞋和水。", "things to prepare", "The things to prepare are sneakers and water.", [["collocation", "준비물을 챙기다"]]),
      vocab("운동화", "运动鞋", "名词", 174, "어휘와 문법 1", "걷기 축제에 갈 때 운동화를 신으세요.", "去徒步庆典时请穿运动鞋。", "sneakers", "Wear sneakers when going to the walking festival.", [["collocation", "운동화를 신다"]]),
      vocab("문화 공연", "文化演出", "名词短语", 174, "어휘와 문법 1", "문화 공연도 볼 수 있어요.", "也可以看文化演出。", "cultural performance", "You can also watch a cultural performance.", [["collocation", "문화 공연을 보다"]]),
      vocab("가수", "歌手", "名词", 174, "어휘와 문법 1", "가수 공연이 있어요.", "有歌手演出。", "singer", "There is a singer performance.", [["collocation", "가수 공연"]]),
      vocab("댄스팀", "舞蹈队", "名词", 174, "어휘와 문법 1", "댄스팀 공연을 볼 수 있어요.", "可以看舞蹈队演出。", "dance team", "You can watch a dance-team performance.", [["collocation", "댄스팀 공연"]]),
      vocab("체험거리", "体验项目", "名词", 174, "어휘와 문법 1", "컵, 부채 만들기 같은 체험거리가 있어요.", "有制作杯子、扇子这样的体验项目。", "hands-on activities", "There are hands-on activities such as making cups and fans.", [["collocation", "체험거리가 있다"]]),
      vocab("부채", "扇子", "名词", 174, "어휘와 문법 1", "부채 만들기 체험을 해요.", "体验制作扇子。", "fan", "We do a fan-making activity.", [["collocation", "부채를 만들다"]]),
      vocab("장소", "地点；场所", "名词", 174, "어휘와 문법 1", "행사 장소는 상암동 월드컵 경기장이에요.", "活动地点是上岩洞世界杯体育场。", "place; venue", "The event venue is Sangam World Cup Stadium.", [["collocation", "행사 장소"]]),
      vocab("상암동 월드컵 경기장", "上岩洞世界杯体育场", "固有名词", 174, "어휘와 문법 1", "상암동 월드컵 경기장에서 축제를 해요.", "在上岩洞世界杯体育场举办庆典。", "Sangam World Cup Stadium", "The festival is held at Sangam World Cup Stadium.", [["collocation", "월드컵 경기장에서 열리다"]]),
      vocab("오시는 길", "交通路线；来访路线", "名词短语", 174, "어휘와 문법 1", "포스터에서 오시는 길을 확인하세요.", "请在海报上确认交通路线。", "directions; how to get there", "Check the directions on the poster.", [["collocation", "오시는 길을 확인하다"], ["pitfall", "오시는 是 오다 的敬语形式，公告中常见。", "오시는 is the honorific form of 오다 and is common in notices."]]),
      vocab("신청 및 문의", "报名及咨询", "名词短语", 174, "어휘와 문법 1", "신청 및 문의는 홈페이지에서 하세요.", "报名及咨询请在网页上进行。", "registration and inquiries", "Please register and make inquiries through the homepage.", [["collocation", "신청 및 문의"]]),
      vocab("주최", "主办", "名词", 174, "어휘와 문법 1", "주최는 서울출입국ㆍ외국인청이에요.", "主办方是首尔出入境外国人厅。", "host; organizer", "The organizer is the Seoul Immigration Office.", [["collocation", "행사 주최"]]),
      vocab("후원", "赞助；后援", "名词", 174, "어휘와 문법 1", "후원은 법무부예요.", "后援方是法务部。", "sponsor; support", "The sponsor is the Ministry of Justice.", [["collocation", "행사 후원"]]),
      vocab("참가하다", "参加", "动词", 174, "어휘와 문법 1", "이 행사에는 한국 사람, 외국 사람 모두 참가할 수 있어요.", "这个活动韩国人和外国人都可以参加。", "to participate", "Both Koreans and foreigners can participate in this event.", [["collocation", "행사에 참가하다"]]),
      vocab("어린이날 행사", "儿童节活动", "名词短语", 174, "어휘와 문법 1", "아이와 함께 어린이날 행사에 참가했어요.", "和孩子一起参加了儿童节活动。", "Children's Day event", "I participated in a Children's Day event with my child.", [["collocation", "어린이날 행사에 참가하다"]]),

      vocab("참가할 사람", "要参加的人", "名词短语", 175, "문법 1", "세계인의 날 행사에 참가할 사람 있어요?", "有人要参加世界人的日活动吗？", "people who will participate", "Is there anyone who will participate in Together Day?", [["form", "참가하다 + -ㄹ 사람 -> 참가할 사람"]]),
      vocab("들을 수업", "要听的课", "名词短语", 175, "문법 1", "다음 학기에 들을 수업을 정했어요.", "决定了下学期要听的课。", "a class one will take", "I chose the class I will take next semester.", [["form", "듣다 + -을 -> 들을"], ["pitfall", "듣다 的修饰形是 들을，不是 듣을。", "듣다 becomes 들을, not 듣을."]]),
      vocab("할 생각", "打算做的想法", "名词短语", 175, "문법 1", "아르바이트를 할 생각이에요.", "我打算做兼职。", "intention to do", "I am thinking of doing a part-time job.", [["collocation", "V-(으)ㄹ 생각이다"]]),
      vocab("살 옷", "要买的衣服", "名词短语", 175, "문법 1", "살 옷이 많아요.", "要买的衣服很多。", "clothes to buy", "There are many clothes to buy.", [["form", "사다 + -ㄹ -> 살"]]),
      vocab("갈 곳", "要去的地方", "名词短语", 175, "문법 1", "21일 11시에 갈 곳은 제주박물관이에요.", "21日11点要去的地方是济州博物馆。", "place to go", "The place to go at 11 on the 21st is Jeju Museum.", [["form", "가다 + -ㄹ 곳 -> 갈 곳"]]),
      vocab("제주공항", "济州机场", "固有名词", 175, "문법 1", "10시에 제주공항에 도착해요.", "10点到达济州机场。", "Jeju Airport", "We arrive at Jeju Airport at 10.", [["collocation", "제주공항에 도착하다"]]),
      vocab("제주박물관", "济州博物馆", "固有名词", 175, "문법 1", "제주박물관에 갈 거예요.", "要去济州博物馆。", "Jeju Museum", "We will go to Jeju Museum.", [["collocation", "제주박물관에 가다"]]),
      vocab("고기국수", "肉汤面", "名词", 175, "문법 1", "점심으로 고기국수를 먹을 거예요.", "午饭要吃肉汤面。", "pork noodle soup", "We will eat pork noodle soup for lunch.", [["collocation", "고기국수를 먹다"]]),
      vocab("동문시장", "东门市场", "固有名词", 175, "문법 1", "동문시장을 구경할 거예요.", "要逛东门市场。", "Dongmun Market", "We will look around Dongmun Market.", [["collocation", "시장을 구경하다"]]),
      vocab("한라산 일출", "汉拿山日出", "名词短语", 175, "문법 1", "한라산 일출을 볼 거예요.", "要看汉拿山日出。", "sunrise on Hallasan", "We will see the sunrise on Hallasan.", [["collocation", "일출을 보다"]]),
      vocab("해물된장찌개", "海鲜大酱汤", "名词", 175, "문법 1", "점심으로 해물된장찌개를 먹어요.", "午饭吃海鲜大酱汤。", "seafood soybean-paste stew", "We eat seafood soybean-paste stew for lunch.", [["collocation", "찌개를 먹다"]]),
      vocab("생일 파티", "生日派对", "名词短语", 175, "문법 1", "생일 파티에 초대할 친구가 있어요.", "有要邀请到生日派对的朋友。", "birthday party", "There are friends to invite to the birthday party.", [["collocation", "생일 파티에 초대하다"]]),
      vocab("동료", "同事", "名词", 175, "문법 1", "동료를 생일 파티에 초대했어요.", "邀请同事来生日派对了。", "coworker; colleague", "I invited a coworker to the birthday party.", [["collocation", "회사 동료"]]),
      vocab("줄 선물", "要给的礼物", "名词短语", 175, "문법 1", "고향에 갈 때 가족에게 줄 선물을 샀어요.", "回故乡时买了要给家人的礼物。", "gift to give", "I bought a gift to give my family when I go home.", [["form", "주다 + -ㄹ -> 줄"], ["collocation", "선물을 주다"]]),

      vocab("게시판", "公告栏", "名词", 176, "어휘와 문법 2", "게시판에서 여러 소식을 볼 수 있어요.", "可以在公告栏看到各种消息。", "bulletin board", "You can see various notices on the bulletin board.", [["collocation", "게시판에 붙이다"], ["collocation", "게시판에서 보다"]]),
      vocab("주민 모임", "居民会议；居民聚会", "名词短语", 176, "어휘와 문법 2", "주민 모임이 열려요.", "召开居民会议。", "residents' meeting", "A residents' meeting is held.", [["collocation", "주민 모임이 열리다"]]),
      vocab("열리다", "举行；召开", "动词", 176, "어휘와 문법 2", "다음 주에 행사가 열려요.", "下周举行活动。", "to be held", "An event will be held next week.", [["collocation", "행사가 열리다"], ["pitfall", "열다 是“打开/举办”，열리다 是“被举办/举行”。", "열다 means open/hold; 열리다 means be held."]]),
      vocab("엘리베이터", "电梯", "名词", 176, "어휘와 문법 2", "오늘은 엘리베이터를 이용할 수 없어요.", "今天不能使用电梯。", "elevator", "You cannot use the elevator today.", [["collocation", "엘리베이터를 이용하다"]]),
      vocab("이용할 수 없다", "不能使用", "动词短语", 176, "어휘와 문법 2", "정기 점검 때문에 엘리베이터를 이용할 수 없어요.", "因为定期检查不能使用电梯。", "cannot use", "The elevator cannot be used because of regular inspection.", [["form", "이용하다 + -ㄹ 수 없다 -> 이용할 수 없다"]]),
      vocab("정기 점검", "定期检查", "名词短语", 176, "어휘와 문법 2", "엘리베이터 정기 점검이 있어요.", "有电梯定期检查。", "regular inspection", "There is a regular elevator inspection.", [["collocation", "정기 점검을 하다"]]),
      vocab("단수가 되다", "停水", "动词短语", 176, "어휘와 문법 2", "주변 공사로 인해 단수가 될 예정입니다.", "因周边施工预计会停水。", "water service will be cut off", "Water service will be cut off due to nearby construction.", [["collocation", "단수가 되다"], ["pitfall", "단수 是停水，정전 是停电。", "단수 is a water outage; 정전 is a power outage."]]),
      vocab("단수 예정", "停水预定", "名词短语", 176, "어휘와 문법 2", "게시판에 단수 예정 안내문이 있어요.", "公告栏上有停水预定通知。", "scheduled water outage", "There is a scheduled water-outage notice on the bulletin board.", [["collocation", "단수 예정 안내"]]),
      vocab("주변 공사", "周边施工", "名词短语", 176, "어휘와 문법 2", "주변 공사로 인해 길이 복잡해요.", "因为周边施工，路很复杂。", "nearby construction", "The road is complicated due to nearby construction.", [["collocation", "주변 공사로 인해"]]),
      vocab("불편을 드리다", "给您带来不便", "动词短语", 176, "어휘와 문법 2", "주민 여러분께 불편을 드려 죄송합니다.", "给各位居民带来不便，非常抱歉。", "to cause inconvenience", "We apologize for causing inconvenience to residents.", [["collocation", "불편을 드려 죄송합니다"], ["pitfall", "公告里常用 드리다 表示客气。", "Notices often use 드리다 to sound polite."]]),
      vocab("동호회", "兴趣小组；同好会", "名词", 176, "어휘와 문법 2", "축구 동호회에서 회원을 모집해요.", "足球同好会招募会员。", "club; interest group", "The soccer club is recruiting members.", [["collocation", "동호회에 가입하다"], ["collocation", "동호회 회원"]]),
      vocab("회원을 모집하다", "招募会员", "动词短语", 176, "어휘와 문법 2", "축구 동호회에서 회원을 모집해요.", "足球同好会招募会员。", "to recruit members", "The soccer club is recruiting members.", [["collocation", "회원을 모집하다"]]),
      vocab("잃어버린 물건", "丢失的物品", "名词短语", 176, "어휘와 문법 2", "잃어버린 물건을 찾고 있어요.", "正在找丢失的物品。", "lost item", "I am looking for a lost item.", [["form", "잃어버리다 + -ㄴ -> 잃어버린"], ["collocation", "잃어버린 물건을 찾다"]]),
      vocab("지갑", "钱包", "名词", 176, "어휘와 문법 2", "검은색 지갑을 잃어버렸어요.", "丢了黑色钱包。", "wallet", "I lost a black wallet.", [["collocation", "지갑을 잃어버리다"]]),
      vocab("현금", "现金", "名词", 176, "어휘와 문법 2", "지갑에 현금 5만 원이 들어 있어요.", "钱包里有5万韩元现金。", "cash", "There is 50,000 won in cash in the wallet.", [["collocation", "현금이 들어 있다"]]),
      vocab("연락처", "联系方式", "名词", 176, "어휘와 문법 2", "연락처를 남겨 주세요.", "请留下联系方式。", "contact information", "Please leave your contact information.", [["collocation", "연락처를 남기다"]]),
      vocab("직원을 뽑다", "招聘员工", "动词短语", 176, "어휘와 문법 2", "함께 일할 직원을 찾습니다.", "寻找一起工作的员工。", "to hire employees", "We are looking for employees to work together.", [["collocation", "직원을 뽑다"], ["pitfall", "뽑다 可表示“挑选/招聘”，不是只表示拔出。", "뽑다 can mean choose/hire, not only pull out."]]),
      vocab("채용 공고", "招聘公告", "名词短语", 176, "어휘와 문법 2", "게시판에 채용 공고가 붙어 있어요.", "公告栏上贴着招聘公告。", "job announcement", "A job announcement is posted on the bulletin board.", [["collocation", "채용 공고를 보다"]]),
      vocab("모집 분야", "招聘领域；招聘岗位", "名词短语", 176, "어휘와 문법 2", "모집 분야는 자동차 부품 조립이에요.", "招聘岗位是汽车零件组装。", "recruitment field", "The recruitment field is auto-parts assembly.", [["collocation", "모집 분야를 확인하다"]]),
      vocab("자동차 부품 조립", "汽车零件组装", "名词短语", 176, "어휘와 문법 2", "자동차 부품 조립 직원을 뽑아요.", "招聘汽车零件组装员工。", "auto-parts assembly", "They are hiring auto-parts assembly workers.", [["collocation", "부품을 조립하다"]]),
      vocab("근무 조건", "工作条件", "名词短语", 176, "어휘와 문법 2", "근무 조건은 월요일부터 토요일까지예요.", "工作条件是周一到周六。", "working conditions", "The working conditions are Monday through Saturday.", [["collocation", "근무 조건을 확인하다"]]),

      vocab("계단으로 올라가다", "走楼梯上去", "动词短语", 177, "문법 2", "왜 계단으로 올라가요?", "为什么走楼梯上去？", "to go up by stairs", "Why are you going up by stairs?", [["collocation", "계단으로 올라가다"]]),
      vocab("못 오다", "不能来", "动词短语", 177, "문법 2", "오늘 라흐만 씨가 회사에 못 와요.", "今天 Rahman 不能来公司。", "cannot come", "Rahman cannot come to work today.", [["form", "못 + V = 不能V", "못 + V = cannot V"]]),
      vocab("부모님", "父母；父母亲", "名词", 177, "문법 2", "부모님이 한국에 오시거든요.", "因为父母要来韩国。", "parents", "My parents are coming to Korea.", [["pitfall", "부모님 本身是敬称，常和 오시다/계시다 搭配。", "부모님 is honorific and often pairs with 오시다/계시다."]]),
      vocab("한국에 오시다", "来韩国（敬语）", "动词短语", 177, "문법 2", "부모님이 한국에 오시거든요.", "因为父母要来韩国。", "to come to Korea (honorific)", "My parents are coming to Korea.", [["form", "오다 -> 오시다"], ["collocation", "한국에 오시다"]]),
      vocab("이력서", "简历", "名词", 177, "문법 2", "이력서를 쓰고 있어요.", "正在写简历。", "resume; CV", "I am writing a resume.", [["collocation", "이력서를 쓰다"]]),
      vocab("구인 공고", "招聘公告", "名词短语", 177, "문법 2", "구인 공고를 봤거든요.", "因为看到了招聘公告。", "job posting", "I saw a job posting.", [["collocation", "구인 공고를 보다"]]),
      vocab("피곤하다", "累；疲惫", "形容词", 177, "문법 2", "아침에 일찍 일어나서 피곤해요.", "早上起得早，所以累。", "tired", "I am tired because I got up early.", [["collocation", "많이 피곤하다"]]),
      vocab("하루 종일", "一整天", "副词", 177, "문법 2", "하루 종일 걸었거든요.", "因为走了一整天。", "all day", "I walked all day.", [["collocation", "하루 종일 일하다"], ["collocation", "하루 종일 걷다"]]),
      vocab("매운 음식", "辣的食物", "名词短语", 177, "문법 2", "제가 매운 음식을 좋아하거든요.", "因为我喜欢辣的食物。", "spicy food", "I like spicy food.", [["collocation", "매운 음식을 좋아하다"]]),

      vocab("같이 갈래요?", "要一起去吗？", "句型表达", 178, "말하기와 듣기", "한마음 걷기 축제에 같이 갈래요?", "要一起去同心徒步庆典吗？", "Shall we go together?", "Shall we go to the Hanmaeum Walking Festival together?", [["form", "가다 + -(으)ㄹ래요? -> 갈래요?"], ["pitfall", "-(으)ㄹ래요? 是口语邀请/意愿表达，语气较亲近。", "-(으)ㄹ래요? is a casual spoken invitation or expression of willingness."]]),
      vocab("가족이나 친구를 데려가다", "带家人或朋友去", "动词短语", 178, "말하기와 듣기", "가족이나 친구를 데려가도 되거든요.", "因为可以带家人或朋友去。", "to bring family or friends", "You can bring family or friends.", [["collocation", "사람을 데려가다"]]),
      vocab("여러 사람들이 모이다", "很多人聚在一起", "动词短语", 178, "말하기와 듣기", "여러 사람들이 모여서 함께 걷는 거예요.", "很多人聚在一起一起走。", "many people gather", "Many people gather and walk together.", [["collocation", "사람들이 모이다"]]),
      vocab("함께 걷다", "一起走；一起徒步", "动词短语", 178, "말하기와 듣기", "여러 사람들이 함께 걸어요.", "很多人一起走。", "to walk together", "Many people walk together.", [["collocation", "함께 걷다"], ["form", "걷다 -> 걸어요/걸었어요", "걷다 -> 걸어요/걸었어요"]]),
      vocab("공연을 보다", "看演出", "动词短语", 178, "말하기와 듣기", "공연도 볼 수 있어요.", "也可以看演出。", "to watch a performance", "You can also watch a performance.", [["collocation", "공연을 보다"]]),
      vocab("특별히", "特别地；专门", "副词", 178, "말하기와 듣기", "특별히 준비할 건 없어요.", "没有特别要准备的东西。", "specially; particularly", "There is nothing special to prepare.", [["collocation", "특별히 준비하다"]]),
      vocab("준비할 것", "要准备的东西", "名词短语", 178, "말하기와 듣기", "특별히 준비할 건 없어요.", "没有特别要准备的东西。", "things to prepare", "There is nothing special to prepare.", [["form", "준비하다 + -ㄹ 것 -> 준비할 것"]]),
      vocab("도시락", "盒饭；便当", "名词", 178, "말하기와 듣기", "도시락은 거기서 줄 거예요.", "盒饭会在那里给。", "packed lunch", "They will give packed lunches there.", [["collocation", "도시락을 주다"], ["collocation", "도시락을 싸다"]]),
      vocab("마실 물", "喝的水", "名词短语", 178, "말하기와 듣기", "마실 물은 거기서 줄 거예요.", "喝的水会在那里给。", "water to drink", "They will give water to drink there.", [["form", "마시다 + -ㄹ -> 마실"]]),
      vocab("서로의 문화를 소개하다", "介绍彼此的文化", "动词短语", 178, "말하기와 듣기", "여러 나라 사람들이 서로의 문화를 소개해요.", "多个国家的人介绍彼此的文化。", "to introduce each other's cultures", "People from many countries introduce each other's cultures.", [["collocation", "문화를 소개하다"]]),
      vocab("무료 진료", "免费诊疗", "名词短语", 178, "말하기와 듣기", "이 행사의 프로그램이 아닌 것은 무료 진료예요.", "不是这个活动项目的是免费诊疗。", "free medical care", "Free medical care is not one of this event's programs.", [["collocation", "무료 진료를 받다"]]),
      vocab("고민 상담", "烦恼咨询", "名词短语", 178, "말하기와 듣기", "고민 상담 프로그램이 있어요.", "有烦恼咨询项目。", "counseling for concerns", "There is a counseling program for concerns.", [["collocation", "고민 상담을 하다"]]),
      vocab("전통 의상 체험", "传统服装体验", "名词短语", 178, "말하기와 듣기", "전통 의상 체험도 할 수 있어요.", "也可以体验传统服装。", "traditional costume experience", "You can also try a traditional costume experience.", [["collocation", "전통 의상 체험을 하다"]]),

      vocab("한가위", "中秋；秋夕", "名词", 179, "읽기와 쓰기", "한가위 외국인 축제를 개최합니다.", "举办中秋外国人庆典。", "Chuseok; Korean harvest holiday", "They hold a Chuseok festival for foreigners.", [["collocation", "한가위 축제"], ["pitfall", "한가위 是 추석 的固有词表达。", "한가위 is a native Korean expression for Chuseok."]]),
      vocab("외국인 센터", "外国人中心", "名词短语", 179, "읽기와 쓰기", "외국인 센터에서 축제를 개최합니다.", "外国人中心举办庆典。", "foreign residents center", "The foreign residents center holds a festival.", [["collocation", "외국인 센터 홈페이지"]]),
      vocab("개최하다", "举办；召开", "动词", 179, "읽기와 쓰기", "한가위 외국인 축제를 개최합니다.", "举办中秋外国人庆典。", "to hold; to host", "They hold a Chuseok festival for foreigners.", [["collocation", "행사를 개최하다"]]),
      vocab("송편 만들기", "制作松饼", "名词短语", 179, "읽기와 쓰기", "송편 만들기 행사가 있어요.", "有制作松饼的活动。", "songpyeon-making", "There is a songpyeon-making event.", [["collocation", "송편을 만들다"]]),
      vocab("케이팝 노래 대회", "K-pop 歌唱比赛", "名词短语", 179, "읽기와 쓰기", "외국인 케이팝 노래 대회가 있어요.", "有外国人 K-pop 歌唱比赛。", "K-pop singing contest", "There is a K-pop singing contest for foreigners.", [["collocation", "노래 대회에 참가하다"]]),
      vocab("한국어 퀴즈 대회", "韩国语问答比赛", "名词短语", 179, "읽기와 쓰기", "한국어 퀴즈 대회에 참가할 수 있어요.", "可以参加韩国语问答比赛。", "Korean quiz contest", "You can participate in the Korean quiz contest.", [["collocation", "퀴즈 대회에 참가하다"]]),
      vocab("국내에 거주하다", "居住在韩国国内", "动词短语", 179, "읽기와 쓰기", "국내에 거주하는 외국인이면 누구나 참여 가능합니다.", "如果是居住在韩国国内的外国人，任何人都可以参加。", "to reside in Korea", "Any foreigner residing in Korea can participate.", [["collocation", "국내에 거주하다"]]),
      vocab("누구나", "任何人都", "副词", 179, "읽기와 쓰기", "누구나 참여 가능합니다.", "任何人都可以参加。", "anyone", "Anyone can participate.", [["collocation", "누구나 참여하다"]]),
      vocab("참여 가능하다", "可以参与", "动词短语", 179, "읽기와 쓰기", "외국인이면 누구나 참여 가능합니다.", "如果是外国人，任何人都可以参与。", "can participate", "Any foreigner can participate.", [["form", "참여 + 가능하다"], ["pitfall", "참가하다 和 참여하다 都是参加；公告里 참여 가능하다 很常见。", "Both 참가하다 and 참여하다 mean participate; 참여 가능하다 is common in notices."]]),
      vocab("이번 달 말까지", "到这个月底为止", "名词短语", 179, "읽기와 쓰기", "이번 달 말까지 신청하시면 됩니다.", "请在这个月底前申请。", "by the end of this month", "Please apply by the end of this month.", [["collocation", "이번 달 말까지 신청하다"]]),
      vocab("홈페이지", "主页；官网", "名词", 179, "읽기와 쓰기", "외국인 센터 홈페이지에서 신청하세요.", "请在外国人中心官网申请。", "homepage; website", "Apply on the foreign residents center website.", [["collocation", "홈페이지에서 신청하다"]]),
      vocab("대강당", "大礼堂", "名词", 179, "읽기와 쓰기", "장소는 외국인 센터 대강당이에요.", "地点是外国人中心大礼堂。", "auditorium", "The place is the foreign residents center auditorium.", [["collocation", "대강당에서 열리다"]]),
      vocab("참가 신청 기간", "参加申请期间", "名词短语", 179, "읽기와 쓰기", "참가 신청 기간을 확인하세요.", "请确认参加申请期间。", "application period", "Check the application period.", [["collocation", "신청 기간을 확인하다"]]),
      vocab("신청 방법", "申请方法", "名词短语", 179, "읽기와 쓰기", "신청 방법은 홈페이지 신청이에요.", "申请方法是在官网申请。", "application method", "The application method is applying on the homepage.", [["collocation", "신청 방법을 확인하다"]]),
      vocab("사무국", "事务局；办公室", "名词", 179, "읽기와 쓰기", "행사 문의는 사무국으로 하세요.", "活动咨询请联系事务局。", "secretariat; office", "Please contact the office for event inquiries.", [["collocation", "사무국에 문의하다"]]),

      vocab("세계인의 날", "世界人的日", "固有名词", 180, "문화와 정보", "매년 5월 20일은 세계인의 날이에요.", "每年5月20日是世界人的日。", "Together Day", "May 20 every year is Together Day.", [["collocation", "세계인의 날 행사"], ["pitfall", "这里是韩国法定纪念日名称，可保留韩语理解。", "This is the name of a Korean commemorative day, so it is useful to recognize it in Korean."]]),
      vocab("이민자", "移民者", "名词", 180, "문화와 정보", "한국에 사는 이민자가 점점 늘어나고 있어요.", "住在韩国的移民者正在逐渐增加。", "immigrant", "The number of immigrants living in Korea is gradually increasing.", [["collocation", "한국에 사는 이민자"]]),
      vocab("점점 늘어나다", "逐渐增加", "动词短语", 180, "문화와 정보", "이민자가 점점 늘어나고 있어요.", "移民者正在逐渐增加。", "to gradually increase", "The number of immigrants is gradually increasing.", [["collocation", "수가 점점 늘어나다"]]),
      vocab("어울리다", "相处；融合", "动词", 180, "문화와 정보", "이민자와 한국인이 함께 어울려요.", "移民者和韩国人一起相处。", "to get along; to mingle", "Immigrants and Koreans mingle together.", [["collocation", "함께 어울리다"]]),
      vocab("소통하다", "沟通；交流", "动词", 180, "문화와 정보", "서로 소통하는 장이 필요했어요.", "需要彼此交流的场所。", "to communicate", "A place to communicate with one another was needed.", [["collocation", "서로 소통하다"]]),
      vocab("장이 필요하다", "需要场所；需要平台", "名词短语", 180, "문화와 정보", "함께 어울리고 소통하는 장이 필요했습니다.", "需要一起相处和沟通的场所。", "a space is needed", "A space to mingle and communicate was needed.", [["pitfall", "这里的 장 不是市场，而是“场/平台”。", "Here 장 means a space or setting, not a market."]]),
      vocab("지정하다", "指定", "动词", 180, "문화와 정보", "5월 20일을 세계인의 날로 지정했습니다.", "把5月20日指定为世界人的日。", "to designate", "May 20 was designated as Together Day.", [["collocation", "N을/를 N(으)로 지정하다"]]),
      vocab("서로를 이해하다", "互相理解", "动词短语", 180, "문화와 정보", "모두 서로를 이해해야 해요.", "大家应该互相理解。", "to understand each other", "Everyone should understand each other.", [["collocation", "서로를 이해하다"]]),
      vocab("함께 잘 살아가다", "一起好好生活下去", "动词短语", 180, "문화와 정보", "함께 잘 살아가는 사회를 만들어요.", "创造一起好好生活的社会。", "to live well together", "We make a society where people live well together.", [["collocation", "함께 살아가다"]]),
      vocab("전시회", "展览会", "名词", 180, "문화와 정보", "세계인의 날에는 전시회가 열려요.", "世界人的日会举办展览会。", "exhibition", "Exhibitions are held on Together Day.", [["collocation", "전시회가 열리다"]]),
      vocab("세계 민속 공연", "世界民俗演出", "名词短语", 180, "문화와 정보", "세계 민속 공연도 개최됩니다.", "也会举办世界民俗演出。", "world folk performance", "World folk performances are also held.", [["collocation", "민속 공연을 보다"]]),
      vocab("사진 공모전", "摄影征集赛；摄影比赛", "名词短语", 180, "문화와 정보", "사진 공모전 등 여러 행사가 개최됩니다.", "摄影征集赛等多种活动会举办。", "photo contest", "Various events, including a photo contest, are held.", [["collocation", "사진 공모전이 열리다"]]),

      vocab("걷기", "走路；徒步", "发音表达", 181, "발음/배운 어휘 확인", "외국인 걷기 대회에 참가할 거예요?", "要参加外国人徒步大会吗？", "walking", "Will you participate in the foreigners' walking event?", [["form", "걷기[걷끼]"], ["pitfall", "教材发音标为 [걷끼]。", "The textbook gives the pronunciation as [걷끼]."]]),
      vocab("걷는 거", "走路这件事", "发音表达", 181, "발음/배운 어휘 확인", "참가자들이 함께 걷는 거예요.", "是参加者一起走路。", "the act of walking", "It is the participants walking together.", [["form", "걷는 거[건는 거]"], ["pitfall", "걷는 中 ㄷ 和 ㄴ 相连，读作 [건는]。", "In 걷는, ㄷ followed by ㄴ is pronounced [건는]."]]),
      vocab("걸었거든요", "因为走过了", "发音表达", 181, "발음/배운 어휘 확인", "하루 종일 걸었거든요.", "因为走了一整天。", "because I walked", "Because I walked all day.", [["form", "걷다 -> 걸었거든요[거러꺼든요]"], ["pitfall", "걷다 过去式是 걸었어요，不是 걷었어요。", "The past form of 걷다 is 걸었어요, not 걷었어요."]]),
      vocab("걷기 대회", "徒步大会", "名词短语", 181, "발음/배운 어휘 확인", "외국인 걷기 대회에 참가하려고 해요.", "我打算参加外国人徒步大会。", "walking event", "I plan to participate in the foreigners' walking event.", [["collocation", "걷기 대회에 참가하다"]]),
      vocab("참가자", "参加者", "名词", 181, "발음/배운 어휘 확인", "참가자들이 함께 걷는 거예요.", "是参加者一起走路。", "participant", "The participants walk together.", [["collocation", "참가자들이 모이다"]])
    ],
    dialogues: [
      {
        id: "dialogue-grammar-01",
        title: "참가할 사람 있어요?",
        focus: "V-(으)ㄹ N",
        page: 175,
        source: "문법 1",
        sceneZh: "用将来动作修饰名词，说明要参加的人、要去的地方或要给的礼物。",
        sceneKo: "앞으로 할 행동으로 명사를 꾸며 말해 보세요.",
        sceneEn: "Use a future action to modify a noun, such as a person who will participate or a place to go.",
        guideZh: "V-(으)ㄹ 放在名词前。ㄹ/을 的选择看动词词干有没有收音，듣다 变 들을，주다 变 줄。",
        guideEn: "Place V-(으)ㄹ before a noun. Choose -ㄹ or -을 based on the verb stem; 듣다 becomes 들을 and 주다 becomes 줄.",
        lines: [
          { speaker: "가", ko: "세계인의 날 행사에 참가할 사람 있어요?", zh: "有人要参加世界人的日活动吗？", noteZh: "참가할 사람 = 要参加的人。", en: "Is there anyone who will participate in Together Day?", noteEn: "참가할 사람 means a person who will participate." },
          { speaker: "나", ko: "네, 제가 참가할 거예요.", zh: "有，我会参加。", noteZh: "참가할 거예요 表示将来计划。", en: "Yes, I will participate.", noteEn: "참가할 거예요 expresses a future plan." },
          { speaker: "가", ko: "다음 학기에도 한국어 수업을 들을 거예요?", zh: "下学期也要听韩国语课吗？", noteZh: "듣다 的将来修饰形是 들을。", en: "Will you take Korean class next semester too?", noteEn: "듣다 becomes 들을 in the future modifier." },
          { speaker: "나", ko: "네, 수업을 들을 거예요.", zh: "是的，会听课。", noteZh: "들을 수업 可以说“要听的课”。", en: "Yes, I will take the class.", noteEn: "들을 수업 means a class one will take." },
          { speaker: "가", ko: "주말에 할 일이 있어요?", zh: "周末有要做的事吗？", noteZh: "할 일 = 要做的事。", en: "Do you have anything to do on the weekend?", noteEn: "할 일 means something to do." },
          { speaker: "나", ko: "고향에 갈 때 가족에게 줄 선물을 살 거예요.", zh: "回故乡时要买给家人的礼物。", noteZh: "줄 선물 = 要给的礼物。", en: "I will buy a gift to give my family when I go home.", noteEn: "줄 선물 means a gift to give." }
        ],
        roleplayZh: "用 갈 곳 / 먹을 음식 / 가족에게 줄 선물 各说一句。",
        roleplayKo: "갈 곳 / 먹을 음식 / 가족에게 줄 선물로 한 문장씩 말해 보세요.",
        roleplayEn: "Make one sentence each with 갈 곳, 먹을 음식, and 가족에게 줄 선물.",
        substitutions: ["갈 곳", "먹을 음식", "가족에게 줄 선물"]
      },
      {
        id: "dialogue-grammar-02",
        title: "엘리베이터를 이용할 수 없거든요",
        focus: "A/V-거든요",
        page: 177,
        source: "문법 2",
        sceneZh: "用 A/V-거든요 补充说明对方可能不知道的理由。",
        sceneKo: "상대가 모를 수 있는 이유를 A/V-거든요로 설명해 보세요.",
        sceneEn: "Use A/V-거든요 to add a reason the listener may not know.",
        guideZh: "거든요 常用于第二句，解释前一句的原因或背景。它比单纯陈述原因更像自然口语说明。",
        guideEn: "거든요 often appears in the second sentence to explain the reason or background of the first sentence.",
        lines: [
          { speaker: "가", ko: "왜 계단으로 올라가요?", zh: "为什么走楼梯上去？", noteZh: "왜 问理由。", en: "Why are you going up by stairs?", noteEn: "왜 asks for a reason." },
          { speaker: "나", ko: "오늘 엘리베이터 정기 점검을 해서 엘리베이터를 이용할 수 없거든요.", zh: "今天电梯定期检查，所以不能使用电梯。", noteZh: "거든요 说明背景。", en: "The elevator is being inspected today, so we cannot use it.", noteEn: "거든요 adds background." },
          { speaker: "가", ko: "오늘 라흐만 씨가 회사에 못 와요.", zh: "今天 Rahman 不能来公司。", noteZh: "못 와요 = 不能来。", en: "Rahman cannot come to work today.", noteEn: "못 와요 means cannot come." },
          { speaker: "나", ko: "부모님이 한국에 오시거든요.", zh: "因为父母要来韩国。", noteZh: "父母用 오시다 更礼貌。", en: "His parents are coming to Korea.", noteEn: "오시다 is honorific for parents." },
          { speaker: "가", ko: "이력서를 쓰고 있어요?", zh: "正在写简历吗？", noteZh: "이력서 = 简历。", en: "Are you writing a resume?", noteEn: "이력서 means resume." },
          { speaker: "나", ko: "네, 구인 공고를 봤거든요.", zh: "是的，因为看到了招聘公告。", noteZh: "看到公告后解释正在写简历的原因。", en: "Yes, I saw a job posting.", noteEn: "This explains why the speaker is writing a resume." }
        ],
        roleplayZh: "用 아침에 일찍 일어나다 / 주말에 근무하다 / 숙제가 많다 说明理由。",
        roleplayKo: "아침에 일찍 일어나다 / 주말에 근무하다 / 숙제가 많다로 이유를 말해 보세요.",
        roleplayEn: "Explain reasons with getting up early, working on the weekend, or having a lot of homework.",
        substitutions: ["아침에 일찍 일어났거든요", "주말에 근무하거든요", "숙제가 많거든요"]
      },
      {
        id: "dialogue-speaking-01",
        title: "한마음 걷기 축제에 같이 갈래요?",
        focus: "말하기와 듣기",
        page: 178,
        source: "말하기와 듣기",
        sceneZh: "邀请朋友参加活动，并说明活动内容和准备物。",
        sceneKo: "친구에게 행사 소식을 알려 주고 같이 가자고 말해 보세요.",
        sceneEn: "Invite a friend to an event and explain what people do there and what to prepare.",
        guideZh: "같이 갈래요? 是亲近语气的邀请。되거든요 用来补充“可以带人去”这个理由。",
        guideEn: "같이 갈래요? is a friendly invitation. 되거든요 adds the reason that people may bring family or friends.",
        lines: [
          { speaker: "이링", ko: "왕흔 씨, 다음 주에 한마음 걷기 축제에 같이 갈래요?", zh: "王흔，下周一起去同心徒步庆典吗？", noteZh: "같이 갈래요? 用于邀请。", en: "Wang Heun, shall we go to the Hanmaeum Walking Festival together next week?", noteEn: "같이 갈래요? is used for inviting someone." },
          { speaker: "이링", ko: "가족이나 친구를 데려가도 되거든요.", zh: "因为可以带家人或朋友去。", noteZh: "거든요 补充邀请的理由。", en: "You can bring family or friends, you see.", noteEn: "거든요 adds the reason for the invitation." },
          { speaker: "왕흔", ko: "거기 가서 뭐 하는 거예요?", zh: "去那里做什么？", noteZh: "뭐 하는 거예요? 问活动内容。", en: "What do people do there?", noteEn: "뭐 하는 거예요? asks what the event is about." },
          { speaker: "이링", ko: "여러 사람들이 모여서 함께 걷는 거예요.", zh: "很多人聚在一起一起走。", noteZh: "걷는 거예요 说明活动性质。", en: "Many people gather and walk together.", noteEn: "걷는 거예요 explains the nature of the event." },
          { speaker: "이링", ko: "또 공연도 볼 수 있고, 여러 가지 체험거리도 있어요.", zh: "而且还可以看演出，也有各种体验项目。", noteZh: "볼 수 있고 表示还可以做。", en: "You can also watch performances, and there are various hands-on activities.", noteEn: "볼 수 있고 adds another possible activity." },
          { speaker: "왕흔", ko: "재미있겠어요. 뭘 준비해야 돼요?", zh: "应该很有意思。要准备什么？", noteZh: "-겠어요 表示推测。", en: "That sounds fun. What should I prepare?", noteEn: "-겠어요 shows a guess or impression." },
          { speaker: "이링", ko: "특별히 준비할 건 없어요.", zh: "没有特别要准备的东西。", noteZh: "준비할 건 = 준비할 것은。", en: "There is nothing special to prepare.", noteEn: "준비할 건 is short for 준비할 것은." },
          { speaker: "이링", ko: "도시락하고 마실 물은 거기서 줄 거예요.", zh: "盒饭和喝的水会在那里提供。", noteZh: "마실 물 = 要喝的水。", en: "They will give packed lunches and water to drink there.", noteEn: "마실 물 means water to drink." }
        ],
        roleplayZh: "把活动换成 세계인의 날 행사，说明 여러 나라 사람들이 서로의 문화를 소개하다。",
        roleplayKo: "행사를 세계인의 날 행사로 바꿔서 말해 보세요.",
        roleplayEn: "Change the event to Together Day and explain that people from many countries introduce their cultures.",
        substitutions: ["세계인의 날 행사", "여러 나라 사람들이 모여서 서로의 문화를 소개하다"]
      },
      {
        id: "dialogue-reading-01",
        title: "한가위 외국인 축제",
        focus: "읽기와 쓰기",
        page: 179,
        source: "읽기와 쓰기",
        sceneZh: "阅读活动介绍和海报，找出参加对象、项目和报名方式。",
        sceneKo: "행사 소개와 포스터를 읽고 참가 대상, 프로그램, 신청 방법을 찾아보세요.",
        sceneEn: "Read an event notice and poster, then identify participants, programs, and how to apply.",
        guideZh: "阅读海报时先抓 일시、장소、참가 신청 기간、신청 방법、행사 문의。",
        guideEn: "When reading a poster, first find the date/time, place, application period, application method, and inquiries.",
        lines: [
          { speaker: "본문", ko: "외국인 센터에서는 추석날 저녁에 한가위 외국인 축제를 개최합니다.", zh: "外国人中心将在中秋当天晚上举办中秋外国人庆典。", noteZh: "개최합니다 是正式公告语气。", en: "The foreign residents center will hold a Chuseok festival for foreigners on the evening of Chuseok.", noteEn: "개최합니다 is a formal notice style." },
          { speaker: "본문", ko: "이번 축제에는 송편 만들기 행사, 외국인 케이팝 노래 대회, 한국어 퀴즈 대회 등 다양한 행사가 준비되어 있습니다.", zh: "这次庆典准备了制作松饼、外国人 K-pop 歌唱比赛、韩国语问答比赛等多种活动。", noteZh: "등 表示“等”。", en: "This festival includes various events such as songpyeon making, a K-pop singing contest for foreigners, and a Korean quiz contest.", noteEn: "등 means and so on." },
          { speaker: "본문", ko: "국내에 거주하는 외국인이면 누구나 참여 가능합니다.", zh: "如果是居住在韩国国内的外国人，任何人都可以参加。", noteZh: "누구나 = 任何人都。", en: "Any foreigner residing in Korea can participate.", noteEn: "누구나 means anyone." },
          { speaker: "본문", ko: "노래 대회, 퀴즈 대회에 참가할 사람들은 이번 달 말까지 외국인 센터 홈페이지에서 신청하시면 됩니다.", zh: "要参加歌唱比赛、问答比赛的人请在这个月底前到外国人中心官网申请。", noteZh: "신청하시면 됩니다 是礼貌的说明。", en: "People who want to join the singing or quiz contests should apply on the center website by the end of this month.", noteEn: "신청하시면 됩니다 is a polite instruction." },
          { speaker: "질문", ko: "이 행사에 참여할 수 있는 사람은 누구예요?", zh: "可以参加这个活动的人是谁？", noteZh: "从 참여 가능합니다 前一句找答案。", en: "Who can participate in this event?", noteEn: "Find the answer near 참여 가능합니다." },
          { speaker: "답", ko: "국내에 거주하는 외국인이면 누구나 참여할 수 있어요.", zh: "居住在韩国国内的外国人任何人都可以参加。", noteZh: "回答保留 누구나。", en: "Any foreigner residing in Korea can participate.", noteEn: "Keep 누구나 in the answer." },
          { speaker: "질문", ko: "노래 대회나 퀴즈 대회에 참가할 사람은 어떻게 해야 돼요?", zh: "要参加歌唱比赛或问答比赛的人应该怎么做？", noteZh: "问报名方式。", en: "What should people do if they want to join the singing or quiz contest?", noteEn: "This asks about the application method." },
          { speaker: "답", ko: "이번 달 말까지 외국인 센터 홈페이지에서 신청하면 돼요.", zh: "在这个月底前到外国人中心官网申请就可以。", noteZh: "하면 돼요 = 这样做就可以。", en: "They should apply on the foreign residents center website by the end of this month.", noteEn: "하면 돼요 means doing that is enough." }
        ],
        roleplayZh: "用 일시 / 장소 / 신청 방법 三项介绍一个活动海报。",
        roleplayKo: "일시 / 장소 / 신청 방법을 넣어서 행사 포스터를 소개해 보세요.",
        roleplayEn: "Introduce an event poster using date/time, place, and application method.",
        substitutions: ["일시", "장소", "신청 방법"]
      },
      {
        id: "dialogue-pronunciation-01",
        title: "걷기[걷끼]",
        focus: "발음",
        page: 181,
        source: "발음/배운 어휘 확인",
        sceneZh: "练习 걷기、걷는 거、걸었거든요 的自然发音。",
        sceneKo: "걷기, 걷는 거, 걸었거든요의 자연스러운 발음을 연습해 보세요.",
        sceneEn: "Practice the natural pronunciation of 걷기, 걷는 거, and 걸었거든요.",
        guideZh: "걷다 是 ㄷ 不规则动词，活用时会变成 걸어요/걸었어요；但 걷기 的教材发音是 [걷끼]。",
        guideEn: "걷다 is a ㄷ-irregular verb, so it becomes 걸어요/걸었어요 in conjugation. The textbook pronunciation of 걷기 is [걷끼].",
        lines: [
          { speaker: "발음", ko: "걷기[걷끼]", zh: "걷기 的发音：[걷끼]", noteZh: "名词化 걷기 后面紧音化。", en: "걷기 is pronounced [걷끼].", noteEn: "The noun form has tensification." },
          { speaker: "가", ko: "외국인 걷기 대회에 참가할 거예요?", zh: "要参加外国人徒步大会吗？", noteZh: "걷기 대회 = 徒步大会。", en: "Will you participate in the foreigners' walking event?", noteEn: "걷기 대회 means a walking event." },
          { speaker: "나", ko: "네, 참가하려고 해요.", zh: "是的，我打算参加。", noteZh: "-려고 해요 表示打算。", en: "Yes, I plan to participate.", noteEn: "-려고 해요 expresses intention." },
          { speaker: "발음", ko: "걷는 거[건는 거]", zh: "걷는 거 的发音：[건는 거]", noteZh: "ㄷ + ㄴ 连接时读作 [ㄴㄴ]。", en: "걷는 거 is pronounced [건는 거].", noteEn: "ㄷ followed by ㄴ is pronounced as [ㄴㄴ]." },
          { speaker: "가", ko: "한마음 걷기 축제가 뭐예요?", zh: "同心徒步庆典是什么？", noteZh: "问活动性质。", en: "What is the Hanmaeum Walking Festival?", noteEn: "This asks what the event is." },
          { speaker: "나", ko: "참가자들이 함께 걷는 거예요.", zh: "是参加者一起走路。", noteZh: "걷는 거예요 说明定义。", en: "It is an event where participants walk together.", noteEn: "걷는 거예요 gives the definition." },
          { speaker: "발음", ko: "걸었거든요[거러꺼든요]", zh: "걸었거든요 的发音：[거러꺼든요]", noteZh: "걷다 活用后是 걸었어요。", en: "걸었거든요 is pronounced [거러꺼든요].", noteEn: "걷다 becomes 걸었어요 when conjugated." },
          { speaker: "가", ko: "무슨 일이 있어요? 피곤한 것 같아요.", zh: "有什么事吗？看起来很累。", noteZh: "피곤한 것 같아요 = 看起来累。", en: "Is something wrong? You look tired.", noteEn: "피곤한 것 같아요 means you look tired." },
          { speaker: "나", ko: "하루 종일 걸었거든요.", zh: "因为走了一整天。", noteZh: "거든요 解释累的原因。", en: "I walked all day, you see.", noteEn: "거든요 explains why the speaker is tired." }
        ],
        roleplayZh: "跟读三组发音，再用 걷기 대회 / 걸었거든요 各说一句。",
        roleplayKo: "세 발음을 따라 읽고 걷기 대회 / 걸었거든요로 한 문장씩 말해 보세요.",
        roleplayEn: "Repeat the three pronunciation items, then make one sentence each with 걷기 대회 and 걸었거든요.",
        substitutions: ["걷기[걷끼]", "걷는 거[건는 거]", "걸었거든요[거러꺼든요]"]
      }
    ],
    culture: {
      title: "세계인의 날",
      titleZh: "世界人的日",
      page: 180,
      source: "문화와 정보",
      summaryZh: "文章介绍韩国把每年 5 月 20 日定为 세계인의 날，让在韩国生活的移民者和韩国人互相理解、一起生活。当天会举行祝贺演出、展览、体验活动、世界民俗演出、摄影征集赛等活动。",
      summaryEn: "The article explains that Korea designated May 20 as Together Day so immigrants living in Korea and Koreans can understand one another and live well together. Various events are held, including performances, exhibitions, hands-on activities, folk performances, and photo contests.",
      paragraphs: [
        {
          ko: "한국에 사는 이민자가 점점 늘어나면서 이민자와 한국인이 함께 어울리고 소통하는 장이 필요했습니다. 그래서 매년 5월 20일을 '세계인의 날(Together day)'로 지정했습니다.",
          zh: "随着住在韩国的移民者逐渐增加，韩国需要一个让移民者和韩国人一起相处、沟通的场所。因此，每年 5 月 20 日被指定为“世界人的日”。",
          noteZh: "장이 필요했습니다 中的 장 是“场所/平台”，不是市场。",
          en: "As the number of immigrants living in Korea gradually increased, a space was needed where immigrants and Koreans could mingle and communicate. Therefore, May 20 every year was designated as Together Day.",
          noteEn: "In 장이 필요했습니다, 장 means a space or setting, not a market."
        },
        {
          ko: "세계인의 날은 한국에 사는 이민자와 한국인이 모두 서로를 이해하고 함께 잘 살아가는 사회를 만들기 위한 날입니다. 세계인의 날에는 다양한 행사가 열립니다. 축하 공연, 전시회, 체험 행사, 세계 민속 공연, 사진 공모전 등 여러 행사가 개최됩니다.",
          zh: "世界人的日是为了让住在韩国的移民者和韩国人都能互相理解，并创造一起好好生活的社会而设立的日子。世界人的日会举行多种活动，包括祝贺演出、展览会、体验活动、世界民俗演出、摄影征集赛等。",
          noteZh: "만들기 위한 날입니다 表示“为了创造……而设立的日子”。",
          en: "Together Day is a day for creating a society where immigrants living in Korea and Koreans understand one another and live well together. Various events are held on Together Day, including celebratory performances, exhibitions, hands-on activities, world folk performances, and photo contests.",
          noteEn: "만들기 위한 날입니다 means a day for the purpose of creating something."
        }
      ],
      keyTerms: [
        { ko: "세계인의 날", zh: "世界人的日", en: "Together Day" },
        { ko: "이민자", zh: "移民者", en: "immigrant" },
        { ko: "소통", zh: "沟通", en: "communication" },
        { ko: "지정하다", zh: "指定", en: "to designate" },
        { ko: "축하 공연", zh: "祝贺演出", en: "celebratory performance" },
        { ko: "전시회", zh: "展览会", en: "exhibition" },
        { ko: "체험 행사", zh: "体验活动", en: "hands-on event" },
        { ko: "세계 민속 공연", zh: "世界民俗演出", en: "world folk performance" },
        { ko: "사진 공모전", zh: "摄影征集赛", en: "photo contest" }
      ],
      questions: [
        {
          q: "세계인의 날은 언제예요?",
          zh: "世界人的日是什么时候？",
          a: "매년 5월 20일이에요.",
          translations: { en: { translation: "When is Together Day?", answer: "It is May 20 every year." } }
        },
        {
          q: "세계인의 날에는 어떤 행사를 해요?",
          zh: "世界人的日会举行哪些活动？",
          a: "축하 공연, 전시회, 체험 행사, 세계 민속 공연, 사진 공모전 등을 해요.",
          translations: { en: { translation: "What events are held on Together Day?", answer: "Celebratory performances, exhibitions, hands-on activities, world folk performances, photo contests, and more are held." } }
        },
        {
          q: "여러분은 세계인의 날 행사에 참여한 적이 있어요?",
          zh: "你参加过世界人的日活动吗？",
          a: "아직 없어요. 하지만 기회가 있으면 가족이나 친구와 함께 참여하고 싶어요.",
          translations: { en: { translation: "Have you ever participated in a Together Day event?", answer: "Not yet. But if I have a chance, I would like to participate with family or friends." } }
        }
      ]
    },
    practice: [
      {
        type: "translation",
        title: "中文转韩文",
        prompt: "那个活动可以带家人或朋友去。",
        answerKo: "그 행사에는 가족이나 친구를 데려가도 돼요.",
        explanationZh: "带人去用 데려가다；“可以……”用 -아/어도 되다。",
        translations: { en: { title: "Translate to Korean", prompt: "You can bring family or friends to that event.", explanation: "Use 데려가다 for bringing people and -아/어도 되다 for permission." } }
      },
      {
        type: "pattern",
        title: "V-(으)ㄹ N",
        prompt: "用“제주박물관 / 가다”说“21日11点要去的地方是济州博物馆。”",
        answerKo: "21일 11시에 갈 곳은 제주박물관이에요.",
        explanationZh: "가다 + -ㄹ 곳 -> 갈 곳。",
        translations: { en: { title: "Pattern: V-(으)ㄹ N", prompt: "Use “제주박물관 / 가다” to say: The place to go at 11 on the 21st is Jeju Museum.", explanation: "가다 + -ㄹ 곳 becomes 갈 곳." } }
      },
      {
        type: "pattern",
        title: "A/V-거든요",
        prompt: "用“피곤하다 / 하루 종일 걷다”回答理由。",
        answerKo: "피곤해요. 하루 종일 걸었거든요.",
        explanationZh: "걷다 的过去式是 걸었어요；用 거든요 补充说明原因。",
        translations: { en: { title: "Pattern: A/V-거든요", prompt: "Answer with “tired / walk all day” and explain the reason.", explanation: "The past form of 걷다 is 걸었어요; use 거든요 to add the reason." } }
      },
      {
        type: "reading",
        title: "海报阅读",
        prompt: "노래 대회나 퀴즈 대회에 참가할 사람은 어떻게 해야 돼요?",
        answerKo: "이번 달 말까지 외국인 센터 홈페이지에서 신청하면 돼요.",
        explanationZh: "阅读海报时从 신청 방법 和 기간 找答案。",
        translations: { en: { title: "Poster reading", prompt: "What should people do if they want to join the singing or quiz contest?", explanation: "Find the answer from the application method and application period on the poster." } }
      },
      {
        type: "culture",
        title: "文化理解",
        prompt: "세계인의 날은 언제예요?",
        answerKo: "매년 5월 20일이에요.",
        explanationZh: "문화文章第一段明确写着 매년 5월 20일。",
        translations: { en: { title: "Culture check", prompt: "When is Together Day?", explanation: "The first culture paragraph states 매년 5월 20일." } }
      },
      {
        type: "speaking",
        title: "活动邀请",
        prompt: "用韩语邀请朋友去 한마음 걷기 축제，并说明可以带家人或朋友。",
        answerKo: "다음 주에 한마음 걷기 축제에 같이 갈래요? 가족이나 친구를 데려가도 되거든요.",
        explanationZh: "邀请用 같이 갈래요?，补充理由用 -거든요。",
        translations: { en: { title: "Event invitation", prompt: "Invite a friend to the Hanmaeum Walking Festival and explain that they can bring family or friends.", explanation: "Use 같이 갈래요? for the invitation and -거든요 to add the reason." } }
      }
    ]
  };

  window.lessonGuideL2LessonChunks ||= {};
  window.lessonGuideL2LessonChunks[lesson.id] = lesson;
})();
