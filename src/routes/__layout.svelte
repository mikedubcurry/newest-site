<script lang="ts">
	import { browser } from '$app/env';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import MobileNavBtn from '../components/mobile/MobileNavBtn.svelte';
	import MobileNavLinks from '../components/mobile/MobileNavLinks.svelte';
	import NavLinks from '../components/NavLinks.svelte';
	import '../app.css';
	import OtherLinks from '../components/OtherLinks.svelte';

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

{#if w < 600}
	<MobileNavBtn on:menubtnchange={handleMenuBtnChange} isX={mobileBtnClicked} />
{/if}

<Header />

<MobileNavLinks on:menubtnchange={resetMobileBtn} visible={mobileBtnClicked} mobile={w < 600}>
	<NavLinks slot="nav-links" />
	<OtherLinks slot="other-links" />
</MobileNavLinks>

<main on:click={resetMobileBtn}>
	<slot />
</main>
<Footer />

<style>
	main {
		max-width: calc(100vw - 128px - 2rem);
		overflow-x: hidden;
		margin: 0 auto;
	}

	@media screen and (max-width: 600px) {
		main {
			margin-inline: 2rem;
			max-width: unset;
		}
	}
</style>
