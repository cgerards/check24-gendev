from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Travel Widget")

class WidgetResponse(BaseModel):
    widget: str
    deals: list[str]
    user_id: int

@app.get("/widget", response_model=WidgetResponse)
def get_widget(user_id: int):
    deals = [
        "Mallorca 299€ All Inclusive",
        "Ski Trip Alps 499€",
    ]
    return WidgetResponse(widget="Travel", deals=deals, user_id=user_id)
