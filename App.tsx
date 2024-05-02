import { Text, View, Image, StyleSheet, Alert, Platform, ToastAndroid } from 'react-native';
import { Input, Button } from './shared';
import { Colors, Gaps } from './shared';

export default function App() {
	function alert() {
		Alert.alert('Ошибка', 'Неверный логин или пароль', [
			{
				text: 'Хорошо',
				onPress: () => {},
				style: 'cancel',
			},
		]);
		if (Platform.OS == 'android') {
			ToastAndroid.showWithGravity('Неверный пароль', ToastAndroid.SHORT, ToastAndroid.CENTER);
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image style={styles.logo} source={require('./assets/logo.png')} resizeMode="contain" />
				<View style={styles.form}>
					<Input placeholder="email" isPassword={false} />
					<Input placeholder="password" isPassword={true} />
					<Button text="Войти" onPress={alert} />
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
