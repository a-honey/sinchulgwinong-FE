"use client";

import cn from "@/utils/cn";

interface BannerCardProps {
  color?: "primary3" | "primary4";
  title: string;
  description: string;
  icon?: React.ReactNode;
  moveTo: string;
}

const BannerCard = ({ color, title, description, icon }: BannerCardProps) => {
  const bgColorClass = color ? `bg-primary4` : "bg-primary3";
  return (
    <div className={cn(bgColorClass, "text-white", "p-[34px]")}>
      <h3 className="text-[32px]">{title}</h3>
      <h4 className="text-[20px]">{description}</h4>
      {icon}
    </div>
  );
};

export default BannerCard;
