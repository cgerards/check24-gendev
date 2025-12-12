# Home Widgets - Core Architecture Concept


## 1. Introduction
This project implements the Check24-Gendev Challenge and finds a solution for the loading of widgets on the startpage in both a native mobile app and a website. In this document, the technical concept for this challenge will be provided describing a decentralized, scalable Home Widget Service that supports high traffic, personalized content and multi-platform applications.

For this approach, ***multiple microservices***, i.e. "speedboats", are created to handle the logic and to provide the data for every widget. Therefore, the load on each individual element of the startpage can and will be dynamically assigned (also in terms of load-balancing), since we can control the flow and arrangement of the widgets depending on an active user-session.

The most important speedboat for this approach will be the orchestrator. The orchestrator is a component which will be called for every visit on the startpage and which provides the final arrangement of widgets on the startpage. With further underlying logic, it would be possible to include a ***Recommender System*** here, or also ***geographical targeting*** of Check24-users. In this implementation, a demo of ***recommending widgets based on different user-preferences*** will be provided.

The orchestrator is both implemented for the website and native app, and works for both cases without modification.
This concept is implemented as a working Proof of Concept (PoC), matching the architecture described here.

## 2. High-Level Architecture
![Architecutre Diagram](./images/architecture_diagram.svg)


### Process Flow and Data Flow

1. **Frontend → Orchestrator** <br>
The client (web or mobile) sends a request to the Orchestrator, optionally with a user_id.

2. **Orchestrator → Frontend** <br>
The Orchestrator responds with a list of widget definitions, including: <br>
`widget_id` <br>
`type` <br>
`data_url` (endpoint of the respective speedboat)

3. **Frontend → Speedboats** (parallel fan-out) <br>
The application requests each widget’s data independently and in parallel.

4. **Frontend Rendering** <br>
As soon as data for a widget is available, the renderer displays it on the Home Screen in the received order.


### 2.1 Achieved Goals

- Autonomous widget development (per domain)
- No dependencies for updating widget content (critical for mobile apps)
- Orchestrator as the single source of layout truth (dynamic adjustment of styling and content possible)
- Scalable architecture through multiple speedboats
- Dynamic personalization per user or per session
- Frontends as thin renderers that do not contain business logic


## 3. Responsibilities
### 3.1 Core Orchestrator (FastAPI)
The orchestrator is a lightweight and stateless coordination layer responsible for:
- Handling `GET /widgets?user_id=123` requests (for both logged-in and non-logged-in users)
- Selecting and ordering widgets based on user preferences
- Providing the widget type, which determines the frontend renderer
- Returning the data URL where the speedboat provides the widget content

The core orchestrator has to specify the type of the widget, since it is not possible to dynamically render new widget-types in React nor in the native app. But with this in mind, only a major release has to be deployed once new widget-types are implemented, while it is possible to dynamically use the existing widgets.

**Example response:**
```json
{
  "widgets": [
    { "widget_id": "cityTravel_featured", "type": "featured_grid", "url": "http://127.0.0.1:8002/city" },
    { "widget_id": "sportTravel_grid", "type": "basic_grid", "url": "http://127.0.0.1:8002/sport" }
  ]
}

```
This response will show two travel-related widgets on the startpage.



### 3.2 Speedboats (FastAPI)
Each Speedboat is a small, independent service providing one or more endpoints for widgets of a related field.

It is responsible for:
- Delivering the content payload
- Personalizing output using the incoming user_id
- Maintaining its own logic & data sources
- Serving lightweight JSON responses (no HTML, only URLs for images)

**Example payload (city-travel widget):**
```json
{
  "header": "Die perfekte Städtereise!",
  "items": [
    {
      "title": "London",
      "subtitle": "7.121 Unterkünfte",
      "src": "https://example.com/london",
      "alt": "London"
    }
  ]
}

```

Each product delivers:
- Personalized content (based on user_id)
- Layout metadata (if supported by widget type)
- Fully dynamic data that updates without needing Core deployments

It is possible to update the content of speedboats at anytime.
Once the changes are made in the backend, they will be propagated instantly to the mobile App and to the website.

### 3.3 Frontend Renderer (Web + Mobile)
Both frontends are **Renderers**. They will receive a list of widget-types and the corresponding URL to fetch the data from.

Both Web (Next.js) and Android (Kotlin) follow the same model:
1. Receive widget definitions from orchestrator
2. Fetch each widget’s `data_url`
3. Dynamically render components based on widget type

