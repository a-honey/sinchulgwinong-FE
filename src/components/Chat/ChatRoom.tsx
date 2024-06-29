import ArrowIcon from "@/assets/icons/ArrowIcon";
import ChatRoomItem from "./ChatRoomItem";
import getChatRoomHistory from "@/api/chat/getChatRoomHistory";
import { useCallback } from "react";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const ChatRoom = ({ roomId }: { roomId: number }) => {
  const { data } = useUpdateFetch(
    useCallback(() => getChatRoomHistory(roomId), [roomId])
  );
  return (
    <div className="flex flex-col gap-[20px] w-full pl-[40px]">
      <div className="flex gap-[5px] items-center">
        <ArrowIcon type="left" width={20} height={20} color="black" />
        <div className="title1">야옹이</div>
      </div>
      <div>
        {data?.map((chat) => (
          <ChatRoomItem
            key={chat.chatMessageId}
            type="sender"
            content={chat.message}
            name="나"
          />
        ))}
      </div>
      <div className="flex">
        <input className="border w-full" />
        <button className="bg-[#FFB600]">보내기</button>
      </div>
    </div>
  );
};

export default ChatRoom;
