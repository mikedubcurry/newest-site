<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { page } from '$app/stores';

	const dispath = createEventDispatcher();

	function linkClick() {
		dispath('menubtnchange');
	}

	$: path = $page.path;
</script>

<nav>
	<ul>
		<li class:active={path === '/'} class="linkitem">
			<a on:click={linkClick} sveltekit:prefetch href="/">Home</a>
		</li>
		<li class:active={path === '/about'} class="linkitem">
			<a on:click={linkClick} sveltekit:prefetch href="/about">About</a>
		</li>
		<li class:active={path === '/blog'} class="linkitem">
			<a on:click={linkClick} sveltekit:prefetch href="/blog">Blog</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		max-height: 100%;
		width: 10vw;
		padding-inline-start: 1rem;
		padding-inline-end: 1rem;
		z-index: 15;
		background-color: var(--tertiary-color-alpha);
		border-radius: 0 3rem 3rem 0;
	}
	li {
		margin-block-end: 3rem;
	}

	ul:first-child {
		margin-block-start: 3rem;
	}
	a {
		color: var(--text-color-light);
	}
	li.active a {
		color: var(--accent-color-light);
	}
	ul {
		display: flex;
		list-style: none;
		justify-content: space-between;
		flex-direction: column;
		height: 100%;
		/* padding-block-end: 3rem; */
	}

	@media screen and (min-width: 400px) {
		nav {
			width: 5vw;
		}
	}
</style>
