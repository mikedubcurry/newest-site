<script lang="ts">
	export let visible: boolean;
	export let mobile: boolean;
</script>

<span class="navLinks" class:visible class:notMobile={!mobile}>
	<slot name="nav-links" />
</span>

<span class="otherLinks" class:visible class:notMobile={!mobile}>
	<slot name="other-links" />
</span>

<style>
	span {
		position: fixed;
		top: 20vh;
		left: -25%;
		transition: all 0.3s ease;
		height: 50vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 25;
	}
	.navLinks {
		visibility: hidden;
		border-radius: 0 4rem 4rem 0;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
			0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
	}
	.otherLinks {
		visibility: hidden;
		border-radius: 4rem 0 0 4rem;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
			0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
	}
	span.otherLinks {
		left: unset;
		right: -25%;
	}
	span.otherLinks.notMobile {
		right: 0;
	}
	span.navLinks.notMobile {
		left: 0;
	}
	.notMobile {
		visibility: visible;
	}

	.visible {
		visibility: visible;
		left: 0;
		/* width: 100vw; */
	}
	.visible.otherLinks {
		right: 0;
	}
</style>
