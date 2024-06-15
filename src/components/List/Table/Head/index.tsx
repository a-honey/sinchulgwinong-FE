interface HeadProps {
  titles: string[];
}

export const Head = ({ titles }: HeadProps) => {
  return (
    <tr className=" border-t-[1px] border-t-black border-b-[1px] border-b-[#A2A2A2]">
      {titles.map((title, index) => (
        <th scope="col" key={index} className="title2 py-[30px]">
          {title}
        </th>
      ))}
    </tr>
  );
};
