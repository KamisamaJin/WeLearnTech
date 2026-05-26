(() => {
  const makeTips = (tips) => (tips || []).map((text) => {
    const [type, body] = text.includes(":") ? text.split(/:(.+)/) : ["collocation", text];
    return { type, text: body.trim() };
  });

  const vocabulary = [
    ["사건과 사고", "事件和事故", "名词短语", "incidents and accidents", "noun phrase", "사건과 사고에 대해 이야기해 보세요.", "请说说事件和事故。", "Talk about incidents and accidents.", "120", "단원 제목", ["collocation:사건과 사고"]],
    ["사건", "事件，案件", "名词", "incident; case", "noun", "뉴스에서 여러 사건을 봤어요.", "在新闻里看到了各种事件。", "I saw several incidents on the news.", "120", "단원 제목", ["collocation:사건이 발생하다"]],
    ["사고", "事故", "名词", "accident", "noun", "길에서 교통사고가 났어요.", "路上发生了交通事故。", "A traffic accident happened on the road.", "120", "단원 제목", ["collocation:사고가 나다"]],
    ["자신에게 생긴 사고", "发生在自己身上的事故", "名词短语", "an accident that happened to oneself", "noun phrase", "자신에게 생긴 사고에 대해 말해 보세요.", "请说说发生在自己身上的事故。", "Talk about an accident that happened to you.", "120", "활동", ["collocation:사고가 생기다"]],
    ["경험한 사건", "经历过的事件", "名词短语", "an incident one experienced", "noun phrase", "자신이 경험한 사건이나 사고에 대한 글을 써 보세요.", "请写一篇关于自己经历过的事件或事故的文章。", "Write about an incident or accident you experienced.", "120", "활동", ["collocation:사건을 경험하다"]],
    ["사고와 예방", "事故与预防", "名词短语", "accidents and prevention", "noun phrase", "문화와 정보에서 사고와 예방을 배워요.", "在文化与信息中学习事故与预防。", "In Culture and Information, we learn about accidents and prevention.", "120", "문화와 정보", ["collocation:사고 예방"]],
    ["넘어지다", "摔倒", "动词", "to fall down", "verb", "자전거를 타고 가다가 넘어졌어요.", "骑自行车途中摔倒了。", "I fell down while riding a bicycle.", "122", "어휘", ["collocation:넘어지다"]],
    ["미끄러지다", "滑倒，打滑", "动词", "to slip", "verb", "길이 미끄러워서 넘어질 뻔했어요.", "路很滑，差点摔倒了。", "The road was slippery, so I almost fell.", "122", "어휘", ["collocation:길이 미끄럽다"]],
    ["물에 빠지다", "掉进水里", "动词短语", "to fall into water", "verb phrase", "수영장에서 물에 빠질 뻔했어요.", "在游泳池里差点掉进水里。", "I almost fell into the water at the pool.", "122", "어휘", ["collocation:물에 빠지다"]],
    ["떨어지다", "掉落，坠落", "动词", "to fall; to drop", "verb", "사다리에서 떨어질 뻔했어요.", "差点从梯子上掉下来。", "I almost fell from the ladder.", "122", "어휘", ["collocation:사다리에서 떨어지다"]],
    ["물건에 맞다", "被东西砸到", "动词短语", "to be hit by an object", "verb phrase", "머리에 물건을 맞아서 병원에 갔어요.", "头被东西砸到，所以去了医院。", "I was hit on the head by an object and went to the hospital.", "122", "어휘", ["collocation:물건에 맞다"]],
    ["차에 치이다", "被车撞", "动词短语", "to be hit by a car", "verb phrase", "길을 건너다가 차에 치일 뻔했어요.", "过马路时差点被车撞。", "I almost got hit by a car while crossing the road.", "122", "어휘", ["collocation:차에 치이다"]],
    ["베이다", "被割伤", "动词", "to get cut", "verb", "칼에 손을 베였어요.", "手被刀割伤了。", "I cut my hand with a knife.", "122", "어휘", ["collocation:손을 베이다"]],
    ["데다", "烫伤", "动词", "to burn oneself", "verb", "뜨거운 물에 손을 데었어요.", "手被热水烫伤了。", "I burned my hand with hot water.", "122", "어휘", ["collocation:손을 데다"]],
    ["뼈가 부러지다", "骨折", "动词短语", "for a bone to break", "verb phrase", "다리뼈가 부러져서 깁스를 해야 해요.", "腿骨骨折了，需要打石膏。", "My leg bone broke, so I need a cast.", "122", "어휘", ["collocation:뼈가 부러지다"]],
    ["이마가 찢어지다", "额头裂伤", "动词短语", "for one's forehead to be split open", "verb phrase", "넘어져서 이마가 찢어졌어요.", "摔倒后额头裂伤了。", "I fell and cut my forehead open.", "122", "어휘", ["collocation:이마가 찢어지다"]],
    ["발목이 삐다", "脚踝扭伤", "动词短语", "to sprain one's ankle", "verb phrase", "빙판에서 미끄러져서 발목이 삐었어요.", "在冰面上滑倒，脚踝扭伤了。", "I slipped on ice and sprained my ankle.", "122", "어휘", ["collocation:발목이 삐다"]],
    ["치료를 받다", "接受治疗", "动词短语", "to receive treatment", "verb phrase", "다친 후에 병원에서 치료를 받았어요.", "受伤后在医院接受了治疗。", "I received treatment at the hospital after getting hurt.", "122", "어휘", ["collocation:치료를 받다"]],
    ["깁스를 하다", "打石膏", "动词短语", "to wear a cast", "verb phrase", "한 달 동안 깁스를 해야 해요.", "需要打一个月石膏。", "I need to wear a cast for a month.", "122", "어휘", ["collocation:깁스를 하다"]],
    ["목발을 짚다", "拄拐杖", "动词短语", "to use crutches", "verb phrase", "다리가 부러져서 목발을 짚어야 해요.", "腿骨折了，需要拄拐杖。", "My leg broke, so I need to use crutches.", "122", "어휘", ["collocation:목발을 짚다"]],
    ["꿰매다", "缝合", "动词", "to stitch up", "verb", "이마가 찢어져서 병원에서 꿰맸어요.", "额头裂伤了，所以在医院缝合了。", "My forehead was cut, so it was stitched at the hospital.", "122", "어휘", ["collocation:상처를 꿰매다"]],
    ["V-(으)ㄹ 뻔하다", "差点儿……", "语法表达", "almost did...", "grammar expression", "길이 너무 미끄러워서 넘어질 뻔했어요.", "路太滑了，差点摔倒。", "The road was so slippery that I almost fell.", "123", "문법 1", ["form:동사 + -(으)ㄹ 뻔하다"]],
    ["비행기를 못 탈 뻔하다", "差点没赶上飞机", "动词短语", "to almost miss a plane", "verb phrase", "5분만 늦었어도 비행기를 못 탈 뻔했어요.", "再晚五分钟就差点没赶上飞机。", "If I had been five minutes later, I would almost have missed the plane.", "123", "문법 1", ["collocation:비행기를 못 탈 뻔하다"]],
    ["다칠 뻔하다", "差点受伤", "动词短语", "to almost get hurt", "verb phrase", "기계를 만지다가 크게 다칠 뻔했어요.", "碰机器时差点受重伤。", "I almost got seriously hurt while touching the machine.", "123", "문법 1", ["collocation:크게 다칠 뻔하다"]],
    ["큰불이 날 뻔하다", "差点发生大火", "动词短语", "for a major fire to almost break out", "verb phrase", "소화기가 있어서 큰불이 날 뻔했지만 괜찮았어요.", "因为有灭火器，虽然差点发生大火但没事。", "Because there was a fire extinguisher, a major fire was avoided.", "123", "문법 1", ["collocation:큰불이 나다"]],
    ["소화기", "灭火器", "名词", "fire extinguisher", "noun", "소화기가 있어서 다행이었어요.", "幸好有灭火器。", "It was fortunate that there was a fire extinguisher.", "123", "문법 1", ["collocation:소화기"]],
    ["박스", "箱子", "名词", "box", "noun", "여기 박스가 있어서 다행이에요.", "这里有箱子，真幸运。", "It is fortunate that there are boxes here.", "123", "문법 1", ["collocation:박스가 있다"]],
    ["만지다", "摸，碰", "动词", "to touch", "verb", "회사 기계를 만지다가 다칠 뻔했어요.", "碰公司机器时差点受伤。", "I almost got hurt while touching company machinery.", "123", "단어장", ["collocation:기계를 만지다"]],
    ["N(으)로 인해", "由于……；因……", "语法表达", "due to...; because of...", "grammar expression", "태풍으로 인해 비행기 출발이 지연되고 있습니다.", "由于台风，飞机起飞正在延误。", "Due to the typhoon, the flight departure is being delayed.", "124", "문법 2", ["form:명사 + (으)로 인해"]],
    ["태풍", "台风", "名词", "typhoon", "noun", "태풍으로 인해 비행기가 지연됐어요.", "由于台风，飞机延误了。", "The plane was delayed due to the typhoon.", "124", "문법 2", ["collocation:태풍으로 인해"]],
    ["지연되다", "被延误，延迟", "动词", "to be delayed", "verb", "비행기 출발이 지연되고 있습니다.", "飞机起飞正在延误。", "The flight departure is being delayed.", "124", "문법 2", ["collocation:출발이 지연되다"]],
    ["운행되다", "运行，运营", "动词", "to operate; to run", "verb", "엘리베이터가 10시까지 운행되지 않습니다.", "电梯到 10 点之前不运行。", "The elevator will not operate until 10 o'clock.", "124", "단어장", ["collocation:운행되다"]],
    ["자극적", "刺激性的", "名词/冠形词", "stimulating; irritating", "noun/modifier", "자극적인 음식으로 인해 위염 환자가 증가하고 있어요.", "由于刺激性食物，胃炎患者正在增加。", "Gastritis patients are increasing due to irritating foods.", "124", "단어장", ["collocation:자극적인 음식"]],
    ["과다 섭취", "过量摄取", "名词短语", "excessive intake", "noun phrase", "인스턴트 과다 섭취로 인해 성인병이 증가해요.", "由于过量摄取方便食品，成人病增加。", "Adult diseases increase due to excessive intake of instant foods.", "124", "단어장", ["collocation:과다 섭취"]],
    ["성인병", "成人病", "名词", "adult disease; lifestyle disease", "noun", "인스턴트 과다 섭취로 인해 성인병이 증가합니다.", "由于过量摄取方便食品，成人病增加。", "Adult diseases increase due to excessive intake of instant foods.", "124", "단어장", ["collocation:성인병 증가"]],
    ["비만", "肥胖", "名词", "obesity", "noun", "운동 부족으로 인해 비만이 생길 수 있어요.", "由于运动不足可能产生肥胖。", "Obesity can occur due to lack of exercise.", "124", "문법 2", ["collocation:비만"]],
    ["지구 온난화", "全球变暖", "名词", "global warming", "noun", "지구 온난화로 인해 이상 기후가 많아졌어요.", "由于全球变暖，异常气候变多了。", "Extreme weather has increased due to global warming.", "124", "문법 2", ["collocation:지구 온난화"]],
    ["쓰레기 증가", "垃圾增加", "名词短语", "increase in waste", "noun phrase", "일회용품 사용으로 인해 쓰레기 증가 문제가 생겼어요.", "由于使用一次性用品，产生了垃圾增加问题。", "Waste has increased due to disposable product use.", "124", "문법 2", ["collocation:쓰레기 증가"]],
    ["팔이 부러지다", "胳膊骨折", "动词短语", "for one's arm to break", "verb phrase", "팔이 조금 부러졌어요.", "胳膊有点骨折了。", "My arm is slightly broken.", "125", "말하기 대화", ["collocation:팔이 부러지다"]],
    ["새시", "窗框，窗扇框", "名词", "sash; window frame", "noun", "옆에 세워 놓은 새시가 갑자기 쓰러졌어요.", "旁边立着的窗框突然倒了。", "The sash standing next to me suddenly fell over.", "125", "말하기 대화", ["collocation:새시가 쓰러지다"]],
    ["쓰러지다", "倒下", "动词", "to fall over; collapse", "verb", "새시가 갑자기 쓰러졌어요.", "窗框突然倒了。", "The sash suddenly fell over.", "125", "말하기 대화", ["collocation:갑자기 쓰러지다"]],
    ["다행이다", "幸好", "形容词", "to be fortunate", "adjective", "다른 곳은 다치지 않아서 다행이에요.", "幸好其他地方没有受伤。", "It is fortunate that no other parts were hurt.", "125", "말하기 대화", ["collocation:다행이에요"]],
    ["빨리 낫다", "快点好起来", "动词短语", "to get well soon", "verb phrase", "잘 쉬시고 빨리 나으세요.", "好好休息，快点好起来。", "Rest well and get well soon.", "125", "말하기 대화", ["collocation:빨리 나으세요"]],
    ["빙판", "冰面", "名词", "icy surface", "noun", "빙판인 줄 모르고 뛰어가다가 미끄러졌어요.", "不知道是冰面，跑过去时滑倒了。", "I did not know it was icy and slipped while running.", "125", "단어장", ["collocation:빙판"]],
    ["화상을 입다", "被烫伤，烧伤", "动词短语", "to get burned", "verb phrase", "다리에 화상을 입었어요.", "腿被烫伤了。", "I got a burn on my leg.", "125", "단어장", ["collocation:화상을 입다"]],
    ["붕대", "绷带", "名词", "bandage", "noun", "한 달 동안 붕대를 감고 있어야 해요.", "需要绑一个月绷带。", "I need to wear a bandage for a month.", "125", "단어장", ["collocation:붕대를 감다"]],
    ["천만다행이다", "万幸，真是万幸", "形容词", "to be extremely fortunate", "adjective", "크게 다치지 않아서 천만다행이에요.", "没有受重伤真是万幸。", "It is extremely fortunate that you were not seriously hurt.", "125", "단어장", ["collocation:천만다행이에요"]],
    ["하마터면", "差一点，险些", "副词", "almost; nearly", "adverb", "하마터면 큰일 날 뻔했네요.", "差点出大事了。", "That almost became a serious accident.", "125", "단어장", ["collocation:하마터면 큰일 날 뻔하다"]],
    ["교통사고가 나다", "发生交通事故", "动词短语", "for a traffic accident to happen", "verb phrase", "지금까지 교통사고가 난 적이 있어요?", "到现在为止发生过交通事故吗？", "Have you ever had a traffic accident?", "126", "듣기", ["collocation:교통사고가 나다"]],
    ["경찰", "警察", "名词", "police", "noun", "경찰에게 사고 상황을 설명했어요.", "向警察说明了事故情况。", "I explained the accident situation to the police.", "126", "듣기", ["collocation:경찰에게 알리다"]],
    ["부딪히다", "相撞，碰撞", "动词", "to collide; bump into", "verb", "자동차와 오토바이가 부딪혔어요.", "汽车和摩托车相撞了。", "A car and a motorcycle collided.", "126", "단어장", ["collocation:자동차와 부딪히다"]],
    ["문병", "探病", "名词", "visiting a sick or injured person", "noun", "친구가 병원에 있어서 문병을 갔어요.", "朋友在医院，所以去探病了。", "My friend was in the hospital, so I went to visit.", "126", "단어장", ["collocation:문병을 가다"]],
    ["발생하다", "发生", "动词", "to occur; happen", "verb", "방화로 보이는 화재가 발생했다.", "发生了疑似纵火的火灾。", "A fire that appeared to be arson occurred.", "126", "발음", ["pronunciation:발생했다[발쌩핻따]"]],
    ["죽은 사람", "死亡的人", "名词短语", "dead person", "noun phrase", "죽은 사람은 사망자라고 해요.", "死亡的人叫 사망자。", "A dead person is called 사망자.", "127", "읽기", ["collocation:사망자"]],
    ["다친 사람", "受伤的人", "名词短语", "injured person", "noun phrase", "다친 사람은 부상자라고 해요.", "受伤的人叫 부상자。", "An injured person is called 부상자.", "127", "읽기", ["collocation:부상자"]],
    ["사고를 낸 사람", "造成事故的人", "名词短语", "person who caused an accident", "noun phrase", "사고를 낸 사람은 가해자입니다.", "造成事故的人是加害者。", "The person who caused the accident is the offender.", "127", "읽기", ["collocation:가해자"]],
    ["사고를 당한 사람", "遭遇事故的人", "名词短语", "person who suffered an accident", "noun phrase", "사고를 당한 사람은 피해자입니다.", "遭遇事故的人是受害者。", "The person who suffered the accident is the victim.", "127", "읽기", ["collocation:피해자"]],
    ["범인일 가능성이 높은 사람", "嫌疑较大的人", "名词短语", "likely suspect", "noun phrase", "범인일 가능성이 높은 사람은 용의자라고 합니다.", "嫌疑较大的人叫嫌疑人。", "A person likely to be the criminal is called a suspect.", "127", "읽기", ["collocation:용의자"]],
    ["가해자", "加害者，肇事者", "名词", "offender; perpetrator", "noun", "가해자는 피해자에게 사과해야 해요.", "加害者应该向受害者道歉。", "The offender should apologize to the victim.", "127", "읽기", ["collocation:가해자"]],
    ["피해자", "受害者", "名词", "victim", "noun", "피해자는 병원에서 치료를 받았어요.", "受害者在医院接受了治疗。", "The victim received treatment at the hospital.", "127", "읽기", ["collocation:피해자"]],
    ["부상자", "伤者", "名词", "injured person", "noun", "가벼운 부상자만 있었습니다.", "只有轻伤者。", "There were only lightly injured people.", "127", "읽기", ["collocation:부상자"]],
    ["사망자", "死者", "名词", "fatality; dead person", "noun", "교통사고로 사망자가 발생했어요.", "交通事故中出现了死者。", "There was a fatality in the traffic accident.", "127", "읽기", ["collocation:사망자가 발생하다"]],
    ["용의자", "嫌疑人", "名词", "suspect", "noun", "경찰은 용의자를 체포했어요.", "警察逮捕了嫌疑人。", "The police arrested the suspect.", "127", "읽기", ["collocation:용의자"]],
    ["사기 사건", "诈骗案件", "名词短语", "fraud case", "noun phrase", "큰돈을 벌게 해 준다고 속이는 사기 사건이 있었어요.", "发生了以让人赚大钱为名的诈骗案件。", "There was a fraud case promising big money.", "127", "읽기", ["collocation:사기 사건"]],
    ["절도 사건", "盗窃案件", "名词短语", "theft case", "noun phrase", "자전거를 훔친 절도 사건이 났어요.", "发生了偷自行车的盗窃案件。", "A theft case involving a stolen bicycle occurred.", "127", "읽기", ["collocation:절도 사건"]],
    ["방화 사건", "纵火案件", "名词短语", "arson case", "noun phrase", "건물에 불을 지른 방화 사건이 발생했어요.", "发生了给建筑纵火的案件。", "An arson case involving a building occurred.", "127", "읽기", ["collocation:방화 사건"]],
    ["폭행 사건", "暴力伤害案件", "名词短语", "assault case", "noun phrase", "아래층 사람에게 폭력을 휘두른 폭행 사건입니다.", "这是对楼下住户施暴的伤害案件。", "It is an assault case against the person downstairs.", "127", "읽기", ["collocation:폭행 사건"]],
    ["강도 사건", "抢劫案件", "名词短语", "robbery case", "noun phrase", "은행에 침입한 강도 사건이 있었습니다.", "发生了闯入银行的抢劫案件。", "There was a robbery case involving a bank break-in.", "127", "읽기", ["collocation:강도 사건"]],
    ["뺑소니 사건", "肇事逃逸案件", "名词短语", "hit-and-run case", "noun phrase", "차로 친 후 도망친 뺑소니 사건입니다.", "这是开车撞人后逃跑的肇事逃逸案件。", "It is a hit-and-run case in which someone fled after hitting a person by car.", "127", "읽기", ["collocation:뺑소니 사건"]],
    ["훔치다", "偷", "动词", "to steal", "verb", "휴대 전화만 골라 훔쳤어요.", "只挑手机偷了。", "He picked out and stole only mobile phones.", "127", "읽기", ["collocation:휴대 전화를 훔치다"]],
    ["항의하다", "抗议", "动词", "to protest; complain", "verb", "층간 소음에 항의했어요.", "对楼层噪音提出了抗议。", "They complained about inter-floor noise.", "127", "읽기", ["collocation:항의하다"]],
    ["침입", "侵入，闯入", "名词", "intrusion; break-in", "noun", "은행 침입 사건이 발생했어요.", "发生了闯入银行事件。", "A bank break-in occurred.", "127", "읽기", ["collocation:은행 침입"]],
    ["취객", "醉酒者", "名词", "drunk person", "noun", "60대 취객이 건물에 불을 질렀어요.", "60多岁的醉酒者给建筑纵火。", "A drunk person in his 60s set a building on fire.", "127", "읽기", ["collocation:취객"]],
    ["절도범", "盗窃犯", "名词", "thief", "noun", "휴대 전화만 훔치던 절도범이 잡혔어요.", "只偷手机的盗窃犯被抓了。", "A thief who stole only mobile phones was caught.", "128", "읽기", ["collocation:절도범"]],
    ["체포하다", "逮捕", "动词", "to arrest", "verb", "경찰은 절도 용의자를 체포했어요.", "警察逮捕了盗窃嫌疑人。", "The police arrested the theft suspect.", "128", "읽기", ["collocation:용의자를 체포하다"]],
    ["원룸", "单间房，一居室", "名词", "studio apartment", "noun", "원룸 거주자들의 휴대 전화가 없어졌어요.", "单间房住户的手机不见了。", "The mobile phones of studio apartment residents disappeared.", "128", "읽기", ["collocation:원룸"]],
    ["거주자", "居住者，住户", "名词", "resident", "noun", "원룸 거주자들이 신고했어요.", "单间房住户报了警。", "Studio apartment residents reported it.", "128", "읽기", ["collocation:거주자"]],
    ["혐의를 받다", "受到嫌疑，被指控", "动词短语", "to be suspected of; face charges", "verb phrase", "휴대 전화를 훔쳐 온 혐의를 받고 있어요.", "因涉嫌持续盗窃手机而被调查。", "He is suspected of having stolen mobile phones.", "128", "읽기", ["collocation:혐의를 받다"]],
    ["잇따르다", "接连不断", "动词", "to follow one after another", "verb", "비슷한 신고가 잇따라 접수됐어요.", "类似举报接连被受理。", "Similar reports were received one after another.", "128", "읽기", ["collocation:잇따라 접수되다"]],
    ["끈질기다", "坚持不懈，顽强", "形容词", "persistent", "adjective", "경찰들의 끈질긴 수사 끝에 밝혀졌어요.", "经过警察坚持不懈的调查，终于查明了。", "It was revealed after the police's persistent investigation.", "128", "읽기", ["collocation:끈질긴 수사"]],
    ["수사", "调查，侦查", "名词", "investigation", "noun", "경찰이 정확한 원인을 수사하고 있어요.", "警察正在调查准确原因。", "The police are investigating the exact cause.", "128", "읽기", ["collocation:수사하다"]],
    ["중고", "二手", "名词", "secondhand", "noun", "휴대 전화는 중고로 손쉽게 팔 수 있어요.", "手机可以作为二手货轻易卖掉。", "Mobile phones can easily be sold secondhand.", "128", "읽기", ["collocation:중고로 팔다"]],
    ["손쉽게", "容易地，轻松地", "副词", "easily", "adverb", "중고로 손쉽게 팔 수 있기 때문이에요.", "因为可以作为二手货轻易卖掉。", "It is because they can easily be sold secondhand.", "128", "읽기", ["collocation:손쉽게 팔다"]],
    ["방화로 보이는 화재", "疑似纵火的火灾", "名词短语", "a fire that appears to be arson", "noun phrase", "방화로 보이는 화재가 발생했어요.", "发生了疑似纵火的火灾。", "A fire that appeared to be arson occurred.", "128", "읽기", ["collocation:방화로 보이는 화재"]],
    ["대피하다", "避难，疏散", "动词", "to evacuate", "verb", "주민 20여 명이 대피했어요.", "20多名居民疏散了。", "About twenty residents evacuated.", "128", "읽기", ["collocation:주민이 대피하다"]],
    ["번지다", "蔓延，扩散", "动词", "to spread", "verb", "불은 6층까지 번졌어요.", "火蔓延到了6楼。", "The fire spread to the sixth floor.", "128", "읽기", ["collocation:불이 번지다"]],
    ["입주 사무실", "入驻办公室", "名词短语", "tenant office", "noun phrase", "입주 사무실 직원들이 퇴근한 시간이었어요.", "那是入驻办公室职员下班后的时间。", "It was after the tenant office workers had gone home.", "128", "읽기", ["collocation:입주 사무실"]],
    ["신속하다", "迅速", "形容词", "quick; prompt", "adjective", "주민들의 신속한 대피로 큰 피해를 막았어요.", "由于居民迅速疏散，避免了大损失。", "The residents' quick evacuation prevented major damage.", "128", "읽기", ["collocation:신속한 대피"]],
    ["사고가 발생하다", "事故发生", "动词短语", "for an accident to occur", "verb phrase", "한국에서는 매년 30만 건의 사고가 발생합니다.", "在韩国，每年发生约30万起事故。", "About 300,000 accidents occur in Korea every year.", "130", "문화와 정보", ["collocation:사고가 발생하다"]],
    ["압도적으로 많다", "压倒性地多", "形容词短语", "overwhelmingly numerous", "adjective phrase", "교통사고가 압도적으로 많아요.", "交通事故压倒性地多。", "Traffic accidents are overwhelmingly numerous.", "130", "문화와 정보", ["collocation:압도적으로 많다"]],
    ["차지하다", "占据，占", "动词", "to account for; occupy", "verb", "교통사고가 전체 사고의 70% 이상을 차지해요.", "交通事故占全部事故的70%以上。", "Traffic accidents account for more than 70% of all accidents.", "130", "문화와 정보", ["collocation:비율을 차지하다"]],
    ["화재 사고", "火灾事故", "名词短语", "fire accident", "noun phrase", "교통사고 다음으로는 화재 사고가 많아요.", "交通事故之后，火灾事故较多。", "After traffic accidents, fire accidents are common.", "130", "문화와 정보", ["collocation:화재 사고"]],
    ["등산 사고", "登山事故", "名词短语", "mountain climbing accident", "noun phrase", "등산 사고는 전체 사고의 2% 안팎이에요.", "登山事故约占全部事故的2%左右。", "Mountain climbing accidents account for around 2% of all accidents.", "130", "문화와 정보", ["collocation:등산 사고"]],
    ["추락 사고", "坠落事故", "名词短语", "falling accident", "noun phrase", "추락 사고도 조심해야 해요.", "坠落事故也要小心。", "You also need to be careful of falling accidents.", "130", "문화와 정보", ["collocation:추락 사고"]],
    ["자전거 사고", "自行车事故", "名词短语", "bicycle accident", "noun phrase", "자전거 사고는 안전모를 쓰면 줄일 수 있어요.", "戴安全帽可以减少自行车事故。", "Bicycle accidents can be reduced by wearing helmets.", "130", "문화와 정보", ["collocation:자전거 사고"]],
    ["예방하다", "预防", "动词", "to prevent", "verb", "많은 사고는 조금만 주의하면 예방할 수 있어요.", "很多事故只要稍微注意就能预防。", "Many accidents can be prevented with a little caution.", "130", "문화와 정보", ["collocation:사고를 예방하다"]],
    ["교통 법규", "交通法规", "名词", "traffic regulations", "noun", "교통 법규를 잘 지켜야 해요.", "应该好好遵守交通法规。", "You should follow traffic regulations well.", "130", "문화와 정보", ["collocation:교통 법규를 지키다"]],
    ["돌발 상황", "突发情况", "名词短语", "unexpected situation", "noun phrase", "돌발 상황에 미리 대비해야 해요.", "要提前应对突发情况。", "You should prepare in advance for unexpected situations.", "130", "문화와 정보", ["collocation:돌발 상황"]],
    ["대비하다", "应对，准备", "动词", "to prepare for", "verb", "돌발 상황에 미리 대비하는 습관이 필요해요.", "需要提前应对突发情况的习惯。", "A habit of preparing for unexpected situations is needed.", "130", "문화와 정보", ["collocation:미리 대비하다"]],
    ["과속", "超速", "名词", "speeding", "noun", "과속을 하면 안 됩니다.", "不能超速。", "You must not speed.", "130", "문화와 정보", ["collocation:과속을 하다"]],
    ["추월하다", "超车", "动词", "to overtake", "verb", "무리하게 추월하는 것은 위험해요.", "勉强超车很危险。", "Overtaking recklessly is dangerous.", "130", "문화와 정보", ["collocation:무리하게 추월하다"]],
    ["끼어들기", "插队，强行并线", "名词", "cutting in; merging abruptly", "noun", "끼어들기를 하는 것은 위험합니다.", "强行并线很危险。", "Cutting in is dangerous.", "130", "문화와 정보", ["collocation:끼어들기"]],
    ["안전거리", "安全距离", "名词", "safe distance", "noun", "사고 예방을 위해 안전거리를 유지하세요.", "为了预防事故，请保持安全距离。", "Maintain a safe distance to prevent accidents.", "130", "문화와 정보", ["collocation:안전거리를 유지하다"]],
    ["보행자", "行人", "名词", "pedestrian", "noun", "보행자도 휴대 전화를 보면서 걸으면 위험해요.", "行人边看手机边走也很危险。", "It is dangerous for pedestrians to walk while looking at a phone.", "130", "문화와 정보", ["collocation:보행자"]]
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
  window.lessonGuideL4LessonChunks["l4-09"] = {
    id: "l4-09",
    number: 9,
    titleKo: "사건과 사고",
    titleZh: "事件和事故",
    pages: "120-131",
    status: "draft",
    progress: {
      vocabulary: "draft-p120-p131",
      dialogue: "draft-p123-p125",
      culture: "draft-p130",
      practice: "draft-p123-p130"
    },
    vocabularySources: [
      { page: 120, label: "단원 제목", note: "课题、活动目标和核心主题" },
      { page: 122, label: "어휘", note: "事故经过、受伤部位和治疗相关表达" },
      { page: 123, label: "문법 1", note: "V-(으)ㄹ 뻔하다 和险些发生的事故" },
      { page: 124, label: "문법 2", note: "N(으)로 인해 和新闻式原因表达" },
      { page: 125, label: "말하기", note: "事故说明和安慰表达" },
      { page: 126, label: "듣기/발음", note: "交通事故说明与发音练习" },
      { page: 127, label: "읽기 전", note: "事件类型与人物角色词汇" },
      { page: 128, label: "읽기", note: " 절도와 방화 사건 기사" },
      { page: 130, label: "문화와 정보", note: "韩国常见事故和预防方法" },
      { page: 131, label: "배운 어휘 확인", note: "本课复习词汇补充" }
    ],
    goals: [
      "能讲述自己经历过的事件或事故。",
      "能用 V-(으)ㄹ 뻔하다 表达险些发生但没有发生的情况。",
      "能用 N(으)로 인해 说明事故、新闻或社会问题的原因。",
      "能阅读事件新闻，并理解韩国事故预防相关信息。"
    ],
    grammar: [
      {
        pattern: "V-(으)ㄹ 뻔하다",
        zh: "差点儿……",
        guide: "表示某事几乎发生，但最终没有发生。常用于危险、事故、失误等场景。",
        examples: [
          { ko: "너무 미끄러워서 저도 넘어질 뻔했어요.", zh: "太滑了，我也差点摔倒。" },
          { ko: "회사 기계를 만지다가 크게 다칠 뻔했어요.", zh: "碰公司机器时差点受重伤。" }
        ],
        translations: {
          en: {
            meaning: "almost did...",
            guide: "Shows that something nearly happened but did not, often in dangerous or accidental situations."
          }
        }
      },
      {
        pattern: "N(으)로 인해",
        zh: "由于……；因……",
        guide: "书面、正式的原因表达，经常用于新闻、公告、事故说明和社会问题。",
        examples: [
          { ko: "태풍으로 인해 비행기 출발이 지연되고 있습니다.", zh: "由于台风，飞机起飞正在延误。" },
          { ko: "엘리베이터 수리로 인해 10시까지 운행되지 않습니다.", zh: "由于电梯维修，到10点之前不运行。" }
        ],
        translations: {
          en: {
            meaning: "due to...; because of...",
            guide: "A formal cause expression often used in news, notices, accident reports, and social issues."
          }
        }
      }
    ],
    vocabulary,
    dialogues: [
      {
        id: "dialogue-01",
        title: "넘어질 뻔했어요",
        page: 123,
        source: "문법 1 대화",
        focus: "V-(으)ㄹ 뻔하다",
        sceneZh: "路上下雪很滑，对话双方谈到差点摔倒。",
        learningPoints: [
          "넘어질 뻔했어요 表示差一点摔倒，但最后没有摔倒。",
          "길이 많이 미끄럽다 是事故原因说明里很常见的表达。"
        ],
        lines: [
          { speaker: "가", ko: "밖에 눈이 와서 길이 많이 미끄럽지요?", zh: "外面下雪了，路很滑吧？", guide: "미끄럽지요? 用来确认双方都能感受到的情况。" },
          { speaker: "나", ko: "네, 너무 미끄러워서 저도 넘어질 뻔했어요.", zh: "是的，太滑了，我也差点摔倒。", guide: "-을 뻔했어요 表示差点发生但没有发生。" }
        ],
        rolePlays: [
          { title: "상황 묻기", promptZh: "问外面下雪了，路是不是很滑。", answerKo: "밖에 눈이 와서 길이 많이 미끄럽지요?" },
          { title: "위험 말하기", promptZh: "说路太滑了，自己也差点摔倒。", answerKo: "너무 미끄러워서 저도 넘어질 뻔했어요." }
        ],
        drills: [
          { pattern: "V-(으)ㄹ 뻔하다", promptZh: "说“差点被车撞”。", answerKo: "차에 치일 뻔했어요." },
          { pattern: "V-(으)ㄹ 뻔하다", promptZh: "说“差点受重伤”。", answerKo: "크게 다칠 뻔했어요." }
        ],
        translations: {
          en: {
            scene: "Because it snowed and the road was slippery, the speakers talk about almost falling.",
            learningPoints: [
              "넘어질 뻔했어요 means the person almost fell but did not.",
              "길이 많이 미끄럽다 is a common way to explain the cause of a near accident."
            ]
          }
        }
      },
      {
        id: "dialogue-02",
        title: "태풍으로 인해",
        page: 124,
        source: "문법 2 대화",
        focus: "N(으)로 인해",
        sceneZh: "一方询问飞机今天是否能起飞，另一方用正式语气说明因台风导致起飞延误。",
        learningPoints: [
          "태풍으로 인해 是新闻和公告中常见的正式原因表达。",
          "출발이 지연되고 있습니다 比“늦어져요”更正式。"
        ],
        lines: [
          { speaker: "가", ko: "오늘 비행기가 출발할 수 있나요?", zh: "今天飞机能起飞吗？", guide: "출발할 수 있나요? 用来询问交通工具能否按计划出发。" },
          { speaker: "나", ko: "태풍으로 인해 비행기 출발이 지연되고 있습니다.", zh: "由于台风，飞机起飞正在延误。", guide: "-으로 인해 后面接因前项造成的结果。" }
        ],
        rolePlays: [
          { title: "출발 여부 묻기", promptZh: "问今天飞机能起飞吗。", answerKo: "오늘 비행기가 출발할 수 있나요?" },
          { title: "원인 말하기", promptZh: "说由于台风，飞机起飞延误。", answerKo: "태풍으로 인해 비행기 출발이 지연되고 있습니다." }
        ],
        drills: [
          { pattern: "N(으)로 인해", promptZh: "说“由于电梯维修，到10点之前不运行”。", answerKo: "엘리베이터 수리로 인해 10시까지 운행되지 않습니다." },
          { pattern: "N(으)로 인해", promptZh: "说“由于过量摄取方便食品，成人病增加”。", answerKo: "인스턴트 과다 섭취로 인해 성인병이 증가하고 있습니다." }
        ],
        translations: {
          en: {
            scene: "One person asks whether the plane can depart today, and the other formally explains that the departure is delayed due to a typhoon.",
            learningPoints: [
              "태풍으로 인해 is a formal cause expression often used in news and notices.",
              "출발이 지연되고 있습니다 is more formal than 늦어져요."
            ]
          }
        }
      },
      {
        id: "dialogue-03",
        title: "팔이 조금 부러졌어요",
        page: 125,
        source: "말하기 대화",
        focus: "사고 설명과 위로",
        sceneZh: "안젤라 去看望受伤的 라흐만，라흐만 说明窗框突然倒下导致胳膊骨折，안젤라 表示安慰。",
        learningPoints: [
          "어떻게 하다가 이렇게 됐어요? 用来询问事故经过。",
          "큰일 날 뻔했네요 用来表达“差点出大事”。",
          "다치지 않아서 다행이에요 是安慰事故经历者的自然表达。"
        ],
        lines: [
          { speaker: "안젤라", ko: "라흐만 씨, 괜찮아요? 많이 다쳤어요?", zh: "라흐만，你还好吗？伤得严重吗？", guide: "많이 다쳤어요? 是关心受伤程度的问法。" },
          { speaker: "라흐만", ko: "팔이 조금 부러졌어요. 한 달 동안 깁스를 하고 있어야 된대요.", zh: "胳膊有点骨折了。医生说要打一个月石膏。", guide: "-어야 된대요 表示转述别人说的必要事项。" },
          { speaker: "안젤라", ko: "그런데 어떻게 하다가 이렇게 됐어요?", zh: "可是这是怎么弄成这样的？", guide: "어떻게 하다가 用来问事故发生的过程。" },
          { speaker: "라흐만", ko: "일하는데 옆에 세워 놓은 새시가 갑자기 쓰러졌어요.", zh: "工作的时候，旁边立着的窗框突然倒了。", guide: "갑자기 쓰러졌어요 说明事故突然发生。" },
          { speaker: "안젤라", ko: "그랬군요. 정말 큰일 날 뻔했네요. 그래도 다른 곳은 다치지 않아서 다행이에요.", zh: "原来如此。真的差点出大事了。不过幸好其他地方没有受伤。", guide: "그래도 后面接值得庆幸的部分。" },
          { speaker: "라흐만", ko: "저도 그렇게 생각해요.", zh: "我也这么想。", guide: "그렇게 생각해요 表示同意对方的判断。" },
          { speaker: "안젤라", ko: "잘 쉬시고 빨리 나으세요.", zh: "好好休息，快点好起来。", guide: "빨리 나으세요 是探病和慰问时的常用表达。" },
          { speaker: "라흐만", ko: "네, 고마워요.", zh: "好的，谢谢。", guide: "接受关心时自然回应。" }
        ],
        rolePlays: [
          { title: "사고 경위 묻기", promptZh: "问对方事故是怎么发生的。", answerKo: "어떻게 하다가 이렇게 됐어요?" },
          { title: "위로하기", promptZh: "说差点出大事了，但幸好其他地方没受伤。", answerKo: "정말 큰일 날 뻔했네요. 그래도 다른 곳은 다치지 않아서 다행이에요." }
        ],
        drills: [
          { pattern: "상태 말하기", promptZh: "说“脚踝扭伤了，要拄两周拐杖”。", answerKo: "발목이 삐었어요. 2주 동안 목발을 짚어야 해요." },
          { pattern: "위로 표현", promptZh: "说“真是万幸，这种程度结束就很好了”。", answerKo: "천만다행이에요. 이 정도로 끝난 게 어디예요?" }
        ],
        translations: {
          en: {
            scene: "Angela visits Rahman after an accident. Rahman explains that a sash suddenly fell while he was working and broke his arm, and Angela comforts him.",
            learningPoints: [
              "어떻게 하다가 이렇게 됐어요? asks how an accident happened.",
              "큰일 날 뻔했네요 means it almost became a serious accident.",
              "다치지 않아서 다행이에요 is a natural way to comfort someone after an accident."
            ]
          }
        }
      }
    ],
    culture: {
      titleKo: "사고와 예방",
      titleZh: "事故与预防",
      page: 130,
      summaryZh: "文章介绍韩国常见事故的比例，指出交通事故和火灾事故较多，并强调遵守交通法规、保持安全距离和避免边走路或开车边看手机等预防方法。",
      keyTerms: [
        { ko: "교통사고", zh: "韩国常见事故中占比最高的一类事故", translations: { en: { meaning: "traffic accidents, the most common accident type in Korea" } } },
        { ko: "사고 예방", zh: "通过遵守规则、提前应对突发情况、保持安全距离等方式减少事故", translations: { en: { meaning: "preventing accidents by following rules, preparing for unexpected situations, and maintaining safe distance" } } },
        { ko: "휴대 전화로 인한 교통사고", zh: "因开车或走路时使用手机而增加的交通事故", translations: { en: { meaning: "traffic accidents caused by using mobile phones while driving or walking" } } }
      ],
      paragraphs: [
        {
          ko: "국가통계포털(http://kosis.kr)에 따르면 한국에서는 대체로 매년 30만 건의 사고가 발생한다. 이 중에 교통사고가 압도적으로 많아 전체 사고의 70% 이상을 차지한다. 교통사고 다음으로는 화재 사고가 많은데 대략 전체 사고의 15% 정도이다. 그리고 등산 사고, 추락 사고, 자전거 사고가 뒤를 잇는데 발생 건수는 앞의 두 사고보다 훨씬 적어서 각각 전체 사고의 2% 안팎이다.",
          zh: "根据国家统计门户网站（http://kosis.kr）的资料，韩国大体上每年发生约30万起事故。其中交通事故压倒性地多，占全部事故的70%以上。交通事故之后较多的是火灾事故，大约占全部事故的15%。接下来是登山事故、坠落事故和自行车事故，但发生件数比前两类事故少得多，分别约占全部事故的2%左右。",
          guide: "第一段用统计数据说明事故类型的比例：交通事故最多，其次是火灾事故，其他事故占比较低。",
          translations: {
            en: {
              translation: "According to the Korean Statistical Information Service (http://kosis.kr), about 300,000 accidents occur in Korea each year. Among them, traffic accidents are overwhelmingly common, accounting for more than 70% of all accidents. After traffic accidents, fire accidents are the next most common, making up about 15% of all accidents. Mountain climbing accidents, falling accidents, and bicycle accidents follow, but their numbers are far lower than the first two types, each accounting for around 2% of all accidents.",
              guide: "The first paragraph explains the proportions of accident types using statistics."
            }
          }
        },
        {
          ko: "이 결과를 볼 때 많은 사고는 우리가 조금만 주의하면 대부분 예방할 수 있는 것들이다. 대표적인 예로 교통사고는 교통 법규를 잘 지키고 갑자기 생길지도 모르는 돌발 상황에 미리 대비하여 운전하는 습관을 가진다면 예방할 수 있다. 과속을 하면 안 되고 무리하게 추월하거나 끼어들기를 하는 것은 위험하다. 특히 사고 예방을 위해서는 안전거리를 유지하는 습관을 갖는 게 좋다.",
          zh: "从这个结果来看，很多事故只要我们稍微注意，大部分都可以预防。代表性的例子是交通事故：如果遵守交通法规，并养成提前应对可能突然出现的突发情况的驾驶习惯，就可以预防。不能超速，勉强超车或强行并线也很危险。尤其为了预防事故，最好养成保持安全距离的习惯。",
          guide: "第二段强调交通事故预防：守规则、预判突发情况、不超速、不强行超车或并线、保持安全距离。",
          translations: {
            en: {
              translation: "Looking at these results, many accidents are things we can mostly prevent if we are just a little careful. A representative example is traffic accidents: they can be prevented if drivers follow traffic laws and develop the habit of preparing in advance for unexpected situations that may suddenly occur. Drivers should not speed, and reckless overtaking or cutting in is dangerous. In particular, it is good to keep the habit of maintaining a safe distance to prevent accidents.",
              guide: "The second paragraph emphasizes prevention: follow rules, anticipate unexpected situations, avoid speeding or cutting in, and keep a safe distance."
            }
          }
        },
        {
          ko: "그리고 최근에는 휴대 전화로 인한 교통사고가 늘고 있는데 운전 중 휴대 전화를 보거나 휴대 전화를 사용하는 것은 매우 위험하다. 뿐만 아니라 보행자도 휴대 전화를 보면서 걸어가는 것은 사고의 위험이 높으므로 주의해야 한다.",
          zh: "另外，最近因手机导致的交通事故正在增加，开车时看手机或使用手机非常危险。不仅如此，行人边看手机边走也会提高事故风险，因此必须注意。",
          guide: "第三段补充现代生活中的风险：开车和走路时使用手机都会增加事故危险。",
          translations: {
            en: {
              translation: "Recently, traffic accidents caused by mobile phones have been increasing. Looking at or using a mobile phone while driving is very dangerous. In addition, pedestrians must also be careful because walking while looking at a mobile phone greatly increases the risk of accidents.",
              guide: "The final paragraph adds a modern risk: using a phone while driving or walking increases accident danger."
            }
          }
        }
      ],
      questions: [
        {
          q: "한국에서는 어떤 사고가 많이 발생합니까?",
          zh: "在韩国，哪些事故发生较多？",
          answerZh: "交通事故最多，占全部事故的70%以上；其次是火灾事故，大约占15%。",
          translations: {
            en: {
              translation: "What kinds of accidents occur often in Korea?",
              answer: "Traffic accidents occur the most, accounting for more than 70% of all accidents. Fire accidents are next, at about 15%."
            }
          }
        },
        {
          q: "최근에는 어떤 이유 때문에 교통사고가 많이 발생하고 있다고 합니까?",
          zh: "最近据说因为什么原因导致交通事故增多？",
          answerZh: "因手机导致的交通事故增多，特别是开车时看手机或使用手机很危险。",
          translations: {
            en: {
              translation: "Recently, what reason is said to be causing many traffic accidents?",
              answer: "Traffic accidents caused by mobile phones are increasing, especially from looking at or using a phone while driving."
            }
          }
        },
        {
          q: "여러분 고향에서는 어떤 사고가 많이 발생합니까?",
          zh: "在你的家乡，哪些事故发生较多？",
          answerZh: "可以结合自己的家乡说明交通事故、火灾事故、自然灾害或生活安全事故，并说出原因和预防方法。",
          translations: {
            en: {
              translation: "What kinds of accidents happen often in your hometown?",
              answer: "You can describe traffic accidents, fire accidents, natural disasters, or daily safety accidents in your hometown and explain their causes and prevention methods."
            }
          }
        }
      ],
      translations: {
        en: {
          title: "Accidents and Prevention",
          summary: "The article introduces common accident types in Korea, notes that traffic and fire accidents are frequent, and explains prevention methods such as following traffic laws, keeping a safe distance, and avoiding phone use while driving or walking."
        }
      }
    },
    practice: [
      {
        type: "grammar",
        title: "V-(으)ㄹ 뻔하다",
        promptZh: "用 -을 뻔하다 说：路太滑了，差点摔倒。",
        answerKo: "길이 너무 미끄러워서 넘어질 뻔했어요.",
        translations: {
          en: {
            title: "V-(으)ㄹ 뻔하다",
            prompt: "Use -을 뻔하다: The road was so slippery that I almost fell.",
            answer: "길이 너무 미끄러워서 넘어질 뻔했어요."
          }
        }
      },
      {
        type: "grammar",
        title: "N(으)로 인해",
        promptZh: "用 -으로 인해 说：由于台风，飞机起飞延误。",
        answerKo: "태풍으로 인해 비행기 출발이 지연됐다고 합니다.",
        translations: {
          en: {
            title: "N(으)로 인해",
            prompt: "Use -으로 인해: Due to the typhoon, the flight departure was delayed.",
            answer: "태풍으로 인해 비행기 출발이 지연됐다고 합니다."
          }
        }
      },
      {
        type: "speaking",
        title: "사고 위로하기",
        promptZh: "朋友说胳膊骨折了，要打一个月石膏。请用韩语安慰。",
        answerKo: "정말 큰일 날 뻔했네요. 그래도 다른 곳은 다치지 않아서 다행이에요.",
        translations: {
          en: {
            title: "Comforting Someone After an Accident",
            prompt: "Your friend says their arm broke and they need a cast for a month. Comfort them in Korean.",
            answer: "정말 큰일 날 뻔했네요. 그래도 다른 곳은 다치지 않아서 다행이에요."
          }
        }
      },
      {
        type: "reading",
        title: "사건 기사 읽기",
        promptZh: "阅读题：p.128 的 기사 가 是什么案件？",
        answerKo: "절도 사건입니다.",
        translations: {
          en: {
            title: "Reading Incident News",
            prompt: "Reading: What kind of case is article 가 on p.128?",
            answer: "절도 사건입니다."
          }
        }
      },
      {
        type: "culture",
        title: "사고와 예방",
        promptZh: "文化题：为了预防交通事故，应该养成什么习惯？",
        answerKo: "교통 법규를 잘 지키고 돌발 상황에 대비하며 안전거리를 유지하는 습관을 가져야 합니다.",
        translations: {
          en: {
            title: "Accidents and Prevention",
            prompt: "Culture: What habits should people develop to prevent traffic accidents?",
            answer: "교통 법규를 잘 지키고 돌발 상황에 대비하며 안전거리를 유지하는 습관을 가져야 합니다."
          }
        }
      }
    ],
    translations: {
      en: {
        title: "Incidents and Accidents",
        goals: [
          "Talk about incidents or accidents one has experienced.",
          "Use V-(으)ㄹ 뻔하다 to describe something that almost happened but did not.",
          "Use N(으)로 인해 to formally explain causes in accidents, news, and social issues.",
          "Read incident news and understand accident-prevention information in Korea."
        ]
      }
    }
  };
})();
