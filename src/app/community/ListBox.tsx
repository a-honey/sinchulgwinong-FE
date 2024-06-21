"use client";

import { Suspense, useEffect } from "react";

import List from "../../components/List";
import getCommunityPosts from "@/api/community/getCommunityPosts";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const THEAD = ["번호", "제목", "작성자", "작성일", "조회"];
const ListBox = () => {
  const { isFetching, data: communityPosts } =
    useUpdateFetch(getCommunityPosts);

  console.log(communityPosts);

  return (
    <Suspense fallback={<div>로딩중</div>}>
      <List>
        <List.Header count={200} />
        <List.Table className="w-full">
          <List.Table.Head titles={THEAD} />
          <List.Table.Row
            names={[
              "10",
              "과수원 사장님 어떠신가요?",
              "뽀송이",
              "24.05.28",
              "30",
            ]}
          />
          <List.Table.Row
            names={[
              "10",
              "과수원 사장님 어떠신가요?",
              "뽀송이",
              "24.05.28",
              "30",
            ]}
          />
          <List.Table.Row
            names={[
              "10",
              "과수원 사장님 어떠신가요?",
              "뽀송이",
              "24.05.28",
              "30",
            ]}
          />
        </List.Table>
        <List.Footer />
      </List>
    </Suspense>
  );
};
export default ListBox;
