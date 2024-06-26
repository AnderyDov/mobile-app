import { Text, View, StyleSheet } from 'react-native';
import { Colors, Fonts, CustomLink } from '../shared';

export default function Restore() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Restore</Text>
			<CustomLink href="/" text="На главный экран" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flexGrow: 1,
		backgroundColor: Colors.black,
		padding: 55,
	},

	text: {
		color: Colors.white,
		fontSize: Fonts.f18,
		fontFamily: Fonts.regular,
	},
});
