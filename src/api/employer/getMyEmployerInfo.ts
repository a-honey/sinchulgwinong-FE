import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

export interface EmployerType {
  cpUserId: number;
  cpName: string;
  cpEmail: string;
  cpPhoneNumber: string;
  cpUsername: string;
  hiringStatus: true;
  employeeCount: number;
  foundationDate: "1999-10-06";
  description: string;
  cpNum: string;
  averageRating: number | null;
  reviewCount: number | null;
}

export default async function getMyEmployerInfo() {
  try {
    const response = await apiInstance.get<ResponseDTO<EmployerType>>(
      `/cpUsers/profile`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
