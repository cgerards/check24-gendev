"use client";

import { DealItem } from "./types";

const seasonStyles: Record<
  string,
  {
    gradient: string;
    badge: string;
    text: string;
    button: string;
  }
> = {
  blackfriday: {
    gradient: "bg-gradient-to-r from-neutral-900 via-neutral-800 to-red-700",
    badge: "bg-black/50",
    text: "text-amber-100/90",
    button: "bg-amber-400/95 hover:bg-amber-300 text-neutral-900",
  },
  christmas: {
    gradient: "bg-gradient-to-r from-emerald-900 via-emerald-800 to-rose-700",
    badge: "bg-white/10",
    text: "text-amber-50/90",
    button: "bg-rose-500/95 hover:bg-rose-400 text-white",
  },
};

function formatDescription(text: string) {
  const parts = text.split(/\[(.*?)\]/);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-bold text-amber-300">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function Deal(deal : DealItem) {

  console.log("DEAL")
  console.log(deal)
  const style = seasonStyles[deal.season] ?? seasonStyles.blackfriday;

  return (
    <div className="max-w-7xl mx-auto p-1">
      <div className="w-full">
        <section
          role="region"
          aria-label="Black Friday Deals banner"
          className={`relative overflow-hidden rounded-2xl ${style.gradient} text-white p-6 sm:p-8 shadow-lg mt-6}`}
        >
          <span
            className={`mb-1 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${style.badge}`}
          >
            {deal.bubble}
          </span>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                {deal.title}
              </h3>
              <p className={`mt-1 text-sm sm:text-base max-w-xl ${style.text}`}>
                {formatDescription(deal.description)}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/about"
                className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold shadow focus:outline-none focus:ring-2 focus:ring-offset-2 ${style.button}`}
                aria-label="Show Black Friday deals"
              >
                {deal.button}
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

              <a href="/about" className={`text-sm underline hover:text-white`}>
                {deal.addition}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
