"use client";

import { useState } from "react";

const JobInfo = () => {
  const [isFilter, setIsFilter] = useState(true);
  return (
    <main>
      <div className="flex justify-between mt-[72px]">
        <h1 className="text-[36px]">전체 농촌 일거리</h1>
        <div>
          <button>상세</button>
          <button>지도</button>
        </div>
      </div>
      {isFilter ? (
        <div className="flex flex-col gap-[15px]">
          <div className="flex gap-[20px]">
            <div>필터</div>
            <div>필터</div>
            <div>필터</div>
          </div>
          <div className="border">
            <div className="bg-gray1">
              <input />
            </div>
            <div className="bg-gray1">테이블</div>
            <div className="bg-gray1">태그</div>
          </div>
        </div>
      ) : (
        <div>지도</div>
      )}
      <div className="flex flex-col">
        <div>총 200개</div>
      </div>
    </main>
  );
};

export default JobInfo;
