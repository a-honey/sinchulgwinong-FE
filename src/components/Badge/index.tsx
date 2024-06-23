import { SalaryType } from "@/types";

const Badge = ({ text }: { text: SalaryType }) => {
  switch (text) {
    case "DAILY":
      return <span>일급</span>;
    case "MONTHLY":
      return <span>월급</span>;
    case "WEEKLY":
      return <span>주급</span>;
    case "YEAR":
      return <span>연봉</span>;
    default:
      return <button>{text}</button>;
  }
};

export default Badge;
