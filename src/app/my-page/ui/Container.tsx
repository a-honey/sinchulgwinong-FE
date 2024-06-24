interface ContainerProps {
  title: string;
  subTitle: string;
  children: React.ReactElement;
}
const Container = ({ title, subTitle, children }: ContainerProps) => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex justify-between">
        <div className="subTitle1">{title}</div>
        <div>슬라이드</div>
      </div>
      <div className="px-[20px] py-[22px] border-[#E9E9E9] border-[2px]">
        <div className="detail2 text-gray3">{subTitle}</div>
        {children}
      </div>
    </div>
  );
};

export default Container;
