import { View, Image, StyleSheet } from 'react-native';
import { Input, Button, ErrorNotification, Colors, Gaps, CustomLink } from '../shared';
import { useState, useMemo, useEffect } from 'react';
import { useAtom } from 'jotai';
import { loginAtom } from '../entities/auth/model/auth.state';
import { router } from 'expo-router';

export default function Login() {
	const [localError, setLocalError] = useState<string | undefined>();
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [{ access_token, error }, login] = useAtom(loginAtom);

	const button = useMemo(() => <Button text="Войти" onPress={submit} />, [email, password]);

	function submit() {
		if (!email) {
			setLocalError('Не введён email');
			return;
		}
		if (!password) {
			setLocalError('Не введён пароль');
			return;
		}
		login({ email, password });
	}
	useEffect(() => {
		if (access_token) {
			router.replace('/(app)');
		}
	}, [access_token, error]);

	useEffect(() => {
		if (error) {
			setLocalError(error);
		}
	}, [error]);

	return (
		<View style={styles.container}>
			<ErrorNotification error={localError} />
			<View style={styles.content}>
				<Image style={styles.logo} source={require('../assets/logo.png')} resizeMode="contain" />
				<View style={styles.form}>
					<Input placeholder="email" isPassword={false} onChangeText={setEmail} />
					<Input placeholder="password" isPassword={true} onChangeText={setPassword} />
					{button}
				</View>
				<CustomLink href={'/restore'} text="Восстановить пароль" />
				<CustomLink href={'/courses/typescript'} text="TypeScript" />
				<CustomLink href="/" text="На главный экран" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flexGrow: 1,
		backgroundColor: Colors.black,
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
});

// {useMemo(
// 	() => (
// 		<Button text="Войти" onPress={submit} />
// 	),
// 	[],
// )}
