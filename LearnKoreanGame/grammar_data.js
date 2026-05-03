// KIIP Grammar Database (133 grammar points)
// Source: kiipgrammar.com + KIIP 교재

const grammarDB = [
  {
    "id": "l1u11b",
    "category": "1. 조사 (Particles)",
    "level": "L1",
    "title": "~보다",
    "desc": "Than (comparison)",
    "meaning_zh": "比较助词",
    "meaning_en": "Comparison particle",
    "rules": [
      "名词+보다"
    ],
    "examples": [
      {
        "ko": "사과보다 수박이 더 커요.",
        "en": "Watermelon is bigger than apple.",
        "zh": "西瓜比苹果大。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u12a",
    "category": "1. 조사 (Particles)",
    "level": "L1",
    "title": "~께서",
    "desc": "Honorific subject",
    "meaning_zh": "敬语主格助词(이/가的敬语)",
    "meaning_en": "Honorific subject particle",
    "rules": [
      "어른+께서"
    ],
    "examples": [
      {
        "ko": "할머니께서 오셨어요.",
        "en": "Grandmother came.",
        "zh": "奶奶来了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u14",
    "category": "1. 조사 (Particles)",
    "level": "L1",
    "title": "~만",
    "desc": "Only",
    "meaning_zh": "限制助词，只/仅",
    "meaning_en": "Only, just",
    "rules": [
      "名词+만"
    ],
    "examples": [
      {
        "ko": "물만 마셔요.",
        "en": "I only drink water.",
        "zh": "只喝水。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u15a",
    "category": "1. 조사 (Particles)",
    "level": "L1",
    "title": "~에서 ~까지",
    "desc": "From ~ To ~",
    "meaning_zh": "从...到...",
    "meaning_en": "From ~ to ~",
    "rules": [
      "名词+에서",
      "名词+까지"
    ],
    "examples": [
      {
        "ko": "서울에서 부산까지",
        "en": "From Seoul to Busan",
        "zh": "从首尔到釜山"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u17b",
    "category": "1. 조사 (Particles)",
    "level": "L1",
    "title": "~(이)나",
    "desc": "Or / About",
    "meaning_zh": "或者/大约",
    "meaning_en": "Or, approximately",
    "rules": [
      "名词+(이)나"
    ],
    "examples": [
      {
        "ko": "커피나 주스 드세요.",
        "en": "Have coffee or juice.",
        "zh": "喝咖啡或果汁吧。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u19a",
    "category": "1. 조사 (Particles)",
    "level": "L1",
    "title": "~에게/께",
    "desc": "To (a person)",
    "meaning_zh": "动作对象助词(给...)",
    "meaning_en": "To a person/animal",
    "rules": [
      "人+에게/한테/께"
    ],
    "examples": [
      {
        "ko": "친구에게 선물을 줘요.",
        "en": "I give a gift to my friend.",
        "zh": "给朋友礼物。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u1a",
    "category": "1. 조사 (Particles)",
    "level": "L1",
    "title": "~이에요/예요",
    "desc": "Noun is/am/are",
    "meaning_zh": "名词后接，表示'是...'",
    "meaning_en": "Attached to nouns, means 'is'",
    "rules": [
      "有收音+이에요",
      "无收音+예요"
    ],
    "examples": [
      {
        "ko": "학생이에요.",
        "en": "I am a student.",
        "zh": "是学生。"
      },
      {
        "ko": "미화 씨 친구예요.",
        "en": "It's Mihwa's friend.",
        "zh": "是美华的朋友。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u1b",
    "category": "1. 조사 (Particles)",
    "level": "L1",
    "title": "~은/는",
    "desc": "Topic particle",
    "meaning_zh": "主题助词，标记话题或对比",
    "meaning_en": "Marks topic or contrast",
    "rules": [
      "有收音+은",
      "无收音+는"
    ],
    "examples": [
      {
        "ko": "저는 학생입니다.",
        "en": "I am a student.",
        "zh": "我是学生。"
      },
      {
        "ko": "제 이름은 자야예요.",
        "en": "My name is Jaya.",
        "zh": "我的名字是Jaya。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u2b",
    "category": "1. 조사 (Particles)",
    "level": "L1",
    "title": "~이/가",
    "desc": "Subject particle",
    "meaning_zh": "主格助词，标记主语",
    "meaning_en": "Marks the subject of sentence",
    "rules": [
      "有收音+이",
      "无收音+가"
    ],
    "examples": [
      {
        "ko": "비가 와요.",
        "en": "It rains.",
        "zh": "下雨了。"
      },
      {
        "ko": "누가 왔어요?",
        "en": "Who came?",
        "zh": "谁来了？"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u3a",
    "category": "1. 조사 (Particles)",
    "level": "L1",
    "title": "~에 (장소/시간)",
    "desc": "Location/Time particle",
    "meaning_zh": "表示地点(存在/方向)或时间",
    "meaning_en": "Location or time marker",
    "rules": [
      "名词+에"
    ],
    "examples": [
      {
        "ko": "학교에 가요.",
        "en": "I go to school.",
        "zh": "去学校。"
      },
      {
        "ko": "3시에 만나요.",
        "en": "Let's meet at 3.",
        "zh": "3点见。"
      }
    ],
    "notes": "어제/오늘/내일/지금 后不加에"
  },
  {
    "id": "l1u4a",
    "category": "1. 조사 (Particles)",
    "level": "L1",
    "title": "~을/를",
    "desc": "Object particle",
    "meaning_zh": "宾格助词，标记动作对象",
    "meaning_en": "Marks the direct object",
    "rules": [
      "有收音+을",
      "无收音+를"
    ],
    "examples": [
      {
        "ko": "밥을 먹어요.",
        "en": "I eat rice.",
        "zh": "吃饭。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u5b",
    "category": "1. 조사 (Particles)",
    "level": "L1",
    "title": "~(으)로",
    "desc": "Direction/Method",
    "meaning_zh": "方向、手段、材料助词",
    "meaning_en": "Direction, means, or material",
    "rules": [
      "无收音/ㄹ+로",
      "有收音+으로"
    ],
    "examples": [
      {
        "ko": "버스로 가요.",
        "en": "I go by bus.",
        "zh": "坐公交车去。"
      },
      {
        "ko": "오른쪽으로 가세요.",
        "en": "Go right.",
        "zh": "请往右边走。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u6a",
    "category": "1. 조사 (Particles)",
    "level": "L1",
    "title": "~에서",
    "desc": "Dynamic location / From",
    "meaning_zh": "动作发生地点或起点",
    "meaning_en": "Location of action or starting point",
    "rules": [
      "名词+에서"
    ],
    "examples": [
      {
        "ko": "식당에서 먹어요.",
        "en": "I eat at the restaurant.",
        "zh": "在餐厅吃。"
      },
      {
        "ko": "중국에서 왔어요.",
        "en": "I came from China.",
        "zh": "从中国来。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u6b",
    "category": "1. 조사 (Particles)",
    "level": "L1",
    "title": "~하고",
    "desc": "And (Noun connector)",
    "meaning_zh": "并列助词，和",
    "meaning_en": "And (connects nouns)",
    "rules": [
      "名词+하고"
    ],
    "examples": [
      {
        "ko": "빵하고 우유",
        "en": "Bread and milk",
        "zh": "面包和牛奶"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u8",
    "category": "1. 조사 (Particles)",
    "level": "L1",
    "title": "~도",
    "desc": "Also/Too",
    "meaning_zh": "包含助词，也",
    "meaning_en": "Also, too",
    "rules": [
      "名词+도"
    ],
    "examples": [
      {
        "ko": "저도 학생이에요.",
        "en": "I'm also a student.",
        "zh": "我也是学生。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u3b",
    "category": "1. 조사 (Particles)",
    "level": "L2",
    "title": "~마다",
    "desc": "Every",
    "meaning_zh": "每...",
    "meaning_en": "Every, each",
    "rules": [
      "名词+마다"
    ],
    "examples": [
      {
        "ko": "주말마다 운동해요.",
        "en": "I exercise every weekend.",
        "zh": "每个周末运动。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u16a",
    "category": "1. 조사 (Particles)",
    "level": "L4",
    "title": "~(으)로 인해서",
    "desc": "Due to (formal)",
    "meaning_zh": "由于(正式/书面)",
    "meaning_en": "Due to (formal cause)",
    "rules": [
      "명사+(으)로 인해서"
    ],
    "examples": [
      {
        "ko": "태풍으로 인해 피해가 컸다.",
        "en": "Damage was great due to the typhoon.",
        "zh": "由于台风损失很大。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u11a",
    "category": "10. 의지·결정 (Will & Decision)",
    "level": "L1",
    "title": "~고 싶다",
    "desc": "Want to",
    "meaning_zh": "想做...",
    "meaning_en": "Want to do",
    "rules": [
      "动词+고 싶다"
    ],
    "examples": [
      {
        "ko": "한국에 가고 싶어요.",
        "en": "I want to go to Korea.",
        "zh": "想去韩国。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u11a",
    "category": "10. 의지·결정 (Will & Decision)",
    "level": "L2",
    "title": "~(으)려고 하다",
    "desc": "Plan to/Intend to",
    "meaning_zh": "打算做...",
    "meaning_en": "Intend/plan to do",
    "rules": [
      "무받침+려고 하다",
      "받침+으려고 하다"
    ],
    "examples": [
      {
        "ko": "한국에 가려고 해요.",
        "en": "I plan to go to Korea.",
        "zh": "打算去韩国。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u9b",
    "category": "10. 의지·결정 (Will & Decision)",
    "level": "L2",
    "title": "~기로 하다",
    "desc": "Decide to",
    "meaning_zh": "决定做...",
    "meaning_en": "Decide to do",
    "rules": [
      "동사+기로 하다"
    ],
    "examples": [
      {
        "ko": "한국어를 배우기로 했어요.",
        "en": "I decided to learn Korean.",
        "zh": "决定学韩语。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u1b",
    "category": "10. 의지·결정 (Will & Decision)",
    "level": "L4",
    "title": "~(으)려던 참이다",
    "desc": "Was just about to",
    "meaning_zh": "正要做...",
    "meaning_en": "Was just about to do",
    "rules": [
      "동사+(으)려던 참이다"
    ],
    "examples": [
      {
        "ko": "전화하려던 참이었어요.",
        "en": "I was just about to call.",
        "zh": "我正要打电话。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u8b",
    "category": "11. 추측 (Supposition)",
    "level": "L2",
    "title": "~(으)ㄹ 것 같다",
    "desc": "It seems like",
    "meaning_zh": "推测(好像...)",
    "meaning_en": "Guess/supposition",
    "rules": [
      "动/形+(으)ㄹ/ㄴ/는 것 같다"
    ],
    "examples": [
      {
        "ko": "비가 올 것 같아요.",
        "en": "It seems like it'll rain.",
        "zh": "好像要下雨。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u16a",
    "category": "11. 추측 (Supposition)",
    "level": "L3",
    "title": "~(으)ㄹ 테니까",
    "desc": "I will so...",
    "meaning_zh": "我会...所以你...",
    "meaning_en": "My intention, so you should...",
    "rules": [
      "동/형+(으)ㄹ 테니까"
    ],
    "examples": [
      {
        "ko": "제가 할 테니까 쉬세요.",
        "en": "I'll do it so you rest.",
        "zh": "我来做，你休息。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u19a",
    "category": "11. 추측 (Supposition)",
    "level": "L3",
    "title": "~(으)ㄹ까 봐",
    "desc": "Worried that",
    "meaning_zh": "担心会...",
    "meaning_en": "Worried/afraid that",
    "rules": [
      "동사+(으)ㄹ까 봐"
    ],
    "examples": [
      {
        "ko": "비가 올까 봐 우산을 가져갔어요.",
        "en": "Took an umbrella worried it'd rain.",
        "zh": "怕下雨所以带了伞。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u2a",
    "category": "11. 추측 (Supposition)",
    "level": "L3",
    "title": "~(으)ㄴ지/는지 알다/모르다",
    "desc": "Know whether",
    "meaning_zh": "知不知道是否...",
    "meaning_en": "Know/don't know whether",
    "rules": [
      "동+는지",
      "형+ㄴ/은지"
    ],
    "examples": [
      {
        "ko": "어디에 사는지 알아요?",
        "en": "Do you know where they live?",
        "zh": "知道住在哪吗？"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u2b",
    "category": "11. 추측 (Supposition)",
    "level": "L3",
    "title": "~(으)ㄹ 텐데",
    "desc": "I expect/assume but...",
    "meaning_zh": "推测+担忧(应该会...但是)",
    "meaning_en": "Expected situation with concern",
    "rules": [
      "동/형+(으)ㄹ 텐데"
    ],
    "examples": [
      {
        "ko": "바쁠 텐데 와 주셔서 감사합니다.",
        "en": "You must be busy, thanks for coming.",
        "zh": "应该很忙还来了，谢谢。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u15a",
    "category": "11. 추측 (Supposition)",
    "level": "L4",
    "title": "~(으)ㄹ 리가 없다",
    "desc": "No way / Impossible",
    "meaning_zh": "不可能...",
    "meaning_en": "No way, impossible",
    "rules": [
      "동/형+(으)ㄹ 리가 없다"
    ],
    "examples": [
      {
        "ko": "그가 거짓말을 할 리가 없어요.",
        "en": "There's no way he lied.",
        "zh": "他不可能撒谎。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u18a",
    "category": "11. 추측 (Supposition)",
    "level": "L4",
    "title": "~(으)ㄹ지도 모르다",
    "desc": "Might / Perhaps",
    "meaning_zh": "也许.../说不定...",
    "meaning_en": "Might, perhaps",
    "rules": [
      "동/형+(으)ㄹ지도 모르다"
    ],
    "examples": [
      {
        "ko": "내일 비가 올지도 몰라요.",
        "en": "It might rain tomorrow.",
        "zh": "明天说不定会下雨。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u18b",
    "category": "11. 추측 (Supposition)",
    "level": "L4",
    "title": "~(으)ㄴ/는 셈이다",
    "desc": "Practically / More or less",
    "meaning_zh": "算是...",
    "meaning_en": "Practically, is in effect",
    "rules": [
      "동+는 셈이다",
      "형+ㄴ/은 셈이다"
    ],
    "examples": [
      {
        "ko": "매일 운동하는 셈이에요.",
        "en": "I practically exercise every day.",
        "zh": "算是每天都运动了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u3a",
    "category": "11. 추측 (Supposition)",
    "level": "L4",
    "title": "~(으)ㄹ 줄 몰랐다/알았다",
    "desc": "Didn't expect / Expected",
    "meaning_zh": "没想到.../以为...",
    "meaning_en": "Unexpected/expected outcome",
    "rules": [
      "동/형+(으)ㄹ 줄 몰랐다"
    ],
    "examples": [
      {
        "ko": "이렇게 어려울 줄 몰랐어요.",
        "en": "Didn't expect it to be this hard.",
        "zh": "没想到这么难。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u6b",
    "category": "11. 추측 (Supposition)",
    "level": "L4",
    "title": "~나 보다/~(으)ㄴ가 보다",
    "desc": "It seems (evidence)",
    "meaning_zh": "看来.../似乎...(有证据)",
    "meaning_en": "Guess based on evidence",
    "rules": [
      "동+나 보다",
      "형+ㄴ가 보다"
    ],
    "examples": [
      {
        "ko": "비가 오나 봐요.",
        "en": "It seems like it's raining.",
        "zh": "看来下雨了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u15a",
    "category": "12. 간접화법 (Quotation)",
    "level": "L3",
    "title": "~다고/라고 하다",
    "desc": "Indirect statement",
    "meaning_zh": "间接引语(陈述句)",
    "meaning_en": "Indirect quotation (statement)",
    "rules": [
      "동: ㄴ/는다고",
      "형: 다고",
      "명: (이)라고"
    ],
    "examples": [
      {
        "ko": "민수가 바쁘다고 해요.",
        "en": "Minsu says he's busy.",
        "zh": "民秀说他忙。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u15b",
    "category": "12. 간접화법 (Quotation)",
    "level": "L3",
    "title": "~냐고 하다",
    "desc": "Indirect question",
    "meaning_zh": "间接引语(疑问句)",
    "meaning_en": "Indirect quotation (question)",
    "rules": [
      "동/형+냐고 하다"
    ],
    "examples": [
      {
        "ko": "언제 오냐고 했어요.",
        "en": "Asked when they're coming.",
        "zh": "问什么时候来。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u18a",
    "category": "12. 간접화법 (Quotation)",
    "level": "L3",
    "title": "~(으)라고 하다",
    "desc": "Indirect command",
    "meaning_zh": "间接引语(命令句)",
    "meaning_en": "Indirect quotation (command)",
    "rules": [
      "동사+(으)라고 하다"
    ],
    "examples": [
      {
        "ko": "의사가 쉬라고 했어요.",
        "en": "Doctor said to rest.",
        "zh": "医生让休息。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u18b",
    "category": "12. 간접화법 (Quotation)",
    "level": "L3",
    "title": "~자고 하다",
    "desc": "Indirect suggestion",
    "meaning_zh": "间接引语(共动句)",
    "meaning_en": "Indirect quotation (suggestion)",
    "rules": [
      "동사+자고 하다"
    ],
    "examples": [
      {
        "ko": "친구가 영화 보자고 했어요.",
        "en": "Friend suggested watching a movie.",
        "zh": "朋友提议看电影。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u11b",
    "category": "12. 간접화법 (Quotation)",
    "level": "L4",
    "title": "~다니까",
    "desc": "I said...! / I told you",
    "meaning_zh": "我说了.../我告诉你了",
    "meaning_en": "Insisting/repeating what was said",
    "rules": [
      "동: ㄴ/는다니까",
      "형: 다니까"
    ],
    "examples": [
      {
        "ko": "아프다니까요!",
        "en": "I said I'm sick!",
        "zh": "我说了我不舒服！"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u4a",
    "category": "12. 간접화법 (Quotation)",
    "level": "L4",
    "title": "~대요/래요/재요",
    "desc": "Contracted quotation",
    "meaning_zh": "缩略间接引语",
    "meaning_en": "Contracted indirect quotation",
    "rules": [
      "~다고 해요→~대요",
      "~라고 해요→~래요",
      "~자고 해요→~재요"
    ],
    "examples": [
      {
        "ko": "내일 비가 온대요.",
        "en": "They say it'll rain tomorrow.",
        "zh": "听说明天下雨。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u15a",
    "category": "13. 경험·변화 (Experience & Change)",
    "level": "L2",
    "title": "~아/어 보다",
    "desc": "Try doing",
    "meaning_zh": "尝试做某事/经验",
    "meaning_en": "Try doing; have experienced",
    "rules": [
      "동사+아/어 보다"
    ],
    "examples": [
      {
        "ko": "이 옷을 입어 보세요.",
        "en": "Try wearing this.",
        "zh": "请试穿这件。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u16b",
    "category": "13. 경험·변화 (Experience & Change)",
    "level": "L2",
    "title": "~아/어지다",
    "desc": "Become",
    "meaning_zh": "变得...",
    "meaning_en": "Become (change of state)",
    "rules": [
      "형+아/어지다"
    ],
    "examples": [
      {
        "ko": "날씨가 더워졌어요.",
        "en": "Weather became hot.",
        "zh": "天气变热了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u17b",
    "category": "13. 경험·변화 (Experience & Change)",
    "level": "L2",
    "title": "~게 되다",
    "desc": "Come to / End up",
    "meaning_zh": "(外力导致)变得...",
    "meaning_en": "Come to, end up",
    "rules": [
      "동/형+게 되다"
    ],
    "examples": [
      {
        "ko": "한국 음식을 좋아하게 됐어요.",
        "en": "I came to like Korean food.",
        "zh": "变得喜欢韩国食物了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u19a",
    "category": "13. 경험·변화 (Experience & Change)",
    "level": "L2",
    "title": "~(으)ㄴ 적이 있다/없다",
    "desc": "Have experienced",
    "meaning_zh": "曾经做过/没做过",
    "meaning_en": "Have/haven't experienced",
    "rules": [
      "동사+ㄴ/은 적이 있다"
    ],
    "examples": [
      {
        "ko": "한국에 간 적이 있어요.",
        "en": "I've been to Korea.",
        "zh": "去过韩国。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u12b",
    "category": "13. 경험·변화 (Experience & Change)",
    "level": "L4",
    "title": "~았/었더니",
    "desc": "After I did, then...",
    "meaning_zh": "做了之后（结果/变化）",
    "meaning_en": "After doing, the result was",
    "rules": [
      "동사+았/었더니"
    ],
    "examples": [
      {
        "ko": "많이 먹었더니 배가 아파요.",
        "en": "Ate a lot and now my stomach hurts.",
        "zh": "吃多了然后肚子疼。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u17a",
    "category": "13. 경험·변화 (Experience & Change)",
    "level": "L4",
    "title": "~곤 하다",
    "desc": "Used to regularly",
    "meaning_zh": "经常做...(习惯性)",
    "meaning_en": "Used to do regularly",
    "rules": [
      "동사+곤 하다"
    ],
    "examples": [
      {
        "ko": "어릴 때 바다에 가곤 했어요.",
        "en": "I used to go to the sea as a child.",
        "zh": "小时候经常去海边。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u9b",
    "category": "13. 경험·변화 (Experience & Change)",
    "level": "L4",
    "title": "~더니",
    "desc": "And then (observed change)",
    "meaning_zh": "亲眼见到的变化/转折",
    "meaning_en": "Observed change or contrast",
    "rules": [
      "동/형+더니"
    ],
    "examples": [
      {
        "ko": "열심히 공부하더니 1등을 했어요.",
        "en": "Studied hard and then got 1st place.",
        "zh": "努力学习然后得了第一名。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u14a",
    "category": "14. 피동·사동 (Passive & Causative)",
    "level": "L3",
    "title": "피동사 (Passive)",
    "desc": "Passive verbs",
    "meaning_zh": "被动动词(이/히/리/기)",
    "meaning_en": "Passive voice verbs",
    "rules": [
      "보다→보이다",
      "잡다→잡히다",
      "열다→열리다",
      "끊다→끊기다"
    ],
    "examples": [
      {
        "ko": "문이 열렸어요.",
        "en": "The door was opened.",
        "zh": "门被打开了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u3b",
    "category": "14. 피동·사동 (Passive & Causative)",
    "level": "L4",
    "title": "~게 하다",
    "desc": "Make someone do",
    "meaning_zh": "让/使某人做...",
    "meaning_en": "Causative (make someone do)",
    "rules": [
      "동사+게 하다"
    ],
    "examples": [
      {
        "ko": "아이를 공부하게 했어요.",
        "en": "Made the child study.",
        "zh": "让孩子学习了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u5a",
    "category": "14. 피동·사동 (Passive & Causative)",
    "level": "L4",
    "title": "사동사 (Causative verbs)",
    "desc": "Causative verbs",
    "meaning_zh": "使动动词(이/히/리/기/우)",
    "meaning_en": "Causative verb suffixes",
    "rules": [
      "먹이다(feed)",
      "읽히다(make read)",
      "울리다(make cry)",
      "깨우다(wake up)"
    ],
    "examples": [
      {
        "ko": "아이에게 밥을 먹여요.",
        "en": "I feed the child.",
        "zh": "给孩子喂饭。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u12b",
    "category": "15. 강조·비교 (Emphasis & Comparison)",
    "level": "L3",
    "title": "~(이)라도",
    "desc": "Even if just / At least",
    "meaning_zh": "哪怕是...也好",
    "meaning_en": "Even if it's just, at least",
    "rules": [
      "名词+(이)라도"
    ],
    "examples": [
      {
        "ko": "커피라도 마실까요?",
        "en": "Shall we at least have coffee?",
        "zh": "哪怕喝杯咖啡也好？"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u19b",
    "category": "15. 강조·비교 (Emphasis & Comparison)",
    "level": "L3",
    "title": "~(으)ㄹ 정도로",
    "desc": "To the extent that",
    "meaning_zh": "到了...的程度",
    "meaning_en": "To the extent/degree that",
    "rules": [
      "동/형+(으)ㄹ 정도로"
    ],
    "examples": [
      {
        "ko": "눈물이 날 정도로 감동했어요.",
        "en": "Was moved to the point of tears.",
        "zh": "感动到流泪的程度。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u6b",
    "category": "15. 강조·비교 (Emphasis & Comparison)",
    "level": "L3",
    "title": "~기가 무섭게",
    "desc": "No sooner than",
    "meaning_zh": "一...就(紧接着)",
    "meaning_en": "No sooner than",
    "rules": [
      "동사+기가 무섭게"
    ],
    "examples": [
      {
        "ko": "문을 열기가 무섭게 고양이가 나갔어요.",
        "en": "The cat went out as soon as the door opened.",
        "zh": "门一开猫就跑出去了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u7b",
    "category": "15. 강조·비교 (Emphasis & Comparison)",
    "level": "L3",
    "title": "~(으)ㄹ 만하다",
    "desc": "Worth doing",
    "meaning_zh": "值得做...",
    "meaning_en": "Worth doing, deserving of",
    "rules": [
      "동사+(으)ㄹ 만하다"
    ],
    "examples": [
      {
        "ko": "이 영화는 볼 만해요.",
        "en": "This movie is worth watching.",
        "zh": "这部电影值得看。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u12a",
    "category": "15. 강조·비교 (Emphasis & Comparison)",
    "level": "L4",
    "title": "~치고",
    "desc": "For a ~ (surprisingly)",
    "meaning_zh": "作为...来说(出人意料)",
    "meaning_en": "For a (surprisingly good/bad)",
    "rules": [
      "명사+치고"
    ],
    "examples": [
      {
        "ko": "가격치고 품질이 좋아요.",
        "en": "Quality is good for the price.",
        "zh": "就价格来说质量很好。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u15b",
    "category": "15. 강조·비교 (Emphasis & Comparison)",
    "level": "L4",
    "title": "~(으)나 마나",
    "desc": "Whether or not / Pointless",
    "meaning_zh": "做不做都一样(没用)",
    "meaning_en": "Pointless whether done or not",
    "rules": [
      "동사+(으)나 마나"
    ],
    "examples": [
      {
        "ko": "말하나 마나예요.",
        "en": "Pointless to say.",
        "zh": "说不说都一样。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u16b",
    "category": "15. 강조·비교 (Emphasis & Comparison)",
    "level": "L4",
    "title": "~(으)ㄹ 뿐만 아니라",
    "desc": "Not only but also",
    "meaning_zh": "不仅...而且...",
    "meaning_en": "Not only A but also B",
    "rules": [
      "동/형+(으)ㄹ 뿐만 아니라"
    ],
    "examples": [
      {
        "ko": "똑똑할 뿐만 아니라 성격도 좋아요.",
        "en": "Not only smart but also kind.",
        "zh": "不仅聪明性格也好。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u17b",
    "category": "15. 강조·비교 (Emphasis & Comparison)",
    "level": "L4",
    "title": "~기에(는)",
    "desc": "For doing / Considering",
    "meaning_zh": "就做...来说(评价)",
    "meaning_en": "Considering the action",
    "rules": [
      "동/형+기에(는)"
    ],
    "examples": [
      {
        "ko": "혼자 하기에는 너무 많아요.",
        "en": "Too much for one person.",
        "zh": "一个人做的话太多了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u19a",
    "category": "15. 강조·비교 (Emphasis & Comparison)",
    "level": "L4",
    "title": "~기 마련이다",
    "desc": "Bound to happen",
    "meaning_zh": "必然会...",
    "meaning_en": "Naturally bound to happen",
    "rules": [
      "동/형+기 마련이다"
    ],
    "examples": [
      {
        "ko": "노력하면 성공하기 마련이에요.",
        "en": "If you try, success is bound to follow.",
        "zh": "努力的话成功是必然的。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u1a",
    "category": "15. 강조·비교 (Emphasis & Comparison)",
    "level": "L4",
    "title": "~(이)야말로",
    "desc": "The very / The most",
    "meaning_zh": "强调(正是/才是)",
    "meaning_en": "Emphasizes noun as the best/true example",
    "rules": [
      "名词+(이)야말로"
    ],
    "examples": [
      {
        "ko": "사랑이야말로 가장 중요해요.",
        "en": "Love is the most important.",
        "zh": "爱情才是最重要的。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u2a",
    "category": "15. 강조·비교 (Emphasis & Comparison)",
    "level": "L4",
    "title": "얼마나 ~는지 모르다",
    "desc": "So ~ that (emphasis)",
    "meaning_zh": "不知道多么...(强调程度)",
    "meaning_en": "Emphasizes degree (you can't imagine how much)",
    "rules": [
      "얼마나+동/형+는지/ㄴ지 모르다"
    ],
    "examples": [
      {
        "ko": "얼마나 기뻤는지 몰라요.",
        "en": "You can't imagine how happy I was.",
        "zh": "你不知道我多高兴。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u6a",
    "category": "15. 강조·비교 (Emphasis & Comparison)",
    "level": "L4",
    "title": "~(으)ㄹ수록",
    "desc": "The more ~ the more",
    "meaning_zh": "越...越...",
    "meaning_en": "The more ~ the more",
    "rules": [
      "동/형+(으)ㄹ수록"
    ],
    "examples": [
      {
        "ko": "한국어는 배울수록 어려워요.",
        "en": "Korean gets harder the more you study.",
        "zh": "韩语越学越难。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u7a",
    "category": "15. 강조·비교 (Emphasis & Comparison)",
    "level": "L4",
    "title": "~든지 ~든지",
    "desc": "Whether A or B",
    "meaning_zh": "不管A还是B",
    "meaning_en": "Whether A or B",
    "rules": [
      "동/형+든지"
    ],
    "examples": [
      {
        "ko": "비가 오든지 눈이 오든지 갈 거예요.",
        "en": "Whether rain or snow I'll go.",
        "zh": "不管下雨还是下雪都会去。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u9a",
    "category": "15. 강조·비교 (Emphasis & Comparison)",
    "level": "L4",
    "title": "~느니 차라리",
    "desc": "Rather than A, prefer B",
    "meaning_zh": "与其A不如B",
    "meaning_en": "Rather than",
    "rules": [
      "동사+느니 차라리"
    ],
    "examples": [
      {
        "ko": "기다리느니 차라리 걸어가자.",
        "en": "Rather than wait let's walk.",
        "zh": "与其等不如走过去。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u13a",
    "category": "16. 보조동사 (Auxiliary Verbs)",
    "level": "L3",
    "title": "~아/어 놓다",
    "desc": "Do and keep",
    "meaning_zh": "做好放着(准备好)",
    "meaning_en": "Do in advance and maintain",
    "rules": [
      "동사+아/어 놓다"
    ],
    "examples": [
      {
        "ko": "예약해 놓았어요.",
        "en": "I made a reservation (in advance).",
        "zh": "预约好了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u14b",
    "category": "16. 보조동사 (Auxiliary Verbs)",
    "level": "L3",
    "title": "~아/어 있다",
    "desc": "State maintenance",
    "meaning_zh": "保持某种结果状态",
    "meaning_en": "Resultant state (be in a state of)",
    "rules": [
      "동사+아/어 있다"
    ],
    "examples": [
      {
        "ko": "문이 열려 있어요.",
        "en": "The door is open (state).",
        "zh": "门开着呢。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u17a",
    "category": "16. 보조동사 (Auxiliary Verbs)",
    "level": "L3",
    "title": "~(으)ㄴ/는 척하다",
    "desc": "Pretend to",
    "meaning_zh": "假装做...",
    "meaning_en": "Pretend to be/do",
    "rules": [
      "동+는 척하다",
      "형+ㄴ/은 척하다"
    ],
    "examples": [
      {
        "ko": "모르는 척했어요.",
        "en": "Pretended not to know.",
        "zh": "假装不知道。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u17b",
    "category": "16. 보조동사 (Auxiliary Verbs)",
    "level": "L3",
    "title": "~(으)ㄹ 뻔하다",
    "desc": "Almost did",
    "meaning_zh": "差一点就...",
    "meaning_en": "Almost happened",
    "rules": [
      "동사+(으)ㄹ 뻔하다"
    ],
    "examples": [
      {
        "ko": "넘어질 뻔했어요.",
        "en": "Almost fell down.",
        "zh": "差点摔倒。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u8b",
    "category": "16. 보조동사 (Auxiliary Verbs)",
    "level": "L3",
    "title": "~아/어 버리다",
    "desc": "Completely done",
    "meaning_zh": "彻底完成(惋惜/痛快)",
    "meaning_en": "Completely finished (with emotion)",
    "rules": [
      "동사+아/어 버리다"
    ],
    "examples": [
      {
        "ko": "다 먹어 버렸어요.",
        "en": "Ate it all up.",
        "zh": "全吃光了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u9b",
    "category": "16. 보조동사 (Auxiliary Verbs)",
    "level": "L3",
    "title": "~(으)ㄹ 걸 그랬다",
    "desc": "Should have done",
    "meaning_zh": "后悔(早知道就...)",
    "meaning_en": "Regret not doing",
    "rules": [
      "동사+(으)ㄹ 걸 그랬다"
    ],
    "examples": [
      {
        "ko": "우산을 가져올 걸 그랬어요.",
        "en": "I should have brought an umbrella.",
        "zh": "早知道就带伞了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u14a",
    "category": "17. 가정 (Hypothetical)",
    "level": "L4",
    "title": "~았/었더라면",
    "desc": "If I had done",
    "meaning_zh": "如果当时做了的话(假设过去)",
    "meaning_en": "Hypothetical past (if I had...)",
    "rules": [
      "동사+았/었더라면"
    ],
    "examples": [
      {
        "ko": "열심히 했더라면 합격했을 거예요.",
        "en": "If I had worked hard I would have passed.",
        "zh": "如果当时努力了就会通过的。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u14b",
    "category": "17. 가정 (Hypothetical)",
    "level": "L4",
    "title": "~ㄴ/는다면",
    "desc": "If (hypothetical)",
    "meaning_zh": "假设(如果...的话)",
    "meaning_en": "Hypothetical if",
    "rules": [
      "동: ㄴ/는다면",
      "형: 다면"
    ],
    "examples": [
      {
        "ko": "복권에 당첨된다면 뭘 할 거예요?",
        "en": "What would you do if you won the lottery?",
        "zh": "如果中了彩票会做什么？"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u12b",
    "category": "2. 시제·종결어미 (Tense & Endings)",
    "level": "L1",
    "title": "~(으)십니다/~(으)세요?",
    "desc": "Honorific endings",
    "meaning_zh": "敬语终结词尾",
    "meaning_en": "Honorific sentence endings",
    "rules": [
      "词干+(으)십니다"
    ],
    "examples": [
      {
        "ko": "선생님이 책을 읽으십니다.",
        "en": "The teacher reads a book.",
        "zh": "老师在读书。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u13a",
    "category": "2. 시제·종결어미 (Tense & Endings)",
    "level": "L1",
    "title": "~(으)ㄹ까요?",
    "desc": "Shall we?",
    "meaning_zh": "提议/询问意见",
    "meaning_en": "Suggestion or asking opinion",
    "rules": [
      "无收音+ㄹ까요?",
      "有收音+을까요?"
    ],
    "examples": [
      {
        "ko": "같이 갈까요?",
        "en": "Shall we go together?",
        "zh": "一起去好吗？"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u13b",
    "category": "2. 시제·종결어미 (Tense & Endings)",
    "level": "L1",
    "title": "~(으)ㅂ시다",
    "desc": "Let's",
    "meaning_zh": "共动句(一起...吧)",
    "meaning_en": "Let's do together",
    "rules": [
      "无收音+ㅂ시다",
      "有收音+읍시다"
    ],
    "examples": [
      {
        "ko": "같이 갑시다.",
        "en": "Let's go together.",
        "zh": "一起走吧。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u16a",
    "category": "2. 시제·종결어미 (Tense & Endings)",
    "level": "L1",
    "title": "~(이)지요?",
    "desc": "Isn't it? / Right?",
    "meaning_zh": "确认语气(是不是/对吧)",
    "meaning_en": "Confirming what you expect",
    "rules": [
      "词干+지요?"
    ],
    "examples": [
      {
        "ko": "학생이지요?",
        "en": "You're a student, right?",
        "zh": "是学生吧？"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u16b",
    "category": "2. 시제·종결어미 (Tense & Endings)",
    "level": "L1",
    "title": "~아/어 주세요",
    "desc": "Please do for me",
    "meaning_zh": "请帮忙做...",
    "meaning_en": "Requesting a favor",
    "rules": [
      "词干+아/어 주세요"
    ],
    "examples": [
      {
        "ko": "문을 열어 주세요.",
        "en": "Please open the door.",
        "zh": "请帮忙开门。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u2a",
    "category": "2. 시제·종결어미 (Tense & Endings)",
    "level": "L1",
    "title": "~아/어요",
    "desc": "Present tense polite",
    "meaning_zh": "非格式体现在时终结词尾",
    "meaning_en": "Polite informal present tense ending",
    "rules": [
      "阳性(ㅏ,ㅗ)+아요",
      "阴性+어요",
      "하다→해요"
    ],
    "examples": [
      {
        "ko": "학교에 가요.",
        "en": "I go to school.",
        "zh": "去学校。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u5a",
    "category": "2. 시제·종결어미 (Tense & Endings)",
    "level": "L1",
    "title": "~(으)세요",
    "desc": "Polite request/command",
    "meaning_zh": "尊敬命令终结词尾，请...",
    "meaning_en": "Polite imperative ending",
    "rules": [
      "无收音+세요",
      "有收音+으세요"
    ],
    "examples": [
      {
        "ko": "여기에 앉으세요.",
        "en": "Please sit here.",
        "zh": "请坐这里。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u9a",
    "category": "2. 시제·종결어미 (Tense & Endings)",
    "level": "L1",
    "title": "~았/었",
    "desc": "Past tense",
    "meaning_zh": "过去时",
    "meaning_en": "Past tense",
    "rules": [
      "阳性+았",
      "阴性+었",
      "하다→했"
    ],
    "examples": [
      {
        "ko": "어제 영화를 봤어요.",
        "en": "I watched a movie yesterday.",
        "zh": "昨天看了电影。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u9b",
    "category": "2. 시제·종결어미 (Tense & Endings)",
    "level": "L1",
    "title": "~(으)ㄹ 거예요",
    "desc": "Future tense",
    "meaning_zh": "将来时(计划/推测)",
    "meaning_en": "Future tense (plan/guess)",
    "rules": [
      "无收音+ㄹ 거예요",
      "有收音+을 거예요"
    ],
    "examples": [
      {
        "ko": "내일 갈 거예요.",
        "en": "I'll go tomorrow.",
        "zh": "明天要去。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u13a",
    "category": "2. 시제·종결어미 (Tense & Endings)",
    "level": "L2",
    "title": "~고 있다",
    "desc": "Progressive",
    "meaning_zh": "现在进行时(正在)",
    "meaning_en": "Present progressive",
    "rules": [
      "동사+고 있다"
    ],
    "examples": [
      {
        "ko": "책을 읽고 있어요.",
        "en": "I'm reading a book.",
        "zh": "正在读书。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u16a",
    "category": "2. 시제·종결어미 (Tense & Endings)",
    "level": "L2",
    "title": "~네요",
    "desc": "Exclamation",
    "meaning_zh": "感叹(哦！原来...)",
    "meaning_en": "Exclamation of surprise",
    "rules": [
      "동/형+네요"
    ],
    "examples": [
      {
        "ko": "날씨가 좋네요!",
        "en": "The weather is nice!",
        "zh": "天气真好呀！"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u9a",
    "category": "2. 시제·종결어미 (Tense & Endings)",
    "level": "L2",
    "title": "~(으)ㄹ게요",
    "desc": "I will (promise)",
    "meaning_zh": "意志/承诺(我会...)",
    "meaning_en": "Promise/will",
    "rules": [
      "无收音+ㄹ게요",
      "有收音+을게요"
    ],
    "examples": [
      {
        "ko": "제가 할게요.",
        "en": "I'll do it.",
        "zh": "我来做。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u1a",
    "category": "2. 시제·종결어미 (Tense & Endings)",
    "level": "L3",
    "title": "~잖아요",
    "desc": "As you know",
    "meaning_zh": "你知道的/不是嘛",
    "meaning_en": "Stating a fact the listener knows",
    "rules": [
      "동/형+잖아요"
    ],
    "examples": [
      {
        "ko": "미국에서 10년 살았잖아요.",
        "en": "As you know, I lived in the US for 10 years.",
        "zh": "你知道的，我在美国住了10年。"
      },
      {
        "ko": "겨울이잖아요.",
        "en": "It's winter, you know.",
        "zh": "不是冬天嘛。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u1b",
    "category": "2. 시제·종결어미 (Tense & Endings)",
    "level": "L3",
    "title": "~기는요",
    "desc": "Not really / Modesty",
    "meaning_zh": "谦虚否定(哪里哪里)",
    "meaning_en": "Modest denial or disagreement",
    "rules": [
      "동/형+기는요"
    ],
    "examples": [
      {
        "ko": "가: 한국어를 잘하시네요. 나: 잘하기는요.",
        "en": "A: You speak Korean well. B: Not really.",
        "zh": "A: 韩语说得好。B: 哪里哪里。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u5b",
    "category": "2. 시제·종결어미 (Tense & Endings)",
    "level": "L3",
    "title": "~(으)ㄹ래요",
    "desc": "I want to (casual)",
    "meaning_zh": "想要做...(口语)",
    "meaning_en": "Casual intention",
    "rules": [
      "동사+(으)ㄹ래요"
    ],
    "examples": [
      {
        "ko": "저는 커피 마실래요.",
        "en": "I'll have coffee.",
        "zh": "我想喝咖啡。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u7a",
    "category": "2. 시제·종결어미 (Tense & Endings)",
    "level": "L3",
    "title": "~나요/ㄴ가요?",
    "desc": "Soft question",
    "meaning_zh": "柔和的疑问(是不是...呢)",
    "meaning_en": "Soft/indirect question",
    "rules": [
      "동+나요",
      "형+ㄴ/은가요"
    ],
    "examples": [
      {
        "ko": "혹시 한국 사람인가요?",
        "en": "Are you perhaps Korean?",
        "zh": "你是不是韩国人呢？"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u9a",
    "category": "2. 시제·종결어미 (Tense & Endings)",
    "level": "L3",
    "title": "~더라고요",
    "desc": "I noticed/observed",
    "meaning_zh": "回忆亲眼所见(我发现...)",
    "meaning_en": "Recalling personal observation",
    "rules": [
      "동/형+더라고요"
    ],
    "examples": [
      {
        "ko": "그 식당 음식이 맛있더라고요.",
        "en": "I found the food there was good.",
        "zh": "那家餐厅的菜很好吃（我亲眼见）。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u18b",
    "category": "3. 부정 (Negation)",
    "level": "L1",
    "title": "~지 말다",
    "desc": "Don't (Prohibition)",
    "meaning_zh": "禁止(不要做...)",
    "meaning_en": "Prohibition",
    "rules": [
      "词干+지 마세요"
    ],
    "examples": [
      {
        "ko": "담배를 피우지 마세요.",
        "en": "Don't smoke.",
        "zh": "请不要吸烟。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u4b",
    "category": "3. 부정 (Negation)",
    "level": "L1",
    "title": "안 + V/A",
    "desc": "Negation",
    "meaning_zh": "否定副词，不做某事",
    "meaning_en": "Negation adverb 'not'",
    "rules": [
      "안+动词/形容词"
    ],
    "examples": [
      {
        "ko": "안 가요.",
        "en": "I don't go.",
        "zh": "不去。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u6c",
    "category": "3. 부정 (Negation)",
    "level": "L1",
    "title": "~지 않다",
    "desc": "Negation (long form)",
    "meaning_zh": "长形否定（不...）",
    "meaning_en": "Long-form negation",
    "rules": [
      "词干+지 않다"
    ],
    "examples": [
      {
        "ko": "맵지 않아요.",
        "en": "It's not spicy.",
        "zh": "不辣。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u7",
    "category": "3. 부정 (Negation)",
    "level": "L2",
    "title": "~지 못하다 / 못",
    "desc": "Cannot (inability)",
    "meaning_zh": "客观不能(做不了)",
    "meaning_en": "Cannot (objective inability)",
    "rules": [
      "못+动词",
      "词干+지 못하다"
    ],
    "examples": [
      {
        "ko": "바빠서 못 갔어요.",
        "en": "Was busy so couldn't go.",
        "zh": "太忙没能去。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u1a",
    "category": "4. 관형사형 (Modifiers)",
    "level": "L2",
    "title": "~는 (동사 관형형)",
    "desc": "Verb modifier (present)",
    "meaning_zh": "动词现在时定语词尾(做...的名词)",
    "meaning_en": "Present tense verb modifier",
    "rules": [
      "动词+는"
    ],
    "examples": [
      {
        "ko": "지금 먹는 음식",
        "en": "Food I'm eating now",
        "zh": "正在吃的食物"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u1b",
    "category": "4. 관형사형 (Modifiers)",
    "level": "L2",
    "title": "~(으)ㄴ (형/동 관형형)",
    "desc": "Adj modifier / Past verb",
    "meaning_zh": "形容词定语/动词过去时定语",
    "meaning_en": "Adj modifier or past verb modifier",
    "rules": [
      "形容词+ㄴ/은",
      "动词+ㄴ/은"
    ],
    "examples": [
      {
        "ko": "예쁜 옷",
        "en": "Pretty clothes",
        "zh": "漂亮的衣服"
      },
      {
        "ko": "어제 먹은 음식",
        "en": "Food I ate yesterday",
        "zh": "昨天吃的食物"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u2",
    "category": "4. 관형사형 (Modifiers)",
    "level": "L2",
    "title": "~(으)ㄹ (미래 관형형)",
    "desc": "Future modifier",
    "meaning_zh": "动词将来时定语词尾",
    "meaning_en": "Future tense verb modifier",
    "rules": [
      "无收音+ㄹ",
      "有收音+을"
    ],
    "examples": [
      {
        "ko": "내일 먹을 음식",
        "en": "Food I'll eat tomorrow",
        "zh": "明天要吃的食物"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u11a",
    "category": "4. 관형사형 (Modifiers)",
    "level": "L3",
    "title": "~던",
    "desc": "Used to / Was doing",
    "meaning_zh": "回忆过去(做过...的/正在做的)",
    "meaning_en": "Past modifier (recall)",
    "rules": [
      "동/형+던"
    ],
    "examples": [
      {
        "ko": "자주 가던 식당이 문을 닫았어요.",
        "en": "Restaurant I used to go to closed.",
        "zh": "以前经常去的餐厅关门了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u16b",
    "category": "4. 관형사형 (Modifiers)",
    "level": "L3",
    "title": "~았/었던",
    "desc": "Past recalled modifier",
    "meaning_zh": "过去回忆定语(曾经...的)",
    "meaning_en": "Past experience modifier",
    "rules": [
      "동사+았/었던"
    ],
    "examples": [
      {
        "ko": "전에 살았던 집",
        "en": "The house I used to live in",
        "zh": "以前住过的房子"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u18a",
    "category": "5. 이유·원인 (Reason)",
    "level": "L1",
    "title": "~아/어서",
    "desc": "Because / Then",
    "meaning_zh": "原因(因为)/先后",
    "meaning_en": "Reason or sequential",
    "rules": [
      "阳+아서",
      "阴+어서",
      "하→해서"
    ],
    "examples": [
      {
        "ko": "비가 와서 집에 있어요.",
        "en": "It's raining so I'm home.",
        "zh": "因为下雨在家。"
      }
    ],
    "notes": "不能接命令句/共动句"
  },
  {
    "id": "l1u19b",
    "category": "5. 이유·원인 (Reason)",
    "level": "L1",
    "title": "~(으)니까",
    "desc": "Because (subjective)",
    "meaning_zh": "主观原因(可接命令/共动)",
    "meaning_en": "Subjective reason",
    "rules": [
      "无收音+니까",
      "有收音+으니까"
    ],
    "examples": [
      {
        "ko": "추우니까 문 닫으세요.",
        "en": "It's cold, close the door.",
        "zh": "冷，请关门。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u19b",
    "category": "5. 이유·원인 (Reason)",
    "level": "L2",
    "title": "~거든(요)",
    "desc": "Because (explanation)",
    "meaning_zh": "解释理由(你知道吗其实是...)",
    "meaning_en": "Giving reason/explanation",
    "rules": [
      "동/형+거든요"
    ],
    "examples": [
      {
        "ko": "오늘은 못 만나요. 바쁘거든요.",
        "en": "Can't meet today. I'm busy.",
        "zh": "今天不能见面，因为忙。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u3a",
    "category": "5. 이유·원인 (Reason)",
    "level": "L2",
    "title": "~때문에/~기 때문에",
    "desc": "Because of",
    "meaning_zh": "因为(客观原因)",
    "meaning_en": "Because of (objective reason)",
    "rules": [
      "名词+때문에",
      "动/形+기 때문에"
    ],
    "examples": [
      {
        "ko": "비 때문에 못 갔어요.",
        "en": "Couldn't go because of rain.",
        "zh": "因为雨没能去。"
      },
      {
        "ko": "바쁘기 때문에 못 만나요.",
        "en": "Can't meet because I'm busy.",
        "zh": "因为忙不能见面。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u3a",
    "category": "5. 이유·원인 (Reason)",
    "level": "L3",
    "title": "~느라고",
    "desc": "Because of doing (excuse)",
    "meaning_zh": "因为做...耽误了(负面)",
    "meaning_en": "Excuse for negative result",
    "rules": [
      "동사+느라고"
    ],
    "examples": [
      {
        "ko": "일하느라고 전화를 못 받았어요.",
        "en": "Couldn't answer because I was working.",
        "zh": "因为工作没接到电话。"
      }
    ],
    "notes": "前后主语一致，后句不能是命令句"
  },
  {
    "id": "l4u13b",
    "category": "5. 이유·원인 (Reason)",
    "level": "L4",
    "title": "~길래",
    "desc": "Because (discovered reason)",
    "meaning_zh": "发现了原因所以...",
    "meaning_en": "Because (I discovered that)",
    "rules": [
      "동/형+길래"
    ],
    "examples": [
      {
        "ko": "날씨가 좋길래 산책을 나갔어요.",
        "en": "Weather was nice so I went for a walk.",
        "zh": "发现天气好就出去散步了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u19b",
    "category": "5. 이유·원인 (Reason)",
    "level": "L4",
    "title": "~(으)ㄴ/는 탓에",
    "desc": "Because of (blame)",
    "meaning_zh": "怪/归咎于...",
    "meaning_en": "Blaming a negative result",
    "rules": [
      "동+는 탓에",
      "형+ㄴ/은 탓에"
    ],
    "examples": [
      {
        "ko": "비가 온 탓에 길이 막혀요.",
        "en": "Roads blocked because of rain.",
        "zh": "都怪下雨路堵了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u8a",
    "category": "5. 이유·원인 (Reason)",
    "level": "L4",
    "title": "~는 바람에",
    "desc": "Due to (unexpected)",
    "meaning_zh": "由于突发原因(负面结果)",
    "meaning_en": "Due to an unexpected event (negative)",
    "rules": [
      "동사+는 바람에"
    ],
    "examples": [
      {
        "ko": "버스를 놓치는 바람에 지각했어요.",
        "en": "Late because I missed the bus.",
        "zh": "因为错过公交迟到了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u11b",
    "category": "6. 대조·양보 (Contrast)",
    "level": "L2",
    "title": "~(으)ㄴ/는데",
    "desc": "Background/But",
    "meaning_zh": "提示背景信息或轻微转折",
    "meaning_en": "Background or soft contrast",
    "rules": [
      "动词+는데",
      "形容词+ㄴ/은데"
    ],
    "examples": [
      {
        "ko": "날씨가 좋은데 산책할까요?",
        "en": "Weather's nice, walk?",
        "zh": "天气好，散步？"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u5a",
    "category": "6. 대조·양보 (Contrast)",
    "level": "L2",
    "title": "~지만",
    "desc": "But/However",
    "meaning_zh": "转折(虽然...但是)",
    "meaning_en": "But, however",
    "rules": [
      "词干+지만"
    ],
    "examples": [
      {
        "ko": "비싸지만 맛있어요.",
        "en": "Expensive but delicious.",
        "zh": "虽贵但好吃。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u4a",
    "category": "6. 대조·양보 (Contrast)",
    "level": "L3",
    "title": "~아도/어도",
    "desc": "Even if / Although",
    "meaning_zh": "即使...也...",
    "meaning_en": "Even if, although",
    "rules": [
      "동/형+아도/어도"
    ],
    "examples": [
      {
        "ko": "비가 와도 갈 거예요.",
        "en": "Even if it rains I'll go.",
        "zh": "即使下雨也会去。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u2b",
    "category": "6. 대조·양보 (Contrast)",
    "level": "L4",
    "title": "~(으)ㄴ/는데도",
    "desc": "Despite / Even though",
    "meaning_zh": "尽管...还是...",
    "meaning_en": "Despite, even though",
    "rules": [
      "동+는데도",
      "형+ㄴ/은데도"
    ],
    "examples": [
      {
        "ko": "열심히 했는데도 떨어졌어요.",
        "en": "Failed despite working hard.",
        "zh": "尽管努力了还是没通过。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u7b",
    "category": "6. 대조·양보 (Contrast)",
    "level": "L4",
    "title": "~더라도",
    "desc": "Even if",
    "meaning_zh": "即使...也...",
    "meaning_en": "Even if (hypothetical concession)",
    "rules": [
      "동/형+더라도"
    ],
    "examples": [
      {
        "ko": "힘들더라도 포기하지 마세요.",
        "en": "Don't give up even if it's hard.",
        "zh": "即使辛苦也不要放弃。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u15b",
    "category": "7. 나열·시간 (Sequence & Time)",
    "level": "L1",
    "title": "~고",
    "desc": "And/Then",
    "meaning_zh": "并列或先后",
    "meaning_en": "And, and then",
    "rules": [
      "词干+고"
    ],
    "examples": [
      {
        "ko": "밥을 먹고 커피를 마셔요.",
        "en": "I eat and drink coffee.",
        "zh": "吃饭然后喝咖啡。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u12a",
    "category": "7. 나열·시간 (Sequence & Time)",
    "level": "L2",
    "title": "~다가",
    "desc": "While/Switch",
    "meaning_zh": "中途转换动作",
    "meaning_en": "Switching actions midway",
    "rules": [
      "동사+다가"
    ],
    "examples": [
      {
        "ko": "걷다가 넘어졌어요.",
        "en": "Fell while walking.",
        "zh": "走路走着摔倒了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u14b",
    "category": "7. 나열·시간 (Sequence & Time)",
    "level": "L2",
    "title": "~(으)ㄹ 때",
    "desc": "When doing",
    "meaning_zh": "做...的时候",
    "meaning_en": "When, at the time of",
    "rules": [
      "무받침+ㄹ 때",
      "받침+을 때"
    ],
    "examples": [
      {
        "ko": "밥 먹을 때 음악 들어요.",
        "en": "I listen to music when eating.",
        "zh": "吃饭时听音乐。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u14c",
    "category": "7. 나열·시간 (Sequence & Time)",
    "level": "L2",
    "title": "~거나",
    "desc": "Or (verbs)",
    "meaning_zh": "或者(动词连接)",
    "meaning_en": "Or (connects verbs/adj)",
    "rules": [
      "동사/형+거나"
    ],
    "examples": [
      {
        "ko": "주말에 영화를 보거나 쇼핑해요.",
        "en": "On weekends I watch movies or shop.",
        "zh": "周末看电影或购物。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u17a",
    "category": "7. 나열·시간 (Sequence & Time)",
    "level": "L2",
    "title": "~(으)ㄴ 지",
    "desc": "Since (time)",
    "meaning_zh": "从做...以来过了多久",
    "meaning_en": "Time since doing",
    "rules": [
      "동사+ㄴ/은 지"
    ],
    "examples": [
      {
        "ko": "한국에 온 지 3년 됐어요.",
        "en": "It's been 3 years since I came to Korea.",
        "zh": "来韩国已经3年了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u5c",
    "category": "7. 나열·시간 (Sequence & Time)",
    "level": "L2",
    "title": "~(으)면서",
    "desc": "While doing",
    "meaning_zh": "同时进行(一边...一边)",
    "meaning_en": "While doing simultaneously",
    "rules": [
      "无收音+면서",
      "有收音+으면서"
    ],
    "examples": [
      {
        "ko": "음악을 들으면서 공부해요.",
        "en": "Study while listening to music.",
        "zh": "一边听音乐一边学习。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u6b",
    "category": "7. 나열·시간 (Sequence & Time)",
    "level": "L2",
    "title": "~(으)ㄴ 후에 / ~기 전에",
    "desc": "After/Before",
    "meaning_zh": "...之后/...之前",
    "meaning_en": "After doing / Before doing",
    "rules": [
      "动词+ㄴ/은 후에",
      "동사+기 전에"
    ],
    "examples": [
      {
        "ko": "밥 먹기 전에 손을 씻어요.",
        "en": "Wash hands before eating.",
        "zh": "饭前洗手。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u13b",
    "category": "7. 나열·시간 (Sequence & Time)",
    "level": "L3",
    "title": "~(으)ㄴ/는 데다가",
    "desc": "On top of that",
    "meaning_zh": "再加上(雪上加霜/锦上添花)",
    "meaning_en": "In addition to, on top of",
    "rules": [
      "동+는 데다가",
      "형+ㄴ/은 데다가"
    ],
    "examples": [
      {
        "ko": "비가 오는 데다가 바람도 불어요.",
        "en": "It's raining and on top of that windy.",
        "zh": "下雨再加上刮风。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u3b",
    "category": "7. 나열·시간 (Sequence & Time)",
    "level": "L3",
    "title": "~는 동안",
    "desc": "During / While",
    "meaning_zh": "在做...的期间",
    "meaning_en": "During the time of",
    "rules": [
      "동사+는 동안"
    ],
    "examples": [
      {
        "ko": "기다리는 동안 커피 마실까요?",
        "en": "Shall we drink coffee while waiting?",
        "zh": "等的时候喝杯咖啡？"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u4b",
    "category": "7. 나열·시간 (Sequence & Time)",
    "level": "L3",
    "title": "~자마자",
    "desc": "As soon as",
    "meaning_zh": "一...就...",
    "meaning_en": "As soon as",
    "rules": [
      "동사+자마자"
    ],
    "examples": [
      {
        "ko": "집에 오자마자 잤어요.",
        "en": "Slept as soon as I got home.",
        "zh": "一到家就睡了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u8a",
    "category": "7. 나열·시간 (Sequence & Time)",
    "level": "L3",
    "title": "~(으)ㄴ 채(로)",
    "desc": "In the state of",
    "meaning_zh": "保持某个状态不变",
    "meaning_en": "While remaining in a state",
    "rules": [
      "동사+(으)ㄴ 채로"
    ],
    "examples": [
      {
        "ko": "신발을 신은 채로 들어왔어요.",
        "en": "Came in with shoes on.",
        "zh": "穿着鞋就进来了。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u11a",
    "category": "7. 나열·시간 (Sequence & Time)",
    "level": "L4",
    "title": "~ㄴ/는다면서요?",
    "desc": "I heard that...?",
    "meaning_zh": "听说...是真的吗？",
    "meaning_en": "Confirming hearsay",
    "rules": [
      "동: ㄴ/는다면서요",
      "형: 다면서요"
    ],
    "examples": [
      {
        "ko": "결혼한다면서요? 축하해요!",
        "en": "I heard you're getting married? Congrats!",
        "zh": "听说你结婚了？恭喜！"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u8b",
    "category": "7. 나열·시간 (Sequence & Time)",
    "level": "L4",
    "title": "~는 김에",
    "desc": "While at it",
    "meaning_zh": "趁...的机会",
    "meaning_en": "While you're at it",
    "rules": [
      "동사+는 김에"
    ],
    "examples": [
      {
        "ko": "마트에 가는 김에 우유 좀 사 와.",
        "en": "Buy milk while at the mart.",
        "zh": "趁去超市顺便买牛奶。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l1u17a",
    "category": "8. 조건·목적 (Condition & Purpose)",
    "level": "L1",
    "title": "~(으)러 가다/오다",
    "desc": "Go/Come to do",
    "meaning_zh": "为了做...而去/来",
    "meaning_en": "Go/come for the purpose of",
    "rules": [
      "无收音+러",
      "有收音+으러"
    ],
    "examples": [
      {
        "ko": "먹으러 가요.",
        "en": "I go to eat.",
        "zh": "去吃饭。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u14a",
    "category": "8. 조건·목적 (Condition & Purpose)",
    "level": "L2",
    "title": "~(으)려고",
    "desc": "In order to",
    "meaning_zh": "为了做...",
    "meaning_en": "In order to",
    "rules": [
      "무받침+려고",
      "받침+으려고"
    ],
    "examples": [
      {
        "ko": "취직하려고 한국어를 배워요.",
        "en": "Learn Korean to get a job.",
        "zh": "为了就业学韩语。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u6a",
    "category": "8. 조건·목적 (Condition & Purpose)",
    "level": "L2",
    "title": "~(으)면",
    "desc": "If/When",
    "meaning_zh": "条件(如果...的话)",
    "meaning_en": "If, when",
    "rules": [
      "无收音+면",
      "有收音+으면"
    ],
    "examples": [
      {
        "ko": "돈이 있으면 살 거예요.",
        "en": "If I have money I'll buy it.",
        "zh": "有钱就买。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u11b",
    "category": "8. 조건·목적 (Condition & Purpose)",
    "level": "L3",
    "title": "~기 위해서",
    "desc": "In order to",
    "meaning_zh": "为了做...",
    "meaning_en": "In order to (purpose)",
    "rules": [
      "동사+기 위해서"
    ],
    "examples": [
      {
        "ko": "건강을 위해서 운동해요.",
        "en": "I exercise for health.",
        "zh": "为了健康而运动。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u12a",
    "category": "8. 조건·목적 (Condition & Purpose)",
    "level": "L3",
    "title": "~(으)ㄹ 겸",
    "desc": "Also to / While at it",
    "meaning_zh": "顺便也...",
    "meaning_en": "While at it, also for",
    "rules": [
      "동사+(으)ㄹ 겸"
    ],
    "examples": [
      {
        "ko": "산책할 겸 커피 사러 나갔어요.",
        "en": "Went out for a walk and to buy coffee.",
        "zh": "顺便散步顺便买咖啡。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u5a",
    "category": "8. 조건·목적 (Condition & Purpose)",
    "level": "L3",
    "title": "~(으)려면",
    "desc": "If you want to",
    "meaning_zh": "要想做...的话",
    "meaning_en": "If one intends to",
    "rules": [
      "동사+(으)려면"
    ],
    "examples": [
      {
        "ko": "한국어를 잘하려면 많이 연습해야 해요.",
        "en": "To be good at Korean you must practice.",
        "zh": "想学好韩语就得多练。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u5b",
    "category": "8. 조건·목적 (Condition & Purpose)",
    "level": "L4",
    "title": "~도록",
    "desc": "So that / Until",
    "meaning_zh": "使得.../直到...为止",
    "meaning_en": "So that, until",
    "rules": [
      "동사+도록"
    ],
    "examples": [
      {
        "ko": "늦지 않도록 일찍 출발하세요.",
        "en": "Leave early so you're not late.",
        "zh": "为了不迟到请早出发。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u12b",
    "category": "9. 능력·의무 (Ability & Obligation)",
    "level": "L2",
    "title": "~아/어야 되다(하다)",
    "desc": "Must/Have to",
    "meaning_zh": "必须做...",
    "meaning_en": "Must, have to",
    "rules": [
      "阳+아야 되다",
      "阴+어야 되다"
    ],
    "examples": [
      {
        "ko": "공부해야 돼요.",
        "en": "I must study.",
        "zh": "必须学习。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u15b",
    "category": "9. 능력·의무 (Ability & Obligation)",
    "level": "L2",
    "title": "~아/어도 되다",
    "desc": "May / Permission",
    "meaning_zh": "许可(做...也可以)",
    "meaning_en": "Permission (may/can)",
    "rules": [
      "동사+아/어도 되다"
    ],
    "examples": [
      {
        "ko": "앉아도 돼요?",
        "en": "May I sit?",
        "zh": "可以坐吗？"
      }
    ],
    "notes": ""
  },
  {
    "id": "l2u4b",
    "category": "9. 능력·의무 (Ability & Obligation)",
    "level": "L2",
    "title": "~(으)ㄹ 수 있다/없다",
    "desc": "Can/Cannot",
    "meaning_zh": "能/不能做某事",
    "meaning_en": "Can/Cannot do",
    "rules": [
      "无收音+ㄹ 수 있다",
      "有收音+을 수 있다"
    ],
    "examples": [
      {
        "ko": "한국어를 할 수 있어요.",
        "en": "I can speak Korean.",
        "zh": "会说韩语。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l3u6a",
    "category": "9. 능력·의무 (Ability & Obligation)",
    "level": "L3",
    "title": "~(으)ㄹ 수밖에 없다",
    "desc": "Have no choice but",
    "meaning_zh": "不得不做...",
    "meaning_en": "Have no choice but to",
    "rules": [
      "동사+(으)ㄹ 수밖에 없다"
    ],
    "examples": [
      {
        "ko": "포기할 수밖에 없었어요.",
        "en": "Had no choice but to give up.",
        "zh": "不得不放弃。"
      }
    ],
    "notes": ""
  },
  {
    "id": "l4u13a",
    "category": "9. 능력·의무 (Ability & Obligation)",
    "level": "L4",
    "title": "~(으)ㄹ래야 ~(으)ㄹ 수 없다",
    "desc": "Even if I try I can't",
    "meaning_zh": "想做都做不了",
    "meaning_en": "Can't even if one tries",
    "rules": [
      "동사+(으)ㄹ래야 (으)ㄹ 수 없다"
    ],
    "examples": [
      {
        "ko": "잠을 잘래야 잘 수가 없어요.",
        "en": "I can't sleep even if I try.",
        "zh": "想睡也睡不着。"
      }
    ],
    "notes": ""
  }
];
