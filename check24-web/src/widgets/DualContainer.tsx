import Image from "next/image";

export default function DualContainer() {
  const displayItems = [
    {
      src: "https://media.istockphoto.com/id/928087944/de/foto/menschliche-hand-stoppen-die-holzbl%C3%B6cke-fallen.jpg?s=612x612&w=0&k=20&c=f4RfD0h5V8J2izizpCxFLnRQginNF3tbSvL6_FTdr3U=",
      alt: "Placeholder 1",
    },
    {
      src: "https://media.istockphoto.com/id/1436151207/de/foto/kosten-der-energieversorgung.jpg?s=612x612&w=0&k=20&c=w6VY_edWQGofTHFCODdWjWykyStSt2FNOyWjxvTpoS0=",
      alt: "Placeholder 2",
    },
  ];

  const header = "Test";

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
            <h2 className="font-bold">Hausratversicherung</h2>
            <p className="text-sm text-gray-600 mt-2">
              Schutz für Möbel, Elektronik und persönliche Gegenstände bei
              Einbruch, Feuer oder Leitungswasserschäden.
            </p>

            <div className="mt-4 text-sm text-gray-700">
              <div className="mt-3">
                <p className="text-lg font-semibold">ab ~3,90 € pro Monat</p>
                <p className="text-xs text-gray-500 mt-1">
                  Viele Tarife bieten Rabatte bei längerer Vertragslaufzeit oder
                  Bündelung mit anderen Versicherungen.
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
            <h2 className="font-bold">Strom &amp; Gastarife</h2>
            <p className="text-sm text-gray-600 mt-2">
              Vergleich aktueller Strom- und Gaspreise und mögliche
              Einsparpotenziale.
            </p>

            <div className="mt-4 text-sm text-gray-700">
              <div className="mt-3">
                <p className="text-lg font-semibold">
                  Ø Strom: 21,44 € / Monat
                </p>
                <p className="text-lg font-semibold">Ø Gas: 45,00 € / Monat</p>
                <p className="text-xs text-gray-500 mt-1">
                  Konkrete Kosten hängen von Verbrauch und Postleitzahl ab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
