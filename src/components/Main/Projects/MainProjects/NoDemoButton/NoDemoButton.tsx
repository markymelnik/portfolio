import { useState } from 'react';
import './no-demo-btn.scss';
import { Icons } from '../../../../../lib/icons/Icons';

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
        Currently in development!
      </div>
      <div className='no-demo-btn-text'>Demo</div>
      <Icons.Link size={20} />
    </button>
  );
};

export default NoDemoButton;