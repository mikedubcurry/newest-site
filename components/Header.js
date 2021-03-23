import { useState, useEffect } from 'react';

import Description from './Description';
import styles from '../styles/Header.module.css';

export default function Header() {
	const hasMounted = useHasMounted();
	const reducedMotion = usePrefersReducedMotion();

	return (
		<header className={styles.header}>
			<div className={styles.nametitle}>
				Mike <span className={styles.lastname}>Curry</span>
			</div>
			<Description hasMounted={hasMounted} noAnime={reducedMotion} />
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
