interface HeaderProps {
  count: number;
}

export const Header = ({ count }: HeaderProps) => {
  return (
    <div className="flex justify-between">
      <div>총 {count} 개</div>
      <div>select</div>
    </div>
  );
};
