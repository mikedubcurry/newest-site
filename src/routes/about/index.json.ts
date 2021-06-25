import type { Request } from '@sveltejs/kit';

export async function get(request: Request<any, FormData>) {
	const data = {
		workHistory: [
			{
				position: 'JavaScript Application Developer',
				company: 'Atlas Copco',
				from: 'March 2020',
				to: 'present',
				duties: ['Develop SAP UI5 applications for a Fiori launchhpad']
			}
			// ,{
			// 	position: 'Web Developer',
			// 	company: 'CP Solutions',
			// 	from: 'June 2021',
			// 	to: 'present',
			// 	duties: ['Develop static, content driven websites']
			// }
		],
		hobbies: [
			{
				hobby: 'gardening',
				outlets: [
					'I like to grow vegetables in my garden during the summer.',
					'My favorite things to grow are peppers and leafy greens like kale or spinach.',
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
		aboutMe: [
			"My background, aside from gardening and music is in retail and food service. I used to work in a local grocery store chain in the seafood department. I started as a part time employee and ended up as an assistant manager, slated to take full control over my store's department.",
			"About a year into working with fish, I decided it was time for change. So in 2018 I stared looking at resources to learn how to code. I started to learn Python and later switched to learning JavaScript. At the time, I had very little experience, only knowing Python as a 'backend' language, I decided to translate that knowledge to JavaScript using Node.js.",
			'Later, wanting something cool to show my friends, I started learning frontend development with HTML, CSS, and client-side JavaScript. After building a few more than trivial full stack web applications like a budget tracker and an inventory management system, I started applying to software developer jobs. After a year of applying and continuous learning, I finally landed my first gig as a JavaScript Application Developer at Atlas Copco, where I just reached the one-year mark back in March 2021.'
		],
		projects: [
			{
				title: 'Budget Tracker',
				description:
					'A full stack JavaScript web app to track account balances and spending. It used Express, MongoDb and React.',
				repo: [
					{ text: 'Server', href: 'https://github.com/mikedubcurry/budget-app' },
					{ text: 'Client', href: 'https://github.com/mikedubcurry/budget-app-client' }
				]
			},
			{
				title: 'Inventory Manager',
				description:
					'Another fullstack JavaScript app but this time using PostgreSQL and Redis with a Svelte frontend. With this app, you are able to insert goods, their prices, and an inventory count, which could be updated later by scanning a barcode with your smartphone.',
				repo: [
					{
						text: 'Server',
						href: 'https://github.com/mikedubcurry/CG-Oh-Server'
					},
					{ text: 'Client', href: 'https://github.com/mikedubcurry/CG-Oh-Client' }
				]
			},
			{
				title: 'Drum Machine',
				description:
					'A simple drum sequencer with tempo and gain control. Using the Web Audio API to play different samples as well as schedule the timing for drum hits.',
				repo: [{ text: 'Client', href: 'https://github.com/mikedubcurry/drummachine' }]
			},
			{
				title: 'XKCD Comic Viewer',
				description:
					'A really simple interface to view any XKCD comic. It uses Svelte and fetches comics from an XKCD api.',
				repo: [{ text: 'App', href: 'https://github.com/mikedubcurry/xkcd-viewer-svelte' }]
			},
			{
				title: 'This Site',
				description:
					'While still in beta during the development of this site, I used SvelteKit to handle server rendering and routing. I consider myself a die-hard Svelte fanboy now so it is my go-to when building frontend UIs.',
				repo: [{ text: 'Site', href: 'https://github.com/mikedubcurry/newest-site' }]
			}
		]
	};

	return {
		status: 200,
		body: data
	};
}
