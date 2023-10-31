import { useRef, useEffect } from 'react';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import About from './About/About';
import './_main.scss';
import Skills from './Skills/Skills';
import Divider from './Divider/Divider';

type MainProps = {
  setActiveTab: (tab: string) => void;
  isScrolling: boolean;
};

const Main = ({ setActiveTab, isScrolling }: MainProps) => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isScrolling && entry.isIntersecting) {
            switch (entry.target.id) {
              case "about":
                setActiveTab("about");
                break;
              case "projects":
                setActiveTab("projects");
                break;
              case "skills":
                setActiveTab("skills");
                break;
              case "contact":
                setActiveTab("contact");
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

    const currentAboutRef = aboutRef.current;
    const currentProjectsRef = projectsRef.current;
    const currentSkillsRef = skillsRef.current;
    const currentContactRef = contactRef.current;

    if (currentAboutRef) observer.observe(currentAboutRef);
    if (currentProjectsRef) observer.observe(currentProjectsRef);
    if (currentSkillsRef) observer.observe(currentSkillsRef);
    if (currentContactRef) observer.observe(currentContactRef);

    return () => {
      if (currentAboutRef) observer.unobserve(currentAboutRef);
      if (currentProjectsRef) observer.unobserve(currentProjectsRef);
      if (currentSkillsRef) observer.unobserve(currentSkillsRef);
      if (currentContactRef) observer.unobserve(currentContactRef);
    };
  }, [setActiveTab, isScrolling]);

  return (
    <main className="main-container">
      <About ref={aboutRef} id="about" />
      <Projects ref={projectsRef} id="projects" />
      <Divider />
      <Skills ref={skillsRef} id="skills" />
      <Divider />
      <Contact ref={contactRef} id="contact" />
      <Divider />
    </main>
  );
};

export default Main;
