package com.example.check24_mobile.ui

import androidx.compose.runtime.Composable
import com.example.check24_mobile.model.CarouselResponse
import com.example.check24_mobile.model.DealItem
import com.example.check24_mobile.model.DualResponse
import com.example.check24_mobile.model.GridResponse
import com.example.check24_mobile.model.ListResponse
import com.example.check24_mobile.widgets.Banner
import com.example.check24_mobile.widgets.DualList
import com.example.check24_mobile.widgets.Grid
import com.example.check24_mobile.widgets.MobileCarousel
import com.example.check24_mobile.widgets.MobileList
import com.google.gson.Gson
import com.google.gson.JsonElement

@Composable
fun WidgetRendererGson(type: String, jsonElement: JsonElement) {
    val gson = Gson()

    when (type) {
        "carousel" -> {
            val data = gson.fromJson(jsonElement, CarouselResponse::class.java)
            MobileCarousel(data.header, data.items)
        }
        "featured_grid" -> {
            val data = gson.fromJson(jsonElement, GridResponse::class.java)
            Grid(data.header, data.items)
        }
        "basic_grid" -> {
            val data = gson.fromJson(jsonElement, GridResponse::class.java)
            Grid(data.header, data.items)
        }
        "dual" -> {
            val data = gson.fromJson(jsonElement, DualResponse::class.java)
            DualList(data.header, data.items)
        }
        "minimal" -> {
             val data = gson.fromJson(jsonElement, ListResponse::class.java)
             MobileList(data.header, data.items, data.type)
        }
        "deal" -> {
            val data = gson.fromJson(jsonElement, DealItem::class.java)
            Banner(data)
        }
    }
}
