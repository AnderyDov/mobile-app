import axios, { AxiosError } from 'axios';
import { authAtom } from '../../auth/model/auth.state';
import { StudentCourseDescription } from './course.model';

import { atom } from 'jotai';
import { API } from '../api/api';

export const courseAtom = atom<CourseState>({
	isLoading: false,
	courses: [],
	error: null,
});

export const loadCourseAtom = atom(
	async (get) => {
		return get(courseAtom);
	},
	async (get, set) => {
		try {
			const { access_token } = await get(authAtom);
			set(courseAtom, {
				isLoading: true,
				courses: [],
				error: null,
			});
			const { data } = await axios.get<StudentCourseDescription[]>(API.my, {
				params: { studentCourse: 'dontMy' },
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			});
			set(courseAtom, {
				isLoading: false,
				courses: data,
				error: null,
			});
		} catch (err) {
			if (err instanceof AxiosError) {
				set(courseAtom, {
					isLoading: false,
					courses: [],
					error: err.response?.data.message,
				});
			}
		}
	},
);

export interface CourseState {
	courses: StudentCourseDescription[];
	isLoading: boolean;
	error: string | null;
}
