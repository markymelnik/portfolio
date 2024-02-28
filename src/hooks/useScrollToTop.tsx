import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    const handleRefresh = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("load", handleRefresh);

    return () => {
      window.removeEventListener("load", handleRefresh);
    };
  }, []);

  return null;
};

export default ScrollToTop;
