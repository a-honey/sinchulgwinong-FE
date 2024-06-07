"use client";

import List from "../_components/List";
import { useState } from "react";

const THEAD = ["지역", "모집제목/모집자명", "급여", "근무기간", "모집기간"];

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
        <List>
          <List.Header count={200} />
          <List.Table className="w-full">
            <List.Table.Head titles={THEAD} />
            <List.Table.Row
              names={[
                "충북 단양군",
                "사과 과수원 인력 구합니다.",
                "일급 100,000원",
                "24.05.26",
                "24.05.20 ~ 24.05.26",
              ]}
            />
            <List.Table.Row
              names={[
                "충북 단양군",
                "사과 과수원 인력 구합니다.",
                "일급 100,000원",
                "24.05.26",
                "24.05.20 ~ 24.05.26",
              ]}
            />
            <List.Table.Row
              names={[
                "충북 단양군",
                "사과 과수원 인력 구합니다.",
                "일급 100,000원",
                "24.05.26",
                "24.05.20 ~ 24.05.26",
              ]}
            />
          </List.Table>
          <List.Footer />
        </List>
      </div>
    </main>
  );
};

export default JobInfo;
