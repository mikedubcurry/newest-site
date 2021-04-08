const fs = require('fs');
const md = require('markdown-it')({ html: true });
const gray = require('gray-matter');
const { useMarkdownFiles, FileReader } = require('use-md');

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
	useMarkdownFiles(blogPath, { html: true }).then((files) => {
		// console.log(files);
		return files.map((post) => {
			return {
				data: post.frontmatter,
				post: post.content,
			};
		});
	});
	// // get all posts from directory
	// const posts = fs.readdirSync(blogPath).map((file) => {
	// 	// map contents of each post
	// 	const rawFile = fs.readFileSync(blogPath + file, 'utf-8');
	// 	// parse frontmatter
	// 	const gr = gray(rawFile);
	// 	// set contents to __html prop
	// 	const post = md.render(gr.content);
	// 	return { data: gr.data, post };
	// });
	// return posts;
}

export async function usePost(slug) {
	const fr = new FileReader('./posts');
	const post = await fr.getMDownFile('0.md', { html: true });
	// console.log(post);
	return post;
	// .filter(({ data }) => data.slug === slug)[0];
}
