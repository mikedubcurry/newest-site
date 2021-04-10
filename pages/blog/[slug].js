import { useRouter } from 'next/router';
import useSWR from 'swr';

const BlogPost = () => {
	const router = useRouter();
	const { slug } = router.query;

	const { data } = useSWR(`/api/blog/${slug}`);
	if (!data || !data.post) {
		return <div>...loading</div>;
	}

	return (
		<>
			<h1>{data.post.frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: data.post.content }}></div>
		</>
	);
};

export default BlogPost;
