import { useState } from "react";

import { Icons } from "../../../../../lib/icons/Icons";
import { CONTENT } from "../../../../../lib/content";
import "./no-source-btn.scss";

const NoSourceBtn = () => {
  const [isMessageVisible, setIsMessageVisible] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsMessageVisible(true);

    setTimeout(() => {
      setIsMessageVisible(false);
    }, 2000);
  };

  return (
    <button className="no-source-btn" onClick={handleButtonClick}>
      <div className={`no-source-msg ${isMessageVisible ? `show` : ``}`}>
      {CONTENT.projects.button.talktome}
      </div>
      <div className="no-source-btn-text">{CONTENT.projects.button.source}</div>
      <Icons.Link size={20} />
    </button>
  );
};

export default NoSourceBtn;
