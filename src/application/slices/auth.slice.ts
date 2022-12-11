import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	AuthenticationPayload,
	AuthenticationResponse,
	AuthenticationStatus,
	AuthenticationUser,
} from '@application/dto';

import { ThunkApi } from '@application/utils';
import {
	AUTHENTICATION_INITIAL_STATE,
	AUTHENTICATION_PATH,
} from '@application/constants';
import authenticationRequests from '@infrastructure/api/auth/authentication.requests';

interface AuthenticationThunkResponse {
	user: AuthenticationUser;
	message: string;
}

export const authenticateThunk = createAsyncThunk<
	AuthenticationThunkResponse,
	AuthenticationPayload,
	ThunkApi
>(`${AUTHENTICATION_PATH}/authenticate`, async (arg, thunkAPI) => {
	try {
		const response = await authenticationRequests.authenticate(arg);
		const data: AuthenticationResponse = response.data;
		const token = data.token;
		if (token) {
			const user: AuthenticationUser = {
				email: arg.email,
				token,
			};

			return {
				user,
				message: 'OK',
			};
		} else {
			throw new Error();
		}
	} catch (_) {
		return thunkAPI.rejectWithValue({
			user: {
				email: '',
				token: '',
			},
			message: 'authentication.error.login',
		});
	}
});

const authSlice = createSlice({
	name: 'auth',
	initialState: AUTHENTICATION_INITIAL_STATE,
	reducers: {
		setAccessToken: (state, action: PayloadAction<string>) => {
			state.user.token = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(authenticateThunk.fulfilled, (state, action) => {
			state.status = AuthenticationStatus.authenticated;
			state.user = action.payload.user;
		});
		builder.addCase(authenticateThunk.rejected, (state, action) => {
			state.status = AuthenticationStatus.authenticating;
			state.user = action.payload.user;
		});
	},
});

export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;
