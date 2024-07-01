"use client";

import Blank from "@/components/StatusComponents/Empty";
import Button from "@/components/Button";
import Container from "@/app/my-page/ui/Container";
import Link from "next/link";
import getMyEmployerInfo from "@/api/employer/getMyEmployerInfo";
import getMyJobInfoPosts from "@/api/employer/getMyJobInfoPosts";
import { useCallback } from "react";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const Employ = () => {
  const { data: userData } = useUpdateFetch(getMyEmployerInfo);

  const { data } = useUpdateFetch(
    useCallback(() => getMyJobInfoPosts(userData?.cpUserId ?? 0), [userData])
  );

  return (
    <>
      <h2 className="title1 mb-[50px]">작성 목록</h2>
      <Container title="작성한 채용 글 목록" subTitle="작성한 글내역">
        {data?.data.jobBoardResponseDTOS.length === 0 && <Blank />}
        <div className="flex flex-col gap-[5px]">
          {data?.data.jobBoardResponseDTOS.map((job) => (
            <div key={job.jobBoardId}>
              {job.jobContent}{" "}
              <span className="text-gray2">{job.createdAt}</span>
            </div>
          ))}
        </div>
      </Container>
      <div className="flex flex-col gap-[20px] mt-[40px]">
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
