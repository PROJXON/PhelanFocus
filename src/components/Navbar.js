"use client";

import { useState, useRef, useEffect } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Podcast", href: "#podcast" },
    { name: "Contact", href: "#contact" },
  ];

  let prevScrollPos = useRef(0);

  // Toggle mobile menu
  const toggleMobileMenu = () => setIsOpen(!isOpen);

  // Scroll detection logic to hide navbar on scroll down and show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsNavbarVisible(currentScrollPos <= prevScrollPos.current);
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full p-4 bg-white relative transition-opacity duration-300 ${isNavbarVisible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Mobile Menu Button */}
      <div className="sm:hidden flex justify-end">
        <button onClick={toggleMobileMenu} className="text-gray-800">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menu Items */}
      <div className={`w-full ${isOpen ? "flex flex-col justify-center items-center" : "hidden sm:flex sm:space-x-6 sm:justify-end"}`}>
        {menuLinks?.map((menu, index) => (
          <div
            key={index}
            className="relative sm:w-auto w-full group" // Add `group` here
          >
            <a
              href={menu.href}
              className="text-gray-800 flex items-center justify-center space-x-2 leading-none z-10 pr-5 py-2 hover:text-cyan-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="uppercase text-xs relative">
                {menu.name}
                {/* Hover underline */}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-200 group-hover:w-full`}
                ></span>
              </span>
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};
