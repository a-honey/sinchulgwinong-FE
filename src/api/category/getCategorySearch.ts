import {
  JobPostType,
  PaginationProps,
  ResponseDTO,
  ResponseOffsetPagination,
} from "@/types";

import { CategoryType } from "@/app/job-info/JobTypeFilterBox";
import apiInstance from "../apiInstance";

interface PostsType extends ResponseOffsetPagination {
  totalJobBoardCount: number;
  jobBoardResponseDTOS: JobPostType[];
}

interface Props extends PaginationProps {
  category: CategoryType;
}
export default async function getCategorySearch({
  category,
  page,
  size,
}: Props) {
  try {
    const response = await apiInstance.post<ResponseDTO<PostsType>>(
      `/job-boards/job-category?page=${page}&size=${size}`,
      {
        majorCategoryName: category.category,
        minorCategoryName: category.subCategory,
      }
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
