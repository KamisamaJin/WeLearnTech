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
    "副词": "adverb",
    "动词": "verb",
    "动词短语": "verb phrase",
    "句型表达": "sentence pattern",
    "名词": "noun",
    "名词短语": "noun phrase",
    "形容词": "adjective",
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
    id: "l2-13",
    number: 13,
    titleKo: "소포를 보내려고 하는데요",
    titleZh: "我想寄包裹",
    pages: "142-151",
    status: "refined",
    progress: {
      vocabulary: "refined-p142-p151",
      dialogue: "refined-p145-p151",
      culture: "reviewed-p150",
      practice: "refined-p145-p151"
    },
    vocabularySources: [
      {
        page: 142,
        label: "단원 제목",
        note: "课题句、우체국과 은행 主题"
      },
      {
        page: 144,
        label: "어휘와 문법 1",
        note: "邮局业务、信封和邮编相关词汇"
      },
      {
        page: 145,
        label: "문법 1",
        note: "V-(으)려고 하다 意图表达和练习"
      },
      {
        page: 146,
        label: "어휘와 문법 2",
        note: "银行业务、ATM、卡和汇款词汇"
      },
      {
        page: 147,
        label: "문법 2",
        note: "V-아/어야 되다 必要和义务表达"
      },
      {
        page: 148,
        label: "말하기와 듣기",
        note: "邮局寄包裹对话和银行听力问题"
      },
      {
        page: 149,
        label: "읽기와 쓰기",
        note: "邮局业务时间阅读和 택배 신청서 写作"
      },
      {
        page: 150,
        label: "문화와 정보",
        note: "韩国道路名地址原文与问题"
      },
      {
        page: 151,
        label: "발음/배운 어휘 확인",
        note: "发音练习和本课词汇复习"
      }
    ],
    goals: [
      "能够说明在邮局寄信、寄包裹、寄快递和使用 EMS 时需要做什么。",
      "能够说出银行里开户、存取款、汇款、换钱、办卡和缴纳公共费用等业务。",
      "能够用 V-(으)려고 하다 表达“打算/想要做某事”。",
      "能够用 V-아/어야 되다 表达必须做的事、手续或必要条件。",
      "能够读懂邮局业务时间说明，并理解韩国道路名地址的基本写法。"
    ],
    grammar: [
      {
        pattern: "V-(으)려고 하다",
        zh: "打算……；想要……",
        guide: "表示说话人心里已经有做某事的打算。动词有收音时接 -으려고 하다，没有收音时接 -려고 하다。",
        examples: [
          {
            ko: "이엠에스(EMS)를 보내려고 해요.",
            zh: "我打算寄 EMS。"
          },
          {
            ko: "부모님께 편지를 쓰려고 해요.",
            zh: "我打算给父母写信。"
          },
          {
            ko: "주말에 한국어 수업을 들으려고 해요.",
            zh: "我打算周末去上韩语课。"
          }
        ],
        translations: {
          en: {
            meaning: "intend to ...; plan to ...",
            guide: "Use V-(으)려고 하다 when the speaker has an intention or plan. Use -으려고 하다 after a final consonant and -려고 하다 after a vowel."
          }
        }
      },
      {
        pattern: "V-아/어야 되다",
        zh: "必须……；应该……",
        guide: "表示有义务或有必要做某事。常用于问手续、条件和规定。",
        examples: [
          {
            ko: "먼저 이 신청서를 쓰셔야 돼요.",
            zh: "您必须先填写这张申请表。"
          },
          {
            ko: "회사에 아홉 시까지 가야 돼요.",
            zh: "必须九点前到公司。"
          },
          {
            ko: "신용 카드를 만들 때 신분증이 있어야 돼요.",
            zh: "办信用卡时必须有身份证。"
          }
        ],
        translations: {
          en: {
            meaning: "must ...; have to ...",
            guide: "Use V-아/어야 되다 to say an action is required or necessary. It is common for procedures, conditions, and rules."
          }
        }
      }
    ],
    vocabulary: [
      vocab("소포", "包裹", "名词", 142, "단원 제목", "소포를 보내려고 하는데요.", "我想寄包裹。", "package; parcel", "I would like to send a package.", [["collocation", "소포를 보내다"], ["pitfall", "소포는 우체국에서 보내는包裹感更强。", "소포 is strongly associated with packages sent through the post office."]]),
      vocab("우체국", "邮局", "名词", 142, "단원 제목", "우체국에서 소포를 보내요.", "在邮局寄包裹。", "post office", "I send a package at the post office.", [["collocation", "우체국에 가다"], ["collocation", "우체국에서 보내다"]]),
      vocab("은행", "银行", "名词", 142, "단원 제목", "은행에서 통장을 만들어요.", "在银行办存折/账户。", "bank", "I open a bank account at a bank.", [["collocation", "은행에 가다"], ["collocation", "은행 업무"]]),
      vocab("우체국과 은행", "邮局和银行", "名词短语", 142, "단원 제목", "이번 과는 우체국과 은행 표현을 배워요.", "这一课学习邮局和银行表达。", "post office and bank", "This lesson covers post office and bank expressions.", [["collocation", "우체국과 은행"], ["pitfall", "과/와 是书面或正式感较强的“和”。", "과/와 is a somewhat formal way to say and."]]),

      vocab("편지를 보내다", "寄信", "动词短语", 144, "어휘와 문법 1", "편지를 보내려고 해요.", "我打算寄信。", "to send a letter", "I plan to send a letter.", [["collocation", "친구한테 편지를 보내다"], ["collocation", "부모님께 편지를 쓰다"]]),
      vocab("택배를 보내다", "寄快递", "动词短语", 144, "어휘와 문법 1", "친구한테 택배를 보내요.", "给朋友寄快递。", "to send a delivery package", "I send a package to a friend.", [["collocation", "택배를 보내다"], ["pitfall", "택배는快递配送，소포는邮局包裹。", "택배 is parcel delivery, while 소포 is a postal package."]]),
      vocab("등기", "挂号邮件；挂号", "名词", 144, "어휘와 문법 1", "중요한 편지는 등기로 보내요.", "重要的信件用挂号寄。", "registered mail", "Important letters are sent by registered mail.", [["collocation", "등기로 보내다"], ["pitfall", "등기에는 접수와 배달记录。", "등기 includes registration and delivery tracking."]]),
      vocab("국제 특급 우편(EMS)", "国际特快专递 EMS", "名词短语", 144, "어휘와 문법 1", "이엠에스(EMS)를 보내려고 해요.", "我想寄 EMS。", "Express Mail Service (EMS)", "I plan to send it by EMS.", [["collocation", "EMS를 보내다"], ["pitfall", "해외로 빠르게 보낼 때 쓰는 국제 우편 서비스。", "It is an international express mail service used for faster overseas delivery."]]),
      vocab("주소를 쓰다", "写地址", "动词短语", 144, "어휘와 문법 1", "편지 봉투에 주소를 써요.", "在信封上写地址。", "to write an address", "Write the address on the envelope.", [["collocation", "편지 봉투에 주소를 쓰다"], ["pitfall", "한국 주소는 큰 장소에서 작은 장소 순서로 써요。", "Korean addresses are written from larger place to smaller place."]]),
      vocab("우표를 붙이다", "贴邮票", "动词短语", 144, "어휘와 문법 1", "편지 봉투에 우표를 붙여요.", "在信封上贴邮票。", "to attach a stamp", "Attach a stamp to the envelope.", [["collocation", "우표를 붙이다"], ["form", "붙이다 + -어요 -> 붙여요", "붙이다 + -어요 -> 붙여요"]]),
      vocab("편지 봉투", "信封", "名词短语", 144, "어휘와 문법 1", "편지 봉투에 우편 번호를 써요.", "在信封上写邮政编码。", "envelope", "Write the postal code on the envelope.", [["collocation", "편지 봉투"], ["collocation", "봉투에 쓰다"]]),
      vocab("우편 번호를 쓰다", "写邮政编码", "动词短语", 144, "어휘와 문법 1", "받는 사람의 우편 번호를 써요.", "写收件人的邮政编码。", "to write a postal code", "Write the recipient's postal code.", [["collocation", "우편 번호"], ["pitfall", "教材发音是 [우편 버노]。", "The textbook pronunciation is [우편 버노]."]]),
      vocab("보내는 사람", "寄件人", "名词短语", 144, "어휘와 문법 1", "보내는 사람의 주소를 써요.", "写寄件人的地址。", "sender", "Write the sender's address.", [["collocation", "보내는 사람"], ["pitfall", "신청서에서 보내는 분으로도 나와요。", "On forms this can also appear as 보내는 분."]]),
      vocab("받는 사람", "收件人", "名词短语", 144, "어휘와 문법 1", "받는 사람의 이름을 써요.", "写收件人的姓名。", "recipient", "Write the recipient's name.", [["collocation", "받는 사람"], ["pitfall", "신청서에서 받는 분으로도 나와요。", "On forms this can also appear as 받는 분."]]),

      vocab("보내려고 하다", "打算寄；想寄", "语法表达", 145, "문법 1", "베트남에 소포를 보내려고 하는데요.", "我想往越南寄包裹。", "to intend to send", "I am planning to send a package to Vietnam.", [["form", "보내다 + -려고 하다 -> 보내려고 하다", "보내다 + -려고 하다 -> 보내려고 하다"], ["collocation", "소포를 보내려고 하다"]]),
      vocab("쓰려고 하다", "打算写", "语法表达", 145, "문법 1", "부모님께 쓰려고 해요.", "我打算写给父母。", "to intend to write", "I intend to write to my parents.", [["form", "쓰다 + -려고 하다 -> 쓰려고 하다", "쓰다 + -려고 하다 -> 쓰려고 하다"], ["collocation", "편지를 쓰려고 하다"]]),
      vocab("들으려고 하다", "打算听；打算上课", "语法表达", 145, "문법 1", "주말에 한국어 수업을 들으려고 해요.", "我打算周末上韩语课。", "to intend to take/listen to", "I plan to take Korean class on the weekend.", [["form", "듣다 + -으려고 하다 -> 들으려고 하다", "듣다 + -으려고 하다 -> 들으려고 하다"], ["pitfall", "듣다 是 ㄷ 不规则，变 들으려고。", "듣다 is ㄷ-irregular and becomes 들으려고."]]),
      vocab("있으려고 하다", "打算待着；想在", "语法表达", 145, "문법 1", "비가 와서 오늘은 집에 있으려고 해요.", "因为下雨，今天打算待在家。", "to intend to stay/be", "I plan to stay home today because it is raining.", [["form", "있다 + -으려고 하다 -> 있으려고 하다", "있다 + -으려고 하다 -> 있으려고 하다"], ["collocation", "집에 있으려고 하다"]]),
      vocab("쉬려고 하다", "打算休息", "语法表达", 145, "문법 1", "피곤해서 좀 쉬려고 해요.", "因为累，想休息一下。", "to intend to rest", "I plan to rest because I am tired.", [["form", "쉬다 + -려고 하다 -> 쉬려고 하다", "쉬다 + -려고 하다 -> 쉬려고 하다"], ["collocation", "좀 쉬려고 하다"]]),
      vocab("이메일을 보내다", "发电子邮件", "动词短语", 145, "문법 1", "이메일을 보내려고 해요.", "我打算发电子邮件。", "to send an email", "I plan to send an email.", [["collocation", "이메일을 보내다"], ["pitfall", "이메일은 보내다，편지는 쓰다/보내다 都可。", "Use 보내다 for email; letters can use 쓰다 or 보내다."]]),
      vocab("친구를 만나다", "见朋友", "动词短语", 145, "문법 1", "친구를 만나려고 해요.", "我打算见朋友。", "to meet a friend", "I plan to meet a friend.", [["collocation", "친구를 만나다"], ["form", "만나다 + -려고 하다 -> 만나려고 하다", "만나다 + -려고 하다 -> 만나려고 하다"]]),
      vocab("고향에 갔다 오다", "回一趟故乡", "动词短语", 145, "문법 1", "고향에 갔다 오려고 해요.", "我打算回一趟故乡。", "to go to one's hometown and come back", "I plan to visit my hometown and come back.", [["collocation", "고향에 갔다 오다"], ["pitfall", "갔다 오다 强调去后再回来。", "갔다 오다 emphasizes going and returning."]]),
      vocab("생신", "生日（尊敬语）", "名词", 145, "문법 1", "곧 어머니의 생신이에요.", "马上就是母亲的生日。", "birthday (honorific)", "It is my mother's birthday soon.", [["collocation", "어머니의 생신"], ["pitfall", "长辈生日用 생신，比 생일 尊敬。", "Use 생신 for elders' birthdays; it is more respectful than 생일."]]),
      vocab("선물을 준비하다", "准备礼物", "动词短语", 145, "문법 1", "선물을 준비하려고 해요.", "我打算准备礼物。", "to prepare a gift", "I plan to prepare a gift.", [["collocation", "선물을 준비하다"], ["form", "준비하다 + -려고 하다 -> 준비하려고 하다", "준비하다 + -려고 하다 -> 준비하려고 하다"]]),

      vocab("입금하다", "存款；汇入", "动词", 146, "어휘와 문법 2", "은행에서 돈을 입금했어요.", "在银行存了钱。", "to deposit money", "I deposited money at the bank.", [["collocation", "돈을 입금하다"], ["pitfall", "입금은 돈이 계좌에 들어가는 것。", "입금 means money goes into an account."]]),
      vocab("돈을 넣다", "放钱；存钱", "动词短语", 146, "어휘와 문법 2", "통장에 돈을 넣었어요.", "往账户里存了钱。", "to put in money", "I put money into the account.", [["collocation", "돈을 넣다"], ["pitfall", "口语里 입금하다 的解释词로 나와요。", "It is used as a plain explanation for 입금하다."]]),
      vocab("출금하다", "取款", "动词", 146, "어휘와 문법 2", "주말에 출금하려고 해요.", "周末想取钱。", "to withdraw money", "I plan to withdraw money on the weekend.", [["collocation", "돈을 출금하다"], ["pitfall", "출금은 돈이 계좌에서 나오는 것。", "출금 means money comes out of an account."]]),
      vocab("돈을 찾다", "取钱", "动词短语", 146, "어휘와 문법 2", "ATM에서 돈을 찾아요.", "在 ATM 取钱。", "to withdraw money", "I withdraw money from an ATM.", [["collocation", "돈을 찾다"], ["pitfall", "찾다 在银行语境里是“取钱”。", "찾다 in a banking context means to withdraw money."]]),
      vocab("현금 자동 인출기(ATM)를 이용하다", "使用自动取款机 ATM", "动词短语", 146, "어휘와 문법 2", "우체국 ATM을 이용해 보세요.", "请试着使用邮局 ATM。", "to use an ATM", "Try using the post office ATM.", [["collocation", "ATM을 이용하다"], ["pitfall", "教材里 현금 자동 인출기 缩写为 ATM。", "The textbook gives 현금 자동 인출기 as ATM."]]),
      vocab("돈을 바꾸다", "换钱", "动词短语", 146, "어휘와 문법 2", "은행에서 돈을 바꿨어요.", "在银行换了钱。", "to exchange money", "I exchanged money at the bank.", [["collocation", "돈을 바꾸다"], ["collocation", "환전하다"]]),
      vocab("환전하다", "换汇；兑换货币", "动词", 146, "어휘와 문법 2", "달러를 원으로 환전했어요.", "把美元换成了韩元。", "to exchange currency", "I exchanged dollars for won.", [["collocation", "돈을 환전하다"], ["pitfall", "환전하다 比 돈을 바꾸다 更银行/外汇用语。", "환전하다 is more bank/currency-specific than 돈을 바꾸다."]]),
      vocab("계좌를 개설하다", "开账户", "动词短语", 146, "어휘와 문법 2", "계좌를 개설하려고 해요.", "我想开账户。", "to open an account", "I plan to open an account.", [["collocation", "계좌를 개설하다"], ["pitfall", "통장을 만들다 是更生活化的说法。", "통장을 만들다 is a more everyday expression."]]),
      vocab("통장을 만들다", "办存折；开账户", "动词短语", 146, "어휘와 문법 2", "저는 은행에 가서 통장을 만들었어요.", "我去银行办了账户/存折。", "to open a bankbook/account", "I went to the bank and opened an account.", [["collocation", "통장을 만들다"], ["pitfall", "한국어 초급에서는开户常说 통장을 만들다。", "At beginner level, opening an account is often expressed as 통장을 만들다."]]),
      vocab("신용 카드/체크 카드를 만들다", "办信用卡/借记卡", "动词短语", 146, "어휘와 문법 2", "신용 카드를 만들 때 신분증이 있어야 돼요.", "办信用卡时必须有身份证。", "to get a credit/debit card", "You need ID when getting a credit card.", [["collocation", "신용 카드를 만들다"], ["collocation", "체크 카드를 만들다"]]),
      vocab("공과금을 납부하다", "缴纳公共费用", "动词短语", 146, "어휘와 문법 2", "은행에서 공과금을 납부했어요.", "在银行缴纳了公共费用。", "to pay utility/public fees", "I paid utility fees at the bank.", [["collocation", "공과금을 납부하다"], ["pitfall", "전기, 수도, 가스 같은费用에 많이 쓰여요。", "It is commonly used for bills such as electricity, water, or gas."]]),
      vocab("돈을 보내다", "汇款；寄钱", "动词短语", 146, "어휘와 문법 2", "고향에 돈을 보내요.", "往家乡汇钱。", "to send money", "I send money to my hometown.", [["collocation", "돈을 보내다"], ["collocation", "송금하다"]]),
      vocab("송금하다", "汇款", "动词", 146, "어휘와 문법 2", "가족에게 돈을 송금했어요.", "给家人汇了钱。", "to transfer money", "I transferred money to my family.", [["collocation", "돈을 송금하다"], ["pitfall", "은행 업무에서는 돈을 보내다보다 더正式。", "In banking, 송금하다 is more formal than 돈을 보내다."]]),

      vocab("해야 되다", "必须做；应该做", "语法表达", 147, "문법 2", "어떻게 해야 돼요?", "应该怎么做？", "must do; have to do", "What do I have to do?", [["collocation", "어떻게 해야 돼요?"], ["pitfall", "手续场景中非常常用。", "Very common when asking about procedures."]]),
      vocab("쓰셔야 되다", "您必须写/填", "语法表达", 147, "문법 2", "먼저 이 신청서를 쓰셔야 돼요.", "您必须先填写这张申请表。", "you must write/fill out", "You must fill out this form first.", [["form", "쓰다 + -시- + -어야 되다 -> 쓰셔야 되다", "쓰다 + -시- + -어야 되다 -> 쓰셔야 되다"], ["collocation", "신청서를 쓰셔야 되다"]]),
      vocab("가야 되다", "必须去", "语法表达", 147, "문법 2", "회사에 몇 시까지 가야 돼요?", "必须几点前到公司？", "must go", "By what time do I have to go to work?", [["form", "가다 + -아야 되다 -> 가야 되다", "가다 + -아야 되다 -> 가야 되다"], ["collocation", "몇 시까지 가야 되다"]]),
      vocab("있어야 되다", "必须有", "语法表达", 147, "문법 2", "신분증이 있어야 돼요.", "必须有身份证。", "must have; need", "You need an ID card.", [["form", "있다 + -어야 되다 -> 있어야 되다", "있다 + -어야 되다 -> 있어야 되다"], ["collocation", "신분증이 있어야 되다"]]),
      vocab("청소를 하다", "打扫", "动词短语", 147, "문법 2", "방이 더러워서 청소를 해야 돼요.", "房间脏，所以必须打扫。", "to clean", "The room is dirty, so I have to clean it.", [["collocation", "청소를 하다"], ["collocation", "방을 청소하다"]]),
      vocab("신청서", "申请表", "名词", 147, "문법 2", "이 신청서를 쓰셔야 돼요.", "必须填写这张申请表。", "application form", "You must fill out this application form.", [["collocation", "신청서를 쓰다"], ["collocation", "신청서를 작성하다"]]),
      vocab("신분증", "身份证件", "名词", 147, "문법 2", "카드를 만들 때 신분증이 있어야 돼요.", "办卡时必须有身份证件。", "ID card; identification", "You need an ID when getting a card.", [["collocation", "신분증이 있다"], ["collocation", "신분증을 가져오다"]]),
      vocab("서명하다", "签名", "动词", 147, "문법 2", "여기에 서명해야 돼요.", "必须在这里签名。", "to sign", "You must sign here.", [["collocation", "서명해야 되다"], ["collocation", "신청서에 서명하다"]]),
      vocab("30분 정도 기다리다", "等大约30分钟", "动词短语", 147, "문법 2", "30분 정도 기다려야 돼요.", "必须等大约30分钟。", "to wait about 30 minutes", "You have to wait about 30 minutes.", [["collocation", "30분 정도 기다리다"], ["form", "기다리다 + -어야 되다 -> 기다려야 되다", "기다리다 + -어야 되다 -> 기다려야 되다"]]),
      vocab("헬멧을 쓰다", "戴头盔", "动词短语", 147, "문법 2", "자전거를 탈 때 헬멧을 써야 돼요.", "骑自行车时必须戴头盔。", "to wear a helmet", "You must wear a helmet when riding a bike.", [["collocation", "헬멧을 쓰다"], ["pitfall", "모자/안경/헬멧 都常用 쓰다。", "쓰다 is used with hats, glasses, and helmets."]]),

      vocab("직원", "职员；工作人员", "名词", 148, "말하기와 듣기", "우체국에서 직원이 이야기해요.", "邮局职员在说话。", "staff member; clerk", "A clerk is speaking at the post office.", [["collocation", "우체국 직원"], ["collocation", "은행 직원"]]),
      vocab("안에 뭐가 들어 있어요?", "里面有什么？", "句型表达", 148, "말하기와 듣기", "이 안에 뭐가 들어 있어요?", "这里面有什么？", "What is inside?", "What is inside this?", [["collocation", "안에 들어 있다"], ["pitfall", "택배/소포 내용물을 물을 때常用。", "It is commonly used to ask about package contents."]]),
      vocab("옷하고 화장품", "衣服和化妆品", "名词短语", 148, "말하기와 듣기", "옷하고 화장품요.", "衣服和化妆品。", "clothes and cosmetics", "Clothes and cosmetics.", [["collocation", "옷하고 화장품"], ["pitfall", "하고 是口语里的“和”。", "하고 is a conversational way to say and."]]),
      vocab("일반", "普通；一般", "名词", 148, "말하기와 듣기", "일반으로 할게요.", "我用普通的。", "regular; standard", "I will use regular shipping.", [["collocation", "일반으로 하다"], ["pitfall", "邮寄方式里 일반 与 특급 对比。", "For shipping, 일반 contrasts with 특급."]]),
      vocab("특급", "特快；加急", "名词", 148, "말하기와 듣기", "일반하고 특급이 있어요.", "有普通和特快。", "express; special delivery", "There are regular and express options.", [["collocation", "특급으로 보내다"], ["pitfall", "특급은 일반보다 빠르고 보통 더 비싸요。", "Express is faster than regular and usually costs more."]]),
      vocab("도착하다", "到达", "动词", 148, "말하기와 듣기", "다음 주말까지는 도착할 거예요.", "下周末之前会到。", "to arrive", "It will arrive by next weekend.", [["collocation", "도착할 거예요"], ["collocation", "베트남에 도착하다"]]),
      vocab("4일에서 7일 정도 걸리다", "需要大约4到7天", "动词短语", 148, "말하기와 듣기", "보통 4일에서 7일 정도 걸려요.", "通常需要大约4到7天。", "to take about four to seven days", "It usually takes about four to seven days.", [["collocation", "시간이 걸리다"], ["pitfall", "A에서 B까지 表示范围“从A到B”。", "A에서 B까지 marks a range from A to B."]]),
      vocab("여기에 올려 놓다", "放到这里", "动词短语", 148, "말하기와 듣기", "여기에 올려 놓으세요.", "请放到这里。", "to put/place it here", "Please place it here.", [["collocation", "여기에 올려 놓다"], ["pitfall", "올려 놓다 表示放到较高处/指定台面上。", "올려 놓다 means to place something up/on a surface."]]),
      vocab("서류", "文件；资料", "名词", 148, "말하기와 듣기", "우즈베키스탄에 서류를 보내려고 해요.", "想往乌兹别克斯坦寄文件。", "documents", "I plan to send documents to Uzbekistan.", [["collocation", "서류를 보내다"], ["collocation", "서류를 준비하다"]]),
      vocab("통장", "存折；账户本", "名词", 148, "말하기와 듣기", "라흐만 씨는 통장을 만들려고 해요.", "拉赫曼想办存折/账户。", "bankbook; account passbook", "Rahman plans to open a bankbook/account.", [["collocation", "통장을 만들다"], ["collocation", "통장이 있다"]]),
      vocab("체크 카드", "借记卡", "名词", 148, "말하기와 듣기", "체크 카드를 만들려고 해요.", "想办借记卡。", "debit card", "I plan to get a debit card.", [["collocation", "체크 카드를 만들다"], ["pitfall", "체크 카드는 계좌 잔액에서 바로 결제돼요。", "A debit card pays directly from the account balance."]]),

      vocab("우편 서비스", "邮政服务", "名词短语", 149, "읽기와 쓰기", "우체국에서는 우편 서비스를 해 줍니다.", "邮局提供邮政服务。", "postal service", "The post office provides postal services.", [["collocation", "우편 서비스"], ["collocation", "서비스를 이용하다"]]),
      vocab("은행 업무", "银行业务", "名词短语", 149, "읽기와 쓰기", "우체국에서는 은행 업무도 함께 해 줍니다.", "邮局也一起办理银行业务。", "banking services", "The post office also provides banking services.", [["collocation", "은행 업무"], ["collocation", "업무 시간"]]),
      vocab("우편 업무 시간", "邮政业务时间", "名词短语", 149, "읽기와 쓰기", "우편 업무 시간은 9시부터 6시까지입니다.", "邮政业务时间是9点到6点。", "postal service hours", "Postal service hours are from 9 to 6.", [["collocation", "우편 업무 시간"], ["pitfall", "업무 시간은营业/办公时间。", "업무 시간 means business or office hours."]]),
      vocab("금융 업무 시간", "金融业务时间", "名词短语", 149, "읽기와 쓰기", "금융 업무 시간은 9시부터 4시 30분까지입니다.", "金融业务时间是9点到4点30分。", "financial service hours", "Financial service hours are from 9 to 4:30.", [["collocation", "금융 업무 시간"], ["pitfall", "금융은 예금, 송금, 보험 같은 돈 관련业务。", "금융 covers money-related services such as deposits, transfers, and insurance."]]),
      vocab("예금", "存款", "名词", 149, "읽기와 쓰기", "우체국에서는 예금 업무도 합니다.", "邮局也办理存款业务。", "deposit; savings", "The post office also handles deposits.", [["collocation", "예금 업무"], ["pitfall", "입금은动作，예금은存款/储蓄业务。", "입금 is the action of depositing; 예금 is deposits/savings."]]),
      vocab("보험", "保险", "名词", 149, "읽기와 쓰기", "우체국 보험 업무 시간이 있어요.", "有邮局保险业务时间。", "insurance", "There are post office insurance service hours.", [["collocation", "우체국 보험"], ["collocation", "보험 업무"]]),
      vocab("문을 닫다", "关门；停止营业", "动词短语", 149, "읽기와 쓰기", "우체국은 주말에 문을 닫습니다.", "邮局周末关门。", "to close", "The post office is closed on weekends.", [["collocation", "문을 닫다"], ["pitfall", "기관/가게가 쉬는 것도 문을 닫다。", "문을 닫다 can mean an office or store is closed."]]),
      vocab("입출금", "存取款", "名词", 149, "읽기와 쓰기", "주말에 입출금을 하려고 합니까?", "周末想存取款吗？", "deposits and withdrawals", "Do you want to deposit or withdraw money on the weekend?", [["collocation", "입출금을 하다"], ["pitfall", "입금 + 출금 = 입출금。", "입출금 combines deposits and withdrawals."]]),
      vocab("이용할 수 있다", "可以使用", "句型表达", 149, "읽기와 쓰기", "오후 11시 30분까지 이용할 수 있습니다.", "可以使用到晚上11点30分。", "can use", "You can use it until 11:30 p.m.", [["collocation", "ATM을 이용할 수 있다"], ["form", "이용하다 + -(으)ㄹ 수 있다 -> 이용할 수 있다", "이용하다 + -(으)ㄹ 수 있다 -> 이용할 수 있다"]]),
      vocab("택배 신청서", "快递申请单", "名词短语", 149, "읽기와 쓰기", "택배 신청서를 써 보세요.", "请试着填写快递申请单。", "parcel delivery form", "Fill out a parcel delivery form.", [["collocation", "택배 신청서"], ["collocation", "신청서를 쓰다"]]),
      vocab("내용물", "内装物；内容物", "名词", 149, "읽기와 쓰기", "내용물에 옷하고 화장품을 써요.", "在内容物栏写衣服和化妆品。", "contents", "Write clothes and cosmetics as the contents.", [["collocation", "내용물을 쓰다"], ["pitfall", "택배 안에 들어 있는 물건을 말해요。", "It means what is inside a package."]]),

      vocab("한국의 주소", "韩国的地址", "名词短语", 150, "문화와 정보", "한국의 주소를 쓸 때는 큰 장소에서 작은 장소의 순서로 씁니다.", "写韩国地址时按从大地点到小地点的顺序写。", "Korean addresses", "Korean addresses are written from larger places to smaller places.", [["collocation", "한국의 주소"], ["collocation", "주소를 쓰다"]]),
      vocab("도로명 주소", "道路名地址", "名词短语", 150, "문화와 정보", "한국은 도로명 주소를 사용합니다.", "韩国使用道路名地址。", "road-name address", "Korea uses road-name addresses.", [["collocation", "도로명 주소"], ["pitfall", "道路名+建筑号码是韩国现行地址系统重点。", "Road names and building numbers are central to Korea's address system."]]),
      vocab("도로 이름", "道路名称", "名词短语", 150, "문화와 정보", "도로명 주소는 도로 이름과 건물 번호로 표기합니다.", "道路名地址用道路名称和建筑号码标记。", "road name", "A road-name address is written with a road name and building number.", [["collocation", "도로 이름"], ["collocation", "도로명"]]),
      vocab("건물 번호", "建筑号码", "名词短语", 150, "문화와 정보", "건물 번호로 표기합니다.", "用建筑号码标记。", "building number", "It is written with a building number.", [["collocation", "건물 번호"], ["collocation", "번호로 표기하다"]]),
      vocab("표기하다", "标记；书写表示", "动词", 150, "문화와 정보", "도로 이름과 건물 번호로 표기합니다.", "用道路名称和建筑号码标记。", "to write; mark; indicate", "It is indicated with a road name and building number.", [["collocation", "N으로 표기하다"], ["pitfall", "표기하다는 글로 적어 나타내다。", "표기하다 means to represent something in writing."]]),
      vocab("큰 장소에서 작은 장소의 순서", "从大地点到小地点的顺序", "名词短语", 150, "문화와 정보", "큰 장소에서 작은 장소의 순서로 씁니다.", "按从大地点到小地点的顺序写。", "order from larger place to smaller place", "Write it in order from larger place to smaller place.", [["collocation", "순서로 쓰다"], ["pitfall", "한국 주소顺序和很多西方地址相反。", "Korean address order is the reverse of many Western address formats."]]),
      vocab("도시 이름", "城市名称", "名词短语", 150, "문화와 정보", "도시 이름, 도로명과 건물 번호처럼 씁니다.", "像城市名、道路名和建筑号码这样写。", "city name", "It is written with items such as city name, road name, and building number.", [["collocation", "도시 이름"], ["collocation", "이름을 쓰다"]]),
      vocab("서울출입국ㆍ외국인청", "首尔出入境外国人厅", "名词", 150, "문화와 정보", "서울출입국ㆍ외국인청의 주소는 양천구 목동동로 151입니다.", "首尔出入境外国人厅的地址是阳川区木洞东路151。", "Seoul Immigration Office", "The address of the Seoul Immigration Office is Yangcheon-gu Mokdongdong-ro 151.", [["collocation", "서울출입국ㆍ외국인청"], ["pitfall", "기관명이라 통째로 익히면 좋아요。", "It is an institution name, so learning it as a whole is useful."]]),
      vocab("양천구 목동동로 151", "阳川区木洞东路151", "名词短语", 150, "문화와 정보", "서울특별시 양천구 목동동로 151", "首尔特别市阳川区木洞东路151。", "Yangcheon-gu Mokdongdong-ro 151", "Seoul, Yangcheon-gu, Mokdongdong-ro 151.", [["collocation", "목동동로 151"], ["pitfall", "도로명 주소示例：区 + 路名 + 建筑号码。", "This road-name address example is district + road name + building number."]]),

      vocab("택배", "快递", "名词", 151, "발음/배운 어휘 확인", "친구한테 택배를 보내요.", "给朋友寄快递。", "parcel delivery", "I send a delivery package to a friend.", [["collocation", "택배를 보내다"], ["pitfall", "教材发音是 [택빼]。", "The textbook pronunciation is [택빼]."]]),
      vocab("우편 번호", "邮政编码", "名词", 151, "발음/배운 어휘 확인", "우편 번호가 뭐예요?", "邮政编码是多少？", "postal code", "What is the postal code?", [["collocation", "우편 번호를 쓰다"], ["pitfall", "教材发音是 [우편 버노]。", "The textbook pronunciation is [우편 버노]."]]),
      vocab("옷하고", "衣服和……", "名词短语", 151, "발음/배운 어휘 확인", "옷하고 화장품요.", "衣服和化妆品。", "clothes and ...", "Clothes and cosmetics.", [["collocation", "옷하고 화장품"], ["pitfall", "教材发音是 [오타고]。", "The textbook pronunciation is [오타고]."]])
    ],
    dialogues: [
      {
        id: "dialogue-grammar-01",
        title: "무엇을 하려고 해요?",
        focus: "V-(으)려고 하다",
        page: 145,
        source: "문법 1",
        sceneZh: "说明自己打算做什么。",
        translations: {
          en: {
            scene: "Say what you intend or plan to do.",
            learningPoints: [
              "Use V-(으)려고 하다 for intentions.",
              "쓰다 becomes 쓰려고 하다.",
              "듣다 becomes 들으려고 하다 because it is ㄷ-irregular."
            ]
          }
        },
        learningPoints: [
          "V-(으)려고 하다 表示打算做某事。",
          "쓰다 变 쓰려고 하다。",
          "듣다 是 ㄷ 不规则，变 들으려고 하다。"
        ],
        lines: [
          {
            speaker: "직원",
            ko: "어떻게 오셨어요?",
            zh: "您来办什么？",
            guide: "服务窗口里用来问对方目的。",
            translations: {
              en: {
                translation: "How can I help you?",
                guide: "At a service counter, this asks the visitor's purpose."
              }
            }
          },
          {
            speaker: "손님",
            ko: "이엠에스(EMS)를 보내려고 해요.",
            zh: "我想寄 EMS。",
            guide: "보내려고 해요 表示已经有寄的打算。",
            translations: {
              en: {
                translation: "I would like to send this by EMS.",
                guide: "보내려고 해요 shows an intention to send something."
              }
            }
          },
          {
            speaker: "가",
            ko: "누구한테 편지를 쓰려고 해요?",
            zh: "你打算给谁写信？",
            guide: "누구한테 用来问对象。",
            translations: {
              en: {
                translation: "Who are you going to write a letter to?",
                guide: "누구한테 asks who the action is directed to."
              }
            }
          },
          {
            speaker: "나",
            ko: "부모님께 쓰려고 해요.",
            zh: "我打算写给父母。",
            guide: "께 是给父母或长辈用的尊敬助词。",
            translations: {
              en: {
                translation: "I am going to write to my parents.",
                guide: "께 is a respectful particle used for parents or elders."
              }
            }
          },
          {
            speaker: "나",
            ko: "평일에는 시간이 없어요. 그래서 주말에 한국어 수업을 들으려고 해요.",
            zh: "平日没有时间。所以我打算周末上韩语课。",
            guide: "들으려고 해요 来自 듣다，是 ㄷ 不规则。",
            translations: {
              en: {
                translation: "I do not have time on weekdays. So I plan to take Korean class on the weekend.",
                guide: "들으려고 해요 comes from 듣다 and follows the ㄷ-irregular pattern."
              }
            }
          },
          {
            speaker: "나",
            ko: "비가 와서 오늘은 집에 있으려고 해요.",
            zh: "因为下雨，今天打算待在家。",
            guide: "있으려고 해요 表示打算待在某处。",
            translations: {
              en: {
                translation: "Because it is raining, I plan to stay home today.",
                guide: "있으려고 해요 means intending to stay somewhere."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "내 계획 말하기",
            promptZh: "用 이메일을 보내다、친구를 만나다 或 고향에 갔다 오다 说计划。",
            answerKo: "저는 친구를 만나려고 해요.",
            translations: {
              en: {
                title: "Talk about a plan",
                prompt: "Use send an email, meet a friend, or visit one's hometown to say a plan."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "V-(으)려고 하다",
            promptZh: "把“선물을 준비하다”变成打算句。",
            answerKo: "선물을 준비하려고 해요.",
            translations: {
              en: {
                prompt: "Turn “prepare a gift” into an intention sentence."
              }
            }
          }
        ]
      },
      {
        id: "dialogue-grammar-02",
        title: "어떻게 해야 돼요?",
        focus: "V-아/어야 되다",
        page: 147,
        source: "문법 2",
        sceneZh: "询问办理手续时必须做什么。",
        translations: {
          en: {
            scene: "Ask what must be done for a procedure.",
            learningPoints: [
              "Use V-아/어야 되다 for requirements.",
              "해야 돼요 asks what action is necessary.",
              "신청서를 쓰셔야 돼요 is a polite instruction."
            ]
          }
        },
        learningPoints: [
          "V-아/어야 되다 表示必须做的事。",
          "해야 돼요 常用来问手续。",
          "쓰셔야 돼요 是尊敬、礼貌的说明。"
        ],
        lines: [
          {
            speaker: "손님",
            ko: "통장을 만들려고 하는데요. 어떻게 해야 돼요?",
            zh: "我想办账户/存折。应该怎么做？",
            guide: "하려고 하는데요 后面自然接询问手续。",
            translations: {
              en: {
                translation: "I would like to open a bankbook/account. What should I do?",
                guide: "하려고 하는데요 naturally leads into asking about a procedure."
              }
            }
          },
          {
            speaker: "직원",
            ko: "먼저 이 신청서를 쓰셔야 돼요.",
            zh: "您必须先填写这张申请表。",
            guide: "먼저 表示第一步。",
            translations: {
              en: {
                translation: "First, you need to fill out this application form.",
                guide: "먼저 marks the first step."
              }
            }
          },
          {
            speaker: "가",
            ko: "회사에 몇 시까지 가야 돼요?",
            zh: "必须几点前到公司？",
            guide: "몇 시까지 用来问截止时间。",
            translations: {
              en: {
                translation: "By what time do I have to go to work?",
                guide: "몇 시까지 asks for the deadline or latest time."
              }
            }
          },
          {
            speaker: "나",
            ko: "아홉 시까지 가야 돼요.",
            zh: "必须九点前到。",
            guide: "가야 돼요 表示必须去/到达。",
            translations: {
              en: {
                translation: "You have to go by nine o'clock.",
                guide: "가야 돼요 states that going/arriving is required."
              }
            }
          },
          {
            speaker: "나",
            ko: "신용 카드를 만들 때 신분증이 있어야 돼요.",
            zh: "办信用卡时必须有身份证件。",
            guide: "있어야 돼요 表示必要条件。",
            translations: {
              en: {
                translation: "You need an ID card when getting a credit card.",
                guide: "있어야 돼요 states a necessary condition."
              }
            }
          },
          {
            speaker: "나",
            ko: "방이 더러워서 청소를 해야 돼요.",
            zh: "房间脏，所以必须打扫。",
            guide: "해야 돼요 说明不得不做的事。",
            translations: {
              en: {
                translation: "The room is dirty, so I have to clean it.",
                guide: "해야 돼요 states something that must be done."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "필요한 일 말하기",
            promptZh: "用 라민 / 통장을 만들다 说必须做的事。",
            answerKo: "라민은 통장을 만들어야 돼요.",
            translations: {
              en: {
                title: "Say what is necessary",
                prompt: "Use Rahman / open a bankbook to say what must be done."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "V-아/어야 되다",
            promptZh: "用“한국 사람과 이야기를 많이 하다”回答“한국어를 잘하고 싶어요”。",
            answerKo: "한국 사람과 이야기를 많이 해야 돼요.",
            translations: {
              en: {
                prompt: "Answer “I want to be good at Korean” using “talk a lot with Korean people.”"
              }
            }
          }
        ]
      },
      {
        id: "dialogue-speaking-01",
        title: "베트남에 소포를 보내려고 하는데요",
        focus: "말하기와 듣기",
        page: 148,
        source: "말하기와 듣기",
        sceneZh: "在邮局询问包裹内容、邮寄方式和预计到达时间。",
        translations: {
          en: {
            scene: "At the post office, ask about package contents, shipping method, and expected arrival time.",
            learningPoints: [
              "하려고 하는데요 politely states the purpose before asking.",
              "안에 뭐가 들어 있어요? asks about contents.",
              "일반 and 특급 are shipping options."
            ]
          }
        },
        learningPoints: [
          "하려고 하는데요 先说明来意，很适合窗口场景。",
          "안에 뭐가 들어 있어요? 用来问包裹内容。",
          "일반 和 특급 是邮寄方式。"
        ],
        lines: [
          {
            speaker: "후엔",
            ko: "안녕하세요? 베트남에 소포를 보내려고 하는데요.",
            zh: "您好。我想往越南寄包裹。",
            guide: "목적지에는 -에，用 베트남에。",
            translations: {
              en: {
                translation: "Hello. I would like to send a package to Vietnam.",
                guide: "Use -에 for the destination, as in 베트남에."
              }
            }
          },
          {
            speaker: "직원",
            ko: "이 안에 뭐가 들어 있어요?",
            zh: "这里面有什么？",
            guide: "寄包裹时确认 내용물。",
            translations: {
              en: {
                translation: "What is inside this?",
                guide: "This confirms the package contents."
              }
            }
          },
          {
            speaker: "후엔",
            ko: "옷하고 화장품요.",
            zh: "衣服和化妆品。",
            guide: "하고 是口语里自然的“和”。",
            translations: {
              en: {
                translation: "Clothes and cosmetics.",
                guide: "하고 is a natural conversational way to say and."
              }
            }
          },
          {
            speaker: "직원",
            ko: "일반하고 특급이 있는데 어떤 걸로 하실 거예요?",
            zh: "有普通和特快，您要用哪一种？",
            guide: "어떤 걸로 하실 거예요? 用来问选择。",
            translations: {
              en: {
                translation: "There are regular and express options. Which one would you like?",
                guide: "어떤 걸로 하실 거예요? asks for a choice."
              }
            }
          },
          {
            speaker: "후엔",
            ko: "일반으로 할게요. 오늘 보내면 베트남에 언제 도착해요?",
            zh: "我用普通的。今天寄的话，什么时候到越南？",
            guide: "-(으)면 表示条件，“如果今天寄”。",
            translations: {
              en: {
                translation: "I will use regular shipping. If I send it today, when will it arrive in Vietnam?",
                guide: "-(으)면 marks a condition, if I send it today."
              }
            }
          },
          {
            speaker: "직원",
            ko: "보통 4일에서 7일 정도 걸려요. 다음 주말까지는 도착할 거예요.",
            zh: "通常需要大约4到7天。下周末之前会到。",
            guide: "걸려요 用来说明所需时间。",
            translations: {
              en: {
                translation: "It usually takes about four to seven days. It should arrive by next weekend.",
                guide: "걸려요 is used to state the time something takes."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "택배 보내기",
            promptZh: "把 목적지/내용물/방식 换成“우즈베키스탄 / 서류 / 특급”。",
            answerKo: "우즈베키스탄에 서류를 보내려고 하는데요. 특급으로 할게요.",
            translations: {
              en: {
                title: "Send a parcel",
                prompt: "Change destination/contents/method to Uzbekistan / documents / express."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "우체국 표현",
            promptZh: "用“택배를 보내려고 하는데요 / 여기에 올려 놓으세요”做两句对话。",
            answerKo: "가: 택배를 보내려고 하는데요. 나: 여기에 올려 놓으세요.",
            translations: {
              en: {
                prompt: "Make a two-line dialogue with “I would like to send a parcel” and “Please place it here.”"
              }
            }
          }
        ]
      },
      {
        id: "dialogue-reading-01",
        title: "우체국 업무 시간",
        focus: "읽기와 쓰기",
        page: 149,
        source: "읽기와 쓰기",
        sceneZh: "阅读邮局的邮政业务、金融业务和 ATM 使用时间。",
        translations: {
          en: {
            scene: "Read about postal services, financial services, and ATM hours at a post office.",
            learningPoints: [
              "Separate postal service hours from financial service hours.",
              "우체국은 주말에 문을 닫습니다 explains the weekend limitation.",
              "ATM can be used every day from 7 a.m. to 11:30 p.m."
            ]
          }
        },
        learningPoints: [
          "先分清 우편 업무 시간 和 금융 업무 시간。",
          "우체국은 주말에 문을 닫습니다 是周末限制。",
          "ATM은 매일 오전 7시부터 오후 11시 30분까지 이용할 수 있습니다。"
        ],
        lines: [
          {
            speaker: "글",
            ko: "우체국에서는 편지나 소포 등 우편 서비스, 예금, 송금 등 은행 업무를 함께 해 줍니다.",
            zh: "邮局提供信件、包裹等邮政服务，也办理存款、汇款等银行业务。",
            guide: "등 表示列举，“等等”。",
            translations: {
              en: {
                translation: "The post office provides postal services such as letters and packages, and banking services such as deposits and money transfers.",
                guide: "등 means such as / and so on."
              }
            }
          },
          {
            speaker: "글",
            ko: "그런데 우체국은 우편 업무 시간과 은행 업무 시간이 다릅니다.",
            zh: "但是邮局的邮政业务时间和银行业务时间不同。",
            guide: "다릅니다 表示两种时间不一样。",
            translations: {
              en: {
                translation: "However, the postal service hours and banking service hours at the post office are different.",
                guide: "다릅니다 says the two sets of hours are different."
              }
            }
          },
          {
            speaker: "글",
            ko: "우편 업무 시간은 9시부터 6시까지입니다. 그리고 금융 업무 시간은 9시부터 4시 30분까지입니다.",
            zh: "邮政业务时间是9点到6点。金融业务时间是9点到4点30分。",
            guide: "부터/까지 用来表示时间范围。",
            translations: {
              en: {
                translation: "Postal service hours are from 9 to 6. Financial service hours are from 9 to 4:30.",
                guide: "부터/까지 marks a time range."
              }
            }
          },
          {
            speaker: "글",
            ko: "우체국에서 은행 서비스를 이용하고 싶으면 4시 30분까지 가야 됩니다.",
            zh: "如果想在邮局使用银行服务，必须4点30分前去。",
            guide: "이용하고 싶으면 后面接必要条件。",
            translations: {
              en: {
                translation: "If you want to use banking services at the post office, you must go by 4:30.",
                guide: "이용하고 싶으면 leads into the necessary condition."
              }
            }
          },
          {
            speaker: "글",
            ko: "주말에 입출금을 하려고 합니까? 우체국은 주말에 문을 닫습니다. 그러니까 우체국 ATM을 이용해 보세요.",
            zh: "周末想存取款吗？邮局周末关门。所以请试着使用邮局 ATM。",
            guide: "그러니까 后面给建议。",
            translations: {
              en: {
                translation: "Do you want to deposit or withdraw money on the weekend? The post office is closed on weekends. So try using a post office ATM.",
                guide: "그러니까 introduces advice or a conclusion."
              }
            }
          },
          {
            speaker: "글",
            ko: "매일 오전 7시부터 오후 11시 30분까지 이용할 수 있습니다.",
            zh: "每天上午7点到晚上11点30分都可以使用。",
            guide: "이용할 수 있습니다 表示可以使用。",
            translations: {
              en: {
                translation: "You can use it every day from 7 a.m. to 11:30 p.m.",
                guide: "이용할 수 있습니다 means can use."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "업무 시간 확인",
            promptZh: "回答“주말에 돈을 찾으려고 해요. 어떻게 해야 돼요?”",
            answerKo: "우체국은 주말에 문을 닫으니까 우체국 ATM을 이용해야 돼요.",
            translations: {
              en: {
                title: "Check service hours",
                prompt: "Answer “I want to withdraw money on the weekend. What should I do?”"
              }
            }
          }
        ],
        drills: [
          {
            pattern: "읽기 확인",
            promptZh: "우편 업무 시간과 금융 업무 시간은 어떻게 달라요?",
            answerKo: "우편 업무 시간은 9시부터 6시까지이고 금융 업무 시간은 9시부터 4시 30분까지예요.",
            translations: {
              en: {
                prompt: "How are postal service hours and financial service hours different?"
              }
            }
          }
        ]
      },
      {
        id: "dialogue-pronunciation-01",
        title: "택배 / 우편 번호 / 옷하고",
        focus: "발음",
        page: 151,
        source: "발음/배운 어휘 확인",
        sceneZh: "练习本课发音重点和邮局句子。",
        translations: {
          en: {
            scene: "Practice key pronunciations and post office sentences.",
            learningPoints: [
              "택배 is pronounced [택빼].",
              "우편 번호 is pronounced [우편 버노].",
              "옷하고 is pronounced [오타고]."
            ]
          }
        },
        learningPoints: [
          "택배 的教材发音是 [택빼]。",
          "우편 번호 的教材发音是 [우편 버노]。",
          "옷하고 的教材发音是 [오타고]。"
        ],
        lines: [
          {
            speaker: "나",
            ko: "친구한테 택배를 보내요.",
            zh: "给朋友寄快递。",
            guide: "택배 发音 [택빼]。",
            translations: {
              en: {
                translation: "I send a parcel to a friend.",
                guide: "택배 is pronounced [택빼]."
              }
            }
          },
          {
            speaker: "가",
            ko: "우편 번호가 뭐예요?",
            zh: "邮政编码是多少？",
            guide: "우편 번호 发音 [우편 버노]。",
            translations: {
              en: {
                translation: "What is the postal code?",
                guide: "우편 번호 is pronounced [우편 버노]."
              }
            }
          },
          {
            speaker: "가",
            ko: "이엠에스(EMS)를 보내고 싶은데요.",
            zh: "我想寄 EMS。",
            guide: "보내고 싶은데요 表示“想寄……”。",
            translations: {
              en: {
                translation: "I would like to send this by EMS.",
                guide: "보내고 싶은데요 means I would like to send."
              }
            }
          },
          {
            speaker: "나",
            ko: "안에 뭐가 들어 있어요?",
            zh: "里面有什么？",
            guide: "问包裹内容。",
            translations: {
              en: {
                translation: "What is inside?",
                guide: "This asks about the contents of the package."
              }
            }
          },
          {
            speaker: "가",
            ko: "옷하고 화장품요.",
            zh: "衣服和化妆品。",
            guide: "옷하고 发音 [오타고]。",
            translations: {
              en: {
                translation: "Clothes and cosmetics.",
                guide: "옷하고 is pronounced [오타고]."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "발음 따라 읽기",
            promptZh: "跟读 택배[택빼], 우편 번호[우편 버노], 옷하고[오타고]。",
            answerKo: "택배[택빼], 우편 번호[우편 버노], 옷하고[오타고]",
            translations: {
              en: {
                title: "Pronunciation practice",
                prompt: "Read 택배[택빼], 우편 번호[우편 버노], 옷하고[오타고]."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "발음",
            promptZh: "读出“친구한테 택배를 보내요.”的自然发音。",
            answerKo: "친구한테 택배[택빼]를 보내요.",
            translations: {
              en: {
                prompt: "Read the natural pronunciation of “친구한테 택배를 보내요.”"
              }
            }
          }
        ]
      }
    ],
    culture: {
      titleKo: "한국의 주소",
      titleZh: "韩国的地址",
      page: 150,
      summaryZh: "这篇文化文章介绍韩国的道路名地址。韩国地址通常从城市、区、道路名、建筑号码等较大的单位写到较小的单位。",
      translations: {
        en: {
          title: "Korean Addresses",
          summary: "This culture text introduces Korea's road-name address system. Korean addresses are usually written from larger units such as city and district to smaller units such as road name and building number."
        }
      },
      paragraphs: [
        {
          ko: "한국은 도로명 주소를 사용합니다.",
          zh: "韩国使用道路名地址。",
          guide: "第一句直接说明韩国现在的地址系统。",
          translations: {
            en: {
              translation: "Korea uses road-name addresses.",
              guide: "The first sentence directly states Korea's current address system."
            }
          }
        },
        {
          ko: "도로명 주소는 도로 이름과 건물 번호로 표기합니다.",
          zh: "道路名地址用道路名称和建筑号码来标记。",
          guide: "도로 이름 和 건물 번호 是道路名地址的核心。",
          translations: {
            en: {
              translation: "A road-name address is written with the road name and building number.",
              guide: "도로 이름 and 건물 번호 are the core parts of a road-name address."
            }
          }
        },
        {
          ko: "한국의 주소를 쓸 때는 ‘도시 이름, 도로명과 건물 번호’처럼 큰 장소에서 작은 장소의 순서로 씁니다.",
          zh: "写韩国地址时，像“城市名称、道路名和建筑号码”那样，按从大地点到小地点的顺序写。",
          guide: "큰 장소에서 작은 장소의 순서 是理解韩国地址顺序的重点。",
          translations: {
            en: {
              translation: "When writing a Korean address, write it in order from larger place to smaller place, such as city name, road name, and building number.",
              guide: "큰 장소에서 작은 장소의 순서 is the key phrase for Korean address order."
            }
          }
        },
        {
          ko: "예를 들어 서울출입국ㆍ외국인청의 주소는 ‘서울특별시 양천구 목동동로 151 서울출입국ㆍ외국인청’입니다.",
          zh: "例如，首尔出入境外国人厅的地址是“首尔特别市阳川区木洞东路151 首尔出入境外国人厅”。",
          guide: "示例地址按城市、区、道路名和建筑号码、机构名的顺序写。",
          translations: {
            en: {
              translation: "For example, the address of the Seoul Immigration Office is “Seoul, Yangcheon-gu, Mokdongdong-ro 151, Seoul Immigration Office.”",
              guide: "The example address follows the order of city, district, road name and building number, then institution name."
            }
          }
        }
      ],
      keyTerms: [
        {
          ko: "도로명 주소",
          zh: "道路名地址",
          translations: {
            en: {
              meaning: "road-name address"
            }
          }
        },
        {
          ko: "도로 이름",
          zh: "道路名称",
          translations: {
            en: {
              meaning: "road name"
            }
          }
        },
        {
          ko: "건물 번호",
          zh: "建筑号码",
          translations: {
            en: {
              meaning: "building number"
            }
          }
        },
        {
          ko: "큰 장소에서 작은 장소",
          zh: "从大地点到小地点",
          translations: {
            en: {
              meaning: "from larger place to smaller place"
            }
          }
        }
      ],
      questions: [
        {
          q: "한국의 도로명 주소는 무엇으로 표기해요?",
          zh: "韩国的道路名地址用什么来标记？",
          a: "도로 이름과 건물 번호로 표기해요.",
          translations: {
            en: {
              translation: "What is a Korean road-name address written with?",
              answer: "It is written with the road name and building number."
            }
          }
        },
        {
          q: "한국의 주소를 쓰는 순서는 무엇이에요?",
          zh: "韩国地址的书写顺序是什么？",
          a: "큰 장소에서 작은 장소의 순서로 써요.",
          translations: {
            en: {
              translation: "What is the order for writing a Korean address?",
              answer: "It is written from larger place to smaller place."
            }
          }
        },
        {
          q: "여러분 고향에서는 주소를 어떻게 써요?",
          zh: "在你的故乡，地址怎么写？",
          a: "우리 고향에서는 작은 장소에서 큰 장소의 순서로 써요.",
          translations: {
            en: {
              translation: "How are addresses written in your hometown?",
              answer: "In my hometown, addresses are written from smaller place to larger place."
            }
          }
        }
      ]
    },
    practice: [
      {
        type: "translation",
        title: "中文转韩文",
        prompt: "我想往越南寄包裹。",
        answerKo: "베트남에 소포를 보내려고 해요.",
        translations: {
          en: {
            title: "Translate to Korean",
            prompt: "I plan to send a package to Vietnam."
          }
        }
      },
      {
        type: "pattern",
        title: "V-(으)려고 하다",
        prompt: "用“주말에 한국어 수업을 듣다”造打算句。",
        answerKo: "주말에 한국어 수업을 들으려고 해요.",
        translations: {
          en: {
            title: "V-(으)려고 하다",
            prompt: "Make an intention sentence with “take Korean class on the weekend.”"
          }
        }
      },
      {
        type: "pattern",
        title: "V-아/어야 되다",
        prompt: "用“신청서를 쓰다”回答银行手续。",
        answerKo: "먼저 이 신청서를 쓰셔야 돼요.",
        translations: {
          en: {
            title: "V-아/어야 되다",
            prompt: "Use “fill out an application form” to answer a banking procedure question."
          }
        }
      },
      {
        type: "reading",
        title: "阅读确认",
        prompt: "주말에 돈을 찾으려고 해요. 어떻게 해야 돼요?",
        answerKo: "우체국은 주말에 문을 닫으니까 우체국 ATM을 이용해야 돼요.",
        translations: {
          en: {
            title: "Reading check",
            prompt: "You want to withdraw money on the weekend. What should you do?"
          }
        }
      },
      {
        type: "culture",
        title: "文化理解",
        prompt: "한국의 도로명 주소는 무엇으로 표기해요?",
        answerKo: "도로 이름과 건물 번호로 표기해요.",
        translations: {
          en: {
            title: "Culture check",
            prompt: "What is a Korean road-name address written with?"
          }
        }
      },
      {
        type: "speaking",
        title: "우체국 대화 만들기",
        prompt: "목적지, 내용물, 방식, 도착 시간을 넣어서 우체국 대화를 만들어 보세요.",
        answerKo: "베트남에 소포를 보내려고 하는데요. 안에 옷하고 화장품이 들어 있어요. 일반으로 할게요. 보통 4일에서 7일 정도 걸려요.",
        translations: {
          en: {
            title: "Make a post office dialogue",
            prompt: "Make a post office dialogue using destination, contents, shipping method, and arrival time."
          }
        }
      }
    ]
  };

  lesson.stats = {
    vocabulary: lesson.vocabulary.length,
    dialogues: lesson.dialogues.length,
    culture: lesson.culture ? 1 : 0,
    practice: lesson.practice.length
  };

  window.lessonGuideL2LessonChunks ||= {};
  window.lessonGuideL2LessonChunks["l2-13"] = lesson;
})();
