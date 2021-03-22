import useSWR from 'swr';

import { fetcher } from '../../utils';

export default function BlogPosts() {
	// get blog posts
	const { data, error } = useSWR('/api/blog', fetcher);
	// display relevant loading/error state
	// TODO: add custom state styles ie loading spinner
	if (error) return <div>error!</div>;
	if (!data) return <div>loading...</div>;
	return (
		<main>
			<div>all blog posts</div>
			<ul>
				{data.posts.map((post) => (
					<li>{post.data.title}</li>
				))}
			</ul>
		</main>
	);
}
