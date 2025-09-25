// app/page.tsx (excerpt)
'use client';
import { useState } from 'react';
import CardsGrid from '../components/CardsGrid';
import { Worker } from '../types';

const ITEMS_PER_PAGE = 9;

export default function Home({ workers }: { workers: Worker[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(workers.length / ITEMS_PER_PAGE);
  const paginatedWorkers = workers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <>
      <CardsGrid workers={paginatedWorkers} />
      <div className="flex justify-center space-x-2 mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}
