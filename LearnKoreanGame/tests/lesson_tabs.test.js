const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, "../lesson_guide_shared_tabs.js"), "utf8"), context);
const tabsApi = context.window.lessonGuideStickyTabs;

function fixture({ scrollTop = 900, scrollLeft = 0, activeLeft = 199.6, activeWidth = 82.8, scrollWidth = 482 } = {}) {
    const calls = [];
    const active = { getBoundingClientRect: () => ({ left: activeLeft - tabs.scrollLeft, width: activeWidth }) };
    const tabs = {
        scrollLeft, scrollWidth, clientWidth: 360, clientLeft: 0,
        offsetTop: 969,
        getBoundingClientRect: () => ({ left: 0, top: 69 }),
        querySelector: () => active,
        scrollTo(options) { calls.push({ ...options }); this.scrollLeft = options.left; }
    };
    const anchor = { getBoundingClientRect: () => ({ top: 69 + 160 - main.scrollTop }) };
    const main = {
        scrollTop, clientTop: 0,
        getBoundingClientRect: () => ({ top: 69 }),
        querySelector: selector => selector === ".tabs" ? tabs : anchor,
        scrollTo(options) { calls.push({ ...options }); this.scrollTop = options.top; }
    };
    return { main, tabs, calls };
}

test("sticky tab navigation resets to its flow anchor rather than a moving offsetTop", () => {
    const { main, calls } = fixture();
    assert.equal(tabsApi.getTabsScrollTop(main), 160);
    assert.equal(tabsApi.tabsAreSticky(main), true);
    tabsApi.scrollMainContent(main, "tabs");
    assert.deepEqual(calls, [{ top: 160, behavior: "auto" }]);
});

test("non-sticky tab changes preserve the hero position and missing containers are safe", () => {
    const { main, calls } = fixture({ scrollTop: 80 });
    assert.equal(tabsApi.tabsAreSticky(main), false);
    tabsApi.scrollMainContent(main, "preserve");
    assert.equal(main.scrollTop, 80);
    assert.equal(calls.length, 0);
    assert.equal(tabsApi.getTabsScrollTop(null), 0);
    assert.equal(tabsApi.tabsAreSticky(null), false);
    tabsApi.keepActiveTabVisible(null);
});

test("active tabs center within the available scroll range", () => {
    const { main, tabs, calls } = fixture();
    tabsApi.keepActiveTabVisible(main);
    assert.ok(Math.abs(tabs.scrollLeft - 61) < 0.01);
    assert.equal(calls[0].behavior, "auto");
    tabsApi.keepActiveTabVisible(main);
    assert.equal(calls.length, 1);
    const edge = fixture({ activeLeft: 290.4 });
    tabsApi.keepActiveTabVisible(edge.main);
    assert.equal(edge.tabs.scrollLeft, 122);
    const start = fixture({ scrollLeft: 80, activeLeft: 18 });
    tabsApi.keepActiveTabVisible(start.main);
    assert.equal(start.tabs.scrollLeft, 0);
    const fitting = fixture({ scrollWidth: 340 });
    tabsApi.keepActiveTabVisible(fitting.main);
    assert.equal(fitting.tabs.scrollLeft, 0);
});

test("tab strip does not snap back against programmatic centering", () => {
    const css = fs.readFileSync(path.join(__dirname, "../lesson_guide.css"), "utf8");
    assert.doesNotMatch(css, /scroll-snap-(?:type|align):/);
    const app = fs.readFileSync(path.join(__dirname, "../lesson_guide_app.js"), "utf8");
    assert.match(app, /data-tabs-anchor/);
    assert.match(app, /tabButton\.closest\("\.tabs"\) && !tabsAreSticky\(\) \? "preserve" : "tabs"/);
});
