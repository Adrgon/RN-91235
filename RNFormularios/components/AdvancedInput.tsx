import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const AdvancedInput = () => {
	const [username, setUsername] = useState("");
	const [error, setError] = useState("");
	const [isFocused, setIsFocused] = useState(false)

	const validateUsername = (text: string) => {
		setUsername(text)
		if(text.length < 3){
			setError('Username must be at least 3 character')
		} else if(!/^[a-zA-Z0-9]/.test(text)){
			setError('Username can only contain letters and numbers')
		}else {
			setError('')
		}

	}

	return (
    <View style={styles.container}>
      <Text style={styles.label}></Text>
      <TextInput
        style={[styles.input, isFocused && styles.focused, error && styles.error]}
        onChangeText={validateUsername}
        value={username}
        placeholder="Enter username"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />{
		error ? <Text style={styles.errorText} >{error}</Text>: null
	  }
    </View>
  );
};

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	label: {
		fontSize: 16,
		marginBottom: 8,
		color: '#333',
		fontWeight: '500'
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 8,
		paddingHorizontal: 10,
		backgroundColor: '#fff'
	},
	focused: {
		borderColor: '#007AFF',
		shadowColor: '#007AFF',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.2,
		shadowRadius: 5
	},
	error: {
		borderColor: '#FF3B30'
	},
	errorText: {
		color: '#FF3B30',
		fontSize: 12,
		marginTop: 4
	}
});

export default AdvancedInput;
