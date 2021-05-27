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
</style>
