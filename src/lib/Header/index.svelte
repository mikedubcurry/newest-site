<script lang="ts">
	import NavLinks from '../NavLinks/index.svelte';
		
</script>

<header>
	<div class="name">Mike<span class="lastname">Curry</span></div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
	}
	.name {
		margin-block-start: 1rem;
		margin-inline-start: 1rem;
		display: flex;
		flex-direction: column;
		font-size: 2.5rem;
	}

	@media screen and (min-width: 500px) {
		.name {
			color: var(--text-color);
			flex-direction: row;
		}
		.lastname {
			margin-inline-start: 0.5rem;
		}
	}
</style>
