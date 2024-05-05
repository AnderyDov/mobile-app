import { Stack } from 'expo-router';
import { Colors } from '../shared';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function RootRayout() {
	const insets = useSafeAreaInsets();
	return (
		<SafeAreaProvider>
			<StatusBar style="auto" />
			<Stack
				screenOptions={{
					statusBarColor: Colors.violet_dark,
					contentStyle: {
						backgroundColor: Colors.violet_dark,
						paddingTop: insets.top,
					},
					headerShown: false,
				}}
			>
				<Stack.Screen name="index" />
				<Stack.Screen
					name="restore"
					options={{
						title: 'восстановить пароль',
						presentation: 'modal',
					}}
				/>
			</Stack>
		</SafeAreaProvider>
	);
}
