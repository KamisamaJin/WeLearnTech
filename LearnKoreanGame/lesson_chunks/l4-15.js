(() => {
  const makeTips = (tips) => (tips || []).map((text) => {
    const [type, body] = text.includes(":") ? text.split(/:(.+)/) : ["collocation", text];
    return { type, text: body.trim() };
  });

  const vocabulary = [
    ["법과 질서", "法律和秩序", "名词短语", "law and order", "noun phrase", "법과 질서는 함께 사는 사회의 기본이에요.", "法律和秩序是共同生活社会的基础。", "Law and order are the foundation of a shared society.", "192", "단원 제목", ["collocation:법과 질서"]],
    ["규칙과 법", "规则和法律", "名词短语", "rules and laws", "noun phrase", "이번 과에서는 규칙과 법을 배워요.", "本课学习规则和法律。", "In this lesson, we study rules and laws.", "192", "단원 제목", ["collocation:규칙과 법"]],
    ["법규", "法规", "名词", "law; regulation", "noun", "법규를 지키는 생활이 중요해요.", "遵守法规的生活很重要。", "A life that follows laws and regulations is important.", "192", "단원 제목", ["collocation:법규를 지키다"]],
    ["준법 생활", "守法生活", "名词短语", "law-abiding life", "noun phrase", "준법 생활의 필요성에 대해 써 보세요.", "请写一写守法生活的必要性。", "Write about the need for a law-abiding life.", "192", "단원 제목", ["collocation:준법 생활"]],
    ["생활 법령 정보", "生活法令信息", "名词短语", "daily-life legal information", "noun phrase", "생활 법령 정보를 쉽게 찾아볼 수 있어요.", "可以方便地查找生活法令信息。", "You can easily look up daily-life legal information.", "192", "문화와 정보", ["collocation:생활 법령 정보"]],
    ["질서", "秩序", "名词", "order", "noun", "사람들이 줄을 서서 질서를 지켜요.", "人们排队遵守秩序。", "People line up and keep order.", "194", "어휘", ["collocation:질서를 지키다"]],
    ["질서를 지키다", "遵守秩序", "动词短语", "to keep order", "verb phrase", "버스를 탈 때 질서를 지켜야 해요.", "乘公交时要遵守秩序。", "You should keep order when taking the bus.", "194", "어휘", ["collocation:질서를 지키다"]],
    ["범죄", "犯罪", "名词", "crime", "noun", "범죄를 저지르면 처벌을 받아요.", "犯罪的话会受到处罚。", "If someone commits a crime, they are punished.", "194", "어휘", ["collocation:범죄를 저지르다"]],
    ["저지르다", "犯，做坏事", "动词", "to commit", "verb", "범죄를 저지르면 안 돼요.", "不能犯罪。", "You must not commit a crime.", "194", "어휘", ["collocation:범죄를 저지르다"]],
    ["법/법규를 위반하다", "违反法律/法规", "动词短语", "to violate a law or regulation", "verb phrase", "신호를 어기면 법규를 위반하는 거예요.", "违反信号就是违反法规。", "If you ignore a traffic signal, you violate a regulation.", "194", "어휘", ["collocation:법규를 위반하다"]],
    ["위반하다", "违反", "动词", "to violate", "verb", "저작권법을 위반하면 처벌을 받을 수 있어요.", "违反著作权法可能会受到处罚。", "If you violate copyright law, you may be punished.", "194", "어휘", ["collocation:법을 위반하다"]],
    ["범칙금/벌금", "罚款", "名词", "fine; penalty", "noun", "법규를 위반하면 범칙금이나 벌금을 내야 해요.", "违反法规的话要缴纳罚款。", "If you violate regulations, you must pay a fine.", "194", "어휘", ["collocation:벌금을 내다"]],
    ["범칙금을 내다", "缴纳罚款", "动词短语", "to pay a penalty", "verb phrase", "주정차 금지 구역에 차를 세워서 범칙금을 냈어요.", "因为把车停在禁止停车区域，所以交了罚款。", "I paid a penalty because I parked in a no-parking zone.", "194", "어휘", ["collocation:범칙금을 내다"]],
    ["처벌", "处罚", "名词", "punishment", "noun", "모든 범죄 행위에는 처벌이 뒤따라요.", "所有犯罪行为都会伴随处罚。", "Punishment follows every criminal act.", "194", "어휘", ["collocation:처벌을 받다"]],
    ["처벌을 받다", "受到处罚", "动词短语", "to be punished", "verb phrase", "잘못한 사람은 처벌을 받는 법이에요.", "做错事的人按理会受到处罚。", "People who do wrong are bound to be punished.", "194", "어휘", ["collocation:처벌을 받다"]],
    ["불법", "非法", "名词/冠形词", "illegal; illegality", "noun/determiner", "불법 촬영은 범죄 행위입니다.", "非法拍摄是犯罪行为。", "Illegal filming is a criminal act.", "194", "어휘", ["collocation:불법 촬영"]],
    ["불법 촬영", "非法拍摄", "名词短语", "illegal filming", "noun phrase", "영화관에서 불법 촬영을 하면 안 돼요.", "在电影院不能非法拍摄。", "You must not film illegally in a movie theater.", "194", "안내문", ["collocation:불법 촬영"]],
    ["신고 전화", "举报电话", "名词短语", "report hotline", "noun phrase", "불법 촬영을 보면 신고 전화로 신고하세요.", "看到非法拍摄请拨打举报电话举报。", "If you see illegal filming, report it through the hotline.", "194", "안내문", ["collocation:신고 전화"]],
    ["저작권법", "著作权法", "名词", "copyright law", "noun", "상영 영화를 촬영하면 저작권법에 걸려요.", "拍摄正在上映的电影会触犯著作权法。", "Filming a movie being shown violates copyright law.", "194", "안내문", ["collocation:저작권법"]],
    ["징역", "有期徒刑", "名词", "imprisonment", "noun", "저작권법에 의거하여 징역에 처할 수 있어요.", "依据著作权法可能处以有期徒刑。", "Under copyright law, imprisonment may be imposed.", "194", "안내문", ["collocation:징역에 처하다"]],
    ["무단", "擅自，未经允许", "名词/副词", "without permission", "noun/adverb", "무단으로 영화를 촬영하면 안 돼요.", "不能擅自拍摄电影。", "You must not film a movie without permission.", "194", "안내문", ["collocation:무단으로"]],
    ["주정차 금지", "禁止停车和临时停车", "名词短语", "no stopping or parking", "noun phrase", "이곳은 불법 주정차 금지 구역이에요.", "这里是禁止违法停车和临时停车区域。", "This is a no stopping or parking zone.", "194", "안내문", ["collocation:주정차 금지"]],
    ["투기", "乱扔，非法丢弃", "名词", "dumping", "noun", "쓰레기 투기 시 벌금이 있어요.", "乱扔垃圾会有罚款。", "There is a fine for dumping trash.", "194", "안내문", ["collocation:쓰레기 투기"]],
    ["단속", "管制，取缔", "名词", "crackdown; enforcement", "noun", "쓰레기 불법 투기를 단속하고 있어요.", "正在取缔非法乱扔垃圾。", "Illegal dumping is being cracked down on.", "194", "안내문", ["collocation:단속 중"]],
    ["함부로", "随便，任意", "副词", "carelessly; recklessly", "adverb", "쓰레기를 함부로 버리지 마세요.", "请不要随便乱扔垃圾。", "Do not throw away trash carelessly.", "194", "안내문", ["collocation:함부로 버리다"]],
    ["V-다시피", "正如……一样", "语法表达", "as you know/see/heard", "grammar expression", "여러분도 아시다시피 요즘 회사 매출이 상승하고 있습니다.", "正如各位所知，最近公司销售额正在上升。", "As you all know, company sales are rising these days.", "195", "문법 1", ["form:동사 어간 + -다시피"]],
    ["알다시피", "正如所知", "副词性表达", "as you know", "adverbial expression", "애나 씨도 알다시피 지금 너무 급한 상황이라서요.", "正如安娜你也知道，现在情况太紧急了。", "As you know too, Anna, the situation is very urgent now.", "195", "문법 1", ["collocation:알다시피"]],
    ["보다시피", "正如所见", "副词性表达", "as you see", "adverbial expression", "보시다시피 지하철 출입구 10m 이내는 금연 구역입니다.", "如您所见，地铁出入口10米以内是禁烟区域。", "As you can see, within 10 meters of a subway entrance is a no-smoking area.", "195", "문법 1", ["collocation:보다시피"]],
    ["듣다시피", "正如所听到", "副词性表达", "as you heard", "adverbial expression", "방금 들으셨다시피 한국의 저출산 문제는 심각합니다.", "正如刚才听到的，韩国低出生率问题很严重。", "As you just heard, Korea's low birthrate issue is serious.", "195", "문법 1", ["collocation:듣다시피"]],
    ["말씀드리다시피", "正如刚才说明的", "副词性表达", "as I mentioned", "adverbial expression", "아까 말씀드렸다시피 행사를 마무리했습니다.", "正如刚才所说，活动已经结束了。", "As I mentioned earlier, the event has been completed.", "195", "문법 1", ["collocation:말씀드리다시피"]],
    ["매출", "销售额", "名词", "sales", "noun", "요즘 회사 매출이 상승하고 있습니다.", "最近公司销售额正在上升。", "Company sales are rising these days.", "195", "단어장", ["collocation:매출이 상승하다"]],
    ["미처", "来不及，没能", "副词", "not quite; before one could", "adverb", "미처 못 봤습니다.", "没来得及看到。", "I did not notice it in time.", "195", "단어장", ["collocation:미처 못 보다"]],
    ["폭설", "暴雪", "名词", "heavy snow", "noun", "지금 폭설이 내리고 있어요.", "现在正在下暴雪。", "Heavy snow is falling now.", "195", "단어장", ["collocation:폭설이 내리다"]],
    ["짐작하다", "估计，猜测", "动词", "to guess; estimate", "verb", "앞으로 일자리가 줄어들 것으로 짐작해요.", "估计以后工作岗位会减少。", "I guess jobs will decrease in the future.", "195", "단어장", ["collocation:짐작하다"]],
    ["V-는 법이다", "按理会……；通常会……", "语法表达", "it is natural/common that...", "grammar expression", "잘못한 사람은 반드시 벌을 받는 법이지요.", "做错事的人必然会受到惩罚。", "People who do wrong are bound to be punished.", "196", "문법 2", ["form:동사 어간 + -는 법이다"]],
    ["권리", "权利", "名词", "right", "noun", "대한민국 국민에게는 기본적인 권리와 의무가 있어요.", "韩国国民有基本权利和义务。", "Korean citizens have basic rights and duties.", "196", "단어장", ["collocation:권리와 의무"]],
    ["의무", "义务", "名词", "duty; obligation", "noun", "권리를 누리면 동시에 의무도 다해야 해요.", "享受权利的同时也要履行义务。", "If you enjoy rights, you must also fulfill duties.", "196", "단어장", ["collocation:의무를 다하다"]],
    ["의무를 다하다", "履行义务", "动词短语", "to fulfill one's duty", "verb phrase", "국민은 의무를 다해야 되는 법입니다.", "国民理应履行义务。", "Citizens are expected to fulfill their duties.", "196", "단어장", ["collocation:의무를 다하다"]],
    ["기회", "机会", "名词", "opportunity", "noun", "노력하는 사람이 기회를 잡는 법이에요.", "努力的人通常会抓住机会。", "People who try hard tend to seize opportunities.", "196", "문법 2", ["collocation:기회를 잡다"]],
    ["잡다", "抓住", "动词", "to catch; seize", "verb", "기회를 잡으려면 준비해야 해요.", "想抓住机会就要准备。", "You need preparation to seize an opportunity.", "196", "문법 2", ["collocation:기회를 잡다"]],
    ["잊다", "忘记", "动词", "to forget", "verb", "시간이 지나면 잊게 되는 법이라고 해요.", "都说时间久了自然会忘。", "They say people naturally forget as time passes.", "196", "문법 2", ["collocation:잊게 되다"]],
    ["생생하다", "清晰，鲜明", "形容词", "vivid", "adjective", "그 기억은 아직도 생생해요.", "那个记忆仍然很清晰。", "That memory is still vivid.", "196", "문법 2", ["collocation:기억이 생생하다"]],
    ["범인", "犯人", "名词", "criminal; culprit", "noun", "저 사건의 범인이 처벌을 받게 되었대요.", "听说那个案件的犯人受到了处罚。", "They say the culprit in that case was punished.", "196", "문법 2", ["collocation:범인"]],
    ["벌을 받다", "受到惩罚", "动词短语", "to be punished", "verb phrase", "잘못한 사람은 벌을 받는 법이에요.", "做错事的人会受到惩罚。", "People who do wrong are bound to be punished.", "196", "문법 2", ["collocation:벌을 받다"]],
    ["속담", "俗语，谚语", "名词", "proverb", "noun", "속담으로 당연한 사실을 말할 수 있어요.", "可以用俗语表达理所当然的事实。", "You can express common truths with proverbs.", "196", "문법 2", ["collocation:속담"]],
    ["꼬리", "尾巴", "名词", "tail", "noun", "꼬리가 길면 밟히는 법이에요.", "尾巴长了就会被踩到。", "If the tail is long, it gets stepped on.", "196", "문법 2", ["collocation:꼬리가 길다"]],
    ["밟히다", "被踩", "动词", "to be stepped on", "verb", "꼬리가 길면 밟히는 법이에요.", "尾巴长了就会被踩到。", "If the tail is long, it is bound to be stepped on.", "196", "문법 2", ["collocation:밟히다"]],
    ["버릇", "习惯，毛病", "名词", "habit", "noun", "세 살 적 버릇이 여든까지 간다고 해요.", "俗话说三岁习惯到八十。", "They say childhood habits last a lifetime.", "196", "문법 2", ["collocation:버릇"]],
    ["응급실", "急诊室", "名词", "emergency room", "noun", "친구가 병원 응급실에 갔대요.", "听说朋友去了医院急诊室。", "They say my friend went to the hospital emergency room.", "197", "말하기", ["collocation:응급실"]],
    ["급히", "急忙地", "副词", "hurriedly", "adverb", "어디를 그렇게 급히 가요?", "你这么急着去哪儿？", "Where are you going in such a hurry?", "197", "말하기", ["collocation:급히 가다"]],
    ["오토바이", "摩托车", "名词", "motorcycle", "noun", "오토바이를 탈 때는 헬멧을 써야 해요.", "骑摩托车时要戴头盔。", "You must wear a helmet when riding a motorcycle.", "197", "말하기", ["collocation:오토바이를 타다"]],
    ["헬멧", "头盔", "名词", "helmet", "noun", "헬멧을 안 쓰면 위험해요.", "不戴头盔很危险。", "It is dangerous if you do not wear a helmet.", "197", "말하기", ["collocation:헬멧을 쓰다"]],
    ["깜박하다", "一时忘记", "动词", "to forget momentarily", "verb", "아, 네. 깜박했네요.", "啊，是。我一时忘了。", "Oh, right. I forgot for a moment.", "197", "말하기", ["collocation:깜박하다"]],
    ["당황하다", "慌张", "动词", "to be flustered", "verb", "지금 너무 당황해서 안전벨트를 잊었어요.", "现在太慌张，所以忘了安全带。", "I was so flustered that I forgot the seat belt.", "197", "단어장", ["collocation:당황하다"]],
    ["마음이 급하다", "心急", "形容词短语", "to be in a hurry emotionally", "adjective phrase", "친구가 병원에 있다고 하니까 마음이 급했나 봐요.", "听说朋友在医院，所以你好像心急了。", "You must have felt rushed because your friend is in the hospital.", "197", "말하기", ["collocation:마음이 급하다"]],
    ["교통 법규", "交通法规", "名词短语", "traffic regulations", "noun phrase", "아무리 급해도 교통 법규는 지켜야 해요.", "再急也要遵守交通法规。", "No matter how urgent it is, you must follow traffic regulations.", "197", "말하기", ["collocation:교통 법규"]],
    ["카 시트", "儿童安全座椅", "名词", "car seat", "noun", "아기는 카 시트에 앉혀야 해요.", "婴儿要坐儿童安全座椅。", "A baby must be seated in a car seat.", "197", "말하기", ["collocation:카 시트"]],
    ["어린이 보호 구역", "儿童保护区", "名词短语", "school zone; child protection zone", "noun phrase", "어린이 보호 구역에서는 속도를 줄여야 해요.", "在儿童保护区要减速。", "You must slow down in a child protection zone.", "197", "말하기", ["collocation:어린이 보호 구역"]],
    ["속도를 줄이다", "减速", "动词短语", "to slow down", "verb phrase", "길을 걷는 어린이들을 보호하려면 속도를 줄여야 해요.", "为了保护走路的儿童，需要减速。", "To protect children walking on the road, drivers must slow down.", "197", "말하기", ["collocation:속도를 줄이다"]],
    ["공유", "共享，分享", "名词", "sharing", "noun", "영화 파일 불법 공유가 심각해요.", "电影文件非法共享很严重。", "Illegal sharing of movie files is serious.", "198", "듣기", ["collocation:불법 공유"]],
    ["명예 훼손죄", "名誉毁损罪", "名词", "defamation", "noun", "인터넷에 욕하는 글을 쓰면 명예 훼손죄가 될 수 있어요.", "在网上写辱骂文章可能构成名誉毁损罪。", "Writing insulting posts online can become defamation.", "198", "단어장", ["collocation:명예 훼손죄"]],
    ["모욕죄", "侮辱罪", "名词", "insult offense", "noun", "모욕죄에 걸리면 벌금을 낼 수도 있어요.", "触犯侮辱罪可能要交罚款。", "If charged with insult, one may have to pay a fine.", "198", "단어장", ["collocation:모욕죄"]],
    ["법률 상담", "法律咨询", "名词短语", "legal consultation", "noun phrase", "나는 변호사에게 법률 상담을 받을 예정이에요.", "我打算向律师接受法律咨询。", "I am planning to receive legal consultation from a lawyer.", "198", "발음", ["collocation:법률 상담"]],
    ["협력", "协力，合作", "名词", "cooperation", "noun", "경찰과 시민의 협력으로 범인을 잡았어요.", "通过警察和市民的合作抓住了犯人。", "The culprit was caught through cooperation between police and citizens.", "198", "발음", ["collocation:협력으로"]],
    ["범죄율", "犯罪率", "名词", "crime rate", "noun", "실업률과 범죄율은 관계가 있어요.", "失业率和犯罪率有关。", "The unemployment rate and crime rate are related.", "198", "발음", ["collocation:범죄율"]],
    ["경범죄", "轻微犯罪", "名词", "minor offense", "noun", "경범죄는 일상생활에서 흔하게 일어나요.", "轻微犯罪在日常生活中经常发生。", "Minor offenses commonly occur in daily life.", "199", "읽기 전", ["collocation:경범죄"]],
    ["쓰레기 투기", "乱扔垃圾", "名词短语", "trash dumping", "noun phrase", "가장 많이 처벌을 받은 경범죄는 쓰레기 투기예요.", "受到处罚最多的轻微犯罪是乱扔垃圾。", "The most commonly punished minor offense is trash dumping.", "199", "읽기 전", ["collocation:쓰레기 투기"]],
    ["음주 소란", "酒后滋事", "名词短语", "drunken disturbance", "noun phrase", "술에 취해 소란을 피우는 음주 소란도 경범죄예요.", "醉酒吵闹滋事也是轻微犯罪。", "Causing a disturbance while drunk is also a minor offense.", "199", "읽기 전", ["collocation:음주 소란"]],
    ["인근 소란", "邻近噪音滋扰", "名词短语", "neighborhood disturbance", "noun phrase", "주변을 시끄럽게 하는 인근 소란도 처벌받을 수 있어요.", "制造周边噪音滋扰也可能受到处罚。", "Neighborhood disturbance can also be punished.", "199", "읽기 전", ["collocation:인근 소란"]],
    ["무단 침입", "擅自闯入", "名词短语", "trespassing", "noun phrase", "출입이 금지된 장소에 들어가면 무단 침입이 될 수 있어요.", "进入禁止出入的地方可能构成擅自闯入。", "Entering a prohibited place can be trespassing.", "199", "읽기 전", ["collocation:무단 침입"]],
    ["검거율", "逮捕率，破案率", "名词", "arrest rate", "noun", "5대 범죄는 줄고 검거율은 늘었어요.", "五大犯罪减少，破案率上升。", "The five major crimes decreased and the arrest rate increased.", "199", "읽기 전", ["collocation:검거율"]],
    ["살인", "杀人", "名词", "murder", "noun", "살인은 5대 범죄 중 하나예요.", "杀人是五大犯罪之一。", "Murder is one of the five major crimes.", "199", "읽기 전", ["collocation:살인"]],
    ["강도", "抢劫", "名词", "robbery", "noun", "강도 사건 검거율이 높아졌어요.", "抢劫案件破案率提高了。", "The arrest rate for robbery cases increased.", "199", "읽기 전", ["collocation:강도 사건"]],
    ["강간", "强奸", "名词", "rape", "noun", "강간은 중대한 범죄입니다.", "强奸是重大犯罪。", "Rape is a serious crime.", "199", "읽기 전", ["collocation:강간"]],
    ["절도", "盗窃", "名词", "theft", "noun", "절도도 5대 범죄에 포함됩니다.", "盗窃也包含在五大犯罪中。", "Theft is also included among the five major crimes.", "199", "읽기 전", ["collocation:절도"]],
    ["폭력", "暴力", "名词", "violence", "noun", "폭력은 다른 사람에게 큰 피해를 줘요.", "暴力会给别人造成很大伤害。", "Violence causes great harm to others.", "199", "읽기 전", ["collocation:폭력"]],
    ["대수롭지 않다", "不当回事，不严重看待", "形容词短语", "to think little of", "adjective phrase", "경범죄라고 대수롭지 않게 생각하면 안 돼요.", "不能因为是轻微犯罪就不当回事。", "You should not think lightly of something just because it is a minor offense.", "200", "읽기", ["collocation:대수롭지 않다"]],
    ["뒤따르다", "随之而来", "动词", "to follow", "verb", "모든 범죄 행위에는 처벌이 뒤따르는 법이에요.", "所有犯罪行为都会伴随处罚。", "Punishment follows every criminal act.", "200", "읽기", ["collocation:처벌이 뒤따르다"]],
    ["괴롭히다", "骚扰，折磨", "动词", "to harass; bother", "verb", "다른 사람을 지속적으로 괴롭히는 행동도 처벌받아요.", "持续骚扰别人也会受到处罚。", "Continuously harassing another person is also punished.", "200", "읽기", ["collocation:괴롭히다"]],
    ["지속적", "持续的", "名词/冠形词", "continuous", "noun/determiner", "지속적으로 쫓아다니는 행동은 문제가 돼요.", "持续跟踪的行为会成为问题。", "Continuously following someone becomes a problem.", "200", "읽기", ["collocation:지속적으로"]],
    ["피해", "损害，受害", "名词", "harm; damage", "noun", "경범죄도 시민들에게 피해를 줄 수 있어요.", "轻微犯罪也可能给市民造成损害。", "Minor offenses can also harm citizens.", "200", "읽기", ["collocation:피해를 주다"]],
    ["불안감", "不安感", "名词", "anxiety", "noun", "범죄는 시민들에게 불안감을 줘요.", "犯罪会给市民带来不安。", "Crime gives citizens anxiety.", "200", "읽기", ["collocation:불안감을 주다"]],
    ["시민 의식", "市民意识", "名词短语", "civic awareness", "noun phrase", "성숙한 시민 의식이 필요해요.", "需要成熟的市民意识。", "Mature civic awareness is needed.", "200", "읽기", ["collocation:시민 의식"]],
    ["성숙하다", "成熟", "形容词", "mature", "adjective", "성숙한 시민 의식을 통해 안전한 사회를 만들 수 있어요.", "通过成熟的市民意识可以创造安全社会。", "A safe society can be made through mature civic awareness.", "200", "읽기", ["collocation:성숙한 시민 의식"]],
    ["필요성", "必要性", "名词", "necessity", "noun", "법과 질서의 필요성에 대해 생각해 보세요.", "请思考法律和秩序的必要性。", "Think about the necessity of law and order.", "201", "쓰기", ["collocation:필요성"]],
    ["홈페이지", "网站，主页", "名词", "website", "noun", "찾기 쉬운 생활 법령 정보 홈페이지를 이용해 보세요.", "请试着使用“找法容易”生活法令信息网站。", "Try using the Easy-to-Find Daily-Life Legal Information website.", "202", "문화와 정보", ["collocation:홈페이지"]],
    ["애플리케이션", "应用程序", "名词", "application; app", "noun", "생활 법률 애플리케이션도 제공하고 있어요.", "也提供生活法律应用程序。", "A daily-life law application is also provided.", "202", "문화와 정보", ["collocation:애플리케이션"]],
    ["제공하다", "提供", "动词", "to provide", "verb", "정부에서는 생활 법률 애플리케이션을 제공하고 있어요.", "政府提供生活法律应用程序。", "The government provides a daily-life law application.", "202", "문화와 정보", ["collocation:제공하다"]],
    ["금융", "金融", "名词", "finance", "noun", "가정, 금융, 교통 등 주제별로 법을 찾을 수 있어요.", "可以按家庭、金融、交通等主题查找法律。", "You can find laws by topics such as family, finance, and traffic.", "202", "문화와 정보", ["collocation:금융"]],
    ["근로", "劳动，工作", "名词", "labor; work", "noun", "근로와 관련된 법도 쉽게 설명되어 있어요.", "与劳动相关的法律也有简单说明。", "Labor-related laws are also explained simply.", "202", "문화와 정보", ["collocation:근로"]],
    ["사회 안전/범죄", "社会安全/犯罪", "名词短语", "social safety/crime", "noun phrase", "사회 안전/범죄 주제의 정보도 제공돼요.", "也提供社会安全/犯罪主题的信息。", "Information on social safety and crime is also provided.", "202", "문화와 정보", ["collocation:사회 안전/범죄"]],
    ["법무부", "法务部", "名词", "Ministry of Justice", "noun", "법무부에서는 블로그나 유튜브 채널을 운영하고 있어요.", "法务部运营博客或 YouTube 频道。", "The Ministry of Justice runs blogs and YouTube channels.", "202", "문화와 정보", ["collocation:법무부"]],
    ["경찰청", "警察厅", "名词", "National Police Agency", "noun", "경찰청에서도 법 정보를 쉽게 알리고 있어요.", "警察厅也在轻松宣传法律信息。", "The National Police Agency also shares legal information accessibly.", "202", "문화와 정보", ["collocation:경찰청"]],
    ["기관", "机关，机构", "名词", "institution; agency", "noun", "법무부나 경찰청 등의 기관에서 정보를 알려 줘요.", "法务部或警察厅等机构会告知信息。", "Agencies such as the Ministry of Justice and police provide information.", "202", "문화와 정보", ["collocation:기관"]],
    ["유튜브 채널", "YouTube 频道", "名词短语", "YouTube channel", "noun phrase", "유튜브 채널을 통해 법을 쉽게 이해할 수 있어요.", "通过 YouTube 频道可以轻松理解法律。", "You can understand laws easily through YouTube channels.", "202", "문화와 정보", ["collocation:유튜브 채널"]],
    ["이롭다", "有利，有益", "形容词", "beneficial", "adjective", "법을 알고 지키면 나에게 이로운 일이 많아요.", "了解并遵守法律，会有很多对自己有益的事。", "Knowing and following the law brings many benefits.", "202", "문화와 정보", ["collocation:이롭다"]],
    ["불이익", "不利，损失", "名词", "disadvantage; penalty", "noun", "법을 모르거나 지키지 않으면 불이익을 받을 수 있어요.", "不了解或不遵守法律可能会受到不利影响。", "If you do not know or follow the law, you may face disadvantages.", "202", "문화와 정보", ["collocation:불이익을 받다"]],
    ["지혜", "智慧", "名词", "wisdom", "noun", "법을 잘 알아서 편리하게 살아가는 지혜가 필요해요.", "需要了解法律、便利生活的智慧。", "Wisdom is needed to know the law and live conveniently.", "202", "문화와 정보", ["collocation:지혜"]]
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
  window.lessonGuideL4LessonChunks["l4-15"] = {
    id: "l4-15",
    number: 15,
    titleKo: "법과 질서",
    titleZh: "法律和秩序",
    pages: "192-203",
    status: "draft",
    progress: {
      vocabulary: "draft-p192-p203",
      dialogue: "draft-p195-p197",
      culture: "draft-p202",
      practice: "draft-p195-p202"
    },
    vocabulary,
    vocabularySources: [
      { page: 192, label: "단원 제목", note: "课题、语法和学习目标" },
      { page: 194, label: "어휘", note: "规则、法律、违法行为和处罚" },
      { page: 195, label: "문법 1", note: "V-다시피 与已知信息提示" },
      { page: 196, label: "문법 2", note: "V-는 법이다 与常理表达" },
      { page: 197, label: "말하기", note: "交通法规和紧急情况对话" },
      { page: 198, label: "듣기/발음", note: "名誉毁损、著作权和发音" },
      { page: 199, label: "읽기 전", note: "轻微犯罪种类和五大犯罪" },
      { page: 200, label: "읽기", note: "生活中的轻微犯罪新闻文章" },
      { page: 202, label: "문화와 정보", note: "找法容易生活法令信息" },
      { page: 203, label: "배운 어휘 확인", note: "本课复习词汇补充" }
    ],
    goals: [
      "能说明遵守法规的日常生活。",
      "能写出遵法生活的必要性。",
      "理解查找生活法律信息的方法。"
    ],
    grammar: [
      {
        pattern: "V-다시피",
        zh: "正如……一样",
        guide: "提示对方已经知道、看到或听到的内容，并把它作为后面说明的根据。",
        translations: {
          en: {
            meaning: "as you know/see/heard...",
            guide: "Refers to information the listener already knows, saw, or heard, and uses it as the basis for the next statement."
          }
        }
      },
      {
        pattern: "V-는 법이다",
        zh: "按理会……；通常会……",
        guide: "表示按常理会发生、社会上通常如此，或已经被认为理所当然的情况。",
        translations: {
          en: {
            meaning: "it is natural/common that...",
            guide: "Shows something that normally happens, is socially common, or is considered natural."
          }
        }
      }
    ],
    dialogues: [
      {
        title: "지하철 출입구 10m 이내는 금연 구역입니다",
        titleKo: "지하철 출입구 10m 이내는 금연 구역입니다",
        titleZh: "地铁出入口10米以内是禁烟区域",
        focus: "V-다시피",
        page: "195",
        source: "문법 1",
        sceneZh: "警察指出对方已经能看到的事实，并说明禁烟规定。",
        speakers: ["경찰", "행인"],
        lines: [
          {
            speaker: "경찰",
            ko: "여기 보시다시피 지하철 출입구 10m 이내는 금연 구역입니다.",
            zh: "如您在这里看到的，地铁出入口10米以内是禁烟区域。",
            noteZh: "보시다시피 用来指向对方能看到的事实。",
            translations: {
              en: {
                translation: "As you can see here, within 10 meters of a subway entrance is a no-smoking area.",
                note: "보시다시피 points to a fact the listener can see."
              }
            }
          },
          {
            speaker: "행인",
            ko: "아, 네. 미처 못 봤습니다. 죄송합니다.",
            zh: "啊，是。我没来得及看到。对不起。",
            noteZh: "미처 못 봤습니다 表示不是故意，而是没注意到。",
            translations: {
              en: {
                translation: "Oh, yes. I did not notice it in time. I am sorry.",
                note: "미처 못 봤습니다 means the speaker failed to notice in time."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "Within 10 Meters of a Subway Entrance Is a No-Smoking Area",
            scene: "A police officer points to a visible fact and explains a no-smoking rule."
          }
        }
      },
      {
        title: "잘못한 사람은 반드시 벌을 받는 법이지요",
        titleKo: "잘못한 사람은 반드시 벌을 받는 법이지요",
        titleZh: "做错事的人一定会受到惩罚",
        focus: "V-는 법이다",
        page: "196",
        source: "문법 2",
        sceneZh: "用 V-는 법이다 说明社会常理。",
        speakers: ["고천", "김영욱"],
        lines: [
          {
            speaker: "고천",
            ko: "저 사건의 범인이 처벌을 받게 되었대요.",
            zh: "听说那个案件的犯人受到了处罚。",
            noteZh: "-대요 表示转述听来的消息。",
            translations: {
              en: {
                translation: "They say the culprit in that case ended up being punished.",
                note: "-대요 reports information heard from someone else."
              }
            }
          },
          {
            speaker: "김영욱",
            ko: "잘못한 사람은 반드시 벌을 받는 법이지요.",
            zh: "做错事的人必然会受到惩罚。",
            noteZh: "받는 법이다 表示这是通常如此的道理。",
            translations: {
              en: {
                translation: "People who do wrong are bound to be punished.",
                note: "받는 법이다 presents this as a general truth."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "People Who Do Wrong Are Bound to Be Punished",
            scene: "Use V-는 법이다 to state a general social truth."
          }
        }
      },
      {
        title: "아무리 급해도 교통 법규는 꼭 지켜야 해요",
        titleKo: "아무리 급해도 교통 법규는 꼭 지켜야 해요",
        titleZh: "再急也要遵守交通法规",
        focus: "법규를 지키는 생활",
        page: "197",
        source: "말하기",
        sceneZh: "围绕紧急情况、摩托车头盔和交通法规进行对话。",
        speakers: ["애나", "제이슨"],
        lines: [
          {
            speaker: "애나",
            ko: "제이슨 씨, 어디를 그렇게 급히 가요?",
            zh: "杰森，你这么急着去哪儿？",
            noteZh: "급히 가다 表示行动很急。",
            translations: {
              en: {
                translation: "Jason, where are you going in such a hurry?",
                note: "급히 가다 means to go somewhere hurriedly."
              }
            }
          },
          {
            speaker: "제이슨",
            ko: "친구가 갑자기 병원 응급실에 갔대요. 그래서 가 보려고요.",
            zh: "听说朋友突然去了医院急诊室。所以我想去看看。",
            noteZh: "응급실은 emergency room，紧急程度比普通 병원 更高。",
            translations: {
              en: {
                translation: "They say my friend suddenly went to the hospital emergency room, so I am going to go see them.",
                note: "응급실 means emergency room, so the situation is more urgent than a regular hospital visit."
              }
            }
          },
          {
            speaker: "애나",
            ko: "어머나, 빨리 가 보세요. 그런데 제이슨 씨, 오토바이를 탈 때는 헬멧을 꼭 써야 돼요. 안 쓰면 위험하고 범칙금도 내야 되잖아요.",
            zh: "天哪，那快去看看吧。不过杰森，骑摩托车时一定要戴头盔。不戴很危险，还要交罚款不是吗？",
            noteZh: "-잖아요 用来提醒对方也知道的事实。",
            translations: {
              en: {
                translation: "Oh my, go quickly. But Jason, you must wear a helmet when riding a motorcycle. It is dangerous if you do not, and you also have to pay a fine, you know.",
                note: "-잖아요 reminds the listener of something they also know."
              }
            }
          },
          {
            speaker: "제이슨",
            ko: "아, 네. 깜박했네요. 애나 씨도 알다시피 지금 너무 급한 상황이라서요. 저는 원래 교통 법규를 잘 지키는데…….",
            zh: "啊，是。我一时忘了。安娜你也知道，现在情况太急了。我本来是很遵守交通法规的……",
            noteZh: "알다시피 后接双方都知道的紧急情况。",
            translations: {
              en: {
                translation: "Oh, right. I forgot for a moment. As you know too, Anna, the situation is very urgent right now. I usually follow traffic regulations well...",
                note: "알다시피 introduces an urgent situation both speakers understand."
              }
            }
          },
          {
            speaker: "애나",
            ko: "지금 친구가 병원에 있다고 하니까 마음이 급했나 보네요.",
            zh: "听说朋友在医院，所以你应该是心急了。",
            noteZh: "-나 보네요 表示根据情况推测。",
            translations: {
              en: {
                translation: "Since your friend is in the hospital, you must have felt rushed.",
                note: "-나 보네요 expresses a guess based on the situation."
              }
            }
          },
          {
            speaker: "제이슨",
            ko: "네, 정말 걱정이 돼요.",
            zh: "是的，我真的很担心。",
            noteZh: "걱정이 되다 表示自然产生担心。",
            translations: {
              en: {
                translation: "Yes, I am really worried.",
                note: "걱정이 되다 means worry naturally arises."
              }
            }
          },
          {
            speaker: "애나",
            ko: "제이슨 씨, 아무리 급해도 교통 법규는 꼭 지켜야 하는 법이잖아요. 운전도 조심하고요.",
            zh: "杰森，再急也一定要遵守交通法规，这是理所当然的。开车也要小心。",
            noteZh: "아무리 급해도 表示“无论多急也……”。",
            translations: {
              en: {
                translation: "Jason, no matter how urgent it is, you must follow traffic regulations. Drive carefully too.",
                note: "아무리 급해도 means no matter how urgent it is."
              }
            }
          },
          {
            speaker: "제이슨",
            ko: "네, 알겠어요.",
            zh: "好，我知道了。",
            noteZh: "알겠어요 表示接受提醒。",
            translations: {
              en: {
                translation: "Okay, I understand.",
                note: "알겠어요 shows that the speaker accepts the reminder."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "No Matter How Urgent It Is, You Must Follow Traffic Regulations",
            scene: "Discuss an emergency, motorcycle helmets, and traffic regulations."
          }
        }
      }
    ],
    culture: {
      titleKo: "찾기 쉬운 생활 법령 정보",
      titleZh: "找法容易的生活法令信息",
      summaryZh: "文章介绍韩国政府如何通过生活法令信息网站、生活法律应用程序、博客和 YouTube 等渠道，让居民更容易理解和使用法律信息。",
      paragraphs: [
        {
          ko: "사람들은 보통 '법'이라고 하면 어렵고 자신과 먼 이야기라고 느낀다. 따라서 정부에서는 국민들이 상황에 맞는 법을 더 쉽게 찾아볼 수 있도록 '찾기 쉬운 생활 법령 정보' 홈페이지와 '생활 법률' 애플리케이션을 제공하고 있다. 여기에는 가정, 금융, 교통, 근로, 사회 안전/범죄 등의 주제에 따라 법이 쉽게 설명되어 있다. 그리고 12개의 언어로도 정보가 제공되기 때문에 한국에 사는 외국인들도 이용하기 편리하다.",
          zh: "人们通常一提到“法律”，就会觉得它很难、离自己很远。因此，政府提供“找法容易生活法令信息”网站和“生活法律”应用程序，让国民能更容易查找符合自己情况的法律。这里按照家庭、金融、交通、劳动、社会安全/犯罪等主题，对法律进行简单说明。而且信息也以12种语言提供，因此居住在韩国的外国人使用起来也很方便。",
          guide: "第一段说明这个服务的用途：按生活场景查法律，并支持多语言。",
          translations: {
            en: {
              translation: "People usually feel that law is difficult and distant from them. Therefore, the government provides the Easy-to-Find Daily-Life Legal Information website and the Daily-Life Law application so that citizens can more easily find laws that fit their situations. Laws are explained simply by topics such as family, finance, traffic, labor, and social safety/crime. Because information is also provided in 12 languages, foreigners living in Korea can use it conveniently.",
              guide: "The first paragraph explains the purpose of the service: finding laws by life situation, with multilingual support."
            }
          }
        },
        {
          ko: "한편 법무부나 경찰청 등의 기관에서는 블로그나 유튜브 채널을 운영하고 있다. 이곳의 글이나 영상을 통해 사람들은 법을 쉽고 재미있게 이해할 수 있다.",
          zh: "另一方面，法务部或警察厅等机构也运营博客或 YouTube 频道。人们可以通过这些地方的文章或视频，轻松而有趣地理解法律。",
          guide: "第二段说明官方机构也会用更轻松的媒体形式宣传法律知识。",
          translations: {
            en: {
              translation: "Meanwhile, agencies such as the Ministry of Justice and the National Police Agency run blogs and YouTube channels. Through posts and videos there, people can understand the law easily and interestingly.",
              guide: "The second paragraph explains that public agencies also share legal knowledge through lighter media formats."
            }
          }
        },
        {
          ko: "법을 알고 지키면 나에게 이로운 일이 많다. 그러나 모르거나 지키지 않으면 불이익을 받게 된다. 이제 더 이상 법을 어렵게 생각하지 말고 법을 잘 알아서 편리하고 유익하게 살아가는 지혜가 필요하다.",
          zh: "了解并遵守法律，会有很多对自己有益的事。但是，如果不了解或不遵守法律，就会受到不利影响。现在不应再把法律想得很难，而需要具备了解法律、便利且有益地生活的智慧。",
          guide: "第三段点出核心态度：法律不是远处的知识，而是保护日常生活的工具。",
          translations: {
            en: {
              translation: "Knowing and following the law brings many benefits. However, if people do not know it or do not follow it, they may face disadvantages. We should no longer think of law as difficult; we need the wisdom to understand the law well and live conveniently and beneficially.",
              guide: "The third paragraph gives the key attitude: law is not distant knowledge, but a tool that protects everyday life."
            }
          }
        }
      ],
      questions: [
        {
          q: "'찾기 쉬운 생활 법령 정보'는 어떤 점이 좋습니까?",
          zh: "“找法容易生活法令信息”有什么优点？",
          answerZh: "它按家庭、金融、交通、劳动、社会安全/犯罪等生活主题简单说明法律，并提供12种语言，外国人也容易使用。",
          translations: {
            en: {
              translation: "What is good about Easy-to-Find Daily-Life Legal Information?",
              answer: "It explains laws simply by life topics such as family, finance, traffic, labor, and social safety/crime, and it provides information in 12 languages, so foreigners can also use it easily."
            }
          }
        },
        {
          q: "법무부와 경찰청에서 어떤 방법으로 법을 알리고 있습니까?",
          zh: "法务部和警察厅用什么方法宣传法律？",
          answerZh: "它们运营博客或 YouTube 频道，通过文章和视频让人们更容易理解法律。",
          translations: {
            en: {
              translation: "How do the Ministry of Justice and the National Police Agency share legal information?",
              answer: "They run blogs and YouTube channels, helping people understand laws through posts and videos."
            }
          }
        },
        {
          q: "법과 관련된 여러 사이트에서 여러분이 알고 싶은 정보는 무엇입니까?",
          zh: "在与法律相关的多个网站上，你想了解什么信息？",
          answerZh: "可以说想了解劳动合同、交通事故处理、签证和滞留、家庭法律、租房纠纷等生活中会遇到的法律信息。",
          translations: {
            en: {
              translation: "What information would you like to learn from law-related websites?",
              answer: "You can mention legal information encountered in daily life, such as labor contracts, traffic accidents, visas and stay status, family law, or housing disputes."
            }
          }
        }
      ],
      translations: {
        en: {
          title: "Easy-to-Find Daily-Life Legal Information",
          summary: "The article explains how the Korean government helps residents understand and use legal information through daily-life legal information websites, apps, blogs, and YouTube channels."
        }
      }
    },
    practice: [
      {
        type: "grammar",
        title: "V-다시피",
        promptZh: "用 -다시피 说：正如各位所知，最近公司销售额正在上升。",
        answerKo: "여러분도 아시다시피 요즘 회사 매출이 상승하고 있습니다.",
        translations: {
          en: {
            title: "V-다시피",
            prompt: "Use -다시피: As you all know, company sales are rising these days.",
            answer: "여러분도 아시다시피 요즘 회사 매출이 상승하고 있습니다."
          }
        }
      },
      {
        type: "grammar",
        title: "V-는 법이다",
        promptZh: "用 -는 법이다 说：做错事的人一定会受到惩罚。",
        answerKo: "잘못한 사람은 반드시 벌을 받는 법입니다.",
        translations: {
          en: {
            title: "V-는 법이다",
            prompt: "Use -는 법이다: People who do wrong are bound to be punished.",
            answer: "잘못한 사람은 반드시 벌을 받는 법입니다."
          }
        }
      },
      {
        type: "speaking",
        title: "교통 법규",
        promptZh: "说：再急也一定要遵守交通法规。",
        answerKo: "아무리 급해도 교통 법규는 꼭 지켜야 합니다.",
        translations: {
          en: {
            title: "Traffic Regulations",
            prompt: "Say: No matter how urgent it is, you must follow traffic regulations.",
            answer: "아무리 급해도 교통 법규는 꼭 지켜야 합니다."
          }
        }
      },
      {
        type: "reading",
        title: "생활 속 경범죄",
        promptZh: "阅读题：过去一年里人们受到处罚最多的轻微犯罪是什么？",
        answerKo: "쓰레기 투기입니다.",
        translations: {
          en: {
            title: "Minor Offenses in Daily Life",
            prompt: "Reading: What minor offense was punished most often in the past year?",
            answer: "쓰레기 투기입니다."
          }
        }
      },
      {
        type: "culture",
        title: "찾기 쉬운 생활 법령 정보",
        promptZh: "文化题：为什么在韩国生活的外国人使用这个服务比较方便？",
        answerKo: "12개의 언어로도 정보가 제공되기 때문에 이용하기 편리합니다.",
        translations: {
          en: {
            title: "Easy-to-Find Daily-Life Legal Information",
            prompt: "Culture: Why is this service convenient for foreigners living in Korea?",
            answer: "12개의 언어로도 정보가 제공되기 때문에 이용하기 편리합니다."
          }
        }
      }
    ],
    translations: {
      en: {
        title: "Law and Order",
        goals: [
          "Explain daily life that follows rules and laws.",
          "Use V-다시피 to refer to information the listener already knows, saw, or heard.",
          "Use V-는 법이다 to express general truths or common rules.",
          "Write about why law-abiding life is necessary and understand how to find legal information for daily life."
        ]
      }
    }
  };
})();
