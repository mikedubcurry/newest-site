import type { RequestHandler, } from '@sveltejs/kit';
import { config } from 'dotenv';
config();

export const post: RequestHandler = async ({ request }) => {
	const body = await request.formData()
	const name = body.get('name');
	const email = body.get('email');
	const message = body.get('message');

	const contactServer = import.meta.env.VITE_contact_server as string;

	const response = await fetch(contactServer, {
		method: 'POST',
		body: JSON.stringify({ name, email, message }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	if (response.ok) {
		const json = await response.json();
		// console.log(json);
		if (json.status === 'success')
			return {
				status: 302,
				headers: {
					location: '/',
				},
				body: json,
			};
		else {
			return {
				status: 429,
				body: json,
			};
		}
	} else {
		const json = await response.json();

		return {
			status: response.status,
			body: json,
		};
	}
};
