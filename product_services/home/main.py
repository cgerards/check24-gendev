from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pathlib import Path
from typing import List
import json

app = FastAPI(title="Home Widget")

# Allow cross-origin requests during development
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

    
class DualItem(BaseModel):
    title: str
    description: str
    average: str
    note: str
    src: str
    alt: str
    
class DualResponse(BaseModel):
    header: str
    items: List[DualItem]
    


def load_data(DATA_FILE: str) -> dict:
    try:
        with DATA_FILE.open("r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as exc:
        raise RuntimeError(f"Failed to read {DATA_FILE}: {exc}") from exc


HOME_DATA_FILE = Path(__file__).parent / "home.json"
HOME_DATA = load_data(HOME_DATA_FILE)


@app.get("/home", response_model=DualResponse)
def get_blackfriday():
    return HOME_DATA


