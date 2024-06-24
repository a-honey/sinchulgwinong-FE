"use client";

import Blank from "@/components/Blank";
import List from "../../components/List";
import getOrgans from "@/api/organ/getOrgans";
import { useCallback } from "react";
import usePagination from "@/hooks/usePagination";
import { useRouter } from "next/navigation";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const THEAD = ["기업명", "기업리뷰", "별점"];

const OrganInfo = () => {
  const router = useRouter();
  const { currentPage, onPageChange } = usePagination();
  const { data } = useUpdateFetch(
    useCallback(() => getOrgans({ page: currentPage, size: 10 }), [currentPage])
  );
  
  return (
    <main className="mt-[72px]">
      <h1 className="text-[36px]">전체 기업 정보</h1>
      <List>
        <List.Header count={data?.totalCpUserCount ?? 0} />
        <List.Table className="w-full">
          <List.Table.Head titles={THEAD} />
          {!data || data?.cpUsers.length === 0 ? (
            <Blank />
          ) : (
            data.cpUsers.map((organ) => {
              const data = [
                `${organ.cpName}`,
                `${organ.reviewCount} 개`,
                `${organ.averageRating} 점`,
              ];
              return (
                <List.Table.Row
                  key={organ.cpUserId}
                  onClick={() => {
                    router.push(
                      `/organ-info/detail/?organId=${organ.cpUserId}`
                    );
                  }}
                  names={data}
                />
              );
            })
          )}
        </List.Table>
        <List.Footer
          onPageChange={onPageChange}
          currentPage={currentPage + 1}
          totalPages={data?.totalPages ?? 1}
        />
      </List>
    </main>
  );
};

export default OrganInfo;
