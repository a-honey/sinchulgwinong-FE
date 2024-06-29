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
    <div className="flex">
      {data ? (
        <ChatList
          list={data}
          currentRoomId={currentRoomId}
          handleCurrentRoomId={handleCurrentRoomId}
        />
      ) : (
        <ChatListBlack />
      )}
      {currentRoomId && <ChatRoom roomId={currentRoomId} />}
    </div>
  );
};

export default Chat;
