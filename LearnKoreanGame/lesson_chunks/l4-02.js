(() => {
  const makeTips = (tips) => (tips || []).map((text) => {
    const [type, body] = text.includes(":") ? text.split(/:(.+)/) : ["collocation", text];
    return { type, text: body.trim() };
  });

  const vocabulary = [
    ["가족의 변화", "家庭的变化", "名词短语", "changes in families", "noun phrase", "가족의 변화를 보면 사회 변화도 알 수 있어요.", "观察家庭变化，也能了解社会变化。", "Looking at changes in families also shows social change.", "24", "단원 제목", ["collocation:가족의 변화를 살펴보다"]],
    ["대가족", "大家庭", "名词", "extended family", "noun", "대가족은 여러 세대가 함께 사는 경우가 많아요.", "大家庭常常是多个世代一起生活。", "An extended family often has several generations living together.", "26", "어휘", ["collocation:대가족으로 살다"]],
    ["핵가족", "核心家庭，小家庭", "名词", "nuclear family", "noun", "핵가족은 부모와 자녀 중심의 가족 형태예요.", "核心家庭是以父母和子女为中心的家庭形态。", "A nuclear family is centered on parents and children.", "26", "어휘", ["contrast:대가족 / 핵가족"]],
    ["부모님을 모시다", "奉养父母；和父母一起生活", "动词短语", "to live with and care for one's parents", "verb phrase", "잠시드 씨 고향에는 부모님을 모시고 사는 사람이 많아요.", "Jamshed 的家乡有很多人和父母一起生活并照顾父母。", "In Jamshed's hometown, many people live with and care for their parents.", "26", "어휘", ["collocation:부모님을 모시고 살다"]],
    ["세대", "世代", "名词", "generation", "noun", "여러 세대가 함께 살면 가족 간의 유대가 깊어져요.", "多个世代一起生活，家人之间的纽带会更深。", "When several generations live together, family bonds grow deeper.", "26", "어휘", ["collocation:여러 세대가 함께 살다"]],
    ["유대가 깊다", "纽带深，关系紧密", "形容词短语", "to have a deep bond", "adjective phrase", "대가족은 가족 간의 유대가 깊은 편이에요.", "大家庭通常家人之间关系比较紧密。", "Extended families tend to have deep bonds among family members.", "26", "어휘", ["collocation:가족 간의 유대가 깊다"]],
    ["분가하다", "分家，搬出去独立生活", "动词", "to move out and live separately", "verb", "결혼 후에 분가해서 사는 부부가 많아요.", "结婚后分家生活的夫妻很多。", "Many couples move out and live separately after marriage.", "26", "어휘", ["collocation:분가해서 살다"]],
    ["가사를 분담하다", "分担家务", "动词短语", "to share housework", "verb phrase", "맞벌이를 하면 가사를 분담하는 것이 중요해요.", "双职工家庭中分担家务很重要。", "When both spouses work, sharing housework is important.", "26", "어휘", ["collocation:부부가 가사를 분담하다"]],
    ["존중받다", "受到尊重", "动词", "to be respected", "verb", "핵가족에서는 각자의 생활을 존중받을 수 있어요.", "在核心家庭中，每个人的生活可以得到尊重。", "In a nuclear family, each person's life can be respected.", "26", "어휘", ["form:존중하다 -> 존중받다"]],
    ["집안일", "家务；家里的事", "名词", "housework; family matters", "noun", "집안일을 함께 결정하는 가족이 늘고 있어요.", "一起决定家里事情的家庭正在增加。", "More families decide household matters together.", "26", "어휘", ["collocation:집안일을 결정하다"]],
    ["국제결혼", "国际婚姻", "名词", "international marriage", "noun", "국제결혼을 한 가족도 현대 가족의 한 형태예요.", "国际婚姻家庭也是现代家庭的一种形态。", "International-marriage families are one form of modern family.", "26", "어휘", ["collocation:국제결혼을 하다"]],
    ["맞벌이", "双职工，夫妻双方都工作", "名词", "dual-income couple", "noun", "요즘은 맞벌이를 하는 부부가 많아요.", "现在双职工夫妻很多。", "Many couples are dual-income these days.", "26", "어휘", ["pronunciation:맞벌이[맏뻐리]"]],
    ["한쪽 부모", "单方父母，一位家长", "名词短语", "one parent", "noun phrase", "한쪽 부모와 사는 아이들도 있어요.", "也有和一位家长一起生活的孩子。", "Some children live with one parent.", "26", "어휘", ["collocation:한쪽 부모와 살다"]],
    ["주말부부", "周末夫妻", "名词", "weekend couple", "noun", "직장 때문에 주말부부로 지내는 경우도 있어요.", "也有因为工作而作为周末夫妻生活的情况。", "Some couples live as weekend couples because of work.", "26", "어휘", ["collocation:주말부부로 지내다"]],
    ["독립하다", "独立生活", "动词", "to become independent", "verb", "성인이 되면 독립하는 사람이 늘고 있어요.", "成年后独立生活的人正在增加。", "More people live independently after becoming adults.", "26", "어휘", ["collocation:성인이 되면 독립하다"]],
    ["혼자 살다", "独自生活", "动词短语", "to live alone", "verb phrase", "혼자 사는 가구가 계속 증가하고 있어요.", "独居家庭持续增加。", "Single-person households continue to increase.", "26", "어휘", ["collocation:혼자 사는 가구"]],
    ["아이를 낳다", "生孩子", "动词短语", "to have a child", "verb phrase", "아이를 낳지 않는 부부가 많아지고 있어요.", "不生孩子的夫妻正在变多。", "More couples are choosing not to have children.", "26", "어휘", ["collocation:아이를 낳지 않다"]],
    ["입양하다", "领养", "动词", "to adopt", "verb", "아이를 입양하는 가족도 있어요.", "也有领养孩子的家庭。", "Some families adopt children.", "26", "어휘", ["collocation:아이를 입양하다"]],
    ["재혼하다", "再婚", "动词", "to remarry", "verb", "재혼한 가족도 다양한 가족 형태 중 하나예요.", "再婚家庭也是多样家庭形态之一。", "Remarried families are one type of diverse family form.", "26", "어휘", ["collocation:재혼한 가족"]],
    ["뿐만 아니라", "不仅……而且……", "语法表达", "not only... but also...", "grammar expression", "분위기가 좋을 뿐만 아니라 음식도 맛있어요.", "不仅气氛好，食物也好吃。", "Not only is the atmosphere good, but the food is delicious too.", "27", "문법 1", ["form:받침 있음 -을 뿐만 아니라 / 받침 없음 -ㄹ 뿐만 아니라"]],
    ["홀로 사는 노인", "独居老人", "名词短语", "elderly person living alone", "noun phrase", "홀로 사는 노인이 많아지고 있어요.", "独居老人正在增加。", "The number of elderly people living alone is increasing.", "27", "문법 1", ["similar:독거노인"]],
    ["전업", "专职", "名词", "full-time occupation", "noun", "집안일을 전업으로 하는 남편도 늘고 있어요.", "专职做家务的丈夫也在增加。", "More husbands do housework full-time.", "27", "문법 1", ["collocation:전업으로 하다"]],
    ["다문화 가족", "多文化家庭", "名词", "multicultural family", "noun", "다문화 가족이 증가하고 있어요.", "多文化家庭正在增加。", "Multicultural families are increasing.", "27", "문법 1", ["collocation:다문화 가족이 증가하다"]],
    ["한 부모 가족", "单亲家庭", "名词", "single-parent family", "noun", "여러 원인으로 한 부모 가족이 증가하고 있어요.", "由于多种原因，单亲家庭正在增加。", "Single-parent families are increasing for various reasons.", "27", "문법 1", ["spacing:한 부모 가족"]],
    ["수밖에 없다", "只能……；不得不……", "语法表达", "to have no choice but to...", "grammar expression", "출장을 가게 돼서 수업에 빠질 수밖에 없었어요.", "因为突然要出差，所以只能缺课。", "I had no choice but to miss class because I had to go on a business trip.", "28", "문법 2", ["form:동사 -ㄹ/을 수밖에 없다"]],
    ["수업에 빠지다", "缺课", "动词短语", "to miss class", "verb phrase", "지난주에는 출장 때문에 수업에 빠졌어요.", "上周因为出差缺课了。", "I missed class last week because of a business trip.", "28", "문법 2", ["collocation:수업에 빠지다"]],
    ["출장", "出差", "名词", "business trip", "noun", "갑자기 출장을 가게 됐어요.", "突然要去出差。", "I suddenly had to go on a business trip.", "28", "문법 2", ["collocation:출장을 가다"]],
    ["교육비", "教育费", "名词", "education expenses", "noun", "슬기 교육비 때문에 지출이 늘었어요.", "因为 Seulgi 的教育费，支出增加了。", "Expenses increased because of Seulgi's education costs.", "28", "문법 2", ["collocation:교육비가 들다"]],
    ["지출", "支出", "名词", "expenses", "noun", "식구가 늘어서 지출이 많아졌어요.", "家里人口增加，所以支出变多了。", "Expenses grew because the family grew.", "28", "문법 2", ["collocation:지출이 늘다"]],
    ["떨어져 살다", "分开生活", "动词短语", "to live apart", "verb phrase", "회사 때문에 가족과 떨어져 살 수밖에 없어요.", "因为公司在外地，只能和家人分开住。", "I have no choice but to live apart from my family because of work.", "28", "문법 2", ["collocation:가족과 떨어져 살다"]],
    ["가계부를 쓰다", "记家庭账本", "动词短语", "to keep a household ledger", "verb phrase", "지출이 많아져서 매일 가계부를 써요.", "支出变多，所以每天记账。", "I keep a household ledger every day because expenses increased.", "28", "문법 2", ["collocation:매일 가계부를 쓰다"]],
    ["식구", "家里人口，家人", "名词", "family members; household members", "noun", "식구가 늘고 지출이 많아졌어요.", "家里人口增加，支出也变多了。", "The household grew and expenses increased.", "28", "문법 2", ["usage:집에서 함께 생활하는 사람을 말할 때 자주 씀"]],
    ["육아 휴직을 내다", "请育儿假", "动词短语", "to take parental leave", "verb phrase", "아이를 볼 사람이 없어서 육아 휴직을 냈어요.", "因为没人照看孩子，所以请了育儿假。", "I took parental leave because no one could look after the child.", "28", "문법 2", ["collocation:육아 휴직을 내다"]],
    ["명절", "传统节日", "名词", "traditional holiday", "noun", "대가족이라서 명절에 음식을 많이 준비해요.", "因为是大家庭，所以节日时准备很多食物。", "Because we are an extended family, we prepare a lot of food on holidays.", "28", "문법 2", ["collocation:명절 음식을 준비하다"]],
    ["경제적인 부담", "经济负担", "名词短语", "financial burden", "noun phrase", "식구가 적으면 경제적인 부담이 적어요.", "家里人口少的话，经济负担较小。", "If there are fewer household members, the financial burden is smaller.", "29", "말하기", ["collocation:경제적인 부담이 적다"]],
    ["평등하다", "平等", "形容词", "to be equal", "adjective", "핵가족은 가족 관계가 평등한 편이에요.", "核心家庭的家庭关系比较平等。", "Relationships in a nuclear family tend to be equal.", "29", "말하기", ["collocation:가족 관계가 평등하다"]],
    ["혼인율", "结婚率", "名词", "marriage rate", "noun", "작년 혼인율이 역대 최저였어요.", "去年结婚率创历史最低。", "Last year's marriage rate was the lowest ever.", "31", "읽기 전", ["collocation:혼인율이 감소하다"]],
    ["역대 최저", "历史最低", "名词短语", "record low", "noun phrase", "혼인율이 역대 최저를 기록했어요.", "结婚率创下历史最低。", "The marriage rate hit a record low.", "31", "읽기 전", ["collocation:역대 최저를 기록하다"]],
    ["결혼 연령", "结婚年龄", "名词", "marriage age", "noun", "결혼 연령이 높아지고 있어요.", "结婚年龄正在提高。", "The marriage age is rising.", "31", "읽기 전", ["collocation:결혼 연령이 높아지다"]],
    ["이혼율", "离婚率", "名词", "divorce rate", "noun", "이혼율이 증가하면 가족 형태도 다양해져요.", "离婚率增加，家庭形态也会多样化。", "As the divorce rate rises, family forms also diversify.", "31", "읽기 전", ["collocation:이혼율이 증가하다"]],
    ["가치관", "价值观", "名词", "values", "noun", "결혼에 대한 가치관이 변화하고 있어요.", "关于结婚的价值观正在变化。", "Values about marriage are changing.", "31", "읽기 전", ["collocation:가치관이 변화하다"]],
    ["경제 활동", "经济活动", "名词", "economic activity", "noun", "여성의 경제 활동이 활발해졌어요.", "女性的经济活动变得活跃了。", "Women's economic activity has become more active.", "31", "읽기 전", ["collocation:경제 활동이 활발하다"]],
    ["평균 수명", "平均寿命", "名词", "average life expectancy", "noun", "평균 수명이 늘면서 가족 형태도 달라졌어요.", "随着平均寿命延长，家庭形态也发生了变化。", "As life expectancy increased, family forms changed too.", "31", "읽기 전", ["collocation:평균 수명이 늘다"]],
    ["1인 가구", "一人家庭，单人户", "名词", "single-person household", "noun", "1인 가구가 전체 가구 수의 약 30%를 차지했어요.", "一人家庭约占总户数的 30%。", "Single-person households account for about 30 percent of all households.", "32", "읽기", ["spacing:1인 가구"]],
    ["소포장", "小包装", "名词", "small-package", "noun", "1인 가구를 위한 소포장 식품이 인기를 끌고 있어요.", "面向一人家庭的小包装食品很受欢迎。", "Small-package foods for single-person households are popular.", "31", "읽기 전", ["collocation:소포장 식품"]],
    ["매출", "销售额", "名词", "sales", "noun", "소포장 식품 매출이 늘고 있어요.", "小包装食品销售额正在增加。", "Sales of small-package foods are increasing.", "31", "읽기 전", ["collocation:매출이 늘다"]],
    ["싱글족", "单身族", "名词", "singles; people living alone", "noun", "늘어나는 싱글족 때문에 사회 변화가 생기고 있어요.", "由于单身族增加，社会正在发生变化。", "More singles are bringing changes to society.", "31", "읽기 전", ["usage:신문 기사 제목에서 자주 보임"]],
    ["불가피하다", "不可避免", "形容词", "to be inevitable", "adjective", "1인 가구가 늘어나면 사회 변화가 불가피해요.", "一人家庭增加的话，社会变化不可避免。", "If single-person households increase, social change is inevitable.", "31", "읽기 전", ["collocation:변화가 불가피하다"]],
    ["독거노인", "独居老人", "名词", "elderly person living alone", "noun", "독거노인을 위한 돌봄 서비스가 필요해요.", "需要面向独居老人的照护服务。", "Care services for elderly people living alone are needed.", "31", "읽기 전", ["similar:홀로 사는 노인"]],
    ["사물 인터넷", "物联网", "名词", "Internet of Things", "noun", "사물 인터넷 기기를 활용해 독거노인을 돕고 있어요.", "正在利用物联网设备帮助独居老人。", "Internet of Things devices are used to help elderly people living alone.", "31", "읽기 전", ["abbrev:IoT"]],
    ["감지되다", "被检测到，被感应到", "动词", "to be detected", "verb", "움직임이 감지되지 않으면 119에 신고해요.", "如果没有检测到动静，就向 119 报警。", "If no movement is detected, they report it to 119.", "31", "읽기 전", ["collocation:움직임이 감지되다"]],
    ["고령화", "老龄化", "名词", "aging population", "noun", "고령화도 1인 가구 증가의 원인 중 하나예요.", "老龄化也是一人家庭增加的原因之一。", "Population aging is one cause of the increase in single-person households.", "32", "읽기", ["collocation:고령화 현상"]],
    ["감소하다", "减少", "动词", "to decrease", "verb", "혼인율이 감소하고 있어요.", "结婚率正在下降。", "The marriage rate is decreasing.", "32", "읽기", ["antonym:증가하다"]],
    ["등장하다", "出现，登场", "动词", "to appear; to emerge", "verb", "1인 가구를 대상으로 한 상품이 등장했어요.", "面向一人家庭的商品出现了。", "Products targeting single-person households have emerged.", "32", "읽기", ["collocation:상품이 등장하다"]],
    ["생필품", "生活必需品", "名词", "daily necessities", "noun", "생필품도 1인 가구에 맞춰 나온 제품이 많아요.", "生活必需品中也有很多适合一人家庭的产品。", "Many daily necessities are made for single-person households.", "32", "읽기", ["collocation:생필품을 사다"]],
    ["가전 제품", "家电产品", "名词", "home appliances", "noun", "작은 가전 제품이 1인 가구에게 인기가 있어요.", "小型家电在一人家庭中很受欢迎。", "Small home appliances are popular among single-person households.", "32", "읽기", ["collocation:가전 제품이 인기를 끌다"]],
    ["오피스텔", "办公居住两用小户型", "名词", "officetel", "noun", "1인 가구가 늘면서 오피스텔도 인기를 얻고 있어요.", "随着一人家庭增加，officetel 也越来越受欢迎。", "As single-person households increase, officetels are also gaining popularity.", "32", "읽기", ["usage:한국 주거 형태 이름"]],
    ["대여", "租借", "名词", "rental", "noun", "청소, 장보기, 대여 서비스가 늘고 있어요.", "清洁、买菜、租借服务正在增加。", "Cleaning, grocery shopping, and rental services are increasing.", "32", "읽기", ["collocation:대여 서비스"]],
    ["짐 보관", "行李/物品保管", "名词短语", "storage for belongings", "noun phrase", "1인 가구를 위한 짐 보관 서비스도 있어요.", "也有面向一人家庭的物品保管服务。", "There are storage services for single-person households.", "32", "읽기", ["collocation:짐 보관 서비스"]],
    ["정책", "政策", "名词", "policy", "noun", "전통적인 가구 형태에 맞춘 정책을 개선해야 해요.", "需要改善以传统家庭形态为基础的政策。", "Policies based on traditional household forms need improvement.", "32", "읽기", ["collocation:정책을 개선하다"]],
    ["개선하다", "改善", "动词", "to improve", "verb", "1인 가구를 위한 정책을 개선해야 해요.", "需要改善面向一人家庭的政策。", "Policies for single-person households should be improved.", "32", "읽기", ["collocation:제도를 개선하다"]],
    ["돌봄 서비스", "照护服务", "名词", "care service", "noun", "혼자 사는 노인을 위한 돌봄 서비스가 필요해요.", "需要面向独居老人的照护服务。", "Care services for elderly people living alone are needed.", "32", "읽기", ["collocation:돌봄 서비스를 제공하다"]],
    ["세심하다", "细致，周到", "形容词", "to be attentive; detailed", "adjective", "1인 가구를 위한 세심한 지원이 필요해요.", "需要面向一人家庭的细致支持。", "Detailed support for single-person households is needed.", "32", "읽기", ["collocation:세심한 지원"]],
    ["시급하다", "紧迫，迫切", "形容词", "to be urgent", "adjective", "다양하고 세심한 지원이 시급해요.", "多样而细致的支持很迫切。", "Diverse and attentive support is urgent.", "32", "읽기", ["collocation:지원이 시급하다"]],
    ["저출산", "低出生率", "名词", "low birthrate", "noun", "한국 사회의 큰 문제 중 하나는 저출산 문제예요.", "韩国社会的一大问题是低出生率问题。", "One major issue in Korean society is the low birthrate.", "34", "문화와 정보", ["collocation:저출산 문제"]],
    ["합계 출산율", "总和生育率", "名词", "total fertility rate", "noun", "한국의 합계 출산율은 지속적으로 감소했어요.", "韩国的总和生育率持续下降。", "Korea's total fertility rate has continuously decreased.", "34", "문화와 정보", ["collocation:합계 출산율이 감소하다"]],
    ["경제 활동 인구", "经济活动人口，劳动力人口", "名词", "economically active population", "noun", "저출산이 지속되면 경제 활동 인구가 감소해요.", "低出生率持续的话，经济活动人口会减少。", "If low birthrates continue, the economically active population decreases.", "34", "문화와 정보", ["collocation:경제 활동 인구가 감소하다"]],
    ["부양 부담", "赡养负担", "名词", "support burden", "noun", "노인 부양 부담이 커질 수 있어요.", "赡养老人的负担可能会变大。", "The burden of supporting elderly people may increase.", "34", "문화와 정보", ["collocation:노인 부양 부담"]],
    ["지방 자치 단체", "地方自治团体，地方政府", "名词", "local government", "noun", "지방 자치 단체에서도 출산 장려 정책을 실시해요.", "地方政府也实施鼓励生育政策。", "Local governments also carry out childbirth encouragement policies.", "34", "문화와 정보", ["collocation:각 지방 자치 단체"]],
    ["출산 장려 정책", "鼓励生育政策", "名词", "childbirth encouragement policy", "noun", "정부는 출산율을 높이기 위해 출산 장려 정책을 실시하고 있어요.", "政府为了提高出生率，正在实施鼓励生育政策。", "The government implements childbirth encouragement policies to raise the birthrate.", "34", "문화와 정보", ["collocation:출산 장려 정책을 실시하다"]],
    ["출산 휴가", "产假", "名词", "maternity leave", "noun", "대표적인 출산 장려 정책으로 출산 휴가가 있어요.", "代表性的鼓励生育政策有产假。", "Maternity leave is a representative childbirth support policy.", "34", "문화와 정보", ["collocation:출산 휴가를 쓰다"]],
    ["출산 축하금", "生育祝贺金", "名词", "birth grant", "noun", "일부 지역에서는 출산 축하금을 지급해요.", "一些地区会支付生育祝贺金。", "Some regions provide birth grants.", "34", "문화와 정보", ["collocation:출산 축하금을 지급하다"]],
    ["다자녀 혜택", "多子女优惠", "名词", "benefits for families with multiple children", "noun", "다자녀 혜택은 지역마다 차이가 있어요.", "多子女优惠因地区而异。", "Benefits for families with multiple children differ by region.", "34", "문화와 정보", ["collocation:다자녀 혜택을 받다"]],
    ["육아 휴직", "育儿假", "名词", "parental leave", "noun", "육아 휴직은 아이를 키우는 부모에게 필요한 제도예요.", "育儿假是养育孩子的父母所需要的制度。", "Parental leave is a system needed by parents raising children.", "34", "문화와 정보", ["collocation:육아 휴직 제도"]],
    ["근로 시간 단축", "缩短工作时间", "名词短语", "reduced working hours", "noun phrase", "육아를 위한 근로 시간 단축 제도도 있어요.", "也有为了育儿而缩短工作时间的制度。", "There is also a reduced working hours system for child care.", "34", "문화와 정보", ["collocation:근로 시간을 단축하다"]],
    ["양육 수당", "养育津贴", "名词", "childcare allowance", "noun", "양육 수당 지원도 출산 장려 정책 중 하나예요.", "养育津贴支援也是鼓励生育政策之一。", "Childcare allowance support is one childbirth encouragement policy.", "34", "문화와 정보", ["collocation:양육 수당 지원"]],
    ["난임 부부", "不孕夫妇", "名词", "infertile couple", "noun", "난임 부부 시술비 지원도 있어요.", "也有不孕夫妇治疗费用支援。", "There is also treatment-cost support for infertile couples.", "34", "문화와 정보", ["collocation:난임 부부 시술비 지원"]],
    ["공공요금 할인", "公共费用优惠", "名词", "public utility bill discount", "noun", "다자녀 가정은 공공요금 할인을 받을 수 있어요.", "多子女家庭可以获得公共费用优惠。", "Families with multiple children may receive utility bill discounts.", "34", "문화와 정보", ["collocation:공공요금 할인을 받다"]],
    ["정부24", "韩国政府24网站", "名词", "Government 24", "noun", "정부24 누리집에서 서비스를 안내받을 수 있어요.", "可以在韩国政府24网站获得服务说明。", "You can receive service guidance on the Government 24 website.", "34", "문화와 정보", ["collocation:정부24 누리집"]],
    ["생애 주기별 서비스", "按生命周期分类的服务", "名词短语", "life-cycle services", "noun phrase", "정부24에서 생애 주기별 서비스를 찾을 수 있어요.", "可以在政府24上查找按生命周期分类的服务。", "You can find life-cycle services on Government 24.", "34", "문화와 정보", ["collocation:생애 주기별 서비스를 안내받다"]]
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
  window.lessonGuideL4LessonChunks["l4-02"] = {
    id: "l4-02",
    number: 2,
    titleKo: "가족의 변화",
    titleZh: "家庭的变化",
    pages: "24-35",
    status: "draft",
    progress: {
      vocabulary: "draft-p24-p35",
      dialogue: "draft-p27-p29",
      culture: "draft-p34",
      practice: "draft-p27-p34"
    },
    vocabularySources: [
      { page: 24, label: "단원 제목", note: "课题、语法、活动与文化信息" },
      { page: 26, label: "어휘", note: "大家庭、核心家庭和现代家庭形态" },
      { page: 27, label: "문법 1", note: "V/A-(으)ㄹ 뿐만 아니라 例句和练习词" },
      { page: 28, label: "문법 2", note: "V/A-(으)ㄹ 수밖에 없다 例句和练习词" },
      { page: 29, label: "말하기", note: "分家、家务分担和家庭形态对话" },
      { page: 31, label: "읽기 전", note: "婚姻、1인 가구 和社会变化相关词" },
      { page: 32, label: "읽기", note: "1인 가구 증가 기사" },
      { page: 34, label: "문화와 정보", note: "출산 장려 정책" },
      { page: 35, label: "배운 어휘 확인", note: "本课复习词汇补充" }
    ],
    goals: [
      "能说明大家庭、核心家庭以及现代多样家庭形态的特点。",
      "能用 V/A-(으)ㄹ 뿐만 아니라 补充并强调两个事实。",
      "能用 V/A-(으)ㄹ 수밖에 없다 表达“没有别的选择，只能……”。",
      "能阅读 1인 가구 增加相关报道，并理解韩国的出산 장려 정책。"
    ],
    grammar: [
      {
        pattern: "V/A-(으)ㄹ 뿐만 아니라",
        zh: "不仅……而且……",
        guide: "在前一个事实之外再补充一个事实。名词后可用 N뿐만 아니라，动词和形容词按有无收音接 -을/-ㄹ 뿐만 아니라。",
        examples: [
          { ko: "부모님을 모시고 살 뿐만 아니라 여러 세대가 함께 사는 경우도 많아요.", zh: "不仅和父母一起生活，也有很多多个世代一起生活的情况。" },
          { ko: "분가해서 살면 생활비가 적게 들 뿐만 아니라 집안일이 줄어요.", zh: "分家生活的话，不仅生活费花得少，家务也会减少。" }
        ],
        translations: {
          en: {
            meaning: "not only... but also...",
            guide: "Adds one more fact to the first fact. With nouns use N뿐만 아니라; with verbs and adjectives use -을/-ㄹ 뿐만 아니라."
          }
        }
      },
      {
        pattern: "V/A-(으)ㄹ 수밖에 없다",
        zh: "只能……；不得不……",
        guide: "表示因为现实条件限制，没有其他方法或可能性。常和 이유, 때문에, 상황 等一起解释不可避免的结果。",
        examples: [
          { ko: "슬기 교육비 때문에 지출이 늘어서 맞벌이를 할 수밖에 없어요.", zh: "因为 Seulgi 的教育费，支出增加了，所以只能夫妻双方都工作。" },
          { ko: "회사가 지방에 있어서 가족과 떨어져 살 수밖에 없어요.", zh: "因为公司在地方，所以只能和家人分开生活。" }
        ],
        translations: {
          en: {
            meaning: "to have no choice but to...",
            guide: "Shows that there is no other option because of the situation. It often explains an unavoidable result."
          }
        }
      }
    ],
    vocabulary,
    dialogues: [
      {
        id: "dialogue-01",
        title: "고향의 대가족",
        page: 27,
        source: "문법 1 대화",
        focus: "V/A-(으)ㄹ 뿐만 아니라",
        sceneZh: "고천 询问 잠시드 的家乡是否有很多大家庭，用来练习补充说明家庭特点。",
        learningPoints: [
          "고향에는 ... 많아요? 是询问对方家乡情况的自然问法。",
          "살 뿐만 아니라 后面接 여러 세대가 함께 사는 경우도 많다，用两个特点说明大家庭。"
        ],
        lines: [
          {
            speaker: "고천",
            ko: "잠시드 씨 고향에는 대가족이 많아요?",
            zh: "Jamshed，你的家乡大家庭多吗？",
            guide: "고향에는 用来限定“在你的家乡”。"
          },
          {
            speaker: "잠시드",
            ko: "네. 부모님을 모시고 살 뿐만 아니라 여러 세대가 함께 사는 경우도 많아요.",
            zh: "是的。不仅有和父母一起生活的情况，也有很多多个世代一起生活的情况。",
            guide: "살 뿐만 아니라 是 살다 + -ㄹ 뿐만 아니라。"
          }
        ],
        rolePlays: [
          { title: "고향 묻기", promptZh: "询问对方家乡是否有很多大家庭。", answerKo: "고향에는 대가족이 많아요?" },
          { title: "특징 말하기", promptZh: "说明不仅和父母一起生活，也有多个世代一起生活。", answerKo: "부모님을 모시고 살 뿐만 아니라 여러 세대가 함께 사는 경우도 많아요." }
        ],
        drills: [
          { pattern: "V/A-(으)ㄹ 뿐만 아니라", promptZh: "说“大家庭正在减少，而且独居老人正在增加”。", answerKo: "대가족이 점점 없어질 뿐만 아니라 홀로 사는 노인이 많아지고 있어요." },
          { pattern: "V/A-(으)ㄹ 뿐만 아니라", promptZh: "说“多文化家庭增加，而且单亲家庭也增加”。", answerKo: "다문화 가족이 증가할 뿐만 아니라 한 부모 가족도 증가하고 있어요." }
        ],
        translations: {
          en: {
            scene: "Gocheon asks whether Jamshed's hometown has many extended families and practices adding family features.",
            learningPoints: [
              "고향에는 ... 많아요? is a natural way to ask about someone's hometown.",
              "살 뿐만 아니라 adds another feature after 'living with parents'."
            ]
          }
        }
      },
      {
        id: "dialogue-02",
        title: "맞벌이를 할 수밖에 없는 이유",
        page: 28,
        source: "문법 2 대화",
        focus: "V/A-(으)ㄹ 수밖에 없다",
        sceneZh: "고천 问 후엔 是否在找兼职，후엔 说明因为孩子教育费支出增加，只能夫妻双方都工作。",
        learningPoints: [
          "아르바이트 찾고 있어요? 是询问对方近况或计划的口语表达。",
          "지출이 늘어서 맞벌이를 할 수밖에 없어요 表示“支出增加，所以别无选择”。"
        ],
        lines: [
          {
            speaker: "고천",
            ko: "후엔 씨, 아르바이트 찾고 있어요?",
            zh: "Huyen，你在找兼职吗？",
            guide: "찾고 있어요? 表示“正在找吗”。"
          },
          {
            speaker: "후엔",
            ko: "네, 슬기 교육비 때문에 지출이 늘어서 맞벌이를 할 수밖에 없어요.",
            zh: "是的，因为 Seulgi 的教育费，支出增加了，所以只能夫妻双方都工作。",
            guide: "할 수밖에 없어요 强调没有其他选择。"
          }
        ],
        rolePlays: [
          { title: "계획 묻기", promptZh: "询问对方是否在找兼职。", answerKo: "아르바이트 찾고 있어요?" },
          { title: "어쩔 수 없는 이유 말하기", promptZh: "说明因为教育费支出增加，所以只能双职工。", answerKo: "교육비 때문에 지출이 늘어서 맞벌이를 할 수밖에 없어요." }
        ],
        drills: [
          { pattern: "V/A-(으)ㄹ 수밖에 없다", promptZh: "说“公司在地方，所以只能和家人分开住”。", answerKo: "회사가 지방에 있어서 가족과 떨어져 살 수밖에 없어요." },
          { pattern: "V/A-(으)ㄹ 수밖에 없다", promptZh: "说“没人照看孩子，所以只能请育儿假”。", answerKo: "아이를 볼 사람이 없어서 육아 휴직을 낼 수밖에 없어요." }
        ],
        translations: {
          en: {
            scene: "Gocheon asks whether Huyen is looking for a part-time job, and Huyen explains that education expenses leave no choice but dual income.",
            learningPoints: [
              "아르바이트 찾고 있어요? asks about someone's current plan.",
              "지출이 늘어서 맞벌이를 할 수밖에 없어요 shows an unavoidable choice caused by increased expenses."
            ]
          }
        }
      },
      {
        id: "dialogue-03",
        title: "분가 준비와 가사 분담",
        page: 29,
        source: "말하기",
        focus: "V/A-(으)ㄹ 뿐만 아니라",
        sceneZh: "고천 和 후엔 久别重逢，谈到为了孩子教育搬家分居、家务分担和分家后的优缺点。",
        learningPoints: [
          "얼굴 보기가 왜 이렇게 힘들어요? 是熟人久未见面时带玩笑语气的表达。",
          "분가해서 살면 생활비가 적게 들 뿐만 아니라 집안일이 줄어서... 用两个优点安慰对方。"
        ],
        lines: [
          {
            speaker: "고천",
            ko: "후엔 씨, 오랜만이에요. 얼굴 보기가 왜 이렇게 힘들어요?",
            zh: "Huyen，好久不见。怎么这么难见到你呀？",
            guide: "얼굴 보기가 힘들다 表示“很难见到人”。"
          },
          {
            speaker: "후엔",
            ko: "요즘 우리 세 식구는 분가 준비하느라 좀 바빠요. 슬기 교육 때문에 학교랑 학원 근처로 이사 가기로 했어요.",
            zh: "最近我们一家三口忙着准备分家。因为 Seulgi 的教育，我们决定搬到学校和补习班附近。",
            guide: "세 식구는 指“一家三口”；이사 가기로 했어요 表示已经决定搬家。"
          },
          {
            speaker: "고천",
            ko: "아, 그랬구나. 그럼 슬기 엄마 아빠 맞벌이하는데 이제 슬기는 누가 봐 줘요?",
            zh: "啊，原来如此。那 Seulgi 的爸爸妈妈都工作，现在谁照看 Seulgi 呢？",
            guide: "봐 주다 在这里是“照看、帮忙看孩子”。"
          },
          {
            speaker: "후엔",
            ko: "저도 그게 걱정이에요. 시부모님 모시고 살 때는 우리가 일하는 동안 슬기도 봐 주시고 집안일도 도와주셨는데 이제 어떻게 할지 고민 중이에요.",
            zh: "我也担心这个。和公婆一起住的时候，我们工作期间他们会帮忙照看 Seulgi，也会帮忙做家务，现在正在苦恼该怎么办。",
            guide: "고민 중이에요 表示“正在烦恼、思考”。"
          },
          {
            speaker: "고천",
            ko: "슬기 아빠하고 가사 분담을 잘해 봐요. 그래도 분가해서 살면 생활비가 적게 들 뿐만 아니라 집안일이 줄어서 전보다 편한 것도 있을 거예요.",
            zh: "试着和 Seulgi 爸爸好好分担家务吧。不过分家生活的话，不仅生活费会少一些，家务也会减少，应该也会有比以前方便的地方。",
            guide: "뿐만 아니라 后面补充第二个好处，用来安慰对方。"
          },
          {
            speaker: "후엔",
            ko: "네, 여러 가지로 생각해 봐야겠어요.",
            zh: "是的，我得从多个方面想一想。",
            guide: "여러 가지로 是“从多个方面”。"
          }
        ],
        rolePlays: [
          { title: "오랜만에 인사하기", promptZh: "久别重逢时询问对方为什么这么难见到。", answerKo: "오랜만이에요. 얼굴 보기가 왜 이렇게 힘들어요?" },
          { title: "분가 이유 말하기", promptZh: "说明因为孩子教育，决定搬到学校和补习班附近。", answerKo: "아이 교육 때문에 학교랑 학원 근처로 이사 가기로 했어요." },
          { title: "조언하기", promptZh: "建议对方和配偶分担家务，并说分家后的两个好处。", answerKo: "가사 분담을 잘해 봐요. 분가해서 살면 생활비가 적게 들 뿐만 아니라 집안일이 줄어요." }
        ],
        drills: [
          { pattern: "V/A-(으)ㄹ 뿐만 아니라", promptZh: "说“分家后不仅生活费少，家务也少”。", answerKo: "분가해서 살면 생활비가 적게 들 뿐만 아니라 집안일이 줄어요." },
          { pattern: "V/A-(으)ㄹ 뿐만 아니라", promptZh: "说“核心家庭不仅能尊重个人生活，经济负担也小”。", answerKo: "핵가족은 개인 생활을 존중받을 수 있을 뿐만 아니라 경제적인 부담도 적어요." }
        ],
        translations: {
          en: {
            scene: "Gocheon and Huyen meet after a long time and talk about moving out, child care, housework sharing, and the benefits of a nuclear family.",
            learningPoints: [
              "얼굴 보기가 왜 이렇게 힘들어요? is a familiar expression when it has been hard to meet someone.",
              "분가해서 살면 ... 뿐만 아니라 ... lists two benefits to reassure the listener."
            ]
          }
        }
      }
    ],
    culture: {
      titleKo: "출산 장려 정책",
      titleZh: "鼓励生育政策",
      page: 34,
      summaryZh: "韩国因低出生率问题实施多种鼓励生育政策，包括产假、生育祝贺金、多子女优惠、育儿假、养育津贴和医疗费用支援等。",
      paragraphs: [
        {
          ko: "한국 사회가 안고 있는 큰 문제 중의 하나는 저출산 문제이다. 한국의 합계 출산율은 지속적으로 감소하여 2019년 현재, 1명이 채 되지 않는다. 저출산 현상이 지속되면 경제 활동 인구가 감소하고 노인 부양 부담이 커지는 등의 문제가 발생한다. 이에 정부와 각 지방 자치 단체에서는 출산율을 높이기 위해 출산 장려 정책을 실시하고 있다.",
          zh: "韩国社会面临的大问题之一是低出生率问题。韩国的总和生育率持续下降，截至 2019 年，还不到 1 人。如果低出生率现象持续下去，会发生经济活动人口减少、赡养老人的负担加重等问题。因此，政府和各地方自治团体为了提高出生率，正在实施鼓励生育政策。",
          guide: "안고 있는 문제 是“面临、抱有的问题”；채 되지 않는다 表示“还不到”。"
        },
        {
          ko: "출산 장려 정책은 다양하므로 자신에게 맞는 혜택을 선택하여 지원받을 수 있다. 대표적인 출산 장려 정책으로는 출산 휴가, 출산 축하금 지급, 다자녀 혜택, 육아 휴직, 육아를 위한 근로 시간 단축, 양육 수당 지원, 임신ㆍ출산 진료비 지원, 난임 부부 시술비 지원, 공공요금 할인 등이 있다.",
          zh: "鼓励生育政策多种多样，因此可以选择适合自己的优惠并获得支援。代表性的鼓励生育政策有产假、支付生育祝贺金、多子女优惠、育儿假、为育儿缩短工作时间、养育津贴支援、怀孕和生产诊疗费支援、不孕夫妇治疗费用支援、公共费用优惠等。",
          guide: "대표적인 ... 으로는 用来列举代表性项目；자신에게 맞는 혜택 是“适合自己的优惠”。"
        },
        {
          ko: "이러한 혜택은 지방 자치 단체별로 차이가 있으므로 거주하고 있는 지역의 혜택을 꼼꼼히 살펴보는 것이 좋다. ‘정부24’ 누리집(www.gov.kr)에서 연령별, 분야별, 지역별로 생애 주기별 서비스를 안내받을 수 있다.",
          zh: "这些优惠因地方自治团体而异，因此最好仔细查看自己居住地区的优惠。可以在“政府24”网站(www.gov.kr)按照年龄、领域、地区获得按生命周期分类的服务说明。",
          guide: "단체별로 차이가 있다 是“按团体不同而有差异”；꼼꼼히 살펴보다 是“仔细查看”。"
        }
      ],
      keyTerms: [
        { ko: "저출산", zh: "低出生率" },
        { ko: "합계 출산율", zh: "总和生育率" },
        { ko: "출산 장려 정책", zh: "鼓励生育政策" },
        { ko: "육아 휴직", zh: "育儿假" },
        { ko: "양육 수당", zh: "养育津贴" },
        { ko: "정부24", zh: "韩国政府24网站" }
      ],
      questions: [
        {
          q: "저출산 현상이 지속되면 어떤 문제가 발생합니까?",
          a: "경제 활동 인구가 감소하고 노인 부양 부담이 커지는 등의 문제가 발생합니다.",
          zh: "低出生率现象持续的话，会发生什么问题？会发生经济活动人口减少、赡养老人的负担加重等问题。"
        },
        {
          q: "한국의 출산 장려 정책으로는 어떤 것들이 있습니까?",
          a: "출산 휴가, 출산 축하금 지급, 다자녀 혜택, 육아 휴직, 근로 시간 단축, 양육 수당 지원 등이 있습니다.",
          zh: "韩国的鼓励生育政策有哪些？有产假、生育祝贺金、多子女优惠、育儿假、缩短工作时间、养育津贴支援等。"
        },
        {
          q: "아이의 출산 및 양육과 관련하여 여러분 고향에서는 어떤 정책을 실시하고 있습니까?",
          a: "각자 고향의 출산 및 양육 지원 정책을 조사하여 말합니다.",
          zh: "关于孩子出生和养育，你的家乡实施哪些政策？请调查并说明自己家乡的生育和养育支援政策。"
        }
      ],
      translations: {
        en: {
          title: "Childbirth Encouragement Policies",
          summary: "Korea implements various childbirth encouragement policies because of low birthrates, such as maternity leave, birth grants, benefits for families with multiple children, parental leave, childcare allowances, and medical-cost support.",
          paragraphs: [
            {
              translation: "One major issue Korean society faces is the low birthrate. Korea's total fertility rate has continued to decline and, as of 2019, is less than one. If the low-birthrate trend continues, problems such as a decrease in the economically active population and a growing burden of supporting the elderly will arise. Therefore, the government and local governments are implementing childbirth encouragement policies to raise the birthrate.",
              guide: "안고 있는 문제 means 'a problem one faces'. 채 되지 않는다 means 'not even reaching'."
            },
            {
              translation: "Because childbirth encouragement policies are diverse, people can choose benefits that fit their situation and receive support. Representative policies include maternity leave, birth grants, benefits for families with multiple children, parental leave, reduced working hours for child care, childcare allowance support, pregnancy and childbirth medical-cost support, treatment-cost support for infertile couples, and utility bill discounts.",
              guide: "대표적인 ... 으로는 introduces representative examples. 자신에게 맞는 혜택 means 'benefits that fit oneself'."
            },
            {
              translation: "These benefits differ by local government, so it is good to carefully check the benefits in the region where you live. On the Government 24 website, people can receive guidance on life-cycle services by age, field, and region.",
              guide: "단체별로 차이가 있다 means 'to differ by organization'. 꼼꼼히 살펴보다 means 'to check carefully'."
            }
          ],
          keyTerms: [
            { meaning: "low birthrate" },
            { meaning: "total fertility rate" },
            { meaning: "childbirth encouragement policy" },
            { meaning: "parental leave" },
            { meaning: "childcare allowance" },
            { meaning: "Government 24" }
          ],
          questions: [
            {
              question: "What problems occur if the low-birthrate trend continues?",
              answer: "Problems such as a decrease in the economically active population and a greater burden of supporting elderly people occur."
            },
            {
              question: "What childbirth encouragement policies exist in Korea?",
              answer: "There are maternity leave, birth grants, benefits for families with multiple children, parental leave, reduced working hours, childcare allowance support, and more."
            },
            {
              question: "What policies related to childbirth and child care are implemented in your hometown?",
              answer: "Research and explain childbirth and child care support policies in your own hometown."
            }
          ]
        }
      }
    },
    practice: [
      {
        type: "grammar",
        title: "V/A-(으)ㄹ 뿐만 아니라",
        prompt: "用 V/A-(으)ㄹ 뿐만 아니라 表达：大家庭正在减少，而且独居老人正在增加。",
        answer: "대가족이 점점 없어질 뿐만 아니라 홀로 사는 노인이 많아지고 있어요.",
        translations: {
          en: {
            title: "V/A-(으)ㄹ 뿐만 아니라",
            prompt: "Use V/A-(으)ㄹ 뿐만 아니라: Extended families are decreasing, and elderly people living alone are increasing too.",
            answer: "대가족이 점점 없어질 뿐만 아니라 홀로 사는 노인이 많아지고 있어요."
          }
        }
      },
      {
        type: "grammar",
        title: "V/A-(으)ㄹ 수밖에 없다",
        prompt: "用 V/A-(으)ㄹ 수밖에 없다 表达：因为公司在地方，所以只能和家人分开生活。",
        answer: "회사가 지방에 있어서 가족과 떨어져 살 수밖에 없어요.",
        translations: {
          en: {
            title: "V/A-(으)ㄹ 수밖에 없다",
            prompt: "Use V/A-(으)ㄹ 수밖에 없다: I have no choice but to live apart from my family because my company is in another region.",
            answer: "회사가 지방에 있어서 가족과 떨어져 살 수밖에 없어요."
          }
        }
      },
      {
        type: "speaking",
        title: "대가족과 핵가족 비교",
        prompt: "대가족과 핵가족의 좋은 점을 각각 한 가지씩 말해 보세요.",
        answer: "대가족은 가족 간의 유대가 깊고, 핵가족은 개인 생활을 존중받을 수 있어요.",
        translations: {
          en: {
            title: "Compare Extended and Nuclear Families",
            prompt: "Say one good point each about extended families and nuclear families.",
            answer: "대가족은 가족 간의 유대가 깊고, 핵가족은 개인 생활을 존중받을 수 있어요."
          }
        }
      },
      {
        type: "reading",
        title: "1인 가구 기사 이해",
        prompt: "1인 가구가 증가하는 원인은 무엇입니까?",
        answer: "결혼에 대한 가치관 변화, 이혼율 증가, 고령화 등을 원인으로 꼽을 수 있습니다.",
        translations: {
          en: {
            title: "Understand the Single-Person Household Article",
            prompt: "What are the causes of the increase in single-person households?",
            answer: "결혼에 대한 가치관 변화, 이혼율 증가, 고령화 등을 원인으로 꼽을 수 있습니다."
          }
        }
      },
      {
        type: "culture",
        title: "출산 장려 정책 이해",
        prompt: "한국의 대표적인 출산 장려 정책을 세 가지 말해 보세요.",
        answer: "출산 휴가, 출산 축하금 지급, 육아 휴직 등이 있습니다.",
        translations: {
          en: {
            title: "Understand Childbirth Encouragement Policies",
            prompt: "Name three representative childbirth encouragement policies in Korea.",
            answer: "출산 휴가, 출산 축하금 지급, 육아 휴직 등이 있습니다."
          }
        }
      }
    ],
    translations: {
      en: {
        title: "Changes in Families",
        goals: [
          "Explain the characteristics of extended families, nuclear families, and diverse modern family forms.",
          "Use V/A-(으)ㄹ 뿐만 아니라 to add and emphasize two facts.",
          "Use V/A-(으)ㄹ 수밖에 없다 to say that there is no choice but to do something.",
          "Read about the increase in single-person households and understand Korean childbirth encouragement policies."
        ]
      }
    }
  };
})();
