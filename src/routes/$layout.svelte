<script lang="ts">
	import { browser } from '$app/env';

	import Header from '../lib/Header/index.svelte';
	import MobileNav from '../lib/MobileNav/index.svelte';
	import MobileNavLinks from '../lib/MobileNavLinks/index.svelte';
	import OtherLinks from '../lib/OtherLinks/index.svelte';
	import NavLinks from '../lib/NavLinks/index.svelte';
	import Footer from '../lib/Footer/index.svelte';
	import '../app.css';
	let w: number;
	if (browser) {
		console.log(window.innerWidth);
		w = window.innerWidth;
	}
	function handleMenuBtnChange() {
		mobileBtnClicked = !mobileBtnClicked;
	}
	function resetMobileBtn() {
		mobileBtnClicked = false;
	}
	let mobileBtnClicked = false;
	$: console.log(mobileBtnClicked);
</script>

{#if w < 600}
	<MobileNav on:menubtnchange={handleMenuBtnChange} isX={mobileBtnClicked} />
{/if}
<MobileNavLinks mobile={w < 600} on:menubtnchange={resetMobileBtn} visible={mobileBtnClicked || w > 600}>
	<NavLinks on:menubtnchange={resetMobileBtn} slot="nav-links" />
	<OtherLinks slot="other-links" />
</MobileNavLinks>

<Header />
<main on:click={resetMobileBtn}>
	<slot />
</main>

<!-- {:else}
	<NavLinks />
	<main on:click={resetMobileBtn}>
		<slot />
	</main>
	<OtherLinks />
	<Footer />
{/if} -->
<style>
	main {
		width: 100%;
		box-sizing: border-box;
	}
</style>
