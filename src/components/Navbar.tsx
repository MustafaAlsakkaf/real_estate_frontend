import { useEffect, useRef, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLImageElement | null>(null);

  // ✅ Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (menuRef.current && menuRef.current.contains(target)) return;
      if (buttonRef.current && buttonRef.current.contains(target)) return;
      setShowMobileMenu(false);
    };
    if (showMobileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* Logo */}
        <a href="#Header" className="flex items-center gap-2">
          <img
            src={assets.logo2}
            alt="Deal Service Logistics"
            className="h-24 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-16 text-white flex-row">
          <a href="#Header" className="cursor-pointer text-lg hover:text-gray-400">
            <li>Home</li>
          </a>
          <a href="#About" className="cursor-pointer text-lg hover:text-gray-400">
            <li>About</li>
          </a>
          <a href="#Services" className="cursor-pointer text-lg hover:text-gray-400">
            <li>Services</li>
          </a>
           <a href="#FAQ" className="cursor-pointer text-lg hover:text-gray-400">
            <li>FAQ</li>
          </a>
          {/* <a href="#Contact" className="cursor-pointer text-lg hover:text-gray-400">
            <li>Contact</li>
          </a> */}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* 🔍 Modern Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-96 rounded-2xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all"
/>

            <svg
              className="absolute left-3 top-2.5 w-5 h-5 text-gray-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
            </svg>
          </div>

          {/* Hamburger Menu (mobile only) */}
          <img
            ref={buttonRef}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            src={assets.menu_icon}
            alt="Menu"
            className="md:hidden w-7 cursor-pointer"
          />
        </div>
      </div>

      {/* ✅ Mobile Dropdown */}
      <div
        ref={menuRef}
        style={{
          maxHeight: showMobileMenu ? menuRef.current?.scrollHeight : 0,
          opacity: showMobileMenu ? 1 : 0,
        }}
        className="md:hidden bg-gray-900 text-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
      >
        <ul className="flex flex-col items-start gap-4 p-6 text-lg font-medium">
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className="hover:text-gray-400">
            <li>Home</li>
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className="hover:text-gray-400">
            <li>About</li>
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#Services" className="hover:text-gray-400">
            <li>Services</li>
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#FAQ" className="hover:text-gray-400">
            <li>FAQ</li>
          </a>
          {/* <a onClick={() => setShowMobileMenu(false)} href="#Contact" className="hover:text-gray-400">
            <li>Contact</li>
          </a> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
