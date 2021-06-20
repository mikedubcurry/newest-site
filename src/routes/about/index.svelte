<script context="module" lang="ts">
	export async function load({ fetch }) {
		const res = await fetch('/about.json');
		if (res.ok) {
			let about = await res.json();
			return {
				props: {
					about
				}
			};
		}
	}
</script>
<script lang="ts">
  export let about;
  console.log(about);
  
</script>

<h1>About Me</h1>

<style>

</style>