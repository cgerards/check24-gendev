"use client";

export default function EmptyState() {
  return (
    <div className="w-full max-w-2xl px-4">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Keine Widgets verfügbar</h3>
        <p className="mt-2 text-sm text-gray-600">
          Bitte prüfen Sie den Orchestrator-Service und die Speedboats.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Erneut laden
          </button>
        </div>
      </div>
    </div>
  );
}
