import Link from "next/link";
import ListBox from "./ListBox";
import SearchForm from "../../components/SearchForm";

const Community = () => {
  return (
    <main className="mt-[72px]">
      <h1 className="text-[36px]">커뮤니티</h1>
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
      <ListBox />
    </main>
  );
};

export default Community;
