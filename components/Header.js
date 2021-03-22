import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

const descs = [
	'JavaScript Developer',
	'Motorcycle Rider',
	'Cat-Person',
	'Guitarist',
	'So Much More',
];

export default function Header() {
	const hasMounted = useHasMounted();
	const reducedMotion = usePrefersReducedMotion();

	return (
		<header className={styles.header}>
			<div>
				Mike <span className={styles.lastname}>Curry</span>
			</div>
			<Description hasMounted={hasMounted} noAnime={reducedMotion} />
		</header>
	);
}

function Description({ hasMounted, noAnime }) {
	const [idx, setIdx] = useState(0);

	useEffect(() => {
		let t = setTimeout(() => {
			setIdx((idx + 1) % descs.length);
		}, 2000);
		return () => {
			clearTimeout(t);
		};
	}, [idx]);

	if (!hasMounted) return '';
	if (noAnime) {
		return <span className={styles.descLong}>{descs.join(', ')}</span>;
	} else return <span className={styles.descShort}>{descs[idx]}</span>;
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
function usePrefersReducedMotion(DEV) {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(
		!DEV ? getInitialState : true
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
