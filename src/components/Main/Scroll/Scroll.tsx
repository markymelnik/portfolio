import { useRef } from "react";

import useHideOnScroll from "../../../hooks/useHideOnScroll";
import { Icons } from "../../../lib/icons/Icons";
import "./scroll.scss";

const Scroll = () => {
  const arrowRef = useRef<HTMLDivElement>(null);

  useHideOnScroll({ ref: arrowRef });

  return (
    <div className="scroll-container">
      <div className="scroll-down-arrow" ref={arrowRef}>
        <span>{<Icons.CaretDown />}</span>
      </div>
    </div>
  );
};

export default Scroll;
