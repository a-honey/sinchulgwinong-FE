"use client";

import Blank from "@/components/Blank";
import List from "../../components/List";
import usePagination from "@/hooks/usePagination";

const THEAD = ["지역", "기업명", "기업리뷰", "업종", "별점"];

const OrganInfo = () => {
  const { currentPage, onPageChange } = usePagination();
  return (
    <main className="mt-[72px]">
      <h1 className="text-[36px]">전체 기업 정보</h1>
      <List>
        <List.Header count={200} />
        <List.Table className="w-full">
          <List.Table.Head titles={THEAD} />
          <Blank />
        </List.Table>
        <List.Footer
          onPageChange={onPageChange}
          currentPage={1}
          totalPages={1}
        />
      </List>
    </main>
  );
};

export default OrganInfo;
