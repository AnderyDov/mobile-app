import { Text, View, StyleSheet } from 'react-native';
import { Colors, Gaps, CustomLink, Fonts, Button } from '../../shared';
import { useSetAtom } from 'jotai';
import { logoutAtom } from '../../entities/auth/model/auth.state';

export default function MyCourses() {
	const logout = useSetAtom(logoutAtom);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>My Courses</Text>
			<CustomLink href="/login" text="На экран login" />
			<Button text="Выход" onPress={logout} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		gap: Gaps.g16,
		flexGrow: 1,
		backgroundColor: Colors.black,
		padding: 55,
	},
	text: {
		color: Colors.white,
		fontSize: Fonts.f18,
	},
});
