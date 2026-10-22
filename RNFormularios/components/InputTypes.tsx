import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const InputTypes = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState('')
	

	return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPhone}
        value={phone}
        placeholder="Phone"
		keyboardType='phone-pad'
        autoComplete='tel'
      />
    </View>
  );
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		gap: 10
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

export default InputTypes;
