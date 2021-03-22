import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

const descs = [
	'JavaScript Developer',
	'Motorcycle Rider',
	'Cat-Person',
	'Guitarist',
];

export default function Header() {
	const [desc, setDesc] = useState(descs[0]);
	const hasMounted = useHasMounted();
	const reducedMotion = usePrefersReducedMotion();
	console.log(reducedMotion);
	return (
		<header className={styles.header}>
			<div>
				Mike <span className={styles.lastname}>Curry</span>
			</div>
		</header>
	);
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
