import "./_dim-overlay.scss";

type DimOverlayProps = {
  isShown: boolean;
};

const DimOverlay = ({ isShown }: DimOverlayProps) => {
  return <div className={`dim-overlay ${isShown ? `show` : ``}`}></div>;
};

export default DimOverlay;
