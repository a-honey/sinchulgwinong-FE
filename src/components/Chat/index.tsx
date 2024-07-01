"use client";

import ChatList from "./ChatList";
import ChatListBlack from "./ChatListBlack";
import ChatRoom from "./ChatRoom";
import getChatRoomList from "@/api/chat/getChatRoomList";
import { useState } from "react";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const Chat = () => {
  const [currentRoomId, setCurrentRoomId] = useState(0);
  const { data } = useUpdateFetch(getChatRoomList);

  const handleCurrentRoomId = (roomId: number) => {
    setCurrentRoomId(roomId);
  };

  return (
    <div className="flex h-full">
      {data && data.length > 0 ? (
        <ChatList
          list={data}
          currentRoomId={currentRoomId}
          handleCurrentRoomId={handleCurrentRoomId}
        />
      ) : (
        <h2 className="title1 w-[300px]">채팅</h2>
      )}
      {(!data || data.length === 0) && <ChatListBlack />}
      {currentRoomId !== 0 && <ChatRoom roomId={currentRoomId} />}
    </div>
  );
};

export default Chat;
