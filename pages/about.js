import styles from '../styles/About.module.css';

export default function About() {
	return (
		<main className={styles.main}>
			<h1 className={styles['page-title']}>About</h1>
			<nav>
				<ul>
					<li>
						<a href="#this-site">This Site</a>
					</li>
					<li>
						<a href="#projects">My Other Projects</a>
					</li>
					<li>
						<a href="#work">Work Experience</a>
					</li>
					<li>
						<a href="#hobbies">Hobbies</a>
					</li>
				</ul>
			</nav>
			<section>
				<h2 id="this-site" className={styles.subtitle}>
					This Site
				</h2>
				<p className={styles.copy}>
					MikeDubCurry.dev is a server-rendered React app, build with Next.js.
					The animations are handled with React-Spring. The Cat Pic section as
					well as the contact form interact with serverless lambda functions in
					AWS. And the Blog is just a collection of markdown files rendered as
					HTML. Check out some of the posts{/* link to blog */} to learn more
					about the process and technologies I used to build this site!
				</p>
			</section>
			<section>
				<h2 id="projects" className={styles.subtitle}>
					Other Projects
				</h2>
				<p className={styles.copy}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
					laudantium quis perferendis, explicabo odit suscipit eius aliquid
					labore consequatur quibusdam dignissimos repudiandae fugit veritatis
					voluptatum in accusantium deserunt. Pariatur, deleniti!
				</p>
			</section>
			<section>
				<h2 id="work" className={styles.subtitle}>
					Work Experience
				</h2>
				<p className={styles.copy}>					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
					laudantium quis perferendis, explicabo odit suscipit eius aliquid
					labore consequatur quibusdam dignissimos repudiandae fugit veritatis
					voluptatum in accusantium deserunt. Pariatur, deleniti!
</p>
			</section>
			<section>
				<h2 className={styles.subtitle} id="hobbies">
					Hobbies
				</h2>
				<p className={styles.copy}>					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
					laudantium quis perferendis, explicabo odit suscipit eius aliquid
					labore consequatur quibusdam dignissimos repudiandae fugit veritatis
					voluptatum in accusantium deserunt. Pariatur, deleniti!
</p>
			</section>
		</main>
	);
}
