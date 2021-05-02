<script lang="ts">
	import Header from '../lib/Header/index.svelte';
	import OtherLinks from '../lib/OtherLinks/index.svelte';
	import Footer from '../lib/Footer/index.svelte'
	import '../app.css';
</script>

<Header />
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
