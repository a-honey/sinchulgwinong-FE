interface EditItemProps {
  label: string;
  value?: string;
}

const EditItem = ({ label, value }: EditItemProps) => {
  return (
    <div className="flex flex-col gap-[14px]">
      <div className="flex">
        <div className="detail1 text-gray3">{label}</div>
        <div className="detail1 text-[#0057FF] ml-[30px]">수정</div>
      </div>
      <div className="detail1">{value}</div>
    </div>
  );
};
export default EditItem;
