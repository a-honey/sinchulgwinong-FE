import ChatList from "./ChatList";
import ChatListBlack from "./ChatListBlack";
import ChatRoom from "./ChatRoom";

const Chat = () => {
  const isChat = true;
  return (
    <div className="flex">
      {isChat ? <ChatList /> : <ChatListBlack />}
      <ChatRoom />
    </div>
  );
};

export default Chat;
