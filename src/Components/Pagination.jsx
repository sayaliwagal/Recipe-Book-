import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const generatePages = () => {
    const pages = [];

    if (totalPages <= 7) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Show only key pages with ellipsis
      pages.push(1);

      if (currentPage > 3) pages.push("..."); // left dots
        
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("..."); // right dots
        
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 my-10 text-white">

      {/* Prev */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-3 py-2 rounded-lg transition 
        ${currentPage === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-700"}`}
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {generatePages().map((page, index) => (
        <button
          key={index}
          disabled={page === "..."}
          onClick={() => page !== "..." && onPageChange(page)}
          className={`w-9 h-9 flex items-center justify-center rounded-md transition
            ${page === currentPage ? "bg-indigo-500 font-semibold" : "hover:bg-gray-700"}
            ${page === "..." ? "cursor-default opacity-60" : "cursor-pointer"}
          `}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`px-3 py-2 rounded-lg transition 
        ${currentPage === totalPages ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-700"}`}
      >
        &gt;
      </button>

    </div>
  );
};

export default Pagination;
