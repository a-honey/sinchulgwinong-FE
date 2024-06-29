import { CommunityPostType, ResponseDTO } from "@/types";

import apiInstance from "../apiInstance";

interface EmployerType {
  cpUserId: 1;
  cpName: "고양이탕후루";
  cpEmail: "rihic26977@exeneli.com";
  cpPhoneNumber: "01012345678";
  cpUsername: "김고양이";
  hiringStatus: true;
  employeeCount: 10;
  foundationDate: "1999-10-06";
  description: "고양이는 세상을 움직이는 혁신입니다.";
  cpNum: "1234567890";
  averageRating: null;
  reviewCount: null;
}

export default async function getEmployerInfo(employerId: number) {
  try {
    const response = await apiInstance.get<ResponseDTO<EmployerType>>(
      `/cpUsers/${employerId}/details`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
