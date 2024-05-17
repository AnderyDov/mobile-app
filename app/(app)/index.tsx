import { FlatList } from 'react-native';
import { useAtomValue, useSetAtom } from 'jotai';
import { courseAtom, loadCourseAtom } from '../../entities/course/model/course.state';
import { useEffect } from 'react';
import { CourseCart } from '../../entities/course/ui/CourseCart/CourseCart';
import { StudentCourseDescription } from '../../entities/course/model/course.model';

export default function MyCourses() {
	const { courses } = useAtomValue(courseAtom);
	const loadCourses = useSetAtom(loadCourseAtom);

	useEffect(() => {
		loadCourses();
	}, []);

	console.log('COURSES', courses);

	function renderCourse({ item }: { item: StudentCourseDescription }) {
		return <CourseCart {...item} />;
	}

	return (
		<>
			{courses.length > 0 && (
				<FlatList
					data={courses}
					keyExtractor={(item) => item.id.toString()}
					renderItem={renderCourse}
				/>
			)}
		</>
	);

	// return (
	// 	<ScrollView>
	// 		<View style={styles.container}>
	// 			{courses.length > 0 &&
	// 				courses.map((el, i) => {
	// 					return (
	// 						<CourseCart
	// 							id={el.id}
	// 							title={el.shortTitle}
	// 							shortTitle={el.shortTitle}
	// 							image={el.image}
	// 							alias={el.alias}
	// 							length={el.length}
	// 							avgRating={el.avgRating}
	// 							price={el.price}
	// 							courseOnDirection={el.courseOnDirection}
	// 							progress={el.progress}
	// 							tariffs={el.tariffs}
	// 							key={i}
	// 						/>
	// 					);
	// 				})}
	// 		</View>
	// 	</ScrollView>
	// );
}
