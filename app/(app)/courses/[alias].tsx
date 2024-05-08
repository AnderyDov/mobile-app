import { Text, View, StyleSheet } from 'react-native';
import { Colors, Gaps, CustomLink, Fonts } from '../../../shared';
import { useLocalSearchParams } from 'expo-router';

export default function CoursesPage() {
	const { alias } = useLocalSearchParams();
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{alias}</Text>
			<CustomLink href="/" text="На главный экран" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		gap: Gaps.g16,
		flexGrow: 1,
		backgroundColor: Colors.black,
		padding: 55,
	},
	text: {
		color: Colors.white,
		fontSize: Fonts.f18,
	},
});
