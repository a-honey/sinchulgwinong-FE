import Image from "next/image";

interface ContentBoxProps {
  imgURL?: string;
  content: string;
}
const ContentBox = ({ content, imgURL }: ContentBoxProps) => {
  return (
    <section className="flex flex-col gap-[20px]">
      <div className="subTitle1">모집글</div>
      <div className="flex flex-col border p-[20px]">
        {imgURL && (
          <Image src={imgURL} alt="게시글 이미지" width={100} height={200} />
        )}
        <div>{content}</div>
      </div>
    </section>
  );
};

export default ContentBox;
