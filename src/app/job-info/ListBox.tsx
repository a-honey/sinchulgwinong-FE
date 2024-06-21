"use client";

import List from "../../components/List";
import getJobInfoPosts from "@/api/job-info/getJobInfoPosts";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const THEAD = ["지역", "모집제목/모집자명", "급여", "근무기간", "모집기간"];

const ListBox = () => {
  const { isFetching, data: communityPosts } = useUpdateFetch(getJobInfoPosts);

  console.log(communityPosts);

  return (
    <List>
      <List.Header count={200} />
      <List.Table className="w-full">
        <List.Table.Head titles={THEAD} />
        <List.Table.Row
          names={[
            "충북 단양군",
            "사과 과수원 인력 구합니다.",
            "일급 100,000원",
            "24.05.26",
            "24.05.20 ~ 24.05.26",
          ]}
        />
        <List.Table.Row
          names={[
            "충북 단양군",
            "사과 과수원 인력 구합니다.",
            "일급 100,000원",
            "24.05.26",
            "24.05.20 ~ 24.05.26",
          ]}
        />
        <List.Table.Row
          names={[
            "충북 단양군",
            "사과 과수원 인력 구합니다.",
            "일급 100,000원",
            "24.05.26",
            "24.05.20 ~ 24.05.26",
          ]}
        />
      </List.Table>
      <List.Footer />
    </List>
  );
};
export default ListBox;
