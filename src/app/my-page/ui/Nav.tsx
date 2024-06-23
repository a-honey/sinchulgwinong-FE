import NavChat from "@/assets/icons/NavChat";
import NavScrap from "@/assets/icons/NavScrap";
import NavUser from "@/assets/icons/NavUser";
import NavWriting from "@/assets/icons/NavWriting";
import PageNavItem from "@/components/PageNavItem";
import Paths from "@/constants/paths";

const Nav = () => {
  return (
    <div className="flex flex-col gap-[25px] pt-[100px] border-r-[1px] ">
      <PageNavItem>
        <PageNavItem.Label
          value={Paths.USER}
          icon={<NavUser />}
          text="회원 정보"
        />
        <PageNavItem.Item moveTo={Paths.USER} text="내 포인트 현황" />
        <PageNavItem.Item moveTo={Paths.USER} text="회원 정보 수정" />
        <PageNavItem.Item moveTo="/my-page/user/delete" text="회원 탈퇴" />
      </PageNavItem>
      <PageNavItem>
        <PageNavItem.Label
          value={Paths.SCRAPS}
          icon={<NavScrap />}
          text="스크랩"
        />
        <PageNavItem.Item moveTo={Paths.SCRAPS} text="채용 정보 스크랩" />
        <PageNavItem.Item moveTo={Paths.SCRAPS} text="기업 정보 스크랩" />
        <PageNavItem.Item moveTo={Paths.SCRAPS} text="게시글 스크랩" />
      </PageNavItem>
      <PageNavItem>
        <PageNavItem.Label
          value={Paths.POSTS}
          icon={<NavWriting />}
          text="작성 목록"
        />
        <PageNavItem.Item moveTo={Paths.POSTS} text="작성한 글 목록" />
        <PageNavItem.Item moveTo={Paths.POSTS} text="작성한 댓글 목록" />
      </PageNavItem>
      <PageNavItem>
        <PageNavItem.Label icon={<NavChat />} text="채팅" />
        <PageNavItem.Item moveTo="/my-page/chat" text="채팅 목록" />
      </PageNavItem>
    </div>
  );
};

export default Nav;
