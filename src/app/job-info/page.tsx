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
            <div className="flex justify-center rounded-[10px] w-[200px] border px-[15px] py-[10px]">
              지역
            </div>
            <div className="flex justify-center rounded-[10px] w-[200px] border px-[15px] py-[10px]">
              업종
            </div>
            <div className="flex justify-center rounded-[10px] w-[200px] border px-[15px] py-[10px]">
              상세 조건
            </div>
          </div>
          <div className="border">
            <div className="grid grid-cols-3 border-t border-b bg-[#F4F4F4]">
              <div className="subTitle2 flex justify-center border-r p-[30px]">
                시.도
              </div>
              <div className="subTitle2 flex justify-center border-r p-[30px]">
                시구군
              </div>
              <div className="subTitle2 flex justify-center border-r p-[30px]">
                동읍면
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="flex flex-col">
                <div className="subTitle2 flex justify-center border-r p-[30px]">
                  서울
                </div>
                <div className="subTitle2 flex justify-center border-r p-[30px]">
                  서울
                </div>
                <div className="subTitle2 flex justify-center border-r p-[30px]">
                  서울
                </div>
              </div>
              <div className="flex flex-col">
                <div className="subTitle2 flex justify-center border-r p-[30px]">
                  서울전체
                </div>
                <div className="subTitle2 flex justify-center border-r p-[30px]">
                  강남구
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="subTitle2 flex justify-center p-[30px]">
                  세곡동
                </div>
                <div className="subTitle2 flex justify-center p-[30px]">
                  세곡동
                </div>
                <div className="subTitle2 flex justify-center p-[30px]">
                  세곡동
                </div>
                <div className="subTitle2 flex justify-center p-[30px]">
                  세곡동
                </div>
              </div>
            </div>
            <div className="flex justify-left p-[30px] border-t">
              <div className="flex justify-between min-w-[110px] bg-[#ECECEC] py-[5px] px-[10px] rounded-[3px] border">
                <div>태그</div>
                <div>X</div>
              </div>
            </div>
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
