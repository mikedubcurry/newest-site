import Link from 'next/link';

import styles from '../styles/Blog.module.css'

export default function BlogCard({post, key}) {
	return (
		<li className={styles["blog-card"]} key={key}>
			<Link href={`/blog/${post.slug}`}>
				<a>
					<h3>{post.title}</h3>
					<p>{post.summary}</p>
				</a>
			</Link>
		</li>
	);
}
