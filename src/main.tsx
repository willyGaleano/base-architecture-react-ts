import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react'
import App from './App';
import {store, persistor } from '@application/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
