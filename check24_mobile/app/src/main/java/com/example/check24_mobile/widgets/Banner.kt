package com.example.check24_mobile.widgets

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.dp
import com.example.check24_mobile.model.DealItem

@Composable
fun Banner(item: DealItem) {

    // Define styles based on type
    val gradientBrush = if (item.season == "blackfriday") {
        Brush.horizontalGradient(
            colors = listOf(
                Color(0xFF171717), // neutral-900
                Color(0xFF262626), // neutral-800
                Color(0xFFB91C1C)  // red-700
            )
        )
    } else {
        // christmas
        Brush.horizontalGradient(
            colors = listOf(
                Color(0xFF064E3B), // emerald-900
                Color(0xFF065F46), // emerald-800
                Color(0xFFBE123C)  // rose-700
            )
        )
    }

    val badgeColor = if (item.season == "blackfriday") {
        Color.Black.copy(alpha = 0.5f)
    } else {
        Color.White.copy(alpha = 0.1f)
    }

    val textColor = if (item.season == "blackfriday") {
        Color(0xFFFEF3C7).copy(alpha = 0.9f) // amber-100/90
    } else {
        Color(0xFFFFFBEB).copy(alpha = 0.9f) // amber-50/90
    }


    Card(
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp),
        modifier = Modifier
            .fillMaxWidth()
            .padding(4.dp)
    ) {

        Box(
            modifier = Modifier
                .fillMaxWidth()
                .background(brush = gradientBrush)
                .padding(16.dp),
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Column(
                    verticalArrangement = Arrangement.spacedBy(4.dp),
                    modifier = Modifier.weight(1f)
                ) {
                    // Badge
                    Box(
                        modifier = Modifier
                            .background(badgeColor, shape = RoundedCornerShape(4.dp))
                            .padding(horizontal = 8.dp, vertical = 4.dp)
                    ) {
                        Text(
                            text = item.bubble,
                            style = MaterialTheme.typography.labelMedium,
                            color = textColor,
                            fontWeight = FontWeight.Bold
                        )
                    }

                    Text(
                        text = item.title,
                        style = MaterialTheme.typography.titleLarge,
                        color = textColor,
                        fontWeight = FontWeight.Bold
                    )

                    val description = buildAnnotatedString {
                        val regex = "\\[(.*?)\\]".toRegex()
                        var lastIndex = 0
                        regex.findAll(item.description).forEach { matchResult ->
                            // Append text before match
                            append(item.description.substring(lastIndex, matchResult.range.first))

                            // Append highlighted text
                            withStyle(SpanStyle(fontWeight = FontWeight.Bold, color = Color(0xFFFCD34D))) { // amber-300
                                append(matchResult.groupValues[1])
                            }
                            lastIndex = matchResult.range.last + 1
                        }
                        // Append remaining text
                        if (lastIndex < item.description.length) {
                            append(item.description.substring(lastIndex))
                        }
                    }

                    Text(
                        text = description,
                        style = MaterialTheme.typography.bodyMedium,
                        color = textColor
                    )
                }

            }
        }
    }
}
