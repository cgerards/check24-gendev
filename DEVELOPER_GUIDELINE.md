# DEVELOPER_GUIDELINE.md

## 1 How Product Teams Build and Integrate Home Widgets

This document explains how decentralized CHECK24 product teams can develop, register, and deliver their own Home Widgets across **Web and Android**.

**The core idea**:
- Each product domain (Travel, Home, Shopping, etc.) provides its own Speedboat microservice.
- A central Orchestrator returns a final list of widgets to be rendered on the Home Screen, along with their types and their **data URLs**.
- **Frontend renders the widgets and fetches the data directly from the Speedboats.**
- Updates to content and styling do not require app releases.

![Flowchart Architecutre](./images/flowchart_architecture.svg)

## 2 Creating a New Speedboat
Each speedboat is a standalone FastAPI microservice.
Copy this structure:

```bash
/product_services
    /new-service
    └── main.py
    └── Dockerfile
    └── requirements.txt
```
You will have to adjust the Dockerfile according to the new service.
Specify endpoints and behavior within the main and add it to the `docker-compose.yml`. **You will need to specify a new port**:

```bash
contract:
    build:
      context: .
      dockerfile: ./product_services/contract/Dockerfile
    ports:
      - "8004:8004"

new-service:
    build:
        context: .
        dockerfile: ./product_services/new-service/Dockerfile
    ports:
      - "8005:8005"
```

## 3 Exposing Your Widgets

A speedboat must have an endpoint `/<widget_url>` with the following rules:
- Payload must match the expectations of the widget type
- Payload must be JSON
- No HTML allowed
- Images must be served via URLs


Example:
```json
{
  "header": "Beliebte Reiseziele",
  "items": [
    {
      "title": "London",
      "subtitle": "7.121 Unterkünfte",
      "image": "https://example.com/london.jpg"
    }
  ]
}
```

## 4 Supported Widget Types

| Widget ID             | Type       | Provided By        | Status            |
| --------------------- | ---------- | ------------------ | ----------------- |
| mobile_minimal        | minimal    | Contract           | ✔ live            |
| credit_minimal        | minimal    | Contract           | ✔ live            |
| home_widget           | dual | Home               | ✔ live            |
| sportTravel_grid      | basic_grid       | Travel             | ✔ live            |
| normalTravel_featured | featured_grid   | Travel             | ✔ live            |
| cityTravel_featured   | featured_grid   | Travel             | ✔ live            |
| blackfriday_banner    | deal     | Shopping           | ✔ live            |
| christmas_banner      | deal     | Shopping           | ✔ live            |
| shopping_carousel     | carousel   | Shopping | ✔ live            |
| travel_carousel       | alternative_carousel   | Frontend             | ⚠ only web |
| car_widget            | car_widget          | Frontend       | ⚠ only web     |

If you need a new widget type: 
- inform frontend teams
- implement renderer for Web + Mobile
- create schema
- Core activates support in the orchestrator

After this, the widget becomes dynamically usable without app updates.


# 5 API Contract

## 5.1 Orchestrator → Frontend API Contract

The Orchestrator **does NOT** fetch widget data itself.

It only returns:
- `widget_id`
- `type`
- `url` → the frontend uses this to fetch the data directly from a Speedboat

The url of the corresponding speedboat will be inserted automatically by the Orchestrator and does not need to be specified!

**Example Orchestrator Response**:
```json
{
  "widgets": [
    { "widget_id": "cityTravel_featured", "type": "featured_grid", "url": "http://localhost:8002/city" },
    { "widget_id": "shopping_carousel", "type": "carousel", "url": "http://localhost:8003/offers" }
  ]
}
```


**Frontend responsibility**:
The frontend (Web or Mobile):
1. Receives this list
2. Performs parallel fetches:
```bash
GET http://localhost:8002/city
GET http://localhost:8003/offers
```
3. Renders the widget based on the type

This design:
- keeps the orchestrator extremely light
- isolates all product logic inside Speedboats
- avoids backend-to-backend dependencies
- works perfectly for Mobile + Web with zero backend changes


# 6 Testing Your Speedboat Locally

Start the entire backend stack with docker.
Services run on:
| Service            | Port |
| ------------------ | ---- |
| Orchestrator       | 8000 |
| Speedboat Home     | 8001 |
| Speedboat Travel   | 8002 |
| Speedboat Shop     | 8003 |
| Speedboat Contract | 8004 |


To inspect your widget:
```bash
curl http://localhost:8002/widgetlist/
curl http://localhost:8002/widgetlist/travel_top_destinations
```

To test the final orchestration (if added to user 1 / alice):
```bash
curl http://localhost:8000/widgetlist/?user_id=1
```


# 7 Summary

This guideline enables product teams to build flexible, autonomous widgets with minimal friction:

- Build a Speedboat
- Expose widget definitions
- Provide a payload
- Test locally
- Let the Orchestrator handle the rest
- Let Web and Android App render your widgets automatically

Product teams can innovate independently while the Core provides the minimal stable contract required for safety and performance.
The Orchestrator does not return widget data but only the widget configuration and URLs.
All Speedboat data is fetched directly by Web and Mobile clients.