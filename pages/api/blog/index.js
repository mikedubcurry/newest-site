// const { usePosts } = require('../../../serverFns');
const { useMarkdownFiles } = require('use-md');

export default async function handler(req, res) {
	const posts = await useMarkdownFiles('./posts', { html: true });

	res.status(200).json({ posts });
}
