const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/about/index.svelte"),
	() => import("../../../src/routes/blog/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/contact/index.ts
	[/^\/contact\/?$/],

	// src/routes/about/index.svelte
	[/^\/about\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/blog/index.svelte
	[/^\/blog\/?$/, [c[0], c[4]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];