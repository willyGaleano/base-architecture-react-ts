import constants from '@infrastructure/constants';
import axios, { AxiosInstance } from 'axios';

class MainRestClient {
	public instance: AxiosInstance;
	constructor() {
		const client = axios.create({
			baseURL: constants.AUTH_API_URL,
		});
		this.instance = client;
	}
}

export default new MainRestClient();
