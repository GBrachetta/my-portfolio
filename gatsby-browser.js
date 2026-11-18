exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location && location.hash) {
    const item = typeof document !== "undefined" ? document.querySelector(location.hash) : null;
    if (item) {
      item.scrollIntoView({ behavior: "smooth" });
      return false;
    }
    return true;
  }
  if (location && (location.pathname === "/cv" || location.pathname === "/cv/")) {
    return [0, 0];
  }
  return true;
};
