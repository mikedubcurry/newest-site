import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import md from 'markdown-it';
import gray from 'gray-matter';

const mdReader = md({ html: true });

export async function get() {
	const files = readdirSync(resolve('./src/posts'), { encoding: 'utf8' });
	const postData = files.map((file) => {
		const post = readFileSync(resolve('./src/posts/' + file), { encoding: 'utf8' });

		const gr = gray(post);
		console.log(gr);
		
		return {...gr.data};
	});

	return {
		status: 200,
		body: postData
	};
}
