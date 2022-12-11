import { Navbar } from '@presentation/components/Navbar/Navbar';
import { Router } from '@presentation/router/Router';
import React from 'react';
import { useAppDispatch, useAppSelector } from './application/hooks';
import { authenticateThunk } from './application/slices/auth.slice';

const App: React.FC = () => {
	const {user} = useAppSelector((state) => state.authentication);
	const disptach = useAppDispatch();

	const handleLogin = async () => {
		const response = await disptach(authenticateThunk({
			email: 'eve.holt@reqres.in',
			password: 'cityslicka',
		}))
	};
	
	return (
		<>
			<Navbar/>
			<Router/>
		</>
	);
};

export default App;
