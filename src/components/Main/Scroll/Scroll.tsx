import { useRef } from 'react';
import DownIcon from '../Projects/SideProjects/DownIcon';
import './_scroll.scss';
import useHideOnScroll from '../../../hooks/useHideOnScroll';

const Scroll = () => {
  const arrowRef = useRef<HTMLDivElement>(null);

  useHideOnScroll({ ref: arrowRef });

  return (
    <div className="scroll-container">
      <div className="scroll-down" ref={arrowRef}>
        <span>{<DownIcon />}</span>
      </div>
    </div>
  )
}

export default Scroll;