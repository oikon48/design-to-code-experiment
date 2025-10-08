"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-[1920px] mx-auto px-[300px] py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg"></div>
              <span className="text-2xl font-semibold text-gray-900">Brooklyn</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-0">
            <Link href="#home" className="px-6 py-3 text-base text-gray-900 hover:text-primary-500 transition-colors">
              Home
            </Link>
            <Link href="#about" className="px-6 py-3 text-base text-gray-700 hover:text-primary-500 transition-colors">
              About
            </Link>
            <Link href="#process" className="px-6 py-3 text-base text-gray-700 hover:text-primary-500 transition-colors">
              Process
            </Link>
            <Link href="#portfolio" className="px-6 py-3 text-base text-gray-700 hover:text-primary-500 transition-colors">
              Portfolio
            </Link>
            <Link href="#blog" className="px-6 py-3 text-base text-gray-700 hover:text-primary-500 transition-colors">
              Blog
            </Link>
            <Link href="#services" className="px-6 py-3 text-base text-gray-700 hover:text-primary-500 transition-colors">
              Services
            </Link>
            <button className="ml-6 px-6 py-3 bg-primary-500 text-white text-base font-medium rounded-lg hover:bg-primary-900 transition-colors">
              Contact Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
