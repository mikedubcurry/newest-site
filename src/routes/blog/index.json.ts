import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import md from 'markdown-it';
import gray from 'gray-matter';

const mdReader = md({ html: true });

export async function get() {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const files = readdirSync(resolve('./src/posts'), { encoding: 'utf8' });
	const posts = files.map((file) => {
		const post = readFileSync(resolve('./src/posts/' + file), { encoding: 'utf8' });

		const gr = gray(post);
		console.log(gr);
		
		return {data: gr.data};
	});

	return {
		status: 200,
		body: posts
	};
}
