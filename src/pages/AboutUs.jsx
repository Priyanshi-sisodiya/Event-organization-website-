import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTelegram } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <div className="bg-[#0e0e0e] text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About us</h1>
        <p className="text-lg leading-relaxed text-gray-300 mb-8">
          At Eventify, we’re dedicated to revolutionizing event experiences. 
          From music festivals to corporate conferences, we empower users to discover, register, and enjoy unforgettable events. 
          Our commitment to reliability and convenience ensures seamless interactions and joyful memories for every attendee.
        </p>

        <div className="flex justify-center space-x-4">
          <a href="#" className="text-white hover:text-purple-400 transition">
            <FaTelegram size={24} />
          </a>
          <a href="#" className="text-white hover:text-purple-400 transition">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-purple-400 transition">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-purple-400 transition">
            <FaLinkedinIn size={24} />
          </a>
          <a href="#" className="text-white hover:text-purple-400 transition">
            <FaFacebookF size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

