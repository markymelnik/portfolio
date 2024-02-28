import { useState } from "react";

import { Icons } from "../../../../../lib/icons/Icons";
import { CONTENT } from "../../../../../lib/content";
import "./override-btn.scss";

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
      {CONTENT.projects.button.talktome}
      </div>
      <div className="override-btn-text">{CONTENT.projects.button.source}</div>
      <Icons.Link size={20} />
    </button>
  );
};

export default OverrideButton;
