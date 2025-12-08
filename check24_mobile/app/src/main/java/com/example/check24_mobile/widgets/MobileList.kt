package com.example.check24_mobile.widgets

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import com.example.check24_mobile.model.BasicListItem


@Composable
fun MobileList(header: String, items: List<BasicListItem>, type: String) {


    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(4.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {

        Text(
            text = header,
            style = MaterialTheme.typography.titleLarge,
            fontWeight = FontWeight.Bold
        )




        items.forEach { item ->
            val subtitle = if (type == "loan") {
                "${item.rightUpperBold} ${item.rightUpper}| ${item.rightLower}"
            } else {
                "${item.rightUpperBold} ${item.rightUpper}"
            }

            val title = if (type == "loan") {
                item.rightLowerBig
            } else {
                "${item.rightLowerBig} ${item.rightLower}"
            }

            MobileCard(
                leftUpper = item.leftUpper,
                leftBold = item.leftBold,
                leftLower = item.leftLower,
                title = title,
                subtitle = subtitle,
                type = type
            )
        }

        Text(
            text = "Mehr Angebote entdecken",
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.primary
        )
    }

}

@Composable
fun MobileCard(
    leftUpper: String,
    leftBold: String,
    leftLower: String,
    title: String,
    subtitle: String,
    type: String
) {
    Card(
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface,
        ),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp),
        modifier = Modifier
            .fillMaxWidth()
            .height(100.dp) // Fixed height for alignment
    ) {
        Row(
            modifier = Modifier.fillMaxWidth()
        ) {

            val style = if (type == "loan") {
                MaterialTheme.typography.bodyLarge
            } else {
                MaterialTheme.typography.headlineMedium
            }

            val backgroundColor = if (type == "loan") {
                Color(0xFF2563EB) // Blue-600 equivalent
            } else {
                Color(0xFFFF9800) // Amber/Orange
            }

            Box(
                modifier = Modifier
                    .width(100.dp) // "quadratic" effect for the height of 100dp
                    .fillMaxHeight()
                    .background(backgroundColor)
                    .padding(8.dp),
                contentAlignment = Alignment.Center
            ) {
                Column(
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.Center
                ) {
                    Text(
                        text = leftUpper,
                        style = MaterialTheme.typography.bodySmall,
                        color = Color.White
                    )

                    Text(
                        text = leftBold,
                        style = style,
                        fontWeight = FontWeight.ExtraBold,
                        color = Color.White
                    )

                    Text(
                        text = leftLower,
                        style = MaterialTheme.typography.bodySmall,
                        color = Color.White,
                        textAlign = TextAlign.Center
                    )
                }
            }

            // Right side: Content
            Column(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxHeight()
                    .padding(16.dp),
                verticalArrangement = Arrangement.Center
            ) {
                Text(
                    text = title,
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold,
                    modifier = Modifier.padding(bottom = 4.dp)
                )
                Text(
                    text = subtitle,
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}
