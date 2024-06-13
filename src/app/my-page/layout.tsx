import Nav from "./ui/Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mt-[72px]">
      <h1 className="text-[36px]">마이페이지</h1>
      <div className="flex">
        <Nav />
        {children}
      </div>
    </main>
  );
};

export default Layout;
