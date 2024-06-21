"use client";

import { Input } from "@/components/ui/input";
import { UseFormRegisterReturn } from "react-hook-form";

// TODO: react-hook-form formcontext 이용하기
interface InputAgreeProps {
  label: string;
  name: string;
  onChecked: UseFormRegisterReturn<string>;
}

const InputAgree = ({ label, onChecked }: InputAgreeProps) => {
  return (
    <div className="flex items-center gap-[10px]">
      <Input type="checkbox" className="w-[14px]" {...onChecked} />
      <label>{label}</label>
      <div className="detail2">자세히 보기</div>
    </div>
  );
};
export default InputAgree;
