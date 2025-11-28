export interface Widget {
  type: "carousel" | "featured_grid";
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

export interface DealProps {
  deal: DealItem;
}

