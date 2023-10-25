import { useRef } from 'react';
import './_navbar.scss';
import LineTop from '../LineTop/LineTop';
import LineBottom from '../LineBottom/LineBottom';

type NavbarProps = {
  activeTab: string,
  setActiveTab: (tab: string) => void;
  setIsScrolling: (status: boolean) => void;
}

const NavBar = ({ activeTab, setActiveTab, setIsScrolling }: NavbarProps) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      <LineTop />
      <div onClick={() => scrollToSection('home')} className={`navbar-home ${activeTab === 'home' ? 'active' : ''}`} >Home</div>
      <div onClick={() => scrollToSection('projects')} className={`navbar-projects ${activeTab === "projects" ? "active" : ''}`}>Projects</div>
      <div onClick={() => scrollToSection('about')} className={`navbar-about ${activeTab === "about" ? "active" : ''}`}>About</div>
      <div onClick={() => scrollToSection('skills')} className={`navbar-skills ${activeTab === "skills" ? "active" : ''}`}>Skills</div>
      <LineBottom />
    </div>
  );
}

export default NavBar;