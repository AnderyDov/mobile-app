import { View, StyleSheet, Text } from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

export function Chip({ text }: { text: string }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: Radius.r17,
		borderColor: Colors.border,
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
	text: {
		color: Colors.white,
		fontFamily: Fonts.regular,
		fontSize: Fonts.f14,
	},
});
