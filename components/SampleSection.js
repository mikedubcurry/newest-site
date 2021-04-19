import { SampleCard, Switcher } from './';
import styles from '../styles/Sections.module.css';

export function SampleSection({ samples }) {
	return (
		<ul className={styles['sample-section']}>
			<Switcher items={samples} Template={SampleCard} />
		</ul>
	);
}
