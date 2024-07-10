import { Suspense, lazy } from "react";

import Button from "../Button";
import Link from "next/link";

const ChatNoBackgroundObject = lazy(
  () => import("@/assets/icons/ChatNoBackgroundObject")
);

const ChatListBlack = () => {
  return (
    <>
      <div className="flex flex-col min-h-[500px] gap-[20px] justify-center items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <ChatNoBackgroundObject width={111.93} height={82} />
        </Suspense>
        <div className="flex flex-col justify-center items-center">
          <div className="title2 text-[#343434]">채팅을 시작해보세요!</div>
          <div className="title2 text-gray3">
            채팅은 채용 상세 페이지에서 채팅을 시작할 수 있습니다.
          </div>
        </div>
        <Link href="/job-info">
          <Button
            text="채용 정보 보러가기 >"
            variants="yellow"
            className="p-[20px]"
          />
        </Link>
      </div>
    </>
  );
};

export default ChatListBlack;
