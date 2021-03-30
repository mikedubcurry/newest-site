import { useState, useEffect } from 'react';

const QUERY = '(prefers-reduced-motion: no-preference)';

const isRenderingOnServer = typeof window === 'undefined';

const getInitialState = () => {
	return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;
};

export function usePrefersReducedMotion() {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(
		getInitialState
	);
	useEffect(() => {
		const mediaQueryList = window.matchMedia(QUERY);
		const listener = (event) => {
			setPrefersReducedMotion(!event.matches);
		};
		mediaQueryList.addEventListener('change',listener);
		return () => {
			mediaQueryList.removeEventListener('change',listener);
		};
	}, []);
	return prefersReducedMotion;
}

export function useHasMounted() {
	const [hasMounted, setHasMounted] = useState(false);
	useEffect(() => {
		setHasMounted(true);
	}, []);
	return hasMounted;
}

