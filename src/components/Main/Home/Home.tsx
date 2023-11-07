import { forwardRef } from 'react';
import CyclingSubtitle from './CyclingSubtitle/CyclingSubtitle';
import './_home.scss';

interface HomeProps extends React.HTMLProps<HTMLDivElement> {}

const Home = forwardRef<HTMLDivElement, HomeProps>((props, ref) => {

  return (
    <section ref={ref} className="home-container" {...props}>
      <div className="home-intro">
        <h1 className="home-title">Mark Melnik</h1>
        <CyclingSubtitle />
        {/* <h3 className="home-read-more">Read more</h3> */}
      </div>
    </section>
  )
});

export default Home;