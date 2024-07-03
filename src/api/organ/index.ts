import { LabelValue } from "@/types";

export type OrganSortType =
  | "reviewsDesc"
  | "jobPostingsDesc"
  | "viewsDesc"
  | "scrapsDesc"
  | "createdAtDesc";

export interface OrganSortEnumType {
  ReviewsDesc: LabelValue<OrganSortType>;
  JobPostingsDesc: LabelValue<OrganSortType>;
  ViewsDesc: LabelValue<OrganSortType>;
  ScrapsDesc: LabelValue<OrganSortType>;
  CreatedAtDesc: LabelValue<OrganSortType>;
}

export const OrganSortEnum: OrganSortEnumType = {
  ReviewsDesc: { label: "리뷰많은순", value: "reviewsDesc" },
  JobPostingsDesc: { label: "구인글많은순", value: "jobPostingsDesc" },
  ViewsDesc: { label: "조회수높은순", value: "viewsDesc" },
  ScrapsDesc: { label: "스크랩많은순", value: "scrapsDesc" },
  CreatedAtDesc: { label: "최근게시글", value: "createdAtDesc" },
};
