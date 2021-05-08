<script lang="ts">
	import ghLogo from './github-logo.svg';
	import svelteLogo from './svelte-logo.svg';
	import twitterLogo from './twitter-logo.svg';
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
		max-height: 100%;
		z-index: 15;
		margin-inline-start: 1rem;
		padding-inline-start: 1rem;
		padding-inline-end: 1rem;
		background-color: var(--tertiary-color-alpha);
		border-radius: 3rem 0 0 3rem;
	}
	img {
		width: 24px;
	}
	ul {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		list-style: none;
		height: 100%;
	}

	ul:first-child {
		margin-block-start: 3rem;
	}
	li {
		margin-block-end: 3rem;
	}

	@media screen and (min-width: 400px) {
		nav {
			width: 5vw;
		}
	}
</style>
