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
    <div>
      <div>
        {beforeTitle}
        <span>{pointTitle}</span>
        {afterTitle}
      </div>
      {children}
    </div>
  );
};

export default Container;
