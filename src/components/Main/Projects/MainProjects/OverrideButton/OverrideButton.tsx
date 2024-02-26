import { useState } from "react";
import LinkIcon from "../../LinkIcon";
import "./_override-btn.scss";

const OverrideButton = () => {
  const [isMessageVisible, setIsMessageVisible] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsMessageVisible(true);

    setTimeout(() => {
      setIsMessageVisible(false);
    }, 2000);
  };

  return (
    <div className="override-btn" onClick={handleButtonClick}>
      <div className={`override-msg ${isMessageVisible ? `show` : ``}`}>
        Contact me to talk about this project!
      </div>
      <div className="override-btn-text">Source</div>
      <LinkIcon />
    </div>
  );
};

export default OverrideButton;
