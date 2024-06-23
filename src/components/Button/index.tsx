import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isRound?: boolean;
  variants?: "yellow";
  onClick?: () => void;
}
const Button = ({
  variants,
  isRound = false,
  className,
  onClick,
  text,
}: ButtonProps) => {
  const getVariants = () => {
    switch (variants) {
      case "yellow":
        return "bg-[#FFE6A6] text-black";
      default:
        return "";
    }
  };

  return (
    <button
      className={cn(
        "px-[10px] py-[25px] rounded rounded-[15px] w-full",
        getVariants(),
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
