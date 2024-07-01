import { ChatRoomInfoType } from "@/api/chat/getChatRoomList";
import { cn } from "@/lib/utils";

const ChatListItem = ({
  roomId,
  userName,
  currentRoomId,
  isRead,
}: {
  roomId: number;
  currentRoomId: number;
  userName: string;
  isRead: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-[10px] pr-[20px] py-[30px] w-[255px]",
        currentRoomId === roomId && "bg-[#efefef]"
      )}
    >
      <div className="flex justify-between">
        <div className="subTitle1">{userName}</div>
        <div className="detail2 text-gray3">오후 08:12</div>
      </div>
      <div className="detail1 text-gray3">구인 글 보고 연략드렸</div>
      {!isRead && (
        <div className="absolute right-[30px] bottom-[20px] text-primary4">
          N
        </div>
      )}
    </div>
  );
};

export default ChatListItem;
