interface HeaderProps<T = string> {
  count: number;
  options?: { label: string; value: T }[];
  onSortChange?: (value: T) => void;
}

export const Header = <T,>({
  count,
  options,
  onSortChange,
}: HeaderProps<T>) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange?.(event.target.value as T);
  };

  return (
    <div className="relative w-full h-[80px]">
      <div className="absolute bottom-[10px] detail1 text-gray3">
        총 {count} 개
      </div>
      <div className="absolute right-0 bottom-[20px] flex gap-[20px]">
        <select
          defaultValue={(options?.[0]?.value as unknown as string) ?? ""}
          onChange={handleSelectChange}
        >
          {!options && <option value="">최신순</option>}
          {options?.map(({ label, value }) => (
            <option
              key={value as unknown as string}
              value={value as unknown as string}
            >
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
