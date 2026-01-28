(() => {
  const bannerId = "my-sine-mod-banner";

  const createBanner = () => {
    if (document.getElementById(bannerId)) return;

    const banner = document.createElement("div");
    banner.id = bannerId;
    banner.textContent = "Update counter: 3";

    const style = banner.style;
    style.position = "fixed";
    style.top = "0";
    style.left = "0";
    style.right = "0";
    style.zIndex = "2147483647";
    style.background = "#ff00aa";
    style.color = "#ffffff";
    style.padding = "8px 12px";
    style.textAlign = "center";
    style.fontSize = "14px";
    style.fontWeight = "600";
    style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, sans-serif";
    style.pointerEvents = "none";

    const root = document.documentElement || document.body;
    root.appendChild(banner);

    const browser = window.gBrowser;
    if (browser && browser.tabs) {
      const pinnedTabs = Array.from(browser.tabs).filter((tab) => tab.pinned);
      const pinnedSummary = pinnedTabs.map((tab) => ({
        label: tab.label,
        url: tab.linkedBrowser?.currentURI?.spec,
        workspaceId: tab.getAttribute("zen-workspace-id") || null,
      }));
      console.log("[my-sine-mod] gBrowser pinned tabs", pinnedSummary);
    } else {
      console.log("[my-sine-mod] gBrowser or browser.tabs not available");
    }

    const zenWorkspaces = window.gZenWorkspaces;
    const pinnedContainer = zenWorkspaces?.pinnedTabsContainer;
    if (pinnedContainer) {
      const pinnedElements = Array.from(
        pinnedContainer.querySelectorAll(
          "tab[pinned], tab[zen-essential], .zen-workspace-pinned-tabs-section tab"
        )
      );
      const zenPinnedSummary = pinnedElements.map((el) => ({
        id: el.id,
        label: el.getAttribute("label"),
        pinned: el.hasAttribute("pinned"),
        classes: el.className,
      }));
      console.log("[my-sine-mod] Zen pinned container tabs", zenPinnedSummary);
    } else {
      console.log("[my-sine-mod] gZenWorkspaces.pinnedTabsContainer not available");
    }

    console.log("[my-sine-mod] Banner injected with update counter 3");
  };

  if (document.readyState === "complete" || document.readyState === "interactive") {
    createBanner();
  } else {
    window.addEventListener("DOMContentLoaded", createBanner, { once: true });
  }
})();

