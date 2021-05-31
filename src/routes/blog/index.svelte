<script context="module" lang="ts">
	export async function load({ page, fetch }) {
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
</script>

<h1>Blog Posts</h1>

{#each posts as post}
	<article>
		<h2><a href={`/blog/${post.slug}`}>{post.title}</a></h2>
		{#each post.tags as tag}
			<span>{tag}</span>&nbsp;
		{/each}
		<p>{post.summary}</p>
	</article>
{/each}

<style>
	article {
		max-width: 800px;
		transition: background-color .3s ease; 
		padding: 2rem;
		border-radius: 14px;
	}
	h2 {
		margin-block-start: 0;
	}
	a {
		font-size: var(--medium-font-size)
	}

	span {
		background-color: var(--secondary-color);
		border-radius: 14px;
		transition: background-color .3s ease; 
		padding: 0.5rem;
	}

	article:hover {
		background-color: var(--secondary-color);
	}
	article:hover span {
		background-color: var(--primary-color);
	}
</style>
