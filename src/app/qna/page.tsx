import Link from "next/link";
import QuestionListBox from "./QuestionListBox";
import SearchForm from "@/components/SearchForm";

const THEAD = ["번호", "제목", "작성일", "조회"];
const QnA = () => {
  return (
    <main className="mt-[72px]">
      <h1 className="text-[36px]">FAQ</h1>
      <div className="flex gap-[20px]">
        <SearchForm>
          <SearchForm.Input />
        </SearchForm>
        <Link
          href="/community/writing"
          className="bg-primary2 px-[36px] py-[25px] text-[20px]"
        >
          게시글 등록
        </Link>
      </div>
      <QuestionListBox />
    </main>
  );
};

export default QnA;
