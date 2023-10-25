import { forwardRef } from 'react';
import './_home.scss';

interface HomeProps extends React.HTMLProps<HTMLDivElement> {}

const Home = forwardRef<HTMLDivElement, HomeProps>((props, ref) => {

  return (
    <div ref={ref} className="home-container" {...props}>
      <div className="home-intro">
        <div className="home-name">Mark Melnik</div>
        <div className="home-description">programming for the web</div>
      </div>
    </div>
  );
});

export default Home;