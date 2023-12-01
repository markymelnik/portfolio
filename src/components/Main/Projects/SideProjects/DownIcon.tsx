type ArrowIconProps = {
  isActive?: boolean;
}

const DownIcon = ({ isActive }: ArrowIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      style={{
        transform: isActive ? "rotate(-180deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease"
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export default DownIcon;
