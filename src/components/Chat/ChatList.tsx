import ChatListItem from "./ChatListItem";
import { ChatRoomInfoType } from "@/api/chat/getChatRoomList";

const ChatList = ({
  list,
  currentRoomId,
  handleCurrentRoomId,
}: {
  list: ChatRoomInfoType[];
  currentRoomId: number;
  handleCurrentRoomId: (roomID: number) => void;
}) => {
  return (
    <div className="mt-[100px] w-[300px] flex flex-col border-r-[1px]">
      <h2 className="title1 mt-[100px]">채팅</h2>
      <div>
        {list.map((room) => (
          <div
            key={room.chatRoomId}
            onClick={() => {
              handleCurrentRoomId(room.chatRoomId);
            }}
          >
            <ChatListItem
              roomId={room.chatRoomId}
              currentRoomId={currentRoomId}
              userName={room.cpName}
              isRead={room.userRead}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
