import { forwardRef } from 'react';
import './_home.scss';

interface HomeProps extends React.HTMLProps<HTMLDivElement> {}

const Home = forwardRef<HTMLDivElement, HomeProps>((props, ref) => {

  return (
    <section ref={ref} className="home-container" {...props}>
      <div className="home-intro">
        <h1 className="home-title">Mark Melnik</h1>
        <h2 className="home-subtitle">I build full stack applications.</h2>
        <h3 className="home-description">I am an aspiring software developer based in New York City.</h3>
        <div className="home-learn-more">Learn More</div>
      </div>
    </section>
  )
});

export default Home;