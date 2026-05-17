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
    "语法表达": "grammar expression",
    "职位名": "job title",
    "发音表达": "pronunciation expression"
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
    id: "l2-15",
    number: 15,
    titleKo: "무역 회사에서 번역 일을 하고 있어요",
    titleZh: "我在贸易公司做翻译工作",
    pages: "162-171",
    status: "refined",
    progress: {
      vocabulary: "refined-p162-p171",
      dialogue: "refined-p165-p171",
      culture: "reviewed-p170",
      practice: "refined-p165-p171"
    },
    vocabularySources: [
      { page: 162, label: "단원 제목", note: "课题句、贸易公司和翻译工作主题" },
      { page: 164, label: "어휘와 문법 1", note: "办公室和工厂常见物品、设备词汇" },
      { page: 165, label: "문법 1", note: "V-고 있다 进行/持续表达和练习" },
      { page: 166, label: "어휘와 문법 2", note: "职场业务动作和物品搬运表达" },
      { page: 167, label: "문법 2", note: "V-(으)ㄴ 名词修饰和工作记录练习" },
      { page: 168, label: "말하기와 듣기", note: "工厂工作指示对话和听力问题" },
      { page: 169, label: "읽기와 쓰기", note: "업무 메일 阅读、问题和回复写作" },
      { page: 170, label: "문화와 정보", note: "韩国公司职位文化原文与问题" },
      { page: 171, label: "발음/배운 어휘 확인", note: "发音练习和本课词汇复习" }
    ],
    goals: [
      "能够说出办公室和工厂里常见的物品、证件和设备。",
      "能够描述自己在职场中正在做的工作或持续状态。",
      "能够用 V-고 있다 表达动作正在进行或状态持续。",
      "能够用 V-(으)ㄴ 修饰名词，说明已经发生的动作。",
      "能够读懂 업무 메일，并理解韩国公司的常见职位顺序。"
    ],
    grammar: [
      {
        pattern: "V-고 있다",
        zh: "正在……；处于……状态",
        guide: "表示动作正在进行，也可以表示某种状态持续。和职业、居住、工作内容一起用时，常翻成“正在做/在……”。",
        examples: [
          { ko: "저는 무역 회사에서 번역 일을 하고 있어요.", zh: "我在贸易公司做翻译工作。" },
          { ko: "저는 지금 울산에서 살고 있어요.", zh: "我现在住在蔚山。" },
          { ko: "초등학교에서 학생들에게 영어를 가르치고 있어요.", zh: "我在小学教学生英语。" }
        ],
        translations: {
          en: {
            meaning: "be doing ...; be in an ongoing state",
            guide: "Use V-고 있다 for an action in progress or an ongoing state. With work, residence, or occupation, it often means someone is currently doing or living somewhere."
          }
        }
      },
      {
        pattern: "V-(으)ㄴ N",
        zh: "已经……的名词；……过的名词",
        guide: "用过去或完成的动作修饰后面的名词。有收音多用 -은，没有收音多用 -ㄴ；오다 是 온，하다 是 한。",
        examples: [
          { ko: "번역한 서류 좀 가져오세요.", zh: "请把翻译好的文件拿来。" },
          { ko: "아까 도착한 택배를 서쪽으로 옮겨 주세요.", zh: "请把刚才到的快递搬到西边。" },
          { ko: "이건 고향에 갔을 때 찍은 사진이에요.", zh: "这是回故乡时拍的照片。" }
        ],
        translations: {
          en: {
            meaning: "a noun modified by a completed past action",
            guide: "Use V-(으)ㄴ before a noun to describe it with a completed action. Use -은 after many final consonants and -ㄴ after a vowel; 오다 becomes 온 and 하다 becomes 한."
          }
        }
      }
    ],
    vocabulary: [
      vocab("무역 회사", "贸易公司", "名词短语", 162, "단원 제목", "저는 무역 회사에서 일해요.", "我在贸易公司工作。", "trading company", "I work at a trading company.", [["collocation", "무역 회사에서 일하다"]]),
      vocab("번역 일을 하다", "做翻译工作", "动词短语", 162, "단원 제목", "무역 회사에서 번역 일을 하고 있어요.", "在贸易公司做翻译工作。", "to do translation work", "I do translation work at a trading company.", [["collocation", "번역 일을 하고 있어요"], ["form", "일을 하다 -> 일을 하고 있다", "일을 하다 -> 일을 하고 있다"]]),
      vocab("직장 생활", "职场生活", "名词短语", 162, "단원 제목", "직장 생활에 대해 이야기해요.", "谈论职场生活。", "work life", "We talk about work life.", [["collocation", "직장 생활을 하다"]]),

      vocab("서류", "文件；资料", "名词", 164, "어휘와 문법 1", "서류를 책상 위에 놓았어요.", "把文件放在桌子上了。", "documents; paperwork", "I put the documents on the desk.", [["collocation", "서류를 작성하다"], ["collocation", "서류를 번역하다"]]),
      vocab("명함", "名片", "名词", 164, "어휘와 문법 1", "처음 만난 사람에게 명함을 줘요.", "给初次见面的人名片。", "business card", "I give a business card to someone I meet for the first time.", [["collocation", "명함을 주다"], ["collocation", "명함을 받다"]]),
      vocab("사원증", "员工证", "名词", 164, "어휘와 문법 1", "회사에 들어갈 때 사원증이 필요해요.", "进公司时需要员工证。", "employee ID card", "You need an employee ID card when entering the company.", [["collocation", "사원증을 목에 걸다"], ["pitfall", "사원증은 회사 직원임을 보여 주는 카드예요.", "사원증 is a card showing that someone is an employee."]]),
      vocab("복사기", "复印机", "名词", 164, "어휘와 문법 1", "사무실에서 복사기를 자주 사용해요.", "在办公室经常使用复印机。", "copy machine", "I often use the copy machine in the office.", [["collocation", "복사기를 사용하다"], ["collocation", "서류를 복사하다"]]),
      vocab("프린터", "打印机", "名词", 164, "어휘와 문법 1", "프린터로 서류를 출력해요.", "用打印机打印文件。", "printer", "I print documents with a printer.", [["collocation", "프린터로 출력하다"], ["pitfall", "출력하다 是打印/输出，복사하다 是复印。", "출력하다 means to print/output; 복사하다 means to copy."]]),
      vocab("출근부", "出勤簿", "名词", 164, "어휘와 문법 1", "아침에 출근부에 이름을 써요.", "早上在出勤簿上写名字。", "attendance register", "I write my name in the attendance register in the morning.", [["collocation", "출근부에 이름을 쓰다"]]),
      vocab("안전모", "安全帽", "名词", 164, "어휘와 문법 1", "공장에서는 안전모를 써야 해요.", "在工厂必须戴安全帽。", "safety helmet", "You must wear a safety helmet in the factory.", [["collocation", "안전모를 쓰다"], ["pitfall", "모자는 쓰다，用 입다 不自然。", "Use 쓰다 with hats and helmets, not 입다."]]),
      vocab("안전화", "安全鞋", "名词", 164, "어휘와 문법 1", "일할 때 안전화를 신어요.", "工作时穿安全鞋。", "safety shoes", "I wear safety shoes while working.", [["collocation", "안전화를 신다"], ["pitfall", "신발은 신다，用 입다 不说。", "Use 신다 with shoes, not 입다."]]),
      vocab("기계", "机器；设备", "名词", 164, "어휘와 문법 1", "우리 공장에는 기계가 많아요.", "我们工厂有很多机器。", "machine", "There are many machines in our factory.", [["collocation", "기계를 켜다"], ["collocation", "기계를 끄다"]]),
      vocab("공구", "工具", "名词", 164, "어휘와 문법 1", "일할 때 공구를 많이 사용해요.", "工作时经常使用工具。", "tools", "I use tools a lot while working.", [["collocation", "공구를 사용하다"], ["collocation", "공구를 정리하다"]]),
      vocab("사무실", "办公室", "名词", 164, "어휘와 문법 1", "저는 사무실에서 일해요.", "我在办公室工作。", "office", "I work in an office.", [["collocation", "사무실에서 일하다"]]),
      vocab("공장", "工厂", "名词", 164, "어휘와 문법 1", "공장에는 기계가 많아요.", "工厂里机器很多。", "factory", "There are many machines in the factory.", [["collocation", "공장에서 일하다"]]),
      vocab("사용하다", "使用", "动词", 164, "어휘와 문법 1", "복사기와 프린터를 자주 사용해요.", "经常使用复印机和打印机。", "to use", "I often use the copier and printer.", [["collocation", "N을/를 사용하다"]]),

      vocab("정리하고 있다", "正在整理", "语法表达", 165, "문법 1", "책상을 정리하고 있습니다.", "正在整理桌子。", "be organizing", "I am organizing the desk.", [["form", "정리하다 + -고 있다 -> 정리하고 있다"]]),
      vocab("살고 있다", "住着；正在居住", "语法表达", 165, "문법 1", "저는 지금 울산에서 살고 있어요.", "我现在住在蔚山。", "be living", "I am living in Ulsan now.", [["collocation", "N에서 살고 있다"], ["pitfall", "住在哪里用 에서 살다。", "Use 에서 살다 for living in a place."]]),
      vocab("가르치고 있다", "正在教；从事教学", "语法表达", 165, "문법 1", "초등학교에서 영어를 가르치고 있어요.", "在小学教英语。", "be teaching", "I am teaching English at an elementary school.", [["collocation", "학생들에게 가르치다"], ["form", "가르치다 + -고 있다"]]),
      vocab("베트남어", "越南语", "名词", 165, "문법 1", "베트남어를 가르치고 있어요.", "正在教越南语。", "Vietnamese language", "I am teaching Vietnamese.", [["collocation", "베트남어를 가르치다"]]),
      vocab("놀이공원", "游乐园", "名词", 165, "문법 1", "아이들이 놀이공원에서 놀고 있어요.", "孩子们正在游乐园玩。", "amusement park", "The children are playing at an amusement park.", [["collocation", "놀이공원에서 놀다"]]),

      vocab("서류를 작성하다", "填写/撰写文件", "动词短语", 166, "어휘와 문법 2", "오늘은 보고서를 작성하고 있어요.", "今天正在写报告。", "to write/fill out documents", "I am writing a report today.", [["collocation", "보고서를 작성하다"], ["pitfall", "작성하다 多用于文件、表格、报告。", "작성하다 is often used for documents, forms, and reports."]]),
      vocab("서류를 번역하다", "翻译文件", "动词短语", 166, "어휘와 문법 2", "계약서를 한국어로 번역해요.", "把合同翻译成韩语。", "to translate documents", "I translate the contract into Korean.", [["collocation", "한국어로 번역하다"]]),
      vocab("서류를 출력하다", "打印文件", "动词短语", 166, "어휘와 문법 2", "회의 자료를 출력했어요.", "打印了会议资料。", "to print documents", "I printed the meeting materials.", [["collocation", "자료를 출력하다"]]),
      vocab("서류를 복사하다", "复印文件", "动词短语", 166, "어휘와 문법 2", "서류를 다섯 장 복사하세요.", "请复印五份文件。", "to copy documents", "Please make five copies of the document.", [["collocation", "서류를 복사하다"]]),
      vocab("팩스를 보내다", "发传真", "动词短语", 166, "어휘와 문법 2", "거래처에 팩스를 보냈어요.", "给客户公司发了传真。", "to send a fax", "I sent a fax to the client company.", [["collocation", "거래처에 팩스를 보내다"]]),
      vocab("이메일을 보내다", "发电子邮件", "动词短语", 166, "어휘와 문법 2", "과장님께 이메일을 보냈어요.", "给科长发了邮件。", "to send an email", "I sent an email to the manager.", [["collocation", "이메일을 보내다"], ["pitfall", "받는 사람이 높으면 에게/한테보다 께를 쓸 수 있어요.", "Use 께 for a respected recipient."]]),
      vocab("확인 전화를 하다", "打确认电话", "动词短语", 166, "어휘와 문법 2", "배송 전에 확인 전화를 해요.", "配送前打确认电话。", "to make a confirmation call", "I make a confirmation call before delivery.", [["collocation", "확인 전화를 하다"]]),
      vocab("기계를 켜다", "打开机器", "动词短语", 166, "어휘와 문법 2", "일을 시작하기 전에 기계를 켜요.", "开始工作前打开机器。", "to turn on a machine", "I turn on the machine before starting work.", [["collocation", "전원을 켜다"], ["pitfall", "켜다 是打开电源，끄다 是关闭。", "켜다 means turn on; 끄다 means turn off."]]),
      vocab("기계를 끄다", "关闭机器", "动词短语", 166, "어휘와 문법 2", "퇴근 전에 기계를 꺼요.", "下班前关机器。", "to turn off a machine", "I turn off the machine before leaving work.", [["collocation", "전원을 끄다"], ["form", "끄다 + -어요 -> 꺼요", "끄다 + -어요 -> 꺼요"]]),
      vocab("물건을 들다", "拿起/提起东西", "动词短语", 166, "어휘와 문법 2", "무거운 물건을 들 때 조심하세요.", "拿重物时请小心。", "to lift/carry an item", "Be careful when lifting heavy items.", [["collocation", "무거운 물건을 들다"]]),
      vocab("물건을 올리다", "把东西放上去", "动词短语", 166, "어휘와 문법 2", "물건을 선반 위에 올려요.", "把东西放到架子上。", "to put something up/on", "I put the item on the shelf.", [["collocation", "위에 올리다"]]),
      vocab("물건을 싣다", "装载东西", "动词短语", 166, "어휘와 문법 2", "트럭에 물건을 실어요.", "把东西装到卡车上。", "to load items", "I load items onto the truck.", [["collocation", "트럭에 싣다"], ["form", "싣다 -> 실어요/실은", "싣다 -> 실어요/실은"]]),
      vocab("물건을 내리다", "卸下东西", "动词短语", 166, "어휘와 문법 2", "차에서 물건을 내려요.", "从车上卸下东西。", "to unload items", "I unload items from the car.", [["collocation", "차에서 내리다"], ["pitfall", "사람도 내리다，物品도 내리다。", "내리다 can be used for people getting off and for unloading items."]]),
      vocab("물건을 만들다", "制作东西", "动词短语", 166, "어휘와 문법 2", "공장에서 물건을 만들어요.", "在工厂制作产品。", "to make products/items", "We make products in the factory.", [["collocation", "공장에서 만들다"]]),
      vocab("물건을 옮기다", "搬运东西", "动词短语", 166, "어휘와 문법 2", "창고로 물건을 옮겨 주세요.", "请把东西搬到仓库。", "to move items", "Please move the items to the warehouse.", [["collocation", "N으로 옮기다"], ["form", "옮기다 + -고 -> 옮기고", "옮기다 + -고 -> 옮기고"]]),
      vocab("퇴근", "下班", "名词", 166, "어휘와 문법 2", "퇴근 전에 전원을 끄세요.", "下班前请关电源。", "leaving work", "Turn off the power before leaving work.", [["collocation", "퇴근 전에"], ["collocation", "퇴근하다"]]),

      vocab("번역한 서류", "翻译好的文件", "名词短语", 167, "문법 2", "번역한 서류 좀 가져오세요.", "请把翻译好的文件拿来。", "translated documents", "Please bring the translated documents.", [["form", "번역하다 + -ㄴ -> 번역한"], ["collocation", "서류를 가져오다"]]),
      vocab("도착한 택배", "到达的快递", "名词短语", 167, "문법 2", "아까 도착한 택배를 옮겨 주세요.", "请把刚才到的快递搬一下。", "a package that arrived", "Please move the package that arrived earlier.", [["form", "도착하다 + -ㄴ -> 도착한"]]),
      vocab("찍은 사진", "拍的照片", "名词短语", 167, "문법 2", "고향에 갔을 때 찍은 사진이에요.", "这是回故乡时拍的照片。", "a photo that was taken", "This is a photo I took when I went to my hometown.", [["form", "찍다 + -은 -> 찍은"], ["collocation", "사진을 찍다"]]),
      vocab("프랑스에서 온", "从法国来的", "语法表达", 167, "문법 2", "프랑스에서 온 아나이스입니다.", "我是从法国来的 Anais。", "from France; who came from France", "This is Anais from France.", [["form", "오다 + -ㄴ -> 온"], ["pitfall", "오다 的过去修饰形是 온，不是 온은。", "The past modifier of 오다 is 온, not 온은."]]),
      vocab("판매한 사람", "销售的人", "名词短语", 167, "문법 2", "이 제품을 판매한 사람은 이링 씨예요.", "销售这个产品的人是 Iling。", "the person who sold it", "The person who sold this product is Iling.", [["form", "판매하다 + -ㄴ -> 판매한"]]),
      vocab("보고서를 작성하다", "写报告", "动词短语", 167, "문법 2", "보고서를 작성한 사람은 김고은 씨예요.", "写报告的人是金高恩。", "to write a report", "The person who wrote the report is Kim Goeun.", [["collocation", "보고서를 작성하다"]]),
      vocab("문의 전화를 받다", "接咨询电话", "动词短语", 167, "문법 2", "문의 전화를 받은 사람은 드미트리 씨예요.", "接咨询电话的人是 Dmitry。", "to receive an inquiry call", "The person who received the inquiry call is Dmitry.", [["collocation", "전화를 받다"], ["collocation", "문의 전화"]]),
      vocab("주간 업무 일지", "每周工作日志", "名词短语", 167, "문법 2", "주간 업무 일지를 써요.", "写每周工作日志。", "weekly work log", "I write a weekly work log.", [["collocation", "업무 일지를 쓰다"]]),
      vocab("업무 내용", "工作内容", "名词短语", 167, "문법 2", "업무 내용을 정리해요.", "整理工作内容。", "work details", "I organize the work details.", [["collocation", "업무 내용을 쓰다"]]),
      vocab("휴가 기간", "休假期间", "名词短语", 167, "문법 2", "지난 휴가 기간에 고향에 갔어요.", "上次休假期间回故乡了。", "vacation period", "I went to my hometown during the last vacation.", [["collocation", "휴가 기간에"]]),

      vocab("반장님", "班长；组长", "名词", 168, "말하기와 듣기", "반장님이 작업을 확인해요.", "组长确认作业。", "team leader; foreman", "The team leader checks the work.", [["collocation", "반장님께 말하다"], ["pitfall", "工厂/现场里 반장님 常指小组负责人。", "At a worksite, 반장님 often means a team leader or foreman."]]),
      vocab("잊지 말고", "不要忘了……并且", "句型表达", 168, "말하기와 듣기", "안전모 잊지 말고 꼭 쓰세요.", "不要忘了安全帽，一定要戴。", "do not forget to ... and", "Do not forget your safety helmet and make sure to wear it.", [["form", "잊다 + -지 말고 -> 잊지 말고"]]),
      vocab("작업", "作业；工作任务", "名词", 168, "말하기와 듣기", "오늘 작업은 3시까지예요.", "今天的作业到3点为止。", "work task; job", "Today's work task is until 3 o'clock.", [["collocation", "작업을 하다"], ["collocation", "작업이 끝나다"]]),
      vocab("3시까지", "到3点为止", "名词短语", 168, "말하기와 듣기", "오늘 작업은 3시까지 해야 돼요.", "今天的工作要做到3点。", "until 3 o'clock", "The work has to be done until 3 o'clock.", [["form", "N까지 = 到N为止", "N까지 = until N"]]),
      vocab("일이 끝나다", "工作结束", "动词短语", 168, "말하기와 듣기", "일이 끝나면 전원을 끄세요.", "工作结束后请关电源。", "work ends", "When the work ends, turn off the power.", [["collocation", "일이 다 끝나다"], ["form", "끝나다 + -면 -> 끝나면", "끝나다 + -면 -> 끝나면"]]),
      vocab("기계 전원", "机器电源", "名词短语", 168, "말하기와 듣기", "기계 전원 끄는 거 잊지 마세요.", "不要忘了关机器电源。", "machine power", "Do not forget to turn off the machine power.", [["collocation", "전원을 끄다"], ["collocation", "전원을 켜다"]]),
      vocab("깨끗하게 정리하다", "整理干净", "动词短语", 168, "말하기와 듣기", "일이 끝나면 깨끗하게 정리하세요.", "工作结束后请整理干净。", "to clean up neatly", "Clean up neatly when the work is finished.", [["collocation", "깨끗하게 정리하다"]]),
      vocab("회의 준비", "会议准备", "名词短语", 168, "말하기와 듣기", "안젤라 씨가 회의 준비를 하고 있어요.", "Angela 正在准备会议。", "meeting preparation", "Angela is preparing for the meeting.", [["collocation", "회의 준비를 하다"]]),
      vocab("회의 참석", "参加会议", "名词短语", 168, "말하기와 듣기", "오후에는 회의 참석이 있어요.", "下午要参加会议。", "attending a meeting", "There is a meeting to attend in the afternoon.", [["collocation", "회의에 참석하다"]]),

      vocab("받은 메일", "收到的邮件", "名词短语", 169, "읽기와 쓰기", "받은 메일을 읽어 보세요.", "请读一下收到的邮件。", "received email", "Please read the received email.", [["form", "받다 + -은 -> 받은"]]),
      vocab("보낸 사람", "发件人", "名词短语", 169, "읽기와 쓰기", "보낸 사람은 김정수 과장입니다.", "发件人是金正洙科长。", "sender", "The sender is Manager Kim Jeongsu.", [["form", "보내다 + -ㄴ -> 보낸"]]),
      vocab("제목", "标题；邮件主题", "名词", 169, "읽기와 쓰기", "메일 제목을 확인하세요.", "请确认邮件标题。", "subject; title", "Check the email subject.", [["collocation", "메일 제목"]]),
      vocab("첨부파일", "附件", "名词", 169, "읽기와 쓰기", "첨부파일을 열어 보세요.", "请打开附件看看。", "attachment", "Open the attachment and check it.", [["collocation", "첨부파일을 열다"], ["pitfall", "메일里的附件常写成 첨부파일。", "Email attachments are often called 첨부파일."]]),
      vocab("제품 구매 확인서", "产品购买确认书", "名词短语", 169, "읽기와 쓰기", "첨부파일은 제품 구매 확인서예요.", "附件是产品购买确认书。", "product purchase confirmation form", "The attachment is a product purchase confirmation form.", [["collocation", "구매 확인서"]]),
      vocab("필리핀에서 온 계약서", "从菲律宾来的合同", "名词短语", 169, "읽기와 쓰기", "필리핀에서 온 계약서를 읽으세요.", "请阅读从菲律宾来的合同。", "a contract from the Philippines", "Read the contract from the Philippines.", [["form", "오다 + -ㄴ -> 온"], ["collocation", "계약서를 읽다"]]),
      vocab("계약서", "合同", "名词", 169, "읽기와 쓰기", "계약서를 한국어로 번역해요.", "把合同翻译成韩语。", "contract", "I translate the contract into Korean.", [["collocation", "계약서를 번역하다"]]),
      vocab("내일(금) 3시까지", "明天周五3点前", "名词短语", 169, "읽기와 쓰기", "내일 금요일 3시까지 끝내야 됩니다.", "必须在明天周五3点前完成。", "by 3 p.m. tomorrow, Friday", "It must be finished by 3 p.m. tomorrow, Friday.", [["collocation", "3시까지 끝내다"]]),
      vocab("방문하다", "访问；来访", "动词", 169, "읽기와 쓰기", "데이비드 사장이 회의하러 방문할 겁니다.", "David 社长会来访开会。", "to visit", "President David will visit for a meeting.", [["collocation", "회의하러 방문하다"]]),
      vocab("중요한 손님", "重要客人", "名词短语", 169, "읽기와 쓰기", "중요한 손님이니까 친절하게 안내하세요.", "因为是重要客人，请亲切地引导。", "important guest", "Since this is an important guest, guide him kindly.", [["collocation", "손님을 안내하다"]]),
      vocab("회사 안내", "公司介绍/引导", "名词短语", 169, "읽기와 쓰기", "손님에게 회사 안내를 부탁합니다.", "拜托你给客人做公司介绍。", "company guidance/tour", "Please give the guest a company tour.", [["collocation", "회사 안내를 하다"]]),
      vocab("통역하다", "口译", "动词", 169, "읽기와 쓰기", "회의 때 통역도 부탁합니다.", "会议时也拜托你口译。", "to interpret", "Please interpret during the meeting as well.", [["collocation", "회의 때 통역하다"], ["pitfall", "번역하다 多指书面翻译，통역하다 多指口头翻译。", "번역하다 often means written translation; 통역하다 means oral interpretation."]]),
      vocab("답장", "回复；回信", "名词", 169, "읽기와 쓰기", "과장님의 메일에 답장을 써 보세요.", "请给科长的邮件写回复。", "reply", "Write a reply to the manager's email.", [["collocation", "답장을 쓰다"], ["collocation", "메일에 답장하다"]]),
      vocab("업무 메일", "工作邮件", "名词短语", 169, "읽기와 쓰기", "업무 메일을 확인했습니다.", "已经确认工作邮件。", "work email", "I checked the work email.", [["collocation", "업무 메일을 확인하다"]]),

      vocab("직위", "职位", "名词", 170, "문화와 정보", "한국 회사에는 여러 직위가 있습니다.", "韩国公司有多种职位。", "job position; rank", "Korean companies have various job positions.", [["collocation", "회사 직위"], ["pitfall", "직업是职业，직위是公司里的职位/级别。", "직업 is occupation; 직위 is a position or rank in a company."]]),
      vocab("직위 명칭", "职位名称", "名词短语", 170, "문화와 정보", "직위 명칭은 회사마다 다를 수 있어요.", "职位名称可能因公司而异。", "job-title names", "Job-title names may differ by company.", [["collocation", "직위 명칭"]]),
      vocab("사장", "社长；总经理", "职位名", 170, "문화와 정보", "사장님이 회의에 참석합니다.", "社长参加会议。", "president; company head", "The president attends the meeting.", [["collocation", "사장님"]]),
      vocab("부사장", "副社长", "职位名", 170, "문화와 정보", "부사장은 사장 다음으로 높은 직위예요.", "副社长是社长下面的高职位。", "vice president", "Vice president is a high position below president.", [["collocation", "부사장님"]]),
      vocab("전무", "专务；高级董事", "职位名", 170, "문화와 정보", "전무는 높은 임원 직위입니다.", "专务是较高的高管职位。", "executive director", "전무 is a senior executive position.", [["pitfall", "회사마다 전무/상무 체계가 다를 수 있어요.", "The 전무/상무 system can vary by company."]]),
      vocab("상무", "常务；执行董事", "职位名", 170, "문화와 정보", "상무님께 보고했어요.", "向常务汇报了。", "managing director", "I reported to the managing director.", [["collocation", "상무님"]]),
      vocab("이사", "理事；董事", "职位名", 170, "문화와 정보", "이사님이 회의를 진행해요.", "理事主持会议。", "director", "The director leads the meeting.", [["pitfall", "이사 can also mean moving house, but here it is a job title.", "이사 也可表示搬家，这里是职位名。"]]),
      vocab("부장", "部长；部门负责人", "职位名", 170, "문화와 정보", "부장님께 보고서를 드렸어요.", "把报告交给部长了。", "department head", "I gave the report to the department head.", [["collocation", "부장님께 보고하다"]]),
      vocab("차장", "次长；副部长级", "职位名", 170, "문화와 정보", "차장님이 업무를 확인했어요.", "次长确认了业务。", "deputy department head", "The deputy department head checked the task.", [["collocation", "차장님"]]),
      vocab("과장", "科长；经理级", "职位名", 170, "문화와 정보", "김정수 과장님이 메일을 보냈어요.", "金正洙科长发了邮件。", "manager", "Manager Kim Jeongsu sent an email.", [["collocation", "과장님"]]),
      vocab("대리", "代理；主任级", "职位名", 170, "문화와 정보", "대리님에게 물어보세요.", "请问代理/主任。", "assistant manager", "Ask the assistant manager.", [["collocation", "대리님"]]),
      vocab("사원", "职员；员工", "职位名", 170, "문화와 정보", "사원으로 입사했어요.", "以职员身份入职了。", "staff member; employee", "I joined the company as a staff member.", [["collocation", "사원으로 입사하다"]]),
      vocab("입사하다", "入职", "动词", 170, "문화와 정보", "회사에 입사한 후에 일을 배웠어요.", "入职后学习了工作。", "to join a company", "After joining the company, I learned the work.", [["collocation", "회사에 입사하다"], ["pitfall", "입사하다 是进入公司工作，不是进入学校。", "입사하다 means joining a company, not entering school."]]),
      vocab("능력을 인정받다", "能力得到认可", "动词短语", 170, "문화와 정보", "능력을 인정받으면 승진을 해요.", "能力得到认可的话会晋升。", "to have one's ability recognized", "If your ability is recognized, you get promoted.", [["collocation", "인정받으면 승진하다"]]),
      vocab("단계적으로 승진하다", "逐步晋升", "动词短语", 170, "문화와 정보", "일정 기간 일을 하고 단계적으로 승진합니다.", "工作一定时间后逐步晋升。", "to be promoted step by step", "People are promoted step by step after working for a certain period.", [["collocation", "승진을 하다"], ["pitfall", "승진하다 是职位上升。", "승진하다 means to move up in position."]]),
      vocab("일정 기간", "一定期间；一段时间", "名词短语", 170, "문화와 정보", "일정 기간 일을 해야 해요.", "必须工作一段时间。", "a certain period", "You need to work for a certain period.", [["collocation", "일정 기간 동안"]]),

      vocab("옮기고", "搬运并；搬的时候", "发音表达", 171, "발음/배운 어휘 확인", "짐 다 옮겼어요?", "行李都搬完了吗？", "moving and", "Did you move all the luggage?", [["form", "옮기고[옴기고]"], ["pitfall", "ㄻ 后接 ㄱ 时这里读 [옴기고]。", "Here 옮기고 is pronounced [옴기고]."]]),
      vocab("읽고", "读并；读的时候", "发音表达", 171, "발음/배운 어휘 확인", "책 읽고 있어요.", "正在读书。", "reading and", "I am reading a book.", [["form", "읽고[일꼬]"], ["pitfall", "읽고 的自然发音是 [일꼬]。", "읽고 is naturally pronounced [일꼬]."]]),
      vocab("앉고", "坐并；坐的时候", "发音表达", 171, "발음/배운 어휘 확인", "학생들은 앞쪽에 앉고 선생님은 뒤쪽에 앉으세요.", "学生坐前面，老师请坐后面。", "sitting and", "Students sit in the front and teachers sit in the back.", [["form", "앉고[안꼬]"], ["pitfall", "앉고 的自然发音是 [안꼬]。", "앉고 is naturally pronounced [안꼬]."]]),
      vocab("앞쪽", "前面；前侧", "名词", 171, "발음/배운 어휘 확인", "학생들은 앞쪽에 앉으세요.", "学生请坐前面。", "front side", "Students, please sit in the front.", [["collocation", "앞쪽에 앉다"]]),
      vocab("뒤쪽", "后面；后侧", "名词", 171, "발음/배운 어휘 확인", "선생님은 뒤쪽에 앉으세요.", "老师请坐后面。", "back side", "Teachers, please sit in the back.", [["collocation", "뒤쪽에 앉다"]])
    ],
    dialogues: [
      {
        id: "dialogue-grammar-01",
        title: "무역 회사에서 번역 일을 하고 있어요",
        focus: "V-고 있다",
        page: 165,
        source: "문법 1",
        sceneZh: "说明现在正在做的工作、居住地或持续状态。",
        translations: {
          en: {
            scene: "Describe current work, place of residence, or an ongoing state.",
            learningPoints: [
              "V-고 있다 can mean an action is happening now.",
              "With work or residence, it can describe an ongoing current state.",
              "Use 에서 for the place where work or living happens."
            ]
          }
        },
        learningPoints: [
          "V-고 있다 可以表示动作正在进行。",
          "和工作、居住一起用时，也可以表示目前持续的状态。",
          "工作或居住的地点常用 에서。"
        ],
        lines: [
          { speaker: "가", ko: "한국에서 무슨 일을 하세요?", zh: "你在韩国做什么工作？", guide: "무슨 일 问工作内容。", translations: { en: { translation: "What work do you do in Korea?", guide: "무슨 일 asks about work." } } },
          { speaker: "나", ko: "저는 무역 회사에서 번역 일을 하고 있어요.", zh: "我在贸易公司做翻译工作。", guide: "번역 일을 하고 있어요 表示目前从事翻译工作。", translations: { en: { translation: "I do translation work at a trading company.", guide: "번역 일을 하고 있어요 describes current work." } } },
          { speaker: "가", ko: "지금 어디에서 살고 있어요?", zh: "现在住在哪里？", guide: "살고 있어요 表示目前居住。", translations: { en: { translation: "Where are you living now?", guide: "살고 있어요 describes current residence." } } },
          { speaker: "나", ko: "저는 지금 울산에서 살고 있어요.", zh: "我现在住在蔚山。", guide: "울산에서 用 에서 标记居住地点。", translations: { en: { translation: "I am living in Ulsan now.", guide: "울산에서 marks the place of residence." } } },
          { speaker: "가", ko: "초등학교에서 무엇을 하고 있어요?", zh: "你在小学做什么？", guide: "무엇을 하고 있어요? 问正在做的事。", translations: { en: { translation: "What are you doing at the elementary school?", guide: "무엇을 하고 있어요? asks what someone is doing." } } },
          { speaker: "나", ko: "학생들에게 영어를 가르치고 있어요.", zh: "正在教学生英语。", guide: "학생들에게 表示教的对象。", translations: { en: { translation: "I am teaching English to students.", guide: "학생들에게 marks the people being taught." } } }
        ],
        roleplay: {
          promptZh: "用“회사/공장/학교 + V-고 있어요”说自己现在在哪里做什么。",
          promptKo: "회사/공장/학교와 V-고 있어요를 사용해서 지금 하는 일을 말해 보세요.",
          translations: { en: { prompt: "Use 회사/공장/학교 plus V-고 있어요 to say what you are doing now." } },
          cues: ["사무실에서 서류를 작성하다", "공장에서 물건을 만들다", "학교에서 베트남어를 가르치다"]
        }
      },
      {
        id: "dialogue-grammar-02",
        title: "번역한 서류 좀 가져오세요",
        focus: "V-(으)ㄴ N",
        page: 167,
        source: "문법 2",
        sceneZh: "用已经发生的动作修饰后面的名词。",
        translations: {
          en: {
            scene: "Modify a noun with an action that has already happened.",
            learningPoints: [
              "V-(으)ㄴ comes before a noun.",
              "하다 becomes 한, and 오다 becomes 온.",
              "Use this to identify documents, packages, photos, or people."
            ]
          }
        },
        learningPoints: [
          "V-(으)ㄴ 放在名词前面。",
          "하다 变 한，오다 变 온。",
          "可以用来说明文件、快递、照片或人是谁/哪一个。"
        ],
        lines: [
          { speaker: "가", ko: "안젤라 씨, 번역한 서류 좀 가져오세요.", zh: "Angela，请把翻译好的文件拿来。", guide: "번역한 修饰 서류。", translations: { en: { translation: "Angela, please bring the translated documents.", guide: "번역한 modifies 서류." } } },
          { speaker: "나", ko: "네, 알겠습니다.", zh: "好的，知道了。", guide: "职场中常用的礼貌回答。", translations: { en: { translation: "Yes, understood.", guide: "A polite workplace response." } } },
          { speaker: "가", ko: "아까 도착한 택배를 서쪽으로 옮겨 주세요.", zh: "请把刚才到的快递搬到西边。", guide: "도착한 修饰 택배。", translations: { en: { translation: "Please move the package that arrived earlier to the west side.", guide: "도착한 modifies 택배." } } },
          { speaker: "나", ko: "네, 지금 옮기겠습니다.", zh: "好的，我现在搬。", guide: "옮기겠습니다 比 옮길게요 更正式。", translations: { en: { translation: "Yes, I will move it now.", guide: "옮기겠습니다 is more formal than 옮길게요." } } },
          { speaker: "가", ko: "이건 고향에 갔을 때 찍은 사진이에요.", zh: "这是回故乡时拍的照片。", guide: "찍은 사진 = 拍过的照片。", translations: { en: { translation: "This is a photo I took when I went to my hometown.", guide: "찍은 사진 means a photo that was taken." } } },
          { speaker: "나", ko: "프랑스에서 온 아나이스입니다.", zh: "我是从法国来的 Anais。", guide: "온 是 오다 的过去修饰形。", translations: { en: { translation: "I am Anais from France.", guide: "온 is the past noun-modifying form of 오다." } } }
        ],
        roleplay: {
          promptZh: "把“판매하다/작성하다/받다”变成修饰名词的形式，说是谁做了那件事。",
          promptKo: "판매하다/작성하다/받다를 V-(으)ㄴ으로 바꿔서 누가 그 일을 했는지 말해 보세요.",
          translations: { en: { prompt: "Change 판매하다/작성하다/받다 into V-(으)ㄴ forms and say who did each task." } },
          cues: ["제품을 판매한 사람", "보고서를 작성한 사람", "문의 전화를 받은 사람"]
        }
      },
      {
        id: "dialogue-speaking-01",
        title: "물건들을 옮기고 있습니다",
        focus: "말하기와 듣기",
        page: 168,
        source: "말하기와 듣기",
        sceneZh: "现场负责人确认工作进度并提醒安全和收尾事项。",
        translations: {
          en: {
            scene: "A team leader checks work progress and reminds a worker about safety and closing tasks.",
            learningPoints: [
              "Use -고 있습니다 for a formal report of what you are doing.",
              "잊지 말고 꼭 쓰세요 is a strong but polite reminder.",
              "일이 다 끝나면 introduces what to do after the work is finished."
            ]
          }
        },
        learningPoints: [
          "-고 있습니다 比 -고 있어요 更正式，适合汇报工作。",
          "잊지 말고 꼭 쓰세요 是提醒对方不要忘记并一定要做。",
          "일이 다 끝나면 后面接收尾动作。"
        ],
        lines: [
          { speaker: "반장님", ko: "라흐만 씨, 오늘도 안전모 잊지 말고 꼭 쓰세요.", zh: "Rahman，今天也不要忘了安全帽，一定要戴。", guide: "안전모를 쓰다 = 戴安全帽。", translations: { en: { translation: "Rahman, do not forget your safety helmet today. Make sure to wear it.", guide: "안전모를 쓰다 means to wear a safety helmet." } } },
          { speaker: "반장님", ko: "지금 무슨 일을 하고 있어요?", zh: "现在正在做什么工作？", guide: "무슨 일을 하고 있어요? 问当前任务。", translations: { en: { translation: "What work are you doing now?", guide: "무슨 일을 하고 있어요? asks about the current task." } } },
          { speaker: "라흐만", ko: "물건들을 옮기고 있습니다.", zh: "正在搬东西。", guide: "-고 있습니다 用于正式汇报。", translations: { en: { translation: "I am moving the items.", guide: "-고 있습니다 is formal and suitable for reporting." } } },
          { speaker: "라흐만", ko: "그런데 오늘 작업은 얼마나 해야 돼요?", zh: "不过今天的作业要做到多久？", guide: "얼마나 해야 돼요? 问时间或程度。", translations: { en: { translation: "By the way, how long do we have to work today?", guide: "얼마나 해야 돼요? asks about time or amount." } } },
          { speaker: "반장님", ko: "3시까지요.", zh: "到3点。", guide: "까지 表示截止点。", translations: { en: { translation: "Until 3 o'clock.", guide: "까지 marks the endpoint." } } },
          { speaker: "반장님", ko: "일이 다 끝나면 기계 전원 끄는 거 잊지 마세요.", zh: "工作都结束后，不要忘了关机器电源。", guide: "끄는 거 名词化，指“关电源这件事”。", translations: { en: { translation: "When all the work is finished, do not forget to turn off the machine power.", guide: "끄는 거 nominalizes the action of turning it off." } } }
        ],
        roleplay: {
          promptZh: "替换收尾动作练习：기계 전원을 끄다 / 깨끗하게 정리하다。",
          promptKo: "마무리 일을 바꿔서 말해 보세요: 기계 전원을 끄다 / 깨끗하게 정리하다.",
          translations: { en: { prompt: "Practice by changing the closing task: turn off the machine power / clean up neatly." } },
          cues: ["기계 전원을 끄다", "깨끗하게 정리하다"]
        }
      },
      {
        id: "dialogue-reading-01",
        title: "업무 메일 확인했습니다",
        focus: "읽기와 쓰기",
        page: 169,
        source: "읽기와 쓰기",
        sceneZh: "阅读上司发来的工作邮件，确认截止时间和要做的任务。",
        translations: {
          en: {
            scene: "Read a workplace email from a manager and identify the deadline and assigned tasks.",
            learningPoints: [
              "First find the sender, subject, attachment, deadline, and requested tasks.",
              "한국어로 번역하다 means to translate into Korean.",
              "통역하다 is oral interpretation during a meeting."
            ]
          }
        },
        learningPoints: [
          "先看 보낸 사람、제목、첨부파일、截止时间和任务。",
          "한국어로 번역하다 表示翻译成韩语。",
          "통역하다 是会议中口头翻译。"
        ],
        lines: [
          { speaker: "보낸 사람", ko: "김정수 과장", zh: "金正洙科长", guide: "과장 是公司职位。", translations: { en: { translation: "Manager Kim Jeongsu", guide: "과장 is a company title." } } },
          { speaker: "제목", ko: "안젤라 업무", zh: "Angela 的业务", guide: "메일 제목说明主题。", translations: { en: { translation: "Angela's tasks", guide: "The email subject states the topic." } } },
          { speaker: "첨부파일", ko: "제품 구매 확인서", zh: "产品购买确认书", guide: "첨부파일 是邮件附件。", translations: { en: { translation: "Product purchase confirmation form", guide: "첨부파일 means email attachment." } } },
          { speaker: "메일", ko: "오늘 필리핀에서 온 계약서를 읽고, 한국어로 번역 부탁합니다.", zh: "请今天阅读从菲律宾来的合同，并翻译成韩语。", guide: "필리핀에서 온 계약서 = 从菲律宾来的合同。", translations: { en: { translation: "Please read the contract from the Philippines today and translate it into Korean.", guide: "필리핀에서 온 계약서 means a contract from the Philippines." } } },
          { speaker: "메일", ko: "내일(금) 3시까지 끝내야 됩니다.", zh: "必须在明天周五3点前完成。", guide: "3시까지 是截止时间。", translations: { en: { translation: "It must be finished by 3 p.m. tomorrow, Friday.", guide: "3시까지 is the deadline." } } },
          { speaker: "메일", ko: "데이비드 사장이 회의하러 우리 회사를 방문할 겁니다.", zh: "David 社长会来我们公司开会。", guide: "회의하러 表示来访目的。", translations: { en: { translation: "President David will visit our company for a meeting.", guide: "회의하러 states the purpose of the visit." } } },
          { speaker: "메일", ko: "중요한 손님이니까 친절하게 회사 안내 좀 부탁합니다.", zh: "因为是重要客人，请亲切地做公司介绍。", guide: "-니까 后面接请求。", translations: { en: { translation: "Since he is an important guest, please kindly show him around the company.", guide: "-니까 is followed by a request." } } },
          { speaker: "메일", ko: "그리고 회의 때 통역도 부탁합니다.", zh: "另外会议时也拜托你口译。", guide: "통역 是口头翻译。", translations: { en: { translation: "And please interpret during the meeting as well.", guide: "통역 means oral interpretation." } } }
        ],
        roleplay: {
          promptZh: "根据邮件回答：安젤라 해야 하는 일、截止时间、客人来访目的。",
          promptKo: "메일을 읽고 안젤라 씨가 해야 하는 일, 마감 시간, 손님 방문 목적을 말해 보세요.",
          translations: { en: { prompt: "Read the email and state Angela's tasks, the deadline, and the visitor's purpose." } },
          cues: [
            "안젤라 씨는 계약서를 읽고 한국어로 번역해야 해요.",
            "내일 금요일 3시까지 끝내야 돼요.",
            "데이비드 사장은 회의하러 방문할 거예요."
          ]
        }
      },
      {
        id: "dialogue-pronunciation-01",
        title: "옮기고[옴기고]",
        focus: "발음",
        page: 171,
        source: "발음/배운 어휘 확인",
        sceneZh: "练习 옮기고、읽고、앉고 的自然发音。",
        translations: {
          en: {
            scene: "Practice the natural pronunciation of 옮기고, 읽고, and 앉고.",
            learningPoints: [
              "옮기고 is pronounced [옴기고].",
              "읽고 is pronounced [일꼬].",
              "앉고 is pronounced [안꼬]."
            ]
          }
        },
        learningPoints: [
          "옮기고 读作 [옴기고]。",
          "읽고 读作 [일꼬]。",
          "앉고 读作 [안꼬]。"
        ],
        lines: [
          { speaker: "발음", ko: "옮기고[옴기고]", zh: "옮기고 的发音：[옴기고]", guide: "跟读时注意 ㄻ 的实际读音。", translations: { en: { translation: "옮기고 is pronounced [옴기고].", guide: "Pay attention to the actual sound of ㄻ." } } },
          { speaker: "가", ko: "짐 다 옮겼어요?", zh: "行李都搬完了吗？", guide: "옮겼어요 也注意 ㄻ 发音。", translations: { en: { translation: "Did you move all the luggage?", guide: "Also watch the ㄻ sound in 옮겼어요." } } },
          { speaker: "발음", ko: "읽고[일꼬]", zh: "읽고 的发音：[일꼬]", guide: "읽고 中 ㄺ 后接 ㄱ 时读紧。", translations: { en: { translation: "읽고 is pronounced [일꼬].", guide: "ㄺ followed by ㄱ is pronounced tightly here." } } },
          { speaker: "나", ko: "책 읽고 있어요.", zh: "正在读书。", guide: "읽고 있어요 是本课 V-고 있다 句型。", translations: { en: { translation: "I am reading a book.", guide: "읽고 있어요 uses the V-고 있다 pattern." } } },
          { speaker: "발음", ko: "앉고[안꼬]", zh: "앉고 的发音：[안꼬]", guide: "앉고 中 ㅈ 不单独发出来。", translations: { en: { translation: "앉고 is pronounced [안꼬].", guide: "The ㅈ in 앉고 is not pronounced separately." } } },
          { speaker: "가", ko: "학생들은 앞쪽에 앉고 선생님은 뒤쪽에 앉으세요.", zh: "学生坐前面，老师请坐后面。", guide: "앞쪽/뒤쪽 是位置词。", translations: { en: { translation: "Students sit in the front and teachers, please sit in the back.", guide: "앞쪽 and 뒤쪽 are location words." } } },
          { speaker: "나", ko: "네, 알겠습니다.", zh: "好的，知道了。", guide: "课堂/职场都可用的礼貌回应。", translations: { en: { translation: "Yes, understood.", guide: "A polite response usable in class or at work." } } }
        ],
        roleplay: {
          promptZh: "跟读三组发音，再用 읽고 있어요 / 옮기고 있습니다 各说一句。",
          promptKo: "세 발음을 따라 읽고 읽고 있어요 / 옮기고 있습니다로 한 문장씩 말해 보세요.",
          translations: { en: { prompt: "Repeat the three pronunciation items, then make one sentence each with 읽고 있어요 and 옮기고 있습니다." } },
          cues: ["책 읽고 있어요.", "물건들을 옮기고 있습니다."]
        }
      }
    ],
    culture: {
      title: "한국 회사의 직위",
      titleZh: "韩国公司的职位",
      page: 170,
      source: "문화와 정보",
      summaryZh: "文章介绍韩国公司常见职位顺序，以及从 사원 入职后通过工作能力逐步晋升的情况。",
      translations: {
        en: {
          title: "Job Titles in Korean Companies",
          summary: "This article explains common job-title order in Korean companies and how employees may be promoted step by step after joining as staff members."
        }
      },
      paragraphs: [
        {
          ko: "회사에는 여러 직위가 있습니다. 최근에는 직위의 이름이 다양해졌지만 전통적인 직위 명칭은 사장 - 부사장 - 전무 - 상무 - 이사 - 부장 - 차장 - 과장 - 대리 - 사원입니다.",
          zh: "公司里有多种职位。最近职位名称变得多样化，不过传统的职位名称是社长、副社长、专务、常务、理事、部长、次长、科长、代理、职员。",
          guide: "직위 是公司内职位/级别；从 사장 到 사원 是从高到低列出的传统顺序。",
          translations: {
            en: {
              translation: "Companies have various job positions. Recently, job-title names have become more diverse, but traditional job titles are president, vice president, executive director, managing director, director, department head, deputy department head, manager, assistant manager, and staff member.",
              guide: "직위 means a position or rank in a company; the list goes from higher to lower traditional ranks."
            }
          }
        },
        {
          ko: "대체로 사원으로 입사한 후에 일정 기간 일을 하고 능력을 인정받으면 단계적으로 승진을 합니다.",
          zh: "一般来说，以职员身份入职后，工作一定时间并且能力得到认可，就会逐步晋升。",
          guide: "입사하다 是入职；능력을 인정받다 是能力被认可；승진하다 是晋升。",
          translations: {
            en: {
              translation: "In general, after joining a company as a staff member, people work for a certain period and, if their ability is recognized, they are promoted step by step.",
              guide: "입사하다 means to join a company, 능력을 인정받다 means to have one's ability recognized, and 승진하다 means to be promoted."
            }
          }
        }
      ],
      keyTerms: [
        { ko: "직위", zh: "职位", en: "job position" },
        { ko: "사장", zh: "社长", en: "president" },
        { ko: "부사장", zh: "副社长", en: "vice president" },
        { ko: "전무", zh: "专务", en: "executive director" },
        { ko: "상무", zh: "常务", en: "managing director" },
        { ko: "이사", zh: "理事；董事", en: "director" },
        { ko: "부장", zh: "部长", en: "department head" },
        { ko: "차장", zh: "次长", en: "deputy department head" },
        { ko: "과장", zh: "科长；经理级", en: "manager" },
        { ko: "대리", zh: "代理；主任级", en: "assistant manager" },
        { ko: "사원", zh: "职员", en: "staff member" },
        { ko: "승진", zh: "晋升", en: "promotion" }
      ],
      questions: [
        {
          q: "한국 회사에는 어떤 직위가 있어요?",
          qZh: "韩国公司里有哪些职位？",
          a: "사장, 부사장, 전무, 상무, 이사, 부장, 차장, 과장, 대리, 사원 등이 있어요.",
          aZh: "有社长、副社长、专务、常务、理事、部长、次长、科长、代理、职员等。",
          translations: {
            en: {
              question: "What job titles are there in Korean companies?",
              answer: "There are titles such as president, vice president, executive director, managing director, director, department head, deputy department head, manager, assistant manager, and staff member."
            }
          }
        },
        {
          q: "과장보다 높은 직위는 무엇이에요?",
          qZh: "比科长高的职位有哪些？",
          a: "차장, 부장, 이사, 상무, 전무, 부사장, 사장 등이 있어요.",
          aZh: "有次长、部长、理事、常务、专务、副社长、社长等。",
          translations: {
            en: {
              question: "Which positions are higher than 과장?",
              answer: "차장, 부장, 이사, 상무, 전무, 부사장, and 사장 are higher positions."
            }
          }
        },
        {
          q: "여러분 나라의 회사에는 어떤 직위가 있어요?",
          qZh: "你们国家的公司里有哪些职位？",
          a: "우리 나라 회사에는 사장, 부장, 팀장, 직원 같은 직위가 있어요.",
          aZh: "我们国家的公司有社长、部长、组长、职员这样的职位。",
          translations: {
            en: {
              question: "What job titles do companies in your country have?",
              answer: "Companies in my country have titles such as president, department head, team leader, and staff member."
            }
          }
        }
      ]
    },
    practice: [
      {
        type: "translation",
        title: "中文转韩文",
        prompt: "我在贸易公司做翻译工作。",
        answer: "무역 회사에서 번역 일을 하고 있어요.",
        hint: "用 V-고 있다 表示目前从事的工作。",
        translations: {
          en: {
            type: "Translate to Korean",
            title: "Translate to Korean",
            prompt: "I do translation work at a trading company.",
            answer: "무역 회사에서 번역 일을 하고 있어요.",
            hint: "Use V-고 있다 to describe current work."
          }
        }
      },
      {
        type: "pattern",
        title: "V-고 있다",
        prompt: "用“지금 / 서류를 번역하다”造句。",
        answer: "저는 지금 서류를 번역하고 있어요.",
        hint: "번역하다 + -고 있다 -> 번역하고 있어요.",
        translations: {
          en: {
            type: "Pattern",
            title: "V-고 있다",
            prompt: "Make a sentence with “now / translate documents.”",
            answer: "저는 지금 서류를 번역하고 있어요.",
            hint: "번역하다 + -고 있다 becomes 번역하고 있어요."
          }
        }
      },
      {
        type: "pattern",
        title: "V-(으)ㄴ N",
        prompt: "用“필리핀에서 오다 / 계약서”造句。",
        answer: "필리핀에서 온 계약서를 읽고 한국어로 번역해야 돼요.",
        hint: "오다 的过去修饰形是 온。",
        translations: {
          en: {
            type: "Pattern",
            title: "V-(으)ㄴ N",
            prompt: "Make a sentence with “come from the Philippines / contract.”",
            answer: "필리핀에서 온 계약서를 읽고 한국어로 번역해야 돼요.",
            hint: "The past noun-modifying form of 오다 is 온."
          }
        }
      },
      {
        type: "reading",
        title: "邮件阅读",
        prompt: "과장님이 시킨 일은 언제까지 해야 돼요?",
        answer: "내일 금요일 3시까지 끝내야 돼요.",
        hint: "메일에서 마감 시간은 내일(금) 3시까지입니다.",
        translations: {
          en: {
            type: "Reading",
            title: "Email reading",
            prompt: "By when must the assigned task be finished?",
            answer: "내일 금요일 3시까지 끝내야 돼요.",
            hint: "The email says the deadline is by 3 p.m. tomorrow, Friday."
          }
        }
      },
      {
        type: "culture",
        title: "文化理解",
        prompt: "과장보다 높은 직위는 무엇이에요?",
        answer: "차장, 부장, 이사, 상무, 전무, 부사장, 사장 등이 있어요.",
        hint: "文化文章的职位顺序是从高到低排列的。",
        translations: {
          en: {
            type: "Culture",
            title: "Culture check",
            prompt: "Which positions are higher than 과장?",
            answer: "차장, 부장, 이사, 상무, 전무, 부사장, 사장 등이 있어요.",
            hint: "The culture article lists job titles from higher to lower rank."
          }
        }
      },
      {
        type: "speaking",
        title: "职场汇报",
        prompt: "用韩语说：我现在正在搬东西。工作结束后会关机器电源。",
        answer: "저는 지금 물건들을 옮기고 있습니다. 일이 다 끝나면 기계 전원을 끄겠습니다.",
        hint: "正式汇报可以用 -고 있습니다 和 -겠습니다。",
        translations: {
          en: {
            type: "Speaking",
            title: "Work report",
            prompt: "Say in Korean: I am moving items now. When the work is finished, I will turn off the machine power.",
            answer: "저는 지금 물건들을 옮기고 있습니다. 일이 다 끝나면 기계 전원을 끄겠습니다.",
            hint: "For a formal report, use -고 있습니다 and -겠습니다."
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
  window.lessonGuideL2LessonChunks["l2-15"] = lesson;
})();
