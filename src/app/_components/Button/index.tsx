interface ButtonProps extends HTMLButtonElement {
  text: string;
}
const Button = ({ text }: ButtonProps) => {
  return <button>{text}</button>;
};

export default Button;
