import "./_logo.scss";

const Logo = () => {
  const handleClick = () => {
    window.location.reload();
  }

  return (
    <div className="logo" onClick={handleClick}>
      <div className="logo-text">markmelnik</div>
    </div>
  );
};

export default Logo;
