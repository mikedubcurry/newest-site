import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "../../src/hooks.ts";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\n\t\t<!-- <link rel=\"stylesheet\" href=\"app.css\"> -->\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-af95c3cb.js",
			css: ["/./_app/assets/start-a8cd1609.css"],
			js: ["/./_app/start-af95c3cb.js","/./_app/chunks/vendor-83b0353c.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'endpoint',
						pattern: /^\/$/,
						params: empty,
						load: () => import("../../src/routes/index.ts")
					},
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/blog\.json$/,
						params: empty,
						load: () => import("../../src/routes/blog/index.json.ts")
					},
		{
						type: 'page',
						pattern: /^\/blog\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/blog/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/blog\/([^/]+?)\.json$/,
						params: (m) => ({ slug: d(m[1])}),
						load: () => import("../../src/routes/blog/[slug].json.ts")
					},
		{
						type: 'page',
						pattern: /^\/blog\/([^/]+?)\/?$/,
						params: (m) => ({ slug: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/blog/[slug].svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/about/index.svelte": () => import("../../src/routes/about/index.svelte"),"src/routes/blog/index.svelte": () => import("../../src/routes/blog/index.svelte"),"src/routes/blog/[slug].svelte": () => import("../../src/routes/blog/[slug].svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-c35b7f45.js","css":["/./_app/assets/pages/__layout.svelte-8842b8bf.css"],"js":["/./_app/pages/__layout.svelte-c35b7f45.js","/./_app/chunks/vendor-83b0353c.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-8f6102d0.js","css":[],"js":["/./_app/error.svelte-8f6102d0.js","/./_app/chunks/vendor-83b0353c.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-c151fd6a.js","css":["/./_app/assets/pages/index.svelte-c847f821.css"],"js":["/./_app/pages/index.svelte-c151fd6a.js","/./_app/chunks/vendor-83b0353c.js"],"styles":null},"src/routes/about/index.svelte":{"entry":"/./_app/pages/about/index.svelte-954d6849.js","css":[],"js":["/./_app/pages/about/index.svelte-954d6849.js","/./_app/chunks/vendor-83b0353c.js"],"styles":null},"src/routes/blog/index.svelte":{"entry":"/./_app/pages/blog/index.svelte-f205e10b.js","css":["/./_app/assets/pages/blog/index.svelte-857aa109.css"],"js":["/./_app/pages/blog/index.svelte-f205e10b.js","/./_app/chunks/vendor-83b0353c.js"],"styles":null},"src/routes/blog/[slug].svelte":{"entry":"/./_app/pages/blog/[slug].svelte-e743ec46.js","css":[],"js":["/./_app/pages/blog/[slug].svelte-e743ec46.js","/./_app/chunks/vendor-83b0353c.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}