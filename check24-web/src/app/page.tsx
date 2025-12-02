"use client";

import CheckNavbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import "./embla.css";

import Cookies from "@/lib/cookies";

import WidgetRenderer from "@/widgets/WidgetRenderer";

import { loadWidgetsDataFor } from "@/lib/widgetsData";
import { useState, useEffect } from "react";

export default function Home() {
  const [widgetsToRender, setWidgetsToRender] = useState([]);

  const userId = Cookies.get("user");

  useEffect(() => {
    let useUserID = userId;
    if (!userId)
      useUserID = "0";
      

    async function load() {
      const res = await fetch(
        `http://127.0.0.1:8000/widgetlist/?user_id=${useUserID}`
      );
      const orchestrator = await res.json();

      const widgetDataMap = await loadWidgetsDataFor(orchestrator.widgets);

      const combined = orchestrator.widgets.map((w: any) => ({
        type: w.type,
        widget_id: w.widget_id,
        data: widgetDataMap[w.widget_id],
      }));

      setWidgetsToRender(combined);
    }

    load();
  }, [userId]);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <CheckNavbar />
      <Hero />
      <main className="flex flex-col grow items-center gap-y-12 py-12">
        {widgetsToRender.map((widget, index) => (
          <div key={index} className="w-full max-w-7xl px-4">
            <WidgetRenderer widget={widget} />
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
