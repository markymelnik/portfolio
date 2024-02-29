import { Icons } from '../../../../../lib/icons/Icons';
import './download-resume-btn.scss';

type DownloadResumeButtonProps = {
  onClose: () => void;
};

export const DownloadResumeBtn = ({ onClose }: DownloadResumeButtonProps) => {

  const handleResumeDownload = () => {
    setTimeout(() => {
      onClose();
    }, 500);
  }
  
  return (
    <a
      className='download-resume-btn'
      href='/src/assets/files/mark-melnik-resume.pdf'
      download='mark-melnik-resume.pdf'
      onClick={handleResumeDownload}
    >
			<Icons.Download size={30} />
		</a>
  );
};
