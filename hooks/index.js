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
		mediaQueryList.addEventListener('change', listener);
		return () => {
			mediaQueryList.removeEventListener('change', listener);
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

export function usePagination(dataArray, options) {
	const len = dataArray.length;
	let chunkLength = options ? options.chunkLength : undefined;
	if (!chunkLength) chunkLength = 3;
	const [chunk, setChunck] = useState(0);
	const handleNext = () => {
		if (chunk + chunkLength >= len) {
			setChunck(0);
		} else {
			setChunck(chunk + chunkLength);
		}
	};
	const handlePrev = () => {
		if (chunk - chunkLength < 0) {
			if (chunkLength % 2 === 0) {
				setChunck(len - (len % chunkLength) - chunkLength);
			} else {
				setChunck(len - (len % chunkLength));
			}
		} else {
			setChunck(chunk - chunkLength);
		}
	};
	const slice = dataArray.slice(chunk, chunk + chunkLength);
	return [handleNext, handlePrev, slice];
}
