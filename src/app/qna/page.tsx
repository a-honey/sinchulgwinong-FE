import Link from "next/link";
import List from "../../components/List";

const THEAD = ["번호", "제목", "작성일", "조회"];
const QnA = () => {
  return (
    <main className="mt-[72px]">
      <h1 className="text-[36px]">FAQ</h1>
      <div className="flex gap-[20px]">
        <div className="w-full">
          <input className="border " />
          <button className="bg-primary3">검색</button>
        </div>
        <Link
          href="/community/writing"
          className="bg-primary2 px-[36px] py-[25px] text-[20px]"
        >
          게시글 등록
        </Link>
      </div>
      <List>
        <List.Header count={200} />
        <List.Table className="w-full">
          <List.Table.Head titles={THEAD} />
          <List.Table.Row
            names={[
              "10",
              "기업 리뷰는 한 기업 당 하나만 작성할 수 있나요?",
              "24.05.28",
              "30",
            ]}
          />
          <List.Table.Row
            names={[
              "10",
              "기업 리뷰는 한 기업 당 하나만 작성할 수 있나요?",
              "24.05.28",
              "30",
            ]}
          />
          <List.Table.Row
            names={[
              "10",
              "기업 리뷰는 한 기업 당 하나만 작성할 수 있나요?",
              "24.05.28",
              "30",
            ]}
          />
          <List.Table.Row
            names={[
              "10",
              "기업 리뷰는 한 기업 당 하나만 작성할 수 있나요?",
              "24.05.28",
              "30",
            ]}
          />
        </List.Table>
        <List.Footer />
      </List>
    </main>
  );
};

export default QnA;
