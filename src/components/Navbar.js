"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

export const Navbar = ({ isFooter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const menuRefs = useRef([]);
  const barRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState(0);
  const menuLinks = [
    { name: "About", href: "/about" },
    { name: "Coaching", href: "/coaching" },
    { name: "Speaking", href: "/speaking" },
    { name: "Consulting", href: "/consulting" },
    { name: "Services", href: "/services" },
    { name: "Podcast", href: "/podcast" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  const handleMouseMove = (e) => {
    const navbar = e.target.closest("nav");
    if (navbar) {
      const { left, width } = navbar.getBoundingClientRect();
      const newCursorPosition = e.clientX - left;
      setCursorPosition(Math.min(Math.max(newCursorPosition, 0), width));
    }
  };

  return (
    <nav
      className="fixed w-full top-0 left-0 z-50 p-4 bg-white dark:bg-[#144a8f] dark:text-white shadow-md"
      onMouseMove={handleMouseMove}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img
            src="/PhelanFocusLOGO-02.png"
            alt="Phelan Focus Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-6 justify-center flex-1">
          {menuLinks.map((menu, index) => (
            <Link
              key={index}
              href={menu.href}
              ref={(el) => (menuRefs.current[index] = el)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="uppercase text-sm tracking-widest text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
            >
              {menu.name}
            </Link>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        {/* <div className="ml-auto">
          <DarkModeToggle />
        </div> */}

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="sm:hidden text-2xl text-gray-800 dark:text-white ml-4"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden mt-2 flex flex-col items-center gap-3">
          {menuLinks.map((menu, index) => (
            <Link
              key={index}
              href={menu.href}
              className="text-gray-800 dark:text-white py-2 border-b border-gray-300 dark:border-gray-600 w-full text-center"
            >
              {menu.name}
            </Link>
          ))}
        </div>
      )}

      {/* Hover underline */}
      <div
        ref={barRef}
        className="absolute bottom-0 left-0 h-[3px] bg-blue-500 transition-all duration-300 ease-in-out hidden sm:block"
        style={{
          width: hoveredIndex !== null ? "66px" : "0px",
          transform: `translateX(${hoveredIndex !== null ? menuRefs.current[hoveredIndex]?.offsetLeft || 0 : cursorPosition - 75}px)`,
          opacity: hoveredIndex !== null ? "1" : "0",
        }}
      />
    </nav>
  );
};
