import { Input } from "@/components/ui/input";
import { UseFormRegisterReturn } from "react-hook-form";

const DateBox = ({ register }: { register: UseFormRegisterReturn }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <label className="subTitle2 text-[#2D2D2D]">모집 기간</label>
      <div className="flex items-center gap-[10px]">
        <label className="w-[80px] subTitle2 text-[#2D2D2D]">종료일</label>
        <Input type="date" {...register} />
      </div>
    </div>
  );
};

export default DateBox;
