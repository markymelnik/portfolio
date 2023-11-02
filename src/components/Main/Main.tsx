import { useRef, useEffect } from 'react';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import About from './About/About';
import Divider from './Divider/Divider';
import Home from './Home/Home';
import './_main.scss';
import Scroll from './Scroll/Scroll';

type MainProps = {
  setActiveTab: (tab: string) => void;
  isScrolling: boolean;
};

const Main = ({ setActiveTab, isScrolling }: MainProps) => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isScrolling && entry.isIntersecting) {
            switch (entry.target.id) {
              case "home":
                setActiveTab("home");
                break;
              case "about":
                setActiveTab("about");
                break;
              case "projects":
                setActiveTab("projects");
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

    const currentHomeRef = homeRef.current;
    const currentAboutRef = aboutRef.current;
    const currentProjectsRef = projectsRef.current;
    const currentContactRef = contactRef.current;

    if (currentHomeRef) observer.observe(currentHomeRef);
    if (currentAboutRef) observer.observe(currentAboutRef);
    if (currentProjectsRef) observer.observe(currentProjectsRef);
    if (currentContactRef) observer.observe(currentContactRef);

    return () => {
      if (currentHomeRef) observer.unobserve(currentHomeRef);
      if (currentAboutRef) observer.unobserve(currentAboutRef);
      if (currentProjectsRef) observer.unobserve(currentProjectsRef);
      if (currentContactRef) observer.unobserve(currentContactRef);
    };
  }, [setActiveTab, isScrolling]);

  return (
    <main className="main-container">
      <Home ref={homeRef} id="home" />
      <Scroll />
      <About ref={aboutRef} id="about" />
      <Divider />
      <Projects ref={projectsRef} id="projects" />
      <Divider />
      <Contact ref={contactRef} id="contact" />
    </main>
  );
};

export default Main;
