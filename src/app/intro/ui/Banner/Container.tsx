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
    <div className="w-[680px] p-[40px] shadow-lg border">
      <h3 className="flex text-[36px]">
        {beforeTitle}
        <span className="text-[#7C3B00]">{pointTitle}</span>
        {afterTitle}
      </h3>
      {children}
    </div>
  );
};

export default Container;
