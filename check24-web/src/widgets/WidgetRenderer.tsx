"use client";

import Carousel from "./Carousel";
import FeaturedGrid from "./FeaturedGrid";
import MinimalCard from "./MinimalCard";
import BasicGrid from "./BasicGrid";
import { Widget } from "./types";
import DualContainer from "./DualContainer";
import Deal from "./Deal";
import CarWidget from "./CarWidget";
import AlternativeCarousel from "./AlternativeCarousel";

/* 
const TYPES_MAP: Record<string, string> = {
  shopping_carousel: carousel,
  car_widget: carwidget
  mobile_minimal: minimal,
  credit_minimal: minimal,
  home_widget: dual,
  travel_carousel: alternative_carousel,
  sportTravel_grid: basic_grid,
  normalTravel_featured: featured_grid,
  cityTravel_featured: featured_grid,
  blackfriday_banner: deal,
  christmas_banner: deal,
};
*/


const widgetMap = {
  carousel: Carousel,
  featured_grid: FeaturedGrid,
  minimal: MinimalCard,
  basic_grid: BasicGrid,
  dual: DualContainer,
  deal: Deal,
  car_widget: CarWidget,
  alternative_carousel: AlternativeCarousel,
};



export default function WidgetRenderer({ widget }: { widget: Widget }) {


  const Component = widgetMap[widget.type as keyof typeof widgetMap];

  if (!Component) {
    return null;
  }


  if (!widget.data && !(widget.type == "car_widget" || widget.type == "alternative_carousel")) {
    return <div className="h-40 w-full rounded bg-gray-100 animate-pulse" />;
  }

  return <Component {...widget.data} />;
}
