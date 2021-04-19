import { usePagination } from '../hooks';
import { Button } from './';
import styles from '../styles/Sections.module.css';

// ***********************************************************************
// REFACTOR FOR USE IN CATPICSECTION (ie displaying 2 things instead of 1)
// ***********************************************************************

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
