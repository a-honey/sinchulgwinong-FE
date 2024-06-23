"use client";

import PointItem from "./PointItem";
import getSavedPointHistory from "@/api/user/getSavedPointHistory";
import getUsedPointHistory from "@/api/user/getUsedPointHistory";
import { useState } from "react";
import useUpdateFetch from "@/hooks/useUpdateFetch";

enum PointHistoryTypeEnum {
  Saved = "적립 내역",
  Used = "사용 내역",
}

const MyPointHistory = () => {
  const [pointHistoryType, setPointHistoryType] = useState(
    PointHistoryTypeEnum.Saved
  );

  return (
    <div className="flex flex-col items-end p-[40px] gap-[20px] border-[2px] border-[#E9E9E9] w-full">
      <div>
        <button
          onClick={() => {
            setPointHistoryType(PointHistoryTypeEnum.Saved);
          }}
        >
          {PointHistoryTypeEnum.Saved}
        </button>
        <button
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
  const { data } = useUpdateFetch(getSavedPointHistory);
  if (!data) return;

  return (
    <>
      {data.data.map((commentHistory) => (
        <PointItem
          key={commentHistory.createdAt}
          content={`${commentHistory.type} (+${commentHistory.savedPoint}p)`}
          date={commentHistory.createdAt}
        />
      ))}
    </>
  );
};

const UsedPointHistory = () => {
  const { data } = useUpdateFetch(getUsedPointHistory);
  if (!data) return;

  return (
    <>
      {data.data.map((commentHistory) => (
        <PointItem
          key={commentHistory.createdAt}
          content={`${commentHistory.type} (+${commentHistory.usedPoint}p)`}
          date={commentHistory.createdAt}
        />
      ))}
    </>
  );
};
