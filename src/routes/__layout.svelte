<script lang="ts">
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import '../app.css';
</script>

<Header />
<main>
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
