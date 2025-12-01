from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from pathlib import Path
import json

app = FastAPI()

# Enable CORS so frontend (e.g. localhost) can call this service
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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


def load_data(DATA_FILE: str) -> dict:
    try:
        with DATA_FILE.open("r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as exc:
        raise RuntimeError(f"Failed to read {DATA_FILE}: {exc}") from exc



DEFAULT_DATA_FILE = Path(__file__).parent / "default.json"
DEFAULT_DATA = load_data(DEFAULT_DATA_FILE)


SECOND_WIDGETS = {"widgets": [{"widget_id": "mobile_minimal", "type": "minimal"}]}


def get_widgets_for_user(user_id: Optional[str]) -> list:
    if user_id == "2":
        return SECOND_WIDGETS
    return DEFAULT_DATA

@app.get("/widgetlist/")
async def get_widgetlist_query(user_id: Optional[str] = None):
    if not user_id:
        return DEFAULT_DATA
    return get_widgets_for_user(user_id)
