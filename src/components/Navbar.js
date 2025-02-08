"use client";

import { useState, useRef, useEffect } from "react";

export const Navbar = ({ menuLinks, isFooter }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // State to track navbar visibility
  const menuRefs = useRef([]);
  const barRef = useRef(null);
  let prevScrollPos = useRef(0); // Use a ref to store the previous scroll position

  const handleClickOutside = (event) => {
    if (!menuRefs.current.some((ref) => ref?.contains(event.target))) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleMouseMove = (e) => {
    const navbar = e.target.closest("nav");
    if (navbar) {
      const { left, width } = navbar.getBoundingClientRect();
      const newCursorPosition = e.clientX - left;
      setCursorPosition(Math.min(Math.max(newCursorPosition, 0), width));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  const handleMenuClick = (index, hasSubmenus, href, event) => {
    if (hasSubmenus) {
      event.preventDefault(); // Prevents navigation when clicking menu items with submenus
      setOpenMenu(openMenu === index ? null : index);
    } else {
      window.location.href = href;
    }
  };

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos.current) {
        setIsNavbarVisible(false); // Scroll down, hide navbar
      } else {
        setIsNavbarVisible(true); // Scroll up, show navbar
      }
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full p-4 bg-white relative transition-opacity duration-300 ${
        isNavbarVisible ? "opacity-100" : "opacity-0"
      }`}
      onMouseMove={handleMouseMove}
    >
      <div className="sm:hidden flex justify-between items-center">
        <button onClick={toggleMobileMenu} className="text-gray-800">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      <div className={`sm:flex ${isOpen ? "flex-col" : "hidden"} sm:space-x-6 sm:justify-end`}>
        {menuLinks?.map((menu, index) => (
          <div
            className="relative"
            key={index}
            ref={(el) => (menuRefs.current[index] = el)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <button
              className={`border-r-[1px] pr-5 border-black text-gray-800 flex items-center space-x-2 leading-none relative z-10 ${
                index === menuLinks.length - 1 ? 'border-r-0' : ''
              }`}
              onClick={(e) => handleMenuClick(index, menu.submenus.length > 0, menu.href, e)}
            >
              <span className={`tracking-widest uppercase text-xs ${openMenu === index ? "text-cyan-500" : "text-gray-800"}`}>{menu.name}</span>
              {menu.submenus.length > 0 && (
                <span
                  className={`transition-transform duration-200 ${openMenu === index ? "text-cyan-500" : "text-gray-800"}`}
                  style={{
                    transform: `rotate(${openMenu === index ? 270 : 90}deg)`,
                    transformOrigin: "center"
                  }}
                >
                  «
                </span>
              )}
            </button>

            {menu.submenus.length > 0 && (
              <div
                className={`hover:text-cyan-500 uppercase text-xs absolute top-full mt-4 r-1 shadow-xl bg-white text-gray-800 rounded-bl-md rounded-br-md shadow-md z-50 transition-all duration-300 ${
                  openMenu === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden sm:block hidden right-0 w-auto`}
              >
                {menu.submenus.map((submenu, idx) => (
                  <a key={idx} href={submenu.href} className="inline-block whitespace-nowrap px-4 py-2 hover:bg-gray-100">
                    {submenu.name}
                  </a>
                ))}
              </div>
            )}

            <div className="sm:hidden flex flex-col mt-2">
              {openMenu === index &&
                menu.submenus.map((submenu, idx) => (
                  <a key={idx} href={submenu.href} className="block px-4 py-2 hover:bg-gray-600">
                    {submenu.name}
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Animated Hover Bar */}
      <div
        ref={barRef}
        className="absolute bottom-0 left-0 h-[8px] bg-cyan-500 transition-all duration-400 ease-in-out hidden sm:block"
        style={{
          width: hoveredIndex !== null ? "66px" : "0px",
          transform: `translateX(${hoveredIndex !== null ? menuRefs.current[hoveredIndex]?.offsetLeft || 0 : cursorPosition - 75}px)`,
          opacity: hoveredIndex !== null ? "1" : "0",
        }}
      />
    </nav>
  );
};
