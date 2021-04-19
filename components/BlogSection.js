import { useEffect, useState } from 'react';
import styles from '../styles/Sections.module.css';
import { BlogCard, Button } from './';
import { usePagination } from '../hooks';
import { Switcher } from './Switcher';

export function BlogSection({ posts }) {
	return (
		<ul className={styles['blog-section']}>
			<Switcher items={posts} Template={BlogCard} />
		</ul>
	);
}
