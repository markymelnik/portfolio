import { useState } from 'react';
import LinkIcon from '../../LinkIcon';
import './_no-demo-btn.scss';

const NoDemoButton = () => {
  const [isMessageVisible, setIsMessageVisible] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsMessageVisible(true);

    setTimeout(() => {
      setIsMessageVisible(false);
    }, 2000);
  };

  return (
    <div className='no-demo-btn' onClick={handleButtonClick}>
      <div className={`no-demo-msg ${isMessageVisible ? `show` : ``}`}>
        Currently in development!
      </div>
      <div className='no-demo-btn-text'>Demo</div>
      <LinkIcon />
    </div>
  );
};

export default NoDemoButton;