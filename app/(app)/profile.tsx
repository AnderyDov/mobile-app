import { View, StyleSheet } from 'react-native';
import { Gaps } from '../../shared';
import { useState } from 'react';
import { ImageUploader } from '../../shared/ImageUploader/ImageUploader';
import { Avatar } from '../../entities/user/ui/Avatar/Avatar';

export default function Profile() {
	const [image, setImage] = useState<string | null>(null);

	return (
		<View style={styles.container}>
			<Avatar image={image} />
			<ImageUploader onUpload={setImage} onError={console.log} />
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
});
