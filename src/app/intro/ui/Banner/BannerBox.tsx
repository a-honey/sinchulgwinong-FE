"use client";

import { useEffect, useState } from "react";

import Job from "./Job";
import ReviewBlack from "./ReviewBlank";
import ReviewBox from "./Review";
import { getIsLogin } from "@/lib/utils";

const BannerBox = () => {
  const isLogin = getIsLogin();

  return (
    <div className="flex justify-between gap-[55px]">
      {isLogin ? <ReviewBox /> : <ReviewBlack />}
      <Job />
    </div>
  );
};

export default BannerBox;
