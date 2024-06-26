import { UseFormRegisterReturn } from "react-hook-form";

const AddressBox = ({ register }: { register: UseFormRegisterReturn }) => {
  return (
    <div className="flex">
      <label className="w-[80px] subTitle2 text-[#2D2D2D]">지역</label>
      <div className="flex">
        <select value={"시.도"}>
          <option>서울특별시</option>
          <option>광주광역시</option>
        </select>
        {/* select option에 서울특별시 광진구로 넣기 */}
        <select value={"시.구.군"} {...register}>
          <option>광진구</option>
          <option>서초구</option>
        </select>
      </div>
    </div>
  );
};

export default AddressBox;
