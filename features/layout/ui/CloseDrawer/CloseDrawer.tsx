import { Pressable, StyleSheet, View } from 'react-native';
import { CloseIcon } from '../../../../assets/icons';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CloseDrawer(navigation: DrawerNavigationHelpers) {
	return (
		<Pressable onPress={() => navigation.closeDrawer()}>
			<View style={styles.button}>
				<CloseIcon />
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: 10,
		right: 20,
	},
});
