import { useRouter } from 'next/router';
import useSWR from 'swr';

const BlogPost = () => {
	const router = useRouter();
	const { slug } = router.query;
	console.log(slug);
	const { data } = useSWR(`/api/blog/${slug}`);
	if (!data) {
		return <div>...loading</div>;
	}
	console.log(data.post);
	return (
		<>
			<h1>{data.post.data.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: data.post.post }}></div>
		</>
	);
};

export default BlogPost;
