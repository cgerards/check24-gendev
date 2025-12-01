"use client";

import Carousel from "./Carousel";
import FeaturedGrid from "./FeaturedGrid";
import { Widget } from "./types";

const widgetMap = {
  carousel: Carousel,
  featured_grid: FeaturedGrid,
};

export default function WidgetRenderer({ widget }: { widget: Widget }) {
  const Component = widgetMap[widget.type];

  if (!Component) {
    return null;
  }

  console.log("test");
  console.log(widget.data);

  return <Component {...widget.data} />;
}
