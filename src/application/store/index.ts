import { persistedReducer } from '@application/persist';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: true,
			serializableCheck: false,
			immutableCheck: false,
		}),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
