<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let visible: boolean;
	export let mobile: boolean;
	const dispatch = createEventDispatcher();
</script>

<span class="navLinks" class:visible class:mobile>
	<slot name="nav-links" />
	<span
		on:click={() => {
			dispatch('menubtnchange');
		}}
		class="spacer"
	/>
	<slot name="other-links" />
</span>

<style>
	span {
		position: fixed;
		top: 20vh;
		left: -25%;
		/* transition: all 0.3s ease; */
		height: 50vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.mobile {
		width: 150vw;
	}
	.visible {
		left: 0;
		width: 100vw;
	}
	.spacer {
		justify-self: center;
		z-index: -10;
		left: 0;
		height: 100%;
		width: 100%;
	}
</style>
