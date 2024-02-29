import { CONTENT } from "../../../lib/content";
import "./logo.scss";

const Logo = () => {
  const handleClick = () => {
    window.location.reload();
  }

  return (
    <div className="logo" onClick={handleClick}>
      <div className="name">{CONTENT.logo}</div>
    </div>
  );
};

export default Logo;
