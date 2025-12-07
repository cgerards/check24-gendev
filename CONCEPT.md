# Home Widgets - Core Architecture Concept


## 1. Introduction
This project implements the Check24-Gendev Challenge and finds a solution for the loading of widgets on the startpage in both a native mobile app and a website.

For this approach, ***multiple microservices***, i.e. "speedboats", are created to handle the logic and to provide the data for every widget. Therefore, the load on each individual element of the startpage can and will be dynamically assigned (also in terms of load-balancing), since we can control the flow and arrangement of the widgets depending on an active user-session.

The most important speedboat for this approach will be the orchestrator. The orchestrator is a component which will be called for every visit on the startpage and which provides the final arrangement of widgets on the startpage. With further underlying logic, it would be possible to include a ***Recommender System*** here, or also ***geographical targeting*** of Check24-users. In this implementation, a demo of ***recommending widgets based on different user-preferences*** will be provided.

The orchestrator is both implemented for the website and native app, and works for both cases without modification.

## 2. High-Level Architecture
![Architecutre Diagram](./images/architecture_diagram.svg)

The initial request will be sent to the orchestrator. In this implementation, also a user who is not logged in will send this request, but it would be simply possible to change that and to fall back to a default case.

With the orchestrator request, the application will send requests to each individual speedboat to retrieve the data. As soon as the data is available, the application will render the components onto the startpage.

### 2.1 Achieved Goals
- Autonomy of widgets through dedicated speedboats
- No dependencies for updating contents (→ especially for Mobile Apps)
- Orchestrator as the central source of information: dynamic adjustment of styling and content possible
- Scalability: own speedboat for each service


## 3. Responsibilities
### 3.1 Core Orchestrator (FastAPI)
- Receives: `GET /widgets?user_id=123` for logged-in users and similar for non-logged-in users
- Provides arrangement of the widget based on user preferences
- Provides API-endpoint where the speedboat data will be located
- Provides the type of the widget

The core orchestrator has to specify the type of the widget, since it is not possible to dynamically render new widget-types in React nor in the native app. But with this in mind, only a major release has to be deployed once new widget-types are implemented, while it is possible to dynamically use the existing widgets.

Example:
```json
{
  "widgets": [
    { "widget_id": "cityTravel_featured", "type": "featured_grid" },
    { "widget_id": "sportTravel_grid", "type": "basic_grid" },
  ]
}

```
will show two travel-related widgets on the startpage.


### 3.2 Speedboats (FastAPI)
Each Speedboat is a small independent service providing one or more endpoints for widgets of a related field.
Example (city-travel widget):
```json
{
  "header": "Die perfekte Städtereise!",
  "items": [
    {
      "title": "London",
      "subtitle": "7.121 Unterkünfte",
      "src": "https://media.istockphoto.com/id/1347665170/de/foto/london-bei-sonnenuntergang.jpg?s=612x612&w=0&k=20&c=oB0zxCW_uvZt4t34Q9QblePN6LqjEfjWOaHcY0Ll-7A=",
      "alt": "London"
    },
    ...
  ]
}

```
It is possible to update this content at anytime.
Once the changes are made in the backend, they will be propagated instantly to the mobile App and to the website.

### 3.3 Frontend Renderer (Web + Mobile)
Frontends are Renderers. They will receive a list of widget-types and the corresponding URL to fetch the data from.

After the data is fetched from the multiple speedboats, they will be rendered instantly on the startpage, ***only rendering the widgets that are necessary for this specific user***.

## 4 Cross-Platform Synchronization
The Orchestrator returns the same widget structure to both:
- Web (Next.js)
- Android (Kotlin)

Both renderers use a component registry:
```bash
type: "carousel"  →  CarouselWidget()
type: "grid"      →  GridWidget()
type: "banner"    →  BannerWidget()
```

Product teams are free to introduce new widget types, as long as:
- They follow the schema
- The frontends implement the renderer components

This ensures flexibility without breaking layouts.

## 5 Deployment Concept
For the Proof of Concept:
- Frontend Web → Vercel
- Backend (Orchestrator + Speedboats) → AWS

Each service is containerized via Docker Compose, therefore easy to scale and update.

### 5.1 Avoiding Vendor Lock-In

The architecture explicitly avoids relying on AWS-specific services.

**All backend components:**
- run in standard Docker containers
- expose simple HTTP APIs
- have no dependency on AWS-only services such as Lambda, DynamoDB, SQS, API Gateway, or proprietary SDKs
- can be deployed identically on any platform (e.g., Google Cloud, Azure, DigitalOcean, Render, Fly.io, or a local Kubernetes cluster)

Although Vercel is convenient for Next.js, the project intentionally avoids Vercel-specific features such as:
- Edge Config
- Vercel KV / Blob / Analytics
- Serverless Functions
- Middleware tied to Vercel’s runtime

**Instead, the frontend uses**:
- standard Next.js App Router
- pure static + client-rendered + SSR pages
- environment variables that follow standard .env patterns
- build output that works anywhere (.next)

## 6 Why This Architecture Meets the Guiding Principles
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


## 7 Future Extensions

- A/B testing handled in Speedboats
- Recommender System within the Orchestrator (ML-based)
- Widget marketplace for product teams

## 8 Summary

This architecture models a ***realistic, decentralized, scalable*** Home Widget ecosystem similar to Check24’s modern architecture.
It delivers autonomy for product teams while having a simple, maintainable core and supporting both Web and Native Apps dynamically.