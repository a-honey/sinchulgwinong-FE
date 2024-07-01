import apiInstance from "../apiInstance";

export default async function postChatRoom(employerId: number) {
  try {
    const response = await apiInstance.post(
      `/chats/cp-user/${employerId}`,
      " body"
    );

    return response;
  } catch (e) {
    console.log(e);
  }
}
