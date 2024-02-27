import { useEffect } from "react";

const useScrollToTop = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
};

const ScrollToTop = () => {
  useScrollToTop();
  return null;
}

export default ScrollToTop;
