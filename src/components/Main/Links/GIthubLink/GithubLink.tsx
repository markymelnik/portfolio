import "./_github-link.scss";
import GithubIcon from "./GithubIcon";

const GithubLink = () => {
  return (
    <a
      href="https://www.github.com/markymelnik/"
      target="_blank"
      rel="noopener noreferrer"
      className="github-link"
    >
      <GithubIcon />
    </a>
  );
};

export default GithubLink;
