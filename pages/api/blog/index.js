const fs = require('fs');
const md = require('markdown-it')({html: true});

const blogPath = './posts/';

export default function handler(req, res) {
	const posts = fs.readdirSync(blogPath).map((file) => {
		const post = fs.readFileSync(blogPath + file, 'utf-8');
		return { __html: md.render(post) };
	});
	res.status(200).json({ posts });
}
