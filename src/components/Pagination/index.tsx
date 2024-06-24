import { ResponseOffsetPagination } from "@/types";

export interface PaginationProps
  extends Omit<ResponseOffsetPagination, "pageSize"> {
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 2);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage);
    }
  };

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 10;
    const halfPagesToShow = Math.floor(maxPagesToShow / 2);

    let startPage = Math.max(1, currentPage - halfPagesToShow);
    let endPage = Math.min(totalPages, currentPage + halfPagesToShow);

    if (currentPage <= halfPagesToShow) {
      endPage = Math.min(totalPages, maxPagesToShow);
    } else if (currentPage + halfPagesToShow >= totalPages) {
      startPage = Math.max(1, totalPages - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i - 1)}
          className={`px-2 py-1 mx-1 ${
            currentPage === i ? "text-black" : "text-gray3"
          }`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        {"<"}
      </button>
      {renderPageNumbers()}
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
