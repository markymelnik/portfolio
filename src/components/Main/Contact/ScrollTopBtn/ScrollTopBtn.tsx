import { Icons } from '../../../../lib/icons/Icons';
import './scroll-top-btn.scss';

export const ScrollTopBtn = () => {
  const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

  return (
    <button className='scroll-top-btn' onClick={handleClick} aria-label="Scroll to top of page">
      <Icons.ArrowUp />
    </button>
  );
};
