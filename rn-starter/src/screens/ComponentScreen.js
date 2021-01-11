import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentScreen = () => {
	return <Text style={style.textStyle}>This is my custom component</Text>;
};

const style = StyleSheet.create({
	textStyle: {
		fontSize: 30,
	},
});

export default ComponentScreen;
