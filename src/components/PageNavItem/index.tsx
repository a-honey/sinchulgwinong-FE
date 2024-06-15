import Item from "./Item";
import Label from "./Label";

const PageNavItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-[273px] flex flex-col gap-[25px]">{children}</div>;
};

export default PageNavItem;

PageNavItem.Label = Label;
PageNavItem.Item = Item;
