import Link from "next/link";

const Community = () => {
  return (
    <main className="mt-[72px]">
      <h1 className="text-[36px]">커뮤니티</h1>
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
    </main>
  );
};

export default Community;
