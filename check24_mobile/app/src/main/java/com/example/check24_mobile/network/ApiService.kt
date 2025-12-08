package com.example.check24_mobile.network

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.GET
import com.example.check24_mobile.BuildConfig
import com.example.check24_mobile.model.OrchestratorResponse
import com.google.gson.JsonElement
import retrofit2.http.Query
import retrofit2.http.Url

interface OrchestratorService {
    @GET(value="widgetlist")
    suspend fun getWidgetList(): OrchestratorResponse

    @GET(value="widgetlist")
    suspend fun getWidgetList(@Query("user_id") userId: Int): OrchestratorResponse
}

interface GenericService {
    @GET
    suspend fun getWidgetData(@Url url: String): JsonElement
}


object RetrofitClients {
    // NOTE: 127.0.0.1 refers to the emulator itself.
    // To reach your computer's localhost from the emulator, use 10.0.2.2

    val OrchestratorApi : OrchestratorService by lazy {
        Retrofit.Builder()
            .baseUrl(BuildConfig.ORCHESTRATOR_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(OrchestratorService::class.java)
    }

    val GenericApi: GenericService by lazy {
        Retrofit.Builder()
            // Base URL is required but will be overridden by @Url
            .baseUrl("http://localhost/") 
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(GenericService::class.java)
    }
}
