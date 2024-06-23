"use client";

import List from "@/components/List";
import getEmployerInfo from "@/api/employer/getEmployerInfo";
import { useCallback } from "react";
import useUpdateFetch from "@/hooks/useUpdateFetch";

interface EmployerBoxProps {
  employeeId: number;
}

const THEAD = ["기업명", "채용 담당자", "연락처", "이메일"];

const EmployerBox = ({ employeeId }: EmployerBoxProps) => {
  const { data } = useUpdateFetch(
    useCallback(() => getEmployerInfo(employeeId), [employeeId])
  );

  const viewModel = [
    data?.cpName,
    data?.cpUserId,
    data?.cpPhoneNumber,
    data?.cpEmail,
  ];

  return (
    <section className="flex flex-col gap-[20px]">
      <div className="subTitle1">채용 담당자</div>
      <div className="grid grid-cols-4">
        {THEAD.map((title) => (
          <div
            className="flex justify-center subTitle1 py-[25px] bg-[#F4F4F4]"
            key={title}
          >
            {title}
          </div>
        ))}
        {viewModel?.map((content) => (
          <div
            className="flex justify-center subTitle1 py-[25px]"
            key={content}
          >
            {content}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmployerBox;
