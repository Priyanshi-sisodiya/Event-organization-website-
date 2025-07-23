import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import { SiEthereum } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Logo & Description */}
        <div className="md:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            <SiEthereum className="text-purple-500 text-3xl" />
            <h1 className="text-2xl font-bold">Nifter.</h1>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            The world’s largest digital marketplace for crypto collectibles and NFTs. Buy, sell and discover exclusive digital assets.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-500 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-purple-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-purple-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-purple-500 transition"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-purple-500 font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Art</a></li>
            <li><a href="#">Photography</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Games</a></li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="text-purple-500 font-semibold mb-3">My Account</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">My Profile</a></li>
            <li><a href="#">My Collections</a></li>
            <li><a href="#">My Favorites</a></li>
            <li><a href="#">Account Settings</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-purple-500 font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Help Centre</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Suggestions</a></li>
            <li><a href="#">Newsletter</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-purple-500 font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Rankings</a></li>
            <li><a href="#">Activity</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Anib Temji. All rights reserved.
      </div>
    </footer>
  );
}

