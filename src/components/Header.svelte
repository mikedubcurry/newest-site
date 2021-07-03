<script lang="ts">
</script>

<header>Mike Curry</header>

<style>
	header {
		height: calc((50px + 4rem) * 2);
		width: 100%;
		position: sticky;
		top: 0;
		text-align: center;
		z-index: 15;
		/* background-color: var(--light-gray); */
		/* background-image: linear-gradient(
			var(--light-gray),
			var(--primary-color) 60%,
			var(--primary-color-alpha)
		);
		transition: background-image 1s ease; */
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
			var(--primary-color-alpha)
		);
		transition: height .3s ease;
	}
	header:hover::before {
		height: calc(50px + 4rem);
	}
</style>
