import { useEffect, useState } from 'react';
import styles from '../styles/Sections.module.css';
import { BlogCard } from './';

// only show 3 posts at a time for small screens.

export default function BlogSection({ posts }) {
	const chunkLength = 3;
	const [chunk, setChunck] = useState(0);
	const handleNext = () => {
		if (chunk + chunkLength > posts.length) {
			setChunck(0);
		} else {
			setChunck(chunk + chunkLength);
		}
	};
	const handlePrev = () => {
		if (chunk - chunkLength < 0) {
			setChunck(posts.length - (posts.length % chunkLength));
		} else {
			setChunck(chunk - chunkLength);
		}
	};
	return (
		<ul className={styles['blog-section']}>
			<nav>
				<Button action={handlePrev} text="Prev" />
				<Button action={handleNext} text="Next" />
			</nav>
			{posts &&
				posts
					.slice(chunk, chunk + chunkLength)
					.map((post, i) => <BlogCard post={post} key={i} i={i} />)}
		</ul>
	);
}

function Button({ action, text }) {
	const [enabled, setEnabled] = useState(true);

	useEffect(() => {
		const t = setTimeout(() => {
			setEnabled(true);
		}, 300);
		return () => {
			clearTimeout(t);
		};
	});
	return (
		<button
			disabled={!enabled}
			className={styles.Button}
			onClick={() => {
				action();
				setEnabled(false);
			}}
		>
			{text}
		</button>
	);
}
