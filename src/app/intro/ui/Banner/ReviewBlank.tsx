import Container from "./Container";
import Link from "next/link";

const ReviewBlack = () => {
  return (
    <Container
      beforeTitle="로그인하여 현재 쌓인"
      pointTitle="포인트"
      afterTitle="를 확인하세요!"
    >
      <Link href="/auth/sign-in">로그인하러가기</Link>
    </Container>
  );
};

export default ReviewBlack;
