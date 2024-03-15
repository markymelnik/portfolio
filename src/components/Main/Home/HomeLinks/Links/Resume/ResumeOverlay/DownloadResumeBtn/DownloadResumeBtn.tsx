import { Icons } from '../../../../../../../../lib/icons/Icons';
import './download-resume-btn.scss';

type DownloadResumeBtnProps = {
  onClose: () => void;
};

export const DownloadResumeBtn = ({ onClose }: DownloadResumeBtnProps) => {

  const handleResumeDownload = () => {
    setTimeout(() => {
      onClose();
    }, 250);
  }
  
  return (
    <a
      className='download-resume-btn'
      href='/mark-melnik-resume.pdf'
      download='Mark Melnik Resume.pdf'
      onClick={handleResumeDownload}
    >
			<Icons.Download size={30} />
		</a>
  );
};
