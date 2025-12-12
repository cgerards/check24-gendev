package com.example.check24_mobile.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import com.example.check24_mobile.data.UserPreferences
import com.example.check24_mobile.model.OrchestratorResponse
import com.example.check24_mobile.network.RetrofitClients
import com.google.gson.JsonElement
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.flow.first


@Composable
fun HomeScreen() {
    val context = LocalContext.current
    val userPreferences = UserPreferences(context)

    var isLoading by remember { mutableStateOf(true) }
    var errorMessage by remember { mutableStateOf<String?>(null) }
    var widgetList by remember { mutableStateOf<OrchestratorResponse?>(null) }

    // Map to store fetched data for each widget, keyed by widget_id
    val widgetDataMap = remember { mutableStateMapOf<String, JsonElement>() }

    // Trigger to force reload
    var retryTrigger by remember { mutableStateOf(0) }

    LaunchedEffect(retryTrigger) {
        isLoading = true
        errorMessage = null
        try {
            val userId = userPreferences.userId.first()
            val response = if (userId > 0) {
                RetrofitClients.OrchestratorApi.getWidgetList(userId)
            } else {
                RetrofitClients.OrchestratorApi.getWidgetList()
            }
            widgetList = response

            // Fetch data for each widget that has a URL
            coroutineScope {
                response.widgets.map { widget ->
                    async {
                        if (widget.url.isNotEmpty()) {
                            try {
                                val data = RetrofitClients.GenericApi.getWidgetData(widget.url)
                                widgetDataMap[widget.widget_id] = data
                            } catch (e: Exception) {
                                // Log if you want, but ignore individual failures
                                e.printStackTrace()
                            }
                        }
                    }
                }.awaitAll()
            }

        } catch (e: Exception) {
            errorMessage = e.message
            e.printStackTrace()
        } finally {
            isLoading = false
        }
    }

    Box(modifier = Modifier
        .fillMaxSize()
        .background(MaterialTheme.colorScheme.background)) {
        if (isLoading) {
            Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                CircularProgressIndicator()
            }
        } else if (widgetList != null) {
            LazyColumn(
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(24.dp),
                modifier = Modifier
                    .fillMaxSize()
                    .padding(16.dp)
            ) {

                if (widgetList!!.widgets.all { widget -> widgetDataMap[widget.widget_id] == null }) {
                    item {
                        Box(modifier = Modifier.fillParentMaxSize()) {
                            ErrorScreen(
                                message = "Failed to load widgets.",
                                onRetry = { retryTrigger++ }
                            )
                        }
                    }
                } else {
                    items(widgetList!!.widgets) { widget ->
                        // Skip if no URL
                        if (widget.url.isNotEmpty()) {
                            val data = widgetDataMap[widget.widget_id]
                            if (data != null) {
                                WidgetRendererGson(widget.type, data)
                            }
                        }
                    }
                }
            }
        } else {
            // Error State
            ErrorScreen(
                message = errorMessage,
                onRetry = { retryTrigger++ }
            )
        }
    }
}
