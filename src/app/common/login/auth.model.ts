export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface LoginResponse {
	email: string;
	token: string;
}
