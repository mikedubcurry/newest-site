<header>
	<span class="hidden">ay lmao</span>
	<h1 >Mike Curry</h1>
</header>

<style>
	h1 {
		margin: 0;
		font-family: Roboto-mono;
		font-weight: 400;
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

	.hidden {
		color: transparent !important;
		position: absolute;
		right: 20%;
		top: 20px;
	}
</style>
