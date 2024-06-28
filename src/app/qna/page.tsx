"use client";

import Link from "next/link";
import QuestionListBox from "./QuestionListBox";
import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/navigation";

const QnA = () => {
  const router = useRouter();
  return (
    <main className="mt-[72px]">
      <h1 className="text-[36px]">FAQ</h1>
      <QuestionListBox />
    </main>
  );
};

export default QnA;
