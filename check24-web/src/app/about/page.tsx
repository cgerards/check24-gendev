"use client";

import { useState, useEffect } from "react";
import MySwitch from "@/components/MySwitch";
import MiniNavbar from "@/components/MiniNavbar";

export default function About() {
      

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <MiniNavbar />

      <main className="flex grow items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
          <div className="flex items-center justify-between pb-5">
            <p className="font-bold underline">CHECK24 Gendev Challenge</p>
            
          </div>

          <div className="flex flex-col gap-1">
              <p>This is a submission for the CHECK24 Gendev Challenge.</p>
              <p>Not every link leads to a webpage filled with content.</p>
              <p className="pb-5">Thank you for considering my submission!</p>
              <p>Christoph Gerards</p>
             

          </div>
        </div>
      </main>
    </div>
  );
}
