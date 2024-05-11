import { Pressable, PressableProps, StyleSheet, View } from 'react-native';
import { Colors } from '../../../../shared/tokens';
import { MenuIcon } from '../../../../assets/icons';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function MenuButton({ navigation, ...props }: PressableProps & { navigation: any }) {
	const [cliked, setCliked] = useState(false);

	return (
		<Pressable
			{...props}
			onPressIn={() => setCliked(true)}
			onPressOut={() => setCliked(false)}
			onPress={() => navigation.toggleDrawer()}
		>
			<View
				style={{
					...styles.button,
					backgroundColor: cliked ? Colors.violet_dark : Colors.black_light,
				}}
			>
				<MenuIcon />
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		paddingHorizontal: 20,
	},
});
