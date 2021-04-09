import { SampleCard, Button } from './';
import { usePagination } from '../hooks';
import styles from '../styles/Sections.module.css';

export  function SampleSection({ samples }) {
	const [handleNext, handlePrev, sampleSlice] = usePagination(samples);

	return (
		<ul className={styles['sample-section']}>
			<nav className={styles.switcher}>
				<Button action={handlePrev} text="Prev" />
				<Button action={handleNext} text="Next" />
			</nav>
			{sampleSlice &&
				sampleSlice.map((sample, i) => <SampleCard sample={sample} key={i} />)}
		</ul>
	);
}
