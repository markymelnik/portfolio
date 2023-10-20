import About from './About/About';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import './_main.scss';

const Main = () => {
  return (
    <div className="main-container">
      <Home />
      <Projects />
      <About />
    </div>
  )
}

export default Main;