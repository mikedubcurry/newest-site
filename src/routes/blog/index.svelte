<script context="module" lang="ts">
	export async function load({ fetch }) {
		const res = await fetch('/blog.json');
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

<h1>Blog Posts</h1>

{#each allTags as tag}
	<span class="tag-list" class:selected={selectedTags.includes(tag)} on:click={clickTag}>{tag}</span
	>&nbsp;
{/each}
{#if selectedTags.length}
	<span on:click={() => (selectedTags = [])}>clear</span>
{/if}
{#each filteredPosts as post}
	<article>
		<h2><a href={`/blog/${post.slug}`}>{post.title}</a></h2>
		{#each post.tags as tag}
			<span on:click={clickTag}>{tag}</span>&nbsp;
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
	}

	h2 {
		margin-block-start: 0;
	}
	a {
		font-size: var(--medium-font-size);
	}
	
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

	article:hover {
		background-color: var(--secondary-color);
	}
	article:hover span {
		background-color: var(--primary-color);
	}
</style>
