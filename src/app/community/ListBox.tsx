"use client";

import { Suspense, useCallback } from "react";

import Blank from "@/components/Blank";
import List from "../../components/List";
import getCommunityPosts from "@/api/community/getCommunityPosts";
import { getFormattedDate } from "@/lib/utils";
import usePagination from "@/hooks/usePagination";
import { useRouter } from "next/navigation";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const THEAD = ["번호", "제목", "작성자", "작성일"];
const ListBox = () => {
  const router = useRouter();

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
          {!data || data?.boards.length === 0 ? (
            <Blank />
          ) : (
            data.boards.map((row) => {
              const data = [
                `${row.boardId}`,
                `${row.title} (${row.commentCount})`,
                `${row.nickName}`,
                `${getFormattedDate(row.createdAt)}`,
              ];
              return (
                <List.Table.Row
                  key={row.boardId}
                  onClick={() => {
                    router.push(`/community/detail/?boardId=${row.boardId}`);
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
    </Suspense>
  );
};
export default ListBox;
