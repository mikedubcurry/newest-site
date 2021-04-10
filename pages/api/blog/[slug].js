import { usePost } from '../../../serverFns';

export default async function handler(req, res) {

	const post = await usePost(req.query?.slug);

	setTimeout(() => {
		res.status(200).json({ post });
	}, 2000);
}
