import axios, { AxiosError } from 'axios';
import { authAtom } from '../../auth/model/auth.state';
import { User } from './user.model';

import { atom } from 'jotai';
import { API } from '../api/api';

export const profileAtom = atom<UserState>({
	isLoading: false,
	profile: null,
	error: null,
});

export const loadProfileAtom = atom(
	async (get) => {
		return get(profileAtom);
	},
	async (get, set) => {
		const { access_token } = await get(authAtom);
		set(profileAtom, {
			isLoading: true,
			profile: null,
			error: null,
		});
		try {
			const { data } = await axios.get<UserState>(API.profile, {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			});
			console.log('PROFILE', data);
			set(profileAtom, {
				isLoading: false,
				profile: data.profile,
				error: null,
			});
		} catch (err) {
			console.log('ERROR');
			if (err instanceof AxiosError) {
				set(profileAtom, {
					isLoading: false,
					profile: null,
					error: err.response?.data.message,
				});
			}
		}
	},
);

export interface UserState {
	profile: User | null;
	isLoading: boolean;
	error: string | null;
}
