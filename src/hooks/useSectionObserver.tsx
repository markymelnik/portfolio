import { MutableRefObject, useEffect } from "react";

type UseSectionObserverProps = {
  setActiveTab: (id: string) => void;
  isScrolling: boolean;
  refs: MutableRefObject<HTMLElement | null>[];
};

const useSectionObserver = ({
  setActiveTab,
  isScrolling,
  refs,
}: UseSectionObserverProps) => {
  useEffect(() => {
    const activeTabThreshold = innerWidth < 768 ? 0.3 : 0.5;
    const slideInThreshold = innerWidth < 768 ? 0.2 : 0.3;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isScrolling && entry.intersectionRatio >= activeTabThreshold) {
            setActiveTab(entry.target.id);
          }
          if (!isScrolling && entry.intersectionRatio >= slideInThreshold) {
            entry.target.classList.add("slide-in");
          }
        });
      },
      { threshold: [activeTabThreshold, slideInThreshold] }
    );

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [setActiveTab, isScrolling, refs]);
};

export default useSectionObserver;
