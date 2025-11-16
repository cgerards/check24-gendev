from fastapi import FastAPI


app = FastAPI()


@app.get("/")
async def root():
        
    
    return {
        "widgets": [
            {
                "widget_id": "travel_carousel",
                "type": "carousel",
                "priority": 1,
                "data": {"images": False},
            },
            {
                "widget_id": "travel_grid",
                "type": "featured_grid",
                "priority": 2,
                "data": {"items": False, "title": "Reiseempfehlungen für Sie!"},
            },
        ]
    }
