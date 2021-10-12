import { PickerIOSComponent, StyleSheet, Text, View } from "react-native";

import React from "react";

export default function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.headerText}>My Todo List</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "coral",
		// justifyContent: "center",
		alignItems: "center",
		// borderRadius: 50,
	},
	headerText: {
		padding: 30,
		fontSize: 24,
		fontWeight: "bold",
		fontStyle: "italic",
		color: "white",
	},
});
