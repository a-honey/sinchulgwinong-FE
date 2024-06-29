import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

export interface ChatRoomInfoType {
  chatRoomId: number;
  userId: number;
  cpUserId: number;
  userName: string;
  cpName: string;
  chatName: string;
  chatCheck: false;
}
export default async function getChatRoomList() {
  try {
    const response = await apiInstance.get<ResponseDTO<ChatRoomInfoType[]>>(
      `/chats/chat-rooms`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}