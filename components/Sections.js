import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';

import { useHasMounted, usePrefersReducedMotion } from '../hooks';

import styles from '../styles/Sections.module.css';

export function Sections({ data }) {
	const [selected, setSelected] = useState(0);
	const hasMounted = useHasMounted();
	const reducedMotion = usePrefersReducedMotion();
	const posts = data && data.posts.map(({ data }) => ({
		title: data.title,
		date: data.date,
		slug: data.slug,
		summary: data.summary,
	}));
	return (
		<>
			<ExpandableSection
				hasMounted={hasMounted}
				noAnime={reducedMotion}
				selected={selected === 0}
			>
				<section className={styles.first} onClick={() => setSelected(0)}>
					<h2
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								setSelected(0);
							}
						}}
						tabIndex="1"
					>
						Work Experience
					</h2>
				</section>
			</ExpandableSection>
			<ExpandableSection
				hasMounted={hasMounted}
				noAnime={reducedMotion}
				selected={selected === 1}
			>
				<section onClick={() => setSelected(1)} className={styles.second}>
					<h2
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								setSelected(1);
							}
						}}
						tabIndex="2"
					>
						Code Samples
					</h2>
				</section>
			</ExpandableSection>
			<ExpandableSection
				hasMounted={hasMounted}
				noAnime={reducedMotion}
				selected={selected === 2}
			>
				<section onClick={() => setSelected(2)} className={styles.third}>
					<h2
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								setSelected(2);
							}
						}}
						tabIndex="3"
					>
						Cat Pictures
					</h2>
				</section>
			</ExpandableSection>
			<ExpandableSection
				hasMounted={hasMounted}
				noAnime={reducedMotion}
				selected={selected === 3}
			>
				<section onClick={() => setSelected(3)} className={styles.fourth}>
					<h2
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
						{posts &&
							posts.map((post, i) => (
								<li key={i}>
									<Link href={`/blog/${post.slug}`}>
										<a>
											<h3>{post.title}</h3>
											<p>{post.summary}</p>
										</a>
									</Link>
								</li>
							))}
					</ul>
				</section>
			</ExpandableSection>
		</>
	);
}

function ExpandableSection({ selected, children, hasMounted, noAnime }) {
	const [vh, setVh] = useState(0);
	useEffect(() => {
		setVh(window.innerHeight);
	});

	const props = useSpring({
		from: { height: '80px' },
		to: { height: selected ? `${vh * 0.8}px` : '80px' },
		immediate: noAnime,
	});
	return <animated.div style={props}>{children}</animated.div>;
}
