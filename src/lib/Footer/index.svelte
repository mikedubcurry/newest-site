<script>
	let year = new Date().getFullYear();
</script>

<footer>
	<div>Made with ❤️,</div>
	<div>and Svelte Kit {year}</div>
</footer>

<style>
	footer {
		color: var(--text-color);
		margin-inline-start: 1rem;
		margin-block-end: 1rem;
		position: fixed;
		bottom: 0;
		left: 0;
	}
</style>
