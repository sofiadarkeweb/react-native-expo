import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

export default function TodoItem({ item, pressHandler }) {
	return (
		<View style={styles.todoBlock}>
			<Text style={styles.todoItem}>{item.text}</Text>
			<TouchableOpacity onPress={() => pressHandler(item.key)}>
				<Text style={styles.todoItem}>X</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	todoBlock: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "pink",
		borderRadius: 10,
		justifyContent: "space-between",
		marginTop: 10,
	},

	todoItem: {
		padding: 30,
	},
});
