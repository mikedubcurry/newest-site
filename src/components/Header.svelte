<script lang="ts">
	let y;
	let wobble = false;
	let timeout;
	$: {
			if (y < 0 && !wobble) {
				wobble = true;
				timeout = setTimeout(() => {
					wobble = false;
					clearTimeout(timeout);
				}, 2000);
			}
	}
	function handleScroll() {
		y = window.scrollY;
	}
</script>

<svelte:window on:scroll={handleScroll} />
<header>
	<h1 class:wobble>Mike Curry</h1>
</header>

<style>
	h1 {
		margin: 0;
		font-family: Roboto-mono;
		font-weight: 400;
		will-change: transform;
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
	@media (prefers-reduced-motion: no-preference) {
		.wobble {
			animation: wobble 1s ease forwards;
			animation-delay: 0.3s;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.wobble {
			animation: none !important;
		}
	}
	@keyframes wobble {
		0% {
			transform: translateY(0px);
		}

		20% {
			transform: translateY(-3px);
		}

		100% {
			transform: translateY(0);
		}
	}
</style>
