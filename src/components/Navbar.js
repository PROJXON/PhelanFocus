"use client";

import { useState, useRef, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

export const Navbar = ({ isFooter }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const menuRefs = useRef([]);
  const barRef = useRef(null);
  const prevScrollPos = useRef(0);
  const isNavigating = useRef(false); // Track if the user has navigated via a menu link

  const menuLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Podcast", href: "#podcast" },
    { name: "Contact", href: "#contact" },
  ];

  // Update cursor position
  const handleMouseMove = (e) => {
    const navbar = e.target.closest("nav");
    if (navbar) {
      const { left, width } = navbar.getBoundingClientRect();
      const newCursorPosition = e.clientX - left;
      setCursorPosition(Math.min(Math.max(newCursorPosition, 0), width));
    }
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => setIsOpen(!isOpen);

  // Handle menu item click (anchor link navigation)
  const handleMenuClick = () => {
    setIsNavbarVisible(true);
    isNavigating.current = true;
  };

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos.current > currentScrollPos;

      // Show navbar when scrolling up or at top, hide when scrolling down
      if (!isNavigating.current) {
        setIsNavbarVisible(isScrollingUp || currentScrollPos < 50);
      }

      prevScrollPos.current = currentScrollPos;
      isNavigating.current = false;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    //bg-gradient-to-t from-white to-blue-500 Taken out due to design conflicts. Not good design conflicts for gradients in navbar area. Not sleek.
      className={`dark:bg-[#0b1727] dark:text-white w-full p-4 bg-white fixed top-0 left-0 transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      onMouseMove={handleMouseMove}
    >
      <div className="sm:hidden flex justify-end">
        <button onClick={toggleMobileMenu} className="text-gray-800 dark:text-white">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      
      <div className={`w-full ${isOpen ? "flex flex-col justify-center items-center" : "hidden sm:flex sm:space-x-6 sm:justify-end"}`}>
        <DarkModeToggle />
        {menuLinks?.map((menu, index) => (
          <div
            key={index}
            ref={(el) => (menuRefs.current[index] = el)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative sm:w-auto w-full"
          >
            <a
              href={menu.href}
              className={`text-gray-800 flex items-center justify-center ${isOpen ? "w-full center border-b-2 !border-r-0" : ""} space-x-2 leading-none z-10 pr-5
                ${index === menuLinks.length - 1 ? "!border-r-0" : "border-r-[1px]"}`}
              onClick={handleMenuClick}
            >
              <span className={`dark:bg-[#0b1727] dark:text-white dark:hover:text-blue-500 hover:text-blue-500 tracking-widest uppercase text-xs ${openMenu === index ? "text-blue-500" : "text-gray-800"}`}>
                {menu.name}
              </span>
            </a>
            
          </div>
        ))}
      </div>

      {/* Animated Hover Bar */}
      <div
        ref={barRef}
        className="absolute bottom-0 left-0 h-[8px] bg-blue-500 transition-all duration-400 ease-in-out hidden sm:block"
        style={{
          width: hoveredIndex !== null ? "66px" : "0px",
          transform: `translateX(${hoveredIndex !== null ? menuRefs.current[hoveredIndex]?.offsetLeft || 0 : cursorPosition - 75}px)`,
          opacity: hoveredIndex !== null ? "1" : "0",
        }}
      />
    </nav>
  );
};
