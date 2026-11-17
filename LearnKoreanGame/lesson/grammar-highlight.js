(function initGrammarHighlight(root, factory) {
    const api = factory();
    if (typeof module === "object" && module.exports) module.exports = api;
    if (root) root.KIIPGrammarHighlight = api;
})(typeof window !== "undefined" ? window : globalThis, function createGrammarHighlight() {
    const rules = new Map();
    const boundary = String.raw`(?=$|[\s\p{P}])`;
    const hada = "(?:하(?:다|고|는|느|면|니|나|지|겠|세|시|셨|여|라|려|자|게|도록)[가-힣]*|해(?:요|서|도|야|라|줘|주|드|보|놓|두|버|왔|가|내|오|지|줄)[가-힣]*|해|했[가-힣]*|합(?:니다|니까|시다)[가-힣]*|할(?:게|까|래|거|수|텐)[가-힣]*|할|한(?:다|대|데|답)[가-힣]*|한)";
    const be = "(?:있|없)[가-힣]*";
    const become = "(?:되|돼|됐|된|될)[가-힣]*";
    const see = "(?:보(?:다|고|는|면|니|나|지|겠|세|시|셨|자|라|려|아|았|십|던)[가-힣]*|봐[가-힣]*|봤[가-힣]*|본(?:다|대|데)[가-힣]*|본|볼(?:게|까|래|텐|수|거|만|때|법|지도)[가-힣]*|볼|봅(?:니다|니까|시다)[가-힣]*)";
    const know = "(?:알(?:다|고|아|았|겠|지|면|려|던|게|더|까|래)[가-힣]*|알|아(?:는|나|니|세|시|셨)[가-힣]*|압(?:니다|니까)[가-힣]*|안(?:다|대)[가-힣]*|모르(?:다|고|는|겠|지|면|니|나|시|세|셨|더)[가-힣]*|모른[가-힣]*|모릅(?:니다|니까)[가-힣]*|모를[가-힣]*|몰(?:라|랐)[가-힣]*)";
    const connective = "(?:아서|어서|해서|워서|와서|져서|돼서|가서|사서|파서|려서|켜서|써서|셔서|나서|라서|타서)";
    const key = pattern => String(pattern || "").replace(/\s+|~/g, "");
    const end = source => ({ source: `(?:${source})${boundary}` });
    const verbEnd = source => ({ ...end(source), verb: true });
    // Final-consonant indexes: ㄴ=4, ㄹ=8, ㅂ=17. Keep their host syllable intact in the markup.
    const attached = (final, tail) => ({ source: `[가-힣]${tail}${boundary}`, final });
    const particle = source => ({ source: `(?:${source})(?=(?:은|는|도|만)?(?:$|[\\s\\p{P}]))`, noun: true });
    const define = (patterns, ...matchers) => {
        for (const pattern of Array.isArray(patterns) ? patterns : [patterns]) rules.set(key(pattern), matchers);
    };

    define("N이에요/예요", end("이에요|예요"));
    define("N은/는", particle("은|는"));
    define("N이/가 있어요/없어요", particle("이|가"), end(be));
    define("장소에 있어요", particle("에"), end(be));
    define("동사/형용사 -아요/어요", end("아요|어요|해요|와요|봐요|줘요|돼요|워요|져요|가요|나요"));
    define("N을/를", particle("을|를"));
    define("명에 가다", particle("에"), end("가요|가세요|갑니다|갔[가-힣]*"));
    define("명에서", particle("에서"));
    define("수 ①", { source: String.raw`(?:\d+|[일이삼사오육칠팔구십백천만]+)(?=[월일층호번원](?:[에은는이가을를]|\s|$|[.,?!]))` });
    define("N에", particle("에"));
    define("N이/가 아니에요", particle("이|가"), end("아니에요|아닙니다"));
    define("몇 시에 V-아요/어요?", { source: String.raw`몇\s*시(?:에)?` }, particle("에"));
    define("N부터 N까지", particle("부터|까지"));
    define("안 V-아요/어요", { source: String.raw`(?<![가-힣])안(?=\s+[가-힣])` });
    define("동-고 싶다", end("고\\s*싶[가-힣]*"));
    define("동-(으)세요", end("으세요|세요"));
    define("N하고 N", { ...particle("하고"), nextNoun: true });
    define("N을/를 삽니다", particle("을|를"), end("삽니다|삽니까"));
    define("수량 + 단위", end(String.raw`(?:스물|서른|마흔|쉰|열|스무|한|두|세|네|다섯|여섯|일곱|여덟|아홉|\d+)\s*(?:개|명|병|잔|대|장|마리|권)`));
    define("얼마예요? / 얼마입니까?", end("얼마(?:예요|입니까)"));
    define("-습니다, -습니까?", end("습니다|습니까"), attached(17, "니(?:다|까)"));
    define("V-았/었어요", end("았어요|었어요|했어요|왔어요|봤어요|줬어요|됐어요|웠어요|졌어요|갔어요"));
    define("N도", particle("도"));
    define("V/A-(으)시-", end("으세요|세요|으셔요|셔요|으셨[가-힣]*|셨[가-힣]*|으시(?:고|면|는|다)|시(?:고|면|는|다)"));
    define("높임말", end("성함|연세|생신|말씀|(?:계시|계세|계셨|드시|드세|드셨|주무시|주무세|주무셨)[가-힣]*"));
    define("V/A-지만, N이지만/지만", end("이지만|지만"));
    define("N에게/한테/께", particle("에게|한테|께"));
    define("V-아/어/해 주다", end("(?:아|어|해|워|줘|와)\\s*(?:주|줘|줬|준|줄|줍)[가-힣]*"));
    define("V-아/어/해 드리다", end("(?:아|어|해|워|와)\\s*(?:드리|드려|드렸|드린|드릴|드립)[가-힣]*"));
    define("V-(으)ㄹ 거예요", attached(8, "\\s*거(?:예요|야|에요)"));
    define("V/A-고", verbEnd("고"));
    define(["N(으)로", "N(으)로 (방향)"], particle("으로|로"));
    define("V-(으)러 가다/오다", end("(?:으러|러)\\s*(?:가|갑|갔|오|와|왔|옵)[가-힣]*"));
    define("V-(으)ㄹ까요?", attached(8, "까요"));
    define("못 V", { source: String.raw`(?<![가-힣])못(?=\s*[가-힣])` });
    define("동형 -네요", end("네요"));
    define("명보다", particle("보다"));
    define("날씨가 어때요?", end("날씨(?:가|는)?\\s*어때요"));
    define(["A/V-아서/어서", "V-아/어서"], end(connective));
    define("V-는 것", end("는\\s*(?:것|거|게)(?:은|는|이|가|을|를|예요|에요)?"));
    define("V-지 마세요", end("지\\s*마(?:세요|요|십시오)"));
    define("A/V-지요?", end("지요|죠"));
    define(["A/V-는데 (대조)", "A/V-는데"], end("는데|은데|인데"), attached(4, "데"));

    define("N(이)라고 하다", end(`(?:이라고|라고)\\s*${hada}`));
    define(["A-(으)ㄴ N", "V-(으)ㄴ N"], { source: String.raw`[가-힣](?=\s+[가-힣])`, final: 4, adnominal: true }, end("있는|없는"));
    define("V-(으)ㄹ게요", attached(8, "게요"));
    define("V-(으)ㄴ 다음에", attached(4, "\\s*다음에"));
    define("N이나", particle("이나|나"));
    define("V-아/어 보다", end(`(?:아|어|해|워|와|켜|려|가|줘|써|셔)\\s*${see}`));
    define("V-(으)ㄹ 수 있다/없다", attached(8, `\\s*수\\s*${be}`));
    define("반말", end("았어|었어|했어|있어|없어|해|이야|야|자|니|줘"), attached(8, "게"));
    define("A/V-(으)면", end("으면|면"));
    define("-겠-", { source: "(?<=[가-힣])겠" });
    define("A/V-(으)ㄹ 때", attached(8, "\\s*때(?:는|가|도)?"));
    define("V-(으)ㄹ래요?", attached(8, "래요"));
    define("A/V-(으)니까", end("으니까|니까"));
    define("V-기 전에", end("기\\s*전에"));
    define("V-기로 하다", end(`기로\\s*${hada}`));
    define("A/V-(으)ㄹ 것 같다", attached(8, "\\s*것\\s*같[가-힣]*"));
    define("V-는 N", { source: String.raw`(?<=[가-힣])는(?=\s+[가-힣])`, adnominal: true });
    define("A/V-기 때문에", end("기\\s*때문에"));
    define("A-게", verbEnd("게"));
    define("V-(으)면서", end("으면서|면서"));
    define("V-(으)ㄴ 적이 있다", attached(4, `\\s*적(?:이|은|도)?\\s*${be}`));
    define("A/V-는 편이다", end("(?:는|은)\\s*편[가-힣]*"), attached(4, "\\s*편[가-힣]*"));
    define("V-(으)려고 하다", end(`(?:으려고|려고)\\s*${hada}`));
    define("V-아/어야 되다", end(`(?:아야|어야|해야|워야|와야|가야|셔야|려야|써야)\\s*(?:${become}|${hada})`));
    define("V-아/어도 되다", end(`(?:아도|어도|해도|워도|와도|려도|셔도|써도|가도)\\s*${become}`));
    define("V-(으)려면", end("으려면|려면"));
    define("V-고 있다", end(`고\\s*${be}`));
    define("V-(으)ㄹ N", { source: String.raw`[가-힣](?=\s+[가-힣])`, final: 8, adnominal: true });
    define("A/V-거든요", end("거든요"));
    define("A/V-(으)면 좋겠다", end("(?:으면|면)\\s*좋[가-힣]*"));
    define("V-는 게 어때요?", end("는\\s*게\\s*어때요"));
    define("A-아/어 보이다", end("(?:아|어|해|워|와)\\s*(?:보이|보여|보였|보인|보일|보입)[가-힣]*"));

    define("~고 해서", end(`고\\s*${hada}`));
    define("~(으)면 되다", end(`(?:으면|면)\\s*${become}`));
    define("~아/어지다", end("(?:아|어|해|워|와|커|져)(?:지|져|졌|진|질|집)[가-힣]*"));
    define("~는 대신(에)", end("는\\s*대신(?:에)?"));
    define("~는지/~은지/~ㄴ지 알다/모르다", end(`(?:는지|은지)\\s*${know}`), attached(4, `지\\s*${know}`));
    define("~다가", end("다가"));
    define("~을/ㄹ 만하다", attached(8, `\\s*만${hada}`));
    define("~아/어 가지고", end("(?:아|어|해|워|와)\\s*가지고"));
    define("명이나/밖에", particle("이나|나|밖에"));
    define("동사/형용사 + -는다고/-다고 하다", end(`(?:는다고|다고|이라고|라고)\\s*${hada}`));
    define("피동", end("(?<![가-힣])(?:놓이|놓여|놓였|잡히|잡혀|잡혔|막히|막혀|막혔|열리|열려|열렸|들리|들려|들렸|끊기|끊겨|끊겼|쫓기|쫓겨|쫓겼|물리|물려|물렸|보이|보여|보였)[가-힣]*"));
    define("동-자고 하다", end(`자고\\s*${hada}`));
    define("동-으라고 하다", end(`(?:으라고|라고)\\s*${hada}`));
    define("동/형-냐고 하다", end(`(?:느냐고|으냐고|냐고)\\s*${hada}`));
    define("명만큼", particle("만큼"));
    define("사동①", end("(?<![가-힣])(?:먹이|먹여|먹였|입히|입혀|입혔|태우|태워|태웠|읽히|읽혀|읽혔|재우|재워|재웠)[가-힣]*"));
    define("사동②", end("(?<![가-힣])(?:얼리|얼려|얼렸|끓이|끓여|끓였|끓일|줄이|줄여|줄였|남기|남겨|남겼)[가-힣]*"));
    define("동/형-아서 그런지", end(`${connective}\\s*그런지`));
    define("동-나요?, 형-은가요?", end("나요|은가요"), attached(4, "가요"));
    define("동-기 위해서", end("기\\s*위해(?:서)?"));
    define("동-어 놓다", end("(?:아|어|해|워|와|써|셔|려)\\s*(?:놓|놔|놨)[가-힣]*"));
    define("동/형-는 데다가", end("(?:는|은|인)\\s*데다가"), attached(4, "\\s*데다가"));
    define("동/형-는다/다", verbEnd("는다|다"));
    define("동/형-어도", end("아도|어도|해도|워도|와도|빠도|가도|려도|셔도"));
    define("동-게 되다", end(`게\\s*${become}`));
    define("동-게 하다", end(`게\\s*${hada}`));
    define("동-어 가다", end("(?:아|어|해|워|와|나|려|져)\\s*(?:가|갔|갑)[가-힣]*"));
    define("동/형-잖아요", end("잖아요"));
    define("동/형-어야", end("아야|어야|해야|워야|와야"));
    define("동-으려던 참이다", end("(?:으려던|려던)\\s*참[가-힣]*"));
    define("동-자마자", end("자마자"));
    define("동/형-을 텐데", attached(8, "\\s*텐데(?:요)?"));
    define("동-어 있다", end(`(?:아|어|해|워|와|려|져)\\s*${be}`));

    define("V-느라고", end("느라고"));
    define("V/A-(으)ㄹ수록", attached(8, "\\s*수록"));
    define("V/A-(으)ㄹ 뿐만 아니라", attached(8, "\\s*뿐만\\s*아니라"), end("뿐만\\s*아니라"));
    define("V/A-(으)ㄹ 수밖에 없다", attached(8, "\\s*수밖에\\s*없[가-힣]*"));
    define("V/A-는 줄 알다", end(`(?:는|은|인)\\s*줄\\s*${know}`), attached(4, `\\s*줄\\s*${know}`));
    define("V-곤 하다", end(`곤\\s*${hada}`));
    define("V/A-더니", end("더니"));
    define("V/A-(으)ㄴ 나머지", attached(4, "\\s*나머지"));
    define("얼마나 V/A-는지 모르다", { source: "얼마나(?=\\s)" }, end("(?:는지|은지)\\s*(?:모르|몰)[가-힣]*"), attached(4, "지\\s*(?:모르|몰)[가-힣]*"));
    define("V/A-든지", end("든지"));
    define("V/A-던", end("던"));
    define("V/A-(으)ㄹ 정도로", attached(8, "\\s*정도로"));
    define("V-되", end("되"));
    define("V-었더니", end("았더니|었더니|했더니|왔더니|봤더니|줬더니|졌더니|됐더니"));
    define("V/A-는다면서요?", end("는다면서요|다면서요|라면서요"));
    define("V-(으)ㄹ 겸 V-(으)ㄹ 겸", attached(8, "\\s*겸"));
    define("V-(으)ㄹ 뻔하다", attached(8, `\\s*뻔${hada}`));
    define("N(으)로 인해", end("(?:으로|로)\\s*인해(?:서)?"));
    define("V-고 말다", end("고\\s*(?:말|마|맙)[가-힣]*"));
    define("V-는 척하다 / A-(으)ㄴ 척하다", end(`(?:는|은)\\s*척${hada}`), attached(4, `\\s*척${hada}`));
    define("N조차", particle("조차"));
    define("V/A-기 마련이다", end("기\\s*마련[가-힣]*"));
    define("V-나 보다 / A-(으)ㄴ가 보다", end(`(?:나|은가)\\s*${see}`), attached(4, `가\\s*${see}`));
    define("N이야말로", particle("이야말로|야말로"));
    define("V-는 한", end("는\\s*한"));
    define("V-도록", end("도록"));
    define("V/A-(으)므로", end("으므로|므로"));
    define("N은/는커녕", particle("은커녕|는커녕"));
    define("V-다시피", end("다시피"));
    define("V-는 법이다", end("는\\s*법[가-힣]*"));
    define("V/A-(으)ㄹ지도 모르다", attached(8, "지도\\s*(?:모르|몰)[가-힣]*"));
    define("N치고", particle("치고"));

    const commonNouns = "저 나 너 제 우리 저희 여러분 이것 그것 저것 여기 거기 어디 이름 성함 직업 학생 선생님 사람 친구 가족 씨 학교 한국 한국어 서울 나라 집 방 책 커피 눈 회복 가게 사고 바다 날씨 시간 오늘 내일 어제 지금 시 분 월 일 원 개 명".split(" ");
    const conjunctions = new Set(["그리고", "또는", "그러면"]);
    const nounCache = new WeakMap();
    function nounsFor(lesson) {
        if (!lesson) return new Set(commonNouns);
        if (nounCache.has(lesson)) return nounCache.get(lesson);
        const nouns = new Set(commonNouns);
        for (const item of lesson.vocabulary || []) {
            if (!/名词|명사|noun/i.test(item.pos || "")) continue;
            const tokens = String(item.ko || "").split(/\s+/);
            nouns.add(tokens[tokens.length - 1]);
        }
        for (const dialogue of lesson.dialogues || []) for (const line of dialogue.lines || []) {
            for (const name of String(line.speaker || "").split(/\s+/)) if (name.length >= 2) nouns.add(name);
        }
        nounCache.set(lesson, nouns);
        return nouns;
    }

    function rangesFor(value, grammars = [], lesson) {
        const text = String(value || "");
        const nouns = nounsFor(lesson);
        const ranges = [];
        for (const [fallbackIndex, grammar] of grammars.entries()) {
            const grammarIndex = lesson?.grammar?.indexOf(grammar) ?? fallbackIndex;
            for (const matcher of rules.get(key(grammar.pattern)) || []) {
                for (const match of text.matchAll(new RegExp(matcher.source, "gu"))) {
                    if (matcher.final != null && (match[0].charCodeAt(0) - 0xac00) % 28 !== matcher.final) continue;
                    const preceding = text.slice(0, match.index).match(/[가-힣\d]+$/)?.[0] || "";
                    if (matcher.verb && (nouns.has(preceding + match[0]) || conjunctions.has(preceding + match[0]))) continue;
                    if (matcher.noun && !nouns.has(preceding.replace(/들$/, "")) && !/^\d+(?:시|분|월|일|원|개|명)?$/.test(preceding)) continue;
                    if (matcher.adnominal && nouns.has(preceding)) continue;
                    if (matcher.nextNoun) {
                        const next = text.slice(match.index + match[0].length).trimStart().match(/^[가-힣]+/)?.[0];
                        if (!nouns.has(next)) continue;
                    }
                    ranges.push({ start: match.index, end: match.index + match[0].length, grammarIndex: Math.max(0, grammarIndex), pattern: grammar.pattern });
                }
            }
        }
        // Prefer the most specific span and never emit nested/overlapping markup.
        ranges.sort((a, b) => (b.end - b.start) - (a.end - a.start) || a.grammarIndex - b.grammarIndex);
        const selected = [];
        for (const range of ranges) if (!selected.some(other => range.start < other.end && range.end > other.start)) selected.push(range);
        return selected.sort((a, b) => a.start - b.start);
    }

    function escape(text) {
        return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }

    function render(value, grammars = [], lesson) {
        const text = String(value || "");
        let cursor = 0;
        let html = "";
        for (const range of rangesFor(text, grammars, lesson)) {
            html += escape(text.slice(cursor, range.start));
            html += `<mark class="grammar-highlight grammar-highlight-${range.grammarIndex % 3}" title="${escape(range.pattern)}">${escape(text.slice(range.start, range.end))}</mark>`;
            cursor = range.end;
        }
        return html + escape(text.slice(cursor));
    }

    return Object.freeze({ render, rangesFor, hasRule: pattern => rules.has(key(pattern)) });
});
