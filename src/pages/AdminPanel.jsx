import { useState } from 'react';

export default function AdminPanel() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Music Fiesta',
      date: '2025-06-20',
      location: 'Delhi',
      image: '/images/music.jpg',
    },
    {
      id: 2,
      title: 'Comedy Night',
      date: '2025-06-25',
      location: 'Mumbai',
      image: '/images/comedy.jpg',
    },
  ]);

  const [form, setForm] = useState({
    id: '',
    title: '',
    date: '',
    location: '',
    image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id) {
      setEvents(events.map((ev) => (ev.id === Number(form.id) ? { ...form, id: Number(form.id) } : ev)));
    } else {
      const newEvent = { ...form, id: Date.now() };
      setEvents([...events, newEvent]);
    }

    setForm({ id: '', title: '', date: '', location: '', image: '' });
  };

  const handleEdit = (event) => {
    setForm(event);
  };

  const handleDelete = (id) => {
    setEvents(events.filter((ev) => ev.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-10 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Admin Panel</h1>

      {/* Event Form */}
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow mb-10 space-y-4">
        <input
          type="text"
          placeholder="Event Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border border-gray-600 px-4 py-2 rounded bg-gray-700 text-white"
          required
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full border border-gray-600 px-4 py-2 rounded bg-gray-700 text-white"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="w-full border border-gray-600 px-4 py-2 rounded bg-gray-700 text-white"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="w-full border border-gray-600 px-4 py-2 rounded bg-gray-700 text-white"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          {form.id ? 'Update Event' : 'Add Event'}
        </button>
      </form>

      {/* Events Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse bg-gray-800 shadow rounded-xl text-white">
          <thead className="bg-gray-700">
            <tr>
              <th className="p-4 border border-gray-600">Title</th>
              <th className="p-4 border border-gray-600">Date</th>
              <th className="p-4 border border-gray-600">Location</th>
              <th className="p-4 border border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((ev) => (
              <tr key={ev.id} className="text-center hover:bg-gray-700 transition">
                <td className="p-4 border border-gray-600">{ev.title}</td>
                <td className="p-4 border border-gray-600">{ev.date}</td>
                <td className="p-4 border border-gray-600">{ev.location}</td>
                <td className="p-4 border border-gray-600">
                  <button
                    onClick={() => handleEdit(ev)}
                    className="text-blue-400 mr-4 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(ev.id)}
                    className="text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

