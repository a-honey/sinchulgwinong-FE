"use client";

import { useCallback, useState } from "react";

import PointItem from "./PointItem";
import getSavedPointHistory from "@/api/user/getSavedPointHistory";
import getUsedPointHistory from "@/api/user/getUsedPointHistory";
import useIntersectObserver from "@/hooks/useIntersectionObserver";
import usePagination from "@/hooks/usePagination";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const SIZE = 6;

enum PointHistoryTypeEnum {
  Saved = "적립 내역",
  Used = "사용 내역",
}

const MyPointHistory = () => {
  const [pointHistoryType, setPointHistoryType] = useState(
    PointHistoryTypeEnum.Saved
  );

  return (
    <div className="flex flex-col p-[40px] gap-[20px] border-[2px] border-[#E9E9E9] w-full">
      <div className="flex gap-[20px]">
        <button
          className={
            pointHistoryType === PointHistoryTypeEnum.Saved
              ? "text-[#000000]"
              : "text-gray3"
          }
          onClick={() => {
            setPointHistoryType(PointHistoryTypeEnum.Saved);
          }}
        >
          {PointHistoryTypeEnum.Saved}
        </button>
        <button
          className={
            pointHistoryType === PointHistoryTypeEnum.Used
              ? "text-[#000000]"
              : "text-gray3"
          }
          onClick={() => {
            setPointHistoryType(PointHistoryTypeEnum.Used);
          }}
        >
          {PointHistoryTypeEnum.Used}
        </button>
      </div>
      {pointHistoryType === PointHistoryTypeEnum.Saved ? (
        <SavedPointHistory />
      ) : (
        <UsedPointHistory />
      )}
    </div>
  );
};

export default MyPointHistory;

const SavedPointHistory = () => {
  const { currentPage, onPageChange } = usePagination();
  const { data } = useUpdateFetch(
    useCallback(
      () => getSavedPointHistory({ cursorId: currentPage, limit: SIZE }),
      [currentPage]
    )
  );

  const { ref } = useIntersectObserver<HTMLDivElement>({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
    onIntersect: ([entry]) => {
      if (entry.isIntersecting && data?.hasNextPage) {
        onPageChange(currentPage + SIZE);
      }
    },
  });

  return (
    <>
      {data?.data.map((commentHistory, index) => (
        <PointItem
          key={commentHistory.createdAt}
          isFirst={index === 0}
          content={`${commentHistory.type} (+${commentHistory.savedPoint}p)`}
          date={commentHistory.createdAt}
        />
      ))}
      {data?.hasNextPage && <div ref={ref} />}
    </>
  );
};

const UsedPointHistory = () => {
  const { currentPage, onPageChange } = usePagination();
  const { data } = useUpdateFetch(
    useCallback(
      () => getUsedPointHistory({ cursorId: currentPage, limit: SIZE }),
      [currentPage]
    )
  );

  const { ref } = useIntersectObserver<HTMLDivElement>({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
    onIntersect: ([entry]) => {
      if (entry.isIntersecting && data?.hasNextPage) {
        onPageChange(currentPage + SIZE);
      }
    },
  });
  if (!data) return;

  return (
    <>
      {data.data.map((commentHistory, index) => (
        <PointItem
          key={commentHistory.createdAt}
          isFirst={index === 0}
          content={`${commentHistory.type} (+${commentHistory.usedPoint}p)`}
          date={commentHistory.createdAt}
        />
      ))}
      {data.hasNextPage && <div ref={ref} />}
    </>
  );
};
