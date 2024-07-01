interface ContainerProps {
  description: string;
  titleElement: React.ReactNode;
  children: React.ReactNode;
}

const Container = ({ children, titleElement, description }: ContainerProps) => {
  return (
    <section className="relative flex flex-col p-[65px] gap-[30px]">
      <div>
        <div className="flex flex-col gap-[10px]">
          {titleElement}
          <div className="text-[20px]">{description}</div>
        </div>
        <div className="absolute top-[65px] right-[65px]"></div>
      </div>
      {children}
    </section>
  );
};

export default Container;
