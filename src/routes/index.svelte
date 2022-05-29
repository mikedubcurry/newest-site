<script lang="ts">
	import Poll from '$lib/Poll.svelte';
import { onMount } from 'svelte';
</script>

<svelte:head>
	<title>Mike Curry - Home</title>
</svelte:head>

<section>
	<h1>Hey there!</h1>
	<p>Do you like the web? Do you think the Internet is neat?</p>
	<p class="answer"><strong>I do too!</strong></p>
</section>

<Poll  question="What's your favorite web programming language?" answers={['JavaScript', 'HTML', 'CSS', 'PHP']}/>

<style>
	p {
		font-size: 1.6rem;
	}
	strong {
		font-size: 1.5em;
		text-transform: uppercase;
	}
	.answer {
		text-align: right;
		margin-right: 2rem;
	}
</style>
