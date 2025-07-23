import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaInfoCircle,
  FaEnvelope,
  FaUserShield,
  FaTachometerAlt,
} from "react-icons/fa";

const navItems = [
  { label: "Home", icon: <FaHome />, path: "/" },
  { label: "Events", icon: <FaCalendarAlt />, path: "/events" },
  { label: "AboutUs", icon: <FaInfoCircle />, path: "/aboutus" },
  { label: "ContactUs", icon: <FaEnvelope />, path: "/contactus" },
  { label: "AdminPanel", icon: <FaUserShield />, path: "/adminpanel" },
  { label: "UserDashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef(null);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentIndex = navItems.findIndex((item) => item.path === location.pathname);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname]);

  useEffect(() => {
    moveIndicator();
    window.addEventListener("resize", moveIndicator);
    return () => window.removeEventListener("resize", moveIndicator);
  }, [activeIndex]);

  const moveIndicator = () => {
    const nav = navRef.current;
    const indicator = indicatorRef.current;
    const activeItem = nav.children[activeIndex];

    if (activeItem && indicator) {
      const itemRect = activeItem.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      const offsetLeft = itemRect.left - navRect.left + itemRect.width / 2 - 28; // Center the 56px circle
      indicator.style.transform = `translateX(${offsetLeft}px)`;
    }
  };

  const handleClick = (index, path) => {
    setActiveIndex(index);
    navigate(path);
  };

  return (
    <nav className="relative bg-[#00008b] py-4 shadow-md z-10">
      {/* Highlight Circle */}
      <div
        ref={indicatorRef}
        className="absolute -top-0 w-14 h-14 bg-blue-500 rounded-full z-0 transition-transform duration-300"
      ></div>

      <div
        ref={navRef}
        className="flex justify-center items-center gap-15 relative z-10"
      >
        {navItems.map((item, index) => (
          <button
            key={item.label}
            onClick={() => handleClick(index, item.path)}
            className={`text-[#000000] text-2xl transition-transform duration-300 ${
              activeIndex === index ? "scale-125" : "scale-100"
            }`}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;


