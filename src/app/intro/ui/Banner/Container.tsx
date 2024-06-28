import { cn } from "@/lib/utils";

interface ContainerProps {
  textElement: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Container = ({ className, children, textElement }: ContainerProps) => {
  return (
    <div className={cn("w-[680px] p-[40px] shadow-lg border", className)}>
      {textElement}
      {children}
    </div>
  );
};

export default Container;
