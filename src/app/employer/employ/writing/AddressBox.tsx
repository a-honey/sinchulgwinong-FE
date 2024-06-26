"use client";

import { UseFormRegisterReturn } from "react-hook-form";

const AddressBox = ({ register }: { register: UseFormRegisterReturn }) => {
  return (
    <div className="flex">
      <label className="w-[80px] subTitle2 text-[#2D2D2D]">지역</label>
      <div className="flex">
        <select defaultValue="서울특별시" {...register}>
          <option value="서울특별시">서울특별시</option>
          <option value="광주광역시">광주광역시</option>
        </select>
        <select defaultValue="광진구" {...register}>
          <option value="광진구">광진구</option>
          <option value="서초구">서초구</option>
        </select>
      </div>
    </div>
  );
};

export default AddressBox;
