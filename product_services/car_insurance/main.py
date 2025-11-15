from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Car Insurance Widget")

class WidgetResponse(BaseModel):
    widget: str
    offers: list[str]
    user_id: int

@app.get("/widget", response_model=WidgetResponse)
def get_widget(user_id: int):
    # Simulate personalized logic
    offers = [
        "Car Insurance Premium - 20% off",
        "Electric Vehicle Bonus Plan",
    ]
    return WidgetResponse(widget="Car Insurance", offers=offers, user_id=user_id)
