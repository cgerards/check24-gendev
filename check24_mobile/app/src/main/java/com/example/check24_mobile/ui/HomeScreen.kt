package com.example.check24_mobile.ui

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import com.example.check24_mobile.data.UserPreferences
import com.example.check24_mobile.model.OrchestratorResponse
import com.example.check24_mobile.network.RetrofitClients
import com.google.gson.JsonElement
import kotlinx.coroutines.flow.first


@Composable
fun HomeScreen() {
    val context = LocalContext.current
    val userPreferences = UserPreferences(context)

    var isLoading by remember { mutableStateOf(true) }
    var errorMessage by remember { mutableStateOf<String?>(null) }
    var widgetList by remember { mutableStateOf<OrchestratorResponse?>(null) }
    // Map to store fetched data for each widget, keyed by widget_id (or index if no unique ID)
    val widgetDataMap = remember { mutableStateMapOf<String, JsonElement>() }

    LaunchedEffect(Unit) {
        try {
            val userId = userPreferences.userId.first()
            val response = if (userId > 0) {
                RetrofitClients.OrchestratorApi.getWidgetList(userId)
            } else {
                RetrofitClients.OrchestratorApi.getWidgetList()
            }
            widgetList = response

            // Fetch data for each widget that has a URL
            response.widgets.forEach { widget ->
                if (widget.url.isNotEmpty()) {
                    try {
                        val data = RetrofitClients.GenericApi.getWidgetData(widget.url)
                        widgetDataMap[widget.widget_id] = data
                    } catch (e: Exception) {
                        e.printStackTrace()
                    }
                }
            }

        } catch (e: Exception) {
            errorMessage = e.message
            e.printStackTrace()
        } finally {
            isLoading = false
        }
    }

    LazyColumn(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(24.dp),
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        if (isLoading) {
             item { CircularProgressIndicator() }
        } else if (widgetList != null) {
            items(widgetList!!.widgets) { widget ->
                // Skip if no URL
                if (widget.url.isNotEmpty()) {
                    val data = widgetDataMap[widget.widget_id]
                    if (data != null) {
                        WidgetRendererGson(widget.type, data)
                    }
                }
            }
        } else {
            item {
                Text("Failed to load data", color = MaterialTheme.colorScheme.error)
                Text(
                    text = errorMessage ?: "Unknown error",
                    color = MaterialTheme.colorScheme.error
                )
            }
        }
    }
}
