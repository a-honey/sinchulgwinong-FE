import { cn } from "@/lib/utils";

interface RowProps {
  isFirst?: boolean;
  names: React.ReactNode[];
  onClick?: () => void;
}

export const Row = ({ isFirst = false, names, onClick }: RowProps) => {
  return (
    <tr onClick={onClick}>
      {names.map((name, index) => (
        <td
          key={index}
          className={cn(
            "text-center py-[20px]",
            !isFirst && "border-b-[1px] border-b-[#A2A2A2]"
          )}
        >
          {name}
        </td>
      ))}
    </tr>
  );
};
