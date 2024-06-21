import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isRound?: boolean;
  varients?: "yellow";
  onClick?: () => void;
}
const Button = ({
  varients,
  isRound = false,
  className,
  onClick,
  text,
}: ButtonProps) => {
  const getVarients = () => {
    switch (varients) {
      case "yellow":
        return "bg-[#FFE6A6] text-black";
      default:
        return "";
    }
  };

  return (
    <button
      className={cn(
        className,
        getVarients(),
        isRound ? "rounded rounded-[15px]" : ""
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
