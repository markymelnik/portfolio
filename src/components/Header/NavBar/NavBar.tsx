import { useRef } from "react";

/* import LightDarkToggleButton from "../LightDark/LightDarkToggleButton"; */
import "./_mobile-navbar.scss";
import "./_desktop-navbar.scss";

type NavbarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setIsScrolling: (status: boolean) => void;
  onNavClick?: () => void;
  customClass: string;
};

const NavBar = ({
  activeTab,
  setActiveTab,
  setIsScrolling,
  onNavClick,
  customClass,
}: NavbarProps) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollValue = window.innerWidth < 768 ? 90 : 140;

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== undefined) {

      const section = document.getElementById(sectionId);
    if (section) {
      const sectionRect = section.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const sectionTop = sectionRect.top + scrollTop;

      window.scrollTo({
        top: sectionTop - scrollValue,
        behavior: "smooth",
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

    if (customClass === "mobile-navbar" && onNavClick) {
      onNavClick();
    }


    }
    
  };

  return (
    <div className={`${customClass}-container`}>
      <div
        onClick={() => scrollToSection("home")}
        className={`${customClass}-home ${
          activeTab === "home" ? "active" : ""
        }`}
      >
        Home
      </div>
      <div
        onClick={() => scrollToSection("about")}
        className={`${customClass}-about ${
          activeTab === "about" ? "active" : ""
        }`}
      >
        About
      </div>
      <div
        onClick={() => scrollToSection("projects")}
        className={`${customClass}-projects ${
          activeTab === "projects" ? "active" : ""
        }`}
      >
        Projects
      </div>
      <div
        onClick={() => scrollToSection("contact")}
        className={`${customClass}-contact ${
          activeTab === "contact" ? "active" : ""
        }`}
      >
        Contact
      </div>
      {/* {customClass == "desktop-navbar" ? <LightDarkToggleButton /> : null} */}
    </div>
  );
};

export default NavBar;
