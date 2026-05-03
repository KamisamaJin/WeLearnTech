import json
import uuid

new_grammars = [
    {
        "id": "new_l2_01",
        "category": "6. 진행 및 상태 (Progression & State)",
        "level": "L2",
        "title": "~는 중이다",
        "desc": "In the middle of ~ing",
        "meaning_zh": "表示某动作正在进行中（正在...）。比 ~고 있다 更强调动作的具体进行过程或当下正忙于做某事。",
        "meaning_en": "Indicates that an action is currently in progress. Often emphasizes being in the middle of doing something right now.",
        "rules": [
            { "zh": "동사+는 중이다", "en": "Verb + 는 중이다" },
            { "zh": "명사+중이다", "en": "Noun + 중이다" }
        ],
        "examples": [
            {
                "ko": "지금 밥을 먹는 중이에요.",
                "en": "I am in the middle of eating right now.",
                "zh": "我现在正在吃饭。"
            },
            {
                "ko": "회의 중이니까 나중에 전화하세요.",
                "en": "I am in a meeting, so please call back later.",
                "zh": "正在开会，请稍后打电话。"
            }
        ],
        "notes": "💡 Tips: Cannot be used with adjectives or natural phenomena (비가 오는 중이다 ✗ -> 비가 오고 있다 ✓).\n⚠ 限制：不能与形容词或自然现象搭配（如下雨）。名词后可直接加 중이다（如 공사 중 = 施工中）。"
    },
    {
        "id": "new_l2_02",
        "category": "1. 조사 (Particles)",
        "level": "L2",
        "title": "~밖에",
        "desc": "Nothing but / Only",
        "meaning_zh": "表示“只有... / 除了...之外没有”。后面必须接否定词（안, 못, 없다, 모르다 等）。",
        "meaning_en": "Means 'only' or 'nothing but'. MUST be followed by a negative form (안, 못, 없다, 모르다, etc.).",
        "rules": [
            { "zh": "명사+밖에", "en": "Noun + 밖에" }
        ],
        "examples": [
            {
                "ko": "지갑에 1000원밖에 없어요.",
                "en": "I have nothing but 1,000 won in my wallet.",
                "zh": "钱包里只有1000韩元了。"
            },
            {
                "ko": "한국어는 '안녕하세요'밖에 몰라요.",
                "en": "I know nothing but 'Hello' in Korean.",
                "zh": "韩语我只会说一句“你好”。"
            }
        ],
        "notes": "💡 Tips: Unlike ~만 (only), ~밖에 MUST always be paired with a negative ending. You cannot say 1000원밖에 있어요 (✗).\n⚠ 核心规则：与 ~만(只) 类似，但 ~밖에 后面【绝对不能接肯定句】。不能说 1000원밖에 있어요 (✗)。"
    },
    {
        "id": "new_l3_01",
        "category": "10. 비교 및 대조 (Comparison & Contrast)",
        "level": "L3",
        "title": "~는 대신에",
        "desc": "Instead of / In return for",
        "meaning_zh": "表示“代替/作为补偿”。可以表示用一件事替代另一件事，或者做了一件事后作为回报做另一件事。",
        "meaning_en": "Means 'instead of' or 'in return/exchange for'. Used to show replacement or compensation for an action.",
        "rules": [
            { "zh": "동사+는 대신에", "en": "Verb + 는 대신에" },
            { "zh": "형용사+(으)ㄴ 대신에", "en": "Adj + (으)ㄴ 대신에" },
            { "zh": "명사+대신에", "en": "Noun + 대신에" }
        ],
        "examples": [
            {
                "ko": "제가 요리를 하는 대신에 설거지를 해주세요.",
                "en": "I will cook, so please do the dishes in return.",
                "zh": "我来做饭，作为交换请你洗碗。"
            },
            {
                "ko": "이 옷은 비싼 대신에 질이 좋아요.",
                "en": "This clothes is expensive, but in exchange the quality is good.",
                "zh": "这件衣服虽然贵，但相对的质量很好。"
            }
        ],
        "notes": "💡 Tips: Often shortened to ~는 대신. Can mean a direct replacement (A instead of B) or a trade-off (expensive BUT good quality).\n⚠ 代替与补偿：不仅可以表示“用B代替A”，还可以表示事物的两面性补偿（价格贵，但作为补偿质量很好）。"
    },
    {
        "id": "new_l3_02",
        "category": "8. 조건 및 가정 (Conditions & Suppositions)",
        "level": "L3",
        "title": "~(으)면 되다",
        "desc": "All you need to do is / It is okay if",
        "meaning_zh": "表示只要满足某个最低条件就可以了（只要...就行 / ...就可以了）。",
        "meaning_en": "Indicates that meeting a certain condition is sufficient. 'All you have to do is...' or 'It is enough if...'",
        "rules": [
            { "zh": "동/형+(으)면 되다", "en": "V/A + (으)면 되다" }
        ],
        "examples": [
            {
                "ko": "여기에 서명만 하시면 됩니다.",
                "en": "All you need to do is sign here.",
                "zh": "您只要在这里签个字就行了。"
            },
            {
                "ko": "버스를 타고 3정거장만 가면 돼요.",
                "en": "You just need to take the bus for 3 stops.",
                "zh": "坐巴士坐3站就可以了。"
            }
        ],
        "notes": "💡 Tips: Often paired with ~만 (only) to emphasize how simple the required condition is (만 ~(으)면 되다).\n⚠ 极简条件：通常搭配 ~만(只) 一起使用，强调完成某事的条件非常简单（只要做...就行了）。"
    },
    {
        "id": "new_l4_01",
        "category": "7. 추측 및 짐작 (Guessing & Assuming)",
        "level": "L4",
        "title": "~는 모양이다",
        "desc": "It appears that / Looks like",
        "meaning_zh": "基于客观情况或线索做出的推测（看样子是... / 似乎是...）。不能用于第一人称（自己）的事情。",
        "meaning_en": "An objective guess based on a situation or observation (It appears/looks like...). Cannot be used for one's own actions.",
        "rules": [
            { "zh": "동사+는 모양이다", "en": "Verb + 는 모양이다" },
            { "zh": "형용사+(으)ㄴ 모양이다", "en": "Adj + (으)ㄴ 모양이다" },
            { "zh": "명사+인 모양이다", "en": "Noun + 인 모양이다" }
        ],
        "examples": [
            {
                "ko": "우산이 있는 걸 보니까 비가 오는 모양이에요.",
                "en": "Seeing the umbrella, it looks like it is raining.",
                "zh": "看到有伞，看样子是在下雨。"
            },
            {
                "ko": "식당에 사람이 없는 걸 보니 맛이 없는 모양이에요.",
                "en": "Seeing no people in the restaurant, it seems the food is not good.",
                "zh": "看到餐厅里没人，似乎不好吃。"
            }
        ],
        "notes": "💡 Tips: Often preceded by ~(으)ㄴ/는 걸 보니까 (Seeing that...). Cannot be used for your own actions or direct subjective feelings.\n⚠ 客观推测：前面通常搭配 ~(으)ㄴ/는 걸 보니까 (看到...) 作为推测依据。绝对不能用来推测自己的行为！"
    },
    {
        "id": "new_l4_02",
        "category": "3. 연결어미 (Connective endings)",
        "level": "L4",
        "title": "~다 보니(까)",
        "desc": "While doing something, one realizes/ends up...",
        "meaning_zh": "表示在持续做某事的过程中，发现了新的事实，或者自然而然产生了某种结果（做着做着发现... / 一直做...结果...）。",
        "meaning_en": "Indicates that while continuously doing an action, one realizes a new fact or a certain result naturally occurs.",
        "rules": [
            { "zh": "동사+다 보니(까)", "en": "Verb + 다 보니(까)" }
        ],
        "examples": [
            {
                "ko": "한국에 오래 살다 보니 매운 음식을 잘 먹게 되었어요.",
                "en": "As I lived in Korea for a long time, I ended up eating spicy food well.",
                "zh": "在韩国住久了，结果变得很能吃辣了。"
            },
            {
                "ko": "매일 만나다 보니까 정이 들었어요.",
                "en": "As we met every day, we naturally grew fond of each other.",
                "zh": "每天见面，不知不觉就产生了感情。"
            }
        ],
        "notes": "💡 Tips: Only attaches to verbs. Focuses on the continuous repetition of a past action leading to a new realization or habit.\n⚠ 持续与结果：只能接动词。强调前面的动作必须是持续或反复发生的，才导致了后面的自然结果。"
    },
    {
        "id": "new_l4_03",
        "category": "8. 조건 및 가정 (Conditions & Suppositions)",
        "level": "L4",
        "title": "~다가는",
        "desc": "If one keeps doing this, then (negative result)",
        "meaning_zh": "表示如果前面的动作或状态一直持续下去，就会导致不好的结果（如果一直这样...的话，就会...）。",
        "meaning_en": "Warns that if an action/state continues as it is, a negative consequence will inevitably follow.",
        "rules": [
            { "zh": "동사+다가는", "en": "Verb + 다가는" }
        ],
        "examples": [
            {
                "ko": "그렇게 매일 술을 마시다가는 건강이 나빠질 거예요.",
                "en": "If you keep drinking every day like that, your health will get worse.",
                "zh": "如果每天像那样喝酒的话，身体会变差的。"
            },
            {
                "ko": "게임을 계속 하다가는 시험에 떨어질 텐데 걱정이에요.",
                "en": "I'm worried you'll fail the exam if you keep playing games.",
                "zh": "如果一直玩游戏的话考试会落榜的，真让人担心。"
            }
        ],
        "notes": "💡 Tips: Always predicts a NEGATIVE outcome. The second clause often uses future tense or guessing forms like ~(으)ㄹ 거예요 / ~(으)ㄹ 텐데.\n⚠ 负面预警：后半句【必定是不好的结果】，且经常搭配将来时或推测语气（会变坏的 / 会失败的）。"
    },
    {
        "id": "new_l4_04",
        "category": "8. 조건 및 가정 (Conditions & Suppositions)",
        "level": "L4",
        "title": "~아/어서야",
        "desc": "Only after / Not until",
        "meaning_zh": "表示只有满足了前面的条件或时间点，后面才能发生（必须要...才... / 直到...才...）。带有强调条件极其苛刻的语气。",
        "meaning_en": "Means 'only after' doing something or 'not until' a certain point. Emphasizes that the condition is strict or late.",
        "rules": [
            { "zh": "동/형+아/어서야", "en": "V/A + 아/어서야" }
        ],
        "examples": [
            {
                "ko": "밤 12시가 되어서야 집에 도착했어요.",
                "en": "I didn't arrive home until it became 12 midnight.",
                "zh": "直到晚上12点才到家。"
            },
            {
                "ko": "이런 실력으로 취직을 해서야 되겠어요?",
                "en": "With this kind of skill, how can you expect to get a job?",
                "zh": "就这点实力能找得到工作吗？（反问：必须要更好才行）"
            }
        ],
        "notes": "💡 Tips: Used to emphasize lateness/difficulty. Often paired with rhetorical questions ending in ~겠어요? or ~되겠어요?.\n⚠ 极限条件：常用来表示某事发生得太晚，或者反问对方“这样的条件怎么可能行得通呢？”（搭配~되겠어요?）。"
    },
    {
        "id": "new_l4_05",
        "category": "5. 종결어미 (Final endings)",
        "level": "L4",
        "title": "~고말고(요)",
        "desc": "Of course / Certainly",
        "meaning_zh": "强烈地肯定对方的提问或同意对方的意见（那是当然... / 绝对会...）。",
        "meaning_en": "Used to strongly agree with the listener or confirm that something is an absolute certainty ('Of course I will/it is').",
        "rules": [
            { "zh": "동/형+고말고요", "en": "V/A + 고말고요" },
            { "zh": "명사+(이)고말고요", "en": "Noun + (이)고말고요" }
        ],
        "examples": [
            {
                "ko": "가: 그 영화가 재미있어요? 나: 재미있고말고요!",
                "en": "A: Is that movie fun? B: Of course it's fun!",
                "zh": "甲：那部电影好看吗？ 乙：那当然好看啦！"
            },
            {
                "ko": "친구가 부탁하면 제가 도와주고말고요.",
                "en": "If a friend asks for a favor, of course I will help.",
                "zh": "朋友要是拜托我，我当然会帮忙。"
            }
        ],
        "notes": "💡 Tips: A very enthusiastic and conversational way to say 'Absolutely'. Often repeats the verb/adjective used in the question.\n⚠ 绝对肯定：口语中用来积极回应对方，语气比单纯的 '네' 强烈得多。通常会重复对方提问时的动词或形容词。"
    },
    {
        "id": "new_l4_06",
        "category": "14. 간접화법 (Reported Speech)",
        "level": "L4",
        "title": "~달라고 하다",
        "desc": "Asked to give (to the speaker)",
        "meaning_zh": "间接引语。转述“请给我（说话人自己）...”的请求。原句为 주십시오 / 주세요 时使用。",
        "meaning_en": "Indirect request. Used when quoting someone asking to give something TO THEMSELVES (the original speaker).",
        "rules": [
            { "zh": "명사+달라고 하다", "en": "Noun + 달라고 하다" },
            { "zh": "동사+아/어 달라고 하다", "en": "Verb + 아/어 달라고 하다" }
        ],
        "examples": [
            {
                "ko": "아이가 엄마에게 용돈을 달라고 했어요.",
                "en": "The child asked his mom to give HIM pocket money.",
                "zh": "孩子叫妈妈给他零花钱。"
            },
            {
                "ko": "친구가 문을 열어 달라고 했어요.",
                "en": "My friend asked me to open the door FOR HIM.",
                "zh": "朋友让我帮他开一下门。"
            }
        ],
        "notes": "💡 Tips: Crucial distinction: Use 달라고 하다 when the benefit/object goes to the original requester. If it goes to a 3rd party, use 주라고 하다.\n⚠ 核心考点：如果原始说话人是为【自己】索要东西或请求帮助，转述时必须把 주다 变成 달라고 하다！"
    },
    {
        "id": "new_l4_07",
        "category": "14. 간접화법 (Reported Speech)",
        "level": "L4",
        "title": "~아/어 주라고 하다",
        "desc": "Asked to give (to a third person)",
        "meaning_zh": "间接引语。转述“请给（第三者）...”的请求。说话人要求听话人为别人做事。",
        "meaning_en": "Indirect request. Used when quoting someone asking to give something to a THIRD PARTY (not the speaker).",
        "rules": [
            { "zh": "명사+주라고 하다", "en": "Noun + 주라고 하다" },
            { "zh": "동사+아/어 주라고 하다", "en": "Verb + 아/어 주라고 하다" }
        ],
        "examples": [
            {
                "ko": "선생님이 반장에게 이 책을 민수에게 주라고 하셨어요.",
                "en": "The teacher told the class president to give this book to Minsu.",
                "zh": "老师叫班长把这本书给敏秀。"
            },
            {
                "ko": "엄마가 동생을 도와주라고 했어요.",
                "en": "Mom told me to help my younger sibling.",
                "zh": "妈妈叫我帮一下弟弟。"
            }
        ],
        "notes": "💡 Tips: The action benefits someone else (a third person). If the teacher said 'Give it to me', it would be 달라고 하다.\n⚠ 核心考点：如果原始说话人是让听话人去帮助【第三个人】或把东西给【第三个人】，转述时保留 주라고 하다！"
    }
]

with open("grammar_data.js", "r", encoding="utf-8") as f:
    txt = f.read()
    data_str = txt[txt.index("["):txt.rindex("]")+1]
    data = json.loads(data_str)

# Extend with new grammars
data.extend(new_grammars)

with open("grammar_data.js", "w", encoding="utf-8") as f:
    f.write(f"// KIIP Grammar Database (Updated to KIIP 2021+ New Curriculum Levels, Total: {len(data)})\n")
    f.write("const grammarDB = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")

print(f"Successfully appended {len(new_grammars)} new KIIP grammar points! New Total: {len(data)}")
