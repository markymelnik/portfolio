import { forwardRef } from 'react';
import './_about.scss';

interface AboutProps extends React.HTMLProps<HTMLDivElement> {}

const About = forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  return (
    <div ref={ref} className="about-container" {...props}>About</div>
  )
});

export default About;