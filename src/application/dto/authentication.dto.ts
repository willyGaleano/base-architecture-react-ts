export enum AuthenticationStatus {
	empty = 'empty',
	authenticated = 'authenticated',
	authenticating = 'authenticating',
}

export type AuthenticationUser = {
	email: string;
	token: string;
};

export type AuthenticationState = {
	status:
		| AuthenticationStatus.authenticated
		| AuthenticationStatus.authenticating
		| AuthenticationStatus.empty;
	user: AuthenticationUser;
};

export type AuthenticationPayload = {
	email: string;
	password: string;
};

export type AuthenticationResponse = {
	token: string;
};
