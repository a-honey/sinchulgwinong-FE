import { cn } from "@/lib/utils";

interface RowProps {
  isFirst?: boolean;
  names: React.ReactNode[];
}

export const Row = ({ isFirst = false, names }: RowProps) => {
  return (
    <tr>
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
