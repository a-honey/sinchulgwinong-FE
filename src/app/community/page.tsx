"use client";

import Link from "next/link";
import ListBox from "./ListBox";
import SearchForm from "../../components/SearchForm";
import usePagination from "@/hooks/usePagination";
import { useState } from "react";

const Community = () => {
  const { currentPage, onPageChange } = usePagination();
  const [keyword, setKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const clearKeyword = () => {
    setKeyword("");
  };

  const handleSearchSubmit = () => {
    onPageChange(0);
    setSearchKeyword(keyword);
  };

  return (
    <main className="mt-[72px]">
      <h1 className="text-[36px]">커뮤니티</h1>
      <div className="flex gap-[20px]">
        <SearchForm onClick={handleSearchSubmit}>
          <SearchForm.Input
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
        </SearchForm>
        <Link
          href="/community/writing"
          className="w-[200px] subTitle1 bg-primary2 px-[36px] py-[25px] text-[20px] rounded-[5px]"
        >
          게시글 등록
        </Link>
      </div>
      <ListBox
        currentPage={currentPage}
        onPageChange={onPageChange}
        keyword={searchKeyword ?? undefined}
        clearKeyword={clearKeyword}
      />
    </main>
  );
};

export default Community;
