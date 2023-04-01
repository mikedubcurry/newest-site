<main>
  <slot />
</main>

<style>
  :global(body, html) {
    height: 100%;
  }
  main {
    max-width: 800px;
    margin: 0 auto;
    padding: .25rem;
  }

  @media (min-width: 800px) {
    main {
      padding: 0 1rem;
      max-width: 1000px;
    }
  }

  @media (min-width: 1000px) {
    main {
      padding: 0 2rem;
      max-width: 1500px;
    }
  }
</style>
