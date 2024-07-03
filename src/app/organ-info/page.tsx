"use client";

import { OrganSortEnum, OrganSortType } from "@/api/organ";
import {
  transformRatingToStar,
  transformRoundToTwoDecimalPlaces,
} from "@/lib/transformUtils";
import { useCallback, useState } from "react";

import Blank from "@/components/StatusComponents/Empty";
import List from "../../components/List";
import getOrgans from "@/api/organ/getOrgans";
import usePagination from "@/hooks/usePagination";
import { useRouter } from "next/navigation";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const THEAD = ["번호", "기업명", "기업리뷰", "별점"];
const SIZE = 10;
const Options = [
  OrganSortEnum.CreatedAtDesc,
  OrganSortEnum.JobPostingsDesc,
  OrganSortEnum.ViewsDesc,
  OrganSortEnum.ScrapsDesc,
  OrganSortEnum.CreatedAtDesc,
];

const OrganInfo = () => {
  const router = useRouter();

  const { currentPage, onPageChange } = usePagination();
  const [sort, setSort] = useState<OrganSortType>(
    OrganSortEnum.CreatedAtDesc.value
  );

  const { data } = useUpdateFetch(
    useCallback(
      () => getOrgans({ page: currentPage, size: SIZE, sort }),
      [currentPage, sort]
    )
  );

  const onSortChange = (value: OrganSortType) => {
    setSort(value);
  };

  return (
    <main className="mt-[72px]">
      <h1 className="text-[36px]">전체 기업 정보</h1>
      <List>
        <List.Header<OrganSortType>
          count={data?.totalCpUserCount ?? 0}
          options={Options}
          onSortChange={onSortChange}
        />
        <List.Table className="w-full">
          <List.Table.Head titles={THEAD} />
          {!data || data?.cpUsers.length === 0 ? (
            <Blank />
          ) : (
            data.cpUsers.map((organ, index) => {
              const data = [
                `${currentPage * SIZE + index + 1}`,
                `${organ.cpName}`,
                `${organ.reviewCount} 개`,
                `${transformRatingToStar(
                  organ.averageRating ?? 0
                )}(${transformRoundToTwoDecimalPlaces(
                  organ.averageRating ?? 0
                )} 점)`,
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
