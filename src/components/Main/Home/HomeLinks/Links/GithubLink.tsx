import { Icons } from "../../../../../lib/icons/Icons";

const GithubLink = () => {
  return (
    <a
      href="https://www.github.com/markymelnik/"
      target="_blank"
      rel="noopener noreferrer"
      className="github-link"
      aria-label="Visit my github profile"
    >
      <Icons.Github className='icon'size={30} />
    </a>
  );
};

export default GithubLink;
