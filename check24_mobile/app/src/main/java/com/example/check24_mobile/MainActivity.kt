package com.example.check24_mobile

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import com.example.check24_mobile.ui.MainScreen
import com.example.check24_mobile.ui.theme.Check24_mobileTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            Check24_mobileTheme {
                MainScreen()
            }
        }
    }
}
