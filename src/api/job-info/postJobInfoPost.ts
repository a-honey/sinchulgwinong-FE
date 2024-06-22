import apiInstance from "../apiInstance";

export interface PostBody {
  images: ["string"];
  request: {
    jobTitle: string;
    jobContent: string;
    jobEndDate: "2024-06-22";
    salaryAmount: 0;
    sex: string;
    address: string;
    salaryType: "DAILY";
  };
}

export default async function postCommunityPost(body: PostBody) {
  try {
    const response = await apiInstance.post(`/job-boards`, body);

    return response;
  } catch (e) {
    console.log(e);
  }
}
