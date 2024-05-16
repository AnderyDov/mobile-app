import { View, StyleSheet, Image, Text } from 'react-native';
import { StudentCourseDescription } from '../../model/course.model';
import { Button, Colors, Fonts, Radius } from '../../../../shared';
import { Chip } from '../../../../shared/Chip/Chip';

export function CourseCart({
	id,
	shortTitle,
	image,
	title,
	alias,
	length,
	avgRating,
	price,
	courseOnDirection,
	progress,
	tariffs,
	...props
}: StudentCourseDescription) {
	return (
		<View style={styles.cart} {...props}>
			<Image source={{ uri: image }} style={styles.image} />
			<View style={styles.head}>
				<Text style={styles.title}>{title}</Text>
				<View style={styles.chips}>
					{courseOnDirection.length > 0 &&
						courseOnDirection.map((el, i) => {
							return <Chip key={i} text={el?.direction?.name} />;
						})}
				</View>
				<Text style={styles.tariff}>{title}</Text>
			</View>
			<View style={styles.footer}>
				<Button text="Купить курс" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cart: {
		width: 327,
		// height: 428,
		backgroundColor: Colors.black_light,
		borderRadius: Radius.r10,
	},
	image: {
		height: 168,
		borderRadius: Radius.r10,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
	},
	head: {
		paddingHorizontal: 24,
		paddingVertical: 18,
		gap: 12,
	},
	title: {
		fontFamily: Fonts.semibold,
		fontSize: Fonts.f20,
		color: Colors.white,
		marginBottom: 12,
	},
	chips: {
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
	},
	tariff: {
		fontFamily: Fonts.regular,
		fontSize: Fonts.f18,
	},
	footer: {
		paddingHorizontal: 24,
		paddingVertical: 20,
		backgroundColor: Colors.violet_dark,
		borderBottomLeftRadius: Radius.r10,
		borderBottomRightRadius: Radius.r10,
	},
});
