(() => {
  const swipeDefaults = {
    maxElapsed: 900,
    minDeltaX: 54,
    horizontalRatio: 1.35
  };

  function getTabsElement(mainContent) {
    return mainContent?.querySelector(".tabs") || null;
  }

  function tabsAreSticky(mainContent) {
    const tabsElement = getTabsElement(mainContent);
    if (!tabsElement || !mainContent) return false;

    const tabsTop = tabsElement.getBoundingClientRect().top;
    const contentTop = mainContent.getBoundingClientRect().top;
    return tabsTop <= contentTop + 1 || mainContent.scrollTop >= tabsElement.offsetTop - 1;
  }

  function scrollMainContent(mainContent, target) {
    if (!mainContent) return;

    if (target === "tabs") {
      const tabsElement = getTabsElement(mainContent);
      if (tabsElement && !tabsAreSticky(mainContent)) {
        mainContent.scrollTo({ top: tabsElement.offsetTop, behavior: "auto" });
      }
      return;
    }

    if (target !== "preserve") {
      mainContent.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function keepActiveTabVisible(mainContent, options = {}) {
    const tabsElement = getTabsElement(mainContent);
    const activeButton = tabsElement?.querySelector(".tab-btn.active");
    if (!tabsElement || !activeButton) return;

    const padding = options.padding ?? 12;
    const visibleLeft = tabsElement.scrollLeft;
    const visibleRight = visibleLeft + tabsElement.clientWidth;
    const activeLeft = activeButton.offsetLeft;
    const activeRight = activeLeft + activeButton.offsetWidth;
    let nextLeft = null;

    if (activeLeft < visibleLeft + padding) {
      nextLeft = Math.max(0, activeLeft - padding);
    } else if (activeRight > visibleRight - padding) {
      nextLeft = activeRight - tabsElement.clientWidth + padding;
    }

    if (nextLeft == null) return;
    tabsElement.scrollTo({
      left: Math.max(0, nextLeft),
      behavior: options.behavior || "auto"
    });
  }

  function canStartTabSwipe(event, options) {
    const { mobileQuery, sidebar } = options;
    if (!mobileQuery?.matches || sidebar?.classList.contains("open")) return false;

    const target = event.target instanceof Element ? event.target : event.target?.parentElement;
    if (!target) return false;
    if (target.closest(".tabs")) return false;

    const interactive = target.closest("a, button, input, textarea, select, summary");
    return !interactive;
  }

  function shouldSwitchTabFromSwipe(state, touch, settings = {}) {
    const limits = { ...swipeDefaults, ...settings };
    const deltaX = touch.clientX - state.startX;
    const deltaY = touch.clientY - state.startY;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);
    const elapsed = Date.now() - state.startedAt;

    if (elapsed > limits.maxElapsed || absX < limits.minDeltaX || absX < absY * limits.horizontalRatio) {
      return 0;
    }

    return deltaX < 0 ? 1 : -1;
  }

  window.lessonGuideStickyTabs = {
    canStartTabSwipe,
    getTabsElement,
    keepActiveTabVisible,
    scrollMainContent,
    shouldSwitchTabFromSwipe,
    tabsAreSticky
  };
})();
