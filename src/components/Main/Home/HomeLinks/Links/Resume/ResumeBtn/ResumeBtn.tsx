import { useEffect, useState } from 'react';

import { ResumeOverlay } from '../ResumeOverlay/ResumeOverlay';
import { Icons } from '../../../../../../../lib/icons/Icons';
import './resume-btn.scss';

export const ResumeBtn = () => {
  const [isResumeOverlayOpen, setIsResumeOverlayOpen] = useState<boolean>(false);
  const [closing, setClosing] = useState<boolean>(false);

  useEffect(() => {
    if (isResumeOverlayOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isResumeOverlayOpen]);

  const handleResumeBtnClick = () => {
    setIsResumeOverlayOpen(true);
    setClosing(false);
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setIsResumeOverlayOpen(false);
    }, 500);
  };

  return (
    <>
      <button
        className='resume-btn'
        onClick={handleResumeBtnClick}
        aria-label={'Show resume'}
      >
        <Icons.Resume size={40} />
      </button>
      {isResumeOverlayOpen && (
        <ResumeOverlay onClose={handleClose} closing={closing} />
      )}
    </>
  );
}