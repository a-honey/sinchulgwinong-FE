"use client";

import Blank from "@/components/Blank";
import List from "../../components/List";
import { Suspense } from "react";
import getCommunityPosts from "@/api/community/getCommunityPosts";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const THEAD = ["번호", "제목", "작성자", "작성일", "조회"];
const ListBox = () => {
  const { data } = useUpdateFetch(getCommunityPosts);

  return (
    <Suspense fallback={<div>로딩중</div>}>
      <List>
        <List.Header count={data?.totalBoardCount ?? 0} />
        <List.Table className="w-full">
          <List.Table.Head titles={THEAD} />
          {(!data || data?.boards.length === 0) && <Blank />}
        </List.Table>
        <List.Footer
          onPageChange={() => {
            console.log("");
          }}
          currentPage={!data ? 1 : data.currentPage + 1}
          totalPages={!data ? 1 : data.totalPages + 1}
        />
      </List>
    </Suspense>
  );
};
export default ListBox;
