import { useParams, Link } from "react-router-dom";

const dummyEvents = [
  {
    id: "1",
    title: "Music Fiesta",
    description: "Join us for an unforgettable night of live music and fun.",
    date: "2025-06-20",
    time: "7:00 PM",
    location: "Delhi Stadium",
    organizer: "Eventify Team",
    image: "/images/music1.jpg",
  },
   {
    id: "2",
    title: "Music Fiesta",
    description: "Vaporart Live Concert",
    date: "2025-06-20",
    time: "7:00 PM",
    location: "Delhi Stadium",
    organizer: "Eventify Team",
    image: "/images/concert1.jpg",
  },
  {
    id: "2",
    title: "Comedy Night",
    description: "An evening of laughter with top stand-up comedians.",
    date: "2025-06-25",
    time: "8:00 PM",
    location: "Mumbai Theatre",
    organizer: "Comedy Club India",
    image: "/images/comedy.jpg",
  },
  {
    id: "3",
    title: "Padamshree Kailash Kher",
    description: "Kailasha band live concert at Namo Ghat Varanasi",
    date: "2025-06-25",
    time: "8:00 PM",
    location: "Varanasi, Uttar Pradesh, India",
    organizer: "UP Tourism Board",
    image: "/images/Kailash Kher.jpg",
  }
];

export default function EventDetails() {
  const { id } = useParams();
  const event = dummyEvents.find((e) => e.id === id);

  if (!event) {
    return <p className="text-center py-10 text-gray-400">Event not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-gradient-to-br from-gray-900 to-black text-white shadow-xl rounded-2xl overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
          <p className="text-gray-300 mb-4">{event.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-gray-400">
            <p><strong className="text-white">Date:</strong> {event.date}</p>
            <p><strong className="text-white">Time:</strong> {event.time}</p>
            <p><strong className="text-white">Venue:</strong> {event.location}</p>
            <p><strong className="text-white">Organizer:</strong> {event.organizer}</p>
          </div>

          <Link to={`/ticket/${event.id}`}>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full shadow-md transition-all">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

