import React, { useState } from "react";
import { View, Button, Text, StyleSheet, TextInput } from "react-native";

export default function NewEntry({ buttonHandler }) {
	const [input, setInput] = useState("");

	const changeHandler = (val) => {
		setInput(val);
	};

	return (
		<View style={styles.addContainer}>
			<TextInput
				placeholder="New todo..."
				onChangeText={changeHandler}
				style={styles.input}
			></TextInput>
			<Button
				color="coral"
				title="Add todo"
				onPress={() => buttonHandler(input)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: "coral",
		padding: 20,
		width: 260,
		borderRadius: 50,
	},

	btn: {
		padding: 20,
		backgroundColor: "lime",
		borderRadius: 50,
		fontWeight: "bold",
		fontSize: 24,
	},

	addContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		margin: 20,
	},
});
