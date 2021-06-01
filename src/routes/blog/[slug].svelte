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
</script>

<script lang="ts">
  export let post
</script>

{@html post.content}
