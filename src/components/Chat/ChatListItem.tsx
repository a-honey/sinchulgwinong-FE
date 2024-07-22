"use client";

import { cn } from "@/lib/utils";
import getMyEmployerInfo from "@/api/employer/getMyEmployerInfo";
import getMyProfile from "@/api/user/getMyProfile";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const ChatListItem = ({
  roomId,
  userName,
  cpUserName,
  currentRoomId,
  isRead,
  content,
}: {
  roomId: number;
  currentRoomId: number;
  userName: string;
  isRead: boolean;
  cpUserName: string;
  content: string;
}) => {
  const { data: myData } = useUpdateFetch(getMyProfile);

  const isUser = myData?.userId;
  return (
    <div
      className={cn(
        "relative flex flex-col gap-[10px] pr-[20px] py-[30px] w-[255px]",
        currentRoomId === roomId && "bg-[#efefef]"
      )}
    >
      <div className="flex justify-between">
        <div className="subTitle1">{isUser ? cpUserName : userName}</div>
      </div>
      <div className="detail1 text-gray3">{content}</div>
      {!isRead && (
        <div className="absolute right-[30px] bottom-[20px] text-primary4">
          N
        </div>
      )}
    </div>
  );
};

export default ChatListItem;
