"use client";

import { useState, useRef, useEffect } from "react";

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
    setIsNavbarVisible(false);
    isNavigating.current = true;
  };

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      // If the user has navigated via a menu link, don't let scroll hide the navbar
      if (isNavigating.current) {
        isNavigating.current = false; // Reset navigation state after the next scroll
        setIsNavbarVisible(true); // Make navbar visible after navigation
        return;
      }

      const currentScrollPos = window.scrollY;

      // Always show navbar when scrolling (up or down)
      setIsNavbarVisible(true);

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full p-4 bg-white relative transition-opacity duration-300 ${isNavbarVisible ? "opacity-100" : "opacity-0"}`}
      onMouseMove={handleMouseMove}
    >
      <div className="sm:hidden flex justify-end">
        <button onClick={toggleMobileMenu} className="text-gray-800">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      <div className={`w-full ${isOpen ? "flex flex-col justify-center items-center" : "hidden sm:flex sm:space-x-6 sm:justify-end"}`}>
        {menuLinks?.map((menu, index) => (
          <div
            key={index}
            ref={(el) => (menuRefs.current[index] = el)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative sm:w-auto w-full"
          >
            <a
              href={menu.href} // Anchor link to navigate to the section
              className={`text-gray-800 flex items-center justify-center ${isOpen ? "w-full center border-b-2 !border-r-0" : ""} space-x-2 leading-none z-10 pr-5
                ${index === menuLinks.length - 1 ? "!border-r-0" : "border-r-[1px]"}`}
              onClick={(e) => handleMenuClick(index, menu.submenus?.length > 0, menu.href, e)}
            >
              <span className={`hover:text-blue-500 tracking-widest uppercase text-xs ${openMenu === index ? "text-blue-500" : "text-gray-800"}`}>
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
