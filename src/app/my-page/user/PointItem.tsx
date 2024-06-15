interface PointItemProps {
  date: string;
  content: string;
}

const PointItem = ({ date, content }: PointItemProps) => {
  return (
    <div className="flex justify-between w-[430px]">
      <div className="detail1">{content}</div>
      <div className="detail1 text-[#939393]">{date}</div>
    </div>
  );
};
export default PointItem;
