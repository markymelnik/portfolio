import { useRef } from "react";

import useHideOnScroll from "../../../hooks/useHideOnScroll";
import "./_scroll.scss";
import { Icons } from "../../../lib/Icons";

const Scroll = () => {
  const arrowRef = useRef<HTMLDivElement>(null);

  useHideOnScroll({ ref: arrowRef });

  return (
    <div className="scroll-container">
      <div className="scroll-down" ref={arrowRef}>
        <span>{<Icons.CaretDown />}</span>
      </div>
    </div>
  );
};

export default Scroll;
