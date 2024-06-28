import ChatObject from "@/assets/icons/ChatObject";
import { EmployeePaths } from "@/constants/paths";
import Link from "next/link";

const ChatFloat = () => {
  return (
    <Link
      href={EmployeePaths.CHAT}
      className="z-[9999] fixed right-[100px] bottom-[40px]"
    >
      <ChatObject width={97.5} height={96.85} />
    </Link>
  );
};

export default ChatFloat;
