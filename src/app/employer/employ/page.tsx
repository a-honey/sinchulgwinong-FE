import Button from "@/components/Button";
import Container from "@/app/my-page/ui/Container";
import Link from "next/link";

const Employ = () => {
  return (
    <>
      <h2 className="title1 mb-[50px]">작성 목록</h2>
      <Container title="작성한 채용 글 목록" subTitle="작성한 글 내역" />
      <div className="flex flex-col">
        <div className="subTitle1">채용글 작성하기</div>
        <Link href="/employer/employ/writing">
          <Button
            text="채용글 작성하기"
            varients="yellow"
            className="subTitle1 w-full p-[20px]"
          />
        </Link>
      </div>
    </>
  );
};

export default Employ;
