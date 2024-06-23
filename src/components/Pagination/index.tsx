import { ResponsePagination } from "@/types";

export interface PaginationProps extends Omit<ResponsePagination, "pageSize"> {
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
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
      {currentPage !== 1 && (
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          {"<"}
        </button>
      )}
      {renderPageNumbers()}
      {currentPage !== totalPages && (
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          {">"}
        </button>
      )}
    </div>
  );
};

export default Pagination;
