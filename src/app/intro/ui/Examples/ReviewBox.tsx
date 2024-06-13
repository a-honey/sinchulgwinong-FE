import BannerCard from "./BannerCard";
import Container from "./Container";
import Paths from "@/constants/paths";
import ReviewCard from "./ReviewCard";
import WritingObject from "@/assets/icons/WritingObject";

const ReviewBox = () => {
  return (
    <Container
      beforeTitle="주변"
      pointTitle="최신 리뷰"
      afterTitle="를 확인하세요!"
      description="리뷰 확인하고 일 시작하세요"
    >
      <div className="grid grid-cols-1-1-2 h-[362px] w-full gap-[25px]">
        <BannerCard
          moveTo=""
          title="리뷰 확인"
          description="기업 리뷰를 확인하세요"
        />
        <BannerCard
          moveTo={Paths.QNA}
          color="primary4"
          title="리뷰 작성"
          description="리뷰 작성하고 포인트 받아가세요~"
          icon={<WritingObject width={85} height={83.02} />}
        />
        <ReviewCard />
      </div>
    </Container>
  );
};

export default ReviewBox;
