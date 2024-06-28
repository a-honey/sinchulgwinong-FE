export interface ResponseDTO<T> {
  message: string;
  data: T;
}
export interface ResponseOffsetPagination {
  currentPage: number;
  totalPages: number;
  pageSize: number;
}

export interface ResponseCursorPagination<T> {
  data: T[];
  hasNextPage: boolean;
}
export interface PaginationProps {
  page: number;
  size: number;
}

export type LoginType = "EMAIL" | "USER" | "GOOGLE" | "NORMAL";

export type SalaryType = "DAILY" | "WEEKLY" | "MONTHLY" | "YEAR";

export type JobStatusType = "JOBOPEN" | "JOBCLOSED";

export interface CommunityPostType {
  userId: number;
  boardId: number;
  title: string;
  content: string;
  createdAt: Date;
  modifiedAt: Date;
  nickName: string;
  commentCount: number;
}

export interface JobPostType {
  cpName: string;
  jobBoardId: number;
  cpUserId: number;
  jobTitle: "string";
  jobContent: "string";
  jobStartDate: "2024-06-22";
  jobEndDate: "2024-06-22";
  salaryAmount: number;
  sex: "string";
  address: "string";
  jobStatus: JobStatusType;
  salaryType: SalaryType;
  accessUrls: string[];
  createdAt: "2024-06-22T05:42:57.745Z";
  modifiedAt: "2024-06-22T05:42:57.745Z";
}

export interface CommentType {
  commentId: number;
  userId: number;
  nickName: string;
  boardId: number;
  commentContent: string;
  createdAt: "2024-06-23T05:25:28.151Z";
  modifiedAt: "2024-06-23T05:25:28.151Z";
}

export interface OrganInfoType {
  cpUserId: 1;
  cpName: "고양이탕후루";
  cpEmail: "xixixo5344@lisoren.com";
  cpPhoneNumber: "01012345678";
  cpUsername: "김고양이";
  hiringStatus: true;
  employeeCount: 10;
  foundationDate: "1999-10-06";
  description: "고양이는 세상을 움직이는 혁신입니다.";
  cpNum: "1oYvE2NbRKqsre7wjP7fiWGDFheaKt2N";
  averageRating: null;
  reviewCount: null;
}

export interface ReviewType {
  reviewId: number;
  reviewTitle: "친절한 사장님!";
  reviewContent: "사장님이 맛있고 사과가 친절해요.";
  rating: number;
  visibility: "PRIVATE";
}
