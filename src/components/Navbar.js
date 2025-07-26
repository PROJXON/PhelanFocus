"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll.current && current > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuLinks = [
    { name: "About", href: "/about" },
    {
      name: "Coaching",
      href: "/coaching",
      submenu: [
        { name: "Sessions", href: "/sessions" },
        { name: "Courses", href: "/courses" },
      ],
    },
    { name: "Consulting", href: "/consulting" },
    { name: "Speaking", href: "/speaking" },
    { name: "Podcast", href: "/podcast" },
    { name: "Books", href: "/books" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`bg-[#144a8f] text-white font-raleway shadow-md py-4 px-6 z-50 fixed top-0 left-0 w-full transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src="/PhelanFocusLOGO-02.png"
            alt="Phelan Focus Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center gap-8 items-center">
          {menuLinks.map((menu, index) =>
            menu.submenu ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setDesktopDropdownOpen(true)}
                onMouseLeave={() => setDesktopDropdownOpen(false)}
              >
                <Link
                  href={menu.href}
                  className={`text-lg px-4 py-2 relative inline-flex items-center gap-1 rounded-md transition duration-300 group ${pathname.startsWith(menu.href)
                      ? "bg-white/10"
                      : "hover:bg-white/10"
                    }`}
                >
                  {menu.name}
                  <FaChevronDown className="text-sm" />
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] ${pathname.startsWith(menu.href) ? "w-1/2" : "w-0"
                      } bg-white transition-all duration-300 group-hover:w-1/2`}
                  />
                  <span
                    className={`absolute bottom-0 right-0 h-[2px] ${pathname.startsWith(menu.href) ? "w-1/2" : "w-0"
                      } bg-white transition-all duration-300 group-hover:w-1/2`}
                  />
                </Link>

                {desktopDropdownOpen && (
                  <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 w-44 bg-[#144a8f] rounded-lg shadow-lg py-2 z-40">
                    <div className="absolute -top-3 left-0 w-full h-4" />
                    {menu.submenu.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sub.href}
                        className={`block px-4 py-2 text-white text-base transition ${pathname === sub.href
                            ? "bg-[#2b5ea5]"
                            : "hover:bg-[#2b5ea5]"
                          }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                href={menu.href}
                className={`text-lg px-4 py-2 relative inline-block rounded-md transition duration-300 group ${pathname === menu.href
                    ? "bg-white/10"
                    : "hover:bg-white/10"
                  }`}
              >
                {menu.name}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] ${pathname === menu.href ? "w-1/2" : "w-0"
                    } bg-white transition-all duration-300 group-hover:w-1/2`}
                />
                <span
                  className={`absolute bottom-0 right-0 h-[2px] ${pathname === menu.href ? "w-1/2" : "w-0"
                    } bg-white transition-all duration-300 group-hover:w-1/2`}
                />
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white text-2xl"
        >
          {mobileOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 px-4 flex flex-col gap-2">
          {menuLinks.map((menu, index) => (
            <div key={index} className="border-b border-white/20 flex flex-col">
              {menu.submenu ? (
                <div className="flex justify-between items-center">
                  <Link
                    href={menu.href}
                    className={`text-white text-lg py-2 ${pathname.startsWith(menu.href) ? "bg-white/10" : ""
                      }`}
                  >
                    {menu.name}
                  </Link>
                  <button
                    onClick={() =>
                      setMobileDropdownOpen(
                        mobileDropdownOpen === menu.name ? false : menu.name
                      )
                    }
                    className="text-white pr-2"
                  >
                    {mobileDropdownOpen === menu.name ? (
                      <FaChevronUp className="text-sm" />
                    ) : (
                      <FaChevronDown className="text-sm" />
                    )}
                  </button>
                </div>
              ) : (
                <Link
                  href={menu.href}
                  className={`text-white text-lg py-2 ${pathname === menu.href ? "bg-white/10" : ""
                    }`}
                >
                  {menu.name}
                </Link>
              )}

              {mobileDropdownOpen === menu.name &&
                menu.submenu &&
                menu.submenu.map((sub, subIndex) => (
                  <Link
                    key={subIndex}
                    href={sub.href}
                    className={`block text-white/90 text-base pl-6 py-1 ${pathname === sub.href ? "bg-white/10" : ""
                      }`}
                  >
                    {sub.name}
                  </Link>
                ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;