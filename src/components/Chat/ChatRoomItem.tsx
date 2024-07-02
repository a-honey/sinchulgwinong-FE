import { cn } from "@/lib/utils";

interface ChatRoomItemProps {
  type?: "sender" | "receiver";

  content: string;
}

const ChatRoomItem = ({
  type = "receiver",

  content,
}: ChatRoomItemProps) => {
  const position = type === "receiver" ? "items-start" : "items-end";
  const backgroundColor = type === "receiver" ? "bg-[#FFE6A6]" : "bg-[#E9E9E9]";
  return (
    <div className={cn("flex flex-col", position)}>
      <div className={cn("detail1 p-[30px]", backgroundColor)}>{content}</div>
    </div>
  );
};

export default ChatRoomItem;
