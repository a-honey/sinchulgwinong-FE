import { useEffect, useState } from "react";

import { domain } from "@/constants/env";

export interface MessageType {
  cpUserId: null | number;
  userId: null | number;
  chatRoomId: number;
  content: string;
}
const url = `wss://${domain}/ws/chat`;

const useWebSocket = () => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      try {
        const message: MessageType = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, message]);
      } catch (error) {
        console.error("Error parsing message", error);
      }
    };

    socket.onclose = (event) => {
      console.log("onClose", event);
      if (event.wasClean) {
        console.log(
          `WebSocket connection closed cleanly, code=${event.code}, reason=${event.reason}`
        );
      } else {
        console.error(
          `WebSocket connection died, code=${event.code}, reason=${event.reason}`
        );
      }
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = (message: MessageType) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      console.log("전송한 메시지", message);
      ws.send(JSON.stringify(message));
      console.log("전송성공");
    } else {
      console.error("WebSocket not connected");
    }
  };

  return { messages, sendMessage };
};

export default useWebSocket;
