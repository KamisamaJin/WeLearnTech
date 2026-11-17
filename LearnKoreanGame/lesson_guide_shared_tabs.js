(() => {
  const swipeDefaults = {
    maxElapsed: 900,
    minDeltaX: 54,
    horizontalRatio: 1.35
  };

  function getTabsElement(mainContent) {
    return mainContent?.querySelector(".tabs") || null;
  }

  function getTabsScrollTop(mainContent) {
    const anchor = mainContent?.querySelector("[data-tabs-anchor]") || getTabsElement(mainContent);
    if (!anchor || !mainContent) return 0;
    // The sticky bar's offsetTop moves with scrolling; its flow anchor does not.
    return Math.max(0, mainContent.scrollTop + anchor.getBoundingClientRect().top
      - mainContent.getBoundingClientRect().top - (mainContent.clientTop || 0));
  }

  function tabsAreSticky(mainContent) {
    const tabsElement = getTabsElement(mainContent);
    if (!tabsElement || !mainContent) return false;

    return mainContent.scrollTop >= getTabsScrollTop(mainContent) - 1;
  }

  function scrollMainContent(mainContent, target) {
    if (!mainContent) return;

    if (target === "tabs") {
      const tabsElement = getTabsElement(mainContent);
      if (tabsElement) mainContent.scrollTo({ top: getTabsScrollTop(mainContent), behavior: "auto" });
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

    const buttonRect = activeButton.getBoundingClientRect();
    const tabsRect = tabsElement.getBoundingClientRect();
    const center = tabsElement.scrollLeft + buttonRect.left - tabsRect.left
      - (tabsElement.clientLeft || 0) + buttonRect.width / 2;
    const maxLeft = Math.max(0, tabsElement.scrollWidth - tabsElement.clientWidth);
    const nextLeft = Math.min(maxLeft, Math.max(0, center - tabsElement.clientWidth / 2));
    if (Math.abs(nextLeft - tabsElement.scrollLeft) < 1) return;
    tabsElement.scrollTo({
      left: nextLeft,
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
    getTabsScrollTop,
    keepActiveTabVisible,
    scrollMainContent,
    shouldSwitchTabFromSwipe,
    tabsAreSticky
  };
})();
