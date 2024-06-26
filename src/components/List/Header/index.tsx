interface HeaderProps {
  count: number;
}

export const Header = ({ count }: HeaderProps) => {
  return (
    <div className="relative w-full h-[80px]">
      <div className="absolute bottom-[10px] detail1 text-gray3">
        총 {count} 개
      </div>
      <div className="absolute right-0 bottom-[20px] flex gap-[20px]">
        <div>
          <input type="checkbox" />
          <label>접수중</label>
        </div>
        <select>
          <option value="서울특별시">최신순</option>
          <option value="서울특별시">최신순</option>
        </select>
      </div>
    </div>
  );
};
