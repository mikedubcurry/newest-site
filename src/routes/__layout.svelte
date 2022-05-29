<script lang="ts">
	import { browser } from '$app/env';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import MobileNavBtn from '$lib/mobile/MobileNavBtn.svelte';
	import MobileNavLinks from '$lib/mobile/MobileNavLinks.svelte';
	import NavLinks from '$lib/NavLinks.svelte';
	import '../app.css';
	import OtherLinks from '$lib/OtherLinks.svelte';

	let w: number;

	function handleMenuBtnChange() {
		mobileBtnClicked = !mobileBtnClicked;
	}
	function resetMobileBtn() {
		mobileBtnClicked = false;
	}
	let mobileBtnClicked = false;
	$: {
		if (browser) {
			w = window.innerWidth;
		}
	}
</script>

<svelte:body on:click={resetMobileBtn} />
<div class="wrapper">
	<MobileNavBtn on:menubtnchange={handleMenuBtnChange} isX={mobileBtnClicked} />

	<Header />

	<MobileNavLinks on:menubtnchange={resetMobileBtn} visible={mobileBtnClicked}>
		<NavLinks slot="nav-links" />
		<OtherLinks slot="other-links" />
	</MobileNavLinks>

	<main class:blurred={mobileBtnClicked} on:click={resetMobileBtn}>
		<slot />
	</main>
	<Footer />
</div>

<style>
	main {
		max-width: calc(100vw - 128px - 4rem);
		overflow-x: hidden;
		margin: 0 auto;
		transition: all .5s ease;
	}

	.blurred {
		filter: blur(4px);
		transform: translateY(10px);
	}

	.wrapper {
		padding-bottom: 2.5rem;
		min-height: 100vh;
		position: relative;
		width: 100%;
	}
	@media screen and (max-width: 600px) {
		main {
			margin-inline: 2rem;
			max-width: unset;
		}
	}
</style>
