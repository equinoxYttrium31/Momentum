import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: '0.0.0.0', // Ensures the app is accessible externally
		allowedHosts: [
			'momentum-tvck.onrender.com', // Add your Render domain here
		],
	},
});
