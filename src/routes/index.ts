import type { Request } from '@sveltejs/kit';
import { config } from 'dotenv';
config();

export async function post(request: Request<any, FormData>) {
	const name = request.body.get('name');
	const email = request.body.get('email');
	const message = request.body.get('message');

	console.log(import.meta.env.VITE_test)

	return {
		status: 302,
		headers: {
			location: '/'
		}
	};
}
