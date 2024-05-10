import { Redirect } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../shared';
import { useAtomValue } from 'jotai';
import { authAtom } from '../../entities/auth/model/auth.state';
import { MenuButton } from '../../features/layout/ui/menuButton/menu';

export default function AppRayout() {
	const { access_token } = useAtomValue(authAtom);

	if (!access_token) {
		return <Redirect href={'/login'} />;
	}

	return (
		<GestureHandlerRootView style={styles.drawer}>
			<Drawer
				screenOptions={({ navigation }) => ({
					headerStyle: {
						backgroundColor: Colors.black_light,
						shadowColor: Colors.black_light,
					},
					headerLeft: () => {
						return <MenuButton navigation={navigation} />;
					},

					headerTitleStyle: {
						color: Colors.white,
						fontFamily: Fonts.regular,
						fontSize: Fonts.f20,
					},
					sceneContainerStyle: {
						backgroundColor: Colors.black_light,
					},
				})}
			>
				<Drawer.Screen
					name="index"
					options={{
						drawerLabel: 'Home',
						title: 'Мои курсы',
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	drawer: {
		flexGrow: 1,
	},
});
