<script>
	import { dropdown } from './actions/dropdown';
	export let buttonText = '';
  export let style = '';
	export let isOpen = false;
</script>

<div>
	<button {style} on:click={() => (isOpen = !isOpen)}><span class:isOpen>&#9650;</span>{buttonText}</button>
	<div
		class="accordianContent"
		use:dropdown={{isOpen, duration: 200}}
	>
		<div class="wrapper">
			<slot />
		</div>
	</div>
</div>

<style>
	button {
		display: block;
		border: 0;
		width: 100%;
		text-align: left;
		/* border: solid 1px #333; */
		margin: 0;
    cursor: pointer;
    background-color: var(--dropdown-color);
	}

	span {
		margin-right: 5px;
		display: inline-block;
		transform: rotate(0.25turn);
		transition: transform 0.3s ease;
	}
	span.isOpen {
		transform: rotate(0.5turn);
	}
	.accordianContent {
		/* border-bottom: solid 1px #333; */
    margin-bottom: 1rem;
		border-top: 0;
	}
  .wrapper {
    padding: 20px;
  }
</style>
