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
	}
	.navLinks {
		visibility: hidden;
	}
	.otherLinks {
		visibility: hidden;
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
