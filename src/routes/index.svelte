<!-- <script lang="ts" context="module">
	export const load: Load = async ({ fetch,url }) => {
		const response = await fetch(`${url}/votes`);
		// if (response.ok) {
// console.log( response.text());

			
		// const poll = await response.json();

		return {
			status: 200,
		};
		// }
	};
</script> -->
<script lang="ts">
	import Poll from '$lib/Poll.svelte';
	import { onMount } from 'svelte';

	async function getPoll() {
		const response = await fetch('/votes');
		if (response.ok) {
			return await response.json();
		} else {
			throw Error('something went wrong...');
		}
	}

	async function handleVote(e: CustomEvent) {
		let votedOn: string = e.detail;

		let response = await fetch('/votes', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ vote: votedOn }),
		});

		if (response.ok) {
			let pollData = await response.json();
			poll = pollData.poll;
		}
	}

	let poll;

	onMount(async () => {
		let pollData = await getPoll();
		poll = pollData.poll;
		// console.log(poll);
	});
</script>

<svelte:head>
	<title>Mike Curry - Home</title>
</svelte:head>

<section>
	<h1>Hey there!</h1>
	<p>Do you like the web? Do you think the Internet is neat?</p>
	<p class="answer"><strong>I do too!</strong></p>
</section>

{#if poll}
	<Poll question={poll.question} answers={poll.answers} votes={poll.votes} on:vote={handleVote} />
{/if}

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
