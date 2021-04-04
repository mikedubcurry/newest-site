import { usePost } from '../../../serverFns';

export default function handler(req, res) {
	console.log(req.query);
	const post = usePost(req.query?.slug);
  setTimeout(() => {
    res.status(200).json({ post });

  }, 2000)
}
