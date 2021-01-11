import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
	const name = 'Marco';
	return (
		<View>
			<Text style={style.headerStyle}>Getting started with react native!</Text>
			<Text style={style.subHeaderStyle}>My name is {name}</Text>
		</View>
	);
};

const style = StyleSheet.create({
	headerStyle: {
		fontSize: 45,
	},
	subHeaderStyle: {
		fontSize: 20,
	},
});

export default ComponentScreen;
