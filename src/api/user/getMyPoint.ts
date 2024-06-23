import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

interface MyPointType {
  totalSaved: number;
  totalUsed: number;
}

export default async function getMyPoint() {
  try {
    const response = await apiInstance.get<ResponseDTO<MyPointType>>(`/points`);

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
