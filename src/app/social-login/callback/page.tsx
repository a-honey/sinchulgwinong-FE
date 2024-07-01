"use client";

import { useParams, useRouter } from "next/navigation";

import Paths from "@/constants/paths";
import getGoogleToken from "@/api/Oauth/getGoogleToken";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const params = useParams();
  const code = params.code;

  useEffect(() => {
    if (code) {
      try {
        getGoogleToken(code as string);
      } catch (e) {
        router.push(`${Paths.REGISTER}?type=google`);
      }
    }
  }, [code, router]);
  return <div>로딩중</div>;
};

export default Page;
