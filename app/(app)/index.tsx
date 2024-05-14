import { Text, View, StyleSheet } from 'react-native';
import { Colors, Gaps, Fonts } from '../../shared';
import { useAtomValue, useSetAtom } from 'jotai';
import { courseAtom, loadCourseAtom } from '../../entities/course/model/course.state';
import { useEffect } from 'react';

export default function MyCourses() {
	const { isLoading, error, courses } = useAtomValue(courseAtom);
	const loadCourses = useSetAtom(loadCourseAtom);

	useEffect(() => {
		loadCourses();
	}, []);

	console.log('COURSES', courses);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>My Courses</Text>
			{courses.length > 0 &&
				courses.map((el, i) => {
					return (
						<Text style={styles.text} key={i}>
							{el.title}
						</Text>
					);
				})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		gap: Gaps.g16,
		flexGrow: 1,
		backgroundColor: Colors.black,
		padding: 55,
	},
	text: {
		color: Colors.white,
		fontSize: Fonts.f18,
	},
});
