import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';

const events = [
  {
    id: 1,
    title: 'William Smith Comedy Show',
    date: '2025-06-27',
    time: '7:00 PM',
    category: 'Comedy',
    location: 'Crack & Smile – 2022 Tour',
    image: '/images/comedy.jpg',
  },
  {
    id: 2,
    title: 'Shannon Weigel Acoustic Night',
    date: '2025-06-28',
    time: '8:00 PM',
    category: 'seminar',
    location: 'Star Love Me & I Love You',
    image: '/images/seminar.jpg',
  },
  {
    id: 3,
    title: "Padamshree Kailash Kher",
    date: '2025-06-25',
    time: '8:00 PM',
    category: "music",
    location: "Varanasi, Uttar Pradesh, India",
    image: "/images/Kailash Kher.jpg",
  },
  {
    id: 4,
    title: 'Edward Burgess – Sax on the Beach',
    date: '2025-06-30',
    time: '8:00 PM',
    category: 'Concert',
    location: 'Classical Summer Tour – 2022',
    image: '/images/concert1.jpg',
  },
  {
    id: 5,
    title: 'The Lewistage Cinderella – The Little Glass Slipper',
    date: '2025-07-01',
    time: '8:00 PM',
    category: 'Theatre',
    location: 'Lewistage Theatre Drama Group',
    image: '/images/cinderella.jpg',
  },
  {
    id: 6,
    title: "Indian folk music artists at bikaner camel festival",
    date: '2025-06-30',
    time: '8:00 PM',
    category: 'Concert',
    location: "Bikaner, Rajasthan/India",
    image: '/images/Bikaner.jpg',
  },
   {
    id: 7,
    title: "Indian folk music artists at bikaner camel festival",
    date: '2025-06-30',
    time: '8:00 PM',
    category: 'Concert',
    location: "Bikaner, Rajasthan/India",
    image: '/images/Bikaner.jpg',
  },
  {
    id: 8,
    title: 'Edward Burgess – Sax on the Beach',
    date: '2025-06-30',
    time: '8:00 PM',
    category: 'Concert',
    location: 'Classical Summer Tour – 2022',
    image: '/images/concert1.jpg',
  },
   
];

const AllEvents = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [date, setDate] = useState('');

  const filteredEvents = events.filter((event) => {
    return (
      (category === 'All' || event.category === category) &&
      (!date || event.date === date) &&
      event.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <section className="bg-[#0f0f1b] min-h-screen py-12 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Featured Upcoming Events</h2>

        {/* Filters Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
          <Filters
            category={category}
            setCategory={setCategory}
            date={date}
            setDate={setDate}
          />
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden p-4 shadow-xl transition-transform hover:scale-105"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-xl object-cover h-40 w-full mb-4"
                />
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{event.category} • {event.date}</p>
                <p className="text-sm text-gray-400 mt-1">{event.location}</p>
               
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">No events found.</p>
          )}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <Link to="/events">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg shadow-lg hover:scale-105 transition">
              View all Events
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllEvents;




