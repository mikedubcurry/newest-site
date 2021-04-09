import { Description } from './';
import { useHasMounted, usePrefersReducedMotion } from '../hooks';
import styles from '../styles/Header.module.css';

export function Header() {
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
