"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: for icons (install lucide-react)

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center backdrop-blur-sm bg-black/50">
      <div className="flex w-full max-w-screen-2xl items-center justify-between px-6 py-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-white">
            Aevio
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center space-x-9">
            <li>
              <Link
                href="/controller"
                className="text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:text-gray-300"
              >
                Controller
              </Link>
            </li>
            <li>
              <Link
                href="/docs"
                className="text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:text-gray-300"
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:text-gray-300"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md md:hidden">
          <ul className="flex flex-col items-center space-y-6 py-6">
            <li>
              <Link
                href="/controller"
                onClick={toggleMenu}
                className="text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:text-gray-300"
              >
                Controller
              </Link>
            </li>
            <li>
              <Link
                href="/docs"
                onClick={toggleMenu}
                className="text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:text-gray-300"
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={toggleMenu}
                className="text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:text-gray-300"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}