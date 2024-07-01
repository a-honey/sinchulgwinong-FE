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
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = (message: string) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(message));
    } else {
      console.error("WebSocket not connected");
    }
  };

  return { messages, sendMessage };
};

export default useWebSocket;
