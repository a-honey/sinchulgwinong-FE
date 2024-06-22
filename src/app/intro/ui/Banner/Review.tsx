import Container from "./Container";
import getMyPoint from "@/api/point/getMyPoint";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const ReviewBox = () => {
  const { isFetching, data: communityPosts } = useUpdateFetch(getMyPoint);

  return (
    <Container
      textElement={
        <h3 className="text-[32px]">
          현재 쌓은{" "}
          <span className="text-[32px] font-semibold text-[#7C3B00]">
            포인트
          </span>
          로 리뷰 3개를 볼 수 있어요!
        </h3>
      }
    >
      <div className="flex">
        <div>
          <div>쌓인 포인트</div>
          <div>200 P</div>
        </div>
        <div>
          <div>볼 수 있는 리뷰 갯수</div>
          <div>200 P</div>
        </div>
        <div>
          <div>다음 리뷰까지</div>
          <div>200 P</div>
        </div>
        <div>리뷰 지금 보러 가기</div>
      </div>
    </Container>
  );
};

export default ReviewBox;
