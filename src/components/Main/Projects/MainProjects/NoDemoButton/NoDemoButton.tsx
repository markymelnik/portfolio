import { useState } from 'react';

import { Icons } from '../../../../../lib/icons/Icons';
import { CONTENT } from '../../../../../lib/content';
import './no-demo-btn.scss';

const NoDemoButton = () => {
  const [isMessageVisible, setIsMessageVisible] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsMessageVisible(true);

    setTimeout(() => {
      setIsMessageVisible(false);
    }, 2000);
  };

  return (
    <button className='no-demo-btn' onClick={handleButtonClick}>
      <div className={`no-demo-msg ${isMessageVisible ? `show` : ``}`}>
        {CONTENT.projects.button.indev}
      </div>
      <div className='no-demo-btn-text'>{CONTENT.projects.button.demo}</div>
      <Icons.Link size={20} />
    </button>
  );
};

export default NoDemoButton;