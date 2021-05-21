import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import("@sveltejs/kit").Config} */
const config = {
	kit: {
		adapter: adapter({}),
		target: '#svelte',
	},
	preprocess: sveltePreprocess(),
};
export default config;