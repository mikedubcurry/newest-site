<script lang="ts">
  import {createEventDispatcher} from 'svelte'
	export let visible: boolean;
  export let mobile: boolean

  const dispatch = createEventDispatcher();
</script>

<span class:visible class:mobile>
	<slot name="nav-links" />
  <span on:click={() => dispatch('menubtnchange')} class='spacer'></span>
	<slot name="other-links" />
</span>

<style>
  span {
    position: fixed;
    top: 20vh;
    left: -25% ;
    transition: all .3s ease;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .mobile {
    width: 150vw;
  }
  .visible {
    left: 0;
    width: 100vw;
  }
  .spacer {
    justify-self: center;
  }
</style>
