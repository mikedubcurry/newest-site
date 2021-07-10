<script lang="ts">
	import { onMount } from 'svelte';
	let shadowOffset: number = 0;
	let blur = 10;
	let shadowLimit = 50;
	let center;
	let height;
	onMount(() => {
		center = window.innerWidth / 2;
		height = window.innerHeight;
		let event: string = 'ontouchstart' in document.documentElement ? 'touchmove' : 'mousemove';
		document.body.addEventListener(event, (e: MouseEvent | TouchEvent) => {
			let x =
				e.type === 'touchmove' ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
			let y =
				e.type === 'touchmove' ? (e as TouchEvent).touches[0].clientY : (e as MouseEvent).clientY;
			blur = y / 50 < 8 ? 8 : y / 50;
			if (x > center) {
				if (Math.abs(center - x) / 10 < shadowLimit)
					shadowOffset = (-1 * Math.abs(center - x)) / 10;
				else shadowOffset = -1 * shadowLimit;
			} else {
				if (Math.abs(center - x) / 10 < shadowLimit) shadowOffset = Math.abs(center - x) / 10;
				else shadowOffset = shadowLimit;
			}
		});
	});
</script>

<header>
	<span class="hidden">ay lmao</span>
	<h1 style="text-shadow: {shadowOffset}px -8px {blur}px var(--medium-gray);">Mike Curry</h1>
</header>

<style>
	h1 {
		margin: 0;
		font-family: Roboto-mono;
		font-weight: 400;
		/* text-shadow: 0 -8px 10px var(--dark-gray); */
		/* transition: text-shadow .1s ease; */
	}

	header {
		margin: 0;
		height: calc((50px + 4rem) * 2);
		width: 100%;
		position: sticky;
		top: 0;
		text-align: center;
		z-index: 15;
	}
	header::before {
		position: absolute;
		top: 0;
		left: 0;
		height: calc((50px + 4rem) * 2);
		z-index: -5;
		width: 100%;
		content: '';
		background-image: linear-gradient(
			var(--light-gray),
			var(--primary-color) 60%,
			var(--primary-color-alpha),
			#ffffff00 90%
		);
		transition: height 0.3s ease;
	}
	header:hover::before {
		height: calc(50px + 6rem);
	}
	@media(prefers-reduced-motion: reduce) {
		h1 {
			text-shadow: none !important;
		}
	}
	.hidden {
		color: transparent !important;
		position: absolute;
		right: 20%;
		top: 20px;
	}
</style>
