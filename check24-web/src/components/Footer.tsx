"use client";

import Link from "next/link";
import Image from "next/image";
import mainLogo from "../../public/check24.svg";

function Footer() {
  return (
    <footer className="mx-auto p-4 bg-checkblue flex justify-center w-full">
      <div className="grid grid-cols-6 grid-rows-4 gap-8 p-3">
        <div className="col-span-2 row-span-4 flex flex-col gap-3">
          <div className="p-2 pb-0">
            <div className="flex justify-between items-start container -ml-5">
              <Link href="#">
                <Image className="pl-3" src={mainLogo} alt="CHECK24" />
              </Link>
            </div>
          </div>

          <div className="text-sm text-white font-semibold -mt-2">
            <span className="text-sm">Deutschlands größtes Vergleichsportal</span>
          </div>

          <div className="text-white p-2 flex justify-between text-center">
            <span className="text-sm hover:underline">AGB</span>
            <span className="text-sm">|</span>
            <span className="text-sm hover:underline">Datenschutz</span>
            <span className="text-sm">|</span>
            <span className="text-sm hover:underline">Impressum</span>
          </div>

          <div className="outline-2 outline-dashed outline-gray-400 p-2 text-red-400">
            <span className="text-sm">UNDER [socials]</span>
          </div>
        </div>

        <div className="col-span-1 row-span-4 p-2 text-white flex flex-col gap-1">
          <span className="text-sm font-bold pb-2">Über CHECK24</span>
          <span className="text-sm hover:underline">Karriere</span>
          <span className="text-sm hover:underline">Presse</span>
          <span className="text-sm hover:underline">Unternehmen</span>
          <span className="text-sm hover:underline">CHECK24 Österreich</span>
          <span className="text-sm hover:underline">CHECK24 Spanien</span>
        </div>

        <div className="col-span-1 row-span-4 p-2 text-white flex flex-col gap-1">
          <span className="text-sm font-bold pb-2">Unsere Partner</span>
          <span className="text-sm hover:underline">Partnerprogramm</span>
          <span className="text-sm hover:underline">Profi werden</span>
          <span className="text-sm hover:underline">Affiliate werden</span>
          <span className="text-sm hover:underline">Unterkunft anmelden</span>
        </div>

        <div className="col-span-1 row-span-4 p-2 text-white flex flex-col gap-1">
          <span className="text-sm font-bold pb-2">Unser Engagement</span>
          <span className="text-sm hover:underline">Nachhaltigkeit</span>
          <span className="text-sm hover:underline">CHECK24 hilft Kindern</span>
          <span className="text-sm hover:underline">CHECK24 hilft der Natur</span>
        </div>

        <div className="col-span-1 row-span-4 p-2 text-white flex flex-col gap-1">
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
