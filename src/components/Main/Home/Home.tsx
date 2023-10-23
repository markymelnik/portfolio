import { forwardRef } from 'react';
import './_home.scss';

interface HomeProps extends React.HTMLProps<HTMLDivElement> {}

const Home = forwardRef<HTMLDivElement, HomeProps>((props, ref) => {
  return (
    <div ref={ref} className="home-container" {...props}>Home</div>
  );
});

export default Home;