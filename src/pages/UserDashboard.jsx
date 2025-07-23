import { useState } from 'react';
import { Switch } from '@headlessui/react';

const savedEvents = [
  {
    id: 1,
    title: 'Summer Beats Festival',
    date: 'July 20, 2024',
    location: 'Central Park, NY',
    image: 'images/concert3.jpg',
  },
  {
    id: 2,
    title: 'Art Expo 2024',
    date: 'August 15, 2024',
    location: 'Art Gallery, LA',
    image: 'images/music1.jpg',
  },
  {
    id: 3,
    title: 'Tech Innovators Summit',
    date: 'September 10, 2024',
    location: 'Silicon Valley, CA',
    image: 'images/seminar.jpg',
  },
];

const bookingHistory = [
  { title: 'Rock Concert 2023', date: 'May 5, 2023' },
  { title: 'Food Festival 2023', date: 'June 12, 2023' },
  { title: 'Comic Con 2023', date: 'July 20, 2023' },
];

export default function UserDashboard() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [message, setMessage] = useState('');

  return (
    <div className="px-6 py-10 bg-gray-900 min-h-screen text-gray-100">
      <h1 className="text-3xl font-bold mb-2">Welcome back, Alex!</h1>
      <p className="text-gray-400 mb-6">Here’s your personalized dashboard.</p>

      {/* Saved Events */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Saved Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {savedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-gray-800 hover:bg-purple-700 transition rounded-xl shadow p-4"
            >
              <img src={event.image} alt={event.title} className="w-full h-32 object-cover rounded-md mb-3" />
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-400">{event.date}</p>
              <p className="text-sm text-gray-400">Location: {event.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking History */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Booking History</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {bookingHistory.map((event, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg shadow hover:bg-purple-700 transition">
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-400">Attended: {event.date}</p>
              <button className="mt-2 px-4 py-1 bg-purple-600 text-white rounded-full hover:bg-purple-700 text-sm transition">
                Leave Feedback
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Preferences */}
      <section className="mb-10 bg-gray-800 rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Account Settings & Preferences</h2>
        <div className="flex items-center justify-between mb-4">
          <span>Email Notifications</span>
          <Switch
            checked={emailNotifications}
            onChange={setEmailNotifications}
            className={`${
              emailNotifications ? 'bg-purple-600' : 'bg-gray-600'
            } relative inline-flex h-6 w-11 items-center rounded-full transition`}
          >
            <span className="inline-block h-4 w-4 transform bg-white rounded-full transition" />
          </Switch>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span>SMS Alerts</span>
          <Switch
            checked={smsAlerts}
            onChange={setSmsAlerts}
            className={`${
              smsAlerts ? 'bg-purple-600' : 'bg-gray-600'
            } relative inline-flex h-6 w-11 items-center rounded-full transition`}
          >
            <span className="inline-block h-4 w-4 transform bg-white rounded-full transition" />
          </Switch>
        </div>
        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
          Update Preferences
        </button>
      </section>

      {/* Contact Support */}
      <section className="bg-gray-800 rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-600 bg-gray-900 text-gray-100 rounded-lg p-3 mb-4 resize-none"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
          Send Message
        </button>
        <p className="text-sm text-gray-400 mt-2">For instant support, visit our FAQs or Live Chat.</p>
      </section>

      {/* Footer */}
      <footer className="text-center mt-10 text-sm text-gray-500">
        <div className="flex justify-center gap-4 mt-6 mb-2">
          <a href="#" className="hover:text-purple-400 transition">Terms of Service</a> | 
          <a href="#" className="hover:text-purple-400 transition">Privacy Policy</a> | 
          <a href="#" className="hover:text-purple-400 transition">Contact Us</a>
        </div>
        <div className="flex justify-center gap-4 mt-2 text-purple-400">
          <i className="fab fa-facebook-f hover:text-purple-300 transition" />
          <i className="fab fa-twitter hover:text-purple-300 transition" />
          <i className="fab fa-instagram hover:text-purple-300 transition" />
        </div>
      </footer>
    </div>
  );
}
