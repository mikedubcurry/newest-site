import Link from 'next/link';

import styles from '../styles/Blog.module.css';

export function BlogCard({ post, i }) {
	return (
		<li className={styles['blog-card']} key={i}>
			<Link href={`/blog/${post.slug}`}>
				<a>
					<h3>{post.title}</h3>
					<p>{post.summary}</p>
				</a>
			</Link>
		</li>
	);
}
