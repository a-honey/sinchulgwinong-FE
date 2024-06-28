import Button from "@/components/Button";
import Container from "./Container";
import Image from "next/image";
import communityIcon from "@/assets/images/community.png";

const Job = () => {
  return (
    <Container
      className="flex flex-col justify-between bg-primary2"
      textElement={
        <h3 className="text-[32px]">
          “원하는{" "}
          <span className="text-[32px] font-semibold text-[#7C3B00]">
            농촌 일자리
          </span>
          를 공유해요!“
        </h3>
      }
    >
      <div className="flex items-end justify-between gap-[70px]">
        <Button className="bg-white" text="커뮤니티 바로가기>" />
        <Image
          src={communityIcon}
          alt="커뮤니티 아이콘"
          width={162}
          height={125}
        />
      </div>
    </Container>
  );
};

export default Job;
