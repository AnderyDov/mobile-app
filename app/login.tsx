import { View, Image, StyleSheet, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { Input, Button, ErrorNotification, Colors, Gaps, CustomLink } from '../shared';
import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { loginAtom } from '../entities/auth/model/auth.state';
import { router } from 'expo-router';
import { useScreenOrientation } from '../shared/hooks';
import { Orientation } from 'expo-screen-orientation';

export default function Login() {
	const [localError, setLocalError] = useState<string | undefined>();
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [{ access_token, isLoading, error }, login] = useAtom(loginAtom);
	const orientation = useScreenOrientation();

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
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.content}
			>
				<Image
					style={styles.logo}
					source={require('../assets/images/logo.png')}
					resizeMode="contain"
				/>
				<View style={styles.form}>
					<View
						style={{
							...styles.inputs,
							flexDirection: orientation === Orientation.PORTRAIT_UP ? 'column' : 'row',
						}}
					>
						<Input
							style={{
								width:
									orientation === Orientation.PORTRAIT_UP
										? 'auto'
										: Dimensions.get('window').width / 2 - 16 - 48,
							}}
							placeholder="email"
							isPassword={false}
							onChangeText={setEmail}
						/>
						<Input
							style={{
								width:
									orientation === Orientation.PORTRAIT_UP
										? 'auto'
										: Dimensions.get('window').width / 2 - 16 - 48,
							}}
							placeholder="password"
							isPassword={true}
							onChangeText={setPassword}
						/>
					</View>
					<Button text="Войти" isLoading={isLoading} onPress={submit} />
				</View>
				<CustomLink href={'/restore'} text="Восстановить пароль" />
				<CustomLink href={'/courses/typescript'} text="TypeScript" />
				<CustomLink href="/" text="На главный экран" />
			</KeyboardAvoidingView>
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

	content: {
		gap: Gaps.g50,
		alignItems: 'center',
	},
	logo: {
		width: Platform.select({ ios: 300, android: 220 }),
	},
	form: {
		gap: Gaps.g16,
		alignSelf: 'stretch',
	},
	inputs: {
		gap: Gaps.g16,
	},
});
