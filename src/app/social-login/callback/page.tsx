"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Paths from "@/constants/paths";
import getGoogleToken from "@/api/Oauth/getGoogleToken";

const Page = () => {
  return (
    <Suspense>
      <HOC />
    </Suspense>
  );
};

export default Page;
const HOC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;

  useEffect(() => {
    const fetchGoogleToken = async () => {
      if (code) {
        try {
          await getGoogleToken(code);
        } catch (e) {
          router.push(`${Paths.REGISTER}?code=${code}&type=google`);
        }
      }
    };

    fetchGoogleToken();
  }, [code, router]);

  return <div>로딩중</div>;
};
