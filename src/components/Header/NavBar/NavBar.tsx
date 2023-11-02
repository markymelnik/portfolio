import { useRef } from 'react';
import './_navbar.scss';
import LightDarkToggleButton from '../LightDark/LightDarkToggleButton';

type NavbarProps = {
  activeTab: string,
  setActiveTab: (tab: string) => void;
  setIsScrolling: (status: boolean) => void;
}

const NavBar = ({ activeTab, setActiveTab, setIsScrolling }: NavbarProps) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionRect = section.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const sectionTop = sectionRect.top + scrollTop;
  
      window.scrollTo({
        top: sectionTop - 120,
        behavior: 'smooth',
      });
    }

    setIsScrolling(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
      timeoutRef.current = null; 
    }, 1000);

    setActiveTab(sectionId);
  }

  return (
    <div className="navbar-container">
      <div onClick={() => scrollToSection('home')} className={`navbar-home ${activeTab === "home" ? "active" : ''}`}>Home</div>
      <div onClick={() => scrollToSection('about')} className={`navbar-about ${activeTab === "about" ? "active" : ''}`}>About</div>
      <div onClick={() => scrollToSection('projects')} className={`navbar-projects ${activeTab === "projects" ? "active" : ''}`}>Projects</div>
      <div onClick={() => scrollToSection('contact')} className={`navbar-contact ${activeTab === 'contact' ? 'active' : ''}`} >Contact</div>
      <LightDarkToggleButton />
    </div>
  );
}

export default NavBar;