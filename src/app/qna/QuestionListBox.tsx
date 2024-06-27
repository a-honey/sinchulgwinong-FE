"use client";

import Blank from "@/components/Blank";
import List from "../../components/List";
import getQnA from "@/api/qna/getQnA";
import { useCallback } from "react";
import usePagination from "@/hooks/usePagination";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const THEAD = ["번호", "제목", "작성일", "조회"];

const QuestionListBox = () => {
  const { currentPage, onPageChange } = usePagination();
  const { data } = useUpdateFetch(
    useCallback(
      () => getQnA({ page: currentPage, size: 10, sort: "" }),
      [currentPage]
    )
  );
  return (
    <List>
      <List.Header count={data?.totalElement ?? 0} />
      <List.Table className="w-full">
        <List.Table.Head titles={THEAD} />
        {!data || data?.faqs.length === 0 ? (
          <Blank />
        ) : (
          data.faqs.map((faq) => {
            return <List.Table.Row key={faq.faqId} names={[faq.faqTitle]} />;
          })
        )}
      </List.Table>
      <List.Footer onPageChange={onPageChange} currentPage={1} totalPages={1} />
    </List>
  );
};

export default QuestionListBox;
