import { usePagination } from '../hooks';
import { Button } from './';
import styles from '../styles/Sections.module.css';

export function Switcher({ items, Template }) {
	const [handleNext, handlePrev, itemSlice] = usePagination(items);

	return (
		<>
			<nav className={styles.switcher}>
				<Button action={handlePrev} text="Prev" />
				<Button action={handleNext} text="Next" />
			</nav>
			{itemSlice &&
				itemSlice.map((item, i) => <Template key={i} content={item} />)}
		</>
	);
}
