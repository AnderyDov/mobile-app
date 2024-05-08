import { Text, View, Image, StyleSheet } from 'react-native';
import { Colors, Fonts, Gaps, CustomLink } from '../shared';

export default function UnmatchedCustom() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={require('../assets/unmatched.png')}
				resizeMode="contain"
			/>
			<Text style={styles.text}>
				Ооо... что-то пошло не так. Попробуйте вернуться на главный экран приложения
			</Text>
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
		gap: Gaps.g50,
	},
	image: {
		width: 204,
		height: 282,
	},
	text: {
		color: Colors.white,
		fontSize: Fonts.f16,
		fontFamily: 'FiraSans',
		textAlign: 'center',
	},
});
