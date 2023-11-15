import GithubLink from "../../Links/GIthubLink/GithubLink";
import LinkedinLink from "../../Links/LinkedinLink/LinkedinLink";
import "./_home-links.scss";

const HomeLinks = () => {
  return (
    <div className="home-links">
      <LinkedinLink />
      <GithubLink />
    </div>
  );
};

export default HomeLinks;
