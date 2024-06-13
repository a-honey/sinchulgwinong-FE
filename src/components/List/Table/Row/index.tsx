interface RowProps {
  names: string[];
}

export const Row = ({ names }: RowProps) => {
  return (
    <tr>
      {names.map((name, index) => (
        <td key={index} className="text-center py-[10px]">
          {name}
        </td>
      ))}
    </tr>
  );
};
