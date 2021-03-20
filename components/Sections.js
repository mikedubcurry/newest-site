import { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import styles from '../styles/Sections.module.css';

export function Sections() {
	const [selected, setSelected] = useState(0);

	return (
		<>
			<ExpandableSection selected={selected === 0}>
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
			<ExpandableSection selected={selected === 1}>
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
			<ExpandableSection selected={selected === 2}>
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
			<ExpandableSection selected={selected === 3}>
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
				</section>
			</ExpandableSection>
		</>
	);
}

function ExpandableSection({ selected, children }) {
	const hasMounted = useHasMounted();
	const prefersReducedMotion = usePrefersReducedMotion();
	const [vh, setVh] = useState(0);
	useEffect(() => {
		setVh(window.innerHeight);
	});
	const props = useSpring({
		from: { height: `${hasMounted ? '80px' : '500px'}` },
		to: { height: selected ? `${vh * 0.6}px` : '80px' },
		immediate: prefersReducedMotion,
	});
	return <animated.div style={props}>{children}</animated.div>;
}

function useHasMounted() {
	const [hasMounted, setHasMounted] = useState(false);
	useEffect(() => {
		setHasMounted(true);
	}, []);
	return hasMounted;
}

const QUERY = '(prefers-reduced-motion: no-preference)';
const isRenderingOnServer = typeof window === 'undefined';
const getInitialState = () => {
	return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;
};
function usePrefersReducedMotion() {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(
		getInitialState
	);
	useEffect(() => {
		const mediaQueryList = window.matchMedia(QUERY);
		const listener = (event) => {
			setPrefersReducedMotion(!event.matches);
		};
		mediaQueryList.addListener(listener);
		return () => {
			mediaQueryList.removeListener(listener);
		};
	}, []);
	return prefersReducedMotion;
}
