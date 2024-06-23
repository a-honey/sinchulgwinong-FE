"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface LabelProps {
  icon: React.ReactNode;
  text: string;
  value?: string;
}
const Label = ({ icon, text, value }: LabelProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex items-center gap-[10px] py-[15px] pl-[50px]",
        value === pathname && "bg-[#FFDB80]"
      )}
    >
      {icon}
      <div className="title1">{text}</div>
    </div>
  );
};

export default Label;
