interface ContainerProps {
  beforeTitle: string;
  pointTitle: string;
  afterTitle: string;
  children: React.ReactNode;
}

const Container = ({
  children,
  beforeTitle,
  pointTitle,
  afterTitle,
}: ContainerProps) => {
  return (
    <div className="p-[40px]">
      <h3 className="flex">
        {beforeTitle}
        <span className="text-[#7C3B00]">{pointTitle}</span>
        {afterTitle}
      </h3>
      {children}
    </div>
  );
};

export default Container;
