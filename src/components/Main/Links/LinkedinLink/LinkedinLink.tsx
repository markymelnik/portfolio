import "./_linkedin-link.scss";
import LinkedinIcon from "./LinkedinIcon";

const LinkedinLink = () => {
  return (
    <a
      href="https://www.linkedin.com/in/markmelnik/"
      target="_blank"
      rel="noopener noreferrer"
      className="linkedin-link"
    >
      <LinkedinIcon />
    </a>
  );
};

export default LinkedinLink;
