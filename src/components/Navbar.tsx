'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';
import { MenuLinkWithSubmenu } from '@/types/interfaces';
import { useThrottledScroll } from '@/hooks/useThrottledScroll';

const NAV_FONT = 'font-[family-name:var(--font-heading)] tracking-wide';

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | false>(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScroll = useRef(0);

  useThrottledScroll((current) => {
    const shouldShow = !(current > lastScroll.current && current > 80);
    lastScroll.current = current;
    setShowNavbar((prev) => (prev === shouldShow ? prev : shouldShow));
  });

  const menuLinks: MenuLinkWithSubmenu[] = [
    { text: 'Home', href: '/' },
    { text: 'Podcast', href: '/podcast' },
    {
      text: 'Coaching',
      href: '/coaching',
      submenu: [
        { text: 'Sessions', href: '/sessions' },
        { text: 'Courses', href: '/courses' },
        // { text: 'Books', href: '/books' },
      ],
    },
    { text: 'Consulting', href: '/consulting' },
    { text: 'Speaking', href: '/speaking' },
    // { text: 'Appearances', href: '/appearances' },
  ];

  return (
    <nav
      className={`bg-[#142c46] text-white shadow-md py-4 px-6 z-50 fixed top-0 left-0 w-full transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
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
                  className={`${NAV_FONT} text-lg px-4 py-2 relative inline-flex items-center gap-1 rounded-md transition duration-300 group ${
                    pathname.startsWith(menu.href) ? 'bg-white/10' : 'hover:bg-white/10'
                  }`}
                >
                  {menu.text}
                  <FaChevronDown className="text-sm" />
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] ${
                      pathname.startsWith(menu.href) ? 'w-1/2' : 'w-0'
                    } bg-white transition-all duration-300 group-hover:w-1/2`}
                  />
                  <span
                    className={`absolute bottom-0 right-0 h-[2px] ${
                      pathname.startsWith(menu.href) ? 'w-1/2' : 'w-0'
                    } bg-white transition-all duration-300 group-hover:w-1/2`}
                  />
                </Link>

                <div
                  className={`absolute top-full left-1/2 w-48 bg-[#142c46] border border-white/10 rounded-xl shadow-xl py-2 z-40 transition-all duration-200 ease-out ${
                    desktopDropdownOpen
                      ? 'opacity-100 translate-x-[-50%] translate-y-0 pointer-events-auto'
                      : 'opacity-0 translate-x-[-50%] -translate-y-1 pointer-events-none'
                  }`}
                >
                  <div className="absolute -top-3 left-0 w-full h-4" />
                  {menu.submenu.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sub.href}
                      className={`${NAV_FONT} block mx-2 px-3 py-2 rounded-lg text-white text-base transition-colors duration-200 ${
                        pathname === sub.href
                          ? 'bg-[var(--gold)] text-[var(--slateBlue)]'
                          : 'hover:bg-white/10'
                      }`}
                    >
                      {sub.text}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                href={menu.href}
                className={`${NAV_FONT} text-lg px-4 py-2 relative inline-block rounded-md transition duration-300 group ${
                  pathname === menu.href ? 'bg-white/10' : 'hover:bg-white/10'
                }`}
              >
                {menu.text}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] ${
                    pathname === menu.href ? 'w-1/2' : 'w-0'
                  } bg-white transition-all duration-300 group-hover:w-1/2`}
                />
                <span
                  className={`absolute bottom-0 right-0 h-[2px] ${
                    pathname === menu.href ? 'w-1/2' : 'w-0'
                  } bg-white transition-all duration-300 group-hover:w-1/2`}
                />
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden text-white text-2xl p-1 rounded-md transition-colors duration-200 hover:bg-white/10"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="mt-4 px-2 pb-2 flex flex-col gap-1">
              {menuLinks.map((menu, index) => (
                <div key={index} className="flex flex-col">
                  {menu.submenu ? (
                    <div
                      className={`flex justify-between items-center rounded-lg transition-colors duration-200 ${
                        pathname.startsWith(menu.href) ? 'bg-white/10' : ''
                      }`}
                    >
                      <Link
                        href={menu.href}
                        className={`${NAV_FONT} relative flex-1 text-white text-lg px-3 py-3 ${
                          pathname.startsWith(menu.href) ? 'pl-4' : ''
                        }`}
                      >
                        {pathname.startsWith(menu.href) && (
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] rounded-full bg-[var(--gold)]" />
                        )}
                        {menu.text}
                      </Link>
                      <button
                        onClick={() =>
                          setMobileDropdownOpen(mobileDropdownOpen === menu.text ? false : menu.text)
                        }
                        aria-label={mobileDropdownOpen === menu.text ? 'Collapse submenu' : 'Expand submenu'}
                        className="text-white pr-4 py-3"
                      >
                        {mobileDropdownOpen === menu.text ? (
                          <FaChevronUp className="text-sm" />
                        ) : (
                          <FaChevronDown className="text-sm" />
                        )}
                      </button>
                    </div>
                  ) : (
                    <Link
                      href={menu.href}
                      className={`${NAV_FONT} relative text-white text-lg px-3 py-3 rounded-lg transition-colors duration-200 ${
                        pathname === menu.href ? 'bg-white/10 pl-4' : 'hover:bg-white/5'
                      }`}
                    >
                      {pathname === menu.href && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] rounded-full bg-[var(--gold)]" />
                      )}
                      {menu.text}
                    </Link>
                  )}

                  <AnimatePresence initial={false}>
                    {mobileDropdownOpen === menu.text && menu.submenu && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col pl-4 py-1 gap-1">
                          {menu.submenu.map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              href={sub.href}
                              className={`${NAV_FONT} block text-base pl-4 py-2 rounded-lg transition-colors duration-200 ${
                                pathname === sub.href
                                  ? 'bg-[var(--gold)] text-[var(--slateBlue)]'
                                  : 'text-white/80 hover:bg-white/5'
                              }`}
                            >
                              {sub.text}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {index < menuLinks.length - 1 && (
                    <div className="border-b border-white/10 mt-1" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
