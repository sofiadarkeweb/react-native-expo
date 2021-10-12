import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	ScrollView,
	FlatList,
	ListItem,
	TouchableOpacity,
} from "react-native";

import Header from "./components/Header.jsx";
import NewEntry from "./components/NewEntry.jsx";
import TodoItem from "./components/TodoItem.jsx";

export default function App() {
	// const [name, setName] = useState("Sofia");
	// const [age, setAge] = useState("40");

	// const [people, setPeople] = useState([
	// 	{ name: "Sofia", id: 1 },
	// 	{ name: "Sofie", id: 2 },
	// 	{ name: "Marie", id: 3 },
	// 	{ name: "Heidi", id: 4 },
	// 	{ name: "Krista", id: 5 },
	// 	{ name: "Moa", id: 6 },
	// 	{ name: "Alex", id: 7 },
	// ]);

	const [todos, setTodos] = useState([
		{ text: "Make coffee", key: "1" },
		{ text: "Pick up kids", key: "2" },
		{ text: "Draw a banana", key: "3" },
		{ text: "Eat apple", key: "4" },
		{ text: "Eat Pumkin", key: "5" },
	]);

	// const changeState = () => {
	// 	setName("Moa");
	// 	setAge("29");
	// };

	// const pressHandler = (id) => {
	// 	console.log(id);
	// 	setPeople((prevPeople) => {
	// 		return prevPeople.filter((person) => person.id != id);
	// 	});
	// };

	const pressHandler = (key) => {
		setTodos((prevTodo) => {
			console.log(key);
			return prevTodo.filter((todo) => todo.key != key);
		});
	};

	const buttonHandler = (input) => {
		setTodos((prevTodo) => {
			// return prevTodo.push((input) => input.key === key);
			return [{ text: input, key: Math.random().toString() }, ...prevTodo];
		});
	};

	return (
		<View style={styles.container}>
			<Header />
			<NewEntry buttonHandler={buttonHandler} />
			<View style={styles.todoList}>
				<FlatList
					data={todos}
					renderItem={({ item }) => (
						<TodoItem item={item} pressHandler={pressHandler} />
					)}
				/>
			</View>
			{/* <FlatList
				keyExtractor={(item) => item.id}
				data={people}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => pressHandler(item.id)}>
						<Text style={styles.item}>{item.name}</Text>
					</TouchableOpacity>
				)}
			/> */}
			{/* <ScrollView>
				{people.map((person) => (
					<View key={person.key}>
						<Text style={styles.item}>{person.name}</Text>
					</View>
				))}
			</ScrollView> */}
			{/* <View style={styles.header}>
				<Text>Name here:</Text>
				<TextInput
					multiline
					style={styles.input}
					onChangeText={(apple) => setName(apple)}
				/>
				<Text>Age here:</Text>
				<TextInput
					keyboardType="numeric"
					style={styles.input}
					onChangeText={(apple) => setAge(apple)}
				/>
			</View>
			<Text style={styles.text}>
				Hello {name}, you are {age} years old!
			</Text>
			<View>
				<Button title="click" onPress={changeState} />
			</View> */}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 40,

		// alignItems: "center",
		// justifyContent: "center",
	},

	todoList: {
		margin: 20,
	},

	todoBlock: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "pink",
		// alignItems: "space-between",
		justifyContent: "space-between",
		marginTop: 10,
	},

	todoItem: {
		padding: 30,
	},

	item: {
		padding: 30,
		marginTop: 24,
		backgroundColor: "pink",
		fontSize: 24,
	},
	header: {
		backgroundColor: "pink",
		padding: 30,
		margin: 20,
	},
	text: {
		fontSize: 20,
		justifyContent: "center",

		// alignItems: "center",
		// justifyContent: "center",
	},

	body: {
		backgroundColor: "yellow",
		padding: 20,
		flex: 1,
	},

	input: {
		borderWidth: 1,
		borderColor: "red",
		padding: 8,
		margin: 20,
		width: 200,
	},
});
