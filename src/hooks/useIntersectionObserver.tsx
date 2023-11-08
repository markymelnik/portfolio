import { MutableRefObject, useEffect } from "react"

type UseSectionObserverProps = {
  setActiveTab: (id: string) => void;
  isScrolling: boolean;
  refs: MutableRefObject<HTMLElement | null>[];
}

const useSectionObserver = ({ setActiveTab, isScrolling, refs }: UseSectionObserverProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isScrolling && entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
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
      })
    }

  }, [setActiveTab, isScrolling, refs])
}

export default useSectionObserver;