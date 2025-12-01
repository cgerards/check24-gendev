from fastapi import FastAPI
from typing import Optional

app = FastAPI()


"""
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

"""


DEFAULT_WIDGETS = {"widgets":[{"widget_id": "shopping_carousel", "type": "carousel"}]}

SECOND_WIDGETS = {"widgets": [{"widget_id": "mobile_minimal", "type": "minimal"}]}


def get_widgets_for_user(user_id: Optional[str]) -> list:
    if user_id == "2":
        return SECOND_WIDGETS
    return DEFAULT_WIDGETS


@app.get("/widgetlist/")
async def get_widgetlist(user_id: Optional[str]):

    if not user_id:
        return DEFAULT_WIDGETS

    widgets = get_widgets_for_user(user_id)

    return widgets
