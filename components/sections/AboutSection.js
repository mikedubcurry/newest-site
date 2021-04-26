import Link from 'next/link';

import styles from '../../styles/Sections.module.css';

export function AboutSection() {
	return (
		<section className={styles['about-section']}>
			<h3 className={styles.subtitle}>This Site</h3>
			<p className={styles.copy}>
				MikeDubCurry.dev is a server-rendered React app, build with Next.js. The
				animations are handled with React-Spring. The Cat Pic section as well as
				the contact form interact with serverless lambda functions in AWS. And
				the Blog is just a collection of markdown files rendered as HTML. Check
				out some of the posts{/* link to blog */} to learn more about the
				process and technologies I used to build this site!
			</p>

			<Link href="/about">
				<a className={styles.link}>Read more about Me</a>
			</Link>
		</section>
	);
}
