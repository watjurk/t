(() => {
  const bannerId = "my-sine-mod-banner";

  const createBanner = () => {
    if (document.getElementById(bannerId)) return;

    const banner = document.createElement("div");
    banner.id = bannerId;
    banner.textContent = "My Sine Mod is active";

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
  };

  if (document.readyState === "complete" || document.readyState === "interactive") {
    createBanner();
  } else {
    window.addEventListener("DOMContentLoaded", createBanner, { once: true });
  }
})();

