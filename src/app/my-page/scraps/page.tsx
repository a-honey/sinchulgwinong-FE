import Container from "../ui/Container";

const Scraps = () => {
  return (
    <>
      <h2 className="title1 mb-[50px]">스크랩</h2>
      <div className="flex flex-col gap-[70px]">
        <Container title="채용 정보 스크랩" subTitle="스크랩 내역" />
        <Container title="기업 정보 스크랩" subTitle="스크랩 내역" />
        <Container title="게시글 스크랩" subTitle="스크랩 내역" />
      </div>
    </>
  );
};

export default Scraps;
