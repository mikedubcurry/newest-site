<script lang="ts">
	import { page } from '$app/stores';
	$: path = $page.path;
</script>

<header>
	<div class="name">Mike<span class="lastname">Curry</span></div>
	<nav>
		<ul>
			<li class:active={path === '/'} class="linkitem">
				<a sveltekit:prefetch href="/">Home</a>
			</li>
			<li class:active={path === '/about'} class="linkitem">
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={path === '/blog'} class="linkitem">
				<a sveltekit:prefetch href="/blog">Blog</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	/* a {
		color: black;

	} */
	.name {
		display: flex;
		flex-direction: column;
	}
	header {
		/* background: linear-gradient(var(--secondary-color), var(--primary-color)); */
		position: fixed;
		top: 0;
		left: 0;
	}
	nav {
		width: 10vw;
	}
	li {
		margin-block-end: 3rem;
	}
	li.active a{
		color: var(--accent-color);
	}
	ul {
		display: flex;
		list-style: none;
		justify-content: space-around;
		flex-direction: column;
		/* width: 50%; */
	}
	@media screen and (min-width: 500px) {
		.name {
			flex-direction: row;
		}
		.lastname {
			margin-inline-start: 0.5rem;
		}
	}
</style>
