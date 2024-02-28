import { RefObject, useEffect } from 'react';

type UseHideOnScrollProps = {
  ref: RefObject<HTMLDivElement>;
};

const useHideOnScroll = ({ ref }: UseHideOnScrollProps) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        ref.current?.classList.add('slide-down');
      } else {
        ref.current?.classList.remove('slide-down');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);
};

export default useHideOnScroll;
