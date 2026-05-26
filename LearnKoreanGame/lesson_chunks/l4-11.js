(() => {
  const makeTips = (tips) => (tips || []).map((text) => {
    const [type, body] = text.includes(":") ? text.split(/:(.+)/) : ["collocation", text];
    return { type, text: body.trim() };
  });

  const vocabulary = [
    ["교육 제도", "教育制度", "名词短语", "education system", "noun phrase", "한국의 교육 제도에 대해 알아보세요.", "请了解韩国的教育制度。", "Learn about Korea's education system.", "144", "단원 제목", ["collocation:교육 제도"]],
    ["한국의 교육 제도", "韩国的教育制度", "名词短语", "Korea's education system", "noun phrase", "한국의 교육 제도는 6-3-3-4학제예요.", "韩国的教育制度是6-3-3-4学制。", "Korea's education system follows a 6-3-3-4 structure.", "144", "단원 제목", ["collocation:한국의 교육 제도"]],
    ["사교육", "私教育，课外辅导", "名词", "private education; tutoring", "noun", "사교육에 대한 찬성과 반대 의견을 말해 보세요.", "请说说对私教育的赞成和反对意见。", "Talk about opinions for and against private education.", "144", "단원 제목", ["collocation:사교육을 받다"]],
    ["찬성", "赞成", "名词", "approval; support", "noun", "사교육에 찬성하는 이유를 말해 보세요.", "请说说赞成私教育的理由。", "Say why you support private education.", "144", "단원 제목", ["collocation:찬성 입장"]],
    ["반대", "反对", "名词", "opposition", "noun", "사교육에 반대하는 이유도 들어 보세요.", "也请听听反对私教育的理由。", "Listen to reasons against private education as well.", "144", "단원 제목", ["collocation:반대 입장"]],
    ["의견", "意见", "名词", "opinion", "noun", "교육에 대한 의견을 이야기해 보세요.", "请说说对教育的意见。", "Talk about your opinion on education.", "144", "단원 제목", ["collocation:의견을 말하다"]],
    ["평생 교육", "终身教育", "名词短语", "lifelong education", "noun phrase", "한국에서는 평생 교육이 보편화되고 있어요.", "在韩国，终身教育正在普及。", "Lifelong education is becoming common in Korea.", "144", "문화와 정보", ["collocation:평생 교육"]],
    ["국립", "国立", "名词/冠形词", "national; state-run", "noun/determiner", "국립 학교는 국가가 운영해요.", "国立学校由国家运营。", "National schools are run by the state.", "146", "어휘", ["collocation:국립 학교"]],
    ["공립", "公立", "名词/冠形词", "public; publicly run", "noun/determiner", "공립 학교는 지방 공공 단체가 운영하기도 해요.", "公立学校也由地方公共团体运营。", "Public schools may be run by local public bodies.", "146", "어휘", ["collocation:공립 학교"]],
    ["사립 학교", "私立学校", "名词短语", "private school", "noun phrase", "사립 학교는 경쟁이 심해서 입학하기 쉽지 않아요.", "私立学校竞争激烈，不容易入学。", "Private schools are competitive, so admission is not easy.", "146", "어휘", ["collocation:사립 학교"]],
    ["대안 학교", "另类学校，替代学校", "名词短语", "alternative school", "noun phrase", "대안 학교에서는 자율적인 교육 프로그램을 운영해요.", "另类学校运营自主教育项目。", "Alternative schools run autonomous education programs.", "146", "어휘", ["collocation:대안 학교"]],
    ["공교육", "公共教育", "名词", "public education", "noun", "공교육은 국가의 제도 속에서 이루어져요.", "公共教育在国家制度内进行。", "Public education takes place within the national system.", "146", "어휘", ["collocation:공교육"]],
    ["교육열", "教育热情", "名词", "enthusiasm for education", "noun", "한국은 교육열이 높은 편이에요.", "韩国属于教育热情较高的国家。", "Korea tends to have strong enthusiasm for education.", "146", "어휘", ["collocation:교육열이 높다"]],
    ["주입식 교육", "灌输式教育", "名词短语", "rote learning; cramming-style education", "noun phrase", "주입식 교육에서는 정보를 암기하는 수업이 많아요.", "灌输式教育中记忆信息的课很多。", "Rote education often focuses on memorizing information.", "146", "어휘", ["collocation:주입식 교육"]],
    ["창의 교육", "创意教育", "名词短语", "creative education", "noun phrase", "창의 교육에서는 새롭고 흥미로운 생각을 나눠요.", "创意教育中分享新颖有趣的想法。", "Creative education encourages sharing new and interesting ideas.", "146", "어휘", ["collocation:창의 교육"]],
    ["인성 교육", "品格教育，人性教育", "名词短语", "character education", "noun phrase", "인성 교육에서는 사람의 마음과 성격을 키워요.", "品格教育培养人的心性和性格。", "Character education develops a person's mind and character.", "146", "어휘", ["collocation:인성 교육"]],
    ["입시 경쟁", "升学考试竞争", "名词短语", "entrance-exam competition", "noun phrase", "한국은 입시 경쟁이 치열한 편이에요.", "韩国的升学考试竞争比较激烈。", "Entrance-exam competition is intense in Korea.", "146", "어휘", ["collocation:입시 경쟁이 치열하다"]],
    ["치열하다", "激烈", "形容词", "fierce; intense", "adjective", "대학 입시 경쟁이 치열해요.", "大学入学考试竞争很激烈。", "Competition for university entrance is fierce.", "146", "어휘", ["collocation:경쟁이 치열하다"]],
    ["학원", "补习班，培训机构", "名词", "private academy", "noun", "학교 수업이 끝난 후에 학원에 가요.", "学校课程结束后去补习班。", "Students go to private academies after school.", "149", "말하기", ["collocation:학원에 가다"]],
    ["학업 스트레스", "学业压力", "名词短语", "academic stress", "noun phrase", "사교육 때문에 학업 스트레스가 심해요.", "因为私教育，学业压力很大。", "Private education can create serious academic stress.", "149", "말하기", ["collocation:학업 스트레스가 심하다"]],
    ["머리가 빠지다", "掉头发", "动词短语", "to lose hair", "verb phrase", "스트레스가 심해서 머리가 빠지기도 해요.", "压力很大，有时还会掉头发。", "Severe stress can even cause hair loss.", "149", "말하기", ["collocation:머리가 빠지다"]],
    ["밥조차 못 먹다", "连饭都吃不下", "动词短语", "to be unable even to eat", "verb phrase", "스트레스로 밥조차 못 먹는 경우도 있어요.", "也有因压力连饭都吃不下的情况。", "Some cannot even eat because of stress.", "149", "말하기", ["form:N조차"]],
    ["병이 나다", "生病", "动词短语", "to get sick", "verb phrase", "스트레스를 많이 받으면 병이 나기 마련이에요.", "压力太大就难免会生病。", "If you are under a lot of stress, you are bound to get sick.", "149", "말하기", ["collocation:병이 나다"]],
    ["밤늦게까지", "直到深夜", "副词短语", "until late at night", "adverb phrase", "아이들이 밤늦게까지 공부해요.", "孩子们学习到很晚。", "Children study until late at night.", "149", "말하기", ["collocation:밤늦게까지 공부하다"]],
    ["학력", "学历", "名词", "educational background", "noun", "한국 사회에서는 학력을 중시하는 편이에요.", "韩国社会比较重视学历。", "Korean society tends to value educational background.", "149", "단어장", ["collocation:학력을 중시하다"]],
    ["중시하다", "重视", "动词", "to value; emphasize", "verb", "부모들은 자녀의 학력을 중시해요.", "父母重视子女的学历。", "Parents value their children's educational background.", "149", "단어장", ["collocation:학력을 중시하다"]],
    ["개선하다", "改善", "动词", "to improve", "verb", "교육 제도는 꼭 개선해야 돼요.", "教育制度一定要改善。", "The education system must be improved.", "149", "말하기", ["collocation:제도를 개선하다"]],
    ["보충하다", "补充", "动词", "to supplement", "verb", "부족한 부분을 보충할 수 있어요.", "可以补充不足的部分。", "It can supplement weak areas.", "149", "말하기", ["collocation:부족한 부분을 보충하다"]],
    ["소홀히 하다", "疏忽，忽视", "动词短语", "to neglect", "verb phrase", "사교육에 의지해서 학교 공부를 소홀히 할 수 있어요.", "依赖私教育可能会忽视学校学习。", "Relying on private education may lead students to neglect schoolwork.", "149", "말하기", ["collocation:공부를 소홀히 하다"]],
    ["N조차", "连……都……", "语法表达", "even N", "grammar expression", "몸이 너무 아파서 일어나는 것조차 힘들어요.", "身体太疼，连起身都很困难。", "I am so sick that even getting up is difficult.", "147", "문법 1", ["form:명사 + 조차"]],
    ["눈조차 안 마주치다", "连眼神都不对上", "动词短语", "not even make eye contact", "verb phrase", "팀장님이 저하고 눈조차 안 마주치세요.", "组长连眼神都不和我对上。", "The team leader does not even make eye contact with me.", "147", "문법 1", ["form:N조차"]],
    ["생각조차 하기 싫다", "连想都不想", "形容词短语", "to not even want to think about it", "adjective phrase", "입학시험에 떨어지는 것은 생각조차 하기 싫어요.", "我连想入学考试落榜都不愿意。", "I do not even want to think about failing the entrance exam.", "147", "문법 1", ["form:N조차"]],
    ["얼굴조차 기억이 안 나다", "连脸都想不起来", "动词短语", "to not even remember someone's face", "verb phrase", "선생님 얼굴조차 기억이 안 나요.", "连老师的脸都想不起来。", "I cannot even remember the teacher's face.", "147", "문법 1", ["form:N조차"]],
    ["혼자 외출하다", "独自外出", "动词短语", "to go out alone", "verb phrase", "처음에는 혼자 외출조차 못 했어요.", "一开始连独自外出都做不到。", "At first, I could not even go out alone.", "147", "문법 1", ["collocation:혼자 외출하다"]],
    ["월세", "月租", "名词", "monthly rent", "noun", "돈이 없을 때 월세조차 내기 힘들었어요.", "没钱的时候连月租都很难交。", "When I had no money, even paying rent was hard.", "147", "문법 1", ["collocation:월세를 내다"]],
    ["V/A-기 마련이다", "必然会……；总会……", "语法表达", "be bound to; naturally", "grammar expression", "시간이 지나면 잊히기 마련이에요.", "时间一过，总会被忘记。", "As time passes, things are bound to be forgotten.", "148", "문법 2", ["form:동사/형용사 + -기 마련이다"]],
    ["익숙해지다", "变得熟悉，习惯", "动词", "to get used to", "verb", "오래 살면 그곳 음식에 익숙해지기 마련이에요.", "住久了自然会习惯那里的食物。", "If you live somewhere long enough, you are bound to get used to the food.", "148", "문법 2", ["collocation:익숙해지다"]],
    ["잊히다", "被忘记", "动词", "to be forgotten", "verb", "시간이 지나면 잊히기 마련이에요.", "时间一过，总会被忘记。", "Things are bound to be forgotten over time.", "148", "문법 2", ["collocation:시간이 지나면 잊히다"]],
    ["기대", "期待", "名词", "expectation", "noun", "기대가 크면 실망도 크기 마련이에요.", "期待越大，失望也难免越大。", "If expectations are high, disappointment is bound to be high too.", "148", "문법 2", ["collocation:기대가 크다"]],
    ["실망", "失望", "名词", "disappointment", "noun", "기대가 크면 실망도 커요.", "期待大，失望也大。", "High expectations bring great disappointment.", "148", "문법 2", ["collocation:실망이 크다"]],
    ["스스로", "自己，主动地", "副词", "by oneself; on one's own", "adverb", "때가 되면 스스로 공부하기 마련이에요.", "到时候自然会自己学习。", "When the time comes, children naturally study on their own.", "148", "문법 2", ["collocation:스스로 공부하다"]],
    ["무리하게", "勉强地，过度地", "副词", "excessively; beyond one's limits", "adverb", "무리하게 일하면 병이 나기 마련이에요.", "过度工作就难免会生病。", "If you work beyond your limits, you are bound to get sick.", "148", "문법 2", ["collocation:무리하게 일하다"]],
    ["몸살이 나다", "浑身酸痛，病倒", "动词短语", "to come down with body aches", "verb phrase", "잠을 못 자서 몸살이 났어요.", "因为没睡觉，身体疼得病倒了。", "I got body aches because I could not sleep.", "148", "문법 2", ["collocation:몸살이 나다"]],
    ["잔소리하다", "唠叨", "动词", "to nag", "verb", "잔소리하면 말을 더 안 듣기 마련이에요.", "一唠叨，反而更不听话。", "If you nag, people are bound to listen even less.", "148", "문법 2", ["collocation:잔소리하다"]],
    ["정이 들다", "产生感情，亲近起来", "动词短语", "to grow attached", "verb phrase", "자주 싸우면서도 정이 들기 마련이에요.", "即使常吵架，也难免会产生感情。", "People can grow attached even while fighting often.", "148", "문법 2", ["collocation:정이 들다"]],
    ["기회", "机会", "名词", "opportunity", "noun", "준비된 사람에게 기회가 오기 마련이에요.", "机会总会来到有准备的人身边。", "Opportunities are bound to come to prepared people.", "148", "문법 2", ["collocation:기회가 오다"]],
    ["조기 외국어 교육", "早期外语教育", "名词短语", "early foreign-language education", "noun phrase", "조기 외국어 교육에 대해 어떻게 생각해요?", "你怎么看早期外语教育？", "What do you think about early foreign-language education?", "150", "듣기", ["collocation:조기 외국어 교육"]],
    ["세계화", "全球化", "名词", "globalization", "noun", "세계화 시대에는 외국어 능력이 중요해요.", "全球化时代外语能力很重要。", "Foreign-language ability is important in the age of globalization.", "150", "단어장", ["collocation:세계화 시대"]],
    ["유창하다", "流利", "形容词", "fluent", "adjective", "인재가 되려면 외국어를 유창하게 해야 한다고 해요.", "据说要成为人才，外语要流利。", "They say a capable person should speak foreign languages fluently.", "150", "단어장", ["collocation:유창하게 하다"]],
    ["호기심", "好奇心", "名词", "curiosity", "noun", "아이들은 새로운 것에 대한 호기심이 강해요.", "孩子们对新事物的好奇心很强。", "Children have strong curiosity about new things.", "150", "듣기", ["collocation:호기심이 강하다"]],
    ["유아기", "幼儿期", "名词", "early childhood", "noun", "유아기에는 집중력이 부족할 수 있어요.", "幼儿期可能注意力不足。", "In early childhood, concentration may be limited.", "150", "단어장", ["collocation:유아기"]],
    ["아동기", "儿童期", "名词", "childhood", "noun", "아동기에는 외국어를 쉽게 배운다고 해요.", "据说儿童期容易学习外语。", "People say children learn foreign languages easily.", "150", "단어장", ["collocation:아동기"]],
    ["습득력", "习得能力", "名词", "ability to acquire", "noun", "어릴수록 언어 습득력이 좋다고 해요.", "据说越小语言习得能力越好。", "People say language acquisition is better at a younger age.", "150", "단어장", ["collocation:언어 습득력"]],
    ["부작용", "副作用，负面影响", "名词", "side effect; negative effect", "noun", "어린 나이에 외국어를 배우면 부작용이 생길 수 있어요.", "年纪太小时学习外语可能产生负面影响。", "Learning a foreign language too early can have negative effects.", "150", "듣기", ["collocation:부작용이 생기다"]],
    ["무분별하다", "无分辨，盲目", "形容词", "indiscriminate; thoughtless", "adjective", "무분별한 조기 교육은 조심해야 해요.", "要小心盲目的早期教育。", "Indiscriminate early education should be approached carefully.", "150", "단어장", ["collocation:무분별하다"]],
    ["모국어", "母语", "名词", "native language", "noun", "요즘 아이들은 모국어조차 제대로 말할 수 없다고 걱정해요.", "有人担心现在孩子连母语都说不好。", "Some worry that children cannot even speak their native language properly.", "150", "듣기", ["collocation:모국어"]],
    ["초등학교", "小学", "名词", "elementary school", "noun", "초등학교에 들어가기 전부터 영어를 배워요.", "从上小学前就学习英语。", "Children learn English even before entering elementary school.", "150", "발음", ["pronunciation:초등학교[초등학꼬]"]],
    ["입시", "升学考试", "名词", "entrance examination", "noun", "대학 진학을 위한 입시 경쟁이 치열해요.", "为升入大学的入学考试竞争很激烈。", "Entrance-exam competition for university admission is fierce.", "150", "발음", ["pronunciation:입시[입씨]"]],
    ["입장", "立场", "名词", "position; standpoint", "noun", "부모의 입장에서는 이해가 돼요.", "从父母的立场来看可以理解。", "It is understandable from the parents' standpoint.", "150", "발음", ["pronunciation:입장[입짱]"]],
    ["학제", "学制", "名词", "school system", "noun", "한국의 학제는 6-3-3-4학제예요.", "韩国的学制是6-3-3-4学制。", "Korea's school system is a 6-3-3-4 system.", "151", "읽기 전", ["collocation:한국의 학제"]],
    ["유치원", "幼儿园", "名词", "kindergarten", "noun", "유치원 다음에는 초등학교에 가요.", "幼儿园之后去小学。", "After kindergarten, children go to elementary school.", "151", "읽기 전", ["collocation:유치원"]],
    ["중학교", "初中", "名词", "middle school", "noun", "중학교 과정은 3년이에요.", "初中课程是3年。", "Middle school lasts three years.", "151", "읽기", ["collocation:중학교 과정"]],
    ["고등학교", "高中", "名词", "high school", "noun", "고등학교 과정은 3년이에요.", "高中课程是3年。", "High school lasts three years.", "151", "읽기", ["collocation:고등학교 과정"]],
    ["전문대학", "专科大学", "名词", "junior college", "noun", "전문대학은 보통 2년제 또는 3년제예요.", "专科大学通常是2年制或3年制。", "Junior colleges are usually two-year or three-year programs.", "151", "읽기 전", ["collocation:전문대학"]],
    ["검정고시", "学历认证考试", "名词", "qualification exam for school equivalency", "noun", "검정고시를 통해 졸업과 같은 자격을 얻을 수 있어요.", "可以通过学历认证考试获得相当于毕业的资格。", "A qualification exam can provide the equivalent of school graduation.", "151", "읽기 전", ["collocation:검정고시"]],
    ["대학 수학 능력 시험", "大学修学能力考试", "名词短语", "College Scholastic Ability Test", "noun phrase", "대학 수학 능력 시험은 매년 11월에 시행돼요.", "大学修学能力考试每年11月举行。", "The College Scholastic Ability Test is held every November.", "151", "읽기 전", ["collocation:대학 수학 능력 시험"]],
    ["수능", "韩国高考", "名词", "CSAT; Korean college entrance exam", "noun", "수능은 대학 입학에 중요한 시험이에요.", "韩国高考是大学入学的重要考试。", "The CSAT is an important exam for university admission.", "151", "읽기 전", ["collocation:수능"]],
    ["재수", "复读", "名词", "studying again for entrance exams", "noun", "입시 결과가 만족스럽지 않으면 재수를 하기도 해요.", "入学考试结果不满意时也会复读。", "If students are not satisfied with their results, they may study for the exam again.", "151", "읽기 전", ["collocation:재수를 하다"]],
    ["방과 후 학습", "课后学习", "名词短语", "after-school learning", "noun phrase", "방과 후 학습으로 특기나 적성에 맞는 교육을 받을 수 있어요.", "通过课后学习可以接受符合特长或适性的教育。", "After-school learning can provide education suited to talents or aptitudes.", "151", "읽기 전", ["collocation:방과 후 학습"]],
    ["체험 학습", "体验学习", "名词短语", "experiential learning", "noun phrase", "체험 학습을 통해 다양한 경험을 할 수 있어요.", "通过体验学习可以获得多样经验。", "Experiential learning allows students to have varied experiences.", "151", "읽기 전", ["collocation:체험 학습"]],
    ["선행 학습", "超前学习", "名词短语", "advance learning", "noun phrase", "선행 학습은 학교 수업을 더 쉽게 이해하도록 도와줘요.", "超前学习帮助更容易理解学校课程。", "Advance learning helps students understand school lessons more easily.", "151", "읽기 전", ["collocation:선행 학습"]],
    ["평생 학습", "终身学习", "名词短语", "lifelong learning", "noun phrase", "평생 학습은 언제든지 배울 수 있어서 좋아요.", "终身学习好在随时都可以学习。", "Lifelong learning is good because people can learn anytime.", "151", "읽기 전", ["collocation:평생 학습"]],
    ["학기", "学期", "名词", "semester", "noun", "한 학년은 두 개의 학기로 이루어져 있어요.", "一个学年由两个学期组成。", "One school year consists of two semesters.", "152", "읽기", ["collocation:두 개의 학기"]],
    ["방학", "假期", "名词", "school vacation", "noun", "각 학기 사이에는 여름 방학과 겨울 방학이 있어요.", "每个学期之间有暑假和寒假。", "Between semesters there are summer and winter vacations.", "152", "읽기", ["collocation:여름 방학과 겨울 방학"]],
    ["배정받다", "被分配", "动词", "to be assigned", "verb", "중학생은 집에서 가까운 학교로 배정받게 돼요.", "初中生会被分配到离家近的学校。", "Middle school students are assigned to schools near their homes.", "152", "읽기", ["collocation:학교로 배정받다"]],
    ["의무 교육", "义务教育", "名词短语", "compulsory education", "noun phrase", "초등학교와 중학교는 의무 교육이에요.", "小学和初中是义务教育。", "Elementary and middle school are compulsory education.", "152", "읽기", ["collocation:의무 교육"]],
    ["무상 교육", "免费教育", "名词短语", "free education", "noun phrase", "초등학교와 중학교는 무상 교육이에요.", "小学和初中是免费教育。", "Elementary and middle school are free education.", "152", "읽기", ["collocation:무상 교육"]],
    ["전문 기술", "专业技术", "名词短语", "specialized skills", "noun phrase", "전문대학은 직업과 관련된 전문 기술을 배워요.", "专科大学主要学习与职业相关的专业技术。", "Junior colleges teach specialized skills related to jobs.", "152", "읽기", ["collocation:전문 기술"]],
    ["수시 모집", "随时招生，综合招生", "名词短语", "rolling admission; early admission", "noun phrase", "대학 입시 유형에는 수시 모집과 정시 모집이 있어요.", "大学入学类型有随时招生和定时招生。", "University admissions include rolling admission and regular admission.", "152", "읽기", ["collocation:수시 모집"]],
    ["정시 모집", "定时招生，普通招生", "名词短语", "regular admission", "noun phrase", "정시 모집은 대학 입시 유형 중 하나예요.", "定时招生是大学入学类型之一。", "Regular admission is one type of university admission.", "152", "읽기", ["collocation:정시 모집"]],
    ["특별 전형", "特殊选拔", "名词短语", "special admission track", "noun phrase", "특별 전형으로 대학에 지원할 수 있어요.", "可以通过特殊选拔申请大学。", "Students can apply to university through a special admission track.", "152", "읽기", ["collocation:특별 전형"]],
    ["진학률", "升学率", "名词", "university enrollment rate", "noun", "한국은 대학 진학률이 높은 편이에요.", "韩国的大学升学率较高。", "Korea has a high university enrollment rate.", "152", "읽기", ["collocation:대학 진학률"]],
    ["인재", "人才", "名词", "talent; capable person", "noun", "높은 교육열 덕분에 인재를 양성할 수 있었어요.", "得益于高教育热情，能够培养人才。", "Strong enthusiasm for education helped train talented people.", "152", "읽기", ["collocation:인재를 양성하다"]],
    ["양성하다", "培养", "动词", "to train; cultivate", "verb", "다양한 분야에서 인재를 양성했어요.", "在多个领域培养了人才。", "Talented people were trained in various fields.", "152", "읽기", ["collocation:인재를 양성하다"]],
    ["보편화되다", "普及", "动词", "to become widespread", "verb", "평생 교육이 보편화되고 있어요.", "终身教育正在普及。", "Lifelong education is becoming widespread.", "154", "문화와 정보", ["collocation:보편화되다"]],
    ["연계되다", "连接，衔接", "动词", "to be connected", "verb", "학교 교육은 초등학교부터 대학교까지 연계돼요.", "学校教育从小学到大学相互衔接。", "School education is connected from elementary school to university.", "154", "문화와 정보", ["collocation:연계되다"]],
    ["사회인", "社会人士，成年人", "名词", "working adult; member of society", "noun", "학교 교육을 마친 사회인에 대한 교육도 중요해졌어요.", "完成学校教育的社会人士教育也变得重要。", "Education for adults who have finished school has become important.", "154", "문화와 정보", ["collocation:사회인"]],
    ["중요성", "重要性", "名词", "importance", "noun", "사회인 교육의 중요성이 커졌어요.", "社会人士教育的重要性变大了。", "The importance of adult education has grown.", "154", "문화와 정보", ["collocation:중요성이 커지다"]],
    ["비롯되다", "源于，始于", "动词", "to originate from", "verb", "평생 교육은 이러한 배경에서 비롯되었어요.", "终身教育源于这样的背景。", "Lifelong education originated from this background.", "154", "문화와 정보", ["collocation:배경에서 비롯되다"]],
    ["학위 과정", "学位课程", "名词短语", "degree program", "noun phrase", "평생 교육 과정에는 학위 과정이 있어요.", "终身教育课程中有学位课程。", "Lifelong education includes degree programs.", "154", "문화와 정보", ["collocation:학위 과정"]],
    ["자격증", "资格证", "名词", "certificate; license", "noun", "자격증을 받는 과정도 있어요.", "也有取得资格证的课程。", "There are also programs for receiving certificates.", "154", "문화와 정보", ["collocation:자격증을 받다"]],
    ["수료증", "结业证", "名词", "completion certificate", "noun", "수료증을 받는 과정도 평생 교육에 포함돼요.", "取得结业证的课程也包含在终身教育中。", "Programs for completion certificates are also part of lifelong education.", "154", "문화와 정보", ["collocation:수료증을 받다"]],
    ["민간", "民间，私营", "名词", "private sector", "noun", "민간 평생 교육 기관도 있어요.", "也有民间终身教育机构。", "There are also private lifelong education institutions.", "154", "문화와 정보", ["collocation:민간 기관"]],
    ["원격", "远程", "名词/冠形词", "remote; distance", "noun/determiner", "원격으로 평생 교육을 받을 기회가 넓어졌어요.", "远程接受终身教育的机会扩大了。", "Opportunities to receive lifelong education remotely have expanded.", "154", "문화와 정보", ["collocation:원격 교육"]],
    ["가정 주부", "家庭主妇", "名词短语", "homemaker", "noun phrase", "가정 주부도 원격 교육을 받기가 편리해졌어요.", "家庭主妇接受远程教育也变方便了。", "It has become easier for homemakers to receive distance education.", "154", "문화와 정보", ["collocation:가정 주부"]],
    ["직장인", "上班族", "名词", "office worker; employee", "noun", "직장인도 평생 교육을 받을 수 있어요.", "上班族也可以接受终身教育。", "Office workers can also receive lifelong education.", "154", "문화와 정보", ["collocation:직장인"]],
    ["학점 은행제", "学分银行制", "名词短语", "academic credit bank system", "noun phrase", "학점 은행제를 활용하면 원격 교육으로 학위도 받을 수 있어요.", "利用学分银行制，也可以通过远程教育取得学位。", "Using the academic credit bank system, people can earn degrees through distance education.", "154", "문화와 정보", ["collocation:학점 은행제"]],
    ["활용하다", "利用，活用", "动词", "to use; make use of", "verb", "원격 대학과 학점 은행제를 활용해 보세요.", "请利用远程大学和学分银行制。", "Make use of remote universities and the credit bank system.", "154", "문화와 정보", ["collocation:활용하다"]],
    ["실용 학문", "实用学问", "名词短语", "practical studies", "noun phrase", "평생 교육에서 실용 학문이 인기가 있어요.", "终身教育中实用学问很受欢迎。", "Practical studies are popular in lifelong education.", "154", "문화와 정보", ["collocation:실용 학문"]],
    ["실무 기술", "实务技术", "名词短语", "practical work skills", "noun phrase", "실무 기술 분야도 인기가 많아요.", "实务技术领域也很受欢迎。", "Practical work-skill fields are also popular.", "154", "문화와 정보", ["collocation:실무 기술"]],
    ["피부 미용", "皮肤美容", "名词短语", "skin care and beauty", "noun phrase", "피부 미용은 평생 교육에서 인기 있는 분야예요.", "皮肤美容是终身教育中受欢迎的领域。", "Skin care and beauty is a popular field in lifelong education.", "154", "문화와 정보", ["collocation:피부 미용"]],
    ["사회 복지", "社会福利", "名词短语", "social welfare", "noun phrase", "사회 복지도 대표적인 분야예요.", "社会福利也是代表性领域。", "Social welfare is also a representative field.", "154", "문화와 정보", ["collocation:사회 복지"]],
    ["상담", "咨询，心理辅导", "名词", "counseling", "noun", "상담 분야를 배우는 사람도 많아요.", "学习咨询领域的人也很多。", "Many people study counseling.", "154", "문화와 정보", ["collocation:상담"]],
    ["보육", "保育，托育", "名词", "childcare", "noun", "보육은 실무 기술 분야 중 하나예요.", "托育是实务技术领域之一。", "Childcare is one practical work-skill field.", "154", "문화와 정보", ["collocation:보육"]],
    ["레크리에이션", "娱乐活动，休闲活动", "名词", "recreation", "noun", "레크리에이션도 평생 교육에서 배울 수 있어요.", "休闲活动指导也可以在终身教育中学习。", "Recreation can also be studied through lifelong education.", "154", "문화와 정보", ["collocation:레크리에이션"]]
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
  window.lessonGuideL4LessonChunks["l4-11"] = {
    id: "l4-11",
    number: 11,
    titleKo: "교육 제도",
    titleZh: "教育制度",
    pages: "144-155",
    status: "draft",
    progress: {
      vocabulary: "draft-p144-p155",
      dialogue: "draft-p147-p149",
      culture: "draft-p154",
      practice: "draft-p147-p154"
    },
    vocabulary,
    vocabularySources: [
      { page: 144, label: "단원 제목", note: "课题、语法和学习目标" },
      { page: 146, label: "어휘", note: "教育制度、教育类型和教育观点" },
      { page: 147, label: "문법 1", note: "N조차 和强调最低限度" },
      { page: 148, label: "문법 2", note: "V/A-기 마련이다 和自然规律表达" },
      { page: 149, label: "말하기", note: "关于私教育的讨论" },
      { page: 150, label: "듣기/발음", note: "早期外语教育和发音规则" },
      { page: 151, label: "읽기 전", note: "韩国学制和学习形式" },
      { page: 152, label: "읽기", note: "韩国教育课程和大学入学" },
      { page: 154, label: "문화와 정보", note: "平生教育" },
      { page: 155, label: "배운 어휘 확인", note: "本课复习词汇补充" }
    ],
    goals: [
      "能表达对私教育的赞成或反对意见。",
      "能写出说明教育制度的文章。",
      "理解韩国 평생 교육 等教育文化信息。"
    ],
    grammar: [
      {
        pattern: "N조차",
        zh: "连……都……",
        guide: "强调连最低限度或意想不到的对象也包括在内，常带有“甚至连这个也……”的语气。",
        translations: {
          en: {
            meaning: "even...",
            guide: "Emphasizes that even an unexpected or minimal case is included."
          }
        }
      },
      {
        pattern: "V/A-기 마련이다",
        zh: "必然会……；总会……",
        guide: "表示按照一般规律、经验或常理自然会发生的结果。",
        translations: {
          en: {
            meaning: "be bound to...; naturally...",
            guide: "Shows that something naturally happens as a general rule or common experience."
          }
        }
      }
    ],
    dialogues: [
      {
        title: "눈조차 안 마주치세요",
        titleKo: "눈조차 안 마주치세요",
        titleZh: "连眼神都不对上",
        focus: "N조차",
        page: "147",
        source: "문법 1",
        sceneZh: "用 N조차 表示“连最低限度的对象也没有做到”。",
        situationZh: "用 N조차 表示“连最低限度的对象也没有做到”。",
        speakers: ["사람 A", "사람 B"],
        lines: [
          {
            speaker: "사람 A",
            ko: "팀장님이 저한테 화가 많이 나신 것 같아요. 저하고 눈조차 안 마주치세요.",
            zh: "组长好像很生我的气，连眼神都不和我对上。",
            noteZh: "눈조차 表示“连眼神这种最低限度的接触也没有”。",
            translations: {
              en: {
                translation: "I think the team leader is very angry with me. He does not even make eye contact with me.",
                note: "눈조차 means 'not even eye contact,' emphasizing a minimal sign of interaction."
              }
            }
          },
          {
            speaker: "사람 B",
            ko: "오해하시는 거 아니에요? 제가 볼 때는 아닌 것 같은데요.",
            zh: "是不是你误会了？在我看来好像不是那样。",
            noteZh: "제가 볼 때는 用来委婉表达个人判断。",
            translations: {
              en: {
                translation: "Could you be misunderstanding? From what I see, I do not think that is the case.",
                note: "제가 볼 때는 softly introduces a personal judgment."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "He Does Not Even Make Eye Contact",
            scene: "Practice using N조차 to emphasize that even a minimal thing is not happening.",
            situation: "Practice using N조차 to emphasize that even a minimal thing is not happening."
          }
        }
      },
      {
        title: "스스로 공부하기 마련이에요",
        titleKo: "스스로 공부하기 마련이에요",
        titleZh: "自然会自己学习",
        focus: "V/A-기 마련이다",
        page: "148",
        source: "문법 2",
        sceneZh: "用 -기 마련이다 表示按常理会自然发生。",
        situationZh: "用 -기 마련이다 表示按常理会自然发生。",
        speakers: ["부모", "이웃"],
        lines: [
          {
            speaker: "부모",
            ko: "우리 애가 공부를 안 해서 고민이에요.",
            zh: "我家孩子不学习，所以我很烦恼。",
            noteZh: "고민이에요 用来说明让自己担心的问题。",
            translations: {
              en: {
                translation: "I am worried because my child does not study.",
                note: "고민이에요 introduces something that is troubling the speaker."
              }
            }
          },
          {
            speaker: "이웃",
            ko: "걱정하지 마세요. 때가 되면 스스로 공부하기 마련이에요.",
            zh: "别担心。到时候自然会自己学习的。",
            noteZh: "-기 마련이다 表示“按经验通常会这样”。",
            translations: {
              en: {
                translation: "Do not worry. When the time comes, children naturally study on their own.",
                note: "-기 마련이다 expresses what usually or naturally happens."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "Children Naturally Study on Their Own",
            scene: "Practice using -기 마련이다 for a natural or expected result.",
            situation: "Practice using -기 마련이다 for a natural or expected result."
          }
        }
      },
      {
        title: "사교육은 꼭 필요한가요?",
        titleKo: "사교육은 꼭 필요한가요?",
        titleZh: "私教育一定有必要吗？",
        focus: "사교육 찬반",
        page: "149",
        source: "말하기",
        sceneZh: "围绕私教育的压力、教育热和制度改善表达赞成与反对意见。",
        situationZh: "围绕私教育的压力、教育热和制度改善表达赞成与反对意见。",
        speakers: ["제이슨", "애나"],
        lines: [
          {
            speaker: "제이슨",
            ko: "어제 뉴스를 보니 고3 학생들이 사교육을 받느라고 학업 스트레스가 심하대요. 잠을 못 자거나 머리가 빠지기도 하고 밥조차 못 먹는 경우도 있고요.",
            zh: "昨天看新闻说，高三学生因为接受私教育，学业压力很大。有时睡不着、掉头发，甚至还有连饭都吃不下的情况。",
            noteZh: "밥조차 못 먹다 强调压力严重到最低限度的吃饭都做不到。",
            translations: {
              en: {
                translation: "I saw on the news yesterday that high school seniors have severe academic stress from private education. Some cannot sleep, lose hair, or even cannot eat.",
                note: "밥조차 못 먹다 emphasizes that stress is so severe that even eating becomes difficult."
              }
            }
          },
          {
            speaker: "애나",
            ko: "스트레스를 많이 받으면 병이 나기 마련이지요. 하지만 한국은 워낙 대학 입시 경쟁이 치열하니까 어쩔 수 없는 것 같아요.",
            zh: "压力太大就难免会生病。不过韩国的大学入学竞争实在太激烈，好像也没办法。",
            noteZh: "워낙 表示原因程度很强，后面常接“所以难免如此”。",
            translations: {
              en: {
                translation: "If students are under a lot of stress, they are bound to get sick. But university entrance competition in Korea is so fierce that it seems unavoidable.",
                note: "워낙 highlights a strong reason behind the situation."
              }
            }
          },
          {
            speaker: "제이슨",
            ko: "요즘 아이들은 학교와 학원 공부 때문에 힘들게 10대를 보내는 것 같아서 안쓰러워요. 학교 수업이 끝나고도 학원에 가서 밤늦게까지 공부하잖아요.",
            zh: "现在的孩子因为学校和补习班学习，好像十几岁过得很辛苦，真让人心疼。学校课结束后还去补习班，学习到深夜不是吗？",
            noteZh: "안쓰럽다 表示看着别人辛苦而心疼。",
            translations: {
              en: {
                translation: "I feel sorry for children these days because they seem to spend their teenage years struggling with school and academy study. Even after school, they go to academies and study until late at night.",
                note: "안쓰럽다 expresses sympathy for someone who is having a hard time."
              }
            }
          },
          {
            speaker: "애나",
            ko: "자신의 아이들을 좋은 대학에 보내려면 부모들이 사교육을 많이 시킬 수밖에 없어요.",
            zh: "如果想把自己的孩子送进好大学，父母只能让他们接受很多私教育。",
            noteZh: "-ㄹ 수밖에 없다 表示“别无选择，只能……”。",
            translations: {
              en: {
                translation: "If parents want to send their children to good universities, they have no choice but to make them take a lot of private education.",
                note: "-ㄹ 수밖에 없다 means 'have no choice but to...'."
              }
            }
          },
          {
            speaker: "제이슨",
            ko: "그렇다고 해도 학부모들의 교육열이 너무 지나친 거 아니에요?",
            zh: "即便如此，家长们的教育热情是不是太过了？",
            noteZh: "그렇다고 해도 用来承认前项后提出反论。",
            translations: {
              en: {
                translation: "Even so, is parents' enthusiasm for education not excessive?",
                note: "그렇다고 해도 concedes a point before presenting a counterargument."
              }
            }
          },
          {
            speaker: "애나",
            ko: "부모들은 자녀들이 좋은 대학에 가길 바라니까요. 그래서 저는 사교육을 시키는 부모의 마음도 이해돼요.",
            zh: "因为父母希望子女上好大学。所以我也理解让孩子接受私教育的父母的心情。",
            noteZh: "마음도 이해돼요 表示虽然不完全赞成，但能理解对方处境。",
            translations: {
              en: {
                translation: "Parents want their children to go to good universities. That is why I also understand the feelings of parents who make their children take private education.",
                note: "마음도 이해돼요 shows empathy even without full agreement."
              }
            }
          },
          {
            speaker: "제이슨",
            ko: "교육 문제는 쉽게 해결될 수 없겠지만 교육 제도는 꼭 개선해야 돼요. 그러면 사교육이나 부모들의 교육열 문제도 해결될 거라고 생각해요.",
            zh: "教育问题虽然不能轻易解决，但教育制度一定要改善。这样私教育和父母教育热的问题也会得到解决。",
            noteZh: "꼭 개선해야 돼요 用来强烈表达必要性。",
            translations: {
              en: {
                translation: "Education problems may not be easy to solve, but the education system must be improved. Then I think problems with private education and parents' enthusiasm for education will also be solved.",
                note: "꼭 개선해야 돼요 strongly expresses necessity."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "Is Private Education Really Necessary?",
            scene: "Discuss private education, academic pressure, parents' enthusiasm for education, and the need to improve the education system.",
            situation: "Discuss private education, academic pressure, parents' enthusiasm for education, and the need to improve the education system."
          }
        }
      }
    ],
    culture: {
      titleKo: "평생 교육",
      titleZh: "终身教育",
      summaryZh: "文章介绍韩国终身教育普及的背景、课程类型、教育机构，以及远程教育和热门学习领域。",
      paragraphs: [
        {
          ko: "최근 한국 사회에서 평생 교육이 보편화되고 있다. 일반적으로 교육은 초등학교부터 대학교까지 연계되는 학교 교육이 중심이었다. 그러나 사회가 발전하면서 학교 교육을 마친 사회인에 대한 교육의 중요성이 커졌다. 평생 교육은 이러한 배경에서 비롯되었다.",
          zh: "最近，终身教育在韩国社会正在普及。一般来说，过去的教育以从小学到大学相互衔接的学校教育为中心。但是随着社会发展，面向完成学校教育的社会人士的教育重要性变大了。终身教育就是在这样的背景下产生的。",
          guide: "第一段说明终身教育兴起的背景：教育不再只限于学校阶段，成年人继续学习也变得重要。",
          translations: {
            en: {
              translation: "Recently, lifelong education has become widespread in Korean society. In general, education used to center on school education connected from elementary school to university. However, as society developed, education for adults who had finished school became more important. Lifelong education arose from this background.",
              guide: "The first paragraph explains why lifelong education emerged: education is no longer limited to the school years, and adult learning has become important."
            }
          }
        },
        {
          ko: "한국의 평생 교육 과정은 두 가지로 나뉘어진다. 하나는 학위 과정이고 다른 하나는 자격증 또는 수료증을 받는 과정이다. 평생 교육을 담당하는 교육 기관도 대학과 민간 평생 교육 기관으로 나뉘어진다.",
          zh: "韩国的终身教育课程分为两种。一种是学位课程，另一种是取得资格证或结业证的课程。负责终身教育的教育机构也分为大学和民间终身教育机构。",
          guide: "第二段抓住两个分类：课程分为学位和证书，机构分为大学和民间机构。",
          translations: {
            en: {
              translation: "Korea's lifelong education programs are divided into two types. One is a degree program, and the other is a program for receiving a certificate or completion certificate. Institutions responsible for lifelong education are also divided into universities and private lifelong education institutions.",
              guide: "The second paragraph gives two classifications: programs are degree or certificate programs, and institutions are universities or private institutions."
            }
          }
        },
        {
          ko: "최근에는 원격으로 평생 교육을 받을 기회가 넓어지고 있어서 가정 주부나 직장인이 평생 교육을 받기가 편리해졌다. 원격 대학과 원격 평생 교육기관의 학점 은행제를 활용하면 원격 교육으로 학위도 받을 수 있다. 평생 교육에서 인기 있는 분야는 주로 실용 학문 또는 실무 기술 분야이다. 피부 미용, 사회 복지, 상담, 보육, 레크리에이션, 외국어가 대표적인 예이다.",
          zh: "最近，远程接受终身教育的机会正在扩大，因此家庭主妇或上班族接受终身教育变得更方便了。如果利用远程大学和远程终身教育机构的学分银行制，也可以通过远程教育取得学位。终身教育中受欢迎的领域主要是实用学问或实务技术领域。皮肤美容、社会福利、咨询、托育、休闲活动、外语是代表性的例子。",
          guide: "第三段说明终身教育的现实便利：远程学习扩大机会，热门领域多偏向实用技能。",
          translations: {
            en: {
              translation: "Recently, opportunities to receive lifelong education remotely have expanded, making it more convenient for homemakers and office workers to receive lifelong education. By using remote universities and the academic credit bank system of remote lifelong education institutions, people can also earn degrees through distance education. Popular fields in lifelong education are mainly practical studies or practical work skills. Skin care and beauty, social welfare, counseling, childcare, recreation, and foreign languages are representative examples.",
              guide: "The third paragraph explains the practical convenience of lifelong education: distance learning expands access, and popular fields tend to focus on practical skills."
            }
          }
        }
      ],
      questions: [
        {
          q: "한국의 평생 교육 과정 두 가지는 무엇입니까?",
          zh: "韩国终身教育课程的两种类型是什么？",
          answerZh: "一种是学位课程，另一种是取得资格证或结业证的课程。",
          translations: {
            en: {
              translation: "What are the two types of lifelong education programs in Korea?",
              answer: "One is a degree program, and the other is a program for receiving a certificate or completion certificate."
            }
          }
        },
        {
          q: "요즘 평생 교육에서 인기 있는 분야는 어느 분야입니까?",
          zh: "最近终身教育中受欢迎的是哪些领域？",
          answerZh: "主要是实用学问或实务技术领域，如皮肤美容、社会福利、咨询、托育、休闲活动、外语等。",
          translations: {
            en: {
              translation: "Which fields are popular in lifelong education these days?",
              answer: "Mainly practical studies or practical work skills, such as skin care and beauty, social welfare, counseling, childcare, recreation, and foreign languages."
            }
          }
        },
        {
          q: "여러분 고향의 평생 교육을 소개해 보세요.",
          zh: "请介绍一下你家乡的终身教育。",
          answerZh: "可以介绍家乡面向成年人、上班族或老年人的学习课程、远程课程、证书课程或兴趣课程。",
          translations: {
            en: {
              translation: "Introduce lifelong education in your hometown.",
              answer: "You can introduce courses for adults, office workers, or older people, including distance courses, certificate courses, or interest-based classes."
            }
          }
        }
      ],
      translations: {
        en: {
          title: "Lifelong Education",
          summary: "The article explains the background behind the spread of lifelong education in Korea, the types of programs and institutions, and the growing convenience of distance education and practical-skill programs."
        }
      }
    },
    practice: [
      {
        type: "grammar",
        title: "N조차",
        promptZh: "用 N조차 说：刚开始学韩语时，连名字都不会写。",
        answerKo: "한국어를 처음 배울 때 이름조차 못 썼어요.",
        translations: {
          en: {
            title: "N조차",
            prompt: "Use N조차: When I first learned Korean, I could not even write my name.",
            answer: "한국어를 처음 배울 때 이름조차 못 썼어요."
          }
        }
      },
      {
        type: "grammar",
        title: "V/A-기 마련이다",
        promptZh: "用 -기 마련이다 说：过度工作就难免会生病。",
        answerKo: "무리하게 일하면 병이 나기 마련이에요.",
        translations: {
          en: {
            title: "V/A-기 마련이다",
            prompt: "Use -기 마련이다: If you work beyond your limits, you are bound to get sick.",
            answer: "무리하게 일하면 병이 나기 마련이에요."
          }
        }
      },
      {
        type: "speaking",
        title: "사교육 찬반",
        promptZh: "说：即使学校成绩不好的学生通过私教育提高成绩，过度私教育也可能损害健康。",
        answerKo: "학교 성적이 좋지 않은 학생들이 사교육을 받으면 성적을 향상시킬 수 있지만 지나친 사교육은 건강을 해칠 수 있어요.",
        translations: {
          en: {
            title: "For and Against Private Education",
            prompt: "Say: Although private education can help students with poor grades improve, excessive private education can harm health.",
            answer: "학교 성적이 좋지 않은 학생들이 사교육을 받으면 성적을 향상시킬 수 있지만 지나친 사교육은 건강을 해칠 수 있어요."
          }
        }
      },
      {
        type: "reading",
        title: "한국의 교육 제도",
        promptZh: "阅读题：韩国的义务教育和免费教育包括哪些阶段？",
        answerKo: "초등학교와 중학교는 의무 교육이며 무상 교육입니다.",
        translations: {
          en: {
            title: "Korea's Education System",
            prompt: "Reading: Which stages are compulsory and free in Korea?",
            answer: "초등학교와 중학교는 의무 교육이며 무상 교육입니다."
          }
        }
      },
      {
        type: "culture",
        title: "평생 교육",
        promptZh: "文化题：韩国终身教育课程分为哪两种？",
        answerKo: "하나는 학위 과정이고 다른 하나는 자격증 또는 수료증을 받는 과정입니다.",
        translations: {
          en: {
            title: "Lifelong Education",
            prompt: "Culture: What are the two types of lifelong education programs in Korea?",
            answer: "하나는 학위 과정이고 다른 하나는 자격증 또는 수료증을 받는 과정입니다."
          }
        }
      }
    ],
    translations: {
      en: {
        title: "The Education System",
        goals: [
          "Express opinions for or against private education.",
          "Use N조차 to emphasize even a minimal or unexpected case.",
          "Use V/A-기 마련이다 to express something that naturally happens as a general rule.",
          "Read about Korea's education system and understand lifelong education in Korea."
        ]
      }
    }
  };
})();
