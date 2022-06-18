<script lang="ts">
	import Poll from '$lib/Poll.svelte';
	// import BankAccount from '$lib/widgets/BankAccount.svelte';
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
	let bioLength;

	$: console.log(bioLength);
	onMount(async () => {
		let pollData = await getPoll();
		poll = pollData?.poll;
	});
</script>

<svelte:head>
	<title>Mike Curry - Home</title>
</svelte:head>

<section>
	<h1>Hey there!</h1>
	<label for="bio-length"> Bio Length </label>
	<select id="bio-length" bind:value={bioLength}>
		<option value="short">Short</option>
		<option value="medium">Medium</option>
		<option value="long">Long</option>
	</select>
	<div class="bio" class:visible={bioLength === 'short'}>
		<p>I'm Mike and I build on the web.</p>
	</div>
	<div class="bio" class:visible={bioLength === 'medium'}>
		<p>
			My name is Michael, and I am a web developer. My experiences span across the stack, but I have
			primarily been focusing on backend as of late. I currrently work as a devloper at Troy Web
			Consulting.
		</p>
	</div>
	<div class="bio" class:visible={bioLength === 'long'}>
		<p>
			My name is Michael Curry, and I am a software engineer from the Hudson Valley. I live in
			Saugerties, NY and work in the Capital Region at Troy Web Consulting.
		</p>
		<p>
			I have been coding for about five years at the time of writing this (mid 2022). JavaScript is
			my language of choice but I can be productive writing PHP. Both languages allow me the freedom
			to work across the stack from the frontend to the database.
		</p>
	</div>
</section>
<section>
	<h2>Some Fun Things I Made</h2>

	<div class="game-card">
		<h3>Tank Target Practice</h3>
		<p>Control a tank and fire projectiles over a wall and hit the target!</p>
	</div>

	<div class="game-card">
		<h3>Bomb-Duster</h3>
		<p>Choose between 3 difficulty levels and dust for bombs in this fun puzzle game!</p>
	</div>
	<div class="game-card">
		<h3>JS-808</h3>
		<p>Make a beat with 808-ish drum samples!</p>
	</div>
</section>

<!-- {#if poll}
	<Poll question={poll.question} answers={poll.answers} votes={poll.votes} on:vote={handleVote} />
{/if} -->
<style>
	p {
		font-size: 1.6rem;
	}
	.bio {
		display: none;
	}
	.bio.visible {
		display: block;
	}
</style>
