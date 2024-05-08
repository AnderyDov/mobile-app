import { Stack, SplashScreen } from 'expo-router';
import { Colors } from '../../shared';

SplashScreen.preventAutoHideAsync();

export default function AppRayout() {
	return (
		<Stack
			screenOptions={{
				statusBarColor: Colors.black,
				contentStyle: {
					backgroundColor: Colors.black,
					paddingTop: 30,
				},
				headerShown: false,
			}}
		>
			<Stack.Screen name="index" />
		</Stack>
	);
}
