const { usePosts } = require('../../../serverFns');

export default function handler(req, res) {
	const posts = usePosts();
	res.status(200).json({ posts });
}
