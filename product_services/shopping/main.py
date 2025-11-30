from fastapi import FastAPI
from pydantic import BaseModel
from pathlib import Path
import json

app = FastAPI(title="Shopping Widget")

class DealResponse(BaseModel):
    title: str
    description: str
    bubble: str 
    button: str 
    addition: str 
    season: str


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


@app.get("/blackfriday", response_model=DealResponse)
def get_blackfriday():
    return BLACKFRIDAY_DATA


@app.get("/christmas", response_model=DealResponse)
def get_christmas():
    return CHRISTMAS_DATA
