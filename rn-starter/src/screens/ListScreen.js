import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
	const students = [
		{ name: 'John', age: 19 },
		{ name: 'Mark', age: 28 },
		{ name: 'Matt', age: 20 },
		{ name: 'Cristina', age: 21 },
		{ name: 'Mary', age: 17 },
		{ name: 'Carl', age: 26 },
		{ name: 'Elizabeth', age: 24 },
		{ name: 'Ana', age: 23 },
		{ name: 'Layla', age: 18 },
	];

	return (
		<FlatList
			keyExtractor={(student) => student.name}
			data={students}
			renderItem={({ item }) => {
				return (
					<Text style={styles.textStyle}>
						{item.name} - Age {item.age}
					</Text>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 40,
	},
});

export default ListScreen;
