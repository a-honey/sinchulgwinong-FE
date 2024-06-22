"use client";

import Editor from "@/components/Editor";
import { Input } from "@/components/ui/input";

const Writing = () => {
  return (
    <>
      <h2 className="title1 mb-[50px]">채용 글 작성</h2>
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[20px]">
          <div className="subTitle1">내 기업 정보</div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="subTitle1">모집 내용</div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="subTitle1">모집 글 작성</div>
          <div className="flex flex-col gap-[20px]">
            <div>
              <Input />
            </div>
            <Editor />
          </div>
        </div>
      </div>
    </>
  );
};

export default Writing;
