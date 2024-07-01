"use client";

import { useEffect, useRef } from "react";

import ChatObject from "@/assets/icons/ChatObject";
import { Client } from "@stomp/stompjs";
import { EmployeePaths } from "@/constants/paths";
import Link from "next/link";
import { domain } from "@/constants/env";
import useIsLogin from "@/hooks/useIsLogin";

const ChatFloat = () => {
  const clientRef = useRef<Client | null>(null);
  const { isLogin } = useIsLogin();

  useEffect(() => {
    if (isLogin) {
      clientRef.current = new Client({
        brokerURL: `wss://${domain}/ws/chat`,
        debug: (str) => {
          console.log(str);
        },
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      });

      const client = clientRef.current;

      client.onConnect = (frame) => {
        console.log("온커넥트");
        client.subscribe("/topic/chatrooms", (message) => {
          const notification = JSON.parse(message.body);
          console.log("받은 알림:", notification);
        });
      };

      client.onStompError = (frame) => {
        console.error("소켓 연결 에러:", frame.headers["message"], frame.body);
      };

      client.onWebSocketError = (event) => {
        console.error("소켓 에러:", event);
      };

      client.onDisconnect = (frame) => {
        console.log("소켓이 연결이 끊어졌습니다. 사유:", frame);
      };

      client.activate();
    }

    return () => {
      if (clientRef.current) {
        clientRef.current.deactivate();
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
