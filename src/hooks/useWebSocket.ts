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

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = (message: MessageType) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(message));
    } else {
      console.error("WebSocket not connected");
    }
  };

  return { messages, sendMessage };
};

export default useWebSocket;
