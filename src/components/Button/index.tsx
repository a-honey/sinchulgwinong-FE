import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  varients?: "yellow";
  onClick?: () => void;
}
const Button = ({ varients, className, onClick, text }: ButtonProps) => {
  const getVarients = () => {
    switch (varients) {
      case "yellow":
        return "bg-[#FFE6A6] text-black";
      default:
        return "";
    }
  };

  return (
    <button className={cn(className, getVarients())} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
