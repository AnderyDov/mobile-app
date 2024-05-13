import { View, StyleSheet } from 'react-native';
import { Button, Gaps } from '../../shared';
import { useEffect, useState } from 'react';
import { ImageUploader } from '../../shared/ImageUploader/ImageUploader';
import { Avatar } from '../../entities/user/ui/Avatar/Avatar';
import { useAtom } from 'jotai';
import { updateProfileAtom } from '../../entities/user/model/user.state';

export default function Profile() {
	const [image, setImage] = useState<string | null>(null);
	const [profile, updateProfile] = useAtom(updateProfileAtom);

	function submitProfile() {
		if (!image) {
			return;
		}
		updateProfile({ photo: image });
	}

	useEffect(() => {
		if (profile && profile.profile?.photo) {
			setImage(profile.profile?.photo);
		}
	});

	return (
		<View>
			<View style={styles.container}>
				<Avatar image={image} />
				<ImageUploader onUpload={setImage} onError={console.log} />
			</View>
			<Button text="Сохранить" onPress={submitProfile} />
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
