import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Colors, Radius } from '../tokens';

export function Input(props: TextInputProps) {
	return <TextInput style={styles.input} {...props} placeholderTextColor={Colors.white} />;
}

const styles = StyleSheet.create({
	input: {
		height: 58,
		backgroundColor: Colors.grey_stroke,
		paddingHorizontal: 24,
		borderRadius: Radius.r10,
		fontSize: 16,
	},
});
