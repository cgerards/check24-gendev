from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from pathlib import Path
import json

app = FastAPI(title="Travel Widget")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)


class BasicGridItem(BaseModel):
    title: str
    subtitle: str
    src: str
    alt: str
    
class BasicGridResponse(BaseModel):
    header: str
    items: List[BasicGridItem]


def load_data(DATA_FILE: str) -> dict:
    try:
        with DATA_FILE.open("r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as exc:
        raise RuntimeError(f"Failed to read {DATA_FILE}: {exc}") from exc


# LOAD ALL DATA

SPORT_DATA_FILE = Path(__file__).parent / "sporttravel.json"
SPORT_DATA = load_data(SPORT_DATA_FILE)

NORMAL_DATA_FILE = Path(__file__).parent / "normaltravel.json"
NORMAL_DATA = load_data(NORMAL_DATA_FILE)

CITY_DATA_FILE = Path(__file__).parent / "citytravel.json"
CITY_DATA = load_data(CITY_DATA_FILE)





@app.get("/sport", response_model=BasicGridResponse)
def get_sport():
    return SPORT_DATA


@app.get("/normal", response_model=BasicGridResponse)
def get_normal():
    return NORMAL_DATA

@app.get("/city", response_model=BasicGridResponse)
def get_city():
    return CITY_DATA
