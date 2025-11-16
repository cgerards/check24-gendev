"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import calendarIcon from "../../public/calendar.svg";

interface DatePickerProps {
  placeholder: string;
}

export default function CustomDatePicker({ placeholder }: DatePickerProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div className="relative w-full z-100">
      <div className="absolute inset-y-0 left-0 flex pl-2 items-center pointer-events-none">
        <Image
          src={calendarIcon}
          alt="Calendar Icon"
          className="text-gray-500 h-4 w-4 z-100"
        />
      </div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="pl-8 bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-3 shadow-xs placeholder:text-gray-400 py-1.5"
        placeholderText={placeholder}
      />
    </div>
  );
}
