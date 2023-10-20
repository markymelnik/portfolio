import { forwardRef } from 'react';
import './_about.scss';

const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="about-container">About</div>
  )
});

export default About;