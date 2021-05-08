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
		height: 35vh;
		width: 10vw;
		margin-inline-start: 1rem;
		z-index: 15;
		/* position: fixed; */
		top: 15vh;
		left: 0;
	}
	li {
		margin-block-end: 3rem;
	}
	a {
		color: var(--text-color);
	}
	li.active a {
		color: var(--accent-color);
	}
	ul {
		display: flex;
		list-style: none;
		justify-content: space-between;
		flex-direction: column;
		height: 100%;
		/* width: 50%; */
	}

	@media screen and (min-width: 400px) {
		nav {
			width: 5vw;
		}
	}
</style>
