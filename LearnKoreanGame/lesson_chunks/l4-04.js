(() => {
  const makeTips = (tips) => (tips || []).map((text) => {
    const [type, body] = text.includes(":") ? text.split(/:(.+)/) : ["collocation", text];
    return { type, text: body.trim() };
  });

  const vocabulary = [
    ["한국의 의례", "韩国礼仪/仪式", "名词短语", "Korean ceremonies", "noun phrase", "한국의 의례에는 결혼식과 장례식이 있어요.", "韩国礼仪中有婚礼和葬礼。", "Korean ceremonies include weddings and funerals.", "48", "단원 제목", ["collocation:한국의 의례"]],
    ["결혼식 절차", "婚礼流程", "名词短语", "wedding procedure", "noun phrase", "한국의 결혼식 절차에 대해 이야기해 보세요.", "请谈谈韩国婚礼流程。", "Talk about Korean wedding procedures.", "48", "단원 제목", ["collocation:결혼식 절차를 말하다"]],
    ["특별한 날", "特别的日子", "名词短语", "special day", "noun phrase", "고향의 특별한 날에 대해 써 보세요.", "请写一写家乡特别的日子。", "Write about a special day in your hometown.", "48", "단원 제목", ["collocation:특별한 날에 대해 쓰다"]],
    ["성년의 날", "成年日", "名词", "Coming-of-Age Day", "noun", "한국에서는 5월 셋째 월요일이 성년의 날이에요.", "在韩国，5月第三个星期一是成年日。", "In Korea, the third Monday of May is Coming-of-Age Day.", "48", "단원 제목", ["collocation:성년의 날을 기념하다"]],
    ["결혼식장", "婚礼场地，婚礼大厅", "名词", "wedding hall", "noun", "하객들은 결혼식장에 들어갈 때 축의금을 내요.", "宾客进入婚礼场地时交礼金。", "Guests give congratulatory money when entering the wedding hall.", "50", "어휘", ["collocation:결혼식장에 가다"]],
    ["사회자", "主持人", "名词", "host; emcee", "noun", "사회자가 결혼식을 진행해요.", "主持人主持婚礼。", "The emcee hosts the wedding.", "50", "어휘", ["collocation:사회자가 진행하다"]],
    ["주례", "主礼人，证婚人", "名词", "officiant", "noun", "주례가 신랑과 신부에게 좋은 말씀을 해요.", "主礼人对新郎新娘说祝福的话。", "The officiant gives words of blessing to the bride and groom.", "50", "어휘", ["collocation:주례사"]],
    ["하객", "宾客，贺客", "名词", "wedding guest", "noun", "하객들이 신랑과 신부를 축하해요.", "宾客们祝贺新郎新娘。", "Guests congratulate the bride and groom.", "50", "어휘", ["collocation:하객이 참석하다"]],
    ["신랑", "新郎", "名词", "groom", "noun", "신랑이 너무 긴장한 나머지 노래 가사를 잊어버렸어요.", "新郎因为太紧张而忘了歌词。", "The groom was so nervous that he forgot the lyrics.", "50", "어휘", ["collocation:신랑과 신부"]],
    ["신부", "新娘", "名词", "bride", "noun", "신랑과 신부가 입장했어요.", "新郎和新娘入场了。", "The bride and groom entered.", "50", "어휘", ["collocation:신부가 입장하다"]],
    ["축의금을 내다", "交婚礼礼金", "动词短语", "to give congratulatory money", "verb phrase", "친구 결혼식장에서 축의금을 냈어요.", "在朋友婚礼现场交了礼金。", "I gave congratulatory money at my friend's wedding.", "50", "어휘", ["contrast:축의금 / 조의금"]],
    ["피로연을 하다", "办婚宴", "动词短语", "to hold a wedding reception", "verb phrase", "결혼식 후에 피로연을 했어요.", "婚礼后办了婚宴。", "They held a wedding reception after the ceremony.", "50", "어휘", ["collocation:피로연을 하다"]],
    ["폐백을 하다", "行幣帛礼", "动词短语", "to perform pyebaek", "verb phrase", "신랑의 부모님께 폐백을 드렸어요.", "向新郎父母行了幣帛礼。", "They performed pyebaek for the groom's parents.", "50", "어휘", ["usage:전통 혼례 절차"]],
    ["장례식장", "殡仪馆，葬礼场所", "名词", "funeral hall", "noun", "장례식장에 갈 때는 검은색 옷을 입는 게 좋아요.", "去殡仪馆时最好穿黑色衣服。", "It is best to wear black clothes when going to a funeral hall.", "50", "어휘", ["collocation:장례식장에 가다"]],
    ["빈소", "灵堂", "名词", "mourning room", "noun", "빈소 안에서는 조용히 예의를 지켜야 해요.", "在灵堂里要安静地守礼。", "You should be quiet and polite in the mourning room.", "50", "어휘", ["collocation:빈소 안에서"]],
    ["고인", "故人，逝者", "名词", "the deceased", "noun", "고인의 사진 앞에서 묵념을 했어요.", "在逝者照片前默哀。", "I paid silent tribute before the deceased person's photo.", "50", "어휘", ["collocation:고인의 명복"]],
    ["영정", "遗像", "名词", "funeral portrait", "noun", "영정 앞에서 절을 했어요.", "在遗像前鞠躬/行礼。", "I bowed before the funeral portrait.", "50", "어휘", ["collocation:영정 앞에서"]],
    ["조문객", "吊唁者", "名词", "mourner; condolence visitor", "noun", "조문객들이 유족들에게 인사를 했어요.", "吊唁者向遗属问候。", "Mourners greeted the bereaved family.", "50", "어휘", ["collocation:조문객이 오다"]],
    ["상주", "丧主，主丧人", "名词", "chief mourner", "noun", "상주는 조문객을 맞이해요.", "丧主接待吊唁者。", "The chief mourner receives condolence visitors.", "50", "어휘", ["collocation:상주가 맞이하다"]],
    ["조문하다", "吊唁", "动词", "to pay condolences", "verb", "친구 아버님 장례식장에 조문하러 갔어요.", "去朋友父亲的葬礼吊唁了。", "I went to pay condolences at my friend's father's funeral.", "50", "어휘", ["collocation:조문하러 가다"]],
    ["조의금을 내다", "交吊唁金", "动词短语", "to give condolence money", "verb phrase", "장례식장에 갈 때는 조의금을 준비하세요.", "去殡仪馆时请准备吊唁金。", "Prepare condolence money when going to a funeral hall.", "50", "어휘", ["contrast:조의금 / 축의금"]],
    ["상을 당하다", "遭遇丧事", "动词短语", "to suffer a bereavement", "verb phrase", "친구가 상을 당해서 위로해 줬어요.", "朋友遭遇丧事，所以安慰了他。", "I comforted my friend after a bereavement.", "50", "어휘", ["collocation:상을 당하다"]],
    ["상복을 입다", "穿丧服", "动词短语", "to wear mourning clothes", "verb phrase", "상주는 상복을 입고 조문객을 맞아요.", "丧主穿着丧服接待吊唁者。", "The chief mourner wears mourning clothes and receives visitors.", "50", "어휘", ["collocation:상복을 입다"]],
    ["문자를 확인하다", "查看短信", "动词短语", "to check a text message", "verb phrase", "방금 문자를 확인하더니 밖으로 나갔어요.", "刚查看短信后就出去了。", "After checking a text message just now, they went outside.", "51", "문법 1", ["collocation:문자를 확인하다"]],
    ["마음에 들다", "喜欢，合心意", "动词短语", "to like; to be pleased with", "verb phrase", "제 친구를 보더니 마음에 든다고 했어요.", "看了我的朋友后说很喜欢。", "After seeing my friend, he said he liked her.", "51", "문법 1", ["collocation:마음에 들다"]],
    ["장거리 연애", "异地恋", "名词", "long-distance relationship", "noun", "애나 씨가 2년 동안 장거리 연애를 하더니 드디어 결혼하네요.", "Anna 异地恋两年后终于结婚了。", "Anna had a long-distance relationship for two years and is finally getting married.", "51", "문법 1", ["collocation:장거리 연애를 하다"]],
    ["드디어", "终于", "副词", "finally", "adverb", "지민 씨가 드디어 결혼했네요.", "智敏终于结婚了。", "Jimin finally got married.", "51", "문법 1", ["collocation:드디어 결혼하다"]],
    ["동기", "同期，同届", "名词", "peer; cohort member", "noun", "안젤라 씨는 동기들보다 먼저 승진했어요.", "Angela 比同期同事先晋升了。", "Angela was promoted before her peers.", "51", "문법 1", ["collocation:동기들보다 먼저"]],
    ["유창하다", "流利", "形容词", "fluent", "adjective", "잠시드 씨는 올해 한국어를 유창하게 해요.", "Jamshed 今年韩语说得很流利。", "Jamshed speaks Korean fluently this year.", "51", "문법 1", ["collocation:유창하게 하다"]],
    ["긴장하다", "紧张", "动词", "to be nervous", "verb", "너무 긴장한 나머지 아무것도 생각나지 않았어요.", "太紧张了，结果什么都想不起来。", "I was so nervous that I could not think of anything.", "52", "문법 2", ["collocation:너무 긴장하다"]],
    ["지치다", "疲惫", "动词", "to be exhausted", "verb", "라민은 너무 지친 나머지 공부를 그만둘 생각까지 했어요.", "Ramin 太累了，甚至想过放弃学习。", "Ramin was so exhausted that he even thought of quitting studying.", "52", "문법 2", ["collocation:너무 지치다"]],
    ["귀찮다", "嫌麻烦", "形容词", "to feel bothered", "adjective", "귀찮은 나머지 집안일을 미뤘어요.", "因为太嫌麻烦而拖延了家务。", "I put off chores because I felt too bothered.", "52", "문법 2", ["form:귀찮은 나머지"]],
    ["놀라다", "吃惊", "动词", "to be surprised", "verb", "놀란 나머지 말을 못 했어요.", "因为太吃惊而说不出话。", "I was so surprised that I could not speak.", "52", "문법 2", ["form:놀란 나머지"]],
    ["과로하다", "过劳", "动词", "to overwork", "verb", "영화배우가 영화 촬영으로 과로해 결국 병원에 입원했어요.", "电影演员因拍摄过劳，最终住院了。", "The actor was overworked from filming and was eventually hospitalized.", "52", "문법 2", ["collocation:촬영으로 과로하다"]],
    ["입원하다", "住院", "动词", "to be hospitalized", "verb", "과로한 나머지 병원에 입원했어요.", "过劳结果住院了。", "They were hospitalized after becoming overworked.", "52", "문법 2", ["collocation:병원에 입원하다"]],
    ["불안하다", "不安，焦虑", "形容词", "anxious", "adjective", "주민들이 태풍 때문에 불안한 나머지 밤에 한숨도 못 잤어요.", "居民们因台风太不安，整晚没睡。", "Residents were so anxious about the typhoon that they could not sleep at all.", "52", "문법 2", ["collocation:불안한 나머지"]],
    ["우울증에 걸리다", "患上抑郁症", "动词短语", "to develop depression", "verb phrase", "시험 때문에 스트레스를 받은 나머지 우울증에 걸렸어요.", "因为考试压力太大而患上抑郁症。", "They developed depression from exam stress.", "52", "문법 2", ["collocation:우울증에 걸리다"]],
    ["축가", "祝歌，婚礼祝唱", "名词", "congratulatory song", "noun", "주례사 이후에 신랑이 축가를 불렀어요.", "主礼辞之后新郎唱了祝歌。", "After the officiant's speech, the groom sang a congratulatory song.", "53", "말하기", ["collocation:축가를 부르다"]],
    ["혼인 서약", "婚姻誓约", "名词", "wedding vows", "noun", "신랑과 신부가 혼인 서약을 했어요.", "新郎新娘进行了婚姻誓约。", "The bride and groom made wedding vows.", "53", "말하기", ["collocation:혼인 서약을 하다"]],
    ["화촉 점화", "点燃花烛", "名词", "lighting the wedding candles", "noun", "신랑, 신부 어머니들이 화촉 점화를 했어요.", "新郎、新娘的母亲点燃了花烛。", "The mothers of the bride and groom lit the wedding candles.", "53", "말하기", ["collocation:화촉 점화"]],
    ["감사의 편지", "感谢信", "名词短语", "letter of thanks", "noun phrase", "신랑과 신부가 부모님께 감사의 편지를 읽었어요.", "新郎新娘给父母读了感谢信。", "The bride and groom read letters of thanks to their parents.", "53", "말하기", ["collocation:감사의 편지를 읽다"]],
    ["부고", "讣告", "名词", "obituary notice", "noun", "부고 문자를 받고 장례식장에 갔어요.", "收到讣告短信后去了殡仪馆。", "I received an obituary notice and went to the funeral hall.", "54", "듣기", ["collocation:부고를 받다"]],
    ["별세하다", "逝世", "动词", "to pass away", "verb", "박진호 씨의 부친께서 별세하셨습니다.", "朴镇浩先生的父亲去世了。", "Mr. Park Jinho's father has passed away.", "54", "듣기", ["honorific:돌아가시다보다 격식적"]],
    ["삼가", "谨，恭敬地", "副词", "respectfully", "adverb", "삼가 고인의 명복을 빕니다.", "谨祝故人冥福。", "May the deceased rest in peace.", "54", "듣기/발음", ["fixed:삼가 고인의 명복을 빕니다"]],
    ["명복을 빌다", "祝愿冥福", "动词短语", "to pray for the deceased's peace", "verb phrase", "삼가 고인의 명복을 빕니다.", "谨祝故人冥福。", "May the deceased rest in peace.", "54", "듣기/발음", ["collocation:고인의 명복을 빌다"]],
    ["예의", "礼仪，礼貌", "名词", "manners; etiquette", "noun", "장례식장에서는 예의를 지켜야 돼요.", "在殡仪馆要遵守礼仪。", "You should observe etiquette at a funeral hall.", "54", "발음", ["pronunciation:예의[예의, 예이]"]],
    ["백일잔치", "百日宴", "名词", "100-day celebration", "noun", "백일잔치는 아기가 태어난 지 백 일째 되는 날을 축하해요.", "百日宴庆祝婴儿出生一百天。", "A 100-day celebration marks a baby's 100th day.", "55", "읽기 전", ["collocation:백일잔치"]],
    ["돌잔치", "周岁宴", "名词", "first birthday party", "noun", "돌잔치에서는 돌잡이를 해요.", "周岁宴上会进行抓周。", "At a first birthday party, the baby does doljabi.", "55", "읽기 전", ["collocation:돌잔치를 하다"]],
    ["환갑잔치", "花甲宴，60岁生日宴", "名词", "60th birthday celebration", "noun", "시어머니의 환갑잔치도 치렀어요.", "也办了婆婆的花甲宴。", "We also held my mother-in-law's 60th birthday celebration.", "55", "읽기 전", ["also:회갑연"]],
    ["고희연", "古稀宴，70岁生日宴", "名词", "70th birthday celebration", "noun", "일흔 번째 생일을 축하하는 행사를 고희연이라고 해요.", "庆祝七十岁生日的活动叫古稀宴。", "A celebration for the 70th birthday is called gohuiyeon.", "55", "읽기 전", ["also:칠순 잔치"]],
    ["돐잡이", "抓周", "名词", "doljabi; first-birthday object picking", "noun", "돌잡이에서 아기의 장래를 추측해요.", "抓周时推测孩子的未来。", "People guess the baby's future through doljabi.", "55", "읽기 전", ["standard:돌잡이"]],
    ["장래를 추측하다", "推测未来", "动词短语", "to guess the future", "verb phrase", "아기가 무엇을 잡는지 보고 장래를 추측해요.", "看宝宝抓什么来推测未来。", "People guess the baby's future by seeing what the baby grabs.", "55", "읽기 전", ["collocation:장래를 추측하다"]],
    ["장수를 기원하다", "祝愿长寿", "动词短语", "to wish for longevity", "verb phrase", "건강과 장수를 기원해요.", "祝愿健康和长寿。", "People wish for health and longevity.", "55", "읽기 전", ["collocation:건강과 장수"]],
    ["자리를 빛내다", "莅临增光", "动词短语", "to grace an occasion", "verb phrase", "바쁘시겠지만 자리를 빛내 주시면 감사하겠습니다.", "虽忙，若能莅临将不胜感激。", "We would appreciate it if you could grace the occasion.", "55", "읽기 전", ["usage:초대장 표현"]],
    ["치르다", "举办；经历", "动词", "to hold; to go through", "verb", "큰 생일잔치를 두 번이나 치렀어요.", "办了两次大型生日宴。", "We held two large birthday celebrations.", "56", "읽기", ["collocation:행사를 치르다"]],
    ["감격하다", "感动，激动", "动词", "to be deeply moved", "verb", "시어머니께서는 너무나 감격한 나머지 눈물을 흘리셨어요.", "婆婆太感动了，流下了眼泪。", "My mother-in-law was so moved that she shed tears.", "56", "읽기", ["collocation:감격한 나머지"]],
    ["분주하다", "忙碌", "形容词", "busy; bustling", "adjective", "행사가 많아서 분주했어요.", "活动很多，所以很忙。", "There were many events, so it was busy.", "56", "읽기", ["collocation:분주하다"]],
    ["효도", "孝道，孝顺", "名词", "filial piety", "noun", "부모님께 효도의 마음을 표현했어요.", "向父母表达了孝心。", "We expressed filial love to our parents.", "56", "읽기", ["collocation:효도의 마음"]],
    ["정겹다", "亲切，温情", "形容词", "warm and affectionate", "adjective", "한국의 풍습이 참 정겹게 느껴져요.", "韩国风俗让人觉得很温情。", "Korean customs feel very warm.", "56", "읽기", ["collocation:정겹게 느껴지다"]],
    ["풍습", "风俗", "名词", "custom", "noun", "가족들의 건강과 장수를 기원하는 풍습이 있어요.", "有祝愿家人健康长寿的风俗。", "There is a custom of wishing family members health and longevity.", "56", "읽기", ["collocation:한국의 풍습"]],
    ["성인", "成年人", "名词", "adult", "noun", "성년의 날은 젊은이들이 성인이 되었음을 알리는 날이에요.", "成年日是宣告年轻人成为成年人的日子。", "Coming-of-Age Day announces that young people have become adults.", "58", "문화와 정보", ["collocation:성인이 되다"]],
    ["기념하다", "纪念", "动词", "to commemorate", "verb", "아이가 성인이 된 것을 기념해요.", "纪念孩子成为成年人。", "People commemorate a child becoming an adult.", "58", "문화와 정보", ["collocation:기념하여 축하하다"]],
    ["상투를 올리다", "束发加冠", "动词短语", "to put up a topknot", "verb phrase", "과거에는 남자가 상투를 올리면 성인으로 인정받았어요.", "过去男子束发后会被认可为成年人。", "In the past, a man was recognized as an adult after putting up a topknot.", "58", "문화와 정보", ["usage:전통 성년 의식"]],
    ["비녀를 꽂다", "插发簪", "动词短语", "to wear a hairpin", "verb phrase", "여자는 비녀를 꽂는 의식을 했어요.", "女子会举行插发簪仪式。", "Women performed a ceremony of wearing a hairpin.", "58", "문화와 정보", ["usage:전통 성년 의식"]],
    ["인정을 받다", "被认可", "动词短语", "to be recognized", "verb phrase", "이 의식을 가지면 성인으로 인정을 받았어요.", "举行这个仪式后就被认可为成年人。", "After this ceremony, they were recognized as adults.", "58", "문화와 정보", ["collocation:성인으로 인정받다"]],
    ["권리", "权利", "名词", "right", "noun", "성인이 되면 권리와 의무를 갖게 돼요.", "成年后会拥有权利和义务。", "Adults gain rights and duties.", "58", "문화와 정보", ["collocation:권리와 의무"]],
    ["의무", "义务", "名词", "duty", "noun", "권리가 많아지는 만큼 의무도 커져요.", "权利增多的同时义务也变大。", "As rights increase, duties also grow.", "58", "문화와 정보", ["collocation:권리와 의무"]],
    ["책임", "责任", "名词", "responsibility", "noun", "법을 지키지 않았을 때의 책임도 커져요.", "不守法时的责任也会变大。", "The responsibility for not obeying the law also grows.", "58", "문화와 정보", ["collocation:책임이 커지다"]],
    ["음주", "饮酒", "名词", "drinking alcohol", "noun", "만 19세가 되면 음주가 가능해요.", "满19岁后可以饮酒。", "At age 19, drinking alcohol becomes allowed.", "58", "문화와 정보", ["contrast:음주 / 흡연"]],
    ["흡연", "吸烟", "名词", "smoking", "noun", "성인이 되면 흡연이 가능해요.", "成年后可以吸烟。", "Smoking becomes allowed after becoming an adult.", "58", "문화와 정보", ["contrast:음주 / 흡연"]],
    ["사업자 등록", "营业者登记，商业登记", "名词", "business registration", "noun", "성인은 사업자 등록도 할 수 있어요.", "成年人也可以办理商业登记。", "Adults can also register a business.", "58", "문화와 정보", ["collocation:사업자 등록을 하다"]]
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
  window.lessonGuideL4LessonChunks["l4-04"] = {
    id: "l4-04",
    number: 4,
    titleKo: "한국의 의례",
    titleZh: "韩国礼仪",
    pages: "48-59",
    status: "draft",
    progress: {
      vocabulary: "draft-p48-p59",
      dialogue: "draft-p51-p53",
      culture: "draft-p58",
      practice: "draft-p51-p58"
    },
    vocabularySources: [
      { page: 48, label: "단원 제목", note: "课题、语法、活动和文化主题" },
      { page: 50, label: "어휘", note: "婚礼和葬礼场景词汇" },
      { page: 51, label: "문법 1", note: "V/A-더니 例句和变化表达" },
      { page: 52, label: "문법 2", note: "V/A-(으)ㄴ 나머지 例句和结果表达" },
      { page: 53, label: "말하기", note: "婚礼经历和婚礼流程对话" },
      { page: 54, label: "듣기/발음", note: "부고、조문과 의 발音" },
      { page: 55, label: "읽기 전", note: "百日宴、周岁宴、花甲宴和邀请函词汇" },
      { page: 56, label: "읽기", note: "家庭 행사 文章" },
      { page: 58, label: "문화와 정보", note: "성년의 날" },
      { page: 59, label: "배운 어휘 확인", note: "本课复习词汇补充" }
    ],
    goals: [
      "能说明韩国结婚式和葬礼的基本流程与礼仪。",
      "能用 V/A-더니 连接观察到的变化和后续结果。",
      "能用 V/A-(으)ㄴ 나머지 表达“太……以至于……”的结果。",
      "能阅读家庭仪礼文章，并理解韩国 성년의 날 的意义。"
    ],
    grammar: [
      {
        pattern: "V/A-더니",
        zh: "之前……后来……；观察到……结果……",
        guide: "说话人先观察到前面的情况，然后看到后面的变化或结果。常用于描述一个人或情况前后的变化。",
        examples: [
          { ko: "잠시드 씨가 제 친구를 보더니 마음에 든다고 했어요.", zh: "Jamshid 看到我朋友后说很喜欢。" },
          { ko: "애나 씨가 2년 동안 장거리 연애를 하더니 드디어 결혼하네요.", zh: "Anna 异地恋两年后终于结婚了。" }
        ],
        translations: {
          en: {
            meaning: "after observing..., then...",
            guide: "Connects an observed earlier situation with a later action, change, or result."
          }
        }
      },
      {
        pattern: "V/A-(으)ㄴ 나머지",
        zh: "由于太……结果……",
        guide: "前项程度很强，因此发生后项结果。常用于紧张、疲惫、害怕、感动等情绪或状态过强的情况。",
        examples: [
          { ko: "너무 긴장한 나머지 아무것도 생각나지 않았어요.", zh: "太紧张了，结果什么都想不起来。" },
          { ko: "신랑이 너무 긴장한 나머지 노래 가사를 잊어버렸어요.", zh: "新郎太紧张了，结果忘了歌词。" }
        ],
        translations: {
          en: {
            meaning: "so... that...",
            guide: "Shows that an intense state or action caused the following result."
          }
        }
      }
    ],
    vocabulary,
    dialogues: [
      {
        id: "dialogue-01",
        title: "친구를 소개한 뒤 생긴 변화",
        page: 51,
        source: "문법 1 대화",
        focus: "V/A-더니",
        sceneZh: "안젤라 问 이링 是否把朋友介绍给 잠시드，이링 说 잠시드 看到朋友后表示喜欢。",
        learningPoints: [
          "보더니 表示“看到以后，接着……”。",
          "마음에 든다고 했어요 是转述“说喜欢/合心意”。"
        ],
        lines: [
          { speaker: "안젤라", ko: "이링 씨, 잠시드 씨에게 친구를 소개해 줬어요?", zh: "Yiling，你给 Jamshid 介绍朋友了吗？", guide: "에게 친구를 소개해 주다 是“给某人介绍朋友”。" },
          { speaker: "이링", ko: "네. 잠시드 씨가 제 친구를 보더니 마음에 든다고 했어요.", zh: "是的。Jamshid 看到我朋友后说很喜欢。", guide: "보더니 连接观察到的动作和后续反应。" }
        ],
        rolePlays: [
          { title: "소개 경험 말하기", promptZh: "说你给某人介绍了朋友。", answerKo: "잠시드 씨에게 친구를 소개해 줬어요." },
          { title: "변화 말하기", promptZh: "说对方看到朋友后表示喜欢。", answerKo: "제 친구를 보더니 마음에 든다고 했어요." }
        ],
        drills: [
          { pattern: "V/A-더니", promptZh: "说“Anna 异地恋两年后终于结婚了”。", answerKo: "애나 씨가 2년 동안 장거리 연애를 하더니 드디어 결혼하네요." },
          { pattern: "V/A-더니", promptZh: "说“Ramin 努力学习后拿到了奖学金”。", answerKo: "라민 씨가 열심히 공부하더니 장학금을 받았어요." }
        ],
        translations: {
          en: {
            scene: "Angela asks whether Yiling introduced a friend to Jamshid, and Yiling says Jamshid liked the friend after seeing her.",
            learningPoints: [
              "보더니 means 'after seeing, then...'",
              "마음에 든다고 했어요 reports that someone said they liked something."
            ]
          }
        }
      },
      {
        id: "dialogue-02",
        title: "장례식장에서 너무 슬펐던 친구",
        page: 52,
        source: "문법 2 대화",
        focus: "V/A-(으)ㄴ 나머지",
        sceneZh: "박민수 问 라흐만 是否顺利去了朋友父亲的葬礼，라흐만 说朋友太伤心了，哭得停不下来。",
        learningPoints: [
          "슬픈 나머지 表示“因为太伤心，结果……”。",
          "울음을 멈추지 못했어요 是“止不住哭”。"
        ],
        lines: [
          { speaker: "박민수", ko: "친구 아버님 장례식장에는 잘 다녀왔어요?", zh: "朋友父亲的葬礼你去得还顺利吗？", guide: "아버님 是对别人父亲的尊称；다녀오다 表示“去一趟回来”。" },
          { speaker: "라흐만", ko: "네. 제 친구는 너무 슬픈 나머지 울음을 멈추지 못했어요.", zh: "去了。我朋友太伤心了，哭得停不下来。", guide: "너무 슬픈 나머지 强调悲伤程度导致后面的结果。" }
        ],
        rolePlays: [
          { title: "조문 경험 묻기", promptZh: "询问朋友是否去过葬礼。", answerKo: "친구 아버님 장례식장에는 잘 다녀왔어요?" },
          { title: "결과 설명하기", promptZh: "说明朋友太伤心，停不住哭。", answerKo: "제 친구는 너무 슬픈 나머지 울음을 멈추지 못했어요." }
        ],
        drills: [
          { pattern: "V/A-(으)ㄴ 나머지", promptZh: "说“因为太紧张，什么都想不起来”。", answerKo: "너무 긴장한 나머지 아무것도 생각나지 않았어요." },
          { pattern: "V/A-(으)ㄴ 나머지", promptZh: "说“因为太吃惊，摔倒了”。", answerKo: "너무 놀란 나머지 넘어졌어요." }
        ],
        translations: {
          en: {
            scene: "Min-su asks Rahman if he went to his friend's father's funeral, and Rahman says his friend was so sad that he could not stop crying.",
            learningPoints: [
              "슬픈 나머지 means 'because someone was so sad, as a result...'",
              "울음을 멈추지 못했어요 means 'could not stop crying'."
            ]
          }
        }
      },
      {
        id: "dialogue-03",
        title: "한국 결혼식에 다녀온 경험",
        page: 53,
        source: "말하기 대화",
        focus: "결혼식 절차 말하기",
        sceneZh: "이링 问 안젤라 周末做了什么，안젤라 讲自己参加了 지민 的婚礼，并说明韩国婚礼的流程和有趣场面。",
        learningPoints: [
          "오랫동안 연애를 하더니 드디어 결혼했네요 用于描述长期恋爱后的结果。",
          "신랑이 너무 긴장한 나머지 노래 가사를 잊어버렸어요 用来说明紧张造成的结果。",
          "결혼식流程可按：화촉 점화 → 신랑, 신부 입장 → 혼인 서약 → 주례사 → 축가。"
        ],
        lines: [
          { speaker: "이링", ko: "안젤라 씨, 주말에 뭐 했어요?", zh: "Angela，周末做什么了？", guide: "自然开启周末经历话题。" },
          { speaker: "안젤라", ko: "지난번에 같이 만난 지민 씨 기억나요? 그 친구 결혼식에 다녀왔어요.", zh: "你记得上次一起见过的 Jimin 吗？我去参加她的婚礼了。", guide: "결혼식에 다녀오다 表示“去参加婚礼后回来”。" },
          { speaker: "이링", ko: "아, 네. 지민 씨가 오랫동안 연애를 하더니 드디어 결혼했네요. 결혼식은 어땠어요? 저는 한국에서 결혼식에 아직 못 가 봤어요.", zh: "啊，记得。Jimin 恋爱了很久，终于结婚了啊。婚礼怎么样？我在韩国还没去过婚礼。", guide: "하더니 드디어 表示观察到长期状态后出现结果。" },
          { speaker: "안젤라", ko: "음, 먼저 하객들은 결혼식장에 들어갈 때 축의금을 냈어요. 그리고 신랑, 신부 어머니들이 촛불을 켜면서 결혼식을 시작했어요.", zh: "嗯，首先宾客进入婚礼场时交礼金。然后新郎、新娘的母亲点燃蜡烛，婚礼就开始了。", guide: "축의금은婚礼礼金；촛불을 켜다 是点蜡烛。" },
          { speaker: "이링", ko: "촛불을 켜는 게 신기하네요. 그다음에 신랑, 신부가 입장하고 혼인 서약을 했겠죠?", zh: "点蜡烛这点很新奇。接下来新郎新娘入场并宣读婚姻誓约了吧？", guide: "했겠죠 表示推测并寻求确认。" },
          { speaker: "안젤라", ko: "네. 그리고 주례사 이후에 신랑이 축가를 불렀고요. 그런데 신랑이 너무 긴장한 나머지 노래 가사를 잊어버렸어요. 하객들은 신랑의 그런 모습에 계속 웃었고요.", zh: "是的。然后主礼辞之后新郎唱了祝歌。可是新郎太紧张了，忘了歌词。宾客们看到新郎那个样子一直笑。", guide: "너무 긴장한 나머지 表示“太紧张以至于……”。" },
          { speaker: "이링", ko: "그랬군요. 다음에 지민 씨를 만나면 축하해 줘야겠네요.", zh: "原来如此。下次见到 Jimin 要祝贺她了。", guide: "축하해 줘야겠네요 表示“看来应该祝贺一下”。" }
        ],
        rolePlays: [
          { title: "결혼식 절차 말하기", promptZh: "按顺序说明韩国婚礼流程。", answerKo: "화촉 점화 후에 신랑, 신부가 입장하고 혼인 서약을 해요. 그다음에 주례사와 축가가 이어져요." },
          { title: "인상적인 일 말하기", promptZh: "说新郎太紧张而忘了歌词。", answerKo: "신랑이 너무 긴장한 나머지 노래 가사를 잊어버렸어요." }
        ],
        drills: [
          { pattern: "V/A-더니", promptZh: "说“Jimin 说今年内想结婚，结果真的结婚了”。", answerKo: "지민 씨가 올해 안에 결혼하고 싶다고 하더니 결혼했어요." },
          { pattern: "V/A-(으)ㄴ 나머지", promptZh: "说“新郎太兴奋了，边唱歌边跳舞”。", answerKo: "신랑이 너무 신난 나머지 노래를 부르면서 춤을 췄어요." }
        ],
        translations: {
          en: {
            scene: "Yiling asks Angela what she did over the weekend. Angela says she went to Jimin's wedding and explains the wedding order and a funny moment.",
            learningPoints: [
              "오랫동안 연애를 하더니 드디어 결혼했네요 describes the result after a long relationship.",
              "신랑이 너무 긴장한 나머지 노래 가사를 잊어버렸어요 explains a result caused by nervousness.",
              "Wedding order: candle lighting, bride and groom entrance, vows, officiant's speech, congratulatory song."
            ]
          }
        }
      }
    ],
    culture: {
      titleKo: "성년의 날",
      titleZh: "成年日",
      page: "58",
      summaryZh: "介绍韩国成年礼从传统冠礼、笄礼到现代“成年日”的变化，以及满 19 岁后获得的权利、义务和责任。",
      paragraphs: [
        {
          ko: "예로부터 한국에서는 아이가 성인이 된 것을 기념하여 축하하는 의식을 가졌다. 과거에는 '관례, 계례'라는 의식을 행했는데 남자는 15~20세 사이에 상투를 올리고, 여자는 15세가 되면 비녀를 꽂았다. 이 의식을 가지면 성인으로 인정을 받았다.",
          zh: "自古以来，韩国会举行仪式来纪念并祝贺孩子成年。过去有叫作“冠礼、笄礼”的仪式，男子在15到20岁之间束发，女子到15岁时插发簪。举行这个仪式后，就会被认可为成年人。",
          guide: "관례/계례 是传统成年仪式；상투、비녀 都和传统发式有关。",
          translations: {
            en: {
              translation: "Since long ago, Korea held ceremonies to celebrate a child becoming an adult. In the past, ceremonies called gwanrye and gyerye were performed: men put up a topknot between ages 15 and 20, and women wore a hairpin at age 15. After these ceremonies, they were recognized as adults.",
              guide: "관례 and 계례 were traditional coming-of-age ceremonies."
            }
          }
        },
        {
          ko: "현대 한국에서는 매년 5월 셋째 월요일을 성년의 날로 정하여 만 19세가 되는 젊은이들이 성인이 되었음을 알린다. 그렇지만 요즘 성년의 날이 오면 특별한 행사에 참여하는 사람보다는 친구들끼리 선물을 주고받으며 축하하는 사람들이 더 많다.",
          zh: "现代韩国把每年5月第三个星期一定为成年日，用来告知满19岁的年轻人已经成为成年人。不过现在到了成年日，比起参加特别活动，更多人是在朋友之间互送礼物并庆祝。",
          guide: "만 19세 是“周岁19岁”；친구들끼리 表示朋友之间。",
          translations: {
            en: {
              translation: "In modern Korea, the third Monday of May is designated as Coming-of-Age Day, announcing that young people who turn 19 have become adults. These days, however, more people celebrate by exchanging gifts with friends than by attending special events.",
              guide: "만 19세 means age 19 in full years."
            }
          }
        },
        {
          ko: "만 19세가 되면 성인으로서 권리와 의무, 책임을 갖게 된다. 음주나 흡연이 가능하고 부모의 동의가 없어도 결혼할 수 있다. 신용 카드와 휴대 전화도 자신의 이름으로 가질 수 있고 사업자 등록도 할 수 있게 된다. 할 수 있는 것이 많아지면서 법을 지키지 않았을 때의 책임도 커진다.",
          zh: "满19岁后，就会作为成年人拥有权利、义务和责任。可以饮酒或吸烟，不需要父母同意也可以结婚。信用卡和手机也可以以自己的名义办理，也可以进行商业登记。能做的事情变多的同时，不遵守法律时需要承担的责任也会变大。",
          guide: "文章的重点不是“自由变多”，而是权利、义务和责任同时增加。",
          translations: {
            en: {
              translation: "At age 19, a person gains rights, duties, and responsibilities as an adult. Drinking and smoking become allowed, and marriage is possible without parental consent. Credit cards and mobile phones can be registered under one's own name, and business registration becomes possible. As the number of things one can do increases, responsibility for breaking the law also grows.",
              guide: "The key idea is that rights and responsibilities increase together."
            }
          }
        }
      ],
      keyTerms: [
        { ko: "성년의 날", zh: "成年日；韩国每年5月第三个星期一", translations: { en: { meaning: "Coming-of-Age Day, the third Monday of May in Korea" } } },
        { ko: "관례 / 계례", zh: "传统成年仪式：男子冠礼、女子笄礼", translations: { en: { meaning: "traditional coming-of-age ceremonies for men and women" } } },
        { ko: "권리와 의무, 책임", zh: "权利、义务和责任；成年后的核心关键词", translations: { en: { meaning: "rights, duties, and responsibilities as an adult" } } }
      ],
      questions: [
        { q: "한국에서 성년의 날은 어떻게 변화했습니까?", zh: "韩国成年礼是怎样变化的？", answerZh: "过去举行 관례、계례 等仪式，现在把每年5月第三个星期一定为成年日，更多人和朋友互送礼物庆祝。", translations: { en: { translation: "How has Coming-of-Age Day changed in Korea?", answer: "In the past, people held ceremonies such as gwanrye and gyerye. Today, the third Monday of May is Coming-of-Age Day, and many people celebrate by exchanging gifts with friends." } } },
        { q: "성년이 되면 갖게 되는 권리와 의무는 무엇입니까?", zh: "成年后会获得哪些权利和义务？", answerZh: "可以饮酒、吸烟、无需父母同意结婚，以自己名义办理信用卡和手机，也要承担更大的法律责任。", translations: { en: { translation: "What rights and duties does one gain as an adult?", answer: "Adults may drink, smoke, marry without parental consent, register credit cards and mobile phones under their own name, and carry greater legal responsibility." } } },
        { q: "여러분 고향에서는 성년이 된 것을 어떻게 기념합니까?", zh: "你的家乡怎样纪念成年？", answerZh: "可以结合自己家乡的习俗回答，例如家庭聚餐、学校仪式、赠送礼物或正式成年礼。", translations: { en: { translation: "How is becoming an adult celebrated in your hometown?", answer: "Answer with your own local custom, such as a family meal, school ceremony, gifts, or a formal coming-of-age ceremony." } } }
      ],
      translations: {
        en: {
          title: "Coming-of-Age Day",
          summary: "This text explains how Korean coming-of-age customs changed from traditional ceremonies to modern Coming-of-Age Day, and what rights, duties, and responsibilities people gain at age 19."
        }
      }
    },
    practice: [
      {
        type: "grammar",
        title: "V/A-더니",
        prompt: "用 V/A-더니 回答：후엔 열심히 돈을 모으다 → 좋은 집으로 이사하다",
        answer: "후엔 씨가 열심히 돈을 모으더니 좋은 집으로 이사했어요.",
        translations: { en: { title: "V/A-더니", prompt: "Use V/A-더니: Huyen saved money diligently -> moved to a nice house.", answer: "후엔 씨가 열심히 돈을 모으더니 좋은 집으로 이사했어요." } }
      },
      {
        type: "grammar",
        title: "V/A-(으)ㄴ 나머지",
        prompt: "用 V/A-(으)ㄴ 나머지 回答：주민들, 태풍 때문에 불안하다 → 밤에 한숨도 못 자다",
        answer: "주민들은 태풍 때문에 불안한 나머지 밤에 한숨도 못 잤어요.",
        translations: { en: { title: "V/A-(으)ㄴ 나머지", prompt: "Use V/A-(으)ㄴ 나머지: residents were anxious about the typhoon -> could not sleep at all.", answer: "주민들은 태풍 때문에 불안한 나머지 밤에 한숨도 못 잤어요." } }
      },
      {
        type: "speaking",
        title: "결혼식 절차",
        prompt: "用韩语说明韩国婚礼的主要流程。",
        answer: "먼저 화촉 점화를 하고 신랑, 신부가 입장해요. 그다음에 혼인 서약을 하고 주례사와 축가가 이어져요.",
        translations: { en: { title: "Wedding Procedure", prompt: "Explain the main order of a Korean wedding in Korean.", answer: "먼저 화촉 점화를 하고 신랑, 신부가 입장해요. 그다음에 혼인 서약을 하고 주례사와 축가가 이어져요." } }
      },
      {
        type: "reading",
        title: "가족 행사 이해",
        prompt: "돌잡이에서는 무엇을 보고 아기의 장래를 추측합니까?",
        answer: "아기가 무엇을 잡는지 보고 장래를 추측합니다.",
        translations: { en: { title: "Understanding Family Events", prompt: "In doljabi, what do people look at to guess a baby's future?", answer: "아기가 무엇을 잡는지 보고 장래를 추측합니다." } }
      },
      {
        type: "culture",
        title: "성년의 날",
        prompt: "성년이 되면 할 수 있는 일과 책임을 한 가지씩 말해 보세요.",
        answer: "성년이 되면 부모님의 동의 없이 결혼할 수 있고, 법을 지키지 않았을 때의 책임도 커집니다.",
        translations: { en: { title: "Coming-of-Age Day", prompt: "Say one thing adults can do and one responsibility they gain.", answer: "성년이 되면 부모님의 동의 없이 결혼할 수 있고, 법을 지키지 않았을 때의 책임도 커집니다." } }
      }
    ],
    translations: {
      en: {
        title: "Korean Ceremonies",
        goals: [
          "Explain the basic procedures and etiquette of Korean weddings and funerals.",
          "Use V/A-더니 to connect an observed change with a later result.",
          "Use V/A-(으)ㄴ 나머지 to express a result caused by an excessive state.",
          "Read a text about family ceremonies and understand the meaning of Coming-of-Age Day in Korea."
        ]
      }
    }
  };
})();
