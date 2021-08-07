<script lang="ts">
	export let visible: boolean;
</script>

<span class="navLinks" class:visible>
	<slot name="nav-links" />
</span>

<span class="otherLinks" class:visible>
	<slot name="other-links" />
</span>

<style>
	span {
		position: fixed;
		top: calc((50px + 4rem) * 2);
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
		right: -25%;
	}
	span.otherLinks {
		left: unset;
	}

	.visible {
		visibility: visible;
		left: 0;
	}
	.visible.otherLinks {
		right: 0;
	}
	@media screen and (min-width: 600px) {
		.otherLinks {
			right: 0;
			visibility: visible;
		}
		.navLinks {
			left: 0;
			visibility: visible;
		}
	}
</style>
