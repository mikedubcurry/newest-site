<script lang="ts">
	import Card from '../lib/Card.svelte';
	import ThemeToggle from '$lib/ThemeToggle.svelte';
</script>

<h1>Michael Curry</h1>
<hr />

<div class="block">
	<h2>Work</h2>
	<section>
		<Card>
			<h3>Developer</h3>
			<p>Currently working as a developer at <a href="https://troyweb.com">Troy Web</a>.</p>
			<p>Building full stack web applications with Laravel and React.</p>
		</Card>

		<Card>
			<h3>JavaScript Application Developer</h3>
			<p>Atlas Copco</p>
			<p>Built dashboard applications with SAP Fiori and BW4HANA.</p>
		</Card>
	</section>
</div>

<div class="block">
	<h2>Personal Stuff</h2>
	<section>
		<Card>
			<h3>Github</h3>
			<p>Check out my <a href="https://github.com/mikedubcurry">GitHub profile</a>.</p>
			<p>
				I am interested in frontend technologies, but I also have a lot of experience with backend
				and serverless technologies.
			</p>
		</Card>
		<Card>
			<h3>Soundcloud</h3>
			<p>Check out my <a href="https://soundcloud.com/mikedubcurry">Soundcloud</a>.</p>
			<p>I mostly make electronic music, but I also make some rap beats.</p>
		</Card>
	</section>
</div>
<div class="block">
	<h2>Fun Stuff</h2>
	<section>
		<Card>
			<h3>Minesweeper</h3>
			<p>Play a game of <a href="https://mikedubcurry.github.io/minesweeper">Minesweeper</a>.</p>
		</Card>
		<Card>
			<h3>Tank Game</h3>
			<p>Play a game of <a href="https://mikedubcurry.github.io/tank-game">Tank Game</a>.</p>
		</Card>
		<Card>
			<h3>Make a Beat</h3>
			<p>Make a beat with <a href="https://mikedubcurry.github.io/browser-daw">Browser Daw</a>.</p>
		</Card>
	</section>
</div>

<style>
	h1 {
		text-align: right;
		padding-right: 0.25rem;
		font-size: 4rem;
		margin: 3rem 0;
	}
	h2 {
		font-size: 2.5rem;
	}
	.block {
		margin: 2rem 0;
		display: flex;
		gap: 1rem;
		flex-direction: column;
		justify-content: space-between;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	@media (min-width: 800px) {
		section {
			align-items: flex-end;
		}
		.work {
			flex-direction: row;
		}
	}
</style>
