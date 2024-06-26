"use client";

import { UseFormRegisterReturn } from "react-hook-form";

const GenderBox = ({ register }: { register: UseFormRegisterReturn }) => {
  return (
    <select defaultValue="male" {...register}>
      <option value="">성별</option>
      <option value="male">남자</option>
      <option value="female">여자</option>
    </select>
  );
};

export default GenderBox;
