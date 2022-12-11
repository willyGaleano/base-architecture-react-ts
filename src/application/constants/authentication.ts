import { AuthenticationState, AuthenticationStatus } from '../dto';

export const AUTHENTICATION_PATH = 'authentication';

export const AUTHENTICATION_INITIAL_STATE: AuthenticationState = {
	status: AuthenticationStatus.empty,
	user: {
		email: '',
		token: '',
	},
};
