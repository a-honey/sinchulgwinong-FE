import { EmployerPaths } from "@/constants/paths";
import Link from "next/link";
import NavChat from "@/assets/icons/NavChat";
import NavScrap from "@/assets/icons/NavScrap";
import NavUser from "@/assets/icons/NavUser";
import NavWriting from "@/assets/icons/NavWriting";
import PageNavItem from "@/components/PageNavItem";

const Nav = () => {
  return (
    <div className="h-screen flex flex-col border-r-[1px]">
      <div className="flex flex-col gap-[25px] pt-[100px] ">
        <PageNavItem>
          <PageNavItem.Label
            value={EmployerPaths.USER}
            icon={<NavUser />}
            text="회원 정보"
          />
          <PageNavItem.Item moveTo={EmployerPaths.USER} text="내 포인트 현황" />
          <PageNavItem.Item moveTo={EmployerPaths.USER} text="회원 정보 수정" />
        </PageNavItem>
        <PageNavItem>
          <PageNavItem.Label
            value={EmployerPaths.EMPLOY}
            icon={<NavScrap />}
            text="채용"
          />
          <PageNavItem.Item
            moveTo={EmployerPaths.EMPLOY}
            text="내가 작성한 채용글"
          />
          <PageNavItem.Item
            moveTo={EmployerPaths.EMPLOY}
            text="채용글 작성하기"
          />
        </PageNavItem>
        <PageNavItem>
          <PageNavItem.Label
            value={EmployerPaths.ORGAN}
            icon={<NavWriting />}
            text="기업 정보"
          />
          <PageNavItem.Item
            moveTo={EmployerPaths.ORGAN}
            text="내 기업 정보 수정"
          />
          <PageNavItem.Item
            moveTo={EmployerPaths.ORGAN}
            text="내 기업 리뷰 확인"
          />
        </PageNavItem>
        <PageNavItem>
          <PageNavItem.Label
            value={EmployerPaths.CHAT}
            icon={<NavChat />}
            text="채팅"
          />
          <PageNavItem.Item moveTo={EmployerPaths.CHAT} text="채팅 목록" />
        </PageNavItem>
      </div>
      <Link
        href="/auth/delete"
        className="text-gray3 mt-[200px] border-b w-[105px]"
      >
        회원 탈퇴하기
      </Link>
    </div>
  );
};

export default Nav;
