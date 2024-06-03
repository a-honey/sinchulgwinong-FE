interface ContainerProps {
  beforeTitle: string;
  pointTitle: string;
  afterTitle: string;
  description: string;
  children: React.ReactNode;
}

const Container = ({
  children,
  description,
  beforeTitle,
  pointTitle,
  afterTitle,
}: ContainerProps) => {
  return (
    <section className="relative flex flex-col items-center p-[65px]">
      <div>
        <div>
          <div className="flex">
            <div>{beforeTitle}</div>
            <div>{pointTitle}</div>
            <div>{afterTitle}</div>
          </div>
          <div>{description}</div>
        </div>
        <div className="absolute top-[65px] right-[65px]">슬라이더</div>
      </div>
      {children}
    </section>
  );
};

export default Container;
