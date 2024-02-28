import { useEffect, type MutableRefObject } from 'react';

type UseSectionObserverProps = {
  refs: MutableRefObject<HTMLElement | null>[];
};

const useSectionObserver = ({ refs }: UseSectionObserverProps) => {
  useEffect(() => {
    const slideInThreshold = innerWidth < 768 ? 0.2 : 0.3;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= slideInThreshold) {
            entry.target.classList.add('slide-in');
          }
        });
      },
      { threshold: [slideInThreshold] }
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
  }, [refs]);
};

export default useSectionObserver;
