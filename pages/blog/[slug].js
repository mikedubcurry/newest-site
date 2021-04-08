import { useRouter } from 'next/router';
import useSWR from 'swr';

const BlogPost = () => {
	const router = useRouter();
	const { slug } = router.query;
	console.log(slug);
	const { data } = useSWR(`/api/blog/${slug}`);
	if (!data || !data.post) {
		return <div>...loading</div>;
	}
	console.log(data);
	return (
		<>
			<h1>{data.post.frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: data.post.content }}></div>
		</>
	);
};

export default BlogPost;
