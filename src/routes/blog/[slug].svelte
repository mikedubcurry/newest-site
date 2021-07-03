<script context="module" lang="ts">
	export async function load({ page: { params }, fetch }) {
		const res = await fetch(`/blog/${params.slug}.json`);
		if (res.ok) {
			let post = await res.json();

			return {
				props: {
					post
				}
			};
		}
	}
	export const prerender = true;
</script>

<script lang="ts">
	export let post;
</script>

<svelte:head><title>Mike Curry - {post.data.title}</title></svelte:head>

{@html post.content}