They use a local registry, e.g.:
```
"featured_grid" → FeaturedGridWidget()
"carousel"      → CarouselWidget()
"banner"        → BannerWidget()
```

This ensures cross-platform synchronization and consistency.
Also, in future updates, new widget types can be added easily.

After the data is fetched from the multiple speedboats, they will be rendered instantly on the startpage, ***only rendering the widgets that are necessary for this specific user***. This underlines the **freshness of the data** and also the user-aware rendering.

Product teams are free to introduce new widget types, as long as they follow the schema and the frontends implement the renderer components.

## 4 Decision Rationale & Trade-offs

| Component                         | Technology               | Reasoning / Trade-off                                                                                          |
| --------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Frontend Web                      | Next.js / React          | Supports SSR + client-side rendering; well-supported; easy deployment on Vercel; standard for modern web apps. |
| Backend Orchestrator + Speedboats | FastAPI                  | Lightweight, async-friendly, Python ecosystem; fast to prototype; easy parallel fan-out to speedboats. Additionally also experienced due to university practicals.        |
| Mobile App                        | Kotlin + Jetpack Compose | Native performance, modern UI toolkit, easy mapping of widgets from web schema; maintainable long-term.        |
| Deployment Web                    | Vercel                   | Optimized for Next.js static & dynamic pages; simple CI/CD; free tier available.                               |
| Deployment Backend                | AWS EC2                  | Flexible, isolated services; full control; avoids vendor lock-in tied to serverless-only solutions. Student tier available.            |
| Containerization                  | Docker                   | Ensures reproducibility, portability, and easy scaling; all services isolated.                                 |


## 5 Deployment Concept
**PoC Deployment:**
- Frontend Web → Vercel
- Backend (Orchestrator + Speedboats) → AWS EC2

All backend services are containerized via Docker Compose, enabling simple scaling, portability, and reproducible deployments.

### 5.1 Avoiding Vendor Lock-In

The architecture explicitly avoids relying on AWS-specific services.

**All backend components:**
- run in standard Docker containers
- expose simple HTTP APIs
- have no dependency on AWS-only services such as Lambda, DynamoDB, SQS, API Gateway, or proprietary SDKs
- can be deployed identically on any platform (e.g., Google Cloud, Azure, DigitalOcean, Render, Fly.io, or a local Kubernetes cluster)

**The frontend does not use Vercel-specific features, such as**:
- Edge Config
- Vercel KV / Blob / Analytics
- Middleware tied to Vercel’s runtime

**The frontend uses:**
- standard Next.js App Router
- pure static + client-rendered + SSR pages
- environment variables that follow standard .env patterns
- build output that works anywhere (.next)



## 6 Performance Strategy

### 6.1 Async Fan-Out

Orchestrator uses non-blocking asynchronous calls to speedboats with:
- request timeouts
- deadline-based merging
- parallel fan-out

If a speedboat is slow, the Home Screen will still load.


### 6.2 Graceful Degradation

- Widget timeouts → omit widget
- Speedboat fails → omit widget
- Home always loads with clean UX
- Ensure Core never propagates product failures


## 7 High Availability
Designed so that:
- Orchestrator replicas are stateless → auto-recover
- Speedboats isolated → single product outage ≠ Home failure
- Load balancer performs health checking
- Sidecar circuit breakers for preventing cascading failures


## 8 Why This Architecture Meets the Guiding Principles
✔ Decentralized

Every product runs independently.

✔ Low coupling

Core only normalizes and sorts — no domain logic.

✔ Dynamic layout & content

Frontend renders whatever the orchestrator returns.

✔ Scalable & future-proof

Just add a new Speedboat → instantly available.

✔ Multi-platform

Both Web and Mobile consume the same schema.

✔ Minimal Core constraints

Only essential boundaries (validation, merging, risks).


## 9 Future Extensions

- A/B testing handled in Speedboats
- ML-based recommendations in the Orchestrator (Recommender System)
- A public “Widget Marketplace” enabling domain teams to publish widgets

## 10 Summary

This architecture implements a **realistic, decentralized and scalable** Home Widget system inspired by real-world Check24 patterns.
It offers:
- Full autonomy for product teams
- Minimal dependencies
- Extremely fast iteration cycles
- A simple and stable core
- Consistent rendering across all platforms
- Instant delivery of updated content without mobile app updates

The accompanying Proof of Concept validates the architecture end-to-end.