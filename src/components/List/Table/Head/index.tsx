interface HeadProps {
  titles: string[];
}

export const Head = ({ titles }: HeadProps) => {
  return (
    <tr className="border-t-2 border-b-2 border-black">
      {titles.map((title, index) => (
        <th scope="col" key={index}>
          {title}
        </th>
      ))}
    </tr>
  );
};
