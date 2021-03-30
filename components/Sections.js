import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import BlogCard from './BlogCard';
import { useHasMounted, usePrefersReducedMotion } from '../hooks';
import styles from '../styles/Sections.module.css';

export function Sections({ data }) {
	const [selected, setSelected] = useState(0);
	const hasMounted = useHasMounted();
	const reducedMotion = usePrefersReducedMotion();
	const posts =
		data &&
		data.posts.map(({ data }) => ({
			title: data.title,
			date: data.date,
			slug: data.slug,
			summary: data.summary,
		}));
	return (
		<>
			<Section
				className="first"
				hasMounted={hasMounted}
				noAnime={reducedMotion}
				selected={selected === 0}
			>
				{/* <section className={styles.first} onFocus={() => setSelected(0)}> */}
				<h2
					onClick={() => setSelected(0)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							setSelected(0);
						}
					}}
					tabIndex="1"
				>
					Work Experience
				</h2>
				<div>section</div>
			</Section>
			<Section
				className="second"
				hasMounted={hasMounted}
				noAnime={reducedMotion}
				selected={selected === 1}
			>
				<h2
					onClick={() => setSelected(1)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							setSelected(1);
						}
					}}
					tabIndex="2"
				>
					Code Samples
				</h2>
				<div>section</div>
			</Section>
			<Section
				className="third"
				hasMounted={hasMounted}
				noAnime={reducedMotion}
				selected={selected === 2}
			>
				<h2
					onClick={() => setSelected(2)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							setSelected(2);
						}
					}}
					tabIndex="3"
				>
					Cat Pictures
				</h2>
				<div>section</div>
			</Section>
			<Section
				className="fourth"
				hasMounted={hasMounted}
				noAnime={reducedMotion}
				selected={selected === 3}
			>
				<h2
					onClick={() => setSelected(3)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							setSelected(3);
						}
					}}
					tabIndex="4"
				>
					Blog Posts
				</h2>
				<ul>
					{posts && posts.map((post, i) => <BlogCard post={post} key={i} />)}
				</ul>
			</Section>
		</>
	);
}

function Section({ children, className, noAnime, selected }) {
	const [vh, setVh] = useState(0);
	useEffect(() => {
		setVh(window.innerHeight - window.innerHeight * 0.1);
	}, []);
	console.log(vh);
	const props = useSpring({
		// from: { height: anime ? '80px' : `${vh * 0.75}px` },
		from: { height: '50px' },
		to: { height: selected ? `${vh - 180}px` : '50px' },
		immediate: noAnime,
	});

	return (
		<animated.section style={props} className={styles.section}>
			{/* {children[0]} */}
			<div className={styles[className]}>
				{children[0]}
				<div>{selected && children.slice(1)}</div>
			</div>
		</animated.section>
	);
}
