import { useEffect, useState } from 'react';
import styles from '../styles/Sections.module.css';
import { BlogCard, Button } from './';
import { usePagination } from '../hooks';

// only show 3 posts at a time for small screens.

export function BlogSection({ posts }) {
	const [handleNext, handlePrev, postSlice] = usePagination(posts);

	return (
		<ul className={styles['blog-section']}>
			<nav className={styles.switcher}>
				<Button action={handlePrev} text="Prev" />
				<Button action={handleNext} text="Next" />
			</nav>
			{postSlice &&
				postSlice.map((post, i) => <BlogCard post={post} key={i} i={i} />)}
		</ul>
	);
}
