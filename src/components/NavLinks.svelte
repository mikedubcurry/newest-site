<script lang="ts">
	import { base } from '$app/paths';
</script>

<nav>
	<ul>
		<li>
			<a sveltekit:prefetch href={`${base}/`}>Home</a>
		</li>
		<li><a sveltekit:prefetch href={`${base}/about`}>About</a></li>
		<li><a sveltekit:prefetch href={`${base}/blog`}>Blog</a></li>
		<!-- <li><a href={`${base}/fun`}>Fun</a></li> -->
	</ul>
</nav>

<style>
	nav {
		height: 100%;
	}
	ul {
		font-weight: 600;
		background-color: #a4acf5;
		background-color: var(--accent-color-light-alpha, #a4acf5);
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
	nav a {
		text-decoration: none;
		color: var(--text-color-dark);
		font-weight: bold;
		transition: color .2s ease;
	}
	nav a:hover {
		color: var(--tertiary-color);
	}
</style>
