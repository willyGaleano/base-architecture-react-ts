import authClient from './auth.client';
import { AxiosResponse } from 'axios';
import {
	AuthenticationPayload,
	AuthenticationResponse,
} from '@application/dto';

enum Paths {
	authenticate = '/login',
}

class AuthenticationRequests {
	public authenticate(
		payload: AuthenticationPayload
	): Promise<AxiosResponse<AuthenticationResponse, {}>> {
		return authClient.instance.post(Paths.authenticate, payload);
	}
}

export default new AuthenticationRequests();
