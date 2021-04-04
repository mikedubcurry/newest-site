const fs = require('fs');
const md = require('markdown-it')({ html: true });
const gray = require('gray-matter');

export function useSamples() {
	const samplePath = './samples/';
	const samples = fs.readdirSync(samplePath).map((file) => {
		const rawFile = fs.readFileSync(samplePath + file, 'utf-8');
		const gr = gray(rawFile);
		const sample = md.render(gr.content);
		return { data: gr.data, sample };
	});
	return samples;
}

export function usePosts() {
	const blogPath = './posts/';
	// get all posts from directory
	const posts = fs.readdirSync(blogPath).map((file) => {
		// map contents of each post
		const rawFile = fs.readFileSync(blogPath + file, 'utf-8');
		// parse frontmatter
		const gr = gray(rawFile);
		// set contents to __html prop
		const post = md.render(gr.content);
		return { data: gr.data, post };
	});
	return posts;
}

export function usePost(slug) {
	const posts = usePosts();
	return posts.filter(({ data }) => data.slug === slug)[0];
}
