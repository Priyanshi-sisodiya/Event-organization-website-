import { useForm } from 'react-hook-form';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function ContactUs() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    alert('Message sent!');
    reset();
  };

  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-8 border-b-2 border-yellow-600 inline-block pb-2">
          CONTACT US
        </h2>

        {/* Info Section */}
        <div className="grid md:grid-cols-3 text-center gap-8 py-10 border-b border-gray-700">
          <div>
            <FaPhone size={32} className="mx-auto text-yellow-500 mb-2" />
            <h4 className="font-semibold text-lg mb-1">PHONE</h4>
            <p className="text-gray-300 text-sm">+63 920 822 123</p>
            <p className="text-gray-300 text-sm">+63 752 222 555</p>
          </div>
          <div>
            <FaMapMarkerAlt size={32} className="mx-auto text-yellow-500 mb-2" />
            <h4 className="font-semibold text-lg mb-1">ADDRESS</h4>
            <p className="text-gray-300 text-sm">5 Corner Field Trading Area</p>
            <p className="text-gray-300 text-sm">Quezon City, Metro Manila, Philippines</p>
          </div>
          <div>
            <FaEnvelope size={32} className="mx-auto text-yellow-500 mb-2" />
            <h4 className="font-semibold text-lg mb-1">EMAIL</h4>
            <p className="text-gray-300 text-sm">support@expandevents.com</p>
            <p className="text-gray-300 text-sm">admin@expandevents.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 max-w-2xl mx-auto">
          <p className="text-center mb-6 uppercase tracking-wide text-gray-400">
            If you got any questions <br /> Please do not hesitate to send us a message
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register('name')}
              placeholder="Your Name"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="email"
              {...register('email')}
              placeholder="Your Email"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              {...register('subject')}
              placeholder="Subject"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <textarea
              {...register('message')}
              placeholder="Message"
              rows={5}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button
              type="submit"
              className="bg-yellow-600 text-black px-6 py-2 rounded hover:bg-yellow-500 transition font-semibold"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Social Icons */}
        <div className="mt-12 text-center">
          <h4 className="mb-4 text-lg">Connect with us!</h4>
          <div className="flex justify-center space-x-6 text-yellow-500 text-xl">
            <FaFacebook className="hover:text-white transition" />
            <FaTwitter className="hover:text-white transition" />
            <FaPinterest className="hover:text-white transition" />
            <FaInstagram className="hover:text-white transition" />
            <FaLinkedin className="hover:text-white transition" />
          </div>
        </div>
      </div>
    </div>
  );
}

