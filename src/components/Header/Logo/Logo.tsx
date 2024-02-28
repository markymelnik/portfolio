import { CONTENT } from "../../../lib/content";
import "./logo.scss";

const Logo = () => {
  const handleClick = () => {
    window.location.reload();
  }

  return (
    <div className="logo" onClick={handleClick}>
      <div className="logo-text">{CONTENT.logo}</div>
    </div>
  );
};

export default Logo;
