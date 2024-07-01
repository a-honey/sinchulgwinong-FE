"use client";

import getAddressSearch, { AddressType } from "@/api/category/getAddressSearch";
import { getFormattedDate, getJobInfoStatus } from "@/lib/utils";

import Badge from "@/components/Badge";
import Blank from "@/components/StatusComponents/Empty";
import { CategoryType } from "./JobTypeFilterBox";
import List from "../../components/List";
import getCategorySearch from "@/api/category/getCategorySearch";
import getJobInfoPosts from "@/api/job-info/getJobInfoPosts";
import { useCallback } from "react";
import usePagination from "@/hooks/usePagination";
import { useRouter } from "next/navigation";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const THEAD = ["지역", "모집제목", "급여", "모집종료일", ""];

const JobTypeListBox = ({ category }: { category: CategoryType }) => {
  const router = useRouter();
  const { currentPage, onPageChange } = usePagination();
  const { data } = useUpdateFetch(
    useCallback(
      () => getCategorySearch({ category, page: currentPage, size: 10 }),
      [currentPage, category]
    )
  );

  return (
    <List>
      <List.Header count={data?.totalJobBoardCount ?? 0} />
      <List.Table className="w-full">
        <List.Table.Head titles={THEAD} />
        {!data || data?.jobBoardResponseDTOS.length === 0 ? (
          <Blank />
        ) : (
          data.jobBoardResponseDTOS.map((row) => {
            const data = [
              `${row.address}`,
              `${row.jobTitle}`,
              <div
                key={row.jobBoardId}
                className="flex items-center justify-center gap-[10px]"
              >
                <Badge text={row.salaryType} />
                {row.salaryAmount}
              </div>,
              `${getFormattedDate(row.createdAt)}`,
              `${getJobInfoStatus(row.jobStatus)}`,
            ];
            return (
              <List.Table.Row
                key={row.jobBoardId}
                onClick={() => {
                  router.push(`/job-info/detail/?jobBoardId=${row.jobBoardId}`);
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
export default JobTypeListBox;
