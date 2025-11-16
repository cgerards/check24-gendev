"use client";

import { useState } from "react";

export default function DataPlanSelector() {
  const [selection, setSelection] = useState(3);

  const plans = [
    { label: "3GB", value: 3 },
    { label: "5GB", value: 5 },
    { label: "10GB", value: 10 },
    { label: "20GB", value: 20 },
  ];

  const handlePlanSelect = (plan: number) => {
    setSelection(plan);
  };

  const selectedIndex = plans.findIndex((p) => p.value === selection);

  return (
    <div className="relative flex w-full max-w-sm items-center justify-center pb-2">
      <div className="relative inline-flex items-center justify-center rounded-lg bg-gray-100 p-1 shadow-inner">
        <div
          className="absolute left-1 h-[calc(100%-0.5rem)] w-1/4 transform rounded-md bg-white shadow transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(${selectedIndex * 100}%)` }}
        />

        {plans.map((plan) => (
          <button
            key={plan.value}
            onClick={() => handlePlanSelect(plan.value)}
            className={`relative z-10 w-20 rounded-md py-2 text-sm font-semibold transition-colors duration-300 ${
              selection === plan.value
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {plan.label}
          </button>
        ))}
      </div>
    </div>
  );
}
