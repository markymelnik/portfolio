import { useRef } from 'react';
import './_navbar.scss';

type NavbarProps = {
  activeTab: string,
  setActiveTab: (tab: string) => void;
  setIsScrolling: (status: boolean) => void;
}

const NavBar = ({ activeTab, setActiveTab, setIsScrolling }: NavbarProps) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });

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
      <div onClick={() => scrollToSection('home')} className={`navbar-home ${activeTab === 'home' ? 'active' : ''}`} >Home</div>
      <div onClick={() => scrollToSection('projects')} className={`navbar-projects ${activeTab === "projects" ? "active" : ''}`}>Projects</div>
      <div onClick={() => scrollToSection('about')} className={`navbar-about ${activeTab === "about" ? "active" : ''}`}>About</div>
    </div>
  );
}

export default NavBar;