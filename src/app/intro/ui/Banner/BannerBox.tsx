"use client";

import { useEffect, useState } from "react";

import JobBox from "../Examples/JobBox";
import Review from "./Job";
import ReviewBlack from "./ReviewBlank";

const BannerBox = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage?.getItem("accessToken");
      setIsLogin(!!accessToken);
      setIsReady(true);
    }
  }, []);

  if (!isReady) {
    return <ReviewBlack />;
  }

  return (
    <div className="flex justify-between gap-[55px]">
      {isLogin ? <Review /> : <ReviewBlack />}
      <JobBox />
    </div>
  );
};

export default BannerBox;
