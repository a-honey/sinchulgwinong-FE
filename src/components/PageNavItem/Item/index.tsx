import Link from "next/link";

interface ItemProps {
  moveTo: string;
  text: string;
}
const Item = ({ moveTo, text }: ItemProps) => {
  return (
    <Link href={moveTo}>
      <div className="detail1 pl-[80px]">{text}</div>
    </Link>
  );
};

export default Item;
