"use client";

import Link from "next/link";
import Image from "next/image";
import mainLogo from "../../public/check24.svg";

import facebook from "../../public/facebook.svg";
import instagram from "../../public/instagram.svg";
import youtube from "../../public/youtube.svg";
import tiktok from "../../public/tiktok.svg";

function Footer() {
  return (
    <footer className="mx-auto p-4 bg-checkblue flex justify-center w-full">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 p-3">
        <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-3">
          <div className="p-2 pb-0">
            <div className="flex justify-between items-start container lg:-ml-5">
              <Link href="/">
                <Image className="pl-3" src={mainLogo} alt="CHECK24" />
              </Link>
            </div>
          </div>

          <div className="text-sm text-white font-semibold lg:-mt-2">
            <span className="text-sm">
              Deutschlands größtes Vergleichsportal
            </span>
          </div>

          <div className="text-white p-2 flex sm:justify-center lg:justify-start w-full gap-x-2 lg:-ml-2">
            <span className="text-sm hover:underline">
              <Link href="/about">AGB</Link>
            </span>
            <span className="text-sm">|</span>
            <span className="text-sm hover:underline">
              <Link href="/about">Datenschutz</Link>
            </span>
            <span className="text-sm">|</span>
            <span className="text-sm hover:underline">
              <Link href="/about">Impressum</Link>
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2 w-50 -ml-2">
            <span className="aspect-square text-sm flex justify-center items-start">
              <Link href="/about">
                <Image className="w-8" src={facebook} alt="facebook" />
              </Link>
            </span>
            <span className="aspect-square text-sm flex justify-center items-start">
              <Link href="/about">
                <Image className="w-8" src={instagram} alt="instagram" />
              </Link>
            </span>
            <span className="aspect-square text-sm flex justify-center items-start">
              <Link href="/about">
                <Image className="w-8" src={youtube} alt="youtube" />
              </Link>
            </span>
            <span className="aspect-square text-sm flex justify-center items-start">
              <Link href="/about">
                <Image className="w-8" src={tiktok} alt="tiktok" />
              </Link>
            </span>
          </div>
        </div>

        <div className="hidden lg:flex col-span-1 row-span-4 p-2 text-white flex-col gap-1">
          <span className="text-sm font-bold pb-2">Über CHECK24</span>
          <span className="text-sm hover:underline">Karriere</span>
          <span className="text-sm hover:underline">Presse</span>
          <span className="text-sm hover:underline">Unternehmen</span>
          <span className="text-sm hover:underline">CHECK24 Österreich</span>
          <span className="text-sm hover:underline">CHECK24 Spanien</span>
        </div>

        <div className="hidden lg:flex col-span-1 row-span-4 p-2 text-white flex-col gap-1">
          <span className="text-sm font-bold pb-2">Unsere Partner</span>
          <span className="text-sm hover:underline">Partnerprogramm</span>
          <span className="text-sm hover:underline">Profi werden</span>
          <span className="text-sm hover:underline">Affiliate werden</span>
          <span className="text-sm hover:underline">Unterkunft anmelden</span>
        </div>

        <div className="hidden lg:flex col-span-1 row-span-4 p-2 text-white flex-col gap-1">
          <span className="text-sm font-bold pb-2">Unser Engagement</span>
          <span className="text-sm hover:underline">Nachhaltigkeit</span>
          <span className="text-sm hover:underline">CHECK24 hilft Kindern</span>
          <span className="text-sm hover:underline">
            CHECK24 hilft der Natur
          </span>
        </div>

        <div className="hidden lg:flex col-span-1 row-span-4 p-2 text-white flex-col gap-1">
          <span className="text-sm font-bold pb-2">Unser Service für Sie</span>
          <span className="text-sm hover:underline">Hilfe und Kontakt</span>
          <span className="text-sm hover:underline">CHECK24 App</span>
          <span className="text-sm hover:underline">CHECK24 Gutscheine</span>
          <span className="text-sm hover:underline">CHECK24 Punkte</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
