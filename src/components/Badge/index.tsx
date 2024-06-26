import { SalaryType } from "@/types";
import { cn } from "@/lib/utils";

const Badge = ({ text }: { text: SalaryType }) => {
  const { name, bgColor } = getName(text);

  return (
    <button
      className={cn("py-[5px] px-[15px] rounded-[20px]", `bg-${bgColor}`)}
    >
      {name}
    </button>
  );
};

export default Badge;

const getName = (text: string) => {
  switch (text) {
    case "DAILY":
      return { name: "일급", bgColor: "primary1" };
    case "MONTHLY":
      return { name: "월급", bgColor: "primary2" };
    case "WEEKLY":
      return { name: "주급", bgColor: "primary3" };
    case "YEAR":
      return { name: "연봉", bgColor: "primary3" };
    default:
      return { name: "일급", bgColor: "primary1" };
  }
};
