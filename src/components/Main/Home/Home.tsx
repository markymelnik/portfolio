import { HTMLProps, forwardRef } from "react";

import DynamicSubtitle from "./DynamicSubtitle/DynamicSubtitle";
import RoadVector from "../../../lib/vectors/RoadVector/RoadVector";
import HomeLinks from "./HomeLinks/HomeLinks";
import "./home.scss";
import { CONTENT } from "../../../lib/content";

interface HomeProps extends HTMLProps<HTMLDivElement> {}

const Home = forwardRef<HTMLDivElement, HomeProps>((props, ref) => {
  return (
    <section ref={ref} className="home-container" {...props}>
      <div className="home-intro">
        <h1 className="home-title">{CONTENT.fullname}</h1>
        <DynamicSubtitle />
        <HomeLinks />
      </div>
      <RoadVector />
    </section>
  );
});

export default Home;
