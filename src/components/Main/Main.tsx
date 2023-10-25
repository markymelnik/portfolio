import { useRef, useEffect } from 'react';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import About from './About/About';
import './_main.scss';
import Skills from './Skills/Skills';

type MainProps = {
  setActiveTab: (tab: string) => void;
  isScrolling: boolean;
};

const Main = ({ setActiveTab, isScrolling }: MainProps) => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isScrolling && entry.isIntersecting) {
            switch (entry.target.id) {
              case "home":
                setActiveTab("home");
                break;
              case "projects":
                setActiveTab("projects");
                break;
              case "about":
                setActiveTab("about");
                break;
              case "skills":
                setActiveTab("skills");
                break;
              default:
                break;
            }
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    const currentHomeRef = homeRef.current;
    const currentProjectsRef = projectsRef.current;
    const currentAboutRef = aboutRef.current;
    const currentSkillsRef = skillsRef.current;

    if (currentHomeRef) observer.observe(currentHomeRef);
    if (currentProjectsRef) observer.observe(currentProjectsRef);
    if (currentAboutRef) observer.observe(currentAboutRef);
    if (currentSkillsRef) observer.observe(currentSkillsRef);

    return () => {
      if (currentHomeRef) observer.unobserve(currentHomeRef);
      if (currentProjectsRef) observer.unobserve(currentProjectsRef);
      if (currentAboutRef) observer.unobserve(currentAboutRef);
      if (currentSkillsRef) observer.unobserve(currentSkillsRef);
    };
  }, [setActiveTab, isScrolling]);

  return (
    <div className="main-container">
      <Home ref={homeRef} id="home" />
      <Projects ref={projectsRef} id="projects" />
      <About ref={aboutRef} id="about" />
      <Skills ref={skillsRef} id ="skills" />
    </div>
  );
};

export default Main;
