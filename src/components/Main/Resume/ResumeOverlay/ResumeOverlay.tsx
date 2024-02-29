import { createPortal } from 'react-dom';
import { Icons } from '../../../../lib/icons/Icons';
import Resume from '../../../../assets/files/mark-melnik-resume.png';
import { useRef } from 'react';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import { DownloadResumeBtn } from './DownloadResumeBtn/DownloadResumeBtn';
import './resume-overlay.scss';

type ResumeOverlayProps = {
  onClose: () => void;
  closing: boolean;
};

export const ResumeOverlay = ({ onClose, closing }: ResumeOverlayProps) => {

  const overlayRef = useRef(null);
  useOutsideClick(overlayRef, onClose);

  return createPortal(
    <div className={`overlay-wrapper ${closing ? 'closing' : ''}`}>
      <div className={`resume-overlay ${closing ? 'closing' : ''}`} ref={overlayRef}>
        <button className='ro-close-btn' onClick={onClose}>
				  <Icons.XIcon />
				</button>
        <DownloadResumeBtn onClose={onClose} />
        <img src={Resume.src} className='resume-container' />
      </div>
    </div>,
    document.body
  );
};