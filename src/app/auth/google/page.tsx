"use client";

import getGoogleToken from "@/api/Oauth/getGoogleToken";
import { useEffect } from "react";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const code = params.code;

  useEffect(() => {
    if (code) {
      getGoogleToken(code as string);
    }
  }, [code]);
  return <div>로딩중</div>;
};

export default Page;
