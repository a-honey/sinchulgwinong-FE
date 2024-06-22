import Button from "@/components/Button";
import Container from "./Container";
import Link from "next/link";

const ReviewBlack = () => {
  return (
    <Container
      textElement={
        <h3 className="text-[32px]">
          “로그인하여 현재 쌓인{" "}
          <span className="text-[32px] font-semibold text-[#7C3B00]">
            포인트
          </span>
          를<br />
          확인하세요!“
        </h3>
      }
    >
      <div className="flex justify-center">
        <Link href="/auth/sign-in">
          <button className="mt-[55px] px-[50px] py-[20px] bg-primary3 text-white rounded-[10px]">
            로그인하러가기
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default ReviewBlack;
