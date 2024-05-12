import { Text, View, StyleSheet } from 'react-native';
import { Colors, Gaps, Fonts } from '../../shared';

export default function MyCourses() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>My Courses</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
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
