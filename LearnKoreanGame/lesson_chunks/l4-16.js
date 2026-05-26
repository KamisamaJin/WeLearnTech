(() => {
  const makeTips = (tips) => (tips || []).map((text) => {
    const [type, body] = text.includes(":") ? text.split(/:(.+)/) : ["collocation", text];
    return { type, text: body.trim() };
  });

  const vocabulary = [
    ["이민 생활", "移民生活", "名词短语", "immigrant life", "noun phrase", "이민 생활을 하면서 여러 어려움을 겪었어요.", "移民生活中经历了各种困难。", "I experienced many difficulties while living as an immigrant.", "204", "단원 제목", ["collocation:이민 생활"]],
    ["외국인의 고충과 노력", "外国人的苦衷和努力", "名词短语", "foreigners' hardships and efforts", "noun phrase", "외국인의 고충과 노력에 대해 이야기해 보세요.", "请谈谈外国人的苦衷和努力。", "Talk about foreigners' hardships and efforts.", "204", "단원 제목", ["collocation:고충과 노력"]],
    ["고충", "苦衷，困难", "名词", "hardship; difficulty", "noun", "한국 생활의 고충을 솔직하게 말했어요.", "坦率地说出了韩国生活中的困难。", "I honestly talked about the hardships of life in Korea.", "204", "단원 제목", ["collocation:고충"]],
    ["노력", "努力", "名词", "effort", "noun", "어려움을 극복하기 위해 많은 노력을 했어요.", "为了克服困难做了很多努力。", "I made many efforts to overcome difficulties.", "204", "단원 제목", ["collocation:노력을 하다"]],
    ["한국 생활 경험담", "韩国生活经历谈", "名词短语", "story about life in Korea", "noun phrase", "한국 생활 경험담을 발표해 보세요.", "请发表韩国生活经历谈。", "Present your story about life in Korea.", "204", "단원 제목", ["collocation:경험담"]],
    ["사회통합프로그램", "社会统合项目", "名词", "Korea Immigration and Integration Program", "noun", "사회통합프로그램 수료식에서 소감을 발표했어요.", "在社会统合项目结业典礼上发表了感想。", "I shared my thoughts at the Korea Immigration and Integration Program completion ceremony.", "204", "문화와 정보", ["collocation:사회통합프로그램"]],
    ["한국 국적", "韩国国籍", "名词短语", "Korean nationality", "noun phrase", "한국 국적을 취득하려면 절차를 알아야 해요.", "想取得韩国国籍，需要了解程序。", "To acquire Korean nationality, you need to know the procedures.", "204", "문화와 정보", ["collocation:한국 국적"]],
    ["취득", "取得", "名词", "acquisition", "noun", "한국 국적 취득에 대한 정보를 읽었어요.", "读了关于取得韩国国籍的信息。", "I read information about acquiring Korean nationality.", "204", "문화와 정보", ["collocation:국적 취득"]],
    ["어려움", "困难", "名词", "difficulty", "noun", "한국에서 살면서 어떤 어려움을 겪었어요?", "在韩国生活时经历了什么困难？", "What difficulties did you experience while living in Korea?", "206", "어휘", ["collocation:어려움을 겪다"]],
    ["겪다", "经历", "动词", "to experience; undergo", "verb", "의사소통에 어려움을 겪었어요.", "经历了沟通困难。", "I experienced difficulties in communication.", "206", "어휘", ["collocation:어려움을 겪다"]],
    ["의사소통", "沟通", "名词", "communication", "noun", "한국어를 못 알아들어서 의사소통에 어려움이 있었어요.", "因为听不懂韩语，沟通上有困难。", "Because I could not understand Korean, I had difficulty communicating.", "206", "어휘", ["collocation:의사소통"]],
    ["답답하다", "郁闷，憋闷", "形容词", "frustrated; stifled", "adjective", "대화가 잘 통하지 않아서 답답했어요.", "因为对话不顺畅，所以很郁闷。", "I felt frustrated because conversation did not go well.", "206", "어휘", ["collocation:답답하다"]],
    ["막막하다", "茫然，不知所措", "形容词", "at a loss", "adjective", "무슨 일을 해야 할지 몰라 막막했어요.", "不知道该做什么，所以很茫然。", "I was at a loss because I did not know what to do.", "206", "어휘", ["collocation:막막하다"]],
    ["익숙하다", "熟悉，习惯", "形容词", "familiar; used to", "adjective", "한국의 돈 단위가 익숙하지 않았어요.", "不熟悉韩国的钱币单位。", "I was not familiar with Korean currency units.", "206", "어휘", ["collocation:익숙하지 않다"]],
    ["사고방식", "思维方式", "名词", "way of thinking", "noun", "주변 사람들과 사고방식이 달라서 갈등을 겪었어요.", "因为和周围人的思维方式不同，产生了矛盾。", "I had conflicts because my way of thinking differed from those around me.", "206", "어휘", ["collocation:사고방식"]],
    ["갈등을 겪다", "经历矛盾", "动词短语", "to experience conflict", "verb phrase", "문화 차이 때문에 갈등을 겪었어요.", "因为文化差异经历了矛盾。", "I experienced conflict because of cultural differences.", "206", "어휘", ["collocation:갈등을 겪다"]],
    ["실수하다", "犯错，失误", "动词", "to make a mistake", "verb", "한국 문화를 잘 몰라서 실수하는 일이 많았어요.", "因为不了解韩国文化，经常犯错。", "I often made mistakes because I did not know Korean culture well.", "206", "어휘", ["collocation:실수하다"]],
    ["차별 대우", "差别待遇，歧视待遇", "名词短语", "discriminatory treatment", "noun phrase", "외국인이라서 차별 대우를 당했어요.", "因为是外国人而受到了差别待遇。", "I experienced discriminatory treatment because I was a foreigner.", "206", "어휘", ["collocation:차별 대우를 당하다"]],
    ["차별 대우를 당하다", "受到差别待遇", "动词短语", "to suffer discrimination", "verb phrase", "차별 대우를 당하면 법에 호소할 수 있어요.", "受到差别待遇时可以诉诸法律。", "If you suffer discrimination, you can appeal to the law.", "206", "어휘", ["collocation:차별 대우를 당하다"]],
    ["극복하다", "克服", "动词", "to overcome", "verb", "문화 차이를 극복하려고 노력했어요.", "努力克服文化差异。", "I tried to overcome cultural differences.", "206", "어휘", ["collocation:극복하다"]],
    ["포기하다", "放弃", "动词", "to give up", "verb", "힘들어도 꿈을 포기하지 않았어요.", "即使辛苦也没有放弃梦想。", "Even though it was hard, I did not give up my dream.", "206", "어휘", ["collocation:포기하다"]],
    ["도움을 청하다", "请求帮助", "动词短语", "to ask for help", "verb phrase", "어려움이 있을 때 주변 사람에게 도움을 청했어요.", "有困难时向周围人请求帮助。", "When I had difficulties, I asked people around me for help.", "206", "어휘", ["collocation:도움을 청하다"]],
    ["고민하다", "苦恼，烦恼", "动词", "to worry; agonize", "verb", "혼자 고민하지 말고 주변 사람에게 말해 보세요.", "不要独自烦恼，试着告诉周围的人。", "Do not worry alone; try talking to people around you.", "206", "어휘", ["collocation:혼자 고민하다"]],
    ["법에 호소하다", "诉诸法律", "动词短语", "to appeal to the law", "verb phrase", "불공정한 일을 당하면 법에 호소할 수 있어요.", "遭遇不公平的事时，可以诉诸法律。", "If you face something unfair, you can appeal to the law.", "206", "어휘", ["collocation:법에 호소하다"]],
    ["불의에 타협하다", "向不义妥协", "动词短语", "to compromise with injustice", "verb phrase", "불의에 타협하지 않고 해결 방법을 찾았어요.", "没有向不义妥协，而是寻找解决方法。", "I did not compromise with injustice and looked for a solution.", "206", "어휘", ["collocation:불의에 타협하다"]],
    ["그때그때", "每当那时，随时", "副词", "each time; as needed", "adverb", "모르는 말은 그때그때 물어보세요.", "不懂的话要随时问。", "Ask about words you do not know whenever they come up.", "206", "어휘", ["collocation:그때그때 물어보다"]],
    ["털어놓다", "倾诉，坦白说出", "动词", "to open up; confide", "verb", "고민을 솔직하게 털어놓았어요.", "坦率地倾诉了烦恼。", "I honestly opened up about my worries.", "206", "어휘", ["collocation:고민을 털어놓다"]],
    ["확인하다", "确认", "动词", "to check; confirm", "verb", "내가 들은 말이 맞는지 바로 확인했어요.", "马上确认自己听到的话是否正确。", "I immediately checked whether what I heard was correct.", "206", "어휘", ["collocation:확인하다"]],
    ["합리적으로", "合理地", "副词", "reasonably", "adverb", "돈 단위가 익숙하지 않을 때는 합리적으로 소비해야 해요.", "不熟悉货币单位时要合理消费。", "When you are not used to the currency, you should spend reasonably.", "206", "어휘", ["collocation:합리적으로 소비하다"]],
    ["상대방의 입장", "对方立场", "名词短语", "the other person's position", "noun phrase", "상대방의 입장을 이해하려고 노력했어요.", "努力理解对方的立场。", "I tried to understand the other person's position.", "206", "어휘", ["collocation:상대방의 입장"]],
    ["해결 방안", "解决方案", "名词短语", "solution", "noun phrase", "적극적으로 소통하면서 해결 방안을 찾았어요.", "积极沟通并寻找解决方案。", "I actively communicated and looked for a solution.", "206", "어휘", ["collocation:해결 방안"]],
    ["문화 간 차이", "文化间差异", "名词短语", "intercultural difference", "noun phrase", "문화 간 차이를 이해하는 시간이 필요해요.", "需要时间理解文化间差异。", "Time is needed to understand intercultural differences.", "206", "어휘", ["collocation:문화 간 차이"]],
    ["V/A-(으)ㄹ지도 모르다", "也许会……；说不定……", "语法表达", "might...; may...", "grammar expression", "비가 올지도 모르겠어요.", "也许会下雨。", "It might rain.", "207", "문법 1", ["form:동사/형용사 + -(으)ㄹ지도 모르다"]],
    ["영주권", "永住权", "名词", "permanent residency", "noun", "지금 영주권을 신청하면 언제 받을 수 있을까요?", "现在申请永住权的话，什么时候能拿到？", "If I apply for permanent residency now, when can I receive it?", "207", "문법 1", ["collocation:영주권을 신청하다"]],
    ["신청하다", "申请", "动词", "to apply", "verb", "영주권을 신청했어요.", "申请了永住权。", "I applied for permanent residency.", "207", "문법 1", ["collocation:신청하다"]],
    ["신청자", "申请者", "名词", "applicant", "noun", "요즘 신청자가 많아서 시간이 걸릴지도 몰라요.", "最近申请者很多，可能会花时间。", "There are many applicants these days, so it might take time.", "207", "문법 1", ["collocation:신청자"]],
    ["마음의 여유", "心理余裕，从容", "名词短语", "peace of mind; patience", "noun phrase", "마음의 여유를 가지세요.", "请放宽心。", "Have some peace of mind.", "207", "문법 1", ["collocation:마음의 여유"]],
    ["의학 기술", "医学技术", "名词短语", "medical technology", "noun phrase", "의학 기술이 발전하면 불치병을 치료할지도 몰라요.", "医学技术发展的话，也许能治疗不治之症。", "If medical technology develops, incurable diseases might be treated.", "207", "문법 1", ["collocation:의학 기술"]],
    ["알약", "药片", "名词", "pill", "noun", "미래에는 알약으로 식사를 대신할지도 몰라요.", "未来也许会用药片代替吃饭。", "In the future, meals might be replaced by pills.", "207", "문법 1", ["collocation:알약"]],
    ["대신하다", "代替", "动词", "to replace", "verb", "알약으로 식사를 대신할지도 몰라요.", "也许会用药片代替吃饭。", "Meals might be replaced by pills.", "207", "문법 1", ["collocation:대신하다"]],
    ["불치병", "不治之症", "名词", "incurable disease", "noun", "불치병을 치료할 수 있을지도 몰라요.", "也许能治疗不治之症。", "Incurable diseases might be treatable.", "207", "단어장", ["collocation:불치병"]],
    ["멸종하다", "灭绝", "动词", "to become extinct", "verb", "동물들이 멸종할지도 몰라요.", "动物们也许会灭绝。", "Animals might become extinct.", "207", "단어장", ["collocation:멸종하다"]],
    ["사라지다", "消失", "动词", "to disappear", "verb", "겨울이 사라질지도 몰라요.", "冬天也许会消失。", "Winter might disappear.", "207", "단어장", ["collocation:사라지다"]],
    ["저출산", "低出生率", "名词", "low birthrate", "noun", "저출산 때문에 초등학교가 사라질지도 몰라요.", "因为低出生率，小学也许会消失。", "Because of the low birthrate, elementary schools might disappear.", "207", "문법 1", ["collocation:저출산"]],
    ["N치고", "作为……来说；凡是……", "语法表达", "for/as...; among...", "grammar expression", "영주권 받는 사람치고 좀 오래 걸렸죠.", "作为拿永住权的人来说，算花了比较久吧。", "For someone getting permanent residency, it took quite a long time.", "208", "문법 2", ["form:명사 + 치고"]],
    ["면접", "面试", "名词", "interview", "noun", "중요한 면접치고 빨리 끝난 편이에요.", "作为重要面试来说，算结束得比较快。", "For an important interview, it ended fairly quickly.", "208", "문법 2", ["collocation:면접"]],
    ["외국인치고", "作为外国人来说", "语法表达", "for a foreigner", "grammar expression", "외국인치고 한국어를 잘하시네요.", "作为外国人来说，韩语说得很好。", "You speak Korean well for a foreigner.", "208", "문법 2", ["collocation:외국인치고"]],
    ["개업", "开业", "名词", "opening a business", "noun", "가게 개업을 준비하는 데 6개월 걸렸어요.", "准备店铺开业花了6个月。", "It took six months to prepare to open the store.", "208", "단어장", ["collocation:가게 개업"]],
    ["자격증", "资格证", "名词", "certificate; license", "noun", "취업을 위해 자격증을 땄어요.", "为了就业考取了资格证。", "I got a certificate for employment.", "208", "문법 2", ["collocation:자격증을 따다"]],
    ["적응하다", "适应", "动词", "to adapt", "verb", "한국 문화에 적응하는 데 오래 걸렸어요.", "适应韩国文化花了很久。", "It took a long time to adapt to Korean culture.", "208", "문법 2", ["collocation:적응하다"]],
    ["수료식", "结业典礼", "名词", "completion ceremony", "noun", "사회통합프로그램 수료식에서 소감을 발표했어요.", "在社会统合项目结业典礼上发表了感想。", "I gave a speech at the completion ceremony.", "209", "말하기", ["collocation:수료식"]],
    ["소감", "感想", "名词", "impression; thoughts", "noun", "오늘 소감을 발표하게 된 후엔이라고 합니다.", "我是今天要发表感想的后恩。", "My name is Huyen, and I will share my thoughts today.", "209", "말하기", ["collocation:소감을 발표하다"]],
    ["지난날", "过去的日子", "名词", "past days", "noun", "힘들었던 지난날이 생각납니다.", "想起了过去辛苦的日子。", "I remember the difficult past days.", "209", "말하기", ["collocation:지난날"]],
    ["일자리", "工作岗位", "名词", "job", "noun", "일자리를 찾지 못해 막막할 때도 있었습니다.", "也有因为找不到工作而茫然的时候。", "There were times when I felt lost because I could not find a job.", "209", "말하기", ["collocation:일자리를 찾다"]],
    ["자신감", "自信", "名词", "confidence", "noun", "할 수 있다는 자신감을 갖고 열심히 살았습니다.", "怀着能做到的自信努力生活。", "I lived diligently with confidence that I could do it.", "209", "말하기", ["collocation:자신감을 갖다"]],
    ["모임", "聚会，组织", "名词", "group; gathering", "noun", "외국인을 돕기 위한 모임을 만들고 싶습니다.", "想创建帮助外国人的组织。", "I want to create a group to help foreigners.", "209", "말하기", ["collocation:모임을 만들다"]],
    ["부족하다", "不足", "形容词", "insufficient; lacking", "adjective", "부족한 제 이야기를 들어 주셔서 감사합니다.", "感谢您听我不足的故事。", "Thank you for listening to my humble story.", "209", "말하기", ["collocation:부족하다"]],
    ["문화 충격", "文化冲击", "名词短语", "culture shock", "noun phrase", "문화가 달라서 문화 충격을 받았어요.", "因为文化不同而受到了文化冲击。", "I experienced culture shock because the culture was different.", "209", "말하기", ["collocation:문화 충격을 받다"]],
    ["유창하게", "流利地", "副词", "fluently", "adverb", "방송 프로그램에서 결혼 이민자가 유창하게 말했어요.", "电视节目中结婚移民者流利地说话。", "A marriage immigrant spoke fluently on a TV program.", "210", "듣기", ["collocation:유창하게 말하다"]],
    ["유학생", "留学生", "名词", "international student", "noun", "외국인 유학생들이 토론 프로그램에 나왔어요.", "外国留学生们出演了讨论节目。", "International students appeared on a discussion program.", "210", "듣기", ["collocation:외국인 유학생"]],
    ["영광", "光荣", "名词", "honor", "noun", "이 자리에 서게 되어 영광입니다.", "能站在这里很荣幸。", "It is an honor to stand here.", "210", "단어장", ["collocation:영광"]],
    ["좌절하다", "挫折，灰心", "动词", "to be discouraged", "verb", "힘든 일이 있을 때 좌절하지 않았어요.", "遇到困难时没有灰心。", "I did not become discouraged when facing difficulties.", "210", "듣기", ["collocation:좌절하다"]],
    ["꿈", "梦想", "名词", "dream", "noun", "저의 꿈은 간호사입니다.", "我的梦想是成为护士。", "My dream is to become a nurse.", "211", "읽기 전", ["collocation:꿈"]],
    ["통역사", "口译员", "名词", "interpreter", "noun", "세계적인 통역사를 위해 달려가겠습니다.", "我会朝着世界级口译员的目标奔跑。", "I will run toward becoming a world-class interpreter.", "211", "읽기 전", ["collocation:통역사"]],
    ["달려가다", "奔向，跑向", "动词", "to run toward", "verb", "꿈을 향해 달려가고 있습니다.", "正在奔向梦想。", "I am running toward my dream.", "211", "읽기 전", ["collocation:달려가다"]],
    ["한식 조리사", "韩餐厨师", "名词短语", "Korean cuisine cook", "noun phrase", "한식 조리사의 꿈을 한국에서 이루겠습니다.", "我会在韩国实现韩餐厨师的梦想。", "I will achieve my dream of becoming a Korean cuisine cook in Korea.", "211", "읽기 전", ["collocation:한식 조리사"]],
    ["힘과 열정", "力量和热情", "名词短语", "energy and passion", "noun phrase", "꿈을 이루기 위해 힘과 열정을 쏟아야 해요.", "为了实现梦想，要投入力量和热情。", "You must pour energy and passion into achieving your dream.", "211", "읽기 전", ["collocation:힘과 열정"]],
    ["열정을 쏟다", "倾注热情", "动词短语", "to pour passion into", "verb phrase", "한국어 공부에 열정을 쏟았어요.", "把热情倾注在韩语学习上。", "I poured passion into studying Korean.", "211", "읽기 전", ["collocation:열정을 쏟다"]],
    ["최선을 다하다", "尽最大努力", "动词短语", "to do one's best", "verb phrase", "꿈을 이루기 위해 최선을 다할 것입니다.", "为了实现梦想会尽最大努力。", "I will do my best to achieve my dream.", "211", "읽기 전", ["collocation:최선을 다하다"]],
    ["고난", "苦难", "名词", "hardship", "noun", "고난을 이기면 꿈에 가까워질 수 있어요.", "战胜苦难就能更接近梦想。", "If you overcome hardship, you can get closer to your dream.", "211", "읽기 전", ["collocation:고난"]],
    ["이기다", "战胜", "动词", "to overcome; win", "verb", "어려움을 이기고 꿈에 도전했어요.", "战胜困难并挑战梦想。", "I overcame difficulties and challenged my dream.", "211", "읽기 전", ["collocation:이기다"]],
    ["간호사", "护士", "名词", "nurse", "noun", "저의 꿈은 간호사입니다.", "我的梦想是护士。", "My dream is to become a nurse.", "212", "읽기", ["collocation:간호사"]],
    ["시부모", "公婆", "名词", "parents-in-law", "noun", "시부모를 모시면서 아이 둘을 키웠어요.", "一边侍奉公婆，一边养育两个孩子。", "I raised two children while caring for my parents-in-law.", "212", "단어장", ["collocation:시부모"]],
    ["모시다", "侍奉，照顾长辈", "动词", "to care for; serve respectfully", "verb", "시부모를 모시고 살고 있어요.", "和公婆一起生活并照顾他们。", "I live with and care for my parents-in-law.", "212", "단어장", ["collocation:모시다"]],
    ["간호조무사", "护理助理", "名词", "nursing assistant", "noun", "새내기 간호조무사이기도 합니다.", "也是一名新人护理助理。", "I am also a new nursing assistant.", "212", "읽기", ["collocation:간호조무사"]],
    ["새내기", "新人", "名词", "newcomer; beginner", "noun", "병원에서 근무한 지 1년이 채 안 된 새내기입니다.", "是在医院工作还不到一年的新人。", "I am a newcomer who has worked at the hospital for less than a year.", "212", "단어장", ["collocation:새내기"]],
    ["낯선", "陌生的", "冠形词", "unfamiliar; strange", "determiner", "낯선 한국 땅에서 꿈에 다가갔어요.", "在陌生的韩国土地上接近了梦想。", "I moved closer to my dream in unfamiliar Korea.", "212", "읽기", ["collocation:낯선"]],
    ["한발 다가가다", "靠近一步", "动词短语", "to get one step closer", "verb phrase", "꿈에 한발 다가갔습니다.", "向梦想靠近了一步。", "I got one step closer to my dream.", "212", "읽기", ["collocation:한발 다가가다"]],
    ["서툴다", "生疏，不熟练", "形容词", "unskilled; awkward", "adjective", "한국말이 서툴러서 어렵지 않겠느냐고 했어요.", "他说韩语生疏，应该会很难吧。", "He said it might be difficult because my Korean was not fluent.", "212", "읽기", ["collocation:한국말이 서툴다"]],
    ["취득하다", "取得", "动词", "to acquire", "verb", "한국 국적을 취득했습니다.", "取得了韩国国籍。", "I acquired Korean nationality.", "212", "읽기", ["collocation:국적을 취득하다"]],
    ["집안일", "家务", "名词", "housework", "noun", "아이들을 키우고 집안일을 했어요.", "养育孩子并做家务。", "I raised children and did housework.", "212", "읽기", ["collocation:집안일"]],
    ["일상", "日常", "名词", "daily life", "noun", "바쁜 일상이 계속되었습니다.", "忙碌的日常持续着。", "Busy daily life continued.", "212", "읽기", ["collocation:일상"]],
    ["운영하다", "运营，开设", "动词", "to operate; run", "verb", "센터에서 간호조무사 취업 과정을 운영했어요.", "中心开设了护理助理就业课程。", "The center ran a nursing assistant employment course.", "212", "읽기", ["collocation:과정을 운영하다"]],
    ["무조건", "无条件地，不管怎样", "副词", "unconditionally; no matter what", "adverb", "이것이 내 길이라는 생각이 들어 무조건 도전했어요.", "觉得这是我的路，于是不管怎样都挑战了。", "I felt this was my path, so I challenged myself no matter what.", "212", "읽기", ["collocation:무조건"]],
    ["도전하다", "挑战", "动词", "to challenge", "verb", "꿈을 위해 끊임없이 도전하고 있어요.", "为了梦想不断挑战。", "I am continuously challenging myself for my dream.", "212", "읽기", ["collocation:도전하다"]],
    ["복습하다", "复习", "动词", "to review", "verb", "밤에는 늦게까지 배운 것을 복습했어요.", "晚上复习学过的内容到很晚。", "At night, I reviewed what I learned until late.", "212", "읽기", ["collocation:복습하다"]],
    ["기대감", "期待感", "名词", "expectation; hope", "noun", "꿈을 이룰 수 있을지도 모른다는 기대감이 있었어요.", "有也许能实现梦想的期待感。", "I had the hope that I might achieve my dream.", "212", "읽기", ["collocation:기대감"]],
    ["응원하다", "支持，应援", "动词", "to support; cheer on", "verb", "가족이 저를 믿고 응원해 줬어요.", "家人相信并支持了我。", "My family believed in and supported me.", "212", "읽기", ["collocation:응원하다"]],
    ["합격하다", "合格，通过", "动词", "to pass", "verb", "간호조무사 시험에 합격했어요.", "通过了护理助理考试。", "I passed the nursing assistant exam.", "212", "읽기", ["collocation:시험에 합격하다"]],
    ["근무하다", "工作，上班", "动词", "to work", "verb", "지금은 작은 병원에 근무하고 있습니다.", "现在在小医院工作。", "I currently work at a small hospital.", "212", "읽기", ["collocation:근무하다"]],
    ["끊임없이", "不断地", "副词", "constantly; continuously", "adverb", "간호사가 되기 위해 끊임없이 도전하고 있습니다.", "为了成为护士正在不断挑战。", "I am continuously challenging myself to become a nurse.", "212", "읽기", ["collocation:끊임없이"]],
    ["자격증을 취득하다", "取得资格证", "动词短语", "to acquire a license", "verb phrase", "언제 간호사 자격증을 취득할지 모릅니다.", "不知道什么时候能取得护士资格证。", "I do not know when I will acquire a nursing license.", "212", "읽기", ["collocation:자격증을 취득하다"]],
    ["귀화", "归化，入籍", "名词", "naturalization", "noun", "귀화용 종합 평가에 합격하면 한국 국적을 취득할 수 있어요.", "通过归化综合评价后可以取得韩国国籍。", "If you pass the comprehensive naturalization evaluation, you can acquire Korean nationality.", "214", "문화와 정보", ["collocation:귀화"]],
    ["평가", "评价，考试", "名词", "evaluation", "noun", "각 단계의 평가를 통과해야 해요.", "必须通过各阶段评价。", "You must pass the evaluation for each stage.", "214", "문화와 정보", ["collocation:평가를 통과하다"]],
    ["최종적으로", "最终", "副词", "finally", "adverb", "최종적으로 귀화용 종합 평가에 합격해야 해요.", "最终要通过归化综合评价。", "Finally, you must pass the comprehensive naturalization evaluation.", "214", "문화와 정보", ["collocation:최종적으로"]],
    ["풍습", "风俗", "名词", "customs", "noun", "한국의 풍습에 대한 이해가 필요해요.", "需要理解韩国风俗。", "Understanding Korean customs is necessary.", "214", "문화와 정보", ["collocation:풍습"]],
    ["기본 소양", "基本素养", "名词短语", "basic qualities", "noun phrase", "한국 국민으로서의 기본 소양을 평가받아요.", "接受作为韩国国民的基本素养评价。", "One's basic qualities as a Korean citizen are evaluated.", "214", "문화와 정보", ["collocation:기본 소양"]],
    ["귀화 허가 신청서", "归化许可申请书", "名词短语", "naturalization permit application", "noun phrase", "한국 국적을 신청하려면 귀화 허가 신청서가 필요해요.", "申请韩国国籍需要归化许可申请书。", "A naturalization permit application is needed to apply for Korean nationality.", "214", "문화와 정보", ["collocation:귀화 허가 신청서"]],
    ["여권", "护照", "名词", "passport", "noun", "여권과 본국 신분증이 필요합니다.", "需要护照和本国身份证。", "A passport and home-country ID are needed.", "214", "문화와 정보", ["collocation:여권"]],
    ["본국 신분증", "本国身份证", "名词短语", "home-country ID", "noun phrase", "본국 신분증 원본과 사본을 준비해야 해요.", "要准备本国身份证原件和复印件。", "You need to prepare the original and a copy of your home-country ID.", "214", "문화와 정보", ["collocation:본국 신분증"]],
    ["범죄 경력 증명서", "犯罪记录证明书", "名词短语", "criminal record certificate", "noun phrase", "범죄 경력 증명서도 제출해야 해요.", "也要提交犯罪记录证明书。", "A criminal record certificate must also be submitted.", "214", "문화와 정보", ["collocation:범죄 경력 증명서"]],
    ["가족 관계 증명서", "家族关系证明书", "名词短语", "family relation certificate", "noun phrase", "가족 관계 증명서가 필요합니다.", "需要家族关系证明书。", "A family relation certificate is needed.", "214", "문화와 정보", ["collocation:가족 관계 증명서"]],
    ["주민 등록 등본", "居民登记誊本", "名词短语", "resident registration copy", "noun phrase", "주민 등록 등본을 준비해야 해요.", "要准备居民登记誊本。", "You need to prepare a copy of resident registration.", "214", "문화와 정보", ["collocation:주민 등록 등본"]],
    ["구비 서류", "必备材料", "名词短语", "required documents", "noun phrase", "구비 서류를 가지고 출입국 관리 사무소에 가야 해요.", "要带着必备材料去出入境管理事务所。", "You must take the required documents to the immigration office.", "214", "문화와 정보", ["collocation:구비 서류"]],
    ["출입국 관리 사무소", "出入境管理事务所", "名词短语", "immigration office", "noun phrase", "주소지의 출입국 관리 사무소에 직접 가서 신청해야 해요.", "必须亲自去居住地出入境管理事务所申请。", "You must apply in person at the immigration office for your address.", "214", "문화와 정보", ["collocation:출입국 관리 사무소"]],
    ["귀화심사", "归化审查", "名词", "naturalization review", "noun", "신청 후 귀화심사가 진행됩니다.", "申请后会进行归化审查。", "After applying, a naturalization review is conducted.", "214", "문화와 정보", ["collocation:귀화심사"]],
    ["서류 심사", "材料审查", "名词短语", "document review", "noun phrase", "귀화심사에는 서류 심사가 포함됩니다.", "归化审查包含材料审查。", "Naturalization review includes document review.", "214", "문화와 정보", ["collocation:서류 심사"]],
    ["면접 심사", "面试审查", "名词短语", "interview review", "noun phrase", "서류 심사 후 면접 심사를 받습니다.", "材料审查后接受面试审查。", "After document review, an interview review is conducted.", "214", "문화와 정보", ["collocation:면접 심사"]],
    ["실태 조사", "实况调查", "名词短语", "fact-finding investigation", "noun phrase", "귀화 절차에는 실태 조사도 있습니다.", "归化程序也有实况调查。", "The naturalization process also includes a fact-finding investigation.", "214", "문화와 정보", ["collocation:실태 조사"]],
    ["기본 증명서", "基本证明书", "名词短语", "basic certificate", "noun phrase", "귀화 허가 통지서를 받으면 기본 증명서를 발급받아야 해요.", "收到归化许可通知书后要领取基本证明书。", "After receiving a naturalization permit notice, you must get a basic certificate.", "214", "문화와 정보", ["collocation:기본 증명서"]],
    ["발급받다", "领取，获得签发", "动词", "to be issued", "verb", "주민 등록증을 발급받을 수 있어요.", "可以领取居民登记证。", "You can be issued a resident registration card.", "214", "문화와 정보", ["collocation:발급받다"]],
    ["주민 등록증", "居民登记证", "名词", "resident registration card", "noun", "주민 등록을 하면 주민 등록증을 발급받을 수 있어요.", "进行居民登记后可以领取居民登记证。", "If you register as a resident, you can receive a resident registration card.", "214", "문화와 정보", ["collocation:주민 등록증"]]
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
  window.lessonGuideL4LessonChunks["l4-16"] = {
    id: "l4-16",
    number: 16,
    titleKo: "이민 생활",
    titleZh: "移民生活",
    pages: "204-215",
    status: "draft",
    progress: {
      vocabulary: "draft-p204-p215",
      dialogue: "draft-p207-p209",
      culture: "draft-p214",
      practice: "draft-p207-p214"
    },
    vocabulary,
    vocabularySources: [
      { page: 204, label: "단원 제목", note: "课题、语法和学习目标" },
      { page: 206, label: "어휘", note: "外国人的困难、选择和解决方法" },
      { page: 207, label: "문법 1", note: "V/A-(으)ㄹ지도 모르다 与不确定推测" },
      { page: 208, label: "문법 2", note: "N치고 与类别评价" },
      { page: 209, label: "말하기", note: "社会통합프로그램 수료식 소감 발표" },
      { page: 210, label: "듣기/발음", note: "成功移民采访与发音" },
      { page: 211, label: "읽기 전", note: "移民者梦想和努力表达" },
      { page: 212, label: "읽기", note: "关于我的梦想的发表文" },
      { page: 214, label: "문화와 정보", note: "社会통합프로그램与韩国国籍取得" },
      { page: 215, label: "배운 어휘 확인", note: "本课复习词汇补充" }
    ],
    goals: [
      "能讲述自己在韩国生活中的经验。",
      "能写出自己的梦想和未来计划。",
      "理解社会통합프로그램与韩国国籍取得相关信息。"
    ],
    grammar: [
      {
        pattern: "V/A-(으)ㄹ지도 모르다",
        zh: "也许会……；说不定……",
        guide: "表示不确定的推测，常用于未来可能发生但还不能断定的事。",
        translations: {
          en: {
            meaning: "might...; may...",
            guide: "Expresses an uncertain guess, often about something that may happen in the future."
          }
        }
      },
      {
        pattern: "N치고",
        zh: "作为……来说；凡是……",
        guide: "把前面的名词当作类别标准来评价，也可表示该类别整体上通常如此。",
        translations: {
          en: {
            meaning: "for/as...; among...",
            guide: "Evaluates something against a category or states what is generally true of that category."
          }
        }
      }
    ],
    dialogues: [
      {
        title: "생각보다 시간이 걸릴지도 몰라요",
        titleKo: "생각보다 시간이 걸릴지도 몰라요",
        titleZh: "也许会比想象中花更久",
        focus: "V/A-(으)ㄹ지도 모르다",
        page: "207",
        source: "문법 1",
        sceneZh: "询问永住权申请时间，并用不确定推测给出提醒。",
        speakers: ["안젤라", "후엔"],
        lines: [
          {
            speaker: "안젤라",
            ko: "지금 영주권을 신청하면 언제 받을 수 있을까요?",
            zh: "现在申请永住权的话，什么时候能拿到呢？",
            noteZh: "-을 수 있을까요 用于礼貌询问可能性。",
            translations: {
              en: {
                translation: "If I apply for permanent residency now, when do you think I can receive it?",
                note: "-을 수 있을까요 politely asks about possibility."
              }
            }
          },
          {
            speaker: "후엔",
            ko: "요즘 신청자가 많아서 생각보다 시간이 걸릴지도 몰라요. 마음의 여유를 가지세요.",
            zh: "最近申请者很多，也许会比想象中花更久。请放宽心。",
            noteZh: "걸릴지도 몰라요 表示不确定但有可能发生。",
            translations: {
              en: {
                translation: "There are many applicants these days, so it might take longer than expected. Try to be patient.",
                note: "걸릴지도 몰라요 expresses an uncertain possibility."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "It Might Take Longer Than Expected",
            scene: "Ask about permanent residency processing time and give advice using an uncertain guess."
          }
        }
      },
      {
        title: "외국에서 사는 사람치고 안 힘든 사람은 없어요",
        titleKo: "외국에서 사는 사람치고 안 힘든 사람은 없어요",
        titleZh: "在国外生活的人没有不辛苦的",
        focus: "N치고",
        page: "208",
        source: "문법 2",
        sceneZh: "用 N치고 说明作为某一类人来说普遍会有的情况。",
        speakers: ["이링", "정아라"],
        lines: [
          {
            speaker: "이링",
            ko: "선생님, 한국 생활이 힘들어서 그냥 고향에 돌아가 버릴까 이런 생각이 들어요.",
            zh: "老师，韩国生活太辛苦了，我会想干脆回故乡算了。",
            noteZh: "-아/어 버릴까 表示说话人一时产生的念头。",
            translations: {
              en: {
                translation: "Teacher, life in Korea is hard, so I sometimes think I should just go back home.",
                note: "-아/어 버릴까 shows a thought that comes to the speaker in the moment."
              }
            }
          },
          {
            speaker: "정아라",
            ko: "외국에서 사는 사람치고 안 힘든 사람은 없으니까 힘을 내세요.",
            zh: "在国外生活的人没有不辛苦的，所以请打起精神。",
            noteZh: "사람치고 안 힘든 사람은 없다 表示这一类人普遍如此。",
            translations: {
              en: {
                translation: "No one living abroad has it easy, so keep your spirits up.",
                note: "사람치고 안 힘든 사람은 없다 generalizes over that category of people."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "No One Living Abroad Has It Easy",
            scene: "Use N치고 to describe what is generally true of a group."
          }
        }
      },
      {
        title: "사회통합프로그램 수료식 소감 발표",
        titleKo: "사회통합프로그램 수료식 소감 발표",
        titleZh: "社会统合项目结业典礼感想发表",
        focus: "한국 생활 경험담",
        page: "209",
        source: "말하기",
        sceneZh: "在结业典礼上讲述韩国生活中的困难、努力和未来计划。",
        speakers: ["후엔"],
        lines: [
          {
            speaker: "후엔",
            ko: "안녕하십니까? 오늘 소감을 발표하게 된 후엔이라고 합니다. 저는 한국에 온 지 6년 정도 됐는데요.",
            zh: "大家好。我叫后恩，今天来发表感想。我来到韩国大约已经6年了。",
            noteZh: "온 지 6년 정도 됐다 表示从来到现在经过了约6年。",
            translations: {
              en: {
                translation: "Hello. My name is Huyen, and I will share my thoughts today. It has been about six years since I came to Korea.",
                note: "온 지 6년 정도 됐다 means about six years have passed since coming."
              }
            }
          },
          {
            speaker: "후엔",
            ko: "이렇게 기쁜 자리에 서니까 힘들었던 지난날이 생각납니다. 외국에서 사는 사람치고 힘들지 않은 사람이 없겠지만 저도 처음 한국에 왔을 때는 한국 사람과 의사소통이 안 돼서 고생을 많이 했습니다.",
            zh: "站在这样令人高兴的位置上，我想起了过去辛苦的日子。在国外生活的人大概没有不辛苦的，我刚来韩国时也因为无法和韩国人沟通，吃了很多苦。",
            noteZh: "사람치고 힘들지 않은 사람이 없다 用 N치고 表示普遍情况。",
            translations: {
              en: {
                translation: "Standing here on such a joyful occasion reminds me of my difficult past. No one living abroad has it easy, but when I first came to Korea, I struggled a lot because I could not communicate with Koreans.",
                note: "사람치고 힘들지 않은 사람이 없다 uses N치고 to make a general statement."
              }
            }
          },
          {
            speaker: "후엔",
            ko: "그럴 때마다 주변 사람들에게 물어보면서 문제를 해결했습니다. 그리고 일자리를 찾지 못해 막막할 때도 있었습니다.",
            zh: "每当那时，我一边向周围的人询问，一边解决问题。也曾有过找不到工作而茫然的时候。",
            noteZh: "그럴 때마다 表示“每当那种时候”。",
            translations: {
              en: {
                translation: "Whenever that happened, I asked people around me and solved the problem. There were also times when I felt lost because I could not find a job.",
                note: "그럴 때마다 means whenever that happened."
              }
            }
          },
          {
            speaker: "후엔",
            ko: "그럴 때도 할 수 있다는 자신감을 갖고 열심히 살았습니다.",
            zh: "那种时候，我也怀着“我能做到”的自信努力生活。",
            noteZh: "할 수 있다는 자신감 表示“能做到”的信念。",
            translations: {
              en: {
                translation: "Even then, I lived diligently with the confidence that I could do it.",
                note: "할 수 있다는 자신감 means confidence that one can do it."
              }
            }
          },
          {
            speaker: "후엔",
            ko: "제가 이런 경험을 하고 나니까 한국에 와서 저처럼 어려움을 겪는 외국인들이 많겠다는 생각이 들었습니다.",
            zh: "经历这些之后，我想到来到韩国后像我一样经历困难的外国人应该很多。",
            noteZh: "많겠다는 생각이 들다 表示产生某种判断或想法。",
            translations: {
              en: {
                translation: "After having these experiences, I thought there must be many foreigners who come to Korea and go through difficulties like I did.",
                note: "많겠다는 생각이 들다 means the speaker came to that thought or judgment."
              }
            }
          },
          {
            speaker: "후엔",
            ko: "그래서 앞으로는 외국인을 돕기 위한 모임을 만들어서 어려움을 겪는 사람들에게 도움을 주면서 살고 싶습니다.",
            zh: "所以以后我想创建帮助外国人的组织，一边帮助经历困难的人一边生活。",
            noteZh: "-기 위한 모임 表示“为了……的组织”。",
            translations: {
              en: {
                translation: "So in the future, I want to create a group to help foreigners and live while helping people who are experiencing difficulties.",
                note: "-기 위한 모임 means a group for the purpose of doing something."
              }
            }
          },
          {
            speaker: "후엔",
            ko: "지금까지 부족한 제 이야기를 들어 주셔서 감사합니다.",
            zh: "感谢大家听我这番还不成熟的故事。",
            noteZh: "发表结尾常用 감사 인사。",
            translations: {
              en: {
                translation: "Thank you for listening to my humble story.",
                note: "This is a common closing expression for a speech."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "Completion Ceremony Speech for the Integration Program",
            scene: "Talk about difficulties, efforts, and future plans at a completion ceremony."
          }
        }
      }
    ],
    culture: {
      titleKo: "사회통합프로그램과 한국 국적 취득",
      titleZh: "社会统合项目与韩国国籍取得",
      summaryZh: "文章介绍社会통합프로그램的作用、通过귀화용 종합 평가取得韩国国籍的关系，以及申请韩国国籍时需要的材料和程序。",
      paragraphs: [
        {
          ko: "사회통합프로그램은 이민자가 사회 구성원으로 적응하는 데에 필요한 한국어와 한국 문화에 대한 교육을 제공하는 프로그램이다. 사회통합프로그램은 0단계부터 5단계까지 있는데 각 단계의 평가를 통과하고 최종적으로 귀화용 종합 평가에 합격하면 한국 국적을 취득할 수 있다. 즉, 한국 국적을 취득하려면 한국어 능력과 한국의 풍습에 대한 이해 등 한국 국민으로서의 기본 소양을 평가받아야 하는데 귀화용 종합시험이 이를 대신한다.",
          zh: "社会统合项目是为移民者适应社会成员身份所需的韩国语和韩国文化提供教育的项目。社会统合项目从0阶段到5阶段，若通过各阶段评价，并最终通过归化用综合评价，就可以取得韩国国籍。也就是说，若要取得韩国国籍，需要接受韩国语能力、对韩国风俗的理解等作为韩国国民所需基本素养的评价，而归化用综合考试可以代替这一评价。",
          guide: "第一段说明社会통합프로그램和韩国国籍取得之间的关系：学习、评价、最终综合评价。",
          translations: {
            en: {
              translation: "The Korea Immigration and Integration Program provides education in Korean language and Korean culture needed for immigrants to adapt as members of society. The program has levels 0 through 5, and if one passes the evaluation for each level and finally passes the comprehensive naturalization evaluation, one can acquire Korean nationality. In other words, to acquire Korean nationality, one must be evaluated on basic qualities as a Korean citizen, such as Korean language ability and understanding of Korean customs, and the comprehensive naturalization exam replaces this evaluation.",
              guide: "The first paragraph explains the relationship between the integration program and acquiring Korean nationality: study, evaluations, and the final comprehensive evaluation."
            }
          }
        },
        {
          ko: "한국 국적을 신청하려면 귀화 허가 신청서, 여권, 본국 신분증 원본과 사본, 범죄 경력 증명서, 가족 관계 증명서, 주민 등록 등본 등의 서류가 필요하다. 먼저 귀화 허가 신청은 구비 서류를 가지고 주소지의 출입국 관리 사무소에 직접 가서 신청해야 한다. 그러면 귀화심사를 진행하게 되는데 서류 심사-면접 심사-실태 조사 등의 절차가 진행된다.",
          zh: "申请韩国国籍时，需要归化许可申请书、护照、本国身份证原件和复印件、犯罪记录证明书、家族关系证明书、居民登记誊本等材料。首先，申请归化许可时，必须带着必备材料亲自前往居住地的出入境管理事务所申请。之后会进行归化审查，其程序包括材料审查、面试审查、实况调查等。",
          guide: "第二段列出申请材料和前半段流程：准备材料、到出入境管理事务所申请、进入审查。",
          translations: {
            en: {
              translation: "To apply for Korean nationality, documents such as a naturalization permit application, passport, original and copy of the home-country ID, criminal record certificate, family relation certificate, and resident registration copy are required. First, the naturalization permit application must be submitted in person at the immigration office for one's address with the required documents. Then the naturalization review proceeds through procedures such as document review, interview review, and fact-finding investigation.",
              guide: "The second paragraph lists the application documents and the first part of the process: prepare documents, apply at the immigration office, and enter review."
            }
          }
        },
        {
          ko: "귀화 허가 통지서를 받게 되면 기본 증명서를 발급받아 시청이나 구청, 주민 센터에 제출해야 한다. 귀화 허가일로부터 1년 이내에 본국 국적을 포기하고 주민 등록을 하게 되면 주민 등록증을 발급받을 수 있다.",
          zh: "收到归化许可通知书后，需要领取基本证明书，并提交给市厅、区厅或居民中心。自归化许可日起1年以内放弃本国国籍并进行居民登记后，就可以领取居民登记证。",
          guide: "第三段说明许可后的后续步骤：领取证明、提交、放弃原国籍、居民登记。",
          translations: {
            en: {
              translation: "Once one receives the naturalization permit notice, one must be issued a basic certificate and submit it to a city hall, district office, or community service center. If one gives up the nationality of the home country and completes resident registration within one year from the naturalization permit date, one can receive a resident registration card.",
              guide: "The third paragraph explains the steps after approval: receive the certificate, submit it, give up the original nationality, and register as a resident."
            }
          }
        }
      ],
      questions: [
        {
          q: "사회통합프로그램 귀화용 종합시험에 합격하면 어떤 혜택이 있습니까?",
          zh: "通过社会统合项目归化用综合考试后，有什么好处？",
          answerZh: "可以用它代替韩国国籍取得时需要评价的韩国语能力和韩国风俗理解等基本素养评价，有助于取得韩国国籍。",
          translations: {
            en: {
              translation: "What benefit is there if one passes the comprehensive naturalization exam of the integration program?",
              answer: "It can replace the evaluation of basic qualities needed for acquiring Korean nationality, such as Korean language ability and understanding of Korean customs, helping one acquire Korean nationality."
            }
          }
        },
        {
          q: "한국 국적을 신청하려면 어떤 서류가 필요합니까?",
          zh: "申请韩国国籍需要哪些材料？",
          answerZh: "需要归化许可申请书、护照、本国身份证原件和复印件、犯罪记录证明书、家族关系证明书、居民登记誊本等材料。",
          translations: {
            en: {
              translation: "What documents are needed to apply for Korean nationality?",
              answer: "Documents such as a naturalization permit application, passport, original and copy of the home-country ID, criminal record certificate, family relation certificate, and resident registration copy are needed."
            }
          }
        },
        {
          q: "여러분은 사회통합프로그램을 참여하면서 어떤 계획을 가지고 있는지 이야기해 보세요.",
          zh: "请说说你参加社会统合项目时有什么计划。",
          answerZh: "可以说想提高韩语、了解韩国文化、准备工作或资格证、帮助家人适应韩国生活、为将来申请国籍做准备等。",
          translations: {
            en: {
              translation: "Talk about what plans you have while participating in the integration program.",
              answer: "You can mention improving Korean, learning Korean culture, preparing for work or a certificate, helping family adapt to life in Korea, or preparing to apply for nationality in the future."
            }
          }
        }
      ],
      translations: {
        en: {
          title: "The Integration Program and Acquiring Korean Nationality",
          summary: "The article explains the role of the Korea Immigration and Integration Program, how passing the comprehensive naturalization evaluation relates to acquiring Korean nationality, and the documents and procedures required for applying."
        }
      }
    },
    practice: [
      {
        type: "grammar",
        title: "V/A-(으)ㄹ지도 모르다",
        promptZh: "用 -(으)ㄹ지도 모르다 说：最近申请者很多，也许会花很久。",
        answerKo: "요즘 신청자가 많아서 시간이 오래 걸릴지도 몰라요.",
        translations: {
          en: {
            title: "V/A-(으)ㄹ지도 모르다",
            prompt: "Use -(으)ㄹ지도 모르다: There are many applicants these days, so it might take a long time.",
            answer: "요즘 신청자가 많아서 시간이 오래 걸릴지도 몰라요."
          }
        }
      },
      {
        type: "grammar",
        title: "N치고",
        promptZh: "用 N치고 说：作为在韩国生活的外国人来说，我算适应得比较快。",
        answerKo: "한국에서 사는 외국인치고 저는 적응이 빠른 편이에요.",
        translations: {
          en: {
            title: "N치고",
            prompt: "Use N치고: For a foreigner living in Korea, I adapted fairly quickly.",
            answer: "한국에서 사는 외국인치고 저는 적응이 빠른 편이에요."
          }
        }
      },
      {
        type: "speaking",
        title: "수료식 소감",
        promptZh: "说：刚来韩国时沟通困难，但我一边向周围人询问一边解决问题。",
        answerKo: "처음 한국에 왔을 때는 의사소통이 어려웠지만 주변 사람들에게 물어보면서 문제를 해결했습니다.",
        translations: {
          en: {
            title: "Completion Ceremony Speech",
            prompt: "Say: When I first came to Korea, communication was difficult, but I solved problems by asking people around me.",
            answer: "처음 한국에 왔을 때는 의사소통이 어려웠지만 주변 사람들에게 물어보면서 문제를 해결했습니다."
          }
        }
      },
      {
        type: "reading",
        title: "저의 꿈은 간호사입니다",
        promptZh: "阅读题：这篇发表文中的人现在从事什么工作？",
        answerKo: "간호조무사입니다.",
        translations: {
          en: {
            title: "My Dream Is to Become a Nurse",
            prompt: "Reading: What job does the speaker currently have?",
            answer: "간호조무사입니다."
          }
        }
      },
      {
        type: "culture",
        title: "사회통합프로그램과 한국 국적 취득",
        promptZh: "文化题：申请韩国国籍时，应该先去哪里提交申请？",
        answerKo: "주소지의 출입국 관리 사무소에 직접 가서 신청해야 합니다.",
        translations: {
          en: {
            title: "The Integration Program and Korean Nationality",
            prompt: "Culture: Where should one first submit the application for Korean nationality?",
            answer: "주소지의 출입국 관리 사무소에 직접 가서 신청해야 합니다."
          }
        }
      }
    ],
    translations: {
      en: {
        title: "Immigrant Life",
        goals: [
          "Talk about one's experiences living in Korea.",
          "Use V/A-(으)ㄹ지도 모르다 to express uncertain possibilities.",
          "Use N치고 to evaluate something as part of a category.",
          "Write about one's dream and understand the integration program and Korean nationality process."
        ]
      }
    }
  };
})();
