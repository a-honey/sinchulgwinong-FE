interface ResponseDTO<T> {
  message: string;
  data: T;
}
interface CommunityPost {
  userId: number;
  boardId: number;
  title: string;
  content: string;
  createdAt: Date;
  modifiedAt: Date;
}

export type LoginType = "EMAIL" | "USER" | "GOOGLE";
