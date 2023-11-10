import { forwardRef } from 'react';
import CyclingSubtitle from './CyclingSubtitle/CyclingSubtitle';
import './_home.scss';
import RoadVectorSVG from './RoadVector/RoadVectorSVG';
import HomeLinks from './HomeLinks/HomeLinks';

interface HomeProps extends React.HTMLProps<HTMLDivElement> {}

const Home = forwardRef<HTMLDivElement, HomeProps>((props, ref) => {

  return (
    <section ref={ref} className="home-container" {...props}>
      <div className="home-intro">
        <h1 className="home-title">Mark Melnik</h1>
        <CyclingSubtitle />
        <HomeLinks />
      </div>
      <RoadVectorSVG />
    </section>
  )
});

export default Home;