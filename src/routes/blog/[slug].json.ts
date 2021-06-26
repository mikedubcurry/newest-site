import { readFileSync } from 'fs';
import { resolve } from 'path';

import gray from 'gray-matter';
import markdownIt from 'markdown-it';

const md = markdownIt({ html: true });

export async function get({ params }) {
	const slug = params.slug;
	const post = readFileSync(resolve(`src/_posts/${slug}.md`), { encoding: 'utf8' });
	const gr = gray(post);
	const content = md.render(gr.content);

	return {
		status: 200,
		body: {
			content,
			data: gr.data
		}
	};
}
