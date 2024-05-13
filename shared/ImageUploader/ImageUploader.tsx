import {
	useMediaLibraryPermissions,
	launchImageLibraryAsync,
	MediaTypeOptions,
	PermissionStatus,
} from 'expo-image-picker';
import { Pressable, StyleSheet, Text } from 'react-native';
import UploadIcon from '../../assets/icons/upload';
import { View } from 'react-native';
import { Colors, Fonts, Gaps, Radius } from '../tokens';
import FormData from 'form-data';
import axios, { AxiosError } from 'axios';
import { FILE_API } from '../api';
import { UoloadResponse } from './imageUploaderInterface';

interface ImagesUploaderProps {
	onUpload: (uri: string) => void;
	onError: (error: string) => void;
}

export function ImageUploader({ onUpload, onError }: ImagesUploaderProps) {
	const [libraryPermissions, requestlibraryPermissions] = useMediaLibraryPermissions();

	async function upload() {
		const permissionGranted = await varifyMediaPermissions();
		if (!permissionGranted) {
			onError('Недостаточно прав');
			return;
		}
		const asset = await pickImage();
		if (!asset) {
			onError('Не выбранно изображение');
			return;
		}
		const uplodaedUrl = await uploadToServer(asset.uri, asset.fileName ?? 'photo.jpeg');
		if (!uplodaedUrl) {
			onError('Не удалось загрузить изображения');
			return;
		}
		onUpload(uplodaedUrl);
	}

	async function varifyMediaPermissions() {
		if (libraryPermissions?.status === PermissionStatus.UNDETERMINED) {
			const result = await requestlibraryPermissions();
			return result.granted;
		}
		if (libraryPermissions?.status === PermissionStatus.DENIED) {
			alert('Не достаточно прав для доступа к медиа');
			return false;
		}
		return true;
	}

	async function pickImage() {
		const result = await launchImageLibraryAsync({
			mediaTypes: MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5,
		});
		if (!result.assets) {
			return null;
		}
		return result.assets[0];
	}

	async function uploadToServer(uri: string, name: string) {
		const formData = new FormData();

		formData.append('files', {
			uri,
			name,
			type: 'image/jpeg',
		});

		try {
			const { data } = await axios.post<UoloadResponse>(FILE_API.uploadImage, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			return data.urls.original;
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log(error);
				return null;
			}
			return null;
		}
	}

	return (
		<Pressable onPress={upload}>
			<View style={styles.container}>
				<UploadIcon style={styles.icon} />
				<Text style={styles.text}>Загрузить изображенеи</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: Gaps.g8,
		backgroundColor: Colors.violet_dark,
		borderRadius: Radius.r10,
		paddingHorizontal: 20,
		paddingVertical: 17,
	},
	icon: {},
	text: {
		fontSize: Fonts.f14,
		fontFamily: Fonts.regular,
		color: Colors.white,
	},
});
