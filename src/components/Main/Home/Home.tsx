import { forwardRef } from 'react';
import './_home.scss';

const Home = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="home-container">Home</div>
  )
});

export default Home;