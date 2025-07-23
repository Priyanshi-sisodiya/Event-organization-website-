import { title } from 'framer-motion/client';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const dummyEventData = {
  1: { title: "Music Fiesta", image: "/images/music1.jpg", date: "2025-06-01", location: "Mumbai", price: 799 },
  2: { title: "Comedy Night", image: "/images/comedy.jpg", date: "2025-06-15", location: "Delhi", price: 499 },
  3: { title: "Kids Carnival", image: "/images/kids.jpg", date: "2025-07-01", location: "Bangalore", price: 1899 },
  4: { title: "workshop", image: "/images/seminar.jpg", date: "2025-07-01", location: "Banglore", price: 1899 },
  5: { title: "Taksh performig live", image: "/images/music1.jpg", date: "2025-07-01", location: "Banglore", price: 1799 },
  6: { title: "priyanshi art walk", image: "/images/cinderella.jpg", date: "2025-07-01", location: "rajwada indore", price: 299 },
};

export default function EventTicket() {
  const { eventId } = useParams();
  const event = dummyEventData[eventId];

  const [form, setForm] = useState({ name: '', email: '', tickets: 1 });
  const [submitted, setSubmitted] = useState(false);

  if (!event) {
    return <div className="text-center text-red-500 mt-20">Event not found!</div>;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex justify-center items-start px-4 py-10">
      <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden max-w-2xl w-full">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
          <p className="text-gray-400 mb-1">📅 {event.date}</p>
          <p className="text-gray-400 mb-1">📍 {event.location}</p>
          <p className="text-green-400 font-medium mb-4">🎫 ₹{event.price} per ticket</p>

          {submitted ? (
            <div className="p-4 bg-green-600/20 border border-green-500 rounded text-green-300 mt-4">
              ✅ Thank you, <span className="font-semibold">{form.name}</span>! Your booking for <strong>{event.title}</strong> is confirmed.
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 font-semibold text-gray-200">Name</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold text-gray-200">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold text-gray-200">Tickets</label>
                <input
                  name="tickets"
                  type="number"
                  min="1"
                  value={form.tickets}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-full font-semibold transition-all"
              >
                Confirm Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

