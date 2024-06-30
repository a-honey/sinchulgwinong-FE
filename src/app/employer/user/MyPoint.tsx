"use client";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import MyPointHistory from "@/app/my-page/user/MyPointHistory";
import Overlay from "@/components/Overlay";
import getMyEmployerInfo from "@/api/employer/getMyEmployerInfo";
import getMyJobInfoPosts from "@/api/employer/getMyJobInfoPosts";
import getMyPoint from "@/api/user/getMyPoint";
import postJobBoardBannerAd from "@/api/employer/postJobBoardBannerAd";
import { useCallback } from "react";
import useToggle from "@/hooks/useToggle";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const MyPoint = () => {
  const { data } = useUpdateFetch(getMyPoint);
  const { isOpen, changeIsOpenTrue, changeIsOpenFalse } = useToggle();

  const { data: cpUserIdData } = useUpdateFetch(getMyEmployerInfo);
  const { data: jobBoardIdData } = useUpdateFetch(
    useCallback(
      () => getMyJobInfoPosts(cpUserIdData?.cpUserId!),
      [cpUserIdData]
    )
  );

  const onClickAdConfirm = () => {
    try {
      if (jobBoardIdData?.data.jobBoardResponseDTOS[0].jobBoardId) {
        postJobBoardBannerAd(
          jobBoardIdData.data.jobBoardResponseDTOS[0].jobBoardId
        );
      }
    } finally {
      changeIsOpenFalse();
    }
  };
  return (
    <>
      {isOpen && (
        <Overlay>
          <Modal closeModal={onClickAdConfirm}>
            <div>3000p로 가장 최신 채용글을 홍보하시겠습니까?</div>
          </Modal>
        </Overlay>
      )}
      <div className="flex flex-col gap-[20px]">
        <div className="flex justify-between">
          <div className="subTitle1">내 포인트 현황</div>
          <Button
            className="detail1 w-[200px]"
            variants="yellow"
            text="기업 홍보하기"
            onClick={changeIsOpenTrue}
          />
        </div>
        <div className="flex gap-[10px] w-full">
          <div className="grid grid-rows-2 border-[2px] border-[#E9E9E9] w-[250px]">
            <div className="flex flex-col gap-[20px] p-[16px]">
              <div className="subTitle1">적립된 포인트</div>
              <div className="title1 text-primary3">{data?.totalSaved} p</div>
            </div>
            <div className="flex flex-col border-t-[1px] border-[#E9E9E9] gap-[20px] p-[16px]">
              <div className="subTitle1">적립된 포인트</div>
              <div className="title1 text-[#5D5D5D]">{data?.totalUsed} p</div>
            </div>
          </div>
          <MyPointHistory />
        </div>
      </div>
    </>
  );
};

export default MyPoint;
