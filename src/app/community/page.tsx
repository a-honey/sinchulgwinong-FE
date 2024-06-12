import Link from "next/link";
import List from "../_components/List";
import SearchForm from "../_components/SearchForm";

const THEAD = ["번호", "제목", "작성자", "작성일", "조회"];

const Community = () => {
  return (
    <main className="mt-[72px]">
      <h1 className="text-[36px]">커뮤니티</h1>
      <div className="flex gap-[20px]">
        <SearchForm />
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
              "과수원 사장님 어떠신가요?",
              "뽀송이",
              "24.05.28",
              "30",
            ]}
          />
          <List.Table.Row
            names={[
              "10",
              "과수원 사장님 어떠신가요?",
              "뽀송이",
              "24.05.28",
              "30",
            ]}
          />
          <List.Table.Row
            names={[
              "10",
              "과수원 사장님 어떠신가요?",
              "뽀송이",
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

export default Community;
