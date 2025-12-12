plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.kotlin.compose)
    alias(libs.plugins.kotlin.serialization)
}

android {
    namespace = "com.example.check24_mobile"
    compileSdk = 36

    defaultConfig {
        applicationId = "com.example.check24_mobile"
        minSdk = 26
        targetSdk = 36
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        getByName("debug") {
            buildConfigField("String", "SHOPPING_URL", "\"http://10.0.2.2:8003/\"")
            buildConfigField("String", "TRAVEL_URL", "\"http://10.0.2.2:8002/\"")
            buildConfigField("String", "HOME_URL", "\"http://10.0.2.2:8001/\"")
            buildConfigField("String", "ORCHESTRATOR_URL", "\"http://10.0.2.2:8000/\"")
            buildConfigField("String", "CONTRACT_URL", "\"http://10.0.2.2:8004/\"")
        }

        getByName("release") {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
            // Use the debug signing config for release to avoid keystore issues during testing
            signingConfig = signingConfigs.getByName("debug")

            buildConfigField("String", "SHOPPING_URL", "\"https://cgbackendservices.de/shopping/\"")
            buildConfigField("String", "TRAVEL_URL", "\"https://cgbackendservices.de/travel/\"")
            buildConfigField("String", "HOME_URL", "\"https://cgbackendservices.de/home/\"")
            buildConfigField("String", "ORCHESTRATOR_URL", "\"https://cgbackendservices.de/\"")
            buildConfigField("String", "CONTRACT_URL", "\"https://cgbackendservices.de/contract/\"")

        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
    kotlinOptions {
        jvmTarget = "11"
    }
    buildFeatures {
        buildConfig = true
        compose = true
    }
}

dependencies {
    implementation(libs.coil.compose)
    implementation(libs.coil.network.okhttp)
    implementation(libs.retrofit)
    implementation(libs.converter.gson)
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.lifecycle.runtime.ktx)
    implementation(libs.androidx.activity.compose)
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.compose.ui)
    implementation(libs.androidx.compose.ui.graphics)
    implementation(libs.androidx.compose.ui.tooling.preview)
    implementation(libs.androidx.compose.material3)
    implementation(libs.androidx.navigation.compose)
    implementation(libs.androidx.datastore.preferences)
    implementation(libs.kotlinx.serialization.json)
    testImplementation(libs.junit)
    androidTestImplementation(libs.androidx.junit)
    androidTestImplementation(libs.androidx.espresso.core)
    androidTestImplementation(platform(libs.androidx.compose.bom))
    androidTestImplementation(libs.androidx.compose.ui.test.junit4)
    debugImplementation(libs.androidx.compose.ui.tooling)
    debugImplementation(libs.androidx.compose.ui.test.manifest)
}