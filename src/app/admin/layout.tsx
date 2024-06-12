import Nav from "./_UI/Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <Nav />
      {children}
    </main>
  );
};

export default Layout;
