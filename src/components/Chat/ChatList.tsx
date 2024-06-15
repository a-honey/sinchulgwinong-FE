import ChatListItem from "./ChatListItem";

const ChatList = () => {
  return (
    <div className="mt-[-100px] flex flex-col border-r-[1px]">
      <h2 className="title1 mt-[100px]">채팅</h2>
      <div>
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </div>
    </div>
  );
};

export default ChatList;
