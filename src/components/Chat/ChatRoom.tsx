import ArrowIcon from "@/assets/icons/ArrowIcon";
import ChatRoomItem from "./ChatRoomItem";

const ChatRoom = () => {
  return (
    <div className="flex flex-col gap-[20px] w-full pl-[40px]">
      <div className="flex gap-[5px] items-center">
        <ArrowIcon type="left" width={20} height={20} color="black" />
        <div className="title1">야옹이</div>
      </div>
      <div>
        <ChatRoomItem type="sender" content="하이하이" name="나" />
        <ChatRoomItem type="receiver" content="일하고 싶어요~" name="애용이" />
        <ChatRoomItem type="receiver" content="일하고 싶어요~" name="애용이" />
        <ChatRoomItem type="receiver" content="일하고 싶어요~" name="애용이" />
        <ChatRoomItem type="sender" content="하이하이" name="나" />
      </div>
      <div className="flex">
        <input className="border w-full" />
        <button className="bg-[#FFB600]">보내기</button>
      </div>
    </div>
  );
};

export default ChatRoom;
