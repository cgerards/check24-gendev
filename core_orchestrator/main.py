from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from pathlib import Path
import json
from dotenv import load_dotenv

import os

load_dotenv()

SHOPPING_URL = os.getenv("SHOPPING_URL", "http://127.0.0.1:8003")
TRAVEL_URL = os.getenv("TRAVEL_URL", "http://127.0.0.1:8002")
HOME_URL = os.getenv("HOME_URL", "http://127.0.0.1:8001")
CONTRACT_URL = os.getenv("CONTRACT_URL", "http://127.0.0.1:8004")


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://check24-challenge-gerards.vercel.app/"],
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

FIRST_DATA = load_data(Path(__file__).parent / "alice.json")
SECOND_DATA = load_data(Path(__file__).parent / "bob.json")
THIRD_DATA = load_data(Path(__file__).parent / "charlie.json")
FOURTH_DATA = load_data(Path(__file__).parent / "dave.json")


ENDPOINT_MAP = {
    "shopping_carousel": f"{SHOPPING_URL}/offers",
    "car_widget": "",
    "mobile_minimal": f"{CONTRACT_URL}/mobile",
    "credit_minimal": f"{CONTRACT_URL}/loan",
    "home_widget": f"{HOME_URL}/home",
    "travel_carousel": "",
    "sportTravel_grid": f"{TRAVEL_URL}/sport",
    "normalTravel_featured": f"{TRAVEL_URL}/normal",
    "cityTravel_featured": f"{TRAVEL_URL}/city",
    "blackfriday_banner": f"{SHOPPING_URL}/blackfriday",
    "christmas_banner": f"{SHOPPING_URL}/christmas",
}


def resolve_widget(widgets: dict) -> str:
    for widget in widgets["widgets"]:
        if widget["widget_id"] in ENDPOINT_MAP:
            widget["url"] = ENDPOINT_MAP[widget["widget_id"]]

    return widgets


def get_widgets_for_user(user_id: Optional[str]) -> list:
    # INSERT RECOMMENDER SYSTEM LOGIC HERE...
    if user_id == "1":
        return resolve_widget(FIRST_DATA)
    elif user_id == "2":
        return resolve_widget(SECOND_DATA)
    elif user_id == "3":
        return resolve_widget(THIRD_DATA)
    elif user_id == "4":
        return resolve_widget(FOURTH_DATA)

    return resolve_widget(DEFAULT_DATA)


@app.get("/widgetlist/")
async def get_widgetlist_query(user_id: Optional[str] = None):
    if not user_id:
        return resolve_widget(DEFAULT_DATA)
    return get_widgets_for_user(user_id)
