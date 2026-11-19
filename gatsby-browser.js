exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location && location.hash) {
    if (location.hash === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return false;
    }
    const item = typeof document !== "undefined" ? document.querySelector(location.hash) : null;
    if (item) {
      setTimeout(() => {
        item.scrollIntoView({ behavior: "smooth" });
      }, 20);
      return false;
    }
    return true;
  }
  if (
    location
    && (location.pathname === "/" || location.pathname === "/cv" || location.pathname === "/cv/")
  ) {
    return [0, 0];
  }
  return true;
};
