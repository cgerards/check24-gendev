import Image from "next/image";
import { DualProps } from "./types";

export default function DualContainer({ header, items }: DualProps) {
  const displayItems = items;

  function formatDescription(text: string) {
    const lines = text.split("|");

    return lines.flatMap((line, lineIndex) => {
      const parts = line.split(/><(.*?)></);

      const nodes = parts.map((part, i) =>
        i % 2 === 1 ? (
          <span
            key={`${lineIndex}-em-${i}`}
            className="font-semibold text-amber-300"
          >
            {part}
          </span>
        ) : (
          part
        )
      );

      if (lineIndex < lines.length - 1)
        return [...nodes, <br key={`br-${lineIndex}`} />];
      return nodes;
    });
  }

  return (
    <div className="max-w-7xl mx-auto p-1 relative overflow-visible">
      {header && (
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
          {header}
        </h2>
      )}

      <div className="flex flex-col sm:flex-row gap-3 p-1">
        {/* FIRST */}
        <div className="shadow-md bg-neutral-50 rounded-2xl flex flex-col sm:flex-row overflow-hidden relative">
          <Image
            src={displayItems[0].src}
            alt=""
            width={1200}
            height={675}
            className="w-full sm:w-1/2 h-48 sm:h-auto object-cover"
          />
          <div className="flex flex-col p-5 justify-center grow">
            <h2 className="font-bold">{displayItems[0].title}</h2>
            <p className="text-sm text-gray-600 mt-2">
              {formatDescription(displayItems[0].description)}
            </p>

            <div className="mt-4 text-sm text-gray-700">
              <div className="mt-3">
                <p className="text-lg font-semibold">
                  {formatDescription(displayItems[0].average)}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {formatDescription(displayItems[0].note)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-md bg-neutral-50 rounded-2xl flex flex-col sm:flex-row overflow-hidden relative">
          <Image
            src={displayItems[1].src}
            alt=""
            width={1200}
            height={675}
            className="w-full sm:w-1/2 h-48 sm:h-auto object-cover"
          />

          {/* SECOND */}
          <div className="flex flex-col p-5 justify-center grow">
            <h2 className="font-bold">{displayItems[1].title}</h2>
            <p className="text-sm text-gray-600 mt-2">
              {formatDescription(displayItems[1].description)}
            </p>

            <div className="mt-4 text-sm text-gray-700">
              <div className="mt-3">
                <p className="text-lg font-semibold">
                  {formatDescription(displayItems[1].average)}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {formatDescription(displayItems[1].note)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
