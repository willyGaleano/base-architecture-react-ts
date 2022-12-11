import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@application': path.resolve(__dirname, './src/application'),
			'@infrastructure': path.resolve(__dirname, './src/infrastructure'),
			'@presentation': path.resolve(__dirname, './src/presentation'),
		},
	},
});
