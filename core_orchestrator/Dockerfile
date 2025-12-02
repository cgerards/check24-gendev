FROM python:3.11-slim

WORKDIR /app

# Install dependencies from the shared requirements.txt in root
COPY ./requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Copy only this microservice
COPY ./core_orchestrator /app

# Start FastAPI
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
