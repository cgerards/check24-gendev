"use client";

import Image from "next/image";

interface GridItem {
  src: string;
  alt: string;
}

interface FeaturedGridProps {
  title: string;
  items: GridItem[];
}

export default function Deal({ title, items }: FeaturedGridProps) {
  const displayItems =
    items && items.length > 0
      ? items
      : [
          {
            src: "https://media.istockphoto.com/id/2193052367/de/foto/teenage-boy-spending-winter-holiday-skiing-in-mountain.jpg?s=612x612&w=0&k=20&c=YBjS-UWPw3jU_GPf4_6Rado72-d_yEcaGwHWPynziCA=",
            alt: "Placeholder 1",
            label: "Argentinien",
          },
          {
            src: "https://media.istockphoto.com/id/1137727247/de/foto/abenteuer-in-den-dolomiten-jugendliche-wandern-mit-hund.jpg?s=612x612&w=0&k=20&c=HpV7QRQkvOeYRg-IaFhmk0O1SjETk_sWSSlFmeqWXW0=",
            alt: "Placeholder 2",
          },
          {
            src: "https://media.istockphoto.com/id/641164064/de/foto/tauchen-gozo.jpg?s=612x612&w=0&k=20&c=9I3g4OCXr2RWz7LPncayzLSENKtrPBXzvi4fOponyQ8=",
            alt: "Placeholder 3",
          },
          {
            src: "https://media.istockphoto.com/id/1392998046/de/foto/mountainbiker.jpg?s=612x612&w=0&k=20&c=51pt2TOQBkxapKozqJ5MVF6EItE8UVPG_6_2xkn3YkM=",
            alt: "Placeholder 4",
          },
          {
            src: "https://picsum.photos/seed/e/1200/675",
            alt: "Placeholder 5",
          },
        ];

  return (
    <div className="max-w-7xl mx-auto p-1">
      {title && (
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
          {title}
        </h2>
      )}

      <div className="w-full">
        <section
          role="region"
          aria-label="Black Friday Deals banner"
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-800 to-red-700 text-white p-6 sm:p-8 shadow-lg"
        >
          {/* Decorative top-left badge */}
          <span className="mb-1 inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            ✨ Black Friday
          </span>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Black Friday Deals
              </h3>
              <p className="mt-1 text-sm sm:text-base text-amber-100/90 max-w-xl">
                Nur noch für kurze Zeit: Angebote auf Reisen, Autovermietungen und Versicherungen mit bis zu
                <span className="font-bold text-amber-300"> 50% Rabatt</span>. Sichere Dir jetzt den Deal!
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#deals"
                className="inline-flex items-center gap-2 rounded-md bg-amber-400/95 px-4 py-2 text-sm font-semibold text-neutral-900 shadow hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200"
                aria-label="Show Black Friday deals"
              >
                Jetzt Shoppen
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="#learn"
                className="text-sm text-amber-100 underline hover:text-white"
              >
                Lerne mehr
              </a>
            </div>
          </div>
        </section>

        {/* Christmas / Holiday banner */}
        <section
          role="region"
          aria-label="Christmas Deals banner"
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-rose-700 text-white p-6 sm:p-8 mt-6 shadow-lg"
        >
          <span className="mb-1 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            ✨ Weihnachtsdeals
          </span>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Weihnachts & Silvester Specials
              </h3>
              <p className="mt-1 text-sm sm:text-base text-amber-50/90 max-w-xl">
              Wir feiern Weihnachten mit großen Rabatten auf Reisen! Spare bis zu
                <span className="font-bold"> 40%</span> bei Komplettreisen!
                Geschenkgutscheine verfügbar.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#christmas"
                className="inline-flex items-center gap-2 rounded-md bg-rose-500/95 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
                aria-label="Explore Christmas deals"
              >
                Finde Geschenke
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="#gifts"
                className="text-sm text-amber-100 underline hover:text-white"
              >
                Lerne mehr
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
