export interface Widget {
  widget_id: string;
  type: string;
  data: any;
}

export interface BasicGridItem {
  title: string;
  subtitle: string;
  src: string;
  alt: string;
}

export interface BasicGridProps {
  header: string;
  items: BasicGridItem[];
}

export interface DealItem {
  title: string;
  description: string;
  bubble: string;
  button: string;
  addition: string;
  season: "blackfriday" | "christmas" | string;
}


export interface BasicCarouselItem {
  title: string;
  description: string;
  src: string;
  alt: string;
}

export interface BasicCarouselProps {
  header: string;
  items: BasicCarouselItem[];
}

export interface DualItem {
  title: string;
  description: string;
  average: string;
  note: string;
  src: string;
  alt: string;
}

export interface DualProps {
  header: string;
  items: DualItem[];
}

export interface MinimalItem {
  leftUpper: string;
  leftBold: string;
  leftLower: string;
  rightUpperBold: string;
  rightUpper: string;
  rightLowerBig: string;
  rightLower: string;
}

export interface MinimalProps {
  header: string;
  type: "mobile" | "loan" | string;
  items: MinimalItem[];
}
