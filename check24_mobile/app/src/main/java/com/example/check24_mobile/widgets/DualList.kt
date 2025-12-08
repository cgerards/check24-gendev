package com.example.check24_mobile.widgets

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.dp
import coil3.compose.AsyncImage
import com.example.check24_mobile.model.DualItem


@Composable
fun DualList(header: String, items: List<DualItem>) {

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(4.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        if (header.isNotEmpty()) {
            Text(
                text = header,
                style = MaterialTheme.typography.titleLarge,
                fontWeight = FontWeight.Bold
            )
        }

        items.forEach { item ->
            DualCard(item = item)
        }
    }
}

@Composable
fun DualCard(item: DualItem) {
    Card(
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface,
        ),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp),
        modifier = Modifier
            .fillMaxWidth()
            .height(130.dp)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth()
        ) {
            AsyncImage(
                model = item.src,
                contentDescription = item.alt,
                contentScale = ContentScale.Crop,
                modifier = Modifier
                    .weight(0.4f)
                    .fillMaxHeight()
                    .background(Color.LightGray)
            )

            Column(
                modifier = Modifier
                    .weight(0.6f)
                    .fillMaxHeight()
                    .padding(12.dp),
                verticalArrangement = Arrangement.Center
            ) {
                Text(
                    text = item.title,
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold
                )

                val description = formatDualText(item.description)
                Text(
                    text = description,
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    maxLines = 2
                )

                Column(modifier = Modifier.padding(top = 8.dp)) {
                    val average = formatDualText(item.average)
                    Text(
                        text = average,
                        style = MaterialTheme.typography.titleSmall,
                        fontWeight = FontWeight.SemiBold
                    )
                }
            }
        }
    }
}

@Composable
fun formatDualText(text: String): androidx.compose.ui.text.AnnotatedString {
    return buildAnnotatedString {
        // The format logic from Next.js:
        // 1. Split by | for new lines (though in Compose Text supports \n, we can just replace or handle multiline)
        // 2. Split by ><...>< to find highlights
        
        // Since we are rendering in a single Text composable, we treat | as newline
        val lines = text.split("|")
        lines.forEachIndexed { index, line ->
             if (index > 0) append("\n")
             
             // Regex to match ><content>< pattern (approximate based on the split logic provided)
             // The user code used split(/><(.*?)></). 
             // This implies the text looks like "Some text ><highlighted text>< more text"
             
             val regex = "><(.*?)><".toRegex()
             var lastIndex = 0
             
             regex.findAll(line).forEach { matchResult ->
                 append(line.substring(lastIndex, matchResult.range.first))
                 
                 withStyle(SpanStyle(fontWeight = FontWeight.SemiBold, color = Color(0xFFFCD34D))) { // amber-300
                     append(matchResult.groupValues[1])
                 }
                 lastIndex = matchResult.range.last + 1
             }
             
             if (lastIndex < line.length) {
                 append(line.substring(lastIndex))
             }
        }
    }
}
