import Container from "../ui/Container";

const Posts = () => {
  return (
    <>
      <h2 className="title1 mb-[50px]">작성 목록</h2>
      <div className="flex flex-col gap-[70px]">
        <Container title="작성한 글 목록" subTitle="작성한 글 내역" />
        <Container title="작성한 댓글 목록" subTitle="작성한 댓글 내역" />
      </div>
    </>
  );
};

export default Posts;
