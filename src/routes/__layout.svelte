<script lang="ts">
	import { browser } from '$app/env';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import MobileNavBtn from '../components/mobile/MobileNavBtn.svelte'
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
	<MobileNavBtn on:menubtnchange={handleMenuBtnChange} isX={mobileBtnClicked} />
{/if}

<Header />

<main on:click={resetMobileBtn}>
	<slot />
</main>
<Footer />

<style>
	main {
		max-width: 1024px;
		overflow-x: hidden;
		margin-inline: 1rem;
	}
</style>
