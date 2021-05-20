<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { quintInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	export let isX: boolean;
	const dispatch = createEventDispatcher();
	const deltaY = tweened(0, {
		duration: 400,
		easing: quintInOut,
		delay: 0
	});
	const deltaX = tweened(1, {
		duration: 400,
		easing: quintInOut,
		delay: 0
	});
	function handleClick(e: MouseEvent) {
		e.stopPropagation();
		if (!isX) {
			if ($deltaX === 1) $deltaX = 0;
			if ($deltaY === 0) $deltaY = 1;
		} else {
			if ($deltaY === 1) $deltaY = 0;
			if ($deltaX === 0) $deltaX = 1;
		}
		dispatch('menubtnchange');
	}
	$: {
		if (!isX) {
			$deltaX = 1;
			$deltaY = 0;
		} else {
			$deltaX = 0;
			$deltaY = 1;
		}
	}
</script>

<div on:click={handleClick}>
	<svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
		<line
			x1="1"
			x2="24"
			y1="2"
			y2={25 * $deltaY + ($deltaY < 0.5 ? 2 : -2)}
			stroke="black"
			stroke-width="4"
		/>
		<line x1="1" x2={23 * $deltaX + 1} y1="12" y2="12" stroke="black" stroke-width="4" />
		<line
			x1="1"
			x2="24"
			y1="23"
			y2={25 * $deltaX + ($deltaX < 0.5 ? 3 : -2)}
			stroke="black"
			stroke-width="4"
		/>
	</svg>
</div>

<style>
	div {
		position: fixed;
		z-index: 25;
		top: 2rem;
		right: 2rem;
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
