"use client";

import { Suspense, useCallback } from "react";

import Blank from "@/components/Blank";
import List from "../../components/List";
import getCommunityPosts from "@/api/community/getCommunityPosts";
import usePagination from "@/hooks/usePagination";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const THEAD = ["번호", "제목", "작성자", "작성일", "조회"];
const ListBox = () => {
  const { currentPage, onPageChange } = usePagination();
  const { data } = useUpdateFetch(
    useCallback(
      () => getCommunityPosts({ page: currentPage, size: 10 }),
      [currentPage]
    )
  );

  return (
    <Suspense fallback={<div>로딩중</div>}>
      <List>
        <List.Header count={data?.totalBoardCount ?? 0} />
        <List.Table className="w-full">
          <List.Table.Head titles={THEAD} />
          {(!data || data?.boards.length === 0) && <Blank />}
        </List.Table>
        <List.Footer
          onPageChange={onPageChange}
          currentPage={!data ? 1 : data.currentPage + 1}
          totalPages={!data ? 1 : data.totalPages + 1}
        />
      </List>
    </Suspense>
  );
};
export default ListBox;
