"use client";

import { useState } from "react";

export function Navbar() {

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center backdrop-blur-sm">
      <div className="flex w-full max-w-screen-2xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#" className="flex items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-white">
            Aevio
          </span>
        </a>

        <div className="hidden md:block">
          <ul className="flex items-center space-x-9">
            <li>
              <a
              href="/controller"
              className="text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:text-gray-300"
              >Controller
              </a>
            </li>

            <li>
              <a
                href="/docs"
                className="text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:text-gray-300"
              >
                Docs
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:text-gray-300"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}