<script lang="ts">
	import ghLogo from '$lib/github-logo.svg';
	import svelteLogo from '$lib/svelte-logo.svg';
	import twitterLogo from '$lib/twitter-logo.svg';
</script>

<nav>
	<ul>
		<li>
			<a href="https://github.com/mikedubcurry"><img src={ghLogo} alt="github account" /></a>
		</li>
		<li>
			<a href="https://twitter.com/mikedubcurry"><img src={twitterLogo} alt="twitter profile" /></a>
		</li>
		<li>
			<a href="https://kit.svelte.dev/"><img src={svelteLogo} alt="built with svelte" /></a>
		</li>
	</ul>
</nav>

<style>
	nav {
		height: 100%;
	}
	ul {
		font-weight: 600;
		background-color: var(--accent-color-light-alpha, #a4acf5);
		border-radius: 4rem 0 0 4rem;
		list-style-type: none;
		padding-inline: 1rem;
		height: 100%;
		min-width: 64px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
</style>
