import { useState } from "react";
import "./_override-btn.scss";
import { Icons } from "../../../../../lib/Icons";

const OverrideButton = () => {
  const [isMessageVisible, setIsMessageVisible] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsMessageVisible(true);

    setTimeout(() => {
      setIsMessageVisible(false);
    }, 2000);
  };

  return (
    <button className="override-btn" onClick={handleButtonClick}>
      <div className={`override-msg ${isMessageVisible ? `show` : ``}`}>
        Contact me to talk about this project!
      </div>
      <div className="override-btn-text">Source</div>
      <Icons.Link size={20} />
    </button>
  );
};

export default OverrideButton;
