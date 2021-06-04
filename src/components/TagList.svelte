<script lang="ts">
	export let selectedTags;
	export let allTags;

  function clickTag(e: MouseEvent) {
		let span = e.target as HTMLSpanElement;
		const tag = span.innerText;
		if (!selectedTags.includes(tag)) selectedTags = [...selectedTags, tag];
		else selectedTags = selectedTags.filter((t) => t !== tag);
	}
</script>

{#each allTags as tag}
	<span class="tag-list" class:selected={selectedTags.includes(tag)} on:click={clickTag}>{tag}</span
	>&nbsp;
{/each}
{#if selectedTags.length}
	<span on:click={() => (selectedTags = [])}>clear</span>
{/if}

<style>
	.tag-list.selected {
		border: 2px var(--accent-color) solid;
	}
	span {
		background-color: var(--secondary-color);
		border-radius: 14px;
		transition: background-color 0.3s ease;
		padding: 0.5rem;
		cursor: pointer;
	}
</style>
