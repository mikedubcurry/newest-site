import { useState } from 'react';
import styles from '../styles/Header.module.css';

const descs = [
	'JavaScript Developer',
	'Motorcycle Rider',
	'Cat-Person',
	'Guitarist',
];

export default function Header() {
	const [desc, setDesc] = useState(descs[0]);
	return (
		<header className={styles.header}>
			<div>
				Mike <span className={styles.lastname}>Curry</span>
			</div>
		</header>
	);
}
