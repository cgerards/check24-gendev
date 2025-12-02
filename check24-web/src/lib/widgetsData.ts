/* 



  // console.log("HALLO");

  const SLIDES = Array.from(Array(6).keys());
*/
export type OrchestratorWidget = { widget_id: string; type: string; url: string };

const ENDPOINT_MAP: Record<string, string> = {
  shopping_carousel: "http://127.0.0.1:8003/offers",
  car_widget: "",
  mobile_minimal: "http://127.0.0.1:8004/mobile",
  credit_minimal: "http://127.0.0.1:8004/loan",
  home_widget: "http://127.0.0.1:8001/home",
  travel_carousel: "",
  sportTravel_grid: "http://127.0.0.1:8002/sport",
  normalTravel_featured: "http://127.0.0.1:8002/normal",
  cityTravel_featured: "http://127.0.0.1:8002/city",
  blackfriday_banner: "http://127.0.0.1:8003/blackfriday",
  christmas_banner: "http://127.0.0.1:8003/christmas",
};

async function fetchJson(url: string) {
  const response = await fetch(url, { next: { revalidate: 60 } });

  if (!response.ok) {
    console.warn(`fetch failed ${url} ${response.status}`);
    return null;
  }

  return response.json();
}

export async function loadWidgetsDataFor(
  widgets: OrchestratorWidget[]
): Promise<Record<string, any>> {

    
  const widgetToUrl = widgets.reduce<Record<string, string>>((acc, w) => {
    const url = ENDPOINT_MAP[w.widget_id];
    if (url) acc[w.widget_id] = url;
    return acc;
  }, {});

  console.log(widgetToUrl)

  const uniqueUrls = Array.from(new Set(Object.values(widgetToUrl)));
  const results = await Promise.all(uniqueUrls.map((u) => fetchJson(u)));
  const urlToResult = Object.fromEntries(
    uniqueUrls.map((u, i) => [u, results[i]])
  );

  const out: Record<string, any> = {};
  for (const wid of Object.keys(widgetToUrl)) {
    const url = widgetToUrl[wid];
    out[wid] = urlToResult[url] ?? null;
  }
  return out;
}
