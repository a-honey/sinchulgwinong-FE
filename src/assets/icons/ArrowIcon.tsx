type Direction = "up" | "down" | "left" | "right";

type Weight = "regular" | "bold";

interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {
  direction?: Direction;
  weight?: Weight;
  color?: "white" | "black";
}

const ArrowIcon = ({
  direction = "right",
  weight = "regular",
  color = "white",
  ...props
}: ArrowIconProps) => {
  const getRotation = () => {
    switch (direction) {
      case "up":
        return "rotate(-90deg)";
      case "down":
        return "rotate(90deg)";
      case "left":
        return "rotate(0deg)";
      case "right":
      default:
        return "rotate(180deg)";
    }
  };

  const getWeight = () => {
    switch (weight) {
      case "regular":
        return 3;
      case "bold":
        return 5;
      default:
        return 3;
    }
  };

  return (
    <svg
      viewBox="0 0 21 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: getRotation() }}
      {...props}
    >
      <path
        d="M19 34L3 18L19 2"
        stroke={color}
        strokeWidth={getWeight()}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ArrowIcon;
