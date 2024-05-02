import { Pressable, PressableProps, Text, StyleSheet, View } from 'react-native';
import { Colors, Radius, Fonts } from '../tokens';

export function Button({ text, ...props }: PressableProps & { text: string }) {
	return (
		<Pressable {...props}>
			<View style={styles.button}>
				<Text style={styles.text}>{text}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: Radius.r10,
		height: 58,
	},
	text: {
		color: Colors.white,
		fontSize: Fonts.f18,
	},
});
