"use client";

import { useCallback, useState } from "react";

import ArrowIcon from "@/assets/icons/ArrowIcon";
import ChatRoomItem from "./ChatRoomItem";
import getChatRoomHistory from "@/api/chat/getChatRoomHistory";
import getMyEmployerInfo from "@/api/employer/getMyEmployerInfo";
import getMyProfile from "@/api/user/getMyProfile";
import useUpdateFetch from "@/hooks/useUpdateFetch";
import useWebSocket from "@/hooks/useWebSocket";

const ChatRoom = ({ roomId }: { roomId: number }) => {
  const { data: myData } = useUpdateFetch(getMyProfile);
  const { data: cpUserData } = useUpdateFetch(getMyEmployerInfo);

  const isUser = myData?.userId;

  const [message, setMessage] = useState("");
  const { data } = useUpdateFetch(
    useCallback(() => getChatRoomHistory(roomId), [roomId])
  );

  const { messages, sendMessage } = useWebSocket();

  return (
    <div className="flex flex-col gap-[20px] w-full pl-[40px]">
      <div className="flex gap-[5px] items-center">
        <ArrowIcon type="left" width={20} height={20} color="black" />
        <div className="title1">야옹이</div>
      </div>
      <div className="flex flex-col gap-[5px] min-h-[500px]">
        {data?.map((chat) => (
          <ChatRoomItem
            key={chat.chatMessageId}
            type={
              isUser && chat.sendUserType === "USER" ? "sender" : "receiver"
            }
            content={chat.content}
          />
        ))}
        {messages.map((chat, index) => (
          <ChatRoomItem
            key={index}
            type={
              isUser && chat.sendUserType === "USER" ? "sender" : "receiver"
            }
            content={chat.content}
          />
        ))}
      </div>
      <div className="flex">
        <input
          className="border w-full"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          className="bg-[#FFB600]"
          onClick={() => {
            sendMessage({
              cpUserId: cpUserData?.cpUserId ?? null,
              userId: myData?.userId ?? null,
              chatRoomId: roomId,
              content: message,
            });
            setMessage("");
          }}
        >
          보내기
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
