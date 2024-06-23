import Pagination from "@/components/Pagination";
import ReviewItem from "./ReviewItem";

const ReviewList = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex justify-between">
        <div className="subTitle1">리뷰 모아보기 | 전체 리뷰 통계(10명)</div>
        <button className="px-[25px] py-[15px] bg-primary2 rounded rounded-[5px]">
          리뷰 작성하기
        </button>
      </div>
      <div className="flex flex-col gap-[25px]">
        <ReviewItem />
        <ReviewItem />
      </div>
      <Pagination
        onPageChange={() => {
          console.log("45");
        }}
        currentPage={1}
        totalPages={1}
      />
    </div>
  );
};

export default ReviewList;
