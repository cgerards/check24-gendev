"use client";

import Link from "next/link";
import Image from "next/image";
import mainLogo from "../../public/check24.svg";

function CheckNavbar() {
  return (
    <nav className="bg-checkblue border-b pt-6">
      <div className="max-w-8xl mx-auto px-1 sm:px-2 lg:px-10">
        <div className="flex justify-between h-12 items-start">
          <div className="flex items-center">
            <div className="container">
              <Link href="#">
                <Image className="pl-3" src={mainLogo} alt="CHECK24" />
              </Link>
            </div>
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
        
        
        <div className="flex text-white text-sm font-semibold">
          <div className="hover:bg-sky-700 py-3 px-3">Verischerungen</div>
          <div className="hover:bg-sky-700 py-3 px-3">Konto & Kredit</div>
          <div className="hover:bg-sky-700 py-3 px-3">Strom & Gas</div>
          <div className="hover:bg-sky-700 py-3 px-3">Internet</div>
          <div className="hover:bg-sky-700 py-3 px-3">Handy</div>
          <div className="hover:bg-sky-700 py-3 px-3">Reise</div>
          <div className="hover:bg-sky-700 py-3 px-3">Flüge</div>
          <div className="hover:bg-sky-700 py-3 px-3">Hotel & Ferienwohnung</div>
          <div className="hover:bg-sky-700 py-3 px-3">Mietwagen</div>
          <div className="hover:bg-sky-700 py-3 px-3">Profis</div>
          <div className="hover:bg-sky-700 py-3 px-3">Reifen</div>
          <div className="hover:bg-sky-700 py-3 px-3">Möbel</div>
          <div className="hover:bg-sky-700 py-3 px-3">Technik</div>
          <div className="hover:bg-sky-700 py-3 px-3">Steuer</div>
          <div className="hover:bg-sky-700 py-3 px-3">Fußball</div>
        </div>
      </div>
    </nav>
  );
}

export default CheckNavbar;
