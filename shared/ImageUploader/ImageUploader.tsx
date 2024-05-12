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

interface ImagesUploaderProps {
	onupload: (uri: string) => void;
}

export function ImageUploader({ onupload }: ImagesUploaderProps) {
	const [libraryPermissions, requestlibraryPermissions] = useMediaLibraryPermissions();

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

	async function pickimage() {
		const permissionGranted = await varifyMediaPermissions();
		if (!permissionGranted) {
			return;
		}
		const result = await launchImageLibraryAsync({
			mediaTypes: MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5,
		});
		if (!result.assets) {
			return;
		}
		console.log(result);
		onupload(result.assets[0].uri);
	}
	return (
		<Pressable onPress={pickimage}>
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
