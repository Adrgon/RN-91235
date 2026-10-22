import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const MultilineInput = () => {
	const [text, setText] = useState('')
	const maxLength = 200
	return (
		<View style={styles.container}>
			<TextInput 
				style={styles.multilineInput}
				onChangeText={setText}
				value={text}
				placeholder='Write your message here'
				multiline
				numberOfLines={4}
				maxLength={maxLength}
				textAlignVertical='top'
			/>
			<Text style={styles.counter}>
				{}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	multilineInput: {
		height: 100,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 8,
		paddingHorizontal: 10,
		paddingTop: 10,
		backgroundColor: '#fff',
		fontSize: 16
	},
	counter: {
		alignSelf: 'flex-end',
		color: '#666',
		fontSize: 12,
		marginTop: 4
	}
});

export default MultilineInput;
