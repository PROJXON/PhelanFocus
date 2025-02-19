"use client";

import { useState, useRef, useEffect } from "react";

export const Navbar = ({ menuLinks, isFooter }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const menuRefs = useRef([]);
  const barRef = useRef(null);
  let prevScrollPos = useRef(0);

  // Click outside to close menu
  const handleClickOutside = (event) => {
    if (!menuRefs.current.some((ref) => ref?.contains(event.target))) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

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

  // Handle menu item click
  const handleMenuClick = (index, hasSubmenus, href, event) => {
    if (hasSubmenus) {
      event.preventDefault();
      setOpenMenu(openMenu === index ? null : index);
    } else {
      window.location.href = href;
    }
  };

  // Scroll detection logic
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
            <button
              className={`text-gray-800 flex items-center justify-center ${isOpen ? "w-full center border-b-2 !border-r-0" : ""} space-x-2 leading-none z-10 pr-5
                ${index === menuLinks.length - 1 ? "!border-r-0" : "border-r-[1px]"}`}
              onClick={(e) => handleMenuClick(index, menu.submenus.length > 0, menu.href, e)}
            >
              <span className={`hover:text-cyan-500 tracking-widest uppercase text-xs ${openMenu === index ? "text-cyan-500" : "text-gray-800"}`}>
                {menu.name}
              </span>
              {menu.submenus.length > 0 && (
                <span
                  className={`hover:text-cyan-500 transition-transform duration-200 ${openMenu === index ? "rotate-270 text-cyan-500" : "rotate-90"} 
                    ${isOpen ? "ml-auto border-2" : ""}`}
                >
                  «
                </span>
              )}
            </button>

            {menu.submenus.length > 0 && (
              <div
                className={`uppercase text-xs absolute top-full mt-4 right-1 shadow-xl bg-white text-gray-800 rounded-bl-md rounded-br-md shadow-md z-50 transition-all duration-300 overflow-hidden sm:block hidden w-auto 
                  ${openMenu === index ? "opacity-100" : "max-h-0 opacity-0"}`}
              >
                {menu.submenus.map((submenu, idx) => (
                  <a key={idx} href={submenu.href} className="hover: text-cyan-500 inline-block whitespace-nowrap px-4 py-2 text-gray-800 relative group z-10">
                    {submenu.name}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></div>
                  </a>
                ))}
              </div>
            )}

            <div className="sm:hidden flex flex-col mt-2">
              {openMenu === index &&
                menu.submenus.map((submenu, idx) => (
                  <a key={idx} href={submenu.href} className="block uppercase text-xs px-4 py-2 hover:bg-cyan-500">
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