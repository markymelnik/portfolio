import { ResumeBtn } from "./Links/Resume/ResumeBtn/ResumeBtn";
import GithubLink from "./Links/GithubLink";
import LinkedinLink from "./Links/LinkedinLink";
import "./home-links.scss";

const HomeLinks = () => {
  return (
    <div className="home-links">
      <ResumeBtn />
      <LinkedinLink />
      <GithubLink />
    </div>
  );
};

export default HomeLinks;
