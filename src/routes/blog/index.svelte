<script context="module" lang="ts">
	export async function load({ page, fetch }) {
		const res = await fetch('/blog.json');
		if (res.ok) {
			let data = await res.json();
      console.log(data);
      
			return {
				status: 200,
				body: data
			};
		} else {
			console.log('res bad', res);
			return {
				status: 500,
				body: 'hi'
			};
		}
	}
</script>

<script lang="ts">
	console.log('props', $$props);	
</script>

<h1>Blog Posts</h1>
