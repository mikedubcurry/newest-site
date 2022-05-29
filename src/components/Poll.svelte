<script lang="ts">
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	export let question: string = "What's your favorite color?";
	export let answers: [string, string, string, string] = ['red', 'yellow', 'blue', 'show results'];
	export let votes: {
		[key: string]: number;
	} = answers.reduce((votes, answer) => {
		votes[answer] = Math.floor(Math.random() * 10);
		return votes;
	}, {});

	let voted: boolean = false;
	let results: [string, number][];
	$: results = Object.keys(votes)
		.filter((answer) => answer !== 'show results')
		.map((answer) => {
			return [answer, votes[answer]];
		});
	$: totalVotes = Object.keys(votes).reduce((total, answer) => {
		return votes[answer] + total;
	}, 0);
	$: totalVotesThatCount = results.reduce((total, [_, votes]) => {
		return total + votes;
	}, 0);
	$: winningVotes = results.reduce((win, [answer, votes], idx, array) => {
		if (votes >= win) {
			return votes;
		}
		return win;
	}, -Infinity);

	function vote(e) {
		e.preventDefault();
		let votedOn = document.querySelector<HTMLInputElement>("input[name='answer']:checked").value;
		votes[votedOn] += 1;
		voted = true;
	}

	if (browser) voted = JSON.parse(window.localStorage.getItem(`poll-${question}`) || 'false');
	$: {
		if (browser) window.localStorage.setItem(`poll-${question}`, JSON.stringify(voted));
	}
</script>

<section>
	<header>
		<p>{question}</p>
	</header>
	<form on:submit={vote}>
		<fieldset>
			{#if voted}
				{#each results as [answer, numberOfVotes], i}
					<div class="result" style={`--votes: ${(numberOfVotes / totalVotesThatCount) * 100}%`}>
						<span class="results-bar" />
						<span>{answer}</span>
						<span><span class:winner={numberOfVotes === winningVotes} />{numberOfVotes}</span>
					</div>
				{/each}
			{:else}
				{#each answers as answer, i}
					<div class="answer">
						<label for={`poll-answer-${i}`}>{answer}</label>
						<input value={answer} required type="radio" name="answer" id={`poll-answer-${i}`} />
					</div>
				{/each}
				<input type="submit" value="Vote" />
			{/if}
			<span class="total-votes">{totalVotes} total votes</span>
		</fieldset>
	</form>
</section>

<style>
	section {
		border: 1px dotted var(--accent-color);
		padding: 16px;
		border-radius: 8px;
		max-width: 500px;
		margin: 0 auto;
	}
	header {
		border-radius: 8px 8px 0 0;
		background-color: var(--secondary-color);
		margin: -16px -16px 16px -16px;
		padding: 8px 16px;
	}
	fieldset {
		border: none;
	}
	label {
		width: 100%;
	}
	input[type='submit'] {
		width: 100%;
		border-radius: 8px;
		border: none;
		margin: 8px 0 0;
		padding: 8px;
	}
	.answer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 8px;
		border: 1px solid transparent;
		transition: border-color 0.2s ease;
		padding: 0 8px;
		border-radius: 4px;
	}
	.result {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 8px;
		padding: 0 8px;
		position: relative;
	}
	.winner::before {
		content: '⭐';
		margin-right: 8px;
	}
	.result span {
		z-index: 1;
	}
	.results-bar {
		position: absolute;
		top: 0;
		left: 0;
		content: '';
		width: 0;
		height: 100%;
		background-color: var(--accent-color-light-alpha);
		animation: showVotes 1.5s ease forwards;
	}
	.answer:hover {
		border: 1px solid var(--tertiary-color);
	}
	p {
		text-indent: 0;
	}
	@keyframes showVotes {
		to {
			width: var(--votes);
		}
	}
</style>
