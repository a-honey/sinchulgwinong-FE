"use client";

import Blank from "@/components/Blank";
import List from "../../components/List";
import getJobInfoPosts from "@/api/job-info/getJobInfoPosts";
import { useCallback } from "react";
import usePagination from "@/hooks/usePagination";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const THEAD = ["지역", "모집제목/모집자명", "급여", "근무기간", "모집기간"];

const ListBox = () => {
  const { currentPage, onPageChange } = usePagination();
  const { data } = useUpdateFetch(
    useCallback(
      () => getJobInfoPosts({ page: currentPage, size: 10 }),
      [currentPage]
    )
  );

  return (
    <List>
      <List.Header count={200} />
      <List.Table className="w-full">
        <List.Table.Head titles={THEAD} />
        {(!data || data?.jobBoardResponseDTOS.length === 0) && <Blank />}
      </List.Table>
      <List.Footer
        onPageChange={onPageChange}
        currentPage={!data ? 1 : data.currentPage + 1}
        totalPages={!data ? 1 : data.totalPages + 1}
      />
    </List>
  );
};
export default ListBox;
