from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
ASSETS_DIR = BASE_DIR / "assets"
ASSETS_DIR.mkdir(exist_ok=True)

app = FastAPI(title="Asset uploader")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # adjust to your frontend origin(s)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
 

app.mount("/image", StaticFiles(directory=str(ASSETS_DIR)), name="image")

ALLOWED_EXT = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"}





@app.get("/image/{filename}")
async def get_image(filename: str):
    path = ASSETS_DIR / filename
    print(path)
    if not path.exists():
        raise HTTPException(status_code=404, detail="Not found")
    return FileResponse(path)