import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler<any, FormData> = async (request) => {
	const data = {
		name: request.body.get('name'),
		email: request.body.get('email'),
		message: request.body.get('message')
	};

	// form data is accessible, can be sent elsewhere to send contact email!
	
	return {
		status: 301,
		headers: {
			location: '/'
		},
		body: data // TODO https://github.com/sveltejs/kit/issues/1047
	};
};
