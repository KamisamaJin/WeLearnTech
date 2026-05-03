const grammarDB = [
    // ================= LEVEL 1: PARTICLES (조사) =================
    {
        "id": "l1_p1", "category": "1. Particles (조사)", "level": "L1", "title": "은/는 (Topic Particle)",
        "desc": "Marks the topic or contrast",
        "meaning_zh": "主题助词，用于标记句子的主题，或者用于表示两者的对比（强调不同点）。",
        "meaning_en": "Used to mark the topic of the sentence or to show contrast.",
        "rules": ["有收音(Consonant)+은", "无收音(Vowel)+는"],
        "examples": [
            {"ko": "저는 학생입니다.", "en": "As for me, I am a student.", "zh": "我呢，是学生。"},
            {"ko": "사과는 맛있어요. 바나나는 맛없어요.", "en": "Apples are delicious, but bananas are not.", "zh": "苹果好吃，但香蕉难吃。(对比)"}
        ],
        "notes": "与 이/가 的区别：은/는 更侧重强调后面的谓语，或用于旧信息；이/가 更强调主语本身，用于新信息。"
    },
    {
        "id": "l1_p2", "category": "1. Particles (조사)", "level": "L1", "title": "이/가 (Subject Particle)",
        "desc": "Marks the subject",
        "meaning_zh": "主格助词，直接标记动作的执行者或状态的主体。",
        "meaning_en": "Subject particle marking who/what does the action.",
        "rules": ["有收音+이", "无收音+가"],
        "examples": [
            {"ko": "비가 옵니다.", "en": "It is raining.", "zh": "下雨了。"},
            {"ko": "누가 왔어요?", "en": "Who came?", "zh": "谁来了？(强调谁)"}
        ]
    },
    {
        "id": "l1_p3", "category": "1. Particles (조사)", "level": "L1", "title": "을/를 (Object Particle)",
        "desc": "Marks the direct object",
        "meaning_zh": "宾格助词，标记动词直接作用的对象。",
        "meaning_en": "Object particle marking the direct object.",
        "rules": ["有收音+을", "无收音+를"],
        "examples": [{"ko": "밥을 먹어요.", "en": "I eat a meal.", "zh": "吃饭。"}]
    },
    {
        "id": "l1_p4", "category": "1. Particles (조사)", "level": "L1", "title": "에 (Time/Location/Direction)",
        "desc": "At, On, In, To",
        "meaning_zh": "表示事物存在的位置，去往的方向，或动作发生的时间。",
        "meaning_en": "Indicates existence, destination, or time of an action.",
        "rules": ["名词 + 에"],
        "examples": [
            {"ko": "학교에 가요.", "en": "I go to school.", "zh": "去学校。"},
            {"ko": "3시에 만나요.", "en": "Let's meet at 3 o'clock.", "zh": "3点见。"}
        ],
        "notes": "어제(昨天), 오늘(今天), 내일(明天), 지금(现在) 后面不加 에。"
    },
    {
        "id": "l1_p5", "category": "1. Particles (조사)", "level": "L1", "title": "에서 (Dynamic Location / From)",
        "desc": "At, In (dynamic), From",
        "meaning_zh": "动作发生的地点（在某地做某事），或作为起点（从某地出发）。",
        "meaning_en": "Location where an action takes place, or a starting point.",
        "rules": ["名词 + 에서"],
        "examples": [
            {"ko": "식당에서 밥을 먹어요.", "en": "I eat at the restaurant.", "zh": "在餐厅吃饭。"},
            {"ko": "중국에서 왔어요.", "en": "I came from China.", "zh": "从中国来的。"}
        ]
    },
    {
        "id": "l1_p6", "category": "1. Particles (조사)", "level": "L1", "title": "에게 / 한테 / 께 (To someone)",
        "desc": "To (a person)",
        "meaning_zh": "动作指向的对象（给人/动物）。께 为敬语，한테 多用于口语。",
        "meaning_en": "To (a person or animal).",
        "rules": ["人/动物名词 + 에게/한테/께"],
        "examples": [{"ko": "친구한테 선물을 줘요.", "en": "I give a gift to my friend.", "zh": "给朋友礼物。"}]
    },
    {
        "id": "l1_p7", "category": "1. Particles (조사)", "level": "L1", "title": "도 (Also / Too)",
        "desc": "Also, too",
        "meaning_zh": "包含助词，表示“也”。",
        "meaning_en": "Also, too.",
        "rules": ["名词 + 도"],
        "examples": [{"ko": "저도 학생입니다.", "en": "I am also a student.", "zh": "我也是学生。"}]
    },
    {
        "id": "l1_p8", "category": "1. Particles (조사)", "level": "L1", "title": "만 (Only)",
        "desc": "Only, just",
        "meaning_zh": "限制助词，表示“只、仅仅”。",
        "meaning_en": "Only.",
        "rules": ["名词 + 만"],
        "examples": [{"ko": "물만 마셔요.", "en": "I only drink water.", "zh": "只喝水。"}]
    },
    {
        "id": "l1_p9", "category": "1. Particles (조사)", "level": "L1", "title": "밖에 (Nothing but / Only)",
        "desc": "Only (used with negative)",
        "meaning_zh": "除了...之外没有。必须与否定词(안, 못, 없다)连用，表示“只”。",
        "meaning_en": "Nothing but, only. Must be followed by a negative verb.",
        "rules": ["名词 + 밖에 + 否定形式"],
        "examples": [{"ko": "돈이 천 원밖에 없어요.", "en": "I have nothing but 1,000 won.", "zh": "只有一千韩元（除了一千韩元外没有了）。"}]
    },
    {
        "id": "l1_p10", "category": "1. Particles (조사)", "level": "L1", "title": "(으)로 (Direction / Method)",
        "desc": "Toward, by, using",
        "meaning_zh": "1. 方向（往...）。 2. 手段、工具、材料（用...）。",
        "meaning_en": "Toward, by means of, using.",
        "rules": ["有收音+으로 (除ㄹ外)", "无收音或ㄹ结尾+로"],
        "examples": [
            {"ko": "오른쪽으로 가세요.", "en": "Please go toward the right.", "zh": "请往右边走。"},
            {"ko": "가위로 종이를 잘라요.", "en": "Cut the paper with scissors.", "zh": "用剪刀剪纸。"}
        ]
    },
    {
        "id": "l1_p11", "category": "1. Particles (조사)", "level": "L1", "title": "보다 (Than)",
        "desc": "More than (comparison)",
        "meaning_zh": "比较助词，表示“比...”。",
        "meaning_en": "More than (used for comparison).",
        "rules": ["名词 + 보다 (+ 更/더)"],
        "examples": [{"ko": "수박이 사과보다 더 커요.", "en": "A watermelon is bigger than an apple.", "zh": "西瓜比苹果大。"}]
    },
    {
        "id": "l1_p12", "category": "1. Particles (조사)", "level": "L1", "title": "부터 / 까지 (From / To)",
        "desc": "From / To (Time or Place)",
        "meaning_zh": "起点与终点（从...到...）。",
        "meaning_en": "From / To (Time or location).",
        "rules": ["名词 + 부터", "名词 + 까지"],
        "examples": [{"ko": "1시부터 2시까지 공부해요.", "en": "I study from 1 o'clock to 2 o'clock.", "zh": "从1点学习到2点。"}]
    },
    {
        "id": "l1_p13", "category": "1. Particles (조사)", "level": "L1", "title": "마다 (Every)",
        "desc": "Every, each",
        "meaning_zh": "表示“每”，用于时间或名词之后。",
        "meaning_en": "Every, each.",
        "rules": ["名词 + 마다"],
        "examples": [{"ko": "주말마다 영화를 봐요.", "en": "I watch a movie every weekend.", "zh": "每个周末都看电影。"}]
    },
    {
        "id": "l1_p14", "category": "1. Particles (조사)", "level": "L1", "title": "처럼 / 같이 (Like / As)",
        "desc": "Like, as",
        "meaning_zh": "表示“像...一样”。",
        "meaning_en": "Like, as.",
        "rules": ["名词 + 처럼/같이"],
        "examples": [{"ko": "가수처럼 노래를 잘해요.", "en": "You sing well like a singer.", "zh": "唱歌像歌手一样好。"}]
    },

    // ================= LEVEL 1: TENSES & BASIC ENDINGS (시제와 종결어미) =================
    {
        "id": "l1_t1", "category": "2. Tense & Endings (시제/종결어미)", "level": "L1", "title": "-아/어요 (Present Informal)",
        "desc": "Present tense (polite informal)",
        "meaning_zh": "非格式体尊敬阶，现在的日常陈述、疑问或祈使。",
        "meaning_en": "Polite informal present tense.",
        "rules": ["词干元音为ㅏ/ㅗ + 아요", "其他元音 + 어요", "하다 -> 해요"],
        "examples": [{"ko": "저는 커피를 마셔요.", "en": "I drink coffee.", "zh": "我喝咖啡。"}]
    },
    {
        "id": "l1_t2", "category": "2. Tense & Endings (시제/종결어미)", "level": "L1", "title": "-ㅂ/습니다 (Present Formal)",
        "desc": "Present tense (polite formal)",
        "meaning_zh": "格式体尊敬阶，正式场合使用（新闻、会议、军队）。",
        "meaning_en": "Polite formal present tense.",
        "rules": ["无收音+ㅂ니다", "有收音+습니다"],
        "examples": [{"ko": "회의를 시작합니다.", "en": "The meeting begins.", "zh": "会议开始。"}]
    },
    {
        "id": "l1_t3", "category": "2. Tense & Endings (시제/종결어미)", "level": "L1", "title": "-았/었어요 (Past Tense)",
        "desc": "Past tense",
        "meaning_zh": "过去时，表示动作已经完成或状态已成为过去。",
        "meaning_en": "Past tense.",
        "rules": ["词干元音为ㅏ/ㅗ + 았어요", "其他元音 + 었어요", "하다 -> 했어요"],
        "examples": [{"ko": "어제 친구를 만났어요.", "en": "I met a friend yesterday.", "zh": "昨天见了朋友。"}]
    },
    {
        "id": "l1_t4", "category": "2. Tense & Endings (시제/종결어미)", "level": "L1", "title": "-(으)ㄹ 거예요 (Future Tense)",
        "desc": "Future tense / Plan",
        "meaning_zh": "将来时，表示个人的计划，或对未来的推测。",
        "meaning_en": "Future tense (plan) or supposition.",
        "rules": ["无收音+ㄹ 거예요", "有收音+을 거예요"],
        "examples": [{"ko": "내일 한국에 갈 거예요.", "en": "I will go to Korea tomorrow.", "zh": "明天要去韩国。"}]
    },
    {
        "id": "l1_t5", "category": "2. Tense & Endings (시제/종결어미)", "level": "L1", "title": "-고 있다 (Present Continuous)",
        "desc": "Present continuous (is doing)",
        "meaning_zh": "现在进行时（正在做某事）。",
        "meaning_en": "Present continuous tense (is ~ing).",
        "rules": ["动词词干 + 고 있다"],
        "examples": [{"ko": "지금 음악을 듣고 있어요.", "en": "I am listening to music now.", "zh": "现在正在听音乐。"}]
    },

    // ================= LEVEL 2: INTENTION & MODALS (의지, 능력, 의무) =================
    {
        "id": "l2_m1", "category": "3. Modals & Intentions (의지/능력)", "level": "L2", "title": "-(으)ㄹ 수 있다/없다",
        "desc": "Can / Cannot",
        "meaning_zh": "表示客观的能力或可能性（能/不能做某事）。",
        "meaning_en": "Can / Cannot do something.",
        "rules": ["无收音+ㄹ 수 있다/없다", "有收音+을 수 있다/없다"],
        "examples": [{"ko": "매운 음식을 먹을 수 없어요.", "en": "I cannot eat spicy food.", "zh": "吃不了辣的食物。"}]
    },
    {
        "id": "l2_m2", "category": "3. Modals & Intentions (의지/능력)", "level": "L2", "title": "-(으)ㄹ 줄 알다/모르다",
        "desc": "Know how to / Don't know how to",
        "meaning_zh": "表示主观上是否掌握了某种方法、技能（懂得/不懂得怎么做）。",
        "meaning_en": "Know / Don't know how to do something.",
        "rules": ["无收音+ㄹ 줄 알다", "有收音+을 줄 알다"],
        "examples": [{"ko": "운전할 줄 알아요?", "en": "Do you know how to drive?", "zh": "你会开车吗？(懂得开车的方法吗)"}]
    },
    {
        "id": "l2_m3", "category": "3. Modals & Intentions (의지/능력)", "level": "L2", "title": "-아/어야 하다(되다)",
        "desc": "Must, Have to",
        "meaning_zh": "表示义务和必然性（必须...，应该...）。",
        "meaning_en": "Must, have to, should.",
        "rules": ["词干元音为ㅏ/ㅗ + 아야 하다", "其他 + 어야 하다", "하다 -> 해야 하다"],
        "examples": [{"ko": "내일 시험이 있어서 공부해야 해요.", "en": "I have an exam tomorrow so I must study.", "zh": "明天有考试，必须学习。"}]
    },
    {
        "id": "l2_m4", "category": "3. Modals & Intentions (의지/능력)", "level": "L2", "title": "-아/어도 되다",
        "desc": "May, Is it okay to...?",
        "meaning_zh": "表示许可（做...也可以，可以做...）。",
        "meaning_en": "Expresses permission (It is okay to...).",
        "rules": ["动词词干 + 아/어도 되다"],
        "examples": [{"ko": "여기에 앉아도 돼요?", "en": "May I sit here?", "zh": "可以坐在这里吗？"}]
    },
    {
        "id": "l2_m5", "category": "3. Modals & Intentions (의지/능력)", "level": "L2", "title": "-(으)면 안 되다",
        "desc": "Should not, Must not",
        "meaning_zh": "表示禁止（不可以做...）。",
        "meaning_en": "Should not, Must not (Prohibition).",
        "rules": ["无收音+면 안 되다", "有收音+으면 안 되다"],
        "examples": [{"ko": "병원에서 담배를 피우면 안 돼요.", "en": "You must not smoke in the hospital.", "zh": "不可以在医院抽烟。"}]
    },

    // ================= LEVEL 2: CONJUNCTIONS (연결어미) =================
    {
        "id": "l2_c1", "category": "4. Conjunctions (연결어미)", "level": "L2", "title": "-고 (And / Sequence)",
        "desc": "And / And then",
        "meaning_zh": "1. 并列（和，并且）。2. 动作的前后顺序（做完A，然后做B）。",
        "meaning_en": "And / And then.",
        "rules": ["词干 + 고"],
        "examples": [{"ko": "밥을 먹고 숙제를 해요.", "en": "I eat and then do my homework.", "zh": "吃完饭然后写作业。"}]
    },
    {
        "id": "l2_c2", "category": "4. Conjunctions (연결어미)", "level": "L2", "title": "-지만 (But / However)",
        "desc": "But, however",
        "meaning_zh": "表示转折（虽然...但是...）。",
        "meaning_en": "But, however.",
        "rules": ["词干 + 지만"],
        "examples": [{"ko": "한국어는 어렵지만 재미있어요.", "en": "Korean is difficult but fun.", "zh": "韩语虽然难但很有趣。"}]
    },
    {
        "id": "l2_c3", "category": "4. Conjunctions (연결어미)", "level": "L2", "title": "-아/어서 (Reason & Sequence)",
        "desc": "Because / And then",
        "meaning_zh": "1. 理由（因为...所以...）。 2. 动作发生有紧密的先后关联（做完A接着用A的结果做B）。",
        "meaning_en": "Because / And then (with logical flow).",
        "rules": ["阳性元音 + 아서", "阴性元音 + 어서", "하다 -> 해서"],
        "examples": [
            {"ko": "비가 와서 집에 있어요.", "en": "Because it's raining, I am at home.", "zh": "因为下雨，所以在家里。"},
            {"ko": "친구를 만나서 영화를 봤어요.", "en": "I met a friend and we watched a movie.", "zh": "见了朋友，然后(一起)看了电影。"}
        ],
        "notes": "不能与祈使句/共动句连用。"
    },
    {
        "id": "l2_c4", "category": "4. Conjunctions (연결어미)", "level": "L2", "title": "-(으)니까 (Reason)",
        "desc": "Because / Since",
        "meaning_zh": "主观原因。多用于引出后文的命令、建议或个人推断。",
        "meaning_en": "Because / Since (often used with commands or suggestions).",
        "rules": ["无收音+니까", "有收音+으니까"],
        "examples": [{"ko": "날씨가 추우니까 따뜻하게 입으세요.", "en": "Since it's cold, please dress warmly.", "zh": "天气冷，请多穿点。"}]
    },
    {
        "id": "l2_c5", "category": "4. Conjunctions (연결어미)", "level": "L2", "title": "-(으)러 가다/오다 (Purpose of movement)",
        "desc": "Go/Come in order to",
        "meaning_zh": "移动的目的（为了做...而去/来）。",
        "meaning_en": "Go/Come in order to do something.",
        "rules": ["动词无收音+러 가다", "有收音+으러 가다"],
        "examples": [{"ko": "점심을 먹으러 식당에 가요.", "en": "I go to the restaurant to eat lunch.", "zh": "去餐厅吃午饭。"}]
    },
    {
        "id": "l2_c6", "category": "4. Conjunctions (연결어미)", "level": "L2", "title": "-(으)려고 (Intention)",
        "desc": "In order to / Intend to",
        "meaning_zh": "表示意图和目的（为了做某事）。后面不局限于 가다/오다。",
        "meaning_en": "In order to / Intend to do something.",
        "rules": ["无收音+려고", "有收音+으려고"],
        "examples": [{"ko": "한국에서 취직하려고 한국어를 배워요.", "en": "I am learning Korean in order to get a job in Korea.", "zh": "为了在韩国就业而学习韩语。"}]
    },
    {
        "id": "l2_c7", "category": "4. Conjunctions (연결어미)", "level": "L2", "title": "-(으)면 (If / When)",
        "desc": "If / When",
        "meaning_zh": "表示条件或假定（如果...的话）。",
        "meaning_en": "If / When.",
        "rules": ["无收音+면", "有收音+으면"],
        "examples": [{"ko": "돈이 많으면 차를 살 거예요.", "en": "If I have a lot of money, I will buy a car.", "zh": "如果有钱就买车。"}]
    },
    {
        "id": "l2_c8", "category": "4. Conjunctions (연결어미)", "level": "L2", "title": "-(으)면서 (While doing)",
        "desc": "While doing two things simultaneously",
        "meaning_zh": "表示同一主语同时进行两个动作（一边...一边...）。",
        "meaning_en": "While doing (simultaneous actions by the same subject).",
        "rules": ["无收音+면서", "有收音+으면서"],
        "examples": [{"ko": "음악을 들으면서 운동을 해요.", "en": "I exercise while listening to music.", "zh": "一边听音乐一边运动。"}]
    },
    {
        "id": "l2_c9", "category": "4. Conjunctions (연결어미)", "level": "L2", "title": "-기 전에 / -(으)ㄴ 후에",
        "desc": "Before / After",
        "meaning_zh": "在某动作之前 / 之后。",
        "meaning_en": "Before doing / After doing.",
        "rules": ["动词+기 전에", "动词+(으)ㄴ 후에"],
        "examples": [
            {"ko": "밥을 먹기 전에 손을 씻어요.", "en": "I wash my hands before eating.", "zh": "饭前洗手。"},
            {"ko": "숙제를 한 후에 텔레비전을 봐요.", "en": "I watch TV after doing my homework.", "zh": "做完作业后看电视。"}
        ]
    },

    // ================= LEVEL 3: NOUN MODIFIERS & EXP (관형사형 / 경험) =================
    {
        "id": "l3_n1", "category": "5. Noun Modifiers (관형사형)", "level": "L3", "title": "-(으)ㄴ / -는 / -(으)ㄹ (Modifying Nouns)",
        "desc": "Relative clauses (Past / Present / Future)",
        "meaning_zh": "定语词尾，将动词/形容词变为修饰名词的形态（...的）。",
        "meaning_en": "Modifiers used to create relative clauses.",
        "rules": [
            "动词过去时：-(으)ㄴ 명사",
            "动词现在时：-는 명사",
            "动词将来时：-(으)ㄹ 명사",
            "形容词现在时：-(으)ㄴ 명사"
        ],
        "examples": [
            {"ko": "어제 먹은 음식", "en": "The food I ate yesterday", "zh": "昨天吃的食物"},
            {"ko": "지금 먹는 음식", "en": "The food I am eating now", "zh": "现在正在吃的食物"},
            {"ko": "내일 먹을 음식", "en": "The food I will eat tomorrow", "zh": "明天要吃的食物"},
            {"ko": "예쁜 옷", "en": "Pretty clothes", "zh": "漂亮的衣服 (形容词)"}
        ]
    },
    {
        "id": "l3_e1", "category": "6. Experience (경험)", "level": "L3", "title": "-아/어 보다 (Try doing)",
        "desc": "Try doing something",
        "meaning_zh": "尝试做某事，或询问经验。",
        "meaning_en": "Try to do something, or experience doing it.",
        "rules": ["动词 + 아/어 보다"],
        "examples": [{"ko": "이 신발을 신어 보세요.", "en": "Please try wearing these shoes.", "zh": "请试穿这双鞋。"}]
    },
    {
        "id": "l3_e2", "category": "6. Experience (경험)", "level": "L3", "title": "-(으)ㄴ 적이 있다/없다",
        "desc": "Have/Haven't experienced",
        "meaning_zh": "表示曾经有过/没有过某种经验。",
        "meaning_en": "Have/Haven't ever done something.",
        "rules": ["无收音+ㄴ 적이 있다", "有收音+은 적이 있다"],
        "examples": [{"ko": "유럽에 여행 간 적이 있어요.", "en": "I have been on a trip to Europe.", "zh": "我曾经去欧洲旅行过。"}]
    },

    // ================= LEVEL 3-4: QUOTATION (간접화법) =================
    {
        "id": "l3_q1", "category": "7. Indirect Quotation (간접화법)", "level": "L3", "title": "-다고 하다 (Statement Quotation)",
        "desc": "Someone said that... (Statement)",
        "meaning_zh": "转述别人的陈述句（某人说...）。",
        "meaning_en": "Quoting a statement.",
        "rules": ["动词: -ㄴ/는다고 하다", "形容词: -다고 하다", "名词: -(이)라고 하다"],
        "examples": [{"ko": "민수 씨가 바쁘다고 해요.", "en": "Minsu says he is busy.", "zh": "民秀说他很忙。"}]
    },
    {
        "id": "l3_q2", "category": "7. Indirect Quotation (간접화법)", "level": "L3", "title": "-냐고 하다 (Question Quotation)",
        "desc": "Someone asked if... (Question)",
        "meaning_zh": "转述别人的疑问句（某人问...）。",
        "meaning_en": "Quoting a question.",
        "rules": ["动/形容词 + 냐고 하다"],
        "examples": [{"ko": "친구가 어디 가냐고 했어요.", "en": "My friend asked where I am going.", "zh": "朋友问我去哪。"}]
    },
    {
        "id": "l3_q3", "category": "7. Indirect Quotation (간접화법)", "level": "L3", "title": "-자고 하다 (Suggestion Quotation)",
        "desc": "Someone suggested that... (Suggestion)",
        "meaning_zh": "转述共动句（某人提议一起...）。",
        "meaning_en": "Quoting a suggestion (Let's...).",
        "rules": ["动词 + 자고 하다"],
        "examples": [{"ko": "친구가 밥을 먹자고 해요.", "en": "My friend suggested we eat.", "zh": "朋友提议一起吃饭。"}]
    },
    {
        "id": "l3_q4", "category": "7. Indirect Quotation (간접화법)", "level": "L3", "title": "-라고 하다 (Command Quotation)",
        "desc": "Someone commanded to... (Command)",
        "meaning_zh": "转述命令句（某人让...）。",
        "meaning_en": "Quoting a command.",
        "rules": ["动词无收音+라고 하다", "有收音+으라고 하다"],
        "examples": [{"ko": "의사 선생님이 약을 먹으라고 하셨어요.", "en": "The doctor told me to take the medicine.", "zh": "医生让我吃药。"}]
    },

    // ================= LEVEL 4: GUESS & BACKGROUND (추측/배경) =================
    {
        "id": "l4_g1", "category": "8. Guess & Supposition (추측)", "level": "L4", "title": "-(으)ㄴ/는/(으)ㄹ 것 같다",
        "desc": "It seems that...",
        "meaning_zh": "最常用的推测（好像...，我觉得...）。",
        "meaning_en": "It seems/looks like...",
        "rules": ["依时态加上定语词尾 + 것 같다"],
        "examples": [{"ko": "비가 올 것 같아요.", "en": "It seems like it will rain.", "zh": "好像要下雨了。"}]
    },
    {
        "id": "l4_g2", "category": "8. Guess & Supposition (추측)", "level": "L4", "title": "-나 보다 / -(으)ㄴ가 보다",
        "desc": "I guess / I assume based on evidence",
        "meaning_zh": "基于某种视觉或听觉证据作出的推测（看来...）。",
        "meaning_en": "I assume (based on observation).",
        "rules": ["动词 + 나 보다", "形容词 + (으)ㄴ가 보다"],
        "examples": [{"ko": "사람들이 우산을 쓰는 걸 보니 비가 오나 봐요.", "en": "Seeing people use umbrellas, it must be raining.", "zh": "看大家打伞，看来是下雨了。"}]
    },
    {
        "id": "l4_b1", "category": "9. Background & Contrast (배경/대조)", "level": "L4", "title": "-는데 / -(으)ㄴ데",
        "desc": "Background information / But",
        "meaning_zh": "1. 提示背景信息。2. 轻微的转折（但是）。",
        "meaning_en": "Background information, or a soft 'but'.",
        "rules": ["动词 + 는데", "形容词 + (으)ㄴ데"],
        "examples": [{"ko": "날씨가 좋은데 산책할까요?", "en": "The weather is nice, shall we take a walk? (Background)", "zh": "天气很好，要不要去散步？"}]
    },
    {
        "id": "l4_b2", "category": "9. Background & Contrast (배경/대조)", "level": "L4", "title": "-(으)ㄴ/는 반면에",
        "desc": "On the other hand",
        "meaning_zh": "鲜明的对比（与...相反，另一方面）。",
        "meaning_en": "On the other hand; whereas.",
        "rules": ["动词 + 는 반면에", "形容词 + (으)ㄴ 반면에"],
        "examples": [{"ko": "이 아파트는 교통이 편한 반면에 너무 비싸요.", "en": "This apartment is convenient for transport, but on the other hand, it's too expensive.", "zh": "这套公寓交通便利，相反也太贵了。"}]
    },

    // ================= LEVEL 4: ADVANCED CAUSE & RESULT (고급 원인) =================
    {
        "id": "l4_c1", "category": "10. Advanced Cause (고급 원인)", "level": "L4", "title": "-느라고",
        "desc": "Because of doing ~ (negative result)",
        "meaning_zh": "因为做前置的动作，而没能做后置的动作（导致负面结果或耽误了某事）。",
        "meaning_en": "Because of doing ~ (used as an excuse for a negative outcome).",
        "rules": ["动词 + 느라고"],
        "examples": [{"ko": "일하느라고 전화를 못 받았어요.", "en": "I couldn't answer the phone because I was working.", "zh": "因为工作没接到电话。"}]
    },
    {
        "id": "l4_c2", "category": "10. Advanced Cause (고급 원인)", "level": "L4", "title": "-는 바람에",
        "desc": "Due to a sudden event (negative)",
        "meaning_zh": "由于突发、不受控制的原因导致了负面结果。",
        "meaning_en": "Due to an unexpected event leading to a negative consequence.",
        "rules": ["动词 + 는 바람에"],
        "examples": [{"ko": "버스를 놓치는 바람에 지각했어요.", "en": "Because I missed the bus, I was late.", "zh": "因为错过公交车而迟到了。"}]
    },
    {
        "id": "l4_c3", "category": "10. Advanced Cause (고급 원인)", "level": "L4", "title": "-(으)ㄴ/는 탓에",
        "desc": "To be to blame for / Due to the fault of",
        "meaning_zh": "怪罪、归咎于某种原因（都怪...）。",
        "meaning_en": "Blaming a negative result on something.",
        "rules": ["动/形 + 탓에"],
        "examples": [{"ko": "눈이 온 탓에 길이 많이 막혀요.", "en": "The roads are blocked due to the snow.", "zh": "都怪下雪，路堵得很厉害。"}]
    },

    // ================= LEVEL 5: ACADEMIC & EXTREMES (한국사회 / 최상급) =================
    {
        "id": "l5_a1", "category": "11. Academic & Formal (학술/문어체)", "level": "L5", "title": "-(으)로 말미암아",
        "desc": "Due to, caused by (Highly formal)",
        "meaning_zh": "由于，因为。极度正式的书面语，完全等同于 -(으)로 인하여。",
        "meaning_en": "Due to, caused by. Highly formal.",
        "rules": ["名词 + (으)로 말미암아"],
        "examples": [{"ko": "지진으로 말미암아 건물이 붕괴되었다.", "en": "Buildings collapsed due to the earthquake.", "zh": "由于地震建筑倒塌。"}]
    },
    {
        "id": "l5_e1", "category": "12. Extremes & Emphasis (극한/강조)", "level": "L5", "title": "-기 짝이 없다",
        "desc": "Beyond comparison, extremely",
        "meaning_zh": "...无比，极其...。表示某种状态达到了无法比较的极点，多用于负面。",
        "meaning_en": "Beyond comparison, exceptionally.",
        "rules": ["形容词 + 기 짝이 없다"],
        "examples": [{"ko": "그의 무례한 태도는 불쾌하기 짝이 없다.", "en": "His rude attitude is beyond unpleasant.", "zh": "他无礼的态度令人不快到了极点。"}]
    },
    {
        "id": "l5_e2", "category": "12. Extremes & Emphasis (극한/강조)", "level": "L5", "title": "-기 마련이다",
        "desc": "It is bound to, natural to",
        "meaning_zh": "必然规律（总是会...，理所当然）。",
        "meaning_en": "It is bound to happen; it is natural that...",
        "rules": ["动/形 + 기 마련이다"],
        "examples": [{"ko": "겨울이 가면 봄이 오기 마련이다.", "en": "When winter goes, spring is bound to come.", "zh": "冬去春来是必然的。"}]
    },
    {
        "id": "l5_e3", "category": "12. Extremes & Emphasis (극한/강조)", "level": "L5", "title": "-(으)ㄹ 리가 없다",
        "desc": "There is no way that...",
        "meaning_zh": "毫无道理，绝对不可能。强烈的否定推测。",
        "meaning_en": "There is no logic/reason for it to happen.",
        "rules": ["动/形 + (으)ㄹ 리가 없다"],
        "examples": [{"ko": "그렇게 착한 사람이 그런 일을 했을 리가 없어요.", "en": "There is no way such a nice person did that.", "zh": "那么善良的人不可能做那种事。"}]
    },
    {
        "id": "l5_e4", "category": "12. Extremes & Emphasis (극한/강조)", "level": "L5", "title": "-(으)ㄹ 턱이 없다",
        "desc": "There is absolutely no way (Strong)",
        "meaning_zh": "绝无可能，语气比 리가 없다 更强，带有荒谬的口吻。",
        "meaning_en": "Absolutely no way (stronger than 리가 없다).",
        "rules": ["动/形 + (으)ㄹ 턱이 없다"],
        "examples": [{"ko": "공부를 안 했는데 시험에 합격할 턱이 없지.", "en": "Didn't study, so there is no way to pass the exam.", "zh": "没学习，绝无可能考上。"}]
    },
    {
        "id": "l5_c1", "category": "13. Alternative Choices (선택)", "level": "L5", "title": "-느니 차라리",
        "desc": "Rather than A, I'd prefer B",
        "meaning_zh": "与其做A，不如做B。表示对A极度不满，勉强选择B。",
        "meaning_en": "Rather than doing A, I'd prefer to do B.",
        "rules": ["动词 + 느니 차라리"],
        "examples": [{"ko": "그를 기다리느니 차라리 내가 혼자 가겠다.", "en": "Rather than waiting for him, I'd rather go alone.", "zh": "与其等他，不如我一个人去。"}]
    },
    {
        "id": "l5_c2", "category": "13. Alternative Choices (선택)", "level": "L5", "title": "-다기보다는",
        "desc": "Rather than saying it is A, it is more like B",
        "meaning_zh": "与其说是A，不如说是B。",
        "meaning_en": "Rather than saying it's A, it's more like B.",
        "rules": ["形容词: -다기보다는", "名词: -(이)라기보다는"],
        "examples": [{"ko": "그 옷은 예쁘다기보다는 귀여워요.", "en": "Those clothes are cute rather than pretty.", "zh": "那件衣服与其说漂亮不如说可爱。"}]
    },
    {
        "id": "l5_x1", "category": "11. Academic & Formal (학술/문어체)", "level": "L5", "title": "-(으)련만",
        "desc": "I would hope/expect A, but B",
        "meaning_zh": "本以为...可惜却...。表达遗憾或与期待相反的结果。",
        "meaning_en": "I expected/hoped for A, but unfortunately B happened.",
        "rules": ["动/形 + (으)련만"],
        "examples": [{"ko": "비가 안 오면 좋으련만, 계속 내리네요.", "en": "It would be nice if it didn't rain, but it keeps pouring.", "zh": "要是下雨就好了，可惜一直下。"}]
    }
];
