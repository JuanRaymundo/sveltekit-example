import { windi } from "svelte-windicss-preprocess";
import vercel from '@sveltejs/adapter-vercel';

export default {
  preprocess: [
	  windi({
			configPath: 'windi.config.js',
		}),
	],
  kit: {
    adapter: vercel(),
    target: '#svelte',
  },
};
