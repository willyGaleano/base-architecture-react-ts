import { AUTHENTICATION_PATH } from '@application/constants';
import rootReducer from '@application/reducer';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
	key: 'root',
	timeout: 10000, //workaround for debug mode
	storage: storage,
	//blacklist: [AUTHENTICATION_PATH],
	whitelist: ['token'],
};

type RootStateTmp = ReturnType<typeof rootReducer>;

export const persistedReducer = persistReducer<RootStateTmp>(
	persistConfig,
	rootReducer
);
