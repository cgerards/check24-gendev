package com.example.check24_mobile.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.unit.dp
import com.example.check24_mobile.data.UserPreferences
import kotlinx.coroutines.launch

@Composable
fun AccountScreen() {
    val context = LocalContext.current
    val userPreferences = UserPreferences(context)
    val scope = rememberCoroutineScope()
    val selectedUser by userPreferences.userId.collectAsState(initial = 0)

    val handleUserSelect = { userId: Int ->
        scope.launch {
            if (selectedUser == userId) {
                userPreferences.clearUserId()
            } else {
                userPreferences.setUserId(userId)
            }
        }
    }

    val handleClear = {
        scope.launch {
            userPreferences.clearUserId()
        }
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF3F4F6)) // gray-100 equivalent
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .background(Color.White, shape = RoundedCornerShape(8.dp))
                .padding(24.dp)
        ) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(bottom = 20.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "User selection",
                    style = MaterialTheme.typography.bodyLarge,
                    fontWeight = FontWeight.Bold,
                    textDecoration = TextDecoration.Underline
                )
                Text(
                    text = "Clear",
                    style = MaterialTheme.typography.bodyMedium,
                    fontWeight = FontWeight.SemiBold,
                    color = Color(0xFF06377B), // checkblue
                    modifier = Modifier.clickable { handleClear() }
                )
            }

            Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                // 1 - Alice
                UserRow(
                    id = 1,
                    name = "Alice",
                    tags = listOf(
                        TagData("car-interested", Color(0xFFEF4444)), // red
                        TagData("travel-soon", Color(0xFFEAB308)) // yellow
                    ),
                    isSelected = selectedUser == 1,
                    onSelect = { handleUserSelect(1) }
                )

                // 2 - Bob
                UserRow(
                    id = 2,
                    name = "Bob",
                    tags = listOf(
                        TagData("cityTravel-interested", Color(0xFFEAB308)), // yellow
                        TagData("normalTravel-interested", Color(0xFFEAB308)) // yellow
                    ),
                    isSelected = selectedUser == 2,
                    onSelect = { handleUserSelect(2) }
                )

                // 3 - Charlie
                UserRow(
                    id = 3,
                    name = "Charlie",
                    tags = listOf(
                        TagData("shopping", Color(0xFF3B82F6)), // blue
                        TagData("mobile", Color(0xFF3B82F6)), // blue
                        TagData("blackfriday/christmas", Color(0xFF3B82F6)) // blue
                    ),
                    isSelected = selectedUser == 3,
                    onSelect = { handleUserSelect(3) }
                )

                // 4 - Dave
                UserRow(
                    id = 4,
                    name = "Dave",
                    tags = listOf(
                        TagData("electricity", Color(0xFF22C55E)), // green
                        TagData("gas", Color(0xFF22C55E)), // green
                        TagData("loan", Color(0xFF3B82F6)) // blue
                    ),
                    isSelected = selectedUser == 4,
                    onSelect = { handleUserSelect(4) }
                )
            }
        }
    }
}

data class TagData(val text: String, val color: Color)

@Composable
fun UserRow(id: Int, name: String, tags: List<TagData>, isSelected: Boolean, onSelect: () -> Unit) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 4.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp),
            modifier = Modifier.weight(1f)
        ) {
            Text(
                text = name,
                fontWeight = FontWeight.SemiBold,
                color = Color(0xFF374151) // gray-700
            )
            Row(
                horizontalArrangement = Arrangement.spacedBy(4.dp)
            ) {
                tags.forEach { tag ->
                    Tag(text = tag.text, color = tag.color)
                }
            }
        }

        Switch(
            checked = isSelected,
            onCheckedChange = { onSelect() }
        )
    }
}

@Composable
fun Tag(text: String, color: Color) {
    Box(
        modifier = Modifier
            .background(color.copy(alpha = 0.1f), shape = RoundedCornerShape(4.dp))
            .padding(horizontal = 6.dp, vertical = 2.dp)
    ) {
        Text(
            text = text,
            style = MaterialTheme.typography.labelSmall,
            color = color,
            fontWeight = FontWeight.Bold
        )
    }
}
