"use client";

import ChatFloat from ".";
import { useState } from "react";

const Test = () => {
  const [isTestStart, setIsTestStart] = useState(false);

  return (
    <button
      onClick={() => {
        setIsTestStart((prev) => !prev);
      }}
      className="fixed bottom-[100px] right-[100px] bg-[#f1f100]"
    >
      로그인하고 클릭하면 연결시작됨
      {isTestStart && <ChatFloat />}
    </button>
  );
};

export default Test;
