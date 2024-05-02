import { Text, View, Image, StyleSheet } from 'react-native';
import { Input, Button } from './shared';
import { Colors, Gaps } from './shared';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image style={styles.logo} source={require('./assets/logo.png')} resizeMode="contain" />
				<View style={styles.form}>
					<Input placeholder="email" isPassword={false} />
					<Input placeholder="password" isPassword={true} />
					<Button text="Войти" />
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
		backgroundColor: Colors.violet_dark,
		padding: 55,
	},

	content: {
		gap: Gaps.g50,
		alignItems: 'center',
	},
	logo: {
		width: 220,
	},
	form: {
		gap: Gaps.g16,
		alignSelf: 'stretch',
	},
	input: {
		backgroundColor: Colors.grey_stroke,
	},

	link: {
		color: Colors.white,
	},
});
