const fs = require('fs');
const md = require('markdown-it')({ html: true });
const gray = require('gray-matter');

const blogPath = './posts/';

export default function handler(req, res) {
	// get all posts from directory
	const posts = fs.readdirSync(blogPath).map((file) => {
		// map contents of each post
		const rawFile = fs.readFileSync(blogPath + file, 'utf-8');
		// parse frontmatter
		const gr = gray(rawFile);
		// set contents to __html prop
		const post = md.render(gr.content);
		return { data: gr.data };
	});
	res.status(200).json({ posts });
}
