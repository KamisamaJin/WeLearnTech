(() => {
  const makeTips = (tips) => (tips || []).map((text) => {
    const [type, body] = text.includes(":") ? text.split(/:(.+)/) : ["collocation", text];
    return { type, text: body.trim() };
  });

  const vocabulary = [
    ["정보화 사회", "信息化社会", "名词短语", "information society", "noun phrase", "정보화 사회에서는 개인 정보 관리가 중요해요.", "在信息化社会中，个人信息管理很重要。", "In an information society, managing personal information is important.", "96", "단원 제목", ["collocation:정보화 사회"]],
    ["개인 정보", "个人信息", "名词短语", "personal information", "noun phrase", "인터넷을 사용할 때 개인 정보를 조심해야 해요.", "使用互联网时要小心个人信息。", "You must be careful with personal information when using the internet.", "96", "단원 제목", ["collocation:개인 정보"]],
    ["인터넷과 스마트폰 사용의 문제점", "互联网和智能手机使用的问题", "名词短语", "problems with internet and smartphone use", "noun phrase", "인터넷과 스마트폰 사용의 문제점을 이야기해 보세요.", "请说说互联网和智能手机使用的问题。", "Talk about problems with internet and smartphone use.", "96", "활동", ["collocation:사용의 문제점"]],
    ["중독 문제", "成瘾问题", "名词短语", "addiction problem", "noun phrase", "스마트폰 중독 문제를 예방해야 해요.", "应该预防智能手机成瘾问题。", "We should prevent smartphone addiction problems.", "96", "활동", ["collocation:중독 문제"]],
    ["예방 방안", "预防方法", "名词短语", "prevention measure", "noun phrase", "인터넷 중독의 예방 방안을 써 보세요.", "请写出网络成瘾的预防方法。", "Write prevention measures for internet addiction.", "96", "활동", ["collocation:예방 방안"]],
    ["스마트폰과 애플리케이션", "智能手机与应用程序", "名词短语", "smartphones and applications", "noun phrase", "이번 문화 수업에서는 스마트폰과 애플리케이션을 배워요.", "这次文化课学习智能手机与应用程序。", "This culture lesson covers smartphones and applications.", "96", "문화와 정보", ["collocation:애플리케이션을 설치하다"]],
    ["인터넷 포털 사이트", "互联网门户网站", "名词", "internet portal site", "noun", "인터넷 포털 사이트에서 뉴스를 봐요.", "在互联网门户网站上看新闻。", "I read news on an internet portal site.", "98", "어휘", ["collocation:포털 사이트"]],
    ["뉴스를 보다", "看新闻", "动词短语", "to read/watch news", "verb phrase", "아침마다 인터넷으로 뉴스를 봐요.", "每天早上用互联网看新闻。", "I read news online every morning.", "98", "어휘", ["collocation:뉴스를 보다"]],
    ["검색을 하다", "搜索", "动词短语", "to search", "verb phrase", "모르는 단어는 인터넷에서 검색을 해요.", "不认识的单词在网上搜索。", "I search unfamiliar words online.", "98", "어휘", ["collocation:인터넷에서 검색하다"]],
    ["이메일을 주고받다", "收发电子邮件", "动词短语", "to exchange emails", "verb phrase", "회사에서는 이메일을 자주 주고받아요.", "在公司经常收发电子邮件。", "At work, we exchange emails often.", "98", "어휘", ["collocation:이메일을 주고받다"]],
    ["스마트폰 채팅 앱", "智能手机聊天应用", "名词短语", "smartphone chat app", "noun phrase", "스마트폰 채팅 앱으로 친구들과 대화해요.", "用智能手机聊天应用和朋友聊天。", "I talk with friends through a smartphone chat app.", "98", "어휘", ["collocation:채팅 앱"]],
    ["대화하다", "对话，聊天", "动词", "to talk; to chat", "verb", "친구와 채팅 앱으로 대화했어요.", "和朋友用聊天应用聊天了。", "I chatted with a friend through a chat app.", "98", "어휘", ["collocation:친구와 대화하다"]],
    ["사진/동영상을 전송하다", "发送照片/视频", "动词短语", "to send photos/videos", "verb phrase", "가족에게 사진과 동영상을 전송했어요.", "给家人发送了照片和视频。", "I sent photos and videos to my family.", "98", "어휘", ["collocation:동영상을 전송하다"]],
    ["전송하다", "传送，发送", "动词", "to send; to transmit", "verb", "사진을 바로 전송할 수 있어요.", "可以马上发送照片。", "You can send photos right away.", "98", "어휘", ["collocation:사진을 전송하다"]],
    ["단톡방을 만들다", "建立群聊", "动词短语", "to create a group chat", "verb phrase", "직장 동료들과 단톡방을 만들었어요.", "和同事们建立了群聊。", "I created a group chat with coworkers.", "98", "어휘", ["collocation:단톡방을 만들다"]],
    ["에스엔에스(SNS)", "社交媒体", "名词", "SNS; social media", "noun", "에스엔에스에 여행 사진을 올렸어요.", "把旅行照片上传到社交媒体了。", "I posted travel photos on social media.", "98", "어휘", ["collocation:에스엔에스에 올리다"]],
    ["글/사진/동영상을 올리다", "上传文章/照片/视频", "动词短语", "to post writing/photos/videos", "verb phrase", "에스엔에스에 글과 사진을 올렸어요.", "在社交媒体上传了文字和照片。", "I posted writing and photos on social media.", "98", "어휘", ["collocation:사진을 올리다"]],
    ["댓글을 달다", "发表评论", "动词短语", "to leave a comment", "verb phrase", "친구의 사진에 댓글을 달았어요.", "在朋友的照片下评论了。", "I left a comment on my friend's photo.", "98", "어휘", ["collocation:댓글을 달다"]],
    ["동영상 재생 사이트", "视频播放网站", "名词短语", "video streaming site", "noun phrase", "동영상 재생 사이트에서 한국 드라마를 봐요.", "在视频播放网站上看韩剧。", "I watch Korean dramas on a video streaming site.", "98", "어휘", ["collocation:동영상 재생 사이트"]],
    ["동영상을 보다", "看视频", "动词短语", "to watch videos", "verb phrase", "퇴근 후에 동영상을 봐요.", "下班后看视频。", "I watch videos after work.", "98", "어휘", ["collocation:동영상을 보다"]],
    ["동영상을 올리다", "上传视频", "动词短语", "to upload a video", "verb phrase", "요리하는 동영상을 올렸어요.", "上传了做菜的视频。", "I uploaded a cooking video.", "98", "어휘", ["collocation:동영상을 올리다"]],
    ["드라마/영화를 보다", "看电视剧/电影", "动词短语", "to watch dramas/movies", "verb phrase", "주말에는 스마트폰으로 영화를 봐요.", "周末用智能手机看电影。", "I watch movies on my smartphone on weekends.", "98", "어휘", ["collocation:영화를 보다"]],
    ["인터넷에 접속하다", "连接互联网，上网", "动词短语", "to connect to the internet", "verb phrase", "카페에서 인터넷에 접속했어요.", "在咖啡店连接了互联网。", "I connected to the internet at a cafe.", "98", "어휘", ["collocation:인터넷에 접속하다"]],
    ["검색창", "搜索框", "名词", "search box", "noun", "검색창에 검색어를 입력하세요.", "请在搜索框输入搜索词。", "Enter a search term in the search box.", "98", "어휘", ["collocation:검색창에 입력하다"]],
    ["검색어", "搜索词", "名词", "search term", "noun", "검색어를 정확하게 입력해야 해요.", "搜索词要输入准确。", "You need to enter the search term accurately.", "98", "어휘", ["collocation:검색어를 입력하다"]],
    ["입력하다", "输入", "动词", "to enter; to input", "verb", "회원 가입을 하려면 이름과 전화번호를 입력해야 해요.", "要注册会员，需要输入姓名和电话号码。", "To sign up, you must enter your name and phone number.", "98", "어휘", ["collocation:정보를 입력하다"]],
    ["회원 가입을 하다", "注册会员", "动词短语", "to sign up; to register", "verb phrase", "쇼핑몰에서 회원 가입을 했어요.", "在购物网站注册了会员。", "I signed up on the shopping site.", "98", "어휘", ["collocation:회원 가입을 하다"]],
    ["개인 정보를 입력하다", "输入个人信息", "动词短语", "to enter personal information", "verb phrase", "회원 가입을 할 때 개인 정보를 입력해요.", "注册会员时输入个人信息。", "You enter personal information when signing up.", "98", "어휘", ["collocation:개인 정보를 입력하다"]],
    ["개인 정보 이용에 동의하다", "同意使用个人信息", "动词短语", "to agree to the use of personal information", "verb phrase", "가입하려면 개인 정보 이용에 동의해야 해요.", "要注册必须同意使用个人信息。", "To sign up, you must agree to the use of personal information.", "98", "어휘", ["collocation:이용에 동의하다"]],
    ["다운로드하다", "下载", "动词", "to download", "verb", "필요한 자료를 다운로드했어요.", "下载了需要的资料。", "I downloaded the materials I needed.", "98", "어휘", ["collocation:자료를 다운로드하다"]],
    ["자료를 복사하다", "复制资料", "动词短语", "to copy materials", "verb phrase", "필요한 자료를 복사해서 저장했어요.", "复制并保存了需要的资料。", "I copied and saved the materials I needed.", "98", "어휘", ["collocation:자료를 복사하다"]],
    ["자료를 저장하다", "保存资料", "动词短语", "to save materials", "verb phrase", "중요한 자료를 컴퓨터에 저장했어요.", "把重要资料保存到电脑里了。", "I saved important materials on my computer.", "98", "어휘", ["collocation:자료를 저장하다"]],
    ["정보를 공유하다", "共享信息", "动词短语", "to share information", "verb phrase", "좋은 정보를 다른 사람과 공유해요.", "和别人共享有用的信息。", "I share useful information with others.", "98", "어휘", ["collocation:정보를 공유하다"]],
    ["V/A-는다면서요?", "听说……是吗？", "语法表达", "I heard that..., is that right?", "grammar expression", "이링 씨, 이사했다면서요?", "이링，听说你搬家了，是吗？", "I heard you moved, Yiling. Is that right?", "99", "문법 1", ["form:동사/형용사 + -는다면서요?"]],
    ["합격하다", "合格，通过", "动词", "to pass", "verb", "후엔 씨가 TOPIK 4급 시험에 합격했다면서요?", "听说 후엔 通过了 TOPIK 4级考试，是吗？", "I heard Huyen passed TOPIK level 4. Is that right?", "99", "문법 1", ["collocation:시험에 합격하다"]],
    ["이사하다", "搬家", "动词", "to move", "verb", "이링 씨가 직장 때문에 이사했어요.", "이링 因为工作搬家了。", "Yiling moved because of work.", "99", "문법 1 대화", ["collocation:직장 때문에 이사하다"]],
    ["올린 사진", "上传的照片", "名词短语", "posted photo", "noun phrase", "에스엔에스에 올린 사진을 봤어요.", "看到了你上传到社交媒体的照片。", "I saw the photo you posted on social media.", "99", "문법 1 대화", ["collocation:사진을 올리다"]],
    ["직장 때문에", "因为工作单位", "副词短语", "because of work", "adverbial phrase", "직장 때문에 그렇게 됐어요.", "因为工作，事情就那样了。", "That happened because of work.", "99", "문법 1 대화", ["collocation:직장 때문에"]],
    ["엄청", "非常，特别", "副词", "very; extremely", "adverb", "동생의 키가 엄청 크다면서요?", "听说你弟弟/妹妹个子特别高，是吗？", "I heard your younger sibling is very tall. Is that right?", "99", "단어장", ["collocation:엄청 크다"]],
    ["V-(으)ㄹ 겸 V-(으)ㄹ 겸", "既为了……也为了……", "语法表达", "both to... and to...", "grammar expression", "운동도 할 겸 스트레스도 풀 겸 자전거를 타요.", "既为了运动，也为了释放压力，所以骑自行车。", "I ride a bike both to exercise and relieve stress.", "100", "문법 2", ["form:동사 + -(으)ㄹ 겸"]],
    ["스트레스를 풀다", "释放压力", "动词短语", "to relieve stress", "verb phrase", "자전거를 타면서 스트레스를 풀어요.", "一边骑自行车一边释放压力。", "I relieve stress by riding a bike.", "100", "문법 2", ["collocation:스트레스를 풀다"]],
    ["자전거를 타다", "骑自行车", "动词短语", "to ride a bicycle", "verb phrase", "운동도 할 겸 자전거를 타요.", "也为了运动而骑自行车。", "I ride a bicycle to exercise as well.", "100", "문법 2", ["collocation:자전거를 타다"]],
    ["맛집", "美食店，口碑餐厅", "名词", "popular restaurant", "noun", "친구들과 맛집에 가기로 했어요.", "决定和朋友们去口碑餐厅。", "I decided to go to a popular restaurant with friends.", "100", "문법 2", ["collocation:맛집에 가다"]],
    ["이야기를 나누다", "聊天，交谈", "动词短语", "to have a conversation", "verb phrase", "친구들과 이야기를 나누고 싶어요.", "想和朋友们聊聊天。", "I want to talk with my friends.", "100", "문법 2", ["collocation:이야기를 나누다"]],
    ["결혼식에 참석하다", "参加婚礼", "动词短语", "to attend a wedding", "verb phrase", "친구 결혼식에 참석할 겸 고향에 가요.", "也为了参加朋友婚礼而回家乡。", "I am going to my hometown partly to attend a friend's wedding.", "100", "문법 2 대화", ["collocation:결혼식에 참석하다"]],
    ["부모님을 뵙다", "拜见父母", "动词短语", "to see one's parents honorifically", "verb phrase", "부모님도 뵐 겸 고향에 다녀오려고 해요.", "也为了拜见父母，打算回一趟家乡。", "I plan to visit my hometown also to see my parents.", "100", "문법 2 대화", ["collocation:부모님을 뵙다"]],
    ["비행기표", "机票", "名词", "airplane ticket", "noun", "고향에 가려고 비행기표를 보고 있어요.", "为了回家乡正在看机票。", "I am looking at airplane tickets to visit my hometown.", "100", "문법 2 대화", ["collocation:비행기표를 보다"]],
    ["자격증", "资格证", "名词", "certificate; license", "noun", "요즘 자격증 공부를 하고 있어요.", "最近正在学习考资格证。", "I am studying for a certificate these days.", "100", "단어장", ["collocation:자격증 공부"]],
    ["자격증을 따다", "取得资格证", "动词短语", "to get a certificate", "verb phrase", "취업하려고 자격증을 따려고 해요.", "为了就业想取得资格证。", "I want to get a certificate to find a job.", "100", "문법 2", ["collocation:자격증을 따다"]],
    ["취업 정보", "就业信息", "名词短语", "employment information", "noun phrase", "다양한 취업 정보를 얻고 싶어요.", "想获得各种就业信息。", "I want to get various employment information.", "100", "문법 2", ["collocation:취업 정보를 얻다"]],
    ["수다를 떨다", "闲聊", "动词短语", "to chat casually", "verb phrase", "고향 친구들과 편하게 수다를 떨어요.", "和家乡朋友轻松地闲聊。", "I chat comfortably with friends from my hometown.", "100", "문법 2", ["collocation:수다를 떨다"]],
    ["꾸준히", "持续地，坚持地", "副词", "steadily; consistently", "adverb", "한국 드라마를 꾸준히 챙겨 봐요.", "持续地追看韩剧。", "I consistently keep up with Korean dramas.", "100", "단어장", ["collocation:꾸준히 하다"]],
    ["사고방식", "思维方式", "名词", "way of thinking", "noun", "드라마를 보면서 한국 사람들의 사고방식을 배워요.", "通过看电视剧学习韩国人的思维方式。", "I learn Koreans' way of thinking by watching dramas.", "100", "단어장", ["collocation:사고방식을 배우다"]],
    ["소식을 전하다", "传达消息，报平安", "动词短语", "to share news", "verb phrase", "가족들에게 소식을 전할 겸 에스엔에스를 해요.", "也为了向家人报平安而使用社交媒体。", "I use social media partly to share news with my family.", "100", "문법 2", ["collocation:소식을 전하다"]],
    ["개인 정보가 유출되다", "个人信息泄露", "动词短语", "for personal information to be leaked", "verb phrase", "인터넷에서 개인 정보가 유출됐다면서요?", "听说网上个人信息泄露了，是吗？", "I heard personal information was leaked online. Is that right?", "101", "말하기 대화", ["collocation:개인 정보 유출"]],
    ["기사", "新闻报道，文章", "名词", "article; news report", "noun", "저도 그 기사를 봤어요.", "我也看了那篇报道。", "I saw that article too.", "101", "말하기 대화", ["collocation:기사를 보다"]],
    ["인터넷 뱅킹", "网上银行", "名词", "internet banking", "noun", "인터넷 뱅킹을 계속해도 될지 걱정이에요.", "担心还能不能继续用网上银行。", "I worry whether it is okay to keep using internet banking.", "101", "말하기 대화", ["collocation:인터넷 뱅킹을 하다"]],
    ["인터넷 쇼핑", "网上购物", "名词", "online shopping", "noun", "인터넷 쇼핑을 할 때 비밀번호를 조심하세요.", "网上购物时请注意密码。", "Be careful with your password when shopping online.", "101", "말하기 대화", ["collocation:인터넷 쇼핑을 하다"]],
    ["비밀번호", "密码", "名词", "password", "noun", "비밀번호를 자주 바꾸는 것이 좋아요.", "最好经常更换密码。", "It is good to change your password often.", "101", "말하기 대화", ["collocation:비밀번호를 바꾸다"]],
    ["복잡하게 만들다", "设得复杂", "动词短语", "to make complex", "verb phrase", "비밀번호를 조금 복잡하게 만드세요.", "请把密码设得稍微复杂一点。", "Make your password a little complex.", "101", "말하기 대화", ["collocation:복잡하게 만들다"]],
    ["악용되다", "被滥用", "动词", "to be abused; misused", "verb", "인터넷이 악용되는 것을 보면 안타까워요.", "看到互联网被滥用就觉得很遗憾。", "It is sad to see the internet being misused.", "101", "단어장", ["collocation:악용되다"]],
    ["안타깝다", "惋惜，遗憾", "形容词", "sad; unfortunate", "adjective", "좋은 기술이 악용되어 안타까워요.", "好的技术被滥用，令人遗憾。", "It is unfortunate that good technology is misused.", "101", "말하기 대화", ["collocation:안타깝다"]],
    ["유익하다", "有益", "形容词", "beneficial", "adjective", "인터넷은 잘 사용하면 유익해요.", "互联网如果使用得好就很有益。", "The internet is beneficial if used well.", "101", "말하기 대화", ["collocation:유익하다"]],
    ["조심할 수밖에 없다", "只能小心，不得不小心", "惯用表达", "to have no choice but to be careful", "idiom", "인터넷을 이용하는 우리가 조심할 수밖에 없어요.", "使用互联网的我们只能小心。", "We who use the internet have no choice but to be careful.", "101", "말하기 대화", ["form:-을 수밖에 없다"]],
    ["가짜 뉴스", "假新闻", "名词", "fake news", "noun", "가짜 뉴스가 넘쳐나서 판단하기 어려워요.", "假新闻泛滥，很难判断。", "Fake news is everywhere, so it is hard to judge.", "101", "말하기", ["collocation:가짜 뉴스"]],
    ["넘쳐나다", "泛滥，充满", "动词", "to overflow; to be everywhere", "verb", "인터넷에는 정보가 넘쳐나요.", "互联网上信息泛滥。", "Information overflows on the internet.", "101", "말하기", ["collocation:정보가 넘쳐나다"]],
    ["판단하다", "判断", "动词", "to judge", "verb", "어떤 정보가 맞는지 잘 판단해야 해요.", "要好好判断哪些信息是对的。", "You need to judge well which information is correct.", "101", "단어장", ["collocation:잘 판단하다"]],
    ["악성 댓글", "恶意评论", "名词短语", "malicious comment", "noun phrase", "악성 댓글에 고통받는 사람이 많아요.", "有很多人受恶意评论折磨。", "Many people suffer from malicious comments.", "101", "말하기", ["collocation:악성 댓글"]],
    ["교통사고", "交通事故", "名词", "traffic accident", "noun", "운전 중 스마트폰 사용은 교통사고를 일으킬 수 있어요.", "开车时使用智能手机可能引发交通事故。", "Using a smartphone while driving can cause traffic accidents.", "101", "말하기", ["collocation:교통사고 증가"]],
    ["입장", "立场，处境", "名词", "position; situation", "noun", "상대방의 입장에서 생각해 보세요.", "请站在对方立场想一想。", "Try thinking from the other person's position.", "102", "듣기/단어장", ["collocation:입장에서 생각하다"]],
    ["해커", "黑客", "名词", "hacker", "noun", "해커들은 개인 정보를 유출해서 돈을 벌 수 있어요.", "黑客可能通过泄露个人信息赚钱。", "Hackers can make money by leaking personal information.", "102", "듣기/단어장", ["collocation:해커"]],
    ["통장", "存折，账户", "名词", "bankbook; account", "noun", "애나 씨는 은행에서 통장을 만들었어요.", "애나 在银行开了账户。", "Anna opened an account at the bank.", "102", "듣기", ["collocation:통장을 만들다"]],
    ["스팸 문자", "垃圾短信", "名词", "spam text message", "noun", "개인 정보가 유출되면 스팸 문자가 올 수 있어요.", "个人信息泄露的话可能收到垃圾短信。", "If personal information is leaked, spam texts may come.", "102", "듣기", ["collocation:스팸 문자가 오다"]],
    ["편리", "便利", "名词", "convenience", "noun", "인터넷은 생활을 편리하게 해 줘요.", "互联网让生活变得便利。", "The internet makes life convenient.", "102", "발음", ["pronunciation:편리[펼리]"]],
    ["연락처", "联系方式", "名词", "contact information", "noun", "연락처 좀 가르쳐 주시겠어요?", "可以告诉我联系方式吗？", "Could you tell me your contact information?", "102", "발음", ["pronunciation:연락처[열락처]"]],
    ["관련성", "相关性", "名词", "relevance; connection", "noun", "언어는 문화와 깊은 관련성이 있어요.", "语言和文化有很深的相关性。", "Language has a deep connection with culture.", "102", "발음", ["pronunciation:관련성[괄련성]"]],
    ["시력이 저하되다", "视力下降", "动词短语", "for eyesight to decline", "verb phrase", "스마트폰을 오래 보면 시력이 저하될 수 있어요.", "长时间看智能手机可能导致视力下降。", "Looking at a smartphone too long can reduce eyesight.", "103", "쓰기 전", ["collocation:시력이 저하되다"]],
    ["무기력해지다", "变得无力，提不起劲", "动词", "to become lethargic", "verb", "인터넷을 사용할 수 없으면 무기력해져요.", "不能上网的话会变得提不起劲。", "I become lethargic when I cannot use the internet.", "103", "쓰기 전", ["collocation:무기력해지다"]],
    ["기억력이 떨어지다", "记忆力下降", "动词短语", "for memory to decline", "verb phrase", "스마트폰에 의존하면 기억력이 떨어질 수 있어요.", "依赖智能手机的话记忆力可能下降。", "Depending on smartphones can weaken memory.", "103", "쓰기 전", ["collocation:기억력이 떨어지다"]],
    ["스마트폰 중독에 빠지다", "陷入智能手机成瘾", "动词短语", "to fall into smartphone addiction", "verb phrase", "지나치게 사용하면 스마트폰 중독에 빠질 수 있어요.", "过度使用可能陷入智能手机成瘾。", "Excessive use can lead to smartphone addiction.", "103", "쓰기 전", ["collocation:중독에 빠지다"]],
    ["악플", "恶评，恶意留言", "名词", "malicious comment", "noun", "악플을 달면 다른 사람에게 상처를 줄 수 있어요.", "留下恶评可能伤害别人。", "Leaving malicious comments can hurt others.", "103", "쓰기 전", ["collocation:악플을 달다"]],
    ["거북목 증후군", "乌龟颈综合征", "名词", "turtle neck syndrome", "noun", "스마트폰을 오래 보면 거북목 증후군에 시달릴 수 있어요.", "长时间看智能手机可能受乌龟颈综合征困扰。", "Long smartphone use can cause turtle neck syndrome.", "103", "쓰기 전", ["collocation:거북목 증후군에 시달리다"]],
    ["의존성", "依赖性", "名词", "dependency", "noun", "스마트폰 의존성이 심해지고 있어요.", "智能手机依赖性正在变严重。", "Smartphone dependency is becoming serious.", "103", "쓰기 전", ["collocation:스마트폰 의존성"]],
    ["익명성", "匿名性", "名词", "anonymity", "noun", "인터넷의 익명성 때문에 악플 문제가 생겨요.", "由于互联网的匿名性，会出现恶评问题。", "Online anonymity causes malicious comment problems.", "103", "쓰기 전", ["collocation:인터넷의 익명성"]],
    ["장시간 사용", "长时间使用", "名词短语", "long-term use", "noun phrase", "장시간 사용은 시력 저하의 원인이 돼요.", "长时间使用会成为视力下降的原因。", "Long-term use causes eyesight decline.", "103", "쓰기 전", ["collocation:장시간 사용"]],
    ["해킹", "黑客攻击", "名词", "hacking", "noun", "해킹을 당하면 개인 정보가 유출될 수 있어요.", "遭到黑客攻击的话，个人信息可能泄露。", "If you are hacked, personal information may be leaked.", "103", "쓰기 전", ["collocation:해킹을 당하다"]],
    ["손안의 컴퓨터", "手中的电脑", "名词短语", "computer in one's hand", "noun phrase", "스마트폰은 손안의 컴퓨터와 같아요.", "智能手机就像手中的电脑。", "A smartphone is like a computer in your hand.", "104", "읽기", ["collocation:손안의 컴퓨터"]],
    ["사진 촬영", "拍照", "名词", "taking photos", "noun", "스마트폰으로 사진 촬영이 가능해요.", "用智能手机可以拍照。", "Taking photos is possible with a smartphone.", "104", "읽기", ["collocation:사진 촬영"]],
    ["동영상 촬영", "拍摄视频", "名词", "video recording", "noun", "동영상 촬영도 스마트폰 하나로 할 수 있어요.", "只用一部智能手机也可以拍摄视频。", "Video recording can also be done with one smartphone.", "104", "읽기", ["collocation:동영상 촬영"]],
    ["영상 통화", "视频通话", "名词", "video call", "noun", "유럽에 있는 친구와 영상 통화를 했어요.", "和在欧洲的朋友进行了视频通话。", "I had a video call with a friend in Europe.", "104", "읽기", ["collocation:영상 통화를 하다"]],
    ["안부를 묻다", "问候近况", "动词短语", "to ask how someone is", "verb phrase", "영상 통화로 친구에게 안부를 물었어요.", "通过视频通话问候了朋友近况。", "I asked my friend how they were through a video call.", "104", "읽기", ["collocation:안부를 묻다"]],
    ["즉시", "立即，马上", "副词", "immediately", "adverb", "사진을 즉시 전송할 수 있어요.", "可以立即发送照片。", "You can send photos immediately.", "104", "읽기", ["collocation:즉시 전송하다"]],
    ["의견을 교환하다", "交换意见", "动词短语", "to exchange opinions", "verb phrase", "단톡방에서 의견을 교환해요.", "在群聊中交换意见。", "We exchange opinions in a group chat.", "104", "읽기", ["collocation:의견을 교환하다"]],
    ["손쉽다", "容易，方便", "形容词", "easy; convenient", "adjective", "스마트폰으로 손쉽게 은행 일을 볼 수 있어요.", "用智能手机可以轻松办理银行业务。", "You can easily handle banking on a smartphone.", "104", "단어장", ["collocation:손쉽게 하다"]],
    ["은행 일을 보다", "办理银行业务", "动词短语", "to handle banking", "verb phrase", "인터넷 뱅킹으로 은행 일을 봐요.", "通过网上银行办理银行业务。", "I handle banking through internet banking.", "104", "읽기", ["collocation:은행 일을 보다"]],
    ["지나치다", "过度", "形容词/动词", "excessive; to be excessive", "adjective/verb", "스마트폰의 지나친 사용은 중독으로 이어질 수 있어요.", "智能手机的过度使用可能导致成瘾。", "Excessive smartphone use can lead to addiction.", "104", "단어장", ["collocation:지나친 사용"]],
    ["집중하다", "集中", "动词", "to concentrate", "verb", "스마트폰이 없으면 공부에 집중할 수 없어요.", "没有智能手机的话无法集中学习。", "I cannot concentrate on studying without my smartphone.", "104", "읽기", ["collocation:공부에 집중하다"]],
    ["대화가 단절되다", "对话中断，沟通断绝", "动词短语", "for communication to be cut off", "verb phrase", "가족과도 대화가 단절될 수 있어요.", "甚至可能和家人沟通断绝。", "Communication even with family can be cut off.", "104", "단어장", ["collocation:대화가 단절되다"]],
    ["분실하다", "遗失", "动词", "to lose", "verb", "스마트폰을 분실하면 개인 정보가 위험해요.", "遗失智能手机的话，个人信息会有风险。", "If you lose your smartphone, personal information is at risk.", "104", "읽기", ["collocation:스마트폰을 분실하다"]],
    ["해킹을 당하다", "遭到黑客攻击", "动词短语", "to be hacked", "verb phrase", "해킹을 당하면 큰 피해가 생길 수 있어요.", "遭到黑客攻击的话可能造成很大损失。", "Being hacked can cause serious damage.", "104", "읽기", ["collocation:해킹을 당하다"]],
    ["사생활", "私生活，隐私", "名词", "private life; privacy", "noun", "사생활이 노출되면 큰 문제가 생겨요.", "隐私被曝光的话会出现大问题。", "If privacy is exposed, serious problems can occur.", "104", "단어장", ["collocation:사생활 노출"]],
    ["노출되다", "被暴露，被曝光", "动词", "to be exposed", "verb", "사진이나 동영상 등의 사생활이 노출될 수 있어요.", "照片或视频等隐私可能被曝光。", "Private photos or videos may be exposed.", "104", "단어장", ["collocation:사생활이 노출되다"]],
    ["영향을 끼치다", "产生影响", "动词短语", "to affect; to have an effect", "verb phrase", "사생활 노출은 나쁜 영향을 끼칠 수 있어요.", "隐私曝光可能产生不好的影响。", "Privacy exposure can have a negative effect.", "104", "읽기", ["collocation:영향을 끼치다"]],
    ["유용하다", "有用", "形容词", "useful", "adjective", "아무리 유용한 것도 관리가 필요해요.", "再有用的东西也需要管理。", "Even useful things need management.", "104", "단어장", ["collocation:유용하다"]],
    ["소홀하다", "疏忽，不重视", "形容词", "careless; negligent", "adjective", "관리가 소홀하면 피해가 생길 수 있어요.", "管理疏忽的话可能造成损害。", "If management is careless, damage can occur.", "104", "단어장", ["collocation:관리가 소홀하다"]],
    ["피해", "损害， 피해", "名词", "damage; harm", "noun", "개인 정보 유출로 피해가 생겼어요.", "因个人信息泄露造成了损害。", "Damage occurred because of personal information leakage.", "104", "읽기", ["collocation:피해가 생기다"]],
    ["애플리케이션", "应用程序", "名词", "application; app", "noun", "스마트폰에 다양한 애플리케이션을 설치해요.", "在智能手机上安装各种应用程序。", "People install various applications on smartphones.", "106", "문화와 정보", ["collocation:애플리케이션을 설치하다"]],
    ["설치하다", "安装", "动词", "to install", "verb", "필요한 앱을 스마트폰에 설치했어요.", "把需要的应用安装到智能手机上了。", "I installed the needed app on my smartphone.", "106", "문화와 정보", ["collocation:앱을 설치하다"]],
    ["채팅 앱", "聊天应用", "名词", "chat app", "noun", "카카오톡과 라인은 채팅 앱이에요.", "KakaoTalk 和 LINE 是聊天应用。", "KakaoTalk and LINE are chat apps.", "106", "문화와 정보", ["collocation:채팅 앱"]],
    ["카카오톡", "KakaoTalk", "名词", "KakaoTalk", "noun", "한국에서는 카카오톡을 많이 사용해요.", "在韩国很多人使用 KakaoTalk。", "KakaoTalk is widely used in Korea.", "106", "문화와 정보", ["collocation:카카오톡을 사용하다"]],
    ["위챗", "微信", "名词", "WeChat", "noun", "위챗으로 친구에게 안부를 전했어요.", "用微信向朋友问候了近况。", "I checked in with a friend through WeChat.", "106", "문화와 정보", ["collocation:위챗"]],
    ["라인", "LINE", "名词", "LINE", "noun", "라인으로 사진을 보냈어요.", "用 LINE 发送了照片。", "I sent a photo through LINE.", "106", "문화와 정보", ["collocation:라인"]],
    ["밴드", "BAND", "名词", "BAND", "noun", "밴드에서 모임 공지를 확인했어요.", "在 BAND 上确认了聚会通知。", "I checked the group notice on BAND.", "106", "문화와 정보", ["collocation:밴드"]],
    ["전화를 하다", "打电话", "动词短语", "to make a phone call", "verb phrase", "전화를 하는 대신 채팅 앱으로 안부를 전해요.", "不打电话，而是用聊天应用问候近况。", "Instead of calling, I check in through a chat app.", "106", "문화와 정보", ["collocation:전화를 하다"]],
    ["대신에", "代替，而不是", "副词/助词", "instead of", "adverb/postposition", "이메일 대신에 채팅 앱을 사용해요.", "不用电子邮件，而使用聊天应用。", "I use a chat app instead of email.", "106", "문화와 정보", ["collocation:대신에"]],
    ["안부를 전하다", "问候近况，报平安", "动词短语", "to send regards; to check in", "verb phrase", "채팅 앱으로 간단하게 안부를 전할 수 있어요.", "可以用聊天应用简单问候近况。", "You can easily check in through a chat app.", "106", "문화와 정보", ["collocation:안부를 전하다"]],
    ["동시에", "同时", "副词", "simultaneously; at the same time", "adverb", "여러 명이 동시에 대화할 수 있어요.", "多个人可以同时聊天。", "Several people can talk at the same time.", "106", "문화와 정보", ["collocation:동시에 대화하다"]],
    ["페이스북", "Facebook", "名词", "Facebook", "noun", "페이스북에 사진을 올렸어요.", "在 Facebook 上传了照片。", "I posted a photo on Facebook.", "106", "문화와 정보", ["collocation:페이스북"]],
    ["트위터", "Twitter", "名词", "Twitter", "noun", "트위터에서 소식을 확인했어요.", "在 Twitter 上确认了消息。", "I checked updates on Twitter.", "106", "문화와 정보", ["collocation:트위터"]],
    ["인스타그램", "Instagram", "名词", "Instagram", "noun", "인스타그램에 동영상을 올렸어요.", "在 Instagram 上传了视频。", "I posted a video on Instagram.", "106", "문화와 정보", ["collocation:인스타그램"]],
    ["공유하다", "共享，分享", "动词", "to share", "verb", "사진이나 동영상을 올려서 공유해요.", "上传照片或视频来分享。", "People post photos or videos to share them.", "106", "문화와 정보", ["collocation:공유하다"]],
    ["유튜브", "YouTube", "名词", "YouTube", "noun", "유튜브에서 수많은 동영상을 볼 수 있어요.", "可以在 YouTube 上看到大量视频。", "You can watch countless videos on YouTube.", "106", "문화와 정보", ["collocation:유튜브"]],
    ["넷플릭스", "Netflix", "名词", "Netflix", "noun", "넷플릭스에서 드라마를 봐요.", "在 Netflix 上看电视剧。", "I watch dramas on Netflix.", "106", "문화와 정보", ["collocation:넷플릭스"]],
    ["돈을 내다", "付钱", "动词短语", "to pay money", "verb phrase", "예전에는 돈을 내고 동영상을 다운로드했어요.", "以前付钱下载视频。", "In the past, people paid money and downloaded videos.", "106", "문화와 정보", ["collocation:돈을 내다"]],
    ["키패드", "键盘，小键盘", "名词", "keypad", "noun", "스마트폰 키패드가 컴퓨터 키패드와 같아요.", "智能手机键盘和电脑键盘一样。", "The smartphone keypad is like a computer keyboard.", "107", "배운 어휘 확인", ["collocation:키패드"]],
    ["해당되다", "符合，属于", "动词", "to apply; to correspond", "verb", "스마트폰 중독 진단에서 몇 개가 해당돼요?", "在智能手机成瘾诊断中有几项符合？", "How many items apply to you in the smartphone addiction checklist?", "107", "배운 어휘 확인", ["collocation:해당되다"]]
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
  window.lessonGuideL4LessonChunks["l4-08"] = {
    id: "l4-08",
    number: 8,
    titleKo: "정보화 사회",
    titleZh: "信息化社会",
    pages: "96-107",
    status: "draft",
    progress: {
      vocabulary: "draft-p96-p107",
      dialogue: "draft-p99-p101",
      culture: "draft-p106",
      practice: "draft-p99-p106"
    },
    vocabularySources: [
      { page: 96, label: "단원 제목", note: "课题、学习目标和核心主题" },
      { page: 98, label: "어휘", note: "互联网和智能手机常用行为" },
      { page: 99, label: "문법 1", note: "V/A-는다면서요? 和确认传闻表达" },
      { page: 100, label: "문법 2", note: "V-(으)ㄹ 겸 V-(으)ㄹ 겸 和双重目的表达" },
      { page: 101, label: "말하기", note: "互联网使用的问题和建议" },
      { page: 102, label: "듣기/발음", note: "个人信息泄露与发音练习" },
      { page: 103, label: "쓰기 전", note: "智能手机成瘾诊断和原因分析" },
      { page: 104, label: "읽기", note: "智能手机使用的优缺点" },
      { page: 106, label: "문화와 정보", note: "智能手机与应用程序" },
      { page: 107, label: "배운 어휘 확인", note: "本课复习词汇补充" }
    ],
    goals: [
      "能说明互联网和智能手机使用中的问题。",
      "能用 V/A-는다면서요? 确认听说的信息。",
      "能用 V-(으)ㄹ 겸 V-(으)ㄹ 겸 表达一个行动的两个目的。",
      "能阅读智能手机使用的优缺点，并理解韩国常用手机应用文化。"
    ],
    grammar: [
      {
        pattern: "V/A-는다면서요?",
        zh: "听说……是吗？",
        guide: "把从别人那里听到的内容拿来向对方确认，语气像“我听说了，是真的吗？”。",
        examples: [
          { ko: "후엔 씨가 이번에 TOPIK 4급 시험에 합격했다면서요?", zh: "听说 후엔 这次通过了 TOPIK 4级考试，是吗？" },
          { ko: "이링 씨, 이사했다면서요?", zh: "이링，听说你搬家了，是吗？" }
        ],
        translations: {
          en: {
            meaning: "I heard that..., is that right?",
            guide: "Used to confirm information the speaker heard from someone else."
          }
        }
      },
      {
        pattern: "V-(으)ㄹ 겸 V-(으)ㄹ 겸",
        zh: "既为了……也为了……",
        guide: "表示一个行动同时带有两个目的。前后两个目的通常都是真实动机。",
        examples: [
          { ko: "운동도 할 겸 스트레스도 풀 겸 자전거 타는 것을 좋아해요.", zh: "既为了运动，也为了释放压力，我喜欢骑自行车。" },
          { ko: "친구 결혼식에도 참석할 겸 부모님도 뵐 겸 고향에 다녀오려고 해요.", zh: "既为了参加朋友婚礼，也为了拜见父母，我打算回一趟家乡。" }
        ],
        translations: {
          en: {
            meaning: "both to... and to...",
            guide: "Shows that one action serves two purposes at the same time."
          }
        }
      }
    ],
    vocabulary,
    dialogues: [
      {
        id: "dialogue-01",
        title: "이사했다면서요?",
        page: 99,
        source: "문법 1 대화",
        focus: "V/A-는다면서요?",
        sceneZh: "안젤라 在 SNS 上看到 이링 上传的照片，于是确认她是否搬家了。",
        learningPoints: [
          "-다면서요? 用来确认自己听到或看到的信息。",
          "직장 때문에 그렇게 됐어요 表示原因是工作。"
        ],
        lines: [
          { speaker: "안젤라", ko: "이링 씨, 이사했다면서요? 에스엔에스(SNS)에 올린 사진을 봤어요.", zh: "이링，听说你搬家了，是吗？我看到了你上传到 SNS 的照片。", guide: "이사했다면서요? 是确认传闻或已知信息。" },
          { speaker: "이링", ko: "네. 직장 때문에 그렇게 됐어요.", zh: "是的。因为工作，所以就那样了。", guide: "직장 때문에 说明搬家的原因。" }
        ],
        rolePlays: [
          { title: "들은 정보 확인하기", promptZh: "问对方：听说你搬家了，是吗？", answerKo: "이사했다면서요?" },
          { title: "이유 말하기", promptZh: "说因为工作，所以事情变成那样了。", answerKo: "직장 때문에 그렇게 됐어요." }
        ],
        drills: [
          { pattern: "V/A-는다면서요?", promptZh: "说“听说 후엔 通过了 TOPIK 4级考试，是吗？”", answerKo: "후엔 씨가 TOPIK 4급 시험에 합격했다면서요?" },
          { pattern: "V/A-는다면서요?", promptZh: "说“听说你弟弟/妹妹个子特别高，是吗？”", answerKo: "동생의 키가 엄청 크다면서요?" }
        ],
        translations: {
          en: {
            scene: "Angela saw a photo Yiling posted on SNS and confirms whether Yiling moved.",
            learningPoints: [
              "-다면서요? confirms information the speaker has heard or noticed.",
              "직장 때문에 그렇게 됐어요 gives work as the reason."
            ]
          }
        }
      },
      {
        id: "dialogue-02",
        title: "결혼식에도 참석할 겸",
        page: 100,
        source: "문법 2 대화",
        focus: "V-(으)ㄹ 겸 V-(으)ㄹ 겸",
        sceneZh: "정아라 看到 이링 在搜索机票，이링 说明她打算回家乡，目的既是参加朋友婚礼，也是拜见父母。",
        learningPoints: [
          "-을 겸 -을 겸 把两个目的并列起来。",
          "고향에 다녀오려고 비행기표를 보고 있어요 表示正在为回家乡查机票。"
        ],
        lines: [
          { speaker: "정아라", ko: "이링 씨, 뭘 검색하고 있어요?", zh: "이링，你在搜索什么？", guide: "뭘 검색하고 있어요? 是询问对方正在查什么。" },
          { speaker: "이링", ko: "친구 결혼식에도 참석할 겸 부모님도 뵐 겸 고향에 다녀오려고 비행기표를 보고 있어요.", zh: "既为了参加朋友婚礼，也为了拜见父母，我打算回一趟家乡，所以正在看机票。", guide: "两个 -을 겸 表示同一次回家乡有两个目的。" }
        ],
        rolePlays: [
          { title: "검색 묻기", promptZh: "问对方正在搜索什么。", answerKo: "뭘 검색하고 있어요?" },
          { title: "두 목적 말하기", promptZh: "说既为了参加朋友婚礼，也为了拜见父母。", answerKo: "친구 결혼식에도 참석할 겸 부모님도 뵐 겸 고향에 다녀오려고 해요." }
        ],
        drills: [
          { pattern: "V-(으)ㄹ 겸 V-(으)ㄹ 겸", promptZh: "说“既为了运动，也为了遛狗，每天去公园”。", answerKo: "운동도 할 겸 강아지 산책도 시킬 겸 날마다 공원에 가요." },
          { pattern: "V-(으)ㄹ 겸 V-(으)ㄹ 겸", promptZh: "说“既为了学习韩语，也为了交韩国朋友，经常见韩国人”。", answerKo: "한국어 연습도 할 겸 한국 친구도 사귈 겸 한국 사람들을 자주 만나요." }
        ],
        translations: {
          en: {
            scene: "Jeong Ara sees Yiling searching for tickets, and Yiling explains that she plans to visit her hometown both to attend a friend's wedding and to see her parents.",
            learningPoints: [
              "-을 겸 -을 겸 lists two purposes for one action.",
              "고향에 다녀오려고 비행기표를 보고 있어요 means the speaker is looking at tickets in order to visit their hometown."
            ]
          }
        }
      },
      {
        id: "dialogue-03",
        title: "인터넷 개인 정보 유출 문제",
        page: 101,
        source: "말하기 대화",
        focus: "인터넷 사용의 문제점",
        sceneZh: "라민 和 아나이스 谈到网上个人信息泄露，讨论互联网便利背后的风险和防范方法。",
        learningPoints: [
          "개인 정보가 유출되다 是网络安全话题的核心表达。",
          "비밀번호를 복잡하게 만들고 자주 바꾸다 是常见的防范建议。",
          "잘 사용하면 유익하지만... 用来平衡说明优点和风险。"
        ],
        lines: [
          { speaker: "라민", ko: "아나이스 씨, 인터넷에서 개인 정보가 유출됐다면서요?", zh: "아나이스，听说网上个人信息泄露了，是吗？", guide: "유출됐다면서요? 用来确认新闻中听到的信息。" },
          { speaker: "아나이스", ko: "네, 저도 그 기사 봤어요. 자꾸 그런 일이 생겨서 걱정이에요.", zh: "是的，我也看了那篇报道。总是发生那样的事情，所以很担心。", guide: "자꾸 表示反复发生。" },
          { speaker: "라민", ko: "저는 인터넷에서 다양한 정보를 얻을 수 있어서 좋다고 생각했는데 요즘 이런 일들을 보면 인터넷 뱅킹과 인터넷 쇼핑을 계속해도 될지 걱정이에요.", zh: "我原来觉得能在网上获得各种信息很不错，但最近看到这些事情，就担心还能不能继续使用网上银行和网上购物。", guide: "계속해도 될지 걱정이에요 表示对继续做某事感到不安。" },
          { speaker: "아나이스", ko: "그래서 인터넷을 할 때는 비밀번호도 조금 복잡하게 만들고 자주 바꿀 필요가 있는 것 같아요.", zh: "所以使用互联网时，密码也需要设得稍微复杂一点，并且经常更换。", guide: "-을 필요가 있다 表示有必要做某事。" },
          { speaker: "라민", ko: "사람들이 편리하게 사용하는 인터넷이 이렇게 악용되는 걸 보니까 너무 안타까워요.", zh: "看到人们便利使用的互联网被这样滥用，真的很遗憾。", guide: "악용되는 걸 보니까 表示看到被滥用这一点后的感受。" },
          { speaker: "아나이스", ko: "인터넷은 잘 사용하면 유익하지만 좋은 영향만 주는 것은 아닌 것 같아요. 그러니까 인터넷을 이용하는 우리가 조심할 수밖에 없어요.", zh: "互联网如果用得好是有益的，但似乎并不只带来好的影响。所以使用互联网的我们只能小心。", guide: "좋은 영향만 주는 것은 아니다 用来指出并非只有优点。" }
        ],
        rolePlays: [
          { title: "문제 확인하기", promptZh: "确认听说网上个人信息泄露了。", answerKo: "인터넷에서 개인 정보가 유출됐다면서요?" },
          { title: "예방 조언하기", promptZh: "建议把密码设复杂一点，并经常更换。", answerKo: "비밀번호를 조금 복잡하게 만들고 자주 바꾸는 것이 좋아요." }
        ],
        drills: [
          { pattern: "문제 + 조언", promptZh: "说“假新闻泛滥，所以要好好判断信息是否正确”。", answerKo: "가짜 뉴스가 넘쳐나니까 어떤 정보가 맞는지 잘 판단해야 해요." },
          { pattern: "-을 수밖에 없다", promptZh: "说“使用互联网的我们只能小心”。", answerKo: "인터넷을 이용하는 우리가 조심할 수밖에 없어요." }
        ],
        translations: {
          en: {
            scene: "Ramin and Anais talk about personal information leaks online and discuss both the convenience and risks of the internet.",
            learningPoints: [
              "개인 정보가 유출되다 is a core expression for online security issues.",
              "비밀번호를 복잡하게 만들고 자주 바꾸다 is a common prevention tip.",
              "잘 사용하면 유익하지만... balances benefits with risks."
            ]
          }
        }
      }
    ],
    culture: {
      titleKo: "스마트폰과 애플리케이션",
      titleZh: "智能手机与应用程序",
      page: 106,
      summaryZh: "文章介绍韩国人常用的智能手机应用，包括聊天应用、社交媒体和视频播放应用，并说明它们在日常沟通和娱乐中的用途。",
      keyTerms: [
        { ko: "애플리케이션", zh: "安装在智能手机上、用于聊天、分享或观看视频等功能的应用程序", translations: { en: { meaning: "apps installed on smartphones for chatting, sharing, watching videos, and other tasks" } } },
        { ko: "채팅 앱", zh: "可以简单问候、多人同时聊天并发送照片或视频的聊天应用", translations: { en: { meaning: "chat apps used to check in, talk in groups, and send photos or videos" } } },
        { ko: "동영상 재생 사이트", zh: "用于观看视频、电视剧或电影的播放平台", translations: { en: { meaning: "video platforms used to watch videos, dramas, or movies" } } }
      ],
      paragraphs: [
        {
          ko: "요즘은 언제, 어디서나 인터넷을 이용할 수 있다. 스마트폰은 손안의 컴퓨터라고 불릴 정도로 다양한 기능을 가지고 있다. 사람들은 그러한 스마트폰에 다양한 애플리케이션을 설치해서 많은 일들을 한다.",
          zh: "如今，人们随时随地都可以使用互联网。智能手机拥有多种功能，甚至可以被称为“手中的电脑”。人们在这样的智能手机上安装各种应用程序，完成很多事情。",
          guide: "第一段说明智能手机的定位：它像手中的电脑，功能多，应用程序让它能处理许多日常事务。",
          translations: {
            en: {
              translation: "These days, people can use the internet anytime and anywhere. Smartphones have so many functions that they can be called computers in the palm of your hand. People install various applications on such smartphones and do many things with them.",
              guide: "The first paragraph frames smartphones as hand-held computers whose apps support many daily tasks."
            }
          }
        },
        {
          ko: "스마트폰에서 가장 많이 사용되는 애플리케이션은 카카오톡, 위챗, 라인, 밴드 같은 채팅 앱이다. 전화를 하거나 이메일을 보내는 대신에 간단하게 안부를 전할 수 있고, 여러 명이 동시에 대화가 가능하기 때문이다. 게다가 사진이나 동영상을 전송하는 것도 가능하다.",
          zh: "智能手机上最常使用的应用程序是 KakaoTalk、微信、LINE、BAND 这样的聊天应用。因为人们可以不用打电话或发电子邮件，而是简单地问候近况，也可以多人同时对话。此外，还可以发送照片或视频。",
          guide: "第二段介绍聊天应用的特点：轻量问候、多人聊天、发送照片和视频。",
          translations: {
            en: {
              translation: "The most commonly used applications on smartphones are chat apps such as KakaoTalk, WeChat, LINE, and BAND. This is because people can easily check in with others instead of making phone calls or sending emails, and several people can talk at the same time. In addition, sending photos or videos is also possible.",
              guide: "The second paragraph explains why chat apps are widely used: quick check-ins, group conversations, and media sharing."
            }
          }
        },
        {
          ko: "사진, 동영상과 관련된 다른 애플리케이션으로는 페이스북, 트위터, 인스타그램이 있다. 이것들은 채팅 앱과는 다르게 주로 사진이나 동영상을 올려서 공유한다.",
          zh: "与照片、视频相关的其他应用程序有 Facebook、Twitter、Instagram。它们和聊天应用不同，主要是上传照片或视频进行分享。",
          guide: "第三段把社交媒体和聊天应用区分开：重点不是聊天，而是上传和分享照片、视频。",
          translations: {
            en: {
              translation: "Other applications related to photos and videos include Facebook, Twitter, and Instagram. Unlike chat apps, these are mainly used to post and share photos or videos.",
              guide: "The third paragraph distinguishes social media from chat apps: the focus is posting and sharing media."
            }
          }
        },
        {
          ko: "또 다른 애플리케이션은 유튜브, 넷플릭스 같은 동영상 재생 사이트를 이용할 수 있는 것들이다. 예전에는 드라마나 영화를 보려면 인터넷 사이트에 가입해서 돈을 내고 다운로드하는 경우가 많았다. 하지만 지금은 유튜브에서 수많은 동영상을 볼 수 있다.",
          zh: "另一类应用程序是可以使用 YouTube、Netflix 这样的视频播放网站的应用。以前要看电视剧或电影，很多时候需要加入互联网网站、付钱并下载。但现在可以在 YouTube 上看到大量视频。",
          guide: "第四段介绍视频平台应用，并对比以前付费下载和现在在线播放的变化。",
          translations: {
            en: {
              translation: "Another type of application allows people to use video streaming sites such as YouTube and Netflix. In the past, to watch dramas or movies, people often had to sign up for internet sites, pay money, and download them. Now, however, they can watch countless videos on YouTube.",
              guide: "The final paragraph introduces video platforms and contrasts paid downloads in the past with today's streaming."
            }
          }
        }
      ],
      questions: [
        {
          q: "채팅 애플리케이션은 무엇입니까?",
          zh: "聊天应用程序是什么？",
          answerZh: "카카오톡、微信、LINE、BAND 这样的应用程序是聊天应用，可以用来问候近况、多人同时聊天并发送照片或视频。",
          translations: {
            en: {
              translation: "What are chat applications?",
              answer: "Chat apps include KakaoTalk, WeChat, LINE, and BAND. They are used to check in, talk with multiple people at once, and send photos or videos."
            }
          }
        },
        {
          q: "스마트폰으로 동영상을 보고 싶을 땐 어떤 애플리케이션을 사용합니까?",
          zh: "想用智能手机看视频时，使用什么应用程序？",
          answerZh: "可以使用 YouTube、Netflix 这样的视频播放应用。",
          translations: {
            en: {
              translation: "What applications do people use when they want to watch videos on a smartphone?",
              answer: "They can use video streaming apps such as YouTube and Netflix."
            }
          }
        },
        {
          q: "여러분이 스마트폰으로 주로 이용하는 애플리케이션이 무엇인지 이야기해 보세요.",
          zh: "请说说你主要用智能手机使用哪些应用程序。",
          answerZh: "可以说自己常用的聊天应用、社交媒体、视频应用或学习应用，并说明使用目的。",
          translations: {
            en: {
              translation: "Talk about the applications you mainly use on your smartphone.",
              answer: "You can mention chat apps, social media, video apps, or study apps you use often and explain why you use them."
            }
          }
        }
      ],
      translations: {
        en: {
          title: "Smartphones and Applications",
          summary: "The article introduces commonly used smartphone apps in Korea, including chat apps, social media, and video platforms, and explains their roles in daily communication and entertainment."
        }
      }
    },
    practice: [
      {
        type: "grammar",
        title: "V/A-는다면서요?",
        promptZh: "用 -다면서요? 说：听说 이링 搬家了，是吗？",
        answerKo: "이링 씨, 이사했다면서요?",
        translations: {
          en: {
            title: "V/A-는다면서요?",
            prompt: "Use -다면서요?: I heard Yiling moved. Is that right?",
            answer: "이링 씨, 이사했다면서요?"
          }
        }
      },
      {
        type: "grammar",
        title: "V-(으)ㄹ 겸 V-(으)ㄹ 겸",
        promptZh: "用 -을 겸 -을 겸 说：既为了参加朋友婚礼，也为了拜见父母，我打算回家乡。",
        answerKo: "친구 결혼식에도 참석할 겸 부모님도 뵐 겸 고향에 다녀오려고 해요.",
        translations: {
          en: {
            title: "V-(으)ㄹ 겸 V-(으)ㄹ 겸",
            prompt: "Use -을 겸 -을 겸: I plan to visit my hometown both to attend a friend's wedding and to see my parents.",
            answer: "친구 결혼식에도 참석할 겸 부모님도 뵐 겸 고향에 다녀오려고 해요."
          }
        }
      },
      {
        type: "speaking",
        title: "인터넷 사용의 문제점",
        promptZh: "对“个人信息泄露”这个问题给出一条预防建议。",
        answerKo: "비밀번호를 조금 복잡하게 만들고 자주 바꾸는 것이 좋아요.",
        translations: {
          en: {
            title: "Problems with Internet Use",
            prompt: "Give one prevention tip for the problem of personal information leakage.",
            answer: "비밀번호를 조금 복잡하게 만들고 자주 바꾸는 것이 좋아요."
          }
        }
      },
      {
        type: "reading",
        title: "스마트폰 사용의 장단점",
        promptZh: "阅读题：p.104 文章最合适的标题是什么？",
        answerKo: "스마트폰 사용의 장단점",
        translations: {
          en: {
            title: "Pros and Cons of Smartphone Use",
            prompt: "Reading: What is the most suitable title for the p.104 article?",
            answer: "스마트폰 사용의 장단점"
          }
        }
      },
      {
        type: "culture",
        title: "스마트폰과 애플리케이션",
        promptZh: "文化题：聊天应用有哪些例子？",
        answerKo: "카카오톡, 위챗, 라인, 밴드 같은 애플리케이션입니다.",
        translations: {
          en: {
            title: "Smartphones and Applications",
            prompt: "Culture: What are examples of chat apps?",
            answer: "카카오톡, 위챗, 라인, 밴드 같은 애플리케이션입니다."
          }
        }
      }
    ],
    translations: {
      en: {
        title: "The Information Society",
        goals: [
          "Explain problems related to internet and smartphone use.",
          "Use V/A-는다면서요? to confirm information you have heard.",
          "Use V-(으)ㄹ 겸 V-(으)ㄹ 겸 to express two purposes for one action.",
          "Read about the pros and cons of smartphone use and understand common smartphone apps in Korea."
        ]
      }
    }
  };
})();
