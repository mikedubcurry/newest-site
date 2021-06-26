<script context="module" lang="ts">
	export async function load({ fetch }) {
		const res = await fetch('/about.json');
		if (res.ok) {
			let about = await res.json();
			return {
				props: {
					about
				}
			};
		}
	}
</script>

<script lang="ts">
	export let about: {
		aboutMe: string;
		hobbies: { hobby: string; outlets: string[] }[];
		projects: {
			description: string;
			repo: { href: string; text: string }[];
			title: string;
		}[];
		workHistory: {
			position: string;
			company: string;
			from: string;
			to: string;
			duties: string[];
		}[];
	};
	console.log(about);
	const { aboutMe, hobbies, projects, workHistory } = about;
</script>

<h1>About Me</h1>
<section>
	{#each aboutMe as pg}
		<p>{pg}</p>
	{/each}
</section>

<h2>Hobbies</h2>
<section>
	{#each hobbies as hobby}
		<div class="hobby">
			<h3>{hobby.hobby}</h3>
			<p>{hobby.outlets.join(' ')}</p>
		</div>
	{/each}
</section>

<h2>Projects</h2>
<section>
	{#each projects as prj}
		<div class="prj">
			<h3>{prj.title}</h3>
			<ul>
				{#each prj.repo as repo}
					<li><a href={repo.href}>{repo.text}</a></li>
				{/each}
			</ul>
			<p>{prj.description}</p>
		</div>
	{/each}
</section>

<h2>Work History</h2>
<section>
	{#each workHistory as job}
		<div class="job">
			<h3>{job.position}</h3>
			<p>{job.company}</p>
			<p>{job.from} - {job.to}</p>
			<ul>
				{#each job.duties as duty}
					<li>{duty}</li>
				{/each}
			</ul>
		</div>
	{/each}
</section>

<style>
	h2 {
		font-size: calc(var(--medium-font-size) + 1rem);
	}
	h3 {
		font-size: var(--medium-font-size);
	}
	.job,
	.prj,
	.hobby {
		margin-left: 2rem;
	}
	.job p,
	.prj p,
	.hobby p {
		margin-left: 4rem;
	}
	.job li,
	.prj li {
		list-style: none;
	}
</style>
