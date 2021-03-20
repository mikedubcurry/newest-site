const fs = require('fs');
const md = require('markdown-it')({ html: true });
const gray = require('gray-matter');

const blogPath = './posts/';

export default function handler(req, res) {
	const posts = fs.readdirSync(blogPath).map((file) => {
		const rawFile = fs.readFileSync(blogPath + file, 'utf-8');
		const gr = gray(rawFile);
		const post = md.render(gr.content);
		return { __html: post, ...gr };
	});
	res.status(200).json({ posts });
}
