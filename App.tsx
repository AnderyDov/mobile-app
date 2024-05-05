import { Text, View, Image, StyleSheet } from 'react-native';
import { Input, Button, ErrorNotification, Colors, Gaps } from './shared';
import { useState, useMemo } from 'react';

export default function App() {
	const [error, setError] = useState<string | undefined>();

	function alert() {
		setError('Неверный логин лил пароль');

		setTimeout(() => {
			setError(undefined);
		}, 4000);
	}

	return (
		<View style={styles.container}>
			<ErrorNotification error={error} />
			<View style={styles.content}>
				<Image style={styles.logo} source={require('./assets/logo.png')} resizeMode="contain" />
				<View style={styles.form}>
					<Input placeholder="email" isPassword={false} />
					<Input placeholder="password" isPassword={true} />
					{useMemo(
						() => (
							<Button text="Войти" onPress={alert} />
						),
						[],
					)}
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
	link: {
		color: Colors.white,
	},
});
