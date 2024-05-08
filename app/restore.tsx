import { Text, View, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../shared';
import { Link } from 'expo-router';

export default function Restore() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Restore</Text>
			<Link href={'/'}>
				<Text style={styles.link}>HOME</Text>
			</Link>
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
		fontFamily: 'FiraSans',
	},
	link: {
		color: Colors.white,
		fontFamily: 'FiraSans',
	},
});
