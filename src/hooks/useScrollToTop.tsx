import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default ScrollToTop;
