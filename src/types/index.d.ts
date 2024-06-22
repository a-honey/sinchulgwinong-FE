export interface ResponseDTO<T> {
  message: string;
  data: T;
}
export interface ResponsePagination {
  currentPage: number;
  totalPages: number;
  pageSize: number;
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
}

export interface JobPostType {
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
  accessUrls: ["string"];
  createdAt: "2024-06-22T05:42:57.745Z";
  modifiedAt: "2024-06-22T05:42:57.745Z";
}
