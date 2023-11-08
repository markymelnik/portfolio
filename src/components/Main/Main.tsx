import { useRef } from 'react';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import About from './About/About';
import Divider from './Divider/Divider';
import Home from './Home/Home';
import Scroll from './Scroll/Scroll';
import './_main.scss';
import useSectionObserver from '../../hooks/useSectionObserver';

type MainProps = {
  setActiveTab: (tab: string) => void;
  isScrolling: boolean;
};

const Main = ({ setActiveTab, isScrolling }: MainProps) => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useSectionObserver({ setActiveTab, isScrolling, refs: [homeRef, aboutRef, projectsRef, contactRef] });

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
