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
		width: 10vw;
    position: fixed;
    top: 0;
    right: 0;
	}
	img {
		width: 24px;
	}
	ul {
		list-style: none;
	}
	li {
		margin-block-end: 3rem;
	}
</style>
