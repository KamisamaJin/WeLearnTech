(() => {
  const makeTips = (tips) => (tips || []).map((text) => {
    const [type, body] = text.includes(":") ? text.split(/:(.+)/) : ["collocation", text];
    return { type, text: body.trim() };
  });

  const vocabulary = [
    ["생활 속의 과학", "生活中的科学", "名词短语", "science in daily life", "noun phrase", "생활 속의 과학은 우리의 삶을 편리하게 만들어요.", "生活中的科学让我们的生活更方便。", "Science in daily life makes our lives more convenient.", "36", "단원 제목", ["collocation:생활 속의 과학 기술"]],
    ["최신 제품", "最新产品", "名词短语", "latest product", "noun phrase", "최신 제품의 장점에 대해 이야기해 보세요.", "请谈谈最新产品的优点。", "Talk about the advantages of a latest product.", "36", "단원 제목", ["collocation:최신 제품의 장점"]],
    ["기술 발전", "技术发展", "名词短语", "technological development", "noun phrase", "기술 발전으로 생활이 많이 달라졌어요.", "由于技术发展，生活发生了很大变化。", "Life has changed a lot due to technological development.", "36", "단원 제목", ["collocation:기술 발전으로 인한 변화"]],
    ["생활의 변화", "生活变化", "名词短语", "changes in life", "noun phrase", "기술 발전으로 인한 생활의 변화를 비교해 보세요.", "请比较技术发展带来的生活变化。", "Compare lifestyle changes caused by technological development.", "36", "단원 제목", ["collocation:생활의 변화를 비교하다"]],
    ["무인 편의점", "无人便利店", "名词", "unmanned convenience store", "noun", "무인 편의점에서는 줄을 서지 않고 계산할 수 있어요.", "在无人便利店可以不用排队结账。", "At an unmanned convenience store, you can pay without standing in line.", "38", "도입", ["collocation:무인 편의점에 가다"]],
    ["길 찾기 앱", "导航应用", "名词", "navigation app", "noun", "길 찾기 앱이 있어서 여행할 때 편리해요.", "有导航应用，旅行时很方便。", "Navigation apps are convenient when traveling.", "38", "도입", ["collocation:길 찾기 앱을 사용하다"]],
    ["가상 현실 게임", "虚拟现实游戏", "名词", "virtual reality game", "noun", "가상 현실 게임은 실제로 하는 것 같은 경험을 줘요.", "虚拟现实游戏会带来像真的在做一样的体验。", "Virtual reality games give an experience that feels real.", "38", "도입", ["abbrev:VR 게임"]],
    ["자율 주행차", "自动驾驶汽车", "名词", "self-driving car", "noun", "저는 사람이 직접 운전하는 줄 알았는데 자율 주행차였어요.", "我以为是人直接驾驶，结果是自动驾驶汽车。", "I thought a person was driving it, but it was a self-driving car.", "39", "문법 1", ["collocation:자율 주행차가 운전하다"]],
    ["줄 알다", "以为；知道", "语法表达", "to think that; to know how", "grammar expression", "사람이 있는 줄 알았어요.", "我以为有人。", "I thought there was a person.", "39", "문법 1", ["form:V/A-는 줄 알다 / N인 줄 알다"]],
    ["잘못 알다", "弄错，以为错了", "动词短语", "to misunderstand; to think incorrectly", "verb phrase", "어떤 사실을 잘못 알고 있었을 때 이 표현을 써요.", "弄错某个事实时使用这个表达。", "Use this expression when you misunderstood a fact.", "39", "문법 1", ["collocation:사실을 잘못 알다"]],
    ["당황하다", "慌张，不知所措", "动词", "to be flustered", "verb", "주인이 없어서 당황했어요.", "因为没有店员，所以我慌了。", "I was flustered because there was no clerk.", "39", "문법 1", ["collocation:당황했어요"]],
    ["떨어지다", "不及格；掉落", "动词", "to fail; to fall", "verb", "시험이 어려워서 떨어진 줄 알았어요.", "考试很难，我以为自己不及格了。", "The test was hard, so I thought I had failed.", "39", "문법 1", ["usage:시험에서는 '不及格'"]],
    ["휴가", "休假", "名词", "vacation; leave", "noun", "휴가라서 고향에 다녀왔어요.", "因为休假，所以回了趟家乡。", "I visited my hometown because I was on vacation.", "39", "문법 1", ["collocation:휴가라서 고향에 다녀오다"]],
    ["회사 동료", "公司同事", "名词", "coworker", "noun", "제이슨 씨와 애나 씨는 회사 동료예요.", "Jason 和 Anna 是公司同事。", "Jason and Anna are coworkers.", "39", "문법 1", ["collocation:회사 동료다"]],
    ["사귀다", "交往，谈恋爱", "动词", "to date; to go out with", "verb", "두 사람이 사귀는 줄 알았어요.", "我以为两个人在交往。", "I thought the two were dating.", "39", "문법 1", ["collocation:사귀는 줄 알다"]],
    ["곤 하다", "常常……；时常……", "语法表达", "would often; tend to", "grammar expression", "예전에는 시간 날 때마다 전화하곤 했어요.", "以前一有时间就常常打电话。", "I used to call whenever I had time.", "40", "문법 2", ["form:V-곤 하다"]],
    ["길을 찾다", "找路", "动词短语", "to find one's way", "verb phrase", "예전에는 지도를 가지고 다니면서 길을 찾곤 했어요.", "以前常常带着地图找路。", "In the past, I would carry a map and find my way.", "40", "문법 2", ["collocation:길을 찾다"]],
    ["인공 지능 스피커", "人工智能音箱", "名词", "AI speaker", "noun", "인공 지능 스피커에 말을 해서 음악을 켜요.", "对人工智能音箱说话来打开音乐。", "I turn on music by speaking to an AI speaker.", "40", "문법 2", ["collocation:인공 지능 스피커에 말하다"]],
    ["로봇 청소기", "扫地机器人", "名词", "robot vacuum cleaner", "noun", "로봇 청소기가 혼자 청소해요.", "扫地机器人会自己打扫。", "The robot vacuum cleans by itself.", "40", "문법 2", ["collocation:로봇 청소기가 청소하다"]],
    ["청소기를 돌리다", "使用吸尘器打扫", "动词短语", "to run a vacuum cleaner", "verb phrase", "예전에는 사람이 직접 청소기를 돌리곤 했어요.", "以前常常是人自己用吸尘器打扫。", "In the past, people would run the vacuum cleaner themselves.", "40", "문법 2", ["collocation:직접 청소기를 돌리다"]],
    ["돈을 챙기다", "带好钱", "动词短语", "to take money along", "verb phrase", "예전에는 물건을 살 때 돈을 챙겨 가곤 했어요.", "以前买东西时常常要带好钱。", "In the past, people would take cash when buying things.", "40", "문법 2", ["collocation:돈을 챙겨 가다"]],
    ["배달 앱", "外卖/配送应用", "名词", "delivery app", "noun", "요즘은 배달 앱으로 간편하게 음식을 주문해요.", "现在用外卖应用方便地点餐。", "These days, people easily order food with delivery apps.", "40", "문법 2", ["collocation:배달 앱으로 주문하다"]],
    ["야식", "夜宵", "名词", "late-night snack", "noun", "예전에는 밤에 야식을 자주 먹곤 했어요.", "以前晚上常常吃夜宵。", "I used to eat late-night snacks often.", "40", "문법 2", ["collocation:야식을 먹다"]],
    ["스트레스를 받다", "感到压力", "动词短语", "to be stressed", "verb phrase", "스트레스를 받을 때 게임을 하곤 해요.", "有压力时常常玩游戏。", "When I am stressed, I often play games.", "40", "문법 2", ["collocation:스트레스를 받을 때"]],
    ["체중계", "体重秤", "名词", "scale", "noun", "저는 로봇 청소기를 체중계인 줄 알았어요.", "我把扫地机器人误以为是体重秤。", "I thought the robot vacuum was a scale.", "41", "말하기", ["collocation:체중계인 줄 알다"]],
    ["버튼", "按钮", "名词", "button", "noun", "버튼만 누르면 청소가 돼요.", "只要按按钮就能打扫。", "Just press the button and cleaning gets done.", "41", "말하기", ["collocation:버튼을 누르다"]],
    ["손가락 하나로", "用一根手指", "副词短语", "with one finger", "adverbial phrase", "손가락 하나로 집 안 청소를 다 할 수 있어요.", "用一根手指就能完成家里打扫。", "You can clean the whole house with one finger.", "41", "말하기", ["collocation:손가락 하나로 조작하다"]],
    ["구입하다", "购买", "动词", "to purchase", "verb", "저도 로봇 청소기를 하나 구입하고 싶어요.", "我也想买一台扫地机器人。", "I want to buy a robot vacuum too.", "41", "말하기", ["collocation:하나 구입하다"]],
    ["공기 청정기", "空气净化器", "名词", "air purifier", "noun", "공기 청정기를 말로 켤 수 있어요.", "可以用语音打开空气净化器。", "You can turn on the air purifier by voice.", "41", "말하기", ["collocation:공기 청정기"]],
    ["조종하다", "操纵，控制", "动词", "to control; to operate", "verb", "목소리로 집 안 전자 제품을 조종할 수 있어요.", "可以用声音控制家里的电子产品。", "You can control home electronics by voice.", "41", "말하기", ["collocation:전자 제품을 조종하다"]],
    ["휴대 전화 번역기 앱", "手机翻译应用", "名词", "mobile translation app", "noun", "휴대 전화 번역기 앱은 다른 나라의 언어로 바꿀 수 있어요.", "手机翻译应用可以换成其他国家的语言。", "A mobile translation app can change words into another language.", "41", "말하기", ["collocation:번역기 앱"]],
    ["인공 지능", "人工智能", "名词", "artificial intelligence", "noun", "인공 지능은 병원에서도 활용되고 있어요.", "人工智能也正在医院被使用。", "Artificial intelligence is also being used in hospitals.", "42", "듣기", ["abbrev:AI"]],
    ["활용되다", "被应用，被利用", "动词", "to be used; to be utilized", "verb", "인공 지능이 병원에서 활용되고 있어요.", "人工智能正在医院被应用。", "AI is being used in hospitals.", "42", "듣기", ["collocation:병원에서 활용되다"]],
    ["엑스레이 영상", "X 光影像", "名词", "X-ray image", "noun", "인공 지능이 엑스레이 영상을 분석해요.", "人工智能分析 X 光影像。", "AI analyzes X-ray images.", "42", "듣기", ["collocation:엑스레이 영상을 분석하다"]],
    ["분석하다", "分析", "动词", "to analyze", "verb", "진료한 후 결과를 분석합니다.", "诊疗后分析结果。", "It analyzes the results after treatment.", "42", "듣기", ["collocation:자료를 분석하다"]],
    ["치료하다", "治疗", "动词", "to treat", "verb", "인공 지능이 환자를 직접 치료하는 것은 아니에요.", "人工智能并不是直接治疗患者。", "AI does not directly treat patients.", "42", "듣기", ["collocation:환자를 치료하다"]],
    ["진료하다", "诊疗", "动词", "to examine and treat", "verb", "의사가 환자를 진료한 후 결과를 확인해요.", "医生诊疗患者后确认结果。", "A doctor checks results after seeing a patient.", "42", "듣기", ["collocation:환자를 진료하다"]],
    ["일자리", "工作岗位", "名词", "job", "noun", "인공 지능 때문에 의사의 일자리가 줄어든다고 생각하는 사람도 있어요.", "也有人认为人工智能会让医生的岗位减少。", "Some people think doctors' jobs will decrease because of AI.", "42", "듣기", ["collocation:일자리가 줄어들다"]],
    ["수집하다", "收集", "动词", "to collect", "verb", "인공 지능은 많은 자료를 수집해요.", "人工智能会收集大量资料。", "AI collects a lot of data.", "42", "듣기", ["collocation:자료를 수집하다"]],
    ["게임", "游戏", "名词", "game", "noun", "휴대 전화로 게임을 많이 해요.", "经常用手机玩游戏。", "I play games a lot on my phone.", "42", "발음", ["pronunciation:게임[께임]"]],
    ["사인하다", "签名", "动词", "to sign", "verb", "서류에 사인해 주세요.", "请在文件上签名。", "Please sign the document.", "42", "발음", ["pronunciation:사인[싸인]"]],
    ["응답하다", "回应，应答", "动词", "to respond", "verb", "인공 지능은 질문을 듣고 응답해요.", "人工智能听到问题后会回应。", "AI listens to questions and responds.", "43", "읽기 전", ["collocation:질문에 응답하다"]],
    ["제어하다", "控制", "动词", "to control", "verb", "휴대 전화 하나로 집 안의 가전 기기를 제어할 수 있어요.", "用一部手机就能控制家里的家电。", "You can control home appliances with one phone.", "43", "읽기 전", ["collocation:기기를 제어하다"]],
    ["체험하다", "体验", "动词", "to experience", "verb", "가상 현실을 직접 체험할 수 있어요.", "可以直接体验虚拟现实。", "You can directly experience virtual reality.", "43", "읽기 전", ["collocation:직접 체험하다"]],
    ["작동하다", "运转，启动", "动词", "to operate; to work", "verb", "시작 버튼을 누르면 로봇 청소기가 작동해요.", "按开始按钮，扫地机器人就会启动。", "The robot vacuum operates when you press the start button.", "43", "읽기 전", ["collocation:기기가 작동하다"]],
    ["끊임없이", "不断地", "副词", "constantly", "adverb", "우리 사회는 끊임없이 발전하고 있어요.", "我们的社会在不断发展。", "Our society is constantly developing.", "44", "읽기", ["collocation:끊임없이 발전하다"]],
    ["발전하다", "发展", "动词", "to develop", "verb", "과학 기술은 계속 발전하고 있어요.", "科学技术在不断发展。", "Science and technology keep developing.", "44", "읽기", ["collocation:기술이 발전하다"]],
    ["현실", "现实", "名词", "reality", "noun", "현실과 가상의 세계를 연결하려는 움직임이 있어요.", "出现了连接现实和虚拟世界的动向。", "There is a movement to connect reality and virtual worlds.", "44", "읽기", ["contrast:현실 / 가상"]],
    ["가상", "虚拟", "名词/冠形词", "virtual", "noun/modifier", "가상 현실은 실제처럼 느낄 수 있는 기술이에요.", "虚拟现实是能让人像真实一样感受的技术。", "Virtual reality is technology that lets people feel as if it were real.", "44", "읽기", ["collocation:가상 현실"]],
    ["움직임", "动向；动作", "名词", "movement", "noun", "모든 사물을 하나로 연결하려는 움직임이 나타나고 있어요.", "连接所有事物的动向正在出现。", "A movement to connect all things is emerging.", "44", "읽기", ["collocation:움직임이 나타나다"]],
    ["가능하게 만들다", "使成为可能", "动词短语", "to make possible", "verb phrase", "어떤 기술이 이런 일을 가능하게 만들까요?", "什么技术会让这种事情成为可能呢？", "What technology makes this possible?", "44", "읽기", ["collocation:가능하게 만들어 주다"]],
    ["음성", "语音，声音", "名词", "voice; speech", "noun", "인공 지능은 음성으로 정보 검색이 가능해요.", "人工智能可以通过语音搜索信息。", "AI can search information by voice.", "44", "읽기", ["collocation:음성으로 검색하다"]],
    ["정보 검색", "信息搜索", "名词", "information search", "noun", "음성으로 정보 검색이 가능해요.", "可以通过语音进行信息搜索。", "Information search is possible by voice.", "44", "읽기", ["collocation:정보 검색이 가능하다"]],
    ["주목받다", "受到关注", "动词", "to receive attention", "verb", "의료 분야에서도 로봇이 주목받고 있어요.", "机器人在医疗领域也受到关注。", "Robots are receiving attention in the medical field as well.", "44", "읽기", ["collocation:주목받고 있다"]],
    ["실버 로봇", "银发/老人照护机器人", "名词", "silver care robot", "noun", "실버 로봇은 몸이 불편한 노인의 식사를 도와요.", "老人照护机器人帮助行动不便的老人用餐。", "Silver care robots help elderly people with limited mobility eat.", "44", "읽기", ["usage:노인 돌봄 로봇"]],
    ["몸이 불편하다", "身体不便，行动不便", "形容词短语", "to have limited mobility", "adjective phrase", "몸이 불편한 노인을 도와주는 로봇이 있어요.", "有帮助行动不便老人的机器人。", "There are robots that help elderly people with limited mobility.", "44", "읽기", ["collocation:몸이 불편한 사람"]],
    ["사물 인터넷", "物联网", "名词", "Internet of Things", "noun", "사물 인터넷은 휴대 전화 하나로 집 안의 모든 것을 제어할 수 있게 해요.", "物联网能让人用一部手机控制家里所有东西。", "The Internet of Things lets people control everything at home with one phone.", "44", "읽기", ["abbrev:IoT"]],
    ["가전 기기", "家电设备", "名词", "home appliance", "noun", "휴대 전화로 가전 기기를 작동할 수 있어요.", "可以用手机启动家电设备。", "You can operate home appliances with a phone.", "44", "읽기", ["collocation:가전 기기를 작동하다"]],
    ["관광지", "观光地，旅游景点", "名词", "tourist destination", "noun", "가고 싶은 관광지를 가상 현실 속에서 체험할 수 있어요.", "可以在虚拟现实中体验想去的旅游景点。", "You can experience a desired tourist destination in virtual reality.", "44", "읽기", ["collocation:관광지를 체험하다"]],
    ["기대하다", "期待", "动词", "to expect; to look forward to", "verb", "사람들은 새로운 기술이 사회를 어떻게 바꿀지 기대하고 있어요.", "人们期待新技术会如何改变社会。", "People look forward to how new technology will change society.", "44", "읽기", ["collocation:기대하고 있다"]],
    ["세탁기", "洗衣机", "名词", "washing machine", "noun", "세탁기는 빨래 시간을 줄여 줘요.", "洗衣机能减少洗衣时间。", "A washing machine reduces laundry time.", "45", "쓰기", ["collocation:세탁기를 돌리다"]],
    ["시간을 절약하다", "节省时间", "动词短语", "to save time", "verb phrase", "세탁기를 쓰면 시간을 절약할 수 있어요.", "使用洗衣机可以节省时间。", "Using a washing machine can save time.", "45", "쓰기", ["collocation:시간을 절약하다"]],
    ["온돌", "温突，韩国地暖", "名词", "ondol; Korean floor heating", "noun", "온돌은 한국의 전통적인 난방 방식이에요.", "温突是韩国传统取暖方式。", "Ondol is a traditional Korean heating system.", "46", "문화와 정보", ["collocation:온돌 난방"]],
    ["난방 방식", "取暖方式", "名词", "heating method", "noun", "한국의 전통적인 난방 방식은 온돌이에요.", "韩国传统取暖方式是温突。", "Korea's traditional heating method is ondol.", "46", "문화와 정보", ["collocation:전통적인 난방 방식"]],
    ["아궁이", "灶口，炉灶", "名词", "firebox; furnace opening", "noun", "아궁이에 불을 때서 방을 따뜻하게 했어요.", "在灶口生火来暖房间。", "People made rooms warm by making fire in the firebox.", "46", "문화와 정보", ["collocation:아궁이에 불을 때다"]],
    ["구들", "炕石，温突地板结构", "名词", "heated stone floor structure", "noun", "구들은 방바닥 아래에 까는 넓은 돌이에요.", "구들 是铺在房间地板下面的宽石头。", "Gudeul refers to wide stones laid under the room floor.", "46", "문화와 정보", ["usage:온돌 구조"]],
    ["굴뚝", "烟囱", "名词", "chimney", "noun", "굴뚝은 연기가 밖으로 빠져나가는 통로예요.", "烟囱是烟排到外面的通道。", "A chimney is a passage through which smoke exits.", "46", "문화와 정보", ["collocation:굴뚝으로 빠져나가다"]],
    ["온기", "暖气，热气", "名词", "warmth", "noun", "구들은 오랫동안 온기를 지녀요.", "炕石会长时间保留热气。", "Gudeul keeps warmth for a long time.", "46", "문화와 정보", ["collocation:온기를 지니다"]],
    ["견디다", "忍受，抵御", "动词", "to endure", "verb", "온돌 덕분에 긴 겨울밤에도 추위를 견딜 수 있었어요.", "多亏温突，漫长冬夜也能抵御寒冷。", "Thanks to ondol, people could endure cold winter nights.", "46", "문화와 정보", ["collocation:추위를 견디다"]],
    ["일석이조", "一石二鸟", "名词", "killing two birds with one stone", "noun", "온돌은 난방도 하고 요리도 할 수 있어서 일석이조예요.", "温突既能取暖又能做饭，所以是一石二鸟。", "Ondol both heats and helps cook, so it serves two purposes.", "46", "문화와 정보", ["usage:한 가지 일로 두 가지 이익"]],
    ["보일러", "锅炉", "名词", "boiler", "noun", "요즘은 보일러를 이용해서 방바닥을 데워요.", "现在用锅炉加热地板。", "Today people heat the floor using a boiler.", "46", "문화와 정보", ["collocation:보일러를 이용하다"]],
    ["방바닥", "房间地板", "名词", "room floor", "noun", "한국 사람들은 방바닥을 데우는 방식으로 난방해요.", "韩国人用加热房间地板的方式取暖。", "Koreans heat rooms by warming the floor.", "46", "문화와 정보", ["collocation:방바닥을 데우다"]]
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
  window.lessonGuideL4LessonChunks["l4-03"] = {
    id: "l4-03",
    number: 3,
    titleKo: "생활 속의 과학",
    titleZh: "生活中的科学",
    pages: "36-47",
    status: "draft",
    progress: {
      vocabulary: "draft-p36-p47",
      dialogue: "draft-p39-p41",
      culture: "draft-p46",
      practice: "draft-p39-p46"
    },
    vocabularySources: [
      { page: 36, label: "단원 제목", note: "课题、语法、活动与文化信息" },
      { page: 38, label: "도입", note: "最新技术、无人便利店、导航和虚拟现实" },
      { page: 39, label: "문법 1", note: "V/A-는 줄 알다 例句和练习词" },
      { page: 40, label: "문법 2", note: "V-곤 하다 例句和练习词" },
      { page: 41, label: "말하기", note: "扫地机器人和最新产品优点对话" },
      { page: 42, label: "듣기/발음", note: "医院中的人工智能和外来语发音" },
      { page: 43, label: "읽기 전", note: "科学技术带来的生活变化词汇" },
      { page: 44, label: "읽기", note: "科学技术发展与生活便利文章" },
      { page: 46, label: "문화와 정보", note: "온돌" },
      { page: 47, label: "배운 어휘 확인", note: "本课复习词汇补充" }
    ],
    goals: [
      "能谈论生活中的最新产品和技术带来的便利。",
      "能用 V/A-는 줄 알다 表达自己原本以为的事实。",
      "能用 V-곤 하다 描述过去或现在反复发生的行为。",
      "能阅读科学技术发展相关说明文，并理解韩国传统暖房方式 온돌。"
    ],
    grammar: [
      {
        pattern: "V/A-는 줄 알다",
        zh: "以为……；知道……",
        guide: "表示把某个事实理解为那样。常用于“原来以为错了”的场景。名词用 N인 줄 알다。",
        examples: [
          { ko: "저는 사람이 직접 운전하는 줄 알았어요.", zh: "我以为是人亲自驾驶。" },
          { ko: "저는 체중계인 줄 알았어요.", zh: "我以为是体重秤。" }
        ],
        translations: {
          en: {
            meaning: "to think that...; to know that...",
            guide: "Shows that someone understood a fact in a certain way, often incorrectly. With nouns, use N인 줄 알다."
          }
        }
      },
      {
        pattern: "V-곤 하다",
        zh: "常常……；时常……",
        guide: "表示同样的情况或行为反复发生。常用于回忆过去习惯，或描述现在偶尔反复出现的行为。",
        examples: [
          { ko: "예전에는 지도를 가지고 다니면서 길을 찾곤 했어요.", zh: "以前常常带着地图找路。" },
          { ko: "저는 일할 때 졸리면 커피를 마시곤 해요.", zh: "我工作时困了常常喝咖啡。" }
        ],
        translations: {
          en: {
            meaning: "would often...; tend to...",
            guide: "Describes a repeated action or situation, often a past habit or a recurring current behavior."
          }
        }
      }
    ],
    vocabulary,
    dialogues: [
      {
        id: "dialogue-01",
        title: "무인 편의점에서 당황한 경험",
        page: 39,
        source: "문법 1 대화",
        focus: "V/A-는 줄 알다",
        sceneZh: "잠시드 讲自己去无人便利店时因为没有店员而慌张，제이슨 说明自己第一次去时也误以为有人。",
        learningPoints: [
          "N인 줄 알았어요 用于“以为是某物/某人”。",
          "사람이 있는 줄 알았어요 里的 있는 是 있다 的现在连体形。"
        ],
        lines: [
          { speaker: "잠시드", ko: "무인 편의점 알아요? 어제 편의점에 갔는데 주인이 없어서 당황했어요.", zh: "你知道无人便利店吗？昨天我去了便利店，因为没有店员所以慌了。", guide: "무인 편의점 是“无人便利店”；주인이 없다 在这里指没有店员或经营者在场。" },
          { speaker: "제이슨", ko: "신기하죠? 저도 처음 갔을 때 사람이 있는 줄 알았어요.", zh: "很神奇吧？我第一次去的时候也以为有人。", guide: "있는 줄 알았어요 表示“以为有”。" }
        ],
        rolePlays: [
          { title: "경험 말하기", promptZh: "说自己去无人便利店时因为没有店员而慌张。", answerKo: "무인 편의점에 갔는데 주인이 없어서 당황했어요." },
          { title: "잘못 안 사실 말하기", promptZh: "说自己第一次去时以为有人。", answerKo: "처음 갔을 때 사람이 있는 줄 알았어요." }
        ],
        drills: [
          { pattern: "V/A-는 줄 알다", promptZh: "说“我以为这辆车是人亲自驾驶”。", answerKo: "저는 사람이 직접 운전하는 줄 알았어요." },
          { pattern: "V/A-는 줄 알다", promptZh: "说“我以为韩国食物都很辣”。", answerKo: "한국 음식은 다 매운 줄 알았어요." }
        ],
        translations: {
          en: {
            scene: "Jamshed talks about being flustered at an unmanned convenience store, and Jason says he also thought there was a person there the first time.",
            learningPoints: [
              "N인 줄 알았어요 is used when you thought something was a certain thing or person.",
              "있는 줄 알았어요 means 'thought there was'."
            ]
          }
        }
      },
      {
        id: "dialogue-02",
        title: "길 찾기 앱과 예전 습관",
        page: 40,
        source: "문법 2 대화",
        focus: "V-곤 하다",
        sceneZh: "아나이스 和 라민 谈到手机导航应用让旅行更方便，并回忆以前常常带着地图找路。",
        learningPoints: [
          "나오기 전에는 表示“出现之前”。",
          "길을 찾곤 했어요 表示过去反复做的事情。"
        ],
        lines: [
          { speaker: "아나이스", ko: "휴대 전화에 길 찾기 앱이 있으니까 여행할 때 참 편리한 것 같아요.", zh: "手机里有导航应用，旅行时真的很方便。", guide: "으니까 表示原因：因为有导航应用，所以方便。" },
          { speaker: "라민", ko: "맞아요. 길 찾기 앱이 나오기 전에는 지도를 가지고 다니면서 길을 찾곤 했어요.", zh: "是啊。导航应用出来以前，我常常带着地图找路。", guide: "찾곤 했어요 是“过去常常找”的回忆表达。" }
        ],
        rolePlays: [
          { title: "편리함 말하기", promptZh: "说明手机有导航应用，所以旅行很方便。", answerKo: "휴대 전화에 길 찾기 앱이 있으니까 여행할 때 참 편리해요." },
          { title: "예전 습관 말하기", promptZh: "说明以前常常带着地图找路。", answerKo: "예전에는 지도를 가지고 다니면서 길을 찾곤 했어요." }
        ],
        drills: [
          { pattern: "V-곤 하다", promptZh: "说“以前常常是人亲自使用吸尘器打扫”。", answerKo: "예전에는 사람이 직접 청소기를 돌리곤 했어요." },
          { pattern: "V-곤 하다", promptZh: "说“以前买东西时常常带钱”。", answerKo: "예전에는 물건을 살 때 꼭 돈을 챙겨 가곤 했어요." }
        ],
        translations: {
          en: {
            scene: "Anais and Ramin talk about how navigation apps make travel convenient and remember how they used to carry maps.",
            learningPoints: [
              "나오기 전에는 means 'before it came out'.",
              "길을 찾곤 했어요 describes something one often did in the past."
            ]
          }
        }
      },
      {
        id: "dialogue-03",
        title: "로봇 청소기를 본 후엔",
        page: 41,
        source: "말하기",
        focus: "V/A-는 줄 알다",
        sceneZh: "고천 家里的扫地机器人让 후엔 误以为是体重秤，两人谈到新产品带来的便利。",
        learningPoints: [
          "체중계인 줄 알았어요 是 N인 줄 알다 的典型用法。",
          "버튼만 누르면 表示“只要按按钮就……”。",
          "손가락 하나로 强调操作非常简单。"
        ],
        lines: [
          { speaker: "고천", ko: "후엔 씨, 어서 오세요. 여기 소파에 앉아서 차 한 잔 하세요.", zh: "Huyen，快请进。请坐在这边沙发上喝杯茶。", guide: "차 한 잔 하세요 是招待客人的自然表达。" },
          { speaker: "후엔", ko: "네, 고마워요. 그런데 고천 씨 옆에 있는 그건 뭐예요?", zh: "好，谢谢。可是高天你旁边那个是什么？", guide: "그건 是 그것은 的口语缩写。" },
          { speaker: "고천", ko: "아, 이건 로봇 청소기예요. 이번에 새로 나와서 샀어요.", zh: "啊，这是扫地机器人。这次新出来，所以我买了。", guide: "새로 나와서 是“新上市，所以……”。" },
          { speaker: "후엔", ko: "아, 그래요? 저는 체중계인 줄 알았어요. 사용해 보니까 어때요?", zh: "啊，是吗？我以为是体重秤。用起来怎么样？", guide: "체중계인 줄 알았어요 表示把物品误认为体重秤。" },
          { speaker: "고천", ko: "버튼만 누르면 청소가 돼서 아주 편리해요. 로봇 청소기가 없을 때는 힘들게 청소하곤 했는데…….", zh: "只要按按钮就能打扫，非常方便。没有扫地机器人的时候，我常常很辛苦地打扫……", guide: "버튼만 누르면 是条件；청소하곤 했는데 表示过去常常那样。" },
          { speaker: "후엔", ko: "그러게요. 세상 참 좋아졌어요. 손가락 하나로 집 안 청소를 다 할 수 있고요. 저도 하나 구입하고 싶어요.", zh: "是啊。世界真的变好了。用一根手指就能把家里都打扫了。我也想买一个。", guide: "세상 참 좋아졌어요 是感叹科技变方便的自然说法。" }
        ],
        rolePlays: [
          { title: "물건 묻기", promptZh: "询问旁边那个东西是什么。", answerKo: "옆에 있는 그건 뭐예요?" },
          { title: "잘못 본 물건 말하기", promptZh: "说自己以为扫地机器人是体重秤。", answerKo: "저는 체중계인 줄 알았어요." },
          { title: "장점 설명하기", promptZh: "说明只要按按钮就能打扫，非常方便。", answerKo: "버튼만 누르면 청소가 돼서 아주 편리해요." }
        ],
        drills: [
          { pattern: "V/A-는 줄 알다", promptZh: "说“我以为这是体重秤”。", answerKo: "저는 이게 체중계인 줄 알았어요." },
          { pattern: "V-곤 하다", promptZh: "说“以前没有扫地机器人时，常常辛苦地打扫”。", answerKo: "로봇 청소기가 없을 때는 힘들게 청소하곤 했어요." }
        ],
        translations: {
          en: {
            scene: "Huyen sees Gocheon's robot vacuum and thinks it is a scale, then they talk about the convenience of new products.",
            learningPoints: [
              "체중계인 줄 알았어요 is a typical N인 줄 알다 structure.",
              "버튼만 누르면 means 'if you just press the button'.",
              "손가락 하나로 emphasizes that the operation is very easy."
            ]
          }
        }
      }
    ],
    culture: {
      titleKo: "온돌",
      titleZh: "温突",
      page: 46,
      summaryZh: "온돌 是韩国传统地暖方式，由 아궁이、구들、굴뚝 等结构组成。过去用火加热地板，现在则多用锅炉让热水在地板下流动。",
      paragraphs: [
        {
          ko: "온돌은 한국의 전통적인 난방 방식이다. 온돌에 불을 때는 아궁이, 아궁이에서 나온 열기로 방을 따뜻하게 만드는 구들, 연기가 밖으로 빠져나가는 통로인 굴뚝으로 이루어진다.",
          zh: "温突是韩国传统的取暖方式。温突由生火的灶口、利用灶口传出的热气让房间变暖的 구들，以及烟排到外面的通道烟囱组成。",
          guide: "이루어지다 是“由……组成”；방을 따뜻하게 만드는 구들 用来解释 구들 的功能。"
        },
        {
          ko: "온돌은 구들이 오랫동안 온기를 지니기 때문에 한국 사람들은 긴 겨울밤에도 추위를 견딜 수 있었다. 이뿐만 아니라 아궁이 위에 솥을 걸어 놓고 밥을 하거나 아궁이 불을 이용하여 요리를 할 수 있기 때문에 온돌은 일석이조이다.",
          zh: "因为 구들 能长时间保留热气，韩国人即使在漫长的冬夜也能抵御寒冷。不仅如此，还可以在灶口上方挂锅做饭，或利用灶口的火做菜，因此温突可谓一举两得。",
          guide: "추위를 견디다 是“抵御寒冷”；일석이조 是“一石二鸟，一举两得”。"
        },
        {
          ko: "이렇게 온돌에 익숙해진 한국 사람들은 지금도 방바닥을 데우는 방식으로 난방을 하고 있다. 다만 전과는 다르게 아궁이에 불을 때는 방식이 아니라 보일러를 이용하여 뜨거운 물이 방바닥 아래를 흐르게 하는 방식을 쓰고 있다.",
          zh: "习惯了温突的韩国人现在仍然用加热房间地板的方式取暖。不过，与过去不同，现在不是在灶口生火，而是使用锅炉，让热水在地板下方流动。",
          guide: "전과는 다르게 是“与以前不同”；방식을 쓰다 是“采用某种方式”。"
        }
      ],
      keyTerms: [
        { ko: "온돌", zh: "温突，韩国地暖" },
        { ko: "아궁이", zh: "灶口" },
        { ko: "구들", zh: "温突地板结构" },
        { ko: "굴뚝", zh: "烟囱" },
        { ko: "일석이조", zh: "一石二鸟，一举两得" },
        { ko: "보일러", zh: "锅炉" }
      ],
      questions: [
        {
          q: "온돌의 구조를 간단하게 설명해 보세요.",
          a: "온돌은 아궁이, 구들, 굴뚝으로 이루어집니다.",
          zh: "请简单说明温突的结构。温突由灶口、구들 和烟囱组成。"
        },
        {
          q: "온돌과 현대 한국인의 난방 방식의 공통점과 차이점은 무엇입니까?",
          a: "둘 다 방바닥을 데우지만, 예전에는 아궁이에 불을 때고 요즘은 보일러로 뜨거운 물을 흐르게 합니다.",
          zh: "温突和现代韩国人的取暖方式有什么共同点和不同点？共同点是都加热地板；不同点是过去在灶口生火，现在用锅炉让热水流动。"
        },
        {
          q: "여러분 고향에서는 난방 또는 냉방을 어떻게 합니까?",
          a: "자신의 고향에서 사용하는 난방 또는 냉방 방식을 말합니다.",
          zh: "你的家乡怎么取暖或制冷？请说明自己家乡使用的取暖或制冷方式。"
        }
      ],
      translations: {
        en: {
          title: "Ondol",
          summary: "Ondol is Korea's traditional floor-heating system. It used to heat floors with fire, gudeul stones, and chimneys, while modern Korean heating warms floors with hot water from boilers.",
          paragraphs: [
            {
              translation: "Ondol is a traditional Korean heating method. It consists of the firebox where the fire is made, gudeul stones that warm the room with heat from the firebox, and a chimney through which smoke goes outside.",
              guide: "이루어지다 means 'to consist of'. 방을 따뜻하게 만드는 구들 explains the function of gudeul."
            },
            {
              translation: "Because gudeul keeps warmth for a long time, Korean people could endure cold even during long winter nights. In addition, people could hang a pot over the firebox to cook rice or use the firebox fire for cooking, so ondol served two purposes.",
              guide: "추위를 견디다 means 'to endure the cold'. 일석이조 means 'two benefits from one action'."
            },
            {
              translation: "Koreans, who became accustomed to ondol, still heat rooms by warming the floor. However, unlike before, they no longer make fire in a firebox; instead, they use boilers to let hot water flow under the floor.",
              guide: "전과는 다르게 means 'unlike before'. 방식을 쓰다 means 'to use a method'."
            }
          ],
          keyTerms: [
            { meaning: "ondol, Korean floor heating" },
            { meaning: "firebox" },
            { meaning: "heated stone floor structure" },
            { meaning: "chimney" },
            { meaning: "killing two birds with one stone" },
            { meaning: "boiler" }
          ],
          questions: [
            {
              question: "Briefly explain the structure of ondol.",
              answer: "Ondol consists of a firebox, gudeul stones, and a chimney."
            },
            {
              question: "What are the similarity and difference between ondol and modern Korean heating?",
              answer: "Both warm the floor. In the past, people made fire in a firebox, but today they use boilers to circulate hot water."
            },
            {
              question: "How do people heat or cool homes in your hometown?",
              answer: "Explain the heating or cooling method used in your hometown."
            }
          ]
        }
      }
    },
    practice: [
      {
        type: "grammar",
        title: "V/A-는 줄 알다",
        prompt: "用 V/A-는 줄 알다 表达：我以为这辆车是人亲自驾驶。",
        answer: "저는 이 차를 사람이 직접 운전하는 줄 알았어요.",
        translations: {
          en: {
            title: "V/A-는 줄 알다",
            prompt: "Use V/A-는 줄 알다: I thought a person was driving this car directly.",
            answer: "저는 이 차를 사람이 직접 운전하는 줄 알았어요."
          }
        }
      },
      {
        type: "grammar",
        title: "V-곤 하다",
        prompt: "用 V-곤 하다 表达：以前常常带着地图找路。",
        answer: "예전에는 지도를 가지고 다니면서 길을 찾곤 했어요.",
        translations: {
          en: {
            title: "V-곤 하다",
            prompt: "Use V-곤 하다: In the past, I often carried a map and found my way.",
            answer: "예전에는 지도를 가지고 다니면서 길을 찾곤 했어요."
          }
        }
      },
      {
        type: "speaking",
        title: "최신 제품 설명하기",
        prompt: "최신 제품 하나를 골라 장점 두 가지를 말해 보세요.",
        answer: "로봇 청소기는 버튼만 누르면 청소가 되고, 손가락 하나로 집 안 청소를 다 할 수 있어서 편리해요.",
        translations: {
          en: {
            title: "Describe a Latest Product",
            prompt: "Choose one latest product and say two advantages.",
            answer: "로봇 청소기는 버튼만 누르면 청소가 되고, 손가락 하나로 집 안 청소를 다 할 수 있어서 편리해요."
          }
        }
      },
      {
        type: "reading",
        title: "과학 기술 글 이해",
        prompt: "과학 기술의 발전은 우리의 생활을 어떻게 만들었습니까?",
        answer: "과학 기술의 발전은 우리의 생활을 편리하게 만들었습니다.",
        translations: {
          en: {
            title: "Understand the Science Technology Text",
            prompt: "How has technological development changed our lives?",
            answer: "과학 기술의 발전은 우리의 생활을 편리하게 만들었습니다."
          }
        }
      },
      {
        type: "culture",
        title: "온돌 이해",
        prompt: "온돌은 무엇으로 이루어져 있습니까?",
        answer: "온돌은 아궁이, 구들, 굴뚝으로 이루어져 있습니다.",
        translations: {
          en: {
            title: "Understand Ondol",
            prompt: "What is ondol made of?",
            answer: "온돌은 아궁이, 구들, 굴뚝으로 이루어져 있습니다."
          }
        }
      }
    ],
    translations: {
      en: {
        title: "Science in Daily Life",
        goals: [
          "Talk about convenient latest products and technologies in daily life.",
          "Use V/A-는 줄 알다 to express what you originally thought was true.",
          "Use V-곤 하다 to describe repeated past or present actions.",
          "Read an explanatory text about technological development and understand Korea's traditional heating system, ondol."
        ]
      }
    }
  };
})();
