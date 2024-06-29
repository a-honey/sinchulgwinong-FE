"use client";

import { Socket, io } from "socket.io-client";
import { useEffect, useRef } from "react";

import ChatObject from "@/assets/icons/ChatObject";
import { EmployeePaths } from "@/constants/paths";
import Link from "next/link";
import { domain } from "@/constants/env";
import useIsLogin from "@/hooks/useIsLogin";

const ChatFloat = () => {
  const socketRef = useRef<Socket | null>(null);
  const { isLogin } = useIsLogin();

  useEffect(() => {
    if (isLogin) {
      socketRef.current = io(`wss://${domain}/`, {
        path: "/ws",
        transports: ["websocket"],
        withCredentials: true,
      });

      socketRef.current.on("connect", () => {
        console.log("소켓이 연결되었습니다.");
      });

      socketRef.current.on("connect_error", (error) => {
        console.log("소켓 연결 에러:", error);
      });

      socketRef.current.on("error", (error) => {
        console.log("소켓 에러:", error);
      });

      socketRef.current.on("disconnect", (reason) => {
        console.log("소켓이 연결이 끊어졌습니다. 사유:", reason);
      });
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [isLogin]);

  if (!isLogin) return null;

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
