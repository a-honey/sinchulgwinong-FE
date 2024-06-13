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
    <section className="relative flex flex-col p-[65px] gap-[70px]">
      <div>
        <div>
          <div className="flex text-[36px]">
            <div>{beforeTitle}</div>
            <div>{pointTitle}</div>
            <div>{afterTitle}</div>
          </div>
          <div className="text-[20px]">{description}</div>
        </div>
        <div className="absolute top-[65px] right-[65px]">슬라이더</div>
      </div>
      {children}
    </section>
  );
};

export default Container;
