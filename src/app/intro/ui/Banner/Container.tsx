interface ContainerProps {
  textElement: React.ReactNode;
  children: React.ReactNode;
}

const Container = ({ children, textElement }: ContainerProps) => {
  return (
    <div className="w-[680px] p-[40px] shadow-lg border">
      {textElement}
      {children}
    </div>
  );
};

export default Container;
