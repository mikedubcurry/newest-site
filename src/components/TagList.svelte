<script lang="ts">
	import { fly } from 'svelte/transition';
	export let selectedTags;
	export let allTags;

	function clickTag(e: MouseEvent) {
		let span = e.target as HTMLSpanElement;
		const tag = span.innerText;
		if (!selectedTags.includes(tag)) selectedTags = [...selectedTags, tag];
		else selectedTags = selectedTags.filter((t) => t !== tag);
	}
</script>

<ul class="tag-list">
	{#each allTags as tag}
		<li class="tag" class:selected={selectedTags.includes(tag)} on:click={clickTag}>{tag}</li>
		&nbsp;
	{/each}
	{#if selectedTags.length}
		<li
			class="tag clear"
			in:fly={{ x: -50, duration: 200 }}
			out:fly={{ x: -50, duration: 200 }}
			on:click={() => (selectedTags = [])}
		>
			clear
		</li>
	{/if}
</ul>

<style>
	.tag.selected {
		border: 2px var(--accent-color) solid;
	}

	.tag {
		background-color: var(--secondary-color);
		border: 2px solid var(--secondary-color);
		border-radius: 14px;
		transition: background-color 0.3s ease;
		padding: 0.5rem;
		cursor: pointer;
		margin-block-end: 1rem;
		height: fit-content;
		z-index: 10;
	}
	.clear {
		background-color: var(--warn-color);
		border: 2px solid var(--warn-color);
		z-index: 9;
	}
	.tag-list {
		position: relative;
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	.tag-list .selected {
		border: 2px var(--accent-color) solid;
	}
</style>
