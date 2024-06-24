"use client";

import Button from "@/components/Button";
import Container from "@/app/my-page/ui/Container";
import Link from "next/link";
import getMyJobInfo from "@/api/employer/getMyJobInfo";
import getMyProfile from "@/api/user/getMyProfile";
import { useCallback } from "react";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const Employ = () => {
  const { data: userData } = useUpdateFetch(getMyProfile);

  const { data } = useUpdateFetch(
    useCallback(() => getMyJobInfo(userData?.userId ?? 0), [userData])
  );

  if (!data) return;
  return (
    <>
      <h2 className="title1 mb-[50px]">작성 목록</h2>
      <Container title="작성한 채용 글 목록" subTitle="작성한 글 내역">
        {data.data.jobBoardResponseDTOS.map((job) => (
          <div key={job.jobBoardId}>{job.jobContent}</div>
        ))}
      </Container>
      <div className="flex flex-col">
        <div className="subTitle1">채용글 작성하기</div>
        <Link href="/employer/employ/writing">
          <Button
            text="채용글 작성하기"
            variants="yellow"
            className="subTitle1 w-full p-[20px]"
          />
        </Link>
      </div>
    </>
  );
};

export default Employ;
