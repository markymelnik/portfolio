import { Icons } from "../../../../../lib/icons/Icons";

const LinkedinLink = () => {
  return (
    <a
      href="https://www.linkedin.com/in/markmelnik/"
      target="_blank"
      rel="noopener noreferrer"
      className="linkedin-link"
      aria-label="Visit my linkedin profile"
    >
      <Icons.LinkedIn className="icon" />
    </a>
  );
};

export default LinkedinLink;
