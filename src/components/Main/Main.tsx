import { useEffect, useRef } from 'react';
import About from './About/About';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import './_main.scss';

type MainProps = {
  activeTab: string,
}

const Main = ({ activeTab }: MainProps) => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let sectionRef;

    switch (activeTab) {
      case 'home':
        sectionRef = homeRef;
        break;
      case 'projects':
        sectionRef = projectsRef;
        break;
      case 'about':
        sectionRef = aboutRef;
        break;
      default:
        return;
    }
    
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  }, [activeTab]);

  return (
    <div className="main-container">
      <Home ref={homeRef}/>
      <Projects  ref={projectsRef}/>
      <About ref={aboutRef}/>
    </div>
  )
}

export default Main;