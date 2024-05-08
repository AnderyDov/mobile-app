import { StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';
import { Colors, Fonts } from '../tokens';
import { LinkProps } from 'expo-router/build/link/Link';

export function CustomLink({ text, ...props }: LinkProps & { text: string }) {
	return (
		<Link style={styles.link} {...props}>
			<Text>{text}</Text>
		</Link>
	);
}

const styles = StyleSheet.create({
	link: {
		fontSize: Fonts.f16,
		color: Colors.links,
		fontFamily: Fonts.regular,
	},
});
