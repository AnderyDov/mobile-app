import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, StyleSheet, Image } from 'react-native';
import { Colors, CustomLink } from '../../../../shared';
import { CloseDrawer } from '../../../../features/layout/ui/CloseDrawer/CloseDrawer';
import { useSetAtom, useAtom } from 'jotai';
import { logoutAtom } from '../../../../entities/auth/model/auth.state';
import { loadProfileAtom } from '../../../../entities/user/model/user.state';
import { useEffect } from 'react';
import { UserMenu } from '../../../user/ui/UserMenu/UserMenu';
import { MenuItem } from '../../../../entities/layout/ui/MenuItem/MenuItem';
import CoursesIcon from '../../../../assets/menu/courses';
import ProfileIcon from '../../../../assets/menu/profile';

const MENU = [
	{
		text: 'Курсы',
		path: 'index',
		icon: <CoursesIcon />,
	},
	{
		text: 'Профиль',
		path: 'profile',
		icon: <ProfileIcon />,
	},
];

export function CustomDrawer(props: DrawerContentComponentProps) {
	const logout = useSetAtom(logoutAtom);
	const [profile, loadProfile] = useAtom(loadProfileAtom);

	useEffect(() => {
		loadProfile();
	}, []);

	return (
		<DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
			<View style={styles.content}>
				<CloseDrawer {...props.navigation} />
				<UserMenu user={profile.profile} />
				{MENU.map((menu) => {
					return <MenuItem key={menu.path} {...menu} drawer={props} />;
				})}
			</View>
			<View style={styles.footer}>
				<CustomLink text="Выход" href="/login" onPress={() => logout()} />
				<Image
					style={styles.logo}
					source={require('../../../../assets/images/logo.png')}
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
