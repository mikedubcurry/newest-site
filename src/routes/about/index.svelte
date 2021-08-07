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
	import Dropdown from '$lib/Dropdown.svelte';
	export let about: {
		aboutMe: string;
		hobbies: { hobby: string; outlets: string[] }[];
		projects: {
			description: string;
			repo: { href: string; text: string }[];
			title: string;
			liveLink: string | null;
		}[];
		workHistory: {
			position: string;
			company: string;
			from: string;
			to: string;
			duties: string[];
		}[];
	};

	const { aboutMe, hobbies, projects, workHistory } = about;
</script>

<svelte:head><title>Michael Curry - About</title></svelte:head>

<h1>About Me</h1>
<section>
	{#each aboutMe as pg}
		<p>{pg}</p>
	{/each}
</section>

<h2>Hobbies</h2>
<section>
	{#each hobbies as hobby, i}
		<Dropdown
			style={i % 2 == 0
				? '--dropdown-color: var(--accent-color-light);'
				: '--dropdown-color: var(--secondary-color)'}
			buttonText={hobby.hobby}
		>
			<div class="hobby">
				<h3>{hobby.hobby}</h3>
				<p>{hobby.outlets.join(' ')}</p>
			</div>
		</Dropdown>
	{/each}
</section>

<h2>Projects</h2>
<section>
	{#each projects as prj, i}
		<Dropdown
			style={i % 2 == 0
				? '--dropdown-color: var(--accent-color-light);'
				: '--dropdown-color: var(--secondary-color)'}
			buttonText={prj.title}
		>
			<div class="prj">
				{#if prj.liveLink}
					<a href={prj.liveLink}><h3>{prj.title}</h3></a>
				{:else}
					<h3>{prj.title}</h3>
				{/if}
				<ul>
					{#each prj.repo as repo}
						<li><a href={repo.href}>{repo.text}</a></li>
					{/each}
				</ul>
				<p>{prj.description}</p>
			</div>
		</Dropdown>
	{/each}
</section>

<h2>Work History</h2>
<section>
	{#each workHistory as job, i}
		<Dropdown
			style={i % 2 == 0
				? '--dropdown-color: var(--accent-color-light);'
				: '--dropdown-color: var(--secondary-color)'}
			buttonText={`${job.position}`}
		>
			<div class="job">
				<!-- <h3>{job.position}</h3> -->
				<h3>{job.company}</h3>
				<p>{job.from} - {job.to}</p>
				<ul>
					{#each job.duties as duty}
						<li>{duty}</li>
					{/each}
				</ul>
			</div>
		</Dropdown>
	{/each}
</section>

<style>
	h2 {
		font-size: calc(var(--medium-font-size) + 1rem);
	}
	h3 {
		font-size: var(--medium-font-size);
		font-family: Arial, Helvetica, sans-serif;
	}

	div > p {
		text-indent: unset;
	}

	.job,
	.prj,
	.hobby {
		margin-left: 2rem;
	}
	.job p,
	.prj p,
	.hobby p {
		margin-left: 2rem;
	}
	.job li,
	.prj li {
		list-style: none;
	}
</style>
