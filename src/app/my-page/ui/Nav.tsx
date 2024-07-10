import { Suspense, lazy } from "react";

import Link from "next/link";
import PageNavItem from "@/components/PageNavItem";
import Paths from "@/constants/paths";

const NavWriting = lazy(() => import("@/assets/icons/NavWriting"));
const NavUser = lazy(() => import("@/assets/icons/NavUser"));
const NavScrap = lazy(() => import("@/assets/icons/NavScrap"));
const NavChat = lazy(() => import("@/assets/icons/NavChat"));

const Nav = () => {
  return (
    <div className="h-screen flex flex-col border-r-[1px]">
      <div className="flex flex-col gap-[25px] pt-[100px]">
        <PageNavItem>
          <PageNavItem.Label
            value={Paths.USER}
            icon={
              <Suspense fallback={<div>Loading...</div>}>
                <NavUser />
              </Suspense>
            }
            text="회원 정보"
          />
          <PageNavItem.Item moveTo={Paths.USER} text="내 포인트 현황" />
          <PageNavItem.Item moveTo={Paths.USER} text="회원 정보 수정" />
        </PageNavItem>
        <PageNavItem>
          <PageNavItem.Label
            value={Paths.SCRAPS}
            icon={
              <Suspense fallback={<div>Loading...</div>}>
                <NavScrap />
              </Suspense>
            }
            text="스크랩"
          />
          <PageNavItem.Item moveTo={Paths.SCRAPS} text="채용 정보 스크랩" />
          <PageNavItem.Item moveTo={Paths.SCRAPS} text="기업 정보 스크랩" />
          <PageNavItem.Item moveTo={Paths.SCRAPS} text="게시글 스크랩" />
        </PageNavItem>
        <PageNavItem>
          <PageNavItem.Label
            value={Paths.POSTS}
            icon={
              <Suspense fallback={<div>Loading...</div>}>
                <NavWriting />
              </Suspense>
            }
            text="작성 목록"
          />
          <PageNavItem.Item moveTo={Paths.POSTS} text="작성한 글 목록" />
          <PageNavItem.Item moveTo={Paths.POSTS} text="작성한 댓글 목록" />
        </PageNavItem>
        <PageNavItem>
          <PageNavItem.Label
            icon={
              <Suspense fallback={<div>Loading...</div>}>
                <NavChat />
              </Suspense>
            }
            text="채팅"
          />
          <PageNavItem.Item moveTo="/my-page/chat" text="채팅 목록" />
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
