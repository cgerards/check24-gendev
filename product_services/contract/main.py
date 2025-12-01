from fastapi import FastAPI
from pydantic import BaseModel
from pathlib import Path
from typing import List
import json

app = FastAPI(title="Contract Widget")

    
class MinimalItem(BaseModel):
    leftUpper: str
    leftBold: str
    leftLower: str
    rightUpperBold: str
    rightUpper: str 
    rightLowerBig: str 
    rightLower: str
    
class MinimalResponse(BaseModel):
    header: str
    type: str
    items: List[MinimalItem]
    


def load_data(DATA_FILE: str) -> dict:
    try:
        with DATA_FILE.open("r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as exc:
        raise RuntimeError(f"Failed to read {DATA_FILE}: {exc}") from exc


MOBILE_DATA_FILE = Path(__file__).parent / "mobile.json"
MOBILE_DATA = load_data(MOBILE_DATA_FILE)

LOAN_DATA_FILE = Path(__file__).parent / "loan.json"
LOAN_DATA = load_data(LOAN_DATA_FILE)


@app.get("/mobile", response_model=MinimalResponse)
def get_mobile():
    return MOBILE_DATA

@app.get("/loan", response_model=MinimalResponse)
def get_loan():
    return LOAN_DATA


