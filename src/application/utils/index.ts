import { RootState } from '@application/store';

export interface ThunkApi<T = unknown, Error = any> {
	state: RootState;
	extra: T;
	rejectValue: Error;
}
