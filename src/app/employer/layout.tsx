import Nav from "./ui/Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="flex">
        <Nav />
        <section className="mt-[60px] p-[40px] w-full">{children}</section>
      </div>
    </main>
  );
};

export default Layout;
