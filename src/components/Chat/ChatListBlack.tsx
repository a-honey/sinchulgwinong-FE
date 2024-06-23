import Button from "../Button";
import ChatNoBackgroundObject from "@/assets/icons/ChatNoBackgroundObject";
import Link from "next/link";

const ChatListBlack = () => {
  return (
    <>
      <h2 className="title1 mb-[50px]">채팅</h2>
      <div className="flex flex-col min-h-[500px] gap-[20px] justify-center items-center">
        <ChatNoBackgroundObject />
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
