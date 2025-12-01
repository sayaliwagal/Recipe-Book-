import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-3 m-10 text-white">
        {/* Previous Button  */}

        <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-4 py-2 rounded-md border 
        ${currentPage === 1 
            ? "border-gray-600 text-gray-600 cussor-not-allowed"
            : "border-white hover:bg-gray-700"
        }`}>
            Prev
        </button>
       {/* Pgae Info  */}
       <span className="text-lg font-semibold">
        Page {currentPage} / {totalPages}
       </span>

       {/* Next Button */}

       <button
       disabled={currentPage === totalPages}
       onClick={() => onPageChange(currentPage + 1)}
       className={`px-4 py-2 rounded-md border
       ${currentPage === totalPages
        ? "border-gray-600 text-gray-600 cursor-not-allowed"
        : "border-white hover:bg-gray-700"
       }`}>Next</button>
    </div>
  )
}

export default Pagination
