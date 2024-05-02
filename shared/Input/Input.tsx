import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export function Input(props: TextInputProps) {
	return <TextInput style={styles.input} {...props} placeholderTextColor={'#FAFAFA'} />;
}

const styles = StyleSheet.create({
	input: {
		height: 58,
		backgroundColor: '#4D5064',
		paddingHorizontal: 24,
		borderRadius: 10,
		fontSize: 16,
	},
});
