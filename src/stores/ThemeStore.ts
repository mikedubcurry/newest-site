import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let savedTheme = (browser && window.localStorage.getItem('theme')) || 'light';

export const themeStore = writable(savedTheme);

themeStore.subscribe((value) => {
  // this causes flash of light theme on page load
	if (browser) {
    document.body.dataset.theme = value;
    document.documentElement.style.setProperty('--theme-link', `var(--${value}-link)`)
    document.documentElement.style.setProperty('--theme-bg', `var(--${value}-bg)`)
    document.documentElement.style.setProperty('--theme-body', `var(--${value}-body)`)
    document.documentElement.style.setProperty('--theme-action', `var(--${value}-action)`)
	}
});
