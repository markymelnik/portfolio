import { useEffect, useState } from 'react';
import './footer.scss';

const Footer = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  useEffect(() => {
    setIsHidden(false);
  }, []);
  
  return (
    <footer className={`footer-container ${isHidden ? `hidden` : ``}`}>
      <p className='footer-tech-stack'>
        Developed with{' '}
        <a
          href='https://astro.build/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Astro
        </a>
        ,{' '}
        <a href='https://react.dev/' target='_blank' rel='noopener noreferrer'>
          React
        </a>
        , and{' '}
        <a
          href='https://sass-lang.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Sass
        </a>
        ; deployed on{' '}
        <a href='https://render.com/' target='_blank' rel='noopener noreferrer'>
          Render
        </a>
        .
      </p>
      <div className='footer-copyright'>&copy; 2024 Mark Melnik</div>
    </footer>
  );
};

export default Footer;
