(() => {
  const makeTips = (tips) => (tips || []).map((text) => {
    const [type, body] = text.includes(":") ? text.split(/:(.+)/) : ["collocation", text];
    return { type, text: body.trim() };
  });

  const vocabulary = [
    ["선거와 투표", "选举与投票", "名词短语", "elections and voting", "noun phrase", "이번 과에서는 선거와 투표에 대해 배워요.", "这一课学习选举与投票。", "This lesson covers elections and voting.", "156", "단원 제목", ["collocation:선거와 투표"]],
    ["선거", "选举", "名词", "election", "noun", "한국에는 여러 종류의 선거가 있어요.", "韩国有多种选举。", "There are several types of elections in Korea.", "156", "단원 제목", ["collocation:선거를 하다"]],
    ["투표", "投票", "名词", "voting", "noun", "선거일에는 투표에 참여해야 해요.", "选举日应该参与投票。", "On election day, people should participate in voting.", "156", "단원 제목", ["collocation:투표에 참여하다"]],
    ["선거 어휘", "选举词汇", "名词短语", "election vocabulary", "noun phrase", "선거 어휘를 익히고 말해 보세요.", "学习选举词汇后说一说。", "Learn election vocabulary and talk about it.", "156", "단원 제목", ["collocation:선거 어휘"]],
    ["지도자", "领导者", "名词", "leader", "noun", "지도자의 자질에 대해 써 보세요.", "请写一写领导者的资质。", "Write about the qualities of a leader.", "156", "단원 제목", ["collocation:지도자의 자질"]],
    ["자질", "资质，素质", "名词", "quality; qualification", "noun", "좋은 지도자에게 필요한 자질은 무엇일까요?", "好的领导者需要什么资质呢？", "What qualities does a good leader need?", "156", "단원 제목", ["collocation:자질을 갖추다"]],
    ["한국의 선거", "韩国的选举", "名词短语", "Korean elections", "noun phrase", "문화와 정보에서는 한국의 선거를 배워요.", "文化信息中学习韩国的选举。", "The culture section covers Korean elections.", "156", "문화와 정보", ["collocation:한국의 선거"]],
    ["대선", "总统选举", "名词", "presidential election", "noun", "대선에서는 대통령을 뽑아요.", "总统选举中选总统。", "A presidential election selects the president.", "158", "어휘", ["collocation:대선"]],
    ["총선", "国会议员选举", "名词", "general election", "noun", "총선에서는 국회 의원을 뽑아요.", "国会议员选举中选国会议员。", "A general election selects National Assembly members.", "158", "어휘", ["collocation:총선"]],
    ["지방 선거", "地方选举", "名词短语", "local election", "noun phrase", "지방 선거에서는 지방 자치 단체장과 지방 의회 의원을 뽑아요.", "地方选举中选地方自治团体长和地方议会议员。", "Local elections select local government heads and local council members.", "158", "어휘", ["collocation:지방 선거"]],
    ["대통령", "总统", "名词", "president", "noun", "대통령의 임기는 5년이에요.", "总统任期是5年。", "The president's term is five years.", "158", "어휘", ["collocation:대통령"]],
    ["국회 의원", "国会议员", "名词短语", "National Assembly member", "noun phrase", "국회 의원의 임기는 4년이에요.", "国会议员任期是4年。", "A National Assembly member's term is four years.", "158", "어휘", ["collocation:국회 의원"]],
    ["교육감", "教育监", "名词", "superintendent of education", "noun", "지방 선거에서는 교육감도 뽑아요.", "地方选举中也选教育监。", "A superintendent of education is also elected in local elections.", "158", "어휘", ["collocation:교육감"]],
    ["광역 단체장", "广域自治团体长", "名词短语", "metropolitan/provincial governor or mayor", "noun phrase", "광역 단체장에는 시장과 도지사가 있어요.", "广域自治团体长包括市长和道知事。", "Metropolitan or provincial heads include mayors and governors.", "158", "어휘", ["collocation:광역 단체장"]],
    ["기초 단체장", "基层自治团体长", "名词短语", "local government head", "noun phrase", "기초 단체장에는 시장, 구청장, 군수가 있어요.", "基层自治团体长包括市长、区厅长、郡守。", "Local government heads include mayors, district heads, and county heads.", "158", "어휘", ["collocation:기초 단체장"]],
    ["구청장", "区厅长", "名词", "district head", "noun", "구청장도 지방 선거에서 뽑아요.", "区厅长也在地方选举中选出。", "District heads are also elected in local elections.", "158", "어휘", ["collocation:구청장"]],
    ["군수", "郡守", "名词", "county governor", "noun", "군수는 군을 대표하는 단체장이에요.", "郡守是代表郡的团体长。", "A county governor represents a county.", "158", "어휘", ["collocation:군수"]],
    ["시 의원", "市议员", "名词短语", "city council member", "noun phrase", "시 의원 선거 포스터를 봤어요.", "看到了市议员选举海报。", "I saw a city council election poster.", "158", "어휘", ["collocation:시 의원"]],
    ["구 의원", "区议员", "名词短语", "district council member", "noun phrase", "지역구 의원에는 구 의원도 있어요.", "地区议员中也有区议员。", "District council members are among local representatives.", "158", "어휘", ["collocation:구 의원"]],
    ["비례 대표", "比例代表", "名词短语", "proportional representative", "noun phrase", "비례 대표 의원도 선거로 뽑아요.", "比例代表议员也通过选举选出。", "Proportional representatives are also elected.", "158", "어휘", ["collocation:비례 대표"]],
    ["후보자", "候选人", "名词", "candidate", "noun", "후보자의 공약을 읽어 보세요.", "请读一读候选人的公约。", "Read the candidate's campaign promises.", "158", "어휘", ["collocation:후보자"]],
    ["선거 운동을 하다", "进行选举活动", "动词短语", "to campaign", "verb phrase", "후보자들이 거리에서 선거 운동을 해요.", "候选人在街上进行选举活动。", "Candidates campaign on the streets.", "158", "어휘", ["collocation:선거 운동을 하다"]],
    ["선거 공약을 하다", "提出竞选公约", "动词短语", "to make campaign promises", "verb phrase", "후보자는 시민들에게 선거 공약을 했어요.", "候选人向市民提出竞选公约。", "The candidate made campaign promises to citizens.", "158", "어휘", ["collocation:선거 공약"]],
    ["선거 포스터", "选举海报", "名词短语", "election poster", "noun phrase", "선거 포스터를 보고 후보자를 알 수 있어요.", "看选举海报可以了解候选人。", "You can learn about candidates from election posters.", "158", "어휘", ["collocation:선거 포스터"]],
    ["지지하다", "支持", "动词", "to support", "verb", "어떤 후보자를 지지하세요?", "你支持哪位候选人？", "Which candidate do you support?", "158", "어휘", ["collocation:후보자를 지지하다"]],
    ["유권자", "选民", "名词", "voter", "noun", "유권자는 신분을 확인하고 투표해요.", "选民确认身份后投票。", "Voters confirm their identity and vote.", "158", "어휘", ["collocation:유권자"]],
    ["투표소", "投票站", "名词", "polling place", "noun", "투표소에는 많은 유권자들이 있었어요.", "投票站有很多选民。", "There were many voters at the polling place.", "158", "어휘", ["collocation:투표소"]],
    ["신분을 확인하다", "确认身份", "动词短语", "to verify identity", "verb phrase", "투표하기 전에 신분을 확인해요.", "投票前确认身份。", "Identity is verified before voting.", "158", "어휘", ["collocation:신분을 확인하다"]],
    ["투표용지를 받다", "领取选票", "动词短语", "to receive a ballot", "verb phrase", "신분 확인 후 투표용지를 받아요.", "确认身份后领取选票。", "After identity verification, voters receive a ballot.", "158", "어휘", ["collocation:투표용지를 받다"]],
    ["기표소", "投票填写处", "名词", "voting booth", "noun", "기표소에서 원하는 후보자에게 표시해요.", "在投票填写处给想选的候选人做标记。", "At the voting booth, voters mark their preferred candidate.", "158", "어휘", ["collocation:기표소"]],
    ["투표하다", "投票", "动词", "to vote", "verb", "이번 선거에서 꼭 투표하세요.", "这次选举一定要投票。", "Make sure to vote in this election.", "158", "어휘", ["collocation:투표하다"]],
    ["투표함에 넣다", "投入票箱", "动词短语", "to put into the ballot box", "verb phrase", "투표용지를 투표함에 넣으세요.", "请把选票投入票箱。", "Put the ballot into the ballot box.", "158", "어휘", ["collocation:투표함에 넣다"]],
    ["개표하다", "开票，计票", "动词", "to count votes", "verb", "투표가 끝나면 개표해요.", "投票结束后开票。", "Votes are counted after voting ends.", "158", "어휘", ["collocation:개표하다"]],
    ["지지율", "支持率", "名词", "approval rating; support rate", "noun", "지지율이 높은 후보자가 당선될 가능성이 커요.", "支持率高的候选人当选可能性大。", "A candidate with high support has a strong chance of being elected.", "158", "어휘", ["collocation:지지율이 높다"]],
    ["득표율", "得票率", "名词", "vote share", "noun", "개표 후 후보자의 득표율을 확인해요.", "开票后确认候选人的得票率。", "After the count, candidate vote shares are checked.", "158", "어휘", ["collocation:득표율이 높다"]],
    ["당선되다", "当选", "动词", "to be elected", "verb", "지지율이 높은 사람이 당선될 것 같아요.", "支持率高的人好像会当选。", "It seems the person with high support will be elected.", "158", "어휘", ["collocation:당선되다"]],
    ["V-나 보다 / A-(으)ㄴ가 보다", "看来……；好像……", "语法表达", "it seems; apparently", "grammar expression", "지금 연설을 마친 후보자를 지지하는 사람이 많은가 봐요.", "看来支持刚结束演讲的候选人的人很多。", "It seems many people support the candidate who just finished the speech.", "159", "문법 1", ["form:동사 + -나 보다", "form:형용사 + -(으)ㄴ가 보다"]],
    ["연설을 마치다", "结束演讲", "动词短语", "to finish a speech", "verb phrase", "후보자가 연설을 마쳤어요.", "候选人结束了演讲。", "The candidate finished the speech.", "159", "문법 1", ["collocation:연설을 마치다"]],
    ["책을 많이 읽다", "读很多书", "动词短语", "to read many books", "verb phrase", "도서관에 자주 가는 것을 보니 책을 많이 읽나 봐요.", "看他经常去图书馆，看来读很多书。", "Seeing that he often goes to the library, he seems to read many books.", "159", "문법 1", ["collocation:책을 많이 읽다"]],
    ["피곤하다", "疲惫", "形容词", "tired", "adjective", "이링 씨가 오늘 많이 피곤한가 봐요.", "李玲今天好像很累。", "Iring seems very tired today.", "159", "문법 1", ["collocation:피곤한가 보다"]],
    ["선거 운동을 하나 보다", "好像在进行选举活动", "句型", "seems to be campaigning", "sentence pattern", "다음 달에 있을 선거 운동을 하나 봐요.", "好像在为下个月的选举进行活动。", "It seems they are campaigning for next month's election.", "159", "문법 1", ["form:-나 보다"]],
    ["후보자이다", "是候选人", "表达", "to be a candidate", "expression", "저분은 이번 시장 선거 후보자인가 봐요.", "那位好像是这次市长选举的候选人。", "That person seems to be a candidate in this mayoral election.", "159", "문법 1", ["form:명사 + 인가 보다"]],
    ["행사장", "活动场地", "名词", "event venue", "noun", "이미 모두 행사장으로 출발했나 봐요.", "看来大家已经出发去活动场地了。", "It seems everyone has already left for the event venue.", "159", "문법 1", ["collocation:행사장으로 출발하다"]],
    ["N이야말로", "正是……；才是……", "语法表达", "indeed; precisely", "grammar expression", "공약이야말로 우리가 바라던 거예요.", "公约正是我们所期盼的。", "That promise is exactly what we had hoped for.", "160", "문법 2", ["form:명사 + 이야말로"]],
    ["공약", "竞选公约", "名词", "campaign promise", "noun", "후보자의 공약을 꼼꼼히 읽어 보세요.", "请仔细读候选人的公约。", "Read the candidate's campaign promises carefully.", "160", "문법 2", ["collocation:공약을 읽다"]],
    ["바라다", "期盼，希望", "动词", "to hope for", "verb", "그 공약이야말로 우리가 바라던 거예요.", "那个公约正是我们所期盼的。", "That promise is exactly what we hoped for.", "160", "문법 2", ["collocation:바라던 것"]],
    ["권리", "权利", "名词", "right", "noun", "투표 참여야말로 국민의 권리이자 의무예요.", "参与投票正是国民的权利和义务。", "Voting participation is indeed a citizen's right and duty.", "160", "문법 2", ["collocation:권리이자 의무"]],
    ["의무", "义务", "名词", "duty; obligation", "noun", "투표는 국민의 권리이자 의무예요.", "投票是国民的权利和义务。", "Voting is a citizen's right and duty.", "160", "문법 2", ["collocation:권리와 의무"]],
    ["훌륭하다", "优秀，出色", "形容词", "excellent; admirable", "adjective", "저분 참 훌륭한 분이죠.", "那位真是很优秀的人吧。", "That person is truly admirable.", "160", "문법 2", ["collocation:훌륭한 분"]],
    ["존경하다", "尊敬", "动词", "to respect", "verb", "저분이야말로 존경할 만한 분이에요.", "那位才是值得尊敬的人。", "That person is precisely someone worthy of respect.", "160", "문법 2", ["collocation:존경할 만하다"]],
    ["꼼꼼히", "仔细地", "副词", "carefully; thoroughly", "adverb", "공약을 꼼꼼히 확인하세요.", "请仔细确认公约。", "Check the promises carefully.", "161", "말하기", ["collocation:꼼꼼히 확인하다"]],
    ["투표권", "投票权", "名词", "right to vote", "noun", "이제 투표권이 생겼어요.", "现在有投票权了。", "I now have the right to vote.", "161", "말하기", ["collocation:투표권이 생기다"]],
    ["자료", "资料", "名词", "material; source", "noun", "공약은 후보자를 찾는 좋은 자료예요.", "公约是寻找候选人的好资料。", "Campaign promises are good material for finding a candidate.", "161", "단어장", ["collocation:좋은 자료"]],
    ["정당", "政党", "名词", "political party", "noun", "지지하는 정당의 후보에게 투표해요.", "投票给支持的政党的候选人。", "Vote for the candidate of the party you support.", "161", "단어장", ["collocation:정당의 후보"]],
    ["경력", "经历，履历", "名词", "career; experience", "noun", "후보자의 경력을 확인해 보세요.", "请确认候选人的履历。", "Check the candidate's career history.", "161", "말하기", ["collocation:경력을 확인하다"]],
    ["소중하다", "珍贵，重要", "形容词", "precious; important", "adjective", "소중한 한 표를 꼭 행사하세요.", "请一定行使珍贵的一票。", "Make sure to cast your precious vote.", "161", "단어장", ["collocation:소중한 한 표"]],
    ["한 표", "一票", "名词短语", "one vote", "noun phrase", "소중한 한 표가 중요해요.", "珍贵的一票很重要。", "One precious vote matters.", "161", "말하기", ["collocation:한 표를 행사하다"]],
    ["행사하다", "行使", "动词", "to exercise; use", "verb", "투표권을 행사하세요.", "请行使投票权。", "Exercise your right to vote.", "161", "말하기", ["collocation:권리를 행사하다"]],
    ["문화 체육 시설", "文化体育设施", "名词短语", "cultural and sports facilities", "noun phrase", "문화 체육 시설 확대가 필요해요.", "需要扩大文化体育设施。", "Expansion of cultural and sports facilities is needed.", "161", "말하기", ["collocation:문화 체육 시설 확대"]],
    ["일자리를 늘리다", "增加岗位", "动词短语", "to increase jobs", "verb phrase", "좋은 조건의 일자리를 늘려야 해요.", "应该增加条件好的岗位。", "Good-quality jobs should be increased.", "161", "말하기", ["collocation:일자리를 늘리다"]],
    ["사전 투표", "提前投票", "名词短语", "early voting", "noun phrase", "선거일 전에 사전 투표를 할 수 있어요.", "选举日前可以提前投票。", "People can vote early before election day.", "162", "듣기", ["collocation:사전 투표"]],
    ["지정되다", "被指定", "动词", "to be designated", "verb", "지정된 투표소에서 투표해야 해요.", "应该在指定投票站投票。", "You must vote at the designated polling place.", "162", "단어장", ["collocation:지정되다"]],
    ["신분증", "身份证件", "名词", "ID card", "noun", "투표하려면 반드시 신분증을 가지고 가야 해요.", "投票必须带身份证件。", "You must bring an ID card to vote.", "162", "듣기", ["collocation:신분증을 가지고 가다"]],
    ["분주하다", "忙碌，繁忙", "形容词", "busy; bustling", "adjective", "투표소가 많은 유권자들로 분주해요.", "投票站因很多选民而繁忙。", "The polling place is busy with many voters.", "162", "단어장", ["collocation:분주하다"]],
    ["약력", "简历，简要履历", "名词", "brief profile", "noun", "후보자 본인의 약력을 소개해 주십시오.", "请介绍候选人本人的简要履历。", "Please introduce the candidate's brief profile.", "162", "발음", ["collocation:약력"]],
    ["안정시키다", "使稳定", "动词", "to stabilize", "verb", "나라를 안정시키는 것이 중요해요.", "使国家稳定很重要。", "Stabilizing the country is important.", "162", "발음", ["collocation:나라를 안정시키다"]],
    ["국력", "国力", "名词", "national strength", "noun", "국력을 키우는 것이 중요해요.", "增强国力很重要。", "Building national strength is important.", "162", "발음", ["collocation:국력을 키우다"]],
    ["격려", "鼓励", "名词", "encouragement", "noun", "선배는 후배들에게 격려의 말을 해 주었어요.", "前辈给后辈说了鼓励的话。", "The senior gave words of encouragement to juniors.", "162", "발음", ["collocation:격려의 말"]],
    ["추진력", "推进力，执行力", "名词", "drive; ability to execute", "noun", "시장에게 추진력이 필요하다고 생각해요.", "我认为市长需要执行力。", "I think a mayor needs drive.", "163", "읽기 전", ["collocation:추진력"]],
    ["전문성", "专业性", "名词", "expertise", "noun", "전문성은 지도자에게 중요한 자질이에요.", "专业性是领导者的重要资质。", "Expertise is an important quality in a leader.", "163", "읽기 전", ["collocation:전문성"]],
    ["행정 경험", "行政经验", "名词短语", "administrative experience", "noun phrase", "시민들은 행정 경험이 풍부한 시장을 원해요.", "市民希望有丰富行政经验的市长。", "Citizens want a mayor with rich administrative experience.", "163", "읽기", ["collocation:행정 경험"]],
    ["도덕성", "道德性", "名词", "morality; integrity", "noun", "지도자는 높은 도덕성을 갖춰야 해요.", "领导者应该具备高道德性。", "A leader should have strong integrity.", "163", "읽기 전", ["collocation:도덕성"]],
    ["소통 능력", "沟通能力", "名词短语", "communication ability", "noun phrase", "시장에게 소통 능력이 필요해요.", "市长需要沟通能力。", "A mayor needs communication ability.", "164", "읽기", ["collocation:소통 능력"]],
    ["판단력", "判断力", "名词", "judgment", "noun", "판단력과 추진력도 중요한 자질이에요.", "判断力和执行力也是重要资质。", "Judgment and drive are also important qualities.", "164", "읽기", ["collocation:판단력"]],
    ["참신성", "新颖性", "名词", "freshness; originality", "noun", "참신성을 중요하게 생각하는 사람도 있어요.", "也有人重视新颖性。", "Some people value freshness.", "164", "읽기", ["collocation:참신성"]],
    ["정치 감각", "政治感觉", "名词短语", "political sense", "noun phrase", "정치 감각도 후보자의 자질 중 하나예요.", "政治感觉也是候选人资质之一。", "Political sense is one quality of a candidate.", "164", "읽기", ["collocation:정치 감각"]],
    ["리더십", "领导力", "名词", "leadership", "noun", "시민이 원하는 리더십 유형을 조사했어요.", "调查了市民希望的领导力类型。", "They surveyed the leadership types citizens wanted.", "163", "읽기 전", ["collocation:리더십 유형"]],
    ["민주적 리더십", "民主型领导力", "名词短语", "democratic leadership", "noun phrase", "민주적 리더십을 선호하는 시민이 많아요.", "偏好民主型领导力的市民很多。", "Many citizens prefer democratic leadership.", "163", "읽기 전", ["collocation:민주적 리더십"]],
    ["합법적 리더십", "合法型领导力", "名词短语", "lawful leadership", "noun phrase", "합법적 리더십은 높은 도덕성을 강조해요.", "合法型领导力强调高道德性。", "Lawful leadership emphasizes high integrity.", "163", "읽기 전", ["collocation:합법적 리더십"]],
    ["강력한 정치적 리더십", "强力政治型领导力", "名词短语", "strong political leadership", "noun phrase", "강력한 정치적 리더십을 원하는 사람도 있어요.", "也有人希望强力政治型领导力。", "Some people want strong political leadership.", "163", "읽기 전", ["collocation:강력한 리더십"]],
    ["협상적 리더십", "协商型领导力", "名词短语", "negotiating leadership", "noun phrase", "협상적 리더십은 서로 의논하는 태도를 중시해요.", "协商型领导力重视彼此商议的态度。", "Negotiating leadership values discussion and consultation.", "163", "읽기 전", ["collocation:협상적 리더십"]],
    ["의논하다", "商议", "动词", "to discuss; consult", "verb", "문제를 서로 의논해서 해결해요.", "互相商议来解决问题。", "People solve problems by discussing them together.", "163", "읽기 전", ["collocation:서로 의논하다"]],
    ["여론", "舆论", "名词", "public opinion", "noun", "차기 시장에 대한 여론을 알아보았어요.", "调查了关于下任市长的舆论。", "They looked into public opinion about the next mayor.", "164", "읽기", ["collocation:여론을 알아보다"]],
    ["설문 조사", "问卷调查", "名词短语", "survey", "noun phrase", "시민을 대상으로 설문 조사를 진행했어요.", "以市民为对象进行了问卷调查。", "They conducted a survey of citizens.", "164", "읽기", ["collocation:설문 조사를 진행하다"]],
    ["조사 결과", "调查结果", "名词短语", "survey result", "noun phrase", "조사 결과에 따르면 행정 경험이 가장 중요했어요.", "根据调查结果，行政经验最重要。", "According to the survey results, administrative experience was most important.", "164", "읽기", ["collocation:조사 결과에 따르면"]],
    ["갖추다", "具备", "动词", "to possess; have", "verb", "시장이 갖춰야 할 자질은 무엇일까요?", "市长应具备的资质是什么呢？", "What qualities should a mayor possess?", "164", "단어장", ["collocation:자질을 갖추다"]],
    ["상대적으로", "相对地", "副词", "relatively", "adverb", "정치 감각이라는 응답은 상대적으로 낮았어요.", "认为是政治感觉的回答相对较低。", "Responses mentioning political sense were relatively low.", "164", "읽기", ["collocation:상대적으로 낮다"]],
    ["압도적으로", "压倒性地", "副词", "overwhelmingly", "adverb", "민주적 리더십을 압도적으로 선호했어요.", "压倒性地偏好民主型领导力。", "Democratic leadership was overwhelmingly preferred.", "164", "단어장", ["collocation:압도적으로 높다"]],
    ["밑돌다", "低于", "动词", "to fall below", "verb", "일부 응답은 10%를 밑돌았어요.", "部分回答低于10%。", "Some responses fell below 10%.", "164", "단어장", ["collocation:밑돌다"]],
    ["풍부하다", "丰富", "形容词", "rich; abundant", "adjective", "행정 경험이 풍부한 시장을 원해요.", "希望有丰富行政经验的市长。", "Citizens want a mayor with rich administrative experience.", "164", "단어장", ["collocation:경험이 풍부하다"]],
    ["실시되다", "被实施，举行", "动词", "to be conducted; held", "verb", "설문 조사는 지난달에 실시됐어요.", "问卷调查于上个月实施。", "The survey was conducted last month.", "164", "읽기", ["collocation:조사가 실시되다"]],
    ["자동 응답 시스템", "自动应答系统", "名词短语", "automated response system", "noun phrase", "전화 조사 방식은 자동 응답 시스템을 활용했어요.", "电话调查方式利用了自动应答系统。", "The phone survey used an automated response system.", "164", "읽기", ["collocation:자동 응답 시스템"]],
    ["임기", "任期", "名词", "term of office", "noun", "대통령의 임기는 5년이에요.", "总统的任期是5年。", "The president's term is five years.", "166", "문화와 정보", ["collocation:임기"]],
    ["민주주의", "民主主义", "名词", "democracy", "noun", "선거는 민주주의를 유지하고 발전시키는 중요한 요소예요.", "选举是维持和发展民主主义的重要要素。", "Elections are an important element in maintaining and developing democracy.", "166", "문화와 정보", ["collocation:민주주의"]],
    ["권력", "权力", "名词", "power; authority", "noun", "민주주의에서는 권력이 국민으로부터 나온다고 믿어요.", "民主主义认为权力来自国民。", "In democracy, power is believed to come from the people.", "166", "문화와 정보", ["collocation:권력"]],
    ["의사", "意思，意愿", "名词", "will; intention", "noun", "선거는 자신의 의사를 대신할 사람을 뽑는 행위예요.", "选举是选出代替自己表达意愿的人的行为。", "An election is the act of choosing someone to represent one's will.", "166", "문화와 정보", ["collocation:의사를 대신하다"]],
    ["지방 자치 단체장", "地方自治团体长", "名词短语", "local government head", "noun phrase", "지방 자치 단체장도 선거를 통해 뽑혀요.", "地方自治团体长也通过选举选出。", "Local government heads are also elected.", "166", "문화와 정보", ["collocation:지방 자치 단체장"]],
    ["지방 의회 의원", "地方议会议员", "名词短语", "local council member", "noun phrase", "지방 의회 의원의 임기도 4년이에요.", "地方议会议员的任期也是4年。", "Local council members also have four-year terms.", "166", "문화와 정보", ["collocation:지방 의회 의원"]],
    ["받들다", "拥戴，遵从", "动词", "to uphold; serve", "verb", "당선자는 국민의 뜻을 받들어 역할을 수행해야 해요.", "当选者应该遵从国民意愿履行职责。", "Those elected should uphold the people's will and fulfill their role.", "166", "문화와 정보", ["collocation:국민의 뜻을 받들다"]],
    ["수행하다", "执行，履行", "动词", "to perform; carry out", "verb", "자신에게 주어진 역할을 수행해요.", "履行赋予自己的职责。", "They perform the role given to them.", "166", "문화와 정보", ["collocation:역할을 수행하다"]],
    ["보통 선거", "普通选举", "名词短语", "universal suffrage", "noun phrase", "한국에서는 보통 선거 원칙이 지켜져요.", "韩国遵守普通选举原则。", "The principle of universal suffrage is observed in Korea.", "166", "문화와 정보", ["collocation:보통 선거"]],
    ["평등 선거", "平等选举", "名词短语", "equal suffrage", "noun phrase", "평등 선거는 한 사람의 표가 평등하다는 원칙이에요.", "平等选举是每个人一票平等的原则。", "Equal suffrage means each person's vote is equal.", "166", "문화와 정보", ["collocation:평등 선거"]],
    ["직접 선거", "直接选举", "名词短语", "direct election", "noun phrase", "직접 선거에서는 유권자가 직접 후보자를 뽑아요.", "直接选举中选民直接选候选人。", "In direct elections, voters choose candidates directly.", "166", "문화와 정보", ["collocation:직접 선거"]],
    ["비밀 선거", "秘密选举", "名词短语", "secret ballot", "noun phrase", "비밀 선거는 누구에게 투표했는지 비밀로 지키는 원칙이에요.", "秘密选举是保密投给谁的原则。", "Secret ballot keeps each voter's choice private.", "166", "문화와 정보", ["collocation:비밀 선거"]],
    ["선출하다", "选出", "动词", "to elect", "verb", "누구를 선출할 것인지 잘 생각해야 해요.", "应该好好思考要选出谁。", "Voters should think carefully about whom to elect.", "166", "문화와 정보", ["collocation:선출하다"]],
    ["정치인", "政治人物", "名词", "politician", "noun", "시민들이 정치인에게 질문했어요.", "市民向政治人物提了问。", "Citizens asked a politician questions.", "160", "단어장", []],
    ["참여", "参与", "名词", "participation", "noun", "시민들의 선거 참여가 중요해요.", "市民参与选举很重要。", "Citizens' participation in elections is important.", "160", "단어장", []],
    ["(4천)여", "（四千）余；约（四千）多", "表达", "approximately; over (four thousand)", "expression", "전국에 투표소가 4천여 곳 설치됐어요.", "全国设置了四千余个投票站。", "More than four thousand polling stations were set up nationwide.", "162", "단어장", []],
    ["개표소", "计票所", "名词", "ballot-counting center", "noun", "투표함을 개표소로 옮겼어요.", "把投票箱移到了计票所。", "The ballot boxes were moved to the counting center.", "162", "단어장", []],
    ["상황", "情况；状况", "名词", "situation", "noun", "어려운 상황에서도 포기하지 않았어요.", "即使处境困难，我也没有放弃。", "I did not give up even in a difficult situation.", "162", "단어장", []],
    ["막", "刚刚；正要", "副词", "just; just about to", "adverb", "지금 막 투표가 끝났어요.", "投票刚刚结束。", "Voting has just ended.", "162", "단어장", []],
    ["정각", "整点；正点", "名词", "exact hour; on the dot", "noun", "투표소는 오전 여섯 시 정각에 문을 열었어요.", "投票站在早晨六点整开门了。", "The polling station opened at six o'clock on the dot.", "162", "단어장", []],
    ["이르다", "早", "形容词", "early", "adjective", "이른 아침부터 사람들이 줄을 섰어요.", "人们从一大早就开始排队了。", "People lined up from early morning.", "162", "단어장", []],
    ["시각", "时刻", "名词", "time; point in time", "noun", "투표가 끝나는 시각을 확인하세요.", "请确认投票结束的时刻。", "Please check the time when voting ends.", "162", "단어장", []],
    ["발길이 뜸하다", "来的人少；少有人来往", "动词短语", "to have few visitors", "verb phrase", "점심때는 투표소에 발길이 뜸했어요.", "午饭时间投票站来的人较少。", "Few people visited the polling station at lunchtime.", "162", "단어장", []],
    ["앞서", "在……之前；先前", "副词", "before; previously", "adverb", "투표에 앞서 신분증을 확인해요.", "投票前确认身份证件。", "We check identification before voting.", "162", "단어장", []],
    ["평균", "平均", "名词", "average", "noun", "이번 투표율은 평균보다 높았어요.", "此次投票率高于平均水平。", "The turnout this time was above average.", "162", "단어장", []],
    ["본인", "本人", "名词", "the person concerned; oneself", "noun", "투표는 본인이 직접 해야 해요.", "投票必须由本人亲自进行。", "You must vote in person.", "162", "단어장", []],
    ["챙기다", "备好；带好；照料", "动词", "to pack; to take care of", "verb", "투표하러 갈 때 신분증을 챙기세요.", "去投票时请带好身份证件。", "Make sure to take your identification when you go to vote.", "162", "단어장", []],
    ["원하다", "想要；希望", "动词", "to want", "verb", "시민들은 공정한 선거를 원해요.", "市民希望有公平的选举。", "Citizens want a fair election.", "164", "단어장", []],
    ["차기", "下届；下一任", "名词", "next term; next", "noun", "차기 시장에게 바라는 점을 이야기했어요.", "说出了对下一任市长的期望。", "We talked about what we hoped for from the next mayor.", "164", "단어장", []],
    ["대상", "对象；参加对象", "名词", "target participants", "noun", "이 행사의 대상은 내ㆍ외국인이에요.", "这个活动的对象是本国人和外国人。", "The target participants are Koreans and foreigners.", "164", "단어장", []],
    ["선호하다", "偏好", "动词", "to prefer", "verb", "유권자들은 어떤 후보를 선호하나요?", "选民更喜欢哪位候选人？", "Which candidate do voters prefer?", "164", "단어장", []],
    ["리더", "领导者", "名词", "leader", "noun", "좋은 리더는 사람들의 의견을 잘 들어요.", "优秀的领导者善于倾听人们的意见。", "A good leader listens carefully to people's opinions.", "165", "단어장", []],
    ["시장", "市长", "名词", "mayor", "noun", "시민들이 새로운 시장을 뽑았어요.", "市民选出了新市长。", "The citizens elected a new mayor.", "167", "배운 어휘 확인", []],
    ["도지사", "道知事；道级行政长官", "名词", "provincial governor", "noun", "도지사 후보들이 토론에 참여했어요.", "道知事候选人参加了辩论。", "The candidates for provincial governor took part in a debate.", "167", "배운 어휘 확인", []],
    ["군 의원", "郡议员", "名词短语", "county councilor", "noun phrase", "군 의원은 지역 주민의 의견을 들어요.", "郡议员听取当地居民的意见。", "A county councilor listens to local residents' views.", "167", "배운 어휘 확인", []],
    ["선거 운동", "竞选活动", "名词短语", "election campaign", "noun phrase", "후보자들이 선거 운동을 시작했어요.", "候选人们开始了竞选活动。", "The candidates began their election campaigns.", "167", "배운 어휘 확인", []],
    ["선거 공약", "竞选承诺", "名词短语", "campaign pledge", "noun phrase", "후보자의 선거 공약을 비교했어요.", "比较了候选人的竞选承诺。", "I compared the candidates' campaign pledges.", "167", "배운 어휘 확인", []],
    ["신분", "身份", "名词", "identity; status", "noun", "투표 전에 신분을 확인해요.", "投票前确认身份。", "We verify identity before voting.", "167", "배운 어휘 확인", []],
    ["투표용지", "选票", "名词", "ballot paper", "noun", "투표용지에 도장을 찍었어요.", "在选票上盖了章。", "I stamped the ballot paper.", "167", "배운 어휘 확인", []],
    ["지지율이 높다", "支持率高", "表达", "to have a high approval rating", "expression", "그 후보는 젊은 층에서 지지율이 높아요.", "那位候选人在年轻群体中支持率很高。", "That candidate has a high approval rating among young people.", "167", "배운 어휘 확인", []],
    ["지지율이 낮다", "支持率低", "表达", "to have a low approval rating", "expression", "그 후보는 지난달보다 지지율이 낮아요.", "那位候选人的支持率比上个月低。", "That candidate's approval rating is lower than last month.", "167", "배운 어휘 확인", []],
    ["득표율이 높다", "得票率高", "表达", "to receive a high share of the vote", "expression", "당선된 후보는 다른 후보보다 득표율이 높았어요.", "当选候选人的得票率高于其他候选人。", "The elected candidate received a higher share of the vote than the others.", "167", "배운 어휘 확인", []],
    ["득표율이 낮다", "得票率低", "表达", "to receive a low share of the vote", "expression", "예상보다 득표율이 낮았어요.", "得票率低于预期。", "The share of the vote was lower than expected.", "167", "배운 어휘 확인", []],
    ["유형", "类型", "名词", "type", "noun", "리더십에는 여러 유형이 있어요.", "领导力有多种类型。", "There are several types of leadership.", "167", "배운 어휘 확인", []],
    ["민주적", "民主的；民主性", "名词", "democratic", "noun", "민주적 절차에 따라 대표를 뽑아요.", "按照民主程序选出代表。", "We elect representatives through a democratic process.", "167", "배운 어휘 확인", []],
    ["합법적", "合法的；合法性", "名词", "legal; lawful", "noun", "합법적 절차에 따라 선거를 진행해요.", "按照合法程序举行选举。", "The election is conducted through lawful procedures.", "167", "배운 어휘 확인", []],
    ["강력하다", "强有力；强大", "形容词", "strong; powerful", "adjective", "문제를 해결할 강력한 추진력이 필요해요.", "需要强有力的执行力来解决问题。", "Strong drive is needed to solve the problem.", "167", "배운 어휘 확인", []],
    ["정치적", "政治的；政治性", "名词", "political", "noun", "사람마다 정치적 의견이 달라요.", "每个人的政治观点不同。", "Political opinions differ from person to person.", "167", "배운 어휘 확인", []],
    ["협상적", "协商型的；谈判式的", "名词", "negotiation-oriented", "noun", "협상적 리더는 대화를 통해 합의를 이끌어요.", "协商型领导者通过对话达成共识。", "A negotiation-oriented leader builds agreement through dialogue.", "167", "배운 어휘 확인", []]
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
  window.lessonGuideL4LessonChunks["l4-12"] = {
    id: "l4-12",
    number: 12,
    titleKo: "선거와 투표",
    titleZh: "选举与投票",
    pages: "156-167",
    status: "draft",
    progress: {
      vocabulary: "draft-p156-p167",
      dialogue: "draft-p159-p161",
      culture: "draft-p166",
      practice: "draft-p159-p166"
    },
    vocabulary,
    vocabularySources: [
      { page: 156, label: "단원 제목", note: "课题、语法和学习目标" },
      { page: 158, label: "어휘", note: "选举种类、投票流程和开票词汇" },
      { page: 159, label: "문법 1", note: "V-나 보다 / A-(으)ㄴ가 보다 和推测表达" },
      { page: 160, label: "문법 2", note: "N이야말로 和强调表达" },
      { page: 160, label: "단어장", note: "已对照教材黄色词汇框逐词核对" },
      { page: 161, label: "말하기", note: "地方选举和候选人公约对话" },
      { page: 161, label: "단어장", note: "已对照教材黄色词汇框逐词核对" },
      { page: 162, label: "듣기/발음", note: "选举日新闻、提前投票和发音练习" },
      { page: 162, label: "단어장", note: "已对照教材黄色词汇框逐词核对" },
      { page: 163, label: "읽기 전", note: "领导者资质和领导力类型" },
      { page: 164, label: "읽기", note: "市场候选人资质调查报道" },
      { page: 164, label: "단어장", note: "已对照教材黄色词汇框逐词核对" },
      { page: 165, label: "단어장", note: "已对照教材黄色词汇框逐词核对" },
      { page: 166, label: "문화와 정보", note: "韩国的选举制度" },
      { page: 167, label: "배운 어휘 확인", note: "已对照教材课末词汇清单逐词核对" }
    ],
    goals: [
      "能谈论选举和投票。",
      "能写出对领导者资质的看法。",
      "理解韩国选举制度和相关文化信息。"
    ],
    grammar: [
      {
        pattern: "V-나 보다 / A-(으)ㄴ가 보다",
        zh: "看来……；好像……",
        guide: "根据看到、听到或已知的线索进行推测，语气比直接判断更委婉。",
        translations: {
          en: {
            meaning: "it seems...; apparently...",
            guide: "Infers something based on visible, heard, or known clues, with a softer tone than a direct judgment."
          }
        }
      },
      {
        pattern: "N이야말로",
        zh: "正是……；才是……",
        guide: "强调某个对象最符合后面的评价、说明或判断。",
        translations: {
          en: {
            meaning: "indeed...; precisely...",
            guide: "Emphasizes that the noun is exactly what fits the following statement or evaluation."
          }
        }
      }
    ],
    dialogues: [
      {
        title: "선거 운동을 하나 봐요",
        titleKo: "선거 운동을 하나 봐요",
        titleZh: "好像在进行选举活动",
        focus: "V-나 보다 / A-(으)ㄴ가 보다",
        page: "159",
        source: "문법 1",
        sceneZh: "根据眼前看到的情况推测正在发生什么。",
        speakers: ["후엔", "민수"],
        lines: [
          {
            speaker: "후엔",
            ko: "저 사람들은 뭐 하는 거예요?",
            zh: "那些人在做什么？",
            noteZh: "뭐 하는 거예요? 用来询问眼前行为。",
            translations: {
              en: {
                translation: "What are those people doing?",
                note: "뭐 하는 거예요? asks about an action happening in front of the speaker."
              }
            }
          },
          {
            speaker: "민수",
            ko: "다음 달에 있을 선거 운동을 하나 봐요.",
            zh: "好像在为下个月的选举进行活动。",
            noteZh: "-나 보다 表示根据线索推测“看来……”。",
            translations: {
              en: {
                translation: "It seems they are campaigning for next month's election.",
                note: "-나 보다 expresses an inference based on clues."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "They Seem to Be Campaigning",
            scene: "Infer what is happening based on what you see."
          }
        }
      },
      {
        title: "저분이야말로 존경할 만한 분이에요",
        titleKo: "저분이야말로 존경할 만한 분이에요",
        titleZh: "那位才是值得尊敬的人",
        focus: "N이야말로",
        page: "160",
        source: "문법 2",
        sceneZh: "用 N이야말로 强调最符合评价的对象。",
        speakers: ["제이슨", "정아라"],
        lines: [
          {
            speaker: "제이슨",
            ko: "저분 참 훌륭한 분이죠.",
            zh: "那位真是很优秀的人吧。",
            noteZh: "참 用来加强评价语气。",
            translations: {
              en: {
                translation: "That person is truly admirable.",
                note: "참 strengthens the speaker's evaluation."
              }
            }
          },
          {
            speaker: "정아라",
            ko: "네, 맞아요. 저분이야말로 존경할 만한 분이에요.",
            zh: "是的，没错。那位才是值得尊敬的人。",
            noteZh: "저분이야말로 强调“正是那个人”。",
            translations: {
              en: {
                translation: "Yes, exactly. That person is precisely someone worthy of respect.",
                note: "저분이야말로 emphasizes 'that very person'."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "That Person Is Precisely Worthy of Respect",
            scene: "Use N이야말로 to emphasize the person or thing that best fits an evaluation."
          }
        }
      },
      {
        title: "공약을 읽어 보세요",
        titleKo: "공약을 읽어 보세요",
        titleZh: "请读一读公约",
        focus: "선거와 후보자 선택",
        page: "161",
        source: "말하기",
        sceneZh: "围绕地方选举、投票权、支持率和候选人公约进行对话。",
        speakers: ["정아라", "고천"],
        lines: [
          {
            speaker: "정아라",
            ko: "아, 맞다. 고천 씨, 이번 지방 선거 때 투표하죠?",
            zh: "啊，对了。高天，这次地方选举你会投票吧？",
            noteZh: "아, 맞다 用来突然想起一件事。",
            translations: {
              en: {
                translation: "Oh, right. Gocheon, you are voting in this local election, right?",
                note: "아, 맞다 is used when suddenly remembering something."
              }
            }
          },
          {
            speaker: "고천",
            ko: "네. 이제 투표권이 생겨서 이번에 처음으로 하게 됐어요.",
            zh: "是的。现在有投票权了，所以这次会第一次投票。",
            noteZh: "투표권이 생기다 表示获得投票资格。",
            translations: {
              en: {
                translation: "Yes. I now have the right to vote, so this will be my first time voting.",
                note: "투표권이 생기다 means to gain the right to vote."
              }
            }
          },
          {
            speaker: "정아라",
            ko: "고천 씨는 어떤 사람이 당선됐으면 좋겠어요?",
            zh: "你希望什么样的人当选？",
            noteZh: "-았/었으면 좋겠어요 表示希望。",
            translations: {
              en: {
                translation: "What kind of person would you like to be elected?",
                note: "-았/었으면 좋겠어요 expresses a wish."
              }
            }
          },
          {
            speaker: "고천",
            ko: "아직 잘 모르겠어요. 저는 지지율이 높은 사람에게 투표하려고요.",
            zh: "我还不太清楚。我打算投给支持率高的人。",
            noteZh: "-려고요 简洁表达打算。",
            translations: {
              en: {
                translation: "I am not sure yet. I am thinking of voting for the person with a high approval rating.",
                note: "-려고요 briefly expresses an intention."
              }
            }
          },
          {
            speaker: "정아라",
            ko: "그러지 말고 후보자의 공약을 읽어 보세요. 공약이야말로 나에게 필요한 후보자를 찾는 좋은 자료예요.",
            zh: "别那样，请读一读候选人的公约。公约才是寻找适合自己的候选人的好资料。",
            noteZh: "공약이야말로 强调“公约正是判断候选人的关键资料”。",
            translations: {
              en: {
                translation: "Do not do that; read the candidates' campaign promises. Campaign promises are exactly the right material for finding the candidate you need.",
                note: "공약이야말로 emphasizes that campaign promises are the key material for judging candidates."
              }
            }
          },
          {
            speaker: "고천",
            ko: "그런가요? 그럼 저는 아이 교육에 관심이 많으니까 교육 관련 내용을 찾아봐야겠어요.",
            zh: "是吗？那我对孩子教育很关心，所以得找找教育相关内容。",
            noteZh: "-아/어야겠어요 表示自己判断后决定要做某事。",
            translations: {
              en: {
                translation: "Is that so? Then I care a lot about children's education, so I should look for education-related content.",
                note: "-아/어야겠어요 expresses a decision based on the speaker's judgment."
              }
            }
          },
          {
            speaker: "정아라",
            ko: "선거 공보물도 꼼꼼히 확인하시고 소중한 한 표 꼭 행사하세요.",
            zh: "也请仔细确认选举公报，并一定行使珍贵的一票。",
            noteZh: "한 표를 행사하다 是“投出一票、行使投票权”的正式说法。",
            translations: {
              en: {
                translation: "Please also check the election materials carefully and make sure to cast your precious vote.",
                note: "한 표를 행사하다 is a formal expression for casting one's vote."
              }
            }
          }
        ],
        translations: {
          en: {
            title: "Read the Campaign Promises",
            scene: "Talk about local elections, voting rights, approval ratings, and campaign promises."
          }
        }
      }
    ],
    culture: {
      titleKo: "한국의 선거",
      titleZh: "韩国的选举",
      summaryZh: "文章介绍选举在民主主义中的意义、韩国主要选举种类和任期，以及韩国选举的四项原则。",
      paragraphs: [
        {
          ko: "선거는 민주주의를 유지하고 발전시키는 가장 중요한 요소 중의 하나이다. 민주주의에서는 중앙 정부나 지방 정부의 모든 권력이 국민으로부터 나온다고 믿는다. 선거는 바로 이러한 권력과 관련하여 자신의 의사를 대신할 사람을 뽑는 행위이다.",
          zh: "选举是维持并发展民主主义的最重要要素之一。在民主主义中，人们相信中央政府或地方政府的一切权力都来自国民。选举正是与这种权力相关，选出代替自己表达意愿的人的行为。",
          guide: "第一段说明选举的核心意义：通过选人来表达自己的政治意愿。",
          translations: {
            en: {
              translation: "Elections are one of the most important elements in maintaining and developing democracy. In a democracy, people believe that all power of the central or local government comes from the people. An election is the act of choosing a person to represent one's will in relation to this power.",
              guide: "The first paragraph explains the core meaning of elections: people express their political will by choosing representatives."
            }
          }
        },
        {
          ko: "한국에서는 크게 세 차례의 선거가 실시된다. 대통령을 뽑는 선거, 국회 의원을 뽑는 선거, 지방 자치 단체장과 지방 의회 의원을 뽑는 선거가 그것이다. 이렇게 선거를 통해 뽑힌 사람은 임기 동안 국민의 뜻을 받들어 자신에게 주어진 역할을 수행하는데 대통령의 임기는 5년, 국회 의원, 지방 자치 단체장, 지방 의회 의원의 임기는 똑같이 4년이다.",
          zh: "韩国大体上举行三类选举。分别是选总统的选举、选国会议员的选举，以及选地方自治团体长和地方议会议员的选举。通过选举选出的人在任期内遵从国民意愿，履行赋予自己的职责；总统任期为5年，国会议员、地方自治团体长、地方议会议员的任期同样为4年。",
          guide: "第二段抓住“三类选举”和“任期”：总统5年，其他主要民选职位多为4年。",
          translations: {
            en: {
              translation: "In Korea, there are broadly three types of elections: elections for the president, elections for National Assembly members, and elections for local government heads and local council members. Those elected through these elections uphold the will of the people and perform their assigned roles during their terms. The president's term is five years, while National Assembly members, local government heads, and local council members all serve four-year terms.",
              guide: "The second paragraph highlights three election types and terms of office: the president serves five years, while the other major elected positions serve four years."
            }
          }
        },
        {
          ko: "한국에서는 보통 선거, 평등 선거, 직접 선거, 비밀 선거라는 선거의 4원칙이 엄격하게 지켜지고 있다. 따라서 중요한 것은 선거에서 투표를 하는 국민이 누구를 선출할 것인가를 잘 생각하고 선거에 참여하는 일이다.",
          zh: "在韩国，普通选举、平等选举、直接选举、秘密选举这四项选举原则被严格遵守。因此，重要的是参加投票的国民认真思考要选出谁，并参与选举。",
          guide: "第三段强调选举原则和公民责任：不只是去投票，还要认真判断候选人。",
          translations: {
            en: {
              translation: "In Korea, the four principles of elections - universal, equal, direct, and secret elections - are strictly observed. Therefore, what matters is that citizens who vote in elections carefully think about whom to elect and participate in the election.",
              guide: "The third paragraph emphasizes election principles and civic responsibility: voting matters, but voters should also judge candidates carefully."
            }
          }
        }
      ],
      questions: [
        {
          q: "한국에는 어떤 선거가 있습니까?",
          zh: "韩国有哪些选举？",
          answerZh: "有总统选举、国会议员选举，以及地方自治团体长和地方议会议员选举。",
          translations: {
            en: {
              translation: "What kinds of elections are there in Korea?",
              answer: "There are presidential elections, elections for National Assembly members, and elections for local government heads and local council members."
            }
          }
        },
        {
          q: "선거를 할 때 중요한 것은 무엇입니까?",
          zh: "选举时重要的是什么？",
          answerZh: "投票的国民要认真思考选谁，并参与选举。",
          translations: {
            en: {
              translation: "What is important when voting in an election?",
              answer: "Citizens should think carefully about whom to elect and participate in the election."
            }
          }
        },
        {
          q: "여러분 고향에서는 정치와 관련하여 국민이 어떤 방법으로 자신의 의사를 표현합니까?",
          zh: "在你的家乡，国民通过什么方式表达与政治相关的意愿？",
          answerZh: "可以介绍投票、参加讨论、向代表提出意见、参加公共活动等表达方式。",
          translations: {
            en: {
              translation: "In your hometown, how do people express their political opinions?",
              answer: "You can introduce voting, public discussions, giving opinions to representatives, participating in public activities, and similar methods."
            }
          }
        }
      ],
      translations: {
        en: {
          title: "Korean Elections",
          summary: "The article explains the meaning of elections in democracy, Korea's major election types and terms of office, and the four principles of Korean elections."
        }
      }
    },
    practice: [
      {
        type: "grammar",
        title: "V-나 보다 / A-(으)ㄴ가 보다",
        promptZh: "用 -나 보다 说：看大家在看海报，看来是在看国会议员选举海报。",
        answerKo: "사람들이 포스터를 보는 것을 보니 국회 의원 선거 포스터를 보나 봐요.",
        translations: {
          en: {
            title: "V-나 보다 / A-(으)ㄴ가 보다",
            prompt: "Use -나 보다: Seeing people looking at a poster, it seems they are looking at a National Assembly election poster.",
            answer: "사람들이 포스터를 보는 것을 보니 국회 의원 선거 포스터를 보나 봐요."
          }
        }
      },
      {
        type: "grammar",
        title: "N이야말로",
        promptZh: "用 이야말로 说：仔细阅读公约正是投票前必须做的事。",
        answerKo: "공약을 꼼꼼히 읽는 것이야말로 투표하기 전에 꼭 해야 하는 일이에요.",
        translations: {
          en: {
            title: "N이야말로",
            prompt: "Use 이야말로: Carefully reading campaign promises is exactly what must be done before voting.",
            answer: "공약을 꼼꼼히 읽는 것이야말로 투표하기 전에 꼭 해야 하는 일이에요."
          }
        }
      },
      {
        type: "speaking",
        title: "후보자 선택",
        promptZh: "说：不要只看支持率，要仔细确认候选人的公约和经历。",
        answerKo: "지지율만 보지 말고 후보자의 공약과 경력을 꼼꼼히 확인해야 해요.",
        translations: {
          en: {
            title: "Choosing a Candidate",
            prompt: "Say: Do not look only at approval ratings; you should carefully check the candidate's promises and career.",
            answer: "지지율만 보지 말고 후보자의 공약과 경력을 꼼꼼히 확인해야 해요."
          }
        }
      },
      {
        type: "reading",
        title: "시장에게 필요한 자질",
        promptZh: "阅读题：调查中市民认为下任市长最需要具备的资质是什么？",
        answerKo: "행정 경험과 전문성입니다.",
        translations: {
          en: {
            title: "Qualities Needed in a Mayor",
            prompt: "Reading: According to the survey, what quality do citizens think the next mayor needs most?",
            answer: "행정 경험과 전문성입니다."
          }
        }
      },
      {
        type: "culture",
        title: "한국의 선거",
        promptZh: "文化题：韩国选举的四项原则是什么？",
        answerKo: "보통 선거, 평등 선거, 직접 선거, 비밀 선거입니다.",
        translations: {
          en: {
            title: "Korean Elections",
            prompt: "Culture: What are the four principles of Korean elections?",
            answer: "보통 선거, 평등 선거, 직접 선거, 비밀 선거입니다."
          }
        }
      }
    ],
    translations: {
      en: {
        title: "Elections and Voting",
        goals: [
          "Talk about elections and voting.",
          "Use V-나 보다 / A-(으)ㄴ가 보다 to infer based on clues.",
          "Use N이야말로 to strongly emphasize the exact person or thing.",
          "Write about leader qualities and understand Korea's election system."
        ]
      }
    }
  };
})();
