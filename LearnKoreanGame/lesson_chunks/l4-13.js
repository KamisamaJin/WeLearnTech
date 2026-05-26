(() => {
  const makeTips = (tips) => (tips || []).map((text) => {
    const [type, body] = text.includes(":") ? text.split(/:(.+)/) : ["collocation", text];
    return { type, text: body.trim() };
  });

  const vocabulary = [
    ["환경 보호", "环境保护", "名词短语", "environmental protection", "noun phrase", "환경 보호를 위해 작은 실천이 필요해요.", "为了环境保护，需要小小的实践。", "Small actions are needed for environmental protection.", "168", "단원 제목", ["collocation:환경 보호"]],
    ["환경 보호 실천 어휘", "环境保护实践词汇", "名词短语", "environmental-protection action vocabulary", "noun phrase", "환경 보호 실천 어휘를 익혀 보세요.", "请学习环境保护实践词汇。", "Learn vocabulary for environmental-protection actions.", "168", "단원 제목", ["collocation:실천 어휘"]],
    ["환경 오염", "环境污染", "名词短语", "environmental pollution", "noun phrase", "환경 오염으로 인한 건강 문제를 이야기해 보세요.", "请谈谈环境污染造成的健康问题。", "Talk about health problems caused by environmental pollution.", "168", "단원 제목", ["collocation:환경 오염"]],
    ["건강 문제", "健康问题", "名词短语", "health problem", "noun phrase", "미세 먼지 때문에 건강 문제가 생겼어요.", "因为细颗粒物产生了健康问题。", "Fine dust caused health problems.", "168", "단원 제목", ["collocation:건강 문제"]],
    ["환경 보호 실천 사례", "环境保护实践案例", "名词短语", "example of environmental protection in practice", "noun phrase", "환경 보호 실천 사례를 소개하는 글을 써 보세요.", "请写一篇介绍环境保护实践案例的文章。", "Write about examples of environmental protection in practice.", "168", "단원 제목", ["collocation:실천 사례"]],
    ["환경 보전 운동", "环境保全运动", "名词短语", "environmental conservation movement", "noun phrase", "이번 문화 수업에서는 환경 보전 운동을 배워요.", "本课文化部分学习环境保全运动。", "This culture section covers environmental conservation movements.", "168", "문화와 정보", ["collocation:환경 보전 운동"]],
    ["친환경", "环保的，环境友好的", "名词/冠形词", "eco-friendly", "noun/determiner", "친환경 교통 주간 캠페인에 참여해 보세요.", "请参加环保交通周活动。", "Take part in an eco-friendly transport week campaign.", "168", "도입", ["collocation:친환경 교통"]],
    ["캠페인", "宣传活动，活动", "名词", "campaign", "noun", "환경 보호 캠페인에 동참해 주세요.", "请参与环境保护活动。", "Please join the environmental protection campaign.", "168", "도입", ["collocation:캠페인에 동참하다"]],
    ["동참하다", "参与，加入", "动词", "to join; participate", "verb", "깨끗한 환경을 위해 캠페인에 동참해 주세요.", "为了干净的环境，请参与活动。", "Join the campaign for a clean environment.", "168", "도입", ["collocation:동참하다"]],
    ["깨끗한 환경", "干净的环境", "名词短语", "clean environment", "noun phrase", "깨끗한 환경을 만들기 위해 무엇을 해요?", "为了创造干净的环境，你会做什么？", "What do you do to create a clean environment?", "168", "도입", ["collocation:깨끗한 환경"]],
    ["미세 먼지가 심하다", "细颗粒物严重", "形容词短语", "fine dust is severe", "adjective phrase", "요즘 미세 먼지가 심해서 목이 아파요.", "最近细颗粒物严重，所以喉咙疼。", "Fine dust is severe these days, so my throat hurts.", "170", "어휘", ["collocation:미세 먼지가 심하다"]],
    ["대기 오염이 발생하다", "发生大气污染", "动词短语", "air pollution occurs", "verb phrase", "공장과 자동차 때문에 대기 오염이 발생해요.", "因为工厂和汽车会发生大气污染。", "Air pollution occurs because of factories and cars.", "170", "어휘", ["collocation:대기 오염"]],
    ["수질 오염이 심각하다", "水质污染严重", "形容词短语", "water pollution is serious", "adjective phrase", "강의 수질 오염이 심각해졌어요.", "河流的水质污染变严重了。", "Water pollution in the river has become serious.", "170", "어휘", ["collocation:수질 오염"]],
    ["물고기가 떼죽음을 당하다", "鱼群大量死亡", "动词短语", "fish die en masse", "verb phrase", "강물이 오염돼서 물고기가 떼죽음을 당했어요.", "河水被污染，鱼群大量死亡。", "The river was polluted and fish died en masse.", "170", "어휘", ["collocation:떼죽음을 당하다"]],
    ["농약에 중독되다", "农药中毒", "动词短语", "to be poisoned by pesticides", "verb phrase", "농약에 중독되지 않도록 조심해야 해요.", "要小心不要农药中毒。", "People should be careful not to be poisoned by pesticides.", "170", "어휘", ["collocation:농약에 중독되다"]],
    ["토양 오염을 일으키다", "引起土壤污染", "动词短语", "to cause soil pollution", "verb phrase", "농약을 많이 쓰면 토양 오염을 일으킬 수 있어요.", "大量使用农药可能引起土壤污染。", "Using many pesticides can cause soil pollution.", "170", "어휘", ["collocation:토양 오염"]],
    ["배기가스를 줄이다", "减少尾气", "动词短语", "to reduce exhaust gas", "verb phrase", "자동차 배기가스를 줄이도록 가까운 거리는 걸어 다니세요.", "为了减少汽车尾气，近距离请步行。", "Walk short distances to reduce car exhaust.", "170", "어휘", ["collocation:배기가스를 줄이다"]],
    ["차량 2부제를 실시하다", "实行车辆单双号限行", "动词短语", "to implement alternate-day driving restrictions", "verb phrase", "대기 오염을 줄이기 위해 차량 2부제를 실시했어요.", "为了减少大气污染，实行了车辆单双号限行。", "Alternate-day driving restrictions were implemented to reduce air pollution.", "170", "어휘", ["collocation:차량 2부제"]],
    ["대체 에너지를 개발하다", "开发替代能源", "动词短语", "to develop alternative energy", "verb phrase", "석유와 석탄을 대신할 대체 에너지를 개발해야 해요.", "应该开发替代石油和煤炭的能源。", "We should develop alternative energy to replace oil and coal.", "170", "어휘", ["collocation:대체 에너지"]],
    ["농약 사용을 줄이다", "减少农药使用", "动词短语", "to reduce pesticide use", "verb phrase", "농약 사용을 줄이면 토양 오염도 줄일 수 있어요.", "减少农药使用也能减少土壤污染。", "Reducing pesticide use can also reduce soil pollution.", "170", "어휘", ["collocation:농약 사용을 줄이다"]],
    ["쓰레기 종량제를 실시하다", "实行垃圾按量收费制", "动词短语", "to implement a volume-based waste fee system", "verb phrase", "쓰레기 종량제를 실시하면 쓰레기 양을 줄일 수 있어요.", "实行垃圾按量收费制可以减少垃圾量。", "A volume-based waste fee system can reduce waste.", "170", "어휘", ["collocation:쓰레기 종량제"]],
    ["일회용품 사용을 줄이다", "减少一次性用品使用", "动词短语", "to reduce disposable product use", "verb phrase", "일회용품 사용을 줄이도록 개인 컵을 가지고 다녀요.", "为了减少一次性用品使用，随身带个人杯。", "Carry a personal cup to reduce disposable product use.", "170", "어휘", ["collocation:일회용품 사용"]],
    ["생활 하수 정화 처리를 하다", "处理生活污水净化", "动词短语", "to treat domestic wastewater", "verb phrase", "생활 하수 정화 처리를 잘해야 해요.", "应该做好生活污水净化处理。", "Domestic wastewater should be treated properly.", "170", "어휘", ["collocation:생활 하수"]],
    ["폐수를 무단으로 버리지 않다", "不擅自排放废水", "动词短语", "not to dump wastewater illegally", "verb phrase", "공장은 폐수를 무단으로 버리지 않아야 해요.", "工厂不应擅自排放废水。", "Factories should not dump wastewater illegally.", "170", "어휘", ["collocation:폐수"]],
    ["친환경 세제를 사용하다", "使用环保洗涤剂", "动词短语", "to use eco-friendly detergent", "verb phrase", "수질 오염을 줄이도록 친환경 세제를 사용해요.", "为了减少水质污染，使用环保洗涤剂。", "Use eco-friendly detergent to reduce water pollution.", "170", "어휘", ["collocation:친환경 세제"]],
    ["V-는 한", "只要……就……", "语法表达", "as long as...", "grammar expression", "환경 오염의 심각성을 아는 한 모두 열심히 참여할 거예요.", "只要知道环境污染的严重性，大家都会积极参与。", "As long as people understand the seriousness of environmental pollution, they will participate actively.", "171", "문법 1", ["form:동사 + -는 한"]],
    ["심각성", "严重性", "名词", "seriousness", "noun", "환경 오염의 심각성을 알아야 해요.", "应该了解环境污染的严重性。", "People should understand the seriousness of environmental pollution.", "171", "문법 1", ["collocation:심각성"]],
    ["참여하다", "参与", "动词", "to participate", "verb", "환경 보호 활동에 열심히 참여해요.", "积极参加环境保护活动。", "Participate actively in environmental protection activities.", "171", "문법 1", ["collocation:참여하다"]],
    ["대기 오염 문제", "大气污染问题", "名词短语", "air pollution problem", "noun phrase", "노력하지 않는 한 대기 오염 문제는 계속될 거예요.", "只要不努力，大气污染问题就会持续。", "Unless people make efforts, the air pollution problem will continue.", "171", "문법 1", ["collocation:대기 오염 문제"]],
    ["세제", "洗涤剂", "名词", "detergent", "noun", "세제를 많이 사용하는 한 수질 오염은 더 심각해질 거예요.", "只要大量使用洗涤剂，水质污染就会更严重。", "As long as people use a lot of detergent, water pollution will become more serious.", "171", "문법 1", ["collocation:세제를 사용하다"]],
    ["일회용품", "一次性用品", "名词", "disposable product", "noun", "일회용품을 계속 사는 한 쓰레기 양을 줄일 수 없어요.", "只要继续买一次性用品，就无法减少垃圾量。", "As long as people keep buying disposable products, waste cannot be reduced.", "171", "문법 1", ["collocation:일회용품"]],
    ["애쓰다", "费心，努力", "动词", "to make efforts", "verb", "직원들이 끝까지 애쓰는 한 회사의 미래는 밝아요.", "只要员工努力到最后，公司的未来就光明。", "As long as employees keep making efforts, the company's future is bright.", "171", "문법 1", ["collocation:애쓰다"]],
    ["논밭", "田地", "名词", "fields and paddies", "noun", "논밭에 농약을 많이 뿌리면 건강을 지키기 어려워요.", "如果在田地里大量喷洒农药，就难以守护健康。", "If many pesticides are sprayed on fields, it is hard to protect health.", "171", "문법 1", ["collocation:논밭"]],
    ["돈을 아껴 쓰다", "省着花钱", "动词短语", "to spend money sparingly", "verb phrase", "돈을 아껴 쓰지 않는 한 많이 모으기 어려워요.", "只要不省着花钱，就很难攒很多钱。", "Unless you spend money sparingly, it is hard to save much.", "171", "문법 1", ["collocation:아껴 쓰다"]],
    ["V-도록", "为了……；以便……", "语法表达", "so that; in order to", "grammar expression", "상하지 않도록 냉장고에 넣어 두세요.", "为了不坏掉，请放进冰箱。", "Put it in the refrigerator so that it does not spoil.", "172", "문법 2", ["form:동사 + -도록"]],
    ["보관하다", "保管，保存", "动词", "to store; keep", "verb", "남은 음식은 어디에 보관할까요?", "剩下的食物保存在哪里呢？", "Where should we store the leftover food?", "172", "문법 2", ["collocation:보관하다"]],
    ["상하다", "变质，坏掉", "动词", "to spoil", "verb", "음식이 상하지 않도록 냉장고에 넣으세요.", "为了不让食物变质，请放进冰箱。", "Put food in the refrigerator so it does not spoil.", "172", "문법 2", ["collocation:상하지 않도록"]],
    ["구급차", "救护车", "名词", "ambulance", "noun", "구급차가 지나가도록 길을 비켜 주세요.", "请让路以便救护车通过。", "Please make way so the ambulance can pass.", "172", "문법 2", ["collocation:구급차"]],
    ["비키다", "避开，让开", "动词", "to move aside", "verb", "구급차가 지나가도록 길을 비켜 주세요.", "请让路以便救护车通过。", "Move aside so the ambulance can pass.", "172", "문법 2", ["collocation:길을 비키다"]],
    ["비닐봉지", "塑料袋", "名词", "plastic bag", "noun", "비닐봉지를 많이 사용하면 쓰레기 양이 늘어요.", "大量使用塑料袋会增加垃圾量。", "Using many plastic bags increases the amount of waste.", "172", "문법 2", ["collocation:비닐봉지"]],
    ["오염시키다", "污染", "动词", "to pollute", "verb", "쓰레기가 땅을 오염시킬 수 있어요.", "垃圾可能污染土地。", "Waste can pollute the land.", "172", "문법 2", ["collocation:오염시키다"]],
    ["재활용 쓰레기 봉투", "可回收垃圾袋", "名词短语", "recycling trash bag", "noun phrase", "재활용 쓰레기 봉투를 사용할게요.", "我会使用可回收垃圾袋。", "I will use recycling trash bags.", "172", "문법 2", ["collocation:재활용 쓰레기"]],
    ["개인 컵", "个人杯", "名词短语", "personal cup", "noun phrase", "일회용품 사용을 줄이도록 개인 컵을 가지고 다니세요.", "为了减少一次性用品使用，请随身带个人杯。", "Carry a personal cup to reduce disposable product use.", "172", "문법 2", ["collocation:개인 컵"]],
    ["예방 주사", "预防针", "名词短语", "vaccination", "noun phrase", "감기에 걸리지 않도록 예방 주사를 맞아요.", "为了不感冒，打预防针。", "Get vaccinated so you do not catch a cold.", "172", "문법 2", ["collocation:예방 주사"]],
    ["달력에 메모하다", "记在日历上", "动词短语", "to write a note on a calendar", "verb phrase", "약속을 잊어버리지 않도록 달력에 메모하세요.", "为了不忘约定，请记在日历上。", "Write it on the calendar so you do not forget the appointment.", "172", "문법 2", ["collocation:달력에 메모하다"]],
    ["음식물 쓰레기", "厨余垃圾", "名词短语", "food waste", "noun phrase", "음식물 쓰레기가 생기지 않도록 먹을 만큼만 만들어요.", "为了不产生厨余垃圾，只做够吃的量。", "Make only as much food as you will eat to avoid food waste.", "172", "문법 2", ["collocation:음식물 쓰레기"]],
    ["목이 아프다", "喉咙疼", "形容词短语", "throat hurts", "adjective phrase", "목이 아파서 병원에 갔다 오는 길이에요.", "因为喉咙疼，正在从医院回来。", "I am on my way back from the hospital because my throat hurts.", "173", "말하기", ["collocation:목이 아프다"]],
    ["병원에 갔다 오는 길", "从医院回来的路上", "名词短语", "on the way back from the hospital", "noun phrase", "병원에 갔다 오는 길이에요.", "正在从医院回来的路上。", "I am on my way back from the hospital.", "173", "말하기", ["collocation:갔다 오는 길"]],
    ["비슷한 증상", "相似症状", "名词短语", "similar symptoms", "noun phrase", "비슷한 증상으로 온 사람이 많았어요.", "因相似症状来的人很多。", "Many people came with similar symptoms.", "173", "말하기", ["collocation:비슷한 증상"]],
    ["마스크를 쓰고 다니다", "戴着口罩出门", "动词短语", "to wear a mask when going around", "verb phrase", "목이 더 아프지 않도록 마스크를 쓰고 다니세요.", "为了喉咙不更疼，请戴着口罩出门。", "Wear a mask so your throat does not hurt more.", "173", "말하기", ["collocation:마스크를 쓰다"]],
    ["해결되다", "被解决", "动词", "to be solved", "verb", "미세 먼지 문제가 해결되지 않는 한 병원을 찾는 사람은 늘어날 거예요.", "只要细颗粒物问题不解决，去医院的人就会增加。", "As long as the fine dust problem is not solved, more people will visit hospitals.", "173", "말하기", ["collocation:문제가 해결되다"]],
    ["눈병이 생기다", "得眼病", "动词短语", "to develop an eye disease", "verb phrase", "눈병이 생기지 않도록 조심하세요.", "请小心不要得眼病。", "Be careful so you do not develop an eye disease.", "173", "말하기", ["collocation:눈병이 생기다"]],
    ["기침을 계속하다", "一直咳嗽", "动词短语", "to keep coughing", "verb phrase", "미세 먼지 때문에 기침을 계속해요.", "因为细颗粒物一直咳嗽。", "I keep coughing because of fine dust.", "173", "말하기", ["collocation:기침을 계속하다"]],
    ["피부병", "皮肤病", "名词", "skin disease", "noun", "물이 깨끗하지 않아서 피부병이 생겼어요.", "因为水不干净，得了皮肤病。", "I developed a skin disease because the water was not clean.", "173", "단어장", ["collocation:피부병"]],
    ["종이류", "纸类", "名词", "paper category", "noun", "신문과 공책은 종이류로 분리배출해요.", "报纸和本子按纸类分类投放。", "Newspapers and notebooks are separated as paper.", "174", "듣기", ["collocation:종이류"]],
    ["종이팩류", "纸盒类", "名词", "paper-pack category", "noun", "우유팩은 종이팩류로 버려요.", "牛奶盒按纸盒类丢弃。", "Milk cartons are disposed of as paper packs.", "174", "듣기", ["collocation:종이팩류"]],
    ["유리병류", "玻璃瓶类", "名词", "glass bottle category", "noun", "음료수병은 유리병류로 분리해요.", "饮料瓶按玻璃瓶类分类。", "Drink bottles are separated as glass bottles.", "174", "듣기", ["collocation:유리병류"]],
    ["금속캔류", "金属罐类", "名词", "metal can category", "noun", "참치캔과 음료수캔은 금속캔류예요.", "金枪鱼罐和饮料罐是金属罐类。", "Tuna cans and drink cans are metal cans.", "174", "듣기", ["collocation:금속캔류"]],
    ["비닐류", "塑料膜类", "名词", "vinyl/plastic film category", "noun", "과자 봉투는 비닐류로 분리배출해요.", "零食袋按塑料膜类分类投放。", "Snack bags are separated as vinyl/plastic film.", "174", "듣기", ["collocation:비닐류"]],
    ["스티로폼류", "泡沫塑料类", "名词", "styrofoam category", "noun", "스티로폼은 따로 분리해서 버려요.", "泡沫塑料要单独分类丢弃。", "Styrofoam is separated and disposed of separately.", "174", "듣기", ["collocation:스티로폼류"]],
    ["플라스틱류", "塑料类", "名词", "plastic category", "noun", "페트병은 플라스틱류로 버려요.", "PET瓶按塑料类丢弃。", "PET bottles are disposed of as plastic.", "174", "듣기", ["collocation:플라스틱류"]],
    ["전지", "电池", "名词", "battery", "noun", "전지는 따로 모아서 버려야 해요.", "电池要单独收集后丢弃。", "Batteries should be collected and disposed of separately.", "174", "듣기", ["collocation:전지"]],
    ["형광등", "荧光灯", "名词", "fluorescent lamp", "noun", "형광등은 지정된 곳에 버리세요.", "荧光灯请丢到指定地点。", "Dispose of fluorescent lamps at designated places.", "174", "듣기", ["collocation:형광등"]],
    ["분리배출", "分类投放", "名词", "separate disposal", "noun", "쓰레기 분리배출에 익숙해졌어요.", "已经习惯垃圾分类投放了。", "I have become used to separate waste disposal.", "174", "듣기", ["collocation:분리배출"]],
    ["지구 온난화", "全球变暖", "名词短语", "global warming", "noun phrase", "지구 온난화는 지구의 기온이 상승하는 현상이에요.", "全球变暖是地球气温上升的现象。", "Global warming is the phenomenon of Earth's temperature rising.", "175", "읽기 전", ["collocation:지구 온난화"]],
    ["기후 변화", "气候变化", "名词短语", "climate change", "noun phrase", "기후 변화로 지구가 몸살을 앓고 있어요.", "地球因气候变化而饱受困扰。", "The Earth is suffering from climate change.", "175", "읽기 전", ["collocation:기후 변화"]],
    ["기온", "气温", "名词", "temperature", "noun", "지구의 기온이 계속 상승하고 있어요.", "地球气温正在持续上升。", "Earth's temperature keeps rising.", "175", "읽기 전", ["collocation:기온이 상승하다"]],
    ["강수량", "降水量", "名词", "precipitation", "noun", "기온이나 강수량이 정상적이지 않아요.", "气温或降水量不正常。", "Temperature or precipitation is abnormal.", "175", "읽기 전", ["collocation:강수량"]],
    ["가뭄", "干旱", "名词", "drought", "noun", "오랫동안 비가 오지 않아 가뭄이 들었어요.", "很久没下雨，发生了干旱。", "There was a drought because it did not rain for a long time.", "175", "읽기 전", ["collocation:가뭄"]],
    ["폭우", "暴雨", "名词", "heavy rain", "noun", "폭우가 내려 이재민이 발생했어요.", "下暴雨导致灾民出现。", "Heavy rain caused displaced victims.", "175", "읽기 전", ["collocation:폭우가 내리다"]],
    ["폭설", "暴雪", "名词", "heavy snow", "noun", "겨울에는 폭설과 한파가 나타났어요.", "冬天出现了暴雪和寒潮。", "Heavy snow and cold waves appeared in winter.", "175", "읽기 전", ["collocation:폭설"]],
    ["이상 기후", "异常气候", "名词短语", "abnormal climate", "noun phrase", "이상 기후가 세계 곳곳에서 나타나고 있어요.", "异常气候正在世界各地出现。", "Abnormal climate patterns are appearing around the world.", "175", "읽기 전", ["collocation:이상 기후"]],
    ["사계절", "四季", "名词", "four seasons", "noun", "한국은 사계절이 뚜렷한 나라예요.", "韩国是四季分明的国家。", "Korea is a country with four distinct seasons.", "176", "읽기", ["collocation:사계절이 뚜렷하다"]],
    ["상승하다", "上升", "动词", "to rise", "verb", "지구의 기온이 상승하고 있어요.", "地球气温正在上升。", "Earth's temperature is rising.", "176", "읽기", ["collocation:기온이 상승하다"]],
    ["현상", "现象", "名词", "phenomenon", "noun", "지구 온난화는 기온이 상승하는 현상이에요.", "全球变暖是气温上升的现象。", "Global warming is a phenomenon of rising temperatures.", "176", "읽기", ["collocation:현상"]],
    ["세계 곳곳", "世界各地", "名词短语", "places around the world", "noun phrase", "이상 기후는 세계 곳곳에서 나타나고 있어요.", "异常气候正在世界各地出现。", "Abnormal climate appears in places around the world.", "176", "읽기", ["collocation:세계 곳곳"]],
    ["이재민", "灾民", "名词", "disaster victim; displaced person", "noun", "폭우로 수십만 명의 이재민이 발생했어요.", "暴雨导致数十万灾民出现。", "Heavy rain caused hundreds of thousands of displaced victims.", "176", "읽기", ["collocation:이재민이 발생하다"]],
    ["한파", "寒潮", "名词", "cold wave", "noun", "폭설과 한파로 기온이 크게 내려갔어요.", "因暴雪和寒潮，气温大幅下降。", "Heavy snow and cold waves caused temperatures to drop sharply.", "176", "읽기", ["collocation:한파"]],
    ["인류", "人类", "名词", "humankind", "noun", "환경 오염이 계속된다면 인류가 생존하기 어려워요.", "如果环境污染持续，人类难以生存。", "If environmental pollution continues, humankind will struggle to survive.", "176", "읽기", ["collocation:인류"]],
    ["생존하다", "生存", "动词", "to survive", "verb", "더 이상 인류가 생존할 수 없을 것이라고 경고했어요.", "警告说人类将无法再生存。", "They warned that humankind may no longer be able to survive.", "176", "읽기", ["collocation:생존하다"]],
    ["경고하다", "警告", "动词", "to warn", "verb", "전문가들은 지구 온난화의 위험을 경고해요.", "专家警告全球变暖的危险。", "Experts warn of the danger of global warming.", "176", "읽기", ["collocation:위험을 경고하다"]],
    ["석유", "石油", "名词", "oil", "noun", "석유와 석탄을 대신할 대체 에너지가 필요해요.", "需要替代石油和煤炭的能源。", "Alternative energy is needed to replace oil and coal.", "176", "읽기", ["collocation:석유"]],
    ["석탄", "煤炭", "名词", "coal", "noun", "석탄 사용을 줄여야 해요.", "应该减少煤炭使用。", "Coal use should be reduced.", "176", "읽기", ["collocation:석탄"]],
    ["힘쓰다", "努力，致力于", "动词", "to strive; work hard", "verb", "정부와 기업은 대체 에너지 개발에 힘쓰고 있어요.", "政府和企业正在致力于开发替代能源。", "The government and companies are working hard to develop alternative energy.", "176", "읽기", ["collocation:힘쓰다"]],
    ["인식", "认识，认知", "名词", "awareness; recognition", "noun", "환경 문제는 전 세계인의 문제라는 인식이 필요해요.", "需要认识到环境问题是全世界人的问题。", "We need awareness that environmental issues are global issues.", "176", "읽기", ["collocation:인식"]],
    ["공동으로 대응하다", "共同应对", "动词短语", "to respond jointly", "verb phrase", "환경 오염과 지구 온난화 해결에 공동으로 대응해야 해요.", "应该共同应对环境污染和全球变暖。", "We should respond jointly to environmental pollution and global warming.", "176", "읽기", ["collocation:공동으로 대응하다"]],
    ["노력을 기울이다", "付出努力", "动词短语", "to make an effort", "verb phrase", "전 세계인이 공동의 노력을 기울여야 해요.", "全世界的人都应该共同努力。", "People around the world should make joint efforts.", "176", "읽기", ["collocation:노력을 기울이다"]],
    ["지켜 내다", "守护住", "动词", "to protect successfully", "verb", "환경 오염으로부터 지구를 지켜 낼 수 있어요.", "可以从环境污染中守护住地球。", "We can protect the Earth from environmental pollution.", "176", "읽기", ["collocation:지구를 지켜 내다"]],
    ["환경 문제", "环境问题", "名词短语", "environmental issue", "noun phrase", "환경 문제는 시급히 해결해야 할 문제예요.", "环境问题是必须紧急解决的问题。", "Environmental issues must be solved urgently.", "178", "문화와 정보", ["collocation:환경 문제"]],
    ["시급히", "紧急地", "副词", "urgently", "adverb", "시급히 해결하지 않으면 안 되는 상황이에요.", "这是不紧急解决不行的情况。", "It is a situation that must be solved urgently.", "178", "문화와 정보", ["collocation:시급히 해결하다"]],
    ["국제 사회", "国际社会", "名词短语", "international community", "noun phrase", "국제 사회도 환경 문제 해결을 위해 노력해요.", "国际社会也为解决环境问题而努力。", "The international community also works to solve environmental issues.", "178", "문화와 정보", ["collocation:국제 사회"]],
    ["차원", "层面，维度", "名词", "level; dimension", "noun", "국제 사회, 국가, 개인 등 여러 차원에서 노력해야 해요.", "应从国际社会、国家、个人等多个层面努力。", "Efforts are needed at many levels, including the international community, nations, and individuals.", "178", "문화와 정보", ["collocation:여러 차원"]],
    ["유엔환경계획", "联合国环境规划署", "名词", "United Nations Environment Programme", "noun", "유엔환경계획은 환경 문제 해결을 위해 노력하는 국제기구예요.", "联合国环境规划署是为解决环境问题而努力的国际机构。", "UNEP is an international organization that works to solve environmental issues.", "178", "문화와 정보", ["collocation:유엔환경계획"]],
    ["국제기구", "国际组织", "名词", "international organization", "noun", "유엔환경계획은 1973년에 설립된 국제기구예요.", "联合国环境规划署是1973年成立的国际组织。", "UNEP is an international organization established in 1973.", "178", "문화와 정보", ["collocation:국제기구"]],
    ["설립되다", "成立", "动词", "to be established", "verb", "유엔환경계획은 1973년에 설립되었어요.", "联合国环境规划署成立于1973年。", "UNEP was established in 1973.", "178", "문화와 정보", ["collocation:설립되다"]],
    ["환경부", "环境部", "名词", "Ministry of Environment", "noun", "한국에서는 환경부가 환경 문제 해결을 맡고 있어요.", "在韩国，环境部负责环境问题解决。", "In Korea, the Ministry of Environment is responsible for addressing environmental issues.", "178", "문화와 정보", ["collocation:환경부"]],
    ["개개인", "每个人，个人", "名词", "each individual", "noun", "환경 문제 해결에는 개개인의 관심과 노력이 중요해요.", "解决环境问题时每个人的关心和努力很重要。", "Each individual's interest and effort are important in solving environmental issues.", "178", "문화와 정보", ["collocation:개개인"]],
    ["관심과 노력", "关心和努力", "名词短语", "interest and effort", "noun phrase", "개개인의 관심과 노력이 모이면 큰 변화를 만들 수 있어요.", "每个人的关心和努力汇聚起来，就能带来大变化。", "When individual interest and effort come together, they can create major change.", "178", "문화와 정보", ["collocation:관심과 노력"]]
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
  window.lessonGuideL4LessonChunks["l4-13"] = {
    id: "l4-13",
    number: 13,
    titleKo: "환경 보호",
    titleZh: "环境保护",
    pages: "168-179",
    status: "draft",
    progress: {
      vocabulary: "draft-p168-p179",
      dialogue: "draft-p171-p173",
      culture: "draft-p178",
      practice: "draft-p171-p178"
    },
    vocabulary,
    vocabularySources: [
      { page: 168, label: "단원 제목", note: "课题、语法和学习目标" },
      { page: 170, label: "어휘", note: "环境问题和环境保护实践词汇" },
      { page: 171, label: "문법 1", note: "V-는 한 和条件持续表达" },
      { page: 172, label: "문법 2", note: "V-도록 和目的表达" },
      { page: 173, label: "말하기", note: "环境污染造成的健康问题对话" },
      { page: 174, label: "듣기/발음", note: "垃圾分类和发音练习" },
      { page: 175, label: "읽기 전", note: "气候变化和全球变暖主题词" },
      { page: 176, label: "읽기", note: "지구 온난화 阅读文章" },
      { page: 178, label: "문화와 정보", note: "环境保全运动" },
      { page: 179, label: "배운 어휘 확인", note: "本课复习词汇补充" }
    ],
    goals: [
      "能谈论环境污染造成的健康问题。",
      "能写出介绍环境保护实践案例的文章。",
      "理解韩国 환경 보전 운동 等环保行动。"
    ],
    grammar: [
      {
        pattern: "V-는 한",
        zh: "只要……就……",
        guide: "表示在前项条件持续成立的范围内，后项也会继续成立，常用于提醒或判断结果。",
        translations: {
          en: {
            meaning: "as long as...",
            guide: "Shows that the following statement holds while the condition continues to be true."
          }
        }
      },
      {
        pattern: "V-도록",
        zh: "为了……；以便……",
        guide: "表示目的或目标，说明采取某个行动是为了达到后面的状态。",
        translations: {
          en: {
            meaning: "so that...; in order to...",
            guide: "Shows the purpose or goal of an action."
          }
        }
      }
    ],
    dialogues: [
      {
        title: "대기 오염 문제는 계속될 거예요",
        titleKo: "대기 오염 문제는 계속될 거예요",
        titleZh: "大气污染问题会持续下去",
        focus: "V-는 한",
        page: "171",
        source: "문법 1",
        sceneZh: "用 V-는 한 表示条件不改变时结果会持续。",
        speakers: ["라흐만", "잠시드"],
        lines: [
          {
            speaker: "라흐만",
            ko: "오늘도 대기 오염이 너무 심해서 숨 쉬기가 어려워요.",
            zh: "今天大气污染也太严重了，呼吸都很困难。",
            noteZh: "숨 쉬기가 어렵다 表示呼吸困难。",
            translations: {
              en: {
                translation: "Air pollution is so severe again today that it is hard to breathe.",
                note: "숨 쉬기가 어렵다 means it is difficult to breathe."
              }
            }
          },
          {
            speaker: "잠시드",
            ko: "배기가스를 줄이기 위해 노력하지 않는 한 대기 오염 문제는 계속될 거예요.",
            zh: "只要不努力减少尾气，大气污染问题就会持续下去。",
            noteZh: "노력하지 않는 한 表示“只要不努力，这个结果就不会改变”。",
            translations: {
              en: {
                translation: "As long as we do not make efforts to reduce exhaust gas, the air pollution problem will continue.",
                note: "노력하지 않는 한 means the result will not change unless efforts are made."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "The Air Pollution Problem Will Continue",
            scene: "Use V-는 한 to show that a result continues unless the condition changes."
          }
        }
      },
      {
        title: "쓰레기가 많이 안 생기도록",
        titleKo: "쓰레기가 많이 안 생기도록",
        titleZh: "为了不产生很多垃圾",
        focus: "V-도록",
        page: "172",
        source: "문법 2",
        sceneZh: "用 V-도록 说明为了达到环保目的要采取的行动。",
        speakers: ["후엔", "박민수"],
        lines: [
          {
            speaker: "후엔",
            ko: "이렇게 비닐봉지를 많이 사용하면 쓰레기 양이 늘어서 환경을 오염시키게 되잖아요.",
            zh: "这样大量使用塑料袋，垃圾量会增加，从而污染环境不是吗？",
            noteZh: "-게 되다 表示结果自然发生。",
            translations: {
              en: {
                translation: "If we use this many plastic bags, the amount of waste increases and ends up polluting the environment.",
                note: "-게 되다 describes a result that naturally occurs."
              }
            }
          },
          {
            speaker: "박민수",
            ko: "알았어요. 앞으로는 쓰레기가 많이 안 생기도록 재활용 쓰레기 봉투를 사용할게요.",
            zh: "知道了。以后我会使用可回收垃圾袋，以便不产生太多垃圾。",
            noteZh: "안 생기도록 表示“为了不产生”。",
            translations: {
              en: {
                translation: "All right. From now on, I will use recycling trash bags so that less waste is produced.",
                note: "안 생기도록 means 'so that it does not occur'."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "So That Less Waste Is Produced",
            scene: "Use V-도록 to explain an action taken for an environmental goal."
          }
        }
      },
      {
        title: "미세 먼지 문제가 해결되지 않는 한",
        titleKo: "미세 먼지 문제가 해결되지 않는 한",
        titleZh: "只要细颗粒物问题不解决",
        focus: "환경 오염과 건강",
        page: "173",
        source: "말하기",
        sceneZh: "围绕细颗粒物造成的喉咙痛、戴口罩和健康提醒进行对话。",
        speakers: ["이링", "안젤라"],
        lines: [
          {
            speaker: "이링",
            ko: "안젤라 씨, 어디에 다녀와요?",
            zh: "安吉拉，你去哪儿回来了？",
            noteZh: "다녀오다 表示去过某处后回来。",
            translations: {
              en: {
                translation: "Angela, where are you coming back from?",
                note: "다녀오다 means to go somewhere and come back."
              }
            }
          },
          {
            speaker: "안젤라",
            ko: "목이 아파서 병원에 갔다 오는 길이에요. 요즘 미세 먼지가 심해서 그런지 병원에 가니까 저랑 비슷한 증상으로 온 사람이 많았어요.",
            zh: "我喉咙疼，正在从医院回来的路上。可能是最近细颗粒物严重，去医院一看，很多人都是和我相似的症状。",
            noteZh: "-아서 그런지 表示推测原因，“也许是因为……”。",
            translations: {
              en: {
                translation: "My throat hurt, so I am on my way back from the hospital. Maybe because fine dust is severe these days, there were many people at the hospital with symptoms similar to mine.",
                note: "-아서 그런지 suggests a possible cause."
              }
            }
          },
          {
            speaker: "이링",
            ko: "목이 더 아프지 않도록 마스크를 쓰고 다니세요.",
            zh: "为了喉咙不更疼，请戴着口罩出门。",
            noteZh: "-지 않도록 表示“为了不……”。",
            translations: {
              en: {
                translation: "Wear a mask when you go out so that your throat does not hurt more.",
                note: "-지 않도록 means 'so that something does not happen'."
              }
            }
          },
          {
            speaker: "안젤라",
            ko: "그렇게 해도 별로 좋아지지 않아서 걱정이에요.",
            zh: "就算那样做也没怎么好转，所以很担心。",
            noteZh: "별로 좋아지지 않다 表示改善不明显。",
            translations: {
              en: {
                translation: "Even if I do that, it does not get much better, so I am worried.",
                note: "별로 좋아지지 않다 means there is not much improvement."
              }
            }
          },
          {
            speaker: "이링",
            ko: "미세 먼지 문제가 해결되지 않는 한 병원을 찾는 사람은 더 늘어날 것 같아요.",
            zh: "只要细颗粒物问题不解决，去医院的人好像会更多。",
            noteZh: "해결되지 않는 한 表示“只要没有被解决”。",
            translations: {
              en: {
                translation: "As long as the fine dust problem is not solved, more people will probably visit hospitals.",
                note: "해결되지 않는 한 means 'as long as it is not solved'."
              }
            }
          },
          {
            speaker: "안젤라",
            ko: "맞아요. 미세 먼지가 심해지면 특히 목이나 눈에 안 좋으니까 이링 씨도 미리 건강 조심하세요.",
            zh: "是啊。细颗粒物严重的话，特别对喉咙和眼睛不好，所以李玲你也要提前注意健康。",
            noteZh: "미리 건강 조심하세요 是提前提醒对方注意健康。",
            translations: {
              en: {
                translation: "Right. When fine dust gets worse, it is especially bad for the throat and eyes, so you should take care of your health in advance too.",
                note: "미리 건강 조심하세요 warns someone to take care of their health ahead of time."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "As Long as the Fine Dust Problem Is Not Solved",
            scene: "Discuss throat pain, masks, and health warnings caused by fine dust."
          }
        }
      }
    ],
    culture: {
      titleKo: "환경 보전 운동",
      titleZh: "环境保全运动",
      summaryZh: "文章说明环境问题的严重性，并介绍国际社会、韩国国家层面以及个人层面的环境保护努力。",
      paragraphs: [
        {
          ko: "인류 사회가 안고 있는 가장 큰 문제가 무엇이냐는 질문에 '환경 문제'라고 대답하는 사람이 많다. 그만큼 환경 문제는 심각한 문제로서 시급히 해결하지 않으면 안 되는 상황이다. 그리고 환경 문제는 우리 모두의 문제로서 국제 사회, 국가, 개인 등 여러 차원에서 노력하여 해결할 문제이다.",
          zh: "当被问到人类社会面临的最大问题是什么时，很多人会回答“环境问题”。这说明环境问题是严重的问题，是必须紧急解决的情况。而且环境问题是我们所有人的问题，需要国际社会、国家、个人等多个层面努力解决。",
          guide: "第一段强调环境问题不是某一方的问题，而是全社会共同面对的紧急问题。",
          translations: {
            en: {
              translation: "When asked what the biggest problem facing human society is, many people answer 'environmental issues.' This shows that environmental issues are serious and must be solved urgently. Environmental issues are everyone's problem and must be solved through efforts at many levels, including the international community, nations, and individuals.",
              guide: "The first paragraph emphasizes that environmental issues are not one party's problem but an urgent issue shared by society as a whole."
            }
          }
        },
        {
          ko: "국제 사회에서 환경 문제를 해결하기 위한 노력으로 유엔환경계획(UNEP)의 노력을 들 수 있다. 유엔환경계획은 1973년에 설립된 국제기구로서 매년 환경 문제 하나씩을 정하여 해결하기 위한 노력을 기울여 오고 있다.",
          zh: "国际社会为解决环境问题所做的努力中，可以举出联合国环境规划署(UNEP)的努力。联合国环境规划署是1973年成立的国际组织，每年选定一个环境问题并持续为解决它而努力。",
          guide: "第二段介绍国际层面的代表性行动：UNEP 每年围绕具体环境问题推动解决。",
          translations: {
            en: {
              translation: "As an effort by the international community to solve environmental issues, the work of the United Nations Environment Programme (UNEP) can be mentioned. UNEP is an international organization established in 1973, and each year it selects one environmental issue and works to solve it.",
              guide: "The second paragraph introduces a representative international effort: UNEP works on specific environmental issues each year."
            }
          }
        },
        {
          ko: "한국도 국가적 차원에서 환경 문제를 해결하기 위하여 노력하고 있는데 환경부가 이 일을 맡고 있다. 그러나 환경 문제의 해결을 위해서는 무엇보다도 개개인의 관심과 노력이 중요하다. 환경을 지키기 위한 개개인의 관심과 노력이 모인다면 국가의 문제를 해결할 수 있고, 더 나아가 인류 사회의 환경 문제도 해결할 수 있을 것이다.",
          zh: "韩国也在国家层面努力解决环境问题，环境部负责这项工作。然而，为了解决环境问题，最重要的是每个人的关心和努力。如果每个人为守护环境的关心和努力汇聚起来，就能解决国家的问题，进一步也能解决人类社会的环境问题。",
          guide: "第三段落点在个人行动：国家制度重要，但真正持续的改变要靠每个人的参与。",
          translations: {
            en: {
              translation: "Korea is also making efforts at the national level to solve environmental issues, and the Ministry of Environment is responsible for this work. However, above all, each individual's interest and effort are important for solving environmental issues. If individual interest and effort to protect the environment come together, national problems can be solved, and furthermore, environmental issues facing human society can also be solved.",
              guide: "The third paragraph focuses on individual action: national systems matter, but lasting change depends on each person's participation."
            }
          }
        }
      ],
      questions: [
        {
          q: "국제 사회에서 환경 문제를 해결하기 위하여 어떤 노력을 하고 있습니까?",
          zh: "国际社会为了解决环境问题正在做什么努力？",
          answerZh: "联合国环境规划署(UNEP)每年选定一个环境问题，并为解决它持续努力。",
          translations: {
            en: {
              translation: "What efforts is the international community making to solve environmental issues?",
              answer: "UNEP selects one environmental issue each year and works to solve it."
            }
          }
        },
        {
          q: "환경 문제를 해결하기 위해서 제일 중요한 것은 무엇입니까?",
          zh: "为了解决环境问题，最重要的是什么？",
          answerZh: "每个人对环境问题的关心和努力最重要。",
          translations: {
            en: {
              translation: "What is most important in solving environmental issues?",
              answer: "Each individual's interest and effort are most important."
            }
          }
        },
        {
          q: "환경 문제를 해결하기 위하여 일상생활에서 우리가 할 수 있는 일 한두 가지를 말해 보세요.",
          zh: "请说一两个我们在日常生活中能做的环境保护行动。",
          answerZh: "例如减少一次性用品、做好垃圾分类、使用环保洗涤剂、近距离步行或乘坐公共交通。",
          translations: {
            en: {
              translation: "Name one or two things we can do in daily life to help solve environmental issues.",
              answer: "Examples include reducing disposable products, separating waste properly, using eco-friendly detergent, walking short distances, or using public transportation."
            }
          }
        }
      ],
      translations: {
        en: {
          title: "Environmental Conservation Movement",
          summary: "The article explains the seriousness of environmental issues and introduces efforts at the international, national, and individual levels."
        }
      }
    },
    practice: [
      {
        type: "grammar",
        title: "V-는 한",
        promptZh: "用 -는 한 说：只要继续大量使用洗涤剂，水质污染就会更严重。",
        answerKo: "세제를 많이 사용하는 한 수질 오염은 더 심각해질 거예요.",
        translations: {
          en: {
            title: "V-는 한",
            prompt: "Use -는 한: As long as people keep using a lot of detergent, water pollution will become more serious.",
            answer: "세제를 많이 사용하는 한 수질 오염은 더 심각해질 거예요."
          }
        }
      },
      {
        type: "grammar",
        title: "V-도록",
        promptZh: "用 -도록 说：为了减少汽车尾气，请近距离步行。",
        answerKo: "자동차 배기가스를 줄이도록 가까운 거리는 걸어 다니세요.",
        translations: {
          en: {
            title: "V-도록",
            prompt: "Use -도록: Walk short distances so that car exhaust can be reduced.",
            answer: "자동차 배기가스를 줄이도록 가까운 거리는 걸어 다니세요."
          }
        }
      },
      {
        type: "speaking",
        title: "환경 오염과 건강",
        promptZh: "说：因为细颗粒物一直咳嗽，细颗粒物多的日子一定要戴口罩。",
        answerKo: "미세 먼지 때문에 기침을 계속하니까 미세 먼지가 많은 날은 마스크를 꼭 쓰세요.",
        translations: {
          en: {
            title: "Environmental Pollution and Health",
            prompt: "Say: Because fine dust makes you keep coughing, make sure to wear a mask on days with a lot of fine dust.",
            answer: "미세 먼지 때문에 기침을 계속하니까 미세 먼지가 많은 날은 마스크를 꼭 쓰세요."
          }
        }
      },
      {
        type: "reading",
        title: "지구 온난화",
        promptZh: "阅读题：为了应对环境污染和全球变暖，文章说应该怎么做？",
        answerKo: "환경 오염과 지구 온난화 해결에 전 세계인이 공동으로 대응하고 공동의 노력을 기울여야 합니다.",
        translations: {
          en: {
            title: "Global Warming",
            prompt: "Reading: According to the article, what should people do to respond to environmental pollution and global warming?",
            answer: "환경 오염과 지구 온난화 해결에 전 세계인이 공동으로 대응하고 공동의 노력을 기울여야 합니다."
          }
        }
      },
      {
        type: "culture",
        title: "환경 보전 운동",
        promptZh: "文化题：解决环境问题最重要的是什么？",
        answerKo: "무엇보다도 개개인의 관심과 노력이 중요합니다.",
        translations: {
          en: {
            title: "Environmental Conservation Movement",
            prompt: "Culture: What is most important for solving environmental issues?",
            answer: "무엇보다도 개개인의 관심과 노력이 중요합니다."
          }
        }
      }
    ],
    translations: {
      en: {
        title: "Environmental Protection",
        goals: [
          "Talk about health problems caused by environmental pollution.",
          "Use V-는 한 to express a result that continues while a condition remains true.",
          "Use V-도록 to express a purpose or goal.",
          "Write about environmental protection examples and understand environmental conservation movements."
        ]
      }
    }
  };
})();
