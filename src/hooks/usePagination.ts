"use client";

import { useState } from "react";

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return { currentPage, onPageChange };
};

export default usePagination;
