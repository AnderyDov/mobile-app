export interface AuthState {
	access_token: string | null;
	isLoading: boolean;
	error: string | null;
}

export interface AuthResponse {
	access_token: string;
}

export interface LoginRequest {
	email: string;
	password: string;
}
