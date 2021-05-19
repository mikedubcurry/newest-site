<script lang="ts">
	let year = new Date().getFullYear();
</script>

<footer>
	{#if year - 2021 === 0}
		<span>{year} Made with 💜 in <a href="https://kit.svelte.dev/">SvelteKit</a></span>
	{/if}
</footer>
