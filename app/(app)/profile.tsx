import { View, Image, StyleSheet } from 'react-native';
import { Gaps } from '../../shared';
import { useState } from 'react';
import { ImageUploader } from '../../shared/ImageUploader/ImageUploader';

export default function Profile() {
	const [image, setImage] = useState<string | null>(null);

	return (
		<View style={styles.container}>
			{image ? (
				<Image style={styles.image} source={{ uri: image }} />
			) : (
				<Image style={styles.image} source={require('../../assets/images/avatar.png')} />
			)}
			<ImageUploader onupload={setImage} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: Gaps.g20,
		alignItems: 'center',
		alignSelf: 'center',
		paddingVertical: 10,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
});
