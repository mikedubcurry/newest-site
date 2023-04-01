<script>
	import { themeStore } from '../stores/ThemeStore';
	import { tweened } from 'svelte/motion';

	let rays = Array.from({ length: 9 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]

	const rayLength = tweened($themeStore === 'light' ? 8 : 0, {
		duration: 200,
		easing: (t) => t * (2 - t),
		delay: 200
	});

	const eclipse = tweened($themeStore === 'light' ? 60 : 18, {
		duration: 200,
		easing: (t) => t * (2 - t)
	});

</script>

<button
  aria-label="Toggle theme"
	on:click={() => {
		themeStore.set($themeStore === 'light' ? 'dark' : 'light');
		rayLength.set($themeStore === 'light' ? 8 : 0);
		eclipse.set($themeStore === 'light' ? 60 : 18);
	}}
>
	<svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
		<circle cx="15" cy="15" r="5" fill="var(--theme-action)" />
		<g transform="rotate(0) translate(15, 15)">
			{#each rays as ray}
				<line
					class:light={$themeStore === 'light'}
					class:dark={$themeStore === 'dark'}
					x1="0"
					y1="0"
					x2="0"
					y2={$rayLength}
					stroke="var(--theme-action)"
					stroke-width="1"
					transform={`rotate(${ray * 40})`}
				/>
			{/each}
		</g> <circle cx={$eclipse} cy="15" r="5" fill="var(--theme-bg)" />
	</svg>
</button>

<style>

	button {
		background: none;
		border: none;
		padding: 0;
		margin: 0;
    width: 3rem;
    height: 3rem;
	}

  button:hover {
    cursor: pointer;
  }
</style>
