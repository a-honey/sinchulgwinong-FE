"use client";

import Filter from "./Filter";
import FilterListBox from "./FilterListBox";
import JobTypeFilterBox from "./JobTypeFilterBox";
import ListBox from "./ListBox";
import Map from "../../components/Map";
import { useState } from "react";

const JobInfo = () => {
  const [filterType, setFilterType] = useState<"region" | "job">("region");
  const [address, setAddress] = useState({ city: "", district: "", dong: "" });
  const [category, setCategory] = useState({ category: "", subCategory: "" });
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
            <div
              className="flex justify-center rounded-[10px] w-[200px] border px-[15px] py-[10px]"
              onClick={() => {
                setFilterType("region");
              }}
            >
              지역
            </div>
            <div
              className="flex justify-center rounded-[10px] w-[200px] border px-[15px] py-[10px]"
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
        ) : (
          <ListBox />
        )}
      </div>
    </main>
  );
};

export default JobInfo;
