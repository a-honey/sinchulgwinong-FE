import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

export interface ChatContentType {
  chatMessageId: 10;
  chatRoomId: 1;
  cpUserId: number | null;
  userId: number | null;
  message: string;
  sendUserType: string;
  createAt: "2024-06-29T21:41:08.619056";
}

export default async function getChatRoomHistory(chatRoomId: number) {
  try {
    const response = await apiInstance.get<ResponseDTO<ChatContentType[]>>(
      `/chats/chat-room/${chatRoomId}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
