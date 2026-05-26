(() => {
  const makeTips = (tips) => (tips || []).map((text) => {
    const [type, body] = text.includes(":") ? text.split(/:(.+)/) : ["collocation", text];
    return { type, text: body.trim() };
  });

  const vocabulary = [
    ["문화유산", "文化遗产", "名词", "cultural heritage", "noun", "문화유산을 잘 보존해야 해요.", "应该好好保护文化遗产。", "Cultural heritage should be preserved well.", "60", "단원 제목", ["collocation:문화유산을 보존하다"]],
    ["문화유산 관련 어휘", "文化遗产相关词汇", "名词短语", "vocabulary related to cultural heritage", "noun phrase", "문화유산 관련 어휘를 공부해요.", "学习文化遗产相关词汇。", "We study vocabulary related to cultural heritage.", "60", "단원 제목", ["collocation:관련 어휘"]],
    ["장소를 추천하다", "推荐地点", "动词短语", "to recommend a place", "verb phrase", "문화유산을 볼 수 있는 장소를 추천해 주세요.", "请推荐能看文化遗产的地方。", "Please recommend a place where cultural heritage can be seen.", "60", "단원 제목", ["collocation:장소를 추천하다"]],
    ["소개하는 글", "介绍文章", "名词短语", "introductory writing", "noun phrase", "문화유산을 소개하는 글을 써 보세요.", "请写一篇介绍文化遗产的文章。", "Write an introduction to a cultural heritage item.", "60", "단원 제목", ["collocation:소개하는 글을 쓰다"]],
    ["아리랑", "阿里郎", "名词", "Arirang", "noun", "아리랑은 한국 민요 중 가장 유명해요.", "阿里郎是韩国民谣中最有名的。", "Arirang is the most famous Korean folk song.", "60", "단원 제목", ["collocation:아리랑을 부르다"]],
    ["자연 유산", "自然遗产", "名词", "natural heritage", "noun", "한라산 백록담은 자연 유산으로 소개할 수 있어요.", "汉拿山白鹿潭可以作为自然遗产介绍。", "Hallasan Baengnokdam can be introduced as natural heritage.", "62", "어휘", ["collocation:자연 유산을 보다"]],
    ["무형 유산", "非物质遗产", "名词", "intangible heritage", "noun", "판소리는 한국의 무형 유산이에요.", "盘索里是韩国的非物质遗产。", "Pansori is Korean intangible heritage.", "62", "어휘", ["collocation:무형 유산"]],
    ["기록 유산", "记录遗产，文献遗产", "名词", "documentary heritage", "noun", "훈민정음 해례본은 기록 유산이에요.", "《训民正音解例本》是记录遗产。", "Hunminjeongeum Haeryebon is documentary heritage.", "62", "어휘", ["collocation:기록 유산"]],
    ["문화재", "文化财，文物", "名词", "cultural property", "noun", "문화재는 역사적인 가치가 매우 커요.", "文化财的历史价值很大。", "Cultural properties have great historical value.", "62", "어휘", ["collocation:문화재를 보존하다"]],
    ["유적지", "遗址，历史遗迹地", "名词", "historic site", "noun", "한국 역사를 배우려면 유적지에 가 보세요.", "想学韩国历史的话去遗址看看吧。", "If you want to learn Korean history, visit historic sites.", "62", "어휘", ["collocation:유적지에 가다"]],
    ["유물", "遗物，文物", "名词", "artifact; relic", "noun", "경주에는 옛 유물이 많아요.", "庆州有很多古代文物。", "Gyeongju has many old relics.", "62", "어휘", ["collocation:옛 유물"]],
    ["한라산 백록담", "汉拿山白鹿潭", "名词", "Hallasan Baengnokdam crater lake", "noun", "백록담은 한라산 정상에 있는 호수예요.", "白鹿潭是汉拿山山顶的湖。", "Baengnokdam is a lake at the summit of Hallasan.", "62", "어휘", ["collocation:한라산 정상"]],
    ["훈민정음 해례본", "训民正音解例本", "名词", "Hunminjeongeum Haeryebon", "noun", "훈민정음 해례본은 한글의 원리를 설명한 책이에요.", "《训民正音解例本》是说明韩文原理的书。", "Hunminjeongeum Haeryebon explains the principles of Hangeul.", "62", "어휘", ["usage:기록 유산"]],
    ["성산 일출봉", "城山日出峰", "名词", "Seongsan Ilchulbong", "noun", "성산 일출봉에서는 아름다운 일출을 볼 수 있어요.", "在城山日出峰可以看到美丽日出。", "You can see a beautiful sunrise at Seongsan Ilchulbong.", "62", "어휘", ["collocation:성산 일출봉"]],
    ["수원 화성", "水原华城", "名词", "Suwon Hwaseong Fortress", "noun", "수원 화성은 조선 시대의 성곽이에요.", "水原华城是朝鲜时代的城郭。", "Suwon Hwaseong is a fortress from the Joseon period.", "62", "어휘", ["collocation:조선 시대의 성곽"]],
    ["조선 시대", "朝鲜时代", "名词", "Joseon period", "noun", "창덕궁은 조선 시대의 궁궐이에요.", "昌德宫是朝鲜时代的宫殿。", "Changdeokgung is a palace from the Joseon period.", "62", "어휘", ["collocation:조선 시대의"]],
    ["산 정상", "山顶", "名词", "mountain summit", "noun", "백록담은 산 정상에 있는 호수예요.", "白鹿潭是山顶上的湖。", "Baengnokdam is a lake at a mountain summit.", "62", "어휘", ["collocation:산 정상에 있다"]],
    ["호수", "湖水，湖", "名词", "lake", "noun", "한라산 정상에는 호수가 있어요.", "汉拿山山顶有一个湖。", "There is a lake at the summit of Hallasan.", "62", "어휘", ["collocation:호수가 있다"]],
    ["사찰", "寺庙", "名词", "Buddhist temple", "noun", "불국사는 신라 시대의 사찰이에요.", "佛国寺是新罗时代的寺庙。", "Bulguksa is a Buddhist temple from the Silla period.", "62", "어휘", ["collocation:신라 시대의 사찰"]],
    ["성곽", "城郭，城墙", "名词", "fortress wall", "noun", "수원 화성은 조선 시대의 성곽이에요.", "水原华城是朝鲜时代的城郭。", "Suwon Hwaseong is a fortress wall from the Joseon period.", "62", "어휘", ["collocation:성곽을 둘러보다"]],
    ["얼마나 V/A-는지 모르다", "不知道多么……；非常……", "语法表达", "how very...; you do not know how...", "grammar expression", "관광객이 얼마나 많이 방문하는지 몰라요.", "游客来得非常多。", "You would not believe how many tourists visit.", "63", "문법 1", ["form:얼마나 + V/A-는지 모르다"]],
    ["한옥 체험", "韩屋体验", "名词", "hanok experience", "noun", "요즘 한옥 체험이 외국인 관광객들에게 인기 있어요.", "最近韩屋体验在外国游客中很受欢迎。", "Hanok experiences are popular among foreign tourists these days.", "63", "문법 1", ["collocation:한옥 체험을 하다"]],
    ["인기 있다", "受欢迎", "形容词短语", "to be popular", "adjective phrase", "한옥 체험이 얼마나 인기 있는지 몰라요.", "韩屋体验特别受欢迎。", "Hanok experiences are incredibly popular.", "63", "문법 1", ["collocation:인기 있다"]],
    ["기회", "机会", "名词", "opportunity", "noun", "기회가 있을 때 저도 꼭 해 보고 싶어요.", "有机会时我也一定想试试。", "I want to try it when I have the chance.", "63", "문법 1", ["collocation:기회가 있을 때"]],
    ["과학적인 글자", "科学的文字", "名词短语", "scientific writing system", "noun phrase", "한글은 과학적인 글자예요.", "韩文是科学的文字。", "Hangeul is a scientific writing system.", "63", "문법 1", ["collocation:과학적인 글자"]],
    ["화려하다", "华丽，绚丽", "形容词", "splendid; colorful", "adjective", "남산 타워 야경이 얼마나 화려한지 몰라요.", "南山塔夜景特别华丽。", "The night view of Namsan Tower is wonderfully splendid.", "63", "문법 1", ["collocation:야경이 화려하다"]],
    ["방문하다", "访问，参观", "动词", "to visit", "verb", "창덕궁에 관광객이 많이 방문해요.", "很多游客参观昌德宫。", "Many tourists visit Changdeokgung.", "63", "문법 1", ["collocation:많이 방문하다"]],
    ["내부", "内部", "名词", "interior", "noun", "궁궐 내부가 매우 웅장해요.", "宫殿内部非常雄伟。", "The palace interior is grand.", "63", "문법 1", ["collocation:내부가 웅장하다"]],
    ["웅장하다", "雄伟，壮观", "形容词", "grand; magnificent", "adjective", "창덕궁 내부가 얼마나 웅장한지 몰라요.", "昌德宫内部非常雄伟。", "You would not believe how magnificent Changdeokgung's interior is.", "63", "문법 1", ["collocation:웅장하다"]],
    ["장점", "优点，长处", "名词", "strength; advantage", "noun", "우리 반 친구들의 장점에 대해 이야기해 보세요.", "请谈谈班上同学的优点。", "Talk about your classmates' strengths.", "63", "문법 1", ["collocation:장점에 대해 말하다"]],
    ["V/A-든지", "无论……；不管……", "语法表达", "whether... or...; no matter...", "grammar expression", "평일에 가든지 주말에 가든지 다 좋아요.", "平日去还是周末去都可以。", "Whether we go on a weekday or weekend is fine.", "64", "문법 2", ["form:V/A-든지"]],
    ["이메일", "电子邮件", "名词", "email", "noun", "이메일을 하든지 메시지를 보내든지 할게요.", "我会发邮件或发消息。", "I will email or send a message.", "64", "문법 2", ["collocation:이메일을 하다"]],
    ["에스엔에스", "社交网络服务，SNS", "名词", "SNS; social media", "noun", "에스엔에스로 보내든지 할게요.", "我会用社交软件发给你。", "I will send it through social media.", "64", "문법 2", ["abbrev:SNS"]],
    ["아무 때나", "任何时候", "副词短语", "any time", "adverbial phrase", "비가 오든지 안 오든지 아무 때나 가도 돼요.", "不管下不下雨，任何时候都可以去。", "Whether it rains or not, you can go any time.", "64", "문법 2", ["collocation:아무 때나"]],
    ["역사적인 가치", "历史价值", "名词短语", "historical value", "noun phrase", "유물은 모두 역사적인 가치가 있어요.", "遗物都有历史价值。", "Artifacts all have historical value.", "64", "문법 2", ["collocation:역사적인 가치가 있다"]],
    ["평일", "平日，工作日", "名词", "weekday", "noun", "저는 평일에 가든지 주말에 가든지 다 좋아요.", "我平日去或周末去都可以。", "I am fine going on a weekday or weekend.", "64", "문법 2", ["contrast:평일 / 주말"]],
    ["주말", "周末", "名词", "weekend", "noun", "주말에 제주도에 가요.", "周末去济州岛。", "I am going to Jeju Island on the weekend.", "64", "문법 2", ["contrast:평일 / 주말"]],
    ["섭취하다", "摄取", "动词", "to take in; to consume", "verb", "감기가 빨리 나으려면 비타민을 섭취하세요.", "想感冒快点好，就摄取维生素。", "Take vitamins if you want to recover from a cold quickly.", "64", "문법 2", ["collocation:비타민을 섭취하다"]],
    ["고민을 해결하다", "解决烦恼", "动词短语", "to solve a concern", "verb phrase", "전문가의 조언을 받든지 가족에게 말하든지 해 보세요.", "试着听专家建议或跟家人说说。", "Try getting expert advice or talking to family.", "64", "문법 2", ["collocation:고민을 해결하다"]],
    ["전문가", "专家", "名词", "expert", "noun", "전문가의 조언을 받아 보세요.", "请试着听专家的建议。", "Try getting advice from an expert.", "64", "문법 2", ["collocation:전문가의 조언"]],
    ["민속촌", "民俗村", "名词", "folk village", "noun", "전통문화를 경험하려면 민속촌에 가 보세요.", "想体验传统文化的话去民俗村吧。", "Visit a folk village to experience traditional culture.", "64", "문법 2", ["collocation:민속촌에 가다"]],
    ["한옥 마을", "韩屋村", "名词", "hanok village", "noun", "한옥 마을에서 전통문화를 경험할 수 있어요.", "在韩屋村可以体验传统文化。", "You can experience traditional culture in a hanok village.", "64", "문법 2", ["collocation:한옥 마을"]],
    ["벼룩시장", "跳蚤市场", "名词", "flea market", "noun", "물건을 싸게 사려면 벼룩시장을 이용해 보세요.", "想便宜买东西的话可以利用跳蚤市场。", "Use a flea market if you want to buy things cheaply.", "64", "문법 2", ["collocation:벼룩시장을 이용하다"]],
    ["알뜰 장터", "实惠集市", "名词", "budget market", "noun", "알뜰 장터를 이용하면 물건을 싸게 살 수 있어요.", "利用实惠集市可以买到便宜东西。", "You can buy things cheaply at a budget market.", "64", "문법 2", ["collocation:알뜰 장터"]],
    ["여행 칼럼", "旅行专栏", "名词", "travel column", "noun", "블로그에 올린 여행 칼럼이 재미있어요.", "发在博客上的旅行专栏很有趣。", "The travel column posted on the blog is interesting.", "65", "말하기", ["collocation:여행 칼럼을 올리다"]],
    ["여행 정보", "旅行信息", "名词", "travel information", "noun", "여행 정보에 대해 궁금한 게 있으면 물어보세요.", "如果对旅行信息有好奇的地方，请问我。", "Ask me if you have questions about travel information.", "65", "말하기", ["collocation:여행 정보"]],
    ["공부할 수 있는 곳", "可以学习的地方", "名词短语", "a place where one can study", "noun phrase", "문화유산도 공부할 수 있는 곳이 있어요?", "有没有也能学习文化遗产的地方？", "Is there a place where I can also study cultural heritage?", "65", "말하기", ["collocation:공부할 수 있는 곳"]],
    ["불국사", "佛国寺", "名词", "Bulguksa Temple", "noun", "불국사에는 꼭 가 보세요.", "一定要去佛国寺看看。", "Make sure to visit Bulguksa Temple.", "65", "말하기", ["collocation:불국사에 가다"]],
    ["불교 문화", "佛教文化", "名词", "Buddhist culture", "noun", "불국사에서는 신라 시대의 불교 문화를 느낄 수 있어요.", "在佛国寺可以感受到新罗时代的佛教文化。", "At Bulguksa, you can feel Buddhist culture from the Silla period.", "65", "말하기", ["collocation:불교 문화를 느끼다"]],
    ["느끼다", "感受", "动词", "to feel", "verb", "그 시대의 분위기를 생생하게 느낄 수 있어요.", "可以生动地感受那个时代的氛围。", "You can vividly feel the atmosphere of that era.", "65", "말하기", ["collocation:느낄 수 있다"]],
    ["일출", "日出", "名词", "sunrise", "noun", "성산 일출봉에서는 아름다운 일출을 볼 수 있어요.", "在城山日出峰可以看到美丽日出。", "You can see a beautiful sunrise at Seongsan Ilchulbong.", "65", "말하기", ["collocation:일출을 보다"]],
    ["화산 작용", "火山作用", "名词", "volcanic activity", "noun", "백록담은 화산 작용으로 만들어진 자연 경관이에요.", "白鹿潭是火山作用形成的自然景观。", "Baengnokdam is a natural landscape formed by volcanic activity.", "65", "말하기", ["collocation:화산 작용으로 만들어지다"]],
    ["우수성", "优越性，优秀之处", "名词", "excellence", "noun", "한글의 우수성이 세계적으로 인정받았어요.", "韩文的优秀性得到世界认可。", "The excellence of Hangeul is recognized worldwide.", "66", "듣기", ["collocation:우수성을 인정받다"]],
    ["학자", "学者", "名词", "scholar", "noun", "학자들이 한글의 우수성에 대해 이야기했어요.", "学者们谈论韩文的优秀性。", "Scholars talked about the excellence of Hangeul.", "66", "듣기", ["collocation:학자"]],
    ["보존하다", "保存，保护", "动词", "to preserve", "verb", "문화유산을 잘 보존해야 해요.", "应该好好保护文化遗产。", "We should preserve cultural heritage well.", "66", "발음", ["collocation:문화유산을 보존하다"]],
    ["문화유산을 전승하다", "传承文化遗产", "动词短语", "to pass down cultural heritage", "verb phrase", "문화유산을 후손들에게 전승해야 해요.", "应该把文化遗产传承给后代。", "Cultural heritage should be passed down to descendants.", "67", "읽기 전", ["collocation:후손들에게 전승하다"]],
    ["유적지를 탐방하다", "探访遗址", "动词短语", "to explore a historic site", "verb phrase", "영릉에 문화유산 탐방을 다녀왔어요.", "去英陵进行了文化遗产探访。", "I went on a cultural heritage field trip to Yeongneung.", "67", "읽기 전", ["collocation:탐방을 다녀오다"]],
    ["조상", "祖先", "名词", "ancestor", "noun", "문화재는 조상에게 받은 것입니다.", "文化财是从祖先那里得到的东西。", "Cultural properties are things inherited from ancestors.", "67", "읽기 전", ["contrast:조상 / 후손"]],
    ["후손", "后代", "名词", "descendant", "noun", "문화유산을 후손들에게 물려줘야 해요.", "应该把文化遗产传给后代。", "Cultural heritage should be passed on to descendants.", "67", "읽기 전", ["contrast:조상 / 후손"]],
    ["문화유산 아카데미", "文化遗产学院/课程", "名词", "cultural heritage academy", "noun", "박물관에서 한국의 문화유산 아카데미가 열려요.", "博物馆开设韩国文化遗产课程。", "The museum runs a Korean Cultural Heritage Academy.", "67", "읽기 전", ["collocation:아카데미에 다니다"]],
    ["수료증", "结业证书", "名词", "certificate of completion", "noun", "모두 참석한 분께 수료증을 발급해요.", "给全部参加的人发结业证书。", "A certificate is issued to those who attend all sessions.", "67", "읽기 전", ["collocation:수료증 발급"]],
    ["발급", "发放，签发", "名词", "issuance", "noun", "수료증 발급이 가능합니다.", "可以发放结业证书。", "Certificate issuance is available.", "67", "읽기 전", ["collocation:발급하다"]],
    ["이론 강의", "理论讲座", "名词", "theory lecture", "noun", "이론 강의와 탐방에 모두 참석했어요.", "理论讲座和探访都参加了。", "I attended both theory lectures and field trips.", "67", "읽기 전", ["collocation:이론 강의"]],
    ["영릉", "英陵", "名词", "Yeongneung Royal Tomb", "noun", "영릉은 세종 대왕의 능이에요.", "英陵是世宗大王的陵墓。", "Yeongneung is King Sejong's royal tomb.", "68", "읽기", ["collocation:영릉에 가다"]],
    ["세종 대왕", "世宗大王", "名词", "King Sejong the Great", "noun", "세종 대왕은 한글을 만든 왕으로 알려져 있어요.", "世宗大王以创造韩文的国王而闻名。", "King Sejong is known as the king who created Hangeul.", "68", "읽기", ["collocation:세종 대왕"]],
    ["능", "陵墓", "名词", "royal tomb", "noun", "왕이 죽고 나면 왕릉에 묻힙니다.", "国王去世后被埋葬在王陵。", "When a king died, he was buried in a royal tomb.", "68", "읽기", ["collocation:왕의 능"]],
    ["왕릉", "王陵", "名词", "royal tomb", "noun", "조선 왕릉은 세계 문화유산으로 지정되었어요.", "朝鲜王陵被指定为世界文化遗产。", "Joseon royal tombs were designated as World Cultural Heritage.", "68", "읽기", ["collocation:조선 왕릉"]],
    ["왕비", "王妃", "名词", "queen", "noun", "영릉은 왕과 왕비가 함께 묻힌 곳이에요.", "英陵是国王和王妃合葬的地方。", "Yeongneung is where a king and queen were buried together.", "68", "읽기", ["collocation:왕과 왕비"]],
    ["묻히다", "被埋葬", "动词", "to be buried", "verb", "왕과 왕비가 함께 묻혔어요.", "国王和王妃被一起埋葬。", "The king and queen were buried together.", "68", "읽기", ["collocation:묻히다"]],
    ["문화 해설사", "文化讲解员", "名词", "cultural heritage guide", "noun", "문화 해설사의 설명을 들으면서 왕릉을 둘러보았어요.", "一边听文化讲解员说明，一边参观王陵。", "I toured the royal tomb while listening to a cultural heritage guide.", "68", "읽기", ["collocation:문화 해설사"]],
    ["둘러보다", "参观，环视", "动词", "to look around; to tour", "verb", "왕릉을 둘러보았어요.", "参观了王陵。", "I toured the royal tomb.", "68", "읽기", ["collocation:둘러보다"]],
    ["영혼", "灵魂", "名词", "spirit; soul", "noun", "왕의 영혼을 모신 곳은 종묘입니다.", "供奉国王灵魂的地方是宗庙。", "The place that enshrines the king's spirit is Jongmyo.", "68", "읽기", ["collocation:영혼을 모시다"]],
    ["종묘", "宗庙", "名词", "Jongmyo Shrine", "noun", "종묘는 왕의 영혼을 모신 곳이에요.", "宗庙是供奉国王灵魂的地方。", "Jongmyo is where the spirits of kings are enshrined.", "68", "읽기", ["collocation:종묘"]],
    ["절대적인 존재", "绝对的存在", "名词短语", "absolute being", "noun phrase", "조선 시대 사람들에게 왕은 절대적인 존재였어요.", "对朝鲜时代的人来说，国王是绝对的存在。", "For people in the Joseon period, the king was an absolute being.", "68", "읽기", ["collocation:절대적인 존재"]],
    ["진지하다", "认真，严肃", "形容词", "serious; sincere", "adjective", "왕릉의 위치와 방향에 대해 진지하게 생각했어요.", "认真思考了王陵的位置和方向。", "They seriously considered the location and direction of royal tombs.", "68", "읽기", ["collocation:진지하게 생각하다"]],
    ["지정되다", "被指定", "动词", "to be designated", "verb", "조선 왕릉은 유네스코 세계 문화유산으로 지정되었어요.", "朝鲜王陵被指定为联合国教科文组织世界文化遗产。", "Joseon royal tombs were designated as UNESCO World Cultural Heritage.", "68", "읽기", ["collocation:세계 문화유산으로 지정되다"]],
    ["건축", "建筑", "名词", "architecture", "noun", "조선 왕릉에서는 전통과 건축을 느낄 수 있어요.", "在朝鲜王陵可以感受到传统和建筑。", "You can feel tradition and architecture at Joseon royal tombs.", "68", "읽기", ["set:전통, 정치, 건축, 예술, 조경"]],
    ["조경", "造景，园林设计", "名词", "landscaping", "noun", "왕릉의 조경은 역사적인 가치가 커요.", "王陵的造景有很大的历史价值。", "The landscaping of royal tombs has great historical value.", "68", "읽기", ["collocation:조경"]],
    ["생생하게", "生动地", "副词", "vividly", "adverb", "그 시대의 분위기를 생생하게 느낄 수 있어요.", "可以生动地感受那个时代的氛围。", "You can vividly feel the atmosphere of that era.", "68", "읽기", ["collocation:생생하게 느끼다"]],
    ["민요", "民谣", "名词", "folk song", "noun", "아리랑은 한국 민요 중 가장 유명해요.", "阿里郎是韩国民谣中最有名的。", "Arirang is the most famous Korean folk song.", "70", "문화와 정보", ["collocation:한국 민요"]],
    ["노동요", "劳动歌", "名词", "work song", "noun", "아리랑은 원래 노동요였어요.", "阿里郎原本是劳动歌。", "Arirang was originally a work song.", "70", "문화와 정보", ["collocation:노동요"]],
    ["노랫말", "歌词", "名词", "lyrics", "noun", "아리랑의 노랫말에는 사랑과 이별이 담겨 있어요.", "阿里郎歌词里包含爱情和离别。", "The lyrics of Arirang contain love and farewell.", "70", "문화와 정보", ["collocation:노랫말을 보다"]],
    ["시집살이", "婆家生活，婚后婆家压力", "名词", "married woman's life with in-laws", "noun", "아리랑의 노랫말에는 시집살이의 어려움도 담겨 있어요.", "阿里郎歌词中也包含婆家生活的艰辛。", "The lyrics of Arirang also contain the hardship of life with in-laws.", "70", "문화와 정보", ["collocation:시집살이의 어려움"]],
    ["한", "恨，郁结情绪", "名词", "han; deep sorrow", "noun", "아리랑은 한국인의 정서인 한을 대변해요.", "阿里郎代表韩国人的情感“恨”。", "Arirang represents han, a Korean emotion of deep sorrow.", "70", "문화와 정보", ["usage:한국인의 정서"]],
    ["대변하다", "代表，代言", "动词", "to represent", "verb", "아리랑은 한국인의 정서를 잘 대변해요.", "阿里郎很好地代表韩国人的情感。", "Arirang represents Korean emotions well.", "70", "문화와 정보", ["collocation:정서를 대변하다"]],
    ["동질성", "同质性，共同身份感", "名词", "shared identity", "noun", "아리랑은 한국인의 동질성을 확인하게 해 줘요.", "阿里郎让人确认韩国人的共同身份感。", "Arirang helps Koreans affirm their shared identity.", "70", "문화와 정보", ["collocation:동질성을 확인하다"]],
    ["단결", "团结", "名词", "unity", "noun", "단결이 필요할 때 아리랑을 자주 불렀어요.", "需要团结时常常唱阿里郎。", "Arirang was often sung when unity was needed.", "70", "문화와 정보", ["collocation:단결이 필요하다"]],
    ["식민 통치", "殖民统治", "名词", "colonial rule", "noun", "일본 식민 통치 시기에는 저항 정신을 표현하는 노래가 되었어요.", "日本殖民统治时期，它成为表达抵抗精神的歌曲。", "During Japanese colonial rule, it became a song expressing resistance.", "70", "문화와 정보", ["collocation:일본 식민 통치"]],
    ["저항 정신", "抵抗精神", "名词", "spirit of resistance", "noun", "아리랑은 저항 정신을 표현하는 노래가 되기도 했어요.", "阿里郎也曾成为表达抵抗精神的歌曲。", "Arirang also became a song expressing resistance.", "70", "문화와 정보", ["collocation:저항 정신"]],
    ["편곡되다", "被改编", "动词", "to be arranged", "verb", "현대에 와서 아리랑은 새롭게 편곡되어 불리기도 해요.", "到了现代，阿里郎也会被重新改编演唱。", "In modern times, Arirang is newly arranged and sung.", "70", "문화와 정보", ["collocation:새롭게 편곡되다"]],
    ["친근하게 다가가다", "亲近地走近，被亲切接受", "动词短语", "to become approachable", "verb phrase", "아리랑은 전 세계인에게도 친근하게 다가가고 있어요.", "阿里郎也正亲近地走向全世界的人。", "Arirang is becoming familiar and approachable to people around the world.", "70", "문화와 정보", ["collocation:친근하게 다가가다"]]
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
  window.lessonGuideL4LessonChunks["l4-05"] = {
    id: "l4-05",
    number: 5,
    titleKo: "문화유산",
    titleZh: "文化遗产",
    pages: "60-71",
    status: "draft",
    progress: {
      vocabulary: "draft-p60-p71",
      dialogue: "draft-p63-p65",
      culture: "draft-p70",
      practice: "draft-p63-p70"
    },
    vocabularySources: [
      { page: 60, label: "단원 제목", note: "课题、活动和文化主题" },
      { page: 62, label: "어휘", note: "文化遗产分类和代表遗产" },
      { page: 63, label: "문법 1", note: "얼마나 V/A-는지 모르다" },
      { page: 64, label: "문법 2", note: "V/A-든지" },
      { page: 65, label: "말하기", note: "旅行信息和文化遗产推荐对话" },
      { page: 66, label: "듣기/발음", note: "한글 우수성과 발음" },
      { page: 67, label: "읽기 전", note: "문화유산 보존과 아카데미" },
      { page: 68, label: "읽기", note: "아는 만큼 보인다" },
      { page: 70, label: "문화와 정보", note: "아리랑" },
      { page: 71, label: "배운 어휘 확인", note: "本课复习词汇补充" }
    ],
    goals: [
      "能介绍韩国文化遗产的类型、位置和特点。",
      "能用 얼마나 V/A-는지 모르다 强调程度非常高。",
      "能用 V/A-든지 表示选择不受限制。",
      "能阅读文化遗产探访文章，并理解 아리랑 的文化意义。"
    ],
    grammar: [
      {
        pattern: "얼마나 V/A-는지 모르다",
        zh: "不知道多么……；非常……",
        guide: "表面说“不知道多么……”，实际用于强烈强调程度。动词用 -는지，形容词按现在连体形变化。",
        examples: [
          { ko: "한옥 체험이 얼마나 인기 있는지 몰라요.", zh: "韩屋体验特别受欢迎。" },
          { ko: "창덕궁에 관광객이 얼마나 많이 방문하는지 몰라요.", zh: "昌德宫游客来得非常多。" }
        ],
        translations: {
          en: {
            meaning: "how very...; you would not believe how...",
            guide: "Literally says 'I do not know how...', but it emphasizes a very high degree."
          }
        }
      },
      {
        pattern: "V/A-든지",
        zh: "无论……；不管……",
        guide: "表示选哪一个都没关系，常用于 두 가지 선택지 或 아무/언제/어디 等不限条件。",
        examples: [
          { ko: "평일에 가든지 주말에 가든지 다 좋아요.", zh: "平日去还是周末去都可以。" },
          { ko: "메일로 보내든지 에스엔에스로 보내든지 할게요.", zh: "我会用邮件或社交软件发给你。" }
        ],
        translations: {
          en: {
            meaning: "whether... or...; no matter...",
            guide: "Shows that either choice or condition is acceptable."
          }
        }
      }
    ],
    vocabulary,
    dialogues: [
      {
        id: "dialogue-01",
        title: "한옥 체험의 인기",
        page: 63,
        source: "문법 1 대화",
        focus: "얼마나 V/A-는지 모르다",
        sceneZh: "정아라 说最近韩屋体验在外国游客中非常受欢迎，잠시드 表示有机会也想试试。",
        learningPoints: [
          "얼마나 인기 있는지 몰라요 是强调“非常受欢迎”。",
          "기회가 있을 때 꼭 해 보고 싶네요 表示“有机会一定想试试”。"
        ],
        lines: [
          { speaker: "정아라", ko: "요즘 외국인 관광객들에게 한옥 체험이 얼마나 인기 있는지 몰라요.", zh: "最近韩屋体验在外国游客中非常受欢迎。", guide: "얼마나 -는지 모르다 用来夸张强调程度。" },
          { speaker: "잠시드", ko: "그렇군요. 기회가 있을 때 저도 꼭 해 보고 싶네요.", zh: "原来如此。有机会的话我也一定想试试。", guide: "해 보다 表示尝试做某事。" }
        ],
        rolePlays: [
          { title: "인기 말하기", promptZh: "说韩屋体验特别受欢迎。", answerKo: "한옥 체험이 얼마나 인기 있는지 몰라요." },
          { title: "희망 말하기", promptZh: "说有机会也想一定试试。", answerKo: "기회가 있을 때 저도 꼭 해 보고 싶어요." }
        ],
        drills: [
          { pattern: "얼마나 V/A-는지 모르다", promptZh: "说“昌德宫游客来得特别多”。", answerKo: "창덕궁에 관광객이 얼마나 많이 방문하는지 몰라요." },
          { pattern: "얼마나 V/A-는지 모르다", promptZh: "说“内部非常雄伟”。", answerKo: "내부가 얼마나 웅장한지 몰라요." }
        ],
        translations: {
          en: {
            scene: "Jeong Ara says hanok experiences are extremely popular among foreign tourists, and Jamshid says he wants to try one too.",
            learningPoints: [
              "얼마나 인기 있는지 몰라요 strongly emphasizes that something is very popular.",
              "기회가 있을 때 꼭 해 보고 싶네요 means 'I would really like to try it when I have the chance.'"
            ]
          }
        }
      },
      {
        id: "dialogue-02",
        title: "제주도에 언제 갈까요?",
        page: 64,
        source: "문법 2 대화",
        focus: "V/A-든지",
        sceneZh: "후엔 和 박민수 讨论什么时候去济州岛，박민수 说平日或周末都可以。",
        learningPoints: [
          "평일에 가든지 주말에 가든지 表示两个选择都可以。",
          "다 좋아요 是“都可以/都好”。"
        ],
        lines: [
          { speaker: "후엔", ko: "우리 제주도에 언제 갈까요?", zh: "我们什么时候去济州岛？", guide: "언제 갈까요 用来一起商量时间。" },
          { speaker: "박민수", ko: "저는 평일에 가든지 주말에 가든지 다 좋아요.", zh: "我平日去或周末去都可以。", guide: "V-든지 V-든지 表示选择不限。" }
        ],
        rolePlays: [
          { title: "시간 묻기", promptZh: "询问什么时候去济州岛。", answerKo: "우리 제주도에 언제 갈까요?" },
          { title: "선택 열어 두기", promptZh: "说平日或周末去都可以。", answerKo: "평일에 가든지 주말에 가든지 다 좋아요." }
        ],
        drills: [
          { pattern: "V/A-든지", promptZh: "建议“想学韩国历史，可以看书或去遗址”。", answerKo: "책으로 공부하든지 유적지에 가든지 해 보세요." },
          { pattern: "V/A-든지", promptZh: "说“我会用邮件或 SNS 发给你”。", answerKo: "메일로 보내든지 에스엔에스로 보내든지 할게요." }
        ],
        translations: {
          en: {
            scene: "Huyen and Park Min-su discuss when to go to Jeju Island, and Min-su says either a weekday or weekend is fine.",
            learningPoints: [
              "평일에 가든지 주말에 가든지 means either choice is acceptable.",
              "다 좋아요 means 'both are fine'."
            ]
          }
        }
      },
      {
        id: "dialogue-03",
        title: "여행도 하고 문화유산도 공부할 수 있는 곳",
        page: 65,
        source: "말하기 대화",
        focus: "문화유산 추천하기",
        sceneZh: "아나이스 称赞 라민 的旅行专栏，并询问能旅行又能学习文化遗产的地方，라민 推荐佛国寺并说明可感受新罗佛教文化。",
        learningPoints: [
          "여행도 하고 문화유산도 공부할 수 있는 곳 用 도...도 表示两个目的都能满足。",
          "좋은 곳이 많지만 ...에는 꼭 가 보세요 是推荐时很自然的表达。",
          "보내든지 ...로 보내든지 할게요 用于说明信息发送方式都可以。"
        ],
        lines: [
          { speaker: "아나이스", ko: "라민 씨, 요즘도 여행 많이 다니지요? 라민 씨가 블로그에 올린 여행 칼럼이 얼마나 재미있는지 몰라요.", zh: "Ramin，你最近也经常旅行吧？你发在博客上的旅行专栏特别有趣。", guide: "얼마나 재미있는지 몰라요 强调“非常有趣”。" },
          { speaker: "라민", ko: "아이고, 고마워요. 혹시 여행 정보에 대해 궁금한 게 있으면 물어보세요.", zh: "哎呀，谢谢。如果对旅行信息有什么好奇的，就问我吧。", guide: "궁금한 게 있으면 是“如果有想知道的事”。" },
          { speaker: "아나이스", ko: "혹시 여행도 하고 문화유산도 공부할 수 있는 곳이 있어요?", zh: "有没有既能旅行又能学习文化遗产的地方？", guide: "도...도 表示两件事都包括。" },
          { speaker: "라민", ko: "좋은 곳이 많지만 불국사에는 꼭 가 보세요. 불국사는 신라 시대 사찰인데 그 시대의 불교 문화를 느낄 수 있어요.", zh: "好地方很多，不过一定要去佛国寺看看。佛国寺是新罗时代的寺庙，可以感受到那个时代的佛教文化。", guide: "사찰 是佛教寺庙；느낄 수 있다 是“能够感受到”。" },
          { speaker: "아나이스", ko: "그래요? 안 그래도 저도 가 보고 싶었던 곳이에요.", zh: "是吗？正好那也是我一直想去的地方。", guide: "안 그래도 表示“正好/本来就”。" },
          { speaker: "라민", ko: "필요하면 다른 정보도 줄게요. 메일로 보내든지 에스엔에스(SNS)로 보내든지 할게요.", zh: "需要的话我也给你其他信息。我会用邮件或 SNS 发给你。", guide: "보내든지...보내든지 表示发送方式任选。" },
          { speaker: "아나이스", ko: "아, 정말 고마워요.", zh: "啊，太谢谢了。", guide: "收到帮助时的自然感谢。" }
        ],
        rolePlays: [
          { title: "문화유산 장소 묻기", promptZh: "询问有没有能旅行又能学习文化遗产的地方。", answerKo: "여행도 하고 문화유산도 공부할 수 있는 곳이 있어요?" },
          { title: "불국사 추천하기", promptZh: "推荐佛国寺并说明能感受新罗佛教文化。", answerKo: "불국사에는 꼭 가 보세요. 신라 시대의 불교 문화를 느낄 수 있어요." }
        ],
        drills: [
          { pattern: "문화유산 소개", promptZh: "介绍城山日出峰。", answerKo: "성산 일출봉은 바다 위의 큰 화산섬인데 아름다운 일출을 볼 수 있어요." },
          { pattern: "V/A-든지", promptZh: "说“用邮件或 SNS 发都可以”。", answerKo: "메일로 보내든지 에스엔에스로 보내든지 해도 돼요." }
        ],
        translations: {
          en: {
            scene: "Anais praises Ramin's travel column and asks for a place where she can travel and study cultural heritage. Ramin recommends Bulguksa.",
            learningPoints: [
              "도...도 shows that both purposes are included.",
              "좋은 곳이 많지만 ...에는 꼭 가 보세요 is a natural recommendation pattern.",
              "보내든지 ...로 보내든지 할게요 gives flexible options."
            ]
          }
        }
      }
    ],
    culture: {
      titleKo: "아리랑",
      titleZh: "阿里郎",
      page: "70",
      summaryZh: "介绍阿里郎作为韩国代表性民谣的历史、歌词情感、共同体意义和现代变化。",
      paragraphs: [
        {
          ko: "아리랑은 한국 민요 중 가장 유명하다. 아리랑은 지역과 시기에 따라 다양하게 불리어 오늘에 이르고 있다. 옛날로부터 지금에 이르기까지 불린 아리랑이 모두 몇 종인지는 정확하게 알 수는 없으나 대략 60여 종이 있다고 한다.",
          zh: "阿里郎是韩国民谣中最有名的。阿里郎根据地区和时期以多种方式被传唱至今。从古至今被唱过的阿里郎到底有多少种无法准确知道，但据说大约有60多种。",
          guide: "지역과 시기에 따라 表示“根据地区和时期”；대략 是“大约”。",
          translations: {
            en: {
              translation: "Arirang is the most famous Korean folk song. It has been sung in various ways depending on region and time. It is not possible to know exactly how many versions have been sung from the past to today, but there are said to be about sixty.",
              guide: "지역과 시기에 따라 means 'depending on region and time'."
            }
          }
        },
        {
          ko: "아리랑은 원래 일을 하면서 겪는 힘듦을 이겨 내기 위하여 부른 노동요였다. 아리랑의 노랫말을 보면 사랑, 이별, 시집살이의 어려움 등을 담고 있으므로 한국인의 정서, 한을 대변한다. 이렇게 아리랑이 한국인의 정서를 잘 대변하기 때문에 한국인의 동질성을 확인하고 단결이 필요할 때 자주 불렸다. 그래서 일본 식민 통치 시기에는 저항 정신을 표현하는 노래가 되기도 했다.",
          zh: "阿里郎原本是人们劳动时为了克服辛苦而唱的劳动歌。从阿里郎的歌词来看，其中包含爱情、离别、婆家生活的艰难等内容，因此代表着韩国人的情感“恨”。正因为阿里郎很好地代表了韩国人的情感，所以在确认韩国人的共同身份、需要团结时常被传唱。因此，在日本殖民统治时期，它也成为表达抵抗精神的歌曲。",
          guide: "한 是韩国文化中特有的深层情绪；이겨 내다 是“克服”。",
          translations: {
            en: {
              translation: "Arirang was originally a work song sung to overcome hardship while working. Its lyrics contain love, farewell, and the hardships of married life, so it represents the Korean emotion of han. Because Arirang represents Korean emotions so well, it was often sung when Koreans needed to affirm shared identity and unity. During Japanese colonial rule, it also became a song expressing resistance.",
              guide: "한 is a culturally specific Korean emotion of deep sorrow or resentment."
            }
          }
        },
        {
          ko: "현대에 와서 아리랑은 새롭게 편곡되어 불리기도 한다. 빠르게 또는 느리게, 슬프게 또는 밝게 불리면서 아리랑은 또 다른 모습으로 현대 한국인에게 사랑을 받고 있다. 그리고 이제는 한국을 넘어 전 세계인에게도 친근하게 다가가고 있다.",
          zh: "到了现代，阿里郎也会被重新编曲演唱。它可以唱得快或慢，也可以唱得悲伤或明快，以另一种面貌受到现代韩国人的喜爱。如今，它也越过韩国，正亲切地走近全世界的人们。",
          guide: "한국을 넘어 表示“超越韩国/不只在韩国”。",
          translations: {
            en: {
              translation: "In modern times, Arirang is also newly arranged and sung. Sung quickly or slowly, sadly or brightly, it is loved by modern Koreans in new forms. Now it is moving beyond Korea and becoming familiar to people around the world.",
              guide: "한국을 넘어 means 'beyond Korea'."
            }
          }
        }
      ],
      keyTerms: [
        { ko: "아리랑", zh: "韩国代表性民谣，拥有多种地区版本", translations: { en: { meaning: "Korea's representative folk song with many regional versions" } } },
        { ko: "한", zh: "韩国文化中的深层悲伤、郁结情绪", translations: { en: { meaning: "han, a deep Korean emotion of sorrow or resentment" } } },
        { ko: "노동요", zh: "劳动时唱来克服辛苦的歌曲", translations: { en: { meaning: "a work song sung while working" } } }
      ],
      questions: [
        { q: "아리랑은 어떤 노래입니까?", zh: "阿里郎是什么样的歌曲？", answerZh: "它是韩国最有名的民谣，最初是劳动时克服辛苦而唱的劳动歌。", translations: { en: { translation: "What kind of song is Arirang?", answer: "It is Korea's most famous folk song and was originally a work song sung to overcome hardship." } } },
        { q: "아리랑의 노랫말은 주로 어떤 내용입니까?", zh: "阿里郎的歌词主要是什么内容？", answerZh: "主要包含爱情、离别、婆家生活的困难等内容，代表韩国人的情感“한”。", translations: { en: { translation: "What are Arirang's lyrics mainly about?", answer: "They contain love, farewell, and the hardships of married life, representing the Korean emotion of han." } } },
        { q: "여러분 고향의 대표적인 전통 민요로는 무엇이 있습니까?", zh: "你家乡的代表性传统民谣是什么？", answerZh: "可以结合自己的家乡回答，说明歌曲名称、什么时候唱以及表达什么情感。", translations: { en: { translation: "What is a representative traditional folk song from your hometown?", answer: "Answer based on your hometown: name the song, when it is sung, and what emotion it expresses." } } }
      ],
      translations: {
        en: {
          title: "Arirang",
          summary: "This text introduces Arirang as Korea's representative folk song, explaining its history, lyrics, emotional meaning, role in unity, and modern changes."
        }
      }
    },
    practice: [
      {
        type: "grammar",
        title: "얼마나 V/A-는지 모르다",
        prompt: "用 얼마나 V/A-는지 모르다 回答：창덕궁에 관광객이 많다",
        answer: "창덕궁에 관광객이 얼마나 많이 방문하는지 몰라요.",
        translations: { en: { title: "얼마나 V/A-는지 모르다", prompt: "Use 얼마나 V/A-는지 모르다: many tourists visit Changdeokgung.", answer: "창덕궁에 관광객이 얼마나 많이 방문하는지 몰라요." } }
      },
      {
        type: "grammar",
        title: "V/A-든지",
        prompt: "用 V/A-든지 建议：想学习韩国历史，可以看书或去遗址。",
        answer: "책으로 공부하든지 유적지에 가든지 해 보세요.",
        translations: { en: { title: "V/A-든지", prompt: "Use V/A-든지: to study Korean history, try reading books or visiting historic sites.", answer: "책으로 공부하든지 유적지에 가든지 해 보세요." } }
      },
      {
        type: "speaking",
        title: "문화유산 추천",
        prompt: "用韩语推荐佛国寺，并说明它的特点。",
        answer: "불국사에는 꼭 가 보세요. 불국사는 신라 시대 사찰인데 그 시대의 불교 문화를 느낄 수 있어요.",
        translations: { en: { title: "Recommending Cultural Heritage", prompt: "Recommend Bulguksa in Korean and explain its feature.", answer: "불국사에는 꼭 가 보세요. 불국사는 신라 시대 사찰인데 그 시대의 불교 문화를 느낄 수 있어요." } }
      },
      {
        type: "reading",
        title: "아는 만큼 보인다",
        prompt: "영릉은 누구의 능입니까?",
        answer: "영릉은 세종 대왕의 능입니다.",
        translations: { en: { title: "You See as Much as You Know", prompt: "Whose royal tomb is Yeongneung?", answer: "영릉은 세종 대왕의 능입니다." } }
      },
      {
        type: "culture",
        title: "아리랑",
        prompt: "아리랑의 노랫말은 한국인의 어떤 정서를 대변합니까?",
        answer: "아리랑의 노랫말은 한국인의 정서인 한을 대변합니다.",
        translations: { en: { title: "Arirang", prompt: "What Korean emotion do Arirang's lyrics represent?", answer: "아리랑의 노랫말은 한국인의 정서인 한을 대변합니다." } }
      }
    ],
    translations: {
      en: {
        title: "Cultural Heritage",
        goals: [
          "Introduce the types, locations, and features of Korean cultural heritage.",
          "Use 얼마나 V/A-는지 모르다 to strongly emphasize degree.",
          "Use V/A-든지 to show that either choice is acceptable.",
          "Read a cultural heritage field-trip text and understand the cultural meaning of Arirang."
        ]
      }
    }
  };
})();
