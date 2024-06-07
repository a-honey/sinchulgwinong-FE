import { Head } from "./Head";
import { Row } from "./Row";

interface TableProps {
  className?: string;
  children: React.ReactNode;
}

export const Table = ({ className, children }: TableProps) => {
  return (
    <table className={className}>
      <tbody>{children}</tbody>
    </table>
  );
};

Table.Head = Head;
Table.Row = Row;
