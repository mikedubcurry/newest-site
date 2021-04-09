import { useState, useEffect } from 'react';
import styles from '../styles/Sections.module.css';

export function Button({ action, text }) {
	const [enabled, setEnabled] = useState(true);

	useEffect(() => {
		const t = setTimeout(() => {
			setEnabled(true);
		}, 300);
		return () => {
			clearTimeout(t);
		};
	});
	return (
		<button
			disabled={!enabled}
			className={styles.Button}
			onClick={() => {
				action();
				setEnabled(false);
			}}
		>
			{text}
		</button>
	);
}
