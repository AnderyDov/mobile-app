import { View, StyleSheet } from 'react-native';
import { Button, Gaps } from '../../shared';
import { useEffect, useState } from 'react';
import { ImageUploader } from '../../shared/ImageUploader/ImageUploader';
import { Avatar } from '../../entities/user/ui/Avatar/Avatar';
import { useAtom } from 'jotai';
import { updateProfileAtom } from '../../entities/user/model/user.state';
import * as Sharing from 'expo-sharing';

export default function Profile() {
	const [image, setImage] = useState<string | null>(null);
	const [profile, updateProfile] = useAtom(updateProfileAtom);

	function submitProfile() {
		if (!image) {
			return;
		}
		updateProfile({ photo: image });
	}

	async function sharePrifile() {
		const isSharingAvailable = await Sharing.isAvailableAsync();
		if (!isSharingAvailable) {
			return;
		}
		await Sharing.shareAsync('https://purpleschool.ru', {
			dialogTitle: 'Поделиться профилем',
		});
	}

	useEffect(() => {
		if (profile && profile.profile?.photo) {
			setImage(profile.profile?.photo);
		}
	});

	return (
		<View style={styles.wrap}>
			<View style={styles.container}>
				<Avatar image={image} />
				<ImageUploader onUpload={setImage} onError={console.log} />
			</View>
			<Button text="Сохранить" onPress={submitProfile} />
			<Button text="Поделиться" onPress={sharePrifile} />
		</View>
	);
}

const styles = StyleSheet.create({
	wrap: {
		gap: Gaps.g16,
	},
	container: {
		flexDirection: 'row',
		gap: Gaps.g20,
		alignItems: 'center',
		alignSelf: 'center',
		paddingVertical: 10,
	},
});
