from fastapi import FastAPI


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

@app.get("/")
async def root():
        
    
    return {
        "widgets": [
            {
                "widget_id": "shopping_carousel",
                "type": "carousel"
            },
            {
                "widget_id": "mobile_minimal",
                "type": "minimal"
            },
            {
                "widget_id": "car_widget",
                "type": "car_widget"
            },
            {
                "widget_id": "travel_carousel",
                "type": "alternative_carousel"
            }
        ]
    }
