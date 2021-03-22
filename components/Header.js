import { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
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
			<div className={styles.nametitle}>
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
	const transitions = useTransition(idx, (p) => p, {
		from: { opacity: 0, marginLeft: '30px' },
		enter: { opacity: 1, marginLeft: '0px' },
		leave: { opacity: 0, marginLeft: '-100px' },
		config: { duration: 300 },
	});

	if (!hasMounted) return '';

	if (noAnime) {
		return <span className={styles.descLong}>{descs.join(', ')}</span>;
	} else {
		return (
			<span className={styles.descShort}>
				{transitions.map(({ item, props, key }) => {
					const Desc = animatedDescs[item];
					return <Desc key={key} style={props} />;
				})}
			</span>
		);
	}
}
const animatedDescs = descs.map((desc, i) => ({ style }) => (
	<animated.span style={style} key={i}>
		{desc}
	</animated.span>
));

// 	const transitions = useTransition(idx, (p) => p, {
// 			from: { opacity: 0, marginLeft: "30px" },
// 			enter: { opacity: 1, marginLeft: "0px" },
// 			leave: { opacity: 0, marginLeft: "-100px" },
// 			config: { duration: 300 },
// 	});
// 					{transitions.map(({ item, props, key }) => {
// 							const Desc = descriptions[item];
// 							return <Desc key={key} style={props} />;
// 					})}

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
