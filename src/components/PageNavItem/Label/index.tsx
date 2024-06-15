interface LabelProps {
  icon: React.ReactNode;
  text: string;
}
const Label = ({ icon, text }: LabelProps) => {
  return (
    <div className="flex items-center gap-[10px] pl-[50px]">
      {icon}
      <div className="title1">{text}</div>
    </div>
  );
};

export default Label;
