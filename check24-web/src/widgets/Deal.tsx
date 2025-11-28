"use client";

import Image from "next/image";

interface DealItem {
  title: string;
  description: string;
  bubble: string;
  button: string;
  addition: string;
}

interface DealProps {
  title: string;
  items: DealItem[];
}


function formatDescription(text: string) {
  const parts = text.split(/\[(.*?)\]/);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-bold text-amber-300">{part}</span>
    ) : (
      part
    )
  );
}

export default function Deal({ title, items }: DealProps) {
  const displayItems =
    items && items.length > 0
      ? items
      : [
          {
            title: "Black Friday Deals",
            description: 'Nur noch für kurze Zeit: Angebote auf Reisen, Autovermietungen und Versicherungen mit bis zu [ 50% Rabatt]. Sichere Dir jetzt den Deal!',
            bubble: "✨ Black Friday",
            button: "Jetzt Shoppen",
            addition: "Lerne mehr"
            },
            {
            title: "Weihnachts & Silvester Specials",
            description: 'Wir feiern Weihnachten mit großen Rabatten auf Reisen! Spare bis zu [ 40%] bei Komplettreisen! Geschenkgutscheine verfügbar.',
            bubble: "✨ Weihnachtsdeals",
            button: "Jetzt Shoppen",
            addition: "Lerne mehr"
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
            {displayItems[0].bubble}
          </span>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                {displayItems[0].title}
              </h3>
              <p className="mt-1 text-sm sm:text-base text-amber-100/90 max-w-xl">
                {formatDescription(displayItems[0].description)}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#deals"
                className="inline-flex items-center gap-2 rounded-md bg-amber-400/95 px-4 py-2 text-sm font-semibold text-neutral-900 shadow hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200"
                aria-label="Show Black Friday deals"
              >
                {displayItems[0].button}
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
                {displayItems[0].addition}
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
            {displayItems[1].bubble}
          </span>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                {displayItems[1].title}
              </h3>
              <p className="mt-1 text-sm sm:text-base text-amber-50/90 max-w-xl">
              {formatDescription(displayItems[1].description)}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#christmas"
                className="inline-flex items-center gap-2 rounded-md bg-rose-500/95 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
                aria-label="Explore Christmas deals"
              >
                {displayItems[1].button}
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
                {displayItems[1].addition}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
