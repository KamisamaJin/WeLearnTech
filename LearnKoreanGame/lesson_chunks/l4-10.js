(() => {
  const makeTips = (tips) => (tips || []).map((text) => {
    const [type, body] = text.includes(":") ? text.split(/:(.+)/) : ["collocation", text];
    return { type, text: body.trim() };
  });

  const vocabulary = [
    ["언어생활", "语言生活", "名词", "language life; language use", "noun", "올바른 언어생활을 위해 언어 예절을 지켜야 해요.", "为了正确的语言生活，应该遵守语言礼仪。", "For proper language use, we should observe language etiquette.", "132", "단원 제목", ["collocation:올바른 언어생활"]],
    ["올바른 언어생활", "正确的语言生活", "名词短语", "proper language use", "noun phrase", "올바른 언어생활은 의사소통에 중요해요.", "正确的语言生活对沟通很重要。", "Proper language use is important for communication.", "132", "단원 제목", ["collocation:올바른 언어생활"]],
    ["한국어 사용의 어려움", "使用韩语的困难", "名词短语", "difficulties in using Korean", "noun phrase", "한국어 사용의 어려움에 대해 이야기해 보세요.", "请说说使用韩语的困难。", "Talk about difficulties in using Korean.", "132", "활동", ["collocation:한국어 사용의 어려움"]],
    ["말과 관련된 한국 속담", "与语言相关的韩国俗语", "名词短语", "Korean proverbs related to speech", "noun phrase", "이번 문화 수업에서는 말과 관련된 한국 속담을 배워요.", "这次文化课学习与语言相关的韩国俗语。", "This culture lesson covers Korean proverbs related to speech.", "132", "문화와 정보", ["collocation:한국 속담"]],
    ["언어 예절을 지키다", "遵守语言礼仪", "动词短语", "to observe language etiquette", "verb phrase", "공식적인 자리에서는 언어 예절을 지켜야 해요.", "在正式场合应该遵守语言礼仪。", "You should observe language etiquette in formal settings.", "134", "어휘", ["collocation:언어 예절을 지키다"]],
    ["올바른 언어를 사용하다", "使用正确语言", "动词短语", "to use proper language", "verb phrase", "인터넷에서도 올바른 언어를 사용해야 해요.", "在网上也应该使用正确语言。", "We should use proper language online as well.", "134", "어휘", ["collocation:올바른 언어를 사용하다"]],
    ["때와 장소에 맞게 말하다", "根据时间和场合说话", "动词短语", "to speak appropriately for the time and place", "verb phrase", "때와 장소에 맞게 말하는 것이 중요해요.", "根据时间和场合说话很重要。", "It is important to speak appropriately for the time and place.", "134", "어휘", ["collocation:때와 장소에 맞게 말하다"]],
    ["표준어를 구사하다", "使用标准语", "动词短语", "to use standard language", "verb phrase", "방송에서는 표준어를 구사하는 것이 좋아요.", "在播音中最好使用标准语。", "It is good to use standard language in broadcasting.", "134", "어휘", ["collocation:표준어를 구사하다"]],
    ["정확하게 발음하다", "准确发音", "动词短语", "to pronounce accurately", "verb phrase", "한국어를 정확하게 발음하려고 노력해요.", "努力准确地发韩语音。", "I try to pronounce Korean accurately.", "134", "어휘", ["collocation:정확하게 발음하다"]],
    ["적절한 호칭을 쓰다", "使用恰当称呼", "动词短语", "to use an appropriate title", "verb phrase", "거래처 사람에게는 적절한 호칭을 써야 해요.", "对客户公司的人应该使用恰当称呼。", "You should use appropriate titles for business partners.", "134", "어휘", ["collocation:적절한 호칭"]],
    ["비속어를 사용하지 않다", "不使用粗俗语", "动词短语", "not to use vulgar language", "verb phrase", "공식적인 자리에서는 비속어를 사용하지 마세요.", "在正式场合不要使用粗俗语。", "Do not use vulgar language in formal settings.", "134", "어휘", ["collocation:비속어를 사용하다"]],
    ["맞춤법이 틀리다", "拼写法错误", "动词短语", "to have spelling errors", "verb phrase", "아직 맞춤법이 많이 틀려요.", "拼写法还经常出错。", "I still make many spelling errors.", "134", "어휘", ["collocation:맞춤법이 틀리다"]],
    ["띄어쓰기를 잘못하다", "分写错误", "动词短语", "to make spacing mistakes", "verb phrase", "한국어는 띄어쓰기를 잘못하기 쉬워요.", "韩语很容易分写出错。", "It is easy to make spacing mistakes in Korean.", "134", "어휘", ["collocation:띄어쓰기를 잘못하다"]],
    ["발음이 부정확하다", "发音不准确", "形容词短语", "pronunciation is inaccurate", "adjective phrase", "발음이 부정확해서 사람들이 잘못 알아들었어요.", "因为发音不准确，人们听错了。", "People misunderstood because my pronunciation was inaccurate.", "134", "어휘", ["collocation:발음이 부정확하다"]],
    ["억양이 부자연스럽다", "语调不自然", "形容词短语", "intonation is unnatural", "adjective phrase", "억양이 부자연스러워서 고향이 어디냐고 물어봐요.", "因为语调不自然，人们会问我家乡在哪里。", "People ask where I am from because my intonation sounds unnatural.", "134", "어휘", ["collocation:억양이 부자연스럽다"]],
    ["속담 활용이 어렵다", "难以运用俗语", "形容词短语", "using proverbs is difficult", "adjective phrase", "속담 활용이 어려워서 잘 못 써요.", "因为难以运用俗语，所以不太会用。", "I cannot use proverbs well because using them is difficult.", "134", "어휘", ["collocation:속담 활용"]],
    ["신조어", "新造词，网络新词", "名词", "newly coined word; neologism", "noun", "요즘은 신조어가 너무 빨리 바뀌어요.", "最近新词变化太快。", "New words change very quickly these days.", "134", "어휘", ["collocation:신조어"]],
    ["유행어", "流行语", "名词", "buzzword; trendy expression", "noun", "모르는 유행어가 많아요.", "不懂的流行语很多。", "There are many buzzwords I do not know.", "134", "어휘", ["collocation:유행어"]],
    ["신조어/유행어를 따라 하다", "模仿新词/流行语", "动词短语", "to copy new words/buzzwords", "verb phrase", "젊은 사람들이 쓰는 신조어를 따라 하고 싶어요.", "想模仿年轻人用的新词。", "I want to copy the new words young people use.", "134", "어휘", ["collocation:따라 하다"]],
    ["단어가 잘 안 떠오르다", "单词想不起来", "动词短语", "words do not come to mind easily", "verb phrase", "말할 때 단어가 잘 안 떠오를 때가 많아요.", "说话时经常想不起单词。", "Words often do not come to mind when I speak.", "134", "어휘", ["collocation:단어가 떠오르다"]],
    ["모국어를 섞어 쓰다", "夹杂母语使用", "动词短语", "to mix in one's native language", "verb phrase", "마음이 급하면 모국어를 섞어 쓰기도 해요.", "着急时也会夹杂母语使用。", "When I am rushed, I sometimes mix in my native language.", "134", "어휘", ["collocation:모국어를 섞어 쓰다"]],
    ["높임말이 헷갈리다", "敬语混淆", "动词短语", "honorific speech is confusing", "verb phrase", "높임말이 헷갈려서 실수했어요.", "因为敬语混淆而出错了。", "I made a mistake because honorific speech was confusing.", "134", "어휘", ["collocation:높임말이 헷갈리다"]],
    ["사투리를 쓰다", "使用方言", "动词短语", "to use dialect", "verb phrase", "표준어만 배워서 사투리 쓰기가 쉽지 않아요.", "只学了标准语，所以使用方言不容易。", "I learned only standard Korean, so using dialect is not easy.", "134", "어휘", ["collocation:사투리를 쓰다"]],
    ["동문서답하다", "答非所问", "动词", "to give an irrelevant answer", "verb", "면접관 질문을 잘못 이해해서 동문서답하고 말았어요.", "因为误解了面试官的问题，结果答非所问了。", "I misunderstood the interviewer's question and ended up giving an irrelevant answer.", "134", "어휘", ["collocation:동문서답하다"]],
    ["의도한 대로 말이 잘 안 나오다", "话说不出想表达的意思", "动词短语", "words do not come out as intended", "verb phrase", "제가 의도한 대로 말이 잘 안 나올 때가 많아요.", "我经常无法按自己的意图说出来。", "My words often do not come out as I intend.", "134", "어휘", ["collocation:의도한 대로"]],
    ["V-고 말다", "终于……；结果还是……", "语法表达", "end up doing...; ultimately do...", "grammar expression", "면접관 질문을 잘못 이해해서 동문서답하고 말았어요.", "因为误解了面试官的问题，结果答非所问了。", "I misunderstood the interviewer's question and ended up giving an irrelevant answer.", "135", "문법 1", ["form:동사 + -고 말다"]],
    ["잠이 들고 말다", "结果睡着了", "动词短语", "to end up falling asleep", "verb phrase", "너무 피곤해서 잠이 들고 말았어요.", "太累了，结果睡着了。", "I was so tired that I ended up falling asleep.", "135", "문법 1", ["collocation:잠이 들다"]],
    ["결심하다", "下决心", "动词", "to decide; resolve", "verb", "담배를 끊으려고 결심했지만 다시 피우고 말았어요.", "虽然下决心戒烟，但结果又抽了。", "I resolved to quit smoking but ended up smoking again.", "135", "단어장", ["collocation:결심하다"]],
    ["잊어버리다", "忘掉", "动词", "to forget completely", "verb", "한국말을 안 해서 다 잊어버리고 말았어요.", "因为没说韩语，结果全忘掉了。", "I did not speak Korean and ended up forgetting it all.", "135", "문법 1", ["collocation:다 잊어버리다"]],
    ["헷갈리다", "混淆，搞不清", "动词", "to be confused", "verb", "높임말이 헷갈리고 말았어요.", "敬语结果搞混了。", "I ended up getting confused about honorifics.", "135", "문법 1", ["collocation:헷갈리다"]],
    ["반말을 하다", "说非敬语", "动词短语", "to speak casually; use non-honorific speech", "verb phrase", "높임말이 헷갈려서 과장님께 반말을 하고 말았어요.", "因为敬语混淆，结果对科长说了非敬语。", "I got confused with honorifics and ended up speaking casually to the manager.", "135", "문법 1", ["collocation:반말을 하다"]],
    ["거래처", "客户公司，业务往来方", "名词", "business partner; client company", "noun", "거래처 사람들을 잘못 불렀어요.", "把客户公司的人称呼错了。", "I addressed people from the client company incorrectly.", "135", "단어장", ["collocation:거래처"]],
    ["꽃병", "花瓶", "名词", "vase", "noun", "청소를 하다가 꽃병을 깨고 말았어요.", "打扫时结果把花瓶打碎了。", "I ended up breaking a vase while cleaning.", "135", "문법 1", ["collocation:꽃병을 깨다"]],
    ["V-는 척하다 / A-(으)ㄴ 척하다", "假装……", "语法表达", "pretend to...", "grammar expression", "나가기 싫어서 바쁜 척했어요.", "因为不想出去，所以假装很忙。", "I did not want to go out, so I pretended to be busy.", "136", "문법 2", ["form:동사 + -는 척하다", "form:형용사 + -(으)ㄴ 척하다"]],
    ["바쁜 척하다", "假装很忙", "动词短语", "to pretend to be busy", "verb phrase", "받기 싫은 전화를 받았을 때 바쁜 척해요.", "接到不想接的电话时假装很忙。", "When I get a call I do not want to answer, I pretend to be busy.", "136", "문법 2", ["collocation:바쁜 척하다"]],
    ["공감하는 척하다", "假装有共鸣", "动词短语", "to pretend to sympathize", "verb phrase", "친구가 하는 말이 이해가 안 됐지만 공감하는 척했어요.", "虽然不懂朋友说的话，但假装有共鸣。", "I did not understand what my friend said but pretended to sympathize.", "136", "문법 2", ["collocation:공감하는 척하다"]],
    ["아프지 않은 척하다", "假装不痛", "动词短语", "to pretend not to be hurt", "verb phrase", "넘어졌는데 창피해서 아프지 않은 척했어요.", "摔倒了，但因为丢脸，假装不痛。", "I fell, but I was embarrassed and pretended not to be hurt.", "136", "문법 2", ["collocation:아프지 않은 척하다"]],
    ["아는 척하다", "假装知道", "动词短语", "to pretend to know", "verb phrase", "모르는 유행어가 많은데 그냥 아는 척해요.", "有很多不懂的流行语，但就假装知道。", "There are many buzzwords I do not know, but I just pretend to know them.", "136", "문법 2", ["collocation:아는 척하다"]],
    ["재미있는 척하다", "假装有趣", "动词短语", "to pretend something is interesting", "verb phrase", "친구가 지루한 이야기를 할 때 재미있는 척해요.", "朋友讲无聊的故事时假装有趣。", "When my friend tells a boring story, I pretend it is interesting.", "136", "문법 2", ["collocation:재미있는 척하다"]],
    ["전혀", "完全，丝毫", "副词", "not at all", "adverb", "한국어를 전혀 못하는 척했어요.", "假装完全不会韩语。", "I pretended not to know Korean at all.", "136", "단어장", ["collocation:전혀 못하다"]],
    ["말다툼", "争吵", "名词", "argument", "noun", "말다툼한 사람을 길에서 만났어요.", "在路上遇到了吵过架的人。", "I met someone on the street whom I had argued with.", "136", "단어장", ["collocation:말다툼하다"]],
    ["별일", "特别的事，异常情况", "名词", "special matter; trouble", "noun", "가족들이 걱정할 때 별일 없이 잘 산다고 해요.", "家人担心时，说没有什么事，过得很好。", "When my family worries, I say I am doing fine without any trouble.", "136", "단어장", ["collocation:별일 없다"]],
    ["지루하다", "无聊", "形容词", "boring", "adjective", "친구가 지루한 이야기를 해도 재미있는 척해요.", "即使朋友讲无聊的故事，也假装有趣。", "Even when my friend tells a boring story, I pretend it is interesting.", "136", "단어장", ["collocation:지루한 이야기"]],
    ["적응이 되다", "适应", "动词短语", "to adapt", "verb phrase", "한국에 온 지 오래돼서 이제 적응이 다 됐죠?", "来韩国很久了，现在都适应了吧？", "You have been in Korea for a long time, so you are fully adapted now, right?", "137", "말하기 대화", ["collocation:적응이 되다"]],
    ["오래 살수록", "住得越久", "副词短语", "the longer one lives", "adverbial phrase", "오래 살수록 한국어가 점점 더 어려워지는 것 같아요.", "住得越久，韩语好像越变得难。", "The longer I live here, the more difficult Korean seems to become.", "137", "말하기 대화", ["form:-을수록"]],
    ["유창하다", "流利", "形容词", "fluent", "adjective", "이링 씨 한국어가 유창해서 항상 부러웠어요.", "이링 的韩语很流利，我一直很羡慕。", "I have always envied Yiling because her Korean is fluent.", "137", "단어장", ["collocation:한국어가 유창하다"]],
    ["어휘", "词汇", "名词", "vocabulary", "noun", "어휘나 문법은 많이 알아도 말하기는 어려워요.", "即使知道很多词汇和语法，说话还是难。", "Even if I know a lot of vocabulary and grammar, speaking is difficult.", "137", "말하기 대화", ["collocation:어휘와 문법"]],
    ["마음이 급하다", "心急，着急", "形容词短语", "to be in a hurry; anxious", "adjective phrase", "마음이 급하면 모국어를 섞어 쓰기도 해요.", "着急时也会夹杂母语使用。", "When I am in a hurry, I sometimes mix in my native language.", "137", "말하기 대화", ["collocation:마음이 급하다"]],
    ["부끄럽다", "害羞，惭愧", "形容词", "embarrassed; ashamed", "adjective", "모국어를 섞어 쓸 때마다 좀 부끄러워요.", "每次夹杂母语使用时都会有点惭愧。", "I feel a bit embarrassed whenever I mix in my native language.", "137", "말하기 대화", ["collocation:부끄럽다"]],
    ["직설적이다", "直率，直接", "形容词", "direct; blunt", "adjective", "저는 평소에 직설적으로 말하는 편이에요.", "我平时说话比较直接。", "I tend to speak directly.", "138", "듣기", ["collocation:직설적으로 말하다"]],
    ["상처를 받다", "受伤，受到伤害", "动词短语", "to be hurt emotionally", "verb phrase", "상대방이 가끔 상처를 받아요.", "对方有时会受伤。", "The other person sometimes gets hurt.", "138", "듣기", ["collocation:상처를 받다"]],
    ["격식을 차리다", "讲究礼节，保持正式", "动词短语", "to observe formality", "verb phrase", "격식을 차려서 말해야 하는 상황이 있어요.", "有需要讲究礼节说话的情况。", "There are situations where you need to speak formally.", "138", "단어장", ["collocation:격식을 차리다"]],
    ["제안", "提案，建议", "名词", "proposal; suggestion", "noun", "회의에서 자신의 의견과 제안을 말했어요.", "在会议上说了自己的意见和建议。", "She gave her opinion and proposal in the meeting.", "138", "단어장", ["collocation:제안을 하다"]],
    ["띄어쓰기", "分写，空格规则", "名词", "word spacing", "noun", "아직도 띄어쓰기가 어려워요.", "分写到现在还是很难。", "Spacing words is still difficult.", "138", "발음", ["pronunciation:띄어쓰기[띠어쓰기]"]],
    ["무늬", "花纹，图案", "名词", "pattern", "noun", "무늬가 많은 옷을 자주 입어요.", "经常穿有很多图案的衣服。", "I often wear clothes with many patterns.", "138", "발음", ["pronunciation:무늬[무니]"]],
    ["희망", "希望", "名词", "hope", "noun", "희망을 갖고 노력하면 언젠가는 잘될 거예요.", "带着希望努力的话，总有一天会顺利。", "If you keep hope and try, things will go well someday.", "138", "발음", ["pronunciation:희망[히망]"]],
    ["재치가 있다", "机智，有巧思", "形容词短语", "to be witty", "adjective phrase", "신조어에는 재치가 있는 표현이 많아요.", "新词中有很多机智的表达。", "There are many witty expressions among new words.", "139", "읽기 전", ["collocation:재치가 있다"]],
    ["새로운 현상", "新现象", "名词短语", "new phenomenon", "noun phrase", "신조어는 새로운 현상을 표현할 수 있어요.", "新词可以表达新现象。", "New words can express new phenomena.", "139", "읽기 전", ["collocation:새로운 현상"]],
    ["쉽게 공감하다", "容易产生共鸣", "动词短语", "to relate easily", "verb phrase", "몇몇 신조어는 쉽게 공감할 수 있어요.", "有些新词很容易产生共鸣。", "Some new words are easy to relate to.", "139", "읽기 전", ["collocation:쉽게 공감하다"]],
    ["젊은 세대", "年轻一代", "名词短语", "younger generation", "noun phrase", "신조어를 알면 젊은 세대와 소통이 잘돼요.", "了解新词的话，和年轻一代沟通会更顺利。", "Knowing new words helps communication with the younger generation.", "139", "읽기 전", ["collocation:젊은 세대"]],
    ["언어가 파괴되다", "语言被破坏", "动词短语", "for language to be damaged", "verb phrase", "신조어 때문에 언어가 파괴된다고 생각하는 사람도 있어요.", "也有人认为新词会破坏语言。", "Some people think language is damaged by new words.", "139", "읽기 전", ["collocation:언어가 파괴되다"]],
    ["의미가 확실하지 않다", "意思不明确", "形容词短语", "meaning is unclear", "adjective phrase", "의미가 확실하지 않아서 혼란을 일으킬 수 있어요.", "因为意思不明确，可能引起混乱。", "Because the meaning is unclear, it can cause confusion.", "139", "읽기 전", ["collocation:의미가 확실하다"]],
    ["혼란을 일으키다", "引起混乱", "动词短语", "to cause confusion", "verb phrase", "신조어는 혼란을 일으킬 수 있어요.", "新词可能引起混乱。", "New words can cause confusion.", "139", "읽기 전", ["collocation:혼란을 일으키다"]],
    ["소통 단절을 유발하다", "导致沟通断绝", "动词短语", "to cause communication breakdown", "verb phrase", "신조어는 세대 간의 소통 단절을 유발할 수 있어요.", "新词可能导致代际沟通断绝。", "New words can cause communication breakdown between generations.", "139", "읽기 전", ["collocation:소통 단절을 유발하다"]],
    ["기성세대", "老一代，既成世代", "名词", "older generation", "noun", "기성세대도 신조어를 많이 알면 소통이 잘될 수 있어요.", "老一代如果也了解很多新词，沟通可能更顺畅。", "If the older generation knows many new words, communication can improve.", "139", "읽기", ["collocation:기성세대"]],
    ["무분별하게", "不加区分地，滥用地", "副词", "indiscriminately", "adverb", "신조어를 무분별하게 사용하는 것은 문제예요.", "滥用新词是个问题。", "Using new words indiscriminately is a problem.", "139", "읽기 전", ["collocation:무분별하게 사용하다"]],
    ["급변하다", "急剧变化", "动词", "to change rapidly", "verb", "사회가 급변하니까 새로운 표현이 필요해요.", "社会急剧变化，所以需要新的表达。", "Society changes rapidly, so new expressions are needed.", "140", "읽기", ["collocation:사회가 급변하다"]],
    ["반영하다", "反映", "动词", "to reflect", "verb", "신조어는 급변하는 사회의 특징을 반영해요.", "新词反映急剧变化的社会特征。", "New words reflect the features of a rapidly changing society.", "140", "읽기", ["collocation:특징을 반영하다"]],
    ["세대 차이", "代沟，世代差异", "名词", "generation gap", "noun", "신조어 때문에 세대 차이를 느낀 적이 있어요.", "曾因新词感到过代沟。", "I have felt a generation gap because of new words.", "140", "읽기", ["collocation:세대 차이를 느끼다"]],
    ["출현", "出现", "名词", "appearance; emergence", "noun", "전문가들은 신조어의 출현이 자연스러운 현상이라고 봐요.", "专家认为新词的出现是自然现象。", "Experts see the emergence of new words as a natural phenomenon.", "140", "읽기", ["collocation:신조어의 출현"]],
    ["인정하다", "承认，认可", "动词", "to acknowledge", "verb", "전문가들은 신조어의 출현을 인정해요.", "专家认可新词的出现。", "Experts acknowledge the emergence of new words.", "140", "읽기", ["collocation:인정하다"]],
    ["의사소통", "沟通", "名词", "communication", "noun", "무분별한 신조어 사용은 의사소통의 어려움을 가져와요.", "滥用新词会带来沟通困难。", "Indiscriminate use of new words creates communication difficulties.", "140", "읽기", ["collocation:의사소통의 어려움"]],
    ["지적하다", "指出", "动词", "to point out", "verb", "전문가들은 무분별한 사용이 문제라고 지적해요.", "专家指出滥用是问题。", "Experts point out that indiscriminate use is a problem.", "140", "읽기", ["collocation:문제라고 지적하다"]],
    ["칼럼", "专栏", "名词", "column", "noun", "신조어 사용에 대한 칼럼을 읽었어요.", "读了关于新词使用的专栏。", "I read a column about the use of new words.", "140", "단어장", ["collocation:칼럼"]],
    ["배경", "背景", "名词", "background", "noun", "신조어가 등장하게 된 배경을 설명해 보세요.", "请说明新词出现的背景。", "Explain the background of why new words appeared.", "140", "단어장", ["collocation:배경"]],
    ["적절하다", "恰当", "形容词", "appropriate", "adjective", "신조어는 새로운 현상을 적절하게 표현할 수 있어요.", "新词可以恰当地表达新现象。", "New words can appropriately express new phenomena.", "140", "단어장", ["collocation:적절하게 표현하다"]],
    ["미디어", "媒体", "名词", "media", "noun", "미디어나 보고서에서는 신조어 사용을 조심해야 해요.", "在媒体或报告中应谨慎使用新词。", "New words should be used carefully in media or reports.", "140", "단어장", ["collocation:미디어"]],
    ["지양하다", "避免，尽量不做", "动词", "to avoid; refrain from", "verb", "공식적인 상황에서는 신조어 사용을 지양하는 것이 바람직해요.", "在正式场合最好避免使用新词。", "It is desirable to avoid new words in formal situations.", "140", "단어장", ["collocation:지양하다"]],
    ["속담", "俗语，谚语", "名词", "proverb", "noun", "속담에는 한국인의 사고방식이 담겨 있어요.", "俗语中包含韩国人的思维方式。", "Proverbs contain Koreans' way of thinking.", "142", "문화와 정보", ["collocation:속담"]],
    ["가르침", "教诲，教导", "名词", "teaching; lesson", "noun", "속담은 인생에 대한 가르침을 간결하게 표현해요.", "俗语简洁地表达人生教诲。", "Proverbs concisely express lessons about life.", "142", "문화와 정보", ["collocation:가르침"]],
    ["간결하게", "简洁地", "副词", "concisely", "adverb", "속담은 교훈을 간결하게 표현하는 말이에요.", "俗语是简洁表达教训的话。", "A proverb is a saying that expresses a lesson concisely.", "142", "문화와 정보", ["collocation:간결하게 표현하다"]],
    ["교훈", "教训", "名词", "lesson", "noun", "속담에는 오랜 경험을 통해 얻은 교훈이 담겨 있어요.", "俗语中包含通过长期经验得到的教训。", "Proverbs contain lessons gained through long experience.", "142", "문화와 정보", ["collocation:교훈"]],
    ["사고방식", "思维方式", "名词", "way of thinking", "noun", "속담에는 한국인의 사고방식이 반영되어 있어요.", "俗语中反映了韩国人的思维方式。", "Koreans' way of thinking is reflected in proverbs.", "142", "문화와 정보", ["collocation:사고방식"]],
    ["행동 양식", "行为方式", "名词短语", "behavior pattern", "noun phrase", "속담에는 행동 양식도 담겨 있어요.", "俗语中也包含行为方式。", "Proverbs also contain patterns of behavior.", "142", "문화와 정보", ["collocation:행동 양식"]],
    ["가는 말이 고와야 오는 말이 곱다", "话说得好听，回话才好听", "俗语", "Kind words bring kind words", "proverb", "가는 말이 고와야 오는 말이 고운 법이에요.", "自己话说得好听，对方的话才会好听。", "Kind words tend to bring kind words in return.", "142", "문화와 정보", ["proverb:가는 말이 고와야 오는 말이 곱다"]],
    ["말 한마디에 천 냥 빚도 갚는다", "一句话也能还千两债", "俗语", "A single word can repay a huge debt", "proverb", "말 한마디에 천 냥 빚도 갚는다는 속담이 있어요.", "有“一句话也能还千两债”的俗语。", "There is a proverb saying that one word can repay a huge debt.", "142", "문화와 정보", ["proverb:말 한마디에 천 냥 빚도 갚는다"]],
    ["말이 씨가 된다", "话会成真", "俗语", "Words become seeds", "proverb", "나쁜 말은 하지 마세요. 말이 씨가 될 수 있어요.", "不要说不好的话，话可能会成真。", "Do not say bad things; words can become seeds.", "142", "문화와 정보", ["proverb:말이 씨가 된다"]],
    ["발 없는 말이 천 리 간다", "话没脚也能传千里", "俗语", "Words without feet travel a thousand ri", "proverb", "소문은 빨리 퍼져요. 발 없는 말이 천 리 간다고 하잖아요.", "传闻传得很快，不是说话没脚也能传千里吗？", "Rumors spread fast; words without feet travel far.", "142", "문화와 정보", ["proverb:발 없는 말이 천 리 간다"]],
    ["호랑이도 제 말 하면 온다", "说曹操曹操到", "俗语", "Speak of the tiger and it appears", "proverb", "호랑이도 제 말 하면 온다고 하더니 그 사람이 왔어요.", "真是说曹操曹操到，那个人来了。", "Speak of the tiger and it appears; that person came.", "142", "문화와 정보", ["proverb:호랑이도 제 말 하면 온다"]],
    ["낮말은 새가 듣고 밤말은 쥐가 듣는다", "白天的话鸟听，夜里的话老鼠听", "俗语", "Birds hear daytime words and mice hear nighttime words", "proverb", "말을 조심하세요. 낮말은 새가 듣고 밤말은 쥐가 들어요.", "说话要小心。白天的话鸟听，夜里的话老鼠听。", "Be careful what you say; birds hear daytime words and mice hear nighttime words.", "142", "문화와 정보", ["proverb:낮말은 새가 듣고 밤말은 쥐가 듣는다"]],
    ["입은 삐뚤어져도 말은 바로 해라", "嘴歪也要把话说正", "俗语", "Even if your mouth is crooked, speak straight", "proverb", "어떤 상황에서도 말은 바로 해야 해요.", "任何情况下都要把话说正。", "In any situation, you should speak truthfully.", "142", "문화와 정보", ["proverb:입은 삐뚤어져도 말은 바로 해라"]],
    ["같은 말이라도 아 다르고 어 다르다", "同一句话，说法不同感觉不同", "俗语", "Even the same words differ depending on wording", "proverb", "같은 말이라도 아 다르고 어 다르니까 부드럽게 말하세요.", "同一句话说法不同感觉不同，所以请说得柔和些。", "Even the same words feel different depending on wording, so speak gently.", "142", "문화와 정보", ["proverb:같은 말이라도 아 다르고 어 다르다"]],
    ["호칭", "称呼", "名词", "title; form of address", "noun", "상황에 맞는 호칭을 써야 해요.", "应该使用符合情况的称呼。", "You should use a title appropriate to the situation.", "143", "배운 어휘 확인", ["collocation:호칭"]],
    ["파괴", "破坏", "名词", "destruction; damage", "noun", "신조어 사용이 언어 파괴로 이어질 수 있어요.", "使用新词可能导致语言破坏。", "Using new words can lead to damage to language.", "143", "배운 어휘 확인", ["collocation:언어 파괴"]],
    ["단절", "断绝，中断", "名词", "breakdown; disconnection", "noun", "세대 간의 소통 단절이 생길 수 있어요.", "可能产生代际沟通断绝。", "Communication breakdown between generations can occur.", "143", "배운 어휘 확인", ["collocation:소통 단절"]],
    ["유발하다", "诱发，导致", "动词", "to cause; trigger", "verb", "혼란을 유발할 수 있어요.", "可能导致混乱。", "It can cause confusion.", "143", "배운 어휘 확인", ["collocation:유발하다"]]
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
  window.lessonGuideL4LessonChunks["l4-10"] = {
    id: "l4-10",
    number: 10,
    titleKo: "언어생활",
    titleZh: "语言生活",
    pages: "132-143",
    status: "draft",
    progress: {
      vocabulary: "draft-p132-p143",
      dialogue: "draft-p135-p137",
      culture: "draft-p142",
      practice: "draft-p135-p142"
    },
    vocabularySources: [
      { page: 132, label: "단원 제목", note: "课题、学习目标和核心主题" },
      { page: 134, label: "어휘", note: "正确语言生活和韩语使用困难" },
      { page: 135, label: "문법 1", note: "V-고 말다 和非意图结果表达" },
      { page: 136, label: "문법 2", note: "V-는 척하다 / A-(으)ㄴ 척하다 和假装表达" },
      { page: 137, label: "말하기", note: "韩语使用困难对话" },
      { page: 138, label: "듣기/발음", note: "会议沟通问题与发音练习" },
      { page: 139, label: "읽기 전", note: "新词使用的正反观点" },
      { page: 140, label: "읽기", note: "신조어 사용 칼럼" },
      { page: 142, label: "문화와 정보", note: "与语言相关的韩国俗语" },
      { page: 143, label: "배운 어휘 확인", note: "本课复习词汇补充" }
    ],
    goals: [
      "能说明使用韩语时遇到的困难。",
      "能用 V-고 말다 表达非本意但最终发生的结果。",
      "能用 V-는 척하다 / A-(으)ㄴ 척하다 表达假装做某事或假装某种状态。",
      "能阅读新词使用相关文章，并理解与语言相关的韩国俗语。"
    ],
    grammar: [
      {
        pattern: "V-고 말다",
        zh: "终于……；结果还是……",
        guide: "表示某件事最终发生，常带有说话人没打算这样、遗憾或无法避免的语气。",
        examples: [
          { ko: "면접관 질문을 잘못 이해해서 동문서답하고 말았어요.", zh: "因为误解了面试官的问题，结果答非所问了。" },
          { ko: "담배를 끊으려고 결심했지만 결국 다시 피우고 말았다.", zh: "虽然下决心戒烟，但结果还是又抽了。" }
        ],
        translations: {
          en: {
            meaning: "end up doing...; ultimately do...",
            guide: "Shows that something ultimately happened, often with regret, lack of intention, or inevitability."
          }
        }
      },
      {
        pattern: "V-는 척하다 / A-(으)ㄴ 척하다",
        zh: "假装……",
        guide: "表示把某种行动或状态装作真的一样。动词用 -는 척하다，形容词多用 -(으)ㄴ 척하다。",
        examples: [
          { ko: "나가기 싫어서 바쁜 척했어요.", zh: "因为不想出去，所以假装很忙。" },
          { ko: "모르는 유행어가 많은데 그냥 따라 하면서 아는 척해요.", zh: "有很多不懂的流行语，但就跟着说，假装知道。" }
        ],
        translations: {
          en: {
            meaning: "pretend to...",
            guide: "Means pretending that an action or state is real. Verbs use -는 척하다, while adjectives usually use -(으)ㄴ 척하다."
          }
        }
      }
    ],
    vocabulary,
    dialogues: [
      {
        id: "dialogue-01",
        title: "동문서답하고 말았어요",
        page: 135,
        source: "문법 1 대화",
        focus: "V-고 말다",
        sceneZh: "아나이스 询问 제이슨 面试结果，제이슨 说因为误解面试官问题，结果答非所问了。",
        learningPoints: [
          "동문서답하고 말았어요 表示不是本意，但最终发生了答非所问的结果。",
          "질문을 잘못 이해하다 是说明沟通失误原因的常用表达。"
        ],
        lines: [
          { speaker: "아나이스", ko: "어제 면접 본다고 했는데 잘 봤어요?", zh: "你说昨天要面试，面得好吗？", guide: "면접을 보다 是“参加面试”。" },
          { speaker: "제이슨", ko: "아니요, 면접관 질문을 잘못 이해해서 동문서답하고 말았어요.", zh: "没有。我误解了面试官的问题，结果答非所问了。", guide: "-고 말았어요 带有遗憾和“结果还是发生了”的语气。" }
        ],
        rolePlays: [
          { title: "면접 결과 묻기", promptZh: "问对方昨天面试面得怎么样。", answerKo: "어제 면접 본다고 했는데 잘 봤어요?" },
          { title: "실수 말하기", promptZh: "说误解了面试官问题，结果答非所问了。", answerKo: "면접관 질문을 잘못 이해해서 동문서답하고 말았어요." }
        ],
        drills: [
          { pattern: "V-고 말다", promptZh: "说“太累了，结果睡着了”。", answerKo: "너무 피곤해서 잠이 들고 말았어요." },
          { pattern: "V-고 말다", promptZh: "说“因为发音不准确，人们结果听错了”。", answerKo: "발음이 부정확해서 사람들이 잘못 알아듣고 말았어요." }
        ],
        translations: {
          en: {
            scene: "Anais asks Jason about his interview, and Jason says he misunderstood the interviewer's question and ended up giving an irrelevant answer.",
            learningPoints: [
              "동문서답하고 말았어요 expresses an unintended and regretful result.",
              "질문을 잘못 이해하다 is a common expression for explaining a communication mistake."
            ]
          }
        }
      },
      {
        id: "dialogue-02",
        title: "아는 척해요",
        page: 136,
        source: "문법 2 대화",
        focus: "V-는 척하다 / A-(으)ㄴ 척하다",
        sceneZh: "고천 和 라민 谈到流行语变化太快，라민 说自己有很多不懂的流行语，但会跟着说并假装知道。",
        learningPoints: [
          "아는 척해요 表示其实不知道，但装作知道。",
          "유행어가 빨리 바뀌다 是语言生活中新词变化快的表达。"
        ],
        lines: [
          { speaker: "고천", ko: "요즘은 유행어가 빨리 바뀌어서 무슨 말인지 이해를 잘 못하겠어요.", zh: "最近流行语变化太快，我不太能理解是什么意思。", guide: "무슨 말인지 이해를 못하다 表示听不懂表达含义。" },
          { speaker: "라민", ko: "저도 모르는 유행어가 많은데 그냥 따라 하면서 아는 척해요.", zh: "我也有很多不懂的流行语，但就跟着说，假装知道。", guide: "아는 척하다 是“假装知道”。" }
        ],
        rolePlays: [
          { title: "어려움 말하기", promptZh: "说最近流行语变化太快，不懂是什么意思。", answerKo: "요즘은 유행어가 빨리 바뀌어서 무슨 말인지 이해를 잘 못하겠어요." },
          { title: "척하다 말하기", promptZh: "说有很多不懂的流行语，但假装知道。", answerKo: "모르는 유행어가 많은데 아는 척해요." }
        ],
        drills: [
          { pattern: "A-(으)ㄴ 척하다", promptZh: "说“不想出去，所以假装很忙”。", answerKo: "나가기 싫어서 바쁜 척했어요." },
          { pattern: "V-는 척하다", promptZh: "说“广告电话打来时，假装完全不会韩语”。", answerKo: "광고 전화를 받았을 때 한국어를 전혀 못하는 척해요." }
        ],
        translations: {
          en: {
            scene: "Gocheon and Ramin talk about how quickly trendy expressions change, and Ramin says he often pretends to know buzzwords he does not understand.",
            learningPoints: [
              "아는 척해요 means pretending to know something one actually does not know.",
              "유행어가 빨리 바뀌다 describes how trendy expressions change quickly."
            ]
          }
        }
      },
      {
        id: "dialogue-03",
        title: "한국어가 점점 더 어려워지는 것 같아요",
        page: 137,
        source: "말하기 대화",
        focus: "한국어 사용의 어려움",
        sceneZh: "라민 和 이링 讨论在韩国生活久了之后，韩语反而感觉越来越难，尤其是词汇想不起来和夹杂母语的问题。",
        learningPoints: [
          "오래 살수록 ... 어려워지다 表示“住得越久越难”。",
          "의도한 대로 말이 잘 안 나오다 是表达口语卡壳的自然说法。",
          "마음이 급하면 모국어를 섞어 쓰다 可以描述紧张时夹杂母语。"
        ],
        lines: [
          { speaker: "라민", ko: "이링 씨는 한국에 온 지 오래돼서 이제 적응이 다 됐죠?", zh: "이링，你来韩国很久了，现在都适应了吧？", guide: "-은 지 오래되다 表示做某事已经很久。" },
          { speaker: "이링", ko: "생활하는 건 괜찮은데 오래 살수록 한국어가 점점 더 어려워지는 것 같아요.", zh: "生活方面还可以，但住得越久，韩语好像越来越难。", guide: "오래 살수록 表示“住得越久”。" },
          { speaker: "라민", ko: "그래요? 저는 이링 씨 한국어가 유창해서 항상 부러웠는데요.", zh: "是吗？我一直觉得你的韩语很流利，很羡慕呢。", guide: "유창해서 부러웠다 是称赞对方语言能力的表达。" },
          { speaker: "이링", ko: "어휘나 문법은 많이 알아도 의도한 대로 말이 잘 안 나올 때가 많아요.", zh: "即使知道很多词汇和语法，也经常无法按自己的意图说出来。", guide: "의도한 대로 말이 나오다 是“按想法说出来”。" },
          { speaker: "라민", ko: "저도 그래요. 단어가 잘 안 떠오를 때가 많고 마음이 급하면 모국어를 섞어 쓰기도 해요. 그럴 때마다 좀 부끄러워요.", zh: "我也这样。经常想不起单词，着急时也会夹杂母语使用。每到那种时候都有点惭愧。", guide: "그럴 때마다 表示每当那种情况发生。" },
          { speaker: "이링", ko: "계속 노력하면 점점 더 나아지겠죠? 같이 노력해 봐요.", zh: "继续努力的话会越来越好吧？一起努力吧。", guide: "나아지겠죠? 带有期待和自我鼓励。" }
        ],
        rolePlays: [
          { title: "어려움 말하기", promptZh: "说即使知道词汇和语法，也常常无法按自己的意图说出来。", answerKo: "어휘나 문법은 많이 알아도 의도한 대로 말이 잘 안 나올 때가 많아요." },
          { title: "격려하기", promptZh: "说继续努力的话会越来越好，一起努力吧。", answerKo: "계속 노력하면 점점 더 나아지겠죠? 같이 노력해 봐요." }
        ],
        drills: [
          { pattern: "어려움 설명", promptZh: "说“想不起单词时，会夹杂母语使用”。", answerKo: "단어가 잘 안 떠오를 때 모국어를 섞어 쓰기도 해요." },
          { pattern: "-을수록", promptZh: "说“越学习韩语，越觉得有趣”。", answerKo: "한국어를 배울수록 재미있는 것 같아요." }
        ],
        translations: {
          en: {
            scene: "Ramin and Yiling discuss how Korean feels more difficult the longer they live in Korea, especially when words do not come to mind and they mix in their native language.",
            learningPoints: [
              "오래 살수록 ... 어려워지다 means it gets harder the longer one lives there.",
              "의도한 대로 말이 잘 안 나오다 naturally describes struggling to express what one intends.",
              "마음이 급하면 모국어를 섞어 쓰다 describes mixing in one's native language when rushed."
            ]
          }
        }
      }
    ],
    culture: {
      titleKo: "말과 관련된 한국 속담",
      titleZh: "与语言相关的韩国俗语",
      page: 142,
      summaryZh: "文章介绍韩国俗语的意义，并说明韩国人传统上重视语言价值，因此有很多与说话、谨言慎行和表达方式相关的俗语。",
      keyTerms: [
        { ko: "속담", zh: "从古代流传下来的、简洁表达人生教训的话", translations: { en: { meaning: "traditional sayings that concisely express life lessons" } } },
        { ko: "말의 가치", zh: "韩国文化中被重视的语言价值和说话方式", translations: { en: { meaning: "the value of words and speech emphasized in Korean culture" } } },
        { ko: "말을 조심해서 하다", zh: "说话要小心，不随意传播或伤害别人", translations: { en: { meaning: "to speak carefully and avoid careless or harmful words" } } }
      ],
      paragraphs: [
        {
          ko: "속담은 예로부터 전해 오는 인생에 대한 가르침을 간결하게 표현하는 말이다. 속담은 오랜 인생 경험을 통해 얻은 교훈으로서, 그 안에는 한국인의 사고방식과 행동 양식이 담겨 있다.",
          zh: "俗语是从古代流传下来的、简洁表达人生教诲的话。俗语是通过长久人生经验得到的教训，其中包含韩国人的思维方式和行为方式。",
          guide: "第一段说明俗语的定义：它不是单纯的短句，而是浓缩了经验、教训和文化观念。",
          translations: {
            en: {
              translation: "Proverbs are sayings passed down from long ago that concisely express teachings about life. They are lessons gained through long life experience, and they contain Koreans' ways of thinking and patterns of behavior.",
              guide: "The first paragraph defines proverbs as condensed lessons and cultural ideas, not just short sayings."
            }
          }
        },
        {
          ko: "한국인들은 전통적으로 말의 가치를 중요하게 여겼다. 그래서 말과 관련된 속담이 특히 많고 현대인들에게도 아주 친숙하게 사용되고 있다. 예를 들어 '가는 말이 고와야 오는 말이 곱다', '말 한마디에 천 냥 빚도 갚는다', '말이 씨가 된다'와 같은 속담에는 말을 중시하는 한국인의 사고방식이 반영되어 있다.",
          zh: "韩国人传统上重视语言的价值。因此，与语言相关的俗语特别多，现代人也非常熟悉并经常使用。例如“话说得好听，回话才好听”“一句话也能还千两债”“话会成真”等俗语中，反映了韩国人重视语言的思维方式。",
          guide: "第二段强调“话的重要性”：说话方式会影响关系，也反映韩国文化中对语言力量的重视。",
          translations: {
            en: {
              translation: "Koreans have traditionally considered the value of words important. For that reason, there are especially many proverbs related to speech, and they are still very familiar to people today. For example, proverbs such as 'Kind words bring kind words,' 'One word can repay a huge debt,' and 'Words become seeds' reflect Koreans' way of thinking that values speech.",
              guide: "The second paragraph emphasizes the importance of words and how speech affects relationships."
            }
          }
        },
        {
          ko: "한편 '발 없는 말이 천 리 간다'는 속담이나 '호랑이도 제 말 하면 온다', '낮말은 새가 듣고 밤말은 쥐가 듣는다'는 속담처럼 말을 할 때는 조심해서 하라는 교훈이 담긴 속담도 많다. 이 밖에 어떤 상황에서든지 말은 언제나 바르게 하고 가려서 해야 한다는 의미가 담긴 '입은 삐뚤어져도 말은 바로 해라', '같은 말이라도 아 다르고 어 다르다'라는 속담이 있다.",
          zh: "另一方面，也有很多俗语像“话没脚也能传千里”“说曹操曹操到”“白天的话鸟听，夜里的话老鼠听”一样，包含说话时要小心的教训。除此之外，还有“嘴歪也要把话说正”“同一句话，说法不同感觉不同”等俗语，表达无论什么情况都要把话说得正确、谨慎、得体。",
          guide: "第三段说明“谨言慎行”：话会传播，也可能伤人，所以不仅内容要对，表达方式也要合适。",
          translations: {
            en: {
              translation: "Meanwhile, many proverbs contain the lesson that people should be careful when they speak, such as 'Words without feet travel a thousand ri,' 'Speak of the tiger and it appears,' and 'Birds hear daytime words and mice hear nighttime words.' In addition, there are proverbs such as 'Even if your mouth is crooked, speak straight' and 'Even the same words differ depending on wording,' which mean that in any situation people should speak correctly and choose their words carefully.",
              guide: "The third paragraph teaches careful speech: words spread and can hurt people, so both content and wording matter."
            }
          }
        }
      ],
      questions: [
        {
          q: "한국에 말과 관련된 속담이 많은 이유가 무엇입니까?",
          zh: "韩国有很多与语言相关的俗语，原因是什么？",
          answerZh: "因为韩国人传统上重视语言的价值，认为说话方式和人际关系、思维方式密切相关。",
          translations: {
            en: {
              translation: "Why are there many Korean proverbs related to speech?",
              answer: "Because Koreans have traditionally valued words and considered speech closely related to relationships and ways of thinking."
            }
          }
        },
        {
          q: "'말을 조심해서 하라'는 의미가 담긴 속담에는 어떤 것들이 있습니까?",
          zh: "包含“说话要小心”意义的俗语有哪些？",
          answerZh: "例如“话没脚也能传千里”“说曹操曹操到”“白天的话鸟听，夜里的话老鼠听”等。",
          translations: {
            en: {
              translation: "Which proverbs contain the meaning 'be careful when speaking'?",
              answer: "Examples include 'Words without feet travel a thousand ri,' 'Speak of the tiger and it appears,' and 'Birds hear daytime words and mice hear nighttime words.'"
            }
          }
        },
        {
          q: "여러분 고향에는 말과 관련된 속담으로 무슨 속담이 있습니까?",
          zh: "你的家乡有哪些与语言相关的俗语？",
          answerZh: "可以介绍家乡中提醒人谨慎说话、说好话或不要随便传播消息的俗语，并说明它的意思。",
          translations: {
            en: {
              translation: "What proverbs related to speech exist in your hometown?",
              answer: "You can introduce proverbs from your hometown that warn people to speak carefully, use kind words, or avoid spreading things carelessly, and explain their meaning."
            }
          }
        }
      ],
      translations: {
        en: {
          title: "Korean Proverbs Related to Speech",
          summary: "The article introduces the meaning of Korean proverbs and explains that Koreans have traditionally valued speech, so many proverbs teach the importance of words, careful speech, and appropriate wording."
        }
      }
    },
    practice: [
      {
        type: "grammar",
        title: "V-고 말다",
        promptZh: "用 -고 말다 说：因为误解了面试官的问题，结果答非所问了。",
        answerKo: "면접관 질문을 잘못 이해해서 동문서답하고 말았어요.",
        translations: {
          en: {
            title: "V-고 말다",
            prompt: "Use -고 말다: I misunderstood the interviewer's question and ended up giving an irrelevant answer.",
            answer: "면접관 질문을 잘못 이해해서 동문서답하고 말았어요."
          }
        }
      },
      {
        type: "grammar",
        title: "V-는 척하다 / A-(으)ㄴ 척하다",
        promptZh: "用 -는 척하다 说：不想接的电话打来时，假装很忙。",
        answerKo: "받기 싫은 전화를 받았을 때 바쁜 척해요.",
        translations: {
          en: {
            title: "Pretending",
            prompt: "Use 척하다: When I get a call I do not want to answer, I pretend to be busy.",
            answer: "받기 싫은 전화를 받았을 때 바쁜 척해요."
          }
        }
      },
      {
        type: "speaking",
        title: "한국어 사용의 어려움",
        promptZh: "说：即使知道很多词汇和语法，也常常无法按自己的意图说出来。",
        answerKo: "어휘나 문법은 많이 알아도 의도한 대로 말이 잘 안 나올 때가 많아요.",
        translations: {
          en: {
            title: "Difficulties Using Korean",
            prompt: "Say: Even if I know a lot of vocabulary and grammar, my words often do not come out as intended.",
            answer: "어휘나 문법은 많이 알아도 의도한 대로 말이 잘 안 나올 때가 많아요."
          }
        }
      },
      {
        type: "reading",
        title: "신조어 사용 칼럼",
        promptZh: "阅读题：新词出现的背景是什么？",
        answerKo: "과거에는 없었던 것들을 표현하고 급변하는 사회의 특징을 반영하기 위해 신조어가 등장했습니다.",
        translations: {
          en: {
            title: "Column on New Words",
            prompt: "Reading: What is the background behind the emergence of new words?",
            answer: "과거에는 없었던 것들을 표현하고 급변하는 사회의 특징을 반영하기 위해 신조어가 등장했습니다."
          }
        }
      },
      {
        type: "culture",
        title: "말과 관련된 한국 속담",
        promptZh: "文化题：包含“说话要小心”意义的韩国俗语有哪些？",
        answerKo: "발 없는 말이 천 리 간다, 호랑이도 제 말 하면 온다, 낮말은 새가 듣고 밤말은 쥐가 듣는다 등이 있습니다.",
        translations: {
          en: {
            title: "Korean Proverbs Related to Speech",
            prompt: "Culture: Which Korean proverbs mean that people should speak carefully?",
            answer: "발 없는 말이 천 리 간다, 호랑이도 제 말 하면 온다, 낮말은 새가 듣고 밤말은 쥐가 듣는다 등이 있습니다."
          }
        }
      }
    ],
    translations: {
      en: {
        title: "Language Life",
        goals: [
          "Explain difficulties in using Korean.",
          "Use V-고 말다 to express an unintended result that ultimately happened.",
          "Use V-는 척하다 / A-(으)ㄴ 척하다 to express pretending to do something or be in a certain state.",
          "Read about new word usage and understand Korean proverbs related to speech."
        ]
      }
    }
  };
})();
