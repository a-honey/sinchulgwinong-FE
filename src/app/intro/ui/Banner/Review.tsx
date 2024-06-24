import Container from "./Container";
import ReviewBlack from "./ReviewBlank";
import { ReviewFee } from "@/constants/variables";
import getMyPoint from "@/api/user/getMyPoint";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const ReviewBox = () => {
  const { data } = useUpdateFetch(getMyPoint);
  if (!data) return <ReviewBlack />;

  return (
    <Container
      textElement={
        <h3 className="text-[32px] mb-[30px]">
          현재 쌓은{" "}
          <span className="text-[32px] font-semibold text-[#7C3B00]">
            포인트
          </span>
          로 리뷰 {Math.floor(data.totalSaved / ReviewFee)}개를 볼 수 있어요!
        </h3>
      }
    >
      <div className="grid grid-cols-3">
        <div className="flex flex-col items-center border-r">
          <div className="subTitle2">쌓인 포인트</div>
          <div className="subTitle1">{data?.totalSaved} P</div>
        </div>
        <div className="flex flex-col items-center border-r">
          <div className="subTitle2">볼 수 있는 리뷰 갯수</div>
          <div className="subTitle1">
            {Math.floor(data.totalSaved / ReviewFee)} 개
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="subTitle2">다음 리뷰까지</div>
          <div className="subTitle1">
            -{Math.floor(ReviewFee - (data.totalSaved % ReviewFee))} P
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ReviewBox;
