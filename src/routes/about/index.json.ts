import type { Request } from '@sveltejs/kit';

export async function get(request: Request<any, FormData>) {
	const data = {
		// resume data
		workHistory: [
			{
				position: 'JavaScript Application Developer',
				company: 'Atlas Copco',
				from: 'March 2020',
				to: 'present',
				duties: ['Develop SAP UI5 applications for a Fiori launchhpad']
			},
			{
				position: 'Web Developer',
				company: 'CP Solutions',
				from: 'June 2021',
				to: 'present',
				duties: ['Develop static, content driven websites']
			}
		],
		hobbies: [
			{
				hobby: 'gardening',
				outlets: [
					'I like to grow vegetables in my garden during the summer',
					'My favorite things to grow are peppers and leafy greens like kale or spinach',
					'I use self produced compost to feed my vegetables.'
				]
			},
			{
				hobby: 'music',
				outlets: [
					'I have been playing guitar on and off since I was 11 years old.',
					'In 2020, my friends and I started playing in a band together, most of them as new musicians.',
					'This drove me to learn more about music theory and more importantly, how to teach.'
				]
			}
		],
		aboutMe: 'Out of high school, I went to university to study physics. '
	};

	return {
		status: 200,
		body: data
	};
}
