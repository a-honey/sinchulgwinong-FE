import { cn } from "@/lib/utils";
import getJobCategory from "@/api/category/getJobCategory";
import getJobSubCategory from "@/api/category/getJobSubCategory";
import { useCallback } from "react";
import useUpdateFetch from "@/hooks/useUpdateFetch";

export interface CategoryType {
  category: string;
  subCategory: string;
}

const JobTypeFilterBox = ({
  category,
  setCategory,
}: {
  category: CategoryType;
  setCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
}) => {
  const { data: categoryNames } = useUpdateFetch(getJobCategory);
  console.log(category.category);
  console.log(category.category);
  return (
    <div className="border">
      <div className="flex border-t border-b bg-[#F4F4F4]">
        <div className="w-[200px] subTitle2 flex justify-center border-r p-[30px]">
          분류
        </div>
        <div className="flex-grow subTitle2 flex justify-center border-r p-[30px]">
          업직종
        </div>
      </div>
      <div className="flex">
        <div className="w-[200px] flex flex-col h-[400px] overflow-y-auto">
          {categoryNames?.map((name) => (
            <div
              key={name}
              onClick={() => {
                setCategory((prev) => ({ ...prev, category: name }));
              }}
              className={cn(
                "subTitle2 flex justify-center border-r p-[30px]",
                category.category === name && "bg-primary3"
              )}
            >
              {name}
            </div>
          ))}
        </div>
        <div className="flex-grow items-center grid grid-rows-[50px]-[50px]-[50px] grid-cols-2 overflow-y-auto">
          {category.category && (
            <SubCategoryBox category={category} setCategory={setCategory} />
          )}
        </div>
      </div>
      <div className="flex justify-left p-[30px] border-t gap-[20px]">
        {Object.entries(category).map(
          ([key, value]) =>
            value && (
              <div
                key={key}
                className="flex justify-between min-w-[110px] bg-[#ECECEC] py-[5px] px-[10px] rounded-[3px] border"
              >
                <div>{value}</div>
                <div
                  onClick={() => {
                    setCategory((prev) => ({
                      ...prev,
                      [key]: "",
                    }));
                  }}
                >
                  X
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default JobTypeFilterBox;

const SubCategoryBox = ({
  category,
  setCategory,
}: {
  category: CategoryType;
  setCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
}) => {
  const { data: subCategoryNames } = useUpdateFetch(
    useCallback(() => getJobSubCategory(category.category), [category])
  );
  return (
    <>
      {subCategoryNames?.map((name) => (
        <div
          key={name}
          className={cn(
            "w-[323px] h-[50px] subTitle2 flex justify-center p-[30px]",
            category.subCategory === name && "bg-primary3"
          )}
          onClick={() => {
            setCategory((prev) => ({ ...prev, subCategory: name }));
          }}
        >
          {name}
        </div>
      ))}
    </>
  );
};
