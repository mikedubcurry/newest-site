const fs = require('fs');
const md = require('markdown-it')({ html: true });
const gray = require('gray-matter');

const blogPath = './posts/';

export default function handler(req, res) {
	const posts = readAndParse(blogPath);
	res.status(200).json({ posts });
}

function readAndParse(path) {
	// get all posts from directory
	const posts = fs.readdirSync(path).map((file) => {
		// map contents of each post
		const rawFile = fs.readFileSync(path + file, 'utf-8');
		// parse frontmatter
		const gr = gray(rawFile);
		// set contents to __html prop
		const post = md.render(gr.content);
		return { data: gr.data, post };
	});
	return posts
}
