import escapeHtml from "@/lib/escapeHTML";

interface Props {
  htmlContent: string;
}

const HtmlRenderer = ({ htmlContent }: Props) => {
  const escapedHtml = escapeHtml(htmlContent);

  return (
    <div
      className="html-renderer"
      dangerouslySetInnerHTML={{ __html: escapeHtml }}
    />
  );
};

export default HtmlRenderer;
