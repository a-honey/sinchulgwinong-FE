"use client";

import ListBox from "./ListBox";
import Map from "../../components/Map";
import { useState } from "react";

const JobInfo = () => {
  const [mode, setMode] = useState<"filter" | "map">("filter");

  return (
    <main>
      <div className="flex justify-between mt-[72px]">
        <h1 className="text-[36px]">전체 농촌 일거리</h1>
        <div>
          <button
            onClick={() => {
              setMode("filter");
            }}
          >
            상세
          </button>
          <button
            onClick={() => {
              setMode("map");
            }}
          >
            지도
          </button>
        </div>
      </div>
      {mode === "filter" && (
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
      )}
      {mode === "map" && <Map />}
      <div className="flex flex-col">
        <ListBox />
      </div>
    </main>
  );
};

export default JobInfo;
