"use client";

import Link from "next/link";
import Image from "next/image";
import mainLogo from "../../public/check24.svg";
import user from "../../public/user.svg";

function CheckNavbar() {
  return (
    <nav className="bg-checkblue border-b pt-6">
      <div className="max-w-8xl mx-auto px-1 sm:px-2 lg:px-10">
        <div className="flex justify-between h-12 items-start">
          <div className="flex items-center">
            <div className="container">
              <Link href="/">
                <Image className="pl-3" src={mainLogo} alt="CHECK24" />
              </Link>
            </div>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link
              href="/about"
              className="py-2 px-1 text-white hover:text-gray-400"
            >
              About
            </Link>
            <Link
              href="/about"
              className="py-2 px-1 text-white hover:text-gray-400"
            >
              Contact
            </Link>

            <Link
              href="/login"
              className="py-2 pr-3 text-white hover:text-gray-400 flex items-center gap-x-2"
            >
              <Image
                className="invert"
                src={user}
                alt="Anmelden"
                width={24}
                height={24}
              />
              <span>Anmelden</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CheckNavbar;
