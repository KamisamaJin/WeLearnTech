(() => {
  const makeTips = (tips) => (tips || []).map((text) => {
    const [type, body] = text.includes(":") ? text.split(/:(.+)/) : ["collocation", text];
    return { type, text: body.trim() };
  });

  const vocabulary = [
    ["국제화 시대", "国际化时代", "名词短语", "age of globalization", "noun phrase", "국제화 시대에는 외국어 능력이 중요해요.", "在国际化时代，外语能力很重要。", "Foreign-language ability is important in the age of globalization.", "72", "단원 제목", ["collocation:국제화 시대"]],
    ["국제화", "国际化", "名词", "globalization", "noun", "국제화가 빠르게 진행되고 있어요.", "国际化正在快速推进。", "Globalization is progressing quickly.", "72", "단원 제목", ["collocation:국제화가 진행되다"]],
    ["국제 사회", "国际社会", "名词", "international society", "noun", "국제 사회의 변화에 관심을 가져야 해요.", "应该关注国际社会的变化。", "We should pay attention to changes in international society.", "74", "어휘", ["collocation:국제 사회"]],
    ["국제 협력 단체", "国际合作团体", "名词", "international cooperation organization", "noun", "국제 협력 단체가 늘어나고 있어요.", "国际合作团体正在增加。", "International cooperation organizations are increasing.", "74", "어휘", ["collocation:국제 협력 단체가 늘어나다"]],
    ["늘어나다", "增加，变多", "动词", "to increase", "verb", "국제 결혼하는 부부가 해마다 늘고 있어요.", "跨国结婚的夫妻每年都在增加。", "The number of internationally married couples is increasing every year.", "74", "어휘", ["collocation:해마다 늘어나다"]],
    ["국제 교류", "国际交流", "名词", "international exchange", "noun", "학교마다 국제 교류가 활발해졌어요.", "各学校的国际交流变活跃了。", "International exchange has become active at many schools.", "74", "어휘", ["collocation:국제 교류가 활발해지다"]],
    ["활발해지다", "变得活跃", "动词", "to become active", "verb", "국제 교류가 활발해지면서 교환 학생 프로그램도 많아졌어요.", "随着国际交流活跃，交换生项目也多了。", "As international exchange became active, exchange-student programs increased.", "74", "어휘", ["collocation:활발해지다"]],
    ["다문화 사회", "多文化社会", "名词", "multicultural society", "noun", "한국은 점점 다문화 사회가 되고 있어요.", "韩国正逐渐成为多文化社会。", "Korea is gradually becoming a multicultural society.", "74", "어휘", ["collocation:다문화 사회가 되다"]],
    ["국제 분쟁", "国际纷争", "名词", "international conflict", "noun", "국제기구는 국제 분쟁을 해결하기 위해 노력해요.", "国际组织为解决国际纷争而努力。", "International organizations work to resolve international conflicts.", "74", "어휘", ["collocation:국제 분쟁을 해결하다"]],
    ["해결하다", "解决", "动词", "to solve; to resolve", "verb", "국제 사회의 문제를 해결해야 해요.", "应该解决国际社会的问题。", "We need to solve problems in international society.", "74", "어휘", ["collocation:문제를 해결하다"]],
    ["국제기구", "国际组织", "名词", "international organization", "noun", "국제기구에 가입하려면 여러 조건이 필요해요.", "要加入国际组织需要多种条件。", "Several conditions are needed to join an international organization.", "74", "어휘", ["collocation:국제기구에 가입하다"]],
    ["가입하다", "加入", "动词", "to join", "verb", "한국은 여러 국제기구에 가입했어요.", "韩国加入了多个国际组织。", "Korea has joined several international organizations.", "74", "어휘", ["collocation:국제기구에 가입하다"]],
    ["외교 관계", "外交关系", "名词", "diplomatic relations", "noun", "두 나라는 외교 관계를 맺었어요.", "两国建立了外交关系。", "The two countries established diplomatic relations.", "74", "어휘", ["collocation:외교 관계를 맺다"]],
    ["맺다", "缔结，建立", "动词", "to establish; to form", "verb", "두 나라는 협력 관계를 맺었어요.", "两国建立了合作关系。", "The two countries formed a cooperative relationship.", "74", "어휘", ["collocation:관계를 맺다"]],
    ["세계 평화", "世界和平", "名词", "world peace", "noun", "세계 평화 유지에 힘써야 해요.", "应该致力于维护世界和平。", "We should work to maintain world peace.", "74", "어휘", ["collocation:세계 평화 유지"]],
    ["유지", "维持", "名词", "maintenance", "noun", "국제연합은 평화 유지에 힘쓰고 있어요.", "联合国正致力于维持和平。", "The United Nations works to maintain peace.", "74", "어휘", ["collocation:평화 유지"]],
    ["힘쓰다", "努力，致力于", "动词", "to make efforts", "verb", "국제기구는 세계 평화를 위해 힘써요.", "国际组织为世界和平而努力。", "International organizations work for world peace.", "74", "어휘", ["collocation:유지에 힘쓰다"]],
    ["문화 교류", "文化交流", "名词", "cultural exchange", "noun", "문화 교류를 추진하면 서로를 더 잘 이해할 수 있어요.", "推进文化交流就能更好地理解彼此。", "Promoting cultural exchange helps people understand each other better.", "74", "어휘", ["collocation:문화 교류를 추진하다"]],
    ["추진하다", "推进，推动", "动词", "to promote; to carry forward", "verb", "정부가 문화 교류 사업을 추진하고 있어요.", "政府正在推进文化交流项目。", "The government is promoting cultural-exchange projects.", "74", "어휘", ["collocation:사업을 추진하다"]],
    ["다국적 기업", "跨国企业", "名词", "multinational company", "noun", "국제화로 다국적 기업이 증가했어요.", "随着国际化，跨国企业增加了。", "Multinational companies have increased with globalization.", "74", "어휘", ["collocation:다국적 기업이 증가하다"]],
    ["증가하다", "增加", "动词", "to increase", "verb", "외국인 유학생이 증가하고 있어요.", "外国留学生正在增加。", "The number of international students is increasing.", "74", "어휘", ["collocation:증가하다"]],
    ["해외 지사", "海外分公司", "名词", "overseas branch", "noun", "회사가 해외 지사를 늘리고 있어요.", "公司正在增加海外分公司。", "The company is increasing its overseas branches.", "74", "어휘", ["collocation:해외 지사를 늘리다"]],
    ["외국어에 능통하다", "精通外语", "形容词短语", "to be fluent in a foreign language", "adjective phrase", "외국어에 능통한 사람이 많아졌어요.", "精通外语的人变多了。", "More people have become fluent in foreign languages.", "74", "어휘", ["collocation:외국어에 능통하다"]],
    ["해외 봉사 단체", "海外志愿服务团体", "名词", "overseas volunteer organization", "noun", "해외 봉사 단체에 지원하고 싶어요.", "我想申请海外志愿服务团体。", "I want to apply to an overseas volunteer organization.", "74", "어휘", ["collocation:해외 봉사 단체에 지원하다"]],
    ["지원하다", "申请，支援", "动词", "to apply; to support", "verb", "국제기구에 지원할 정도로 외국어를 잘해요.", "外语好到可以申请国际组织。", "The person is good enough at foreign languages to apply to an international organization.", "74", "어휘", ["collocation:지원하다"]],
    ["세계 시민 의식", "世界公民意识", "名词", "global citizenship", "noun", "국제화 시대에는 세계 시민 의식이 필요해요.", "国际化时代需要世界公民意识。", "Global citizenship is needed in the age of globalization.", "74", "어휘", ["collocation:세계 시민 의식을 갖다"]],
    ["의식", "意识", "名词", "awareness; consciousness", "noun", "세계 시민 의식을 가져야 해요.", "应该具备世界公民意识。", "We should have global citizenship awareness.", "74", "어휘", ["collocation:의식을 갖다"]],
    ["근무하다", "工作，上班", "动词", "to work", "verb", "해외 지사에서 근무하고 싶어요.", "我想在海外分公司工作。", "I want to work at an overseas branch.", "74", "어휘", ["collocation:해외 지사에서 근무하다"]],
    ["V/A-던", "曾经……的；过去常……的", "语法表达", "that used to...; that one was...", "grammar expression", "언니가 쓰던 가방이에요.", "这是姐姐以前用过的包。", "It is the bag my older sister used to use.", "75", "문법 1", ["form:동사/형용사 + -던"]],
    ["못 보던", "没见过的", "连体表达", "unfamiliar; not seen before", "modifier expression", "못 보던 가방이네요.", "是没见过的包呢。", "That is a bag I have not seen before.", "75", "문법 1", ["usage:못 보던"]],
    ["쳐다보다", "注视，盯着看", "动词", "to stare; to look at", "verb", "전에는 사람들이 신기하게 쳐다보던 때가 있었어요.", "以前有过人们好奇地盯着看的时候。", "There was a time when people used to stare curiously.", "75", "문법 1", ["collocation:신기하게 쳐다보다"]],
    ["친절하다", "亲切", "形容词", "kind", "adjective", "친절하던 사람들이 생각나요.", "我想起了那些亲切的人。", "I remember the people who were kind.", "75", "문법 1", ["form:친절하던"]],
    ["일어날 정도로", "到起不来的程度", "语法短语", "to the point of being unable to get up", "grammar phrase", "일이 많아서 아침에 못 일어날 정도로 피곤해요.", "事情太多，累到早上起不来。", "I am so tired from work that I cannot get up in the morning.", "76", "문법 2", ["form:V/A-(으)ㄹ 정도로"]],
    ["발 디딜 틈이 없다", "没有落脚的地方，非常拥挤", "惯用表达", "to be packed; no room to stand", "idiom", "출퇴근 시간에는 지하철에 발 디딜 틈이 없어요.", "上下班时间地铁里挤得没有落脚的地方。", "During rush hour, the subway is packed.", "76", "문법 2", ["collocation:발 디딜 틈이 없다"]],
    ["교환 학생", "交换生", "名词", "exchange student", "noun", "한국에 교환 학생으로 온 적이 있어요.", "我曾作为交换生来过韩国。", "I once came to Korea as an exchange student.", "76", "문법 2", ["collocation:교환 학생 프로그램"]],
    ["즐겁게 지내다", "愉快地度过", "动词短语", "to have a good time", "verb phrase", "시간이 얼마나 빨리 지나는지 모를 정도로 즐겁게 지냈어요.", "过得非常开心，时间飞快。", "I had such a good time that I did not notice how fast time passed.", "76", "문법 2", ["collocation:즐겁게 지내다"]],
    ["아름다운 곳", "美丽的地方", "名词短语", "beautiful place", "noun phrase", "제주도는 계속 생각날 정도로 아름다운 곳이에요.", "济州岛美到一直让人想起。", "Jeju Island is so beautiful that it stays in your mind.", "76", "문법 2", ["collocation:아름다운 곳"]],
    ["문화가 다양하다", "文化多样", "形容词短语", "to be culturally diverse", "adjective phrase", "이태원은 문화가 다양해요.", "梨泰院文化多样。", "Itaewon is culturally diverse.", "76", "문법 2", ["collocation:문화가 다양하다"]],
    ["해외 파견 근무자", "海外派遣工作人员", "名词", "overseas dispatched worker", "noun", "해외 파견 근무자 모집 안내문을 읽었어요.", "读了海外派遣工作人员招聘通知。", "I read a notice recruiting overseas dispatched workers.", "77", "말하기", ["collocation:해외 파견 근무자"]],
    ["분야", "领域", "名词", "field; area", "noun", "외국에 다양한 분야의 인력을 파견한다고 해요.", "听说要向国外派遣各领域人才。", "They say they will dispatch workers in many fields overseas.", "77", "말하기", ["collocation:다양한 분야"]],
    ["인력", "人力，人员", "名词", "workforce; personnel", "noun", "다양한 분야의 인력이 필요해요.", "需要各领域的人才。", "Personnel in various fields are needed.", "77", "말하기", ["collocation:인력을 파견하다"]],
    ["파견하다", "派遣", "动词", "to dispatch", "verb", "외국에 인력을 파견한다고 해요.", "听说要向国外派遣人员。", "They say they will dispatch personnel overseas.", "77", "말하기", ["collocation:인력을 파견하다"]],
    ["정신없다", "忙得不可开交，慌乱", "形容词", "hectic; overwhelming", "adjective", "정신없이 바쁘지만 재미있대요.", "听说忙得不可开交但很有意思。", "They say it is hectic but interesting.", "77", "말하기", ["collocation:정신없이 바쁘다"]],
    ["낯설어하다", "觉得陌生", "动词", "to feel unfamiliar with", "verb", "이제는 다른 문화를 낯설어하지 않아요.", "现在不再觉得其他文化陌生。", "People no longer feel unfamiliar with other cultures.", "77", "말하기", ["collocation:낯설어하지 않다"]],
    ["생각을 넓히다", "开阔思维", "动词短语", "to broaden one's thinking", "verb phrase", "다양한 사람들과 어울리면서 생각을 넓히고 싶어요.", "想和不同的人相处，开阔思维。", "I want to broaden my thinking by spending time with diverse people.", "77", "말하기", ["collocation:생각을 넓히다"]],
    ["체류하다", "滞留，居留", "动词", "to stay; to reside", "verb", "한국에 체류하는 외국인이 늘고 있어요.", "在韩国居留的外国人正在增加。", "The number of foreigners staying in Korea is increasing.", "78", "듣기", ["collocation:한국에 체류하다"]],
    ["차지하다", "占据，占比", "动词", "to account for; to occupy", "verb", "유학생이 큰 비율을 차지해요.", "留学生占很大比例。", "International students account for a large proportion.", "78", "듣기", ["collocation:비율을 차지하다"]],
    ["비중", "比重", "名词", "weight; share", "noun", "외국인 근로자의 비중이 커졌어요.", "外国劳动者的比重变大了。", "The share of foreign workers has grown.", "78", "듣기", ["collocation:비중이 크다"]],
    ["비율", "比例", "名词", "ratio; percentage", "noun", "유학생 비율이 높아졌어요.", "留学生比例提高了。", "The percentage of international students has risen.", "78", "듣기", ["collocation:비율이 높다"]],
    ["일손", "劳动力，人手", "名词", "labor; helping hands", "noun", "농촌에서는 일손이 부족해요.", "农村劳动力不足。", "There is a labor shortage in rural areas.", "78", "듣기", ["collocation:일손이 부족하다"]],
    ["갈등", "矛盾，冲突", "名词", "conflict", "noun", "문화 차이로 갈등이 생길 수 있어요.", "可能因文化差异产生矛盾。", "Cultural differences can create conflict.", "78", "듣기", ["collocation:갈등이 생기다"]],
    ["우려하다", "担忧", "动词", "to worry; to be concerned", "verb", "사회 변화에 대해 우려하는 사람도 있어요.", "也有人担忧社会变化。", "Some people are concerned about social change.", "78", "듣기", ["collocation:우려하다"]],
    ["배려", "体谅，关怀", "名词", "consideration", "noun", "다문화 사회에서는 서로에 대한 배려가 필요해요.", "多文化社会需要彼此体谅。", "Mutual consideration is needed in a multicultural society.", "78", "듣기", ["collocation:배려가 필요하다"]],
    ["국제적 감각", "国际化感知，国际视野", "名词", "international sensibility", "noun", "국제적 감각을 키우는 훈련이 필요해요.", "需要培养国际视野的训练。", "Training to develop international sensibility is needed.", "79", "말하기/토론", ["collocation:국제적 감각을 키우다"]],
    ["열린 마음", "开放的心态", "名词", "open mind", "noun", "변화를 받아들이려면 열린 마음이 필요해요.", "要接受变化需要开放的心态。", "An open mind is needed to accept change.", "79", "말하기/토론", ["collocation:열린 마음을 갖다"]],
    ["구사하다", "运用，使用语言", "动词", "to use; to command a language", "verb", "외국어를 구사하는 능력이 중요해요.", "运用外语的能力很重要。", "The ability to use foreign languages is important.", "79", "말하기/토론", ["collocation:외국어를 구사하다"]],
    ["편견", "偏见", "名词", "prejudice", "noun", "편견을 버리고 열린 마음을 가져야 해요.", "应该放下偏见，保持开放心态。", "We should let go of prejudice and keep an open mind.", "79", "말하기/토론", ["pair:편견과 선입견"]],
    ["선입견", "成见，先入为主", "名词", "preconception", "noun", "선입견 없이 다른 문화를 존중해야 해요.", "应该不带成见地尊重其他文化。", "We should respect other cultures without preconceptions.", "79", "말하기/토론", ["pair:편견과 선입견"]],
    ["존중하다", "尊重", "动词", "to respect", "verb", "다양한 문화를 존중해야 해요.", "应该尊重多样文化。", "We should respect diverse cultures.", "79", "말하기/토론", ["collocation:문화를 존중하다"]],
    ["협약", "协约，公约", "名词", "convention; agreement", "noun", "유네스코에서도 다양성을 인정하자는 협약을 맺었어요.", "联合国教科文组织也签订了认可多样性的公约。", "UNESCO also made an agreement to recognize diversity.", "79", "말하기/토론", ["collocation:협약을 맺다"]],
    ["배경지식", "背景知识", "名词", "background knowledge", "noun", "국제 사회에서 활동하려면 배경지식이 필요해요.", "要在国际社会活动需要背景知识。", "Background knowledge is needed to work in international society.", "79", "말하기/토론", ["collocation:배경지식을 갖추다"]],
    ["해외 취업", "海外就业", "名词", "overseas employment", "noun", "해외 취업을 하려면 준비가 필요해요.", "海外就业需要准备。", "Preparation is needed for overseas employment.", "80", "읽기", ["collocation:해외 취업"]],
    ["성장", "成长，增长", "名词", "growth", "noun", "중국은 변화와 성장이 빨라 보였어요.", "中国看起来变化和增长很快。", "China seemed to have fast change and growth.", "80", "읽기", ["collocation:변화와 성장"]],
    ["비자", "签证", "名词", "visa", "noun", "비자 문제로 귀국해야 할 때도 있었어요.", "也曾因签证问题不得不回国。", "There were times when I had to return home because of visa problems.", "80", "읽기", ["collocation:비자 문제"]],
    ["도전", "挑战", "名词", "challenge", "noun", "포기하지 않고 다시 도전했어요.", "没有放弃，而是再次挑战。", "I did not give up and tried again.", "80", "읽기", ["collocation:다시 도전하다"]],
    ["언어 실력", "语言实力，语言能力", "名词", "language ability", "noun", "언어 실력이 부족했지만 합격했어요.", "虽然语言能力不足，但通过了。", "Although my language ability was lacking, I passed.", "80", "읽기", ["collocation:언어 실력"]],
    ["업무", "业务，工作任务", "名词", "work duties", "noun", "회사 업무를 잘 수행하기 위해 공부하고 있어요.", "为了做好公司业务正在学习。", "I am studying to perform my work duties well.", "80", "읽기", ["collocation:업무를 수행하다"]],
    ["기회", "机会", "名词", "opportunity", "noun", "이것도 제가 발전할 수 있는 기회라고 생각해요.", "我认为这也是我能发展的机会。", "I think this is also an opportunity for me to grow.", "80", "읽기", ["collocation:발전할 수 있는 기회"]],
    ["받아들이다", "接受", "动词", "to accept", "verb", "그 나라의 문화를 있는 그대로 받아들이기 시작했어요.", "开始原样接受那个国家的文化。", "I began to accept that country's culture as it was.", "80", "읽기", ["collocation:문화를 받아들이다"]],
    ["국제연합", "联合国", "名词", "United Nations", "noun", "국제연합은 대표적인 국제기구예요.", "联合国是代表性的国际组织。", "The United Nations is a representative international organization.", "82", "문화와 정보", ["abbrev:UN"]],
    ["동남아국가연합", "东南亚国家联盟", "名词", "Association of Southeast Asian Nations", "noun", "동남아국가연합은 지역 내 협력을 위한 국제기구예요.", "东盟是为地区内合作而设立的国际组织。", "ASEAN is an organization for regional cooperation.", "82", "문화와 정보", ["abbrev:ASEAN"]],
    ["세계무역기구", "世界贸易组织", "名词", "World Trade Organization", "noun", "세계무역기구는 국제 무역 문제를 다뤄요.", "世界贸易组织处理国际贸易问题。", "The WTO deals with international trade issues.", "82", "문화와 정보", ["abbrev:WTO"]],
    ["도모하다", "谋求，促进", "动词", "to promote; to seek", "verb", "국제기구는 국제 사회의 발전을 도모해요.", "国际组织促进国际社会的发展。", "International organizations promote the development of international society.", "82", "문화와 정보", ["collocation:발전을 도모하다"]],
    ["탄생하다", "诞生", "动词", "to be born; to be created", "verb", "국제연합은 제2차 세계대전 후 탄생했어요.", "联合国在第二次世界大战后诞生。", "The United Nations was created after World War II.", "82", "문화와 정보", ["collocation:국제기구가 탄생하다"]],
    ["출현하다", "出现", "动词", "to appear; to emerge", "verb", "새로운 국제기구가 출현했어요.", "新的国际组织出现了。", "New international organizations emerged.", "82", "문화와 정보", ["collocation:국제기구가 출현하다"]],
    ["가속화되다", "加速化", "动词", "to accelerate", "verb", "국제화가 가속화되고 있어요.", "国际化正在加速。", "Globalization is accelerating.", "82", "문화와 정보", ["collocation:국제화가 가속화되다"]],
    ["분명하다", "明确，显然", "形容词", "clear; obvious", "adjective", "국제기구의 역할이 중요해지고 있음은 분명해요.", "国际组织的作用正在变重要，这是显然的。", "It is clear that the role of international organizations is becoming more important.", "82", "문화와 정보", ["collocation:분명하다"]],
    ["저출산", "低生育率", "名词", "low birth rate", "noun", "저출산과 고령화는 사회 문제예요.", "低生育率和高龄化是社会问题。", "Low birth rate and aging are social issues.", "83", "배운 어휘 확인", ["pair:저출산과 고령화"]],
    ["고령화", "高龄化", "名词", "aging population", "noun", "고령화가 빠르게 진행되고 있어요.", "高龄化正在快速推进。", "Population aging is progressing quickly.", "83", "배운 어휘 확인", ["pair:저출산과 고령화"]],
    ["변화", "变化", "名词", "change", "noun", "국제화 시대의 변화를 이해해야 해요.", "应该理解国际化时代的变化。", "We need to understand changes in the age of globalization.", "83", "배운 어휘 확인", ["collocation:변화를 이해하다"]],
    ["발전", "发展", "名词", "development", "noun", "국제 사회의 평화와 발전을 위해 노력해요.", "为国际社会的和平与发展而努力。", "They work for peace and development in international society.", "83", "배운 어휘 확인", ["collocation:평화와 발전"]],
    ["기회", "机会", "名词", "opportunity", "noun", "다른 문화와 만나는 것은 좋은 기회예요.", "接触不同文化是好机会。", "Meeting other cultures is a good opportunity.", "83", "배운 어휘 확인", ["collocation:좋은 기회"]],
    ["정신없다", "忙乱，顾不上", "形容词", "hectic; chaotic", "adjective", "정신없이 바빴지만 재미있었어요.", "虽然忙得不可开交，但很有意思。", "It was hectic but interesting.", "83", "배운 어휘 확인", ["collocation:정신없이 바쁘다"]]
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
  window.lessonGuideL4LessonChunks["l4-06"] = {
    id: "l4-06",
    number: 6,
    titleKo: "국제화 시대",
    titleZh: "国际化时代",
    pages: "72-83",
    status: "draft",
    progress: {
      vocabulary: "draft-p72-p83",
      dialogue: "draft-p75-p77",
      culture: "draft-p82",
      practice: "draft-p75-p82"
    },
    vocabularySources: [
      { page: 72, label: "단원 제목", note: "课题和学习目标" },
      { page: 74, label: "어휘", note: "现代国际社会和国际化行动" },
      { page: 75, label: "문법 1", note: "V/A-던" },
      { page: 76, label: "문법 2", note: "V/A-(으)ㄹ 정도로" },
      { page: 77, label: "말하기", note: "海外派遣工作和国际化时代" },
      { page: 78, label: "듣기/발음", note: "在韩外国人与发音练习" },
      { page: 79, label: "말하기/쓰기 전", note: "国际化时代所需能力" },
      { page: 80, label: "읽기", note: "海外就业成功手记" },
      { page: 82, label: "문화와 정보", note: "国际组织" },
      { page: 83, label: "배운 어휘 확인", note: "本课复习词汇补充" }
    ],
    goals: [
      "能说明现代国际社会中出现的国际化现象。",
      "能用 V/A-던 回忆过去反复发生或曾经持续的情况。",
      "能用 V/A-(으)ㄹ 정도로 表示达到某种程度。",
      "能阅读海外就业经验文章，并理解国际组织的作用。"
    ],
    grammar: [
      {
        pattern: "V/A-던",
        zh: "曾经……的；过去常……的",
        guide: "回忆过去反复发生的事、过去持续的状态，或表示过去行为现在已经不再持续。",
        examples: [
          { ko: "언니가 쓰던 가방이에요.", zh: "这是姐姐以前用过的包。" },
          { ko: "전에는 신기하게 쳐다보던 사람들도 이제는 많이 달라졌어요.", zh: "以前好奇地盯着看的人们现在也变了很多。" }
        ],
        translations: {
          en: {
            meaning: "that used to...; that one was...",
            guide: "Recalls a repeated past action, a past state, or something that is no longer continuing."
          }
        }
      },
      {
        pattern: "V/A-(으)ㄹ 정도로",
        zh: "到……程度",
        guide: "表示前面的情况达到很高程度，后面说明这种程度的具体表现。",
        examples: [
          { ko: "아침에 못 일어날 정도로 피곤해요.", zh: "累到早上起不来。" },
          { ko: "시간이 얼마나 빨리 지나는지 모를 정도로 즐겁게 지냈어요.", zh: "过得非常开心，连时间过得多快都没感觉到。" }
        ],
        translations: {
          en: {
            meaning: "to the extent that...",
            guide: "Shows the degree of a situation by describing what it is strong enough to cause."
          }
        }
      }
    ],
    vocabulary,
    dialogues: [
      {
        id: "dialogue-01",
        title: "다문화 사회의 변화",
        page: 75,
        source: "문법 1 대화",
        focus: "V/A-던",
        sceneZh: "고천 和 후엔 谈到国际婚姻增多，以及过去别人会好奇地看他们，现在社会已经变化很多。",
        learningPoints: [
          "-던 用来回忆过去曾经发生的状态或行为。",
          "신기하게 쳐다보던 사람들 表示“以前会好奇地盯着看的人们”。"
        ],
        lines: [
          { speaker: "고천", ko: "요즘 다문화 사회가 되면서 우리처럼 국제 결혼하는 부부가 해마다 늘고 있다고 해요.", zh: "最近随着社会变成多文化社会，像我们这样跨国结婚的夫妻每年都在增加。", guide: "해마다 늘다 表示每年都增加。" },
          { speaker: "후엔", ko: "네. 전에는 남편이랑 걸어가면 신기하게 쳐다보던 사람들도 이제는 많이 달라졌어요.", zh: "是啊。以前和丈夫一起走路时会好奇地盯着看的人们，现在也变了很多。", guide: "쳐다보던 用 -던 回忆过去反复出现的行为。" }
        ],
        rolePlays: [
          { title: "변화 말하기", promptZh: "说国际婚姻夫妻每年都在增加。", answerKo: "국제 결혼하는 부부가 해마다 늘고 있어요." },
          { title: "과거 회상", promptZh: "说以前人们会好奇地看。", answerKo: "전에는 사람들이 신기하게 쳐다보곤 했어요." }
        ],
        drills: [
          { pattern: "V/A-던", promptZh: "说“只在本国经营的企业正在进军海外”。", answerKo: "자국에서만 사업을 하던 기업들이 해외로 진출하고 있어요." },
          { pattern: "V/A-던", promptZh: "说“以前完全不懂外语的弟弟现在说得很流利”。", answerKo: "외국어를 전혀 모르던 동생이 이제는 외국어를 유창하게 해요." }
        ],
        translations: {
          en: {
            scene: "Go Cheon and Huyen talk about the increase in international marriages and how people's reactions have changed.",
            learningPoints: [
              "-던 recalls a past action or state.",
              "신기하게 쳐다보던 사람들 means 'people who used to stare curiously.'"
            ]
          }
        }
      },
      {
        id: "dialogue-02",
        title: "교환 학생 경험",
        page: 76,
        source: "문법 2 대화",
        focus: "V/A-(으)ㄹ 정도로",
        sceneZh: "이링 和 안젤라 谈到交换生项目增加，안젤라 回忆自己来韩国做交换生时过得非常开心。",
        learningPoints: [
          "-을 정도로 用来说明程度很高。",
          "시간이 얼마나 빨리 지나는지 모를 정도로 즐겁다 表示“开心到不知道时间过得多快”。"
        ],
        lines: [
          { speaker: "이링", ko: "요즘 학교마다 국제 교류가 활발해서 교환 학생 프로그램도 많이 생긴 것 같아요.", zh: "最近各学校国际交流很活跃，好像交换生项目也多了。", guide: "국제 교류가 활발하다 是本课核心表达。" },
          { speaker: "안젤라", ko: "네. 저도 대학교 때 한국에 교환 학생으로 온 적이 있었는데 시간이 얼마나 빨리 지나는지 모를 정도로 즐겁게 지냈어요.", zh: "是的。我大学时也曾作为交换生来韩国，过得非常开心，连时间过得多快都没感觉到。", guide: "온 적이 있다 表示曾经来过；-을 정도로 强调程度。" }
        ],
        rolePlays: [
          { title: "교류 말하기", promptZh: "说国际交流活跃，交换生项目变多了。", answerKo: "국제 교류가 활발해서 교환 학생 프로그램도 많아졌어요." },
          { title: "정도 말하기", promptZh: "说开心到忘记时间。", answerKo: "시간이 얼마나 빨리 지나는지 모를 정도로 즐거웠어요." }
        ],
        drills: [
          { pattern: "V/A-(으)ㄹ 정도로", promptZh: "说“弟弟外语好到可以申请国际组织”。", answerKo: "동생은 국제기구에 지원할 정도로 외국어를 잘해요." },
          { pattern: "V/A-(으)ㄹ 정도로", promptZh: "说“地铁挤到没有落脚的地方”。", answerKo: "지하철에 발 디딜 틈이 없을 정도로 사람이 많아요." }
        ],
        translations: {
          en: {
            scene: "Yiring and Angela talk about exchange-student programs, and Angela recalls how much she enjoyed studying in Korea.",
            learningPoints: [
              "-을 정도로 explains a high degree.",
              "시간이 얼마나 빨리 지나는지 모를 정도로 즐겁다 means something was so enjoyable that time flew by."
            ]
          }
        }
      },
      {
        id: "dialogue-03",
        title: "해외 파견 근무자 모집",
        page: 77,
        source: "말하기 대화",
        focus: "국제화 시대 경험 말하기",
        sceneZh: "라흐만 看到 아나이스 在读海外派遣工作招聘通知，两人谈到海外工作、国际交流和多文化社会。",
        learningPoints: [
          "해외 파견 근무자 모집 是“招聘海外派遣工作人员”。",
          "일을 찾아서 할 정도로 재미있다 表示“有意思到会主动找事做”。",
          "낯설어하지 않다 表示“不再觉得陌生”。"
        ],
        lines: [
          { speaker: "라흐만", ko: "아나이스 씨, 뭘 그렇게 열심히 보고 있어요?", zh: "아나이스，你在这么认真地看什么？", guide: "뭘 그렇게 열심히 보다 是自然口语问法。" },
          { speaker: "아나이스", ko: "해외 파견 근무자 모집에 대한 안내문을 읽고 있었어요. 외국에 다양한 분야의 인력을 파견한다고 해서 찾아보는 중이에요.", zh: "我在读海外派遣工作人员招聘通知。听说会向国外派遣各领域的人才，所以正在查。", guide: "찾아보는 중이다 表示正在查询。" },
          { speaker: "라흐만", ko: "그렇군요. 졸업하고 나서 고향에 안 돌아가고 계속 외국에서 일하려고요?", zh: "原来如此。毕业后不回故乡，打算继续在国外工作吗？", guide: "-려고요? 用来询问对方打算。" },
          { speaker: "아나이스", ko: "네. 해외 진출 기업에서 일하는 친구들이 있는데 정신없이 바쁘지만 일을 찾아서 할 정도로 재미있대요.", zh: "是的。我有朋友在进军海外的企业工作，听说虽然忙得不可开交，但有意思到会主动找事做。", guide: "-대요 转述听到的信息。" },
          { speaker: "라흐만", ko: "제 주변에도 외국 기업에 취업하려고 하는 사람들이 많아요. 국제 교류가 활발해지면서 더 이상 다른 문화를 낯설어하지 않는 것 같아요.", zh: "我周围也有很多想进外企的人。随着国际交流变活跃，好像大家不再觉得其他文化陌生了。", guide: "더 이상 ... 않다 表示“不再……”。" },
          { speaker: "아나이스", ko: "맞아요. 저도 다양한 사람들과 함께 어울리면서 더 많이 배우고 생각도 넓히면 좋겠어요.", zh: "对。我也希望能和各种各样的人相处，多学习，也开阔思维。", guide: "생각을 넓히다 是很实用的表达。" }
        ],
        rolePlays: [
          { title: "해외 근무 말하기", promptZh: "说正在查看海外派遣工作人员招聘通知。", answerKo: "해외 파견 근무자 모집 안내문을 찾아보는 중이에요." },
          { title: "국제화 경험", promptZh: "说随着国际交流活跃，不再觉得其他文化陌生。", answerKo: "국제 교류가 활발해지면서 다른 문화를 낯설어하지 않게 되었어요." }
        ],
        drills: [
          { pattern: "해외 파견 근무자", promptZh: "说向国外派遣各领域人才。", answerKo: "외국에 다양한 분야의 인력을 파견해요." },
          { pattern: "생각을 넓히다", promptZh: "说想和不同的人相处并开阔思维。", answerKo: "다양한 사람들과 어울리면서 생각을 넓히고 싶어요." }
        ],
        translations: {
          en: {
            scene: "Rahman sees Anais reading a notice for overseas dispatched workers, and they discuss overseas work and globalization.",
            learningPoints: [
              "해외 파견 근무자 모집 means recruiting dispatched workers for overseas assignments.",
              "일을 찾아서 할 정도로 재미있다 means something is so interesting that one actively looks for work to do.",
              "낯설어하지 않다 means no longer feeling unfamiliar with something."
            ]
          }
        }
      }
    ],
    culture: {
      titleKo: "국제기구",
      titleZh: "国际组织",
      page: 82,
      summaryZh: "文章说明国际组织的定义、联合国的代表性作用，以及随着国际化加速，区域性和专业性国际组织不断出现。",
      keyTerms: [
        { ko: "국제기구", zh: "两个以上国家为国际社会活动目的组成的团体", translations: { en: { meaning: "an organization formed by two or more countries for international activity" } } },
        { ko: "국제연합(UN)", zh: "第二次世界大战后成立的代表性国际组织", translations: { en: { meaning: "the United Nations, a representative organization founded after World War II" } } },
        { ko: "ASEAN / WTO", zh: "区域合作或特定问题解决型国际组织", translations: { en: { meaning: "organizations for regional cooperation or specific international issues" } } }
      ],
      paragraphs: [
        {
          ko: "국제 사회에서 활동할 목적으로 두 나라 이상이 모여 만든 단체를 국제기구라고 한다. 국제기구는 국제 사회에서 여러 나라가 협력하여 국제 사회의 문제를 해결하고 발전을 도모하기 위하여 탄생하였다.",
          zh: "以在国际社会中活动为目的，由两个以上国家聚集而成的团体叫作国际组织。国际组织是为了让多个国家合作，解决国际社会的问题并促进发展而诞生的。",
          guide: "第一段给出定义：两个以上国家 + 国际社会活动目的 + 解决问题和促进发展。",
          translations: {
            en: {
              translation: "An organization formed by two or more countries for activity in international society is called an international organization. These organizations were created so countries could cooperate to solve problems and promote development.",
              guide: "The first paragraph defines international organizations and explains why they were created."
            }
          }
        },
        {
          ko: "국제기구 중 가장 대표적인 것은 국제연합(UN)이다. 국제연합은 제2차 세계대전이 끝나면서 탄생한 국제기구로서 오랜 기간 국제 사회의 평화와 발전을 위해 노력해 오고 있다. 정치, 군사, 경제, 교육, 문화 등 국제 사회의 모든 문제를 대상으로 활동하고 있다.",
          zh: "国际组织中最具代表性的是联合国。联合国是在第二次世界大战结束后诞生的国际组织，长期以来一直为国际社会的和平与发展而努力。它以政治、军事、经济、教育、文化等国际社会的所有问题为对象开展活动。",
          guide: "第二段以 UN 为例，说明代表性国际组织的活动范围很广。",
          translations: {
            en: {
              translation: "The most representative international organization is the United Nations. It was created after World War II and has worked for peace and development in international society for a long time. It acts on issues across politics, military affairs, economics, education, culture, and more.",
              guide: "The second paragraph uses the UN as the main example and shows the breadth of its work."
            }
          }
        },
        {
          ko: "시간이 지나면서 동남아국가연합(ASEAN)과 같이 지역 내 협력을 위한 국제기구가 출현하고 세계무역기구(WTO)와 같이 국제 사회의 특정한 문제를 해결하기 위한 국제기구가 출현하였다. 국제화가 가속화되는 현대 사회에서 국제기구의 역할이 점점 더 중요해지고 있음은 분명하다.",
          zh: "随着时间推移，出现了像东南亚国家联盟那样为了地区内部合作而成立的国际组织，也出现了像世界贸易组织那样为了解决国际社会特定问题而成立的国际组织。在国际化加速的现代社会中，国际组织的作用正变得越来越重要，这一点很明确。",
          guide: "第三段说明国际组织从综合型扩展到区域合作型、特定问题解决型。",
          translations: {
            en: {
              translation: "Over time, organizations such as ASEAN emerged for regional cooperation, and organizations such as the WTO emerged to solve specific problems in international society. In today's accelerating age of globalization, the role of international organizations is clearly becoming more important.",
              guide: "The final paragraph explains how international organizations have diversified and why their role matters more today."
            }
          }
        }
      ],
      questions: [
        {
          q: "국제기구란 무엇입니까?",
          zh: "国际组织是什么？",
          answerZh: "两个以上国家为了在国际社会中活动而组成的团体。",
          translations: {
            en: {
              translation: "What is an international organization?",
              answer: "It is an organization formed by two or more countries for activity in international society."
            }
          }
        },
        {
          q: "국제기구의 변화에 대해서 설명해 보세요.",
          zh: "请说明国际组织的变化。",
          answerZh: "从联合国这样的代表性综合组织，发展出 ASEAN 这样的地区合作组织和 WTO 这样的特定问题解决组织。",
          translations: {
            en: {
              translation: "Explain how international organizations have changed.",
              answer: "They have expanded from broad representative bodies such as the UN to regional groups like ASEAN and issue-focused bodies like the WTO."
            }
          }
        },
        {
          q: "여러분이 알고 있는 국제기구에 대해서 이야기해 보세요.",
          zh: "请谈谈你知道的国际组织。",
          answerZh: "可以举 UN、ASEAN、WTO、WHO、UNESCO 等，并说明它们解决什么问题。",
          translations: {
            en: {
              translation: "Talk about an international organization you know.",
              answer: "You can mention the UN, ASEAN, WTO, WHO, or UNESCO and explain what kind of issue it addresses."
            }
          }
        }
      ],
      translations: {
        en: {
          title: "International Organizations",
          summary: "The article explains what international organizations are, the representative role of the UN, and the emergence of regional and issue-focused organizations as globalization accelerates."
        }
      }
    },
    practice: [
      {
        type: "grammar",
        title: "V/A-던",
        promptZh: "用 -던 说：只在本国经营的企业正在进军海外。",
        answerKo: "자국에서만 사업을 하던 기업들이 해외로 진출하고 있어요.",
        translations: {
          en: {
            title: "V/A-던",
            prompt: "Use -던: companies that used to operate only domestically are expanding overseas.",
            answer: "자국에서만 사업을 하던 기업들이 해외로 진출하고 있어요."
          }
        }
      },
      {
        type: "grammar",
        title: "V/A-(으)ㄹ 정도로",
        promptZh: "用 -(으)ㄹ 정도로 说：弟弟外语好到可以申请国际组织。",
        answerKo: "동생은 국제기구에 지원할 정도로 외국어를 잘해요.",
        translations: {
          en: {
            title: "V/A-(으)ㄹ 정도로",
            prompt: "Use -(으)ㄹ 정도로: my younger sibling is good enough at foreign languages to apply to an international organization.",
            answer: "동생은 국제기구에 지원할 정도로 외국어를 잘해요."
          }
        }
      },
      {
        type: "speaking",
        title: "국제화 시대의 모습",
        promptZh: "用韩语说一个你感受到的国际化现象。",
        answerKo: "외국인과 능통하게 의사소통하는 사람들이 많아졌어요.",
        translations: {
          en: {
            title: "Globalization Around Us",
            prompt: "Say one sign of globalization you have experienced in Korean.",
            answer: "외국인과 능통하게 의사소통하는 사람들이 많아졌어요."
          }
        }
      },
      {
        type: "reading",
        title: "해외 취업 성공 수기",
        promptZh: "阅读题：这位作者为什么第一次去了中国？",
        answerKo: "학교에서 배운 중국어를 사용해 보기 위해 처음으로 중국에 갔습니다.",
        translations: {
          en: {
            title: "Overseas Employment Story",
            prompt: "Reading: Why did the writer first go to China?",
            answer: "학교에서 배운 중국어를 사용해 보기 위해 처음으로 중국에 갔습니다."
          }
        }
      },
      {
        type: "culture",
        title: "국제기구",
        promptZh: "文化题：国际组织为什么诞生？",
        answerKo: "여러 나라가 협력하여 국제 사회의 문제를 해결하고 발전을 도모하기 위해 탄생했습니다.",
        translations: {
          en: {
            title: "International Organizations",
            prompt: "Culture: Why were international organizations created?",
            answer: "여러 나라가 협력하여 국제 사회의 문제를 해결하고 발전을 도모하기 위해 탄생했습니다."
          }
        }
      }
    ],
    translations: {
      en: {
        title: "The Age of Globalization",
        goals: [
          "Explain globalization phenomena in modern international society.",
          "Use V/A-던 to recall repeated or continuing past situations.",
          "Use V/A-(으)ㄹ 정도로 to express degree.",
          "Read an overseas-employment story and understand the role of international organizations."
        ]
      }
    }
  };
})();
