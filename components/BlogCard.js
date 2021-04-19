import Link from 'next/link';

import styles from '../styles/Blog.module.css';

export function BlogCard({ content, i }) {
	return (
		<li className={styles['blog-card']} key={i}>
			<Link href={`/blog/${content.slug}`}>
				<a>
					<h3>{content.title}</h3>
					<p>{content.summary}</p>
				</a>
			</Link>
		</li>
	);
}
