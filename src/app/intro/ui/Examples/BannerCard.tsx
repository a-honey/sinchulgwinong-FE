"use client";

import { cn } from "@/lib/utils";

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
    <div className={cn(bgColorClass, "text-white", "p-[34px]", "relative")}>
      <h3 className="point">{title}</h3>
      <h4 className="title1">{description}</h4>
      <div className="absolute bottom-[34px] right-[34px]">{icon}</div>
    </div>
  );
};

export default BannerCard;
