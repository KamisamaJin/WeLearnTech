(function (root) {
    // Exact source text also works with older downloaded lessons without relying on item order.
    const english = Object.freeze({
        // l1-16
        "배가 아파서 병원에 갔어요.": "I went to the hospital because my stomach hurt.",
        "감기에 걸려서 약을 먹었어요.": "I took medicine because I had a cold.",
        "피곤해서 집에서 쉬었어요.": "I rested at home because I was tired.",
        "집에서 푹 쉬는 것이 좋아요.": "It would be good to get plenty of rest at home.",
        "빨리 병원에 가는 것이 좋아요.": "It's best to see a doctor soon.",
        "물을 많이 마시는 것이 좋아요.": "It's a good idea to drink plenty of water.",
        // l2-06
        "와, 정말 좋겠어요.": "Wow, that must be wonderful!",
        "그럼 부산에 12시 전에 도착하겠네요.": "Then I guess you'll get to Busan before noon.",
        "많이 피곤하겠어요.": "You must be very tired.",
        "아플 때 부모님이 생각나요.": "When I'm sick, I think of my parents.",
        "윗사람과 식사할 때 숟가락을 먼저 들지 마세요.": "When you eat with someone senior to you, don't pick up your spoon first.",
        "맛있는 음식을 먹을 때 행복해요.": "I'm happy when I eat something delicious.",
        // l2-07
        "시간 있으면 우리 집에 올래요?": "Would you like to come over if you have time?",
        "주말에 같이 밥 먹을래요?": "Would you like to have a meal together this weekend?",
        "조금만 더 기다려 줄래요?": "Would you wait just a little longer?",
        "내일 중요한 회의가 있으니까 늦지 마세요.": "We have an important meeting tomorrow, so please don't be late.",
        "날씨가 좋으니까 산책하러 나갈까요?": "The weather is nice. Shall we go out for a walk?",
        "집들이니까 세제나 휴지를 가져갈게요.": "Since it's a housewarming, I'll bring detergent or toilet paper.",
        // l2-08
        "신청하기 전에 수업 시간을 확인했어요.": "I checked the class times before signing up.",
        "출발하기 전에 전화 주세요.": "Please call before you leave.",
        "기차에서 내리기 전에 짐을 챙겨요.": "I gather my belongings before getting off the train.",
        "2학기부터 듣기로 했어요.": "I decided to take the class starting in the second semester.",
        "이번에는 아이들과 바다로 가기로 했어요.": "This time we decided to go to the seaside with the children.",
        "가까운 데서 공부하기로 했어요.": "I decided to study somewhere nearby.",
        // l2-09
        "아주 매울 것 같아요.": "I think it'll be very spicy.",
        "손님이 많아서 자리가 없을 것 같아요.": "There are so many customers that I don't think there'll be a table free.",
        "여기 정말 맛있을 것 같아요.": "I bet the food here is really good.",
        "제가 자주 가는 식당이 있어요.": "There's a restaurant I go to often.",
        "기다리는 사람들이 많네요.": "There are a lot of people waiting.",
        "제가 좋아하는 음식은 불고기예요.": "One food I really like is bulgogi.",
        // l2-10
        "저기요, 한국은행을 찾는데 어디에 있어요?": "Excuse me, I'm looking for the Bank of Korea. Where is it?",
        "시청 옆에 있는데 여기에서 가까워요.": "It's next to City Hall, not far from here.",
        "비가 오는데 우산이 없어요.": "It's raining, but I don't have an umbrella.",
        "큰 도로 옆에 있기 때문에 금방 찾을 수 있을 거예요.": "It's next to a main road, so you should be able to find it quickly.",
        "지하철이 버스보다 빠르기 때문에 지하철을 타요.": "I take the subway because it's faster than the bus.",
        "친구들이 많이 오기 때문에 음식을 많이 준비할 거예요.": "A lot of friends are coming, so I'll make plenty of food.",
        // l2-11
        "명절에는 가족들과 모여서 재미있게 놀아요.": "On holidays, I get together with my family and we have fun.",
        "날씨가 더우니까 좀 짧게 잘라 주세요.": "It's hot, so please cut my hair a bit shorter.",
        "밤에는 추우니까 따뜻하게 입어야 해요.": "It's cold at night, so you need to dress warmly.",
        "한국 친구하고 보름달을 보면서 소원을 빌었어요.": "I made a wish with a Korean friend as we looked at the full moon.",
        "고향 음식을 먹으면서 이야기를 했어요.": "We talked while eating food from home.",
        "한국 회사에서 일하면서 한국어도 배우고 있어요.": "I'm learning Korean while working at a Korean company.",
        // l2-12
        "한국에서 실수한 적이 있어요?": "Have you ever made a mistake in Korea?",
        "비빔밥을 먹은 적이 있어요.": "I've had bibimbap before.",
        "공항에서 아이돌 가수를 만난 적이 있어요.": "I once met a pop idol at the airport.",
        "저는 실수를 자주 하는 편이에요.": "I tend to make mistakes quite often.",
        "지난번 방보다 큰 편이에요.": "It's on the large side compared with the last room.",
        "요즘은 회사 일이 조금 한가한 편이에요.": "Work has been relatively quiet lately.",
        // l2-13
        "이엠에스(EMS)를 보내려고 해요.": "I'd like to send something by Express Mail Service (EMS).",
        "부모님께 편지를 쓰려고 해요.": "I'm planning to write my parents a letter.",
        "주말에 한국어 수업을 들으려고 해요.": "I'm planning to take a Korean class this weekend.",
        "먼저 이 신청서를 쓰셔야 돼요.": "You need to fill out this application form first.",
        "회사에 아홉 시까지 가야 돼요.": "I have to be at work by nine.",
        "신용 카드를 만들 때 신분증이 있어야 돼요.": "You need ID to apply for a credit card.",
        // l2-14
        "출생 신고를 남편이 해도 돼요?": "Is it okay for my husband to register the birth?",
        "인터넷으로 주소 변경 신고를 해도 돼요.": "You can report a change of address online.",
        "이 종이들을 버려도 돼요?": "May I throw these papers away?",
        "외국인 등록증을 재발급 받으려면 사진과 여권이 필요해요.": "To have your foreign resident registration card reissued, you need a photo and your passport.",
        "비자 연장 신청을 하려면 방문 예약을 해야 돼요.": "To apply for a visa extension, you need to book an appointment.",
        "감기에 걸리지 않으려면 손을 자주 씻으세요.": "Wash your hands often to avoid catching a cold.",
        // l2-15
        "저는 무역 회사에서 번역 일을 하고 있어요.": "I'm working as a translator at a trading company.",
        "저는 지금 울산에서 살고 있어요.": "I'm living in Ulsan now.",
        "초등학교에서 학생들에게 영어를 가르치고 있어요.": "I'm teaching English to elementary school students.",
        "번역한 서류 좀 가져오세요.": "Please bring me the documents you translated.",
        "아까 도착한 택배를 서쪽으로 옮겨 주세요.": "Please move the package that arrived earlier to the west side.",
        "이건 고향에 갔을 때 찍은 사진이에요.": "This is a photo I took when I went back to my hometown.",
        // l2-16
        "세계인의 날 행사에 참가할 사람 있어요?": "Is anyone going to take part in the Together Day event?",
        "21일 11시에 갈 곳은 제주박물관이에요.": "The place we'll visit at eleven on the 21st is the Jeju Museum.",
        "고향에 갈 때 가족에게 줄 선물을 샀어요.": "I bought gifts to give my family when I visit my hometown.",
        "오늘 엘리베이터 정기 점검을 해서 엘리베이터를 이용할 수 없거든요.": "We can't use the elevator today because it's undergoing routine maintenance.",
        "부모님이 한국에 오시거든요.": "You see, my parents are coming to Korea.",
        "제가 매운 음식을 좋아하거든요.": "It's because I like spicy food.",
        // l2-17
        "잠을 충분히 자면 좋겠어요.": "I hope I can get enough sleep.",
        "이번에는 꼭 합격하면 좋겠어요.": "I really hope I pass this time.",
        "비자를 연장할 수 있으면 좋겠어요.": "I hope I can extend my visa.",
        "당근은 눈에 좋아요.": "Carrots are good for your eyes.",
        "오렌지나 귤은 피로 회복에 좋아요.": "Oranges and tangerines are good for relieving fatigue.",
        "담배는 건강에 좋지 않아요.": "Smoking is bad for your health.",
        // l2-18
        "윗집에 한번 이야기하는 게 어때요?": "How about talking to your upstairs neighbors?",
        "건강식품을 먹는 게 어때요?": "How about trying some health foods?",
        "한국어능력시험을 보는 게 어때요?": "How about taking the Test of Proficiency in Korean?",
        "이 수업이 재미있어 보여요.": "This class looks interesting.",
        "아주 맛있어 보여요.": "It looks delicious.",
        "요즘 피곤해 보여요.": "You look tired lately.",
        // l3-06
        "퇴근 시간이라서 길이 많이 막혔어요.": "Traffic was very heavy because it was rush hour.",
        "한 달 동안 모기한테 많이 물려서 너무 가렵다.": "I've been bitten by mosquitoes a lot over the past month, so I'm really itchy.",
        "친구와 전화를 하는 중에 갑자기 전화가 끊겼다.": "The call suddenly cut off while I was talking to a friend.",
        "내일 다시 회의하자고 하셨어요.": "They suggested we meet again tomorrow.",
        "친구가 만나자고 해서 약속 장소에 나갔다.": "My friend suggested meeting up, so I went to our meeting place.",
        "아내가 같이 밥 먹자고 해서 기다리는 중이다.": "My wife suggested eating together, so I'm waiting for her.",
        // l3-07
        "직원이 관객들에게 지금 공연장에 입장하라고 했어요.": "A staff member told the audience to enter the auditorium now.",
        "부모님께서 저한테 자주 연락하라고 해요.": "My parents tell me to keep in touch regularly.",
        "친구들에게도 예매하라고 했어요.": "I told my friends to book their tickets in advance, too.",
        "한국어를 얼마나 공부했냐고 해요.": "They ask how long I've studied Korean.",
        "친구가 저에게 케이팝을 좋아하냐고 했어요.": "A friend asked me if I liked K-pop.",
        "공연이 몇 시에 시작하냐고 했어요.": "They asked what time the performance starts.",
        "무료 공연도 유료 공연만큼 좋은 게 많아요.": "Many free shows are just as good as the ones you pay for.",
        "회사 앞 식당은 고향 음식만큼 맛있어서 자주 간다.": "The food at the restaurant across from work is as good as the food back home, so I go there often.",
        "평일은 주말만큼 시내에 사람이 많지 않다.": "There aren't as many people downtown on weekdays as there are on weekends.",
        // l3-08
        "날씨가 좀 추우니까 아기 옷을 따뜻하게 입히세요.": "It's a bit cold, so dress the baby warmly.",
        "저는 채소로 볶음밥을 만들어서 아이한테 먹여요.": "I make vegetable fried rice and feed it to my child.",
        "아이를 자동차 뒷자리에 태워요.": "I put my child in the back seat of the car.",
        "남은 고기는 냉동실에 넣어서 얼리세요.": "Put the leftover meat in the freezer to freeze it.",
        "소리가 너무 크니까 소리를 좀 줄여 주시겠어요?": "It's really loud. Could you turn the volume down a little?",
        "음식이 맛있어서 남기지 않고 다 먹었어요.": "The food was so good that I ate it all without leaving anything.",
        // l3-09
        "딱딱한 걸 계속 씹어서 그런지 이가 아프네요.": "Maybe it's because I kept chewing something hard, but my tooth hurts.",
        "지하에 있어서 그런지 와이파이 연결이 잘 안 돼요.": "Maybe it's because we're in the basement, but I can't get a good Wi-Fi connection.",
        "냉동실에 음식물을 많이 넣어서 그런지 냉동이 잘 안 돼요.": "Maybe I put too much food in the freezer, because things aren't freezing properly.",
        "예약을 해야 되나요?": "Do I need to make a reservation?",
        "고치는 데 얼마나 걸리나요?": "How long does it take to fix it?",
        "수리 비용이 많이 비싼가요?": "Are the repairs very expensive?",
        // l3-10
        "한국 회사에 취직하기 위해서 컴퓨터를 배우고 있어요.": "I'm learning computer skills to get a job at a Korean company.",
        "토픽 시험에 합격하기 위해 열심히 공부하고 있어요.": "I'm studying hard to pass the TOPIK exam.",
        "일하는 엄마들은 아이 맡길 곳을 찾기 위해 노력하고 있다.": "Working mothers are trying to find somewhere to leave their children in care.",
        "미리 이력서를 써 놓는 것이 좋을 거예요.": "It would be a good idea to prepare your résumé ahead of time.",
        "휴가철이라서 비행기표를 미리 예약해 놓았어요.": "Since it's vacation season, I booked the plane tickets in advance.",
        "숙제를 미리 해 놓아서 마음이 편해요.": "I feel at ease because I finished my homework ahead of time.",
        // l3-11
        "이 집은 교통도 편리한 데다가 주변에 편의 시설도 많아요.": "Not only does this place have good transport links, it also has plenty of amenities nearby.",
        "방이 좁은 데다가 어두워서 마음에 안 들어요.": "I don't like the room because it's dark as well as small.",
        "이 집은 남향인 데다가 전망도 좋아요.": "This place faces south and has a nice view, too.",
        "한국은 다양한 형태의 집이 있다.": "There are many different types of housing in Korea.",
        "사람들은 시설이 좋고 교통이 편리한 집을 선호한다.": "People prefer homes with good facilities and convenient transport.",
        "집을 구할 때는 집의 상태를 꼼꼼하게 살펴보는 것이 좋다.": "When looking for a home, it's a good idea to check its condition carefully.",
        // l3-12
        "비가 와도 행사는 진행됩니다.": "The event will go ahead even if it rains.",
        "나는 시간이 없어도 아침밥을 꼭 먹는다.": "I always eat breakfast, even when I'm short on time.",
        "아무리 바빠도 명절에는 꼭 고향에 가야지.": "No matter how busy I am, I really must go back to my hometown for the holidays.",
        "좋은 집을 구해서 이사 가게 됐어요.": "I found a nice place, so now I'm moving.",
        "사정이 안 돼서 가게 문을 닫게 되었다.": "Circumstances forced me to close the shop.",
        "한국에 와서 매운 음식을 잘 먹게 됐어요.": "After coming to Korea, I grew accustomed to eating spicy food.",
        // l3-13
        "아이에게 자기 방을 스스로 정리하게 하세요.": "Have your child tidy up their own room.",
        "팀원들에게도 작업 일지를 작성하게 하세요.": "Have the team members fill in a work log, too.",
        "출입국ㆍ외국인청에서 외국인에게 외국인 등록을 하게 합니다.": "The immigration office requires foreign nationals to register.",
        "이제 거의 다 끝나 가요.": "It's nearly finished now.",
        "한국에 온 지 거의 3년이 되어 가요.": "It's been almost three years since I came to Korea.",
        "선배님들이 잘 가르쳐 주셔서 잘 적응해 가고 있어요.": "My more experienced colleagues have taught me well, so I'm settling in little by little.",
        // l3-14
        "최신 스마트폰으로 찍었잖아요.": "Remember, I took it with the latest smartphone.",
        "영상 통화가 있잖아요. 부모님께 자주 연락드리세요.": "You can make video calls, you know. Keep in touch with your parents.",
        "인터넷으로 사면 사이즈가 잘 맞는지 모르잖아요.": "When you buy something online, you can't tell if it will fit, can you?",
        "아나이스 씨는 항상 열심히 공부하잖아요.": "You know Anaïs always studies hard.",
        "보호자가 있어야 가능해요.": "It's only possible with a guardian present.",
        "여권이 있어야 비행기를 탈 수 있어요.": "You need a passport to board the plane.",
        "지금 출발해야 늦지 않아요.": "We have to leave now if we're going to be on time.",
        "휴대 전화로 본인 확인을 해야 가입이 돼요.": "You can only sign up after verifying your identity with your mobile phone.",
        // l3-15
        "저도 마침 점심 먹으려던 참이었는데 잘됐네요.": "That works out well. I was just about to have lunch, too.",
        "지금 출발하려던 참이었습니다.": "I was just about to leave.",
        "잘 해결됐다고 문자를 드리려던 참이었어요.": "I was just about to text you to say it all worked out.",
        "사과하려던 참이었어요.": "I was just about to apologize.",
        "졸업하자마자 일단 귀국해야 할 것 같아요.": "I think I'll have to return to my country as soon as I graduate, at least for now.",
        "집에 돌아가자마자 밥도 못 먹고 자요.": "As soon as I get home, I go to sleep without even getting a chance to eat.",
        "외우자마자 잊어버려요.": "I forget things as soon as I memorize them.",
        "시험이 끝나자마자 여행을 다녀왔어요.": "I went on a trip as soon as the exam was over.",
        // l3-16
        "잘 봐야 할 텐데 걱정이에요.": "I really need to do well on the test, and I'm worried.",
        "바쁘실 텐데 시간을 내 주셔서 감사합니다.": "Thank you for making time for me when you must be busy.",
        "오후에 비가 올 텐데 우산을 가지고 가세요.": "It'll probably rain this afternoon, so take an umbrella.",
        "날씨가 추울 텐데 두꺼운 옷을 입는 게 어때요?": "It's likely to be cold. How about wearing something warm?",
        "저기 과장님 옆에 앉아 있는 사람이에요.": "It's the person sitting over there next to the section manager.",
        "이 커피에는 설탕이 안 들어 있어요.": "There's no sugar in this coffee.",
        "전원이 꺼져 있어요.": "The power is off.",
        "공원에 꽃이 많이 피어 있어요.": "A lot of flowers are in bloom in the park.",
        // l4-01
        "새로운 환경에 적응하느라고 공부를 시작할 수 없었어요.": "I was so busy adjusting to the new environment that I couldn't start studying.",
        "머리를 감느라고 전화를 못 받았어요.": "I missed the call because I was washing my hair.",
        "한국어 실력이 좋아질수록 생활이 더 편해질 거예요.": "The better my Korean gets, the easier daily life will be.",
        "한국 문화는 알수록 매력적인 것 같아요.": "The more I learn about Korean culture, the more fascinating I find it.",
        // l4-02
        "부모님을 모시고 살 뿐만 아니라 여러 세대가 함께 사는 경우도 많아요.": "Not only do people live with and care for their parents, but several generations often live together.",
        "분가해서 살면 생활비가 적게 들 뿐만 아니라 집안일이 줄어요.": "Living in a separate household not only costs less but also means less housework.",
        "슬기 교육비 때문에 지출이 늘어서 맞벌이를 할 수밖에 없어요.": "Seulgi's education has pushed up our expenses, so we both have to work.",
        "회사가 지방에 있어서 가족과 떨어져 살 수밖에 없어요.": "My company is in another region, so I have no choice but to live apart from my family.",
        // l4-03
        "저는 사람이 직접 운전하는 줄 알았어요.": "I thought a person was actually driving it.",
        "저는 체중계인 줄 알았어요.": "I thought it was a bathroom scale.",
        "예전에는 지도를 가지고 다니면서 길을 찾곤 했어요.": "I used to carry a map around to find my way.",
        "저는 일할 때 졸리면 커피를 마시곤 해요.": "When I get sleepy at work, I often have coffee.",
        // l4-04
        "잠시드 씨가 제 친구를 보더니 마음에 든다고 했어요.": "Jamshid saw my friend and said he liked them.",
        "애나 씨가 2년 동안 장거리 연애를 하더니 드디어 결혼하네요.": "After two years in a long-distance relationship, Anna is finally getting married.",
        "너무 긴장한 나머지 아무것도 생각나지 않았어요.": "I was so nervous that my mind went completely blank.",
        "신랑이 너무 긴장한 나머지 노래 가사를 잊어버렸어요.": "The groom was so nervous that he forgot the lyrics.",
        // l4-05
        "한옥 체험이 얼마나 인기 있는지 몰라요.": "You wouldn't believe how popular it is to experience life in a hanok.",
        "창덕궁에 관광객이 얼마나 많이 방문하는지 몰라요.": "You wouldn't believe how many tourists visit Changdeokgung Palace.",
        "평일에 가든지 주말에 가든지 다 좋아요.": "Whether we go on a weekday or on the weekend, either is fine.",
        "메일로 보내든지 에스엔에스로 보내든지 할게요.": "I'll send it either by email or through social media.",
        // l4-06
        "언니가 쓰던 가방이에요.": "It's a bag my older sister used to use.",
        "전에는 신기하게 쳐다보던 사람들도 이제는 많이 달라졌어요.": "Even the people who used to stare out of curiosity have changed a lot now.",
        "아침에 못 일어날 정도로 피곤해요.": "I'm so tired I can barely get up in the morning.",
        "시간이 얼마나 빨리 지나는지 모를 정도로 즐겁게 지냈어요.": "I had so much fun that I didn't notice how quickly the time went by.",
        // l4-07
        "밖에 다녀오되 늦지 않도록 하세요.": "You can go out, but make sure you're not late getting back.",
        "식사를 하되 자극적인 음식은 피하는 것이 좋습니다.": "You may eat, but it's best to avoid foods that irritate your stomach.",
        "매일 한국 드라마를 봤더니 한국어 실력이 좋아졌어요.": "I watched Korean dramas every day, and my Korean improved.",
        "어제 야구장에서 큰 소리로 응원을 했더니 목이 아픈 것 같아요.": "I think my throat hurts because I cheered so loudly at the baseball game yesterday.",
        // l4-08
        "후엔 씨가 이번에 TOPIK 4급 시험에 합격했다면서요?": "I heard you passed TOPIK Level 4 this time, Huyen. Is that right?",
        "이링 씨, 이사했다면서요?": "Yiling, I heard you moved. Is that right?",
        "운동도 할 겸 스트레스도 풀 겸 자전거 타는 것을 좋아해요.": "I like cycling because it gives me exercise and relieves stress at the same time.",
        "친구 결혼식에도 참석할 겸 부모님도 뵐 겸 고향에 다녀오려고 해요.": "I'm planning to visit my hometown both to attend a friend's wedding and to see my parents.",
        // l4-09
        "너무 미끄러워서 저도 넘어질 뻔했어요.": "It was so slippery that I nearly fell, too.",
        "회사 기계를 만지다가 크게 다칠 뻔했어요.": "I nearly got seriously hurt while handling a machine at work.",
        "태풍으로 인해 비행기 출발이 지연되고 있습니다.": "The flight's departure is being delayed because of the typhoon.",
        "엘리베이터 수리로 인해 10시까지 운행되지 않습니다.": "The elevator will be out of service until ten because of repairs.",
        // l4-10
        "면접관 질문을 잘못 이해해서 동문서답하고 말았어요.": "I misunderstood the interviewer's question and ended up giving an unrelated answer.",
        "담배를 끊으려고 결심했지만 결국 다시 피우고 말았다.": "I decided to quit smoking, but I ended up smoking again.",
        "나가기 싫어서 바쁜 척했어요.": "I pretended to be busy because I didn't want to go out.",
        "모르는 유행어가 많은데 그냥 따라 하면서 아는 척해요.": "There are lots of slang expressions I don't know, but I just repeat them and pretend I know what they mean."
    });
    function translate(example, locale) {
        if (locale !== "en") return example.zh || example.exampleZh || "";
        const en = example.translations?.en;
        return example.en || en?.translation || en?.example || en?.zh || english[example.ko] || "";
    }
    const api = Object.freeze({ english, translate });
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root) root.KIIPGrammarExamples = api;
})(typeof window !== "undefined" ? window : null);
