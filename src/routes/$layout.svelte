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

{#if w < 600}
	<MobileNav on:menubtnchange={handleMenuBtnChange} isX={mobileBtnClicked} />
{/if}
<MobileNavLinks
	mobile={w < 600}
	on:menubtnchange={resetMobileBtn}
	visible={mobileBtnClicked || w > 600}
>
	<NavLinks on:menubtnchange={resetMobileBtn} slot="nav-links" />
	<OtherLinks slot="other-links" />
</MobileNavLinks>

<Header />
<main on:click={resetMobileBtn}>
	<slot />
</main>

<style>
	main {
		width: 100%;
		box-sizing: border-box;
	}
	@media screen and (max-width: 600px) {
	}
</style>
