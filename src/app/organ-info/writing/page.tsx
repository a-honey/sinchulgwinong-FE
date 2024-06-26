"use client";

import Editor from "@/components/Editor";
import { Input } from "@/components/ui/input";

const Writing = () => {
  return (
    <main className="flex flex-col gap-[40px] mt-[72px]">
      <h1 className="text-[36px]">기업 리뷰 작성하기</h1>
      <form className="flex flex-col gap-[20px]">
        <div className="flex items-center gap-[10px]">
          <label className="subTitle1 w-[45px]">별점</label>
          <Input />
        </div>
        <div className="flex items-center gap-[10px]">
          <label className="subTitle1 w-[45px]">제목</label>
          <Input />
        </div>
        <div className="flex gap-[10px] items-center h-[500px] mb-[50px]">
          <label className="subTitle1 w-[45px]">내용</label>
        </div>
        <div className="flex items-center gap-[10px]">
          <label className="subTitle1 w-[45px]">파일</label>
          <input type="file" />
        </div>
      </form>
    </main>
  );
};

export default Writing;
