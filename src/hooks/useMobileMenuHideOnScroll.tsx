import { useEffect } from "react";

type UseMobileMenuHideOnScrollProps = {
  closeMobileMenu: () => void;
};

const useMobileMenuHideOnScroll = ({
  closeMobileMenu,
}: UseMobileMenuHideOnScrollProps) => {
  useEffect(() => {
    const handleScroll = () => {
    
        const mobileMenu = document.querySelector('.mobile-menu-container');

        if (mobileMenu && mobileMenu.classList.contains('open')) {
          mobileMenu.classList.remove('open');
          closeMobileMenu();
        }
      
      
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [closeMobileMenu]);
};

export default useMobileMenuHideOnScroll;
