import type { RequestHandler } from '@sveltejs/kit';
import { config } from 'dotenv';
config();

const pollId = process.env.POLL_ID;
const pollUrl = process.env.POLL_URL;

export const post: RequestHandler = async ({ request }) => {
	const vote = await request.json();
	const response = await fetch(`${pollUrl}/${pollId}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(vote),
	});

	if (response.ok) {
		return {
			status: 200,
			body: response.body,
		};
	}
	return {
		status: 500,
		message: 'something went wrong...',
	};
};

export const get: RequestHandler = async () => {
	const response = await fetch(`${pollUrl}/${pollId}`);
	if (response.ok) {
		return {
			status: 200,
			body: response.body,
		};
	} else {
		return {
			status: 500,
			message: 'something went wrong...',
		};
	}
};
