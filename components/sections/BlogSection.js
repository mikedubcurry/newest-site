import { useEffect, useState } from 'react';
import styles from '../../styles/Sections.module.css';
import { BlogCard, Button } from '../';
import { usePagination } from '../../hooks';
import { Switcher } from '../Switcher';

export function BlogSection({ posts }) {
	return (
		<ul className={styles['blog-section']}>
			<Switcher level={4} items={posts} Template={BlogCard} />
		</ul>
	);
}
