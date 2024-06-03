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
    <section>
      <div>
        <div>
          <div>
            <div>{beforeTitle}</div>
            <div>{pointTitle}</div>
            <div>{afterTitle}</div>
          </div>
          <div>{description}</div>
        </div>
        <div>슬라이더</div>
      </div>
      {children}
    </section>
  );
};

export default Container;
