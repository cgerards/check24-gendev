/* 



  // console.log("HALLO");

  const SLIDES = Array.from(Array(6).keys());
*/
export type OrchestratorWidget = { widget_id: string; type: string; url: string };


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
    if (w.url) acc[w.widget_id] = w.url;
    return acc;
  }, {});

  if (Object.keys(widgetToUrl).length === 0) {
    return {};
  }
    
  const uniqueUrls = Array.from(new Set(Object.values(widgetToUrl)));
  const results = await Promise.all(uniqueUrls.map((u) => fetchJson(u)));
  const urlToResult = Object.fromEntries(
    uniqueUrls.map((u, i) => [u, results[i]])
  );

  const out: Record<string, any> = {};
  for (const wid of Object.keys(widgetToUrl)) {
    const url = widgetToUrl[wid];
    out[wid] = url ? urlToResult[url] ?? null : null;
  }
  return out;
}
