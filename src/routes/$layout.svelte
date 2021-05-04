<script lang="ts">
	import {  browser } from '$app/env';

	import Header from '../lib/Header/index.svelte';
	import OtherLinks from '../lib/OtherLinks/index.svelte';
	import NavLinks from '../lib/NavLinks/index.svelte';
	import Footer from '../lib/Footer/index.svelte'
	import '../app.css';
let w: number
	if(browser) {
		console.log(window.innerWidth);
		w = window.innerWidth
	}
	
</script>

<Header />
<NavLinks />
<main>
	<slot />
</main>
<OtherLinks />
<Footer/>

<style>
	main {
		/* display: grid;
		grid-template-columns: 1fr 10fr 1fr; */
		/* flex: 1;
		display: flex;
		flex-direction: column; */
		width: 100%;
		/* max-width: 1024px; */
		/* margin: 0 auto; */
		box-sizing: border-box;
	}
</style>
