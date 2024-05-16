import { View, StyleSheet } from 'react-native';
import { Colors, Gaps } from '../../shared';
import { useAtomValue, useSetAtom } from 'jotai';
import { courseAtom, loadCourseAtom } from '../../entities/course/model/course.state';
import { useEffect } from 'react';
import { CourseCart } from '../../entities/course/ui/CourseCart/CourseCart';

export default function MyCourses() {
	const { courses } = useAtomValue(courseAtom);
	const loadCourses = useSetAtom(loadCourseAtom);

	useEffect(() => {
		loadCourses();
	}, []);

	console.log('COURSES', courses);

	return (
		<View style={styles.container}>
			{courses.length > 0 &&
				courses.map((el, i) => {
					return (
						<CourseCart
							id={el.id}
							title={el.title}
							shortTitle={el.shortTitle}
							image={el.image}
							alias={el.alias}
							length={el.length}
							avgRating={el.avgRating}
							price={el.price}
							courseOnDirection={el.courseOnDirection}
							progress={el.progress}
							tariffs={el.tariffs}
							key={i}
						/>
					);
				})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		gap: Gaps.g20,
		flexGrow: 1,
		backgroundColor: Colors.black,
		padding: 20,
	},
});
