import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


const BasicTextInput = () => {
	const [text, setText] = useState('');
	

	return (
		<View style={styles.container}>
			<TextInput 
				style={styles.input}
				onChangeText={setText}
				value={text}
				placeholder="Enter text here"
				placeholderTextColor="#666"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 8,
		paddingHorizontal: 10,
		backgroundColor: '#fff'
	}
});

export default BasicTextInput;
