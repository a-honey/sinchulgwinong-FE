import NavChat from "@/assets/icons/NavChat";
import NavScrap from "@/assets/icons/NavScrap";
import NavUser from "@/assets/icons/NavUser";
import NavWriting from "@/assets/icons/NavWriting";
import PageNavItem from "@/components/PageNavItem";

const Nav = () => {
  return (
    <div className="flex flex-col gap-[25px] pt-[100px] border-r-[1px] ">
      <PageNavItem>
        <PageNavItem.Label icon={<NavUser />} text="회원 정보" />
        <PageNavItem.Item moveTo="/employer/user" text="내 포인트 현황" />
        <PageNavItem.Item moveTo="/employer/user" text="회원 정보 수정" />
        <PageNavItem.Item moveTo="/employer/user/delete" text="회원 탈퇴" />
      </PageNavItem>
      <PageNavItem>
        <PageNavItem.Label icon={<NavScrap />} text="채용" />
        <PageNavItem.Item moveTo="/employer/employ" text="내가 작성한 채용글" />
        <PageNavItem.Item moveTo="/employer/employ" text="채용글 작성하기" />
      </PageNavItem>
      <PageNavItem>
        <PageNavItem.Label icon={<NavWriting />} text="기업 정보" />
        <PageNavItem.Item
          moveTo="/employer/my-organ"
          text="내 기업 정보 수정"
        />
        <PageNavItem.Item
          moveTo="/employer/my-organ"
          text="내 기업 리뷰 확인"
        />
      </PageNavItem>
      <PageNavItem>
        <PageNavItem.Label icon={<NavChat />} text="채팅" />
        <PageNavItem.Item moveTo="/employer/chat" text="채팅 목록" />
      </PageNavItem>
    </div>
  );
};

export default Nav;
