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
		height: 35vh;
		/* width: 10vw; */
		z-index: 15;
		/* position: fixed; */
		top: 15vh;
		right: 0;
		margin-inline-end: 1rem;
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
	li {
		margin-block-end: 3rem;
	}
</style>
