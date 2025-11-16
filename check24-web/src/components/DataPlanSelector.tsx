"use client";

import { useState } from "react";

export default function DataPlanSelector() {
  const [selection, setSelection] = useState(0);

  return (
    <div className="flex">
      <button className="border">3 GB</button>
      <button className="border">5 GB</button>
      <button className="border">10 GB</button>
    </div>
  );
}
