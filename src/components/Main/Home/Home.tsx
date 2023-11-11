import { forwardRef } from "react";

import DynamicSubtitle from "./DynamicSubtitle/DynamicSubtitle";
import RoadVectorSVG from "./RoadVector/RoadVectorSVG";
import HomeLinks from "./HomeLinks/HomeLinks";
import "./_home.scss";

interface HomeProps extends React.HTMLProps<HTMLDivElement> {}

const Home = forwardRef<HTMLDivElement, HomeProps>((props, ref) => {
  return (
    <section ref={ref} className="home-container" {...props}>
      <div className="home-intro">
        <h1 className="home-title">Mark Melnik</h1>
        <DynamicSubtitle />
        <HomeLinks />
      </div>
      <RoadVectorSVG />
    </section>
  );
});

export default Home;
