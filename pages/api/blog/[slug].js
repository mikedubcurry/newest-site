import { usePost } from '../../../serverFns';

export default async function handler(req, res) {
	console.log(req.query);
	const post = await usePost(req.query?.slug);
	console.log(post);
	setTimeout(() => {
		res.status(200).json({ post });
	}, 2000);
}
