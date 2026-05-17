(() => {
  const makeTip = (type, text, enText = text) => ({
    type,
    text,
    translations: {
      en: {
        text: enText
      }
    }
  });

  const posEn = {
    "代词": "pronoun",
    "副词": "adverb",
    "动词": "verb",
    "动词短语": "verb phrase",
    "句型表达": "sentence pattern",
    "名词": "noun",
    "名词短语": "noun phrase",
    "地址表达": "address expression",
    "形容词": "adjective",
    "形容词短语": "adjective phrase",
    "感叹词": "interjection",
    "语法表达": "grammar expression"
  };

  const vocab = (ko, zh, pos, page, source, exampleKo, exampleZh, enMeaning, enExample, tips = []) => ({
    ko,
    zh,
    pos,
    page,
    source,
    exampleKo,
    exampleZh,
    tips: tips.map((tip) => makeTip(...tip)),
    translations: {
      en: {
        meaning: enMeaning,
        pos: posEn[pos] || pos,
        example: enExample,
        tips: tips.map((tip) => ({
          type: tip[0],
          text: tip[2] || tip[1]
        }))
      }
    }
  });

  const lesson = {
    id: "l2-10",
    number: 10,
    titleKo: "시청 옆에 있는데 가까워요",
    titleZh: "在市厅旁边，很近",
    pages: "112-121",
    status: "refined",
    progress: {
      vocabulary: "refined-p112-p121",
      dialogue: "refined-p115-p121",
      culture: "reviewed-p120",
      practice: "refined-p115-p120"
    },
    vocabularySources: [
      {
        page: 112,
        label: "단원 제목",
        note: "课题句、길 안내 和 교통 표지판 主题"
      },
      {
        page: 114,
        label: "어휘와 문법 1",
        note: "地点、方向和问路表达"
      },
      {
        page: 115,
        label: "문법 1",
        note: "A/V-는데 背景说明表达"
      },
      {
        page: 116,
        label: "어휘와 문법 2",
        note: "公交、地铁和换乘表达"
      },
      {
        page: 117,
        label: "문법 2",
        note: "A/V-기 때문에 原因表达"
      },
      {
        page: 118,
        label: "말하기와 듣기",
        note: "问路对话和听力问题"
      },
      {
        page: 119,
        label: "읽기와 쓰기",
        note: "邮件中说明到家路线"
      },
      {
        page: 120,
        label: "문화와 정보",
        note: "交通标志牌原文与问题"
      },
      {
        page: 121,
        label: "발음/배운 어휘 확인",
        note: "发音练习和本课词汇复习"
      }
    ],
    goals: [
      "能够用 육교、횡단보도、사거리、버스 정류장、지하철역 等词说明位置。",
      "能够用 왼쪽으로 가다、오른쪽으로 가다、쭉/똑바로 가다、건너다、지나다 说明路线。",
      "能够用 A/V-는데 给后文提供背景或情况。",
      "能够用 A/V-기 때문에 清楚说明原因。",
      "能够读懂邮件里的路线说明，并介绍自己家或目的地的到达方法。"
    ],
    grammar: [
      {
        pattern: "A/V-는데",
        zh: "……，而/不过/因为；先说背景再继续",
        guide: "把前半句当作后半句的背景、情况或轻微转折。问路时常用来先说明自己在找什么，再接问题或说明。",
        examples: [
          {
            ko: "저기요, 한국은행을 찾는데 어디에 있어요?",
            zh: "请问，我在找韩国银行，它在哪里？"
          },
          {
            ko: "시청 옆에 있는데 여기에서 가까워요.",
            zh: "它在市厅旁边，离这里很近。"
          },
          {
            ko: "비가 오는데 우산이 없어요.",
            zh: "下雨了，可是我没有伞。"
          }
        ],
        translations: {
          en: {
            meaning: "and / but / since ...; background before the main point",
            guide: "Use A/V-는데 to set up background, a situation, or a mild contrast before the main point. In directions, it often introduces what you are looking for."
          }
        }
      },
      {
        pattern: "A/V-기 때문에",
        zh: "因为……",
        guide: "明确说明原因，比 -아서/어서 更正式一点。前面接动词、形容词或名词이다 的名词化形式。",
        examples: [
          {
            ko: "큰 도로 옆에 있기 때문에 금방 찾을 수 있을 거예요.",
            zh: "因为在大马路旁边，所以应该很快能找到。"
          },
          {
            ko: "지하철이 버스보다 빠르기 때문에 지하철을 타요.",
            zh: "因为地铁比公交快，所以坐地铁。"
          },
          {
            ko: "친구들이 많이 오기 때문에 음식을 많이 준비할 거예요.",
            zh: "因为朋友们会来很多，所以会准备很多食物。"
          }
        ],
        translations: {
          en: {
            meaning: "because ...",
            guide: "Use A/V-기 때문에 to state a reason clearly. It is a little more formal than -아서/어서."
          }
        }
      }
    ],
    vocabulary: [
      vocab("시청", "市厅；市政府", "名词", 112, "단원 제목", "시청 옆에 있는데 가까워요.", "在市厅旁边，很近。", "city hall", "It is next to City Hall, and it is close.", [["collocation", "시청 옆"], ["collocation", "시청에 가다"]]),
      vocab("옆", "旁边", "名词", 112, "단원 제목", "시청 옆에 있어요.", "在市厅旁边。", "next to; side", "It is next to City Hall.", [["collocation", "N 옆"], ["collocation", "옆에 있다"]]),
      vocab("가깝다", "近", "形容词", 112, "단원 제목", "여기에서 가까워요.", "离这里近。", "to be close", "It is close from here.", [["form", "가깝다 + -아요 → 가까워요", "가깝다 + -아요 -> 가까워요"], ["pitfall", "가깝다 是 ㅂ 不规则，口语常变 가까워요。", "가깝다 is ㅂ-irregular, so it becomes 가까워요."]]),
      vocab("길 안내", "指路；路线 안내", "名词短语", 112, "단원 제목", "길 안내를 해 주세요.", "请给我指路。", "directions; route guidance", "Please give me directions.", [["collocation", "길 안내를 하다"], ["collocation", "길을 안내하다"]]),
      vocab("길을 찾다", "找路", "动词短语", 112, "단원 제목", "길을 몰라서 물어봐요.", "因为不知道路，所以问别人。", "to find the way", "I ask because I do not know the way.", [["collocation", "길을 모르다"], ["collocation", "길을 찾다"]]),

      vocab("근처", "附近", "名词", 114, "어휘와 문법 1", "이 근처에 무엇이 있어요?", "这附近有什么？", "nearby; vicinity", "What is nearby?", [["collocation", "이 근처"], ["collocation", "근처에 있다"]]),
      vocab("무엇", "什么", "代词", 114, "어휘와 문법 1", "이 근처에 무엇이 있어요?", "这附近有什么？", "what", "What is nearby?", [["collocation", "무엇이 있어요?"]]),
      vocab("육교", "天桥；人行天桥", "名词", 114, "어휘와 문법 1", "육교가 있어요.", "有天桥。", "pedestrian overpass", "There is a pedestrian overpass.", [["collocation", "육교를 건너다"], ["collocation", "육교를 지나다"]]),
      vocab("약국", "药店", "名词", 114, "어휘와 문법 1", "약국이 병원 맞은편에 있어요.", "药店在医院对面。", "pharmacy", "The pharmacy is across from the hospital.", [["collocation", "약국에 가다"], ["collocation", "약국이 있다"]]),
      vocab("병원", "医院", "名词", 114, "어휘와 문법 1", "병원 맞은편에 있어요.", "在医院对面。", "hospital", "It is across from the hospital.", [["collocation", "병원 맞은편"], ["collocation", "병원에 가다"]]),
      vocab("맞은편", "对面", "名词", 114, "어휘와 문법 1", "시청 맞은편에 있어요.", "在市厅对面。", "across from", "It is across from City Hall.", [["collocation", "N 맞은편"], ["collocation", "맞은편에 있다"]]),
      vocab("신호등", "红绿灯", "名词", 114, "어휘와 문법 1", "신호등 앞에서 기다려요.", "在红绿灯前等。", "traffic light", "I wait in front of the traffic light.", [["collocation", "신호등 앞"], ["collocation", "신호등을 지나다"]]),
      vocab("왼쪽으로 가다", "往左走", "动词短语", 114, "어휘와 문법 1", "왼쪽으로 쭉 가세요.", "请一直往左走。", "to go left", "Go straight to the left.", [["collocation", "왼쪽으로 쭉 가다"], ["pitfall", "方向后常接 -으로：왼쪽으로。", "Directions commonly take -으로: 왼쪽으로."]]),
      vocab("오른쪽으로 가다", "往右走", "动词短语", 114, "어휘와 문법 1", "오른쪽으로 가면 돼요?", "往右走就可以吗？", "to go right", "Should I go right?", [["collocation", "오른쪽으로 가다"], ["pitfall", "오른쪽에 있다 是“在右边”，오른쪽으로 가다 是“往右走”。", "오른쪽에 있다 means located on the right; 오른쪽으로 가다 means go right."]]),
      vocab("쭉 가다", "一直走", "动词短语", 114, "어휘와 문법 1", "왼쪽으로 쭉 가세요.", "请一直往左走。", "to go straight/all the way", "Go straight/all the way to the left.", [["collocation", "쭉 가세요"], ["collocation", "쭉 가면"]]),
      vocab("똑바로 가다", "直走", "动词短语", 114, "어휘와 문법 1", "육교를 지나서 똑바로 오세요.", "过了天桥后直走过来。", "to go straight", "Pass the overpass and come straight.", [["collocation", "똑바로 가세요"], ["collocation", "똑바로 오세요"]]),
      vocab("횡단보도", "人行横道", "名词", 114, "어휘와 문법 1", "횡단보도를 건너세요.", "请过人行横道。", "crosswalk", "Cross the crosswalk.", [["collocation", "횡단보도를 건너다"]]),
      vocab("사거리", "十字路口", "名词", 114, "어휘와 문법 1", "사거리에서 오른쪽으로 가세요.", "请在十字路口往右走。", "intersection", "Turn right at the intersection.", [["collocation", "사거리에서"], ["collocation", "사거리를 지나다"]]),
      vocab("지하철역", "地铁站", "名词", 114, "어휘와 문법 1", "지하철역 근처에 있어요.", "在地铁站附近。", "subway station", "It is near the subway station.", [["collocation", "지하철역 근처"], ["collocation", "지하철역에서 내리다"]]),
      vocab("버스 정류장", "公交车站", "名词", 114, "어휘와 문법 1", "버스 정류장 옆에 있어요.", "在公交车站旁边。", "bus stop", "It is next to the bus stop.", [["collocation", "버스 정류장 앞"], ["collocation", "버스 정류장 옆"]]),
      vocab("은행", "银行", "名词", 114, "어휘와 문법 1", "이 근처에 은행이 있어요?", "这附近有银行吗？", "bank", "Is there a bank nearby?", [["collocation", "은행을 찾다"], ["collocation", "은행이 있다"]]),
      vocab("PC방", "网吧", "名词", 114, "어휘와 문법 1", "PC방에 어떻게 가요?", "网吧怎么走？", "PC cafe; internet cafe", "How do I get to the PC cafe?", [["collocation", "PC방에 가다"]]),

      vocab("찾는데", "在找……，所以/请问……", "语法表达", 115, "문법 1", "한국은행을 찾는데 어디에 있어요?", "我在找韩国银行，它在哪里？", "I am looking for ..., so ...", "I am looking for Korea Bank. Where is it?", [["form", "찾다 + -는데 → 찾는데", "찾다 + -는데 -> 찾는데"], ["collocation", "N을/를 찾는데 어디에 있어요?"]]),
      vocab("기다리는데", "正在等，可是/所以……", "语法表达", 115, "문법 1", "버스를 기다리는데 버스가 안 와요.", "正在等公交，可是公交不来。", "waiting, but/since ...", "I am waiting for the bus, but it is not coming.", [["form", "기다리다 + -는데 → 기다리는데", "기다리다 + -는데 -> 기다리는데"]]),
      vocab("배고픈데", "肚子饿，所以/可是……", "语法表达", 115, "문법 1", "배고픈데 우리 밥 먹으러 가요.", "肚子饿了，我们去吃饭吧。", "I am hungry, so ...", "I am hungry, so let's go eat.", [["form", "배고프다 + -ㄴ데 → 배고픈데", "배고프다 + -ㄴ데 -> 배고픈데"]]),
      vocab("배우는데", "正在学，而/因为……", "语法表达", 115, "문법 1", "요즘 한국어를 배우는데 아주 재미있어요.", "最近在学韩语，很有意思。", "learning, and/since ...", "I am learning Korean these days, and it is very interesting.", [["form", "배우다 + -는데 → 배우는데", "배우다 + -는데 -> 배우는데"]]),
      vocab("우산이 없다", "没有伞", "句型表达", 115, "문법 1", "비가 오는데 우산이 없어요.", "下雨了，可是没有伞。", "to not have an umbrella", "It is raining, but I do not have an umbrella.", [["collocation", "우산이 있다"], ["collocation", "우산이 없다"]]),
      vocab("옷 가게", "服装店", "名词短语", 115, "문법 1", "학교 앞에 옷 가게가 많아요.", "学校前面有很多服装店。", "clothing store", "There are many clothing stores in front of the school.", [["collocation", "옷 가게가 많다"]]),
      vocab("부모님 생신", "父母生日", "名词短语", 115, "문법 1", "부모님 생신인데 한국에 있어서 못 가요.", "父母生日，但我在韩国，不能去。", "parents' birthday", "It is my parents' birthday, but I cannot go because I am in Korea.", [["pitfall", "생신 是 생일 的尊敬说法。", "생신 is the honorific word for birthday."], ["collocation", "부모님 생신"]]),

      vocab("회사를 가다", "去公司", "动词短语", 116, "어휘와 문법 2", "회사까지 어떻게 가요?", "到公司怎么走？", "to go to work/the company", "How do you get to the company?", [["collocation", "회사까지 가다"], ["collocation", "회사에 가다"]]),
      vocab("버스를 타다", "坐公交车", "动词短语", 116, "어휘와 문법 2", "20번 버스를 타요.", "坐20路公交。", "to take a bus", "Take bus number 20.", [["collocation", "버스를 타다"], ["pitfall", "交通工具常用 을/를 타다。", "Use 을/를 타다 with vehicles."]]),
      vocab("교통 카드로 요금을 내다", "用交通卡付车费", "动词短语", 116, "어휘와 문법 2", "교통 카드로 요금을 내요.", "用交通卡付车费。", "to pay the fare with a transit card", "Pay the fare with a transit card.", [["collocation", "요금을 내다"], ["collocation", "교통 카드로 내다"]]),
      vocab("버스에서 내리다", "从公交车下车", "动词短语", 116, "어휘와 문법 2", "호수 공원에서 내려요.", "在湖水公园下车。", "to get off the bus", "Get off at Hosu Park.", [["collocation", "버스에서 내리다"], ["pitfall", "타다 是上车，내리다 是下车。", "타다 means get on; 내리다 means get off."]]),
      vocab("지하철로 갈아타다", "换乘地铁", "动词短语", 116, "어휘와 문법 2", "내려서 지하철로 갈아타요.", "下车后换乘地铁。", "to transfer to the subway", "Get off and transfer to the subway.", [["collocation", "지하철로 갈아타다"], ["collocation", "버스로 갈아타다"]]),
      vocab("1번 출구로 나가다", "从1号出口出去", "动词短语", 116, "어휘와 문법 2", "1번 출구로 나가세요.", "请从1号出口出去。", "to go out exit 1", "Go out through exit 1.", [["collocation", "출구로 나가다"], ["collocation", "1번 출구"]]),
      vocab("회사가 보이다", "看得到公司", "动词短语", 116, "어휘와 문법 2", "1번 출구로 나가면 회사가 보여요.", "从1号出口出去就能看到公司。", "the company is visible", "If you go out exit 1, you can see the company.", [["collocation", "N이/가 보이다"]]),
      vocab("호수 공원", "湖水公园", "名词", 116, "어휘와 문법 2", "호수 공원에서 내려요.", "在湖水公园下车。", "Hosu Park", "Get off at Hosu Park.", [["collocation", "호수 공원에서 내리다"]]),
      vocab("대인시장역", "大仁市场站", "名词", 116, "어휘와 문법 2", "대인시장역에서 내려요.", "在大仁市场站下车。", "Daein Market Station", "Get off at Daein Market Station.", [["collocation", "대인시장역에서 내리다"]]),

      vocab("싸다", "便宜", "形容词", 117, "문법 2", "싸고 맛있기 때문에 자주 먹어요.", "因为便宜又好吃，所以经常吃。", "cheap; inexpensive", "I eat it often because it is cheap and tasty.", [["form", "싸다 + -기 때문에 → 싸기 때문에", "싸다 + -기 때문에 -> 싸기 때문에"], ["collocation", "싸고 좋다"]]),
      vocab("복잡하다", "复杂；拥挤", "形容词", 117, "문법 2", "교통이 복잡합니다.", "交通很复杂/拥挤。", "complicated; congested", "Traffic is congested.", [["collocation", "교통이 복잡하다"]]),
      vocab("길이 막히다", "堵车；路堵", "动词短语", 117, "문법 2", "지금은 길이 막히기 때문에 요금이 많이 나올 거예요.", "现在堵车，所以费用会出来很多。", "the road is congested", "Because the road is congested now, the fare will be high.", [["collocation", "길이 막히다"], ["pitfall", "막히다 用来表示路堵、交通不通畅。", "막히다 can describe blocked or congested traffic."]]),
      vocab("요금", "费用；车费", "名词", 117, "문법 2", "요금이 많이 나올 거예요.", "费用会很高。", "fare; fee", "The fare will be high.", [["collocation", "요금을 내다"], ["collocation", "요금이 나오다"]]),
      vocab("물건을 사다", "买东西", "动词短语", 117, "문법 2", "물건을 살 때 주로 어디에서 사요?", "买东西时主要在哪里买？", "to buy things", "Where do you usually buy things?", [["collocation", "물건을 사다"], ["form", "사다 + -ㄹ 때 → 살 때", "사다 + -ㄹ 때 -> 살 때"]]),
      vocab("시장", "市场", "名词", 117, "문법 2", "시장에 자주 가요.", "经常去市场。", "market", "I often go to the market.", [["collocation", "시장에 가다"], ["collocation", "시장에서 사다"]]),
      vocab("시내", "市中心；城里", "名词", 117, "문법 2", "시내에서 옷을 사요.", "在市中心买衣服。", "downtown", "I buy clothes downtown.", [["collocation", "시내에서 사다"], ["collocation", "시내에 가다"]]),
      vocab("디자인이 다양하다", "设计多样", "形容词短语", 117, "문법 2", "디자인이 다양하기 때문에 시내에서 옷을 사요.", "因为设计多样，所以在市中心买衣服。", "designs are varied", "I buy clothes downtown because the designs are varied.", [["collocation", "디자인이 다양하다"]]),
      vocab("인기가 많다", "人气高；受欢迎", "形容词短语", 117, "문법 2", "인기가 많기 때문에 손님이 많아요.", "因为很受欢迎，所以客人多。", "popular", "There are many customers because it is popular.", [["form", "많다 + -기 때문에 → 많기 때문에", "많다 + -기 때문에 -> 많기 때문에"], ["collocation", "인기가 많다"]]),

      vocab("저기요", "请问；打扰一下", "感叹词", 118, "말하기와 듣기", "저기요, 한국은행을 찾는데 어디에 있어요?", "请问，我在找韩国银行，它在哪里？", "excuse me", "Excuse me, I am looking for Korea Bank. Where is it?", [["collocation", "저기요, ..."], ["pitfall", "叫住陌生人问路时可先说 저기요。", "Use 저기요 to get a stranger's attention politely."]]),
      vocab("한국은행", "韩国银行", "名词", 118, "말하기와 듣기", "한국은행을 찾는데 어디에 있어요?", "我在找韩国银行，它在哪里？", "Korea Bank", "I am looking for Korea Bank.", [["collocation", "한국은행을 찾다"]]),
      vocab("얼마나 걸리다", "需要多久", "动词短语", 118, "말하기와 듣기", "여기에서 얼마나 걸릴까요?", "从这里要多久？", "to take how long", "How long will it take from here?", [["collocation", "얼마나 걸릴까요?"], ["collocation", "10분쯤 걸리다"]]),
      vocab("10분쯤", "大约10分钟", "副词短语", 118, "말하기와 듣기", "10분쯤 걸려요.", "大约需要10分钟。", "about 10 minutes", "It takes about 10 minutes.", [["collocation", "10분쯤 걸리다"], ["pitfall", "-쯤 表示“大约”。", "-쯤 means about/approximately."]]),
      vocab("큰 도로 옆", "大马路旁边", "名词短语", 118, "말하기와 듣기", "큰 도로 옆에 있기 때문에 금방 찾을 수 있어요.", "因为在大马路旁边，所以很快能找到。", "next to a big road", "It is easy to find because it is next to a big road.", [["collocation", "큰 도로 옆에 있다"]]),
      vocab("금방", "很快；马上", "副词", 118, "말하기와 듣기", "금방 찾을 수 있을 거예요.", "应该很快能找到。", "soon; quickly", "You will be able to find it quickly.", [["collocation", "금방 찾다"], ["collocation", "금방 오다"]]),
      vocab("육교를 건너다", "过天桥", "动词短语", 118, "말하기와 듣기", "여기에서 육교를 건너면 버스 정류장이 있어요.", "从这里过天桥的话，有公交车站。", "to cross the overpass", "If you cross the overpass here, there is a bus stop.", [["collocation", "육교를 건너면"]]),

      vocab("받는 사람", "收件人", "名词短语", 119, "읽기와 쓰기", "받는 사람은 안젤라예요.", "收件人是安吉拉。", "recipient", "The recipient is Angela.", [["collocation", "받는 사람"], ["pitfall", "메일/편지에서 받는 사람 是“收件人”。", "In email/letters, 받는 사람 means recipient."]]),
      vocab("보낸 사람", "发件人", "名词短语", 119, "읽기와 쓰기", "보낸 사람은 이링이에요.", "发件人是怡玲。", "sender", "The sender is Yiling.", [["collocation", "보낸 사람"]]),
      vocab("제목", "标题；邮件主题", "名词", 119, "읽기와 쓰기", "제목은 '다음 주 일요일에 조금 일찍 올 수 있어요?'예요.", "标题是“下周星期日能早点来吗？”", "title; subject", "The subject is 'Can you come a little early next Sunday?'", [["collocation", "메일 제목"], ["collocation", "제목을 쓰다"]]),
      vocab("생일 파티", "生日派对", "名词短语", 119, "읽기와 쓰기", "제 생일 파티가 있어요.", "有我的生日派对。", "birthday party", "I have my birthday party.", [["collocation", "생일 파티가 있다"], ["collocation", "생일 파티에 가다"]]),
      vocab("기억하다", "记得", "动词", 119, "읽기와 쓰기", "기억하지요?", "你记得吧？", "to remember", "You remember, right?", [["collocation", "기억하지요?"], ["collocation", "기억하다"]]),
      vocab("일찍", "早；早点", "副词", 119, "읽기와 쓰기", "일찍 와서 좀 도와줄 수 있어요?", "能早点来帮帮忙吗？", "early", "Can you come early and help me?", [["collocation", "일찍 오다"], ["collocation", "일찍 가다"]]),
      vocab("도와주다", "帮忙", "动词", 119, "읽기와 쓰기", "좀 도와줄 수 있어요?", "能帮一下忙吗？", "to help", "Can you help me?", [["form", "돕다 + -아 주다 → 도와주다", "돕다 + -아 주다 -> 도와주다"], ["collocation", "좀 도와주세요"]]),
      vocab("준비하다", "准备", "动词", 119, "읽기와 쓰기", "음식을 많이 준비할 거예요.", "会准备很多食物。", "to prepare", "I will prepare a lot of food.", [["collocation", "음식을 준비하다"], ["collocation", "파티를 준비하다"]]),
      vocab("바쁠 것 같다", "好像会忙", "语法表达", 119, "읽기와 쓰기", "그래서 좀 바쁠 것 같아요.", "所以好像会有点忙。", "seems like it will be busy", "So I think I will be a little busy.", [["form", "바쁘다 + -ㄹ 것 같다 → 바쁠 것 같다", "바쁘다 + -ㄹ 것 같다 -> 바쁠 것 같다"]]),
      vocab("찾아오는 방법", "找来/到达的方法", "名词短语", 119, "읽기와 쓰기", "우리 집에 찾아오는 방법을 알려 줄게요.", "我告诉你来我家的方法。", "how to find/come to a place", "I will tell you how to come to my house.", [["collocation", "찾아오는 방법을 알려 주다"], ["pitfall", "찾아오다 是“找着来到某处”，常用于到家/到店路线。", "찾아오다 means come to a place by finding the way."]]),
      vocab("편의점", "便利店", "名词", 119, "읽기와 쓰기", "횡단보도를 건너면 편의점이 있어요.", "过了人行横道就有便利店。", "convenience store", "If you cross the crosswalk, there is a convenience store.", [["collocation", "편의점이 있다"], ["collocation", "편의점 옆"]]),
      vocab("아파트", "公寓", "名词", 119, "읽기와 쓰기", "무궁화 아파트가 있어요.", "有木槿花公寓。", "apartment", "There is Mugunghwa Apartment.", [["collocation", "아파트 1동"], ["collocation", "아파트에 살다"]]),
      vocab("1동 203호", "1栋203号", "地址表达", 119, "읽기와 쓰기", "우리 집은 무궁화 아파트 1동 203호예요.", "我家是木槿花公寓1栋203号。", "Building 1, Unit 203", "My house is Mugunghwa Apartment, Building 1, Unit 203.", [["collocation", "1동 203호"], ["pitfall", "동 是楼栋，호 是房号。", "동 is building/block; 호 is unit/room number."]]),

      vocab("교통 표지판", "交通标志牌", "名词", 120, "문화와 정보", "이것을 교통 표지판이라고 합니다.", "这个叫交通标志牌。", "traffic sign", "This is called a traffic sign.", [["collocation", "교통 표지판을 보다"], ["collocation", "교통 표지판의 의미"]]),
      vocab("모양", "形状", "名词", 120, "문화와 정보", "교통 표지판은 모양과 색깔로 의미를 알 수 있어요.", "交通标志牌可以通过形状和颜色知道意思。", "shape", "You can understand traffic signs by shape and color.", [["collocation", "모양을 보다"]]),
      vocab("색깔", "颜色", "名词", 120, "문화와 정보", "모양과 색깔을 보면 의미를 알 수 있습니다.", "看形状和颜色就能知道意思。", "color", "If you look at the shape and color, you can understand the meaning.", [["collocation", "색깔을 보다"]]),
      vocab("이미지", "图像；图案", "名词", 120, "문화와 정보", "교통 표지판은 이미지와 글자로 구성됩니다.", "交通标志牌由图像和文字构成。", "image; symbol", "Traffic signs are made up of images and letters.", [["collocation", "이미지와 글자"]]),
      vocab("글자", "文字", "名词", 120, "문화와 정보", "글자로 의미를 알 수 있어요.", "可以通过文字知道意思。", "letters; writing", "You can understand the meaning from the writing.", [["collocation", "글자를 보다"]]),
      vocab("구성되다", "由……构成", "动词", 120, "문화와 정보", "모양, 색깔, 이미지, 글자로 구성됩니다.", "由形状、颜色、图像和文字构成。", "to be composed of", "It is composed of shape, color, image, and writing.", [["collocation", "N으로 구성되다"], ["pitfall", "구성되다 常和 -으로 搭配。", "구성되다 often pairs with -으로."]]),
      vocab("주의하다", "注意；小心", "动词", 120, "문화와 정보", "주의하라는 의미입니다.", "是让人注意的意思。", "to be careful; pay attention", "It means to be careful.", [["collocation", "주의하세요"], ["collocation", "주의하라는 의미"]]),
      vocab("금지", "禁止", "名词", 120, "문화와 정보", "금지의 의미입니다.", "是禁止的意思。", "prohibition", "It means prohibition.", [["collocation", "주차 금지"], ["collocation", "통행금지"]]),
      vocab("가능하다", "可能；可以", "形容词", 120, "문화와 정보", "가능하다는 것을 나타냅니다.", "表示可以。", "possible; allowed", "It shows that something is allowed.", [["form", "가능하다 + -다는 것 → 가능하다는 것", "가능하다 + -다는 것 -> 가능하다는 것"]]),
      vocab("노란색 바탕", "黄色底", "名词短语", 120, "문화와 정보", "노란색 바탕에 빨간색 테두리가 있어요.", "黄色底上有红色边框。", "yellow background", "It has a yellow background and a red border.", [["collocation", "노란색 바탕"], ["collocation", "빨간색 테두리"]]),
      vocab("빨간색 테두리", "红色边框", "名词短语", 120, "문화와 정보", "빨간색 테두리는 주의나 금지를 나타낼 수 있어요.", "红色边框可以表示注意或禁止。", "red border", "A red border can show warning or prohibition.", [["collocation", "빨간색 테두리"]]),
      vocab("위험하다", "危险", "形容词", 120, "문화와 정보", "위험하니까 조심하세요.", "因为危险，请小心。", "dangerous", "It is dangerous, so be careful.", [["collocation", "위험하니까 조심하세요"], ["form", "위험하다 + -니까 → 위험하니까", "위험하다 + -니까 -> 위험하니까"]]),
      vocab("어린이", "儿童", "名词", 120, "문화와 정보", "어린이와 다닐 때 조심하세요.", "和儿童一起走时请小心。", "child", "Be careful when walking with children.", [["collocation", "어린이와 다니다"], ["collocation", "어린이 보호"]]),
      vocab("공사 중", "施工中", "名词短语", 120, "문화와 정보", "공사 중이니까 조심하세요.", "因为施工中，请小心。", "under construction", "It is under construction, so be careful.", [["collocation", "공사 중이다"]]),
      vocab("통행금지", "禁止通行", "名词", 120, "문화와 정보", "여기로 다니지 마세요.", "不要从这里通行。", "no entry; closed to traffic", "Do not pass through here.", [["collocation", "통행금지 표지판"], ["collocation", "다니지 마세요"]]),
      vocab("주차금지", "禁止停车", "名词", 120, "문화와 정보", "주차하지 마세요.", "请不要停车。", "no parking", "Do not park.", [["form", "주차하다 + -지 마세요 → 주차하지 마세요", "주차하다 + -지 마세요 -> 주차하지 마세요"]]),
      vocab("자전거 전용", "自行车专用", "名词短语", 120, "문화와 정보", "자전거만 다닐 수 있어요.", "只有自行车可以通行。", "bicycle-only", "Only bicycles can use it.", [["collocation", "자전거 전용 도로"], ["collocation", "자전거만 다니다"]]),
      vocab("보행자 전용 도로", "行人专用道路", "名词短语", 120, "문화와 정보", "걸어 다니는 사람만 갈 수 있어요.", "只有走路的人可以走。", "pedestrian-only road", "Only pedestrians can go there.", [["collocation", "보행자 전용 도로"], ["pitfall", "전용 表示“专用”。", "전용 means exclusive use."]]),

      vocab("지나다", "经过", "动词", 121, "발음/배운 어휘 확인", "육교를 지나면 서점이 있어요.", "过了天桥就有书店。", "to pass", "If you pass the overpass, there is a bookstore.", [["collocation", "육교를 지나다"], ["collocation", "N을/를 지나면"]]),
      vocab("50m쯤 오다", "走/过来大约50米", "动词短语", 121, "발음/배운 어휘 확인", "똑바로 50m쯤 오세요.", "请直走大约50米过来。", "to come about 50 meters", "Come straight about 50 meters.", [["collocation", "50m쯤 오세요"], ["pitfall", "오세요 是让对方朝说话人的方向来。", "오세요 asks the listener to come toward the speaker."]]),
      vocab("있는데", "在/有，不过；在/有，所以", "语法表达", 121, "발음/배운 어휘 확인", "1번 출구 앞에 있는데 언제 와요?", "我在1号出口前，你什么时候来？", "is/exists, and/but ...", "I am in front of exit 1. When are you coming?", [["form", "있다 + -는데 → 있는데", "있다 + -는데 -> 있는데"], ["pitfall", "发音是 [인는데]。", "It is pronounced [인는데]."]]),
      vocab("어떻게", "怎么；怎样", "副词", 121, "발음/배운 어휘 확인", "어떻게 가요?", "怎么去？", "how", "How do I get there?", [["collocation", "어떻게 가요?"], ["pitfall", "发音是 [어떠케]。", "It is pronounced [어떠케]."]])
    ],
    dialogues: [
      {
        id: "dialogue-grammar-01",
        title: "한국은행을 찾는데 어디에 있어요?",
        focus: "A/V-는데",
        page: 115,
        source: "문법 1",
        sceneZh: "用 -는데 先说明自己在找银行，再问位置。",
        translations: {
          en: {
            scene: "Use -는데 to explain that you are looking for a bank before asking where it is.",
            learningPoints: [
              "Use 저기요 before asking a stranger for directions.",
              "찾는데 sets up the reason for the question.",
              "맞은편에 있어요 is useful for landmarks."
            ]
          }
        },
        learningPoints: [
          "问陌生人前可以先说 저기요。",
          "찾는데 先交代“我在找……”。",
          "맞은편에 있어요 用来说明“在对面”。"
        ],
        lines: [
          {
            speaker: "라흐만",
            ko: "저기요, 한국은행을 찾는데 어디에 있어요?",
            zh: "请问，我在找韩国银行，它在哪里？",
            guide: "찾는데 后面自然接 질문。",
            translations: {
              en: {
                translation: "Excuse me, I am looking for Korea Bank. Where is it?",
                guide: "찾는데 naturally leads into a question."
              }
            }
          },
          {
            speaker: "아주머니",
            ko: "왼쪽으로 쭉 가면 시청이 있어요. 시청 맞은편에 있어요.",
            zh: "一直往左走的话有市厅。它在市厅对面。",
            guide: "왼쪽으로 쭉 가면 是路线说明。",
            translations: {
              en: {
                translation: "If you go straight to the left, there is City Hall. It is across from City Hall.",
                guide: "왼쪽으로 쭉 가면 gives route guidance."
              }
            }
          },
          {
            speaker: "라흐만",
            ko: "감사합니다. 그런데 여기에서 얼마나 걸릴까요?",
            zh: "谢谢。不过从这里要多久？",
            guide: "얼마나 걸릴까요? 用来问所需时间。",
            translations: {
              en: {
                translation: "Thank you. By the way, how long will it take from here?",
                guide: "얼마나 걸릴까요? asks how long it will take."
              }
            }
          },
          {
            speaker: "아주머니",
            ko: "10분쯤 걸려요. 큰 도로 옆에 있기 때문에 금방 찾을 수 있을 거예요.",
            zh: "大约需要10分钟。因为在大马路旁边，所以应该很快能找到。",
            guide: "있기 때문에 明确说明“很快能找到”的原因。",
            translations: {
              en: {
                translation: "It takes about 10 minutes. Because it is next to a big road, you should be able to find it quickly.",
                guide: "있기 때문에 clearly gives the reason."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "은행 위치 묻기",
            promptZh: "把 한국은행 换成 약국、병원 或 PC방，说一段问路对话。",
            answerKo: "저기요, 약국을 찾는데 어디에 있어요? 병원 맞은편에 있어요.",
            translations: {
              en: {
                title: "Ask where a place is",
                prompt: "Replace Korea Bank with pharmacy, hospital, or PC cafe and practice."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "A/V-는데",
            promptZh: "用“비가 오다 / 우산이 없다”造句。",
            answerKo: "비가 오는데 우산이 없어요.",
            translations: {
              en: {
                prompt: "Make a sentence with “it is raining / no umbrella.”"
              }
            }
          }
        ]
      },
      {
        id: "dialogue-grammar-02",
        title: "회사까지 어떻게 가요?",
        focus: "교통과 환승",
        page: 116,
        source: "어휘와 문법 2",
        sceneZh: "说明从学校附近到公司的公交和地铁换乘路线。",
        translations: {
          en: {
            scene: "Explain a bus-and-subway route from near the school to the company.",
            learningPoints: [
              "Use -에서 내리다 for getting off at a stop.",
              "Use -로 갈아타다 for transferring to another transport.",
              "Use 출구로 나가다 for subway exits."
            ]
          }
        },
        learningPoints: [
          "-에서 내리다 表示在某站下车。",
          "-로 갈아타다 表示换乘到某交通工具。",
          "출구로 나가다 用于地铁出口。"
        ],
        lines: [
          {
            speaker: "학생",
            ko: "여러분은 한국어 교실에서 집까지 어떻게 가요?",
            zh: "大家从韩语教室到家怎么走？",
            guide: "어떻게 가요? 是问路线的核心句。",
            translations: {
              en: {
                translation: "How do you go from the Korean classroom to your home?",
                guide: "어떻게 가요? is the core question for routes."
              }
            }
          },
          {
            speaker: "안내",
            ko: "학교 근처에서 20번 버스를 타요.",
            zh: "在学校附近坐20路公交。",
            guide: "교통工具用 을/를 타다。",
            translations: {
              en: {
                translation: "Take bus number 20 near the school.",
                guide: "Use 을/를 타다 with vehicles."
              }
            }
          },
          {
            speaker: "안내",
            ko: "그리고 호수 공원에서 내려서 지하철로 갈아타요.",
            zh: "然后在湖水公园下车，换乘地铁。",
            guide: "내려서 表示下车后接着做下一步。",
            translations: {
              en: {
                translation: "Then get off at Hosu Park and transfer to the subway.",
                guide: "내려서 means after getting off."
              }
            }
          },
          {
            speaker: "안내",
            ko: "그리고 대인시장역에서 내려요.",
            zh: "然后在大仁市场站下车。",
            guide: "站点后接 -에서 내리다。",
            translations: {
              en: {
                translation: "Then get off at Daein Market Station.",
                guide: "Use -에서 내리다 after the station/stop."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "환승 설명하기",
            promptZh: "用 버스、지하철、출구 说三步路线。",
            answerKo: "버스를 타요. 호수 공원에서 내려서 지하철로 갈아타요. 1번 출구로 나가요.",
            translations: {
              en: {
                title: "Explain a transfer",
                prompt: "Use bus, subway, and exit to explain a three-step route."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "교통 표현",
            promptZh: "把“20번 버스 / 호수 공원 / 지하철”换成自己的路线。",
            answerKo: "학교 근처에서 20번 버스를 타고 호수 공원에서 내려서 지하철로 갈아타요.",
            translations: {
              en: {
                prompt: "Replace bus 20 / Hosu Park / subway with your own route."
              }
            }
          }
        ]
      },
      {
        id: "dialogue-speaking-01",
        title: "길을 몰라서 다른 사람에게 물어봐요",
        focus: "말하기와 듣기",
        page: 118,
        source: "말하기와 듣기",
        sceneZh: "问路并用建筑物、方向和距离说明目的地。",
        translations: {
          en: {
            scene: "Ask for directions and explain a destination using landmarks, directions, and distance.",
            learningPoints: [
              "Start with 저기요 when asking a stranger.",
              "Use 얼마나 걸릴까요? to ask travel time.",
              "Use A/V-기 때문에 to explain why it is easy to find."
            ]
          }
        },
        learningPoints: [
          "问陌生人可用 저기요 开头。",
          "얼마나 걸릴까요? 用来问多久。",
          "A/V-기 때문에 可解释为什么容易找到。"
        ],
        lines: [
          {
            speaker: "라흐만",
            ko: "저기요, 한국은행을 찾는데 어디에 있어요?",
            zh: "请问，我在找韩国银行，它在哪里？",
            guide: "찾는데 表示问路的背景。",
            translations: {
              en: {
                translation: "Excuse me, I am looking for Korea Bank. Where is it?",
                guide: "찾는데 gives the background for asking."
              }
            }
          },
          {
            speaker: "아주머니",
            ko: "왼쪽으로 쭉 가면 시청이 있어요. 시청 맞은편에 있어요.",
            zh: "一直往左走会看到市厅。它在市厅对面。",
            guide: "地点 + 맞은편에 있다 表示“在……对面”。",
            translations: {
              en: {
                translation: "If you go straight to the left, there is City Hall. It is across from City Hall.",
                guide: "Place + 맞은편에 있다 means across from a place."
              }
            }
          },
          {
            speaker: "라흐만",
            ko: "감사합니다. 그런데 여기에서 얼마나 걸릴까요?",
            zh: "谢谢。不过从这里要多久？",
            guide: "여기에서 表示从这里出发。",
            translations: {
              en: {
                translation: "Thank you. By the way, how long will it take from here?",
                guide: "여기에서 means starting from here."
              }
            }
          },
          {
            speaker: "아주머니",
            ko: "10분쯤 걸려요. 큰 도로 옆에 있기 때문에 금방 찾을 수 있을 거예요.",
            zh: "大约需要10分钟。因为在大马路旁边，所以应该很快能找到。",
            guide: "금방 찾을 수 있을 거예요 表示“应该很快能找到”。",
            translations: {
              en: {
                translation: "It takes about 10 minutes. Because it is next to a big road, you should be able to find it quickly.",
                guide: "금방 찾을 수 있을 거예요 means you should be able to find it quickly."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "목적지 바꾸기",
            promptZh: "用教材替换项练习：병원 / 횡단보도 / 건물이 아주 크다。",
            answerKo: "저기요, 병원을 찾는데 어디에 있어요? 저기에서 횡단보도를 건너면 있어요. 건물이 아주 크기 때문에 금방 찾을 수 있을 거예요.",
            translations: {
              en: {
                title: "Change the destination",
                prompt: "Practice with the textbook prompts: hospital / crosswalk / the building is very big."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "길 설명하기",
            promptZh: "用“육교를 건너면 / 버스 정류장 옆”说明 라민 씨 집。",
            answerKo: "여기에서 육교를 건너면 버스 정류장이 있어요. 버스 정류장 옆에 라민 씨 집이 있어요.",
            translations: {
              en: {
                prompt: "Use “cross the overpass / next to the bus stop” to describe Ramin's house."
              }
            }
          }
        ]
      },
      {
        id: "dialogue-reading-01",
        title: "우리 집에 찾아오는 방법을 알려 줄게요",
        focus: "읽기와 쓰기",
        page: 119,
        source: "읽기와 쓰기",
        sceneZh: "阅读邮件，理解生日派对邀请和到家路线说明。",
        translations: {
          en: {
            scene: "Read an email invitation and understand directions to the writer's home.",
            learningPoints: [
              "Check sender, recipient, and subject first.",
              "Look for route markers such as 공원 앞, 횡단보도, 편의점 옆.",
              "Notice because-clauses: 친구들이 많이 오기 때문에."
            ]
          }
        },
        learningPoints: [
          "先看收件人、发件人和标题。",
          "路线关键词是 공원 앞、횡단보도、편의점 옆。",
          "친구들이 많이 오기 때문에 是准备很多食物的原因。"
        ],
        lines: [
          {
            speaker: "이링",
            ko: "다음 주 일요일에 제 생일 파티가 있는데 기억하지요?",
            zh: "下周星期日有我的生日派对，你记得吧？",
            guide: "파티가 있는데 先给出背景。",
            translations: {
              en: {
                translation: "I have my birthday party next Sunday. You remember, right?",
                guide: "파티가 있는데 sets up the background."
              }
            }
          },
          {
            speaker: "이링",
            ko: "혹시 일찍 와서 좀 도와줄 수 있어요?",
            zh: "能不能早点来帮一下忙？",
            guide: "혹시 让请求听起来更委婉。",
            translations: {
              en: {
                translation: "Could you maybe come early and help me a little?",
                guide: "혹시 makes the request softer."
              }
            }
          },
          {
            speaker: "이링",
            ko: "친구들이 많이 오기 때문에 음식을 많이 준비할 거예요.",
            zh: "因为朋友们会来很多，所以会准备很多食物。",
            guide: "오기 때문에 明确说明原因。",
            translations: {
              en: {
                translation: "Because many friends are coming, I will prepare a lot of food.",
                guide: "오기 때문에 clearly gives the reason."
              }
            }
          },
          {
            speaker: "이링",
            ko: "호수 공원 알지요? 공원 앞에서 횡단보도를 건너면 편의점이 있는데 그 옆에 무궁화 아파트가 있어요.",
            zh: "你知道湖水公园吧？在公园前过人行横道的话有便利店，旁边有木槿花公寓。",
            guide: "건너면 + 있는데 + 그 옆에 是连续路线说明。",
            translations: {
              en: {
                translation: "You know Hosu Park, right? If you cross the crosswalk in front of the park, there is a convenience store, and Mugunghwa Apartment is next to it.",
                guide: "건너면 + 있는데 + 그 옆에 creates a step-by-step route."
              }
            }
          },
          {
            speaker: "이링",
            ko: "우리 집은 무궁화 아파트 1동 203호예요.",
            zh: "我家是木槿花公寓1栋203号。",
            guide: "地址表达里 동 是栋，호 是房号。",
            translations: {
              en: {
                translation: "My home is Mugunghwa Apartment, Building 1, Unit 203.",
                guide: "In addresses, 동 is building/block and 호 is unit number."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "집에 오는 방법 쓰기",
            promptZh: "用 편의점、아파트、방법 写一段到你家的路线。",
            answerKo: "우리 집에 찾아오는 방법을 알려 줄게요. 공원 앞에서 횡단보도를 건너면 편의점이 있어요. 그 옆에 아파트가 있어요.",
            translations: {
              en: {
                title: "Write directions to your home",
                prompt: "Use convenience store, apartment, and method to write directions to your home."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "읽기 확인",
            promptZh: "이링 씨의 집은 어디에 있어요?",
            answerKo: "무궁화 아파트 1동 203호에 있어요.",
            translations: {
              en: {
                prompt: "Where is Yiling's home?"
              }
            }
          }
        ]
      },
      {
        id: "dialogue-pronunciation-01",
        title: "육교 / 있는데 / 어떻게",
        focus: "발음",
        page: 121,
        source: "발음/배운 어휘 확인",
        sceneZh: "练习本课核心词和问路句的自然发音。",
        translations: {
          en: {
            scene: "Practice natural pronunciation for key words and direction sentences.",
            learningPoints: [
              "육교 is pronounced [육꼬].",
              "있는데 is pronounced [인는데].",
              "어떻게 is pronounced [어떠케]."
            ]
          }
        },
        learningPoints: [
          "육교 的自然发音是 [육꼬]。",
          "있는데 的自然发音是 [인는데]。",
          "어떻게 的自然发音是 [어떠케]。"
        ],
        lines: [
          {
            speaker: "가",
            ko: "이 근처에 서점이 있어요?",
            zh: "这附近有书店吗？",
            guide: "근처에 있어요? 是问附近有没有。",
            translations: {
              en: {
                translation: "Is there a bookstore nearby?",
                guide: "근처에 있어요? asks if something is nearby."
              }
            }
          },
          {
            speaker: "나",
            ko: "네, 저 육교를 지나면 서점이 있어요.",
            zh: "有的，过了那座天桥就有书店。",
            guide: "육교 发音 [육꼬]。",
            translations: {
              en: {
                translation: "Yes. If you pass that overpass, there is a bookstore.",
                guide: "육교 is pronounced [육꼬]."
              }
            }
          },
          {
            speaker: "가",
            ko: "지금 어디에서 기다리는 거예요?",
            zh: "现在在哪里等？",
            guide: "기다리는 거예요? 询问正在等的位置。",
            translations: {
              en: {
                translation: "Where are you waiting now?",
                guide: "기다리는 거예요? asks where someone is waiting."
              }
            }
          },
          {
            speaker: "나",
            ko: "1번 출구 앞에 있는데 언제 와요?",
            zh: "我在1号出口前，你什么时候来？",
            guide: "있는데 发音 [인는데]。",
            translations: {
              en: {
                translation: "I am in front of exit 1. When are you coming?",
                guide: "있는데 is pronounced [인는데]."
              }
            }
          },
          {
            speaker: "가",
            ko: "저 지금 육교 앞에 있는데 어떻게 가요?",
            zh: "我现在在天桥前，怎么走？",
            guide: "어떻게 发音 [어떠케]。",
            translations: {
              en: {
                translation: "I am in front of the overpass now. How do I get there?",
                guide: "어떻게 is pronounced [어떠케]."
              }
            }
          },
          {
            speaker: "나",
            ko: "육교를 지나서 똑바로 50m쯤 오세요.",
            zh: "过了天桥后直走大约50米过来。",
            guide: "50m쯤 表示大约50米。",
            translations: {
              en: {
                translation: "Pass the overpass and come straight about 50 meters.",
                guide: "50m쯤 means about 50 meters."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "발음 따라 읽기",
            promptZh: "跟读 육교[육꼬], 있는데[인는데], 어떻게[어떠케]。",
            answerKo: "육교[육꼬], 있는데[인는데], 어떻게[어떠케]",
            translations: {
              en: {
                title: "Pronunciation practice",
                prompt: "Read 육교[육꼬], 있는데[인는데], 어떻게[어떠케]."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "발음",
            promptZh: "读出“저 지금 육교 앞에 있는데 어떻게 가요?”的自然发音。",
            answerKo: "저 지금 육교[육꼬] 앞에 있는데[인는데] 어떻게[어떠케] 가요?",
            translations: {
              en: {
                prompt: "Read the natural pronunciation of “저 지금 육교 앞에 있는데 어떻게 가요?”"
              }
            }
          }
        ]
      }
    ],
    culture: {
      titleKo: "교통 표지판",
      titleZh: "交通标志牌",
      page: 120,
      summaryZh: "这篇文化文章介绍韩国常见交通标志牌的构成方式，并说明三角形、禁止标志和蓝色指示标志的大致含义。",
      translations: {
        en: {
          title: "Traffic Signs",
          summary: "This culture text explains the components of Korean traffic signs and the meanings of triangular warning signs, prohibition signs, and blue instruction signs."
        }
      },
      paragraphs: [
        {
          ko: "여러분은 길에서 이런 것을 자주 봅니까? 이것을 교통 표지판이라고 합니다.",
          zh: "大家在路上经常看到这样的东西吗？这个叫交通标志牌。",
          guide: "첫 문장은 주제를 여는 질문이고, 두 번째 문장이 핵심 이름을 알려 줍니다.",
          translations: {
            en: {
              translation: "Do you often see things like these on the road? These are called traffic signs.",
              guide: "The first sentence opens the topic; the second sentence gives the key name."
            }
          }
        },
        {
          ko: "교통 표지판은 모양, 색깔, 이미지, 글자로 구성됩니다.",
          zh: "交通标志牌由形状、颜色、图像和文字构成。",
          guide: "구성됩니다 앞的四个名词是理解标志牌的四个要素。",
          translations: {
            en: {
              translation: "Traffic signs are composed of shape, color, image, and writing.",
              guide: "The four nouns before 구성됩니다 are the four elements of a traffic sign."
            }
          }
        },
        {
          ko: "△는 주의하라는 의미입니다. 그리고 ⃠는 금지의 의미이고 ▲는 가능하다는 것을 나타냅니다.",
          zh: "三角形表示要注意。带斜杠的圆形表示禁止，蓝色指示标志表示可以这样做。",
          guide: "주의、금지、가능하다 是这段的三组核心意义。",
          translations: {
            en: {
              translation: "A triangle means to be careful. A slashed circle means prohibition, and a blue instruction sign shows that something is allowed.",
              guide: "주의, 금지, and 가능하다 are the three core meanings in this paragraph."
            }
          }
        },
        {
          ko: "이렇게 교통 표지판의 모양과 색깔을 보면 의미를 알 수 있습니다.",
          zh: "像这样，看交通标志牌的形状和颜色，就能知道它的意思。",
          guide: "모양과 색깔을 보면 是理解交通标志的实用方法。",
          translations: {
            en: {
              translation: "In this way, you can understand the meaning by looking at the shape and color of traffic signs.",
              guide: "모양과 색깔을 보면 gives a practical way to understand signs."
            }
          }
        }
      ],
      keyTerms: [
        {
          ko: "교통 표지판",
          zh: "交通标志牌",
          translations: { en: { meaning: "traffic sign" } }
        },
        {
          ko: "모양",
          zh: "形状",
          translations: { en: { meaning: "shape" } }
        },
        {
          ko: "색깔",
          zh: "颜色",
          translations: { en: { meaning: "color" } }
        },
        {
          ko: "주의",
          zh: "注意",
          translations: { en: { meaning: "warning / caution" } }
        },
        {
          ko: "금지",
          zh: "禁止",
          translations: { en: { meaning: "prohibition" } }
        },
        {
          ko: "가능하다",
          zh: "可以；可能",
          translations: { en: { meaning: "allowed / possible" } }
        }
      ],
      questions: [
        {
          q: "△는 무슨 뜻이에요?",
          zh: "三角形是什么意思？",
          a: "주의하라는 뜻이에요.",
          translations: {
            en: {
              translation: "What does △ mean?",
              answer: "It means to be careful."
            }
          }
        },
        {
          q: "⃠는 무슨 뜻이에요?",
          zh: "带斜杠的圆形是什么意思？",
          a: "금지의 뜻이에요.",
          translations: {
            en: {
              translation: "What does a slashed circle mean?",
              answer: "It means prohibition."
            }
          }
        },
        {
          q: "여러분 나라의 교통 표지판을 소개해 보세요.",
          zh: "请介绍你们国家的交通标志牌。",
          a: "우리 나라에도 주의, 금지, 가능을 나타내는 교통 표지판이 있습니다.",
          translations: {
            en: {
              translation: "Introduce a traffic sign from your country.",
              answer: "In my country, there are also traffic signs that show warning, prohibition, and permission."
            }
          }
        }
      ]
    },
    practice: [
      {
        type: "translation",
        title: "中文转韩文",
        prompt: "请问，我在找韩国银行，它在哪里？",
        answerKo: "저기요, 한국은행을 찾는데 어디에 있어요?",
        translations: {
          en: {
            title: "Translate to Korean",
            prompt: "Excuse me, I am looking for Korea Bank. Where is it?"
          }
        }
      },
      {
        type: "pattern",
        title: "A/V-는데",
        prompt: "用“비가 오다 / 우산이 없다”造句。",
        answerKo: "비가 오는데 우산이 없어요.",
        translations: {
          en: {
            title: "A/V-는데",
            prompt: "Make a sentence with “it is raining / no umbrella.”"
          }
        }
      },
      {
        type: "pattern",
        title: "A/V-기 때문에",
        prompt: "用“친구들이 많이 오다 / 음식을 많이 준비하다”造句。",
        answerKo: "친구들이 많이 오기 때문에 음식을 많이 준비할 거예요.",
        translations: {
          en: {
            title: "A/V-기 때문에",
            prompt: "Make a sentence with “many friends come / prepare a lot of food.”"
          }
        }
      },
      {
        type: "reading",
        title: "邮件阅读",
        prompt: "이링 씨의 집은 어디에 있어요?",
        answerKo: "무궁화 아파트 1동 203호에 있어요.",
        translations: {
          en: {
            title: "Email reading",
            prompt: "Where is Yiling's home?"
          }
        }
      },
      {
        type: "speaking",
        title: "路线说明",
        prompt: "用“육교를 건너면 / 버스 정류장 옆”说明朋友家的位置。",
        answerKo: "여기에서 육교를 건너면 버스 정류장이 있어요. 버스 정류장 옆에 친구 집이 있어요.",
        translations: {
          en: {
            title: "Give directions",
            prompt: "Use “cross the overpass / next to the bus stop” to explain where your friend's house is."
          }
        }
      },
      {
        type: "culture",
        title: "文化理解",
        prompt: "교통 표지판은 무엇으로 구성돼요?",
        answerKo: "모양, 색깔, 이미지, 글자로 구성됩니다.",
        translations: {
          en: {
            title: "Culture check",
            prompt: "What are traffic signs composed of?"
          }
        }
      }
    ],
    stats: {
      vocabulary: 0,
      dialogues: 5,
      culture: 1,
      practice: 6
    }
  };

  lesson.stats.vocabulary = lesson.vocabulary.length;
  window.lessonGuideL2LessonChunks ||= {};
  window.lessonGuideL2LessonChunks["l2-10"] = lesson;
})();
