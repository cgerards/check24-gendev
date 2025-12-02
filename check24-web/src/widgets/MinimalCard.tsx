import { MinimalProps } from "./types";
import Link from "next/link";

export default function MinimalCard({ header, type, items }: MinimalProps) {
  const displayItems = items;

  const leftBgClass = type === "loan" ? "bg-blue-600" : "bg-amber-500";

  return (
    <section className="max-w-7xl mx-auto p-1">
      {header && (
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
          {header}
        </h2>
      )}

      <Link href="/about" className="grid sm:grid-cols-9 gap-3 border-gray-100">
        {items.map((item, index) => (
          <div
            key={index}
            className="col-span-3 row-span-1 outline-2 outline-gray-200 aspect-21/9 gap-5 flex items-stretch justify-center"
          >
            <span
              className={`${leftBgClass} w-full h-full flex flex-col items-center justify-center text-white`}
            >
              <span className="text-lg font-semibold">
                {displayItems[index].leftUpper}
              </span>
              <span className="font-bold text-4xl">
                {displayItems[index].leftBold}
              </span>
              <span className="text-lg font-semibold">
                {displayItems[index].leftLower}
              </span>
            </span>
            <span className="flex flex-col w-full h-full p-1">
              <span className="pt-3 font-bold text-lg">
                {displayItems[index].rightUpperBold}
              </span>
              <span className="text-lg">{displayItems[index].rightUpper}</span>

              <span className="flex flex-col items-end p-2 mt-auto">
                <span className="text-2xl">
                  {displayItems[index].rightLowerBig}
                </span>
                <span className="text-xs">
                  {displayItems[index].rightLower}
                </span>
              </span>
            </span>
          </div>
        ))}
      </Link>
    </section>
  );
}
