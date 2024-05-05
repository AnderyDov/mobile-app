import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { Colors, Radius, Fonts } from '../tokens';
import { EyeOpen, EyeClosed } from '../../assets/icons';
import { useState } from 'react';

export function Input({ isPassword, ...props }: TextInputProps & { isPassword: boolean }) {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);

	return (
		<View>
			<TextInput
				style={styles.input}
				secureTextEntry={isPassword && !isPasswordVisible}
				{...props}
				placeholderTextColor={Colors.white}
				{...props}
			/>
			{isPassword && (
				<Pressable
					onPress={() => setIsPasswordVisible((state) => !state)}
					style={{ ...styles.eyeIcon }}
				>
					{isPasswordVisible ? <EyeOpen /> : <EyeClosed />}
				</Pressable>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 58,
		backgroundColor: Colors.grey_stroke,
		paddingHorizontal: 24,
		borderRadius: Radius.r10,
		fontSize: Fonts.f16,
		position: 'relative',
		color: Colors.grey_light,
	},
	eyeIcon: {
		position: 'absolute',
		right: 0,
		paddingVertical: 18,
		paddingHorizontal: 20,
	},
});
