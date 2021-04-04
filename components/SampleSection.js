import { SampleCard } from './';
import styles from '../styles/Sections.module.css';

export default function SampleSection({ samples }) {
	return (
		<ul className={styles['sample-section']}>
			{samples &&
				samples.map((sample, i) => <SampleCard sample={sample} key={i} />)}
		</ul>
	);
}
