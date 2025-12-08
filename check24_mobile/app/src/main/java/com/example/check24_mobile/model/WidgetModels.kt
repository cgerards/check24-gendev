package com.example.check24_mobile.model
import kotlinx.serialization.json.JsonElement


data class BasicListItem(
    val leftUpper: String,
    val leftBold: String,
    val leftLower: String,
    val rightUpperBold: String,
    val rightUpper: String,
    val rightLowerBig: String,
    val rightLower: String
)

data class ListResponse(
    val header: String,
    val type: String,
    val items: List<BasicListItem>
)

data class GridResponse(
    val header: String,
    val items: List<BasicGridItem>
)

data class BasicGridItem(
    val title: String,
    val subtitle: String,
    val src: String,
    val alt: String
)

data class CarouselResponse(
    val header: String,
    val items: List<BasicCarouselItem>
)

data class BasicCarouselItem(
    val title: String,
    val description: String,
    val src: String,
    val alt: String
)


data class DealItem (
    val title: String,
    val description: String,
    val bubble: String,
    val button: String,
    val addition: String,
    val season: String
)

data class DualResponse(
    val header: String,
    val items: List<DualItem>
)

data class DualItem(
    val title: String,
    val description: String,
    val average: String,
    val note: String,
    val src: String,
    val alt: String
)


data class Widget (
    val widgetId: String,
    val type: String,
    val data: JsonElement?
)


data class OrchestratorEntry (
    val widget_id: String,
    val type: String,
    val url: String
)

data class OrchestratorResponse (
    val widgets: List<OrchestratorEntry>
)