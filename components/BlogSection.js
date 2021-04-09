import { useEffect, useState } from 'react';
import styles from '../styles/Sections.module.css';
import { BlogCard } from './';

// only show 3 posts at a time for small screens.

export default function BlogSection({ posts }) {
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

function usePagination(dataArray, options) {
	const len = dataArray.length;
	let chunkLength = options ? options.chunkLength : undefined;
	if (!chunkLength) chunkLength = 3;
	const [chunk, setChunck] = useState(0);
	const handleNext = () => {
		if (chunk + chunkLength > len) {
			setChunck(0);
		} else {
			setChunck(chunk + chunkLength);
		}
	};
	const handlePrev = () => {
		if (chunk - chunkLength < 0) {
			setChunck(len - (len % chunkLength));
		} else {
			setChunck(chunk - chunkLength);
		}
	};
	const slice = dataArray.slice(chunk, chunk + chunkLength);
	return [handleNext, handlePrev, slice];
}
