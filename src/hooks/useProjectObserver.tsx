import { MutableRefObject, useEffect } from "react";

type UseProjectObserverProps = {
  refs: MutableRefObject<HTMLElement | null>[];
}

const useProjectObserver = ({ refs }: UseProjectObserverProps) => {
  useEffect(() => {
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
          }
        })
      }, { threshold: 0.5 }
    )

    refs.forEach((ref) => {
      if (ref.current) {
        projectObserver.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          projectObserver.unobserve(ref.current);
        }
      })
    }
  }, [refs]);
}

export default useProjectObserver;