"use client";

import Blank from "@/components/Blank";
import Link from "next/link";
import List from "../../components/List";
import getJobInfoPosts from "@/api/job-info/getJobInfoPosts";
import { useCallback } from "react";
import usePagination from "@/hooks/usePagination";
import { useRouter } from "next/navigation";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const THEAD = ["지역", "모집제목/모집자명", "급여", "근무기간", "모집기간"];

const ListBox = () => {
  const router = useRouter();
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
        {!data || data?.jobBoardResponseDTOS.length === 0 ? (
          <Blank />
        ) : (
          data.jobBoardResponseDTOS.map((row) => {
            const data = [
              `${row.address}`,
              row.jobTitle,
              `${row.salaryAmount}`,
              `${row.createdAt}`,
            ];
            return (
              <List.Table.Row
                key={row.jobBoardId}
                onClick={() => {
                  router.push(`/job-info/detail/${row.jobBoardId}`);
                }}
                names={data}
              />
            );
          })
        )}
      </List.Table>
      <List.Footer
        onPageChange={onPageChange}
        currentPage={!data ? 1 : data.currentPage + 1}
        totalPages={!data ? 1 : data.totalPages}
      />
    </List>
  );
};
export default ListBox;
