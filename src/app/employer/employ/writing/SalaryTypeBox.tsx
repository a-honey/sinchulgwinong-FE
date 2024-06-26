import { UseFormRegisterReturn } from "react-hook-form";

const SalaryTypeBox = ({ register }: { register: UseFormRegisterReturn }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <label className="subTitle2 text-[#2D2D2D]">급여 형태</label>
      <div className="grid grid-cols-4">
        <label>
          <input type="radio" value="DAILY" {...register} />
          일급
        </label>
        <label>
          <input type="radio" value="WEEKLY" {...register} />
          주급
        </label>
        <label>
          <input type="radio" value="MONTHLY" {...register} />
          월급
        </label>
        <label>
          <input type="radio" value="YEAR" {...register} />
          연봉
        </label>
      </div>
    </div>
  );
};

export default SalaryTypeBox;
