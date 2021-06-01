import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import gray from 'gray-matter';


export async function get() {
	const files = readdirSync(resolve('./src/posts'), { encoding: 'utf8' });
	const postData = files.map((file) => {
		const post = readFileSync(resolve('./src/posts/' + file), { encoding: 'utf8' });

		const gr = gray(post);
		
		return {...gr.data};
	});

	return {
		status: 200,
		body: postData
	};
}
