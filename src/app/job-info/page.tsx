"use client";

import Filter from "./Filter";
import FilterListBox from "./FilterListBox";
import JobTypeFilterBox from "./JobTypeFilterBox";
import JobTypeListBox from "./JobTypeListBox";
import ListBox from "./ListBox";
import Map from "../../components/Map";
import { cn } from "@/lib/utils";
import { useState } from "react";

const JobInfo = () => {
  const [filterType, setFilterType] = useState<"region" | "job">("region");
  const [address, setAddress] = useState({ city: "", district: "", dong: "" });
  const [category, setCategory] = useState({ category: "", subCategory: "" });
  const [mode, setMode] = useState<"filter" | "map">("filter");

  return (
    <main className="px-[70px]">
      <div className="flex justify-between items-center mt-[72px] mb-[52px]">
        <h1 className="text-[36px]">전체 농촌 일거리</h1>
        <div className="flex gap-[2px] items-center">
          <button
            className={cn(
              "detail2 border py-[10px] px-[23px] rounded-[5px]",
              mode === "filter" && "border-[#909090]"
            )}
            onClick={() => {
              setMode("filter");
            }}
          >
            상세
          </button>
          <button
            className={cn(
              "detail2 border py-[10px] px-[23px] rounded-[5px]",
              mode === "map" && "border-[#909090]"
            )}
            onClick={() => {
              setMode("map");
            }}
          >
            지도
          </button>
        </div>
      </div>
      {mode === "filter" && (
        <div className="flex flex-col gap-[40px]">
          <div className="flex gap-[20px]">
            <div
              className={cn(
                "flex justify-center rounded-[10px] w-[200px] border px-[15px] py-[10px]",
                filterType === "region" && "border-[#565656] border-[2px]"
              )}
              onClick={() => {
                setFilterType("region");
              }}
            >
              지역
            </div>
            <div
              className={cn(
                "flex justify-center rounded-[10px] w-[200px] border px-[15px] py-[10px]",
                filterType === "job" && "border-[#565656] border-[2px]"
              )}
              onClick={() => {
                setFilterType("job");
              }}
            >
              업종
            </div>
          </div>
          {filterType === "job" ? (
            <JobTypeFilterBox category={category} setCategory={setCategory} />
          ) : (
            <Filter address={address} setAddress={setAddress} />
          )}
        </div>
      )}
      {mode === "map" && <Map />}
      <div className="flex flex-col">
        {filterType === "region" && address.dong ? (
          <FilterListBox address={address} />
        ) : filterType === "job" && category.subCategory ? (
          <JobTypeListBox category={category} />
        ) : (
          <ListBox />
        )}
      </div>
    </main>
  );
};

export default JobInfo;
