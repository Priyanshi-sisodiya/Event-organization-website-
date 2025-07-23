import { useState } from 'react';
import { FaMusic, FaMicrophoneAlt, FaChild, FaFilm, FaBriefcase, FaBullhorn, FaGraduationCap, FaBirthdayCake } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const categories = [
  { name: 'Music', icon: <FaMusic /> },
  { name: 'Concert', icon: <FaMicrophoneAlt /> },
  { name: 'Kids', icon: <FaChild /> },
  { name: 'Movies', icon: <FaFilm /> },
  { name: 'Workshop', icon: <FaBriefcase /> },
  { name: 'Conference', icon: <FaBullhorn /> },
  { name: 'Seminar', icon: <FaGraduationCap /> },
  { name: 'Celebration', icon: <FaBirthdayCake /> },
];

const ITEMS_PER_PAGE = 4;

export default function Categories() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(categories.length / ITEMS_PER_PAGE);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages - 1));

  const paginatedCategories = categories.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section className="py-12 bg-[#0f0e13]">
      <h2 className="text-3xl font-bold text-white text-center mb-10">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {paginatedCategories.map((cat, idx) => (
          <div
            key={idx}
            className="w-40 h-40 bg-[#1e1c26] rounded-2xl text-white flex flex-col items-center justify-center shadow-lg hover:shadow-purple-500/50 transition duration-300 hover:border border-purple-500"
          >
            <span className="text-4xl mb-2">{cat.icon}</span>
            <p className="text-base font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className="p-2 bg-purple-700 text-white rounded-full disabled:opacity-50"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleNext}
          disabled={page === totalPages - 1}
          className="p-2 bg-purple-700 text-white rounded-full disabled:opacity-50"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}

