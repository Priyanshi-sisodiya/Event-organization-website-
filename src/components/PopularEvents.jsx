import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowLeft,
  FaArrowRight,
  FaMusic,
  FaLaugh,
  FaChild,
  FaTheaterMasks,
  FaGavel
} from 'react-icons/fa';

const popularCategories = [
  {
    id: 1,
    title: 'Music Shows',
    icon: <FaMusic size={28} className="text-purple-400" />,
    creator: 'LiveBandz',
    eth: '2.45 ETH',
    highestBid: '0.028 ETH',
    image: '/images/music1.jpg',
  },
  {
    id: 2,
    title: 'Comedy Nights',
    icon: <FaLaugh size={28} className="text-yellow-400" />,
    creator: 'FunnyBonez',
    eth: '1.80 ETH',
    highestBid: '0.019 ETH',
    image: '/images/comedy.jpg',
  },
  {
    id: 3,
    title: 'Kids Events',
    icon: <FaChild size={28} className="text-green-400" />,
    creator: 'KiddoFun',
    eth: '1.20 ETH',
    highestBid: '0.015 ETH',
    image: '/images/cinderella.jpg',
  },
  {
    id: 4,
    title: 'Drama & Theatre',
    icon: <FaTheaterMasks size={28} className="text-pink-400" />,
    creator: 'StageStars',
    eth: '2.90 ETH',
    highestBid: '0.034 ETH',
    image: '/images/concert3.jpg',
  },
];

const PopularEvents = () => {
  const [current, setCurrent] = useState(0);
  const visibleCards = 3;

  const nextSlide = () => {
    if (current < popularCategories.length - visibleCards) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-black to-gray-900 text-white relative">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-2">
          <FaGavel size={24} className="text-purple-500" />
          <h2 className="text-3xl font-bold">Popular Event Categories</h2>
          <FaGavel size={24} className="text-purple-500" />
        </div>
        <p className="text-gray-400 mt-2">Explore what people love the most</p>
      </div>

      <div className="relative px-6 md:px-12">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Cards */}
        <div className="flex overflow-hidden space-x-6">
          {popularCategories.slice(current, current + visibleCards).map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl shadow-lg w-full max-w-sm flex-shrink-0 hover:shadow-purple-500/50 transition duration-300 border border-transparent hover:border-purple-500"
            >
              <div className="h-56 rounded-t-2xl overflow-hidden relative group">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <span className="bg-purple-600 text-xs px-2 py-1 rounded">{category.eth}</span>
                </div>
                <p className="text-sm text-gray-400 mb-1">by {category.creator}</p>
                <div className="flex items-center gap-2 mb-3">{category.icon}<span className="text-xs text-gray-500">Popular Events {category.PopularEvents}</span></div>
                <div className="flex justify-between items-center gap-2 mt-4">
                 
                </div>
              </div>
                
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default PopularEvents;




