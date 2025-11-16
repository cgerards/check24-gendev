"use client";

import React from "react";

interface RadioProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Radio({
  id,
  name,
  value,
  label,
  checked,
  onChange,
}: RadioProps) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 appearance-none rounded-full border-2 border-gray-300 bg-white focus:ring-blue-500 focus:ring-2 checked:bg-white checked:border-blue-600 checked:border-4" />
      <label
        htmlFor={id}
        className="select-none ms-2 text-sm font-medium text-heading"
      >
        {label}
      </label>
    </div>
  );
}
