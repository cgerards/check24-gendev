"use client";

import Link from "next/link";

function BasicExample() {
  return (
    <nav className="bg-checkblue border-b py-4">
      <div className="max-w-8xl mx-auto px-1 sm:px-2 lg:px-4">
        <div className="flex justify-between h-16 items-start">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              MySite
            </Link>
            <div className='text-white ml-4'>Test</div>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link href="/" className="py-2 px-3 text-white hover:text-gray-200">
              Home
            </Link>
            <Link
              href="/about"
              className="py-2 px-3 text-white hover:text-gray-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="py-2 px-3 text-white hover:text-gray-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BasicExample;
