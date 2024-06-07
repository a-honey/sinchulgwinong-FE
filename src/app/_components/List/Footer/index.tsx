interface FooterProps {
  count?: number;
}

export const Footer = ({ count }: FooterProps) => {
  return (
    <div className="flex justify-center">
      <div>페이지네이션</div>
    </div>
  );
};
