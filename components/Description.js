import { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

import styles from '../styles/Header.module.css';

const descs = [
	'JavaScript Developer',
	'Cat-Person',
	'Guitarist',
	'So Much More',
];

export function Description({ hasMounted, noAnime }) {
	const [idx, setIdx] = useState(0);

	useEffect(() => {
		let t = setTimeout(() => {
			setIdx((idx + 1) % descs.length);
		}, 5000);
		return () => {
			clearTimeout(t);
		};
	}, [idx]);
	const transitions = useTransition(idx, (p) => p, {
		from: { opacity: 0, position: 'absolute', zIndex: '1', top: '-10px' },
		enter: { opacity: 1, position: 'absolute', zIndex: '2', top: '65px' },
		leave: { opacity: 0, position: 'absolute', zIndex: '3', top: '100px' },
		config: { duration: 500 },
	});

	if (!hasMounted) return '';

	if (noAnime) {
		return <span className={styles.descLong}>{descs.join(', ')}</span>;
	} else {
		return (
			<div className={styles.descShort}>
				{transitions.map(({ item, props, key }) => {
					const Desc = animatedDescs[item];
					return <Desc key={key} style={props} />;
				})}
			</div>
		);
	}
}
const animatedDescs = descs.map((desc, i) => ({ style }) => (
	<animated.div style={style} key={i}>
		{desc}
	</animated.div>
));
