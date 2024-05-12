import { StyleSheet, Image } from 'react-native';
import { Gaps, Colors, Fonts } from '../../../../shared';

export function Avatar({ image }: { image: string | null }) {
	return image ? (
		<Image style={styles.image} source={{ uri: image }} />
	) : (
		<Image style={styles.image} source={require('../../../../assets/images/avatar.png')} />
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		gap: Gaps.g8,
		marginTop: 30,
		marginBottom: 40,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	name: {
		fontSize: Fonts.f16,
		fontFamily: Fonts.regular,
		color: Colors.white,
	},
});
