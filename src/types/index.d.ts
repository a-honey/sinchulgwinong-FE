export interface ResponseDTO<T> {
  message: string;
  data: T;
}
export interface CommunityPostType {
  userId: number;
  boardId: number;
  title: string;
  content: string;
  createdAt: Date;
  modifiedAt: Date;
}

export type LoginType = "EMAIL" | "USER" | "GOOGLE" | "NORMAL";

export interface ResponsePagination {
  currentPage: number;
  totalPages: number;
  pageSize: number;
}
