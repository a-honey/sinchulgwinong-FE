"use client";

import { useEffect, useState } from "react";

import Job from "./Job";
import ReviewBlack from "./ReviewBlank";
import ReviewBox from "./Review";

const BannerBox = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage?.getItem("accessToken");
      setIsLogin(!!accessToken);
    }
  }, []);

  return (
    <div className="flex justify-between gap-[55px]">
      {isLogin ? <ReviewBox /> : <ReviewBlack />}
      <Job />
    </div>
  );
};

export default BannerBox;
