const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 56 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="22.5"
        cy="22.5"
        r="21"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M40 36L54 50"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SearchIcon;
