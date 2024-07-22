"use client";

import ChatListItem from "./ChatListItem";
import { ChatRoomInfoType } from "@/api/chat/getChatRoomList";
import getMyProfile from "@/api/user/getMyProfile";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const ChatList = ({
  list,
  currentRoomId,
  handleCurrentRoomId,
  handleCurrentRoomName,
}: {
  list: ChatRoomInfoType[];
  currentRoomId: number;
  handleCurrentRoomId: (roomID: number) => void;
  handleCurrentRoomName: (roomName: string) => void;
}) => {
  const { data: myData } = useUpdateFetch(getMyProfile);

  const isUser = myData?.userId;
  return (
    <div className="mt-[100px] w-full flex flex-col">
      <h2 className="title1 mt-[100px]">채팅</h2>
      <div>
        {list.map((room) => (
          <div
            className="border-b-[1px]"
            key={room.chatRoomId}
            onClick={() => {
              handleCurrentRoomId(room.chatRoomId);
              handleCurrentRoomName(isUser ? room.cpName : room.userName);
            }}
          >
            <ChatListItem
              content={room.lastContent}
              roomId={room.chatRoomId}
              currentRoomId={currentRoomId}
              userName={room.userName}
              cpUserName={room.cpName}
              isRead={room.userRead}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
