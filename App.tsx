import { Button, Text, View, Image, StyleSheet } from 'react-native';
import { Input } from './shared';
import palette from './palette';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image style={styles.logo} source={require('./assets/logo.png')} resizeMode="contain" />
				<View style={styles.form}>
					<Input />
					<Input />
					<Button title="Войти" />
				</View>
				<Text style={styles.link}>Восстановить пароль</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flexGrow: 1,
		backgroundColor: '#000000',
		padding: 55,
	},

	content: {
		gap: 50,
		alignItems: 'center',
	},
	logo: {
		width: 220,
	},
	form: {
		gap: 16,
		alignSelf: 'stretch',
	},
	input: {
		backgroundColor: palette.grey_stroke,
	},

	link: {
		color: palette.white,
	},
});
