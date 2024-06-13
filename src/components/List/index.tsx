import { Footer } from "./Footer";
import { Header } from "./Header";
import { Table } from "./Table";

interface ListProps {
  children: React.ReactNode;
}

const List = ({ children }: ListProps) => {
  return <section>{children}</section>;
};

List.Table = Table;
List.Header = Header;
List.Footer = Footer;

export default List;
