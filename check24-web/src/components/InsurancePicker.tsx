"use client";

import { useState } from "react";
import Image from "next/image";
import airplane from "../../public/airplane.svg";
import island from "../../public/island.svg";
import doctor from "../../public/doctor.svg";
import luggage from "../../public/luggage.svg";

export default function InsurancePicker() {
  const [selection, setSelection] = useState<number[]>([0]);

  const plans = [
    { label: "Rücktritt", value: 0 },
    { label: "Abbruch", value: 1 },
    { label: "Reisekranken", value: 2 },
    { label: "Gepäck", value: 3 },
  ];

  const handlePlanToggle = (plan: number) => {
    setSelection((prev) =>
      prev.includes(plan) ? prev.filter((p) => p !== plan) : [...prev, plan]
    );
  };

  const icons = [airplane, island, doctor, luggage];

  return (
    <div className="relative flex w-full max-w-xl items-center justify-center pb-2">
      <div className="w-full rounded-lg bg-gray-100 p-2 shadow-inner">
        <div
          role="group"
          aria-label="Reiseversicherungen"
          className="grid grid-cols-2 sm:grid-cols-4 gap-2"
        >
          {plans.map((plan, idx) => (
            <button
              key={plan.value}
              type="button"
              aria-pressed={selection.includes(plan.value)}
              data-state={selection.includes(plan.value) ? "on" : "off"}
              onClick={() => handlePlanToggle(plan.value)}
              className={
                "flex flex-col items-center gap-2 p-2 rounded-md text-sm font-medium transition-colors border border-transparent bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 " +
                "data-[state=on]:bg-blue-500 data-[state=on]:text-white data-[state=on]:shadow-md"
              }
            >
              <div className="h-6 w-6">
                <Image src={icons[idx]} alt={`${plan.label} icon`} width={28} height={28} />
              </div>
              <span className="text-xs">{plan.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
