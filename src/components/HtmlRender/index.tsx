interface Props {
  htmlContent: string;
}

const HtmlRenderer = ({ htmlContent }: Props) => {
  return (
    <div
      className="html-renderer"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default HtmlRenderer;
