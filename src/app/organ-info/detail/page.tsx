"use client";

import ReviewList from "./ReviewList";

const DetailOrgan = () => {
  return (
    <main className="mt-[72px] flex flex-col gap-[60px]">
      <div className="flex flex-col gap-[20px]">
        <div className="flex justify-between">
          <h1 className="text-[36px]">기업 정보 상세 보기</h1>
          <div>수정</div>
        </div>
        <div className="flex flex-col gap-[15px] p-[40px] border">
          <div className="title1">성희네 사과 농장</div>
          <div className="subTitle1">기본 정보</div>
          <div className="bg-[#F4F4F4] p-[20px]">
            <div>기업명|</div>
            <div>대표자명|</div>
          </div>
        </div>
      </div>
      <ReviewList />
    </main>
  );
};

export default DetailOrgan;
