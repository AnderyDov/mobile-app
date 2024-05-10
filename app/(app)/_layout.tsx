import { Redirect, Stack } from 'expo-router';
import { Colors } from '../../shared';
import { useAtomValue } from 'jotai';
import { authAtom } from '../../entities/auth/model/auth.state';

export default function AppRayout() {
	const { access_token } = useAtomValue(authAtom);

	if (!access_token) {
		return <Redirect href={'/login'} />;
	}

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
