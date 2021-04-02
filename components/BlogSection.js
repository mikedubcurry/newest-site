import styles from '../styles/Sections.module.css';
import { BlogCard } from './';

export default function BlogSection({ posts }) {
	return (
		<ul className={styles['blog-section']}>
			{posts && posts.map((post, i) => <BlogCard post={post} key={i} i={i} />)}
		</ul>
	);
}
