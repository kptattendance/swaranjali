"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (path) =>
    `hover:text-secondary transition ${
      pathname === path ? "text-secondary font-semibold" : ""
    }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-primary py-3 shadow-xl" : "bg-primary py-5"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Swaranjali
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-lg relative">
          <Link href="/" className={navLinkClass("/")}>
            Home
          </Link>

          <Link href="/about" className={navLinkClass("/about")}>
            About
          </Link>

          <Link href="/courses" className={navLinkClass("/courses")}>
            Courses
          </Link>

          <Link href="/events" className={navLinkClass("/events")}>
            Events
          </Link>

          <Link href="/achievements" className={navLinkClass("/achievements")}>
            Achievements
          </Link>

          <Link href="/gallery" className={navLinkClass("/gallery")}>
            Gallery
          </Link>

          <Link href="/contact" className={navLinkClass("/contact")}>
            Contact
          </Link>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <FaTimes size={24} onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars size={24} onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary px-6 pb-6 space-y-4 text-lg">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link href="/courses" onClick={() => setMenuOpen(false)}>
            Courses
          </Link>

          <Link href="/events" onClick={() => setMenuOpen(false)}>
            Events
          </Link>

          <Link href="/achievements" onClick={() => setMenuOpen(false)}>
            Achievements
          </Link>

          <Link href="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
