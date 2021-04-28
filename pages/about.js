import styles from '../styles/About.module.css';
import {useHasMounted, usePrefersReducedMotion} from '../hooks'

export default function About() {
	const prefersReducedMotion = usePrefersReducedMotion();
	const hasMounted = useHasMounted();


	
	const handleNavLinkClick = (e) => {
		console.log(prefersReducedMotion, hasMounted);
		if(prefersReducedMotion) {
			return
		}
		e.preventDefault();
		const id = e.target.getAttribute('href');
		const section = document.querySelector(id);
		section.scrollIntoView({ behavior: 'smooth' });
		setTimeout(() => {
			section.focus()
		}, 300)
	};
	return (
		<main className={styles.main}>
			<h1 className={styles['page-title']}>About</h1>
			<nav>
				<ul>
					<li>
						<a href="#this-site" onClick={handleNavLinkClick}>This Site</a>
					</li>
					<li>
						<a href="#projects" onClick={handleNavLinkClick}>My Other Projects</a>
					</li>
					<li>
						<a href="#work" onClick={handleNavLinkClick}>Work Experience</a>
					</li>
					<li>
						<a href="#hobbies" onClick={handleNavLinkClick}>
							Hobbies
						</a>
					</li>
				</ul>
			</nav>
			<section className={styles["aboutpage-section"]}>
				<h2 tabIndex={-1} id="this-site" className={styles.subtitle}>
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
			<section className={styles["aboutpage-section"]}>
				<h2 tabIndex={-1} id="projects" className={styles.subtitle}>
					Other Projects
				</h2>
				<p className={styles.copy}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
					laudantium quis perferendis, explicabo odit suscipit eius aliquid
					labore consequatur quibusdam dignissimos repudiandae fugit veritatis
					voluptatum in accusantium deserunt. Pariatur, deleniti!
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
					laudantium quis perferendis, explicabo odit suscipit eius aliquid
					labore consequatur quibusdam dignissimos repudiandae fugit veritatis
					voluptatum in accusantium deserunt. Pariatur, deleniti!
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
					laudantium quis perferendis, explicabo odit suscipit eius aliquid
					labore consequatur quibusdam dignissimos repudiandae fugit veritatis
					voluptatum in accusantium deserunt. Pariatur, deleniti!
				</p>
			</section>
			<section className={styles["aboutpage-section"]}>
				<h2 tabIndex={-1} id="work" className={styles.subtitle}>
					Work Experience
				</h2>
				<p className={styles.copy}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
					laudantium quis perferendis, explicabo odit suscipit eius aliquid
					labore consequatur quibusdam dignissimos repudiandae fugit veritatis
					voluptatum in accusantium deserunt. Pariatur, deleniti!
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
					laudantium quis perferendis, explicabo odit suscipit eius aliquid
					labore consequatur quibusdam dignissimos repudiandae fugit veritatis
					voluptatum in accusantium deserunt. Pariatur, deleniti!
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
					laudantium quis perferendis, explicabo odit suscipit eius aliquid
					labore consequatur quibusdam dignissimos repudiandae fugit veritatis
					voluptatum in accusantium deserunt. Pariatur, deleniti!
				</p>
			</section>
			<section className={styles["aboutpage-section"]}>
				<h2 tabIndex={-1} className={styles.subtitle} id="hobbies">
					Hobbies
				</h2>
				<p className={styles.copy}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
					laudantium quis perferendis, explicabo odit suscipit eius aliquid
					labore consequatur quibusdam dignissimos repudiandae fugit veritatis
					voluptatum in accusantium deserunt. Pariatur, deleniti!
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
					laudantium quis perferendis, explicabo odit suscipit eius aliquid
					labore consequatur quibusdam dignissimos repudiandae fugit veritatis
					voluptatum in accusantium deserunt. Pariatur, deleniti!
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
					laudantium quis perferendis, explicabo odit suscipit eius aliquid
					labore consequatur quibusdam dignissimos repudiandae fugit veritatis
					voluptatum in accusantium deserunt. Pariatur, deleniti!
				</p>
			</section>
		</main>
	);
}
