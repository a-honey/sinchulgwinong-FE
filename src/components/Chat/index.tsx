"use client";

import ChatList from "./ChatList";
import ChatListBlack from "./ChatListBlack";
import ChatRoom from "./ChatRoom";
import getChatRoomList from "@/api/chat/getChatRoomList";
import { useState } from "react";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const Chat = () => {
  const [currentRoomId, setCurrentRoomId] = useState(0);
  const [currentRoomName, setCurrentRoomName] = useState("");
  const { data } = useUpdateFetch(getChatRoomList);

  const handleCurrentRoomId = (roomId: number) => {
    setCurrentRoomId(roomId);
  };

  const handleCurrentRoomName = (roomName: string) => {
    setCurrentRoomName(roomName);
  };

  return (
    <div className="flex h-full">
      {currentRoomId === 0 && data && data.length > 0 && (
        <ChatList
          list={data}
          currentRoomId={currentRoomId}
          handleCurrentRoomId={handleCurrentRoomId}
          handleCurrentRoomName={handleCurrentRoomName}
        />
      )}
      {(!data || data.length === 0) && <ChatListBlack />}
      {currentRoomId !== 0 && (
        <ChatRoom
          roomId={currentRoomId}
          currentRoomName={currentRoomName}
          cancelCurrentRoomId={() => {
            handleCurrentRoomId(0);
            handleCurrentRoomName("");
          }}
        />
      )}
    </div>
  );
};

export default Chat;
