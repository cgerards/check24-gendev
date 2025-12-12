package com.example.check24_mobile.network

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.GET
import com.example.check24_mobile.BuildConfig
import com.example.check24_mobile.model.OrchestratorResponse
import com.google.gson.JsonElement
import okhttp3.OkHttpClient
import retrofit2.http.Query
import retrofit2.http.Url
import java.util.concurrent.TimeUnit

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

        val okHttpClient = OkHttpClient.Builder()
            .readTimeout(2, TimeUnit.SECONDS)
            .connectTimeout(2, TimeUnit.SECONDS)
            .writeTimeout(2, TimeUnit.SECONDS)
            .build()

        Retrofit.Builder()
            // Base URL is required but will be overridden by @Url
            .client(okHttpClient)
            .baseUrl("http://localhost/") 
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(GenericService::class.java)
    }
}
