<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<nav>
	<ul>
		<li>
			<a sveltekit:prefetch href="/">Home</a>
		</li>
		<li><a sveltekit:prefetch href="/about">About</a></li>
		<li><a sveltekit:prefetch href="/blog">Blog</a></li>
	</ul>
</nav>

<style>
	nav {
		height: 100%;
	}
	ul {
		background-color: var(--accent-color-light-alpha);
		border-radius: 0 4rem 4rem 0;
		list-style-type: none;
		padding-inline: 1rem;
		height: 100%;
		max-width: 64px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
</style>
