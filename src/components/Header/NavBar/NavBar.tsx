import LightDarkToggleButton from "../LightDark/LightDarkBtn";
import { CONTENT } from "../../../lib/content";
import "./mobile-navbar.scss";
import "./desktop-navbar.scss";

type NavbarProps = {
  customClass: string;
};

const NavBar = ({
  customClass,
}: NavbarProps) => {

  const scrollValue = typeof window !== 'undefined' ? (window.innerWidth < 768 ? 90 : 140) : 140;

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionRect = section.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const sectionTop = sectionRect.top + scrollTop;

        window.scrollTo({
          top: sectionTop - scrollValue,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className={`${customClass}-container`}>
      <div
        onClick={() => scrollToSection('home')}
        className={`${customClass}-home`}
      >
        {CONTENT.home.title}
      </div>
      <div
        onClick={() => scrollToSection('about')}
        className={`${customClass}-about`}
      >
        {CONTENT.about.title}
      </div>
      <div
        onClick={() => scrollToSection('projects')}
        className={`${customClass}-projects`}
      >
        {CONTENT.projects.title}
      </div>
      <div
        onClick={() => scrollToSection('contact')}
        className={`${customClass}-contact`}
      >
        {CONTENT.contact.title}
      </div>
      {customClass == 'desktop-navbar' ? <LightDarkToggleButton /> : null}
    </div>
  );
};

export default NavBar;
