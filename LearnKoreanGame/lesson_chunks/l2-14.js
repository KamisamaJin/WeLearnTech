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
    id: "l2-14",
    number: 14,
    titleKo: "비자 연장 신청을 하려면 어떻게 해야 돼요?",
    titleZh: "想申请签证延期该怎么做",
    pages: "152-161",
    status: "refined",
    progress: {
      vocabulary: "refined-p152-p161",
      dialogue: "refined-p155-p161",
      culture: "reviewed-p160",
      practice: "refined-p155-p161"
    },
    vocabularySources: [
      { page: 152, label: "단원 제목", note: "课题句、公共机构和出入境外国人厅主题" },
      { page: 154, label: "어휘와 문법 1", note: "区厅、居民中心、保健所的业务表达" },
      { page: 155, label: "문법 1", note: "V-아/어도 되다 许可表达和练习" },
      { page: 156, label: "어휘와 문법 2", note: "出入境外国人厅业务和 통합신청서 词汇" },
      { page: 157, label: "문법 2", note: "V-(으)려면 条件表达和练习" },
      { page: 158, label: "말하기와 듣기", note: "签证延期申请窗口对话和听力问题" },
      { page: 159, label: "읽기와 쓰기", note: "통합신청서 阅读和填写练习" },
      { page: 160, label: "문화와 정보", note: "出入境外国人厅/事务所文化原文与问题" },
      { page: 161, label: "발음/배운 어휘 확인", note: "发音练习和本课词汇复习" }
    ],
    goals: [
      "能够说出区厅、行政福利中心、居民中心、保健所和出入境外国人厅能办理的业务。",
      "能够用 V-아/어도 되다 询问或说明“可以做某事”。",
      "能够用 V-(으)려면 表达“如果想做某事，需要……”。",
      "能够在出入境外国人厅场景中询问签证延期、外国人登录证再发放和手续费。",
      "能够读懂 통합신청서 的主要项目，并理解出入境外国人厅的预约规则。"
    ],
    grammar: [
      {
        pattern: "V-아/어도 되다",
        zh: "可以……；做……也可以",
        guide: "表示某个行为或状态被允许。否定回答常用 V-(으)면 안 되다，意思是“不可以……”。",
        examples: [
          { ko: "출생 신고를 남편이 해도 돼요?", zh: "出生申报丈夫可以做吗？" },
          { ko: "인터넷으로 주소 변경 신고를 해도 돼요.", zh: "也可以在网上申报地址变更。" },
          { ko: "이 종이들을 버려도 돼요?", zh: "这些纸可以扔掉吗？" }
        ],
        translations: {
          en: {
            meaning: "may ...; be allowed to ...",
            guide: "Use V-아/어도 되다 to ask for or give permission. For a negative answer, use V-(으)면 안 되다."
          }
        }
      },
      {
        pattern: "V-(으)려면",
        zh: "如果想……；要想……",
        guide: "表示为了实现某件事需要满足的条件。动词有收音时接 -으려면，没有收音时接 -려면。",
        examples: [
          { ko: "외국인 등록증을 재발급 받으려면 사진과 여권이 필요해요.", zh: "如果想补办外国人登录证，需要照片和护照。" },
          { ko: "비자 연장 신청을 하려면 방문 예약을 해야 돼요.", zh: "如果想申请签证延期，必须预约访问。" },
          { ko: "감기에 걸리지 않으려면 손을 자주 씻으세요.", zh: "如果不想感冒，请经常洗手。" }
        ],
        translations: {
          en: {
            meaning: "if you want to ...; in order to ...",
            guide: "Use V-(으)려면 to state a condition needed to achieve something. Use -으려면 after a final consonant and -려면 after a vowel."
          }
        }
      }
    ],
    vocabulary: [
      vocab("비자", "签证", "名词", 152, "단원 제목", "비자 연장 신청을 하려고 해요.", "我想申请签证延期。", "visa", "I plan to apply for a visa extension.", [["collocation", "비자 연장"], ["collocation", "비자 변경"]]),
      vocab("연장", "延期；延长", "名词", 152, "단원 제목", "체류 기간을 연장해요.", "延长居留期间。", "extension", "I extend the period of stay.", [["collocation", "기간 연장"], ["collocation", "비자 연장"]]),
      vocab("신청하다", "申请", "动词", 152, "단원 제목", "외국인 등록증을 신청해요.", "申请外国人登录证。", "to apply for", "I apply for an alien registration card.", [["collocation", "신청을 하다"], ["collocation", "신청서를 쓰다"]]),
      vocab("공공 기관", "公共机构", "名词短语", 152, "단원 제목", "여러분은 어떤 공공 기관을 이용해 봤어요?", "大家使用过哪些公共机构？", "public office; public institution", "What public offices have you used?", [["collocation", "공공 기관을 이용하다"], ["pitfall", "기관은单位/机构，不是建筑本身。", "기관 means an organization or office, not just the building."]]),
      vocab("기관 업무", "机构业务", "名词短语", 152, "단원 제목", "기관 업무를 알아봐요.", "了解机构业务。", "office services", "Learn about office services.", [["collocation", "업무를 보다"], ["collocation", "업무를 처리하다"]]),
      vocab("통합 신청서", "综合申请表", "名词短语", 152, "단원 제목", "통합 신청서를 써 보세요.", "请试着填写综合申请表。", "integrated application form", "Try filling out the integrated application form.", [["collocation", "통합 신청서를 쓰다"], ["pitfall", "출입국 업무 여러 항목을 한 장에서 선택하는表格。", "This form lets you select different immigration services on one sheet."]]),
      vocab("출입국ㆍ외국인청", "出入境外国人厅", "名词", 152, "단원 제목", "출입국ㆍ외국인청에 가요.", "去出入境外国人厅。", "Immigration Office", "I go to the Immigration Office.", [["collocation", "출입국ㆍ외국인청에 가다"], ["pitfall", "외국인청 可指办理外国人居留业务的机构。", "외국인청 refers to an office handling foreigners' stay-related matters."]]),

      vocab("구청", "区厅；区政府", "名词", 154, "어휘와 문법 1", "구청에서 증명서를 받아요.", "在区厅领取证明书。", "district office", "I get a certificate at the district office.", [["collocation", "구청에 가다"], ["collocation", "구청에서 받다"]]),
      vocab("행정 복지 센터", "行政福利中心", "名词短语", 154, "어휘와 문법 1", "행정 복지 센터에서 주소 변경 신고를 해요.", "在行政福利中心申报地址变更。", "administrative welfare center", "I report an address change at an administrative welfare center.", [["collocation", "행정 복지 센터"], ["pitfall", "주민 센터와 비슷하게 동네行政业务를 처리해요。", "It handles local administrative services, similar to a community service center."]]),
      vocab("주민 센터", "居民中心", "名词短语", 154, "어휘와 문법 1", "주민 센터에 가서 신고했어요.", "去了居民中心申报。", "community service center", "I went to the community service center and reported it.", [["collocation", "주민 센터에 가다"], ["collocation", "주민 센터에서 신고하다"]]),
      vocab("출생 신고를 하다", "申报出生", "动词短语", 154, "어휘와 문법 1", "아이의 출생 신고를 해요.", "申报孩子出生。", "to report a birth", "I report a child's birth.", [["collocation", "출생 신고"], ["form", "신고하다 -> 신고를 하다", "신고하다 can be expressed as 신고를 하다."]]),
      vocab("주소 변경 신고를 하다", "申报地址变更", "动词短语", 154, "어휘와 문법 1", "주소 변경 신고를 해야 돼요.", "必须申报地址变更。", "to report an address change", "I must report an address change.", [["collocation", "주소 변경 신고"], ["pitfall", "搬家后常需要做的行政手续。", "This is a common administrative step after moving."]]),
      vocab("증명서를 받다", "领取证明书", "动词短语", 154, "어휘와 문법 1", "구청에서 증명서를 받았어요.", "在区厅领取了证明书。", "to receive a certificate", "I received a certificate at the district office.", [["collocation", "증명서를 발급받다"], ["collocation", "증명서를 받다"]]),
      vocab("혼인 신고를 하다", "申报结婚；办理婚姻登记", "动词短语", 154, "어휘와 문법 1", "구청에서 혼인 신고를 해요.", "在区厅办理婚姻登记。", "to register a marriage", "I register a marriage at the district office.", [["collocation", "혼인 신고"], ["pitfall", "결혼식이 아니라 법적 신고를 말해요。", "This means legal marriage registration, not the wedding ceremony."]]),
      vocab("보건소", "保健所；公共卫生中心", "名词", 154, "어휘와 문법 1", "저는 보건소에 가서 건강 검진을 받았어요.", "我去保健所做了健康检查。", "public health center", "I went to the public health center and had a health checkup.", [["collocation", "보건소에 가다"], ["collocation", "보건소에서 받다"]]),
      vocab("건강 검진을 받다", "接受健康检查；体检", "动词短语", 154, "어휘와 문법 1", "보건소에서 건강 검진을 받았어요.", "在保健所做了体检。", "to have a health checkup", "I had a health checkup at the public health center.", [["collocation", "건강 검진"], ["collocation", "검진을 받다"]]),
      vocab("예방 주사를 맞다", "打预防针", "动词短语", 154, "어휘와 문법 1", "보건소에서 예방 주사를 맞아요.", "在保健所打预防针。", "to get a vaccination", "I get a vaccination at the public health center.", [["collocation", "주사를 맞다"], ["pitfall", "주사는 먹다 不搭配，用 맞다。", "Use 맞다 with injections, not 먹다."]]),
      vocab("건강 진단서를 받다", "领取健康诊断书", "动词短语", 154, "어휘와 문법 1", "건강 진단서를 받으러 가요.", "去领取健康诊断书。", "to get a health certificate", "I go to get a health certificate.", [["collocation", "건강 진단서"], ["collocation", "진단서를 받다"]]),
      vocab("시청", "市厅；市政府", "名词", 154, "어휘와 문법 1", "시청에 가려면 어떻게 해야 돼요?", "如果想去市厅，该怎么做？", "city hall", "What should I do to go to city hall?", [["collocation", "시청에 가다"], ["collocation", "시청에서 일하다"]]),
      vocab("경찰서", "警察署", "名词", 154, "어휘와 문법 1", "경찰서에 가 본 적이 있어요.", "去过警察署。", "police station", "I have been to a police station.", [["collocation", "경찰서에 가다"], ["collocation", "경찰서에서 신고하다"]]),

      vocab("해도 되다", "可以做", "语法表达", 155, "문법 1", "남편이 해도 돼요.", "丈夫做也可以。", "may do; be allowed to do", "Your husband may do it.", [["form", "하다 + -아/어도 되다 -> 해도 되다", "하다 + -아/어도 되다 -> 해도 되다"], ["pitfall", "问许可时语尾常用 -아/어도 돼요?", "Permission questions often end with -아/어도 돼요?"]]),
      vocab("입어 보다", "试穿", "动词短语", 155, "문법 1", "이 옷 입어 봐도 돼요?", "这件衣服可以试穿吗？", "to try on", "May I try on this clothing?", [["collocation", "옷을 입어 보다"], ["form", "입다 + -어 보다 -> 입어 보다", "입다 + -어 보다 -> 입어 보다"]]),
      vocab("인터넷으로", "通过网络；在网上", "副词", 155, "문법 1", "인터넷으로 주소 변경 신고를 해도 돼요.", "也可以在网上申报地址变更。", "online; through the internet", "You may report an address change online.", [["collocation", "인터넷으로 하다"], ["pitfall", "수단/방법에는 -으로。", "Use -으로 for a method or means."]]),
      vocab("버리다", "扔掉", "动词", 155, "문법 1", "이 종이들을 버려도 돼요?", "这些纸可以扔掉吗？", "to throw away", "May I throw these papers away?", [["form", "버리다 + -어도 되다 -> 버려도 되다", "버리다 + -어도 되다 -> 버려도 되다"], ["collocation", "종이를 버리다"]]),
      vocab("들어가다", "进去", "动词", 155, "문법 1", "안에 들어가도 돼요?", "可以进去吗？", "to go in", "May I go inside?", [["form", "들어가다 + -아도 되다 -> 들어가도 되다", "들어가다 + -아도 되다 -> 들어가도 되다"], ["collocation", "안에 들어가다"]]),
      vocab("들어오다", "进来", "动词", 155, "문법 1", "네, 들어와도 돼요.", "可以，请进来。", "to come in", "Yes, you may come in.", [["form", "들어오다 + -아도 되다 -> 들어와도 되다", "들어오다 + -아도 되다 -> 들어와도 되다"], ["pitfall", "들어가다 是进去，들어오다 是进来。", "들어가다 is go in; 들어오다 is come in."]]),
      vocab("사진을 찍다", "拍照", "动词短语", 155, "문법 1", "여기에서 사진을 찍어도 돼요?", "可以在这里拍照吗？", "to take a photo", "May I take a photo here?", [["collocation", "사진을 찍다"], ["form", "찍다 + -어도 되다 -> 찍어도 되다", "찍다 + -어도 되다 -> 찍어도 되다"]]),
      vocab("퇴근하다", "下班", "动词", 155, "문법 1", "일찍 퇴근해야 돼요.", "必须早点下班。", "to leave work", "I have to leave work early.", [["collocation", "일찍 퇴근하다"], ["pitfall", "출근하다 是上班，퇴근하다 是下班。", "출근하다 means go to work; 퇴근하다 means leave work."]]),
      vocab("우산", "雨伞", "名词", 155, "문법 1", "비가 오는데 우산이 없어요.", "下雨了，可是没有伞。", "umbrella", "It is raining, but I do not have an umbrella.", [["collocation", "우산이 없다"], ["collocation", "우산을 쓰다"]]),

      vocab("외국인 등록증", "外国人登录证", "名词短语", 156, "어휘와 문법 2", "외국인 등록증을 다시 받고 싶어요.", "想重新领取外国人登录证。", "alien registration card", "I want to receive my alien registration card again.", [["collocation", "외국인 등록증을 신청하다"], ["pitfall", "教材发音是 [외구긴 등록쯩]。", "The textbook pronunciation is [외구긴 등록쯩]."]]),
      vocab("영주권", "永住权；永久居留权", "名词", 156, "어휘와 문법 2", "영주권을 신청해요.", "申请永住权。", "permanent residency", "I apply for permanent residency.", [["collocation", "영주권을 신청하다"], ["pitfall", "권은资格/权利的意思。", "권 means a right or status."]]),
      vocab("국적 취득/귀화", "取得国籍/归化", "名词短语", 156, "어휘와 문법 2", "국적 취득을 신청해요.", "申请取得国籍。", "acquiring nationality / naturalization", "I apply for naturalization.", [["collocation", "국적을 취득하다"], ["pitfall", "귀화는 다른 나라 국적을取得하는 절차。", "귀화 is the process of naturalization."]]),
      vocab("통합신청서(신고서)", "综合申请表（申报表）", "名词短语", 156, "어휘와 문법 2", "통합신청서에 표시해요.", "在综合申请表上标记。", "integrated application/report form", "Mark it on the integrated application form.", [["collocation", "통합신청서를 쓰다"], ["collocation", "업무를 선택하다"]]),
      vocab("업무 선택", "业务选择", "名词短语", 156, "어휘와 문법 2", "업무 선택에서 체류 기간 연장을 표시해요.", "在业务选择里标记居留期间延长。", "service selection", "Select extension of period of stay under service selection.", [["collocation", "업무를 선택하다"], ["pitfall", "表格里的 선택 是勾选项目。", "On a form, 선택 means selecting or checking an item."]]),
      vocab("외국인 등록", "外国人登记", "名词短语", 156, "어휘와 문법 2", "외국인 등록을 신청해요.", "申请外国人登记。", "alien registration", "I apply for alien registration.", [["collocation", "외국인 등록을 하다"], ["collocation", "외국인 등록증"]]),
      vocab("등록증 재발급", "登录证再发放；补办证件", "名词短语", 156, "어휘와 문법 2", "등록증 재발급을 신청해요.", "申请补办登录证。", "card reissuance", "I apply for card reissuance.", [["collocation", "재발급 받다"], ["pitfall", "재- 表示再次，발급은证件发放。", "재- means again; 발급 means issuance."]]),
      vocab("체류 기간 연장", "居留期间延长", "名词短语", 156, "어휘와 문법 2", "체류 기간 연장을 신청해요.", "申请延长居留期间。", "extension of period of stay", "I apply for extension of stay.", [["collocation", "체류 기간을 연장하다"], ["pitfall", "체류는某地停留/居留。", "체류 means staying or residing in a place."]]),
      vocab("체류 자격 변경", "居留资格变更", "名词短语", 156, "어휘와 문법 2", "체류 자격을 바꾸고 싶어요.", "想更改居留资格。", "change of status of stay", "I want to change my status of stay.", [["collocation", "체류 자격을 변경하다"], ["pitfall", "자격은身份/资格。", "자격 means status or qualification."]]),
      vocab("체류 자격 부여", "赋予居留资格", "名词短语", 156, "어휘와 문법 2", "체류 자격 부여 항목이 있어요.", "有赋予居留资格项目。", "granting status of stay", "There is an item for granting status of stay.", [["collocation", "자격을 부여하다"], ["pitfall", "부여하다 是给予资格/权限。", "부여하다 means to grant a status or right."]]),
      vocab("등록사항 변경신고", "登记事项变更申报", "名词短语", 156, "어휘와 문법 2", "등록사항 변경신고를 해야 돼요.", "必须申报登记事项变更。", "report of changes to registered information", "I must report a change to registered information.", [["collocation", "변경신고를 하다"], ["collocation", "등록사항"]]),
      vocab("체류 자격 외 활동", "居留资格外活动", "名词短语", 156, "어휘와 문법 2", "체류 자격 외 활동을 신청해요.", "申请居留资格外活动。", "activity outside status of stay", "I apply for an activity outside my status of stay.", [["collocation", "자격 외 활동"], ["pitfall", "외는“之外”。", "외 means outside or other than."]]),
      vocab("근무처 변경", "工作单位变更", "名词短语", 156, "어휘와 문법 2", "근무처 변경을 신청해요.", "申请工作单位变更。", "change of workplace", "I apply for a change of workplace.", [["collocation", "근무처를 변경하다"], ["collocation", "예정 근무처"]]),
      vocab("재입국", "再入境", "名词", 156, "어휘와 문법 2", "재입국 신청 항목이 있어요.", "有再入境申请项目。", "re-entry", "There is an item for re-entry application.", [["collocation", "재입국 허가"], ["pitfall", "재- 表示再次。", "재- means again."]]),
      vocab("체류지 변경", "居住地变更", "名词短语", 156, "어휘와 문법 2", "체류지 변경을 신고해요.", "申报居住地变更。", "change of residence", "I report a change of residence.", [["collocation", "체류지를 변경하다"], ["pitfall", "체류지 是居住/停留地址。", "체류지 means place of residence or stay."]]),
      vocab("다시 받다", "重新领取", "动词短语", 156, "어휘와 문법 2", "외국인 등록증을 다시 받고 싶어요.", "想重新领取外国人登录证。", "to receive again", "I want to receive it again.", [["collocation", "등록증을 다시 받다"], ["collocation", "재발급 받다"]]),
      vocab("길게 하다", "使……变长；延长", "动词短语", 156, "어휘와 문법 2", "체류 기간을 길게 하고 싶어요.", "想把居留期间延长。", "to make longer", "I want to make the period of stay longer.", [["collocation", "기간을 길게 하다"], ["pitfall", "行政表达里常换成 연장하다。", "In administrative language, this is often expressed as 연장하다."]]),
      vocab("바꾸다", "更换；改变", "动词", 156, "어휘와 문법 2", "체류 자격을 바꾸고 싶어요.", "想改变居留资格。", "to change", "I want to change my status of stay.", [["collocation", "자격을 바꾸다"], ["collocation", "변경하다"]]),

      vocab("받으려면", "如果想领取/获得", "语法表达", 157, "문법 2", "재발급 받으려면 사진과 여권이 필요해요.", "如果想补办，需要照片和护照。", "if you want to receive", "If you want it reissued, you need a photo and passport.", [["form", "받다 + -으려면 -> 받으려면", "받다 + -으려면 -> 받으려면"], ["collocation", "재발급 받으려면"]]),
      vocab("필요하다", "需要；必要", "形容词", 157, "문법 2", "사진과 여권이 필요해요.", "需要照片和护照。", "to be needed; necessary", "A photo and passport are needed.", [["collocation", "N이/가 필요하다"], ["pitfall", "필요해요 前面常用主格 이/가。", "The needed item often takes 이/가 before 필요해요."]]),
      vocab("가려면", "如果想去", "语法表达", 157, "문법 2", "시청에 가려면 어떻게 해야 돼요?", "如果想去市厅，该怎么做？", "if you want to go", "What should I do if I want to go to city hall?", [["form", "가다 + -려면 -> 가려면", "가다 + -려면 -> 가려면"], ["collocation", "어디에 가려면"]]),
      vocab("하려면", "如果想做", "语法表达", 157, "문법 2", "비자 연장 신청을 하려면 방문 예약을 해야 돼요.", "如果想申请签证延期，必须预约访问。", "if you want to do", "If you want to apply for a visa extension, you need a reservation.", [["form", "하다 + -려면 -> 하려면", "하다 + -려면 -> 하려면"], ["collocation", "신청을 하려면"]]),
      vocab("걸리지 않으려면", "如果不想患上/染上", "语法表达", 157, "문법 2", "감기에 걸리지 않으려면 손을 자주 씻으세요.", "如果不想感冒，请经常洗手。", "if you do not want to catch", "If you do not want to catch a cold, wash your hands often.", [["form", "걸리지 않다 + -으려면 -> 걸리지 않으려면", "걸리지 않다 + -으려면 -> 걸리지 않으려면"], ["collocation", "감기에 걸리다"]]),
      vocab("손을 씻다", "洗手", "动词短语", 157, "문법 2", "손을 자주 씻으세요.", "请经常洗手。", "to wash hands", "Wash your hands often.", [["collocation", "손을 씻다"], ["form", "씻다 + -으세요 -> 씻으세요", "씻다 + -으세요 -> 씻으세요"]]),
      vocab("건강을 지키다", "保持健康；守护健康", "动词短语", 157, "문법 2", "건강을 지키려면 운동을 자주 해야 돼요.", "如果想保持健康，必须经常运动。", "to stay healthy; protect health", "To stay healthy, you should exercise often.", [["collocation", "건강을 지키다"], ["collocation", "운동을 자주 하다"]]),
      vocab("부자가 되다", "成为富人；变富", "动词短语", 157, "문법 2", "부자가 되려면 돈을 아껴 써야 돼요.", "如果想变富，必须节约用钱。", "to become rich", "To become rich, you should save money.", [["collocation", "부자가 되다"], ["collocation", "돈을 아껴 쓰다"]]),
      vocab("방문 예약", "访问预约", "名词短语", 157, "문법 2", "방문 예약을 해야 돼요.", "必须预约访问。", "visit reservation", "You need to make a visit reservation.", [["collocation", "방문 예약을 하다"], ["pitfall", "출입국 업무는 사전 예약이 필요한 경우가 많아요。", "Immigration services often require advance reservations."]]),

      vocab("어서 오세요", "欢迎光临；请进", "句型表达", 158, "말하기와 듣기", "어서 오세요. 어떻게 오셨어요?", "欢迎，请问您来办什么？", "welcome; come in", "Welcome. How can I help you?", [["collocation", "어서 오세요"], ["pitfall", "窗口/店铺接待时常用。", "Common when greeting visitors at a counter or shop."]]),
      vocab("어떻게 오셨어요?", "您来办什么？", "句型表达", 158, "말하기와 듣기", "어서 오세요. 어떻게 오셨어요?", "欢迎，请问您来办什么？", "How can I help you?", "Welcome. How can I help you?", [["collocation", "어떻게 오셨어요?"], ["pitfall", "服务窗口里不是问交通方式，而是问来意。", "At a service counter, this asks your purpose, not how you traveled."]]),
      vocab("가져오다", "带来", "动词", 158, "말하기와 듣기", "사진과 신분증은 가져오셨어요?", "照片和身份证件带来了吗？", "to bring", "Did you bring the photo and ID?", [["collocation", "서류를 가져오다"], ["form", "가져오다 + -셨어요 -> 가져오셨어요", "가져오다 + -셨어요 -> 가져오셨어요"]]),
      vocab("수수료", "手续费", "名词", 158, "말하기와 듣기", "수수료는 6만 원입니다.", "手续费是六万韩元。", "fee; service charge", "The fee is 60,000 won.", [["collocation", "수수료를 내다"], ["collocation", "수수료는 만 원입니다"]]),
      vocab("6만 원", "六万韩元", "名词短语", 158, "말하기와 듣기", "수수료는 6만 원입니다.", "手续费是六万韩元。", "60,000 won", "The fee is 60,000 won.", [["collocation", "6만 원입니다"], ["pitfall", "만 원 = 10,000 韩元，6만 원 = 60,000 韩元。", "만 원 is 10,000 won; 6만 원 is 60,000 won."]]),
      vocab("최대", "最大；最多", "副词", 158, "말하기와 듣기", "최대 2년까지 연장됩니다.", "最多延长到两年。", "maximum; up to", "It can be extended up to two years.", [["collocation", "최대 2년까지"], ["pitfall", "최대는上限。", "최대 marks the maximum limit."]]),
      vocab("연장되다", "被延长；延期", "动词", 158, "말하기와 듣기", "체류 기간이 얼마나 연장돼요?", "居留期间会延长多久？", "to be extended", "How long will the period of stay be extended?", [["form", "연장되다 + -어요 -> 연장돼요", "연장되다 + -어요 -> 연장돼요"], ["pitfall", "연장하다 是主动延长，연장되다 是被延长。", "연장하다 is to extend; 연장되다 is to be extended."]]),
      vocab("신분증", "身份证件", "名词", 158, "말하기와 듣기", "사진과 신분증은 가져오셨어요?", "照片和身份证件带来了吗？", "ID card; identification", "Did you bring a photo and ID?", [["collocation", "신분증을 가져오다"], ["pitfall", "教材发音是 [신분쯩]。", "The textbook pronunciation is [신분쯩]."]]),

      vocab("성명", "姓名", "名词", 159, "읽기와 쓰기", "성명에 이름을 써요.", "在姓名栏写名字。", "full name", "Write your name under full name.", [["collocation", "성명을 쓰다"], ["pitfall", "表格里常见，口语更常说 이름。", "Common on forms; 이름 is more common in speech."]]),
      vocab("성별", "性别", "名词", 159, "읽기와 쓰기", "성별을 표시해요.", "标记性别。", "gender", "Mark the gender.", [["collocation", "성별을 표시하다"], ["collocation", "남/여"]]),
      vocab("생년월일", "出生年月日", "名词", 159, "읽기와 쓰기", "생년월일을 써요.", "写出生年月日。", "date of birth", "Write the date of birth.", [["collocation", "생년월일을 쓰다"], ["pitfall", "년/월/일 顺序是年、月、日。", "년/월/일 is year, month, day."]]),
      vocab("외국인등록번호", "外国人登录号码", "名词", 159, "읽기와 쓰기", "외국인등록번호를 써요.", "写外国人登录号码。", "alien registration number", "Write the alien registration number.", [["collocation", "외국인등록번호를 쓰다"], ["collocation", "등록번호"]]),
      vocab("국적", "国籍", "名词", 159, "읽기와 쓰기", "국적을 써요.", "写国籍。", "nationality", "Write your nationality.", [["collocation", "국적을 쓰다"], ["collocation", "국적 취득"]]),
      vocab("여권 번호", "护照号码", "名词短语", 159, "읽기와 쓰기", "여권 번호는 OK1234567입니다.", "护照号码是 OK1234567。", "passport number", "The passport number is OK1234567.", [["collocation", "여권 번호"], ["collocation", "번호를 쓰다"]]),
      vocab("여권 발급일자", "护照签发日期", "名词短语", 159, "읽기와 쓰기", "여권 발급일자는 2019년 5월 1일입니다.", "护照签发日期是2019年5月1日。", "passport issue date", "The passport issue date is May 1, 2019.", [["collocation", "발급일자"], ["pitfall", "발급은证件发放。", "발급 means issuing a document."]]),
      vocab("여권 유효 기간", "护照有效期", "名词短语", 159, "읽기와 쓰기", "여권 유효 기간은 2029년 4월 30일까지입니다.", "护照有效期到2029年4月30日。", "passport validity period", "The passport is valid until April 30, 2029.", [["collocation", "유효 기간"], ["pitfall", "유효는有效。", "유효 means valid."]]),
      vocab("대한민국 내 주소", "韩国境内地址", "名词短语", 159, "읽기와 쓰기", "대한민국 내 주소를 써요.", "填写韩国境内地址。", "address in Korea", "Write the address in Korea.", [["collocation", "주소를 쓰다"], ["pitfall", "내 means“在……内/境内”。", "내 means within or inside."]]),
      vocab("휴대 전화", "手机", "名词短语", 159, "읽기와 쓰기", "휴대 전화 번호를 써요.", "写手机号码。", "mobile phone", "Write the mobile phone number.", [["collocation", "휴대 전화 번호"], ["collocation", "전화번호"]]),
      vocab("본국 주소", "本国地址", "名词短语", 159, "읽기와 쓰기", "본국 주소를 써요.", "写本国地址。", "home-country address", "Write your address in your home country.", [["collocation", "본국 주소"], ["pitfall", "본국은自己的国家/原籍国。", "본국 means one's home country."]]),
      vocab("근무처", "工作单位；工作地点", "名词", 159, "읽기와 쓰기", "예정 근무처를 써요.", "填写预定工作单位。", "workplace", "Write the expected workplace.", [["collocation", "예정 근무처"], ["collocation", "근무처 변경"]]),
      vocab("사업자 등록 번호", "事业者登记号码；营业登记号", "名词短语", 159, "읽기와 쓰기", "사업자 등록 번호를 써요.", "填写营业登记号。", "business registration number", "Write the business registration number.", [["collocation", "사업자 등록 번호"], ["pitfall", "회사/사업체 관련 번호。", "This is a number related to a company or business."]]),
      vocab("신청일", "申请日期", "名词", 159, "읽기와 쓰기", "신청일은 20XX년 8월 1일입니다.", "申请日期是20XX年8月1日。", "application date", "The application date is August 1, 20XX.", [["collocation", "신청일을 쓰다"], ["collocation", "신청인"]]),
      vocab("신청인 서명 또는 인", "申请人签名或盖章", "名词短语", 159, "읽기와 쓰기", "신청인 서명 또는 인에 서명해요.", "在申请人签名或盖章栏签名。", "applicant signature or seal", "Sign under applicant signature or seal.", [["collocation", "서명 또는 인"], ["pitfall", "인은 도장/印章을 뜻해요。", "인 refers to a seal or stamp."]]),

      vocab("국내", "国内；境内", "名词", 160, "문화와 정보", "외국인이 국내에서 비자 연장 신청을 해요.", "外国人在韩国境内申请签证延期。", "within the country; domestic", "Foreigners apply for visa extension within the country.", [["collocation", "국내에서"], ["pitfall", "본문에서는 한국 안을 뜻해요。", "In this text, it means within Korea."]]),
      vocab("발급받다", "获得签发；领取发放", "动词", 160, "문화와 정보", "외국인 등록증을 발급받으려면 출입국ㆍ외국인청에 가야 합니다.", "如果想领取外国人登录证，必须去出入境外国人厅。", "to be issued; receive issued document", "To get an alien registration card issued, you must go to the Immigration Office.", [["collocation", "증명서를 발급받다"], ["form", "발급받다 + -으려면 -> 발급받으려면", "발급받다 + -으려면 -> 발급받으려면"]]),
      vocab("출입국ㆍ외국인사무소", "出入境外国人事务所", "名词", 160, "문화와 정보", "출입국ㆍ외국인사무소에 가야 합니다.", "必须去出入境外国人事务所。", "Immigration Office branch", "You must go to an Immigration Office branch.", [["collocation", "외국인사무소"], ["pitfall", "청과 사무소 모두 관련业务를 처리해요。", "Both the office and branch handle related services."]]),
      vocab("전국", "全国", "名词", 160, "문화와 정보", "전국에 19개소가 있습니다.", "全国有19处。", "nationwide", "There are 19 locations nationwide.", [["collocation", "전국에 있다"], ["collocation", "전국 19개소"]]),
      vocab("개소", "处；个机构点", "名词", 160, "문화와 정보", "출입국ㆍ외국인청은 6개소가 있습니다.", "出入境外国人厅有6处。", "locations; offices", "There are six Immigration Offices.", [["collocation", "19개소"], ["pitfall", "기관/시설数量에 쓰는 단위。", "A counter word used for institutions or facilities."]]),
      vocab("사전 예약", "事前预约；提前预约", "名词短语", 160, "문화와 정보", "인터넷으로 사전 예약을 하고 방문해야 합니다.", "必须在网上提前预约后访问。", "advance reservation", "You must make an online reservation in advance before visiting.", [["collocation", "사전 예약을 하다"], ["collocation", "방문 예약"]]),
      vocab("예약하지 않아도 되다", "不用预约也可以", "语法表达", 160, "문화와 정보", "외국인 등록증을 받으러 갈 때는 예약하지 않아도 됩니다.", "去领取外国人登录证时不用预约也可以。", "do not need to reserve", "When going to pick up the alien registration card, you do not need a reservation.", [["form", "예약하지 않다 + -아도 되다 -> 예약하지 않아도 되다", "예약하지 않다 + -아도 되다 -> 예약하지 않아도 되다"], ["pitfall", "않아도 되다 表示“不做也可以”。", "않아도 되다 means it is okay not to do something."]]),
      vocab("하이코리아", "Hi Korea 网站", "名词", 160, "문화와 정보", "하이코리아에 접속해야 합니다.", "必须访问 Hi Korea 网站。", "Hi Korea website", "You must access the Hi Korea website.", [["collocation", "하이코리아에 접속하다"], ["pitfall", "www.hikorea.go.kr 是文中给出的预约网站。", "www.hikorea.go.kr is the reservation website given in the text."]]),
      vocab("접속하다", "连接；访问网站", "动词", 160, "문화와 정보", "먼저 하이코리아에 접속해야 합니다.", "首先必须访问 Hi Korea 网站。", "to access; connect to", "First, you must access Hi Korea.", [["collocation", "사이트에 접속하다"], ["form", "접속하다 + -어야 하다 -> 접속해야 하다", "접속하다 + -어야 하다 -> 접속해야 하다"]]),

      vocab("외국인 등록증을 신청해요", "申请外国人登录证", "句型表达", 161, "발음/배운 어휘 확인", "외국인 등록증을 신청해요.", "申请外国人登录证。", "I apply for an alien registration card.", "I apply for an alien registration card.", [["pitfall", "외국인 등록증 发音 [외구긴 등록쯩]。", "외국인 등록증 is pronounced [외구긴 등록쯩]."]]),
      vocab("신분증은 가져오셨어요?", "身份证件带来了吗？", "句型表达", 161, "발음/배운 어휘 확인", "신분증은 가져오셨어요?", "身份证件带来了吗？", "Did you bring your ID?", "Did you bring your ID?", [["pitfall", "신분증 发音 [신분쯩]。", "신분증 is pronounced [신분쯩]."]])
    ],
    dialogues: [
      {
        id: "dialogue-grammar-01",
        title: "해도 돼요?",
        focus: "V-아/어도 되다",
        page: 155,
        source: "문법 1",
        sceneZh: "询问某件事可不可以做。",
        translations: {
          en: {
            scene: "Ask whether something is allowed.",
            learningPoints: [
              "Use V-아/어도 되다 for permission.",
              "하다 becomes 해도 되다.",
              "For a negative answer, use V-(으)면 안 되다."
            ]
          }
        },
        learningPoints: [
          "V-아/어도 되다 表示可以做某事。",
          "하다 变 해도 되다。",
          "不可以时用 V-(으)면 안 되다。"
        ],
        lines: [
          { speaker: "가", ko: "출생 신고를 남편이 해도 돼요?", zh: "出生申报丈夫可以做吗？", guide: "해도 돼요? 用来问许可。", translations: { en: { translation: "May my husband report the birth?", guide: "해도 돼요? asks for permission." } } },
          { speaker: "나", ko: "네, 남편이 해도 돼요.", zh: "可以，丈夫做也可以。", guide: "네 后面直接给许可。", translations: { en: { translation: "Yes, your husband may do it.", guide: "네 is followed by permission." } } },
          { speaker: "가", ko: "이 옷 입어 봐도 돼요?", zh: "这件衣服可以试穿吗？", guide: "입어 보다 是试穿/试着穿。", translations: { en: { translation: "May I try on this clothing?", guide: "입어 보다 means to try on." } } },
          { speaker: "나", ko: "네, 입어 보세요.", zh: "可以，请试穿看看。", guide: "-아/어 보세요 是请试着做。", translations: { en: { translation: "Yes, please try it on.", guide: "-아/어 보세요 invites someone to try doing something." } } },
          { speaker: "나", ko: "인터넷으로 주소 변경 신고를 해도 돼요.", zh: "也可以在网上申报地址变更。", guide: "인터넷으로 表示方式。", translations: { en: { translation: "You may report an address change online.", guide: "인터넷으로 marks the method." } } },
          { speaker: "가", ko: "이 종이들을 버려도 돼요?", zh: "这些纸可以扔掉吗？", guide: "버리다 变 버려도 돼요。", translations: { en: { translation: "May I throw these papers away?", guide: "버리다 becomes 버려도 돼요." } } }
        ],
        rolePlays: [
          {
            title: "허락 묻기",
            promptZh: "用 사진을 찍다、건강 검진을 받으러 가다 或 일찍 퇴근하다 询问许可。",
            answerKo: "여기에서 사진을 찍어도 돼요?",
            translations: { en: { title: "Ask for permission", prompt: "Use take a photo, go for a health checkup, or leave work early to ask for permission." } }
          }
        ],
        drills: [
          { pattern: "V-아/어도 되다", promptZh: "把“들어오다”变成许可句。", answerKo: "들어와도 돼요.", translations: { en: { prompt: "Turn 들어오다 into a permission sentence." } } }
        ]
      },
      {
        id: "dialogue-grammar-02",
        title: "받으려면 무엇이 필요해요?",
        focus: "V-(으)려면",
        page: 157,
        source: "문법 2",
        sceneZh: "说明为了办成某件事需要的条件。",
        translations: {
          en: {
            scene: "State the condition needed to do something.",
            learningPoints: [
              "Use V-(으)려면 for if you want to.",
              "받다 becomes 받으려면.",
              "하다 becomes 하려면."
            ]
          }
        },
        learningPoints: [
          "V-(으)려면 表示“如果想……”。",
          "받다 变 받으려면。",
          "하다 变 하려면。"
        ],
        lines: [
          { speaker: "손님", ko: "외국인 등록증을 재발급 받고 싶은데요.", zh: "我想补办外国人登录证。", guide: "-고 싶은데요 先说明需求。", translations: { en: { translation: "I would like to get my alien registration card reissued.", guide: "-고 싶은데요 states a need before asking." } } },
          { speaker: "직원", ko: "외국인 등록증을 재발급 받으려면 사진과 여권이 필요해요.", zh: "如果想补办外国人登录证，需要照片和护照。", guide: "받으려면 后面接必要条件。", translations: { en: { translation: "If you want it reissued, you need a photo and passport.", guide: "받으려면 is followed by the necessary condition." } } },
          { speaker: "가", ko: "시청에 가려면 어떻게 해야 돼요?", zh: "如果想去市厅，该怎么做？", guide: "가려면 是 가다 的条件形式。", translations: { en: { translation: "What should I do if I want to go to city hall?", guide: "가려면 is the condition form of 가다." } } },
          { speaker: "나", ko: "100번 버스를 타세요.", zh: "请坐100路公交车。", guide: "给出具体方法。", translations: { en: { translation: "Take bus number 100.", guide: "This gives a specific method." } } },
          { speaker: "나", ko: "비자 연장 신청을 하려면 방문 예약을 해야 돼요.", zh: "如果想申请签证延期，必须预约访问。", guide: "하려면 后面常接 해야 돼요。", translations: { en: { translation: "If you want to apply for a visa extension, you need to make a visit reservation.", guide: "하려면 is often followed by 해야 돼요." } } },
          { speaker: "나", ko: "감기에 걸리지 않으려면 손을 자주 씻으세요.", zh: "如果不想感冒，请经常洗手。", guide: "않으려면 表示“不想……的话”。", translations: { en: { translation: "If you do not want to catch a cold, wash your hands often.", guide: "않으려면 means if you do not want to." } } }
        ],
        rolePlays: [
          { title: "조건 말하기", promptZh: "用 건강을 지키다/운동을 자주 하다 说条件。", answerKo: "건강을 지키려면 운동을 자주 해야 돼요.", translations: { en: { title: "State a condition", prompt: "Use stay healthy / exercise often to state a condition." } } }
        ],
        drills: [
          { pattern: "V-(으)려면", promptZh: "用“부자가 되다 / 돈을 아껴 쓰다”造句。", answerKo: "부자가 되려면 돈을 아껴 써야 돼요.", translations: { en: { prompt: "Make a sentence with become rich / save money." } } }
        ]
      },
      {
        id: "dialogue-speaking-01",
        title: "비자 연장 신청을 하려면 어떻게 해야 돼요?",
        focus: "말하기와 듣기",
        page: 158,
        source: "말하기와 듣기",
        sceneZh: "在出入境外国人厅申请签证延期。",
        translations: {
          en: {
            scene: "Apply for a visa extension at the Immigration Office.",
            learningPoints: [
              "어떻게 오셨어요? asks the purpose at a service counter.",
              "하려면 어떻게 해야 돼요? asks for the required procedure.",
              "수수료 and 최대 are useful counter words in administrative scenes."
            ]
          }
        },
        learningPoints: [
          "어떻게 오셨어요? 在窗口是问来意。",
          "하려면 어떻게 해야 돼요? 用来询问手续。",
          "수수료、최대 是行政窗口常见词。"
        ],
        lines: [
          { speaker: "직원", ko: "어서 오세요. 어떻게 오셨어요?", zh: "欢迎。请问您来办什么？", guide: "服务窗口的接待句。", translations: { en: { translation: "Welcome. How can I help you?", guide: "A common greeting at a service counter." } } },
          { speaker: "라민", ko: "비자 연장 신청을 하려면 어떻게 해야 돼요?", zh: "想申请签证延期，该怎么做？", guide: "하려면 后面问 절차。", translations: { en: { translation: "What should I do to apply for a visa extension?", guide: "하려면 leads into asking about the procedure." } } },
          { speaker: "직원", ko: "여기 신청서를 쓰세요. 사진과 신분증은 가져오셨어요?", zh: "请填写这里的申请表。照片和身份证件带来了吗？", guide: "가져오셨어요 是尊敬过去式。", translations: { en: { translation: "Fill out this application form. Did you bring a photo and ID?", guide: "가져오셨어요 is a respectful past-tense form." } } },
          { speaker: "라민", ko: "네, 여기 가져왔어요.", zh: "是的，带来了，在这里。", guide: "여기 可以表示“在这里”。", translations: { en: { translation: "Yes, I brought them. Here they are.", guide: "여기 can mean here they are." } } },
          { speaker: "직원", ko: "수수료는 6만 원입니다.", zh: "手续费是六万韩元。", guide: "수수료 表示办理费用。", translations: { en: { translation: "The fee is 60,000 won.", guide: "수수료 is the service or processing fee." } } },
          { speaker: "라민", ko: "이번에 신청하면 체류 기간이 얼마나 연장돼요?", zh: "这次申请的话，居留期间会延长多久？", guide: "신청하면 表示“如果申请”。", translations: { en: { translation: "If I apply this time, how long will my period of stay be extended?", guide: "신청하면 means if I apply." } } },
          { speaker: "직원", ko: "최대 2년까지 연장됩니다.", zh: "最多延长到两年。", guide: "최대 表示上限。", translations: { en: { translation: "It can be extended up to two years.", guide: "최대 marks the maximum limit." } } }
        ],
        rolePlays: [
          { title: "창구 대화 바꾸기", promptZh: "把业务换成 외국인 등록증 신청，手续费换成 3만 원。", answerKo: "외국인 등록증 신청을 하려면 어떻게 해야 돼요? 수수료는 3만 원입니다.", translations: { en: { title: "Change the counter dialogue", prompt: "Change the service to alien registration card application and the fee to 30,000 won." } } }
        ],
        drills: [
          { pattern: "신청을 하려면", promptZh: "用 비자 연장 신청 造手续询问句。", answerKo: "비자 연장 신청을 하려면 어떻게 해야 돼요?", translations: { en: { prompt: "Make a procedure question with visa extension application." } } }
        ]
      },
      {
        id: "dialogue-reading-01",
        title: "통합신청서 읽기",
        focus: "읽기와 쓰기",
        page: 159,
        source: "읽기와 쓰기",
        sceneZh: "阅读 통합신청서，确认拉赫曼申请了什么、来自哪里、在哪里工作。",
        translations: {
          en: {
            scene: "Read an integrated application form and identify what Rahman applied for, where he is from, and where he works.",
            learningPoints: [
              "Look at 업무선택 first.",
              "Then check personal fields such as 성명, 국적, and 여권 번호.",
              "Form Korean often uses compact nouns instead of full sentences."
            ]
          }
        },
        learningPoints: [
          "先看 업무선택 里的勾选项目。",
          "再看 성명、국적、여권 번호 等个人信息。",
          "表格韩语常用短名词，不一定是完整句子。"
        ],
        lines: [
          { speaker: "신청서", ko: "업무선택: 외국인 등록, 등록증 재발급, 체류 기간 연장, 체류 자격 변경", zh: "业务选择：外国人登记、登录证再发放、居留期间延长、居留资格变更。", guide: "업무선택 是表格最先要看的部分。", translations: { en: { translation: "Service selection: alien registration, card reissuance, extension of stay, change of status.", guide: "업무선택 is the first part to check on the form." } } },
          { speaker: "신청서", ko: "성명: Anisuru Rahman", zh: "姓名：Anisuru Rahman。", guide: "성명 是正式表格里的姓名。", translations: { en: { translation: "Full name: Anisuru Rahman.", guide: "성명 is full name on formal forms." } } },
          { speaker: "신청서", ko: "여권 번호: OK1234567", zh: "护照号码：OK1234567。", guide: "번호 是号码。", translations: { en: { translation: "Passport number: OK1234567.", guide: "번호 means number." } } },
          { speaker: "신청서", ko: "국적: 방글라데시", zh: "国籍：孟加拉国。", guide: "국적 表示国籍。", translations: { en: { translation: "Nationality: Bangladesh.", guide: "국적 means nationality." } } },
          { speaker: "신청서", ko: "예정 근무처: (주)한국새시", zh: "预定工作单位：(株)韩国窗框公司。", guide: "예정 근무처 是将要工作的单位。", translations: { en: { translation: "Expected workplace: Korea Sash Co., Ltd.", guide: "예정 근무처 is the expected workplace." } } }
        ],
        rolePlays: [
          { title: "신청서 확인", promptZh: "回答“라흐만 씨는 무엇을 신청했어요?”", answerKo: "라흐만 씨는 등록증 재발급을 신청했어요.", translations: { en: { title: "Check the application form", prompt: "Answer: What did Rahman apply for?" } } }
        ],
        drills: [
          { pattern: "신청서 정보", promptZh: "回答“라흐만 씨는 어디에서 일해요?”", answerKo: "라흐만 씨는 (주)한국새시에서 일해요.", translations: { en: { prompt: "Answer: Where does Rahman work?" } } }
        ]
      },
      {
        id: "dialogue-pronunciation-01",
        title: "외국인 등록증 / 비자 / 신분증",
        focus: "발음",
        page: 161,
        source: "발음/배운 어휘 확인",
        sceneZh: "练习本课证件和申请场景发音。",
        translations: {
          en: {
            scene: "Practice pronunciations for ID cards and application scenes.",
            learningPoints: [
              "외국인 등록증 is pronounced [외구긴 등록쯩].",
              "신분증 is pronounced [신분쯩].",
              "Use sentence practice after word practice."
            ]
          }
        },
        learningPoints: [
          "외국인 등록증 的教材发音是 [외구긴 등록쯩]。",
          "신분증 的教材发音是 [신분쯩]。",
          "单词发音后要放进句子跟读。"
        ],
        lines: [
          { speaker: "나", ko: "외국인 등록증을 신청해요.", zh: "申请外国人登录证。", guide: "외국인 등록증 连读为 [외구긴 등록쯩]。", translations: { en: { translation: "I apply for an alien registration card.", guide: "외국인 등록증 is pronounced [외구긴 등록쯩]." } } },
          { speaker: "나", ko: "외국인 등록증을 발급받으려면 여권이 필요해요.", zh: "如果想领取外国人登录证，需要护照。", guide: "받으려면 是本课条件表达。", translations: { en: { translation: "If you want to get an alien registration card issued, you need a passport.", guide: "받으려면 is this lesson's condition pattern." } } },
          { speaker: "가", ko: "신분증은 가져오셨어요?", zh: "身份证件带来了吗？", guide: "신분증 发音 [신분쯩]。", translations: { en: { translation: "Did you bring your ID?", guide: "신분증 is pronounced [신분쯩]." } } },
          { speaker: "나", ko: "네, 여기 있어요.", zh: "是的，在这里。", guide: "提交材料时可用。", translations: { en: { translation: "Yes, here it is.", guide: "Use this when handing over documents." } } }
        ],
        rolePlays: [
          { title: "발음 따라 읽기", promptZh: "跟读 외국인 등록증[외구긴 등록쯩], 신분증[신분쯩]。", answerKo: "외국인 등록증[외구긴 등록쯩], 신분증[신분쯩]", translations: { en: { title: "Pronunciation practice", prompt: "Read 외국인 등록증[외구긴 등록쯩], 신분증[신분쯩]." } } }
        ],
        drills: [
          { pattern: "발음", promptZh: "读出“신분증은 가져오셨어요?”的自然发音。", answerKo: "신분쯩은 가져오셔써요?", translations: { en: { prompt: "Read the natural pronunciation of “신분증은 가져오셨어요?”" } } }
        ]
      }
    ],
    culture: {
      titleKo: "출입국ㆍ외국인청(사무소)",
      titleZh: "出入境外国人厅（事务所）",
      page: 160,
      summaryZh: "这篇文化文章说明外国人在韩国办理签证延期、外国人登录证等业务时，需要去出入境外国人厅或事务所，并注意哪些业务要提前网上预约。",
      translations: {
        en: {
          title: "Immigration Office",
          summary: "This culture text explains where foreigners in Korea handle visa extensions, alien registration cards, and related matters, and which visits may require online reservations."
        }
      },
      paragraphs: [
        {
          ko: "외국인이 국내에서 비자 연장 신청을 하거나 외국인 등록증을 발급받으려면 출입국ㆍ외국인청이나 출입국ㆍ외국인사무소에 가야 합니다.",
          zh: "外国人在韩国境内如果想申请签证延期，或者领取外国人登录证，必须去出入境外国人厅或出入境外国人事务所。",
          guide: "第一句说明办理对象和地点：비자 연장 신청、외국인 등록증、출입국ㆍ외국인청。",
          translations: {
            en: {
              translation: "If a foreigner in Korea wants to apply for a visa extension or get an alien registration card issued, they must go to an Immigration Office or an Immigration Office branch.",
              guide: "The first sentence gives the matters and the place: visa extension, alien registration card, and Immigration Office."
            }
          }
        },
        {
          ko: "출입국ㆍ외국인청과 출입국ㆍ외국인사무소는 전국에 19개소(출입국ㆍ외국인청 6개소, 출입국ㆍ외국인사무소 13개소)가 있습니다.",
          zh: "出入境外国人厅和出入境外国人事务所在全国共有19处（出入境外国人厅6处，出入境外国人事务所13处）。",
          guide: "전국에 19개소가 있습니다 是“全国有19处”。",
          translations: {
            en: {
              translation: "There are 19 Immigration Offices and Immigration Office branches nationwide: 6 Immigration Offices and 13 branches.",
              guide: "전국에 19개소가 있습니다 means there are 19 locations nationwide."
            }
          }
        },
        {
          ko: "업무를 보려면 인터넷으로 사전 예약을 하고 방문해야 합니다. 그러나 증명서를 발급받거나 외국인 등록증을 받으러 갈 때는 예약하지 않아도 됩니다.",
          zh: "如果要办理业务，必须先在网上提前预约后再访问。但是去领取证明书或领取外国人登录证时，不预约也可以。",
          guide: "这里对比 해야 합니다 和 않아도 됩니다：有些业务必须预约，有些领取业务不用预约。",
          translations: {
            en: {
              translation: "To handle office business, you must make an advance reservation online before visiting. However, when you go to receive a certificate or pick up an alien registration card, you do not need to make a reservation.",
              guide: "This contrasts 해야 합니다 and 않아도 됩니다: some services require reservations, while some pickup visits do not."
            }
          }
        },
        {
          ko: "인터넷 사전 예약 방문 서비스를 이용하려면 먼저 하이코리아(www.hikorea.go.kr)에 접속해야 합니다.",
          zh: "如果想使用网上提前预约访问服务，首先必须访问 Hi Korea（www.hikorea.go.kr）网站。",
          guide: "이용하려면 后面说明第一步：하이코리아에 접속해야 합니다。",
          translations: {
            en: {
              translation: "To use the online advance reservation visit service, you must first access Hi Korea (www.hikorea.go.kr).",
              guide: "이용하려면 is followed by the first step: access Hi Korea."
            }
          }
        }
      ],
      keyTerms: [
        { ko: "출입국ㆍ외국인청", zh: "出入境外国人厅", translations: { en: { meaning: "Immigration Office" } } },
        { ko: "출입국ㆍ외국인사무소", zh: "出入境外国人事务所", translations: { en: { meaning: "Immigration Office branch" } } },
        { ko: "비자 연장 신청", zh: "签证延期申请", translations: { en: { meaning: "visa extension application" } } },
        { ko: "외국인 등록증", zh: "外国人登录证", translations: { en: { meaning: "alien registration card" } } },
        { ko: "인터넷 사전 예약", zh: "网上提前预约", translations: { en: { meaning: "online advance reservation" } } },
        { ko: "하이코리아", zh: "Hi Korea 网站", translations: { en: { meaning: "Hi Korea website" } } }
      ],
      questions: [
        {
          q: "언제 출입국ㆍ외국인청을 방문해요?",
          zh: "什么时候去出入境外国人厅？",
          a: "비자 연장 신청을 하거나 외국인 등록증을 발급받으려면 방문해요.",
          translations: {
            en: {
              translation: "When do you visit an Immigration Office?",
              answer: "You visit when applying for a visa extension or getting an alien registration card issued."
            }
          }
        },
        {
          q: "출입국ㆍ외국인청에 사전 예약을 하려면 어떻게 해야 돼요?",
          zh: "如果想提前预约出入境外国人厅，应该怎么做？",
          a: "먼저 하이코리아(www.hikorea.go.kr)에 접속해야 돼요.",
          translations: {
            en: {
              translation: "What should you do to make an advance reservation for the Immigration Office?",
              answer: "First, you need to access Hi Korea (www.hikorea.go.kr)."
            }
          }
        },
        {
          q: "여러분은 어느 출입국ㆍ외국인청에 가 봤어요?",
          zh: "你去过哪一个出入境外国人厅？",
          a: "저는 서울출입국ㆍ외국인청에 가 봤어요.",
          translations: {
            en: {
              translation: "Which Immigration Office have you been to?",
              answer: "I have been to the Seoul Immigration Office."
            }
          }
        }
      ]
    },
    practice: [
      {
        type: "translation",
        title: "中文转韩文",
        prompt: "想申请签证延期该怎么做？",
        answerKo: "비자 연장 신청을 하려면 어떻게 해야 돼요?",
        translations: { en: { title: "Translate to Korean", prompt: "What should I do to apply for a visa extension?" } }
      },
      {
        type: "pattern",
        title: "V-아/어도 되다",
        prompt: "用“여기에서 사진을 찍다”造许可问句。",
        answerKo: "여기에서 사진을 찍어도 돼요?",
        translations: { en: { title: "V-아/어도 되다", prompt: "Make a permission question with “take a photo here.”" } }
      },
      {
        type: "pattern",
        title: "V-(으)려면",
        prompt: "用“외국인 등록증을 재발급 받다 / 사진과 여권이 필요하다”造条件句。",
        answerKo: "외국인 등록증을 재발급 받으려면 사진과 여권이 필요해요.",
        translations: { en: { title: "V-(으)려면", prompt: "Make a condition sentence with “get an alien registration card reissued / need a photo and passport.”" } }
      },
      {
        type: "reading",
        title: "阅读确认",
        prompt: "라흐만 씨는 무엇을 신청했어요?",
        answerKo: "라흐만 씨는 등록증 재발급을 신청했어요.",
        translations: { en: { title: "Reading check", prompt: "What did Rahman apply for?" } }
      },
      {
        type: "culture",
        title: "文化理解",
        prompt: "출입국ㆍ외국인청에 사전 예약을 하려면 어떻게 해야 돼요?",
        answerKo: "먼저 하이코리아에 접속해야 돼요.",
        translations: { en: { title: "Culture check", prompt: "What should you do to make an advance reservation for the Immigration Office?" } }
      },
      {
        type: "speaking",
        title: "窗口对话",
        prompt: "按“来意 / 材料 / 手续费 / 延长期限”做 4 句出入境窗口对话。",
        answerKo: "비자 연장 신청을 하려면 어떻게 해야 돼요? 신청서를 쓰세요. 사진과 신분증은 가져오셨어요? 수수료는 6만 원입니다. 최대 2년까지 연장됩니다.",
        translations: { en: { title: "Counter dialogue", prompt: "Make a four-sentence immigration counter dialogue using purpose / documents / fee / extension period." } }
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
  window.lessonGuideL2LessonChunks["l2-14"] = lesson;
})();
