interface PaginationUtilsProps {
  currentPage: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
}

export const handlePreviousPage = ({
  currentPage,
  onPageChange,
}: PaginationUtilsProps) => {
  if (currentPage > 1) {
    onPageChange(currentPage - 1);
  }
};

export const handleNextPage = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationUtilsProps) => {
  if (currentPage < (totalPages || 1)) {
    onPageChange(currentPage + 1);
  }
};
