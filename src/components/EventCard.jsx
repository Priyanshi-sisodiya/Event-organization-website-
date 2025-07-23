import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 text-sm">{event.date} • {event.location}</p>
      
       
        <Link
          to={`/events/${event.id}`}
          className="text-blue-500 font-medium mt-3 inline-block hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
