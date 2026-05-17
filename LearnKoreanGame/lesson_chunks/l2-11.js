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
    "形容词短语": "adjective phrase",
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
    id: "l2-11",
    number: 11,
    titleKo: "보름달을 보면서 소원을 빌어요",
    titleZh: "一边看圆月一边许愿",
    pages: "122-131",
    status: "refined",
    progress: {
      vocabulary: "refined-p122-p131",
      dialogue: "refined-p125-p131",
      culture: "reviewed-p130",
      practice: "refined-p125-p130"
    },
    vocabularySources: [
      {
        page: 122,
        label: "단원 제목",
        note: "课题句、보름달 和 소원 主题"
      },
      {
        page: 124,
        label: "어휘와 문법 1",
        note: "节日活动和传统游戏词汇"
      },
      {
        page: 125,
        label: "문법 1",
        note: "A-게 形容词副词化表达"
      },
      {
        page: 126,
        label: "어휘와 문법 2",
        note: "설날、추석 和节日习俗词汇"
      },
      {
        page: 127,
        label: "문법 2",
        note: "V-(으)면서 同时动作表达"
      },
      {
        page: 128,
        label: "말하기와 듣기",
        note: "설 연휴 对话和听力问题"
      },
      {
        page: 129,
        label: "읽기와 쓰기",
        note: "韩国节日阅读和故乡节日写作"
      },
      {
        page: 130,
        label: "문화와 정보",
        note: "韩国传统节日文化文章"
      },
      {
        page: 131,
        label: "발음/배운 어휘 확인",
        note: "发音练习和本课词汇复习"
      }
    ],
    goals: [
      "能够说明 명절、설날、추석 中常见的家庭活动和传统游戏。",
      "能够用 A-게 表示动作进行的方式或状态，如 재미있게、짧게、따뜻하게。",
      "能够用 V-(으)면서 表示同一主语同时做两个动作。",
      "能够读懂韩国节日文化介绍，并用韩语简单介绍自己故乡的节日。",
      "能够在节日话题中自然使用 보름달을 보면서 소원을 빌다、차례를 지내다、세배를 하다 等表达。"
    ],
    grammar: [
      {
        pattern: "A-게",
        zh: "……地；以……的方式",
        guide: "把形容词接 -게 后放在动词前，说明动作进行时的状态、程度或方式。",
        examples: [
          {
            ko: "명절에는 가족들과 모여서 재미있게 놀아요.",
            zh: "节日时和家人聚在一起开心地玩。"
          },
          {
            ko: "날씨가 더우니까 좀 짧게 잘라 주세요.",
            zh: "天气热，请剪短一点。"
          },
          {
            ko: "밤에는 추우니까 따뜻하게 입어야 해요.",
            zh: "晚上冷，所以要穿暖和。"
          }
        ],
        translations: {
          en: {
            meaning: "in a ... way; ...-ly",
            guide: "Attach -게 to an adjective and place it before a verb to describe the manner, state, or degree of the action."
          }
        }
      },
      {
        pattern: "V-(으)면서",
        zh: "一边……一边……",
        guide: "用于同一主语同时做两个动作。前面动词有收音用 -으면서，没有收音用 -면서。",
        examples: [
          {
            ko: "한국 친구하고 보름달을 보면서 소원을 빌었어요.",
            zh: "我和韩国朋友一边看圆月一边许愿了。"
          },
          {
            ko: "고향 음식을 먹으면서 이야기를 했어요.",
            zh: "一边吃家乡菜一边聊天了。"
          },
          {
            ko: "한국 회사에서 일하면서 한국어도 배우고 있어요.",
            zh: "我一边在韩国公司工作，一边也在学韩语。"
          }
        ],
        translations: {
          en: {
            meaning: "while doing ...; doing ... at the same time",
            guide: "Use V-(으)면서 when the same subject does two actions at the same time. Use -으면서 after a final consonant and -면서 after a vowel."
          }
        }
      }
    ],
    vocabulary: [
      vocab("보름달", "圆月；满月", "名词", 122, "단원 제목", "보름달을 보면서 소원을 빌어요.", "一边看圆月一边许愿。", "full moon", "I make a wish while looking at the full moon.", [["collocation", "보름달을 보다"], ["collocation", "보름달이 뜨다"], ["pitfall", "发音常读成 [보름딸]。", "It is commonly pronounced [보름딸]."]]),
      vocab("소원", "愿望", "名词", 122, "단원 제목", "소원을 빌어요.", "许愿。", "wish", "I make a wish.", [["collocation", "소원을 빌다"], ["collocation", "소원이 있다"]]),
      vocab("소원을 빌다", "许愿；祈愿", "动词短语", 122, "단원 제목", "보름달을 보면서 소원을 빌었어요.", "一边看圆月一边许了愿。", "to make a wish", "I made a wish while looking at the full moon.", [["collocation", "보름달을 보면서 소원을 빌다"], ["form", "빌다 + -었어요 -> 빌었어요", "빌다 + -었어요 -> 빌었어요"]]),
      vocab("명절", "传统节日；佳节", "名词", 122, "단원 제목", "명절에 가족이 모두 모여요.", "节日时家人都会聚在一起。", "traditional holiday", "The family all gathers during the holiday.", [["collocation", "명절을 보내다"], ["collocation", "명절 음식"], ["pitfall", "일반적인 휴일보다 설날、추석 같은传统节日感更强。", "It usually refers to traditional holidays such as Seollal or Chuseok, not any day off."]]),
      vocab("연휴", "连休；假期", "名词", 122, "단원 제목", "내일부터 설 연휴네요.", "从明天开始就是春节连休了。", "long holiday break", "The Seollal holiday break starts tomorrow.", [["collocation", "설 연휴"], ["collocation", "연휴를 보내다"]]),

      vocab("고향에 내려가다", "回故乡；回老家", "动词短语", 124, "어휘와 문법 1", "명절에 고향에 내려가요.", "节日时回老家。", "to go down to one's hometown", "I go to my hometown during the holiday.", [["collocation", "명절에 고향에 내려가다"], ["pitfall", "韩国语中从首都/现在所在地回地方常说 내려가다。", "In Korean, 내려가다 is often used for going back to a regional hometown."]]),
      vocab("친척", "亲戚", "名词", 124, "어휘와 문법 1", "명절에 친척을 만나요.", "节日时见亲戚。", "relative", "I meet relatives during the holiday.", [["collocation", "친척을 만나다"], ["collocation", "친척들이 모이다"]]),
      vocab("가족이 모이다", "家人聚在一起", "动词短语", 124, "어휘와 문법 1", "명절에 가족이 모여요.", "节日时家人聚在一起。", "family gathers", "The family gathers during the holiday.", [["collocation", "명절에 가족이 모이다"], ["form", "모이다 + -어요 -> 모여요", "모이다 + -어요 -> 모여요"]]),
      vocab("서로", "互相；彼此", "副词", 124, "어휘와 문법 1", "서로 안부를 물어요.", "互相问候近况。", "each other; mutually", "They ask each other how they have been.", [["collocation", "서로 안부를 묻다"], ["collocation", "서로 이야기하다"]]),
      vocab("안부를 묻다", "问候近况", "动词短语", 124, "어휘와 문법 1", "친척들이 서로 안부를 물어요.", "亲戚们互相问候近况。", "to ask how someone has been", "Relatives ask each other how they have been.", [["collocation", "서로 안부를 묻다"], ["form", "묻다 + -어요 -> 물어요", "묻다 + -어요 -> 물어요"]]),
      vocab("성묘를 하다", "扫墓", "动词短语", 124, "어휘와 문법 1", "명절에 성묘를 해요.", "节日时扫墓。", "to visit ancestors' graves", "People visit ancestors' graves during the holiday.", [["collocation", "명절에 성묘를 하다"], ["pitfall", "성묘는祖先墓地参拜，不是一般的 산책。", "성묘 means visiting ancestors' graves, not just taking a walk."]]),
      vocab("차례를 지내다", "举行祭礼；祭祖", "动词短语", 124, "어휘와 문법 1", "아침에 차례를 지내요.", "早上举行祭祖仪式。", "to hold an ancestral memorial rite", "We hold an ancestral rite in the morning.", [["collocation", "설날에 차례를 지내다"], ["collocation", "추석에 차례를 지내다"]]),
      vocab("윷놀이", "掷柶游戏；韩国传统棋盘游戏", "名词", 124, "어휘와 문법 1", "가족들과 윷놀이를 해요.", "和家人玩掷柶游戏。", "yutnori; Korean traditional board game", "I play yutnori with my family.", [["collocation", "윷놀이를 하다"], ["pitfall", "发音常读成 [윤노리]。", "It is commonly pronounced [윤노리]."]]),
      vocab("연날리기", "放风筝", "名词", 124, "어휘와 문법 1", "아이들이 연날리기를 해요.", "孩子们放风筝。", "kite flying", "Children fly kites.", [["collocation", "연날리기를 하다"], ["collocation", "연을 날리다"]]),
      vocab("제기차기", "踢毽子", "名词", 124, "어휘와 문법 1", "명절에 제기차기를 해요.", "节日时踢毽子。", "jegichagi; Korean shuttlecock kicking", "People play jegichagi during the holiday.", [["collocation", "제기차기를 하다"], ["pitfall", "차기 来自 차다，意思是“踢”。", "차기 comes from 차다, meaning to kick."]]),
      vocab("맛있는 음식", "好吃的食物", "名词短语", 124, "어휘와 문법 1", "명절에 맛있는 음식을 먹어요.", "节日时吃好吃的食物。", "delicious food", "People eat delicious food during the holiday.", [["collocation", "맛있는 음식을 먹다"], ["form", "맛있다 + -는 -> 맛있는", "맛있다 + -는 -> 맛있는"]]),
      vocab("재미있는 놀이", "有趣的游戏", "名词短语", 124, "어휘와 문법 1", "재미있는 놀이도 해요.", "也玩有趣的游戏。", "fun games", "We also play fun games.", [["collocation", "놀이를 하다"], ["form", "재미있다 + -는 -> 재미있는", "재미있다 + -는 -> 재미있는"]]),

      vocab("맛있게", "好吃地；美味地", "副词", 125, "문법 1", "맛있게 먹어라.", "好好吃吧。", "deliciously; enjoyably", "Eat well/enjoy it.", [["form", "맛있다 + -게 -> 맛있게", "맛있다 + -게 -> 맛있게"], ["collocation", "맛있게 먹다"]]),
      vocab("짧게", "短一点；简短地", "副词", 125, "문법 1", "좀 짧게 잘라 주세요.", "请剪短一点。", "short; briefly", "Please cut it a little short.", [["form", "짧다 + -게 -> 짧게", "짧다 + -게 -> 짧게"], ["pitfall", "发音是 [짤께]。", "It is pronounced [짤께]."]]),
      vocab("따뜻하게", "暖和地", "副词", 125, "문법 1", "밤에는 따뜻하게 입어야 해요.", "晚上要穿暖和。", "warmly", "You should dress warmly at night.", [["form", "따뜻하다 + -게 -> 따뜻하게", "따뜻하다 + -게 -> 따뜻하게"], ["collocation", "따뜻하게 입다"]]),
      vocab("재미있게", "开心地；有趣地", "副词", 125, "문법 1", "가족들과 재미있게 놀아요.", "和家人开心地玩。", "in a fun way", "I have fun with my family.", [["form", "재미있다 + -게 -> 재미있게", "재미있다 + -게 -> 재미있게"], ["collocation", "재미있게 놀다"]]),
      vocab("밝다", "明亮", "形容词", 125, "문법 1", "보름달이 밝았어요.", "圆月很亮。", "to be bright", "The full moon was bright.", [["form", "밝다 + -았어요 -> 밝았어요", "밝다 + -았어요 -> 밝았어요"], ["pitfall", "밝았지요 的自然发音是 [발갇찌요]。", "밝았지요 is naturally pronounced [발갇찌요]."]]),
      vocab("늦게 일어나다", "晚起；起得晚", "动词短语", 125, "문법 1", "주말에 보통 늦게 일어나요.", "周末通常起得晚。", "to wake up late", "I usually wake up late on weekends.", [["collocation", "늦게 일어나다"], ["pitfall", "일어나다 是起床/起来，不是“发生”。", "일어나다 here means to wake up/get up, not to happen."]]),
      vocab("생활 습관", "生活习惯", "名词短语", 125, "문법 1", "생활 습관을 이야기해 보세요.", "请说说生活习惯。", "daily habit; lifestyle habit", "Talk about your daily habits.", [["collocation", "생활 습관을 말하다"], ["collocation", "생활 습관이 좋다"]]),
      vocab("지난 명절", "上一个节日；过去的节日", "名词短语", 125, "문법 1", "지난 명절에 무엇을 했어요?", "上个节日做了什么？", "last holiday", "What did you do during the last holiday?", [["collocation", "지난 명절에"], ["pitfall", "지난 后面接时间名词，表示“上一个/过去的”。", "지난 before a time noun means last/previous."]]),
      vocab("초대하다", "邀请", "动词", 125, "문법 1", "고향 친구들을 초대했어요.", "邀请了家乡朋友。", "to invite", "I invited hometown friends.", [["collocation", "친구를 초대하다"], ["form", "초대하다 + -했어요 -> 초대했어요", "초대하다 + -했어요 -> 초대했어요"]]),
      vocab("고향 친구", "家乡朋友", "名词短语", 125, "문법 1", "고향 친구들을 초대했어요.", "邀请了家乡朋友。", "hometown friend", "I invited hometown friends.", [["collocation", "고향 친구들을 초대하다"], ["collocation", "고향 친구를 만나다"]]),

      vocab("설날(음력 1월 1일)", "春节；农历正月初一", "名词", 126, "어휘와 문법 2", "설날에는 세배를 해요.", "春节时拜年。", "Seollal; Lunar New Year's Day", "People bow on Seollal.", [["collocation", "설날에는"], ["pitfall", "설날은 음력 1월 1일입니다。", "Seollal is the first day of the first lunar month."]]),
      vocab("음력", "农历；阴历", "名词", 126, "어휘와 문법 2", "설날은 음력 1월 1일이에요.", "春节是农历正月初一。", "lunar calendar", "Seollal is January 1 on the lunar calendar.", [["collocation", "음력 1월 1일"], ["pitfall", "양력 是公历，음력 是农历。", "양력 means solar/Gregorian calendar; 음력 means lunar calendar."]]),
      vocab("세배를 하다", "拜年；行新年礼", "动词短语", 126, "어휘와 문법 2", "어른들께 세배를 해요.", "向长辈拜年。", "to make a New Year's bow", "We bow to elders for the New Year.", [["collocation", "어른들께 세배를 하다"], ["pitfall", "께 是给长辈/尊敬对象用的助词。", "께 is a respectful particle used for elders or honored people."]]),
      vocab("세배를 받다", "接受拜年", "动词短语", 126, "어휘와 문법 2", "어른들은 세배를 받아요.", "长辈接受拜年。", "to receive New Year's bows", "Elders receive New Year's bows.", [["collocation", "세배를 받다"], ["pitfall", "하다 是拜年，받다 是接受拜年。", "하다 means to give the bow; 받다 means to receive it."]]),
      vocab("떡국", "年糕汤", "名词", 126, "어휘와 문법 2", "설날에는 떡국을 먹어요.", "春节吃年糕汤。", "rice cake soup", "People eat rice cake soup on Seollal.", [["collocation", "떡국을 먹다"], ["collocation", "떡국을 끓이다"], ["pitfall", "发音常读成 [떡꾹]。", "It is commonly pronounced [떡꾹]."]]),
      vocab("추석(음력 8월 15일)", "中秋；秋夕；农历八月十五", "名词", 126, "어휘와 문법 2", "추석에는 송편을 빚어요.", "中秋做松糕。", "Chuseok; Korean harvest holiday", "People make songpyeon on Chuseok.", [["collocation", "추석에는"], ["pitfall", "추석은 음력 8월 15일입니다。", "Chuseok is the 15th day of the eighth lunar month."]]),
      vocab("송편", "松糕", "名词", 126, "어휘와 문법 2", "추석에는 송편을 먹어요.", "中秋吃松糕。", "songpyeon; half-moon rice cake", "People eat songpyeon on Chuseok.", [["collocation", "송편을 먹다"], ["collocation", "송편을 빚다"]]),
      vocab("송편을 빚다", "做松糕", "动词短语", 126, "어휘와 문법 2", "가족들과 송편을 빚어요.", "和家人一起做松糕。", "to make songpyeon", "I make songpyeon with my family.", [["collocation", "추석에 송편을 빚다"], ["pitfall", "빚다 用于揉捏/塑形做食物，不是 빌리다。", "빚다 means to shape or make by hand; do not confuse it with 빌리다."]]),
      vocab("어른들께", "向长辈；给长辈", "名词短语", 126, "어휘와 문법 2", "어른들께 세배를 해요.", "向长辈拜年。", "to elders", "We bow to elders.", [["collocation", "어른들께 세배를 하다"], ["pitfall", "께 比 에게 更尊敬。", "께 is more respectful than 에게."]]),
      vocab("새해 인사", "新年问候", "名词短语", 126, "어휘와 문법 2", "새해 인사를 해요.", "说新年问候。", "New Year's greeting", "I give New Year's greetings.", [["collocation", "새해 인사를 하다"], ["collocation", "새해 복 많이 받으세요"]]),

      vocab("보면서", "一边看一边……", "语法表达", 127, "문법 2", "보름달을 보면서 소원을 빌었어요.", "一边看圆月一边许愿了。", "while looking", "I made a wish while looking at the full moon.", [["form", "보다 + -면서 -> 보면서", "보다 + -면서 -> 보면서"], ["collocation", "N을/를 보면서"]]),
      vocab("먹으면서", "一边吃一边……", "语法表达", 127, "문법 2", "고향 음식을 먹으면서 이야기를 했어요.", "一边吃家乡菜一边聊天了。", "while eating", "We talked while eating hometown food.", [["form", "먹다 + -으면서 -> 먹으면서", "먹다 + -으면서 -> 먹으면서"], ["collocation", "먹으면서 이야기하다"]]),
      vocab("일하면서", "一边工作一边……", "语法表达", 127, "문법 2", "한국 회사에서 일하면서 한국어도 배우고 있어요.", "一边在韩国公司工作，一边也在学韩语。", "while working", "I am learning Korean while working at a Korean company.", [["form", "일하다 + -면서 -> 일하면서", "일하다 + -면서 -> 일하면서"], ["collocation", "일하면서 배우다"]]),
      vocab("부모님 생각을 하다", "想念父母；想到父母", "动词短语", 127, "문법 2", "떡국을 먹으면서 부모님 생각을 했어요.", "一边吃年糕汤一边想起了父母。", "to think of one's parents", "I thought of my parents while eating rice cake soup.", [["collocation", "부모님 생각을 하다"], ["pitfall", "생각하다 也可以拆成 생각을 하다。", "생각하다 can also be expressed as 생각을 하다."]]),
      vocab("이야기를 하다", "聊天；谈话", "动词短语", 127, "문법 2", "음식을 먹으면서 이야기를 해요.", "一边吃东西一边聊天。", "to talk; to have a conversation", "We talk while eating.", [["collocation", "이야기를 하다"], ["collocation", "이야기를 나누다"]]),
      vocab("TV를 보다", "看电视", "动词短语", 127, "문법 2", "TV를 보면서 밥을 먹어요.", "一边看电视一边吃饭。", "to watch TV", "I eat while watching TV.", [["collocation", "TV를 보다"], ["collocation", "TV를 보면서"]]),
      vocab("밥을 먹다", "吃饭", "动词短语", 127, "문법 2", "TV를 보면서 밥을 먹어요.", "一边看电视一边吃饭。", "to eat a meal", "I eat a meal while watching TV.", [["collocation", "밥을 먹다"], ["collocation", "밥을 먹으면서"]]),
      vocab("음악을 듣다", "听音乐", "动词短语", 127, "문법 2", "음악을 들으면서 운동해요.", "一边听音乐一边运动。", "to listen to music", "I exercise while listening to music.", [["collocation", "음악을 듣다"], ["form", "듣다 + -으면서 -> 들으면서", "듣다 + -으면서 -> 들으면서"]]),
      vocab("운동하다", "运动", "动词", 127, "문법 2", "음악을 들으면서 운동해요.", "一边听音乐一边运动。", "to exercise", "I exercise while listening to music.", [["collocation", "운동을 하다"], ["collocation", "운동하다"]]),

      vocab("팀장님", "组长；主管", "名词", 128, "말하기와 듣기", "팀장님은 이번 연휴에 고향에 가세요?", "组长这次假期回故乡吗？", "team leader; manager", "Are you going to your hometown this holiday, team leader?", [["collocation", "팀장님께 묻다"], ["pitfall", "님 表示尊敬。", "님 adds respect."]]),
      vocab("내일 아침", "明天早上", "名词短语", 128, "말하기와 듣기", "내일 아침 일찍 출발할 거예요.", "明天早上会早早出发。", "tomorrow morning", "I will leave early tomorrow morning.", [["collocation", "내일 아침 일찍"], ["collocation", "내일 아침에"]]),
      vocab("일찍 출발하다", "早早出发", "动词短语", 128, "말하기와 듣기", "내일 아침 일찍 출발할 거예요.", "明天早上会早早出发。", "to leave early", "I will leave early tomorrow morning.", [["collocation", "일찍 출발하다"], ["form", "출발하다 + -ㄹ 거예요 -> 출발할 거예요", "출발하다 + -ㄹ 거예요 -> 출발할 거예요"]]),
      vocab("이번 연휴", "这次连休", "名词短语", 128, "말하기와 듣기", "이번 연휴에 어떻게 보낼 거예요?", "这次连休打算怎么过？", "this holiday break", "How will you spend this holiday break?", [["collocation", "이번 연휴에"], ["collocation", "연휴를 보내다"]]),
      vocab("같이 보내다", "一起度过", "动词短语", 128, "말하기와 듣기", "고향 친구들을 초대해서 같이 보낼 거예요.", "会邀请家乡朋友一起过。", "to spend time together", "I will invite hometown friends and spend the time together.", [["collocation", "연휴를 같이 보내다"], ["collocation", "친구와 같이 보내다"]]),
      vocab("보통", "通常；一般", "副词", 128, "말하기와 듣기", "한국 사람들은 보통 뭘 하면서 보내요?", "韩国人通常一边做什么一边度过呢？", "usually; generally", "What do Korean people usually do?", [["collocation", "보통 뭐 해요?"], ["collocation", "보통은"]]),
      vocab("오랜만에", "久违地；隔了很久", "副词", 128, "말하기와 듣기", "오랜만에 친척들이 모여요.", "亲戚们久违地聚在一起。", "after a long time", "Relatives gather after a long time.", [["collocation", "오랜만에 만나다"], ["collocation", "오랜만에 모이다"]]),
      vocab("명절 음식", "节日食物", "名词短语", 128, "말하기와 듣기", "명절 음식을 같이 먹어요.", "一起吃节日食物。", "holiday food", "We eat holiday food together.", [["collocation", "명절 음식을 먹다"], ["collocation", "명절 음식을 만들다"]]),
      vocab("한옥 마을", "韩屋村", "名词短语", 128, "말하기와 듣기", "한옥 마을에 갔어요.", "去了韩屋村。", "hanok village", "I went to a hanok village.", [["collocation", "한옥 마을에 가다"], ["pitfall", "한옥 是韩国传统房屋。", "한옥 means a traditional Korean house."]]),
      vocab("한복을 입어 보다", "试穿韩服", "动词短语", 128, "말하기와 듣기", "한복을 입어 봤어요.", "试穿了韩服。", "to try wearing hanbok", "I tried wearing hanbok.", [["collocation", "한복을 입다"], ["form", "입다 + -어 보다 -> 입어 보다", "입다 + -어 보다 -> 입어 보다"]]),

      vocab("모두 고르다", "全部选出", "动词短语", 129, "읽기와 쓰기", "설날에 하는 것을 모두 고르세요.", "请把春节做的事全部选出来。", "to choose all that apply", "Choose all the things people do on Seollal.", [["collocation", "모두 고르세요"], ["pitfall", "모두 表示所有正确选项，不是只选一个。", "모두 means all correct options, not just one."]]),
      vocab("무슨 날", "什么日子", "名词短语", 129, "읽기와 쓰기", "추석은 무슨 날이에요?", "中秋是什么日子？", "what kind of day", "What kind of day is Chuseok?", [["collocation", "무슨 날이에요?"], ["collocation", "특별한 날"]]),
      vocab("명절 이름", "节日名称", "名词短语", 129, "읽기와 쓰기", "명절 이름이 뭐예요?", "节日名称是什么？", "holiday name", "What is the name of the holiday?", [["collocation", "이름이 뭐예요?"], ["collocation", "명절 이름을 쓰다"]]),
      vocab("그날", "那天", "名词", 129, "읽기와 쓰기", "그날 뭐 해요?", "那天做什么？", "that day", "What do you do that day?", [["collocation", "그날 뭐 해요?"], ["pitfall", "그날 是“那天”，오늘 是“今天”。", "그날 means that day; 오늘 means today."]]),

      vocab("대표적", "代表性的", "形容词", 130, "문화와 정보", "설과 추석은 대표적인 명절이에요.", "春节和中秋是代表性的节日。", "representative; typical", "Seollal and Chuseok are representative holidays.", [["collocation", "대표적인 명절"], ["form", "대표적 + -인 -> 대표적인", "대표적 + -인 -> 대표적인"]]),
      vocab("정월 대보름", "正月十五；元宵前后的韩国传统节日", "名词", 130, "문화와 정보", "정월 대보름에는 오곡밥을 먹어요.", "正月十五吃五谷饭。", "Jeongwol Daeboreum; first full moon holiday", "People eat five-grain rice on Jeongwol Daeboreum.", [["collocation", "정월 대보름에는"], ["pitfall", "음력 1월 15일，그 해 첫 보름달이 뜨는 날。", "It is the 15th day of the first lunar month, the first full moon of the year."]]),
      vocab("한식", "寒食；韩国传统节日之一", "名词", 130, "문화와 정보", "한식에는 찬 음식을 먹습니다.", "寒食时吃冷食。", "Hansik; Cold Food Day", "People eat cold food on Hansik.", [["collocation", "한식에는"], ["pitfall", "음식 이름이 아니라 명절 이름입니다。", "Here it is a holiday name, not simply Korean food."]]),
      vocab("단오", "端午；韩国传统节日之一", "名词", 130, "문화와 정보", "단오는 음력 5월 5일입니다.", "端午是农历五月初五。", "Dano; the fifth day of the fifth lunar month", "Dano is the fifth day of the fifth lunar month.", [["collocation", "단오는 음력 5월 5일"], ["pitfall", "한국 단오와 중국端午习俗不完全相同。", "Korean Dano and Chinese Duanwu are not exactly the same in customs."]]),
      vocab("동지", "冬至", "名词", 130, "문화와 정보", "동지는 밤이 가장 긴 날입니다.", "冬至是一年中夜晚最长的日子。", "winter solstice", "Dongji is the day with the longest night.", [["collocation", "동지에는 팥죽을 먹다"], ["collocation", "밤이 가장 긴 날"]]),
      vocab("양력", "阳历；公历", "名词", 130, "문화와 정보", "한식은 양력 4월 5일이나 6일입니다.", "寒食是公历4月5日或6日。", "solar/Gregorian calendar", "Hansik is April 5 or 6 on the solar calendar.", [["collocation", "양력 4월"], ["pitfall", "양력 和 음력 要分清。", "Do not confuse 양력 with 음력."]]),
      vocab("그 해", "那一年；该年", "名词短语", 130, "문화와 정보", "그 해의 첫 보름달이 뜨는 날입니다.", "是该年第一轮圆月升起的日子。", "that year", "It is the day when the first full moon of that year rises.", [["collocation", "그 해의 첫 보름달"], ["pitfall", "해 在这里是“年”，不是太阳。", "해 here means year, not the sun."]]),
      vocab("오곡밥", "五谷饭", "名词", 130, "문화와 정보", "대보름에는 오곡밥을 먹습니다.", "正月十五吃五谷饭。", "five-grain rice", "People eat five-grain rice on Daeboreum.", [["collocation", "오곡밥을 먹다"], ["collocation", "오곡밥과 나물"]]),
      vocab("나물", "拌菜；野菜", "名词", 130, "문화와 정보", "오곡밥과 나물을 먹습니다.", "吃五谷饭和拌菜。", "seasoned vegetables", "People eat five-grain rice and seasoned vegetables.", [["collocation", "나물을 먹다"], ["collocation", "오곡밥과 나물"]]),
      vocab("호두", "核桃", "名词", 130, "문화와 정보", "호두나 땅콩 같은 부럼을 먹습니다.", "吃核桃或花生之类的坚果。", "walnut", "People eat nuts such as walnuts and peanuts.", [["collocation", "호두를 먹다"], ["collocation", "호두나 땅콩"]]),
      vocab("땅콩", "花生", "名词", 130, "문화와 정보", "땅콩 같은 부럼을 먹습니다.", "吃花生之类的坚果。", "peanut", "People eat nuts such as peanuts.", [["collocation", "땅콩을 먹다"], ["collocation", "호두나 땅콩"]]),
      vocab("부럼", "正月十五吃的坚果", "名词", 130, "문화와 정보", "대보름에는 부럼을 먹습니다.", "正月十五吃坚果。", "nuts eaten on Jeongwol Daeboreum", "People eat bureom nuts on Daeboreum.", [["collocation", "부럼을 먹다"], ["pitfall", "부럼 特指大보름习俗中的坚果。", "부럼 specifically refers to nuts eaten as a Daeboreum custom."]]),
      vocab("찬 음식", "冷食", "名词短语", 130, "문화와 정보", "한식에는 찬 음식을 먹습니다.", "寒食时吃冷食。", "cold food", "People eat cold food on Hansik.", [["collocation", "찬 음식을 먹다"], ["pitfall", "찬 是“冷的”，不是“赞”。", "찬 means cold here."]]),
      vocab("한 해 농사", "一年的农事；全年农作", "名词短语", 130, "문화와 정보", "단오는 한 해 농사의 풍년을 바라는 날입니다.", "端午是祈愿一年农事丰收的日子。", "the year's farming", "Dano is a day to wish for a good harvest for the year.", [["collocation", "한 해 농사"], ["collocation", "풍년을 바라다"]]),
      vocab("풍년", "丰年；丰收", "名词", 130, "문화와 정보", "풍년을 바랍니다.", "祈愿丰收。", "good harvest", "People wish for a good harvest.", [["collocation", "풍년을 바라다"], ["pitfall", "반대말은 흉년。", "The opposite is 흉년, a poor harvest."]]),
      vocab("밤이 가장 길다", "夜晚最长", "形容词短语", 130, "문화와 정보", "동지는 일 년 중 밤이 가장 긴 날입니다.", "冬至是一年中夜晚最长的日子。", "the night is the longest", "Dongji is the day when the night is longest.", [["collocation", "일 년 중 밤이 가장 긴 날"], ["form", "길다 + -ㄴ -> 긴", "길다 + -ㄴ -> 긴"]]),
      vocab("팥죽", "红豆粥", "名词", 130, "문화와 정보", "동지에는 팥죽을 먹습니다.", "冬至吃红豆粥。", "red bean porridge", "People eat red bean porridge on Dongji.", [["collocation", "팥죽을 먹다"], ["collocation", "동지 팥죽"]]),

      vocab("밝았지요", "很亮吧", "句型表达", 131, "발음/배운 어휘 확인", "어젯밤 보름달이 참 밝았지요?", "昨晚的圆月很亮吧？", "it was bright, right?", "The full moon last night was very bright, right?", [["form", "밝다 + -았지요 -> 밝았지요", "밝다 + -았지요 -> 밝았지요"], ["pitfall", "教材发音标为 [발갇찌요]。", "The textbook pronunciation is [발갇찌요]."]]),
      vocab("끓여서 먹다", "煮了以后吃", "动词短语", 131, "발음/배운 어휘 확인", "떡국을 끓여서 먹어요.", "把年糕汤煮了吃。", "to boil/cook and eat", "People cook rice cake soup and eat it.", [["form", "끓이다 + -어서 -> 끓여서", "끓이다 + -어서 -> 끓여서"], ["pitfall", "教材发音标为 [끄려서]。", "The textbook pronunciation is [끄려서]."]])
    ],
    dialogues: [
      {
        id: "dialogue-grammar-01",
        title: "명절에는 가족들과 모여서 재미있게 놀아요",
        focus: "A-게",
        page: 125,
        source: "문법 1",
        sceneZh: "用 -게 说明动作进行得怎么样。",
        translations: {
          en: {
            scene: "Use -게 to describe how an action is done.",
            learningPoints: [
              "A-게 comes before a verb.",
              "짧게, 따뜻하게, 재미있게 describe the manner or state of the action.",
              "짧게 is pronounced [짤께]."
            ]
          }
        },
        learningPoints: [
          "A-게 放在动词前，说明动作方式。",
          "짧게、따뜻하게、재미있게 都是形容词变成副词性表达。",
          "짧게 的教材发音是 [짤께]。"
        ],
        lines: [
          {
            speaker: "가",
            ko: "머리를 어떻게 해 드릴까요?",
            zh: "头发要怎么给您弄呢？",
            guide: "어떻게 用来问方法或样式。",
            translations: {
              en: {
                translation: "How would you like me to do your hair?",
                guide: "어떻게 asks about the method or style."
              }
            }
          },
          {
            speaker: "나",
            ko: "날씨가 더우니까 좀 짧게 잘라 주세요.",
            zh: "天气热，请剪短一点。",
            guide: "짧게 修饰 잘라 주세요，表示“剪得短一点”。",
            translations: {
              en: {
                translation: "Since the weather is hot, please cut it a little short.",
                guide: "짧게 modifies 잘라 주세요 and means cut it short."
              }
            }
          },
          {
            speaker: "가",
            ko: "명절에는 보통 어떻게 보내요?",
            zh: "节日通常怎么过？",
            guide: "명절을 보내다 是“过节”的常用说法。",
            translations: {
              en: {
                translation: "How do you usually spend the holiday?",
                guide: "명절을 보내다 is a common expression for spending a holiday."
              }
            }
          },
          {
            speaker: "나",
            ko: "가족들과 모여서 맛있게 먹고 재미있게 놀아요.",
            zh: "和家人聚在一起，吃得开心，也玩得开心。",
            guide: "맛있게、재미있게 分别说明 먹다、놀다 的方式。",
            translations: {
              en: {
                translation: "I gather with family, eat well, and have fun.",
                guide: "맛있게 and 재미있게 describe how 먹다 and 놀다 happen."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "생활 습관 말하기",
            promptZh: "用 늦게、일찍、따뜻하게 说一个自己的生活习惯。",
            answerKo: "저는 주말에 보통 늦게 일어나요.",
            translations: {
              en: {
                title: "Talk about a habit",
                prompt: "Use 늦게, 일찍, or 따뜻하게 to describe one of your habits."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "A-게",
            promptZh: "用“따뜻하다 / 입다”造句。",
            answerKo: "밤에는 추우니까 따뜻하게 입어야 해요.",
            translations: {
              en: {
                prompt: "Make a sentence with “warm / dress.”"
              }
            }
          }
        ]
      },
      {
        id: "dialogue-grammar-02",
        title: "보름달을 보면서 소원을 빌었어요",
        focus: "V-(으)면서",
        page: 127,
        source: "문법 2",
        sceneZh: "用 -(으)면서 表示同一时间做两个动作。",
        translations: {
          en: {
            scene: "Use -(으)면서 to say two actions happen at the same time.",
            learningPoints: [
              "Use -면서 after a vowel and -으면서 after a final consonant.",
              "The subject of both actions is usually the same.",
              "보면서 소원을 빌다 is a key Chuseok/full-moon expression."
            ]
          }
        },
        learningPoints: [
          "无收音接 -면서，有收音接 -으면서。",
          "两个动作的主语通常相同。",
          "보름달을 보면서 소원을 빌다 是本课核心句。"
        ],
        lines: [
          {
            speaker: "가",
            ko: "어젯밤 보름달이 밝았지요?",
            zh: "昨晚的圆月很亮吧？",
            guide: "밝았지요 是确认对方是否也这样觉得。",
            translations: {
              en: {
                translation: "The full moon was bright last night, wasn't it?",
                guide: "밝았지요 checks whether the listener agrees."
              }
            }
          },
          {
            speaker: "나",
            ko: "네, 한국 친구하고 보름달을 보면서 소원을 빌었어요.",
            zh: "是的，我和韩国朋友一边看圆月一边许了愿。",
            guide: "보면서 和 빌었어요 同时发生。",
            translations: {
              en: {
                translation: "Yes. I made a wish with a Korean friend while looking at the full moon.",
                guide: "보면서 and 빌었어요 happen at the same time."
              }
            }
          },
          {
            speaker: "가",
            ko: "어제 친구를 초대해서 뭐 했어요?",
            zh: "昨天邀请朋友以后做了什么？",
            guide: "초대해서 表示邀请之后接着发生的事。",
            translations: {
              en: {
                translation: "What did you do after inviting your friend yesterday?",
                guide: "초대해서 connects inviting someone to what happened next."
              }
            }
          },
          {
            speaker: "나",
            ko: "고향 음식을 먹으면서 이야기를 했어요.",
            zh: "一边吃家乡菜一边聊天了。",
            guide: "먹으면서 用于 먹다 有收音的情况。",
            translations: {
              en: {
                translation: "We talked while eating hometown food.",
                guide: "먹으면서 is used because 먹다 has a final consonant."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "동시 동작 말하기",
            promptZh: "用 TV를 보다、밥을 먹다 或 음악을 듣다、운동하다 说一句。",
            answerKo: "저는 음악을 들으면서 운동해요.",
            translations: {
              en: {
                title: "Say simultaneous actions",
                prompt: "Use watching TV/eating or listening to music/exercising to make one sentence."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "V-(으)면서",
            promptZh: "把“보름달을 보다 / 소원을 빌다”合成一句。",
            answerKo: "보름달을 보면서 소원을 빌어요.",
            translations: {
              en: {
                prompt: "Combine “look at the full moon / make a wish” into one sentence."
              }
            }
          }
        ]
      },
      {
        id: "dialogue-speaking-01",
        title: "내일부터 설 연휴네요",
        focus: "말하기와 듣기",
        page: 128,
        source: "말하기와 듣기",
        sceneZh: "谈论春节连休安排和韩国人的节日活动。",
        translations: {
          en: {
            scene: "Talk about Seollal holiday plans and what Korean people do during holidays.",
            learningPoints: [
              "Use 연휴 to talk about a multi-day holiday break.",
              "Use 초대해서 같이 보내다 for spending a holiday with invited friends.",
              "Use 먹으면서 재미있게 보내다 to combine this lesson's two grammar points."
            ]
          }
        },
        learningPoints: [
          "연휴 表示连续几天的假期。",
          "초대해서 같이 보내다 表示邀请别人一起过节。",
          "먹으면서 재미있게 보내다 同时练到 -(으)면서 和 -게。"
        ],
        lines: [
          {
            speaker: "이링",
            ko: "내일부터 설 연휴네요. 팀장님은 이번 연휴에 고향에 가세요?",
            zh: "从明天开始就是春节连休了。组长这次假期回老家吗？",
            guide: "네요 带有“现在意识到/感叹”的语气。",
            translations: {
              en: {
                translation: "The Seollal holiday starts tomorrow. Are you going to your hometown this holiday, team leader?",
                guide: "네요 shows realization or mild surprise."
              }
            }
          },
          {
            speaker: "팀장",
            ko: "네, 내일 아침 일찍 출발할 거예요. 이링 씨는 어떻게 보낼 거예요?",
            zh: "是的，我明天早上会早早出发。伊玲你打算怎么过？",
            guide: "출발할 거예요 表示计划。",
            translations: {
              en: {
                translation: "Yes, I will leave early tomorrow morning. How will you spend it, Yiling?",
                guide: "출발할 거예요 states a plan."
              }
            }
          },
          {
            speaker: "이링",
            ko: "저는 고향 친구들을 초대해서 같이 보낼 거예요. 한국 사람들은 보통 뭘 하면서 보내요?",
            zh: "我会邀请家乡朋友一起过。韩国人通常一边做什么一边过呢？",
            guide: "뭘 하면서 보내요? 直接问“怎么过”。",
            translations: {
              en: {
                translation: "I will invite my hometown friends and spend it together. What do Korean people usually do during the holiday?",
                guide: "뭘 하면서 보내요? asks how people spend the time."
              }
            }
          },
          {
            speaker: "팀장",
            ko: "차례를 지내고 어른들께 세배를 해요. 오랜만에 친척들이 모이니까 명절 음식을 같이 먹으면서 재미있게 보내요.",
            zh: "举行祭祖礼，也向长辈拜年。亲戚们久违地聚在一起，所以一边吃节日食物一边开心地过。",
            guide: "차례、세배、명절 음식 是韩国 명절 的核心词。",
            translations: {
              en: {
                translation: "We hold an ancestral rite and bow to elders. Since relatives gather after a long time, we eat holiday food together and have a good time.",
                guide: "차례, 세배, and 명절 음식 are core Korean holiday words."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "연휴 계획 바꾸기",
            promptZh: "把“고향 친구들을 초대해서 같이 보내다”换成“고향의 명절 음식을 만들어 먹다”。",
            answerKo: "저는 고향의 명절 음식을 만들어 먹으면서 보낼 거예요.",
            translations: {
              en: {
                title: "Change holiday plans",
                prompt: "Replace “invite hometown friends and spend it together” with “make and eat hometown holiday food.”"
              }
            }
          }
        ],
        drills: [
          {
            pattern: "명절 활동",
            promptZh: "用 차례、세배、명절 음식 说韩国春节活动。",
            answerKo: "설날에는 차례를 지내고 어른들께 세배를 해요. 그리고 명절 음식을 먹어요.",
            translations: {
              en: {
                prompt: "Use 차례, 세배, and 명절 음식 to talk about Seollal activities."
              }
            }
          }
        ]
      },
      {
        id: "dialogue-reading-01",
        title: "한국에는 어떤 명절이 있어요?",
        focus: "읽기와 쓰기",
        page: 129,
        source: "읽기와 쓰기",
        sceneZh: "阅读韩国节日介绍，并准备写自己故乡的节日。",
        translations: {
          en: {
            scene: "Read an introduction to Korean holidays and prepare to write about a hometown holiday.",
            learningPoints: [
              "Check which activities belong to Seollal and which belong to Chuseok.",
              "Use questions like 언제예요? and 그날 뭐 해요? for a holiday introduction.",
              "When writing, keep the order: name, date, activities."
            ]
          }
        },
        learningPoints: [
          "先分清 설날 和 추석 的活动。",
          "介绍节日时可以按 이름、언제、하는 일 的顺序写。",
          "모두 고르세요 表示可能有多个正确答案。"
        ],
        lines: [
          {
            speaker: "글",
            ko: "한국에는 설날과 추석 같은 명절이 있어요.",
            zh: "韩国有春节和中秋这样的传统节日。",
            guide: "같은 表示“像……这样的”。",
            translations: {
              en: {
                translation: "Korea has traditional holidays such as Seollal and Chuseok.",
                guide: "같은 means such as / like."
              }
            }
          },
          {
            speaker: "글",
            ko: "설날에는 차례를 지내고 어른들께 세배를 해요. 그리고 떡국을 먹어요.",
            zh: "春节时举行祭祖礼，向长辈拜年，并且吃年糕汤。",
            guide: "설날 활동은 차례、세배、떡국 으로抓住。",
            translations: {
              en: {
                translation: "On Seollal, people hold ancestral rites, bow to elders, and eat rice cake soup.",
                guide: "For Seollal, remember 차례, 세배, and 떡국."
              }
            }
          },
          {
            speaker: "글",
            ko: "추석에는 송편을 빚고 보름달을 보면서 소원을 빌어요.",
            zh: "中秋时做松糕，一边看圆月一边许愿。",
            guide: "추석 활동은 송편、보름달、소원 으로抓住。",
            translations: {
              en: {
                translation: "On Chuseok, people make songpyeon and make wishes while looking at the full moon.",
                guide: "For Chuseok, remember 송편, 보름달, and 소원."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "고향 명절 소개",
            promptZh: "按“명절 이름 / 언제 / 그날 뭐 해요?”写 3 句。",
            answerKo: "우리 고향의 명절은 춘절이에요. 음력 1월 1일이에요. 그날 가족이 모여서 음식을 먹어요.",
            translations: {
              en: {
                title: "Introduce a hometown holiday",
                prompt: "Write three sentences: holiday name / when / what people do that day."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "읽기 확인",
            promptZh: "설날에 하는 일을 모두 말해 보세요。",
            answerKo: "차례를 지내고 세배를 하고 떡국을 먹어요.",
            translations: {
              en: {
                prompt: "Say all the things people do on Seollal."
              }
            }
          }
        ]
      },
      {
        id: "dialogue-pronunciation-01",
        title: "짧게 / 밝았지요 / 끓여서",
        focus: "발음",
        page: 131,
        source: "발음/배운 어휘 확인",
        sceneZh: "跟读本课发音重点，并复习节日句子。",
        translations: {
          en: {
            scene: "Practice key pronunciations and review holiday sentences.",
            learningPoints: [
              "짧게 is pronounced [짤께].",
              "밝았지요 is pronounced [발갇찌요].",
              "끓여서 is pronounced [끄려서]."
            ]
          }
        },
        learningPoints: [
          "짧게 的教材发音是 [짤께]。",
          "밝았지요 的教材发音是 [발갇찌요]。",
          "끓여서 的教材发音是 [끄려서]。"
        ],
        lines: [
          {
            speaker: "가",
            ko: "머리를 어떻게 해 드릴까요?",
            zh: "头发要怎么给您弄呢？",
            guide: "理发店场景中的礼貌问法。",
            translations: {
              en: {
                translation: "How would you like me to do your hair?",
                guide: "A polite question used at a hair salon."
              }
            }
          },
          {
            speaker: "나",
            ko: "날씨가 더우니까 짧게 잘라 주세요.",
            zh: "天气热，请剪短。",
            guide: "짧게 发音 [짤께]。",
            translations: {
              en: {
                translation: "Since the weather is hot, please cut it short.",
                guide: "짧게 is pronounced [짤께]."
              }
            }
          },
          {
            speaker: "가",
            ko: "어젯밤 보름달이 참 밝았지요? 봤어요?",
            zh: "昨晚的圆月很亮吧？你看了吗？",
            guide: "밝았지요 发音 [발갇찌요]。",
            translations: {
              en: {
                translation: "The full moon was really bright last night, wasn't it? Did you see it?",
                guide: "밝았지요 is pronounced [발갇찌요]."
              }
            }
          },
          {
            speaker: "나",
            ko: "네, 보름달을 보면서 소원을 빌었어요.",
            zh: "是的，一边看圆月一边许愿了。",
            guide: "本课标题句的过去时。",
            translations: {
              en: {
                translation: "Yes, I made a wish while looking at the full moon.",
                guide: "This is the past-tense version of the lesson title sentence."
              }
            }
          },
          {
            speaker: "가",
            ko: "한국에서는 설날에 무슨 음식을 먹어요?",
            zh: "在韩国，春节吃什么食物？",
            guide: "무슨 음식 用来问食物种类。",
            translations: {
              en: {
                translation: "What food do people eat on Seollal in Korea?",
                guide: "무슨 음식 asks what kind of food."
              }
            }
          },
          {
            speaker: "나",
            ko: "떡국을 끓여서 먹어요.",
            zh: "煮年糕汤吃。",
            guide: "끓여서 发音 [끄려서]。",
            translations: {
              en: {
                translation: "They cook rice cake soup and eat it.",
                guide: "끓여서 is pronounced [끄려서]."
              }
            }
          }
        ],
        rolePlays: [
          {
            title: "발음 따라 읽기",
            promptZh: "跟读 짧게[짤께], 밝았지요[발갇찌요], 끓여서[끄려서]。",
            answerKo: "짧게[짤께], 밝았지요[발갇찌요], 끓여서[끄려서]",
            translations: {
              en: {
                title: "Pronunciation practice",
                prompt: "Read 짧게[짤께], 밝았지요[발갇찌요], 끓여서[끄려서]."
              }
            }
          }
        ],
        drills: [
          {
            pattern: "발음",
            promptZh: "读出“떡국을 끓여서 먹어요.”的自然发音。",
            answerKo: "떡국[떡꾹]을 끓여서[끄려서] 먹어요.",
            translations: {
              en: {
                prompt: "Read the natural pronunciation of “떡국을 끓여서 먹어요.”"
              }
            }
          }
        ]
      }
    ],
    culture: {
      titleKo: "한국의 명절",
      titleZh: "韩国的传统节日",
      page: 130,
      summaryZh: "这篇文化文章介绍韩国现在最具代表性的 설날、추석，也补充了 정월 대보름、한식、단오、동지 等传统节日和对应食物。",
      translations: {
        en: {
          title: "Korean Traditional Holidays",
          summary: "This culture text explains Korea's representative holidays, Seollal and Chuseok, and also introduces older traditional holidays such as Jeongwol Daeboreum, Hansik, Dano, and Dongji with their related foods."
        }
      },
      paragraphs: [
        {
          ko: "요즘 한국 사람들은 설과 추석을 대표적인 명절이라고 생각합니다.",
          zh: "现在韩国人认为春节和中秋是代表性的传统节日。",
          guide: "대표적인 명절 是这一段的核心判断。",
          translations: {
            en: {
              translation: "These days, Korean people consider Seollal and Chuseok representative traditional holidays.",
              guide: "대표적인 명절 is the key judgment in this sentence."
            }
          }
        },
        {
          ko: "그러나 옛날에는 정월 대보름, 한식, 단오, 동지도 큰 명절이었습니다.",
          zh: "但是以前，正月十五、寒食、端午和冬至也都是重要的传统节日。",
          guide: "그러나 后面补充过去更宽的 명절 范围。",
          translations: {
            en: {
              translation: "However, in the past, Jeongwol Daeboreum, Hansik, Dano, and Dongji were also major holidays.",
              guide: "After 그러나, the text expands the old range of major holidays."
            }
          }
        },
        {
          ko: "정월 대보름은 음력 1월 15일로 그 해의 첫 보름달이 뜨는 날입니다. 대보름에는 오곡밥과 나물, 호두나 땅콩 같은 부럼을 먹습니다.",
          zh: "正月十五是农历一月十五，是那一年第一轮圆月升起的日子。正月十五时，人们吃五谷饭、拌菜，以及核桃或花生等坚果。",
          guide: "日期、月亮、食物三点一起记：음력 1월 15일、첫 보름달、오곡밥/부럼。",
          translations: {
            en: {
              translation: "Jeongwol Daeboreum is the 15th day of the first lunar month, the day when the first full moon of the year rises. On Daeboreum, people eat five-grain rice, seasoned vegetables, and nuts such as walnuts or peanuts.",
              guide: "Remember three points together: the date, the full moon, and the foods 오곡밥 and 부럼."
            }
          }
        },
        {
          ko: "한식은 양력 4월 5일이나 6일이고 찬 음식을 먹습니다. 단오는 한 해 농사의 풍년을 바라는 날로 음력 5월 5일입니다.",
          zh: "寒食是公历4月5日或6日，人们吃冷食。端午是祈愿一年农事丰收的日子，是农历五月初五。",
          guide: "한식은 양력 날짜와 찬 음식, 단오는 음력 날짜와 풍년을 연결해记。",
          translations: {
            en: {
              translation: "Hansik is April 5 or 6 on the solar calendar, and people eat cold food. Dano is the fifth day of the fifth lunar month and is a day to wish for a good harvest for the year.",
              guide: "Connect Hansik with the solar-calendar date and cold food, and Dano with the lunar-calendar date and a good harvest."
            }
          }
        },
        {
          ko: "동지는 일 년 중 밤이 가장 긴 날입니다. 양력 12월 22일이나 23일이고 팥죽을 먹습니다.",
          zh: "冬至是一年中夜晚最长的日子。它是公历12月22日或23日，人们吃红豆粥。",
          guide: "동지 的关键词是 밤이 가장 긴 날 和 팥죽。",
          translations: {
            en: {
              translation: "Dongji is the day with the longest night of the year. It is December 22 or 23 on the solar calendar, and people eat red bean porridge.",
              guide: "The key words for Dongji are 밤이 가장 긴 날 and 팥죽."
            }
          }
        }
      ],
      keyTerms: [
        {
          ko: "대표적인 명절",
          zh: "代表性的传统节日",
          translations: {
            en: {
              meaning: "representative traditional holiday"
            }
          }
        },
        {
          ko: "정월 대보름",
          zh: "正月十五",
          translations: {
            en: {
              meaning: "Jeongwol Daeboreum"
            }
          }
        },
        {
          ko: "오곡밥",
          zh: "五谷饭",
          translations: {
            en: {
              meaning: "five-grain rice"
            }
          }
        },
        {
          ko: "부럼",
          zh: "正月十五吃的坚果",
          translations: {
            en: {
              meaning: "nuts eaten on Jeongwol Daeboreum"
            }
          }
        },
        {
          ko: "팥죽",
          zh: "红豆粥",
          translations: {
            en: {
              meaning: "red bean porridge"
            }
          }
        }
      ],
      questions: [
        {
          q: "정월 대보름에는 무엇을 먹어요?",
          zh: "正月十五吃什么？",
          a: "오곡밥과 나물, 호두나 땅콩 같은 부럼을 먹어요.",
          translations: {
            en: {
              translation: "What do people eat on Jeongwol Daeboreum?",
              answer: "They eat five-grain rice, seasoned vegetables, and nuts such as walnuts or peanuts."
            }
          }
        },
        {
          q: "단오는 언제예요?",
          zh: "端午是什么时候？",
          a: "음력 5월 5일이에요.",
          translations: {
            en: {
              translation: "When is Dano?",
              answer: "It is the fifth day of the fifth lunar month."
            }
          }
        },
        {
          q: "여러분 고향에는 어떤 명절이 있어요?",
          zh: "你的故乡有什么传统节日？",
          a: "우리 고향에는 춘절이 있어요. 가족이 모여서 음식을 먹어요.",
          translations: {
            en: {
              translation: "What holidays are there in your hometown?",
              answer: "In my hometown, there is Lunar New Year. Family members gather and eat food together."
            }
          }
        }
      ]
    },
    practice: [
      {
        type: "translation",
        title: "中文转韩文",
        prompt: "一边看圆月一边许愿。",
        answerKo: "보름달을 보면서 소원을 빌어요.",
        translations: {
          en: {
            title: "Translate to Korean",
            prompt: "Make a wish while looking at the full moon."
          }
        }
      },
      {
        type: "pattern",
        title: "A-게",
        prompt: "用“날씨가 덥다 / 짧게 자르다”说理发店句子。",
        answerKo: "날씨가 더우니까 좀 짧게 잘라 주세요.",
        translations: {
          en: {
            title: "A-게",
            prompt: "Use “the weather is hot / cut it short” to make a hair-salon sentence."
          }
        }
      },
      {
        type: "pattern",
        title: "V-(으)면서",
        prompt: "用“음악을 듣다 / 운동하다”造句。",
        answerKo: "음악을 들으면서 운동해요.",
        translations: {
          en: {
            title: "V-(으)면서",
            prompt: "Make a sentence with “listen to music / exercise.”"
          }
        }
      },
      {
        type: "reading",
        title: "阅读确认",
        prompt: "설날에 하는 일을 세 가지 말해 보세요.",
        answerKo: "차례를 지내고 어른들께 세배를 하고 떡국을 먹어요.",
        translations: {
          en: {
            title: "Reading check",
            prompt: "Say three things people do on Seollal."
          }
        }
      },
      {
        type: "culture",
        title: "文化理解",
        prompt: "정월 대보름에는 무엇을 먹어요?",
        answerKo: "오곡밥과 나물, 호두나 땅콩 같은 부럼을 먹어요.",
        translations: {
          en: {
            title: "Culture check",
            prompt: "What do people eat on Jeongwol Daeboreum?"
          }
        }
      },
      {
        type: "speaking",
        title: "故乡节日介绍",
        prompt: "按“이름 / 언제 / 하는 일”介绍你故乡的节日。",
        answerKo: "우리 고향의 명절은 춘절이에요. 음력 1월 1일이에요. 그날 가족이 모여서 음식을 먹어요.",
        translations: {
          en: {
            title: "Introduce a hometown holiday",
            prompt: "Introduce a hometown holiday with name / when / activities."
          }
        }
      }
    ]
  };

  lesson.stats = {
    vocabulary: lesson.vocabulary.length,
    dialogues: lesson.dialogues.length,
    culture: 1,
    practice: lesson.practice.length
  };

  window.lessonGuideL2LessonChunks ||= {};
  window.lessonGuideL2LessonChunks["l2-11"] = lesson;
})();
