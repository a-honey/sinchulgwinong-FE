interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
}
const Button = ({ className, onClick, text }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
