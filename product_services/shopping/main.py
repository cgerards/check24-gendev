from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pathlib import Path
from typing import List
import json

app = FastAPI(title="Shopping Widget")

# Allow cross-origin requests during development


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://check24-challenge-gerards.vercel.app/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class DealResponse(BaseModel):
    title: str
    description: str
    bubble: str 
    button: str 
    addition: str 
    season: str
    
class BasicCarouselItem(BaseModel):
    title: str
    description: str
    src: str
    alt: str
    
class BasicCarouselResponse(BaseModel):
    header: str
    items: List[BasicCarouselItem]
    


def load_data(DATA_FILE: str) -> dict:
    try:
        with DATA_FILE.open("r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as exc:
        raise RuntimeError(f"Failed to read {DATA_FILE}: {exc}") from exc


BLACKFRIDAY_DATA_FILE = Path(__file__).parent / "blackfriday.json"
BLACKFRIDAY_DATA = load_data(BLACKFRIDAY_DATA_FILE)

CHRISTMAS_DATA_FILE = Path(__file__).parent / "christmas.json"
CHRISTMAS_DATA = load_data(CHRISTMAS_DATA_FILE)

OFFERS_DATA_FILE = Path(__file__).parent / "offers.json"
OFFERS_DATA = load_data(OFFERS_DATA_FILE)


@app.get("/blackfriday", response_model=DealResponse)
def get_blackfriday():
    return BLACKFRIDAY_DATA


@app.get("/christmas", response_model=DealResponse)
def get_christmas():
    return CHRISTMAS_DATA


@app.get("/offers", response_model=BasicCarouselResponse)
def get_offers():
    return OFFERS_DATA
