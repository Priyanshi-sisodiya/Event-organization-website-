import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaHeart, FaMusic, FaLaugh, FaFilm, FaMicroscope, FaChalkboardTeacher, FaChild, FaUsers, FaBirthdayCake } from 'react-icons/fa';

const eventTabs = [
  { label: 'Music / Concert', icon: <FaMusic /> },
  { label: 'Comedy', icon: <FaLaugh /> },
  { label: 'Movies', icon: <FaFilm /> },
  { label: 'Seminar', icon: <FaMicroscope /> },
  { label: 'Workshop', icon: <FaChalkboardTeacher /> },
  { label: 'Kids', icon: <FaChild /> },
  { label: 'Conference', icon: <FaUsers /> },
  { label: 'Celebration', icon: <FaBirthdayCake /> },
];

const eventsData = {
  'Music / Concert': [
   {
      id: 1,
      title: 'Vaporart Live Concert',
      date: '2025-06-25',
      time: '7:00 PM',
      location: 'Mumbai, India',
      image: '/images/music1.jpg',
      category: 'Music / Concert',
    },
  {
      id: 2,
      title: 'Vaporart Live Concert',
      date: '2025-06-25',
      time: '7:00 PM',
      location: 'Mumbai, India',
      image: '/images/concert1.jpg',
      category: 'Music / Concert',
    },
    {
      id: 3,
      title: 'Vaporart Live Concert',
      date: '2025-06-25',
      time: '7:00 PM',
      location: 'Mumbai, India',
      image: '/images/concert2.jpg',
      category: 'Music / Concert',
    },
    {
      id: 4,
      title: 'Vaporart Live Concert',
      date: '2025-06-25',
      time: '7:00 PM',
      location: 'Mumbai, India',
      image: '/images/Kailash Kher.jpg',
      category: 'Music / Concert',
    }
  ],
  Comedy: [
   {
      id: 1,
      title: 'Vaporart Live Concert',
      date: '2025-06-25',
      time: '7:00 PM',
      location: 'Mumbai, India',
      image: '/images/comedy.jpg',
      category: 'Music / Concert',
    },
    {
      id: 2,
      title: 'Vaporart Live Concert',
      date: '2025-06-25',
      time: '7:00 PM',
      location: 'Mumbai, India',
      image: '/images/comedy.jpg',
      category: 'Music / Concert',
    }
  ],
  Movies: [
   {
      id: 1,
      title: 'Vaporart Live Concert',
      date: '2025-06-25',
      time: '7:00 PM',
      location: 'Mumbai, India',
      image: '/images/cinderella.jpg',
      category: 'Music / Concert',
    },
    {
      id: 2,
      title: 'Vaporart Live Concert',
      date: '2025-06-25',
      time: '7:00 PM',
      location: 'Mumbai, India',
      image: '/images/cinderella.jpg',
      category: 'Music / Concert',
    }
  ],
  Seminar: [
   {
      id: 1,
      title: 'Vaporart Live Concert',
      date: '2025-06-25',
      time: '7:00 PM',
      location: 'Mumbai, India',
      image: '/images/seminar.jpg',
      category: 'Music / Concert',
    },
    {
      id: 2,
      title: 'Vaporart Live Concert',
      date: '2025-06-25',
      time: '7:00 PM',
      location: 'Mumbai, India',
      image: '/images/seminar.jpg',
      category: 'Music / Concert',
    },
    {
      id: 3,
      title: 'Vaporart Live Concert',
      date: '2025-06-25',
      time: '7:00 PM',
      location: 'Mumbai, India',
      image: '/images/seminar.jpg',
      category: 'Music / Concert',
    },
    {
      id: 4,
      title: 'Vaporart Live Concert',
      date: '2025-06-25',
      time: '7:00 PM',
      location: 'Mumbai, India',
      image: '/images/seminar.jpg',
      category: 'Music / Concert',
    }
  ],
  Workshop: [
    {
      id: 1,
      title: 'Vaporart Live Concert',
      date: '2025-06-25',
      time: '7:00 PM',
      location: 'Mumbai, India',
      image: '/images/music1.jpg',
      category: 'Music / Concert',
    }
  ],
  Kids: [
    {
      id: 1,
      title: 'Vaporart Live Concert',
      date: '2025-06-25',
      time: '7:00 PM',
      location: 'Mumbai, India',
      image: '/images/music1.jpg',
      category: 'Music / Concert',
    }
  ],
  Conference: [
   {
      id: 1,
      title: 'Vaporart Live Concert',
      date: '2025-06-25',
      time: '7:00 PM',
      location: 'Mumbai, India',
      image: '/images/music1.jpg',
      category: 'Music / Concert',
    }
  ],
  Celebration: [
    {
      id: 1,
      title: 'Vaporart Live Concert',
      date: '2025-06-25',
      time: '7:00 PM',
      location: 'Mumbai, India',
      image: '/images/music1.jpg',
      category: 'Music / Concert',
    }
  ],
};

const Events = () => {
  const [activeTab, setActiveTab] = useState('Music / Concert');

  return (
    <section className="py-16 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {eventTabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition ${
                activeTab === tab.label
                  ? 'bg-purple-700 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {eventsData[activeTab]?.map((event) => (
  <div
    key={event.id}
    className="bg-gradient-to-b from-purple-900 to-gray-900 rounded-2xl overflow-hidden border border-purple-800 hover:shadow-purple-500/50 hover:shadow-xl transition-all"
  >
    <img src={event.image} alt={event.title} className="h-60 w-full object-cover" />
    <div className="p-5 text-white">
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-sm text-purple-300">{event.date} • {event.time}</p>
      <p className="text-sm text-gray-400 mb-2">{event.location}</p>
      <div className="mt-4 flex justify-end">
  <Link
    to={`/events/${event.id}`}
    className="bg-purple-600 hover:bg-purple-700 text-white text-sm py-1 px-4 rounded"
  >
    View
  </Link>
</div>

      </div>
    </div>
  ))}
</div>


        
      </div>
    </section>
  );
};

export default Events;


