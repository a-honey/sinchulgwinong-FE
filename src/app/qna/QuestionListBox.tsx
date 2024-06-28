"use client";

import Blank from "@/components/Blank";
import List from "../../components/List";
import { getFormattedDate } from "@/lib/utils";
import getQnA from "@/api/qna/getQnA";
import { useCallback } from "react";
import usePagination from "@/hooks/usePagination";
import { useRouter } from "next/navigation";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const THEAD = ["번호", "제목", "작성일"];

const QuestionListBox = () => {
  const router = useRouter();
  const { currentPage, onPageChange } = usePagination();
  const { data } = useUpdateFetch(
    useCallback(
      () => getQnA({ page: currentPage, size: 10, sort: "" }),
      [currentPage]
    )
  );
  return (
    <List>
      <List.Header count={data?.totalFaqCount ?? 0} />
      <List.Table className="w-full">
        <List.Table.Head titles={THEAD} />
        {!data || data?.faqs.length === 0 ? (
          <Blank />
        ) : (
          data.faqs.map((faq) => {
            const names = [
              faq.faqId,
              faq.faqTitle,
              getFormattedDate(faq.createdAt),
            ];
            return (
              <List.Table.Row
                key={faq.faqId}
                names={names}
                onClick={() => {
                  router.push(`/qna/detail?qnaId=${faq.faqId}`);
                }}
              />
            );
          })
        )}
      </List.Table>
      <List.Footer
        onPageChange={onPageChange}
        currentPage={data?.currentPage ?? 1}
        totalPages={data?.totalPages ?? 1}
      />
    </List>
  );
};

export default QuestionListBox;
