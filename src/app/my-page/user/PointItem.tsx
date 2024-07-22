interface PointItemProps {
  date: string;
  content: string;
  isFirst?: boolean;
}

const PointItem = ({ date, content, isFirst }: PointItemProps) => {
  return (
    <div className="relative flex justify-between w-[430px]">
      <div className="absolute left-[-150px] z-[99] top-[5px] bg-[#D9D9D9] w-[15px] h-[15px] rounded-[50px]" />
      {!isFirst && (
        <div className="absolute left-[-143px] top-[-40px] bg-[#939393] w-[1px] h-[50px]" />
      )}
      <div className="detail1">{content}</div>
      <div className="detail1 text-[#939393]">{date}</div>
    </div>
  );
};
export default PointItem;
