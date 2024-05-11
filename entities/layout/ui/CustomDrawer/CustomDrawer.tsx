import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors, CustomLink } from '../../../../shared';
import { CloseDrawer } from '../../../../features/layout/ui/CloseDrawer/CloseDrawer';
import { useSetAtom, useAtom } from 'jotai';
import { logoutAtom } from '../../../auth/model/auth.state';
import { loadProfileAtom } from '../../../user/model/user.state';
import { useEffect } from 'react';

export function CustomDrawer(props: DrawerContentComponentProps) {
	const logout = useSetAtom(logoutAtom);
	const [profile, loadProfile] = useAtom(loadProfileAtom);

	console.log(profile);

	useEffect(() => {
		loadProfile();
	}, []);

	return (
		<DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
			<View style={styles.content}>
				<CloseDrawer {...props.navigation} />
				<Text>{profile.profile?.name}</Text>
			</View>
			<View style={styles.footer}>
				<CustomLink text="Выход" href="/login" onPress={() => logout()} />
				<Image
					style={styles.logo}
					source={require('../../../../assets/logo.png')}
					resizeMode="contain"
				/>
			</View>
		</DrawerContentScrollView>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		flexGrow: 1,
		backgroundColor: Colors.black,
	},
	logo: {
		width: 160,
	},
	content: {
		flexGrow: 1,
	},
	footer: {
		alignItems: 'center',
		justifyContent: 'center',
		gap: 50,
		marginBottom: 40,
	},
});
