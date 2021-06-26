<script context="module" lang="ts">
	import {base} from '$app/paths'
	export async function load({ fetch }) {
		const res = await fetch(`${base}/blog.json`);
		if (res.ok) {
			let posts = await res.json();
			return {
				props: {
					posts
				}
			};
		}
	}
</script>

<script lang="ts">
	export let posts: { title: string; slug: string; summary: string; tags: string[] }[];
	let selectedTags: string[] = [];
	const allTags: string[] = posts.reduce((t, { tags }) => {
		tags.forEach((tag) => {
			if (!t.includes(tag)) t.push(tag);
		});
		return t;
	}, []);

	function clickTag(e: MouseEvent) {
		let span = e.target as HTMLSpanElement;
		const tag = span.innerText;
		if (!selectedTags.includes(tag)) selectedTags = [...selectedTags, tag];
		else selectedTags = selectedTags.filter((t) => t !== tag);
	}
	$: filteredPosts = posts.filter(({ tags }) => {
		if (selectedTags.length) {
			return selectedTags.some((t) => tags.includes(t));
		} else return true;
	});
</script>

<svelte:head><title>Mike Curry - Blog</title></svelte:head>


<h1>Blog Posts</h1>

<ul class="tag-list">
	{#each allTags as tag}
		<li class="tag" class:selected={selectedTags.includes(tag)} on:click={clickTag}>{tag}</li>
		&nbsp;
	{/each}
	{#if selectedTags.length}
		<li class="tag clear" on:click={() => (selectedTags = [])}>clear</li>
	{/if}
</ul>

{#each filteredPosts as post}
	<article>
		<h2><a href={`/blog/${post.slug}`}>{post.title}</a></h2>
		{#each post.tags as tag}
			<span class="tag" on:click={clickTag}>{tag}</span>&nbsp;
		{/each}
		<p>{post.summary}</p>
	</article>
{/each}

<style>
	article {
		max-width: 800px;
		transition: background-color 0.3s ease;
		padding: 2rem;
		border-radius: 14px;
		margin-block-end: 2rem;
	}

	h2 {
		margin-block-start: 0;
	}

	a {
		font-size: var(--medium-font-size);
	}

	.tag-list {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	.tag-list .selected {
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
	}

	.clear {
		background-color: var(--warn-color);
		border: 2px solid var(--warn-color);
	}

	article:hover {
		background-color: var(--secondary-color);
	}

	article:hover span {
		background-color: var(--primary-color);
	}
</style>
