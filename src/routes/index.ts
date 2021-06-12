import type { Request } from '@sveltejs/kit';

export async function post(request: Request<any, FormData>) {
	const name = request.body.get('name');
	const email = request.body.get('email');
	const message = request.body.get('message');

	

	return {
		status: 302,
		headers: {
			location: '/'
		}
	};
}
