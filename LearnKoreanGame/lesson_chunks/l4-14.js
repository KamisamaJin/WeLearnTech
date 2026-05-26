(() => {
  const makeTips = (tips) => (tips || []).map((text) => {
    const [type, body] = text.includes(":") ? text.split(/:(.+)/) : ["collocation", text];
    return { type, text: body.trim() };
  });

  const vocabulary = [
    ["생활과 경제", "生活与经济", "名词短语", "life and the economy", "noun phrase", "생활과 경제는 서로 밀접하게 관련되어 있어요.", "生活与经济彼此密切相关。", "Life and the economy are closely connected.", "180", "단원 제목", ["collocation:생활과 경제"]],
    ["경제", "经济", "名词", "economy", "noun", "경제 상황에 대해 이야기해 보세요.", "请谈谈经济状况。", "Talk about economic conditions.", "180", "단원 제목", ["collocation:경제 상황"]],
    ["경제 관련 어휘", "经济相关词汇", "名词短语", "economy-related vocabulary", "noun phrase", "경제 관련 어휘를 익혀 보세요.", "请学习经济相关词汇。", "Learn economy-related vocabulary.", "180", "단원 제목", ["collocation:경제 관련"]],
    ["경제 상황", "经济状况", "名词短语", "economic situation", "noun phrase", "요즘 경제 상황이 어떤 것 같아요?", "你觉得最近经济状况怎么样？", "What do you think of the economic situation these days?", "180", "단원 제목", ["collocation:경제 상황"]],
    ["물가", "物价", "名词", "prices; cost of living", "noun", "물가가 많이 상승했어요.", "物价上涨了很多。", "Prices have risen a lot.", "180", "단원 제목", ["collocation:물가가 상승하다"]],
    ["기사문", "新闻文章", "名词", "news article", "noun", "물가에 대한 기사문을 써 보세요.", "请写一篇关于物价的新闻文章。", "Write a news article about prices.", "180", "단원 제목", ["collocation:기사문을 쓰다"]],
    ["국민연금", "国民年金", "名词", "National Pension", "noun", "국민연금은 한국의 대표적인 사회 보장 제도예요.", "国民年金是韩国代表性的社会保障制度。", "The National Pension is one of Korea's representative social security systems.", "180", "문화와 정보", ["collocation:국민연금"]],
    ["상승하다", "上升，上涨", "动词", "to rise; increase", "verb", "배추 가격이 상승했어요.", "白菜价格上涨了。", "The price of napa cabbage rose.", "182", "어휘", ["collocation:물가가 상승하다"]],
    ["하락하다", "下降，下跌", "动词", "to fall; decrease", "verb", "지난주보다 물가가 하락했어요.", "物价比上周下降了。", "Prices fell compared with last week.", "182", "어휘", ["collocation:물가가 하락하다"]],
    ["실업률", "失业率", "名词", "unemployment rate", "noun", "청년 실업률이 증가하고 있어요.", "青年失业率正在增加。", "The youth unemployment rate is increasing.", "182", "어휘", ["collocation:실업률이 증가하다"]],
    ["증가하다", "增加", "动词", "to increase", "verb", "실업률이 증가하면 취업이 어려워져요.", "失业率增加的话，就业会变难。", "If the unemployment rate increases, getting a job becomes harder.", "182", "어휘", ["collocation:증가하다"]],
    ["감소하다", "减少", "动词", "to decrease", "verb", "실업률이 감소하면 구직이 쉬워져요.", "失业率减少的话，求职会变容易。", "If unemployment decreases, job seeking becomes easier.", "182", "어휘", ["collocation:감소하다"]],
    ["호황", "繁荣，景气好", "名词", "boom; prosperity", "noun", "요즘 경기가 호황이에요.", "最近经济景气很好。", "The economy is booming these days.", "182", "어휘", ["collocation:경기가 호황이다"]],
    ["불황", "不景气，萧条", "名词", "recession; slump", "noun", "경기가 불황이면 취업이 어려워요.", "经济不景气的话，就业困难。", "When the economy is in a slump, getting a job is hard.", "182", "어휘", ["collocation:경기가 불황이다"]],
    ["환율", "汇率", "名词", "exchange rate", "noun", "원 달러 환율이 올랐어요.", "韩元兑美元汇率上升了。", "The won-dollar exchange rate rose.", "182", "어휘", ["collocation:환율이 오르다"]],
    ["오르다", "上升，上涨", "动词", "to go up", "verb", "환율이 오르면 수입품 가격이 비싸질 수 있어요.", "汇率上升的话，进口商品价格可能变贵。", "If the exchange rate rises, imported goods can become more expensive.", "182", "어휘", ["collocation:환율이 오르다"]],
    ["내리다", "下降", "动词", "to go down", "verb", "환율이 내리면 여행 비용이 줄어들 수 있어요.", "汇率下降的话，旅行费用可能减少。", "If the exchange rate goes down, travel costs may decrease.", "182", "어휘", ["collocation:환율이 내리다"]],
    ["소비", "消费", "名词", "consumption", "noun", "소비가 늘면 경기가 좋아질 수 있어요.", "消费增加的话，经济可能变好。", "If consumption increases, the economy may improve.", "182", "어휘", ["collocation:소비"]],
    ["수요", "需求", "名词", "demand", "noun", "수요가 늘면 가격이 오를 수 있어요.", "需求增加的话，价格可能上涨。", "If demand increases, prices may rise.", "182", "어휘", ["collocation:수요가 늘다"]],
    ["공급", "供给", "名词", "supply", "noun", "공급이 급증하면 가격이 하락할 수 있어요.", "供给急增的话，价格可能下降。", "If supply increases sharply, prices can fall.", "185", "말하기", ["collocation:공급이 급증하다"]],
    ["V/A-(으)므로", "因为……；由于……", "语法表达", "because; since", "grammar expression", "예정된 시간이 되었으므로 바로 회의를 시작하겠습니다.", "因为到了预定时间，我们马上开始会议。", "Since the scheduled time has arrived, we will begin the meeting now.", "183", "문법 1", ["form:동사/형용사 + -(으)므로"]],
    ["근거", "根据，依据", "名词", "basis; grounds", "noun", "-(으)므로는 앞 내용에 대한 근거나 이유를 나타내요.", "-(으)므로 表示前面内容的根据或理由。", "-(으)므로 expresses the basis or reason for the preceding content.", "183", "문법 1", ["collocation:근거"]],
    ["공식적인 상황", "正式场合", "名词短语", "formal situation", "noun phrase", "-(으)므로는 공식적인 상황에 어울려요.", "-(으)므로 适合正式场合。", "-(으)므로 fits formal situations.", "183", "문법 1", ["collocation:공식적인 상황"]],
    ["채용 기회", "招聘机会", "名词短语", "hiring opportunity", "noun phrase", "채용 기회가 늘어나므로 취업률도 높아질 것 같아요.", "因为招聘机会增加，就业率也可能提高。", "Since hiring opportunities are increasing, the employment rate will likely rise.", "183", "문법 1", ["collocation:채용 기회"]],
    ["취업률", "就业率", "名词", "employment rate", "noun", "취업률이 높아질 것으로 예상돼요.", "预计就业率会提高。", "The employment rate is expected to rise.", "183", "문법 1", ["collocation:취업률"]],
    ["농도", "浓度", "名词", "concentration", "noun", "미세 먼지 농도가 높으므로 외출을 자제하세요.", "由于细颗粒物浓度高，请减少外出。", "Since fine dust concentration is high, refrain from going out.", "183", "문법 1", ["collocation:농도가 높다"]],
    ["자제하다", "克制，减少", "动词", "to refrain from", "verb", "외출을 자제하시기 바랍니다.", "请减少外出。", "Please refrain from going out.", "183", "문법 1", ["collocation:외출을 자제하다"]],
    ["실명제", "实名制", "名词", "real-name system", "noun", "인터넷 실명제에 찬성합니다.", "我赞成互联网实名制。", "I support the real-name system online.", "183", "문법 1", ["collocation:인터넷 실명제"]],
    ["악플", "恶意评论", "名词", "malicious comment", "noun", "실명제를 실시하면 악플이 줄어들 수 있어요.", "实行实名制的话，恶意评论可能减少。", "If a real-name system is used, malicious comments may decrease.", "183", "문법 1", ["collocation:악플"]],
    ["N은/는커녕", "别说……连……都……", "语法表达", "let alone...", "grammar expression", "보너스는커녕 아직 월급도 못 받았어요.", "别说奖金了，连工资都还没拿到。", "I have not even received my salary yet, let alone a bonus.", "184", "문법 2", ["form:명사 + 은/는커녕"]],
    ["보너스", "奖金", "名词", "bonus", "noun", "보너스는커녕 월급도 못 받았어요.", "别说奖金了，连工资都没拿到。", "I did not even receive my salary, let alone a bonus.", "184", "문법 2", ["collocation:보너스"]],
    ["현금", "现金", "名词", "cash", "noun", "현금은커녕 지갑도 안 가지고 다녀요.", "别说现金了，连钱包都不带。", "I do not even carry a wallet, let alone cash.", "184", "문법 2", ["collocation:현금"]],
    ["지갑", "钱包", "名词", "wallet", "noun", "카드를 사용하니까 지갑도 안 가지고 다녀요.", "因为用卡，所以连钱包都不带。", "Because I use cards, I do not even carry a wallet.", "184", "문법 2", ["collocation:지갑"]],
    ["과제 제출", "提交作业", "名词短语", "assignment submission", "noun phrase", "과제 제출은커녕 아직 시작도 못 했어요.", "别说提交作业了，连开始都还没开始。", "I have not even started, let alone submitted the assignment.", "184", "문법 2", ["collocation:과제 제출"]],
    ["저축하다", "储蓄", "动词", "to save money", "verb", "생활비도 부족해서 저축은커녕 빚이 늘고 있어요.", "生活费都不够，别说储蓄了，债务还在增加。", "Living expenses are not enough, so debt is increasing, let alone saving money.", "184", "문법 2", ["collocation:저축하다"]],
    ["생활비", "生活费", "名词", "living expenses", "noun", "생활비가 부족한 상황이에요.", "是生活费不足的情况。", "It is a situation where living expenses are insufficient.", "184", "문법 2", ["collocation:생활비"]],
    ["취업", "就业", "名词", "employment", "noun", "요즘 취업은커녕 아르바이트도 구하기 어려워요.", "最近别说就业了，连兼职都很难找。", "These days it is hard to find even a part-time job, let alone full-time employment.", "184", "문법 2", ["collocation:취업"]],
    ["아르바이트", "兼职", "名词", "part-time job", "noun", "아르바이트도 구하기 어려워요.", "连兼职都很难找。", "Even part-time jobs are hard to find.", "184", "문법 2", ["collocation:아르바이트를 구하다"]],
    ["김장철", "泡菜腌制季", "名词", "kimchi-making season", "noun", "김장철이라 배추 가격이 급등했어요.", "因为是泡菜腌制季，白菜价格暴涨了。", "Because it is kimchi-making season, cabbage prices soared.", "185", "말하기", ["collocation:김장철"]],
    ["배추 가격", "白菜价格", "名词短语", "napa cabbage price", "noun phrase", "배추 가격이 급등했대요.", "听说白菜价格暴涨了。", "They say napa cabbage prices soared.", "185", "말하기", ["collocation:배추 가격"]],
    ["급등하다", "暴涨，急升", "动词", "to soar", "verb", "원재료 가격이 급등했어요.", "原材料价格暴涨了。", "Raw material prices soared.", "185", "말하기", ["collocation:가격이 급등하다"]],
    ["떨어지다", "下降，下跌", "动词", "to fall; drop", "verb", "태풍 때문에 배춧값이 떨어졌어요.", "因为台风，白菜价格下降了。", "Cabbage prices fell because of the typhoon.", "185", "말하기", ["collocation:값이 떨어지다"]],
    ["요인", "因素", "名词", "factor", "noun", "물가에 영향을 미치는 요인이 다양해요.", "影响物价的因素很多。", "There are many factors that affect prices.", "185", "단어장", ["collocation:요인"]],
    ["취업 준비 동아리", "就业准备社团", "名词短语", "job-preparation club", "noun phrase", "친구들과 취업 준비 동아리를 하고 있어요.", "正在和朋友们参加就业准备社团。", "I am in a job-preparation club with friends.", "185", "말하기", ["collocation:취업 준비 동아리"]],
    ["신경을 쓰다", "费心，留意", "动词短语", "to pay attention; be concerned", "verb phrase", "경기가 좋아야 취업이 잘되니까 늘 신경을 쓰고 있어요.", "经济景气好就业才顺利，所以我一直很关注。", "I always pay attention because employment goes well when the economy is good.", "185", "말하기", ["collocation:신경을 쓰다"]],
    ["비수기", "淡季", "名词", "off-season", "noun", "비수기에는 항공료가 할인돼요.", "淡季机票会打折。", "Airfares are discounted in the off-season.", "185", "단어장", ["collocation:비수기"]],
    ["항공료", "机票费，航空费", "名词", "airfare", "noun", "휴가철이라 항공료 가격이 많이 올랐어요.", "因为休假季，机票价格上涨了很多。", "Airfare rose a lot because it is vacation season.", "185", "말하기", ["collocation:항공료"]],
    ["면접", "面试", "名词", "interview", "noun", "면접 때 단정한 옷차림이 중요해요.", "面试时端正的着装很重要。", "Neat clothing is important in interviews.", "186", "듣기", ["collocation:면접"]],
    ["옷차림", "着装", "名词", "clothing; attire", "noun", "경제 상황과 면접 옷차림은 관계가 있을까요?", "经济状况和面试着装有关吗？", "Is interview attire related to the economic situation?", "186", "듣기", ["collocation:옷차림"]],
    ["유리하다", "有利", "形容词", "advantageous", "adjective", "불황일수록 단정한 옷차림이 취업에 유리해요.", "越是不景气，端正着装越有利于就业。", "In a recession, neat attire is advantageous for getting a job.", "186", "단어장", ["collocation:취업에 유리하다"]],
    ["단정하다", "端正，整洁", "形容词", "neat", "adjective", "단정한 옷차림은 신뢰감을 줘요.", "端正的着装会给人信赖感。", "Neat attire gives a sense of trust.", "186", "단어장", ["collocation:단정한 옷차림"]],
    ["신뢰감", "信赖感", "名词", "sense of trust", "noun", "단정한 옷차림은 신뢰감을 줍니다.", "端正的着装给人信赖感。", "Neat attire creates a sense of trust.", "186", "단어장", ["collocation:신뢰감"]],
    ["자유분방하다", "自由奔放", "形容词", "free-spirited", "adjective", "자유분방한 옷차림보다 단정한 옷차림이 좋을 때가 있어요.", "有时端正着装比自由奔放的着装更好。", "Sometimes neat attire is better than free-spirited clothing.", "186", "단어장", ["collocation:자유분방하다"]],
    ["보수적", "保守的", "名词/冠形词", "conservative", "noun/determiner", "경기 침체기에는 보수적인 면접관이 많을 수 있어요.", "经济低迷期可能有很多保守的面试官。", "During an economic slump, many interviewers may be conservative.", "186", "단어장", ["collocation:보수적"]],
    ["물가 안정", "物价稳定", "名词短语", "price stability", "noun phrase", "새해에 가장 듣고 싶은 뉴스는 물가 안정이에요.", "新年最想听到的新闻是物价稳定。", "The news people most want to hear in the new year is price stability.", "187", "읽기 전", ["collocation:물가 안정"]],
    ["고용 안정", "就业稳定", "名词短语", "employment stability", "noun phrase", "고용 안정을 바라는 사람이 많아요.", "希望就业稳定的人很多。", "Many people hope for employment stability.", "187", "읽기 전", ["collocation:고용 안정"]],
    ["부동산 가격", "房地产价格", "名词短语", "real estate prices", "noun phrase", "부동산 가격 안정도 중요한 뉴스예요.", "房地产价格稳定也是重要新闻。", "Stability in real estate prices is also important news.", "187", "읽기 전", ["collocation:부동산 가격"]],
    ["의료비", "医疗费", "名词", "medical expenses", "noun", "의료비 지원 확대를 바라는 사람도 있어요.", "也有人希望扩大医疗费支援。", "Some people hope for expanded support for medical expenses.", "187", "읽기 전", ["collocation:의료비"]],
    ["교육비", "教育费", "名词", "education expenses", "noun", "교육비 부담을 줄이고 싶어 해요.", "人们想减轻教育费负担。", "People want to reduce the burden of education expenses.", "187", "읽기 전", ["collocation:교육비 부담"]],
    ["설문 조사", "问卷调查", "名词短语", "survey", "noun phrase", "직장인을 대상으로 설문 조사를 실시했어요.", "以公司职员为对象进行了问卷调查。", "A survey was conducted among office workers.", "188", "읽기", ["collocation:설문 조사"]],
    ["직장인", "上班族", "名词", "office worker", "noun", "남녀 직장인 1,000명이 설문에 응답했어요.", "1000名男女上班族回答了问卷。", "One thousand male and female office workers responded to the survey.", "188", "읽기", ["collocation:직장인"]],
    ["응답자", "应答者，受访者", "名词", "respondent", "noun", "응답자의 31%가 물가 안정이라고 답했어요.", "31%的受访者回答物价稳定。", "31% of respondents answered price stability.", "188", "읽기", ["collocation:응답자"]],
    ["절반 이상", "一半以上", "名词短语", "more than half", "noun phrase", "전체 응답자의 절반 이상이 물가와 고용 안정을 바라고 있어요.", "全部受访者的一半以上希望物价和就业稳定。", "More than half of all respondents hope for price and employment stability.", "188", "읽기", ["collocation:절반 이상"]],
    ["영향을 미치다", "产生影响", "动词短语", "to affect; influence", "verb phrase", "최근 경제 상황이 설문 결과에 영향을 미쳤어요.", "最近经济状况影响了调查结果。", "Recent economic conditions affected the survey results.", "188", "읽기", ["collocation:영향을 미치다"]],
    ["폭락", "暴跌", "名词", "plunge", "noun", "가격이 폭락했다가 다시 올랐어요.", "价格暴跌后又上涨了。", "The price plunged and then rose again.", "188", "단어장", ["collocation:폭락"]],
    ["폭등", "暴涨", "名词", "surge; sharp rise", "noun", "물가 폭등은 생활비 부담을 키워요.", "物价暴涨会增加生活费负担。", "A sharp rise in prices increases the burden of living expenses.", "191", "배운 어휘 확인", ["collocation:물가 폭등"]],
    ["성수기", "旺季", "名词", "peak season", "noun", "성수기에는 항공료가 올라요.", "旺季机票费会上涨。", "Airfare rises during peak season.", "189", "쓰기", ["collocation:성수기"]],
    ["인상율", "上涨率", "名词", "increase rate", "noun", "성수기 인상율을 표로 비교해 보세요.", "请用表格比较旺季上涨率。", "Compare peak-season increase rates in the table.", "189", "쓰기", ["collocation:인상율"]],
    ["인하율", "下降率，折扣率", "名词", "decrease rate; discount rate", "noun", "비수기 인하율은 항공사마다 달라요.", "淡季下降率因航空公司而异。", "Off-season discount rates differ by airline.", "189", "쓰기", ["collocation:인하율"]],
    ["사회 보장 제도", "社会保障制度", "名词短语", "social security system", "noun phrase", "국민연금은 사회 보장 제도의 하나예요.", "国民年金是社会保障制度之一。", "The National Pension is a social security system.", "190", "문화와 정보", ["collocation:사회 보장 제도"]],
    ["보험료", "保险费", "名词", "insurance premium", "noun", "소득이 있을 때 매달 보험료를 납부해요.", "有收入时每月缴纳保险费。", "When people have income, they pay an insurance premium every month.", "190", "문화와 정보", ["collocation:보험료를 납부하다"]],
    ["납부하다", "缴纳", "动词", "to pay", "verb", "국민연금 보험료를 납부해야 해요.", "必须缴纳国民年金保险费。", "People must pay National Pension premiums.", "190", "문화와 정보", ["collocation:납부하다"]],
    ["급여", "给付，补助", "名词", "benefit; payment", "noun", "소득이 중단되었을 때 급여를 받아요.", "收入中断时领取给付。", "People receive benefits when income stops.", "190", "문화와 정보", ["collocation:급여를 받다"]],
    ["장애", "残疾，障碍", "名词", "disability", "noun", "장애 등으로 소득이 중단될 수 있어요.", "可能因残疾等原因收入中断。", "Income may stop because of disability or similar reasons.", "190", "문화와 정보", ["collocation:장애"]],
    ["의무적으로", "义务性地，必须", "副词", "mandatorily", "adverb", "소득이 있는 사람은 의무적으로 국민연금에 가입해야 해요.", "有收入的人必须加入国民年金。", "People with income must join the National Pension.", "190", "문화와 정보", ["collocation:의무적으로 가입하다"]],
    ["가입하다", "加入", "动词", "to join; enroll", "verb", "외국인도 국민연금에 가입해야 해요.", "外国人也要加入国民年金。", "Foreigners must also enroll in the National Pension.", "190", "문화와 정보", ["collocation:가입하다"]],
    ["동등하게", "平等地，同等地", "副词", "equally", "adverb", "외국인도 한국인과 동등하게 가입해야 해요.", "外国人也要和韩国人一样加入。", "Foreigners must enroll equally with Koreans.", "190", "문화와 정보", ["collocation:동등하게"]],
    ["사업장 가입자", "工作单位加入者", "名词短语", "workplace subscriber", "noun phrase", "국민연금에 가입된 사업장에 근무하면 사업장 가입자가 돼요.", "在已加入国民年金的工作单位工作，就成为工作单位加入者。", "A foreigner working at a workplace enrolled in the National Pension becomes a workplace subscriber.", "190", "문화와 정보", ["collocation:사업장 가입자"]],
    ["지역 가입자", "地区加入者", "名词短语", "local subscriber", "noun phrase", "그 외의 외국인은 지역 가입자가 돼요.", "其他外国人成为地区加入者。", "Other foreigners become local subscribers.", "190", "문화와 정보", ["collocation:지역 가입자"]],
    ["가입 대상", "加入对象", "名词短语", "enrollment eligibility", "noun phrase", "가입 대상에서 제외되는 경우도 있어요.", "也有被排除在加入对象之外的情况。", "Some cases are excluded from enrollment.", "190", "문화와 정보", ["collocation:가입 대상"]],
    ["제외되다", "被排除", "动词", "to be excluded", "verb", "가입 대상에서 제외되는 경우도 확인해야 해요.", "也要确认是否属于加入对象之外。", "People should check whether they are excluded from enrollment.", "190", "문화와 정보", ["collocation:제외되다"]],
    ["사회 보장 협정", "社会保障协定", "名词短语", "social security agreement", "noun phrase", "사회 보장 협정을 맺은 나라에서 파견된 근로자는 예외가 될 수 있어요.", "从签订社会保障协定的国家派遣来的劳动者可能成为例外。", "Workers dispatched from countries with social security agreements may be exceptions.", "190", "문화와 정보", ["collocation:사회 보장 협정"]],
    ["파견된 근로자", "派遣劳动者", "名词短语", "dispatched worker", "noun phrase", "파견된 근로자는 증명서를 제출해야 해요.", "派遣劳动者需要提交证明书。", "Dispatched workers must submit a certificate.", "190", "문화와 정보", ["collocation:파견된 근로자"]],
    ["증명서", "证明书", "名词", "certificate", "noun", "자기 나라에서 가입한 증명서를 제출하세요.", "请提交在自己国家加入的证明书。", "Submit a certificate showing enrollment in your home country.", "190", "문화와 정보", ["collocation:증명서를 제출하다"]],
    ["체류 자격", "滞留资格，签证资格", "名词短语", "status of stay", "noun phrase", "체류 자격에 따라 가입 대상이 달라질 수 있어요.", "根据滞留资格，加入对象可能不同。", "Eligibility may differ depending on status of stay.", "190", "문화와 정보", ["collocation:체류 자격"]],
    ["국민연금공단", "国民年金公团", "名词", "National Pension Service", "noun", "국민연금공단 홈페이지에서 확인할 수 있어요.", "可以在国民年金公团官网确认。", "You can check on the National Pension Service website.", "190", "문화와 정보", ["collocation:국민연금공단"]]
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
  window.lessonGuideL4LessonChunks["l4-14"] = {
    id: "l4-14",
    number: 14,
    titleKo: "생활과 경제",
    titleZh: "生活与经济",
    pages: "180-191",
    status: "draft",
    progress: {
      vocabulary: "draft-p180-p191",
      dialogue: "draft-p183-p185",
      culture: "draft-p190",
      practice: "draft-p183-p190"
    },
    vocabulary,
    vocabularySources: [
      { page: 180, label: "단원 제목", note: "课题、语法和学习目标" },
      { page: 182, label: "어휘", note: "经济状况、物价、失业率和汇率" },
      { page: 183, label: "문법 1", note: "V/A-(으)므로 和正式原因表达" },
      { page: 184, label: "문법 2", note: "N은/는커녕 和强否定表达" },
      { page: 185, label: "말하기", note: "物价和经济影响对话" },
      { page: 186, label: "듣기/발음", note: "经济状况与面试着装" },
      { page: 187, label: "읽기 전", note: "新年希望新闻和经济展望" },
      { page: 188, label: "읽기", note: "物价稳定新闻文章" },
      { page: 190, label: "문화와 정보", note: "国民年金" },
      { page: 191, label: "배운 어휘 확인", note: "本课复习词汇补充" }
    ],
    goals: [
      "能谈论经济状况和生活中的经济问题。",
      "能写出关于物价的新闻式文章。",
      "理解韩国 국민연금 等经济生活制度。"
    ],
    grammar: [
      {
        pattern: "V/A-(으)므로",
        zh: "因为……；由于……",
        guide: "较正式的原因表达，常用于新闻、会议、公告、报告等正式语境。",
        translations: {
          en: {
            meaning: "because...; since...",
            guide: "A formal cause expression often used in news, meetings, notices, and reports."
          }
        }
      },
      {
        pattern: "N은/는커녕",
        zh: "别说……连……都……",
        guide: "强调前项根本达不到，后面接更低程度的否定情况。",
        translations: {
          en: {
            meaning: "let alone...",
            guide: "Emphasizes that even a lesser situation is not true, let alone the first noun."
          }
        }
      }
    ],
    dialogues: [
      {
        title: "취업률도 높아질 것으로 예상됩니다",
        titleKo: "취업률도 높아질 것으로 예상됩니다",
        titleZh: "预计就业率也会提高",
        focus: "V/A-(으)므로",
        page: "183",
        source: "문법 1",
        sceneZh: "用正式原因表达说明经济预测。",
        speakers: ["아나운서", "경제 전문가"],
        lines: [
          {
            speaker: "아나운서",
            ko: "올해 청년 취업률에 대해서 어떻게 생각하십니까?",
            zh: "您怎么看今年的青年就业率？",
            noteZh: "뉴스나 인터뷰에서 쓰는 격식 있는 질문입니다.",
            translations: {
              en: {
                translation: "What do you think about this year's youth employment rate?",
                note: "This is a formal question used in news or interviews."
              }
            }
          },
          {
            speaker: "경제 전문가",
            ko: "올해 채용 기회가 늘어나므로 취업률도 높아질 것으로 예상됩니다.",
            zh: "由于今年招聘机会增加，预计就业率也会提高。",
            noteZh: "-(으)므로 用在正式说明中，比 -아서/어서 更书面。",
            translations: {
              en: {
                translation: "Since hiring opportunities are increasing this year, the employment rate is expected to rise as well.",
                note: "-(으)므로 is more formal and written than -아서/어서."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "The Employment Rate Is Expected to Rise",
            scene: "Use a formal reason expression to explain an economic forecast."
          }
        }
      },
      {
        title: "현금은커녕 지갑도 안 가지고 다녀요",
        titleKo: "현금은커녕 지갑도 안 가지고 다녀요",
        titleZh: "别说现金了，连钱包都不带",
        focus: "N은/는커녕",
        page: "184",
        source: "문법 2",
        sceneZh: "用 N은/는커녕 强调连更低程度的事都没有做到。",
        speakers: ["애나", "제이슨"],
        lines: [
          {
            speaker: "애나",
            ko: "현금을 많이 가지고 다니는 편이에요?",
            zh: "你属于经常带很多现金的人吗？",
            noteZh: "-는 편이에요 用来描述倾向。",
            translations: {
              en: {
                translation: "Do you tend to carry a lot of cash?",
                note: "-는 편이에요 describes a tendency."
              }
            }
          },
          {
            speaker: "제이슨",
            ko: "아니요, 카드를 사용하니까 현금은커녕 지갑도 안 가지고 다녀요.",
            zh: "不，因为用卡，别说现金了，连钱包都不带。",
            noteZh: "현금은커녕 强调现金当然没有，甚至钱包也不带。",
            translations: {
              en: {
                translation: "No. Since I use cards, I do not even carry a wallet, let alone cash.",
                note: "현금은커녕 emphasizes that not only cash but even a wallet is not carried."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "I Do Not Even Carry a Wallet, Let Alone Cash",
            scene: "Use N은/는커녕 to emphasize that even a lesser thing is not true."
          }
        }
      },
      {
        title: "배추 가격이 급등했대요",
        titleKo: "배추 가격이 급등했대요",
        titleZh: "听说白菜价格暴涨了",
        focus: "물가와 경제 상황",
        page: "185",
        source: "말하기",
        sceneZh: "围绕物价、天气、经济因素和就业准备进行对话。",
        speakers: ["라민", "아나이스"],
        lines: [
          {
            speaker: "라민",
            ko: "아나이스 씨, 오늘 뉴스 보니까 요즘 김장철이라 배추 가격이 급등했대요.",
            zh: "阿奈斯，我今天看新闻，说最近因为是泡菜腌制季，白菜价格暴涨了。",
            noteZh: "-대요 表示转述听到的信息。",
            translations: {
              en: {
                translation: "Anais, I saw on the news today that napa cabbage prices have soared because it is kimchi-making season.",
                note: "-대요 reports information heard from another source."
              }
            }
          },
          {
            speaker: "아나이스",
            ko: "아, 그래요? 저는 몇 달 전에 태풍 때문에 배춧값이 떨어졌다는 기사를 봤어요. 그때하고 상황이 많이 달라졌네요.",
            zh: "啊，是吗？我几个月前看到一篇报道说，因为台风白菜价格下跌了。和那时候相比，情况变了很多啊。",
            noteZh: "그때하고 상황이 달라지다 用来比较前后情况变化。",
            translations: {
              en: {
                translation: "Oh, really? A few months ago, I read an article saying cabbage prices had fallen because of a typhoon. The situation has changed a lot since then.",
                note: "그때하고 상황이 달라지다 compares how the situation has changed."
              }
            }
          },
          {
            speaker: "라민",
            ko: "그러게 말이에요. 물가에 영향을 미치는 요인이 다양하니까요.",
            zh: "就是说啊。影响物价的因素很多嘛。",
            noteZh: "그러게 말이에요 表示同意并感叹。",
            translations: {
              en: {
                translation: "Exactly. There are many factors that affect prices.",
                note: "그러게 말이에요 expresses agreement with a feeling of realization."
              }
            }
          },
          {
            speaker: "아나이스",
            ko: "맞아요. 그러고 보니 라민 씨는 경제에 관심이 많은 것 같아요.",
            zh: "是啊。说起来，你好像对经济很感兴趣。",
            noteZh: "그러고 보니 用于由前文联想到另一件事。",
            translations: {
              en: {
                translation: "Right. Come to think of it, you seem very interested in the economy.",
                note: "그러고 보니 introduces something the speaker realizes from the previous context."
              }
            }
          },
          {
            speaker: "라민",
            ko: "네, 학교에서 친구들과 취업 준비 동아리를 하면서 경제 문제에 대해 자주 이야기하거든요. 경기가 좋아야 취업이 잘되니까 늘 신경을 쓰고 있어요.",
            zh: "是的，我在学校和朋友们参加就业准备社团，经常谈经济问题。经济景气好，就业才顺利，所以我一直很关注。",
            noteZh: "경기가 좋아야 취업이 잘되다 表示就业和经济景气相关。",
            translations: {
              en: {
                translation: "Yes. I am in a job-preparation club with friends at school, so we often talk about economic issues. Since employment goes well when the economy is good, I always pay attention to it.",
                note: "경기가 좋아야 취업이 잘되다 connects employment with economic conditions."
              }
            }
          },
          {
            speaker: "아나이스",
            ko: "와, 멋진 태도예요. 저도 앞으로 경제에 더 관심을 가져야겠어요.",
            zh: "哇，态度真棒。我以后也要更关心经济。",
            noteZh: "관심을 가져야겠어요 表示说话人决定以后要关注。",
            translations: {
              en: {
                translation: "Wow, that is a great attitude. I should also pay more attention to the economy from now on.",
                note: "관심을 가져야겠어요 expresses a decision to pay attention."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "They Say Cabbage Prices Soared",
            scene: "Discuss prices, weather, economic factors, and job preparation."
          }
        }
      }
    ],
    culture: {
      titleKo: "국민연금",
      titleZh: "国民年金",
      summaryZh: "文章介绍韩国国民年金的基本制度、外国人的加入类型，以及如何确认自己是否属于加入对象。",
      paragraphs: [
        {
          ko: "국민연금은 한국의 대표적인 사회 보장 제도의 하나이다. 국민연금은 소득이 있을 때 매달 보험료를 납부하고 나이가 들거나 장애 등으로 소득이 중단되었을 때 급여를 받는 제도이다. 한국에서는 60세 미만으로서 소득이 있는 사람은 의무적으로 국민연금에 가입해야 한다. 한국에 거주하고 있는 외국인도 한국인과 동등하게 국민연금에 가입해야 한다.",
          zh: "国民年金是韩国代表性的社会保障制度之一。国民年金是在有收入时每月缴纳保险费，年纪大了或因残疾等收入中断时领取给付的制度。在韩国，未满60岁且有收入的人必须加入国民年金。居住在韩国的外国人也要和韩国人同等加入国民年金。",
          guide: "第一段说明国民年金的作用：工作时缴费，收入中断或年老时获得保障。",
          translations: {
            en: {
              translation: "The National Pension is one of Korea's representative social security systems. It is a system in which people pay insurance premiums every month while they have income and receive benefits when income stops because of old age, disability, or similar reasons. In Korea, people under 60 who have income must join the National Pension. Foreigners residing in Korea must also join the National Pension equally with Koreans.",
              guide: "The first paragraph explains the role of the National Pension: people pay while working and receive protection when income stops or they grow older."
            }
          }
        },
        {
          ko: "외국인의 국민연금 가입은 '사업장 가입자'와 '외국인 지역 가입자'로 구분된다. 만 18세 이상 60세 미만의 외국인이 국민연금에 가입된 사업장에 근무하면 사업장 가입자가 된다. 그 외의 외국인은 지역 가입자가 된다. 가입 대상에서 제외되는 경우도 있기 때문에 반드시 확인을 해야 한다. 만약 한국과 사회 보장 협정을 맺은 나라에서 한국으로 파견된 근로자가 자기 나라에서 국민연금에 가입한 증명서를 제출하면 한국에서 국민연금에 가입하지 않아도 된다.",
          zh: "外国人的国民年金加入分为“工作单位加入者”和“外国人地区加入者”。18岁以上、未满60岁的外国人在已加入国民年金的工作单位工作，就成为工作单位加入者。除此之外的外国人成为地区加入者。由于也有被排除在加入对象之外的情况，所以必须确认。如果从与韩国签订社会保障协定的国家派遣到韩国的劳动者提交了在自己国家已加入国民年金的证明书，就可以不在韩国加入国民年金。",
          guide: "第二段区分外国人的两类加入方式，并提示有例外情况，要按国家和身份确认。",
          translations: {
            en: {
              translation: "Foreigners' National Pension enrollment is divided into workplace subscribers and foreign local subscribers. A foreigner between 18 and under 60 who works at a workplace enrolled in the National Pension becomes a workplace subscriber. Other foreigners become local subscribers. Because there are cases excluded from enrollment, people must check carefully. If a worker dispatched to Korea from a country that has a social security agreement with Korea submits proof of enrollment in the national pension of their own country, they do not have to join the National Pension in Korea.",
              guide: "The second paragraph distinguishes two enrollment types for foreigners and notes that exceptions depend on country and status."
            }
          }
        },
        {
          ko: "이외에도 국가별로 가입 대상인지 아닌지, 체류 자격에 따라 한국의 국민연금 가입 대상인지 아닌지에 대해서는 국민연금공단 홈페이지에서 확인할 수 있다.",
          zh: "除此之外，按国家是否属于加入对象、按滞留资格是否属于韩国国民年金加入对象等信息，可以在国民年金公团官网确认。",
          guide: "第三段给出查询路径：是否要加入，最终以国民年金公团官网的信息为准。",
          translations: {
            en: {
              translation: "In addition, whether a person is subject to enrollment by country and whether they are subject to Korea's National Pension enrollment according to their status of stay can be checked on the National Pension Service website.",
              guide: "The third paragraph gives the checking route: final eligibility should be confirmed on the National Pension Service website."
            }
          }
        }
      ],
      questions: [
        {
          q: "외국인이 가입하는 사업장 가입자와 지역 가입자는 무엇이 다릅니까?",
          zh: "外国人加入的工作单位加入者和地区加入者有什么不同？",
          answerZh: "在已加入国民年金的工作单位工作的外国人成为工作单位加入者，除此之外的外国人成为地区加入者。",
          translations: {
            en: {
              translation: "What is the difference between workplace subscribers and local subscribers for foreigners?",
              answer: "Foreigners working at workplaces enrolled in the National Pension become workplace subscribers, while other foreigners become local subscribers."
            }
          }
        },
        {
          q: "자신이 한국의 국민연금 가입 대상인지 알고 싶으면 어느 홈페이지에 들어가면 됩니까?",
          zh: "如果想知道自己是否属于韩国国民年金加入对象，应该进入哪个网站？",
          answerZh: "可以进入国民年金公团 홈페이지，也就是 www.nps.or.kr 查询。",
          translations: {
            en: {
              translation: "Which website should you visit to check whether you are subject to Korea's National Pension enrollment?",
              answer: "You can check the National Pension Service website, www.nps.or.kr."
            }
          }
        },
        {
          q: "한국의 국민연금 제도에 대해 여러분이 더 알고 싶은 정보는 무엇입니까?",
          zh: "关于韩国国民年金制度，你还想了解什么信息？",
          answerZh: "可以说想了解缴费金额、领取条件、外国人退还制度、不同签证是否必须加入等信息。",
          translations: {
            en: {
              translation: "What information would you like to know more about Korea's National Pension system?",
              answer: "You can mention premium amounts, benefit conditions, refund systems for foreigners, or whether different visa statuses must enroll."
            }
          }
        }
      ],
      translations: {
        en: {
          title: "National Pension",
          summary: "The article explains Korea's National Pension system, enrollment categories for foreigners, and how to check whether one is required to enroll."
        }
      }
    },
    practice: [
      {
        type: "grammar",
        title: "V/A-(으)므로",
        promptZh: "用 -(으)므로 说：由于最近物价上涨很多，请理解食品价格上调。",
        answerKo: "최근 물가가 많이 올랐으므로 음식 가격 인상을 이해해 주시기 바랍니다.",
        translations: {
          en: {
            title: "V/A-(으)므로",
            prompt: "Use -(으)므로: Since prices have risen a lot recently, please understand the food price increase.",
            answer: "최근 물가가 많이 올랐으므로 음식 가격 인상을 이해해 주시기 바랍니다."
          }
        }
      },
      {
        type: "grammar",
        title: "N은/는커녕",
        promptZh: "用 은/는커녕 说：最近别说储蓄了，连生活费都不够。",
        answerKo: "요즘은 저축은커녕 생활비도 부족한 상황이에요.",
        translations: {
          en: {
            title: "N은/는커녕",
            prompt: "Use 은/는커녕: These days, living expenses are not even enough, let alone saving money.",
            answer: "요즘은 저축은커녕 생활비도 부족한 상황이에요."
          }
        }
      },
      {
        type: "speaking",
        title: "경제 상황과 영향",
        promptZh: "说：经济景气好就业才顺利，所以我一直关注经济问题。",
        answerKo: "경기가 좋아야 취업이 잘되니까 경제 문제에 늘 신경을 쓰고 있어요.",
        translations: {
          en: {
            title: "Economic Conditions and Effects",
            prompt: "Say: Since employment goes well when the economy is good, I always pay attention to economic issues.",
            answer: "경기가 좋아야 취업이 잘되니까 경제 문제에 늘 신경을 쓰고 있어요."
          }
        }
      },
      {
        type: "reading",
        title: "새해에 가장 듣고 싶은 뉴스",
        promptZh: "阅读题：调查中受访者最希望听到的新年新闻是什么？",
        answerKo: "물가 안정입니다.",
        translations: {
          en: {
            title: "News People Most Want to Hear in the New Year",
            prompt: "Reading: What news did respondents most want to hear in the new year?",
            answer: "물가 안정입니다."
          }
        }
      },
      {
        type: "culture",
        title: "국민연금",
        promptZh: "文化题：外国人如何确认自己是否属于韩国国民年金加入对象？",
        answerKo: "국민연금공단 홈페이지에서 확인할 수 있습니다.",
        translations: {
          en: {
            title: "National Pension",
            prompt: "Culture: How can foreigners check whether they are subject to Korea's National Pension enrollment?",
            answer: "국민연금공단 홈페이지에서 확인할 수 있습니다."
          }
        }
      }
    ],
    translations: {
      en: {
        title: "Life and the Economy",
        goals: [
          "Talk about economic conditions and everyday economic issues.",
          "Use V/A-(으)므로 to express a formal reason.",
          "Use N은/는커녕 to emphasize that even a lesser situation is not true.",
          "Write a newspaper-style article about prices and understand Korea's National Pension system."
        ]
      }
    }
  };
})();
