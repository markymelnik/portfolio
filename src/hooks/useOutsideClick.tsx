import { type MutableRefObject, useEffect } from "react";

const useOutsideClick = (
  ref: MutableRefObject<HTMLElement | null>,
  callback: () => void
) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const handleOutsideClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      };

      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }
  }, [ref, callback]);
};

export default useOutsideClick;
