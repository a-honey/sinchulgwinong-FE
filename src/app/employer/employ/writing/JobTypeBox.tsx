"use client";

import { UseFormRegisterReturn, UseFormWatch } from "react-hook-form";
import { useCallback, useState } from "react";

import { Payload } from "@/api/job-info/postJobInfoPost";
import getJobCategory from "@/api/category/getJobCategory";
import getJobSubCategory from "@/api/category/getJobSubCategory";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const JobTypeBox = ({
  watch,
  categoryRegister,
  subCategoryRegister,
}: {
  watch: UseFormWatch<Payload>;
  categoryRegister: UseFormRegisterReturn;
  subCategoryRegister: UseFormRegisterReturn;
}) => {
  const category = watch("majorCategoryName");

  const { data: categoryNames } = useUpdateFetch(getJobCategory);
  return (
    <div className="flex">
      <label className="w-[80px] subTitle2 text-[#2D2D2D]">업무 내용</label>
      <div className="flex">
        <select defaultValue="농업" {...categoryRegister}>
          <option value="">업종</option>
          {categoryNames?.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>

        <SubJobCategoryBox
          category={category}
          subCategoryRegister={subCategoryRegister}
        />
      </div>
    </div>
  );
};

export default JobTypeBox;

const SubJobCategoryBox = ({
  category,
  subCategoryRegister,
}: {
  category: string;
  subCategoryRegister: UseFormRegisterReturn;
}) => {
  const { data: subCategoryNames } = useUpdateFetch(
    useCallback(() => getJobSubCategory(category), [category])
  );
  return (
    <select
      defaultValue="식량작물 재배 (벼, 밀, 옥수수 등)"
      {...subCategoryRegister}
    >
      <option value="">상세</option>
      {subCategoryNames?.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};
