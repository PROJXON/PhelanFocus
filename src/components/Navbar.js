"use client"; // Add this to mark this as a client component

import { useState, useRef, useEffect } from "react";

export const Navbar = ({ menuLinks, isFooter }) => {
  const [openMenu, setOpenMenu] = useState(null); // Tracks which menu is open
  const [isOpen, setIsOpen] = useState(false); // Tracks if the mobile menu is open
  const [cursorPosition, setCursorPosition] = useState(0); // Tracks the cursor position
  const menuRefs = useRef([]); // Ref array to track menu items
  const barRef = useRef(null); // Ref to the hover bar element

  // Close all menus when clicking outside of the navbar
  const handleClickOutside = (event) => {
    if (
      menuRefs.current &&
      !menuRefs.current.some((ref) => ref?.contains(event.target))
    ) {
      setOpenMenu(null); // Close all menus when clicking outside
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the navbar
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Handle mouse movement to update the position of the cursor bar
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
      if (window.innerWidth >= 640) { // Tailwind's `sm` breakpoint
        setIsOpen(false); // Close the hamburger menu on larger screens
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  // Track if the mouse is hovering over a menu item
  const handleMouseEnter = () => {
    if (barRef.current) {
      barRef.current.style.opacity = "1"; // Show the bar when hovering over a menu
    }
  };

  const handleMouseLeave = () => {
    if (barRef.current) {
      barRef.current.style.opacity = "0"; // Hide the bar when not hovering over a menu
    }
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu visibility
  };

  return (
    <nav
      className="w-full p-4 bg-gray-800 relative"
      onMouseMove={handleMouseMove} // Track mouse movement over the navbar
    >
      {/* Mobile Hamburger Menu */}
      <div className="sm:hidden flex justify-between items-center">
        <button onClick={toggleMobileMenu} className="text-white">
          {/* Hamburger Icon */}
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Navbar Links (Collapsing Behavior for Mobile) */}
      <div
        className={`sm:flex ${isOpen ? "flex-col" : "hidden"} sm:space-x-6 sm:justify-end`}
      >
        {menuLinks?.map((menu, index) => (
          <div
            className="relative"
            key={index}
            ref={(el) => (menuRefs.current[index] = el)} // Set ref for each menu
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center space-x-2">
              {/* Menu Item */}
              <button
                className="text-white"
                onClick={() => window.location.href = menu.href} // Navigate to the link on click
              >
                <span>{menu.name}</span> 
              </button>

              {/* Only show the triangle if there are submenus */}
              {menu.submenus.length > 0 && (
                <span
                  className={`cursor-pointer text-white transition-transform duration-300 transform ${
                    openMenu === index ? "rotate-180" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the parent button's click from triggering
                    setOpenMenu(openMenu === index ? null : index); // Toggle the submenu
                  }}
                >
                  ▴ {/* Triangle */}
                </span>
              )}
            </div>

            {/* Submenus (Desktop View only) */}
            <div
              className={`absolute top-full mt-1 min-w-[150px] bg-gray-700 text-white rounded-md shadow-md z-50 transform -translate-x-1/2 transition-all duration-300 ${
                openMenu === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden sm:block hidden`} // Make sure the regular menu items are only visible on larger screens (hidden on mobile)
            >
              {menu.submenus?.map((submenu, idx) => (
                <a
                  key={idx}
                  href={submenu.href}
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  {submenu.name}
                </a>
              ))}
            </div>

            {/* Mobile Collapsible Submenus */}
            <div className="sm:hidden flex flex-col mt-2">
              {openMenu === index &&
                menu.submenus?.map((submenu, idx) => (
                  <a
                    key={idx}
                    href={submenu.href}
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    {submenu.name}
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Cursor Follow Bar (Only visible on larger screens) */}
      <div
        ref={barRef}
        className="absolute bottom-0 left-0 h-[8px] bg-cyan-500 transition-all duration-400 ease-in-out hidden sm:block"
        style={{
          width: "150px",
          transform: `translateX(${cursorPosition - 66}px)`,
          opacity: "0", // Initially hidden
        }}
      />
    </nav>
  );
};
